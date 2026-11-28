/* ============================================================
   BioSim — Interactive Veterinary Biochemistry Simulation Engine
   100% Offline, Vanilla JS, HiDPI Canvas, IVRI Light/Dark Theme
   ============================================================ */
(function () {
  "use strict";

  window.topicSims = window.topicSims || {};

  var activeInstances = [];
  var modalInstance = null;
  var simIdCounter = 0;

  /* ---- Theme palette reader (reads CSS custom properties from tokens.css) ---- */
  function getTheme() {
    var cs = getComputedStyle(document.documentElement);
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    function v(name, fb) {
      var val = cs.getPropertyValue(name);
      return (val && val.trim()) ? val.trim() : fb;
    }
    return {
      isDark: isDark,
      blue: v("--ivri-blue", "#1565c0"),
      blueDark: v("--ivri-blue-dark", "#0d47a1"),
      blueLight: v("--ivri-blue-light", "#e8f1fb"),
      teal: v("--ivri-teal", "#00897b"),
      tealLight: v("--ivri-teal-light", "#e0f2f1"),
      purple: v("--ivri-purple", "#6a48b5"),
      purpleLight: v("--ivri-purple-light", "#ede7f6"),
      amber: v("--ivri-amber", "#b25e00"),
      amberFill: v("--ivri-amber-fill", "#ffa726"),
      amberLight: v("--ivri-amber-light", "#fff5e8"),
      coral: v("--ivri-coral", "#d84315"),
      sage: v("--ivri-sage", "#2e7d32"),
      surface: v("--surface", "#ffffff"),
      surface2: v("--surface-2", "#f7fafc"),
      bg: v("--bg", "#f0f4f8"),
      border: v("--border-strong", "rgba(21,101,192,.3)"),
      text: v("--text", "#263238"),
      muted: v("--text-muted", "#546e7a"),
      faint: v("--text-faint", "#78909c"),
      ok: v("--ok", "#2e7d32"),
      warn: v("--warn", "#8d5a0b"),
      danger: v("--danger", "#c62828")
    };
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

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

  function setupCanvas(canvas) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = canvas.getBoundingClientRect();
    var w = Math.max(300, Math.round(rect.width || 680));
    var h = Math.max(220, Math.round(rect.height || 320));
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }

  /* ============================================================
     1. MEMBRANE ENGINE (Fluid Mosaic + Passive/Active Transport)
     ============================================================ */
  function createMembraneEngine(cfg, state) {
    state.mode = cfg.initialMode || "fluidity";
    state.temp = cfg.temp != null ? cfg.temp : 37;
    state.unsat = cfg.unsat != null ? cfg.unsat : 45;
    state.chol = cfg.chol != null ? cfg.chol : 25;
    state.ouabain = false;
    state.atpCount = 0;
    state.naOut = 0;
    state.kIn = 0;
    state.pumpPhase = 0;
    state.particles = [];

    function seedParticles() {
      state.particles = [];
      for (var i = 0; i < 24; i++) {
        state.particles.push({
          x: 0.08 + Math.random() * 0.84,
          y: i < 16 ? (0.06 + Math.random() * 0.24) : (0.70 + Math.random() * 0.24),
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.06,
          kind: i % 3 === 0 ? "K" : "Na",
          crossing: false,
          progress: Math.random()
        });
      }
    }
    seedParticles();

    return {
      tabs: cfg.tabs || [
        { id: "fluidity", label: "Membrane Fluidity" },
        { id: "simple", label: "Simple Diffusion" },
        { id: "facilitated", label: "Facilitated (GLUT)" },
        { id: "pump", label: "Na⁺/K⁺-ATPase Pump" },
        { id: "sglt", label: "Secondary (SGLT-1)" }
      ],
      controls: function () {
        if (state.mode === "fluidity") {
          return [
            { type: "slider", key: "temp", label: "Temperature", min: 5, max: 48, step: 1, unit: " °C" },
            { type: "slider", key: "unsat", label: "Cis-Unsaturated Tails", min: 0, max: 100, step: 5, unit: "%" },
            { type: "slider", key: "chol", label: "Cholesterol Content", min: 0, max: 50, step: 5, unit: "%" }
          ];
        }
        if (state.mode === "pump") {
          return [
            { type: "toggle", key: "ouabain", label: "Ouabain / Digoxin (Inhibitor)", onClass: "is-on" }
          ];
        }
        return [
          { type: "slider", key: "temp", label: "Thermal Kinetic Energy", min: 15, max: 45, step: 1, unit: " °C" }
        ];
      },
      metrics: function () {
        if (state.mode === "fluidity") {
          // Cholesterol buffers fluidity: increases fluidity at low T, decreases at high T
          var base = (state.temp - 5) / 43 * 55 + (state.unsat / 100) * 45;
          var cholFactor = (state.chol / 50);
          var tNorm = (state.temp - 25) / 20; // negative when cold, positive when hot
          var fluidity = clamp(base - tNorm * cholFactor * 26 + (tNorm < 0 ? Math.abs(tNorm) * cholFactor * 14 : 0), 5, 98);
          var phase = fluidity < 30 ? "Gel / Rigid" : (fluidity <= 72 ? "Optimal Fluid Mosaic" : "Hyperfluid / Leaky");
          var cls = fluidity < 30 ? "is-warn" : (fluidity <= 72 ? "is-ok" : "is-danger");
          return [
            { label: "Fluidity Index", val: Math.round(fluidity) + " / 100", cls: cls },
            { label: "Bilayer Phase", val: phase, cls: cls },
            { label: "Cholesterol Role", val: state.temp < 25 ? "Prevents Freezing" : (state.temp > 37 ? "Stabilizes Bilayer" : "Balanced Buffer"), cls: "is-info" },
            { label: "Permeability", val: fluidity > 75 ? "Compromised" : "Selective", cls: fluidity > 75 ? "is-danger" : "is-ok" }
          ];
        }
        if (state.mode === "pump") {
          var vMem = state.ouabain ? "-38 mV (Depolarizing)" : "-70 mV (Resting)";
          return [
            { label: "Stoichiometry", val: "3 Na⁺ Out : 2 K⁺ In", cls: "is-info" },
            { label: "ATP Hydrolyzed", val: state.atpCount + " ATP", cls: "is-warn" },
            { label: "Pump Status", val: state.ouabain ? "BLOCKED (Ouabain)" : "Active (E1 ⇌ E2-P)", cls: state.ouabain ? "is-danger" : "is-ok" },
            { label: "Membrane Potential", val: vMem, cls: state.ouabain ? "is-danger" : "is-ok" }
          ];
        }
        if (state.mode === "sglt") {
          return [
            { label: "Mechanism", val: "2 Na⁺ + 1 Glucose Symport", cls: "is-info" },
            { label: "Energy Source", val: "Inward Na⁺ Gradient", cls: "is-ok" },
            { label: "Direct ATP Used", val: "0 (Indirect via Na⁺/K⁺)", cls: "is-warn" },
            { label: "Site", val: "Intestinal Brush Border", cls: "is-info" }
          ];
        }
        if (state.mode === "facilitated") {
          return [
            { label: "Carrier", val: "GLUT Uniporter", cls: "is-info" },
            { label: "ATP Consumed", val: "0 ATP (Passive)", cls: "is-ok" },
            { label: "Kinetics", val: "Saturable (Vmax)", cls: "is-warn" },
            { label: "Direction", val: "High → Low Gradient", cls: "is-ok" }
          ];
        }
        return [
          { label: "Mechanism", val: "Simple Diffusion", cls: "is-info" },
          { label: "Solutes", val: "O₂, CO₂, Steroids", cls: "is-ok" },
          { label: "ATP Consumed", val: "0 ATP (Fick's Law)", cls: "is-ok" },
          { label: "Saturation", val: "Non-saturable (Linear)", cls: "is-info" }
        ];
      },
      inspector: function () {
        if (state.mode === "fluidity") {
          return '<span class="biosim-inspector__tag">FLUID MOSAIC</span><strong>Try sliding Temperature &amp; Cholesterol:</strong> At low temperature (&lt;20 °C), cholesterol wedges between saturated tails to prevent crystalline gel freezing. At high temperature (&gt;38 °C), its rigid steroid ring restrains acyl chain motion, preserving membrane integrity.';
        }
        if (state.mode === "pump") {
          return '<span class="biosim-inspector__tag">ALBERS-POST CYCLE</span><strong>Primary Active Transport:</strong> E1 binds 3 cytosolic Na⁺ → ATP phosphorylates Asp residue → conformational shift to E2-P releases 3 Na⁺ outside → 2 extracellular K⁺ bind → dephosphorylation returns to E1 and releases 2 K⁺ inside. Toggle <strong>Ouabain</strong> to block the K⁺ site (basis of cardiac glycoside action).';
        }
        if (state.mode === "sglt") {
          return '<span class="biosim-inspector__tag">SECONDARY ACTIVE</span><strong>SGLT-1 Symporter:</strong> Moves glucose <em>against</em> its concentration gradient into enterocytes by coupling it to the downhill influx of 2 Na⁺ ions maintained by basolateral Na⁺/K⁺-ATPase. Basis of Oral Rehydration Therapy (ORT) in calf diarrhoea!';
        }
        if (state.mode === "facilitated") {
          return '<span class="biosim-inspector__tag">FACILITATED DIFFUSION</span><strong>GLUT Carrier:</strong> Polar D-glucose cannot cross the hydrophobic core directly. Binding triggers an alternating-access conformational flip down the concentration gradient with zero ATP cost, exhibiting Michaelis-Menten saturation (Vmax).';
        }
        return '<span class="biosim-inspector__tag">PASSIVE DIFFUSION</span><strong>Fick\'s First Law:</strong> Small non-polar molecules (O₂, CO₂, lipid-soluble drugs/steroids) dissolve directly into the hydrophobic fatty acyl core and diffuse linearly down their concentration gradient.';
      },
      step: function (dt) {
        var speed = 0.4 + (state.temp - 10) * 0.025;
        if (state.mode === "pump" && !state.ouabain) {
          var prevPhase = state.pumpPhase;
          state.pumpPhase = (state.pumpPhase + dt * 0.42) % 1;
          if (state.pumpPhase < prevPhase) {
            state.atpCount += 1;
            state.naOut += 3;
            state.kIn += 2;
          }
        } else if (state.mode === "facilitated" || state.mode === "sglt") {
          state.pumpPhase = (state.pumpPhase + dt * 0.48 * speed) % 1;
        }
        for (var i = 0; i < state.particles.length; i++) {
          var p = state.particles[i];
          p.x += p.vx * dt * speed;
          if (p.x < 0.04) { p.x = 0.04; p.vx = Math.abs(p.vx); }
          if (p.x > 0.96) { p.x = 0.96; p.vx = -Math.abs(p.vx); }
          if (state.mode === "simple") {
            p.y += dt * 0.12 * speed;
            if (p.y > 0.94) p.y = 0.06;
          } else {
            p.y += p.vy * dt * speed;
            if (p.y < 0.06 || (p.y > 0.30 && p.y < 0.50)) p.vy = -p.vy;
            if (p.y > 0.94 || (p.y < 0.70 && p.y >= 0.50)) p.vy = -p.vy;
          }
        }
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        // Extracellular vs Intracellular zones
        ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.10)" : "rgba(21,101,192,0.06)";
        ctx.fillRect(0, 0, w, h * 0.34);
        ctx.fillStyle = theme.isDark ? "rgba(0,137,123,0.10)" : "rgba(0,137,123,0.06)";
        ctx.fillRect(0, h * 0.66, w, h * 0.34);

        // Labels
        ctx.font = "600 12.5px monospace";
        ctx.fillStyle = theme.muted;
        ctx.fillText("EXTRACELLULAR FLUID (High Na⁺ 145 mM, Low K⁺ 4 mM)", 12, 18);
        ctx.fillText("CYTOSOL / INTRACELLULAR (Low Na⁺ 12 mM, High K⁺ 140 mM)", 12, h - 10);

        var midY = h * 0.5;
        var topHeadY = midY - 40;
        var botHeadY = midY + 40;
        var fluidity = clamp((state.temp - 5) / 43 * 55 + (state.unsat / 100) * 45, 8, 95);
        var wobbleAmp = (state.mode === "fluidity") ? (1.2 + fluidity * 0.055) : 2.2;
        var freq = (state.mode === "fluidity") ? (1.5 + fluidity * 0.04) : 2.5;
        var spacing = 22;
        var count = Math.floor((w - 24) / spacing);
        var centerIdx = Math.floor(count / 2);

        // Hydrophobic core glow
        ctx.fillStyle = theme.isDark ? "rgba(255,167,38,0.08)" : "rgba(255,167,38,0.12)";
        ctx.fillRect(0, topHeadY + 6, w, (botHeadY - topHeadY) - 12);

        // Draw phospholipid bilayer
        for (var i = 0; i < count; i++) {
          var isChannelGap = (state.mode !== "fluidity" && state.mode !== "simple") && Math.abs(i - centerIdx) <= 2;
          if (isChannelGap) continue;
          var baseX = 16 + i * spacing;
          var dx = Math.sin(t * freq + i * 0.9) * wobbleAmp;
          var x = baseX + dx;
          var isUnsat = ((i * 37) % 100) < state.unsat;
          var isChol = (state.mode === "fluidity") && ((i * 53) % 100) < state.chol && (i % 2 === 0);

          // Upper leaflet tails
          ctx.strokeStyle = theme.amber;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(x - 3, topHeadY + 7);
          ctx.lineTo(x - 3, midY - 4);
          ctx.moveTo(x + 3, topHeadY + 7);
          if (isUnsat) {
            ctx.lineTo(x + 8, topHeadY + 22);
            ctx.lineTo(x + 5, midY - 4);
          } else {
            ctx.lineTo(x + 3, midY - 4);
          }
          ctx.stroke();

          // Lower leaflet tails
          ctx.beginPath();
          ctx.moveTo(x - 3, botHeadY - 7);
          ctx.lineTo(x - 3, midY + 4);
          ctx.moveTo(x + 3, botHeadY - 7);
          if (isUnsat) {
            ctx.lineTo(x + 8, botHeadY - 22);
            ctx.lineTo(x + 5, midY + 4);
          } else {
            ctx.lineTo(x + 3, midY + 4);
          }
          ctx.stroke();

          // Cholesterol steroid rings between tails
          if (isChol) {
            ctx.fillStyle = theme.purple;
            roundRect(ctx, x + 7, topHeadY + 12, 6, 18, 2);
            ctx.fill();
            roundRect(ctx, x + 7, midY + 8, 6, 18, 2);
            ctx.fill();
          }

          // Polar phosphate heads
          ctx.fillStyle = theme.blue;
          ctx.beginPath();
          ctx.arc(x, topHeadY, 6.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(x, botHeadY, 6.5, 0, Math.PI * 2);
          ctx.fill();
        }

        var cx = w * 0.5;

        // Mode-specific transmembrane protein & particles
        if (state.mode === "fluidity") {
          // Draw an integral protein drifting gently laterally
          var px = cx + Math.sin(t * (0.4 + fluidity * 0.015)) * (12 + fluidity * 0.35);
          ctx.fillStyle = theme.teal;
          roundRect(ctx, px - 22, topHeadY - 12, 44, (botHeadY - topHeadY) + 24, 14);
          ctx.fill();
          ctx.fillStyle = "#ffffff";
          ctx.font = "700 12px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Integral", px, midY - 3);
          ctx.fillText("Protein", px, midY + 10);
          ctx.textAlign = "left";

          // Glycocalyx chain on top
          ctx.strokeStyle = theme.sage;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(px, topHeadY - 12);
          ctx.lineTo(px - 8, topHeadY - 26);
          ctx.lineTo(px + 2, topHeadY - 36);
          ctx.stroke();
          ctx.fillStyle = theme.sage;
          ctx.beginPath();
          ctx.arc(px - 8, topHeadY - 26, 3.5, 0, Math.PI * 2);
          ctx.arc(px + 2, topHeadY - 36, 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (state.mode === "simple") {
          // O2 / CO2 molecules diffusing straight through bilayer
          for (var s = 0; s < state.particles.length; s++) {
            var sp = state.particles[s];
            var sx = sp.x * w, sy = sp.y * h;
            ctx.fillStyle = s % 2 === 0 ? theme.teal : theme.purple;
            ctx.beginPath();
            ctx.arc(sx, sy, 5.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "700 12px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(s % 2 === 0 ? "O₂" : "CO₂", sx, sy + 3);
          }
          ctx.textAlign = "left";
        } else if (state.mode === "facilitated") {
          var openOut = state.pumpPhase < 0.5;
          // GLUT carrier lobes
          ctx.fillStyle = theme.teal;
          ctx.beginPath();
          ctx.moveTo(cx - 38, topHeadY - 10);
          ctx.lineTo(cx - (openOut ? 14 : 4), topHeadY - 10);
          ctx.lineTo(cx - (openOut ? 4 : 14), botHeadY + 10);
          ctx.lineTo(cx - 38, botHeadY + 10);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(cx + 38, topHeadY - 10);
          ctx.lineTo(cx + (openOut ? 14 : 4), topHeadY - 10);
          ctx.lineTo(cx + (openOut ? 4 : 14), botHeadY + 10);
          ctx.lineTo(cx + 38, botHeadY + 10);
          ctx.closePath();
          ctx.fill();

          // Glucose hexagon moving down
          var gy = (topHeadY - 34) + state.pumpPhase * (botHeadY - topHeadY + 78);
          ctx.fillStyle = theme.amberFill;
          ctx.strokeStyle = theme.amber;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (var g = 0; g < 6; g++) {
            var ang = g * Math.PI / 3;
            var gx = cx + Math.cos(ang) * 11;
            var gyy = gy + Math.sin(ang) * 11;
            if (g === 0) ctx.moveTo(gx, gyy); else ctx.lineTo(gx, gyy);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = theme.text;
          ctx.font = "700 13px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Glc", cx, gy + 3);
          ctx.fillStyle = theme.muted;
          ctx.font = "600 12.5px sans-serif";
          ctx.fillText(openOut ? "GLUT (Outward-Open)" : "GLUT (Inward-Open)", cx, topHeadY - 22);
          ctx.textAlign = "left";
        } else if (state.mode === "pump") {
          var ph = state.pumpPhase;
          var isE2 = ph >= 0.35 && ph < 0.80;
          // Pump protein body
          ctx.fillStyle = state.ouabain ? theme.danger : theme.purple;
          ctx.beginPath();
          ctx.moveTo(cx - 46, topHeadY - 12);
          ctx.lineTo(cx - (isE2 ? 20 : 6), topHeadY - 12);
          ctx.lineTo(cx - (isE2 ? 6 : 20), botHeadY + 12);
          ctx.lineTo(cx - 46, botHeadY + 12);
          ctx.closePath();
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(cx + 46, topHeadY - 12);
          ctx.lineTo(cx + (isE2 ? 20 : 6), topHeadY - 12);
          ctx.lineTo(cx + (isE2 ? 6 : 20), botHeadY + 12);
          ctx.lineTo(cx + 46, botHeadY + 12);
          ctx.closePath();
          ctx.fill();

          ctx.textAlign = "center";
          // 3 Na+ ions moving UP (out)
          if (ph < 0.55) {
            var naProgress = clamp(ph / 0.50, 0, 1);
            var naY = (botHeadY + 34) - naProgress * (botHeadY - topHeadY + 68);
            for (var n = -1; n <= 1; n++) {
              ctx.fillStyle = theme.coral;
              ctx.beginPath();
              ctx.arc(cx + n * 13, naY + Math.abs(n) * 4, 7.5, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = "#fff";
              ctx.font = "700 12px sans-serif";
              ctx.fillText("Na⁺", cx + n * 13, naY + Math.abs(n) * 4 + 3);
            }
          }
          // 2 K+ ions moving DOWN (in)
          if (ph >= 0.45) {
            var kProgress = clamp((ph - 0.45) / 0.50, 0, 1);
            var kY = (topHeadY - 34) + kProgress * (botHeadY - topHeadY + 68);
            for (var k = -1; k <= 1; k += 2) {
              ctx.fillStyle = theme.teal;
              ctx.beginPath();
              ctx.arc(cx + k * 9, kY, 7.5, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = "#fff";
              ctx.font = "700 12px sans-serif";
              ctx.fillText("K⁺", cx + k * 9, kY + 3);
            }
          }

          // ATP -> ADP + Pi badge
          var stepLabel = state.ouabain ? "BLOCKED BY OUABAIN (K⁺ binding site inhibited)"
            : ph < 0.25 ? "1. 3 Cytosolic Na⁺ bind E1"
            : ph < 0.45 ? "2. ATP → ADP (Asp phosphorylation: E1 → E2-P)"
            : ph < 0.65 ? "3. 3 Na⁺ released outside; 2 K⁺ bind E2-P"
            : "4. Dephosphorylation (E2-P → E1 + Pᵢ) releases 2 K⁺ inside";
          ctx.fillStyle = theme.text;
          ctx.font = "700 13px sans-serif";
          ctx.fillText(stepLabel, cx, botHeadY + 52);

          // Phosphorylation tag
          if (isE2 && !state.ouabain) {
            ctx.fillStyle = theme.amberFill;
            ctx.beginPath();
            ctx.arc(cx + 52, botHeadY - 6, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#000";
            ctx.font = "700 12px sans-serif";
            ctx.fillText("P", cx + 52, botHeadY - 3);
          }
          ctx.textAlign = "left";
        } else if (state.mode === "sglt") {
          var sph = state.pumpPhase;
          ctx.fillStyle = theme.blue;
          roundRect(ctx, cx - 42, topHeadY - 12, 26, (botHeadY - topHeadY) + 24, 10);
          ctx.fill();
          roundRect(ctx, cx + 16, topHeadY - 12, 26, (botHeadY - topHeadY) + 24, 10);
          ctx.fill();

          var sy2 = (topHeadY - 30) + sph * (botHeadY - topHeadY + 70);
          // 2 Na+ + 1 Glucose moving together inward
          ctx.textAlign = "center";
          ctx.fillStyle = theme.coral;
          ctx.beginPath(); ctx.arc(cx - 9, sy2 - 12, 6.5, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(cx + 9, sy2 - 12, 6.5, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif";
          ctx.fillText("Na⁺", cx - 9, sy2 - 9.5);
          ctx.fillText("Na⁺", cx + 9, sy2 - 9.5);

          ctx.fillStyle = theme.amberFill;
          ctx.beginPath(); ctx.arc(cx, sy2 + 6, 9, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#000"; ctx.font = "700 12px sans-serif";
          ctx.fillText("Glc", cx, sy2 + 9);
          ctx.fillStyle = theme.text; ctx.font = "700 13px sans-serif";
          ctx.fillText("SGLT-1 Symporter: 2 Na⁺ (downhill) drive 1 Glucose (uphill)", cx, botHeadY + 48);
          ctx.textAlign = "left";
        }
      }
    };
  }

  /* ============================================================
     2. GIBBS-DONNAN EQUILIBRIUM ENGINE
     ============================================================ */
  function createDonnanEngine(cfg, state) {
    state.pr = cfg.pr != null ? cfg.pr : 40;   // mM impermeant Protein- inside
    state.nacl = cfg.nacl != null ? cfg.nacl : 100; // mM initial NaCl on each side
    state.pumpOn = false;

    function solve() {
      // Exact Gibbs-Donnan equilibrium for equal volumes:
      // Initial: Inside has Pr = p, Na = p + c, Cl = c; Outside has Na = c, Cl = c (total Na = p+2c, total Cl = 2c)
      // At equilibrium: [Na+]i*[Cl-]i = [Na+]o*[Cl-]o
      // Let x = Cl_i. Then Na_i = p + x, Cl_o = 2c - x, Na_o = 2c - x.
      // (p + x)*x = (2c - x)^2 => px + x^2 = 4c^2 - 4cx + x^2 => x(p + 4c) = 4c^2 => x = 4c^2 / (p + 4c)
      var p = state.pr;
      var c = state.nacl;
      var cl_i = (4 * c * c) / (p + 4 * c);
      var na_i = p + cl_i;
      var cl_o = 2 * c - cl_i;
      var na_o = cl_o;
      var k_i = 0, k_o = 0;
      var ratio, em, osmIn, osmOut;
      if (state.pumpOn) {
        // Active Na+/K+-ATPase extrudes 3 Na+ / imports 2 K+, creating a negative resting Em and stabilizing cell volume
        na_i = Math.round(Math.min(15, 0.12 * c) * 10) / 10;
        cl_i = Math.round(0.08 * c * 10) / 10;
        k_i = Math.max(4, p + cl_i - na_i);
        na_o = c;
        k_o = 4;
        cl_o = c + k_o;
        em = -61.5 * Math.log10((k_i + 0.04 * na_i) / (k_o + 0.04 * na_o)); // GHK resting potential (mV)
        osmOut = na_o + k_o + cl_o;
        osmIn = osmOut; // Double-Donnan pump stabilization prevents net osmotic water influx
      } else {
        ratio = na_i / Math.max(0.1, na_o);
        em = -61.5 * Math.log10(ratio); // mV at 37°C
        osmIn = p + na_i + cl_i;
        osmOut = na_o + cl_o;
      }
      return {
        na_i: na_i, cl_i: cl_i, k_i: k_i, pr: p,
        na_o: na_o, cl_o: cl_o, k_o: k_o,
        prodIn: na_i * cl_i, prodOut: na_o * cl_o,
        em: em, dOsm: osmIn - osmOut
      };
    }

    return {
      controls: function () {
        return [
          { type: "slider", key: "pr", label: "Impermeant [Pr⁻] Inside", min: 0, max: 120, step: 5, unit: " mM" },
          { type: "slider", key: "nacl", label: "Diffusible [NaCl] Pool", min: 40, max: 160, step: 10, unit: " mM" },
          { type: "toggle", key: "pumpOn", label: "Na⁺/K⁺-ATPase Counter-Pump", onClass: "is-on-teal" }
        ];
      },
      metrics: function () {
        var r = solve();
        return [
          { label: "[Na⁺]i / [Cl⁻]i", val: r.na_i.toFixed(1) + " / " + r.cl_i.toFixed(1) + " mM", cls: "is-info" },
          { label: "[Na⁺]o / [Cl⁻]o", val: r.na_o.toFixed(1) + " / " + r.cl_o.toFixed(1) + " mM", cls: "is-info" },
          { label: "Donnan Potential", val: r.em.toFixed(1) + " mV", cls: "is-warn" },
          { label: "Osmotic Excess (ΔΠ)", val: (r.dOsm >= 0 ? "+" : "") + r.dOsm.toFixed(1) + " mOsm", cls: r.dOsm > 15 ? "is-danger" : "is-ok" }
        ];
      },
      inspector: function () {
        var r = solve();
        if (state.pumpOn) {
          return '<span class="biosim-inspector__tag">DOUBLE-DONNAN PUMP</span><strong>Active Na⁺/K⁺-ATPase</strong> extrudes Na⁺ ([Na⁺]ᵢ = ' +
            r.na_i.toFixed(1) + ' mM, [K⁺]ᵢ = ' + r.k_i.toFixed(1) + ' mM, [Cl⁻]ᵢ = ' + r.cl_i.toFixed(1) +
            ' mM) &amp; maintains a negative membrane potential (' + r.em.toFixed(1) + ' mV), opposing Donnan swelling (ΔΠ = ' +
            r.dOsm.toFixed(1) + ' mOsm, iso-osmotic).';
        }
        return '<span class="biosim-inspector__tag">GIBBS-DONNAN LAW</span><strong>[Na⁺]ᵢ × [Cl⁻]ᵢ = [Na⁺]ₒ × [Cl⁻]ₒ</strong> (' +
          Math.round(r.prodIn) + ' vs ' + Math.round(r.prodOut) + '). Non-diffusible anionic proteins (Pr⁻) trap extra Na⁺ inside, creating an osmotic excess (ΔΠ = ' +
          (r.dOsm >= 0 ? '+' : '') + r.dOsm.toFixed(1) + ' mOsm) that would cause cell lysis unless countered by the <strong>Na⁺/K⁺-ATPase pump</strong> (toggle above!).';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var r = solve();
        var midX = w * 0.5;
        var pad = 18;

        // Left compartment (Inside) & Right (Outside)
        ctx.fillStyle = theme.isDark ? "rgba(106,72,181,0.12)" : "rgba(106,72,181,0.06)";
        roundRect(ctx, pad, 34, midX - pad - 6, h - 56, 10);
        ctx.fill();
        ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.10)" : "rgba(21,101,192,0.05)";
        roundRect(ctx, midX + 6, 34, w - midX - pad - 6, h - 56, 10);
        ctx.fill();

        // Semipermeable membrane
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 4;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.moveTo(midX, 34);
        ctx.lineTo(midX, h - 22);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = "700 13px monospace";
        ctx.fillStyle = theme.purple;
        ctx.fillText("INTRACELLULAR (Contains Pr⁻)", pad + 8, 22);
        ctx.fillStyle = theme.blue;
        ctx.fillText("EXTRACELLULAR (Protein-Free)", midX + 14, 22);

        // Draw impermeant Protein anions inside
        var prCount = Math.round(r.pr / 12);
        for (var i = 0; i < prCount; i++) {
          var px = pad + 34 + ((i * 53) % Math.max(60, midX - pad - 76));
          var py = 60 + ((i * 41) % (h - 115)) + Math.sin(t * 1.4 + i) * 3;
          ctx.fillStyle = theme.purple;
          ctx.beginPath(); ctx.arc(px, py, 13, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Pr⁻", px, py + 3);
        }

        // Draw Na+ and Cl- ions proportional to concentrations
        function drawIons(count, xMin, xMax, color, label, seed) {
          var n = clamp(Math.round(count / 9), 1, 22);
          for (var j = 0; j < n; j++) {
            var ix = xMin + ((j * 47 + seed * 19) % Math.max(40, xMax - xMin)) + Math.sin(t * 2.2 + j + seed) * 5;
            var iy = 54 + ((j * 31 + seed * 13) % (h - 95)) + Math.cos(t * 2.0 + j) * 5;
            ctx.fillStyle = color;
            ctx.beginPath(); ctx.arc(ix, iy, 6.5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
            ctx.fillText(label, ix, iy + 2.5);
          }
        }
        drawIons(r.na_i, pad + 18, midX - 24, theme.coral, "Na⁺", 1);
        drawIons(r.cl_i, pad + 18, midX - 24, theme.teal, "Cl⁻", 2);
        drawIons(r.na_o, midX + 24, w - pad - 18, theme.coral, "Na⁺", 3);
        drawIons(r.cl_o, midX + 24, w - pad - 18, theme.teal, "Cl⁻", 4);

        // Water arrow if osmotic excess
        if (r.dOsm > 5) {
          ctx.fillStyle = theme.blue;
          ctx.font = "700 13px sans-serif";
          ctx.textAlign = "center";
          var arrowX = midX - Math.sin(t * 3) * 6;
          ctx.fillText("← H₂O Osmotic Influx (Swelling Risk)", arrowX, h - 6);
        } else if (r.dOsm < -5) {
          ctx.fillStyle = theme.warn;
          ctx.font = "700 13px sans-serif";
          ctx.textAlign = "center";
          var arrowX2 = midX + Math.sin(t * 3) * 6;
          ctx.fillText("H₂O Osmotic Efflux (Cell Shrinkage) →", arrowX2, h - 6);
        } else {
          ctx.fillStyle = theme.ok;
          ctx.font = "700 13px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("✓ Cell Volume Stabilized (Iso-osmotic)", midX, h - 6);
        }
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     3. HENDERSON-HASSELBALCH & CLINICAL ACID-BASE ENGINE
     ============================================================ */
  function createHendersonEngine(cfg, state) {
    var mode = cfg.mode || "titration";
    state.bufferKey = cfg.bufferKey || "bicarb";
    state.ratioPct = cfg.ratioPct != null ? cfg.ratioPct : 50; // % deprotonated [A-]
    state.pco2 = cfg.pco2 != null ? cfg.pco2 : 40;
    state.hco3 = cfg.hco3 != null ? cfg.hco3 : 24;

    var buffers = {
      bicarb: { name: "Bicarbonate (H₂CO₃/HCO₃⁻)", pka: 6.1, ha: "H₂CO₃", a: "HCO₃⁻" },
      phos: { name: "Phosphate (H₂PO₄⁻/HPO₄²⁻)", pka: 6.86, ha: "H₂PO₄⁻", a: "HPO₄²⁻" },
      acetate: { name: "Acetate (CH₃COOH/CH₃COO⁻)", pka: 4.76, ha: "HAc", a: "Ac⁻" },
      histidine: { name: "Hemoglobin Histidine Imidazole", pka: 6.8, ha: "Hb-HisH⁺", a: "Hb-His" }
    };

    function calcPH() {
      if (mode === "bloodgas") {
        return 6.1 + Math.log10(Math.max(1, state.hco3) / Math.max(0.1, 0.03 * state.pco2));
      }
      var b = buffers[state.bufferKey] || buffers.bicarb;
      var frac = clamp(state.ratioPct, 1, 99) / 100;
      return b.pka + Math.log10(frac / (1 - frac));
    }

    function diagnoseBloodGas(ph) {
      if (ph >= 7.35 && ph <= 7.45) return { text: "Normal Arterial Acid-Base Balance", cls: "is-ok", vet: "Healthy canine/bovine resting arterial blood gas." };
      if (ph < 7.35) {
        if (state.hco3 < 22) return { text: "Metabolic Acidosis", cls: "is-danger", vet: "e.g., Grain overload lactic acidosis in cattle, neonatal calf diarrhoea, diabetic ketoacidosis." };
        return { text: "Respiratory Acidosis", cls: "is-danger", vet: "e.g., Hypoventilation under anaesthesia, pneumonia, airway obstruction (CO₂ retention)." };
      }
      if (state.hco3 > 26) return { text: "Metabolic Alkalosis", cls: "is-warn", vet: "e.g., Left/Right Abomasal Displacement (LDA/RDA) in cattle with HCl sequestration, persistent vomiting in dogs." };
      return { text: "Respiratory Alkalosis", cls: "is-warn", vet: "e.g., Heat stress panting, pain, hyperventilation, high-altitude hypoxia." };
    }

    return {
      tabs: mode === "bloodgas" ? [
        { id: "normal", label: "Normal (pH 7.40)" },
        { id: "met_acid", label: "Calf Diarrhoea (Met. Acidosis)" },
        { id: "met_alk", label: "Bovine LDA (Met. Alkalosis)" },
        { id: "resp_acid", label: "Hypoventilation (Resp. Acidosis)" },
        { id: "resp_alk", label: "Heat Panting (Resp. Alkalosis)" }
      ] : null,
      onTab: function (tabId) {
        if (tabId === "normal") { state.pco2 = 40; state.hco3 = 24; }
        else if (tabId === "met_acid") { state.pco2 = 30; state.hco3 = 12; }
        else if (tabId === "met_alk") { state.pco2 = 48; state.hco3 = 38; }
        else if (tabId === "resp_acid") { state.pco2 = 65; state.hco3 = 27; }
        else if (tabId === "resp_alk") { state.pco2 = 24; state.hco3 = 21; }
      },
      controls: function () {
        if (mode === "bloodgas") {
          return [
            { type: "slider", key: "hco3", label: "Plasma [HCO₃⁻] (Renal/Metabolic)", min: 8, max: 46, step: 1, unit: " mEq/L" },
            { type: "slider", key: "pco2", label: "Arterial pCO₂ (Respiratory)", min: 18, max: 80, step: 1, unit: " mmHg" }
          ];
        }
        return [
          {
            type: "select", key: "bufferKey", label: "Buffer System",
            options: Object.keys(buffers).map(function (k) { return { val: k, label: buffers[k].name }; })
          },
          { type: "slider", key: "ratioPct", label: "OH⁻ Added (% Base [A⁻])", min: 2, max: 98, step: 1, unit: "%" }
        ];
      },
      metrics: function () {
        var ph = calcPH();
        if (mode === "bloodgas") {
          var d = diagnoseBloodGas(ph);
          var ratio = state.hco3 / (0.03 * state.pco2);
          return [
            { label: "Arterial pH", val: ph.toFixed(2), cls: d.cls },
            { label: "HCO₃⁻ : H₂CO₃ Ratio", val: ratio.toFixed(1) + " : 1", cls: Math.abs(ratio - 20) < 3 ? "is-ok" : "is-warn" },
            { label: "Diagnosis", val: d.text, cls: d.cls },
            { label: "Dissolved CO₂", val: (0.03 * state.pco2).toFixed(2) + " mM", cls: "is-info" }
          ];
        }
        var b = buffers[state.bufferKey] || buffers.bicarb;
        var inZone = Math.abs(ph - b.pka) <= 1.0;
        var ratioVal = (state.ratioPct / Math.max(1, 100 - state.ratioPct));
        return [
          { label: "Calculated pH", val: ph.toFixed(2), cls: inZone ? "is-ok" : "is-warn" },
          { label: "Buffer pKa", val: b.pka.toFixed(2), cls: "is-info" },
          { label: "[A⁻] / [HA] Ratio", val: ratioVal.toFixed(2), cls: "is-info" },
          { label: "Buffer Capacity", val: inZone ? "MAXIMUM (pKa ± 1)" : "Weak / Exhausted", cls: inZone ? "is-ok" : "is-danger" }
        ];
      },
      inspector: function () {
        var ph = calcPH();
        if (mode === "bloodgas") {
          var d = diagnoseBloodGas(ph);
          return '<span class="biosim-inspector__tag">CLINICAL ACID-BASE</span><strong>pH = 6.1 + log₁₀([HCO₃⁻] / (0.03 × pCO₂))</strong> = <strong>' + ph.toFixed(2) + '</strong>. ' + d.vet;
        }
        var b = buffers[state.bufferKey] || buffers.bicarb;
        return '<span class="biosim-inspector__tag">HENDERSON-HASSELBALCH</span><strong>pH = pKa + log₁₀([A⁻]/[HA])</strong>. When [A⁻] = [HA] (50% titrated), pH = pKa (' + b.pka + ') and buffering power against added H⁺ or OH⁻ is maximal (shaded green zone: pKa ± 1).';
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        if (mode === "bloodgas") {
          // Davenport-style [HCO3-] vs pH diagram
          var padL = 56, padR = 24, padT = 26, padB = 42;
          var gw = w - padL - padR, gh = h - padT - padB;
          function xOf(ph) { return padL + clamp((ph - 6.9) / 0.9, 0, 1) * gw; }
          function yOf(hco) { return padT + (1 - clamp((hco - 5) / 45, 0, 1)) * gh; }

          // Normal pH band (7.35 - 7.45)
          ctx.fillStyle = theme.isDark ? "rgba(46,125,50,0.18)" : "rgba(46,125,50,0.12)";
          ctx.fillRect(xOf(7.35), padT, xOf(7.45) - xOf(7.35), gh);

          // Axes
          ctx.strokeStyle = theme.border;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + gh); ctx.lineTo(padL + gw, padT + gh);
          ctx.stroke();

          // Isobars of pCO2 = 20, 40, 60 mmHg
          [20, 40, 60].forEach(function (iso) {
            ctx.strokeStyle = iso === 40 ? theme.blue : theme.faint;
            ctx.lineWidth = iso === 40 ? 2 : 1;
            ctx.beginPath();
            var started = false;
            for (var ph = 6.95; ph <= 7.75; ph += 0.02) {
              var hc = 0.03 * iso * Math.pow(10, ph - 6.1);
              if (hc < 5 || hc > 50) continue;
              if (!started) { ctx.moveTo(xOf(ph), yOf(hc)); started = true; }
              else ctx.lineTo(xOf(ph), yOf(hc));
            }
            ctx.stroke();
            ctx.fillStyle = iso === 40 ? theme.blue : theme.muted;
            ctx.font = "600 11.5px monospace";
            var labelPh = 6.1 + Math.log10(44 / (0.03 * iso));
            ctx.fillText("pCO₂=" + iso, clamp(xOf(labelPh) - 18, padL + 4, padL + gw - 52), padT + 14);
          });

          // Normal buffer line
          ctx.strokeStyle = theme.purple;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(xOf(7.1), yOf(31));
          ctx.lineTo(xOf(7.7), yOf(17));
          ctx.stroke();
          ctx.setLineDash([]);

          // Current patient point
          var curPH = calcPH();
          var px = xOf(curPH), py = yOf(state.hco3);
          ctx.fillStyle = theme.coral;
          ctx.beginPath(); ctx.arc(px, py, 8 + Math.sin(t * 4) * 1.5, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();

          ctx.fillStyle = theme.text; ctx.font = "700 13px monospace";
          ctx.fillText("pH " + curPH.toFixed(2) + " | HCO₃⁻ " + state.hco3, clamp(px + 12, padL + 6, w - 150), clamp(py - 10, padT + 20, h - 48));

          // Axis labels
          ctx.fillStyle = theme.muted; ctx.font = "600 12.5px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Arterial Blood pH (Normal: 7.35 – 7.45)", padL + gw / 2, h - 10);
          ctx.save(); ctx.translate(16, padT + gh / 2); ctx.rotate(-Math.PI / 2);
          ctx.fillText("Plasma [HCO₃⁻] (mEq/L)", 0, 0); ctx.restore();
          ctx.textAlign = "left";
          return;
        }

        // Titration Curve (left 65%) + Live Molecular Beaker (right 35%)
        var b = buffers[state.bufferKey] || buffers.bicarb;
        var splitX = w * 0.66;
        var padL = 48, padT = 24, padB = 38;
        var gw = splitX - padL - 18, gh = h - padT - padB;

        function tx(pct) { return padL + (pct / 100) * gw; }
        function ty(ph) { return padT + (1 - clamp(ph / 14, 0, 1)) * gh; }

        // Buffer zone band (pKa +/- 1)
        ctx.fillStyle = theme.isDark ? "rgba(46,125,50,0.18)" : "rgba(46,125,50,0.12)";
        ctx.fillRect(padL, ty(b.pka + 1), gw, ty(b.pka - 1) - ty(b.pka + 1));
        ctx.fillStyle = theme.ok; ctx.font = "600 11.5px monospace";
        ctx.fillText("Buffer Zone (pKa ± 1)", padL + 6, ty(b.pka + 1) + 12);

        // Axes
        ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + gh); ctx.lineTo(padL + gw, padT + gh);
        ctx.stroke();

        // Titration sigmoid curve
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (var p = 2; p <= 98; p += 1) {
          var phVal = b.pka + Math.log10(p / (100 - p));
          if (p === 2) ctx.moveTo(tx(p), ty(phVal)); else ctx.lineTo(tx(p), ty(phVal));
        }
        ctx.stroke();

        // Inflection point pKa
        ctx.fillStyle = theme.teal;
        ctx.beginPath(); ctx.arc(tx(50), ty(b.pka), 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillText("pKa=" + b.pka, tx(50) + 7, ty(b.pka) + 4);

        // Current point
        var curP = calcPH();
        ctx.fillStyle = theme.coral;
        ctx.beginPath(); ctx.arc(tx(state.ratioPct), ty(curP), 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();

        // Axis ticks
        ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
        [2, 7, 12].forEach(function (v) { ctx.fillText(String(v), padL - 22, ty(v) + 3); });
        ctx.textAlign = "center";
        ctx.fillText("OH⁻ Equivalents Added (% [A⁻])", padL + gw / 2, h - 10);
        ctx.textAlign = "left";

        // Molecular Beaker on right
        var bx = splitX + 12, bw = w - splitX - 24, by = 38, bh = h - 62;
        ctx.strokeStyle = theme.blue; ctx.lineWidth = 2;
        roundRect(ctx, bx, by, bw, bh, 10); ctx.stroke();
        ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.12)" : "rgba(21,101,192,0.06)";
        roundRect(ctx, bx + 2, by + 22, bw - 4, bh - 24, 8); ctx.fill();

        ctx.fillStyle = theme.text; ctx.font = "700 12px monospace";
        ctx.fillText("SOLUTION SPECIES", bx + 8, by - 8);

        var totalMols = 20;
        var nBase = Math.round(totalMols * state.ratioPct / 100);
        for (var m = 0; m < totalMols; m++) {
          var isA = m < nBase;
          var mx = bx + 18 + ((m * 37) % Math.max(24, bw - 36)) + Math.sin(t * 2 + m) * 4;
          var my = by + 38 + ((m * 29) % Math.max(30, bh - 56)) + Math.cos(t * 1.8 + m) * 4;
          ctx.fillStyle = isA ? theme.teal : theme.coral;
          ctx.beginPath(); ctx.arc(mx, my, 9, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(isA ? b.a : b.ha, mx, my + 2.5);
        }
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     4. ENZYME KINETICS, INHIBITION & FACTORS ENGINE
     ============================================================ */
  function createEnzymeEngine(cfg, state) {
    state.mode = cfg.initialMode || "kinetics";
    state.sub = cfg.sub != null ? cfg.sub : 25;
    state.km = cfg.km != null ? cfg.km : 20;
    state.vmax = cfg.vmax != null ? cfg.vmax : 100;
    state.inhib = cfg.inhib || "none";
    state.inhibConc = cfg.inhibConc != null ? cfg.inhibConc : 20;
    state.temp = cfg.temp != null ? cfg.temp : 37;
    state.ph = cfg.ph != null ? cfg.ph : 7.4;
    state.plotType = "mm"; // mm or lb

    function calcKinetics(s) {
      var ki = 20;
      var I = state.inhib === "none" ? 0 : state.inhibConc;
      var kmEff = state.km;
      var vmEff = state.vmax;
      if (state.inhib === "competitive") {
        kmEff = state.km * (1 + I / ki);
      } else if (state.inhib === "noncompetitive") {
        vmEff = state.vmax / (1 + I / ki);
      } else if (state.inhib === "uncompetitive") {
        kmEff = state.km / (1 + I / ki);
        vmEff = state.vmax / (1 + I / ki);
      } else if (state.inhib === "allosteric") {
        // Hill equation n = 2.8
        var n = 2.8;
        var k05 = state.km * (1 + I / 40);
        return { v: (state.vmax * Math.pow(s, n)) / (Math.pow(k05, n) + Math.pow(s, n)), kmEff: k05, vmEff: state.vmax };
      }
      var v = (vmEff * s) / (kmEff + s);
      return { v: v, kmEff: kmEff, vmEff: vmEff };
    }

    function calcTempPhRate() {
      // Q10 rise up to 37-40°C then steep denaturation
      var tRate = state.temp <= 40
        ? Math.pow(2, (state.temp - 37) / 10) * 90
        : 90 * Math.pow(2, 3 / 10) * Math.exp(-Math.pow((state.temp - 40) / 9, 2));
      var optPh = cfg.optPh != null ? cfg.optPh : 7.4;
      var pRate = Math.exp(-Math.pow((state.ph - optPh) / 1.6, 2));
      return clamp(tRate * pRate, 0, 120);
    }

    return {
      tabs: cfg.tabs || [
        { id: "kinetics", label: "Michaelis-Menten & Inhibition" },
        { id: "factors", label: "Temp & pH Denaturation" }
      ],
      controls: function () {
        if (state.mode === "factors") {
          return [
            { type: "slider", key: "temp", label: "Temperature", min: 5, max: 70, step: 1, unit: " °C" },
            { type: "slider", key: "ph", label: "Medium pH", min: 2.0, max: 11.0, step: 0.2, unit: "" }
          ];
        }
        return [
          { type: "slider", key: "sub", label: "Substrate [S]", min: 1, max: 100, step: 1, unit: " mM" },
          {
            type: "select", key: "inhib", label: "Inhibition / Regulation",
            options: [
              { val: "none", label: "No Inhibitor (Control)" },
              { val: "competitive", label: "Competitive (↑ Km, Vmax same)" },
              { val: "noncompetitive", label: "Non-Competitive (Km same, ↓ Vmax)" },
              { val: "uncompetitive", label: "Uncompetitive (↓ Km, ↓ Vmax)" },
              { val: "allosteric", label: "Allosteric Sigmoidal (Hill n=2.8)" }
            ]
          },
          { type: "slider", key: "inhibConc", label: "Inhibitor [I]", min: 0, max: 60, step: 5, unit: " mM" },
          {
            type: "select", key: "plotType", label: "Plot View",
            options: [
              { val: "mm", label: "Michaelis-Menten (v₀ vs [S])" },
              { val: "lb", label: "Lineweaver-Burk (1/v₀ vs 1/[S])" }
            ]
          }
        ];
      },
      metrics: function () {
        if (state.mode === "factors") {
          var r = calcTempPhRate();
          var status = state.temp > 52 ? "Thermal Denaturation" : (Math.abs(state.ph - (cfg.optPh || 7.4)) > 2.4 ? "Active Site Ionization Altered" : "Optimal Catalysis");
          return [
            { label: "Relative Activity", val: Math.round(r) + "%", cls: r > 60 ? "is-ok" : (r > 20 ? "is-warn" : "is-danger") },
            { label: "Temperature", val: state.temp + " °C", cls: state.temp > 50 ? "is-danger" : "is-info" },
            { label: "Medium pH", val: state.ph.toFixed(1), cls: "is-info" },
            { label: "Enzyme State", val: status, cls: status === "Optimal Catalysis" ? "is-ok" : "is-danger" }
          ];
        }
        var k = calcKinetics(state.sub);
        return [
          { label: "Velocity (v₀)", val: k.v.toFixed(1) + " U", cls: "is-ok" },
          { label: state.inhib === "allosteric" ? "K₀.₅ (S₀.₅)" : "Apparent Km", val: k.kmEff.toFixed(1) + " mM", cls: k.kmEff > state.km + 1 ? "is-danger" : "is-info" },
          { label: "Apparent Vmax", val: k.vmEff.toFixed(1) + " U", cls: k.vmEff < state.vmax - 1 ? "is-danger" : "is-info" },
          { label: "Saturation", val: Math.round((k.v / Math.max(1, k.vmEff)) * 100) + "% Vmax", cls: "is-warn" }
        ];
      },
      inspector: function () {
        if (state.mode === "factors") {
          return '<span class="biosim-inspector__tag">Q10 &amp; DENATURATION</span>Velocity roughly doubles per 10 °C rise until ~37–40 °C, then collapses sharply above 50 °C as H-bonds/hydrophobic interactions unfold the 3D active site. Extreme pH alters ionization of catalytic Asp/His/Glu residues.';
        }
        var notes = {
          none: "<strong>Michaelis-Menten Kinetics:</strong> Km is the [S] at which v₀ = ½ Vmax. Lower Km = higher substrate affinity.",
          competitive: "<strong>Competitive Inhibition:</strong> Inhibitor competes at the active site. High [S] overcomes inhibition → <em>Vmax unchanged, apparent Km increases</em> (e.g., Malonate on Succinate Dehydrogenase; Ethanol/Fomepizole in Ethylene Glycol poisoning in dogs!).",
          noncompetitive: "<strong>Non-Competitive Inhibition:</strong> Binds allosteric site on E or ES equally. Cannot be overcome by excess [S] → <em>Km unchanged, Vmax decreases</em> (e.g., Heavy metals Pb²⁺/Hg²⁺).",
          uncompetitive: "<strong>Uncompetitive Inhibition:</strong> Binds only the ES complex → <em>both Km and Vmax decrease proportionally</em> (parallel lines on Lineweaver-Burk!).",
          allosteric: "<strong>Allosteric Cooperativity:</strong> Sigmoidal curve (T-state ⇌ R-state) allows steep metabolic switching (e.g., PFK-1 in glycolysis, ATCase)."
        };
        return '<span class="biosim-inspector__tag">ENZYME KINETICS</span>' + (notes[state.inhib] || notes.none);
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        if (state.mode === "factors") {
          // Dual curve: Temp curve (left) + pH bell curve (right)
          var half = w * 0.5;
          function drawCurve(ox, ow, title, xMin, xMax, curX, fn, color) {
            var pL = ox + 40, pR = ox + ow - 18, pT = 32, pB = h - 38;
            var cw = pR - pL, ch = pB - pT;
            ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(pL, pT); ctx.lineTo(pL, pB); ctx.lineTo(pR, pB); ctx.stroke();
            ctx.strokeStyle = color; ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (var i = 0; i <= 60; i++) {
              var xv = xMin + (i / 60) * (xMax - xMin);
              var yv = fn(xv);
              var px = pL + (i / 60) * cw;
              var py = pB - clamp(yv / 115, 0, 1) * ch;
              if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();
            var cx2 = pL + ((curX - xMin) / (xMax - xMin)) * cw;
            var cy2 = pB - clamp(fn(curX) / 115, 0, 1) * ch;
            ctx.fillStyle = theme.coral;
            ctx.beginPath(); ctx.arc(cx2, cy2, 6.5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = theme.text; ctx.font = "700 13px sans-serif";
            ctx.fillText(title, pL + 4, 20);
          }
          drawCurve(0, half, "Temperature Curve (Opt ~37–40 °C)", 5, 70, state.temp, function (T) {
            return T <= 40 ? Math.pow(2, (T - 37) / 10) * 90 : 90 * Math.pow(2, 0.3) * Math.exp(-Math.pow((T - 40) / 9, 2));
          }, theme.blue);
          var optPh = cfg.optPh != null ? cfg.optPh : 7.4;
          drawCurve(half, half, "pH Bell Curve (Opt " + optPh + ")", 2, 11, state.ph, function (P) {
            return 100 * Math.exp(-Math.pow((P - optPh) / 1.6, 2));
          }, theme.teal);
          return;
        }

        // Left 62%: Kinetics Plot, Right 38%: Animated E + S <-> ES -> E + P
        var splitX = w * 0.63;
        var pL = 48, pT = 24, pB = h - 38, pR = splitX - 14;
        var gw = pR - pL, gh = pB - pT;

        ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(pL, pT); ctx.lineTo(pL, pB); ctx.lineTo(pR, pB); ctx.stroke();

        if (state.plotType === "mm") {
          // Control curve (dashed)
          ctx.strokeStyle = theme.faint; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]);
          ctx.beginPath();
          for (var s0 = 0; s0 <= 100; s0 += 2) {
            var v0 = (state.vmax * s0) / (state.km + s0);
            var x0 = pL + (s0 / 100) * gw, y0 = pB - (v0 / 110) * gh;
            if (s0 === 0) ctx.moveTo(x0, y0); else ctx.lineTo(x0, y0);
          }
          ctx.stroke(); ctx.setLineDash([]);

          // Active curve
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.6;
          ctx.beginPath();
          for (var s1 = 0; s1 <= 100; s1 += 1) {
            var k1 = calcKinetics(s1);
            var x1 = pL + (s1 / 100) * gw, y1 = pB - (k1.v / 110) * gh;
            if (s1 === 0) ctx.moveTo(x1, y1); else ctx.lineTo(x1, y1);
          }
          ctx.stroke();

          // Current [S] marker
          var kc = calcKinetics(state.sub);
          var mx = pL + (state.sub / 100) * gw, my = pB - (kc.v / 110) * gh;
          ctx.fillStyle = theme.coral;
          ctx.beginPath(); ctx.arc(mx, my, 6.5, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();

          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
          ctx.fillText("Substrate [S] (mM)", pL + gw / 2 - 48, h - 10);
          ctx.fillText("v₀", pL - 24, pT + 10);
        } else {
          // Lineweaver-Burk (1/v vs 1/[S])
          var xZero = pL + gw * 0.34;
          ctx.strokeStyle = theme.border;
          ctx.beginPath(); ctx.moveTo(xZero, pT); ctx.lineTo(xZero, pB); ctx.stroke();

          function drawLB(kmV, vmV, color, dashed) {
            ctx.strokeStyle = color; ctx.lineWidth = dashed ? 1.5 : 2.5;
            if (dashed) ctx.setLineDash([5, 4]);
            ctx.beginPath();
            var xStart = -1 / Math.max(2, kmV);
            var started = false;
            for (var invS = Math.max(-0.08, xStart); invS <= 0.14; invS += 0.005) {
              var invV = (1 / vmV) + (kmV / vmV) * invS;
              if (invV < 0 || invV > 0.08) continue;
              var lx = xZero + (invS / 0.14) * (pR - xZero);
              var ly = pB - (invV / 0.08) * gh;
              if (!started) { ctx.moveTo(lx, ly); started = true; } else ctx.lineTo(lx, ly);
            }
            ctx.stroke(); ctx.setLineDash([]);
          }
          drawLB(state.km, state.vmax, theme.faint, true);
          if (state.inhib === "allosteric") {
            ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.5;
            ctx.beginPath();
            var startedHill = false;
            for (var invS2 = 0.005; invS2 <= 0.14; invS2 += 0.004) {
              var sVal = 1 / invS2;
              var invV2 = 1 / Math.max(0.001, calcKinetics(sVal).v);
              if (invV2 < 0 || invV2 > 0.08) continue;
              var hx = xZero + (invS2 / 0.14) * (pR - xZero);
              var hy = pB - (invV2 / 0.08) * gh;
              if (!startedHill) { ctx.moveTo(hx, hy); startedHill = true; } else ctx.lineTo(hx, hy);
            }
            ctx.stroke();
          } else {
            var ke = calcKinetics(state.sub);
            drawLB(ke.kmEff, ke.vmEff, theme.blue, false);
          }

          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
          ctx.fillText("-1/Km", pL + 4, pB - 6);
          ctx.fillText("1/[S] →", pR - 46, h - 10);
          ctx.fillText("1/v₀", xZero + 4, pT + 12);
        }

        // Right panel: Active site cartoon
        var rx = splitX + 10, rw = w - splitX - 20;
        var ecx = rx + rw * 0.5, ecy = h * 0.52;
        var rate = calcKinetics(state.sub).v / 100;
        var pulse = Math.sin(t * (2 + rate * 6)) * 3;

        ctx.fillStyle = theme.teal;
        ctx.beginPath();
        ctx.arc(ecx, ecy, 36 + pulse * 0.4, 0.25 * Math.PI, 1.75 * Math.PI);
        ctx.lineTo(ecx, ecy);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
        ctx.fillText("Enzyme", ecx - 10, ecy + 4);

        // Substrate entering active site
        var sProg = (t * (0.4 + rate * 1.1)) % 1;
        var sx = ecx + 54 - sProg * 36;
        ctx.fillStyle = sProg > 0.72 ? theme.sage : theme.amberFill;
        ctx.beginPath(); ctx.arc(sx, ecy, 10, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#000"; ctx.font = "700 13px sans-serif";
        ctx.fillText(sProg > 0.72 ? "P" : "S", sx, ecy + 3);

        // Inhibitor visual if active
        if (state.inhib !== "none" && state.inhibConc > 0) {
          var ix = state.inhib === "competitive" ? ecx + 22 : ecx - 28;
          var iy = state.inhib === "competitive" ? ecy - 12 : ecy + 38;
          ctx.fillStyle = theme.danger;
          roundRect(ctx, ix - 11, iy - 9, 22, 18, 4); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif";
          ctx.fillText("I", ix, iy + 3);
        }

        ctx.fillStyle = theme.text; ctx.font = "700 12px monospace";
        ctx.fillText("E + S ⇌ ES → E + P", ecx, 24);
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     5. ELECTRON TRANSPORT CHAIN & OXIDATIVE PHOSPHORYLATION
     ============================================================ */
  function createEtcEngine(cfg, state) {
    state.substrate = cfg.substrate || "nadh";
    state.blocker = cfg.blocker || "none";

    function calcFlux() {
      var e1 = state.substrate === "nadh" && state.blocker !== "rotenone" && state.blocker !== "antimycin" && state.blocker !== "cyanide" && state.blocker !== "oligomycin";
      var e2 = state.substrate === "fadh2" && state.blocker !== "antimycin" && state.blocker !== "cyanide" && state.blocker !== "oligomycin";
      var etcActive = (state.substrate === "nadh" ? e1 : e2);
      var uncoupled = state.blocker === "dnp";
      var hPumped = !etcActive ? 0 : (state.substrate === "nadh" ? 10 : 6);
      var atp = (!etcActive || uncoupled || state.blocker === "oligomycin") ? 0 : (state.substrate === "nadh" ? 2.5 : 1.5);
      var o2 = !etcActive ? "0% (Halted)" : (uncoupled ? "220% (Surging!)" : "100% (Coupled)");
      var heat = uncoupled ? "HIGH (Thermogenesis)" : (etcActive ? "Normal" : "Low");
      return { etcActive: etcActive, uncoupled: uncoupled, hPumped: hPumped, atp: atp, o2: o2, heat: heat };
    }

    return {
      tabs: [
        { id: "none", label: "Normal Coupled" },
        { id: "rotenone", label: "Rotenone (Complex I)" },
        { id: "antimycin", label: "Antimycin A (Complex III)" },
        { id: "cyanide", label: "Cyanide / CO (Complex IV)" },
        { id: "oligomycin", label: "Oligomycin (ATP Synthase)" },
        { id: "dnp", label: "2,4-DNP / UCP1 (Uncoupler)" }
      ],
      onTab: function (id) { state.blocker = id; },
      controls: function () {
        return [
          {
            type: "select", key: "substrate", label: "Reducing Equivalent Input",
            options: [
              { val: "nadh", label: "NADH + H⁺ (Enters Complex I → 10 H⁺ → 2.5 ATP)" },
              { val: "fadh2", label: "FADH₂ (Enters Complex II → 6 H⁺ → 1.5 ATP)" }
            ]
          }
        ];
      },
      metrics: function () {
        var f = calcFlux();
        return [
          { label: "H⁺ Pumped / Pair", val: f.hPumped + " H⁺", cls: f.hPumped > 0 ? "is-info" : "is-danger" },
          { label: "ATP Yield (P:O)", val: f.atp.toFixed(1) + " ATP", cls: f.atp > 0 ? "is-ok" : "is-danger" },
          { label: "O₂ Consumption", val: f.o2, cls: f.uncoupled ? "is-warn" : (f.etcActive ? "is-ok" : "is-danger") },
          { label: "Heat Output", val: f.heat, cls: f.uncoupled ? "is-danger" : "is-info" }
        ];
      },
      inspector: function () {
        var notes = {
          none: "<strong>Chemiosmotic Coupling (Mitchell):</strong> Electron flow from NADH (Complex I→CoQ→III→Cyt c→IV→O₂) pumps 10 H⁺ (4+4+2) into the intermembrane space. Proton return through F₀F₁-ATP Synthase drives rotary synthesis of 2.5 ATP (1.5 ATP for FADH₂).",
          rotenone: "<strong>Complex I Block (Rotenone/Amytal):</strong> Blocks NADH oxidation. Try switching input to <strong>FADH₂</strong> — electrons bypass Complex I via Complex II (Succinate Dehydrogenase) and rescue 1.5 ATP!",
          antimycin: "<strong>Complex III Block (Antimycin A):</strong> Halts electron transfer from CoQH₂ to Cytochrome c, blocking both NADH and FADH₂ oxidation.",
          cyanide: "<strong>Complex IV Block (CN⁻, CO, H₂S):</strong> Binds heme a₃-CuB of Cytochrome c oxidase. In veterinary medicine, cyanogenic plants (immature <em>Sorghum</em>/Jowar) cause acute histotoxic hypoxia — venous blood stays bright cherry-red!",
          oligomycin: "<strong>ATP Synthase Block (Oligomycin):</strong> Plugs the F₀ proton channel. Proton gradient builds so high that ETC backs up and O₂ consumption stops.",
          dnp: "<strong>Uncouplers (2,4-DNP, Thermogenin/UCP1):</strong> Carry H⁺ back across the inner membrane bypassing ATP synthase. ETC runs maximally (O₂ surges!), ATP drops to 0, and free energy dissipates as <strong>heat</strong> (essential for non-shivering thermogenesis in newborn lambs &amp; calves!)."
        };
        return '<span class="biosim-inspector__tag">MITOCHONDRIAL BIOENERGETICS</span>' + (notes[state.blocker] || notes.none);
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var f = calcFlux();
        var topY = h * 0.34, botY = h * 0.66;

        // Intermembrane Space (top) & Matrix (bottom)
        ctx.fillStyle = theme.isDark ? "rgba(216,67,21,0.10)" : "rgba(216,67,21,0.06)";
        ctx.fillRect(0, 0, w, topY);
        ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.10)" : "rgba(21,101,192,0.05)";
        ctx.fillRect(0, botY, w, h - botY);
        // Inner mitochondrial membrane
        ctx.fillStyle = theme.isDark ? "rgba(255,167,38,0.16)" : "rgba(255,167,38,0.22)";
        ctx.fillRect(0, topY, w, botY - topY);

        ctx.font = "700 12px monospace";
        ctx.fillStyle = theme.coral;
        ctx.fillText("INTERMEMBRANE SPACE (High [H⁺], Low pH, + Charge)", 12, 18);
        ctx.fillStyle = theme.blue;
        ctx.fillText("MITOCHONDRIAL MATRIX (Low [H⁺], High pH, - Charge)", 12, h - 10);

        var comps = [
          { id: "I", x: w * 0.13, label: "Complex I", sub: "4 H⁺", color: theme.blue, active: state.substrate === "nadh" },
          { id: "II", x: w * 0.28, label: "Complex II", sub: "0 H⁺", color: theme.teal, active: state.substrate === "fadh2" },
          { id: "III", x: w * 0.45, label: "Complex III", sub: "4 H⁺", color: theme.purple, active: true },
          { id: "IV", x: w * 0.63, label: "Complex IV", sub: "2 H⁺", color: theme.coral, active: true },
          { id: "V", x: w * 0.84, label: "ATP Synthase", sub: "F₀F₁", color: theme.sage, active: true }
        ];

        comps.forEach(function (c) {
          var cw = c.id === "V" ? 64 : 52;
          var ch = (botY - topY) + 26;
          ctx.fillStyle = c.active ? c.color : theme.faint;
          roundRect(ctx, c.x - cw / 2, topY - 13, cw, ch, 12);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.font = "700 12px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(c.label, c.x, h * 0.5 - 2);
          ctx.font = "600 12.5px monospace";
          ctx.fillText(c.sub, c.x, h * 0.5 + 12);

          // Proton pumping arrows for I, III, IV
          if (f.etcActive && (c.id === "I" && state.substrate === "nadh" || c.id === "III" || c.id === "IV")) {
            var hp = (t * 0.9 + c.x * 0.01) % 1;
            var hy = (botY + 18) - hp * (botY - topY + 42);
            ctx.fillStyle = theme.coral;
            ctx.beginPath(); ctx.arc(c.x, hy, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.font = "700 13px sans-serif";
            ctx.fillText("H⁺", c.x, hy + 2.5);
          }
        });

        // Electron flow dots along membrane
        if (f.etcActive) {
          var startX = state.substrate === "nadh" ? comps[0].x : comps[1].x;
          var endX = comps[3].x;
          for (var e = 0; e < 5; e++) {
            var ep = (t * (f.uncoupled ? 1.1 : 0.6) + e * 0.2) % 1;
            var ex = startX + ep * (endX - startX);
            var ey = h * 0.5 + Math.sin(ep * Math.PI * 4) * 14;
            ctx.fillStyle = theme.amberFill;
            ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#000"; ctx.font = "700 13px sans-serif";
            ctx.fillText("e⁻", ex, ey + 2.5);
          }
          // O2 -> H2O at Complex IV
          ctx.fillStyle = theme.text; ctx.font = "700 12px monospace";
          ctx.fillText("½O₂ + 2H⁺ + 2e⁻ → H₂O", comps[3].x, botY + 34);
        }

        // ATP Synthase proton return & rotor
        if (f.atp > 0) {
          var rp = (t * 0.9) % 1;
          var ry = (topY - 22) + rp * (botY - topY + 46);
          ctx.fillStyle = theme.coral;
          ctx.beginPath(); ctx.arc(comps[4].x, ry, 6, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = theme.ok; ctx.font = "700 13px monospace";
          ctx.fillText("ADP + Pᵢ → ATP (" + f.atp + ")", comps[4].x, botY + 34);
        }

        // Uncoupler H+ leak channel
        if (f.uncoupled) {
          var ux = w * 0.73;
          ctx.strokeStyle = theme.danger; ctx.lineWidth = 3; ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(ux, topY - 12); ctx.lineTo(ux, botY + 12); ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = theme.danger; ctx.font = "700 12px sans-serif";
          ctx.fillText("DNP / UCP1 Leak", ux, topY - 18);
          ctx.fillText("🔥 HEAT", ux, botY + 34);
        }

        // Blocker X badge
        var blockMap = { rotenone: 0, antimycin: 2, cyanide: 3, oligomycin: 4 };
        if (blockMap[state.blocker] != null) {
          var bc = comps[blockMap[state.blocker]];
          ctx.fillStyle = theme.danger;
          ctx.beginPath(); ctx.arc(bc.x, topY - 18, 11, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 12px sans-serif";
          ctx.fillText("✕", bc.x, topY - 14);
        }
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     6. INTERACTIVE METABOLIC PATHWAY & FLUX ENGINE
     ============================================================ */
  function createPathwayEngine(cfg, state) {
    var modes = cfg.modes || [{ id: "normal", label: "Active Flux", speed: 1, metrics: cfg.metrics || [] }];
    state.mode = modes[0].id;
    state.selectedNode = 0;
    state.stepIdx = 1;

    function getMode() {
      for (var i = 0; i < modes.length; i++) if (modes[i].id === state.mode) return modes[i];
      return modes[0];
    }

    return {
      tabs: modes.map(function (m) { return { id: m.id, label: m.label }; }),
      controls: function () {
        var n = (cfg.nodes || []).length;
        if (n <= 1) return [];
        return [{
          type: "slider", key: "stepIdx",
          label: "Step-by-Step Guided Walkthrough (or Click Any Node)",
          min: 1, max: n, step: 1, unit: " / " + n
        }];
      },
      metrics: function () {
        var m = getMode();
        return m.metrics || cfg.metrics || [];
      },
      inspector: function () {
        var nodes = cfg.nodes || [];
        var idx = clamp((state.stepIdx || 1) - 1, 0, Math.max(0, nodes.length - 1));
        state.selectedNode = idx;
        var nd = nodes[idx] || nodes[0];
        var m = getMode();
        var note = nd ? ('<strong>Step ' + (idx + 1) + ' — ' + esc(nd.label) + (nd.enzyme ? ' [' + esc(nd.enzyme) + ']' : '') + ':</strong> ' + esc(nd.info || "")) : "";
        var stateNote = m.note ? ('<br><strong>Current State (' + esc(m.label) + '):</strong> ' + esc(m.note)) : "";
        return '<span class="biosim-inspector__tag">STEP ' + (idx + 1) + ' OF ' + nodes.length + '</span>' + note + stateNote;
      },
      onClick: function (nx, ny) {
        var nodes = cfg.nodes || [];
        var best = -1, bestD = 0.024;
        for (var i = 0; i < nodes.length; i++) {
          var dx = nodes[i].x - nx, dy = nodes[i].y - ny;
          var d = dx * dx + dy * dy;
          if (d < bestD) { bestD = d; best = i; }
        }
        if (best !== -1) { state.selectedNode = best; state.stepIdx = best + 1; return true; }
        return false;
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var m = getMode();
        var nodes = cfg.nodes || [];
        var edges = cfg.edges || [];
        var blocked = m.blocked || [];
        var boost = m.boost || [];
        var speed = m.speed != null ? m.speed : 1;

        // Optional compartment divider
        if (cfg.compartment) {
          var cy = h * (cfg.compartment.y || 0.5);
          ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.08)" : "rgba(21,101,192,0.04)";
          ctx.fillRect(0, 0, w, cy);
          ctx.fillStyle = theme.isDark ? "rgba(0,137,123,0.08)" : "rgba(0,137,123,0.04)";
          ctx.fillRect(0, cy, w, h - cy);
          ctx.strokeStyle = theme.border; ctx.setLineDash([6, 4]);
          ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
          ctx.setLineDash([]);
          ctx.font = "700 12px monospace"; ctx.fillStyle = theme.muted;
          ctx.fillText(cfg.compartment.top || "", 10, 16);
          ctx.fillText(cfg.compartment.bottom || "", 10, cy + 16);
        }

        // Draw edges + animated flux particles
        for (var e = 0; e < edges.length; e++) {
          var ed = edges[e];
          var a = nodes[ed.from], b = nodes[ed.to];
          if (!a || !b) continue;
          var ax = a.x * w, ay = a.y * h, bx = b.x * w, by = b.y * h;
          var isBlocked = blocked.indexOf(e) !== -1;
          var isBoosted = boost.indexOf(e) !== -1;

          ctx.strokeStyle = isBlocked ? theme.danger : (isBoosted ? theme.ok : theme.blue);
          ctx.lineWidth = isBoosted ? 3 : 2;
          if (ed.dashed || isBlocked) ctx.setLineDash([5, 4]);
          ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
          ctx.setLineDash([]);

          // Arrowhead
          var ang = Math.atan2(by - ay, bx - ax);
          var mx = bx - Math.cos(ang) * 26, my = by - Math.sin(ang) * 20;
          ctx.fillStyle = ctx.strokeStyle;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(mx - Math.cos(ang - 0.45) * 8, my - Math.sin(ang - 0.45) * 8);
          ctx.lineTo(mx - Math.cos(ang + 0.45) * 8, my - Math.sin(ang + 0.45) * 8);
          ctx.closePath(); ctx.fill();

          // Edge cofactor label
          if (ed.label) {
            ctx.fillStyle = theme.muted; ctx.font = "600 12.5px monospace"; ctx.textAlign = "center";
            ctx.fillText(ed.label, (ax + bx) / 2, (ay + by) / 2 - 7);
          }

          // Animated flux bead
          if (!isBlocked && speed > 0) {
            var p = (t * 0.48 * speed * (isBoosted ? 1.5 : 1) + e * 0.17) % 1;
            var px = ax + (bx - ax) * p, py = ay + (by - ay) * p;
            ctx.fillStyle = isBoosted ? theme.ok : theme.amberFill;
            ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2); ctx.fill();
          }
        }

        // Draw nodes
        for (var i = 0; i < nodes.length; i++) {
          var nd = nodes[i];
          var nx = nd.x * w, ny = nd.y * h;
          var sel = i === state.selectedNode;
          var nw = Math.max(92, (nd.label.length * 7.6) + 22);
          var nh = nd.sub ? 40 : 30;
          var fillCol = nd.kind === "rate" ? theme.coral
            : nd.kind === "energy" ? theme.sage
            : nd.kind === "organ" ? theme.purple
            : nd.kind === "warn" ? theme.amber
            : theme.blue;

          ctx.fillStyle = sel ? fillCol : theme.surface;
          ctx.strokeStyle = fillCol;
          ctx.lineWidth = sel ? 2.5 : 1.8;
          roundRect(ctx, nx - nw / 2, ny - nh / 2, nw, nh, 8);
          ctx.fill(); ctx.stroke();

          ctx.fillStyle = sel ? "#fff" : theme.text;
          ctx.font = "700 12.5px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(nd.label, nx, ny + (nd.sub ? -2 : 3.5));
          if (nd.sub) {
            ctx.fillStyle = sel ? "rgba(255,255,255,0.88)" : theme.muted;
            ctx.font = "600 10.5px monospace";
            ctx.fillText(nd.sub, nx, ny + 10);
          }
        }
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     7. MOLECULAR STRUCTURE & CONFORMATION ENGINE
     ============================================================ */
  function createMoleculeEngine(cfg, state) {
    var kind = cfg.kind || "states";
    var states = cfg.states || [];
    state.tab = states[0] ? states[0].id : "s0";
    state.ph = cfg.ph != null ? cfg.ph : 6.0;
    state.gc = cfg.gc != null ? cfg.gc : 50;
    state.temp = cfg.temp != null ? cfg.temp : 37;
    state.nsaid = false;

    function curState() {
      for (var i = 0; i < states.length; i++) if (states[i].id === state.tab) return states[i];
      return states[0] || { label: "", info: "", metrics: [] };
    }

    return {
      tabs: states.length > 1 ? states.map(function (s) { return { id: s.id, label: s.label }; }) : null,
      onTab: function (id) { state.tab = id; },
      controls: function () {
        if (kind === "zwitterion") {
          return [{ type: "slider", key: "ph", label: "Solution pH", min: 1.0, max: 13.0, step: 0.2, unit: "" }];
        }
        if (kind === "helix") {
          return [
            { type: "slider", key: "gc", label: "GC Base-Pair Content", min: 20, max: 80, step: 5, unit: "%" },
            { type: "slider", key: "temp", label: "Temperature", min: 35, max: 100, step: 1, unit: " °C" }
          ];
        }
        if (kind === "eicosanoid") {
          return [{ type: "toggle", key: "nsaid", label: "NSAID (Flunixin / Meloxicam — COX Block)", onClass: "is-on" }];
        }
        if (kind === "folding") {
          return [{ type: "slider", key: "temp", label: "Thermal / Denaturing Stress", min: 20, max: 85, step: 1, unit: " °C" }];
        }
        return [];
      },
      metrics: function () {
        if (kind === "zwitterion") {
          var pk1 = cfg.pk1 || 2.34, pk2 = cfg.pk2 || 9.60, pkr = cfg.pkr;
          var pi = pkr != null ? (cfg.acidic ? (pk1 + pkr) / 2 : (pk2 + pkr) / 2) : (pk1 + pk2) / 2;
          var charge = (state.ph < pk2 ? 1 : 0) + (state.ph >= pk1 ? -1 : 0) +
            (pkr != null ? (cfg.acidic ? (state.ph >= pkr ? -1 : 0) : (state.ph < pkr ? 1 : 0)) : 0);
          var net = charge === 0 ? "0 (Zwitterion)" : ((charge > 0 ? "+" + charge + " (Cation)" : charge + " (Anion)"));
          var mig = state.ph < pi - 0.3 ? "→ Cathode (-)" : (state.ph > pi + 0.3 ? "→ Anode (+)" : "Stationary (At pI)");
          return [
            { label: "Solution pH", val: state.ph.toFixed(1), cls: "is-info" },
            { label: "Isoelectric pI", val: pi.toFixed(2), cls: "is-ok" },
            { label: "Dominant Form", val: net, cls: net.indexOf("0") === 0 ? "is-ok" : "is-warn" },
            { label: "Electrophoresis", val: mig, cls: "is-info" }
          ];
        }
        if (kind === "helix") {
          // Marmur-Doty Tm approximation: Tm = 69.3 + 0.41 * (%GC)
          var tm = 69.3 + 0.41 * state.gc;
          var melted = state.temp > tm + 4;
          var partial = Math.abs(state.temp - tm) <= 4;
          return [
            { label: "GC Content", val: state.gc + "% (3 H-bonds)", cls: "is-info" },
            { label: "AT Content", val: (100 - state.gc) + "% (2 H-bonds)", cls: "is-info" },
            { label: "Melting Temp (Tm)", val: tm.toFixed(1) + " °C", cls: "is-warn" },
            { label: "Helix State", val: melted ? "Denatured (ssDNA)" : (partial ? "50% Unwound (Tm)" : "Intact dsDNA"), cls: melted ? "is-danger" : "is-ok" }
          ];
        }
        if (kind === "eicosanoid") {
          return [
            { label: "Precursor", val: "Arachidonic Acid (20:4)", cls: "is-info" },
            { label: "COX-1 / COX-2", val: state.nsaid ? "INHIBITED" : "Active → PGH₂", cls: state.nsaid ? "is-danger" : "is-ok" },
            { label: "PGF₂α / PGE₂", val: state.nsaid ? "Suppressed" : "Synthesized", cls: state.nsaid ? "is-warn" : "is-ok" },
            { label: "Clinical Effect", val: state.nsaid ? "Analgesia / ↓ Fever" : "Inflammation / Luteolysis", cls: "is-info" }
          ];
        }
        if (kind === "folding") {
          var denat = state.temp > 58;
          return [
            { label: "Temperature", val: state.temp + " °C", cls: denat ? "is-danger" : "is-info" },
            { label: "3° / 2° Structure", val: denat ? "Unfolded (Random Coil)" : "Native Functional Fold", cls: denat ? "is-danger" : "is-ok" },
            { label: "1° Peptide Bonds", val: "INTACT (Covalent)", cls: "is-ok" },
            { label: "Biological Activity", val: denat ? "Lost" : "100% Active", cls: denat ? "is-danger" : "is-ok" }
          ];
        }
        return curState().metrics || cfg.metrics || [];
      },
      inspector: function () {
        if (kind === "zwitterion") {
          return '<span class="biosim-inspector__tag">ZWITTERION TITRATION</span>Slide pH from 1 to 13: Below pK₁, both groups are protonated (+1). At <strong>pH = pI</strong>, net charge is zero (minimum solubility, zero electrophoretic mobility). Above pK₂, both are deprotonated (-1).';
        }
        if (kind === "helix") {
          return '<span class="biosim-inspector__tag">CHARGAFF &amp; Tm</span><strong>G≡C pairs have 3 H-bonds</strong> vs <strong>A=T pairs (2 H-bonds)</strong>. Increasing GC% raises melting temperature (Tm = 69.3 + 0.41×%GC). Heating above Tm breaks H-bonds causing hyperchromic UV shift at 260 nm!';
        }
        if (kind === "eicosanoid") {
          return '<span class="biosim-inspector__tag">EICOSANOID CASCADE</span>Phospholipase A₂ releases Arachidonic Acid (C20:4 ω-6) from membrane phospholipids. COX converts it to PGH₂ → PGE₂ (fever/pain), PGF₂α (bovine luteolysis), PGI₂ (vasodilation), TXA₂ (platelet aggregation). Toggle <strong>NSAID</strong> to block COX.';
        }
        if (kind === "folding") {
          return '<span class="biosim-inspector__tag">PROTEIN DENATURATION</span>Heating above ~58 °C disrupts non-covalent H-bonds, salt bridges, and hydrophobic cores (destroying 2°/3°/4° structure and biological activity), while covalent <strong>primary peptide bonds remain intact</strong>.';
        }
        var s = curState();
        return '<span class="biosim-inspector__tag">MOLECULAR VIEW</span><strong>' + esc(s.label) + ':</strong> ' + esc(s.info || cfg.info || "");
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var cx = w * 0.5, cy = h * 0.5;

        if (kind === "zwitterion") {
          var pk1 = cfg.pk1 || 2.34, pk2 = cfg.pk2 || 9.60, pkr = cfg.pkr;
          var nh3 = state.ph < pk2 ? "NH₃⁺" : "NH₂";
          var coo = state.ph < pk1 ? "COOH" : "COO⁻";
          var nhCol = state.ph < pk2 ? theme.blue : theme.muted;
          var cooCol = state.ph < pk1 ? theme.muted : theme.coral;
          var rLabel = cfg.rGroup || "R (Side Chain)";
          if (pkr != null) {
            rLabel = cfg.acidic
              ? (state.ph < pkr ? "R-COOH (0)" : "R-COO⁻ (-1)")
              : (state.ph < pkr ? "R-H⁺ (+1)" : "R (0)");
          }
          var charge2 = (state.ph < pk2 ? 1 : 0) + (state.ph >= pk1 ? -1 : 0) +
            (pkr != null ? (cfg.acidic ? (state.ph >= pkr ? -1 : 0) : (state.ph < pkr ? 1 : 0)) : 0);

          // Central alpha-carbon backbone
          ctx.strokeStyle = theme.text; ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(cx - 110, cy); ctx.lineTo(cx + 110, cy);
          ctx.moveTo(cx, cy - 60); ctx.lineTo(cx, cy + 60);
          ctx.stroke();

          function drawGroup(gx, gy, text, col, r) {
            ctx.fillStyle = col;
            roundRect(ctx, gx - r, gy - 16, r * 2, 32, 10); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.font = "700 12px monospace"; ctx.textAlign = "center";
            ctx.fillText(text, gx, gy + 4);
          }
          drawGroup(cx, cy, "Cα", theme.purple, 22);
          drawGroup(cx - 110, cy, nh3, nhCol, 34);
          drawGroup(cx + 110, cy, coo, cooCol, 34);
          drawGroup(cx, cy - 64, "H", theme.teal, 18);
          drawGroup(cx, cy + 64, rLabel, theme.amber, 58);

          ctx.fillStyle = theme.text; ctx.font = "700 12px sans-serif"; ctx.textAlign = "center";
          var title = charge2 > 0 ? ("Acidic pH → Cation (+" + charge2 + ")")
            : (charge2 < 0 ? ("Alkaline pH → Anion (" + charge2 + ")") : "Physiological / pI → Zwitterion (Net 0)");
          ctx.fillText(title, cx, 24);
          ctx.textAlign = "left";
          return;
        }

        if (kind === "helix") {
          var tm = 69.3 + 0.41 * state.gc;
          var sep = clamp((state.temp - (tm - 12)) / 24, 0, 1);
          var pairs = 14;
          var left = 46, right = w - 46;
          for (var i = 0; i < pairs; i++) {
            var px = left + (i / (pairs - 1)) * (right - left);
            var phase = i * 0.52 - t * 1.4;
            var amp = 44 * (1 - sep * 0.55);
            var spread = sep * 42;
            var y1 = cy + Math.sin(phase) * amp - spread;
            var y2 = cy - Math.sin(phase) * amp + spread;
            var isGC = ((i * 29) % 100) < state.gc;

            // H-bonds (break when melted)
            if (sep < 0.65) {
              ctx.strokeStyle = isGC ? theme.teal : theme.amber;
              ctx.lineWidth = isGC ? 2.6 : 1.6;
              ctx.setLineDash([3, 3]);
              ctx.beginPath(); ctx.moveTo(px, y1); ctx.lineTo(px, y2); ctx.stroke();
              ctx.setLineDash([]);
            }
            ctx.fillStyle = theme.blue;
            ctx.beginPath(); ctx.arc(px, y1, 7, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = theme.purple;
            ctx.beginPath(); ctx.arc(px, y2, 7, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = "#fff"; ctx.font = "700 12px monospace"; ctx.textAlign = "center";
            ctx.fillText(isGC ? "G" : "A", px, y1 + 3);
            ctx.fillText(isGC ? "C" : "T", px, y2 + 3);
          }
          ctx.fillStyle = theme.text; ctx.font = "700 13px monospace"; ctx.textAlign = "left";
          ctx.fillText("5' → 3' Strand", 16, 22);
          ctx.fillText("3' ← 5' Antiparallel Strand  |  G≡C (3 H-bonds, Teal)  A=T (2 H-bonds, Amber)", 16, h - 12);
          return;
        }

        if (kind === "eicosanoid") {
          // Visual cascade Membrane PL -> PLA2 -> AA -> COX -> PGH2 -> PG/TX
          var boxes = [
            { x: 0.14, y: 0.5, label: "Membrane PL", col: theme.blue },
            { x: 0.36, y: 0.5, label: "Arachidonic Acid", col: theme.purple },
            { x: 0.60, y: 0.5, label: state.nsaid ? "COX BLOCKED ✕" : "COX-1/2 → PGH₂", col: state.nsaid ? theme.danger : theme.teal },
            { x: 0.85, y: 0.24, label: "PGF₂α (Luteolysis)", col: state.nsaid ? theme.faint : theme.coral },
            { x: 0.85, y: 0.50, label: "PGE₂ (Pain/Fever)", col: state.nsaid ? theme.faint : theme.amber },
            { x: 0.85, y: 0.76, label: "TXA₂ / PGI₂", col: state.nsaid ? theme.faint : theme.sage }
          ];
          var links = [[0, 1], [1, 2], [2, 3], [2, 4], [2, 5]];
          links.forEach(function (lk, idx) {
            var a = boxes[lk[0]], b = boxes[lk[1]];
            var off = state.nsaid && idx >= 2;
            ctx.strokeStyle = off ? theme.faint : theme.blue;
            ctx.lineWidth = 2;
            if (off) ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke();
            ctx.setLineDash([]);
            if (!off) {
              var p = (t * 0.6 + idx * 0.2) % 1;
              ctx.fillStyle = theme.amberFill;
              ctx.beginPath(); ctx.arc((a.x + (b.x - a.x) * p) * w, (a.y + (b.y - a.y) * p) * h, 4.5, 0, Math.PI * 2); ctx.fill();
            }
          });
          boxes.forEach(function (bx) {
            ctx.fillStyle = bx.col;
            roundRect(ctx, bx.x * w - 58, bx.y * h - 18, 116, 36, 9); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.font = "700 12px sans-serif"; ctx.textAlign = "center";
            ctx.fillText(bx.label, bx.x * w, bx.y * h + 4);
          });
          ctx.textAlign = "left";
          return;
        }

        if (kind === "folding") {
          var unfold = clamp((state.temp - 42) / 30, 0, 1);
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
          ctx.beginPath();
          for (var j = 0; j <= 80; j++) {
            var f = j / 80;
            // Native compact globular vs unfolded random coil
            var nx = cx + Math.cos(f * Math.PI * 6) * (65 - f * 20) + Math.sin(f * Math.PI * 10) * 18;
            var ny = cy + Math.sin(f * Math.PI * 6) * (58 - f * 15);
            var ux = 44 + f * (w - 88);
            var uy = cy + Math.sin(f * Math.PI * 7 + t * 2.4) * 34;
            var x = nx * (1 - unfold) + ux * unfold;
            var y = ny * (1 - unfold) + uy * unfold;
            if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Non-covalent H-bonds visible when native
          if (unfold < 0.5) {
            ctx.strokeStyle = theme.coral; ctx.setLineDash([3, 3]); ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx - 30, cy - 28); ctx.lineTo(cx + 28, cy + 24);
            ctx.moveTo(cx + 25, cy - 26); ctx.lineTo(cx - 24, cy + 22);
            ctx.stroke(); ctx.setLineDash([]);
          }
          ctx.fillStyle = theme.text; ctx.font = "700 12px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(unfold > 0.55 ? "Denatured Polypeptide (Random Coil — 1° Covalent Chain Intact)" : "Native 3D Globular Fold (H-bonds, Disulfide & Hydrophobic Core)", cx, 26);
          ctx.textAlign = "left";
          return;
        }

        // Generic structured molecular state visualizer (rings, chains, lipoproteins, complexes)
        var st = curState();
        var drawStyle = st.style || cfg.style || "ring";
        if (drawStyle === "lipoprotein") {
          // Concentric lipoprotein particle scaled by diameter
          var rad = clamp((st.radius || 55), 24, 92);
          // Outer phospholipid monolayer + apoproteins
          ctx.fillStyle = theme.blueLight;
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 4;
          ctx.beginPath(); ctx.arc(cx - 80, cy, rad, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          // Hydrophobic core (TAG + Cholesteryl Esters)
          ctx.fillStyle = theme.amberFill;
          ctx.beginPath(); ctx.arc(cx - 80, cy, rad * 0.72, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#000"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(st.coreLabel || "TAG + CE Core", cx - 80, cy + 4);

          // Composition bars on right
          var bars = st.bars || [];
          bars.forEach(function (b, idx) {
            var bx = cx + 45, by = 52 + idx * 46, bw = Math.max(90, w - bx - 30);
            ctx.fillStyle = theme.text; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "left";
            ctx.fillText(b.label + " (" + b.pct + "%)", bx, by - 6);
            ctx.fillStyle = theme.border;
            roundRect(ctx, bx, by, bw, 16, 6); ctx.fill();
            ctx.fillStyle = b.color === "teal" ? theme.teal : (b.color === "purple" ? theme.purple : (b.color === "coral" ? theme.coral : theme.blue));
            roundRect(ctx, bx, by, bw * (b.pct / 100), 16, 6); ctx.fill();
          });
          return;
        }

        // Default chemical ring / polymer / bond schematic
        var units = st.units || [{ label: st.label, sub: st.formula || "", x: 0.5, y: 0.5, col: "blue" }];
        var bonds = st.bonds || [];
        bonds.forEach(function (bd) {
          var a = units[bd.from], b = units[bd.to];
          if (!a || !b) return;
          ctx.strokeStyle = bd.highlight ? theme.coral : theme.text;
          ctx.lineWidth = bd.highlight ? 3.5 : 2.2;
          ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke();
          if (bd.label) {
            ctx.fillStyle = bd.highlight ? theme.coral : theme.muted;
            ctx.font = "700 12.5px monospace"; ctx.textAlign = "center";
            ctx.fillText(bd.label, (a.x + b.x) * w / 2, (a.y + b.y) * h - 10);
          }
        });
        units.forEach(function (u, idx) {
          var ux = u.x * w, uy = u.y * h + Math.sin(t * 2 + idx) * 2.5;
          var col = u.col === "teal" ? theme.teal : u.col === "coral" ? theme.coral : u.col === "purple" ? theme.purple : u.col === "amber" ? theme.amber : u.col === "sage" ? theme.sage : theme.blue;
          ctx.fillStyle = col;
          if (u.shape === "hex") {
            ctx.beginPath();
            for (var g = 0; g < 6; g++) {
              var a2 = g * Math.PI / 3 - Math.PI / 6;
              var gx = ux + Math.cos(a2) * 34, gy = uy + Math.sin(a2) * 34;
              if (g === 0) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
            }
            ctx.closePath(); ctx.fill();
          } else {
            roundRect(ctx, ux - 48, uy - 22, 96, 44, 11); ctx.fill();
          }
          ctx.fillStyle = "#fff"; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(u.label, ux, uy + (u.sub ? -2 : 4));
          if (u.sub) {
            ctx.font = "600 12.5px monospace";
            ctx.fillText(u.sub, ux, uy + 11);
          }
        });
        if (st.banner) {
          ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(st.banner, cx, 24);
        }
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     8. VETERINARY CLINICAL DIAGNOSTICS ENGINE
     ============================================================ */
  function createClinicalEngine(cfg, state) {
    var cases = cfg.cases || [];
    state.caseId = cases[0] ? cases[0].id : "c0";
    state.sliderVal = cfg.slider ? cfg.slider.default : 50;

    function curCase() {
      for (var i = 0; i < cases.length; i++) if (cases[i].id === state.caseId) return cases[i];
      return cases[0] || { label: "", bars: [], metrics: [], info: "" };
    }

    return {
      tabs: cases.map(function (c) { return { id: c.id, label: c.label }; }),
      onTab: function (id) { state.caseId = id; },
      controls: function () {
        if (cfg.slider) {
          return [{
            type: "slider", key: "sliderVal",
            label: cfg.slider.label, min: cfg.slider.min, max: cfg.slider.max,
            step: cfg.slider.step || 1, unit: cfg.slider.unit || ""
          }];
        }
        return [];
      },
      metrics: function () {
        var c = curCase();
        if (typeof cfg.computeMetrics === "function") return cfg.computeMetrics(c, state.sliderVal);
        return c.metrics || [];
      },
      inspector: function () {
        var c = curCase();
        return '<span class="biosim-inspector__tag">CLINICAL DIAGNOSTICS</span><strong>' + esc(c.label) + ':</strong> ' + esc(c.info || "");
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var c = curCase();
        var visual = cfg.visual || "bars";

        if (visual === "electrophoresis") {
          // Serum Protein Electrophoresis densitometer trace (Alb, a1, a2, b, g)
          var peaks = c.peaks || [55, 5, 10, 12, 18];
          var names = ["Albumin", "α₁", "α₂", "β", "γ-Globulin"];
          var pos = [0.18, 0.34, 0.48, 0.64, 0.82];
          var widths = [0.045, 0.032, 0.042, 0.048, 0.075];
          var pL = 42, pR = w - 24, pB = h - 42, pT = 30;

          ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(pL, pT); ctx.lineTo(pL, pB); ctx.lineTo(pR, pB); ctx.stroke();

          ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.22)" : "rgba(21,101,192,0.14)";
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.moveTo(pL, pB);
          for (var i = 0; i <= 140; i++) {
            var u = i / 140;
            var yv = 0;
            for (var k = 0; k < 5; k++) {
              yv += peaks[k] * Math.exp(-Math.pow((u - pos[k]) / widths[k], 2));
            }
            var px = pL + u * (pR - pL);
            var py = pB - clamp(yv / 65, 0, 1) * (pB - pT - 10);
            ctx.lineTo(px, py);
          }
          ctx.lineTo(pR, pB); ctx.closePath(); ctx.fill(); ctx.stroke();

          ctx.fillStyle = theme.text; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "center";
          for (var j = 0; j < 5; j++) {
            ctx.fillText(names[j], pL + pos[j] * (pR - pL), pB + 16);
          }
          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace";
          ctx.fillText("Anode (+) ← Migration Direction (from Cathode -)", (pL + pR) / 2, pB + 32);
          ctx.textAlign = "left";
          return;
        }

        if (visual === "fluid") {
          // ICF (2/3) vs ISF (1/4) vs IVF (1/12) compartment shifts
          var comp = c.comp || { icf: 66, isf: 25, ivf: 9 };
          var boxes = [
            { label: "ICF (Intracellular)", pct: comp.icf, col: theme.purple },
            { label: "ISF (Interstitial)", pct: comp.isf, col: theme.teal },
            { label: "IVF (Intravascular Plasma)", pct: comp.ivf, col: theme.coral }
          ];
          var x = 24, availW = w - 48, by = 68, bh = h - 125;
          boxes.forEach(function (bx) {
            var bw = Math.max(58, (bx.pct / 100) * availW);
            ctx.fillStyle = bx.col;
            roundRect(ctx, x, by, bw - 6, bh, 12); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.font = "700 12px sans-serif"; ctx.textAlign = "center";
            ctx.fillText(bx.label, x + (bw - 6) / 2, by + bh / 2 - 6);
            ctx.font = "700 14px monospace";
            ctx.fillText(bx.pct + "% TBW", x + (bw - 6) / 2, by + bh / 2 + 16);
            x += bw;
          });
          ctx.fillStyle = theme.text; ctx.font = "700 12px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(c.banner || c.label, w / 2, 34);
          ctx.textAlign = "left";
          return;
        }

        // Default: Clinical Biomarker Comparison Bars with Reference Range Band
        var bars = c.bars || [];
        var padL = 135, padR = 54, padT = 36, rowH = Math.min(44, (h - 56) / Math.max(1, bars.length));
        var bw = Math.max(100, w - padL - padR);

        ctx.fillStyle = theme.text; ctx.font = "700 13.5px sans-serif";
        ctx.fillText(c.banner || c.label, 14, 22);

        bars.forEach(function (b, idx) {
          var y = padT + idx * rowH;
          var maxV = b.max || 100;
          var val = b.val;
          if (cfg.slider && b.scaleWithSlider) {
            val = clamp(Math.round(b.val * (state.sliderVal / (cfg.slider.default || 50))), 0, maxV);
          }
          ctx.fillStyle = theme.text; ctx.font = "600 12.5px sans-serif"; ctx.textAlign = "right";
          ctx.fillText(b.label, padL - 10, y + 15);

          // Track
          ctx.fillStyle = theme.surface;
          ctx.strokeStyle = theme.border; ctx.lineWidth = 1;
          roundRect(ctx, padL, y + 2, bw, 20, 6); ctx.fill(); ctx.stroke();

          // Normal reference range highlight
          if (b.refMin != null && b.refMax != null) {
            var rx1 = padL + (b.refMin / maxV) * bw;
            var rx2 = padL + (b.refMax / maxV) * bw;
            ctx.fillStyle = theme.isDark ? "rgba(46,125,50,0.28)" : "rgba(46,125,50,0.16)";
            ctx.fillRect(rx1, y + 2, Math.max(4, rx2 - rx1), 20);
          }

          // Value bar
          var high = (b.refMax != null && val > b.refMax) || (b.refMin != null && val < b.refMin);
          var barCol = high ? theme.coral : (b.color === "teal" ? theme.teal : theme.blue);
          var fillW = clamp(val / maxV, 0.02, 1) * bw;
          ctx.fillStyle = barCol;
          roundRect(ctx, padL, y + 5, fillW, 14, 4); ctx.fill();

          ctx.fillStyle = high ? theme.danger : theme.text;
          ctx.font = "700 12.5px monospace"; ctx.textAlign = "left";
          ctx.fillText(val + (b.unit ? " " + b.unit : ""), padL + bw + 8, y + 16);
        });
        ctx.textAlign = "left";
      }
    };
  }

  /* ============================================================
     9. PRACTICAL LABORATORY BENCH ENGINE (All 22 Practicals)
     ============================================================ */
  function createLabEngine(cfg, state) {
    var kind = cfg.kind || "colorimeter";
    state.sampleIdx = 0;
    state.conc = cfg.defaultConc != null ? cfg.defaultConc : 100;
    state.vol = cfg.defaultVol != null ? cfg.defaultVol : 0;
    state.heated = false;
    state.solventProg = 0;

    var samples = cfg.samples || [];

    return {
      tabs: samples.length > 0 ? samples.map(function (s, i) { return { id: String(i), label: s.label }; }) : null,
      onTab: function (id) {
        state.sampleIdx = parseInt(id, 10) || 0;
        state.vol = 0;
        state.solventProg = 0;
        if (kind === "flame") {
          state.conc = state.sampleIdx === 1 ? 4.5 : (cfg.defaultConc != null ? cfg.defaultConc : 142);
        }
      },
      controls: function () {
        if (kind === "colorimeter") {
          return [{
            type: "slider", key: "conc",
            label: cfg.concLabel || "Test Concentration",
            min: cfg.minConc != null ? cfg.minConc : 10,
            max: cfg.maxConc != null ? cfg.maxConc : 300,
            step: cfg.stepConc || 5,
            unit: " " + (cfg.unit || "mg/dL")
          }];
        }
        if (kind === "titration") {
          return [{
            type: "slider", key: "vol",
            label: cfg.volLabel || "Titrant Added from Burette",
            min: 0, max: cfg.maxVol || 25, step: 0.5, unit: " mL"
          }];
        }
        if (kind === "test_rack") {
          return [{ type: "toggle", key: "heated", label: cfg.heatLabel || "Apply Reagents & Heat / Observe", onClass: "is-on-teal" }];
        }
        if (kind === "flame") {
          var isK = state.sampleIdx === 1;
          return [{
            type: "slider", key: "conc",
            label: isK ? "Serum K⁺ Concentration" : "Serum Na⁺ Concentration",
            min: isK ? 1.0 : (cfg.minConc != null ? cfg.minConc : 100),
            max: isK ? 10.0 : (cfg.maxConc != null ? cfg.maxConc : 170),
            step: isK ? 0.1 : 1,
            unit: " mEq/L"
          }];
        }
        if (kind === "chromatography") {
          return [{ type: "toggle", key: "heated", label: "Spray Ninhydrin & Develop Spots", onClass: "is-on-blue" }];
        }
        return [];
      },
      metrics: function () {
        var smp = samples[state.sampleIdx] || {};
        if (kind === "colorimeter") {
          var stdConc = cfg.stdConc || 100;
          var stdOD = cfg.stdOD || 0.35;
          var testOD = (state.conc / stdConc) * stdOD;
          var calc = (testOD / stdOD) * stdConc;
          var inRef = (cfg.refMin == null || calc >= cfg.refMin) && (cfg.refMax == null || calc <= cfg.refMax);
          return [
            { label: "Wavelength (λ)", val: (cfg.wavelength || 540) + " nm", cls: "is-info" },
            { label: "Test OD (A = εcl)", val: testOD.toFixed(3), cls: "is-info" },
            { label: "Calculated Result", val: calc.toFixed(1) + " " + (cfg.unit || "mg/dL"), cls: inRef ? "is-ok" : "is-danger" },
            { label: "Clinical Status", val: inRef ? "Within Ref. Range" : (calc > cfg.refMax ? "ELEVATED" : "DECREASED"), cls: inRef ? "is-ok" : "is-danger" }
          ];
        }
        if (kind === "titration") {
          var ep = smp.endpoint || cfg.endpoint || 12.5;
          var reached = state.vol >= ep;
          var calcVal = typeof cfg.calcFn === "function" ? cfg.calcFn(ep, state.vol) : (state.vol * (cfg.factor || 1)).toFixed(2);
          return [
            { label: "Burette Volume", val: state.vol.toFixed(1) + " mL", cls: "is-info" },
            { label: "Endpoint", val: reached ? "REACHED (" + ep + " mL)" : "Titrating...", cls: reached ? "is-ok" : "is-warn" },
            { label: cfg.resultLabel || "Computed Value", val: String(calcVal), cls: "is-info" },
            { label: "Indicator", val: cfg.indicator || "Colorimetric", cls: "is-ok" }
          ];
        }
        if (kind === "test_rack") {
          return [
            { label: "Selected Sample", val: smp.label || "Unknown", cls: "is-info" },
            { label: "Tests Run", val: state.heated ? ((smp.tubes || []).length + " Tubes Reacted") : "Click Toggle to React", cls: state.heated ? "is-ok" : "is-warn" },
            { label: "Key Positive", val: state.heated ? (smp.keyPos || "See Tubes") : "—", cls: "is-ok" },
            { label: "Inference", val: state.heated ? (smp.inference || "") : "Pending", cls: "is-info" }
          ];
        }
        if (kind === "flame") {
          var isK = state.sampleIdx === 1;
          var lam = isK ? "766 nm (Deep Red; visual lilac)" : "589 nm (Golden Yellow)";
          var emission = clamp((state.conc / (isK ? 10 : 170)) * 100, 2, 100);
          return [
            { label: "Analyte Ion", val: isK ? "Potassium (K⁺)" : "Sodium (Na⁺)", cls: "is-info" },
            { label: "Emission λ", val: lam, cls: "is-warn" },
            { label: "Galvanometer", val: emission.toFixed(1) + " %", cls: "is-ok" },
            { label: "Normal Serum", val: isK ? "3.5 – 5.5 mEq/L" : "135 – 148 mEq/L", cls: "is-info" }
          ];
        }
        if (kind === "chromatography") {
          var spots = cfg.spots || [];
          return [
            { label: "Solvent Front", val: Math.round(state.solventProg * 100) + "%", cls: "is-info" },
            { label: "Fastest (Nonpolar)", val: spots[0] ? (spots[0].name + " Rf=" + spots[0].rf) : "Leu (0.73)", cls: "is-ok" },
            { label: "Slowest (Polar)", val: spots[spots.length - 1] ? (spots[spots.length - 1].name + " Rf=" + spots[spots.length - 1].rf) : "Lys (0.14)", cls: "is-warn" },
            { label: "Ninhydrin", val: state.heated ? "Developed (Purple/Yellow)" : "Invisible (Unsprayed)", cls: state.heated ? "is-ok" : "is-warn" }
          ];
        }
        return [];
      },
      inspector: function () {
        var smp = samples[state.sampleIdx] || {};
        return '<span class="biosim-inspector__tag">VIRTUAL LAB BENCH</span>' + esc(smp.info || cfg.info || "Adjust parameters to observe exact quantitative biochemical principles.");
      },
      step: function (dt) {
        if (kind === "chromatography") {
          state.solventProg = Math.min(1, state.solventProg + dt * 0.16);
        }
      },
      draw: function (ctx, w, h, t, theme) {
        ctx.clearRect(0, 0, w, h);
        var smp = samples[state.sampleIdx] || {};

        if (kind === "colorimeter") {
          var stdConc = cfg.stdConc || 100, stdOD = cfg.stdOD || 0.35;
          var testOD = (state.conc / stdConc) * stdOD;
          var intensity = clamp(testOD / (stdOD * 2.5), 0.08, 0.95);
          var cy = h * 0.52;

          // Light source -> Filter -> Cuvette -> Photocell
          ctx.fillStyle = theme.amberFill;
          ctx.beginPath(); ctx.arc(44, cy, 18, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#000"; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText("Lamp", 44, cy + 3);

          // Incident beam I0
          ctx.fillStyle = cfg.beamColor || theme.teal;
          ctx.globalAlpha = 0.75;
          ctx.fillRect(62, cy - 8, 90, 16);
          ctx.globalAlpha = 1;

          // Cuvette with colored chromogen
          var cuvX = 160, cuvW = 54, cuvH = 92;
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.5;
          roundRect(ctx, cuvX, cy - 46, cuvW, cuvH, 6); ctx.stroke();
          ctx.fillStyle = cfg.chromogen || theme.coral;
          ctx.globalAlpha = intensity;
          roundRect(ctx, cuvX + 3, cy - 28, cuvW - 6, cuvH - 21, 4); ctx.fill();
          ctx.globalAlpha = 1;

          // Transmitted beam I (dimmer as OD increases)
          var trans = Math.pow(10, -testOD);
          ctx.fillStyle = cfg.beamColor || theme.teal;
          ctx.globalAlpha = clamp(trans * 0.85, 0.08, 0.85);
          ctx.fillRect(cuvX + cuvW, cy - 8, 76, 16);
          ctx.globalAlpha = 1;

          // Detector
          ctx.fillStyle = theme.purple;
          roundRect(ctx, cuvX + cuvW + 76, cy - 24, 54, 48, 8); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px monospace";
          ctx.fillText("OD", cuvX + cuvW + 103, cy - 4);
          ctx.fillText(testOD.toFixed(2), cuvX + cuvW + 103, cy + 12);

          // Beer-Lambert Standard Curve on right
          var gx = Math.max(365, w * 0.56), gw = w - gx - 24, gy = 34, gh = h - 72;
          if (gw > 90) {
            ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
            ctx.strokeStyle = theme.blue; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.moveTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + 8); ctx.stroke();
            var px = gx + clamp((state.conc - (cfg.minConc || 0)) / ((cfg.maxConc || 300) - (cfg.minConc || 0)), 0, 1) * gw;
            var py = gy + gh - clamp((state.conc - (cfg.minConc || 0)) / ((cfg.maxConc || 300) - (cfg.minConc || 0)), 0, 1) * (gh - 8);
            ctx.fillStyle = theme.coral;
            ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = theme.text; ctx.font = "700 12px monospace"; ctx.textAlign = "center";
            ctx.fillText("Beer-Lambert Law (A = εcl)", gx + gw / 2, 22);
          }
          ctx.fillStyle = theme.text; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "left";
          ctx.fillText("Cuvette (" + (cfg.chromogenName || "Chromogen") + ") · λ = " + (cfg.wavelength || 540) + " nm", 24, 24);
          return;
        }

        if (kind === "titration") {
          var ep = smp.endpoint || cfg.endpoint || 12.5;
          var reached = state.vol >= ep;
          var bx = w * 0.28;

          // Burette
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 2;
          roundRect(ctx, bx - 10, 22, 20, 110, 4); ctx.stroke();
          var fillH = 95 * (1 - clamp(state.vol / (cfg.maxVol || 25), 0, 1));
          ctx.fillStyle = theme.blueLight;
          ctx.fillRect(bx - 8, 130 - fillH, 16, fillH);

          // Animated drop when titrating
          if (state.vol > 0 && state.vol < (cfg.maxVol || 25)) {
            var dy = 136 + ((t * 90) % 44);
            ctx.fillStyle = theme.blue;
            ctx.beginPath(); ctx.arc(bx, dy, 3.5, 0, Math.PI * 2); ctx.fill();
          }

          // Conical Flask
          ctx.beginPath();
          ctx.moveTo(bx - 16, 178); ctx.lineTo(bx + 16, 178);
          ctx.lineTo(bx + 54, 266); ctx.lineTo(bx - 54, 266); ctx.closePath();
          ctx.fillStyle = reached ? (cfg.endColor || "#e91e63") : (cfg.startColor || "#e3f2fd");
          ctx.fill();
          ctx.strokeStyle = theme.text; ctx.lineWidth = 2; ctx.stroke();

          ctx.fillStyle = theme.text; ctx.font = "700 13px sans-serif"; ctx.textAlign = "center";
          ctx.fillText(reached ? (cfg.endLabel || "Endpoint Reached!") : (cfg.startLabel || "Pre-Endpoint"), bx, 286);

          // Progress curve on right
          var gx2 = w * 0.52, gw2 = w - gx2 - 24, gy2 = 40, gh2 = h - 84;
          ctx.strokeStyle = theme.border; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(gx2, gy2); ctx.lineTo(gx2, gy2 + gh2); ctx.lineTo(gx2 + gw2, gy2 + gh2); ctx.stroke();
          ctx.strokeStyle = theme.teal; ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (var i = 0; i <= 60; i++) {
            var v = (i / 60) * (cfg.maxVol || 25);
            var yNorm = 1 / (1 + Math.exp(-(v - ep) * 1.4));
            var px2 = gx2 + (i / 60) * gw2;
            var py2 = gy2 + gh2 - yNorm * gh2;
            if (i === 0) ctx.moveTo(px2, py2); else ctx.lineTo(px2, py2);
          }
          ctx.stroke();
          var curX = gx2 + (state.vol / (cfg.maxVol || 25)) * gw2;
          var curY = gy2 + gh2 - (1 / (1 + Math.exp(-(state.vol - ep) * 1.4))) * gh2;
          ctx.fillStyle = theme.coral;
          ctx.beginPath(); ctx.arc(curX, curY, 6.5, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = theme.text; ctx.font = "700 12.5px monospace";
          ctx.fillText("Titration Curve (Endpoint = " + ep + " mL)", gx2 + gw2 / 2, 24);
          ctx.textAlign = "left";
          return;
        }

        if (kind === "test_rack") {
          var tubes = smp.tubes || [];
          var n = tubes.length || 1;
          var stepW = (w - 40) / n;
          tubes.forEach(function (tb, idx) {
            var tx = 20 + stepW * idx + stepW * 0.5;
            var ty = 52, th = 148, tw = Math.min(44, stepW * 0.55);
            // Tube glass
            ctx.strokeStyle = theme.blue; ctx.lineWidth = 2;
            roundRect(ctx, tx - tw / 2, ty, tw, th, 16); ctx.stroke();
            // Liquid
            ctx.fillStyle = state.heated ? (tb.color || theme.blueLight) : (theme.isDark ? "rgba(255,255,255,0.12)" : "rgba(21,101,192,0.10)");
            roundRect(ctx, tx - tw / 2 + 2, ty + 48, tw - 4, th - 50, 14); ctx.fill();
            // Optional interface ring (purple for Molisch/Rothera; white for Heller)
            if (state.heated && tb.ring) {
              ctx.fillStyle = tb.ring;
              ctx.fillRect(tx - tw / 2 + 2, ty + 78, tw - 4, 9);
            }
            ctx.fillStyle = theme.text; ctx.font = "700 12.5px sans-serif"; ctx.textAlign = "center";
            ctx.fillText(tb.name, tx, ty - 10);
            ctx.fillStyle = state.heated ? (tb.pos ? theme.ok : theme.muted) : theme.faint;
            ctx.font = "700 13px monospace";
            ctx.fillText(state.heated ? (tb.pos ? "POSITIVE (+)" : "Negative (-)") : "Ready", tx, ty + th + 18);
            if (state.heated && tb.obs) {
              ctx.fillStyle = theme.muted; ctx.font = "600 12.5px sans-serif";
              ctx.fillText(tb.obs, tx, ty + th + 32);
            }
          });
          ctx.textAlign = "left";
          return;
        }

        if (kind === "flame") {
          var isK = state.sampleIdx === 1;
          var flameCol = isK ? "#ab47bc" : "#ffb300";
          var intensity2 = clamp(state.conc / (isK ? 10 : 170), 0.15, 1);
          var fx = w * 0.34, fy = h * 0.72;

          // Burner base
          ctx.fillStyle = theme.muted;
          roundRect(ctx, fx - 24, fy, 48, 36, 6); ctx.fill();
          // Animated flame
          var fh = 75 + intensity2 * 65 + Math.sin(t * 14) * 5;
          ctx.fillStyle = flameCol;
          ctx.globalAlpha = 0.85;
          ctx.beginPath();
          ctx.moveTo(fx - 20, fy);
          ctx.quadraticCurveTo(fx - 26, fy - fh * 0.6, fx, fy - fh);
          ctx.quadraticCurveTo(fx + 26, fy - fh * 0.6, fx + 20, fy);
          ctx.closePath(); ctx.fill();
          ctx.globalAlpha = 1;

          // Optical filter + meter
          ctx.fillStyle = theme.blue;
          roundRect(ctx, w * 0.58, h * 0.36, 150, 74, 12); ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 12px monospace"; ctx.textAlign = "center";
          ctx.fillText(isK ? "Filter: 766 nm" : "Filter: 589 nm", w * 0.58 + 75, h * 0.36 + 28);
          ctx.font = "700 16px monospace";
          ctx.fillText((isK ? Number(state.conc).toFixed(1) : Math.round(state.conc)) + " mEq/L", w * 0.58 + 75, h * 0.36 + 54);
          ctx.textAlign = "left";
          return;
        }

        if (kind === "chromatography") {
          var cx2 = w * 0.5, cw2 = Math.min(340, w - 60), ch2 = h - 54, cy2 = 28;
          ctx.strokeStyle = theme.blue; ctx.lineWidth = 2;
          roundRect(ctx, cx2 - cw2 / 2, cy2, cw2, ch2, 8); ctx.stroke();

          var baseY = cy2 + ch2 - 30;
          var topFrontY = baseY - state.solventProg * (ch2 - 58);
          // Solvent migration tint
          ctx.fillStyle = theme.isDark ? "rgba(21,101,192,0.14)" : "rgba(21,101,192,0.08)";
          ctx.fillRect(cx2 - cw2 / 2 + 2, topFrontY, cw2 - 4, baseY - topFrontY);

          // Origin & Solvent Front lines
          ctx.strokeStyle = theme.muted; ctx.setLineDash([4, 4]);
          ctx.beginPath(); ctx.moveTo(cx2 - cw2 / 2, baseY); ctx.lineTo(cx2 + cw2 / 2, baseY); ctx.stroke();
          ctx.strokeStyle = theme.teal;
          ctx.beginPath(); ctx.moveTo(cx2 - cw2 / 2, topFrontY); ctx.lineTo(cx2 + cw2 / 2, topFrontY); ctx.stroke();
          ctx.setLineDash([]);

          var spots = cfg.spots || [
            { name: "Leu", rf: 0.73, col: "#7b1fa2" },
            { name: "Val", rf: 0.60, col: "#7b1fa2" },
            { name: "Ala", rf: 0.38, col: "#7b1fa2" },
            { name: "Pro", rf: 0.43, col: "#f9a825" },
            { name: "Lys", rf: 0.14, col: "#7b1fa2" }
          ];
          spots.forEach(function (sp, idx) {
            var sx = (cx2 - cw2 / 2) + ((idx + 1) / (spots.length + 1)) * cw2;
            var sy = baseY - (sp.rf * state.solventProg * (ch2 - 58));
            if (state.heated) {
              ctx.fillStyle = sp.col || "#7b1fa2";
              ctx.beginPath(); ctx.arc(sx, sy, 9, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = theme.text; ctx.font = "700 13px monospace"; ctx.textAlign = "center";
              ctx.fillText(sp.name + " (" + sp.rf + ")", sx, sy - 12);
            } else {
              ctx.strokeStyle = theme.faint;
              ctx.beginPath(); ctx.arc(sx, sy, 7, 0, Math.PI * 2); ctx.stroke();
            }
          });
          ctx.fillStyle = theme.muted; ctx.font = "600 11.5px monospace"; ctx.textAlign = "left";
          ctx.fillText("Origin Line (Sample Spotted)", cx2 - cw2 / 2 + 8, baseY + 16);
          ctx.fillStyle = theme.teal;
          ctx.fillText("Solvent Front (" + Math.round(state.solventProg * 100) + "%)", cx2 - cw2 / 2 + 8, topFrontY - 5);
        }
      }
    };
  }

  /* ============================================================
     ENGINE REGISTRY & INSTANCE CONTROLLER
     ============================================================ */
  var ENGINES = {
    membrane: createMembraneEngine,
    donnan: createDonnanEngine,
    henderson: createHendersonEngine,
    enzyme: createEnzymeEngine,
    etc: createEtcEngine,
    pathway: createPathwayEngine,
    molecule: createMoleculeEngine,
    clinical: createClinicalEngine,
    lab: createLabEngine
  };

  function mountInstance(container, simCfg, isModal) {
    var factory = ENGINES[simCfg.engine];
    if (!factory) return null;

    var state = {};
    var engine = factory(simCfg, state);
    var running = true;
    var time = 0;
    var lastTs = 0;
    var rafId = null;

    var uid = "biosim-" + (++simIdCounter);

    function renderShell() {
      var tabsHtml = "";
      if (engine.tabs && engine.tabs.length) {
        tabsHtml = '<div class="biosim-tabs" role="tablist">' +
          engine.tabs.map(function (tb, idx) {
            var active = (state.mode === tb.id || state.tab === tb.id || state.blocker === tb.id || state.caseId === tb.id || String(state.sampleIdx) === tb.id || (idx === 0 && !state.mode && !state.tab && !state.blocker && !state.caseId && state.sampleIdx == null));
            return '<button type="button" class="biosim-tab' + (active ? ' is-active' : '') + '" data-tab="' + esc(tb.id) + '">' + esc(tb.label) + '</button>';
          }).join("") + '</div>';
      }

      container.innerHTML =
        '<div class="biosim-card" id="' + uid + '">' +
          '<div class="biosim-head">' +
            '<div class="biosim-head__left">' +
              '<span class="biosim-badge"><span class="biosim-badge__dot" data-role="dot"></span>Interactive Biochemistry Lab</span>' +
              '<h4 class="biosim-title">' + esc(simCfg.title) + '</h4>' +
              (simCfg.subtitle ? '<p class="biosim-sub">' + esc(simCfg.subtitle) + '</p>' : '') +
            '</div>' +
            '<div class="biosim-head__actions">' +
              '<button type="button" class="biosim-btn" data-act="play" title="Play / Pause">⏸ Pause</button>' +
              '<button type="button" class="biosim-btn" data-act="reset" title="Reset simulation">↺ Reset</button>' +
              (isModal
                ? '<button type="button" class="biosim-btn biosim-btn--primary" data-act="close">✕ Close</button>'
                : '<button type="button" class="biosim-btn" data-act="expand" title="Expand Full-Screen">⤢ Expand</button>') +
            '</div>' +
          '</div>' +
          tabsHtml +
          '<div class="biosim-stage-wrap"><canvas class="biosim-canvas"></canvas></div>' +
          '<div class="biosim-controls" data-role="controls"></div>' +
          '<div class="biosim-metrics" data-role="metrics"></div>' +
          '<div class="biosim-inspector" data-role="inspector"></div>' +
        '</div>';
    }

    function renderControls() {
      var wrap = container.querySelector('[data-role="controls"]');
      if (!wrap) return;
      var ctrls = (typeof engine.controls === "function") ? engine.controls() : [];
      if (!ctrls || !ctrls.length) {
        wrap.style.display = "none";
        return;
      }
      wrap.style.display = "";
      wrap.innerHTML = ctrls.map(function (c) {
        if (c.type === "slider") {
          var val = state[c.key];
          return '<div class="biosim-ctrl">' +
            '<div class="biosim-ctrl__row"><span>' + esc(c.label) + '</span><span class="biosim-ctrl__val" data-val="' + esc(c.key) + '">' + esc(val) + esc(c.unit || "") + '</span></div>' +
            '<input type="range" class="biosim-slider" data-key="' + esc(c.key) + '" data-unit="' + esc(c.unit || "") + '" min="' + c.min + '" max="' + c.max + '" step="' + (c.step || 1) + '" value="' + val + '">' +
          '</div>';
        }
        if (c.type === "select") {
          return '<div class="biosim-ctrl">' +
            '<div class="biosim-ctrl__row"><span>' + esc(c.label) + '</span></div>' +
            '<select class="biosim-select" data-key="' + esc(c.key) + '">' +
              (c.options || []).map(function (o) {
                return '<option value="' + esc(o.val) + '"' + (String(state[c.key]) === String(o.val) ? ' selected' : '') + '>' + esc(o.label) + '</option>';
              }).join("") +
            '</select>' +
          '</div>';
        }
        if (c.type === "toggle") {
          var isOn = !!state[c.key];
          return '<div class="biosim-ctrl">' +
            '<div class="biosim-ctrl__row"><span>Interactive Toggle</span></div>' +
            '<div class="biosim-toggle-row">' +
              '<button type="button" class="biosim-chip' + (isOn ? (' ' + (c.onClass || 'is-on')) : '') + '" data-toggle="' + esc(c.key) + '">' + (isOn ? '✓ ' : '') + esc(c.label) + '</button>' +
            '</div>' +
          '</div>';
        }
        return "";
      }).join("");
    }

    function updateReadouts() {
      var mWrap = container.querySelector('[data-role="metrics"]');
      if (mWrap && typeof engine.metrics === "function") {
        var ms = engine.metrics() || [];
        mWrap.style.display = ms.length ? "" : "none";
        mWrap.innerHTML = ms.map(function (m) {
          return '<div class="biosim-metric">' +
            '<span class="biosim-metric__label">' + esc(m.label) + '</span>' +
            '<span class="biosim-metric__val ' + esc(m.cls || "") + '">' + esc(m.val) + '</span>' +
          '</div>';
        }).join("");
      }
      var iWrap = container.querySelector('[data-role="inspector"]');
      if (iWrap && typeof engine.inspector === "function") {
        iWrap.innerHTML = engine.inspector();
      }
    }

    renderShell();
    renderControls();
    updateReadouts();

    var canvas = container.querySelector(".biosim-canvas");

    // Wire events
    container.addEventListener("click", function (ev) {
      var tabBtn = ev.target.closest("[data-tab]");
      if (tabBtn) {
        var tid = tabBtn.getAttribute("data-tab");
        if (typeof engine.onTab === "function") engine.onTab(tid);
        else state.mode = tid;
        container.querySelectorAll(".biosim-tab").forEach(function (b) {
          b.classList.toggle("is-active", b === tabBtn);
        });
        renderControls();
        updateReadouts();
        return;
      }

      var tog = ev.target.closest("[data-toggle]");
      if (tog) {
        var k = tog.getAttribute("data-toggle");
        state[k] = !state[k];
        renderControls();
        updateReadouts();
        return;
      }

      var actBtn = ev.target.closest("[data-act]");
      if (actBtn) {
        var act = actBtn.getAttribute("data-act");
        if (act === "play") {
          running = !running;
          actBtn.textContent = running ? "⏸ Pause" : "▶ Play";
          var dot = container.querySelector('[data-role="dot"]');
          if (dot) dot.classList.toggle("is-paused", !running);
        } else if (act === "reset") {
          state = {};
          engine = factory(simCfg, state);
          time = 0;
          renderShell();
          renderControls();
          updateReadouts();
          canvas = container.querySelector(".biosim-canvas");
          wireCanvasClick();
        } else if (act === "expand") {
          openModal(simCfg);
        } else if (act === "close") {
          closeModal();
        }
      }
    });

    container.addEventListener("input", function (ev) {
      var el = ev.target;
      if (el.matches(".biosim-slider")) {
        var k = el.getAttribute("data-key");
        var u = el.getAttribute("data-unit") || "";
        state[k] = parseFloat(el.value);
        var lbl = container.querySelector('[data-val="' + k + '"]');
        if (lbl) lbl.textContent = state[k] + u;
        updateReadouts();
      } else if (el.matches(".biosim-select")) {
        var sk = el.getAttribute("data-key");
        state[sk] = el.value;
        updateReadouts();
      }
    });

    function wireCanvasClick() {
      if (!canvas) return;
      if (typeof engine.onClick === "function") {
        canvas.addEventListener("click", function (ev) {
          var rect = canvas.getBoundingClientRect();
          var nx = (ev.clientX - rect.left) / Math.max(1, rect.width);
          var ny = (ev.clientY - rect.top) / Math.max(1, rect.height);
          if (engine.onClick(nx, ny)) updateReadouts();
        });
      }
      if (typeof engine.onDrag === "function") {
        var dragging = false, lx = 0, ly = 0;
        canvas.style.cursor = "grab";
        canvas.addEventListener("pointerdown", function (ev) {
          dragging = true; lx = ev.clientX; ly = ev.clientY;
          canvas.style.cursor = "grabbing";
          if (canvas.setPointerCapture) canvas.setPointerCapture(ev.pointerId);
        });
        canvas.addEventListener("pointermove", function (ev) {
          if (!dragging) return;
          var dx = ev.clientX - lx, dy = ev.clientY - ly;
          lx = ev.clientX; ly = ev.clientY;
          engine.onDrag(dx, dy);
        });
        function endDrag() { dragging = false; canvas.style.cursor = "grab"; }
        canvas.addEventListener("pointerup", endDrag);
        canvas.addEventListener("pointercancel", endDrag);
      }
    }
    wireCanvasClick();

    var metricTick = 0;
    function frame(ts) {
      if (!container.isConnected) {
        destroy();
        return;
      }
      var dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0.016;
      lastTs = ts;
      if (running) {
        time += dt;
        if (typeof engine.step === "function") engine.step(dt);
        metricTick += dt;
        if (metricTick > 0.35) {
          metricTick = 0;
          updateReadouts();
        }
      }
      if (canvas && canvas.isConnected) {
        var s = setupCanvas(canvas);
        engine.draw(s.ctx, s.w, s.h, time, getTheme());
      }
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    function destroy() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    return { destroy: destroy };
  }

  /* ---- Full-Screen Expand Modal ---- */
  function ensureModal() {
    var ov = document.getElementById("biosim-modal-overlay");
    if (ov) return ov;
    ov = document.createElement("div");
    ov.id = "biosim-modal-overlay";
    ov.className = "biosim-modal-overlay";
    ov.innerHTML = '<div class="biosim-modal" id="biosim-modal-body" role="dialog" aria-modal="true" aria-label="Interactive Biochemistry Simulation"></div>';
    ov.addEventListener("click", function (ev) {
      if (ev.target === ov) closeModal();
    });
    document.body.appendChild(ov);
    return ov;
  }

  function openModal(simCfg) {
    var ov = ensureModal();
    var body = document.getElementById("biosim-modal-body");
    if (modalInstance) { modalInstance.destroy(); modalInstance = null; }
    ov.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalInstance = mountInstance(body, simCfg, true);
  }

  function closeModal() {
    var ov = document.getElementById("biosim-modal-overlay");
    if (modalInstance) { modalInstance.destroy(); modalInstance = null; }
    if (ov) ov.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") closeModal();
  });

  /* ============================================================
     PUBLIC API — Called by app.js during renderTopic()
     ============================================================ */
  function getTopicSims(topicId) {
    return (window.topicSims && window.topicSims[topicId]) ? window.topicSims[topicId] : [];
  }

  function placeholderHtml(topicId, simIndex) {
    return '<div class="biosim-mount" data-biosim-topic="' + esc(topicId) + '" data-biosim-idx="' + simIndex + '"></div>';
  }

  function injectSectionSims(html, topicId) {
    var sims = getTopicSims(topicId);
    if (!sims.length || !html) return { html: html, remaining: sims };

    var out = html;
    var used = {};
    sims.forEach(function (sim, idx) {
      if (!sim.sectionMatch) return;
      var pos = out.indexOf(sim.sectionMatch);
      if (pos === -1) return;
      var h4Close = out.indexOf("</h4>", pos);
      if (h4Close !== -1 && h4Close - pos < 160) {
        out = out.slice(0, h4Close + 5) + placeholderHtml(topicId, idx) + out.slice(h4Close + 5);
        used[idx] = true;
      }
    });

    var remaining = [];
    sims.forEach(function (sim, idx) {
      if (!used[idx]) remaining.push({ sim: sim, idx: idx });
    });
    return { html: out, remaining: remaining };
  }

  function unmountAll() {
    activeInstances.forEach(function (inst) { if (inst && inst.destroy) inst.destroy(); });
    activeInstances = [];
  }

  function mountAll(rootEl) {
    unmountAll();
    var scope = rootEl || document;
    var mounts = scope.querySelectorAll(".biosim-mount[data-biosim-topic]");
    mounts.forEach(function (el) {
      var tid = el.getAttribute("data-biosim-topic");
      var idx = parseInt(el.getAttribute("data-biosim-idx"), 10);
      var sims = getTopicSims(tid);
      if (sims[idx]) {
        var inst = mountInstance(el, sims[idx], false);
        if (inst) activeInstances.push(inst);
      }
    });
  }

  window.BioSim = {
    registerEngine: function (name, factory) { ENGINES[name] = factory; },
    getTopicSims: getTopicSims,
    placeholderHtml: placeholderHtml,
    injectSectionSims: injectSectionSims,
    mountAll: mountAll,
    unmountAll: unmountAll,
    closeModal: closeModal
  };
})();
