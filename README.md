# Veterinary Biochemistry Studio

A modern, fast, offline-first curriculum companion for **B.V.Sc & A.H. second-year Veterinary Biochemistry**, following the official VCI MSVE syllabus (Credit hours 2+1=3). Built in pure vanilla JavaScript, HTML, and CSS — zero build steps, zero npm dependencies, zero complex toolchains.

---

## How to Run It

### Option A — Instant Local Server (Recommended)
Double-click **`tools/start-server.bat`**.
Open your browser to:
```
http://localhost:5199
```
*(Press `Ctrl+C` in the command window to stop the server).*

### Option B — Direct Double-Click
Double-click **`index.html`** in File Explorer. Every route, lesson reader, quiz runner, and dashboard view runs directly from `file:///`.

---

## Project Structure

```
D:\VET BIOCHEMISTRY\
│
├── index.html                 Single-page application shell.
├── manifest.json              PWA manifest (standalone, theme-color #1565c0).
├── service-worker.js          Offline caching (CACHE_VERSION = "vbioc-v1").
├── 1-CLICK-PUSH-TO-GITHUB.bat Double-click → syncs repo, stages, commits, and pushes to GitHub!
├── SYNC-TO-REPO.bat           Double-click → mirrors all files into repo/ sequentially.
├── README.md                  This content guide.
├── REPO.md                    Student repository & GitHub guide.
├── CLAUDE-CONTEXT.md          The project's living context memory file.
├── NEW-SUBJECT-BLUEPRINT.md   Architecture blueprint and specifications.
├── Vet Biochemistry outline.pdf Authoritative VCI syllabus source document.
│
├── repo/                      📦 PRISTINE MIRROR FOLDER FOR DRAG-AND-DROP UPLOADS
│   ├── assets/                Sequential copy of assets/
│   ├── data/                  Sequential copy of data/
│   ├── images/                Sequential copy of images/
│   ├── js/                    Sequential copy of js/
│   └── tools/                 Sequential copy of tools/
│
├── data/                      ← ★ ALL SUBJECT CONTENT LIVES HERE ★
│   ├── data-syllabus.JS       Master index: units, topic titles, exam papers (77 topics)
│   ├── data-theory-unit1.JS   Unit 1: General Veterinary Biochemistry (17 topics)
│   ├── data-theory-unit2.JS   Unit 2: Intermediary Metabolism (22 topics)
│   ├── data-theory-unit3.JS   Unit 3: Veterinary Analytical Biochemistry (16 topics)
│   ├── data-practical.JS      All 3 practical units (22 topics)
│   ├── data-why.JS            Mechanism-first comparative "WHY" entries
│   ├── data-qa.JS             Written-exam practice bank (Short notes, Long answers, etc.)
│   ├── data-quiz.JS           MCQ / True-False / Fill-in-the-Blank question bank
│   └── events-data.js         Department announcements & academic updates
│
├── js/                        ← Application Engines (Vanilla JS)
│   ├── store.js               localStorage layer with "vbioc-" prefix
│   ├── app.js                 Router, page renderers, highlighter, and audio reader
│   ├── quiz.js                Quiz engine with Annual Examination, Grand Test, & SRS
│   ├── dashboard.js           Biochemistry mastery analytics & 12-week heatmap
│   ├── glossary.js            199+ term UG biochemistry dictionary with audio & tooltips
│   ├── search.js              Global Ctrl+K search palette
│   ├── deep-guide.js          Contextual deep guide overlay controller
│   └── events.js              Announcements banner and card renderer
│
├── assets/css/
│   ├── tokens.css             ★ SHARED IVRI ACADEMIC THEME (Do not edit per subject)
│   ├── main.css               Layout, typography, sidebar, tooltips
│   ├── sections.css           Per-screen styles (lesson reader, quiz, dashboard)
│   ├── animations.css         GPU-accelerated micro-interactions
│   ├── deep-guide.css         Diagnostic orientation guide styling
│   └── events.css             Department announcements styles
│
├── images/                    theory/ practical/ why/ qa/ figures
└── tools/
    ├── start-server.bat       Launches local HTTP server at localhost:5199
    ├── make-data-files.bat    Regenerates data blocks for newly added topics
    ├── make-data-files.py     Python topic block scaffolding script
    └── sync-repo.bat          Refreshes the repo/ mirror directory
```

---

## The 3 Syllabus Units

| Unit | Title | Topics | Exam Format |
|---|---|---|---|
| **Unit 1** | General Veterinary Biochemistry | 17 | Annual Examination (100 Theory) |
| **Unit 2** | Intermediary Metabolism | 22 | Annual Examination (100 Theory) |
| **Unit 3** | Veterinary Analytical Biochemistry | 16 | Annual Examination (100 Theory) |
| **Practical** | Units 1 to 3 Laboratory Curriculum | 22 | Annual Examination (60 Practical) |

---

## Adding Content

1. Open the relevant file in `data/` (e.g. `data-theory-unit1.JS`).
2. Fill in:
   - `summary`: One clear summary sentence.
   - `desc`: Complete, full-marks UG exam answer.
   - `eliteDesc`: Advanced biochemical mechanisms, molecular pathways, and regulation.
   - `keyPoints`: 10–18 high-yield marks-scoring bullet points.
   - `tables`: 2–3 comparative tables asked in university exams.
   - `clinical`: Practical field applications for Indian livestock, companion animals, and poultry.
3. Save the file and refresh your browser!

---

## Content Boundaries

- **No Darwinian origin narratives or phylogenetic speculation.** Explanations focus on established biochemistry, metabolic pathways, enzyme mechanisms, and species comparisons.
- **Religious and mythological neutrality.**
- **Analogy boundary:** No alcohol, intoxication, or alcoholic beverage analogies (ethanol as a chemical substrate, solvent, or antiseptic is fine).

---

## Student Developer
**Mr. Fazal Zama**  
B.V.Sc & A.H. UG Student · Roll No. B0-350-2025  
ICAR — Indian Veterinary Research Institute (IVRI), Bareilly  
Email: [vet.fazalzama@gmail.com](mailto:vet.fazalzama@gmail.com)
