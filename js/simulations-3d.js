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
      // 5-membered Fructose furanose ring with O at top, C2 at left
      var pts = [
        { x: cx, y: cy - r * 0.72, lbl: "O" },                // 0: Ring O (top)
        { x: cx + r * 0.86, y: cy - r * 0.08, lbl: "C5" },    // 1: C5 (right)
        { x: cx + r * 0.52, y: cy + r * 0.68, lbl: "C4" },    // 2: C4 (bottom-right)
        { x: cx - r * 0.52, y: cy + r * 0.68, lbl: "C3" },    // 3: C3 (bottom-left)
        { x: cx - r * 0.86, y: cy - r * 0.08, lbl: "C2" }     // 4: C2 anomeric (left)
      ];
      for (var i = 0; i < 5; i++) {
        var a = pts[i], b = pts[(i + 1) % 5];
        ctx.strokeStyle = theme.text;
        ctx.lineWidth = (i === 2) ? 5.0 : 2.8;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      // C1-CH2OH & C6-CH2OH
      ctx.fillStyle = theme.blue; ctx.font = "700 11px monospace"; ctx.textAlign = "center";
      ctx.fillText("CH₂OH (C6)", pts[1].x + 12, pts[1].y - 24);
      ctx.fillText("CH₂OH (C1)", pts[4].x - 6, pts[4].y + 36);

      pts.forEach(function (p, idx) {
        drawSphere3D(ctx, p.x, p.y, idx === 0 ? 13 : 11, idx === 0 ? "#d32f2f" : "#6a48b5", p.lbl);
      });
      if (unlocked) {
        ctx.fillStyle = "#2e7d32"; ctx.font = "700 11.5px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("FREE C2-OH ✓", pts[4].x, pts[4].y - 24);
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
            { type: "toggle", key: "lysozyme", label: "Add Lysozyme (Cuts β1→4 NAG–NAM)", onClass: "is-on" },
            { type: "toggle", key: "penicillin", label: "Add Penicillin (Blocks Cross-Links)", onClass: "is-on-blue" }
          ];
        }
        return [{ type: "toggle", key: "lysozyme", label: "Apply Equine Joint Load (Compress)", onClass: "is-on-teal" }];
      },
      metrics: function () {
        if (state.tab === "gag") {
          return [
            { label: "Polyanions", val: "-COO⁻ & -SO₄²⁻", cls: "is-info" },
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
            drawSphere3D(ctx, bx, cy + len, 10, "#d84315", "SO₄⁻");
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
})();
