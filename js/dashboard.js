/* ============================================================
   dashboard.js — Clinical Diagnostics & Analytics Engine
   ============================================================
   What this screen shows, top to bottom:
     - 0–1000 XP Biochemistry Mastery Index with a circular gauge,
       rank, and a full breakdown of where the XP came from
     - Next-best-action prescriptions (what to do in the next hour)
     - Annual Examination readiness (theory + practical)
     - Interactive Unit Mastery Matrix with filter tabs
     - Sub-section mastery: the real revision list
     - Accuracy by question format and difficulty tier
     - 5-Box Leitner spaced repetition memory pipeline
     - Quiz performance tracker and score trend
     - 84-day activity heatmap, weekday aligned
     - Assessment ledger linking to each saved test report
     - Knowledge vault (bookmarks, notes, highlights, Q&A)
   ============================================================ */

var dashboardApp = (function () {

  var activeFilter = "all";
  var PASS_MARK = 50;

  /* ---------- small helpers ---------- */
  function pctOf(right, total) { return total ? Math.round(right / total * 100) : 0; }

  function tone(p) { return p >= 75 ? "chip--ok" : p >= PASS_MARK ? "chip--warn" : "chip--danger"; }

  function barTone(p) { return p >= 75 ? "is-ok" : p >= PASS_MARK ? "is-warn" : "is-low"; }

  function shorten(s, n) {
    if (!s) return "";
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

  /* The quiz engine owns the sub-section metadata; ask it, but never assume
     it has loaded. */
  function subMeta(id) {
    if (window.quizApp && quizApp.subMeta) {
      var m = quizApp.subMeta(id);
      if (m) return m;
    }
    return { id: id, icon: "📘", title: id, unitId: null };
  }

  /* The dashboard asks the quiz engine for the due count so stale Leitner
     keys (questions that were edited out of the bank) cannot inflate it. */
  function dueCount() {
    if (window.quizApp && quizApp.dueCount) return quizApp.dueCount();
    return (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
  }

  /* ============================================================
     MAIN RENDER
     ============================================================ */
  function render(host) {
    if (!host) return;

    var readMap    = store.getRead() || {};
    var quiz       = store.getQuiz() || { attempts: [], byUnit: {}, byFormat: {}, byTopic: {}, bySub: {}, byDiff: {} };
    var streak     = store.computeStreak() || { current: 0, longest: 0, totalDays: 0 };
    var activity   = store.getActivity() || {};
    var srs        = store.getSrs() || {};
    var dueCards   = dueCount();
    var notes      = store.getNotes() || {};
    var bms        = store.getBookmarks() || [];
    var highlights = store.getHighlights() || {};
    var qaDone     = store.getQaDone() || [];

    // Syllabus counts
    var theoryUnits    = syllabus.theory || [];
    var practicalUnits = syllabus.practical || [];
    var allUnits       = theoryUnits.concat(practicalUnits);
    var totalTopics    = allUnits.reduce(function (n, u) { return n + (u.topics ? u.topics.length : 0); }, 0);

    // Only count read marks that still point at a real topic — an old backup
    // can otherwise push coverage above 100%.
    var readCount = Object.keys(readMap).filter(function (id) { return !!syllabus.topicById[id]; }).length;
    var readPct   = pctOf(readCount, totalTopics);

    // Quiz statistics
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = pctOf(totalCorrect, totalQ);

    // Spaced repetition statistics
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, (srs[k] && srs[k].box) || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[2] + boxCounts[3] + boxCounts[4]; // Box 3, 4, 5
    var retentionRate = pctOf(masteredCount, srsKeys.length);

    // Highlights stats
    var totalHighlights = 0;
    var hlColorCounts = { yellow: 0, green: 0, blue: 0, pink: 0, orange: 0, purple: 0 };
    Object.keys(highlights).forEach(function (topId) {
      var arr = highlights[topId] || [];
      totalHighlights += arr.length;
      arr.forEach(function (h) {
        if (h && h.color && hlColorCounts[h.color] !== undefined) hlColorCounts[h.color]++;
      });
    });

    // ---- Mastery XP (0 to 1000) --------------------------------
    var readXP = Math.round((readCount / (totalTopics || 1)) * 400);          // 40% weight
    var quizFactor = totalQ ? (totalCorrect / totalQ) : 0;
    var quizVolume = Math.min(1, attempts.length / 8);
    var quizXP = Math.round((quizFactor * 0.7 + quizVolume * 0.3) * 350);     // 35% weight
    var srsFactor = srsKeys.length ? (masteredCount / srsKeys.length) : 0;
    var srsVolume = Math.min(1, srsKeys.length / 25);
    var srsXP = Math.round((srsFactor * 0.6 + srsVolume * 0.4) * 150);        // 15% weight
    var streakFactor = Math.min(1, streak.current / 7);
    var daysFactor = Math.min(1, streak.totalDays / 10);
    var consistencyXP = Math.round((streakFactor * 0.6 + daysFactor * 0.4) * 100); // 10% weight

    var totalXP = Math.min(1000, readXP + quizXP + srsXP + consistencyXP);
    var readinessPct = Math.min(100, Math.round(totalXP / 10));
    var rank = getRank(totalXP);

    // Circumference for the 175px gauge (radius = 70)
    var radius = 70;
    var circumference = 2 * Math.PI * radius;
    var strokeOffset = circumference - (circumference * readinessPct) / 100;

    var isBlank = !attempts.length && !readCount && !srsKeys.length;

    host.innerHTML =
      '<div class="dash-elite">' +

        /* 1. Hero Cockpit Card */
        '<div class="dash-hero">' +
          '<div class="dash-cockpit">' +
            '<div class="mastery-gauge-wrap">' +
              '<div class="mastery-svg-gauge">' +
                '<svg viewBox="0 0 175 175">' +
                  '<circle class="mastery-gauge-bg" cx="87.5" cy="87.5" r="' + radius + '"></circle>' +
                  '<circle class="mastery-gauge-fill" cx="87.5" cy="87.5" r="' + radius + '" ' +
                    'stroke-dasharray="' + circumference + '" ' +
                    'stroke-dashoffset="' + strokeOffset + '"></circle>' +
                '</svg>' +
                '<div class="mastery-gauge-center">' +
                  '<span class="mastery-gauge-val">' + totalXP + '</span>' +
                  '<span class="mastery-gauge-lbl">Mastery XP</span>' +
                '</div>' +
              '</div>' +
              '<div class="mastery-rank-badge">' + app.icon(rank.icon) + ' ' + rank.title + '</div>' +
            '</div>' +

            '<div class="dash-cockpit-info">' +
              '<span class="dash-eyebrow">' + app.icon("sparkle") + ' Clinical Learning Cockpit · ' + rank.stage + '</span>' +
              '<h1 class="dash-title">Veterinary Biochemistry Analytics</h1>' +
              '<p class="dash-lede">' +
                'Real-time exam readiness index, spaced retention health, and syllabus coverage across all VCI Units.' +
              '</p>' +

              '<div class="dash-metrics-grid">' +
                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Streak <span class="streak-flame">' + app.icon("flame") + '</span></div>' +
                  '<div class="dash-metric-val">' + streak.current +
                    ' <small style="font-size:14px;font-weight:600">' + (streak.current === 1 ? 'day' : 'days') + '</small></div>' +
                  '<div class="dash-metric-sub">Best: ' + streak.longest + (streak.longest === 1 ? ' day' : ' days') + '</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Syllabus <span>' + app.icon("book") + '</span></div>' +
                  '<div class="dash-metric-val">' + readPct + '%</div>' +
                  '<div class="dash-metric-sub">' + readCount + ' of ' + totalTopics + ' topics read</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Quiz Accuracy <span>' + app.icon("target") + '</span></div>' +
                  '<div class="dash-metric-val">' + (totalQ ? quizAccuracy + '%' : '—') + '</div>' +
                  '<div class="dash-metric-sub">' + attempts.length + ' test' + (attempts.length === 1 ? '' : 's') + ' completed</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Memory Health <span>' + app.icon("shield") + '</span></div>' +
                  '<div class="dash-metric-val">' + (srsKeys.length ? retentionRate + '%' : '—') + '</div>' +
                  '<div class="dash-metric-sub">' +
                    (!srsKeys.length ? 'No cards in the queue yet'
                      : dueCards ? dueCards + ' due for review'
                      : masteredCount + ' of ' + srsKeys.length + ' cards consolidated') +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        (isBlank ? firstRunPanel() : '') +

        /* 2. Next Best Action Prescriptions */
        renderPrescriptions(dueCards, allUnits, readMap, quiz, totalTopics) +

        /* 3. How the Mastery Index is built */
        renderXpBreakdown(readXP, quizXP, srsXP, consistencyXP, totalXP, rank) +

        /* 4. Annual Examination readiness */
        renderPaperReadiness(syllabus, readMap, quiz) +

        /* 5. Interactive Unit Mastery Matrix */
        '<section>' +
          '<div class="row row--between row--wrap gap-3 mb-3">' +
            '<div>' +
              '<h2>Unit Mastery Matrix</h2>' +
              '<p class="muted small mt-1">Reading progress, question bank volume, and quiz accuracy per curriculum unit.</p>' +
            '</div>' +
          '</div>' +
          renderMatrixFilters(allUnits, quiz) +
          '<div id="unit-matrix-container">' +
            renderUnitMatrix(activeFilter, allUnits, readMap, quiz) +
          '</div>' +
        '</section>' +

        /* 6. Sub-section mastery — the real revision list */
        renderSubSectionMastery(quiz) +

        /* 7. 5-Box Leitner Memory Pipeline */
        renderLeitnerPipeline(boxCounts, srsKeys.length, dueCards) +

        /* 8. Quiz Performance Tracker */
        renderQuizTracker(quiz) +

        /* 9. Activity Heatmap & Assessment Ledger */
        '<div class="grid grid--2">' +
          renderHeatmapCard(activity, streak) +
          renderRecentAttemptsCard(quiz) +
        '</div>' +

        /* 10. Study Vault & Knowledge Artifacts */
        renderKnowledgeVault(totalHighlights, hlColorCounts, Object.keys(notes).length, bms.length, qaDone.length) +

      '</div>';

    attachDashboardEvents(host, allUnits, readMap, quiz);
  }

  /* ---------- Rank calculation ---------- */
  function getRank(xp) {
    if (xp >= 750) return { title: "Master Veterinary Biochemist", stage: "Phase 4 · Elite Clinical Mastery", icon: "trophy", next: null };
    if (xp >= 500) return { title: "Senior Resident", stage: "Phase 3 · Board Exam Ready", icon: "sparkle", next: { at: 750, name: "Master Veterinary Biochemist" } };
    if (xp >= 250) return { title: "Junior Diagnostician", stage: "Phase 2 · Clinical Acumen", icon: "search", next: { at: 500, name: "Senior Resident" } };
    return { title: "Biochemistry Apprentice", stage: "Phase 1 · Foundations", icon: "book", next: { at: 250, name: "Junior Diagnostician" } };
  }

  /* ---------- A gentle start for a brand-new device ---------- */
  function firstRunPanel() {
    return '<div class="card callout mt-6">' +
      '<div class="callout__title">' + app.icon("sparkle") + ' Nothing tracked yet</div>' +
      '<p class="mt-1">This dashboard fills itself as you study. Read a topic and mark it read, ' +
      'or finish one short quiz, and every panel below starts reporting on you.</p>' +
      '<div class="row row--wrap gap-2 mt-4">' +
        '<a class="btn btn--primary btn--sm" href="#/theory">' + app.icon("book") + ' Start with Unit 1</a>' +
        '<a class="btn btn--sm" href="#/quiz/unit/unit-1">' + app.icon("quiz") + ' Take a 10-question test</a>' +
      '</div>' +
    '</div>';
  }

  /* ---------- Smart Action Prescriptions ---------- */
  function renderPrescriptions(dueCards, allUnits, readMap, quiz, totalTopics) {
    // 1. Spaced Repetition Mission
    var srsCard = dueCards > 0
      ? '<div class="presc-card is-urgent">' +
          '<div>' +
            '<span class="presc-badge presc-badge--urgent">' + app.icon("clock") + ' Priority 1 · Memory Decay</span>' +
            '<h3 class="presc-title mt-2">' + dueCards + ' Question' + (dueCards > 1 ? 's' : '') + ' Due Today</h3>' +
            '<p class="presc-desc mt-1">Ebbinghaus forgetting curve active. Review your Leitner cards now to prevent memory drop.</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/quiz/review">' + app.icon("repeat") + ' Clear Review Queue</a>' +
        '</div>'
      : '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("check") + ' Memory Safe</span>' +
            '<h3 class="presc-title mt-2">Zero Flashcards Due</h3>' +
            '<p class="presc-desc mt-1">Your spaced repetition queue is fully cleared. All active questions are in consolidation.</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/quiz">' + app.icon("quiz") + ' Practice Flashcards</a>' +
        '</div>';

    // 2. Next Unread Lesson Mission
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    var lessonCard = nextTopic
      ? '<div class="presc-card is-primary">' +
          '<div>' +
            '<span class="presc-badge presc-badge--primary">' + app.icon("book") + ' Next Up in Syllabus</span>' +
            '<h3 class="presc-title mt-2">' + app.esc(shorten(nextTopic.title, 32)) + '</h3>' +
            '<p class="presc-desc mt-1">' + app.esc(nextTopic.unitTitle) + ' · Topic ' + nextTopic.index + '</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/topic/' + nextTopic.id + '">' + app.icon("book") + ' Continue Lesson</a>' +
        '</div>'
      : '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("trophy") + ' Full Coverage</span>' +
            '<h3 class="presc-title mt-2">All ' + totalTopics + ' Topics Read</h3>' +
            '<p class="presc-desc mt-1">You have explored every theory and practical topic in the syllabus!</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/theory">' + app.icon("repeat") + ' Review Lessons</a>' +
        '</div>';

    // 3. Recommended Diagnostic Assessment — weakest sub-section if we know one,
    //    otherwise the weakest (or still untested) unit.
    var weakSub = weakestSubSection(quiz, 4);
    var quizCard;
    if (weakSub) {
      var meta = subMeta(weakSub.id);
      quizCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--primary">' + app.icon("target") + ' Target Diagnostic</span>' +
            '<h3 class="presc-title mt-2">' + meta.icon + ' ' + app.esc(shorten(meta.title, 30)) + '</h3>' +
            '<p class="presc-desc mt-1">Your weakest module at ' + weakSub.pct + '% (' + weakSub.right +
              ' of ' + weakSub.total + '). Re-test this sub-section alone.</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/quiz/unit/' + (meta.unitId || "unit-1") + '">' +
            app.icon("quiz") + ' Test This Module</a>' +
        '</div>';
    } else {
      var weakUnit = findWeakestUnit(allUnits, quiz);
      quizCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--primary">' + app.icon("target") + ' Target Diagnostic</span>' +
            '<h3 class="presc-title mt-2">' + app.esc(shorten(weakUnit.name, 32)) + '</h3>' +
            '<p class="presc-desc mt-1">' + (weakUnit.hasScore
              ? 'Current accuracy: ' + weakUnit.score + '%. Take a 10-Q test to boost mastery.'
              : 'No assessment attempts yet. Take your first test on this unit.') + '</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/quiz/unit/' + weakUnit.id + '">' +
            app.icon("quiz") + ' Test Knowledge</a>' +
        '</div>';
    }

    return '<div class="dash-prescriptions">' + srsCard + lessonCard + quizCard + '</div>';
  }

  /* ---------- Where the Mastery XP came from ----------
     A single number nobody can explain is not analytics. This panel opens
     the formula so it is obvious which lever to pull next. */
  function renderXpBreakdown(readXP, quizXP, srsXP, consistencyXP, totalXP, rank) {
    var parts = [
      { label: "Syllabus coverage", xp: readXP, max: 400, hint: "Topics marked read", icon: "book" },
      { label: "Quiz performance", xp: quizXP, max: 350, hint: "Accuracy + number of tests", icon: "target" },
      { label: "Memory retention", xp: srsXP, max: 150, hint: "Leitner cards in Box 3–5", icon: "shield" },
      { label: "Study consistency", xp: consistencyXP, max: 100, hint: "Current streak + active days", icon: "flame" }
    ];

    return '<section class="mt-8">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h2>Mastery Index Breakdown</h2>' +
          '<p class="muted small mt-1">Your ' + totalXP + ' XP out of 1000, and exactly which lever raises it fastest.</p>' +
        '</div>' +
        (rank.next
          ? '<span class="chip chip--accent">' + (rank.next.at - totalXP) + ' XP to ' + rank.next.name + '</span>'
          : '<span class="chip chip--ok">Top rank reached</span>') +
      '</div>' +

      '<div class="card mt-4">' +
        '<div class="qfmt">' +
          parts.map(function (p) {
            var pc = Math.round(p.xp / p.max * 100);
            return '<div class="qfmt-row">' +
              '<span class="qfmt-row__name">' + app.icon(p.icon) + ' ' + p.label +
                '<span class="block small faint">' + p.hint + '</span></span>' +
              '<span class="bar"><span class="bar__fill ' + barTone(pc) + '" style="width:' + pc + '%"></span></span>' +
              '<span class="qfmt-row__val">' + p.xp + ' <small>/ ' + p.max + ' XP</small></span>' +
            '</div>';
          }).join("") +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---------- Annual Examination readiness ---------- */
  function renderPaperReadiness(syl, readMap, quiz) {
    function computeScope(unitIds, label, name) {
      var units = (syl.allUnits || []).filter(function (u) { return unitIds.indexOf(u.id) !== -1; });

      var totalT = 0, readT = 0, totalQuestions = 0;
      var qAnswered = 0, qCorrect = 0, testedUnits = 0;

      units.forEach(function (u) {
        var uTopics = u.topics || [];
        totalT += uTopics.length;
        uTopics.forEach(function (t) { if (readMap[t.id]) readT++; });
        totalQuestions += app.questionCount(u.id);

        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        if (rec && rec.totalQ) {
          qAnswered += rec.totalQ;
          qCorrect += rec.totalCorrect || 0;
          testedUnits++;
        }
      });

      return {
        label: label,
        name: name,
        totalTopics: totalT,
        readTopics: readT,
        readPct: pctOf(readT, totalT),
        totalQuestions: totalQuestions,
        accuracy: pctOf(qCorrect, qAnswered),
        answered: qAnswered,
        testedUnits: testedUnits
      };
    }

    var theoryIds = (syl.theory || []).map(function (u) { return u.id; });
    var pracIds = (syl.practical || []).map(function (u) { return u.id; });

    var pAnnual = computeScope(theoryIds.concat(pracIds), "Annual Examination", "Theory 100M + Practical 60M");
    var pTheory = computeScope(theoryIds, "Theory Paper", "General, Metabolism & Analytical");

    function renderCard(p, href, cta) {
      // Readiness blends how much has been read with how well it is being answered.
      var readiness = p.answered
        ? Math.round(p.readPct * 0.5 + p.accuracy * 0.5)
        : Math.round(p.readPct * 0.5);

      return '<div class="paper-gauge-card">' +
        '<div class="paper-card-head">' +
          '<div>' +
            '<span class="paper-badge">' + p.label + '</span>' +
            '<h3 class="paper-card-title mt-1">' + p.name + '</h3>' +
            '<p class="paper-card-subtitle">' + p.totalTopics + ' topics · ' + p.totalQuestions + ' questions in the bank</p>' +
          '</div>' +
          '<span class="chip ' + tone(readiness) + ' font-bold">' + readiness + '% ready</span>' +
        '</div>' +

        '<div class="paper-progress-wrap">' +
          '<div class="row row--between small">' +
            '<span>Syllabus reading</span>' +
            '<span class="mono"><b>' + p.readPct + '%</b> (' + p.readTopics + '/' + p.totalTopics + ')</span>' +
          '</div>' +
          '<div class="bar" style="height:8px">' +
            '<div class="bar__fill" style="width:' + p.readPct + '%;background:var(--ivri-blue)"></div>' +
          '</div>' +
        '</div>' +

        '<div class="paper-progress-wrap">' +
          '<div class="row row--between small">' +
            '<span>Quiz accuracy</span>' +
            '<span class="mono">' + (p.answered ? '<b>' + p.accuracy + '%</b> (' + p.answered + ' answered)' : '<b>—</b> not tested') + '</span>' +
          '</div>' +
          '<div class="bar" style="height:8px">' +
            '<div class="bar__fill ' + barTone(p.accuracy) + '" style="width:' + (p.answered ? p.accuracy : 0) + '%"></div>' +
          '</div>' +
        '</div>' +

        '<div class="paper-stats-row">' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.readTopics + '</div>' +
            '<div class="paper-stat-item-lbl">Topics read</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.totalQuestions + '</div>' +
            '<div class="paper-stat-item-lbl">Questions</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + (p.answered ? p.accuracy + '%' : '—') + '</div>' +
            '<div class="paper-stat-item-lbl">Accuracy</div>' +
          '</div>' +
        '</div>' +

        '<a class="btn btn--outline mt-2" href="' + href + '">' + app.icon("quiz") + ' ' + cta + '</a>' +
      '</div>';
    }

    return '<section>' +
      '<h2>Annual Examination Readiness</h2>' +
      '<p class="muted small mt-1">Single board examination following the official VCI MSVE format (Theory 100 marks + Practical 60 marks).</p>' +
      '<div class="paper-readiness-grid mt-4">' +
        renderCard(pAnnual, "#/quiz/paper/annual", "Simulate the Annual Exam") +
        renderCard(pTheory, "#/quiz/grand", "Take the Grand Theory Test") +
      '</div>' +
    '</section>';
  }

  /* ---------- Unit Mastery Matrix Filter Buttons ---------- */
  function renderMatrixFilters(allUnits, quiz) {
    function count(filter) { return filterUnits(filter, allUnits, quiz).length; }

    var tabs = [
      { id: "all", label: "All Units" },
      { id: "theory", label: "Theory" },
      { id: "practical", label: "Practical" },
      { id: "weak", label: "Needs Practice (<60%)" },
      { id: "mastered", label: "Mastered (≥75%)" }
    ];

    return '<div class="matrix-filter-bar">' +
      tabs.map(function (tab) {
        return '<button class="matrix-tab-btn' + (activeFilter === tab.id ? ' is-active' : '') +
          '" data-filter="' + tab.id + '">' + tab.label +
          ' <span class="chip chip--sm ml-1">' + count(tab.id) + '</span></button>';
      }).join("") +
    '</div>';
  }

  /* One place that decides what each filter means, so the tab counts and the
     grid below can never disagree with each other. */
  function filterUnits(filter, allUnits, quiz) {
    return allUnits.filter(function (u) {
      var isTheory = u.stream !== "practical";
      if (filter === "theory") return isTheory;
      if (filter === "practical") return !isTheory;

      var acc = unitAccuracy(u.id, quiz);
      if (filter === "weak")     return acc === null || acc < 60;
      if (filter === "mastered") return acc !== null && acc >= 75;
      return true;
    });
  }

  /* Lifetime accuracy on a unit, across every test that touched it.
     `best` only reflects one run; accuracy is the honest number. */
  function unitAccuracy(unitId, quiz) {
    var rec = quiz.byUnit && quiz.byUnit["unit:" + unitId];
    if (!rec || !rec.totalQ) return null;
    return Math.round((rec.totalCorrect || 0) / rec.totalQ * 100);
  }

  /* ---------- Unit Mastery Matrix Grid ---------- */
  function renderUnitMatrix(filter, allUnits, readMap, quiz) {
    var filtered = filterUnits(filter, allUnits, quiz);

    if (!filtered.length) {
      return '<div class="card p-5 text-center text-muted">No units match the selected filter.</div>';
    }

    return '<div class="unit-mastery-grid">' +
      filtered.map(function (u) {
        var isTheory = u.stream !== "practical";
        var tag = (isTheory ? "U" : "P") + u.no;
        var streamTag = isTheory ? "Theory" : "Practical";

        var uTopics = u.topics || [];
        var done = 0;
        uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
        var readP = pctOf(done, uTopics.length);

        var qn = app.questionCount(u.id);
        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        var acc = unitAccuracy(u.id, quiz);
        var best = (rec && typeof rec.best === "number") ? rec.best : null;

        return '<div class="unit-card-elite">' +
          '<div class="unit-card-top">' +
            '<span class="unit-card-badge">' + tag + ' · ' + streamTag + '</span>' +
            (acc !== null
              ? '<span class="chip ' + tone(acc) + '">' + acc + '% accuracy</span>'
              : '<span class="chip faint">Untested</span>') +
          '</div>' +

          '<a class="unit-card-title" href="#/unit/' + u.id + '">' + app.esc(u.short || u.title) + '</a>' +

          '<div class="unit-card-bars">' +
            '<div class="unit-bar-item">' +
              '<div class="unit-bar-label">' +
                '<span>Reading progress</span>' +
                '<span class="mono">' + done + '/' + uTopics.length + ' (' + readP + '%)</span>' +
              '</div>' +
              '<div class="bar" style="height:6px">' +
                '<div class="bar__fill" style="width:' + readP + '%;background:var(--ivri-blue)"></div>' +
              '</div>' +
            '</div>' +

            '<div class="unit-bar-item">' +
              '<div class="unit-bar-label">' +
                '<span>Quiz accuracy</span>' +
                '<span class="mono">' + (acc === null ? '—'
                  : rec.totalCorrect + '/' + rec.totalQ + ' (' + acc + '%)') + '</span>' +
              '</div>' +
              '<div class="bar" style="height:6px">' +
                '<div class="bar__fill ' + barTone(acc || 0) + '" style="width:' + (acc || 0) + '%"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          (best !== null
            ? '<p class="small faint mt-2">Best single test: ' + best + '% · ' + rec.runs + ' run' + (rec.runs === 1 ? '' : 's') + '</p>'
            : '') +

          '<div class="unit-card-actions">' +
            '<a class="btn btn--sm btn--outline" style="flex:1" href="#/unit/' + u.id + '">' + app.icon("book") + ' Read</a>' +
            (qn
              ? '<a class="btn btn--sm btn--primary" style="flex:1" href="#/quiz/unit/' + u.id + '">' +
                  app.icon("quiz") + ' Quiz (' + qn + ')</a>'
              : '<span class="btn btn--sm disabled" style="flex:1">No Qs</span>') +
          '</div>' +
        '</div>';
      }).join("") +
    '</div>';
  }

  /* ---------- Sub-section mastery: the real revision list ---------- */
  function weakestSubSection(quiz, minQuestions) {
    var list = subSectionRows(quiz).filter(function (s) { return s.total >= (minQuestions || 3); });
    if (!list.length) return null;
    var worst = list[0];
    return worst.pct < 75 ? worst : null;
  }

  function subSectionRows(quiz) {
    var bySub = quiz.bySub || {};
    return Object.keys(bySub).map(function (id) {
      var r = bySub[id];
      return { id: id, total: r.total || 0, right: r.right || 0, pct: pctOf(r.right, r.total), lastAt: r.lastAt };
    }).filter(function (s) { return s.total > 0; })
      .sort(function (a, b) { return a.pct - b.pct || b.total - a.total; });
  }

  function renderSubSectionMastery(quiz) {
    var rows = subSectionRows(quiz);

    if (!rows.length) {
      return '<section class="mt-8">' +
        '<h2>Sub-section Mastery</h2>' +
        '<p class="muted small mt-1">Once you finish a test, every thematic module you touched is scored here — ' +
          'so revision is aimed at a topic, not at a whole unit.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' + app.icon("filter") + '<br>' +
          'No module data yet.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take a test to populate this</a>' +
        '</div></section>';
    }

    var weak = rows.filter(function (r) { return r.pct < 75; });
    var strong = rows.filter(function (r) { return r.pct >= 75; }).reverse();

    function rowHtml(r) {
      var meta = subMeta(r.id);
      var href = meta.unitId ? "#/quiz/unit/" + meta.unitId : "#/quiz";
      return '<a class="tlist__row" href="' + href + '">' +
        '<span class="tlist__no">' + meta.icon + '</span>' +
        '<span class="tlist__body">' +
          '<span class="tlist__title">' + app.esc(meta.title) + '</span>' +
          '<span class="tlist__sub">' + r.right + ' of ' + r.total + ' correct' +
            (r.lastAt ? ' · last tested ' + new Date(r.lastAt).toLocaleDateString(undefined, { month: "short", day: "numeric" }) : '') +
          '</span>' +
        '</span>' +
        '<span class="tlist__right">' +
          '<span class="bar" style="width:70px;height:6px"><span class="bar__fill ' + barTone(r.pct) +
            '" style="width:' + r.pct + '%"></span></span>' +
          '<span class="chip ' + tone(r.pct) + '">' + r.pct + '%</span>' +
        '</span>' +
      '</a>';
    }

    return '<section class="mt-8">' +
      '<h2>Sub-section Mastery</h2>' +
      '<p class="muted small mt-1">Every thematic module you have been tested on, weakest first. ' +
        'Click one to re-test that unit.</p>' +

      '<div class="grid grid--2 mt-4">' +
        '<div class="card">' +
          '<h3>Revise these first</h3>' +
          '<p class="muted small mt-1">Below 75% — these are where marks are leaking.</p>' +
          (weak.length
            ? '<div class="tlist mt-3" style="border:none">' + weak.slice(0, 8).map(rowHtml).join("") + '</div>'
            : '<p class="small muted mt-3">Nothing below 75%. Every tested module is exam-safe.</p>') +
        '</div>' +
        '<div class="card">' +
          '<h3>Solid modules</h3>' +
          '<p class="muted small mt-1">At or above 75% — keep them warm with Smart Review.</p>' +
          (strong.length
            ? '<div class="tlist mt-3" style="border:none">' + strong.slice(0, 8).map(rowHtml).join("") + '</div>'
            : '<p class="small muted mt-3">No module has reached 75% yet.</p>') +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---------- 5-Box Leitner Memory Pipeline ---------- */
  function renderLeitnerPipeline(boxCounts, totalCards, dueCount) {
    var intervals = ["Daily (24h)", "Every 2 Days", "Every 4 Days", "Every 8 Days", "Mastered (16d)"];
    var maxBox = Math.max.apply(null, boxCounts.concat([1]));

    return '<section class="srs-pipeline-wrap">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h2>Spaced Repetition Memory Matrix</h2>' +
          '<p class="muted small mt-1">Ebbinghaus memory curve optimizer. Questions climb from Box 1 to Box 5 as you reinforce recall.' +
            (totalCards ? ' ' + totalCards + ' question' + (totalCards === 1 ? '' : 's') + ' in the pipeline.' : '') +
          '</p>' +
        '</div>' +
        (dueCount > 0
          ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">' + app.icon("repeat") + ' Review ' + dueCount + ' Due</a>'
          : '<span class="chip chip--ok">' + app.icon("check") + ' Queue Clear</span>') +
      '</div>' +

      '<div class="srs-pipeline-grid">' +
        boxCounts.map(function (count, idx) {
          var boxNum = idx + 1;
          return '<div class="srs-box-col" data-box="' + boxNum + '">' +
            '<span class="srs-box-num">Box ' + boxNum + '</span>' +
            '<div class="srs-box-count">' + count + '</div>' +
            '<div class="srs-box-interval">' + intervals[idx] + '</div>' +
            '<div class="bar mt-2" style="width:100%;height:5px">' +
              '<div class="bar__fill" style="width:' + Math.round(count / maxBox * 100) + '%"></div>' +
            '</div>' +
            '<span class="srs-box-pct mt-1">' + (totalCards ? pctOf(count, totalCards) + '% of cards' : '0 cards') + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</section>';
  }

  /* ---------- Activity Heatmap Card ----------
     Weekday aligned, like a contribution graph: each column is one week
     running Monday to Sunday, so patterns ("I never study on Fridays")
     are actually visible. */
  function renderHeatmapCard(activity, streak) {
    var WEEKS = 12;
    var DAY_LABELS = ["M", "", "W", "", "F", "", "S"];
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function keyOf(d) {
      return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
    }

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    // Walk back to the Monday of the current week, then back WEEKS-1 weeks.
    var startOfWeek = new Date(today);
    var dow = (startOfWeek.getDay() + 6) % 7;         // 0 = Monday
    startOfWeek.setDate(startOfWeek.getDate() - dow);
    var start = new Date(startOfWeek);
    start.setDate(start.getDate() - (WEEKS - 1) * 7);

    var activeDays = 0, totalInteractions = 0;
    var columns = [];
    var monthLabels = [];
    var lastMonth = -1;

    for (var w = 0; w < WEEKS; w++) {
      var cells = [];
      var colMonth = null;
      for (var dd = 0; dd < 7; dd++) {
        var d = new Date(start);
        d.setDate(start.getDate() + w * 7 + dd);
        if (dd === 0) colMonth = d.getMonth();

        if (d > today) {
          cells.push('<div class="hm__cell is-future" aria-hidden="true"></div>');
          continue;
        }
        var key = keyOf(d);
        var n = activity[key] || 0;
        if (n > 0) { activeDays++; totalInteractions += n; }
        var lvl = n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 12 ? 3 : 4;
        cells.push('<div class="hm__cell" data-lvl="' + lvl + '" title="' +
          d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) + ' — ' +
          (n ? n + ' study action' + (n === 1 ? '' : 's') : 'no activity') + '"></div>');
      }
      columns.push('<div class="hm-col">' + cells.join("") + '</div>');
      monthLabels.push(colMonth !== lastMonth ? MONTHS[colMonth] : "");
      lastMonth = colMonth;
    }

    var totalDays = WEEKS * 7;

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h3>Study Activity Heatmap</h3>' +
          '<p class="muted small mt-1">Past ' + WEEKS + ' weeks, one column per week.</p>' +
        '</div>' +
        '<span class="chip font-mono">' + totalInteractions + ' total actions</span>' +
      '</div>' +

      '<div class="heatmap-grid-scroll mt-4">' +
        '<div class="hm-frame">' +
          '<div class="hm-daycol">' + DAY_LABELS.map(function (l) {
            return '<span class="hm-daylbl">' + l + '</span>';
          }).join("") + '</div>' +
          '<div class="hm-body">' +
            '<div class="hm-months">' + monthLabels.map(function (m) {
              return '<span class="hm-month">' + m + '</span>';
            }).join("") + '</div>' +
            '<div class="hm-grid">' + columns.join("") + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="heatmap-summary-strip">' +
        '<div>Active days: <b>' + activeDays + ' / ' + totalDays + '</b></div>' +
        '<div>Longest streak: <b>' + streak.longest + ' days</b></div>' +
        '<div class="row small faint" style="gap:4px">' +
          '<span>Less</span>' +
          [0, 1, 2, 3, 4].map(function (l) {
            return '<div class="hm__cell" style="width:11px;height:11px" data-lvl="' + l + '"></div>';
          }).join("") +
          '<span>More</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ---------- Quiz Performance Tracker ---------- */
  function renderQuizTracker(quiz) {
    var attempts = quiz.attempts || [];
    var byFormat = quiz.byFormat || {};
    var byTopic = quiz.byTopic || {};
    var byDiff = quiz.byDiff || {};

    if (!attempts.length) {
      return '<section class="mt-8">' +
        '<h2>Quiz Performance Tracker</h2>' +
        '<p class="muted small mt-1">Every test you finish is recorded here — accuracy by question type, ' +
          'your strongest and weakest chapters, and how your scores move over time.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' + app.icon("target") + '<br>' +
          'No tests finished yet. Your first quiz will fill this in.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Start a quiz</a>' +
        '</div></section>';
    }

    var totalQ = 0, totalCorrect = 0, totalSeconds = 0, examCount = 0;
    attempts.forEach(function (a) {
      totalQ += a.total || 0;
      totalCorrect += a.correct || 0;
      totalSeconds += a.seconds || ((a.minutes || 0) * 60);
      if (a.exam) examCount++;
    });
    var accuracy = pctOf(totalCorrect, totalQ);
    var perQ = totalQ ? Math.round(totalSeconds / totalQ) : 0;

    // Last 10 scores, oldest first, as a simple bar trend
    var recent = attempts.slice(-10);
    var trend = recent.map(function (a) {
      var p = app.pct(a.correct, a.total);
      var d = new Date(a.at);
      var col = '<div class="qtrend__col" title="' + app.esc(a.label || "Quiz") + ' — ' + p + '% on ' +
          d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + '">' +
        '<div class="qtrend__bar ' + barTone(p) + '" style="height:' + Math.max(6, p) + '%"></div>' +
        '<span class="qtrend__lbl">' + p + '</span>' +
      '</div>';
      return a.reportId ? '<a href="#/quiz/report/' + a.reportId + '" class="qtrend__linkcol">' + col + '</a>' : col;
    }).join("");

    var fmtNames = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" };
    var fmtIcons = { mcq: "🔘", tf: "⚖️", fib: "✍️" };
    var fmtRows = ["mcq", "tf", "fib"].map(function (f) {
      var r = byFormat[f] || { total: 0, right: 0 };
      var p = pctOf(r.right, r.total);
      return '<div class="qfmt-row">' +
        '<span class="qfmt-row__name">' + fmtIcons[f] + ' ' + fmtNames[f] + '</span>' +
        '<span class="bar"><span class="bar__fill ' + (r.total ? barTone(p) : '') + '" style="width:' + p + '%"></span></span>' +
        '<span class="qfmt-row__val">' + (r.total ? p + '% <small>(' + r.right + '/' + r.total + ')</small>' : '<small>not attempted</small>') + '</span>' +
      '</div>';
    }).join("");

    var diffNames = { "1": "⭐ Foundational", "2": "⭐⭐ Core UG", "3": "⭐⭐⭐ Rank-1 Classic" };
    var diffKeys = ["1", "2", "3"].filter(function (d) { return byDiff[d] && byDiff[d].total; });
    var diffRows = diffKeys.map(function (d) {
      var r = byDiff[d];
      var p = pctOf(r.right, r.total);
      return '<div class="qfmt-row">' +
        '<span class="qfmt-row__name">' + diffNames[d] + '</span>' +
        '<span class="bar"><span class="bar__fill ' + barTone(p) + '" style="width:' + p + '%"></span></span>' +
        '<span class="qfmt-row__val">' + p + '% <small>(' + r.right + '/' + r.total + ')</small></span>' +
      '</div>';
    }).join("");

    // Weakest chapters: at least 2 questions answered, lowest accuracy first
    var topicRows = Object.keys(byTopic).map(function (id) {
      var r = byTopic[id];
      return { id: id, total: r.total, right: r.right, pct: pctOf(r.right, r.total) };
    }).filter(function (t) { return t.total >= 2 && syllabus.topicById[t.id]; });
    topicRows.sort(function (a, b) { return a.pct - b.pct || b.total - a.total; });
    var weak = topicRows.filter(function (t) { return t.pct < 75; }).slice(0, 6);
    var strong = topicRows.filter(function (t) { return t.pct >= 75; }).reverse().slice(0, 6);

    function topicList(list, toneCls) {
      return list.map(function (t) {
        var title = (syllabus.topicById[t.id] || {}).title || t.id;
        return '<a class="tlist__row" href="#/topic/' + t.id + '">' +
          '<span class="tlist__body"><span class="tlist__title">' + app.esc(title) + '</span>' +
          '<span class="tlist__sub">' + t.right + ' of ' + t.total + ' correct</span></span>' +
          '<span class="tlist__right"><span class="chip ' + toneCls + '">' + t.pct + '%</span></span>' +
        '</a>';
      }).join("");
    }

    return '<section class="mt-8">' +
      '<h2>Quiz Performance Tracker</h2>' +
      '<p class="muted small mt-1">Every finished test is recorded here. Click any bar in the trend to reopen that test report.</p>' +

      '<div class="grid grid--4 mt-4">' +
        app.statCard("Questions answered", totalQ, totalCorrect + " correct", "quiz") +
        app.statCard("Overall accuracy", accuracy + "%", "across every finished test", "target") +
        app.statCard("Tests finished", attempts.length, examCount + " timed exam" + (examCount === 1 ? "" : "s"), "trophy") +
        app.statCard("Average pace", perQ ? perQ + "s" : "—", "per question", "clock") +
      '</div>' +

      '<div class="grid grid--2 mt-5">' +
        '<div class="card">' +
          '<h3>Accuracy by question type</h3>' +
          '<div class="qfmt mt-3">' + fmtRows + '</div>' +
          (diffRows
            ? '<h3 class="mt-6">Accuracy by difficulty</h3><div class="qfmt mt-3">' + diffRows + '</div>'
            : '') +
        '</div>' +
        '<div class="card">' +
          '<h3>Score trend (last ' + recent.length + ')</h3>' +
          '<p class="muted small mt-1">Newest on the right.</p>' +
          '<div class="qtrend mt-3">' + trend + '</div>' +
        '</div>' +
      '</div>' +

      (topicRows.length
        ? '<div class="grid grid--2 mt-5">' +
            '<div class="card">' +
              '<h3>Chapters to revise first</h3>' +
              '<p class="muted small mt-1">Lowest accuracy across every test you have taken.</p>' +
              (weak.length
                ? '<div class="tlist mt-3" style="border:none">' + topicList(weak, "chip--danger") + '</div>'
                : '<p class="small muted mt-3">No chapter is below 75%. Excellent.</p>') +
            '</div>' +
            '<div class="card">' +
              '<h3>Your strongest chapters</h3>' +
              '<p class="muted small mt-1">Keep these warm with Smart Review.</p>' +
              (strong.length
                ? '<div class="tlist mt-3" style="border:none">' + topicList(strong, "chip--ok") + '</div>'
                : '<p class="small muted mt-3">No chapter has reached 75% yet.</p>') +
            '</div>' +
          '</div>'
        : '') +
    '</section>';
  }

  /* ---------- Diagnostic Assessment Ledger ---------- */
  function renderRecentAttemptsCard(quiz) {
    var list = (quiz.attempts || []).slice(-8).reverse();

    if (!list.length) {
      return '<div class="heatmap-card-elite">' +
        '<h3>Assessment Ledger</h3>' +
        '<p class="muted small mt-1">Record of your recent quizzes and simulation exams.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' +
          app.icon("target") + '<br>' +
          'No quiz attempts recorded yet.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take Diagnostic Test</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between row--wrap gap-3">' +
        '<div>' +
          '<h3>Assessment Ledger</h3>' +
          '<p class="muted small mt-1">Recent tests — open one to see its full answer sheet.</p>' +
        '</div>' +
        '<a class="small" href="#/quiz">All Quizzes &rarr;</a>' +
      '</div>' +

      '<div class="tlist mt-4" style="border:none">' +
        list.map(function (a) {
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          var dateStr = dt.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + ' · ' +
            dt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
          var inner =
            '<span class="tlist__body">' +
              '<span class="tlist__title">' + app.esc(a.label || "Biochemistry Quiz") + '</span>' +
              '<span class="tlist__sub">' + dateStr + (a.exam ? ' · ⏱️ Timed Exam' : '') +
                (a.timedOut ? ' · auto-submitted' : '') + '</span>' +
            '</span>' +
            '<span class="tlist__right">' +
              '<span class="chip ' + tone(p) + '">' + a.correct + '/' + a.total + ' (' + p + '%)</span>' +
              (a.reportId ? app.icon("chevron", "faint") : '') +
            '</span>';
          return a.reportId
            ? '<a class="tlist__row" href="#/quiz/report/' + a.reportId + '">' + inner + '</a>'
            : '<div class="tlist__row">' + inner + '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* ---------- Student Knowledge Vault ---------- */
  function renderKnowledgeVault(totalHl, hlColors, notesCount, bmsCount, qaCount) {
    return '<section>' +
      '<h2>Clinical Knowledge Vault</h2>' +
      '<p class="muted small mt-1">Your personal clinical repository of notes, high-yield highlights, and bookmarks.</p>' +
      '<div class="vault-grid mt-4">' +
        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("star") + '</div>' +
          '<div class="vault-card-val">' + bmsCount + '</div>' +
          '<div class="vault-card-title">Bookmarked Topics</div>' +
          '<div class="vault-card-sub">Quick revision access</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("note") + '</div>' +
          '<div class="vault-card-val">' + notesCount + '</div>' +
          '<div class="vault-card-title">Clinical Notes</div>' +
          '<div class="vault-card-sub">Personal observations</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("pen") + '</div>' +
          '<div class="vault-card-val">' + totalHl + '</div>' +
          '<div class="vault-card-title">Passages Highlighted</div>' +
          '<div class="vault-card-sub">Color-coded key points</div>' +
        '</a>' +

        '<a class="vault-card" href="#/qa">' +
          '<div class="vault-card-icon">' + app.icon("qa") + '</div>' +
          '<div class="vault-card-val">' + qaCount + '</div>' +
          '<div class="vault-card-title">Exam Questions Mastered</div>' +
          '<div class="vault-card-sub">Model answers reviewed</div>' +
        '</a>' +
      '</div>' +
    '</section>';
  }

  /* ---------- Helpers ---------- */
  function findNextUnreadTopic(allUnits, readMap) {
    for (var uIdx = 0; uIdx < allUnits.length; uIdx++) {
      var u = allUnits[uIdx];
      var topics = u.topics || [];
      for (var tIdx = 0; tIdx < topics.length; tIdx++) {
        var t = topics[tIdx];
        if (!readMap[t.id]) {
          return { id: t.id, title: t.title, index: t.index || (tIdx + 1), unitTitle: u.short || u.title };
        }
      }
    }
    return null;
  }

  /* An untested unit is the most urgent thing to test — it used to lose to any
     unit that already had a score, so a fresh unit could never be recommended. */
  function findWeakestUnit(allUnits, quiz) {
    var theory = allUnits.filter(function (u) {
      return u.stream !== "practical" && app.questionCount(u.id) > 0;
    });
    if (!theory.length) return { id: "unit-1", name: "General Biochemistry", score: 0, hasScore: false };

    var untested = theory.filter(function (u) { return unitAccuracy(u.id, quiz) === null; });
    if (untested.length) {
      var u0 = untested[0];
      return { id: u0.id, name: u0.short || u0.title, score: 0, hasScore: false };
    }

    var ranked = theory.slice().sort(function (a, b) {
      return unitAccuracy(a.id, quiz) - unitAccuracy(b.id, quiz);
    });
    var w = ranked[0];
    return { id: w.id, name: w.short || w.title, score: unitAccuracy(w.id, quiz), hasScore: true };
  }

  /* ---------- Attach UI events ---------- */
  function attachDashboardEvents(host, allUnits, readMap, quiz) {
    var container = host.querySelector("#unit-matrix-container");

    host.querySelectorAll(".matrix-tab-btn[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        host.querySelectorAll(".matrix-tab-btn[data-filter]").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        activeFilter = btn.getAttribute("data-filter") || "all";
        if (container) container.innerHTML = renderUnitMatrix(activeFilter, allUnits, readMap, quiz);
      });
    });
  }

  return {
    render: render
  };
})();
