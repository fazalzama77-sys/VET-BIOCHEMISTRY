/* ============================================================
   quiz.js  —  The Veterinary Biochemistry Interactive Quiz Engine
   ============================================================
   Features:
     - 680 curriculum-standard questions across Theory Units 1 to 3
     - 2 : 1 : 1 ratio of MCQ : TF : FIB (Units 1-2: 250 each, Unit 3: 180)
     - 15 thematic sub-sections with dedicated module testing
     - Playful, colorful, gamified UI with sound FX, combo streaks, confetti
     - Streamlined HUD: sleek Question Map popover instead of a cluttered 90-button grid
     - Docked bottom controls: Previous, Flag, Skip/Next, Finish (never trapped on FIB!)
     - Practice Mode (instant reveals, audio chimes, explanations) & Exam Mode (timed)
     - Comprehensive post-test celebration & filterable answer sheets
     - Full Spaced Repetition (Leitner) & saved attempt persistence
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state
  var PASS_MARK = 50;       // VCI pass percentage

  /* ---------- Subtle Web Audio Synthesizer (Offline & Zero-Asset) ---------- */
  var soundFx = (function () {
    var enabled = localStorage.getItem("vet_quiz_sound") !== "false";
    var ctx = null;

    function getCtx() {
      if (!ctx && (window.AudioContext || window.webkitAudioContext)) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
      }
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(function () {});
      }
      return ctx;
    }

    return {
      isEnabled: function () { return enabled; },
      toggle: function () {
        enabled = !enabled;
        localStorage.setItem("vet_quiz_sound", enabled ? "true" : "false");
        return enabled;
      },
      playCorrect: function () {
        if (!enabled) return;
        try {
          var c = getCtx();
          if (!c) return;
          var now = c.currentTime;
          var osc = c.createOscillator();
          var gain = c.createGain();
          osc.connect(gain);
          gain.connect(c.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(523.25, now);        // C5
          osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
          osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.start(now);
          osc.stop(now + 0.32);
        } catch (e) {}
      },
      playWrong: function () {
        if (!enabled) return;
        try {
          var c = getCtx();
          if (!c) return;
          var now = c.currentTime;
          var osc = c.createOscillator();
          var gain = c.createGain();
          osc.connect(gain);
          gain.connect(c.destination);
          osc.type = "triangle";
          osc.frequency.setValueAtTime(261.63, now);        // C4
          osc.frequency.setValueAtTime(220.00, now + 0.10); // A3
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.28);
        } catch (e) {}
      },
      playFanfare: function () {
        if (!enabled) return;
        try {
          var c = getCtx();
          if (!c) return;
          var now = c.currentTime;
          [523.25, 659.25, 783.99, 1046.5].forEach(function (f, idx) {
            var osc = c.createOscillator();
            var gain = c.createGain();
            osc.connect(gain);
            gain.connect(c.destination);
            osc.type = "triangle";
            osc.frequency.setValueAtTime(f, now + idx * 0.07);
            gain.gain.setValueAtTime(0.10, now + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.24);
            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.24);
          });
        } catch (e) {}
      }
    };
  })();

  /* Sub-section metadata for Veterinary Biochemistry Units 1 to 3 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "🔬", title: "Membranes, Transport & Buffers", desc: "Scope of biochemistry, biological membranes, transport, Donnan equilibrium, pH & Henderson-Hasselbalch" },
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

  /* Flattened lookup map */
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
  var FMT_NAMES  = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" };
  var FMT_ICONS  = { mcq: "🔘", tf: "⚖️", fib: "✍️" };

  function resetRun() {
    stopRun();
    run = null;
  }

  function leave() {
    if (run && run.active) { accrueTime(); persistRun(); }
    stopRun();
    run = null;
  }

  /* ============================================================
     BUILDING QUESTION SETS
     ============================================================ */
  function bankFor(unitIds, formats, subSectionId, diffs) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        var order = (b[f] || []).map(function (q, i) { return i; });
        order.sort(function (x, y) { return topicNo(b[f][x]) - topicNo(b[f][y]) || x - y; });
        order.forEach(function (i) {
          var q = b[f][i];
          if (!q || !q.q || !String(q.q).trim()) return;
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

  function formatMix() {
    var c = { mcq: 0, tf: 0, fib: 0 };
    var bank = window.quizBank || {};
    Object.keys(bank).forEach(function (u) {
      ["mcq", "tf", "fib"].forEach(function (f) {
        (bank[u][f] || []).forEach(function (q) { if (q && q.q && String(q.q).trim()) c[f]++; });
      });
    });
    return c.mcq + " MCQ · " + c.tf + " T/F · " + c.fib + " FIB";
  }

  function topicNo(q) {
    var m = q && q.topicId ? /-t(\d+)$/.exec(q.topicId) : null;
    return m ? parseInt(m[1], 10) : 9999;
  }

  function scopeUnits(kind, id) {
    if (kind === "unit") return [id];
    if (kind === "paper") {
      var ids = (syllabus.allUnits || []).filter(function (u) { return u.paper === id; }).map(function (u) { return u.id; });
      if (ids.length) return ids;
      var p = ((syllabus.meta || {}).papers || []).filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; }) : (syllabus.theory || []).map(function (u) { return u.id; });
    }
    if (kind === "grand") return (syllabus.theory || []).map(function (u) { return u.id; });
    if (kind === "practical") return (syllabus.practical || []).map(function (u) { return u.id; });
    return [];
  }

  function paperName(id) {
    var p = ((syllabus.meta || {}).papers || []).filter(function (x) { return x.id === id; })[0];
    return p ? p.name : "Annual Examination";
  }

  function shuffle(a) {
    var copy = a.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  function pickSpread(pool, count) {
    if (count >= pool.length) return pool.slice(0);
    var out = [];
    var byFormat = bucket(pool, function (q) { return q.format; });
    var formatShares = allocate(byFormat, count);

    formatShares.forEach(function (fs) {
      if (!fs.take) return;
      var byModule = bucket(fs.items, function (q) { return q.unitId + "|" + (q.subSection || "-"); });
      var moduleShares = allocate(byModule, fs.take);
      moduleShares.forEach(function (ms) {
        if (!ms.take) return;
        var step = ms.items.length / ms.take;
        for (var k = 0; k < ms.take; k++) {
          out.push(ms.items[Math.floor(k * step)]);
        }
      });
    });

    var order = {};
    pool.forEach(function (q, i) { order[q.key] = i; });
    out.sort(function (a, b) { return order[a.key] - order[b.key]; });
    return out.slice(0, count);
  }

  function bucket(items, keyFn) {
    var map = {}, list = [];
    items.forEach(function (it) {
      var k = keyFn(it);
      if (!map[k]) { map[k] = { key: k, items: [] }; list.push(map[k]); }
      map[k].items.push(it);
    });
    return list;
  }

  function allocate(groups, count) {
    var total = groups.reduce(function (n, g) { return n + g.items.length; }, 0);
    if (!total || !count) return groups.map(function (g) { return { key: g.key, items: g.items, take: 0 }; });

    var allocated = 0;
    var res = groups.map(function (g) {
      var exact = (g.items.length / total) * count;
      var base = Math.floor(exact);
      allocated += base;
      return { key: g.key, items: g.items, take: base, rem: exact - base };
    });

    var remainder = count - allocated;
    res.slice().sort(function (a, b) { return b.rem - a.rem; }).forEach(function (r) {
      if (remainder > 0 && r.take < r.items.length) { r.take++; remainder--; }
    });
    return res;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId || "all").length;
  }

  function dueQuestions() {
    var dueKeys = store.dueSrs ? store.dueSrs() : [];
    if (!dueKeys.length) return [];
    var all = bankFor(scopeUnits("grand"), ["mcq", "tf", "fib"]);
    var byKey = {};
    all.forEach(function (q) { byKey[q.key] = q; });
    return dueKeys.map(function (k) { return byKey[k]; }).filter(Boolean);
  }

  /* ============================================================
     MAIN ROUTER
     ============================================================ */
  function render(container, params) {
    host = container;
    var p0 = null, p1 = null;
    if (typeof params === "string") {
      var segs = params.split("/").filter(Boolean);
      p0 = segs[0]; p1 = segs[1];
    } else if (params && typeof params === "object") {
      p0 = params.a;
      p1 = params.b;
    } else {
      var hashParts = (location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean);
      if (hashParts[0] === "quiz") {
        p0 = hashParts[1];
        p1 = hashParts[2];
      }
    }

    if (!p0) {
      renderHub();
    } else if (p0 === "unit" && p1) {
      renderSetup("unit", p1);
    } else if (p0 === "paper" && p1) {
      renderSetup("paper", p1);
    } else if (p0 === "grand") {
      renderSetup("grand", "grand");
    } else if (p0 === "practical") {
      renderSetup("practical", "practical");
    } else if (p0 === "review") {
      renderReview();
    } else if (p0 === "retry" && p1) {
      retryWrong(p1);
    } else if (p0 === "again" && p1) {
      retakeReport(p1);
    } else if (p0 === "report" && p1) {
      renderSavedReport(p1);
    } else {
      renderHub();
    }
  }

  function resumeBanner() {
    var r = savedRun();
    if (!r || !r.active) return "";
    var ans = Object.keys(r.answers || {}).length;
    return '<div class="quiz-resume-bar animate-fade-in">' +
      '<div class="quiz-resume-bar__info">' +
        '<div class="quiz-resume-bar__icon">⚡</div>' +
        '<div>' +
          '<div class="quiz-resume-bar__title">Unfinished Test in Progress: ' + app.esc(r.label || "Quiz") + '</div>' +
          '<div class="quiz-resume-bar__sub">' + (r.i + 1) + ' of ' + r.qs.length + ' answered · ' +
            (r.exam ? '⏱️ Timed exam' : 'Instant practice') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="quiz-resume-bar__actions">' +
        '<button class="btn btn--primary btn--sm" id="resumebtn">Resume Test ➔</button>' +
        '<button class="btn btn--ghost btn--sm" id="discardrunbtn">Discard</button>' +
      '</div>' +
    '</div>';
  }

  function wireResumeEvents() {
    var resBtn = document.getElementById("resumebtn");
    if (resBtn) resBtn.addEventListener("click", resumeSavedRun);
    var discBtn = document.getElementById("discardrunbtn");
    if (discBtn) discBtn.addEventListener("click", function () {
      if (confirm("Discard this unfinished test? Your partial progress will be deleted.")) {
        if (store.clearQuizRun) store.clearQuizRun();
        renderHub();
      }
    });
  }

  /* ============================================================
     1. QUIZ HUB (PLAYFUL, COLORFUL & INVITING)
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryIds = (syllabus.theory || []).map(function (u) { return u.id; });
    var pracIds   = (syllabus.practical || []).map(function (u) { return u.id; });
    var totalAll  = countAvailable(theoryIds.concat(pracIds));
    var due       = dueQuestions().length;
    var q         = store.getQuiz() || { attempts: [], byUnit: {} };

    var unitCards = (syllabus.theory || []).map(function (u, idx) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      var subs = subSectionsByUnit[u.id] || [];
      var themes = [
        { bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.12))", border: "rgba(59, 130, 246, 0.35)", badge: "🧬 Stage 1 · Foundations" },
        { bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(59, 130, 246, 0.12))", border: "rgba(16, 185, 129, 0.35)", badge: "⚡ Stage 2 · Bioenergetics" },
        { bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.12))", border: "rgba(245, 158, 11, 0.35)", badge: "🩺 Stage 3 · Clinical Lab" }
      ];
      var t = themes[idx % themes.length];

      return '<div class="quiz-unit-card" style="background:' + t.bg + '; border-color:' + t.border + ';">' +
        '<div class="quiz-unit-card__head">' +
          '<span class="quiz-badge-soft">' + t.badge + '</span>' +
          (rec ? '<span class="quiz-score-pill">⭐ Best ' + rec.best + '%</span>' : '<span class="quiz-pill-muted">Untested</span>') +
        '</div>' +
        '<h3 class="quiz-unit-card__title">Unit ' + u.no + ' — ' + app.esc(u.short) + '</h3>' +
        '<p class="quiz-unit-card__desc">' + (subs.map(function (s) { return s.icon + ' ' + s.title; }).slice(0, 3).join(" · ")) + ' & more</p>' +
        '<div class="quiz-unit-card__footer">' +
          '<span class="quiz-unit-count font-mono"><b>' + n + '</b> Questions · <b>' + subs.length + '</b> Modules</span>' +
          '<a class="btn btn--primary btn--sm" href="#/quiz/unit/' + u.id + '">Play Unit Quiz ➔</a>' +
        '</div>' +
      '</div>';
    }).join("");

    var pracRow = (syllabus.practical || []).map(function (u) {
      var n = countAvailable([u.id]);
      return '<a class="quiz-prac-pill' + (n ? '' : ' is-disabled') + '" href="' + (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="quiz-prac-icon">🧪</span>' +
        '<div class="quiz-prac-text">' +
          '<div class="quiz-prac-title">P' + u.no + ' · ' + app.esc(u.short) + '</div>' +
          '<div class="quiz-prac-sub">' + (n ? n + ' questions available' : 'In development') + '</div>' +
        '</div>' +
        '<span class="quiz-prac-arrow">➔</span>' +
      '</a>';
    }).join("");

    host.innerHTML =
      '<div class="quiz-hub-wrapper animate-fade-in">' +

        /* Vibrant Header */
        '<div class="quiz-hero-banner">' +
          '<div class="quiz-hero-content">' +
            '<div class="quiz-hero-tags">' +
              '<span class="quiz-hero-tag">🌟 ' + totalAll + ' Questions Bank</span>' +
              '<span class="quiz-hero-tag quiz-hero-tag--teal">' + formatMix() + '</span>' +
              '<span class="quiz-hero-tag quiz-hero-tag--purple">' + subCount() + ' Thematic Modules</span>' +
            '</div>' +
            '<h1 class="quiz-hero-title">Veterinary Biochemistry Arena 🚀</h1>' +
            '<p class="quiz-hero-desc">' +
              'Test your diagnostic intuition with instant answer reveals, combo multipliers, and automated Spaced Repetition reinforcement.' +
            '</p>' +
          '</div>' +
        '</div>' +

        resumeBanner() +

        /* Quick Play Modes */
        '<div class="quiz-section-header mt-8">' +
          '<div>' +
            '<h2 class="quiz-section-title">⚡ Quick Play Modes</h2>' +
            '<p class="quiz-section-sub">Choose a game style tailored to your current study session.</p>' +
          '</div>' +
        '</div>' +

        '<div class="quiz-modes-grid mt-4">' +
          quickModeCard("Daily Sprint", "10 rapid mixed questions from all units to warm up your brain.", 10, "#/quiz/grand", "⚡", "is-orange") +
          quickModeCard("Smart SRS Review", due + " flashcard" + (due === 1 ? "" : "s") + " due today based on your memory forgetting curve.", due, "#/quiz/review", "🧠", "is-purple", due === 0) +
          quickModeCard(paperName("annual"), "Full mock simulation with real university timing and scoring.", countAvailable(scopeUnits("paper", "annual")), "#/quiz/paper/annual", "⏱️", "is-blue") +
          quickModeCard("Grand Theory Arena", "Comprehensive 3-unit challenge covering all 55 theory topics.", countAvailable(theoryIds), "#/quiz/grand", "🏆", "is-green") +
        '</div>' +

        /* Theory Unit Quest Stages */
        '<div class="quiz-section-header mt-10">' +
          '<div>' +
            '<h2 class="quiz-section-title">📚 Unit Mastery Stages</h2>' +
            '<p class="quiz-section-sub">Pick any unit to target specific modules in Sequence or Shuffle mode.</p>' +
          '</div>' +
        '</div>' +

        '<div class="quiz-unit-grid mt-4">' + unitCards + '</div>' +

        /* Practical Procedures */
        '<div class="quiz-section-header mt-10">' +
          '<div>' +
            '<h2 class="quiz-section-title">🔬 Practical Diagnostic Lab</h2>' +
            '<p class="quiz-section-sub">Test laboratory biochemistry procedures, qualitative tests, and clinical chemistry protocols.</p>' +
          '</div>' +
        '</div>' +
        '<div class="quiz-prac-grid mt-4">' + pracRow + '</div>' +

        /* Recent Test Trophies Strip */
        recentReportsStrip() +

      '</div>';

    wireResumeEvents();
  }

  function quickModeCard(title, desc, count, href, icon, colorClass, isDisabled) {
    return '<a class="quiz-mode-card ' + colorClass + (isDisabled ? ' is-disabled' : '') + '" href="' + (isDisabled ? '#/quiz' : href) + '">' +
      '<div class="quiz-mode-card__top">' +
        '<span class="quiz-mode-card__icon">' + icon + '</span>' +
        '<span class="quiz-mode-card__count">' + (count || 0) + ' Qs</span>' +
      '</div>' +
      '<h3 class="quiz-mode-card__title">' + app.esc(title) + '</h3>' +
      '<p class="quiz-mode-card__desc">' + app.esc(desc) + '</p>' +
      '<div class="quiz-mode-card__action">' + (isDisabled ? 'Clear for now' : 'Start Play ➔') + '</div>' +
    '</a>';
  }

  function recentReportsStrip() {
    var reports = (store.getReports ? store.getReports() : []).slice(-4).reverse();
    if (!reports.length) return "";
    return '<div class="quiz-section-header mt-12">' +
        '<div>' +
          '<h2 class="quiz-section-title">📊 Your Recent Test Reports</h2>' +
          '<p class="quiz-section-sub">Reopen full answer keys, review missed questions, or retake.</p>' +
        '</div>' +
      '</div>' +
      '<div class="quiz-recent-grid mt-4">' +
        reports.map(function (r) {
          var p = app.pct(r.correct, r.total);
          var medal = p >= 90 ? "🥇" : p >= 75 ? "🥈" : p >= 50 ? "🥉" : "📝";
          return '<a class="quiz-recent-card" href="#/quiz/report/' + r.id + '">' +
            '<div class="quiz-recent-score">' + medal + ' ' + p + '%</div>' +
            '<div class="quiz-recent-info">' +
              '<div class="quiz-recent-title">' + app.esc(r.label || "Quiz") + '</div>' +
              '<div class="quiz-recent-meta">' + r.correct + ' of ' + r.total + ' correct · ' +
                new Date(r.at).toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
                (r.exam ? ' · ⏱️ Exam' : '') + '</div>' +
            '</div>' +
            '<span class="quiz-recent-pill ' + toneFor(p) + '">' + verdictFor(p) + '</span>' +
          '</a>';
        }).join("") +
      '</div>';
  }

  /* ============================================================
     2. SETUP SCREEN (COLORFUL, CLEAR & COHESIVE)
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
      orderMode: "sequence",
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

      var presets = [10, 20, 30, 45, maxN].filter(function (n, idx, arr) {
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
          '<div class="quiz-setup-block">' +
            '<div class="quiz-setup-label">' +
              '<span class="quiz-setup-icon">📂</span>' +
              '<div>' +
                '<b>Target Module / Sub-section</b>' +
                '<p class="small muted">Practice a single chapter or take the comprehensive unit test.</p>' +
              '</div>' +
            '</div>' +
            '<div class="quiz-subsec-grid mt-3">' +
              '<button type="button" class="quiz-subsec-btn' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<span class="quiz-subsec-icon">🌟</span>' +
                '<div class="quiz-subsec-text">' +
                  '<div class="quiz-subsec-title">All Sub-sections (Full Unit)</div>' +
                  '<div class="quiz-subsec-desc">Covers all modules in official 2:1:1 exam ratio</div>' +
                '</div>' +
                '<span class="quiz-badge-soft">' + allCount + ' Qs</span>' +
              '</button>' +
              subSections.map(function (sub) {
                var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                return '<button type="button" class="quiz-subsec-btn' + (state.subSectionId === sub.id ? ' is-active' : '') + '" data-sub="' + sub.id + '">' +
                  '<span class="quiz-subsec-icon">' + sub.icon + '</span>' +
                  '<div class="quiz-subsec-text">' +
                    '<div class="quiz-subsec-title">' + app.esc(sub.title) + '</div>' +
                    '<div class="quiz-subsec-desc">' + app.esc(sub.desc) + '</div>' +
                  '</div>' +
                  '<span class="quiz-badge-soft">' + c + ' Qs</span>' +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>';
      }

      host.innerHTML =
        '<div class="quiz-setup-wrap animate-fade-in">' +

          '<div class="quiz-setup-header">' +
            '<div class="row row--wrap items-center gap-2 mb-2">' +
              '<a class="btn btn--sm btn--ghost" href="#/quiz">← Back to Hub</a>' +
              '<span class="quiz-badge-soft font-mono">🌟 ' + maxN + ' Available Questions</span>' +
            '</div>' +
            '<h1 class="quiz-setup-title">' + app.esc(label) + '</h1>' +
            '<p class="quiz-setup-desc">Customize your quiz preferences below. All settings are saved automatically.</p>' +
          '</div>' +

          resumeBanner() +

          '<div class="quiz-setup-card mt-6">' +
            subSecHtml +

            /* Order Mode */
            '<div class="quiz-setup-block">' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">🔄</span>' +
                '<div>' +
                  '<b>Question Order Mode</b>' +
                  '<p class="small muted">Follow the syllabus sequentially or shuffle for high-stakes test practice.</p>' +
                '</div>' +
              '</div>' +
              '<div class="quiz-pill-group" id="ordermodetoggle">' +
                '<button type="button" class="quiz-toggle-pill' + (state.orderMode === 'sequence' ? ' is-active' : '') + '" data-mode="sequence">' +
                  '<span>📋</span> Sequence Mode (Curriculum Order)' +
                '</button>' +
                '<button type="button" class="quiz-toggle-pill' + (state.orderMode === 'shuffle' ? ' is-active' : '') + '" data-mode="shuffle">' +
                  '<span>🔀</span> Shuffle Mode (Randomized)' +
                '</button>' +
              '</div>' +
            '</div>' +

            /* Formats */
            '<div class="quiz-setup-block">' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">✍️</span>' +
                '<div>' +
                  '<b>Question Types</b>' +
                  '<p class="small muted">Pick any mix of question formats.</p>' +
                '</div>' +
              '</div>' +
              '<div class="quiz-pill-group" id="fmtbox">' +
                ['mcq', 'tf', 'fib'].map(function (f) {
                  var count = counts[f];
                  var checked = state.formats.indexOf(f) !== -1;
                  return '<button type="button" class="quiz-check-pill' + (checked ? ' is-active' : '') + (count === 0 ? ' is-disabled' : '') + '" data-fmt="' + f + '">' +
                    '<span>' + FMT_ICONS[f] + '</span> ' + (f === "fib" ? "Fill in the Blank" : FMT_NAMES[f]) +
                    ' <small class="quiz-pill-count">(' + count + ')</small>' +
                  '</button>';
                }).join("") +
              '</div>' +
            '</div>' +

            /* Difficulty */
            '<div class="quiz-setup-block">' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">⭐</span>' +
                '<div>' +
                  '<b>Difficulty Tiers</b>' +
                  '<p class="small muted">Practice core concepts or challenge yourself with distinction questions.</p>' +
                '</div>' +
              '</div>' +
              '<div class="quiz-pill-group" id="diffbox">' +
                [1, 2, 3].map(function (d) {
                  var count = diffCounts[d] || 0;
                  var checked = state.diffs.indexOf(d) !== -1;
                  return '<button type="button" class="quiz-check-pill' + (checked ? ' is-active' : '') + (count === 0 ? ' is-disabled' : '') + '" data-diff="' + d + '">' +
                    DIFF_STARS[d] + ' ' + DIFF_NAMES[d] + ' <small class="quiz-pill-count">(' + count + ')</small>' +
                  '</button>';
                }).join("") +
              '</div>' +
            '</div>' +

            /* Question Count */
            '<div class="quiz-setup-block">' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">🎯</span>' +
                '<div>' +
                  '<b>Number of Questions</b>' +
                  '<p class="small muted">Choose your test length.</p>' +
                '</div>' +
              '</div>' +
              '<div class="quiz-pill-group" id="segcount">' +
                presets.map(function (n) {
                  var isSelected = state.count === n;
                  return '<button type="button" class="quiz-num-pill' + (isSelected ? ' is-active' : '') + '" data-count="' + n + '">' +
                    (n === maxN ? 'All (' + n + ')' : n + ' Qs') +
                  '</button>';
                }).join("") +
              '</div>' +
            '</div>' +

            /* Exam Mode Switch */
            '<div class="quiz-setup-block">' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">⏱️</span>' +
                '<div>' +
                  '<b>Exam Mode (Strict Timer & No Reveals)</b>' +
                  '<p class="small muted">Simulates university exam conditions. Reveals answers only after paper submission.</p>' +
                '</div>' +
              '</div>' +
              '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
            '</div>' +

            /* Timer Selection */
            '<div class="quiz-setup-block" id="timerow"' + (state.exam ? '' : ' style="display:none"') + '>' +
              '<div class="quiz-setup-label">' +
                '<span class="quiz-setup-icon">⏳</span>' +
                '<div>' +
                  '<b>Time Limit</b>' +
                  '<p class="small muted">Countdown timer will auto-submit the exam upon expiry.</p>' +
                '</div>' +
              '</div>' +
              '<div class="quiz-pill-group" id="segtime">' +
                [10, 20, 30, 45, 60].map(function (m) {
                  return '<button type="button" class="quiz-num-pill' + (state.minutes === m ? ' is-active' : '') + '" data-min="' + m + '">' + m + ' Mins</button>';
                }).join("") +
              '</div>' +
            '</div>' +

            /* Bottom Action Bar */
            '<div class="quiz-setup-actions">' +
              '<a class="btn btn--ghost" href="#/quiz">Cancel</a>' +
              '<button class="btn btn--primary btn--lg quiz-start-btn" id="startbtn"' + (maxN ? '' : ' disabled') + '>' +
                '🚀 Launch Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
              '</button>' +
            '</div>' +

          '</div>' +
        '</div>';

      attachSetupEvents();
    }

    function attachSetupEvents() {
      // Sub-section selection
      document.querySelectorAll(".quiz-subsec-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.subSectionId = btn.getAttribute("data-sub");
          updateView();
        });
      });

      // Order mode
      document.querySelectorAll("#ordermodetoggle [data-mode]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.orderMode = btn.getAttribute("data-mode");
          updateView();
        });
      });

      // Formats
      document.querySelectorAll("#fmtbox [data-fmt]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var f = btn.getAttribute("data-fmt");
          var idx = state.formats.indexOf(f);
          if (idx === -1) state.formats.push(f);
          else if (state.formats.length > 1) state.formats.splice(idx, 1);
          else { app.toast("At least one format must remain selected"); return; }
          updateView();
        });
      });

      // Difficulty
      document.querySelectorAll("#diffbox [data-diff]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var d = parseInt(btn.getAttribute("data-diff"), 10);
          var idx = state.diffs.indexOf(d);
          if (idx === -1) state.diffs.push(d);
          else if (state.diffs.length > 1) state.diffs.splice(idx, 1);
          else { app.toast("At least one difficulty tier must be active"); return; }
          updateView();
        });
      });

      // Question count
      document.querySelectorAll("#segcount [data-count]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          updateView();
        });
      });

      // Exam mode switch
      var ex = document.getElementById("exammode");
      if (ex) {
        ex.addEventListener("change", function () {
          state.exam = ex.checked;
          var tr = document.getElementById("timerow");
          if (tr) tr.style.display = state.exam ? "flex" : "none";
        });
      }

      // Minutes
      document.querySelectorAll("#segtime [data-min]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          updateView();
        });
      });

      // Start button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var pool = bankFor(unitIds, state.formats, state.subSectionId, state.diffs);
          if (!pool.length) { app.toast("No questions match this filter"); return; }
          var count = Math.min(state.count, pool.length);
          var chosen = state.orderMode === "shuffle" ? shuffle(pool).slice(0, count) : pickSpread(pool, count);

          start(chosen, kind + ":" + id, label, state.exam, state.minutes, state.orderMode, state.subSectionId, kind === "unit" ? id : null);
        });
      }
    }

    updateView();
  }

  /* ============================================================
     3. SMART REVIEW MODE (SPACED REPETITION)
     ============================================================ */
  function renderReview() {
    var qs = dueQuestions();
    if (!qs.length) {
      host.innerHTML =
        '<div class="quiz-setup-wrap animate-fade-in">' +
          '<div class="card p-8 text-center">' +
            '<div style="font-size:3rem;margin-bottom:1rem;">🎉</div>' +
            '<h2>Your Memory Queue is 100% Cleared!</h2>' +
            '<p class="muted mt-2">Zero questions due for Leitner spaced repetition review right now.<br>' +
              'Questions will automatically return here as their review intervals expire.</p>' +
            '<div class="row row--wrap gap-3 mt-6" style="justify-content:center">' +
              '<a class="btn btn--primary" href="#/quiz">Browse Unit Quizzes</a>' +
              '<a class="btn btn--ghost" href="#/dashboard">Check Dashboard</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      return;
    }
    start(shuffle(qs), "review", "Smart Memory Review (" + qs.length + " Due)", false, 0, "shuffle", "all", null);
  }

  /* ============================================================
     4. START ACTIVE TEST RUN
     ============================================================ */
  function start(questions, scope, label, exam, minutes, orderMode, subSectionId, unitId) {
    if (!questions.length) { app.toast("Question set is empty"); location.hash = "#/quiz"; return; }

    resetRun();

    run = {
      active: true,
      qs: questions,
      scope: scope,
      label: label,
      exam: !!exam,
      minutes: minutes || 20,
      orderMode: orderMode || "sequence",
      subSectionId: subSectionId || "all",
      unitId: unitId || null,
      i: 0,
      answers: {},
      times: {},
      flags: [],
      checked: {},
      graded: {},
      streak: 0,
      scoreXP: 0,
      startedAt: Date.now(),
      endsAt: exam ? Date.now() + (minutes * 60 * 1000) : 0,
      showMap: false
    };

    persistRun();
    startTimer();
    paintRun();
  }

  function startTimer() {
    if (run._timer) clearInterval(run._timer);
    run._timer = setInterval(function () {
      if (!run || !run.active) { clearInterval(run._timer); return; }
      if (run.exam) {
        var remain = run.endsAt - Date.now();
        var timerEl = document.getElementById("qtimer");
        if (timerEl) {
          timerEl.textContent = fmtTime(Math.max(0, remain));
          if (remain < 120000) timerEl.classList.add("is-urgent");
        }
        if (remain <= 0) {
          clearInterval(run._timer);
          finish(true);
        }
      } else {
        var elap = Date.now() - run.startedAt;
        var elapEl = document.getElementById("qelapsed");
        if (elapEl) elapEl.textContent = fmtTime(elap);
      }
    }, 500);
  }

  function stopRun() {
    if (run) {
      if (run._timer) clearInterval(run._timer);
      if (run._keyHandler) window.removeEventListener("keydown", run._keyHandler);
    }
  }

  function accrueTime() {
    if (!run || !run.active) return;
    var now = Date.now();
    var last = run._tickAt || run.startedAt;
    var delta = Math.max(0, now - last);
    run.times[run.i] = (run.times[run.i] || 0) + delta;
    run._tickAt = now;
  }

  function persistRun() {
    if (!run || !run.active) return;
    if (store.setQuizRun) {
      store.setQuizRun({
        scope: run.scope,
        label: run.label,
        exam: run.exam,
        minutes: run.minutes,
        orderMode: run.orderMode,
        subSectionId: run.subSectionId,
        unitId: run.unitId,
        startedAt: run.startedAt,
        endsAt: run.endsAt,
        i: run.i,
        answers: run.answers,
        times: run.times,
        flags: run.flags,
        checked: run.checked,
        graded: run.graded,
        streak: run.streak,
        scoreXP: run.scoreXP,
        qKeys: run.qs.map(function (q) { return q.key; })
      });
    }
  }

  function savedRun() {
    return store.getQuizRun ? store.getQuizRun() : null;
  }

  function resumeSavedRun() {
    var s = savedRun();
    if (!s || !s.qKeys || !s.qKeys.length) return;
    var all = bankFor(scopeUnits("grand"), ["mcq", "tf", "fib"]);
    var byKey = {};
    all.forEach(function (q) { byKey[q.key] = q; });
    var qs = s.qKeys.map(function (k) { return byKey[k]; }).filter(Boolean);
    if (!qs.length) { if (store.clearQuizRun) store.clearQuizRun(); renderHub(); return; }

    run = {
      active: true,
      qs: qs,
      scope: s.scope,
      label: s.label,
      exam: s.exam,
      minutes: s.minutes,
      orderMode: s.orderMode || "sequence",
      subSectionId: s.subSectionId || "all",
      unitId: s.unitId || null,
      i: Math.min(s.i || 0, qs.length - 1),
      answers: s.answers || {},
      times: s.times || {},
      flags: s.flags || [],
      checked: s.checked || {},
      graded: s.graded || {},
      streak: s.streak || 0,
      scoreXP: s.scoreXP || 0,
      startedAt: s.startedAt || Date.now(),
      endsAt: s.endsAt || 0,
      showMap: false
    };

    startTimer();
    paintRun();
  }

  function fmtTime(ms) {
    if (ms <= 0) return "00:00";
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  function fmtDur(ms) {
    var s = Math.round(ms / 1000);
    if (s < 60) return s + "s";
    var m = Math.floor(s / 60);
    s = s % 60;
    return m + "m " + s + "s";
  }

  function isAnswered(v) { return v !== undefined && v !== null && v !== ""; }
  function answeredCount() {
    if (!run) return 0;
    return Object.keys(run.answers).filter(function (k) { return isAnswered(run.answers[k]); }).length;
  }

  function toneFor(p) { return p >= 75 ? "chip--ok" : p >= PASS_MARK ? "chip--warn" : "chip--danger"; }
  function verdictFor(p) {
    return p >= 90 ? "Distinction 🏆" : p >= 75 ? "First Class 🌟" : p >= PASS_MARK ? "Pass 👍" : "Needs Revision 📖";
  }

  /* ============================================================
     5. ACTIVE QUIZ RUN SCREEN (STREAMLINED & PLAYFUL)
     ============================================================ */
  function paintRun() {
    if (!run || !run.active) return;
    run._tickAt = run._tickAt || Date.now();

    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var locked = !!run.checked[run.i];
    var showFeedback = !run.exam && locked;

    var body = "";
    if (q.format === "mcq") {
      var optKeyLetters = ["A", "B", "C", "D", "E", "F"];
      var optColors = ["is-blue", "is-teal", "is-amber", "is-purple", "is-rose", "is-indigo"];
      body = '<div class="quiz-opts-grid">' +
        (q.o || []).map(function (opt, i) {
          var cls = "quiz-opt-btn " + (optColors[i % optColors.length]);
          if (given === i) cls += " is-picked";
          if (showFeedback) {
            if (i === q.a) cls += " is-correct animate-pop";
            else if (given === i) cls += " is-wrong animate-shake";
          }
          return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (showFeedback ? ' disabled' : '') + '>' +
            '<span class="quiz-opt-badge">' + optKeyLetters[i] + '</span>' +
            '<span class="quiz-opt-text">' + app.esc(opt) + '</span>' +
            (showFeedback && i === q.a ? '<span class="quiz-opt-state-icon">✔</span>' : '') +
            (showFeedback && given === i && i !== q.a ? '<span class="quiz-opt-state-icon">✖</span>' : '') +
          '</button>';
        }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="quiz-tf-grid">' +
        [true, false].map(function (v) {
          var isT = v === true;
          var cls = "quiz-tf-btn " + (isT ? "is-true" : "is-false");
          if (given === v) cls += " is-picked";
          if (showFeedback) {
            if (v === q.a) cls += " is-correct animate-pop";
            else if (given === v) cls += " is-wrong animate-shake";
          }
          return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (showFeedback ? ' disabled' : '') + '>' +
            '<span class="quiz-tf-icon">' + (isT ? "👍" : "👎") + '</span>' +
            '<span class="quiz-tf-label">' + (isT ? "TRUE" : "FALSE") + '</span>' +
            (showFeedback && v === q.a ? '<span class="quiz-opt-state-icon">✔</span>' : '') +
            (showFeedback && given === v && v !== q.a ? '<span class="quiz-opt-state-icon">✖</span>' : '') +
          '</button>';
        }).join("") + '</div>';

    } else {
      // Fill in the blanks
      body = '<div class="quiz-fib-card">' +
        '<div class="quiz-fib-input-box">' +
          '<input type="text" id="fibinput" class="quiz-fib-input" placeholder="Type your answer here..." autocomplete="off" autocorrect="off" spellcheck="false" ' +
            'value="' + app.esc(isAnswered(given) ? String(given) : "") + '"' + (showFeedback ? ' disabled' : '') + '>' +
          (!showFeedback
            ? '<button type="button" class="btn btn--primary" id="fibsubmit">' + (run.exam ? 'Save Answer' : 'Check Answer ➔') + '</button>'
            : '') +
        '</div>' +
        (showFeedback
          ? '<div class="quiz-fib-reveal ' + (isCorrect(q, given) ? 'is-correct animate-pop' : 'is-wrong animate-shake') + '">' +
              '<span class="quiz-fib-tag">' + (isCorrect(q, given) ? '✔ Spot On!' : '✖ Key Answer') + '</span>' +
              '<span class="quiz-fib-ans"><b>Correct Term:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
            '</div>'
          : '') +
      '</div>';
    }

    var answered = answeredCount();
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var flagged = !!run.flags[run.i];
    var lastOne = run.i === run.qs.length - 1;
    var progressPct = Math.round(((run.i + 1) / run.qs.length) * 100);

    // Navigation button logic (NEVER traps on FIB!)
    var nextButtonHtml = "";
    if (lastOne) {
      nextButtonHtml = '<button class="btn btn--primary btn--lg quiz-finish-btn pulse-glow" id="finishbtn">Finish &amp; See Results 🏆</button>';
    } else {
      if (showFeedback || run.exam) {
        nextButtonHtml = '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question ➔</button>';
      } else {
        nextButtonHtml = '<button class="btn btn--primary btn--lg" id="nextbtn">' + (isAnswered(given) ? 'Next Question ➔' : 'Skip / Next ➔') + '</button>';
      }
    }

    host.innerHTML =
      '<div class="quiz-arena-wrap animate-fade-in">' +

        /* Streamlined Top HUD */
        '<div class="quiz-hud">' +
          '<div class="quiz-hud__left">' +
            '<button class="btn btn--sm btn--ghost" id="quitbtn" title="Leave quiz">✕ Exit</button>' +
            '<button type="button" class="quiz-map-toggle-btn' + (run.showMap ? ' is-active' : '') + '" id="maptogglebtn">' +
              '🗺️ Question ' + (run.i + 1) + ' of ' + run.qs.length + ' <span class="arrow-down">▾</span>' +
            '</button>' +
          '</div>' +

          '<div class="quiz-hud__right">' +
            '<button type="button" class="quiz-hud-iconbtn" id="soundtogglebtn" title="Toggle Sound">' +
              (soundFx.isEnabled() ? '🔊' : '🔇') +
            '</button>' +

            (run.streak >= 2 ? '<span class="quiz-streak-pill animate-bounce">🔥 Streak ' + run.streak + '</span>' : '') +

            (run.exam
              ? '<span class="quiz-hud-pill quiz-hud-pill--timer" id="qtimer">⏱️ ' + fmtTime(run.endsAt - Date.now()) + '</span>'
              : '<span class="quiz-hud-pill quiz-hud-pill--timer" id="qelapsed">⏱️ ' + fmtTime(Date.now() - run.startedAt) + '</span>') +

            '<button type="button" class="quiz-hud-pill' + (flagged ? ' is-flagged' : '') + '" id="flagbtn" title="Flag for review (F)">' +
              (flagged ? '🚩 Flagged' : '⚑ Flag') +
            '</button>' +
          '</div>' +
        '</div>' +

        /* Vibrant Candy Progress Bar */
        '<div class="quiz-candy-bar">' +
          '<div class="quiz-candy-bar__fill" style="width:' + progressPct + '%"></div>' +
        '</div>' +

        /* Expandable Question Map Popover Drawer */
        (run.showMap ? questionMapHtml() : '') +

        /* Main Question Card */
        '<div class="quiz-arena-card mt-6">' +
          '<div class="quiz-card-tags">' +
            '<span class="quiz-chip quiz-chip--type">' + FMT_ICONS[q.format] + ' ' + FMT_NAMES[q.format] + '</span>' +
            '<span class="quiz-chip quiz-chip--unit">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            (subMeta ? '<span class="quiz-chip quiz-chip--module">' + subMeta.icon + ' ' + app.esc(subMeta.title) + '</span>' : '') +
            '<span class="quiz-chip quiz-chip--diff">' + DIFF_STARS[q.diff] + ' ' + DIFF_NAMES[q.diff] + '</span>' +
          '</div>' +

          '<h2 class="quiz-question-prompt mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          /* Friendly Explanation Box */
          (showFeedback && q.e
            ? '<div class="quiz-explain-card mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="quiz-explain-head">' +
                  '<span>' + (isCorrect(q, given) ? '🎉 Excellent! Correct Answer' : '💡 Key Clinical Concept & Explanation') + '</span>' +
                '</div>' +
                '<p class="quiz-explain-body">' + q.e + '</p>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="quiz-explain-link mt-3" href="#/topic/' + q.topicId + '">📖 Read Syllabus Lesson: ' + app.esc(syllabus.topicById[q.topicId].title) + ' ➔</a>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        /* Docked Bottom Controls (Unified & Complete!) */
        '<div class="quiz-bottom-dock mt-6">' +
          '<button class="btn btn--outline quiz-dock-btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>← Previous</button>' +

          '<div class="quiz-dock-center">' +
            '<span class="quiz-dock-counter">' + answered + ' of ' + run.qs.length + ' Answered</span>' +
          '</div>' +

          nextButtonHtml +
        '</div>' +

        (run.exam
          ? '<div class="quiz-exam-submit-row mt-4">' +
              '<button class="btn btn--block btn--soft" id="submitbtn">Submit Paper Now</button>' +
            '</div>'
          : '') +

        '<div class="quiz-shortcuts-hint mt-4">' +
          'Keyboard: <b>1–4 / A–D</b> select option · <b>T / F</b> true/false · <b>Enter</b> next · <b>F</b> flag · <b>← →</b> arrows' +
        '</div>' +

      '</div>';

    wireRun(q);
  }

  function questionMapHtml() {
    return '<div class="quiz-map-popover animate-scale-up" id="quizmap">' +
      '<div class="quiz-map-header">' +
        '<b>Question Map (' + answeredCount() + '/' + run.qs.length + ' Answered)</b>' +
        '<span class="small muted">Click any question to jump</span>' +
      '</div>' +
      '<div class="quiz-map-grid mt-3">' +
        run.qs.map(function (q, i) {
          var cls = "quiz-map-dot";
          if (i === run.i) cls += " is-current";
          if (run.checked[i] && !run.exam) cls += isCorrect(q, run.answers[i]) ? " is-correct" : " is-wrong";
          else if (isAnswered(run.answers[i])) cls += " is-answered";
          if (run.flags[i]) cls += " is-flagged";
          return '<button type="button" class="' + cls + '" data-jump="' + i + '" title="Question ' + (i + 1) + '">' +
            (i + 1) + (run.flags[i] ? '🚩' : '') +
          '</button>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  function isCorrect(q, given) {
    if (!q || !isAnswered(given)) return false;
    if (q.format === "mcq" || q.format === "tf") return given === q.a;
    var norm = normAnswer(given);
    var accepted = Array.isArray(q.a) ? q.a : [q.a];
    return accepted.some(function (acc) { return normAnswer(acc) === norm; });
  }

  function normAnswer(v) {
    return String(v == null ? "" : v).trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,;:!]+$/, "");
  }

  function submitAnswer(value) {
    var q = run.qs[run.i];
    if (run.checked[run.i] && !run.exam) return;
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
        run.scoreXP = (run.scoreXP || 0) + 10;
        soundFx.playCorrect();
        if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row! Combo x2!");
        else if (run.streak === 5 && app.popMilestone) { soundFx.playFanfare(); app.popMilestone("🚀 5 Streak! Unstoppable!"); }
        else if (run.streak === 10 && app.popMilestone) { soundFx.playFanfare(); app.popMilestone("👑 10 Streak! Bio Champion!"); }
      } else {
        run.streak = 0;
        soundFx.playWrong();
      }
    }
    persistRun();
    paintRun();

    if (!run.exam && isCorrect(q, value) && app.burstConfetti) {
      var anchor = document.querySelector(".quiz-opt-btn.is-correct") || document.querySelector(".quiz-tf-btn.is-correct") || document.querySelector(".quiz-arena-card");
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
    // Option clicks
    document.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var raw = b.getAttribute("data-pick");
        submitAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
      });
    });

    // Map popover toggle
    var mapToggle = document.getElementById("maptogglebtn");
    if (mapToggle) {
      mapToggle.addEventListener("click", function () {
        run.showMap = !run.showMap;
        var mapEl = document.getElementById("quizmap");
        if (mapEl) {
          mapEl.style.display = run.showMap ? "block" : "none";
        } else {
          paintRun();
        }
      });
    }

    // Sound toggle
    var soundToggle = document.getElementById("soundtogglebtn");
    if (soundToggle) {
      soundToggle.addEventListener("click", function () {
        var isNowOn = soundFx.toggle();
        soundToggle.textContent = isNowOn ? "🔊" : "🔇";
        app.toast(isNowOn ? "Sound Effects Enabled 🔊" : "Muted 🔇");
      });
    }

    // Question navigator dots
    document.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        run.showMap = false;
        goTo(parseInt(b.getAttribute("data-jump"), 10));
      });
    });

    function submitFib() {
      var input = document.getElementById("fibinput");
      var val = input ? input.value : run.answers[run.i];
      if (!isAnswered(val)) { app.toast("Type an answer or tap Skip ➔"); return; }
      submitAnswer(val);
    }

    // FIB input
    var fib = document.getElementById("fibinput");
    if (fib) {
      if (!run.checked[run.i]) setTimeout(function () { fib.focus(); }, 60);
      fib.addEventListener("input", function () { run.answers[run.i] = fib.value; });
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
      if (confirm("Exit this test? Partial answers will be preserved so you can resume anytime.")) {
        leave();
        location.hash = "#/quiz";
      }
    });

    // Keyboard handlers
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
              e.preventDefault(); submitAnswer(map[e.key]); return;
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
    if (flagged > 0) msg += flagged + " question" + (flagged === 1 ? " is" : "s are") + " marked with a flag. ";
    msg += "Submit your paper now?";

    if (left === 0 && flagged === 0) finish(false);
    else if (confirm(msg)) finish(false);
  }

  /* ============================================================
     6. FINISH TEST & GENERATE CELEBRATION REPORT
     ============================================================ */
  function finish(timedOut) {
    if (!run) return;
    accrueTime();
    stopRun();

    var qs = run.qs;
    var answers = run.answers;
    var times = run.times;
    var flags = run.flags;

    var total = qs.length;
    var correct = 0;
    var wrong = 0;
    var skipped = 0;

    var units = {}, fmts = {}, topics = {}, subs = {}, diffs = {};

    qs.forEach(function (q, i) {
      var g = answers[i];
      var ok = isCorrect(q, g);
      var answered = isAnswered(g);

      if (!answered) skipped++;
      else if (ok) correct++;
      else wrong++;

      if (run.exam && answered) store.gradeSrs(q.key, ok);

      // Aggregations
      var u = q.unitId;
      units[u] = units[u] || { total: 0, right: 0 };
      units[u].total++; if (ok) units[u].right++;

      var f = q.format;
      fmts[f] = fmts[f] || { total: 0, right: 0 };
      fmts[f].total++; if (ok) fmts[f].right++;

      if (q.topicId) {
        topics[q.topicId] = topics[q.topicId] || { total: 0, right: 0 };
        topics[q.topicId].total++; if (ok) topics[q.topicId].right++;
      }

      if (q.subSection) {
        subs[q.subSection] = subs[q.subSection] || { total: 0, right: 0 };
        subs[q.subSection].total++; if (ok) subs[q.subSection].right++;
      }

      var d = String(q.diff || 1);
      diffs[d] = diffs[d] || { total: 0, right: 0 };
      diffs[d].total++; if (ok) diffs[d].right++;
    });

    var totalMs = Object.keys(times).reduce(function (n, k) { return n + (times[k] || 0); }, 0);
    var seconds = Math.max(1, Math.round(totalMs / 1000));
    var reportId = "rep_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 6);

    var report = {
      id: reportId,
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      exam: run.exam,
      minutes: run.minutes,
      orderMode: run.orderMode,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      timedOut: !!timedOut,
      total: total,
      correct: correct,
      seconds: seconds,
      qKeys: qs.map(function (q) { return q.key; }),
      answers: answers,
      times: times,
      flags: flags
    };

    var attempt = {
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      exam: run.exam,
      minutes: run.minutes,
      total: total,
      correct: correct,
      seconds: seconds,
      timedOut: !!timedOut,
      reportId: reportId,
      units: units,
      formats: fmts,
      topics: topics,
      subs: subs,
      diffs: diffs
    };

    store.saveReport(report);
    store.saveAttempt(attempt);
    if (store.clearQuizRun) store.clearQuizRun();

    resetRun();
    paintReport(report, true);
  }

  function renderSavedReport(id) {
    resetRun();
    var rep = store.getReport ? store.getReport(id) : null;
    if (!rep) {
      host.innerHTML = '<div class="card p-8 text-center"><h2>Report Not Found</h2>' +
        '<p class="muted mt-2">This report may have been cleared or expired.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Back to Quizzes</a></div>';
      return;
    }
    paintReport(rep, false);
  }

  function hydrate(report) {
    var all = bankFor(scopeUnits("grand"), ["mcq", "tf", "fib"]);
    var byKey = {};
    all.forEach(function (q) { byKey[q.key] = q; });

    return (report.qKeys || []).map(function (k, i) {
      var q = byKey[k];
      return {
        key: k,
        q: q,
        given: report.answers ? report.answers[i] : null,
        time: report.times ? (report.times[i] || 0) : 0,
        flagged: report.flags ? !!report.flags[i] : false,
        ok: q ? isCorrect(q, report.answers ? report.answers[i] : null) : false,
        skipped: !isAnswered(report.answers ? report.answers[i] : null)
      };
    }).filter(function (r) { return !!r.q; });
  }

  /* ============================================================
     7. POST-TEST CELEBRATION REPORT SCREEN
     ============================================================ */
  function paintReport(report, isFresh) {
    var rows = hydrate(report);
    var total = rows.length || report.total || 0;
    var correct = rows.filter(function (r) { return r.ok; }).length;
    var wrong = rows.filter(function (r) { return !r.ok && !r.skipped; }).length;
    var skipped = rows.filter(function (r) { return r.skipped; }).length;
    var flagged = rows.filter(function (r) { return r.flagged; }).length;
    var percent = app.pct(correct, total);
    var verdict = verdictFor(percent);

    var timed = rows.filter(function (r) { return r.time > 0; });
    var timeSum = timed.reduce(function (n, r) { return n + r.time; }, 0);
    var avgMs = timed.length ? Math.round(timeSum / timed.length) : 0;

    var byFormat = groupBy(rows, function (r) { return r.q.format; });
    var byUnit   = groupBy(rows, function (r) { return r.q.unitId; });
    var bySub    = groupBy(rows.filter(function (r) { return r.q.subSection; }), function (r) { return r.q.subSection; });
    var byDiff   = groupBy(rows, function (r) { return String(r.q.diff); });

    var headerThemes = {
      distinction: { badge: "🏆 TOP RANK BIOCHEMIST", title: "Phenomenal Performance! Distinction Grade", color: "var(--ok)" },
      first: { badge: "🌟 FIRST CLASS HONORS", title: "Outstanding Work! Strong Clinical Recall", color: "var(--accent)" },
      pass: { badge: "👍 SOLID PASS", title: "Well Done! Foundation is Solid", color: "var(--warn)" },
      fail: { badge: "🌱 REVISION OPPORTUNITY", title: "Good Practice! Strengthen Weak Modules", color: "var(--danger)" }
    };
    var theme = percent >= 90 ? headerThemes.distinction : percent >= 75 ? headerThemes.first : percent >= PASS_MARK ? headerThemes.pass : headerThemes.fail;

    host.innerHTML =
      '<div class="quiz-report-wrap animate-fade-in" id="quizreport">' +

        /* Top Hero */
        '<div class="quiz-report-hero">' +
          '<div class="row row--wrap items-center gap-2 mb-4" style="justify-content:center">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Arena</a>' +
            '<span class="quiz-badge-soft">' + app.esc(report.label || "Quiz") + '</span>' +
            (report.exam ? '<span class="quiz-badge-soft quiz-badge-soft--warn">⏱️ Exam Mode</span>' : '') +
            '<span class="quiz-badge-soft font-mono">' + new Date(report.at).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + '</span>' +
          '</div>' +

          '<div class="quiz-report-ring-wrap">' +
            app.ringHtml(percent, 160) +
          '</div>' +

          '<span class="quiz-report-kicker mt-4">' + theme.badge + '</span>' +
          '<h1 class="quiz-report-title mt-2">' + correct + ' out of ' + total + ' Correct (' + percent + '%)</h1>' +
          '<p class="quiz-report-sub">' + theme.title + '</p>' +
        '</div>' +

        /* 4 Big Metric Cards */
        '<div class="quiz-report-stats-grid mt-6">' +
          reportStatCard("Score", percent + "%", verdict, "target", "is-blue") +
          reportStatCard("Correct", correct, pctOf(correct, total) + "% of questions", "check", "is-green") +
          reportStatCard("Missed", (wrong + skipped), (wrong + " wrong · " + skipped + " skipped"), "crossCircle", "is-orange") +
          reportStatCard("Pace", avgMs ? fmtDur(avgMs) : "—", "avg time per question", "clock", "is-purple") +
        '</div>' +

        /* Primary Action Buttons */
        '<div class="quiz-report-actions mt-8">' +
          ((wrong + skipped) > 0
            ? '<a class="btn btn--primary btn--lg pulse-glow" href="#/quiz/retry/' + report.id + '">🎯 Retry Missed Questions (' + (wrong + skipped) + ')</a>'
            : '') +
          '<a class="btn btn--lg btn--outline" href="#/quiz/again/' + report.id + '">🔁 Retake Quiz</a>' +
          '<a class="btn btn--lg btn--outline" href="#/quiz/review">🧠 Smart Review Queue</a>' +
          '<a class="btn btn--lg btn--ghost" href="#/dashboard">📊 My Dashboard</a>' +
        '</div>' +

        /* Filterable Interactive Answer Sheet */
        '<div class="quiz-sheet-section mt-12">' +
          '<div class="quiz-sheet-head">' +
            '<div>' +
              '<h2 class="quiz-sheet-title">📋 Full Answer Sheet & Key Concept Notes</h2>' +
              '<p class="small muted mt-1">Review every question, your selected answer, the standard key, and detailed high-yield explanations.</p>' +
            '</div>' +
            '<div class="quiz-sheet-tabs" id="sheettabs">' +
              '<button type="button" class="quiz-sheet-tab is-active" data-filter="all">All (' + total + ')</button>' +
              '<button type="button" class="quiz-sheet-tab" data-filter="wrong">❌ Missed (' + (wrong + skipped) + ')</button>' +
              '<button type="button" class="quiz-sheet-tab" data-filter="correct">✔ Correct (' + correct + ')</button>' +
              (flagged ? '<button type="button" class="quiz-sheet-tab" data-filter="flagged">🚩 Flagged (' + flagged + ')</button>' : '') +
            '</div>' +
          '</div>' +

          '<div class="quiz-sheet-list mt-4" id="sheetlist">' +
            rows.map(function (r, i) { return reportItemHtml(r, i); }).join("") +
          '</div>' +
        '</div>' +

      '</div>';

    wireReport(rows);

    if (isFresh) {
      if (percent >= 75) {
        soundFx.playFanfare();
        if (app.burstConfetti) {
          setTimeout(function () {
            var el = document.querySelector(".quiz-report-ring-wrap");
            if (el) app.burstConfetti(el);
          }, 200);
        }
      }
    }
  }

  function reportStatCard(label, val, sub, iconName, colorCls) {
    return '<div class="quiz-stat-card ' + colorCls + '">' +
      '<div class="quiz-stat-card__head">' +
        '<span class="quiz-stat-card__label">' + label + '</span>' +
        '<span class="quiz-stat-card__icon">' + app.icon(iconName) + '</span>' +
      '</div>' +
      '<div class="quiz-stat-card__val">' + val + '</div>' +
      '<div class="quiz-stat-card__sub">' + sub + '</div>' +
    '</div>';
  }

  function reportItemHtml(r, i) {
    var q = r.q;
    var isRight = r.ok;
    var isSkip  = r.skipped;
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);

    var ansHtml = "";
    if (q.format === "mcq") {
      var optKeyLetters = ["A", "B", "C", "D", "E", "F"];
      ansHtml = '<div class="quiz-ans-sheet-opts">' +
        (q.o || []).map(function (opt, oIdx) {
          var cls = "quiz-ans-opt";
          if (oIdx === q.a) cls += " is-correct-key";
          if (r.given === oIdx) cls += (isRight ? " is-picked-right" : " is-picked-wrong");
          return '<div class="' + cls + '">' +
            '<span class="quiz-ans-opt-badge">' + optKeyLetters[oIdx] + '</span>' +
            '<span class="quiz-ans-opt-text">' + app.esc(opt) + '</span>' +
            (oIdx === q.a ? '<span class="quiz-ans-badge-right">Correct Key</span>' : '') +
            (r.given === oIdx && !isRight ? '<span class="quiz-ans-badge-wrong">Your Answer</span>' : '') +
          '</div>';
        }).join("") + '</div>';

    } else if (q.format === "tf") {
      ansHtml = '<div class="quiz-ans-sheet-opts">' +
        [true, false].map(function (v) {
          var cls = "quiz-ans-opt";
          if (v === q.a) cls += " is-correct-key";
          if (r.given === v) cls += (isRight ? " is-picked-right" : " is-picked-wrong");
          return '<div class="' + cls + '">' +
            '<span>' + (v ? "👍 TRUE" : "👎 FALSE") + '</span>' +
            (v === q.a ? '<span class="quiz-ans-badge-right">Correct Key</span>' : '') +
            (r.given === v && !isRight ? '<span class="quiz-ans-badge-wrong">Your Answer</span>' : '') +
          '</div>';
        }).join("") + '</div>';

    } else {
      // FIB
      ansHtml = '<div class="quiz-ans-fib-box">' +
        '<div><b>Your Answer:</b> ' + (isAnswered(r.given) ? '<span class="' + (isRight ? 'text-ok' : 'text-danger') + '">' + app.esc(String(r.given)) + '</span>' : '<span class="muted">Left blank</span>') + '</div>' +
        '<div class="mt-1"><b>Standard Key:</b> <span class="text-ok font-bold">' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span></div>' +
      '</div>';
    }

    var filterTag = isRight ? "correct" : "wrong";
    if (r.flagged) filterTag += " flagged";

    return '<div class="quiz-sheet-item ' + (isRight ? 'is-correct' : 'is-wrong') + '" data-filter-tag="' + filterTag + '">' +
      '<div class="quiz-sheet-item__head">' +
        '<div class="quiz-sheet-item__title">' +
          '<span class="quiz-sheet-no">#' + (i + 1) + '</span>' +
          '<span class="quiz-sheet-q">' + app.esc(q.q) + '</span>' +
        '</div>' +
        '<div class="quiz-sheet-item__badges">' +
          (r.flagged ? '<span class="chip chip--warn">🚩 Flagged</span>' : '') +
          '<span class="quiz-badge-soft ' + (isRight ? 'is-ok' : 'is-wrong') + '">' +
            (isRight ? '✔ Correct' : isSkip ? '⚪ Skipped' : '✖ Incorrect') +
          '</span>' +
        '</div>' +
      '</div>' +

      ansHtml +

      (q.e
        ? '<div class="quiz-sheet-explain mt-3">' +
            '<b>💡 Explanation:</b> ' + q.e +
            (q.topicId && syllabus.topicById[q.topicId]
              ? '<div class="mt-2"><a class="small" href="#/topic/' + q.topicId + '">📖 Read Syllabus Topic: ' + app.esc(syllabus.topicById[q.topicId].title) + ' ➔</a></div>'
              : '') +
          '</div>'
        : '') +
    '</div>';
  }

  function wireReport(rows) {
    var tabs = document.querySelectorAll("#sheettabs [data-filter]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("is-active"); });
        tab.classList.add("is-active");
        var f = tab.getAttribute("data-filter");

        document.querySelectorAll("#sheetlist .quiz-sheet-item").forEach(function (card) {
          var tags = card.getAttribute("data-filter-tag") || "";
          if (f === "all") card.style.display = "block";
          else if (f === "wrong") card.style.display = tags.indexOf("wrong") !== -1 ? "block" : "none";
          else if (f === "correct") card.style.display = tags.indexOf("correct") !== -1 ? "block" : "none";
          else if (f === "flagged") card.style.display = tags.indexOf("flagged") !== -1 ? "block" : "none";
        });
      });
    });
  }

  function groupBy(rows, keyFn) {
    var m = {};
    rows.forEach(function (r) {
      var k = keyFn(r);
      if (!k) return;
      m[k] = m[k] || [];
      m[k].push(r);
    });
    return m;
  }

  function pctOf(n, total) { return total ? Math.round((n / total) * 100) : 0; }

  function retryWrong(id) {
    var report = store.getReport ? store.getReport(id) : null;
    if (!report) { location.hash = "#/quiz"; return; }
    var missed = hydrate(report).filter(function (r) { return !r.ok; }).map(function (r) { return r.q; });
    if (!missed.length) {
      app.toast("Nothing to retry — you scored 100%!");
      location.hash = "#/quiz/report/" + id;
      return;
    }
    start(missed, report.scope + ":retry", "🎯 Retry Missed Questions (" + missed.length + ")",
          false, 0, report.orderMode || "sequence", report.subSectionId || "all", report.unitId || null);
  }

  function retakeReport(id) {
    var report = store.getReport ? store.getReport(id) : null;
    if (!report) { location.hash = "#/quiz"; return; }
    var qs = hydrate(report).map(function (r) { return r.q; });
    if (!qs.length) { app.toast("Those questions are no longer in the bank"); location.hash = "#/quiz"; return; }
    start(shuffle(qs), report.scope, "🔁 Retake: " + (report.label || "Quiz"),
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
