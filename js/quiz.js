/* ============================================================
   quiz.js  —  The Veterinary Biochemistry Quiz Engine
   ------------------------------------------------------------
   Features:
     - 540 curriculum-standard questions across Theory Units 1 to 3
     - Strict 2 : 1 : 1 ratio (90 MCQ : 45 TF : 45 FIB per unit)
     - 15 thematic sub-sections with dedicated module testing
     - Sequence Mode (curriculum order) vs. Shuffle Mode (randomised)
     - Difficulty filter (Foundational / Core UG / Rank-1 Classic)
     - Exam Mode: timed, no reveals, flag-for-review, submit paper
     - Per-question timing, flagging and a full answer sheet
     - Deep post-test analysis: unit, sub-section, format, difficulty,
       pacing, and a comparison against your previous attempts
     - Saved reports: reopen any of your last 20 tests, retry only
       the questions you got wrong
     - Spaced Repetition (Leitner) integration
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state

  var PASS_MARK = 50;       // VCI pass percentage

  /* Sub-section metadata for Veterinary Biochemistry Units 1 to 3 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "🔬", title: "Membranes, Transport & Buffers", desc: "Biological membranes, transport mechanisms, Donnan equilibrium, pH & Henderson-Hasselbalch" },
      { id: "u1-s2", icon: "🍬", title: "Carbohydrate Chemistry", desc: "Monosaccharides, amino sugars, disaccharides, polysaccharides & mucopolysaccharides" },
      { id: "u1-s3", icon: "🥑", title: "Lipid Chemistry & Prostaglandins", desc: "Simple, compound, derived lipids, lipoproteins, fat indices & prostaglandins" },
      { id: "u1-s4", icon: "🥩", title: "Amino Acids & Protein Chemistry", desc: "Amino acid classification, properties, peptide bonds, protein levels & properties" },
      { id: "u1-s5", icon: "🧬", title: "Nucleic Acids & Nucleotides", desc: "Purines, pyrimidines, nucleosides, nucleotides, DNA & RNA secondary structures" }
    ],
    "unit-2": [
      { id: "u2-s1", icon: "⚡", title: "Enzymes, Kinetics & Inhibition", desc: "Classification, coenzymes, active site, factors, inhibition types & allosterism" },
      { id: "u2-s2", icon: "🔥", title: "Biological Oxidation & ETC", desc: "Redox coenzymes, respiratory chain complexes, oxidative phosphorylation & uncouplers" },
      { id: "u2-s3", icon: "🍞", title: "Carbohydrate Metabolism", desc: "Glycolysis, Krebs cycle, HMP shunt, gluconeogenesis, Cori cycle & glycogen pathways" },
      { id: "u2-s4", icon: "🧈", title: "Lipid Metabolism & Ketogenesis", desc: "Beta-oxidation, ketogenesis, fatty acid synthase & lipid bioenergetics" },
      { id: "u2-s5", icon: "🔄", title: "Protein Metabolism & Urea Cycle", desc: "Transamination, deamination, decarboxylation, ammonia transport & urea cycle" },
      { id: "u2-s6", icon: "🧬", title: "Nucleic Acid Metabolism & Integration", desc: "Purine/pyrimidine synthesis & degradation, replication, transcription & regulation" }
    ],
    "unit-3": [
      { id: "u3-s1", icon: "🩸", title: "Disorders of Carbohydrate & Lipid Metabolism", desc: "Diabetes mellitus, bovine ketosis, pregnancy toxaemia, neonatal hypoglycaemia & dyslipidaemias" },
      { id: "u3-s2", icon: "🧪", title: "Clinical Enzymology & Organ Function Tests", desc: "Diagnostic isoenzymes, liver function tests, kidney function tests, BUN & creatinine" },
      { id: "u3-s3", icon: "🩺", title: "Acid-Base, Digestive & Fluid Balance", desc: "Acid-base disorders, anion gap, ruminal/digestive disorders, oxidative stress & fluid therapy" },
      { id: "u3-s4", icon: "💊", title: "Detoxification & Cytochrome P450", desc: "Xenobiotic biotransformation, Phase I (CYP450) and Phase II conjugation pathways" }
    ]
  };

  /* Every sub-section, flattened, so a report can name one without
     knowing which unit it came from. */
  var subById = (function () {
    var m = {};
    Object.keys(subSectionsByUnit).forEach(function (uid) {
      subSectionsByUnit[uid].forEach(function (s) {
        m[s.id] = { id: s.id, icon: s.icon, title: s.title, desc: s.desc, unitId: uid };
      });
    });
    return m;
  })();

  function subCount() { return Object.keys(subById).length; }

  function getSubSectionMeta(unitId, subId) {
    if (!subId || subId === "all") return null;
    return subById[subId] || null;
  }

  var DIFF_NAMES = { 1: "Foundational", 2: "Core UG", 3: "Rank-1 Classic" };
  var DIFF_STARS = { 1: "⭐", 2: "⭐⭐", 3: "⭐⭐⭐" };
  var FMT_NAMES = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" };
  var FMT_ICONS = { mcq: "🔘", tf: "⚖️", fib: "✍️" };

  function resetRun() {
    stopRun();
    run = null;
  }

  /* Called by the router when the student leaves the quiz section, so an exam
     timer or key listener can never keep running in the background. */
  function leave() {
    if (run && run.active) { accrueTime(); persistRun(); }
    stopRun();
    run = null;
  }

  /* ============================================================
     BUILDING A QUESTION SET
     ============================================================ */
  function bankFor(unitIds, formats, subSectionId, diffs) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        (b[f] || []).forEach(function (q, i) {
          if (!q || !q.q || !String(q.q).trim()) return;   // skip empty template rows
          if (subSectionId && subSectionId !== "all" && q.subSection !== subSectionId) return;
          var d = q.diff || 1;
          if (diffs && diffs.length && diffs.indexOf(d) === -1) return;
          out.push({
            key: uid + ":" + f + ":" + i,
            format: f,
            unitId: uid,
            subSection: q.subSection || null,
            q: q.q,
            o: q.o,
            a: q.a,
            a_display: q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a),
            e: q.e,
            topicId: q.topicId || null,
            diff: d
          });
        });
      });
    });
    return out;
  }

  function scopeUnits(kind, id) {
    if (kind === "unit") return [id];
    if (kind === "paper") {
      // Every unit — theory and practical — that belongs to this examination
      // paper. Units carry a `paper` field, so this stays correct if the
      // syllabus ever splits into more than one paper again.
      var ids = syllabus.allUnits.filter(function (u) { return u.paper === id; })
        .map(function (u) { return u.id; });
      if (ids.length) return ids;
      var p = (syllabus.meta.papers || []).filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; })
               : syllabus.theory.map(function (u) { return u.id; });
    }
    if (kind === "grand") return syllabus.theory.map(function (u) { return u.id; });
    if (kind === "practical") return syllabus.practical.map(function (u) { return u.id; });
    return [];
  }

  function paperName(id) {
    var p = (syllabus.meta.papers || []).filter(function (x) { return x.id === id; })[0];
    return p ? p.name : "Examination Paper";
  }

  function shuffle(a) {
    var copy = a.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  /* Sequence mode used to take the first N questions of the pool, so a 20-question
     Grand Test was 20 Unit-1 multiple choice questions and never touched the other
     units or formats — and a 10-question Unit test was 10 questions from that
     unit's first sub-section. This spreads the N across every unit, sub-section
     and format in the pool, proportionally, while keeping each group in
     curriculum order. */
  function pickSpread(pool, count) {
    if (count >= pool.length) return pool.slice(0);

    var order = {};                       // key -> original position, so the final
    pool.forEach(function (q, i) { order[q.key] = i; });   // sort stays O(n log n)

    // The allocation happens in two passes. Doing it in one pass over
    // unit|sub-section|format buckets looked tidier, but every bucket then had
    // the same fractional remainder, the tie-break always fell to whichever
    // format was listed first, and a 10-question test came out as 5 MCQ + 5 T/F
    // with no fill-in-the-blanks at all. Splitting by format first guarantees
    // the 2 : 1 : 1 ratio survives; the second pass spreads each format's share
    // across the units and sub-sections it covers.
    var out = [];
    var byFormat = bucket(pool, function (q) { return q.format; });
    var formatShares = allocate(byFormat, count);

    formatShares.forEach(function (fs) {
      if (!fs.take) return;
      var byModule = bucket(fs.items, function (q) { return q.unitId + "|" + (q.subSection || "-"); });
      allocate(byModule, fs.take).forEach(function (ms) {
        out = out.concat(ms.items.slice(0, ms.take));
      });
    });

    // Keep the original curriculum order of the pool
    return out.sort(function (a, b) { return order[a.key] - order[b.key]; });
  }

  /* Split a list into insertion-ordered buckets. */
  function bucket(items, keyFn) {
    var groups = [], index = {};
    items.forEach(function (q) {
      var k = keyFn(q);
      if (index[k] === undefined) { index[k] = groups.length; groups.push({ key: k, items: [] }); }
      groups[index[k]].items.push(q);
    });
    return groups;
  }

  /* Largest-remainder allocation: hand out `count` places across the groups in
     proportion to their size, so the takes always add up to exactly `count`. */
  function allocate(groups, count) {
    var pool = groups.reduce(function (n, g) { return n + g.items.length; }, 0);
    if (!pool) return groups.map(function (g) { return { key: g.key, items: g.items, take: 0 }; });

    var shares = groups.map(function (g) {
      var exact = count * g.items.length / pool;
      return { key: g.key, items: g.items, take: Math.min(g.items.length, Math.floor(exact)), rem: exact - Math.floor(exact) };
    });
    var used = shares.reduce(function (n, s) { return n + s.take; }, 0);

    // Biggest fractional remainder first; ties go to the larger group so the
    // extra place lands where there is most material to draw from.
    shares.slice().sort(function (a, b) {
      return (b.rem - a.rem) || (b.items.length - a.items.length);
    }).forEach(function (s) {
      if (used < count && s.take < s.items.length) { s.take++; used++; }
    });

    // Any leftover (groups that ran out) goes to whoever still has questions
    for (var pass = 0; used < count && pass < 60; pass++) {
      var moved = false;
      shares.forEach(function (s) {
        if (used < count && s.take < s.items.length) { s.take++; used++; moved = true; }
      });
      if (!moved) break;
    }
    return shares;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId).length;
  }

  /* Questions whose Leitner box is due AND that still exist in the bank.
     Without the second half, a due count could promise questions that the
     Smart Review screen then cannot find. */
  function dueQuestions() {
    var dueKeys = store.dueSrs();
    if (!dueKeys.length) return [];
    var lookup = {};
    dueKeys.forEach(function (k) { lookup[k] = true; });
    return bankFor(syllabus.allUnits.map(function (u) { return u.id; }), ["mcq", "tf", "fib"])
      .filter(function (q) { return lookup[q.key]; });
  }

  /* ============================================================
     ROUTER ENTRY POINT
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    // A saved report or a retry must be able to interrupt a finished run,
    // so these are checked before the "still running" shortcut.
    if (kind === "report") { renderSavedReport(params.b); return; }
    if (kind === "retry")  { retryWrong(params.b); return; }
    if (kind === "again")  { retakeReport(params.b); return; }

    if (run && run.active) { paintRun(); return; }
    if (kind === "resume") { if (resumeSavedRun()) return; location.hash = "#/quiz"; return; }

    if (!kind) { renderHub(); return; }
    if (kind === "unit")      { renderSetup("unit", params.b); return; }
    if (kind === "paper")     { renderSetup("paper", params.b); return; }
    if (kind === "grand")     { renderSetup("grand", null); return; }
    if (kind === "practical") { renderSetup("practical", null); return; }
    if (kind === "review")    { renderReview(); return; }
    renderHub();
  }

  /* ============================================================
     HUB
     ============================================================ */
  /* Banner offering to continue a test that was left unfinished
     (page refreshed, app closed, phone call in the middle of a paper). */
  function resumeBanner() {
    var saved = savedRun();
    if (!saved) return "";
    return '<a class="card resume-card" href="#/quiz/resume">' +
        '<div class="row items-center gap-3">' +
          '<span class="resume-card__icon">&#9654;</span>' +
          '<span>' +
            '<b>Continue your unfinished test</b>' +
            '<span class="small muted block">' + app.esc(saved.label || "Quiz") + ' — question ' +
              (Math.min(saved.i || 0, saved.keys.length - 1) + 1) + ' of ' + saved.keys.length +
              (saved.exam ? ' (Exam Mode)' : '') + '</span>' +
          '</span>' +
          '<span class="btn btn--primary btn--sm push">Resume</span>' +
        '</div>' +
      '</a>';
  }

  function renderHub() {
    resetRun();

    var theoryIds = syllabus.theory.map(function (u) { return u.id; });
    var pracIds = syllabus.practical.map(function (u) { return u.id; });
    var totalAll = countAvailable(theoryIds.concat(pracIds));
    var due = dueQuestions().length;
    var q = store.getQuiz();

    var unitRows = syllabus.theory.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      var subList = subSectionsByUnit[u.id] || [];
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">U' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' +
          (n ? '<b>' + n + ' questions</b> (' + subList.length + ' modular sub-sections • 2:1:1 ratio)' : 'No questions added yet') +
        '</span></span>' +
        '<span class="tlist__right">' +
          (rec ? '<span class="chip chip--ok">Best ' + rec.best + '%</span>' : '') +
          (n ? app.icon("chevron", "faint") : '') +
        '</span></a>';
    }).join("");

    var pracRows = syllabus.practical.map(function (u) {
      var n = countAvailable([u.id]);
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">P' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' + (n ? n + ' questions' : 'No questions added yet') + '</span></span>' +
        '<span class="tlist__right">' + (n ? app.icon("chevron", "faint") : '') + '</span></a>';
    }).join("");

    var annualIds = scopeUnits("paper", "annual");
    var annualHasPractical = annualIds.some(function (id) {
      return id.indexOf("prac-") === 0 && countAvailable([id]) > 0;
    });

    host.innerHTML =
      '<div class="pagehead quiz-hub-head">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent font-mono">🌟 ' + totalAll + ' Questions Bank</span>' +
          '<span class="chip chip--ok">Exact 2:1:1 Ratio (90 MCQ • 45 T/F • 45 FIB)</span>' +
          '<span class="chip">' + subCount() + ' Sub-sections</span>' +
        '</div>' +
        '<h1>' + app.icon("quiz") + ' Veterinary Biochemistry Examination Suite</h1>' +
        '<p class="lede">Test individual sub-sections, full units, paper-wise or grand exams. ' +
        'Choose between <b>Sequence Mode</b> (curriculum order) or <b>Shuffle Mode</b> (randomized), with instant feedback and Spaced Repetition queue.</p>' +
      '</div>' +

      resumeBanner() +

      (totalAll === 0
        ? '<div class="empty"><div class="empty__icon">' + app.icon("quiz") + '</div><h3>The question bank is empty</h3>' +
          '<p>Add questions in <b>data/data-quiz.JS</b>.</p></div>'
        : '') +

      '<h2 class="mt-8 flex items-center gap-2"><span>🎯</span> Comprehensive Mock Tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard(paperName("annual"), "Units 1, 2, 3" + (annualHasPractical ? " (Theory + Practical)" : " — Theory"),
                 countAvailable(annualIds), "#/quiz/paper/annual", false, "theory") +
        modeCard("Grand test", "All 3 theory units comprehensive", countAvailable(theoryIds), "#/quiz/grand", false, "trophy") +
        modeCard("Practical Lab", "All 3 practical units", countAvailable(pracIds), "#/quiz/practical", false, "practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true, "repeat") +
      '</div>' +

      recentReportsStrip() +

      '<h2 class="mt-12 flex items-center gap-2"><span>📚</span> Theory Units with Modular Sub-sections</h2>' +
      '<p class="small muted">Click any unit below to practice specific sub-sections or the full unit in Sequence or Shuffle mode.</p>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>🔬</span> Practical Diagnostic Units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';
  }

  /* Quick access to the answer sheets of recent tests, straight from the hub. */
  function recentReportsStrip() {
    var reports = (store.getReports ? store.getReports() : []).slice(-4).reverse();
    if (!reports.length) return "";
    return '<h2 class="mt-12 flex items-center gap-2"><span>📊</span> Your Recent Test Reports</h2>' +
      '<p class="small muted">Reopen the full answer sheet and analysis of any recent test.</p>' +
      '<div class="tlist mt-4">' +
        reports.map(function (r) {
          var p = app.pct(r.correct, r.total);
          return '<a class="tlist__row" href="#/quiz/report/' + r.id + '">' +
            '<span class="tlist__no">' + p + '%</span>' +
            '<span class="tlist__body"><span class="tlist__title">' + app.esc(r.label || "Quiz") + '</span>' +
            '<span class="tlist__sub">' + new Date(r.at).toLocaleString(undefined, {
              month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
            }) + ' · ' + r.correct + ' of ' + r.total + ' correct' + (r.exam ? ' · ⏱️ Exam Mode' : '') + '</span></span>' +
            '<span class="tlist__right"><span class="chip ' + toneFor(p) + '">' + verdictFor(p) + '</span>' +
              app.icon("chevron", "faint") + '</span>' +
          '</a>';
        }).join("") +
      '</div>';
  }

  function modeCard(title, sub, n, href, isReview, ico) {
    var disabled = !n;
    var iconHtml = ico ? app.icon(ico) : (isReview ? app.icon("repeat") : app.icon("quiz"));
    return '<a class="card card--link modecard' + (disabled ? ' is-disabled' : '') + '" href="' +
      (disabled ? '#/quiz' : href) + '">' +
      '<div class="row"><span class="card__title" style="display:flex;align-items:center;gap:6px;">' + iconHtml + ' ' + app.esc(title) + '</span>' +
      '<span class="chip push' + (n ? ' chip--accent' : '') + '">' + n + '</span></div>' +
      '<p class="card__desc">' + app.esc(sub) + '</p>' +
      (disabled ? '<p class="small faint mt-2">' +
        (isReview ? 'Nothing due — answer some questions first.' : 'No questions added yet.') + '</p>' : '') +
      '</a>';
  }

  /* ============================================================
     SETUP SCREEN WITH SUB-SECTION PICKER & SEQUENCE/SHUFFLE TOGGLE
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();

    if (kind === "unit" && !syllabus.unitById[id]) { renderHub(); return; }

    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? paperName(id)
        : kind === "grand" ? "Grand Test — All Theory Units" : "Practical Units";

    var state = {
      subSectionId: "all",
      orderMode: "sequence", // 'sequence' or 'shuffle'
      formats: ["mcq", "tf", "fib"],
      diffs: [1, 2, 3],
      count: 20,
      exam: false,
      minutes: 20
    };

    function updateView() {
      var pool = bankFor(unitIds, state.formats, state.subSectionId, state.diffs);
      var allPool = bankFor(unitIds, ["mcq", "tf", "fib"], state.subSectionId);

      var counts = { mcq: 0, tf: 0, fib: 0 };
      var diffCounts = { 1: 0, 2: 0, 3: 0 };
      allPool.forEach(function (q) { counts[q.format]++; diffCounts[q.diff] = (diffCounts[q.diff] || 0) + 1; });
      var maxN = pool.length;

      var presets = [10, 20, 30, 45, 90, maxN].filter(function (n, idx, arr) {
        return n > 0 && n <= maxN && arr.indexOf(n) === idx;
      });
      if (!presets.length) presets = [maxN];
      if (state.count > maxN || presets.indexOf(state.count) === -1) {
        state.count = presets[Math.min(1, presets.length - 1)] || maxN;
      }

      var subSecHtml = "";
      if (subSections.length > 0) {
        var allCount = bankFor(unitIds, ["mcq", "tf", "fib"], "all").length;
        subSecHtml =
          '<div class="setup__row subsec-selector-row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>📂</span> Choose Sub-section / Module</b>' +
              '<p class="small muted">Target a specific topic or practice all sub-sections in the unit.</p>' +
            '</div>' +
            '<div class="subsec-grid mt-3">' +
              '<button type="button" class="subsec-card' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<div class="subsec-card__head">' +
                  '<span class="subsec-card__icon">🌟</span>' +
                  '<span class="subsec-card__title">All Sub-sections (Full Unit)</span>' +
                  '<span class="chip chip--accent subsec-card__badge">' + allCount + ' Qs</span>' +
                '</div>' +
                '<p class="subsec-card__desc">Complete unit test covering all topics in rigorous 2:1:1 exam ratio.</p>' +
              '</button>' +
              subSections.map(function (sub) {
                var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                var active = state.subSectionId === sub.id ? ' is-active' : '';
                return '<button type="button" class="subsec-card' + active + '" data-sub="' + sub.id + '">' +
                  '<div class="subsec-card__head">' +
                    '<span class="subsec-card__icon">' + sub.icon + '</span>' +
                    '<span class="subsec-card__title">' + app.esc(sub.title) + '</span>' +
                    '<span class="chip subsec-card__badge">' + c + ' Qs</span>' +
                  '</div>' +
                  '<p class="subsec-card__desc">' + app.esc(sub.desc) + '</p>' +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>';
      }

      var currentSubMeta = getSubSectionMeta(id, state.subSectionId);
      var subHeadingBadge = currentSubMeta
        ? '<span class="chip chip--accent">' + currentSubMeta.icon + ' ' + app.esc(currentSubMeta.title) + '</span>'
        : '<span class="chip chip--accent">🌟 All ' + (subSections.length || '') + ' Sub-sections</span>';

      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
            subHeadingBadge +
            '<span class="chip font-mono">' + maxN + ' Available Questions</span>' +
          '</div>' +
          '<h1>' + app.esc(label) + '</h1>' +
          '<p class="lede">Configure your test parameters below. Pick question count, format filters, difficulty tier and test mode.</p>' +
        '</div>' +

        resumeBanner() +

        '<div class="card setup quiz-setup-card">' +
          subSecHtml +

          /* Order Mode Toggle (Sequence vs Shuffle) */
          '<div class="setup__row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>🔄</span> Question Order Mode</b>' +
              '<p class="small muted">Attempt questions sequentially according to syllabus or shuffle them randomly.</p>' +
            '</div>' +
            '<div class="quiz-mode-toggle" id="ordermodetoggle">' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'sequence' ? ' is-selected' : '') + '" data-mode="sequence">' +
                '<span class="pill-icon">📋</span>' +
                '<span class="pill-label">Sequence Mode</span>' +
                '<span class="pill-sub">Curriculum order</span>' +
              '</button>' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'shuffle' ? ' is-selected' : '') + '" data-mode="shuffle">' +
                '<span class="pill-icon">🔀</span>' +
                '<span class="pill-label">Shuffle Mode</span>' +
                '<span class="pill-sub">Randomized order</span>' +
              '</button>' +
            '</div>' +
          '</div>' +

          /* Format selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Question Formats (2 : 1 : 1 Ratio)</b>' +
              '<p class="small muted">Select any combination of question types.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="fmtbox">' +
              ['mcq', 'tf', 'fib'].map(function (f) {
                var count = counts[f];
                var checked = state.formats.indexOf(f) !== -1;
                return '<label class="check-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                  '<input type="checkbox" data-fmt="' + f + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                  '<span class="check-pill__icon">' + FMT_ICONS[f] + '</span>' +
                  '<span class="check-pill__label">' + (f === "fib" ? "Fill in the Blanks" : FMT_NAMES[f]) + '</span>' +
                  '<span class="chip chip--sm ml-1">' + count + '</span>' +
                '</label>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Difficulty selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Difficulty Tier</b>' +
              '<p class="small muted">Warm up on foundations, or go straight for the rank-1 classics.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="diffbox">' +
              [1, 2, 3].map(function (d) {
                var count = diffCounts[d] || 0;
                var checked = state.diffs.indexOf(d) !== -1;
                return '<label class="check-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                  '<input type="checkbox" data-diff="' + d + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                  '<span class="check-pill__icon">' + DIFF_STARS[d] + '</span>' +
                  '<span class="check-pill__label">' + DIFF_NAMES[d] + '</span>' +
                  '<span class="chip chip--sm ml-1">' + count + '</span>' +
                '</label>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Question count */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Number of Questions</b>' +
              '<p class="small muted">Choose your practice length.</p>' +
            '</div>' +
            '<div class="seg" id="segcount">' +
              presets.map(function (n) {
                var isSelected = state.count === n;
                return '<button type="button" class="seg__btn' + (isSelected ? ' is-on' : '') + '" data-count="' + n + '">' +
                  (n === maxN ? 'All (' + n + ')' : n) +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Exam Mode Toggle */
          '<div class="setup__row">' +
            '<div>' +
              '<b>⏱️ Exam Mode (Timed)</b>' +
              '<p class="small muted">Timed exam with no answer reveals until final submission — mirrors annual university exam.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Time Limit selector */
          '<div class="setup__row" id="timerow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b>Time Limit</b>' +
              '<p class="small muted">Automatic submission when clock reaches zero.</p>' +
            '</div>' +
            '<div class="seg" id="segtime">' +
              [10, 20, 30, 45, 60, 90].map(function (m) {
                return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Action Bar */
          '<div class="row mt-8 items-center">' +
            '<a class="btn btn--ghost" href="#/quiz">Cancel</a>' +
            '<div class="push"></div>' +
            '<button class="btn btn--primary btn--lg"' + (maxN ? '' : ' disabled') + ' id="startbtn">' +
              '🚀 Start Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
            '</button>' +
          '</div>' +
        '</div>';

      attachEvents();
    }

    function startLabel() {
      var btn = document.getElementById("startbtn");
      if (btn) btn.textContent = '🚀 Start Quiz (' + state.count + ' Questions)';
    }

    function attachEvents() {
      // Sub-section cards
      document.querySelectorAll(".subsec-card").forEach(function (card) {
        card.addEventListener("click", function () {
          state.subSectionId = card.getAttribute("data-sub");
          updateView();
        });
      });

      // Order Mode Toggle
      document.querySelectorAll("#ordermodetoggle .toggle-pill").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.orderMode = btn.getAttribute("data-mode");
          updateView();
        });
      });

      // Formats Checkboxes
      document.querySelectorAll("[data-fmt]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          var checkedFmts = Array.prototype.slice.call(document.querySelectorAll("[data-fmt]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return c.getAttribute("data-fmt"); });
          if (!checkedFmts.length) {
            app.toast("Select at least one question format");
            chk.checked = true;
            return;
          }
          state.formats = checkedFmts;
          updateView();
        });
      });

      // Difficulty Checkboxes
      document.querySelectorAll("[data-diff]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          var checkedDiffs = Array.prototype.slice.call(document.querySelectorAll("[data-diff]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return parseInt(c.getAttribute("data-diff"), 10); });
          if (!checkedDiffs.length) {
            app.toast("Select at least one difficulty tier");
            chk.checked = true;
            return;
          }
          state.diffs = checkedDiffs;
          updateView();
        });
      });

      // Question count seg
      document.querySelectorAll("#segcount .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          document.querySelectorAll("#segcount .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
          startLabel();
        });
      });

      // Exam Mode
      var examChk = document.getElementById("exammode");
      if (examChk) {
        examChk.addEventListener("change", function (e) {
          state.exam = e.target.checked;
          var tRow = document.getElementById("timerow");
          if (tRow) tRow.hidden = !e.target.checked;
        });
      }

      // Time seg
      document.querySelectorAll("#segtime .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          document.querySelectorAll("#segtime .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
        });
      });

      // Start Button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var rawPool = bankFor(unitIds, state.formats, state.subSectionId, state.diffs);
          if (!rawPool.length) {
            app.toast("No questions available for this selection");
            return;
          }

          var finalQuestions = state.orderMode === "shuffle"
            ? shuffle(rawPool).slice(0, state.count)
            : pickSpread(rawPool, state.count);   // curriculum order, spread across units and formats

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) runLabel = subMeta.icon + " " + subMeta.title;

          start(
            finalQuestions,
            kind + (id ? ":" + id : "") + (state.subSectionId !== "all" ? ":" + state.subSectionId : ""),
            runLabel,
            state.exam,
            state.minutes,
            state.orderMode,
            state.subSectionId,
            id
          );
        });
      }
    }

    updateView();
  }

  /* ============================================================
     SMART REVIEW
     ============================================================ */
  function renderReview() {
    resetRun();
    var pool = dueQuestions();

    if (!pool.length) {
      host.innerHTML =
        '<div class="pagehead"><span class="eyebrow">Spaced repetition</span><h1>Smart Review</h1></div>' +
        '<div class="empty"><div class="empty__icon">✅</div><h3>Nothing due right now</h3>' +
        '<p>Questions you answer wrongly come back tomorrow, then after 2, 4, 8 and 16 days ' +
        'as you keep getting them right. Take a quiz first and this queue will fill itself.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the quiz hub</a></div>';
      return;
    }

    start(shuffle(pool), "review", "Smart Review", false, 0, "shuffle", "all", null);
  }

  /* ============================================================
     RUNNING A QUIZ
     ============================================================ */
  function start(questions, scope, label, exam, minutes, orderMode, subSectionId, unitId) {
    stopRun();
    run = {
      active: true,
      qs: questions,
      i: 0,
      answers: new Array(questions.length).fill(null),
      checked: new Array(questions.length).fill(false), // per question, so Previous/Next never wipes it
      graded: new Array(questions.length).fill(false),  // each question feeds the SRS box only once
      flags: new Array(questions.length).fill(false),   // marked for review
      times: new Array(questions.length).fill(0),       // milliseconds spent on each question
      _tickAt: Date.now(),
      scope: scope,
      label: label,
      orderMode: orderMode || "sequence",
      subSectionId: subSectionId || "all",
      unitId: unitId || (questions[0] ? questions[0].unitId : null),
      exam: !!exam,
      minutes: exam ? minutes : 0,
      endsAt: exam ? Date.now() + minutes * 60000 : 0,
      startedAt: Date.now(),
      timer: null,
      streak: 0
    };
    startTimer();
    persistRun();
    paintRun();
  }

  function startTimer() {
    if (!run) return;
    var id = setInterval(function () {
      if (!run || !run.active) { clearInterval(id); return; }
      if (run.exam) {
        if (Date.now() >= run.endsAt) { clearInterval(id); finish(true); return; }
        var t = document.getElementById("qtimer");
        if (t) {
          var left = run.endsAt - Date.now();
          t.textContent = fmtTime(left);
          // Last minute turns red so it cannot be missed.
          t.className = "chip " + (left <= 60000 ? "chip--danger" : left <= 300000 ? "chip--warn" : "chip--subtle") + " font-mono";
        }
      } else {
        var e = document.getElementById("qelapsed");
        if (e) e.textContent = fmtTime(Date.now() - run.startedAt);
      }
    }, 1000);
    run.timer = id;
  }

  /* Stop every timer and key listener this run owns. Called before a new run starts,
     when the test is quit or finished, and when the student navigates away. */
  function stopRun() {
    if (!run) return;
    if (run.timer) { clearInterval(run.timer); run.timer = null; }
    if (run._keyHandler) { window.removeEventListener("keydown", run._keyHandler); run._keyHandler = null; }
  }

  /* Move the stopwatch reading onto the question that is currently open. */
  function accrueTime() {
    if (!run || !run.active) return;
    var now = Date.now();
    if (run._tickAt) {
      if (!run.times) run.times = new Array(run.qs.length).fill(0);
      var spent = now - run._tickAt;
      // A tab left open overnight must not record eight hours on one question.
      if (spent > 0 && spent < 10 * 60000) run.times[run.i] = (run.times[run.i] || 0) + spent;
    }
    run._tickAt = now;
  }

  /* ============================================================
     SAVING AN UNFINISHED RUN (survives a refresh or app restart)
     ============================================================ */
  function questionByKey(key) {
    var parts = String(key).split(":");
    if (parts.length !== 3) return null;
    var bank = (window.quizBank || {})[parts[0]];
    var list = bank && bank[parts[1]];
    var idx = parseInt(parts[2], 10);
    var raw = list && list[idx];
    if (!raw || !raw.q || !String(raw.q).trim()) return null;
    return {
      key: key,
      format: parts[1],
      unitId: parts[0],
      subSection: raw.subSection || null,
      q: raw.q,
      o: raw.o,
      a: raw.a,
      a_display: raw.a_display || (Array.isArray(raw.a) ? raw.a[0] : raw.a),
      e: raw.e,
      topicId: raw.topicId || null,
      diff: raw.diff || 1
    };
  }

  function persistRun() {
    if (!run || !run.active || !store.saveQuizRun) return;
    store.saveQuizRun({
      at: Date.now(),
      keys: run.qs.map(function (q) { return q.key; }),
      answers: run.answers,
      checked: run.checked,
      graded: run.graded,
      flags: run.flags,
      times: run.times,
      i: run.i,
      scope: run.scope,
      label: run.label,
      orderMode: run.orderMode,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      exam: run.exam,
      minutes: run.minutes,
      endsAt: run.endsAt,
      startedAt: run.startedAt,
      streak: run.streak
    });
  }

  function savedRun() {
    if (!store.getQuizRun) return null;
    var s = store.getQuizRun();
    if (!s || !s.keys || !s.keys.length) return null;
    // An exam whose clock ran out while the app was closed cannot be resumed.
    if (s.exam && s.endsAt && Date.now() >= s.endsAt) { store.clearQuizRun(); return null; }
    return s;
  }

  function resumeSavedRun() {
    var s = savedRun();
    if (!s) return false;
    var qs = s.keys.map(questionByKey);
    if (qs.some(function (q) { return !q; })) {   // the question bank changed under us
      store.clearQuizRun();
      app.toast("That saved test no longer matches the question bank");
      return false;
    }
    stopRun();
    run = {
      active: true, qs: qs, i: Math.min(s.i || 0, qs.length - 1),
      answers: s.answers || new Array(qs.length).fill(null),
      checked: s.checked || new Array(qs.length).fill(false),
      graded: s.graded || new Array(qs.length).fill(false),
      flags: s.flags || new Array(qs.length).fill(false),
      times: s.times || new Array(qs.length).fill(0),
      _tickAt: Date.now(),
      scope: s.scope, label: s.label, orderMode: s.orderMode, subSectionId: s.subSectionId,
      unitId: s.unitId, exam: !!s.exam, minutes: s.minutes || 0, endsAt: s.endsAt || 0,
      startedAt: s.startedAt || Date.now(), timer: null, streak: s.streak || 0
    };
    startTimer();
    paintRun();
    return true;
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : String(m).padStart(2, "0")) +
      ":" + String(sec).padStart(2, "0");
  }

  /* Short human duration for the analysis tables: "4s", "1m 12s". */
  function fmtDur(ms) {
    var s = Math.round((ms || 0) / 1000);
    if (s < 60) return s + "s";
    return Math.floor(s / 60) + "m " + (s % 60) + "s";
  }

  function isAnswered(v) {
    return v !== null && v !== undefined && String(v).trim() !== "";
  }

  function answeredCount() {
    return run.answers.filter(isAnswered).length;
  }

  function toneFor(p) {
    return p >= 75 ? "chip--ok" : p >= PASS_MARK ? "chip--warn" : "chip--danger";
  }

  function verdictFor(p) {
    return p >= 85 ? "Rank 1 Distinction"
      : p >= 70 ? "Strong First Class"
      : p >= PASS_MARK ? "Passing Grade"
      : "Needs Revision";
  }

  /* ============================================================
     PAINTING THE CURRENT QUESTION
     ============================================================ */
  function paintRun() {
    if (!run || !run.active) return;
    run._tickAt = run._tickAt || Date.now();

    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var locked = !!run.checked[run.i];        // answered and already marked
    var showFeedback = !run.exam && locked;   // practice mode shows the answer straight away

    var body;
    if (q.format === "mcq") {
      body = '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (showFeedback) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCDEF".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span>' +
          (showFeedback && i === q.a ? '<span class="opt__state">&#10003;</span>' : '') +
          (showFeedback && given === i && i !== q.a ? '<span class="opt__state">&#10007;</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="opts opts--2">' + [true, false].map(function (v) {
        var cls = "opt opt--tf";
        if (given === v) cls += " is-picked";
        if (showFeedback) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span>' +
          (showFeedback && v === q.a ? '<span class="opt__state">&#10003;</span>' : '') +
          (showFeedback && given === v && v !== q.a ? '<span class="opt__state">&#10007;</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else {
      // Fill in the blanks
      body = '<div class="fib-card">' +
        '<div class="fib-input-wrap">' +
          '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here..." autocomplete="off" autocorrect="off" spellcheck="false" ' +
          'value="' + app.esc(isAnswered(given) ? String(given) : "") + '"' + (showFeedback ? ' disabled' : '') + '>' +
          (!showFeedback
            ? '<button type="button" class="btn btn--primary" id="fibsubmit">' + (run.exam ? 'Save' : 'Check') + '</button>'
            : '') +
        '</div>' +
        (showFeedback
          ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
              '<span class="badge">' + (isCorrect(q, given) ? '&#10003; Correct' : '&#10007; Incorrect') + '</span>' +
              '<span class="label"><b>Standard Answer:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
            '</div>'
          : '') +
        '</div>';
    }

    var answered = answeredCount();

    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent"><span class="qicon">' + subMeta.icon + '</span> ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = '<span class="chip ' + (q.diff === 3 ? 'chip--warn' : 'chip--subtle') + '">' +
      DIFF_STARS[q.diff] + ' ' + DIFF_NAMES[q.diff] + '</span>';

    var orderBadge = run.orderMode === "sequence"
      ? '<span class="chip chip--subtle">📋 Sequence Mode</span>'
      : '<span class="chip chip--subtle">🔀 Shuffle Mode</span>';

    var flagged = !!run.flags[run.i];
    var lastOne = run.i === run.qs.length - 1;

    // In Exam Mode nothing is revealed, so every question needs a way forward —
    // including fill-in-the-blank questions, which previously showed no button
    // at all and trapped the student on that question.
    var hideNav = (q.format === "fib" && !run.exam && !locked);
    var primaryBtn = hideNav
      ? ''   // practice mode: the Check button next to the input comes first
      : (lastOne
        ? '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; See Analysis 🏆</button>'
        : '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question →</button>');

    host.innerHTML =
      '<div class="quizrun animate-fade-in">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Quit</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          orderBadge +
          '<div class="push"></div>' +
          (run.streak >= 2 ? '<span class="chip chip--accent streak-badge">🔥 Streak ' + run.streak + '</span>' : '') +
          '<button type="button" class="btn btn--sm' + (flagged ? ' btn--primary' : '') + '" id="flagbtn" ' +
            'title="Mark this question for review (F)">' + (flagged ? '🚩 Flagged' : '⚑ Flag') + '</button>' +
          (run.exam
            ? '<span class="chip chip--subtle font-mono" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>'
            : '<span class="chip chip--subtle font-mono" id="qelapsed">' + fmtTime(Date.now() - run.startedAt) + '</span>') +
          '<span class="chip font-mono">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        '<div class="bar bar--lg mt-3"><div class="bar__fill" style="width:' +
          (((run.i + 1) / run.qs.length) * 100) + '%"></div></div>' +

        paletteHtml() +

        '<div class="card quizcard mt-5">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' + FMT_NAMES[q.format] + '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
          '</div>' +

          '<h2 class="quizcard__q mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          (showFeedback && q.e
            ? '<div class="quiz-explanation-box mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="quiz-explanation-box__head">' +
                  '<span>' + (isCorrect(q, given) ? '🎉 Excellent! Correct Answer' : '💡 Explanation & High-Yield Key Note') + '</span>' +
                '</div>' +
                '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm btn--ghost mt-2" href="#/topic/' + q.topicId + '">📖 Read Full Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        '<div class="row row--wrap mt-6 items-center">' +
          '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>← Previous</button>' +
          '<div class="push"></div>' +
          '<span class="small faint mr-3">' + answered + ' of ' + run.qs.length + ' answered</span>' +
          primaryBtn +
        '</div>' +

        (run.exam
          ? '<div class="row mt-4"><button class="btn btn--block" id="submitbtn">Submit Paper Now</button></div>'
          : '') +

        '<p class="small faint mt-4 text-center quizrun__hint">' +
          'Keyboard: <b>1–4</b> or <b>A–D</b> to answer · <b>T</b> / <b>F</b> for true-false · ' +
          '<b>←</b> <b>→</b> to move · <b>F</b> to flag · <b>Enter</b> for next' +
        '</p>' +
      '</div>';

    wireRun(q);
  }

  /* Question navigator — tap any number to jump; the colours show what is done. */
  function paletteHtml() {
    return '<div class="qpalette" id="qpalette">' + run.qs.map(function (q, i) {
      var cls = "qpalette__dot";
      if (i === run.i) cls += " is-current";
      if (run.checked[i] && !run.exam) cls += isCorrect(q, run.answers[i]) ? " is-right" : " is-wrong";
      else if (isAnswered(run.answers[i])) cls += " is-answered";
      if (run.flags[i]) cls += " is-flagged";
      return '<button type="button" class="' + cls + '" data-jump="' + i + '" ' +
        'aria-label="Question ' + (i + 1) + (run.flags[i] ? ', flagged' : '') + '">' + (i + 1) + '</button>';
    }).join("") + '</div>';
  }

  function isCorrect(q, given) {
    if (!q) return false;
    if (!isAnswered(given)) return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;
    // FIB checking: compare against every acceptable answer
    var norm = normAnswer(given);
    var accepted = Array.isArray(q.a) ? q.a : [q.a];
    return accepted.some(function (acc) { return normAnswer(acc) === norm; });
  }

  /* Fill-in-the-blank marking should forgive spacing, case, and the trailing
     full stop a student types out of habit — but nothing more than that. */
  function normAnswer(v) {
    return String(v == null ? "" : v)
      .trim().toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.,;:!]+$/, "");
  }

  /* Record an answer. In practice mode a single tap also marks it and shows the
     explanation straight away — there is no separate save step. */
  function submitAnswer(value) {
    var q = run.qs[run.i];
    if (run.checked[run.i] && !run.exam) return;   // already marked; use Previous / Next to move
    accrueTime();
    run.answers[run.i] = value;

    if (!run.exam) {
      run.checked[run.i] = true;
      var ok = isCorrect(q, value);
      if (!run.graded[run.i]) {
        store.gradeSrs(q.key, ok);
        run.graded[run.i] = true;
      }
      if (ok) {
        run.streak = (run.streak || 0) + 1;
        if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row!");
        else if (run.streak === 5 && app.popMilestone) app.popMilestone("🚀 5 streak — unstoppable!");
        else if (run.streak === 7 && app.popMilestone) app.popMilestone("⚡ 7 straight — pure genius!");
        else if (run.streak === 10 && app.popMilestone) app.popMilestone("👑 10 streak — Master Biochemist!");
      } else {
        run.streak = 0;
      }
    }
    persistRun();
    paintRun();
    if (!run.exam && isCorrect(q, value) && app.burstConfetti) {
      var anchor = document.querySelector(".opt.is-right") || document.querySelector(".quizcard");
      if (anchor) app.burstConfetti(anchor);
    }
  }

  function goTo(index) {
    if (!run || index < 0 || index >= run.qs.length) return;
    if (index === run.i) return;
    accrueTime();
    run.i = index;
    persistRun();
    paintRun();
  }

  function toggleFlag() {
    if (!run) return;
    run.flags[run.i] = !run.flags[run.i];
    persistRun();
    paintRun();
  }

  function wireRun(q) {
    // A single tap on any option selects it (and marks it, outside exam mode)
    document.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var raw = b.getAttribute("data-pick");
        submitAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
      });
    });

    // Question navigator
    document.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        goTo(parseInt(b.getAttribute("data-jump"), 10));
      });
    });

    function submitFib() {
      var input = document.getElementById("fibinput");
      var val = input ? input.value : run.answers[run.i];
      if (!isAnswered(val)) { app.toast("Please type your answer first"); return; }
      submitAnswer(val);
    }

    // FIB input
    var fib = document.getElementById("fibinput");
    if (fib) {
      if (!run.checked[run.i]) setTimeout(function () { fib.focus(); }, 50);
      fib.addEventListener("input", function () {
        run.answers[run.i] = fib.value;
      });
      fib.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); submitFib(); }
      });
    }

    var fibSubmit = document.getElementById("fibsubmit");
    if (fibSubmit) fibSubmit.addEventListener("click", submitFib);

    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () { goTo(run.i + 1); });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () { goTo(run.i - 1); });

    var flagBtn = document.getElementById("flagbtn");
    if (flagBtn) flagBtn.addEventListener("click", toggleFlag);

    var fin = document.getElementById("finishbtn");
    if (fin) fin.addEventListener("click", function () { confirmFinish(); });

    var sub = document.getElementById("submitbtn");
    if (sub) sub.addEventListener("click", function () { confirmFinish(); });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (confirm("Quit this test? Your answers so far will not be added to the dashboard.")) {
        stopRun();
        if (store.clearQuizRun) store.clearQuizRun();
        resetRun();
        location.hash = "#/quiz";
      }
    });

    // Keyboard: 1-4 / A-D for MCQ, T / F for True-False, arrows to move,
    // F to flag, Enter for next.
    function handleKey(e) {
      if (!run || !run.active) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      var tag = e.target && e.target.tagName;
      var typing = tag === "INPUT" || tag === "TEXTAREA" || (e.target && e.target.isContentEditable);
      var cur = run.qs[run.i];
      var locked = run.checked[run.i] && !run.exam;

      if (!typing) {
        if (!locked) {
          if (cur.format === "mcq") {
            var map = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3, "A": 0, "B": 1, "C": 2, "D": 3 };
            if (map[e.key] !== undefined && map[e.key] < (cur.o || []).length) {
              e.preventDefault();
              submitAnswer(map[e.key]);
              return;
            }
          } else if (cur.format === "tf") {
            if (e.key === "t" || e.key === "T" || e.key === "1") { e.preventDefault(); submitAnswer(true); return; }
            if (e.key === "f" || e.key === "F" || e.key === "2") { e.preventDefault(); submitAnswer(false); return; }
          }
        }
        if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFlag(); return; }
      }

      if (e.key === "ArrowRight") { e.preventDefault(); goTo(run.i + 1); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(run.i - 1); return; }
      if (typing) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var btn = document.getElementById("nextbtn") || document.getElementById("finishbtn");
        if (btn) btn.click();
      }
    }

    if (run._keyHandler) window.removeEventListener("keydown", run._keyHandler);
    run._keyHandler = handleKey;
    window.addEventListener("keydown", run._keyHandler);
  }

  function confirmFinish() {
    var left = run.qs.length - answeredCount();
    var flagged = run.flags.filter(Boolean).length;
    var msg = "";
    if (left > 0) msg += left + " question" + (left === 1 ? " is" : "s are") + " still unanswered. ";
    if (flagged > 0) msg += flagged + " question" + (flagged === 1 ? " is" : "s are") + " flagged for review. ";
    if (msg && !confirm(msg + "Finish anyway?")) return;
    finish(false);
  }

  /* ============================================================
     FINISHING — build the report, save it, then show the analysis
     ============================================================ */
  function finish(timedOut) {
    accrueTime();
    stopRun();
    if (store.clearQuizRun) store.clearQuizRun();

    var correct = 0;
    var formatStats = { mcq: { total: 0, right: 0 }, tf: { total: 0, right: 0 }, fib: { total: 0, right: 0 } };
    var units = {}, topics = {}, subs = {}, diffs = {};

    run.qs.forEach(function (q, i) {
      var ok = isCorrect(q, run.answers[i]);
      if (ok) correct++;

      formatStats[q.format].total++;
      if (ok) formatStats[q.format].right++;

      if (q.unitId) {
        units[q.unitId] = units[q.unitId] || { total: 0, right: 0 };
        units[q.unitId].total++; if (ok) units[q.unitId].right++;
      }
      if (q.topicId) {
        topics[q.topicId] = topics[q.topicId] || { total: 0, right: 0 };
        topics[q.topicId].total++; if (ok) topics[q.topicId].right++;
      }
      if (q.subSection) {
        subs[q.subSection] = subs[q.subSection] || { total: 0, right: 0 };
        subs[q.subSection].total++; if (ok) subs[q.subSection].right++;
      }
      diffs[q.diff] = diffs[q.diff] || { total: 0, right: 0 };
      diffs[q.diff].total++; if (ok) diffs[q.diff].right++;

      // Exam mode grades the Leitner boxes only at submission, because nothing
      // was revealed during the paper.
      if (run.exam) store.gradeSrs(q.key, ok);
    });

    var total = run.qs.length;
    var seconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));
    var mins = Math.max(1, Math.round(seconds / 60));

    var report = {
      id: "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      exam: !!run.exam,
      timedOut: !!timedOut,
      orderMode: run.orderMode,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      total: total,
      correct: correct,
      attempted: run.answers.filter(isAnswered).length,
      seconds: seconds,
      minutes: mins,
      keys: run.qs.map(function (q) { return q.key; }),
      answers: run.answers.slice(0),
      times: (run.times || []).slice(0),
      flags: (run.flags || []).slice(0)
    };

    store.saveAttempt({
      at: report.at,
      reportId: report.id,
      scope: report.scope,
      label: report.label,
      total: total,
      correct: correct,
      attempted: report.attempted,
      exam: report.exam,
      timedOut: report.timedOut,
      orderMode: report.orderMode,
      subSectionId: report.subSectionId,
      minutes: mins,
      seconds: seconds,
      formats: formatStats,
      units: units,
      topics: topics,
      subs: subs,
      diffs: diffs
    });

    if (store.saveReport) store.saveReport(report);

    resetRun();
    paintReport(report, true);
  }

  /* ============================================================
     REPORT — the post-test analysis screen
     ------------------------------------------------------------
     Everything here is recomputed from the saved answer sheet and
     the question bank, so a report opened three weeks later shows
     exactly what it showed the moment the paper was submitted.
     ============================================================ */

  function renderSavedReport(id) {
    resetRun();
    var report = store.getReport ? store.getReport(id) : null;
    if (!report) {
      host.innerHTML =
        '<div class="pagehead"><a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
        '<h1 class="mt-3">Report not found</h1></div>' +
        '<div class="empty"><div class="empty__icon">📄</div><h3>That test report is no longer stored</h3>' +
        '<p>Only your last 20 test reports are kept on this device.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Back to the quiz hub</a></div>';
      return;
    }
    paintReport(report, false);
  }

  /* Rebuild the per-question rows of a report from the bank. */
  function hydrate(report) {
    return report.keys.map(function (k, i) {
      var q = questionByKey(k);
      return {
        i: i,
        q: q,
        given: report.answers ? report.answers[i] : null,
        time: report.times ? (report.times[i] || 0) : 0,
        flagged: report.flags ? !!report.flags[i] : false,
        ok: q ? isCorrect(q, report.answers ? report.answers[i] : null) : false,
        skipped: !isAnswered(report.answers ? report.answers[i] : null)
      };
    }).filter(function (r) { return !!r.q; });
  }

  function paintReport(report, isFresh) {
    var rows = hydrate(report);
    var total = rows.length || report.total || 0;
    var correct = rows.filter(function (r) { return r.ok; }).length;
    var wrong = rows.filter(function (r) { return !r.ok && !r.skipped; }).length;
    var skipped = rows.filter(function (r) { return r.skipped; }).length;
    var flagged = rows.filter(function (r) { return r.flagged; }).length;
    var percent = app.pct(correct, total);
    var verdict = verdictFor(percent);
    var chipCls = toneFor(percent);

    var timed = rows.filter(function (r) { return r.time > 0; });
    var timeSum = timed.reduce(function (n, r) { return n + r.time; }, 0);
    var avgMs = timed.length ? Math.round(timeSum / timed.length) : 0;
    var slowest = timed.slice().sort(function (a, b) { return b.time - a.time; })[0] || null;

    // Grouped breakdowns
    var byFormat = groupBy(rows, function (r) { return r.q.format; });
    var byUnit = groupBy(rows, function (r) { return r.q.unitId; });
    var bySub = groupBy(rows.filter(function (r) { return r.q.subSection; }), function (r) { return r.q.subSection; });
    var byDiff = groupBy(rows, function (r) { return String(r.q.diff); });

    // Pacing insight: wrong answers that were rushed (< 8 seconds of thought)
    var rushed = rows.filter(function (r) { return !r.ok && !r.skipped && r.time > 0 && r.time < 8000; }).length;

    var history = comparisonFor(report);

    host.innerHTML =
      '<div class="report animate-scale-up" id="quizreport">' +

        reportHeadHtml(report, percent, correct, total, verdict, chipCls) +

        (report.timedOut
          ? '<div class="callout mb-6"><div class="callout__title">Time Expired</div>' +
            'Your examination paper was submitted automatically when the countdown reached zero.</div>'
          : '') +

        /* --- Headline numbers --- */
        '<div class="grid grid--5 mt-6 text-left">' +
          app.statCard("Score", correct + " / " + total, percent + "% overall", "target") +
          app.statCard("Correct", correct, pctOf(correct, total) + " of the paper", "check") +
          app.statCard("Incorrect", wrong, pctOf(wrong, total) + " of the paper", "crossCircle") +
          app.statCard("Skipped", skipped, skipped ? "left unanswered" : "nothing left blank", "help") +
          app.statCard("Time taken", fmtDur(report.seconds * 1000), avgMs ? fmtDur(avgMs) + " per question" : "—", "clock") +
        '</div>' +

        /* --- Verdict / examiner's note --- */
        examinerNoteHtml(percent, skipped, rushed, flagged, bySub, history) +

        /* --- Comparison against previous attempts --- */
        (history ? historyHtml(history, percent) : '') +

        /* --- Breakdown grids --- */
        '<div class="grid grid--2 mt-8">' +
          breakdownCard("Accuracy by question type", "Where marks are being lost in the format itself.",
            ["mcq", "tf", "fib"].filter(function (f) { return byFormat[f]; }).map(function (f) {
              return { label: FMT_ICONS[f] + " " + FMT_NAMES[f], rows: byFormat[f] };
            })) +
          breakdownCard("Accuracy by difficulty tier", "Foundational slips matter more than rank-1 misses.",
            ["1", "2", "3"].filter(function (d) { return byDiff[d]; }).map(function (d) {
              return { label: DIFF_STARS[d] + " " + DIFF_NAMES[d], rows: byDiff[d] };
            })) +
        '</div>' +

        '<div class="grid grid--2 mt-5">' +
          breakdownCard("Accuracy by unit", "Which unit of the VCI syllabus is carrying you.",
            Object.keys(byUnit).map(function (u) {
              return {
                label: (syllabus.unitById[u] || {}).short || u,
                rows: byUnit[u],
                href: "#/quiz/unit/" + u
              };
            })) +
          breakdownCard("Accuracy by sub-section", "The real revision list — weakest module first.",
            Object.keys(bySub).map(function (s) {
              var meta = subById[s] || { icon: "📘", title: s, unitId: null };
              return {
                label: meta.icon + " " + meta.title,
                rows: bySub[s],
                href: meta.unitId ? "#/quiz/unit/" + meta.unitId : null
              };
            }).sort(function (a, b) { return accOf(a.rows) - accOf(b.rows); })) +
        '</div>' +

        /* --- Pacing --- */
        pacingHtml(rows, avgMs, slowest, rushed) +

        /* --- Answer sheet --- */
        answerSheetHtml(rows, correct, wrong, skipped, flagged) +

        /* --- Actions --- */
        '<div class="report-actions row row--wrap mt-12 gap-3" style="justify-content:center">' +
          (wrong + skipped
            ? '<a class="btn btn--primary btn--lg" href="#/quiz/retry/' + report.id + '">🎯 Retry the ' + (wrong + skipped) + ' I missed</a>'
            : '') +
          '<a class="btn btn--lg" href="#/quiz/again/' + report.id + '">🔁 Retake this exact test</a>' +
          '<a class="btn btn--lg" href="#/quiz/review">🧠 Smart Review queue</a>' +
          '<a class="btn btn--lg" href="#/dashboard">📊 My Dashboard</a>' +
          '<a class="btn btn--lg btn--ghost" href="#/quiz">Quiz Hub</a>' +
          '<button class="btn btn--lg btn--ghost" id="printreport">🖨️ Print / Save PDF</button>' +
        '</div>' +
      '</div>';

    wireReport();

    if (isFresh && percent >= 75 && app.burstConfetti) {
      setTimeout(function () {
        var ring = document.querySelector('.result__ring');
        if (ring) app.burstConfetti(ring);
        if (app.popMilestone) app.popMilestone("🏆 " + verdict + ": " + percent + "%!");
      }, 250);
    }
  }

  function reportHeadHtml(report, percent, correct, total, verdict, chipCls) {
    var when = new Date(report.at);
    return '<div class="report__head">' +
      '<div class="row row--wrap items-center gap-2 mb-4">' +
        '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
        '<span class="chip">' + app.esc(report.label || "Quiz") + '</span>' +
        (report.exam ? '<span class="chip chip--warn">⏱️ Exam Mode · ' + report.minutes + ' min limit</span>' : '') +
        '<span class="chip chip--subtle">' + (report.orderMode === "sequence" ? '📋 Sequence' : '🔀 Shuffle') + '</span>' +
        '<span class="chip chip--subtle font-mono">' + when.toLocaleString(undefined, {
          day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit"
        }) + '</span>' +
      '</div>' +

      '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
      '<h1 class="mt-6 text-center">' + correct + ' out of ' + total + ' Correct</h1>' +
      '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
        '<span class="chip ' + chipCls + ' font-bold">' + verdict + '</span>' +
        '<span class="chip ' + (percent >= PASS_MARK ? 'chip--ok' : 'chip--danger') + '">' +
          (percent >= PASS_MARK ? '✔ Above the ' + PASS_MARK + '% pass mark' : '✖ Below the ' + PASS_MARK + '% pass mark') +
        '</span>' +
      '</div>' +
    '</div>';
  }

  /* A short written verdict, the way an examiner would put it. */
  function examinerNoteHtml(percent, skipped, rushed, flagged, bySub, history) {
    var lines = [];

    if (percent >= 85) lines.push("Distinction-level command of this material — hold it there with Smart Review rather than re-reading.");
    else if (percent >= 70) lines.push("A strong first-class showing. The gap to distinction is a handful of specific facts, not a weak concept base.");
    else if (percent >= PASS_MARK) lines.push("A pass, but not yet an exam-safe margin. The breakdown below names exactly which modules are costing the marks.");
    else lines.push("This paper is below the pass mark. Work through the weakest sub-section listed below before attempting a full-length test again.");

    // Weakest sub-section, named explicitly.
    var subKeys = Object.keys(bySub);
    if (subKeys.length > 1) {
      var weakest = subKeys.map(function (s) { return { s: s, acc: accOf(bySub[s]), n: bySub[s].length }; })
        .filter(function (x) { return x.n >= 2; })
        .sort(function (a, b) { return a.acc - b.acc; })[0];
      if (weakest && weakest.acc < 70) {
        var meta = subById[weakest.s];
        lines.push("Weakest module: <b>" + app.esc(meta ? meta.title : weakest.s) + "</b> at " +
          Math.round(weakest.acc) + "%. Revise that lesson first, then re-test only that sub-section.");
      }
    }

    if (skipped > 0) {
      lines.push(skipped + " question" + (skipped === 1 ? " was" : "s were") +
        " left blank. In the VCI paper there is no negative marking, so an educated guess is always worth more than a blank.");
    }
    if (rushed >= 2) {
      lines.push(rushed + " wrong answers were given in under eight seconds — that is a reading-speed problem, not a knowledge problem. Read the stem twice.");
    }
    if (flagged > 0) {
      lines.push(flagged + " question" + (flagged === 1 ? " was" : "s were") + " flagged during the test; they are marked 🚩 in the answer sheet.");
    }
    if (history && history.prev !== null) {
      var delta = percent - history.prev;
      if (delta >= 5) lines.push("Up " + delta + " points on your previous attempt at this scope. The revision is working.");
      else if (delta <= -5) lines.push("Down " + Math.abs(delta) + " points on your previous attempt at this scope — check whether this test drew on sub-sections the earlier one did not.");
    }

    return '<div class="card report-note mt-6">' +
      '<div class="report-note__head">' + app.icon("lightbulb") + ' Examiner\'s note</div>' +
      '<ul class="report-note__list">' +
        lines.map(function (l) { return '<li>' + l + '</li>'; }).join("") +
      '</ul>' +
    '</div>';
  }

  /* How this test compares with earlier tests of the same scope. */
  function comparisonFor(report) {
    var attempts = (store.getQuiz().attempts || []).filter(function (a) {
      return a.scope === report.scope && a.at <= report.at;
    });
    if (attempts.length < 2) return null;

    var scores = attempts.map(function (a) { return app.pct(a.correct, a.total); });
    var thisScore = scores[scores.length - 1];
    var prior = scores.slice(0, -1);

    return {
      attemptNo: attempts.length,
      scores: scores.slice(-8),
      labels: attempts.slice(-8).map(function (a) { return new Date(a.at); }),
      prev: prior.length ? prior[prior.length - 1] : null,
      best: Math.max.apply(null, prior.concat([thisScore])),
      avg: Math.round(prior.concat([thisScore]).reduce(function (n, v) { return n + v; }, 0) / scores.length),
      isBest: thisScore >= Math.max.apply(null, prior)
    };
  }

  function historyHtml(h, percent) {
    var max = Math.max.apply(null, h.scores.concat([100]));
    return '<div class="card mt-5">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h3>Attempt ' + h.attemptNo + ' at this scope</h3>' +
          '<p class="muted small mt-1">How today compares with your earlier runs of the same test scope.</p>' +
        '</div>' +
        (h.isBest ? '<span class="chip chip--ok font-bold">🏅 Personal best</span>' : '') +
      '</div>' +
      '<div class="row row--wrap gap-4 mt-4">' +
        miniStat("This attempt", percent + "%") +
        miniStat("Previous", h.prev === null ? "—" : h.prev + "%") +
        miniStat("Best ever", h.best + "%") +
        miniStat("Average", h.avg + "%") +
      '</div>' +
      '<div class="qtrend mt-4">' +
        h.scores.map(function (s, i) {
          var isLast = i === h.scores.length - 1;
          return '<div class="qtrend__col" title="' + h.labels[i].toLocaleDateString() + ' — ' + s + '%">' +
            '<div class="qtrend__bar ' + (s >= 75 ? 'is-ok' : s >= PASS_MARK ? 'is-warn' : 'is-low') +
              (isLast ? ' is-current' : '') + '" style="height:' + Math.max(6, s / max * 100) + '%"></div>' +
            '<span class="qtrend__lbl">' + s + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  function miniStat(label, value) {
    return '<div class="report-ministat"><span class="report-ministat__lbl">' + label + '</span>' +
      '<span class="report-ministat__val">' + value + '</span></div>';
  }

  /* A generic "label — bar — score" breakdown card. */
  function breakdownCard(title, sub, groups) {
    if (!groups.length) return "";
    return '<div class="card">' +
      '<h3>' + title + '</h3>' +
      '<p class="muted small mt-1">' + sub + '</p>' +
      '<div class="qfmt mt-3">' +
        groups.map(function (g) {
          var right = g.rows.filter(function (r) { return r.ok; }).length;
          var p = g.rows.length ? Math.round(right / g.rows.length * 100) : 0;
          var name = g.href
            ? '<a href="' + g.href + '">' + app.esc(g.label) + '</a>'
            : app.esc(g.label);
          return '<div class="qfmt-row">' +
            '<span class="qfmt-row__name">' + name + '</span>' +
            '<span class="bar"><span class="bar__fill ' + barTone(p) + '" style="width:' + p + '%"></span></span>' +
            '<span class="qfmt-row__val">' + p + '% <small>(' + right + '/' + g.rows.length + ')</small></span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  function barTone(p) {
    return p >= 75 ? "is-ok" : p >= PASS_MARK ? "is-warn" : "is-low";
  }

  function accOf(rows) {
    if (!rows.length) return 0;
    return rows.filter(function (r) { return r.ok; }).length / rows.length * 100;
  }

  function pctOf(n, total) {
    return total ? Math.round(n / total * 100) + "%" : "0%";
  }

  function groupBy(rows, keyFn) {
    var out = {};
    rows.forEach(function (r) {
      var k = keyFn(r);
      if (k === null || k === undefined) return;
      (out[k] = out[k] || []).push(r);
    });
    return out;
  }

  /* Time spent per question, drawn as a strip. Red bars are wrong answers,
     so a run of tall red bars says "you laboured over these and still missed
     them" — a very different problem from a run of short red bars. */
  function pacingHtml(rows, avgMs, slowest, rushed) {
    var timed = rows.filter(function (r) { return r.time > 0; });
    if (timed.length < 3) return "";

    var maxT = timed.reduce(function (m, r) { return Math.max(m, r.time); }, 1);

    return '<section class="mt-8">' +
      '<h2>Pacing Analysis</h2>' +
      '<p class="muted small mt-1">Seconds spent on each question, in the order you attempted them. ' +
        'Hover any bar for the question.</p>' +

      '<div class="card mt-4">' +
        '<div class="pace-strip">' +
          rows.map(function (r) {
            var h = r.time ? Math.max(4, Math.round(r.time / maxT * 100)) : 4;
            var cls = r.skipped ? "is-skip" : r.ok ? "is-ok" : "is-wrong";
            return '<div class="pace-strip__col" title="Q' + (r.i + 1) + ' · ' +
                (r.skipped ? "skipped" : r.ok ? "correct" : "incorrect") + ' · ' + fmtDur(r.time) + '">' +
              '<div class="pace-strip__bar ' + cls + '" style="height:' + h + '%"></div>' +
            '</div>';
          }).join("") +
        '</div>' +
        '<div class="row row--wrap gap-4 mt-4">' +
          miniStat("Average per question", fmtDur(avgMs)) +
          miniStat("Longest question", slowest ? "Q" + (slowest.i + 1) + " · " + fmtDur(slowest.time) : "—") +
          miniStat("Rushed misses (&lt;8s)", String(rushed)) +
        '</div>' +
        '<div class="row row--wrap gap-4 mt-3 small faint">' +
          '<span class="pace-key"><i class="is-ok"></i> Correct</span>' +
          '<span class="pace-key"><i class="is-wrong"></i> Incorrect</span>' +
          '<span class="pace-key"><i class="is-skip"></i> Skipped</span>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ============================================================
     ANSWER SHEET — every question, filterable
     ============================================================ */
  function answerSheetHtml(rows, correct, wrong, skipped, flagged) {
    var filters = [
      { id: "all", label: "All", n: rows.length },
      { id: "wrong", label: "Incorrect", n: wrong },
      { id: "skipped", label: "Skipped", n: skipped },
      { id: "flagged", label: "🚩 Flagged", n: flagged },
      { id: "correct", label: "Correct", n: correct }
    ].filter(function (f) { return f.n > 0 || f.id === "all"; });

    return '<section class="mt-12 answersheet">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h2>Answer Sheet &amp; Explanations</h2>' +
          '<p class="muted small mt-1">Every question with your answer, the correct answer, the high-yield ' +
            'explanation and a link to the full lesson.</p>' +
        '</div>' +
        '<button class="btn btn--sm" id="expandall">Expand all</button>' +
      '</div>' +

      '<div class="answersheet__filters mt-4" id="asfilters">' +
        filters.map(function (f, i) {
          return '<button type="button" class="matrix-tab-btn' + (i === 0 ? ' is-active' : '') +
            '" data-asfilter="' + f.id + '">' + f.label + ' <span class="chip chip--sm ml-1">' + f.n + '</span></button>';
        }).join("") +
      '</div>' +

      '<div class="stack text-left mt-4" id="aslist">' +
        rows.map(reviewItemHtml).join("") +
      '</div>' +

      '<p class="small faint mt-3" id="asempty" hidden>No questions in this filter.</p>' +
    '</section>';
  }

  function reviewItemHtml(r) {
    var q = r.q;
    var state = r.skipped ? "skipped" : r.ok ? "correct" : "wrong";
    var stateChip = r.skipped
      ? '<span class="chip chip--warn">⊘ Skipped</span>'
      : r.ok ? '<span class="chip chip--ok">✔ Correct</span>'
             : '<span class="chip chip--danger">✖ Incorrect</span>';

    var rightAns = q.format === "mcq" ? (q.o || [])[q.a]
      : q.format === "tf" ? (q.a ? "True" : "False")
      : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));

    var myAns = r.skipped ? "Not answered"
      : q.format === "mcq" ? (q.o || [])[r.given]
      : q.format === "tf" ? (r.given ? "True" : "False")
      : r.given;

    var subMeta = q.subSection ? subById[q.subSection] : null;

    // For MCQ, show the whole option list so the distractors can be studied too.
    var optionsHtml = "";
    if (q.format === "mcq" && q.o) {
      optionsHtml = '<div class="as-opts">' + q.o.map(function (opt, i) {
        var cls = "as-opt";
        if (i === q.a) cls += " is-right";
        if (!r.skipped && i === r.given && i !== q.a) cls += " is-wrong";
        return '<div class="' + cls + '">' +
          '<span class="as-opt__key">' + "ABCDEF".charAt(i) + '</span>' +
          '<span class="as-opt__text">' + app.esc(opt) + '</span>' +
          (i === q.a ? '<span class="as-opt__tag">Correct</span>' : '') +
          (!r.skipped && i === r.given && i !== q.a ? '<span class="as-opt__tag">Your answer</span>' : '') +
        '</div>';
      }).join("") + '</div>';
    }

    return '<details class="card as-item is-' + state + (r.flagged ? ' is-flagged' : '') + '" data-state="' + state +
        '" data-flagged="' + (r.flagged ? "1" : "0") + '">' +
      '<summary class="as-item__summary">' +
        '<span class="as-item__no">' + (r.i + 1) + '</span>' +
        '<span class="as-item__q">' + app.esc(q.q) + '</span>' +
        '<span class="as-item__tags">' +
          (r.flagged ? '<span class="chip chip--subtle">🚩</span>' : '') +
          (r.time ? '<span class="chip chip--subtle font-mono">' + fmtDur(r.time) + '</span>' : '') +
          stateChip +
        '</span>' +
      '</summary>' +

      '<div class="as-item__body">' +
        '<div class="row row--wrap gap-2 mb-3">' +
          '<span class="chip chip--sm font-mono">' + q.format.toUpperCase() + '</span>' +
          '<span class="chip chip--sm">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
          (subMeta ? '<span class="chip chip--sm chip--accent">' + subMeta.icon + ' ' + app.esc(subMeta.title) + '</span>' : '') +
          '<span class="chip chip--sm chip--subtle">' + DIFF_STARS[q.diff] + ' ' + DIFF_NAMES[q.diff] + '</span>' +
        '</div>' +

        optionsHtml +

        (q.format !== "mcq"
          ? '<div class="row row--wrap gap-4 mt-2">' +
              '<p class="small"><span class="chip ' + (r.ok ? 'chip--ok' : 'chip--danger') + '">Your answer</span> <b>' +
                app.esc(String(myAns)) + '</b></p>' +
              '<p class="small"><span class="chip chip--ok">Correct answer</span> <b>' +
                app.esc(String(rightAns)) + '</b></p>' +
            '</div>'
          : '') +

        (q.e ? '<div class="callout mt-4"><div class="callout__title">High-Yield Explanation</div>' + q.e + '</div>' : '') +

        '<div class="row row--wrap gap-2 mt-4">' +
          (q.topicId && syllabus.topicById[q.topicId]
            ? '<a class="btn btn--sm" href="#/topic/' + q.topicId + '">📖 Read the lesson: ' +
              app.esc(syllabus.topicById[q.topicId].title) + '</a>'
            : '') +
          (q.topicId && syllabus.topicById[q.topicId]
            ? '<button class="btn btn--sm btn--ghost" data-bookmark="' + q.topicId + '">' +
              (store.isBookmarked(q.topicId) ? '★ Bookmarked' : '☆ Bookmark this topic') + '</button>'
            : '') +
        '</div>' +
      '</div>' +
    '</details>';
  }

  function wireReport() {
    // Answer-sheet filter tabs
    var list = document.getElementById("aslist");
    var empty = document.getElementById("asempty");
    document.querySelectorAll("[data-asfilter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-asfilter]").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var f = btn.getAttribute("data-asfilter");
        var shown = 0;
        if (!list) return;
        Array.prototype.slice.call(list.querySelectorAll(".as-item")).forEach(function (item) {
          var show = f === "all"
            || (f === "flagged" ? item.getAttribute("data-flagged") === "1"
                                : item.getAttribute("data-state") === f);
          item.hidden = !show;
          if (show) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });

    // Expand / collapse every question at once
    var expand = document.getElementById("expandall");
    if (expand) {
      expand.addEventListener("click", function () {
        var items = Array.prototype.slice.call(document.querySelectorAll(".as-item"));
        var anyClosed = items.some(function (d) { return !d.open && !d.hidden; });
        items.forEach(function (d) { if (!d.hidden) d.open = anyClosed; });
        expand.textContent = anyClosed ? "Collapse all" : "Expand all";
      });
    }

    // Bookmark a topic straight from the answer sheet
    document.querySelectorAll("[data-bookmark]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-bookmark");
        var on = store.toggleBookmark(id);
        btn.textContent = on ? "★ Bookmarked" : "☆ Bookmark this topic";
        app.toast(on ? "Topic bookmarked" : "Bookmark removed");
      });
    });

    var print = document.getElementById("printreport");
    if (print) {
      print.addEventListener("click", function () {
        // Open every question first, or the printout is a list of headings.
        document.querySelectorAll(".as-item").forEach(function (d) { d.hidden = false; d.open = true; });
        window.print();
      });
    }
  }

  /* ============================================================
     RETRY / RETAKE FROM A SAVED REPORT
     ============================================================ */
  function retryWrong(id) {
    var report = store.getReport ? store.getReport(id) : null;
    if (!report) { location.hash = "#/quiz"; return; }
    var missed = hydrate(report).filter(function (r) { return !r.ok; }).map(function (r) { return r.q; });
    if (!missed.length) {
      app.toast("Nothing to retry — you got every question right");
      location.hash = "#/quiz/report/" + id;
      return;
    }
    start(missed, report.scope + ":retry", "🎯 Retry · " + (report.label || "Quiz"),
          false, 0, report.orderMode || "sequence", report.subSectionId || "all", report.unitId || null);
  }

  function retakeReport(id) {
    var report = store.getReport ? store.getReport(id) : null;
    if (!report) { location.hash = "#/quiz"; return; }
    var qs = hydrate(report).map(function (r) { return r.q; });
    if (!qs.length) { app.toast("Those questions are no longer in the bank"); location.hash = "#/quiz"; return; }
    start(shuffle(qs), report.scope, "🔁 Retake · " + (report.label || "Quiz"),
          !!report.exam, report.minutes || 20, "shuffle", report.subSectionId || "all", report.unitId || null);
  }

  return {
    render: render,
    reset: resetRun,
    leave: leave,
    hasSavedRun: function () { return !!savedRun(); },
    dueCount: function () { return dueQuestions().length; },
    subSections: subSectionsByUnit,
    subMeta: function (id) { return subById[id] || null; }
  };
})();
