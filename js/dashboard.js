/* ============================================================
   dashboard.js — Simple, Colorful & Engaging Clinical Dashboard
   ============================================================
   Designed so that anyone (even a 15-year-old student) can
   understand their study progress in 5 seconds.
   ============================================================ */

var dashboardApp = (function () {

  var currentTab = "overview"; // 'overview', 'subjects', 'quizzes', 'memory'
  var PASS_MARK = 50;

  function pctOf(right, total) { return total ? Math.round(right / total * 100) : 0; }
  function tone(p) { return p >= 75 ? "chip--ok" : p >= PASS_MARK ? "chip--warn" : "chip--danger"; }
  function barTone(p) { return p >= 75 ? "is-ok" : p >= PASS_MARK ? "is-warn" : "is-low"; }
  function shorten(s, n) { return (!s) ? "" : s.length > n ? s.slice(0, n - 1) + "…" : s; }

  function subMeta(id) {
    if (window.quizApp && quizApp.subMeta) {
      var m = quizApp.subMeta(id);
      if (m) return m;
    }
    return { id: id, icon: "📘", title: id, unitId: null };
  }

  function dueCount() {
    if (window.quizApp && quizApp.dueCount) return quizApp.dueCount();
    return (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
  }

  function getRank(xp) {
    if (xp >= 750) return { title: "Chief Veterinary Biochemist", level: 4, icon: "👑", badge: "Level 4 · Elite Master", next: null, min: 750, max: 1000 };
    if (xp >= 500) return { title: "Pathways Master", level: 3, icon: "⚡", badge: "Level 3 · Board Exam Ready", next: { at: 750, name: "Chief Veterinary Biochemist" }, min: 500, max: 750 };
    if (xp >= 250) return { title: "Molecule Explorer", level: 2, icon: "🔬", badge: "Level 2 · Clinical Acumen", next: { at: 500, name: "Pathways Master" }, min: 250, max: 500 };
    return { title: "Bio-Novice", level: 1, icon: "🌱", badge: "Level 1 · Foundations", next: { at: 250, name: "Molecule Explorer" }, min: 0, max: 250 };
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

    var readCount = Object.keys(readMap).filter(function (id) { return !!syllabus.topicById[id]; }).length;
    var readPct   = pctOf(readCount, totalTopics);

    // Quiz counts
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = pctOf(totalCorrect, totalQ);

    // Spaced repetition counts
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, (srs[k] && srs[k].box) || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[2] + boxCounts[3] + boxCounts[4];

    // Highlights count
    var totalHighlights = 0;
    Object.keys(highlights).forEach(function (topId) {
      totalHighlights += (highlights[topId] || []).length;
    });

    // XP calculation
    var readXP = Math.round((readCount / (totalTopics || 1)) * 400);
    var quizFactor = totalQ ? (totalCorrect / totalQ) : 0;
    var quizVolume = Math.min(1, attempts.length / 8);
    var quizXP = Math.round((quizFactor * 0.7 + quizVolume * 0.3) * 350);
    var srsFactor = srsKeys.length ? (masteredCount / srsKeys.length) : 0;
    var srsVolume = Math.min(1, srsKeys.length / 25);
    var srsXP = Math.round((srsFactor * 0.6 + srsVolume * 0.4) * 150);
    var streakFactor = Math.min(1, streak.current / 7);
    var daysFactor = Math.min(1, streak.totalDays / 10);
    var consistencyXP = Math.round((streakFactor * 0.6 + daysFactor * 0.4) * 100);

    var totalXP = Math.min(1000, readXP + quizXP + srsXP + consistencyXP);
    var rank = getRank(totalXP);

    // Progress towards next level
    var currentLevelXp = totalXP - rank.min;
    var levelRange = (rank.max - rank.min) || 250;
    var levelProgressPct = Math.min(100, Math.round((currentLevelXp / levelRange) * 100));

    // Next action
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    var weakUnit  = findWeakestUnit(allUnits, quiz);

    host.innerHTML =
      '<div class="dash-v2-wrapper animate-fade-in">' +

        /* Top Hero Card (Playful, Colorful & Inspiring) */
        '<div class="dash-v2-hero">' +
          '<div class="dash-v2-hero-body">' +
            '<div class="dash-v2-profile">' +
              '<div class="dash-v2-avatar">' + rank.icon + '</div>' +
              '<div class="dash-v2-profile-text">' +
                '<span class="dash-v2-level-badge">' + rank.badge + '</span>' +
                '<h1 class="dash-v2-title">Veterinary Biochemistry Dashboard</h1>' +
                '<p class="dash-v2-sub">Track your lessons, quiz masteries, and daily study habits in real time.</p>' +
              '</div>' +
            '</div>' +

            /* XP Level Bar */
            '<div class="dash-v2-xp-box">' +
              '<div class="dash-v2-xp-head">' +
                '<span><b>' + totalXP + ' Total XP</b> · ' + rank.title + '</span>' +
                '<span>' + (rank.next ? (rank.next.at - totalXP) + ' XP to ' + rank.next.name : 'Max Level Reached! 🌟') + '</span>' +
              '</div>' +
              '<div class="dash-v2-xp-bar">' +
                '<div class="dash-v2-xp-fill" style="width:' + levelProgressPct + '%"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* The Big 4 Colorful Stat Cards (Simple & Clear) */
        '<div class="dash-v2-stat-grid mt-6">' +
          dashStatCard("Syllabus Finished", readCount + " of " + totalTopics + " Topics", readPct + "% covered", "book", "is-blue", readPct) +
          dashStatCard("Quiz Accuracy", (totalQ ? quizAccuracy + "%" : "Untested"), (totalQ ? totalCorrect + " of " + totalQ + " correct" : "Take your first quiz"), "target", "is-teal", quizAccuracy) +
          dashStatCard("Daily Streak", streak.current + (streak.current === 1 ? " Day" : " Days"), "Best: " + streak.longest + " days", "flame", "is-orange", Math.min(100, streak.current * 15)) +
          dashStatCard("Memory Retention", masteredCount + " Flashcards", (dueCards > 0 ? dueCards + " due today" : "Queue is 100% clear!"), "shield", "is-purple", pctOf(masteredCount, Math.max(1, srsKeys.length))) +
        '</div>' +

        /* Navigation Tabs (So nothing feels cluttered!) */
        '<div class="dash-v2-nav-tabs mt-8">' +
          '<button type="button" class="dash-v2-tab' + (currentTab === 'overview' ? ' is-active' : '') + '" data-dash-tab="overview">🌟 My Overview</button>' +
          '<button type="button" class="dash-v2-tab' + (currentTab === 'subjects' ? ' is-active' : '') + '" data-dash-tab="subjects">📚 Syllabus Units</button>' +
          '<button type="button" class="dash-v2-tab' + (currentTab === 'quizzes' ? ' is-active' : '') + '" data-dash-tab="quizzes">📊 Quiz Records</button>' +
          '<button type="button" class="dash-v2-tab' + (currentTab === 'memory' ? ' is-active' : '') + '" data-dash-tab="memory">🧠 Flashcards &amp; Notes</button>' +
        '</div>' +

        /* Tab Content Containers */
        '<div class="dash-v2-content mt-6">' +

          /* TAB 1: OVERVIEW */
          '<div class="dash-v2-pane' + (currentTab === 'overview' ? ' is-active' : '') + '" id="pane-overview">' +
            renderNextActionCard(dueCards, nextTopic, weakUnit) +
            '<h2 class="dash-v2-section-title mt-8">📖 Subjects at a Glance</h2>' +
            '<div class="dash-v2-units-quick-grid mt-4">' +
              renderQuickUnitCards(allUnits, readMap, quiz) +
            '</div>' +
            '<div class="grid grid--2 mt-8">' +
              renderWeeklyHabitCard(activity, streak) +
              renderRecentQuizzesCard(quiz) +
            '</div>' +
          '</div>' +

          /* TAB 2: SUBJECTS & UNITS */
          '<div class="dash-v2-pane' + (currentTab === 'subjects' ? ' is-active' : '') + '" id="pane-subjects">' +
            '<h2 class="dash-v2-section-title">All Curriculum Units</h2>' +
            '<p class="small muted mt-1">Detailed breakdown of reading progress and quiz accuracy per unit.</p>' +
            '<div class="dash-v2-full-units-grid mt-4">' +
              renderFullUnitCards(allUnits, readMap, quiz) +
            '</div>' +
          '</div>' +

          /* TAB 3: QUIZ PERFORMANCE */
          '<div class="dash-v2-pane' + (currentTab === 'quizzes' ? ' is-active' : '') + '" id="pane-quizzes">' +
            renderQuizPerformanceSection(quiz) +
          '</div>' +

          /* TAB 4: MEMORY & NOTES */
          '<div class="dash-v2-pane' + (currentTab === 'memory' ? ' is-active' : '') + '" id="pane-memory">' +
            renderMemoryAndVaultSection(boxCounts, srsKeys.length, dueCards, totalHighlights, Object.keys(notes).length, bms.length, qaDone.length) +
          '</div>' +

        '</div>' +

      '</div>';

    attachTabEvents(host);
  }

  function dashStatCard(title, val, sub, iconName, colorCls, progressPct) {
    return '<div class="dash-v2-stat-card ' + colorCls + '">' +
      '<div class="dash-v2-stat-head">' +
        '<span class="dash-v2-stat-title">' + title + '</span>' +
        '<span class="dash-v2-stat-icon">' + app.icon(iconName) + '</span>' +
      '</div>' +
      '<div class="dash-v2-stat-val">' + val + '</div>' +
      '<div class="dash-v2-stat-sub">' + sub + '</div>' +
      '<div class="dash-v2-stat-bar"><div class="dash-v2-stat-bar-fill" style="width:' + (progressPct || 0) + '%"></div></div>' +
    '</div>';
  }

  /* One big, simple, welcoming "What should I do right now?" card */
  function renderNextActionCard(dueCards, nextTopic, weakUnit) {
    if (dueCards > 0) {
      return '<div class="dash-v2-action-hero is-purple animate-pop">' +
        '<div class="dash-v2-action-hero__left">' +
          '<span class="dash-v2-badge">🧠 Daily Flashcard Goal</span>' +
          '<h3 class="dash-v2-action-title mt-2">You have ' + dueCards + ' Question' + (dueCards > 1 ? 's' : '') + ' Ready for Review!</h3>' +
          '<p class="dash-v2-action-desc mt-1">Reviewing questions right before memory decay consolidates them permanently into long-term retention.</p>' +
        '</div>' +
        '<a class="btn btn--primary btn--lg dash-v2-action-btn pulse-glow" href="#/quiz/review">' + app.icon("repeat") + ' Clear Review Queue (2 Mins) ➔</a>' +
      '</div>';
    }

    if (nextTopic) {
      return '<div class="dash-v2-action-hero is-blue animate-pop">' +
        '<div class="dash-v2-action-hero__left">' +
          '<span class="dash-v2-badge">📖 Next Recommended Lesson</span>' +
          '<h3 class="dash-v2-action-title mt-2">' + app.esc(nextTopic.title) + '</h3>' +
          '<p class="dash-v2-action-desc mt-1">' + app.esc(nextTopic.unitTitle) + ' · Step into your next curriculum lesson.</p>' +
        '</div>' +
        '<a class="btn btn--primary btn--lg dash-v2-action-btn pulse-glow" href="#/topic/' + nextTopic.id + '">' + app.icon("book") + ' Read This Topic ➔</a>' +
      '</div>';
    }

    return '<div class="dash-v2-action-hero is-green animate-pop">' +
      '<div class="dash-v2-action-hero__left">' +
        '<span class="dash-v2-badge">🎯 Ready for a Test</span>' +
        '<h3 class="dash-v2-action-title mt-2">Boost Your Score on ' + app.esc(weakUnit.name) + '</h3>' +
        '<p class="dash-v2-action-desc mt-1">Take a 10-question practice test to keep your test instincts razor sharp.</p>' +
      '</div>' +
      '<a class="btn btn--primary btn--lg dash-v2-action-btn pulse-glow" href="#/quiz/unit/' + weakUnit.id + '">' + app.icon("quiz") + ' Take Practice Quiz ➔</a>' +
    '</div>';
  }

  function renderQuickUnitCards(allUnits, readMap, quiz) {
    return allUnits.map(function (u, idx) {
      var isTheory = u.stream !== "practical";
      var uTopics = u.topics || [];
      var done = 0;
      uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
      var readP = pctOf(done, uTopics.length);

      var qn = app.questionCount(u.id);
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var best = (rec && typeof rec.best === "number") ? rec.best : null;

      var colors = ["is-blue", "is-teal", "is-orange", "is-purple", "is-rose"];
      var c = colors[idx % colors.length];

      return '<div class="dash-v2-quick-unit-card ' + c + '">' +
        '<div class="dash-v2-qu-head">' +
          '<span class="dash-v2-qu-badge">' + (isTheory ? 'Theory Unit ' : 'Practical ') + u.no + '</span>' +
          (best !== null ? '<span class="dash-v2-qu-best">⭐ Best ' + best + '%</span>' : '<span class="muted small">Untested</span>') +
        '</div>' +
        '<h3 class="dash-v2-qu-title">' + app.esc(u.short || u.title) + '</h3>' +
        '<div class="dash-v2-qu-stats mt-3">' +
          '<span><b>' + done + '/' + uTopics.length + '</b> Read (' + readP + '%)</span>' +
          '<span><b>' + qn + '</b> Quizzes</span>' +
        '</div>' +
        '<div class="dash-v2-qu-bar mt-2"><div class="dash-v2-qu-fill" style="width:' + readP + '%"></div></div>' +
        '<div class="dash-v2-qu-actions mt-4">' +
          '<a class="btn btn--sm btn--outline" href="#/unit/' + u.id + '">Read</a>' +
          '<a class="btn btn--sm btn--primary" href="#/quiz/unit/' + u.id + '">Quiz ➔</a>' +
        '</div>' +
      '</div>';
    }).join("");
  }

  /* Weekly Habit Punchcard (Mon to Sun) */
  function renderWeeklyHabitCard(activity, streak) {
    var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    // Current week's Monday
    var startOfWeek = new Date(today);
    var dow = (startOfWeek.getDay() + 6) % 7;
    startOfWeek.setDate(startOfWeek.getDate() - dow);

    var daysHtml = [];
    var activeThisWeek = 0;

    for (var i = 0; i < 7; i++) {
      var d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      var count = activity[key] || 0;
      var isFuture = d > today;
      var isDone = count > 0;
      if (isDone) activeThisWeek++;

      daysHtml.push(
        '<div class="dash-v2-habit-col' + (isDone ? ' is-done' : isFuture ? ' is-future' : ' is-missed') + '">' +
          '<div class="dash-v2-habit-dot">' + (isDone ? '✔' : isFuture ? '·' : '○') + '</div>' +
          '<span class="dash-v2-habit-name">' + dayNames[i] + '</span>' +
        '</div>'
      );
    }

    return '<div class="dash-v2-panel-card">' +
      '<div class="dash-v2-card-head">' +
        '<div>' +
          '<h3 class="dash-v2-card-title">📅 This Week\'s Study Habit</h3>' +
          '<p class="small muted mt-1">Study consistently every day to solidify veterinary instincts.</p>' +
        '</div>' +
        '<span class="chip chip--accent font-bold">🔥 ' + streak.current + ' Day Streak</span>' +
      '</div>' +
      '<div class="dash-v2-habit-row mt-6">' + daysHtml.join("") + '</div>' +
      '<p class="small muted mt-4 text-center">' +
        (activeThisWeek >= 4 ? '🎉 Great work! You have studied ' + activeThisWeek + ' days this week.' : '🌱 You have studied ' + activeThisWeek + ' days this week. Keep showing up!') +
      '</p>' +
    '</div>';
  }

  function renderRecentQuizzesCard(quiz) {
    var attempts = (quiz.attempts || []).slice(-4).reverse();
    if (!attempts.length) {
      return '<div class="dash-v2-panel-card">' +
        '<h3 class="dash-v2-card-title">🎯 Recent Quiz Results</h3>' +
        '<p class="small muted mt-1">Your recent quiz scores and answer keys.</p>' +
        '<div class="text-center p-6 muted">' +
          '<p>No quizzes completed yet.</p>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take your first quiz ➔</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="dash-v2-panel-card">' +
      '<div class="dash-v2-card-head">' +
        '<div>' +
          '<h3 class="dash-v2-card-title">🎯 Recent Quiz Results</h3>' +
          '<p class="small muted mt-1">Click any quiz to reopen its full answer sheet.</p>' +
        '</div>' +
        '<a class="small" href="#/quiz">All Quizzes ➔</a>' +
      '</div>' +
      '<div class="dash-v2-recent-list mt-4">' +
        attempts.map(function (a) {
          var p = app.pct(a.correct, a.total);
          return '<a class="dash-v2-recent-item" href="' + (a.reportId ? '#/quiz/report/' + a.reportId : '#/quiz') + '">' +
            '<div class="dash-v2-recent-score ' + (p >= 75 ? 'is-high' : p >= 50 ? 'is-pass' : 'is-low') + '">' + p + '%</div>' +
            '<div class="dash-v2-recent-info">' +
              '<div class="dash-v2-recent-title">' + app.esc(a.label || "Quiz") + '</div>' +
              '<div class="dash-v2-recent-sub">' + a.correct + ' of ' + a.total + ' correct · ' +
                new Date(a.at).toLocaleDateString(undefined, { month: "short", day: "numeric" }) + '</div>' +
            '</div>' +
            '<span class="dash-v2-recent-arrow">➔</span>' +
          '</a>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* Full Unit Cards in Subjects Tab */
  function renderFullUnitCards(allUnits, readMap, quiz) {
    return allUnits.map(function (u) {
      var isTheory = u.stream !== "practical";
      var uTopics = u.topics || [];
      var done = 0;
      uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
      var readP = pctOf(done, uTopics.length);

      var qn = app.questionCount(u.id);
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var best = (rec && typeof rec.best === "number") ? rec.best : null;

      return '<div class="dash-v2-full-unit-card">' +
        '<div class="dash-v2-fuc-head">' +
          '<span class="dash-v2-qu-badge">' + (isTheory ? 'Theory Unit ' : 'Practical ') + u.no + '</span>' +
          (best !== null ? '<span class="chip chip--ok font-bold">Best Score: ' + best + '%</span>' : '<span class="chip chip--subtle">Not tested yet</span>') +
        '</div>' +
        '<h3 class="dash-v2-fuc-title mt-2">' + app.esc(u.short || u.title) + '</h3>' +
        '<p class="small muted mt-1">' + uTopics.length + ' syllabus topics · ' + qn + ' practice questions</p>' +

        '<div class="dash-v2-fuc-bar-wrap mt-4">' +
          '<div class="row row--between small">' +
            '<span>Reading Progress</span>' +
            '<b>' + done + ' of ' + uTopics.length + ' (' + readP + '%)</b>' +
          '</div>' +
          '<div class="dash-v2-qu-bar mt-1"><div class="dash-v2-qu-fill" style="width:' + readP + '%"></div></div>' +
        '</div>' +

        '<div class="dash-v2-fuc-actions mt-5">' +
          '<a class="btn btn--outline" href="#/unit/' + u.id + '">' + app.icon("book") + ' Read All Topics</a>' +
          '<a class="btn btn--primary" href="#/quiz/unit/' + u.id + '">' + app.icon("quiz") + ' Take Unit Quiz (' + qn + ') ➔</a>' +
        '</div>' +
      '</div>';
    }).join("");
  }

  /* Quiz Performance Tab */
  function renderQuizPerformanceSection(quiz) {
    var attempts = quiz.attempts || [];
    var byFormat = quiz.byFormat || {};
    var byTopic  = quiz.byTopic || {};

    if (!attempts.length) {
      return '<div class="card p-8 text-center">' +
        '<h3>No Quiz Records Yet</h3>' +
        '<p class="muted mt-2">Take your first quiz in the Quiz Arena to unlock detailed performance analytics!</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Launch Quiz Arena ➔</a>' +
      '</div>';
    }

    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += a.total || 0; totalCorrect += a.correct || 0; });
    var accuracy = pctOf(totalCorrect, totalQ);

    var fmtRows = ["mcq", "tf", "fib"].map(function (f) {
      var r = byFormat[f] || { total: 0, right: 0 };
      var p = pctOf(r.right, r.total);
      var names = { mcq: "Multiple Choice 🔘", tf: "True / False ⚖️", fib: "Fill in the Blank ✍️" };
      return '<div class="dash-v2-fmt-row">' +
        '<span class="dash-v2-fmt-name">' + names[f] + '</span>' +
        '<div class="dash-v2-fmt-bar"><div class="dash-v2-fmt-fill" style="width:' + p + '%"></div></div>' +
        '<span class="dash-v2-fmt-val">' + (r.total ? p + '% (' + r.right + '/' + r.total + ')' : '—') + '</span>' +
      '</div>';
    }).join("");

    var topicRows = Object.keys(byTopic).map(function (id) {
      var r = byTopic[id];
      return { id: id, total: r.total, right: r.right, pct: pctOf(r.right, r.total) };
    }).filter(function (t) { return t.total >= 2 && syllabus.topicById[t.id]; });
    topicRows.sort(function (a, b) { return a.pct - b.pct; });
    var weakTopics = topicRows.filter(function (t) { return t.pct < 75; }).slice(0, 5);

    return '<div class="animate-fade-in">' +
      '<div class="grid grid--2">' +
        '<div class="dash-v2-panel-card">' +
          '<h3 class="dash-v2-card-title">Accuracy by Question Type</h3>' +
          '<p class="small muted mt-1">Identify which formats you excel at and which need practice.</p>' +
          '<div class="mt-4">' + fmtRows + '</div>' +
        '</div>' +

        '<div class="dash-v2-panel-card">' +
          '<h3 class="dash-v2-card-title">⚠️ Topics to Revise First</h3>' +
          '<p class="small muted mt-1">Topics where quiz accuracy is lowest.</p>' +
          '<div class="dash-v2-weak-list mt-4">' +
            (weakTopics.length
              ? weakTopics.map(function (t) {
                  var title = (syllabus.topicById[t.id] || {}).title || t.id;
                  return '<a class="dash-v2-weak-item" href="#/topic/' + t.id + '">' +
                    '<div>' +
                      '<div class="dash-v2-weak-title">' + app.esc(title) + '</div>' +
                      '<div class="dash-v2-weak-sub">' + t.right + ' of ' + t.total + ' correct</div>' +
                    '</div>' +
                    '<span class="chip chip--danger">' + t.pct + '%</span>' +
                  '</a>';
                }).join("")
              : '<p class="small muted p-4">All tested topics are scoring at or above 75%! Fantastic!</p>') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* Memory & Knowledge Vault Tab */
  function renderMemoryAndVaultSection(boxCounts, totalCards, dueCount, totalHl, notesCount, bmsCount, qaCount) {
    return '<div class="animate-fade-in">' +

      /* 3-Tier Spaced Memory Card */
      '<div class="dash-v2-panel-card">' +
        '<div class="dash-v2-card-head">' +
          '<div>' +
            '<h3 class="dash-v2-card-title">🧠 Smart Spaced Memory Queue</h3>' +
            '<p class="small muted mt-1">Questions advance across memory boxes as you answer them correctly over time.</p>' +
          '</div>' +
          (dueCount > 0 ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">' + app.icon("repeat") + ' Review ' + dueCount + ' Due</a>' : '<span class="chip chip--ok">Queue Clear</span>') +
        '</div>' +

        '<div class="dash-v2-memory-boxes mt-6">' +
          '<div class="dash-v2-mem-box">' +
            '<div class="dash-v2-mem-icon">🌱</div>' +
            '<div class="dash-v2-mem-val">' + boxCounts[0] + '</div>' +
            '<div class="dash-v2-mem-title">Box 1: Learning</div>' +
            '<div class="dash-v2-mem-sub">Daily repetition</div>' +
          '</div>' +
          '<div class="dash-v2-mem-box">' +
            '<div class="dash-v2-mem-icon">⚡</div>' +
            '<div class="dash-v2-mem-val">' + (boxCounts[1] + boxCounts[2]) + '</div>' +
            '<div class="dash-v2-mem-title">Box 2-3: Consolidating</div>' +
            '<div class="dash-v2-mem-sub">Every 2 to 4 days</div>' +
          '</div>' +
          '<div class="dash-v2-mem-box">' +
            '<div class="dash-v2-mem-icon">👑</div>' +
            '<div class="dash-v2-mem-val">' + (boxCounts[3] + boxCounts[4]) + '</div>' +
            '<div class="dash-v2-mem-title">Box 4-5: Mastered</div>' +
            '<div class="dash-v2-mem-sub">Permanent memory</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* Knowledge Artifacts Vault */
      '<h2 class="dash-v2-section-title mt-8">📚 Personal Study Artifacts</h2>' +
      '<div class="dash-v2-vault-grid mt-4">' +
        '<a class="dash-v2-vault-item is-amber" href="#/library">' +
          '<span class="dash-v2-vault-icon">⭐</span>' +
          '<div class="dash-v2-vault-val">' + bmsCount + '</div>' +
          '<div class="dash-v2-vault-name">Bookmarks Saved</div>' +
        '</a>' +
        '<a class="dash-v2-vault-item is-blue" href="#/library">' +
          '<span class="dash-v2-vault-icon">📝</span>' +
          '<div class="dash-v2-vault-val">' + notesCount + '</div>' +
          '<div class="dash-v2-vault-name">Personal Notes</div>' +
        '</a>' +
        '<a class="dash-v2-vault-item is-teal" href="#/library">' +
          '<span class="dash-v2-vault-icon">🖊️</span>' +
          '<div class="dash-v2-vault-val">' + totalHl + '</div>' +
          '<div class="dash-v2-vault-name">High-Yield Highlights</div>' +
        '</a>' +
        '<a class="dash-v2-vault-item is-purple" href="#/qa">' +
          '<span class="dash-v2-vault-icon">💡</span>' +
          '<div class="dash-v2-vault-val">' + qaCount + '</div>' +
          '<div class="dash-v2-vault-name">Q&amp;A Model Answers</div>' +
        '</a>' +
      '</div>' +

    '</div>';
  }

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

  function findWeakestUnit(allUnits, quiz) {
    var theory = allUnits.filter(function (u) {
      return u.stream !== "practical" && app.questionCount(u.id) > 0;
    });
    if (!theory.length) return { id: "unit-1", name: "General Biochemistry", score: 0, hasScore: false };

    var untested = theory.filter(function (u) {
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      return !rec || !rec.totalQ;
    });
    if (untested.length) {
      var u0 = untested[0];
      return { id: u0.id, name: u0.short || u0.title, score: 0, hasScore: false };
    }

    var ranked = theory.slice().sort(function (a, b) {
      var aRec = quiz.byUnit && quiz.byUnit["unit:" + a.id];
      var bRec = quiz.byUnit && quiz.byUnit["unit:" + b.id];
      var aPct = aRec && aRec.totalQ ? (aRec.totalCorrect / aRec.totalQ) : 0;
      var bPct = bRec && bRec.totalQ ? (bRec.totalCorrect / bRec.totalQ) : 0;
      return aPct - bPct;
    });
    var w = ranked[0];
    return { id: w.id, name: w.short || w.title, score: 0, hasScore: true };
  }

  function attachTabEvents(host) {
    host.querySelectorAll(".dash-v2-tab[data-dash-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var tabId = btn.getAttribute("data-dash-tab");
        currentTab = tabId;

        host.querySelectorAll(".dash-v2-tab").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        host.querySelectorAll(".dash-v2-pane").forEach(function (pane) {
          pane.classList.remove("is-active");
        });
        var activePane = host.querySelector("#pane-" + tabId);
        if (activePane) activePane.classList.add("is-active");
      });
    });
  }

  return {
    render: render
  };
})();
