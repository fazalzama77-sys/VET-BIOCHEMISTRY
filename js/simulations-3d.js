/* ============================================================
   simulations-3d.js — Interactive 3D & Structural Biochemistry
   Real 3D rotatable ball-and-stick chairs, Haworth disaccharide
   Benedict's / Hydrolysis labs, 3D Amylose helix, Peptidoglycan,
   Lipid ester hydrolysis, and ATP phosphoanhydride cleavage.
   ============================================================ */
(function () {
  "use strict";
  if (!window.BioSim || !window.BioSim.registerEngine) return;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ---- Simple 3D Rotation & Perspective Projection ---- */
  function project3D(p, rotX, rotY, cx, cy, scale) {
    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var x1 = p.x * cosY + p.z * sinY;
    var z1 = -p.x * sinY + p.z * cosY;
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    var y2 = p.y * cosX - z1 * sinX;
    var z2 = p.y * sinX + z1 * cosX;
    var persp = 5.2 / (5.2 - z2 * 0.45);
    return { x: cx + x1 * scale * persp, y: cy - y2 * scale * persp, z: z2, s: persp };
  }

  function drawSphere3D(ctx, x, y, r, baseCol, label, sub) {
    var grad = ctx.createRadialGradient(x - r * 0.32, y - r * 0.32, r * 0.12, x, y, r);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.28, baseCol);
    grad.addColorStop(1, "#102027");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    if (label) {
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 " + Math.max(10, Math.round(r * 0.85)) + "px monospace";
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + Math.round(r * 0.3));
    }
    if (sub) {
      ctx.fillStyle = baseCol;
      ctx.font = "700 11.5px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(sub, x, y - r - 5);
    }
    ctx.textAlign = "left";
  }

  /* ============================================================
     1. 3D ROTATABLE MONOSACCHARIDE CHAIR & EPIMER ENGINE (u1-t06)
     ============================================================ */
  window.BioSim.registerEngine("monosaccharide3d", function (cfg, state) {
    state.tab = "beta";
    state.rotY = 0.42;
    state.rotX = 0.28;
    state.autoSpin = true;
    state.mutarotate = false;

    var specs = {
      beta: {
        label: "β-D-Glucose (64%)",
        c1Up: true, c2Up: false, c3Up: true, c4Up: false, amino: false, highlight: 1,
        info: "<strong>β-D-Glucopyranose (Most Stable Sugar in Nature!):</strong> Drag to rotate! Notice EVERY bulky group — C1-OH, C2-OH, C3-OH, C4-OH, and C6-CH₂OH — sits in the wide-open <strong>EQUATORIAL</strong> position (zero axial steric clash!). That is why β accounts for 64% at equilibrium.",
        metrics: [
          { label: "C1-OH Position", val: "EQUATORIAL (Up)", cls: "is-ok" },
          { label: "Equilibrium Share", val: "64% (+18.7°)", cls: "is-ok" },
          { label: "Steric Clash", val: "ZERO (All Equat.)", cls: "is-ok" },
          { label: "Reducing Power", val: "YES (Free C1-OH)", cls: "is-info" }
        ]
      },
      alpha: {
        label: "α-D-Glucose (36%)",
        c1Up: false, c2Up: false, c3Up: true, c4Up: false, amino: false, highlight: 1,
        info: "<strong>α-D-Glucopyranose:</strong> Compare C1 with β-D-Glucose — the <strong>C1-OH points AXIAL DOWN</strong> (trans to C6-CH₂OH). This creates slight 1,3-diaxial steric crowding, so α makes up 36% at equilibrium (+112.2° → mutarotates to +52.7°).",
        metrics: [
          { label: "C1-OH Position", val: "AXIAL (Down)", cls: "is-warn" },
          { label: "Equilibrium Share", val: "36% (+112.2°)", cls: "is-info" },
          { label: "Relation to β", val: "C1 Anomer", cls: "is-info" },
          { label: "Polymer Built", val: "Starch & Glycogen", cls: "is-ok" }
        ]
      },
      mannose: {
        label: "D-Mannose (C2 Epimer)",
        c1Up: true, c2Up: true, c3Up: true, c4Up: false, amino: false, highlight: 2,
        info: "<strong>D-Mannose = C2 Epimer of D-Glucose:</strong> Look at the glowing golden ring on <strong>Carbon-2</strong>! Only the C2-OH flips UP (axial) compared to D-Glucose; C3, C4, and C5 remain identical.",
        metrics: [
          { label: "Changed Carbon", val: "C2-OH Flipped UP!", cls: "is-warn" },
          { label: "Isomer Class", val: "C2 Epimer of Glc", cls: "is-info" },
          { label: "Formula", val: "C₆H₁₂O₆", cls: "is-info" },
          { label: "Biological Role", val: "Glycoproteins / N-glycans", cls: "is-ok" }
        ]
      },
      galactose: {
        label: "D-Galactose (C4 Epimer)",
        c1Up: true, c2Up: false, c3Up: true, c4Up: true, amino: false, highlight: 4,
        info: "<strong>D-Galactose = C4 Epimer of D-Glucose:</strong> Look at the glowing golden ring on <strong>Carbon-4</strong>! Only the C4-OH flips UP (axial). Combined with Glucose via β(1→4), it forms milk sugar <strong>Lactose</strong>!",
        metrics: [
          { label: "Changed Carbon", val: "C4-OH Flipped UP!", cls: "is-warn" },
          { label: "Isomer Class", val: "C4 Epimer of Glc", cls: "is-info" },
          { label: "Milk Role", val: "Lactose (β-Gal 1→4 Glc)", cls: "is-ok" },
          { label: "Nerve Role", val: "Cerebrosides (Myelin)", cls: "is-info" }
        ]
      },
      glcnac: {
        label: "GlcNAc (Amino Sugar)",
        c1Up: true, c2Up: false, c3Up: true, c4Up: false, amino: true, highlight: 2,
        info: "<strong>N-Acetyl-D-Glucosamine (GlcNAc):</strong> Look at <strong>Carbon-2</strong> — the -OH group is replaced by a blue Nitrogen amino-acetyl group (<strong>-NH-CO-CH₃</strong>). Forms bacterial peptidoglycan, chitin, and joint hyaluronic acid!",
        metrics: [
          { label: "C2 Substitution", val: "-NH-CO-CH₃ (Blue N)", cls: "is-info" },
          { label: "Class", val: "Amino Sugar", cls: "is-ok" },
          { label: "Structural Role", val: "Peptidoglycan & GAGs", cls: "is-ok" },
          { label: "Vet Relevance", val: "Joint Cartilage Matrix", cls: "is-info" }
        ]
      }
    };

    return {
      tabs: Object.keys(specs).map(function (k) { return { id: k, label: specs[k].label }; }),
      onTab: function (id) { state.tab = id; state.mutarotate = false; },
      controls: function () {
        return [
          { type: "toggle", key: "autoSpin", label: "Auto-Rotate 3D Chair", onClass: "is-on-blue" },
          { type: "toggle", key: "mutarotate", label: "Animate α ⇌ β C1-OH Flip", onClass: "is-on-teal" }
        ];
      },
      metrics: function () { return (specs[state.tab] || specs.beta).metrics; },
      inspector: function () {
        return '<span class="biosim-inspector__tag">DRAG TO ROTATE 3D</span>' + (specs[state.tab] || specs.beta).info;
      },
      onDrag: function (dx, dy) {
        state.autoSpin = false;
        state.rotY += dx * 0.012;
        state.rotX = clamp(state.rotX + dy * 0.012, -1.1, 1.1);
      },
      step: function (dt) {
        if (state.autoSpin) state.rotY += dt * 0.45;
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var sp = specs[state.tab] || specs.beta;
        var cx = w * 0.5, cy = h * 0.54;
        var scale = Math.min(w, h) * 0.21;

        // 4C1 Pyranose chair exact 3D coordinates
        var c1Up = state.mutarotate ? (Math.sin(t * 2.4) > 0) : sp.c1Up;
        var atoms = [
          { id: "O5", x: 0.45, y: 0.28, z: -0.92, col: "#d32f2f", r: 15, lbl: "O" },
          { id: "C1", x: 1.18, y: -0.22, z: -0.10, col: "#37474f", r: 14, lbl: "C1", hi: sp.highlight === 1 },
          { id: "C2", x: 0.52, y: 0.22, z: 0.92, col: "#37474f", r: 14, lbl: "C2", hi: sp.highlight === 2 },
          { id: "C3", x: -0.68, y: -0.24, z: 0.82, col: "#37474f", r: 14, lbl: "C3" },
          { id: "C4", x: -1.18, y: 0.22, z: -0.18, col: "#37474f", r: 14, lbl: "C4", hi: sp.highlight === 4 },
          { id: "C5", x: -0.52, y: -0.20, z: -1.02, col: "#37474f", r: 14, lbl: "C5" },
          // C6 -CH2OH equatorial UP on C5
          { id: "C6", x: -1.08, y: 0.42, z: -1.92, col: "#1565c0", r: 15, lbl: "C6", sub: "CH₂OH (Up)" },
          // C1-OH (Beta = equatorial UP, Alpha = axial DOWN)
          { id: "OH1", x: c1Up ? 2.15 : 1.24, y: c1Up ? 0.16 : -1.28, z: c1Up ? -0.10 : -0.12, col: c1Up ? "#00897b" : "#d84315", r: 14, lbl: "OH", sub: c1Up ? "β-OH (Eq ↑)" : "α-OH (Ax ↓)" },
          // C2-OH or NHAc (Glc = eq down; Mannose = ax up)
          { id: "OH2", x: sp.c2Up ? 0.55 : 1.15, y: sp.c2Up ? 1.28 : -0.18, z: sp.c2Up ? 0.95 : 1.78, col: sp.amino ? "#1565c0" : (sp.c2Up ? "#e65100" : "#e53935"), r: sp.amino ? 16 : 13, lbl: sp.amino ? "NH" : "OH", sub: sp.amino ? "NH-Ac (C2)" : (sp.c2Up ? "C2-OH (Ax ↑)" : "OH") },
          // C3-OH (equatorial up)
          { id: "OH3", x: -1.28, y: 0.16, z: 1.70, col: "#e53935", r: 12.5, lbl: "OH" },
          // C4-OH (Glc = eq down; Galactose = ax up)
          { id: "OH4", x: sp.c4Up ? -1.20 : -2.18, y: sp.c4Up ? 1.28 : -0.18, z: sp.c4Up ? -0.20 : -0.20, col: sp.c4Up ? "#e65100" : "#e53935", r: 13.5, lbl: "OH", sub: sp.c4Up ? "C4-OH (Ax ↑)" : "OH" }
        ];

        var bonds = [
          [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Ring
          [5, 6], [1, 7], [2, 8], [3, 9], [4, 10]         // Substituents
        ];

        var proj = atoms.map(function (a) {
          var p = project3D(a, state.rotX, state.rotY, cx, cy, scale);
          return { a: a, x: p.x, y: p.y, z: p.z, s: p.s };
        });

        // Draw title banner
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText(sp.label + " — 3D ⁴C₁ Chair Conformation (Drag to Rotate)", cx, 24);

        // Draw bonds first
        bonds.forEach(function (b) {
          var p1 = proj[b[0]], p2 = proj[b[1]];
          ctx.strokeStyle = (b[0] <= 5 && b[1] <= 5) ? theme.text : theme.muted;
          ctx.lineWidth = (b[0] <= 5 && b[1] <= 5) ? 4.2 : 3.0;
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        });

        // Depth-sort atoms (back to front)
        var sorted = proj.slice().sort(function (u, v) { return u.z - v.z; });
        sorted.forEach(function (p) {
          var rad = p.a.r * p.s;
          if (p.a.hi) {
            ctx.strokeStyle = "#ffa000";
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, rad + 6 + Math.sin(t * 5) * 2, 0, Math.PI * 2);
            ctx.stroke();
          }
          drawSphere3D(ctx, p.x, p.y, rad, p.a.col, p.a.lbl, p.a.sub);
        });

        // Legend bar at bottom
        ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace"; ctx.textAlign = "center";
        ctx.fillText("Dark Slate = Ring Carbons (C1–C5)   |   Red = Oxygen / -OH   |   Blue = C6 / Amino   |   Gold Halo = Key Steric Site", cx, h - 10);
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     2. INTERACTIVE DISACCHARIDE & BENEDICT'S REACTION LAB (u1-t07)
     ============================================================ */
  window.BioSim.registerEngine("disaccharide3d", function (cfg, state) {
    state.tab = "maltose";
    state.benedict = false;
    state.hydrolyzed = false;

    var sugars = {
      maltose: {
        label: "Maltose [α(1→4)]",
        r1: "α-D-Glucose", r2: "D-Glucose", ring2Pent: false,
        bondType: "α(1→4)", bridgeDir: "down", freeAnomeric: true, enzyme: "Maltase",
        osazone: "Sunflower / Petal",
        info: "<strong>Maltose (Starch Hydrolysis Product):</strong> Ring 1's C1 is locked in the α(1→4) oxygen bridge, BUT Ring 2 still has a <strong>FREE anomeric C1-OH</strong> (glowing green!). Click <strong>Test with Benedict's Cu²⁺</strong> to watch Cu²⁺ react with that free C1-OH to form brick-red Cu₂O!",
        metrics: function (hyd, ben) {
          return [
            { label: "Glycosidic Bond", val: hyd ? "CLEAVED (2× Glc)" : "α(1→4) O-Bridge", cls: "is-info" },
            { label: "Free Anomeric C1?", val: "YES (Ring 2 C1-OH)", cls: "is-ok" },
            { label: "Benedict's Result", val: ben ? "BRICK-RED Cu₂O (+)" : "Click Toggle to Test", cls: ben ? "is-danger" : "is-info" },
            { label: "Osazone Crystal", val: "Sunflower / Petal", cls: "is-ok" }
          ];
        }
      },
      lactose: {
        label: "Lactose [β(1→4)]",
        r1: "β-D-Galactose", r2: "D-Glucose", ring2Pent: false,
        bondType: "β(1→4)", bridgeDir: "diag", freeAnomeric: true, enzyme: "Lactase (β-Galactosidase)",
        osazone: "Powder-puff / Hedgehog",
        info: "<strong>Lactose (Milk Sugar — ~4.8% in Cow Milk):</strong> β-D-Galactose C1 (UP) links diagonally via a <strong>β(1→4)</strong> oxygen bridge to D-Glucose C4. Ring 2 retains a <strong>FREE C1-OH</strong> → Reducing sugar! Click <strong>Benedict's</strong> to see Cu²⁺ reduce!",
        metrics: function (hyd, ben) {
          return [
            { label: "Glycosidic Bond", val: hyd ? "CLEAVED (Gal + Glc)" : "β(1→4) Diagonal", cls: "is-info" },
            { label: "Free Anomeric C1?", val: "YES (Glucose C1-OH)", cls: "is-ok" },
            { label: "Benedict's Result", val: ben ? "BRICK-RED Cu₂O (+)" : "Click Toggle to Test", cls: ben ? "is-danger" : "is-info" },
            { label: "Osazone Crystal", val: "Powder-puff", cls: "is-warn" }
          ];
        }
      },
      sucrose: {
        label: "Sucrose [α1↔2β] (Non-Reducing!)",
        r1: "α-D-Glucose", r2: "β-D-Fructose", ring2Pent: true,
        bondType: "α(1→2)β", bridgeDir: "locked", freeAnomeric: false, enzyme: "Sucrase / HCl",
        osazone: "NONE (Non-Reducing)",
        info: "<strong>WHY SUCROSE IS NON-REDUCING:</strong> Glucose's anomeric <strong>C1</strong> and Fructose's anomeric <strong>C2</strong> are BOTH locked together in the α(1→2)β oxygen bridge! Click <strong>Benedict's Cu²⁺</strong> — it BOUNCES OFF (stays blue!). Now click <strong>Hydrolyze (Sucrase/HCl)</strong> to break the lock → both reducing ends open and turn BRICK-RED (Invert Sugar)!",
        metrics: function (hyd, ben) {
          var red = hyd;
          return [
            { label: "Glycosidic Bond", val: hyd ? "HYDROLYZED (Invert Sugar!)" : "α(1→2)β LOCKED 🔒", cls: hyd ? "is-ok" : "is-danger" },
            { label: "Free Anomeric C?", val: hyd ? "YES (Both Unlocked!)" : "NONE (C1 & C2 Locked)", cls: hyd ? "is-ok" : "is-danger" },
            { label: "Benedict's Result", val: ben ? (red ? "BRICK-RED Cu₂O (+)" : "STAYS BLUE (Negative!)") : "Click Toggle to Test", cls: ben ? (red ? "is-danger" : "is-info") : "is-info" },
            { label: "Optical Rotation", val: hyd ? "-19.8° (Inverted!)" : "+66.5° (Dextro)", cls: "is-warn" }
          ];
        }
      }
    };

    function drawHaworthPyranose(ctx, cx, cy, r, title, isGal, freeC1, lockedC1, theme) {
      // Standard 6-membered Haworth hexagon with O at top-right
      var pts = [
        { x: cx + r * 0.95, y: cy, lbl: "C1" },              // 0: C1 (right)
        { x: cx + r * 0.48, y: cy + r * 0.62, lbl: "C2" },   // 1: C2 (bottom-right)
        { x: cx - r * 0.48, y: cy + r * 0.62, lbl: "C3" },   // 2: C3 (bottom-left)
        { x: cx - r * 0.95, y: cy, lbl: "C4" },              // 3: C4 (left)
        { x: cx - r * 0.48, y: cy - r * 0.62, lbl: "C5" },   // 4: C5 (top-left)
        { x: cx + r * 0.48, y: cy - r * 0.62, lbl: "O" }     // 5: Ring O (top-right)
      ];
      // Ring bonds (thicker front edge C2-C3)
      for (var i = 0; i < 6; i++) {
        var a = pts[i], b = pts[(i + 1) % 6];
        ctx.strokeStyle = theme.text;
        ctx.lineWidth = (i === 1) ? 5.2 : 2.8;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      // C6-CH2OH stick going UP from C5
      ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.6;
      ctx.beginPath(); ctx.moveTo(pts[4].x, pts[4].y); ctx.lineTo(pts[4].x, pts[4].y - 26); ctx.stroke();
      ctx.fillStyle = theme.blue; ctx.font = "700 11px monospace"; ctx.textAlign = "center";
      ctx.fillText("CH₂OH", pts[4].x, pts[4].y - 31);

      // C4-OH (up if Galactose, down if Glucose)
      var c4y = isGal ? pts[3].y - 24 : pts[3].y + 26;
      ctx.strokeStyle = isGal ? "#e65100" : theme.muted; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[3].x, c4y); ctx.stroke();
      ctx.fillStyle = isGal ? "#e65100" : theme.muted; ctx.font = "700 10.5px monospace";
      ctx.fillText("OH", pts[3].x, c4y + (isGal ? -5 : 12));

      // Ring atoms
      pts.forEach(function (p, idx) {
        var isO = idx === 5;
        drawSphere3D(ctx, p.x, p.y, isO ? 13 : 11, isO ? "#d32f2f" : "#37474f", p.lbl);
      });

      // Free C1-OH callout on right ring
      if (freeC1) {
        ctx.strokeStyle = "#2e7d32"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[0].x + 28, pts[0].y + 16); ctx.stroke();
        drawSphere3D(ctx, pts[0].x + 32, pts[0].y + 18, 13, "#2e7d32", "OH");
        ctx.fillStyle = "#2e7d32"; ctx.font = "700 11.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("FREE C1-OH ✓", pts[0].x + 28, pts[0].y + 44);
      }
      if (lockedC1) {
        ctx.fillStyle = "#c62828"; ctx.font = "700 11px monospace"; ctx.textAlign = "center";
        ctx.fillText("C1 Locked", pts[0].x, pts[0].y - 18);
      }

      ctx.fillStyle = theme.text; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(title, cx, cy + r + 32);
      ctx.textAlign = "left";
      return pts;
    }

    function drawHaworthFuranose(ctx, cx, cy, r, title, unlocked, theme) {
      // Standard 180°-rotated β-D-fructofuranose for Sucrose: ring O at bottom, C3-C4 back-top, C2 left, C5 right
      var pts = [
        { x: cx, y: cy + r * 0.72, lbl: "O" },                // 0: Ring O (bottom)
        { x: cx + r * 0.86, y: cy + r * 0.08, lbl: "C5" },    // 1: C5 (right)
        { x: cx + r * 0.52, y: cy - r * 0.68, lbl: "C4" },    // 2: C4 (top-right)
        { x: cx - r * 0.52, y: cy - r * 0.68, lbl: "C3" },    // 3: C3 (top-left)
        { x: cx - r * 0.86, y: cy + r * 0.08, lbl: "C2" }     // 4: C2 anomeric (left)
      ];
      for (var i = 0; i < 5; i++) {
        var a = pts[i], b = pts[(i + 1) % 5];
        ctx.strokeStyle = theme.text;
        ctx.lineWidth = (i === 0 || i === 4) ? 4.8 : 2.8;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      // C1-CH2OH (UP on C2) & C6-CH2OH (DOWN on C5 in rotated D-fructofuranose)
      ctx.fillStyle = theme.blue; ctx.font = "700 11px monospace"; ctx.textAlign = "center";
      ctx.fillText("CH₂OH (C6)", pts[1].x + 12, pts[1].y + 34);
      ctx.fillText("CH₂OH (C1)", pts[4].x - 6, pts[4].y - 26);

      pts.forEach(function (p, idx) {
        drawSphere3D(ctx, p.x, p.y, idx === 0 ? 13 : 11, idx === 0 ? "#d32f2f" : "#6a48b5", p.lbl);
      });
      if (unlocked) {
        ctx.fillStyle = "#2e7d32"; ctx.font = "700 11.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("FREE C2-OH ✓", pts[4].x - 2, pts[4].y + 34);
      }
      ctx.fillStyle = theme.text; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(title, cx, cy + r + 32);
      ctx.textAlign = "left";
      return pts;
    }

    return {
      tabs: Object.keys(sugars).map(function (k) { return { id: k, label: sugars[k].label }; }),
      onTab: function (id) { state.tab = id; state.hydrolyzed = false; },
      controls: function () {
        var s = sugars[state.tab] || sugars.maltose;
        return [
          { type: "toggle", key: "benedict", label: "Test with Benedict's Cu²⁺ + Heat", onClass: "is-on" },
          { type: "toggle", key: "hydrolyzed", label: "Hydrolyze Bond (" + s.enzyme + " + H₂O)", onClass: "is-on-teal" }
        ];
      },
      metrics: function () {
        var s = sugars[state.tab] || sugars.maltose;
        return s.metrics(state.hydrolyzed, state.benedict);
      },
      inspector: function () {
        return '<span class="biosim-inspector__tag">GLYCOSIDIC MECHANISM</span>' + (sugars[state.tab] || sugars.maltose).info;
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var s = sugars[state.tab] || sugars.maltose;
        var sep = state.hydrolyzed ? 34 : 0;
        var r = clamp(w * 0.088, 44, 62);
        var cy = h * 0.54;
        var x1 = w * 0.31 - sep;
        var x2 = w * 0.69 + sep;

        // Title
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        var status = (s.freeAnomeric || state.hydrolyzed) ? "REDUCING SUGAR (Free Anomeric Carbon ✓)" : "NON-REDUCING SUGAR (Both Anomeric Carbons Locked 🔒)";
        ctx.fillText(s.r1 + " + " + s.r2 + " — " + status, w * 0.5, 24);

        var p1 = drawHaworthPyranose(ctx, x1, cy, r, s.r1, state.tab === "lactose", state.hydrolyzed, !state.hydrolyzed && !s.freeAnomeric, theme);
        var p2 = s.ring2Pent
          ? drawHaworthFuranose(ctx, x2, cy, r, s.r2, state.hydrolyzed, theme)
          : drawHaworthPyranose(ctx, x2, cy, r, s.r2, false, true, false, theme);

        // Glycosidic Oxygen Bridge between Ring 1 C1 (p1[0]) and Ring 2 C4 (p2[3]) or C2 (p2[4])
        var leftPt = p1[0];
        var rightPt = s.ring2Pent ? p2[4] : p2[3];
        var midX = (leftPt.x + rightPt.x) / 2;
        var midY = s.bridgeDir === "down" ? cy + 34 : (s.bridgeDir === "diag" ? cy - 6 : cy + 28);

        if (!state.hydrolyzed) {
          ctx.strokeStyle = "#d84315";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(leftPt.x, leftPt.y);
          ctx.lineTo(midX, midY);
          ctx.lineTo(rightPt.x, rightPt.y);
          ctx.stroke();
          drawSphere3D(ctx, midX, midY, 15, "#d84315", "O");
          ctx.fillStyle = "#d84315"; ctx.font = "700 12.5px monospace"; ctx.textAlign = "center";
          ctx.fillText(s.bondType + (s.freeAnomeric ? "" : " 🔒"), midX, midY - 22);
        } else {
          ctx.fillStyle = "#00897b"; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("✂ Cleaved by " + s.enzyme + " + H₂O", w * 0.5, cy - 10);
        }

        // Animated Benedict's Cu2+ test!
        if (state.benedict) {
          var canReduce = s.freeAnomeric || state.hydrolyzed;
          var targetX = s.ring2Pent ? (state.hydrolyzed ? p2[4].x : midX) : (p2[0].x + 32);
          var targetY = s.ring2Pent ? (state.hydrolyzed ? p2[4].y : midY) : (p2[0].y + 18);
          for (var i = 0; i < 4; i++) {
            var ph = (t * 0.75 + i * 0.25) % 1;
            var bx, by;
            if (canReduce) {
              bx = targetX + (1 - ph) * 70 * Math.cos(i * 1.4);
              by = targetY - 65 * (1 - ph) + (ph > 0.65 ? (ph - 0.65) * 90 : 0);
              var turnedRed = ph > 0.55;
              drawSphere3D(ctx, bx, by, turnedRed ? 12 : 10, turnedRed ? "#bf360c" : "#1565c0", turnedRed ? "Cu₂O" : "Cu²⁺");
            } else {
              // Bounce off locked Sucrose bond!
              var bounce = Math.abs(Math.sin(ph * Math.PI));
              bx = midX + (i - 1.5) * 26;
              by = midY - 35 - (1 - bounce) * 55;
              drawSphere3D(ctx, bx, by, 10, "#1565c0", "Cu²⁺");
            }
          }
          ctx.fillStyle = canReduce ? "#bf360c" : "#1565c0";
          ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(canReduce
            ? "🔥 BENEDICT POSITIVE: Free Anomeric -OH reduces Blue Cu²⁺ → Brick-Red Cu₂O Precipitate!"
            : "🛡 BENEDICT NEGATIVE: Both Anomeric Carbons Locked — Blue Cu²⁺ Bounces Off!", w * 0.5, h - 12);
        }
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     3. 3D POLYSACCHARIDE HELIX, BRANCHING & RUMEN CELLULOSE (u1-t08)
     ============================================================ */
  window.BioSim.registerEngine("polysaccharide3d", function (cfg, state) {
    state.tab = "amylose";
    state.reagent = false;

    return {
      tabs: [
        { id: "amylose", label: "Amylose (3D α1→4 Helix)" },
        { id: "glycogen", label: "Glycogen (α1→6 Branches)" },
        { id: "cellulose", label: "Cellulose (β1→4 Rumen Fiber)" }
      ],
      onTab: function (id) { state.tab = id; state.reagent = false; },
      controls: function () {
        if (state.tab === "amylose") return [{ type: "toggle", key: "reagent", label: "Add Iodine (I₃⁻) into Helix Core", onClass: "is-on-blue" }];
        if (state.tab === "glycogen") return [{ type: "toggle", key: "reagent", label: "Activate Glycogen Phosphorylase", onClass: "is-on-teal" }];
        return [{ type: "toggle", key: "reagent", label: "Add Rumen Microbial Cellulase", onClass: "is-on-teal" }];
      },
      metrics: function () {
        if (state.tab === "amylose") {
          return [
            { label: "Structure", val: "Left-Handed Helix (6/turn)", cls: "is-info" },
            { label: "Linkage", val: "Unbranched α(1→4)", cls: "is-info" },
            { label: "Iodine Complex", val: state.reagent ? "DEEP BLUE (I₃⁻ Trapped!)" : "Click Toggle to Add I₂", cls: state.reagent ? "is-ok" : "is-warn" },
            { label: "Digestion", val: "α-Amylase (All Species)", cls: "is-ok" }
          ];
        }
        if (state.tab === "glycogen") {
          return [
            { label: "Branch Frequency", val: "Every 8–12 Glucose", cls: "is-ok" },
            { label: "Linkages", val: "α(1→4) + α(1→6)", cls: "is-info" },
            { label: "Phosphorylase", val: state.reagent ? "MULTI-END BURST (G-1-P ↑)" : "Resting Store", cls: state.reagent ? "is-ok" : "is-info" },
            { label: "Iodine Color", val: "Reddish-Brown", cls: "is-warn" }
          ];
        }
        return [
          { label: "Linkage", val: "β(1→4) Straight Ribbon", cls: "is-info" },
          { label: "Mammalian Amylase", val: "CANNOT CLEAVE ✕", cls: "is-danger" },
          { label: "Rumen Cellulase", val: state.reagent ? "DIGESTING → VFAs!" : "Click Toggle to Digest", cls: state.reagent ? "is-ok" : "is-warn" },
          { label: "Ruminant Output", val: "Acetate > Propionate", cls: "is-ok" }
        ];
      },
      inspector: function () {
        if (state.tab === "amylose") return '<span class="biosim-inspector__tag">3D HELIX</span><strong>Why Starch Turns Deep Blue with Iodine:</strong> The α(1→4) bond angle naturally coils Amylose into a hollow 3D helix (6 glucose/turn). Toggle <strong>Add Iodine</strong> to watch linear I₃⁻ ions slip inside the hollow channel!';
        if (state.tab === "glycogen") return '<span class="biosim-inspector__tag">BRANCHING ADVANTAGE</span><strong>Why Animals Branch Glycogen Every 8–12 Residues:</strong> Each α(1→6) branch creates a new non-reducing end so multiple Glycogen Phosphorylase enzymes can release Glucose-1-P simultaneously during sprinting or fasting!';
        return '<span class="biosim-inspector__tag">RUMEN BIOCHEMISTRY</span><strong>Why Cows Can Eat Grass &amp; Dogs Cannot:</strong> Every alternate β-D-glucose in Cellulose flips 180°, forming rigid H-bonded sheets that mammalian α-amylase cannot touch. Toggle <strong>Rumen Cellulase</strong> to watch microbial enzymes cleave β(1→4) into VFAs!';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.54;

        if (state.tab === "amylose") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Amylose 3D Left-Handed α(1→4) Helix (6 Glucose / Turn)", cx, 24);

          // Draw 3D helical backbone
          var n = 22, left = 65, right = w - 65;
          var pts = [];
          for (var i = 0; i < n; i++) {
            var u = i / (n - 1);
            var ang = u * Math.PI * 6.5 - t * 1.1;
            var px = left + u * (right - left);
            var py = cy + Math.sin(ang) * 58;
            var pz = Math.cos(ang);
            pts.push({ x: px, y: py, z: pz, idx: i });
          }

          // Back half of helix
          for (var j = 0; j < n - 1; j++) {
            if (pts[j].z < 0) {
              ctx.strokeStyle = theme.faint; ctx.lineWidth = 3;
              ctx.beginPath(); ctx.moveTo(pts[j].x, pts[j].y); ctx.lineTo(pts[j + 1].x, pts[j + 1].y); ctx.stroke();
            }
          }
          // Iodine I3- chain right down the center core!
          if (state.reagent) {
            for (var k = 0; k < 9; k++) {
              var ix = left + 30 + k * ((right - left - 60) / 8) + Math.sin(t * 2 + k) * 4;
              drawSphere3D(ctx, ix, cy, 13, "#0d47a1", "I₃⁻");
            }
          }
          // Front half & glucose beads sorted by z
          pts.slice().sort(function (a, b) { return a.z - b.z; }).forEach(function (p) {
            var r = 11 + (p.z + 1) * 3.5;
            drawSphere3D(ctx, p.x, p.y, r, state.reagent ? "#1565c0" : "#00897b", "Glc");
          });
          ctx.textAlign = "left";
          return;
        }

        if (state.tab === "glycogen") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Glycogen Tree: α(1→4) Chains + Coral α(1→6) Branch Points", cx, 24);
          var mainY = cy + 36;
          var nodes = [];
          for (var g = 0; g < 8; g++) nodes.push({ x: 80 + g * ((w - 160) / 7), y: mainY, branch: (g === 2 || g === 5) });
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
          ctx.beginPath(); ctx.moveTo(nodes[0].x, mainY); ctx.lineTo(nodes[7].x, mainY); ctx.stroke();

          // Two α(1->6) branches shooting upward
          var ends = [nodes[7]];
          [2, 5].forEach(function (bi) {
            var bx = nodes[bi].x;
            ctx.strokeStyle = "#d84315"; ctx.lineWidth = 3.5;
            ctx.beginPath(); ctx.moveTo(bx, mainY); ctx.lineTo(bx + 36, mainY - 62); ctx.lineTo(bx + 125, mainY - 62); ctx.stroke();
            ctx.fillStyle = "#d84315"; ctx.font = "700 11px monospace";
            ctx.fillText("α(1→6)", bx - 8, mainY - 30);
            for (var k2 = 0; k2 < 3; k2++) {
              var nx = bx + 36 + k2 * 44, ny = mainY - 62;
              drawSphere3D(ctx, nx, ny, 13, "#6a48b5", "Glc");
              if (k2 === 2) ends.push({ x: nx, y: ny });
            }
          });
          nodes.forEach(function (nd) {
            drawSphere3D(ctx, nd.x, nd.y, 13, nd.branch ? "#d84315" : "#1565c0", "Glc");
          });

          if (state.reagent) {
            ends.forEach(function (e, idx) {
              var prog = (t * 0.9 + idx * 0.3) % 1;
              drawSphere3D(ctx, e.x + 22 + prog * 45, e.y - prog * 18, 12, "#2e7d32", "G1P");
            });
            ctx.fillStyle = "#2e7d32"; ctx.font = "700 12.5px sans-serif";
            ctx.fillText("⚡ Glycogen Phosphorylase cleaving G-1-P from ALL 3 non-reducing ends simultaneously!", cx, h - 14);
          }
          ctx.textAlign = "left";
          return;
        }

        // Cellulose β(1->4) parallel H-bonded chains
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("Cellulose: Rigid β(1→4) Alternating 180°-Flipped Chains + Inter-Chain H-Bonds", cx, 24);
        var rows = [cy - 34, cy + 44];
        var cols = 6;
        rows.forEach(function (ry, ri) {
          for (var c = 0; c < cols; c++) {
            var ux = 95 + c * ((w - 190) / (cols - 1));
            var drift = state.reagent ? Math.sin(t * 2 + c + ri) * 14 : 0;
            if (c < cols - 1 && !state.reagent) {
              ctx.strokeStyle = theme.sage; ctx.lineWidth = 3.5;
              ctx.beginPath(); ctx.moveTo(ux, ry); ctx.lineTo(ux + (w - 190) / (cols - 1), ry); ctx.stroke();
            }
            if (ri === 0 && !state.reagent) {
              ctx.strokeStyle = theme.amber; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
              ctx.beginPath(); ctx.moveTo(ux, rows[0] + 16); ctx.lineTo(ux, rows[1] - 16); ctx.stroke();
              ctx.setLineDash([]);
            }
            drawSphere3D(ctx, ux + drift, ry + (state.reagent ? drift * 0.5 : 0), 16, state.reagent ? "#00897b" : "#2e7d32", c % 2 === 0 ? "β↑" : "β↓");
          }
        });
        ctx.fillStyle = state.reagent ? "#00897b" : "#d84315";
        ctx.font = "700 12.5px sans-serif";
        ctx.fillText(state.reagent
          ? "✂ Rumen Microbial Cellulase cleaving β(1→4) → Cellobiose → Acetate, Propionate & Butyrate!"
          : "🔒 Parallel H-bonded sheets resist mammalian α-Amylase (needs Rumen Cellulase!)", cx, h - 14);
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     4. PEPTIDOGLYCAN (LYSOZYME / PENICILLIN) & GAG LAB (u1-t09)
     ============================================================ */
  window.BioSim.registerEngine("peptidoglycan3d", function (cfg, state) {
    state.tab = "peptido";
    state.lysozyme = false;
    state.penicillin = false;
    return {
      tabs: [
        { id: "peptido", label: "Peptidoglycan Cell Wall" },
        { id: "gag", label: "Synovial GAG Cushion" }
      ],
      onTab: function (id) { state.tab = id; state.lysozyme = false; state.penicillin = false; },
      controls: function () {
        if (state.tab === "peptido") {
          return [
            { type: "toggle", key: "lysozyme", label: "Add Lysozyme (Cuts β1→4 NAM–NAG)", onClass: "is-on" },
            { type: "toggle", key: "penicillin", label: "Add Penicillin (Blocks Cross-Links)", onClass: "is-on-blue" }
          ];
        }
        return [{ type: "toggle", key: "lysozyme", label: "Apply Equine Joint Load (Compress)", onClass: "is-on-teal" }];
      },
      metrics: function () {
        if (state.tab === "gag") {
          return [
            { label: "Polyanions", val: "-COO⁻ & -OSO₃⁻", cls: "is-info" },
            { label: "Hydration Shell", val: state.lysozyme ? "Compressed (Rebounding!)" : "Fully Hydrated Cushion", cls: "is-ok" },
            { label: "Synovial Fluid", val: "Hyaluronic Acid", cls: "is-ok" },
            { label: "Anticoagulant GAG", val: "Heparin (AT-III)", cls: "is-warn" }
          ];
        }
        var intact = !state.lysozyme && !state.penicillin;
        return [
          { label: "Glycan Backbone", val: state.lysozyme ? "CLEAVED (Lysozyme ✂)" : "Intact NAG–NAM", cls: state.lysozyme ? "is-danger" : "is-ok" },
          { label: "Peptide Bridges", val: state.penicillin ? "BLOCKED (Penicillin ✕)" : "Cross-Linked ✓", cls: state.penicillin ? "is-danger" : "is-ok" },
          { label: "Cell Wall State", val: intact ? "Osmotically Resistant" : "OSMOTIC LYSIS!", cls: intact ? "is-ok" : "is-danger" },
          { label: "Gram-Positive", val: "Thick + Teichoic Acid", cls: "is-info" }
        ];
      },
      inspector: function () {
        if (state.tab === "gag") return '<span class="biosim-inspector__tag">JOINT BIOMECHANICS</span>Negatively charged Hyaluronic Acid &amp; Chondroitin Sulfate attract Na⁺ + H₂O, creating an elastic hydrated cushion in articular cartilage (used intra-articularly in equine osteoarthritis!).';
        return '<span class="biosim-inspector__tag">ANTIBIOTIC TARGETS</span>Toggle <strong>Lysozyme</strong> (tears/saliva/milk — cuts β1→4 glycan bonds) or <strong>Penicillin</strong> (inhibits transpeptidase cross-linking between NAM tetrapeptides) to see how both cause bacterial osmotic lysis!';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.54;
        if (state.tab === "gag") {
          var squeeze = state.lysozyme ? 0.62 + Math.sin(t * 4) * 0.08 : 1.0;
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Proteoglycan Bottle-Brush: Polyanionic GAGs Trapping Na⁺ & Water", cx, 24);
          ctx.strokeStyle = theme.purple; ctx.lineWidth = 6;
          ctx.beginPath(); ctx.moveTo(60, cy); ctx.lineTo(w - 60, cy); ctx.stroke();
          for (var i = 0; i < 9; i++) {
            var bx = 90 + i * ((w - 180) / 8);
            var len = 74 * squeeze;
            ctx.strokeStyle = theme.teal; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(bx, cy - len); ctx.lineTo(bx, cy + len); ctx.stroke();
            drawSphere3D(ctx, bx, cy - len, 10, "#1565c0", "H₂O");
            drawSphere3D(ctx, bx, cy + len, 10, "#d84315", "-OSO₃⁻");
          }
          ctx.textAlign = "left";
          return;
        }
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("Bacterial Peptidoglycan Mesh: NAG–NAM Strands + Peptide Cross-Links", cx, 24);
        var rows = [cy - 44, cy + 44];
        for (var r = 0; r < 2; r++) {
          for (var c = 0; c < 6; c++) {
            var x = 85 + c * ((w - 170) / 5);
            var isNAM = c % 2 === 1;
            var y = rows[r] + (state.lysozyme ? Math.sin(t * 3 + c) * 8 : 0);
            if (c < 5 && !state.lysozyme) {
              ctx.strokeStyle = theme.blue; ctx.lineWidth = 3.5;
              ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (w - 170) / 5, y); ctx.stroke();
            }
            if (r === 0 && isNAM) {
              ctx.strokeStyle = state.penicillin ? theme.danger : theme.amber;
              ctx.lineWidth = 3.5;
              if (state.penicillin) ctx.setLineDash([5, 5]);
              ctx.beginPath(); ctx.moveTo(x, rows[0] + 16); ctx.lineTo(x, rows[1] - 16); ctx.stroke();
              ctx.setLineDash([]);
              if (state.penicillin) {
                ctx.fillStyle = theme.danger; ctx.font = "700 12px sans-serif";
                ctx.fillText("✕ Penicillin", x, cy + 4);
              }
            }
            drawSphere3D(ctx, x, y, 16, isNAM ? "#6a48b5" : "#1565c0", isNAM ? "NAM" : "NAG");
          }
        }
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     5. LIPID STRUCTURE & LIPASE HYDROLYSIS LAB (u1-t10)
     ============================================================ */
  window.BioSim.registerEngine("lipid3d", function (cfg, state) {
    state.tab = "tag";
    state.action = false;
    return {
      tabs: [
        { id: "tag", label: "Triacylglycerol (TAG)" },
        { id: "pl", label: "Amphipathic Phospholipid" }
      ],
      onTab: function (id) { state.tab = id; state.action = false; },
      controls: function () {
        return [{
          type: "toggle", key: "action",
          label: state.tab === "tag" ? "Add Lipase (+3 H₂O Hydrolysis)" : "Place in Water (Bilayer Assembly)",
          onClass: "is-on-teal"
        }];
      },
      metrics: function () {
        if (state.tab === "tag") {
          return [
            { label: "Caloric Yield", val: "9.0 kcal/g", cls: "is-ok" },
            { label: "Ester Bonds", val: state.action ? "CLEAVED → Glycerol + 3 FFA" : "3 Intact Ester Links", cls: state.action ? "is-warn" : "is-info" },
            { label: "Cis-Double Bond", val: "Introduces 30° Kink", cls: "is-ok" },
            { label: "Cat Special EFA", val: "Arachidonic Acid (20:4)", cls: "is-danger" }
          ];
        }
        return [
          { label: "Polarity", val: "Amphipathic (Head + 2 Tails)", cls: "is-ok" },
          { label: "State in Water", val: state.action ? "Spontaneous Bilayer!" : "Free Monomers", cls: "is-ok" },
          { label: "Lung Surfactant", val: "DPPC (Lecithin)", cls: "is-info" },
          { label: "Inner Mito.", val: "Cardiolipin", cls: "is-warn" }
        ];
      },
      inspector: function () {
        if (state.tab === "tag") return '<span class="biosim-inspector__tag">LIPID ARCHITECTURE</span>Observe the 3-carbon Glycerol backbone esterified to 1 straight saturated chain (Palmitic 16:0) + 2 kinked cis-unsaturated chains (Oleic 18:1, Linoleic 18:2). Toggle <strong>Lipase</strong> to cleave into Glycerol + 3 NEFAs!';
        return '<span class="biosim-inspector__tag">AMPHIPATHIC SELF-ASSEMBLY</span>Hydrophilic polar phosphate-choline heads face water while hydrophobic acyl tails hide inside — driving spontaneous membrane &amp; micelle formation!';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.52;
        if (state.tab === "tag") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Triacylglycerol: Glycerol Backbone + 3 Fatty Acyl Chains (Saturated vs Cis-Unsaturated)", cx, 24);
          var gx = w * 0.20, ys = [cy - 68, cy, cy + 68];
          // Glycerol spine
          ctx.strokeStyle = theme.purple; ctx.lineWidth = 4;
          ctx.beginPath(); ctx.moveTo(gx, ys[0]); ctx.lineTo(gx, ys[2]); ctx.stroke();
          var names = ["Palmitic (16:0 Saturated — Straight)", "Oleic (18:1 ω-9 — 1 Cis Kink)", "Linoleic (18:2 ω-6 Essential — 2 Kinks)"];
          ys.forEach(function (y, idx) {
            drawSphere3D(ctx, gx, y, 15, "#6a48b5", "C" + (idx + 1));
            var shift = state.action ? 54 : 0;
            if (!state.action) {
              ctx.strokeStyle = "#d84315"; ctx.lineWidth = 3;
              ctx.beginPath(); ctx.moveTo(gx + 16, y); ctx.lineTo(gx + 68, y); ctx.stroke();
              drawSphere3D(ctx, gx + 48, y, 11, "#d84315", "O");
            } else {
              ctx.fillStyle = "#00897b"; ctx.font = "700 11px monospace";
              ctx.fillText("✂ H₂O", gx + 36, y + 4);
            }
            // Zig-zag hydrocarbon tail
            ctx.strokeStyle = idx === 0 ? theme.amber : (idx === 1 ? theme.teal : theme.blue);
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            var sx = gx + 70 + shift, sy = y;
            ctx.moveTo(sx, sy);
            for (var s = 1; s <= 12; s++) {
              sx += 18;
              var kink = (idx === 1 && s > 6) ? 16 : (idx === 2 && s > 5 ? (s > 9 ? 28 : 14) : 0);
              sy = y + (s % 2 === 0 ? -7 : 7) + kink * 0.45;
              ctx.lineTo(sx, sy);
            }
            ctx.stroke();
            ctx.fillStyle = theme.text; ctx.font = "600 11.5px sans-serif"; ctx.textAlign = "left";
            ctx.fillText(names[idx], gx + 74 + shift, y - 16);
          });
          return;
        }
        // Amphipathic Phospholipid self-assembly
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText(state.action ? "In Water: Spontaneous Phospholipid Bilayer (Hydrophobic Effect)" : "Single Amphipathic Phosphatidylcholine (Lecithin)", cx, 24);
        var count = state.action ? 12 : 1;
        for (var i = 0; i < count; i++) {
          var px = state.action ? (90 + i * ((w - 180) / 11)) : cx;
          var pyTop = state.action ? cy - 52 : cy - 58;
          ctx.strokeStyle = theme.amber; ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(px - 5, pyTop + 12); ctx.lineTo(px - 5, pyTop + 56);
          ctx.moveTo(px + 5, pyTop + 12); ctx.lineTo(px + 10, pyTop + 34); ctx.lineTo(px + 6, pyTop + 56);
          ctx.stroke();
          drawSphere3D(ctx, px, pyTop, state.action ? 11 : 20, "#1565c0", state.action ? "P" : "PO₄⁻");
          if (state.action) {
            var pyBot = cy + 52;
            ctx.beginPath();
            ctx.moveTo(px - 5, pyBot - 12); ctx.lineTo(px - 5, pyBot - 56);
            ctx.moveTo(px + 5, pyBot - 12); ctx.lineTo(px + 10, pyBot - 34); ctx.lineTo(px + 6, pyBot - 56);
            ctx.stroke();
            drawSphere3D(ctx, px, pyBot, 11, "#1565c0", "P");
          }
        }
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     6. ATP HIGH-ENERGY PHOSPHOANHYDRIDE CLEAVAGE LAB (u1-t16)
     ============================================================ */
  window.BioSim.registerEngine("atp3d", function (cfg, state) {
    state.cleaved = false;
    return {
      controls: function () {
        return [{ type: "toggle", key: "cleaved", label: "Hydrolyze Terminal γ-Phosphate (ATP + H₂O → ADP + Pᵢ)", onClass: "is-on" }];
      },
      metrics: function () {
        return [
          { label: "Reaction State", val: state.cleaved ? "ADP + Pᵢ + Energy!" : "Intact MgATP²⁻", cls: state.cleaved ? "is-ok" : "is-info" },
          { label: "Free Energy (ΔG°')", val: "-30.5 kJ/mol (-7.3 kcal)", cls: "is-ok" },
          { label: "Why High Energy?", val: "O⁻ Repulsion + Resonance", cls: "is-warn" },
          { label: "Required Ion", val: "Mg²⁺ (Chelated)", cls: "is-info" }
        ];
      },
      inspector: function () {
        return '<span class="biosim-inspector__tag">BIOENERGETICS</span>Toggle <strong>Hydrolyze γ-Phosphate</strong> to watch the terminal phosphoanhydride bond snap! Relief of intense negative-charge repulsion between the 3 phosphate groups plus resonance stabilization of free Pᵢ releases <strong>-30.5 kJ/mol</strong> to drive pumps &amp; biosynthesis.';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cy = h * 0.54;
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("Adenosine-5'-Triphosphate (ATP) — Electrostatic Repulsion & Bond Cleavage", w * 0.5, 24);

        // Adenine double ring + Ribose + 3 Phosphates
        var ax = w * 0.16, rx = w * 0.36, p1x = w * 0.54, p2x = w * 0.70, p3x = w * 0.86 + (state.cleaved ? 26 : 0);
        ctx.strokeStyle = theme.text; ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.moveTo(ax + 34, cy); ctx.lineTo(rx - 26, cy); ctx.moveTo(rx + 26, cy); ctx.lineTo(p1x - 18, cy); ctx.stroke();

        // Adenine box/ring
        ctx.fillStyle = theme.purple; roundRect(ctx, ax - 42, cy - 26, 84, 52, 12); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.font = "700 12px sans-serif"; ctx.fillText("Adenine", ax, cy - 2);
        ctx.font = "600 10.5px monospace"; ctx.fillText("Purine (N9)", ax, cy + 14);

        // Ribose pentagon
        ctx.fillStyle = theme.teal; roundRect(ctx, rx - 34, cy - 24, 68, 48, 10); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.font = "700 12px sans-serif"; ctx.fillText("Ribose", rx, cy + 4);

        // High-energy squiggle bonds
        ctx.strokeStyle = "#d84315"; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(p1x + 18, cy); ctx.lineTo(p2x - 18, cy); ctx.stroke();
        if (!state.cleaved) {
          ctx.beginPath(); ctx.moveTo(p2x + 18, cy); ctx.lineTo(p3x - 18, cy); ctx.stroke();
          ctx.fillStyle = "#d84315"; ctx.font = "700 14px monospace";
          ctx.fillText("~", (p1x + p2x) / 2, cy - 14);
          ctx.fillText("~", (p2x + p3x) / 2, cy - 14);
        } else {
          // Energy burst wave!
          var rWave = 16 + ((t * 42) % 34);
          ctx.strokeStyle = "#ffa000"; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.arc((p2x + p3x) / 2, cy, rWave, 0, Math.PI * 2); ctx.stroke();
          ctx.fillStyle = "#2e7d32"; ctx.font = "700 13px monospace";
          ctx.fillText("⚡ -30.5 kJ/mol", (p2x + p3x) / 2, cy - 42);
        }

        drawSphere3D(ctx, p1x, cy, 18, "#1565c0", "α-P", "Ester");
        drawSphere3D(ctx, p2x, cy, 18, "#d84315", "β-P", "O⁻");
        drawSphere3D(ctx, p3x, cy, 18, state.cleaved ? "#2e7d32" : "#c62828", state.cleaved ? "Pᵢ" : "γ-P", state.cleaved ? "Free Pᵢ" : "O⁻");
        // Mg2+ stabilizer below beta-gamma
        if (!state.cleaved) drawSphere3D(ctx, (p2x + p3x) / 2, cy + 46, 13, "#00897b", "Mg²⁺");
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     7. 3D PROTEIN STRUCTURE HIERARCHY & DENATURATION LAB (u1-t13)
     ============================================================ */
  window.BioSim.registerEngine("protein3d", function (cfg, state) {
    state.tab = "helix";
    state.temp = 37;
    state.bme = false; // β-Mercaptoethanol (reduces S-S disulfide bonds)
    state.rotY = 0.35;
    state.rotX = 0.18;
    state.autoSpin = true;

    return {
      tabs: [
        { id: "helix", label: "2° Right-Handed α-Helix" },
        { id: "sheet", label: "2° Antiparallel β-Sheet" },
        { id: "tertiary", label: "3° Fold & Denaturation" }
      ],
      onTab: function (id) { state.tab = id; },
      controls: function () {
        if (state.tab === "tertiary") {
          return [
            { type: "slider", key: "temp", label: "Temperature (Heat Denaturation)", min: 20, max: 85, step: 1, unit: " °C" },
            { type: "toggle", key: "bme", label: "Add β-Mercaptoethanol (Cleaves S–S)", onClass: "is-on" }
          ];
        }
        return [{ type: "toggle", key: "autoSpin", label: "Auto-Rotate 3D Structure", onClass: "is-on-blue" }];
      },
      metrics: function () {
        if (state.tab === "helix") {
          return [
            { label: "Residues / Turn", val: "3.6 Amino Acids", cls: "is-ok" },
            { label: "Pitch / Turn", val: "5.4 Å (0.54 nm)", cls: "is-info" },
            { label: "H-Bond Pattern", val: "C=O (i) ··· H-N (i+4)", cls: "is-ok" },
            { label: "Helix Breakers", val: "Proline & Glycine", cls: "is-warn" }
          ];
        }
        if (state.tab === "sheet") {
          return [
            { label: "Stabilization", val: "Inter-Strand H-Bonds", cls: "is-ok" },
            { label: "Strand Direction", val: "Antiparallel (Stronger)", cls: "is-info" },
            { label: "R-Group Orient.", val: "Alternating Up / Down", cls: "is-info" },
            { label: "Classic Examples", val: "Silk Fibroin, IgG, Prions", cls: "is-warn" }
          ];
        }
        var denat = state.temp > 58;
        return [
          { label: "2° / 3° Fold", val: denat ? "UNFOLDED (Denatured!)" : "Native Active Fold", cls: denat ? "is-danger" : "is-ok" },
          { label: "Disulfide (S–S)", val: state.bme ? "REDUCED (2 –SH)" : "INTACT Covalent", cls: state.bme ? "is-danger" : "is-ok" },
          { label: "1° Peptide Bonds", val: "100% INTACT (Covalent)", cls: "is-ok" },
          { label: "Biological Activity", val: (denat || state.bme) ? "LOST" : "100% Functional", cls: (denat || state.bme) ? "is-danger" : "is-ok" }
        ];
      },
      inspector: function () {
        if (state.tab === "helix") return '<span class="biosim-inspector__tag">3D α-HELIX</span><strong>Drag to rotate!</strong> Every backbone carbonyl <strong>C=O (residue i)</strong> forms a dashed intra-chain hydrogen bond parallel to the helix axis with the amide <strong>N-H (residue i+4)</strong>. Side-chains (R-groups, amber) project outward to avoid steric clash.';
        if (state.tab === "sheet") return '<span class="biosim-inspector__tag">β-PLEATED SHEET</span>Adjacent extended polypeptide strands run in opposite directions (N→C vs C←N), forming straight, maximally stable <strong>inter-strand H-bonds</strong>. In BSE / Scrapie (prion diseases), normal α-helical PrPᶜ misfolds into toxic β-sheet PrPˢᶜ!';
        return '<span class="biosim-inspector__tag">ANFINSEN &amp; DENATURATION</span>Raise temperature above <strong>58 °C</strong> to snap non-covalent H-bonds &amp; hydrophobic core (destroying 2°/3° activity), while <strong>1° peptide bonds stay intact</strong>! Toggle <strong>β-Mercaptoethanol</strong> to reduce covalent Cys–Cys disulfide (S–S) bridges to –SH.';
      },
      onDrag: function (dx, dy) {
        state.autoSpin = false;
        state.rotY += dx * 0.012;
        state.rotX = clamp(state.rotX + dy * 0.012, -1.0, 1.0);
      },
      step: function (dt) { if (state.autoSpin) state.rotY += dt * 0.45; },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.54;
        if (state.tab === "helix") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("3D Right-Handed α-Helix (3.6 Res/Turn · i → i+4 H-Bonds · Drag to Rotate)", cx, 24);
          var n = 15, pts = [];
          for (var i = 0; i < n; i++) {
            var ang = (i / 3.6) * Math.PI * 2;
            var p = project3D({ x: Math.cos(ang) * 0.95, y: (i - 7) * 0.24, z: Math.sin(ang) * 0.95 }, state.rotX, state.rotY, cx, cy, Math.min(w, h) * 0.26);
            var rp = project3D({ x: Math.cos(ang) * 1.48, y: (i - 7) * 0.24, z: Math.sin(ang) * 1.48 }, state.rotX, state.rotY, cx, cy, Math.min(w, h) * 0.26);
            pts.push({ i: i, x: p.x, y: p.y, z: p.z, s: p.s, rx: rp.x, ry: rp.y });
          }
          // Backbone ribbon
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
          ctx.beginPath();
          pts.forEach(function (p, idx) { if (idx === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
          ctx.stroke();
          // i -> i+4 intra-chain H-bonds
          ctx.strokeStyle = "#d84315"; ctx.lineWidth = 2.2; ctx.setLineDash([4, 4]);
          for (var k = 0; k < n - 4; k++) {
            ctx.beginPath(); ctx.moveTo(pts[k].x, pts[k].y); ctx.lineTo(pts[k + 4].x, pts[k + 4].y); ctx.stroke();
          }
          ctx.setLineDash([]);
          pts.slice().sort(function (a, b) { return a.z - b.z; }).forEach(function (p) {
            ctx.strokeStyle = theme.amber; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.rx, p.ry); ctx.stroke();
            drawSphere3D(ctx, p.rx, p.ry, 7 * p.s, "#ffa000", "R");
            drawSphere3D(ctx, p.x, p.y, 11 * p.s, "#1565c0", String(p.i + 1));
          });
          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
          ctx.fillText("Blue = Cα Backbone (1→15)   |   Dashed Red = i→i+4 H-Bonds   |   Amber = Outward R-Groups", cx, h - 10);
          ctx.textAlign = "left";
          return;
        }
        if (state.tab === "sheet") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Antiparallel β-Pleated Sheet (Alternating N→C / C←N + Inter-Strand H-Bonds)", cx, 24);
          var ys = [cy - 64, cy + 4, cy + 72];
          var dirs = ["N → C  ▶", "◀  C ← N", "N → C  ▶"];
          ys.forEach(function (y, ri) {
            ctx.strokeStyle = ri === 1 ? theme.teal : theme.blue; ctx.lineWidth = 5;
            ctx.beginPath();
            for (var c = 0; c < 7; c++) {
              var sx = 95 + c * ((w - 190) / 6);
              var sy = y + (c % 2 === 0 ? -9 : 9);
              if (c === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
            }
            ctx.stroke();
            ctx.fillStyle = ri === 1 ? theme.teal : theme.blue; ctx.font = "700 11.5px monospace";
            ctx.fillText(dirs[ri], w - 48, y + 4);
            if (ri < 2) {
              ctx.strokeStyle = "#d84315"; ctx.lineWidth = 2.4; ctx.setLineDash([4, 4]);
              for (var c2 = 1; c2 < 6; c2++) {
                var hx = 95 + c2 * ((w - 190) / 6);
                ctx.beginPath(); ctx.moveTo(hx, ys[ri] + 12); ctx.lineTo(hx, ys[ri + 1] - 12); ctx.stroke();
              }
              ctx.setLineDash([]);
            }
          });
          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
          ctx.fillText("Dashed Red = Linear Inter-Strand H-Bonds (C=O ··· H-N)   |   Zig-Zag = Pleated Cα Backbone", cx, h - 10);
          ctx.textAlign = "left";
          return;
        }
        // 3° Tertiary Fold & Denaturation
        var unfold = clamp((state.temp - 44) / 28, 0, 1);
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText(unfold > 0.55 ? "Denatured Random Coil (2°/3° Lost — Covalent 1° Peptide Chain Intact!)" : "Native 3° Globular Protein (Hydrophobic Core + S–S Disulfide + Salt Bridges)", cx, 24);
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 5;
        ctx.beginPath();
        var s1, s2;
        for (var j = 0; j <= 80; j++) {
          var f = j / 80;
          var nx = cx + Math.cos(f * Math.PI * 5) * (76 - f * 20) + Math.sin(f * Math.PI * 9) * 18;
          var ny = cy + Math.sin(f * Math.PI * 5) * (66 - f * 14);
          var ux = 55 + f * (w - 110);
          var uy = cy + Math.sin(f * Math.PI * 6 + t * 2.4) * 34;
          var px = nx * (1 - unfold) + ux * unfold;
          var py = ny * (1 - unfold) + uy * unfold;
          if (j === 22) s1 = { x: px, y: py };
          if (j === 58) s2 = { x: px, y: py };
          if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
        // Covalent Disulfide S-S bridge (survives heat unless β-ME added!)
        if (s1 && s2) {
          if (!state.bme) {
            ctx.strokeStyle = "#ffa000"; ctx.lineWidth = 4;
            ctx.beginPath(); ctx.moveTo(s1.x, s1.y); ctx.lineTo(s2.x, s2.y); ctx.stroke();
            drawSphere3D(ctx, (s1.x + s2.x) / 2, (s1.y + s2.y) / 2, 14, "#ffa000", "S–S");
          } else {
            drawSphere3D(ctx, s1.x, s1.y, 12, "#c62828", "SH");
            drawSphere3D(ctx, s2.x, s2.y, 12, "#c62828", "SH");
          }
        }
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     8. PEPTIDE BOND CONDENSATION & pI ELECTROPHORESIS (u1-t15)
     ============================================================ */
  window.BioSim.registerEngine("peptide3d", function (cfg, state) {
    state.tab = "condense";
    state.bonded = false;
    state.ph = 7.0;
    return {
      tabs: [
        { id: "condense", label: "Peptide Bond Formation (-H₂O)" },
        { id: "electro", label: "pI Electrophoresis (Asp / Gly / Lys)" }
      ],
      onTab: function (id) { state.tab = id; },
      controls: function () {
        if (state.tab === "condense") {
          return [{ type: "toggle", key: "bonded", label: "Condense (-H₂O) → Form Trans-Planar Peptide Bond", onClass: "is-on-teal" }];
        }
        return [{ type: "slider", key: "ph", label: "Buffer pH", min: 2.0, max: 11.0, step: 0.2, unit: "" }];
      },
      metrics: function () {
        if (state.tab === "condense") {
          return [
            { label: "Bond Character", val: state.bonded ? "40% Partial Double Bond" : "Separate Amino Acids", cls: state.bonded ? "is-ok" : "is-info" },
            { label: "Geometry", val: "Rigid Trans-Planar (1.33 Å)", cls: "is-info" },
            { label: "Rotatable Bonds", val: "Only φ (N-Cα) & ψ (Cα-C)", cls: "is-warn" },
            { label: "Byproduct", val: state.bonded ? "1 H₂O Released ✓" : "Dehydration Required", cls: "is-ok" }
          ];
        }
        var asp = state.ph > 2.77 ? "Anion (-) → Anode (+)" : "Cation (+) → Cathode";
        var gly = Math.abs(state.ph - 5.97) < 0.6 ? "Zwitterion (0 · Origin)" : (state.ph > 5.97 ? "(-) → Anode" : "(+) → Cathode");
        var lys = state.ph < 9.74 ? "Cation (+) → Cathode (-)" : "Anion (-) → Anode (+)";
        return [
          { label: "Aspartate (pI 2.77)", val: asp, cls: "is-info" },
          { label: "Glycine (pI 5.97)", val: gly, cls: "is-ok" },
          { label: "Lysine (pI 9.74)", val: lys, cls: "is-warn" },
          { label: "Rule", val: "pH > pI = (-), pH < pI = (+)", cls: "is-info" }
        ];
      },
      inspector: function () {
        if (state.tab === "condense") return '<span class="biosim-inspector__tag">PEPTIDE BOND RESONANCE</span>Toggle <strong>Condense (-H₂O)</strong>! Removing OH from α-COOH and H from α-NH₂ forms a <strong>rigid, uncharged, trans-planar C–N peptide bond</strong> (40% double-bond character from C=O resonance). Therefore rotation occurs ONLY around φ and ψ single bonds!';
        return '<span class="biosim-inspector__tag">ISOELECTRIC MIGRATION</span>Slide Buffer pH! Whenever <strong>pH &gt; pI</strong>, an amino acid loses H⁺ → becomes <strong>negative (-)</strong> and migrates to the <strong>Anode (+)</strong>. At <strong>pH = pI</strong>, net charge is 0 and it stays motionless at the origin!';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.54;
        if (state.tab === "condense") {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(state.bonded ? "Trans-Planar Peptide Bond (C–N = 1.33 Å · Partial Double Bond · R₁ & R₂ Trans!)" : "Two Free Amino Acids Ready for Dehydration Condensation (-H₂O)", cx, 24);
          var gap = state.bonded ? 0 : 44;
          var x1 = cx - 78 - gap, x2 = cx + 78 + gap;
          // Rigid planar highlight box when bonded
          if (state.bonded) {
            ctx.fillStyle = theme.isDark ? "rgba(0,137,123,0.22)" : "rgba(0,137,123,0.14)";
            ctx.strokeStyle = theme.teal; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
            roundRect(ctx, cx - 64, cy - 52, 128, 104, 10); ctx.fill(); ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = theme.teal; ctx.font = "700 11px monospace";
            ctx.fillText("RIGID PLANAR UNIT", cx, cy - 58);
          }
          // AA1 backbone: H3N+ - Cα1(R1 UP) - C(=O)
          ctx.strokeStyle = theme.text; ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(x1 - 58, cy); ctx.lineTo(x1 + 36, cy);
          ctx.moveTo(x1 - 12, cy); ctx.lineTo(x1 - 12, cy - 48); // R1 UP
          ctx.moveTo(x1 + 36, cy); ctx.lineTo(x1 + 36, cy - 40); // =O UP
          ctx.stroke();
          // AA2 backbone: N(H) - Cα2(R2 DOWN) - COO-
          ctx.beginPath();
          ctx.moveTo(x2 - 36, cy); ctx.lineTo(x2 + 58, cy);
          ctx.moveTo(x2 + 12, cy); ctx.lineTo(x2 + 12, cy + 48); // R2 DOWN (TRANS!)
          ctx.moveTo(x2 - 36, cy); ctx.lineTo(x2 - 36, cy + 40); // -H DOWN
          ctx.stroke();

          if (state.bonded) {
            // Partial double bond C--N
            ctx.strokeStyle = "#d84315"; ctx.lineWidth = 4.5;
            ctx.beginPath(); ctx.moveTo(x1 + 36, cy); ctx.lineTo(x2 - 36, cy); ctx.stroke();
            ctx.strokeStyle = "#ffa000"; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
            ctx.beginPath(); ctx.moveTo(x1 + 36, cy - 7); ctx.lineTo(x2 - 36, cy - 7); ctx.stroke();
            ctx.setLineDash([]);
            // Floating H2O released above
            drawSphere3D(ctx, cx, cy - 92 - Math.sin(t * 3) * 4, 15, "#1565c0", "H₂O");
          } else {
            ctx.fillStyle = "#d84315"; ctx.font = "700 12px monospace";
            ctx.fillText("OH + H → H₂O", cx, cy + 4);
          }
          drawSphere3D(ctx, x1 - 58, cy, 14, "#1565c0", "NH₃⁺");
          drawSphere3D(ctx, x1 - 12, cy, 13, "#37474f", "Cα");
          drawSphere3D(ctx, x1 - 12, cy - 52, 13, "#6a48b5", "R₁↑");
          drawSphere3D(ctx, x1 + 36, cy, 13, "#37474f", "C");
          drawSphere3D(ctx, x1 + 36, cy - 42, 12, "#d32f2f", "=O");
          drawSphere3D(ctx, x2 - 36, cy, 13, "#00897b", "N");
          drawSphere3D(ctx, x2 - 36, cy + 42, 11, "#546e7a", "H");
          drawSphere3D(ctx, x2 + 12, cy, 13, "#37474f", "Cα");
          drawSphere3D(ctx, x2 + 12, cy + 52, 13, "#6a48b5", "R₂↓");
          drawSphere3D(ctx, x2 + 58, cy, 14, "#d84315", "COO⁻");
          ctx.textAlign = "left";
          return;
        }
        // Electrophoresis Strip at variable pH
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("Amino Acid Electrophoresis Strip at pH " + state.ph.toFixed(1), cx, 24);
        var sx = 54, sw = w - 108, sy = 56, sh = h - 98;
        ctx.fillStyle = theme.surface; ctx.strokeStyle = theme.border; ctx.lineWidth = 2;
        roundRect(ctx, sx, sy, sw, sh, 10); ctx.fill(); ctx.stroke();
        // Origin line
        ctx.strokeStyle = theme.muted; ctx.setLineDash([5, 5]);
        ctx.beginPath(); ctx.moveTo(cx, sy); ctx.lineTo(cx, sy + sh); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = "#c62828"; ctx.font = "700 13px monospace"; ctx.fillText("ANODE (+)", sx + 48, sy - 8);
        ctx.fillStyle = "#1565c0"; ctx.fillText("CATHODE (-)", sx + sw - 54, sy - 8);
        ctx.fillStyle = theme.muted; ctx.fillText("Origin", cx, sy + sh + 16);

        var aas = [
          { name: "Asp (pI 2.77)", pi: 2.77, y: sy + sh * 0.22, col: "#d84315" },
          { name: "Gly (pI 5.97)", pi: 5.97, y: sy + sh * 0.50, col: "#00897b" },
          { name: "Lys (pI 9.74)", pi: 9.74, y: sy + sh * 0.78, col: "#6a48b5" }
        ];
        aas.forEach(function (a) {
          // If pH > pI => negative => moves LEFT toward Anode (+)
          var shift = clamp((a.pi - state.ph) / 7.5, -0.88, 0.88);
          var ax = cx + shift * (sw * 0.45);
          drawSphere3D(ctx, ax, a.y, 17, a.col, a.name.slice(0, 3));
          ctx.fillStyle = theme.text; ctx.font = "700 11.5px monospace"; ctx.textAlign = "center";
          ctx.fillText(a.name, ax, a.y - 22);
        });
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     9. 3D ROTATABLE B-DNA DOUBLE HELIX & Tm MELTING LAB (u1-t17)
     ============================================================ */
  window.BioSim.registerEngine("dna3d", function (cfg, state) {
    state.gc = 50;
    state.temp = 37;
    state.rotY = 0;
    state.autoSpin = true;
    return {
      controls: function () {
        return [
          { type: "slider", key: "gc", label: "GC Base-Pair Content (3 H-Bonds)", min: 20, max: 80, step: 5, unit: "%" },
          { type: "slider", key: "temp", label: "Temperature (Denaturation)", min: 35, max: 100, step: 1, unit: " °C" },
          { type: "toggle", key: "autoSpin", label: "Rotate 3D B-DNA Helix", onClass: "is-on-blue" }
        ];
      },
      metrics: function () {
        var tm = 69.3 + 0.41 * state.gc;
        var melted = state.temp > tm + 4;
        return [
          { label: "Melting Temp (Tm)", val: tm.toFixed(1) + " °C", cls: "is-warn" },
          { label: "G≡C / A=T Ratio", val: state.gc + "% / " + (100 - state.gc) + "%", cls: "is-info" },
          { label: "Helix State", val: melted ? "Denatured ssDNA (↑A260)" : (Math.abs(state.temp - tm) <= 4 ? "50% Melted (At Tm)" : "Intact B-DNA (10.5 bp/turn)"), cls: melted ? "is-danger" : "is-ok" },
          { label: "Chargaff's Rule", val: "A = T and G = C", cls: "is-ok" }
        ];
      },
      inspector: function () {
        return '<span class="biosim-inspector__tag">3D B-DNA DOUBLE HELIX</span><strong>Drag to rotate!</strong> Antiparallel 5\'→3\' (blue) and 3\'←5\' (purple) sugar-phosphate strands spiral right-handedly (10.5 bp/turn, 3.4 nm pitch). <strong>G≡C pairs (3 H-bonds, teal)</strong> are stronger than <strong>A=T (2 H-bonds, amber)</strong> — raise GC% to see <strong>Tm</strong> climb, and heat above Tm to watch strands unzip (Hyperchromic shift at 260 nm)!';
      },
      onDrag: function (dx) { state.autoSpin = false; state.rotY += dx * 0.015; },
      step: function (dt) { if (state.autoSpin) state.rotY += dt * 0.9; },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cy = h * 0.54, tm = 69.3 + 0.41 * state.gc;
        var sep = clamp((state.temp - (tm - 10)) / 22, 0, 1);
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("3D Watson-Crick B-DNA Double Helix (Tm = " + tm.toFixed(1) + " °C · Drag to Rotate)", w * 0.5, 24);

        var pairs = 15, left = 56, right = w - 56, items = [];
        for (var i = 0; i < pairs; i++) {
          var u = i / (pairs - 1);
          var px = left + u * (right - left);
          var ang = i * 0.58 - state.rotY;
          var amp = 56 * (1 - sep * 0.45);
          var y1 = cy + Math.sin(ang) * amp - sep * 42;
          var z1 = Math.cos(ang);
          var y2 = cy - Math.sin(ang) * amp + sep * 42;
          var z2 = -Math.cos(ang);
          var isGC = ((i * 29) % 100) < state.gc;
          items.push({ px: px, y1: y1, z1: z1, y2: y2, z2: z2, isGC: isGC });
        }
        // Draw H-bond rungs first
        items.forEach(function (it) {
          if (sep < 0.65) {
            ctx.strokeStyle = it.isGC ? "#00897b" : "#ffa000";
            ctx.lineWidth = it.isGC ? 3.5 : 2.0;
            ctx.setLineDash(it.isGC ? [5, 3] : [3, 4]);
            ctx.beginPath(); ctx.moveTo(it.px, it.y1); ctx.lineTo(it.px, it.y2); ctx.stroke();
            ctx.setLineDash([]);
          }
        });
        // Depth-sorted spheres
        var spheres = [];
        items.forEach(function (it) {
          spheres.push({ x: it.px, y: it.y1, z: it.z1, col: "#1565c0", lbl: it.isGC ? "G" : "A" });
          spheres.push({ x: it.px, y: it.y2, z: it.z2, col: "#6a48b5", lbl: it.isGC ? "C" : "T" });
        });
        spheres.sort(function (a, b) { return a.z - b.z; }).forEach(function (s) {
          drawSphere3D(ctx, s.x, s.y, 10 + (s.z + 1) * 2.5, s.col, s.lbl);
        });
        ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace"; ctx.textAlign = "center";
        ctx.fillText("5'→3' Strand (Blue)  |  3'←5' Strand (Purple)  |  Teal = G≡C (3 H-Bonds)  |  Amber = A=T (2 H-Bonds)", w * 0.5, h - 10);
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     10. LIVE RIBOSOME TRANSLATION (A-P-E SITES) LAB (u2-t17)
     ============================================================ */
  window.BioSim.registerEngine("ribosome3d", function (cfg, state) {
    state.blocker = "none";
    state.phase = 0;
    return {
      tabs: [
        { id: "none", label: "Active Translation" },
        { id: "tetra", label: "Tetracycline (30S A-Site)" },
        { id: "chlor", label: "Chloramphenicol (50S Peptidyl)" },
        { id: "macro", label: "Macrolide / Tylosin (50S Exit)" }
      ],
      onTab: function (id) { state.blocker = id; },
      metrics: function () {
        var active = state.blocker === "none";
        return [
          { label: "mRNA Read Dir.", val: "5' → 3' (Codon by Codon)", cls: "is-info" },
          { label: "Polypeptide Growth", val: "N-terminus → C-terminus", cls: "is-ok" },
          { label: "Energy / Bond", val: "4 High-Energy Bonds (1 ATP→AMP+PPᵢ + 2 GTP)", cls: "is-warn" },
          { label: "Translation Status", val: active ? "ELONGATING ✓" : "BLOCKED (" + state.blocker.toUpperCase() + ")", cls: active ? "is-ok" : "is-danger" }
        ];
      },
      inspector: function () {
        var notes = {
          none: "<strong>Ribosomal Elongation Cycle:</strong> Charged aa-tRNA enters the <strong>A-site</strong> (EF-Tu + GTP) → <strong>23S rRNA Peptidyl Transferase</strong> transfers the growing chain from P-site to A-site → <strong>EF-G + GTP</strong> translocates the ribosome 3 bases toward 3', ejecting empty tRNA from the <strong>E-site</strong>.",
          tetra: "<strong>Tetracyclines (Oxytetracycline / Doxycycline):</strong> Bind bacterial <strong>30S subunit</strong>, blocking incoming aminoacyl-tRNA from entering the A-site!",
          chlor: "<strong>Chloramphenicol / Florfenicol:</strong> Inhibit <strong>50S Peptidyl Transferase</strong>, halting peptide bond formation (used in bovine respiratory disease as Florfenicol).",
          macro: "<strong>Macrolides (Erythromycin / Tylosin / Tulathromycin):</strong> Bind the <strong>50S subunit</strong> exit tunnel, blocking polypeptide translocation!"
        };
        return '<span class="biosim-inspector__tag">PROKARYOTIC 70S RIBOSOME</span>' + (notes[state.blocker] || notes.none);
      },
      step: function (dt) {
        if (state.blocker === "none") state.phase = (state.phase + dt * 0.35) % 1;
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.56;
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("70S Ribosome Translation: E-P-A Sites, 5'→3' mRNA & Antibiotic Targets", cx, 24);

        // Large 50S subunit (top dome) & Small 30S subunit (bottom)
        ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.22)" : "rgba(21,101,192,0.14)";
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.5;
        roundRect(ctx, cx - 155, cy - 92, 310, 108, 44); ctx.fill(); ctx.stroke();
        ctx.fillStyle = theme.isDark ? "rgba(0,137,123,0.22)" : "rgba(0,137,123,0.14)";
        ctx.strokeStyle = theme.teal;
        roundRect(ctx, cx - 135, cy + 28, 270, 56, 26); ctx.fill(); ctx.stroke();

        ctx.fillStyle = theme.blue; ctx.font = "700 11px monospace";
        ctx.fillText("50S LARGE SUBUNIT", cx - 95, cy - 72);
        ctx.fillStyle = theme.teal;
        ctx.fillText("30S SMALL SUBUNIT", cx - 80, cy + 72);

        // E, P, A site slots
        var sites = [
          { lbl: "E-Site (Exit)", x: cx - 88, col: theme.muted },
          { lbl: "P-Site (Peptidyl)", x: cx, col: theme.purple },
          { lbl: "A-Site (Acceptor)", x: cx + 88, col: theme.coral }
        ];
        sites.forEach(function (s) {
          ctx.strokeStyle = s.col; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
          roundRect(ctx, s.x - 32, cy - 62, 64, 76, 10); ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = s.col; ctx.font = "700 11px sans-serif";
          ctx.fillText(s.lbl, s.x, cy - 46);
        });

        // Sliding 5' -> 3' mRNA ribbon
        ctx.fillStyle = theme.amberFill;
        ctx.fillRect(36, cy + 14, w - 72, 18);
        var codons = ["5'", "AUG", "GCA", "UUU", "CGA", "UAA", "3'"];
        codons.forEach(function (cd, idx) {
          var mx = 60 + idx * ((w - 120) / 6) - state.phase * 28;
          ctx.fillStyle = "#000"; ctx.font = "700 11.5px monospace";
          ctx.fillText(cd, mx, cy + 27);
        });

        // Growing N->C Polypeptide chain emerging from P-site
        var chain = ["Arg", "Phe", "Ala", "Met"];
        chain.forEach(function (aa, idx) {
          var ax = cx - idx * 24 - Math.sin(t * 2 + idx) * 3;
          var ay = cy - 76 - idx * 14;
          drawSphere3D(ctx, ax, ay, 13, "#2e7d32", aa);
        });

        // Incoming aa-tRNA at A-site (or blocked!)
        var aY = state.blocker === "tetra" ? cy - 22 : (cy - 18 + Math.sin(state.phase * Math.PI) * 14);
        drawSphere3D(ctx, cx + 88, aY, 15, state.blocker === "tetra" ? "#c62828" : "#d84315", state.blocker === "tetra" ? "✕" : "tRNA");
        if (state.blocker !== "none") {
          var bx = state.blocker === "tetra" ? cx + 88 : (state.blocker === "chlor" ? cx + 42 : cx);
          var by = state.blocker === "tetra" ? cy + 44 : (state.blocker === "chlor" ? cy - 24 : cy - 84);
          ctx.fillStyle = "#c62828"; ctx.font = "700 12.5px sans-serif";
          ctx.fillText("🛑 BLOCKED HERE!", bx, by);
        }
        ctx.textAlign = "left";
      }
    };
  });

  /* ============================================================
     11. LIVE Y-SHAPED DNA REPLICATION FORK LAB (u2-t21)
     ============================================================ */
  window.BioSim.registerEngine("replication3d", function (cfg, state) {
    state.fluoroquinolone = false;
    state.prog = 0;
    return {
      controls: function () {
        return [{ type: "toggle", key: "fluoroquinolone", label: "Add Enrofloxacin (Blocks Bacterial DNA Gyrase!)", onClass: "is-on" }];
      },
      metrics: function () {
        return [
          { label: "All Polymerases", val: "Strictly 5' → 3' Only!", cls: "is-ok" },
          { label: "Leading Strand", val: "Continuous (1 Primer)", cls: "is-ok" },
          { label: "Lagging Strand", val: "Okazaki Fragments + Ligase", cls: "is-warn" },
          { label: "Fork Status", val: state.fluoroquinolone ? "HALTED (Gyrase Blocked!)" : "Unwinding & Replicating ✓", cls: state.fluoroquinolone ? "is-danger" : "is-ok" }
        ];
      },
      inspector: function () {
        return '<span class="biosim-inspector__tag">SEMICONSERVATIVE FORK</span><strong>Helicase</strong> unzips dsDNA while <strong>DNA Gyrase (Topoisomerase II)</strong> relieves positive supercoils ahead of the fork. Because DNA Pol III only builds <strong>5\'→3\'</strong>, the top Leading Strand runs continuously while the bottom Lagging Strand builds discontinuous <strong>Okazaki fragments</strong> sealed by <strong>DNA Ligase</strong>. Toggle <strong>Enrofloxacin</strong> (veterinary fluoroquinolone) to halt bacterial Gyrase!';
      },
      step: function (dt) {
        if (!state.fluoroquinolone) state.prog = (state.prog + dt * 0.35) % 1;
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cy = h * 0.54, forkX = w * 0.58;
        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("DNA Replication Fork: Continuous Leading Strand vs Discontinuous Okazaki Lagging Strand", w * 0.5, 24);

        // Unwound parent double helix on RIGHT (forkX -> w-40)
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
        ctx.beginPath();
        for (var x = forkX; x <= w - 42; x += 6) {
          var y1 = cy + Math.sin((x - forkX) * 0.08 - t * (state.fluoroquinolone ? 0 : 4)) * 18;
          if (x === forkX) ctx.moveTo(x, y1); else ctx.lineTo(x, y1);
        }
        ctx.stroke();
        ctx.strokeStyle = theme.purple;
        ctx.beginPath();
        for (var x2 = forkX; x2 <= w - 42; x2 += 6) {
          var y2 = cy - Math.sin((x2 - forkX) * 0.08 - t * (state.fluoroquinolone ? 0 : 4)) * 18;
          if (x2 === forkX) ctx.moveTo(x2, y2); else ctx.lineTo(x2, y2);
        }
        ctx.stroke();

        // Top Parent Template (3' -> 5') & Bottom Parent Template (5' -> 3')
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(forkX, cy - 8); ctx.lineTo(64, cy - 78); ctx.stroke();
        ctx.strokeStyle = theme.purple;
        ctx.beginPath(); ctx.moveTo(forkX, cy + 8); ctx.lineTo(64, cy + 78); ctx.stroke();

        // Leading Strand (continuous 5' -> 3' toward fork!)
        ctx.strokeStyle = "#2e7d32"; ctx.lineWidth = 4.5;
        ctx.beginPath(); ctx.moveTo(90, cy - 52); ctx.lineTo(forkX - 36, cy - 18); ctx.stroke();
        ctx.fillStyle = "#2e7d32"; ctx.font = "700 12px sans-serif";
        ctx.fillText("Leading Strand (Continuous 5' → 3' ▶)", w * 0.30, cy - 72);

        // Lagging Strand Okazaki Fragments (5' -> 3' AWAY from fork!)
        for (var f = 0; f < 3; f++) {
          var fx1 = forkX - 42 - f * 88;
          var fx2 = fx1 - 58;
          var fy1 = cy + 20 + f * 17;
          var fy2 = fy1 + 11;
          // RNA Primer (amber) + DNA (teal)
          ctx.strokeStyle = "#ffa000"; ctx.lineWidth = 5;
          ctx.beginPath(); ctx.moveTo(fx1, fy1); ctx.lineTo(fx1 - 14, fy1 + 3); ctx.stroke();
          ctx.strokeStyle = "#00897b"; ctx.lineWidth = 4.5;
          ctx.beginPath(); ctx.moveTo(fx1 - 14, fy1 + 3); ctx.lineTo(fx2, fy2); ctx.stroke();
        }
        ctx.fillStyle = "#00897b"; ctx.font = "700 12px sans-serif";
        ctx.fillText("◀ Lagging Strand: Discontinuous Okazaki Fragments (Amber = RNA Primer, Ligase Seals)", w * 0.34, cy + 98);

        // Helicase wedge at fork + DNA Gyrase ahead
        drawSphere3D(ctx, forkX, cy, 20, "#d84315", "Hel");
        drawSphere3D(ctx, w - 82, cy, 20, state.fluoroquinolone ? "#c62828" : "#6a48b5", state.fluoroquinolone ? "✕" : "Gyr");
        ctx.fillStyle = state.fluoroquinolone ? "#c62828" : theme.text; ctx.font = "700 11.5px monospace";
        ctx.fillText(state.fluoroquinolone ? "Gyrase BLOCKED (Enrofloxacin)" : "DNA Gyrase", w - 92, cy - 30);
        ctx.textAlign = "left";
      }
    };
  });
})();
