/* ============================================================
   data-sims-practical.js — Practical Units 1–3 Virtual Labs (22)
   p1-t01..p1-t07, p2-t01..p2-t08, p3-t01..p3-t07
   ============================================================ */
(function () {
  var S = window.topicSims = window.topicSims || {};

  /* ==================== PRACTICAL UNIT 1 ==================== */
  S["p1-t01"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Solution Concentration, Molarity & Beer-Lambert Dilution Lab",
      subtitle: "Vary solute concentration to verify linear absorbance (A = εcl) and SI molar/mg% conversions.",
      wavelength: 540, stdConc: 100, stdOD: 0.40, defaultConc: 100, minConc: 10, maxConc: 250, stepConc: 10,
      unit: "mmol/L", refMin: 10, refMax: 250,
      chromogen: "#1565c0", chromogenName: "Standard Chromophore",
      info: "Use C₁V₁ = C₂V₂ for dilutions. Molarity (M) = moles/L; Normality (N) = Molarity × n-factor (e.g., 1 M H₂SO₄ = 2 N H₂SO₄)."
    }
  ];

  S["p1-t02"] = [
    {
      engine: "lab",
      kind: "titration",
      title: "Acid–Alkali Standardization Burette Lab (0.1 N Oxalic Acid vs NaOH)",
      subtitle: "Add NaOH from the burette into 10 mL of 0.1 N Oxalic Acid + Phenolphthalein until the permanent pale-pink endpoint (N₁V₁ = N₂V₂).",
      maxVol: 20, endpoint: 10.0, indicator: "Phenolphthalein (pH 8.3–10)",
      startColor: "#e3f2fd", endColor: "#f48fb1",
      startLabel: "Colorless (Acidic Oxalic Acid)", endLabel: "Permanent Pale Pink Endpoint!",
      resultLabel: "Calc. NaOH Normality",
      calcFn: function (ep, v) { return v > 0 ? (1.0 / v).toFixed(3) + " N" : "—"; },
      samples: [
        { label: "Standard ~0.10 N NaOH (EP 10 mL)", endpoint: 10.0, info: "Oxalic acid (H₂C₂O₄·2H₂O, Eq wt = 63 g) is a primary standard. NaOH is hygroscopic (secondary standard) and must be standardized before use." },
        { label: "Dilute ~0.08 N NaOH (EP 12.5 mL)", endpoint: 12.5, info: "Requires 12.5 mL NaOH to neutralize 10 mL of 0.1 N Oxalic Acid → N₂ = (0.1 × 10) / 12.5 = 0.080 N." }
      ]
    }
  ];

  S["p1-t03"] = [
    {
      engine: "henderson",
      mode: "titration",
      title: "Buffer Preparation & Henderson-Hasselbalch Titration Curve Lab",
      subtitle: "Select Acetate, Phosphate, or Bicarbonate buffer and titrate to observe the flat buffering plateau around pH = pKa ± 1.",
      bufferKey: "acetate",
      ratioPct: 50
    }
  ];

  S["p1-t04"] = [
    {
      engine: "lab",
      kind: "test_rack",
      title: "Qualitative Carbohydrate Identification Test-Tube Rack",
      subtitle: "Select an unknown carbohydrate sample and toggle reagents + heating to run Molisch, Benedict's, Barfoed's, Seliwanoff's, and Iodine tests!",
      heatLabel: "Add Reagents & Boil in Water Bath",
      samples: [
        {
          label: "Unknown A: D-Glucose", keyPos: "Benedict (+) & Barfoed (+) fast", inference: "Reducing Aldomonosaccharide",
          info: "Glucose is a reducing monosaccharide: reduces Cu²⁺ to brick-red Cu₂O rapidly in both alkaline Benedict's and weakly acidic Barfoed's (<2 min).",
          tubes: [
            { name: "Molisch", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Violet Ring" },
            { name: "Benedict", pos: true, color: "#d84315", obs: "Brick-Red Ppt" },
            { name: "Barfoed", pos: true, color: "#bf360c", obs: "Red Ppt (2 min)" },
            { name: "Seliwanoff", pos: false, color: "#fff8e1", obs: "No Cherry Red" },
            { name: "Iodine", pos: false, color: "#ffe082", obs: "Yellow (No Blue)" }
          ]
        },
        {
          label: "Unknown B: D-Fructose", keyPos: "Seliwanoff (+) Cherry-Red!", inference: "Reducing Ketohexose",
          info: "Fructose dehydrates rapidly in hot HCl + resorcinol (Seliwanoff's test) forming a bright cherry-red color within 1 minute!",
          tubes: [
            { name: "Molisch", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Violet Ring" },
            { name: "Benedict", pos: true, color: "#d84315", obs: "Brick-Red Ppt" },
            { name: "Barfoed", pos: true, color: "#bf360c", obs: "Red Ppt (2 min)" },
            { name: "Seliwanoff", pos: true, color: "#c62828", obs: "Cherry Red!" },
            { name: "Iodine", pos: false, color: "#ffe082", obs: "Yellow" }
          ]
        },
        {
          label: "Unknown C: Lactose", keyPos: "Benedict (+) / Barfoed (-)", inference: "Reducing Disaccharide",
          info: "Lactose reduces Benedict's (free anomeric C1 on glucose) but FAILS rapid Barfoed's (disaccharide). Forms powder-puff lactosazone crystals!",
          tubes: [
            { name: "Molisch", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Violet Ring" },
            { name: "Benedict", pos: true, color: "#e65100", obs: "Orange-Red Ppt" },
            { name: "Barfoed", pos: false, color: "#1976d2", obs: "Remains Blue" },
            { name: "Seliwanoff", pos: false, color: "#fff8e1", obs: "Negative" },
            { name: "Iodine", pos: false, color: "#ffe082", obs: "Yellow" }
          ]
        },
        {
          label: "Unknown D: Sucrose", keyPos: "Molisch (+) / Benedict (-)!", inference: "Non-Reducing Disaccharide",
          info: "Sucrose has both anomeric carbons locked [α(1→2)β], so Benedict's is NEGATIVE! Boiling with HCl in Seliwanoff's hydrolyzes it to release fructose → Cherry Red!",
          tubes: [
            { name: "Molisch", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Violet Ring" },
            { name: "Benedict", pos: false, color: "#1565c0", obs: "Remains Blue!" },
            { name: "Barfoed", pos: false, color: "#1976d2", obs: "Remains Blue" },
            { name: "Seliwanoff", pos: true, color: "#d32f2f", obs: "Cherry Red (Hydrolyzed)" },
            { name: "Iodine", pos: false, color: "#ffe082", obs: "Yellow" }
          ]
        },
        {
          label: "Unknown E: Starch", keyPos: "Iodine (+) Deep Blue!", inference: "Non-Reducing Polysaccharide",
          info: "Amylose helices trap triiodide ions (I₃⁻) yielding deep blue color (disappears on heating, reappears on cooling). Benedict's is negative.",
          tubes: [
            { name: "Molisch", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Violet Ring" },
            { name: "Benedict", pos: false, color: "#1565c0", obs: "Remains Blue" },
            { name: "Barfoed", pos: false, color: "#1976d2", obs: "Remains Blue" },
            { name: "Seliwanoff", pos: false, color: "#fff8e1", obs: "Negative" },
            { name: "Iodine", pos: true, color: "#0d47a1", obs: "Deep Blue!" }
          ]
        }
      ]
    }
  ];

  S["p1-t05"] = [
    {
      engine: "lab",
      kind: "titration",
      title: "Acid Number of an Oil Titration Lab (Free Fatty Acid Rancidity)",
      subtitle: "Titrate 5 g of oil in neutral ethanol with 0.1 N KOH (Phenolphthalein) to calculate mg KOH required per gram of fat.",
      maxVol: 20, indicator: "Phenolphthalein",
      startColor: "#fff9c4", endColor: "#f48fb1",
      startLabel: "Oil in Neutral Alcohol", endLabel: "Faint Pink Endpoint!",
      resultLabel: "Acid Number (mg KOH/g)",
      calcFn: function (ep, v) { return ((v * 5.61) / 5).toFixed(2) + " mg/g"; },
      samples: [
        { label: "Fresh Edible Oil (Low FFA)", endpoint: 1.5, info: "Fresh unhydrolyzed oil has very low free fatty acids (Acid Number < 2 mg KOH/g)." },
        { label: "Rancid / Hydrolyzed Oil (High FFA)", endpoint: 11.5, info: "Lipase hydrolysis and storage rancidity liberate free fatty acids → high KOH consumption (Acid Number > 10 mg KOH/g — unfit for animal feed!)." }
      ]
    }
  ];

  S["p1-t06"] = [
    {
      engine: "lab",
      kind: "test_rack",
      title: "Colour & Precipitation Reactions of Proteins Bench",
      subtitle: "Test Albumin, Gelatin (lacks Tyr/Trp!), and Casein across Biuret, Ninhydrin, Xanthoproteic, Millon's, and Heat Coagulation.",
      heatLabel: "Run Protein Colour & Heat Tests",
      samples: [
        {
          label: "Egg Albumin (Complete Protein)", keyPos: "All 5 Tests Positive (+)", inference: "Heat-Coagulable Globular Protein",
          info: "Albumin has ≥2 peptide bonds (Biuret violet), aromatic Tyr/Trp (Xanthoproteic orange, Millon's red), and coagulates irreversibly on boiling!",
          tubes: [
            { name: "Biuret", pos: true, color: "#7b1fa2", obs: "Violet-Purple" },
            { name: "Ninhydrin", pos: true, color: "#4a148c", obs: "Ruhemann Purple" },
            { name: "Xanthoproteic", pos: true, color: "#ef6c00", obs: "Deep Orange" },
            { name: "Millon's (Tyr)", pos: true, color: "#c62828", obs: "Brick-Red Ppt" },
            { name: "Heat Coag.", pos: true, color: "#eceff1", obs: "White Coagulum" }
          ]
        },
        {
          label: "Gelatin (Incomplete Protein!)", keyPos: "Biuret (+) / Millon's (-)!", inference: "Lacks Tyrosine & Tryptophan",
          info: "EXAM FAVORITE: Gelatin is derived from collagen and is devoid of Tryptophan and very poor in Tyrosine → Millon's & Hopkins-Cole are NEGATIVE, and it does NOT coagulate on heating!",
          tubes: [
            { name: "Biuret", pos: true, color: "#7b1fa2", obs: "Violet-Purple" },
            { name: "Ninhydrin", pos: true, color: "#4a148c", obs: "Purple" },
            { name: "Xanthoproteic", pos: false, color: "#fffde7", obs: "Faint/Negative" },
            { name: "Millon's (Tyr)", pos: false, color: "#e3f2fd", obs: "NEGATIVE (-)" },
            { name: "Heat Coag.", pos: false, color: "#e3f2fd", obs: "No Coagulum" }
          ]
        },
        {
          label: "Milk Casein (Phosphoprotein)", keyPos: "Isoelectric Ppt at pH 4.6", inference: "Phosphoprotein (Non-Heat Coag.)",
          info: "Casein contains Tyrosine/Tryptophan (positive aromatic tests) and precipitates cleanly at its isoelectric pH 4.6 (bromocresol green), but does not heat-coagulate like albumin.",
          tubes: [
            { name: "Biuret", pos: true, color: "#7b1fa2", obs: "Violet-Purple" },
            { name: "Ninhydrin", pos: true, color: "#4a148c", obs: "Purple" },
            { name: "Xanthoproteic", pos: true, color: "#ef6c00", obs: "Orange" },
            { name: "Millon's (Tyr)", pos: true, color: "#c62828", obs: "Red Ppt" },
            { name: "pH 4.6 Ppt", pos: true, color: "#f5f5f5", obs: "Curdy Ppt (pI)" }
          ]
        }
      ]
    }
  ];

  S["p1-t07"] = [
    {
      engine: "lab",
      kind: "titration",
      title: "Sorensen Formol Titration of Amino Acids",
      subtitle: "Neutralized formaldehyde blocks the basic -NH₂ group (forming dimethylol derivative), allowing quantitative titration of -COOH with 0.1 N NaOH.",
      maxVol: 20, indicator: "Phenolphthalein",
      startColor: "#e8f5e9", endColor: "#f06292",
      startLabel: "Zwitterion + Neutral HCHO", endLabel: "Pink Endpoint (-COOH Neutralized)",
      resultLabel: "Glycine Conc. (g/L)",
      calcFn: function (ep, v) { return ((v * 0.1 * 75.07) / 10).toFixed(2) + " g/L"; },
      samples: [
        { label: "0.10 M Glycine (EP 10 mL)", endpoint: 10.0, info: "Without HCHO, amino acids exist as zwitterions (NH₃⁺-CHR-COO⁻) that cannot be titrated sharply with NaOH. Formaldehyde lowers pKa of -NH₃⁺ so -COOH titrates cleanly!" },
        { label: "0.15 M Glycine (EP 15 mL)", endpoint: 15.0, info: "1 mL of 0.1 N NaOH ≡ 7.507 mg Glycine (MW 75.07)." }
      ]
    }
  ];

  /* ==================== PRACTICAL UNIT 2 ==================== */
  S["p2-t01"] = [
    {
      engine: "enzyme",
      initialMode: "factors",
      tabs: [{ id: "factors", label: "Amylase Temp & pH Optimum" }],
      title: "Effect of Temperature & pH on Amylase Activity Lab",
      subtitle: "Find optimal temperature (~37–40 °C) and optimal pH (6.8 for salivary amylase) — watch thermal denaturation above 55 °C!",
      temp: 37, ph: 6.8, optPh: 6.8
    }
  ];

  S["p2-t02"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Blood / Plasma Glucose Estimation (GOD-POD Colorimeter, 505 nm)",
      subtitle: "Glucose Oxidase → H₂O₂ + Peroxidase + 4-AAP/Phenol → Pink Quinoneimine dye measured at 505 nm.",
      wavelength: 505, stdConc: 100, stdOD: 0.36, defaultConc: 90, minConc: 20, maxConc: 420, stepConc: 10,
      unit: "mg/dL", refMin: 70, refMax: 115,
      chromogen: "#e91e63", chromogenName: "Pink Quinoneimine",
      info: "Enzymatic GOD-POD method is specific for β-D-glucose (unlike older Folin-Wu which overestimated due to non-glucose reducing substances). Collect blood in NaF + K-oxalate!"
    }
  ];

  S["p2-t03"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Serum Total Protein (Biuret 540 nm) & Mineral Colorimetry Lab",
      subtitle: "Cu²⁺ in alkaline medium chelates peptide bonds forming a violet complex proportional to total serum protein (normal 6.0–7.8 g/dL).",
      wavelength: 540, stdConc: 6.0, stdOD: 0.32, defaultConc: 6.8, minConc: 2.0, maxConc: 11.0, stepConc: 0.2,
      unit: "g/dL", refMin: 5.8, refMax: 7.8,
      chromogen: "#7b1fa2", chromogenName: "Violet Cu-Peptide Complex",
      info: "Biuret requires ≥2 peptide bonds (free amino acids & dipeptides are negative). Phosphate uses Fiske-Subbarow (molybdenum blue, 660 nm); Calcium uses O-Cresolphthalein (570 nm)."
    }
  ];

  S["p2-t04"] = [
    {
      engine: "lab",
      kind: "titration",
      title: "Ascorbic Acid (Vitamin C) Estimation by 2,6-DCPIP Titration",
      subtitle: "Ascorbic acid reduces blue 2,6-DCPIP dye to colorless leuco-dye; in metaphosphoric acid, excess dye turns persistent faint pink!",
      maxVol: 20, indicator: "2,6-DCPIP (Self-Indicator)",
      startColor: "#f5f5f5", endColor: "#f48fb1",
      startLabel: "Colorless (Dye Reduced by Vit C)", endLabel: "Persistent Faint Pink (15 sec)!",
      resultLabel: "Ascorbic Acid (mg/100mL)",
      calcFn: function (ep, v) { return (v * 2.5).toFixed(1) + " mg%"; },
      samples: [
        { label: "Fresh Citrus / Guava Extract", endpoint: 14.0, info: "Metaphosphoric acid (HPO₃) precipitates proteins and chelates Cu²⁺/Fe³⁺ to prevent catalytic oxidation of Vitamin C." },
        { label: "Boiled / Stored Sample (Oxidized)", endpoint: 4.5, info: "Heat and air oxidize L-ascorbic acid to dehydroascorbic acid → markedly lower DCPIP titre." }
      ]
    }
  ];

  S["p2-t05"] = [
    {
      engine: "lab",
      kind: "titration",
      title: "Milk Lactose Estimation by Benedict's Quantitative Titration",
      subtitle: "Titrate boiling Benedict's Quantitative Reagent (with KSCN) using deproteinized milk filtrate until blue Cu²⁺ disappears completely into white CuSCN!",
      maxVol: 25, indicator: "Cu²⁺ Blue → Chalky White CuSCN",
      startColor: "#1565c0", endColor: "#eceff1",
      startLabel: "Boiling Blue Benedict's Quant.", endLabel: "Pure Chalky White Endpoint!",
      resultLabel: "Milk Lactose (% w/v)",
      calcFn: function (ep, v) { return v > 0 ? ((67.6 / v) * 0.85).toFixed(2) + " %" : "—"; },
      samples: [
        { label: "Normal Cow Milk (~4.8% Lactose)", endpoint: 12.0, info: "25 mL Benedict's Quantitative Reagent is completely reduced by 67.6 mg Lactose (or 50 mg Glucose). KSCN precipitates white CuSCN instead of red Cu₂O so the blue disappearance is sharp!" },
        { label: "Mastitic Milk (Low Lactose ~3.2%)", endpoint: 18.0, info: "Mastitis damages mammary epithelium → lactose drops while Na⁺ and Cl⁻ leak from blood into milk (salty, alkaline milk)." }
      ]
    }
  ];

  S["p2-t06"] = [
    {
      engine: "lab",
      kind: "flame",
      title: "Flame Photometer Simulator: Serum Na⁺ (589 nm) & K⁺ (766 nm)",
      subtitle: "Switch between Sodium and Potassium optical filters and adjust serum concentration to observe characteristic flame emission spectra!",
      minConc: 2, maxConc: 160, defaultConc: 142,
      samples: [
        { label: "Sodium (Na⁺ · 589 nm Yellow)", info: "Atomized Na⁺ ions absorb thermal flame energy and emit intense 589 nm golden-yellow photons proportional to serum concentration (Normal: 135–148 mEq/L)." },
        { label: "Potassium (K⁺ · 766 nm Lilac)", info: "K⁺ emits 766 nm lilac-violet light (Normal: 3.5–5.5 mEq/L). Never use haemolyzed serum in horses/pigs/cattle — RBCs leak K⁺ causing false hyperkalaemia!" }
      ]
    }
  ];

  S["p2-t07"] = [
    {
      engine: "lab",
      kind: "chromatography",
      title: "Paper / TLC Chromatography of Amino Acids & Rf Calculator",
      subtitle: "Watch the nonpolar mobile phase carry hydrophobic amino acids farthest up the polar stationary phase, then spray Ninhydrin to reveal spots!",
      spots: [
        { name: "Leu", rf: 0.73, col: "#7b1fa2" },
        { name: "Val", rf: 0.60, col: "#7b1fa2" },
        { name: "Pro", rf: 0.43, col: "#f9a825" },
        { name: "Ala", rf: 0.38, col: "#7b1fa2" },
        { name: "Lys", rf: 0.14, col: "#7b1fa2" }
      ],
      info: "Rf = (Distance travelled by solute) / (Distance travelled by solvent front). Nonpolar Leucine moves fastest (Rf 0.73); charged polar Lysine clings to cellulose/water (Rf 0.14). Proline (imino acid) stains YELLOW with Ninhydrin while all α-amino acids stain PURPLE!"
    }
  ];

  S["p2-t08"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Vitamin A (Retinol) Estimation by Carr-Price Colorimetry (620 nm)",
      subtitle: "Retinol in dry chloroform reacts with Antimony Trichloride (SbCl₃) forming a transient blue complex read within 5–10 seconds at 620 nm.",
      wavelength: 620, stdConc: 40, stdOD: 0.38, defaultConc: 42, minConc: 5, maxConc: 90, stepConc: 5,
      unit: "µg/dL", refMin: 25, refMax: 65,
      chromogen: "#1565c0", chromogenName: "Carr-Price Blue Complex",
      info: "Strict anhydrous conditions required (water hydrolyzes SbCl₃ to white SbOCl turbidity). Plasma retinol < 20 µg/dL indicates Vitamin A deficiency (night blindness, xerophthalmia, weak calves)."
    }
  ];

  /* ==================== PRACTICAL UNIT 3 ==================== */
  S["p3-t01"] = [
    {
      engine: "lab",
      kind: "test_rack",
      title: "Pathological Urine Constituents Diagnostic Test-Tube Rack",
      subtitle: "Select a clinical veterinary urine case and run Benedict's, Rothera's, Heat-Acetic, Hay's Sulfur, Fouchet's, and Benzidine tests!",
      heatLabel: "Perform Complete Chemical Urinalysis",
      samples: [
        {
          label: "Diabetic Dog (DKA)", keyPos: "Benedict (+++) & Rothera (+++)", inference: "Glucosuria + Ketonuria",
          info: "Blood glucose > 180 mg/dL spills into urine (Benedict brick-red) alongside acetoacetate/acetone (Rothera's permanganate purple ring at ammonia interface!).",
          tubes: [
            { name: "Benedict", pos: true, color: "#bf360c", obs: "Brick-Red +++" },
            { name: "Rothera", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Purple Ring +++" },
            { name: "Heat-Acetic", pos: false, color: "#fffde7", obs: "Clear (-)" },
            { name: "Hay's (Bile)", pos: false, color: "#fffde7", obs: "Sulfur Floats" },
            { name: "Benzidine", pos: false, color: "#fffde7", obs: "No Blue (-)" }
          ]
        },
        {
          label: "Ketotic Dairy Cow", keyPos: "Rothera (+++) Purple Ring!", inference: "Bovine Ketosis (Normo/Hypoglycaemic)",
          info: "Unlike DKA, a ketotic dairy cow is HYPOGLYCAEMIC — so Benedict's is NEGATIVE while Rothera's is strongly POSITIVE!",
          tubes: [
            { name: "Benedict", pos: false, color: "#1565c0", obs: "Blue (Negative)" },
            { name: "Rothera", pos: true, color: "#f3e5f5", ring: "#6a1b9a", obs: "Deep Purple Ring!" },
            { name: "Heat-Acetic", pos: false, color: "#fffde7", obs: "Clear (-)" },
            { name: "Hay's (Bile)", pos: false, color: "#fffde7", obs: "Sulfur Floats" },
            { name: "Benzidine", pos: false, color: "#fffde7", obs: "Negative" }
          ]
        },
        {
          label: "Obstructive Jaundice", keyPos: "Hay's (+) & Fouchet (+) Green!", inference: "Bile Salts + Conjugated Bilirubinuria",
          info: "Bile salts lower surface tension causing sulfur powder to SINK in Hay's test; Fouchet's ferric chloride oxidizes conjugated bilirubin to emerald-green biliverdin!",
          tubes: [
            { name: "Benedict", pos: false, color: "#1565c0", obs: "Blue (-)" },
            { name: "Rothera", pos: false, color: "#fffde7", obs: "No Ring (-)" },
            { name: "Heat-Acetic", pos: false, color: "#fffde7", obs: "Clear (-)" },
            { name: "Hay's (Bile)", pos: true, color: "#ffe082", obs: "Sulfur SINKS! (+)" },
            { name: "Fouchet", pos: true, color: "#2e7d32", obs: "Emerald Green! (+)" }
          ]
        },
        {
          label: "Babesiosis / Nephritis", keyPos: "Benzidine (+++) & Heat-Acetic (+)", inference: "Haemoglobinuria + Proteinuria",
          info: "Haem peroxidase activity oxidizes benzidine + H₂O₂ to intense blue-green! Heat-acetic acid coagulates albumin persistently (phosphates dissolve in acetic acid, protein does not!).",
          tubes: [
            { name: "Benedict", pos: false, color: "#1565c0", obs: "Blue (-)" },
            { name: "Rothera", pos: false, color: "#fffde7", obs: "No Ring (-)" },
            { name: "Heat-Acetic", pos: true, color: "#eceff1", obs: "Persistent White Cloud" },
            { name: "Hay's (Bile)", pos: false, color: "#fffde7", obs: "Sulfur Floats" },
            { name: "Benzidine", pos: true, color: "#00695c", obs: "Deep Blue-Green!" }
          ]
        }
      ]
    }
  ];

  S["p3-t02"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Serum ALT (SGPT) & AST (SGOT) Assay Simulator (505 nm)",
      subtitle: "Reitman-Frankel 2,4-DNPH forms a reddish-brown hydrazone in alkali proportional to pyruvate/oxaloacetate generated (or UV kinetic at 340 nm).",
      wavelength: 505, stdConc: 60, stdOD: 0.28, defaultConc: 48, minConc: 10, maxConc: 400, stepConc: 10,
      unit: "U/L", refMin: 10, refMax: 90,
      chromogen: "#bf360c", chromogenName: "Pyruvate-2,4-DNPH Hydrazone",
      info: "Remember: ALT is liver-specific in Dogs & Cats (Ref: 10–90 U/L), while AST is present in both Liver and Muscle (always pair AST with CK in horses and cattle!)."
    }
  ];

  S["p3-t03"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Serum Albumin (BCG Dye-Binding, 630 nm) & A:G Ratio Bench",
      subtitle: "Bromocresol Green (BCG) at pH 4.2 binds specifically to Albumin forming a blue-green complex; Globulin = Total Protein − Albumin.",
      wavelength: 630, stdConc: 4.0, stdOD: 0.42, defaultConc: 3.4, minConc: 1.0, maxConc: 5.5, stepConc: 0.1,
      unit: "g/dL", refMin: 2.6, refMax: 4.0,
      chromogen: "#00897b", chromogenName: "BCG-Albumin Blue-Green",
      info: "Hypoalbuminaemia (<2.0 g/dL) reduces plasma oncotic pressure causing ascites/oedema (liver failure, protein-losing enteropathy/nephropathy, haemonchosis in sheep!)."
    }
  ];

  S["p3-t04"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Total Serum Cholesterol Estimation (CHOD-PAP, 505 nm)",
      subtitle: "Cholesterol Esterase + Cholesterol Oxidase + Peroxidase yields pink quinoneimine chromogen proportional to total cholesterol.",
      wavelength: 505, stdConc: 200, stdOD: 0.35, defaultConc: 185, minConc: 50, maxConc: 550, stepConc: 15,
      unit: "mg/dL", refMin: 120, refMax: 270,
      chromogen: "#d81b60", chromogenName: "Quinoneimine Pink",
      info: "Canine hypercholesterolaemia (>350 mg/dL) is a hallmark of Hypothyroidism, Cushing's disease, Diabetes Mellitus, Nephrotic Syndrome, and Cholestasis."
    }
  ];

  S["p3-t05"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Serum Creatinine (Jaffe Alkaline Picrate, 520 nm) & BUN Assay Lab",
      subtitle: "Creatinine reacts with picric acid in alkaline medium forming an orange-red Janovsky complex read at 520 nm.",
      wavelength: 520, stdConc: 2.0, stdOD: 0.30, defaultConc: 1.2, minConc: 0.4, maxConc: 10.0, stepConc: 0.2,
      unit: "mg/dL", refMin: 0.5, refMax: 1.6,
      chromogen: "#e65100", chromogenName: "Alkaline Picrate Orange-Red",
      info: "Kinetic Jaffe reaction (reading ΔOD between 30–90 sec) minimizes interference from non-creatinine chromogens (ketones, glucose, cephalosporins). Creatinine > 1.6 mg/dL + USG 1.010 confirms renal failure."
    }
  ];

  S["p3-t06"] = [
    {
      engine: "lab",
      kind: "colorimeter",
      title: "Serum Bilirubin Estimation (Malloy-Evelyn Diazo Reaction, 540 nm)",
      subtitle: "Conjugated (Direct) bilirubin reacts immediately with diazotized sulfanilic acid; adding Methanol dissolves Unconjugated (Indirect) bilirubin for Total Bilirubin.",
      wavelength: 540, stdConc: 5.0, stdOD: 0.35, defaultConc: 0.6, minConc: 0.1, maxConc: 12.0, stepConc: 0.3,
      unit: "mg/dL", refMin: 0.1, refMax: 0.8,
      chromogen: "#880e4f", chromogenName: "Azobilirubin Red-Purple",
      info: "Indirect Bilirubin = Total Bilirubin − Direct Bilirubin. Keep serum protected from bright light (photodegradation lowers bilirubin by up to 50%/hr!)."
    }
  ];

  S["p3-t07"] = [
    {
      engine: "clinical",
      title: "Master Species Reference Values & Clinical Differential Diagnosis Bench",
      subtitle: "Compare physiological baseline values across Cattle, Dogs, Cats, and Horses to avoid misdiagnosing normal species physiology!",
      cases: [
        {
          id: "cattle", label: "Cattle (Bovine)",
          banner: "Ruminant Baseline: Lower Glucose (45–75), High Salivary Urea Recycling, SDH/GGT for Liver",
          bars: [
            { label: "Blood Glucose", val: 60, max: 140, refMin: 45, refMax: 75, unit: "mg/dL" },
            { label: "Total Protein", val: 7.2, max: 10, refMin: 6.7, refMax: 7.5, unit: "g/dL" },
            { label: "Serum Ca²⁺", val: 9.8, max: 14, refMin: 8.5, refMax: 11.0, unit: "mg/dL" },
            { label: "Serum BHBA", val: 0.6, max: 4.0, refMin: 0, refMax: 1.0, unit: "mmol/L" }
          ],
          info: "Ca²⁺ < 5.5 mg/dL = Milk Fever (Parturient Paresis); Mg²⁺ < 1.2 mg/dL = Grass Tetany; BHBA > 1.4 mmol/L = Ketosis.",
          metrics: [
            { label: "Milk Fever Ca²⁺", val: "< 5.5 mg/dL", cls: "is-danger" },
            { label: "Grass Tetany Mg²⁺", val: "< 1.2 mg/dL", cls: "is-danger" },
            { label: "Liver Enzymes", val: "SDH, GLDH, GGT", cls: "is-info" },
            { label: "Glucose Source", val: "Rumen Propionate", cls: "is-ok" }
          ]
        },
        {
          id: "dog", label: "Dog (Canine)",
          banner: "Canine Baseline: Glucose 70–115, ALT Liver-Specific, Renal Threshold ~180 mg/dL",
          bars: [
            { label: "Blood Glucose", val: 95, max: 140, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "Total Protein", val: 6.4, max: 10, refMin: 5.4, refMax: 7.5, unit: "g/dL" },
            { label: "Serum Ca²⁺", val: 10.2, max: 14, refMin: 9.0, refMax: 11.5, unit: "mg/dL" },
            { label: "BUN (÷10)", val: 1.8, max: 4.0, refMin: 0.8, refMax: 2.8, unit: "(18 mg/dL)" }
          ],
          info: "Dogs have steroid-induced ALP isoenzyme (Cushing's/prednisolone causes huge ALP surge without liver failure) and high HDL cholesterol.",
          metrics: [
            { label: "Liver Specific", val: "ALT (10–100 U/L)", cls: "is-ok" },
            { label: "Creatinine Ref.", val: "0.5–1.5 mg/dL", cls: "is-info" },
            { label: "USG Normal", val: "> 1.030", cls: "is-ok" },
            { label: "Pancreatitis", val: "cPLI (Specific)", cls: "is-info" }
          ]
        },
        {
          id: "horse", label: "Horse (Equine)",
          banner: "Equine Baseline: Fasting Unconjugated Hyperbilirubinaemia (Normal!), High Resting CK",
          bars: [
            { label: "Blood Glucose", val: 90, max: 140, refMin: 75, refMax: 115, unit: "mg/dL" },
            { label: "Total Protein", val: 6.6, max: 10, refMin: 5.8, refMax: 7.7, unit: "g/dL" },
            { label: "Serum Ca²⁺ (High!)", val: 12.2, max: 14, refMin: 11.0, refMax: 13.5, unit: "mg/dL" },
            { label: "Total Bilirubin", val: 1.6, max: 4.0, refMin: 0.5, refMax: 2.3, unit: "mg/dL" }
          ],
          info: "Horses naturally have higher serum Calcium (11–13.5 mg/dL, excreted as CaCO₃ crystals making equine urine cloudy!) and physiological fasting hyperbilirubinaemia up to 6 mg/dL (competition with NEFAs for hepatic ligandin!).",
          metrics: [
            { label: "Fasting Bilirubin", val: "Rises Physiologically!", cls: "is-warn" },
            { label: "Urine Appearance", val: "Cloudy (CaCO₃ + Mucus)", cls: "is-info" },
            { label: "Liver Enzymes", val: "SDH, GLDH, GGT", cls: "is-ok" },
            { label: "Tying-Up Marker", val: "CK & AST ↑↑↑", cls: "is-danger" }
          ]
        }
      ]
    }
  ];
})();
