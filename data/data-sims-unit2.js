/* ============================================================
   data-sims-unit2.js — Theory Unit 2 Interactive Labs (22 topics)
   Intermediary Metabolism (u2-t01 through u2-t22)
   ============================================================ */
(function () {
  var S = window.topicSims = window.topicSims || {};

  S["u2-t01"] = [
    {
      engine: "enzyme",
      title: "Enzyme Catalysis & Michaelis-Menten Kinetics Explorer",
      subtitle: "Vary substrate [S] to watch active-site turnover (E + S ⇌ ES → E + P) approach Vmax without altering reaction ΔG.",
      initialMode: "kinetics",
      tabs: [{ id: "kinetics", label: "Catalysis & Saturation" }],
      sub: 20, km: 20, vmax: 100, inhib: "none"
    }
  ];

  S["u2-t02"] = [
    {
      engine: "clinical",
      title: "Isoenzyme Tissue Distribution & Coenzyme Diagnostic Panel",
      subtitle: "Compare LDH-1 to LDH-5 and CK-MM / CK-MB / CK-BB diagnostic profiles across organ injuries.",
      cases: [
        {
          id: "normal", label: "Healthy Animal",
          banner: "Baseline Serum Isoenzyme Profile (Low Cellular Leakage)",
          bars: [
            { label: "CK-MM (Skel. Muscle)", val: 15, max: 100, refMin: 0, refMax: 25, unit: "% max" },
            { label: "CK-MB (Myocardium)", val: 5, max: 100, refMin: 0, refMax: 12, unit: "% max" },
            { label: "LDH-1 (Heart/RBC)", val: 18, max: 100, refMin: 10, refMax: 30, unit: "% max" },
            { label: "LDH-5 (Liver/Muscle)", val: 16, max: 100, refMin: 10, refMax: 28, unit: "% max" }
          ],
          info: "Isoenzymes catalyze the exact same reaction but differ in subunit composition (e.g., LDH is a tetramer of H and M subunits: H4=LDH1, M4=LDH5), Km, and electrophoretic mobility.",
          metrics: [
            { label: "Holoenzyme", val: "Apoenzyme + Cofactor", cls: "is-ok" },
            { label: "NAD⁺ / FAD", val: "Vit B3 / B2 Coenzymes", cls: "is-info" },
            { label: "PLP / TPP", val: "Vit B6 / B1 Coenzymes", cls: "is-info" },
            { label: "LDH Subunits", val: "H4 to M4 (5 forms)", cls: "is-ok" }
          ]
        },
        {
          id: "myopathy", label: "White Muscle / Rhabdomyolysis",
          banner: "Acute Skeletal Muscle Necrosis (Se/Vit E Deficiency or Equine Tying-Up)",
          bars: [
            { label: "CK-MM (Skel. Muscle)", val: 94, max: 100, refMin: 0, refMax: 25, unit: "% max" },
            { label: "CK-MB (Myocardium)", val: 14, max: 100, refMin: 0, refMax: 12, unit: "% max" },
            { label: "LDH-1 (Heart/RBC)", val: 22, max: 100, refMin: 10, refMax: 30, unit: "% max" },
            { label: "LDH-5 (Liver/Muscle)", val: 88, max: 100, refMin: 10, refMax: 28, unit: "% max" }
          ],
          info: "Massive CK-MM and LDH-5 (M4) spike indicates skeletal muscle fiber degeneration (e.g., Selenium/Vitamin E deficiency in lambs/calves or exertional rhabdomyolysis in horses).",
          metrics: [
            { label: "Dominant Spike", val: "CK-MM & LDH-5", cls: "is-danger" },
            { label: "Half-Life (CK)", val: "Short (~2–4 hr)", cls: "is-warn" },
            { label: "Tissue Source", val: "Skeletal Muscle", cls: "is-info" },
            { label: "Clinical Utility", val: "Active Myonecrosis", cls: "is-danger" }
          ]
        },
        {
          id: "cardiac", label: "Myocardial Injury (Monensin)",
          banner: "Myocardial Necrosis — CK-MB & LDH-1 (H4) Flip (LDH1 > LDH2)",
          bars: [
            { label: "CK-MM (Skel. Muscle)", val: 32, max: 100, refMin: 0, refMax: 25, unit: "% max" },
            { label: "CK-MB (Myocardium)", val: 86, max: 100, refMin: 0, refMax: 12, unit: "% max" },
            { label: "LDH-1 (Heart/RBC)", val: 82, max: 100, refMin: 10, refMax: 30, unit: "% max" },
            { label: "LDH-5 (Liver/Muscle)", val: 20, max: 100, refMin: 10, refMax: 28, unit: "% max" }
          ],
          info: "Cardiac muscle is rich in CK-MB and LDH-1 (H4, high affinity for lactate → pyruvate). Elevations alongside Cardiac Troponin-I confirm equine monensin toxicity or dilated cardiomyopathy.",
          metrics: [
            { label: "Dominant Spike", val: "CK-MB & LDH-1", cls: "is-danger" },
            { label: "Gold Standard", val: "Cardiac Troponin-I", cls: "is-ok" },
            { label: "LDH-1 Role", val: "Aerobic Heart Tissue", cls: "is-info" },
            { label: "Vet Example", val: "Equine Monensin Tox.", cls: "is-danger" }
          ]
        }
      ]
    }
  ];

  S["u2-t03"] = [
    {
      engine: "enzyme",
      title: "Active Site Specificity & Induced-Fit Catalysis Simulator",
      subtitle: "Adjust substrate concentration [S] and watch active-site transition-state binding vs competitive structural analog blocking.",
      initialMode: "kinetics",
      tabs: [{ id: "kinetics", label: "Active-Site Kinetics" }],
      sub: 25, km: 15, vmax: 100, inhib: "competitive", inhibConc: 15
    }
  ];

  S["u2-t04"] = [
    {
      engine: "enzyme",
      title: "Temperature (Q10 & Denaturation), pH Bell Curve & [S] Saturation Lab",
      subtitle: "Explore how temperature, pH ionization of catalytic residues, and substrate concentration govern enzyme velocity.",
      initialMode: "factors",
      tabs: [
        { id: "factors", label: "Temperature & pH Curves" },
        { id: "kinetics", label: "Substrate [S] Curve" }
      ],
      temp: 37, ph: 7.4, optPh: 7.4
    }
  ];

  S["u2-t05"] = [
    {
      engine: "enzyme",
      title: "Enzyme Units (IU / Katal), Km Affinity & Vmax Calculator",
      subtitle: "Switch between Michaelis-Menten and Lineweaver-Burk plots to determine exact Km and Vmax under varying [S].",
      initialMode: "kinetics",
      tabs: [{ id: "kinetics", label: "MM & Lineweaver-Burk" }],
      sub: 20, km: 20, vmax: 100, inhib: "none"
    }
  ];

  S["u2-t06"] = [
    {
      engine: "enzyme",
      title: "Enzyme Inhibition & Allosteric Cooperativity Lab (MM + Lineweaver-Burk)",
      subtitle: "Compare Competitive (↑Km), Non-Competitive (↓Vmax), Uncompetitive (↓Km & ↓Vmax), and Allosteric Sigmoidal kinetics in real time.",
      initialMode: "kinetics",
      tabs: [{ id: "kinetics", label: "Inhibition & Allostery" }],
      sub: 30, km: 20, vmax: 100, inhib: "competitive", inhibConc: 25
    }
  ];

  S["u2-t07"] = [
    {
      engine: "etc",
      title: "Biological Oxidation & Redox Potential Cascade (NADH vs FADH₂)",
      subtitle: "Trace electron transfer from low redox potential (NADH: -0.32 V) down to molecular oxygen (+0.82 V) through redox coenzymes.",
      substrate: "nadh",
      blocker: "none"
    }
  ];

  S["u2-t08"] = [
    {
      engine: "etc",
      title: "Mitochondrial Electron Transport Chain & F₀F₁-ATP Synthase Simulator",
      subtitle: "Switch between NADH (10 H⁺ → 2.5 ATP) and FADH₂ (6 H⁺ → 1.5 ATP) to visualize chemiosmotic proton pumping and rotary ATP synthesis.",
      substrate: "nadh",
      blocker: "none"
    }
  ];

  S["u2-t09"] = [
    {
      engine: "etc",
      title: "ETC Inhibitors (Cyanide, Rotenone, Antimycin, Oligomycin) & Uncouplers (DNP/UCP1)",
      subtitle: "Apply real toxicants and uncouplers to watch electron flow, H⁺ gradient, O₂ consumption, ATP yield, and thermogenesis respond.",
      substrate: "nadh",
      blocker: "cyanide"
    }
  ];

  S["u2-t10"] = [
    {
      engine: "pathway",
      title: "Glycolysis (Embden-Meyerhof) Flux, Regulation & Bioenergetics Simulator",
      subtitle: "Click any enzyme to inspect regulation (HK, PFK-1, PK) and toggle Aerobic, Anaerobic (Lactate), and Erythrocyte 2,3-BPG Shunt modes.",
      nodes: [
        { label: "Glucose", sub: "6C", x: 0.12, y: 0.25, kind: "normal", enzyme: "GLUT Entry", info: "Enters cell via GLUT1-4 (GLUT4 is insulin-dependent in muscle/adipose)." },
        { label: "G-6-P", sub: "-1 ATP", x: 0.34, y: 0.25, kind: "rate", enzyme: "Hexokinase / Glucokinase", info: "Irreversible trapping step (-1 ATP). HK has low Km & is inhibited by G-6-P; hepatic Glucokinase has high Km & is induced by Insulin." },
        { label: "F-1,6-BP", sub: "-1 ATP (Committed)", x: 0.60, y: 0.25, kind: "rate", enzyme: "PFK-1 (Rate-Limiting!)", info: "Most important rate-limiting step! Activated by AMP & Fructose-2,6-BP; inhibited by ATP & Citrate." },
        { label: "2 × GAP / 1,3-BPG", sub: "+2 NADH", x: 0.85, y: 0.25, kind: "energy", enzyme: "GAPDH", info: "Oxidation generates 2 NADH + H⁺ (worth 5 ATP via Malate-Aspartate shuttle or 3 ATP via Glycerol-3-P shuttle). Inhibited by Arsenate/Iodoacetate." },
        { label: "2 × PEP", sub: "+2 ATP (PGK)", x: 0.72, y: 0.72, kind: "energy", enzyme: "PGK → Enolase", info: "First substrate-level phosphorylation (+2 ATP). Enolase is inhibited by Fluoride (NaF used in blood glucose collection tubes!)." },
        { label: "2 × Pyruvate", sub: "+2 ATP (PK)", x: 0.40, y: 0.72, kind: "rate", enzyme: "Pyruvate Kinase", info: "Second substrate-level phosphorylation (+2 ATP). Feed-forward activated by F-1,6-BP; inhibited by ATP, Alanine, and Glucagon-mediated phosphorylation." },
        { label: "Lactate / Acetyl-CoA", sub: "End Fate", x: 0.14, y: 0.72, kind: "organ", enzyme: "LDH / PDH", info: "Aerobic: enters mitochondria via PDH (+5 ATP + TCA = 32 ATP/Glc). Anaerobic/RBC: LDH reduces pyruvate to Lactate regenerating NAD⁺ (Net 2 ATP)." }
      ],
      edges: [
        { from: 0, to: 1, label: "HK" },
        { from: 1, to: 2, label: "PFK-1" },
        { from: 2, to: 3, label: "Aldolase/GAPDH" },
        { from: 3, to: 4, label: "PGK / Enolase" },
        { from: 4, to: 5, label: "PK" },
        { from: 5, to: 6, label: "PDH / LDH" }
      ],
      modes: [
        {
          id: "aerobic", label: "Aerobic (Net 7 ATP)", speed: 1.1, boost: [1, 3, 5],
          note: "2 ATP invested, 4 ATP by SLP + 2 NADH (5 ATP via M-A shuttle) = Net 7 ATP in glycolysis (32 ATP complete oxidation).",
          metrics: [
            { label: "Net Glycolysis ATP", val: "7 ATP (or 5)", cls: "is-ok" },
            { label: "Complete Glc → CO₂", val: "32 ATP", cls: "is-ok" },
            { label: "Rate-Limiting", val: "PFK-1", cls: "is-warn" },
            { label: "NaF Tube Target", val: "Enolase", cls: "is-info" }
          ]
        },
        {
          id: "anaerobic", label: "Anaerobic / RBC (2 ATP)", speed: 1.4, boost: [5],
          note: "NADH reoxidized by LDH (Pyruvate → Lactate) so GAPDH can continue. Net yield = 2 ATP only.",
          metrics: [
            { label: "Net ATP Yield", val: "2 ATP / Glucose", cls: "is-warn" },
            { label: "End Product", val: "2 Lactate", cls: "is-info" },
            { label: "NAD⁺ Regeneration", val: "LDH Reaction", cls: "is-ok" },
            { label: "Sites", val: "RBC, Sprinting Muscle", cls: "is-info" }
          ]
        },
        {
          id: "bpg", label: "RBC 2,3-BPG Shunt (0 ATP)", speed: 0.9, blocked: [3],
          note: "Rapoport-Luebering Shunt bypasses PGK (+2 ATP lost), generating 2,3-BPG which shifts Hb-O₂ curve RIGHT for tissue O₂ unloading!",
          metrics: [
            { label: "Net ATP Yield", val: "0 ATP (PGK bypassed)", cls: "is-danger" },
            { label: "Key Product", val: "2,3-BPG", cls: "is-ok" },
            { label: "Hb-O₂ Effect", val: "Right Shift (↑ O₂ release)", cls: "is-ok" },
            { label: "Species Note", val: "Low in Cattle/Cats", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u2-t11"] = [
    {
      engine: "pathway",
      title: "Krebs (TCA / Citric Acid) Cycle & Fluoroacetate Block Simulator",
      subtitle: "Trace 2C Acetyl-CoA oxidation yielding 3 NADH + 1 FADH₂ + 1 GTP = 10 ATP per turn; click any step or apply Fluoroacetate toxin.",
      nodes: [
        { label: "Oxaloacetate (4C)", sub: "Acceptor", x: 0.24, y: 0.30, kind: "organ", enzyme: "Anaplerosis (PC)", info: "Replenished from Pyruvate via Pyruvate Carboxylase (Biotin). Depleted in bovine ketosis causing Acetyl-CoA diversion to ketone bodies!" },
        { label: "Citrate (6C)", sub: "Condensation", x: 0.52, y: 0.18, kind: "rate", enzyme: "Citrate Synthase", info: "Condenses Acetyl-CoA (2C) + OAA (4C) → Citrate (6C). Inhibited by ATP, NADH, Succinyl-CoA, and Citrate." },
        { label: "Isocitrate (6C)", sub: "Aconitase", x: 0.80, y: 0.30, kind: "normal", enzyme: "Aconitase (Fe-S)", info: "Inhibited by Fluorocitrate (lethal synthesis from plant toxin Fluoroacetate / 1080 in livestock!)." },
        { label: "α-KG (5C)", sub: "+NADH, CO₂", x: 0.84, y: 0.62, kind: "rate", enzyme: "Isocitrate DH (Rate-Limiting)", info: "Primary pacemaker of TCA! Activated by ADP & Ca²⁺; inhibited by ATP & NADH." },
        { label: "Succinyl-CoA (4C)", sub: "+NADH, CO₂", x: 0.62, y: 0.84, kind: "energy", enzyme: "α-KG Dehydrogenase", info: "Requires 5 cofactors (TPP, Lipoate, CoA, FAD, NAD⁺). Also entry point for ruminant Propionate (via Methylmalonyl-CoA, Vit B12)!" },
        { label: "Succinate (4C)", sub: "+1 GTP (SLP)", x: 0.34, y: 0.84, kind: "energy", enzyme: "Succinyl-CoA Synthetase", info: "Only substrate-level phosphorylation in TCA (+1 GTP = 1 ATP)." },
        { label: "Fumarate / Malate", sub: "+FADH₂ & +NADH", x: 0.16, y: 0.62, kind: "energy", enzyme: "SDH (Complex II) & MDH", info: "SDH is embedded in inner mitochondrial membrane (Complex II, inhibited by Malonate) yielding 1 FADH₂; Malate DH yields the 3rd NADH." }
      ],
      edges: [
        { from: 0, to: 1, label: "+Acetyl-CoA" },
        { from: 1, to: 2, label: "Aconitase" },
        { from: 2, to: 3, label: "NADH+CO₂" },
        { from: 3, to: 4, label: "NADH+CO₂" },
        { from: 4, to: 5, label: "GTP" },
        { from: 5, to: 6, label: "FADH₂" },
        { from: 6, to: 0, label: "NADH" }
      ],
      modes: [
        {
          id: "normal", label: "Active TCA (10 ATP/turn)", speed: 1.1, boost: [2, 3, 5, 6],
          note: "Per Acetyl-CoA: 3 NADH (7.5) + 1 FADH₂ (1.5) + 1 GTP (1) = 10 ATP. Strictly aerobic in mitochondrial matrix.",
          metrics: [
            { label: "ATP / Acetyl-CoA", val: "10 ATP", cls: "is-ok" },
            { label: "Reducing Equiv.", val: "3 NADH + 1 FADH₂", cls: "is-info" },
            { label: "CO₂ Released", val: "2 CO₂", cls: "is-info" },
            { label: "Location", val: "Mito. Matrix", cls: "is-ok" }
          ]
        },
        {
          id: "fluoro", label: "Fluoroacetate Poisoning", speed: 0.2, blocked: [1, 2],
          note: "Fluoroacetate forms Fluorocitrate ('lethal synthesis') which irreversibly blocks Aconitase → massive citrate accumulation & cardiac/CNS collapse!",
          metrics: [
            { label: "Blocked Enzyme", val: "Aconitase", cls: "is-danger" },
            { label: "Accumulates", val: "Citrate (Chelates Ca²⁺)", cls: "is-danger" },
            { label: "ATP Yield", val: "0 ATP (Halted)", cls: "is-danger" },
            { label: "Vet Toxicology", val: "Compound 1080 / Plants", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u2-t12"] = [
    {
      engine: "pathway",
      title: "HMP Shunt (Pentose Phosphate Pathway) & RBC Antioxidant Defense",
      subtitle: "See how G6PD generates cytosolic NADPH to keep Glutathione (GSH) reduced against oxidative hemolysis, plus Ribose-5-P for nucleotides.",
      nodes: [
        { label: "Glucose-6-P", sub: "Cytosol", x: 0.14, y: 0.50, kind: "normal", enzyme: "Entry", info: "Diverted from glycolysis into cytosolic HMP shunt. Zero ATP produced or consumed!" },
        { label: "6-P-Gluconolactone", sub: "+NADPH #1", x: 0.38, y: 0.28, kind: "rate", enzyme: "G6PD (Rate-Limiting!)", info: "Activated by NADP⁺; inhibited by NADPH. Induced by Insulin in liver, adipose, and lactating mammary gland." },
        { label: "Ribulose-5-P", sub: "+NADPH #2, CO₂", x: 0.64, y: 0.28, kind: "energy", enzyme: "6-P-Gluconate DH", info: "Generates 2nd NADPH + 1 CO₂ (irreversible oxidative phase)." },
        { label: "Ribose-5-P", sub: "DNA / RNA / ATP", x: 0.88, y: 0.28, kind: "organ", enzyme: "Isomerase / Transketolase (TPP)", info: "Non-oxidative reversible phase uses Transketolase (Vit B1/TPP) and Transaldolase to interconvert 3C–7C sugars." },
        { label: "2 GSH (Reduced)", sub: "Neutralizes H₂O₂", x: 0.52, y: 0.76, kind: "energy", enzyme: "Glutathione Reductase & GPx (Se)", info: "NADPH reduces GSSG → 2 GSH; Selenium-dependent Glutathione Peroxidase detoxifies H₂O₂ → 2 H₂O, preventing Heinz-body hemolytic anemia!" }
      ],
      edges: [
        { from: 0, to: 1, label: "G6PD (NADPH)" },
        { from: 1, to: 2, label: "NADPH + CO₂" },
        { from: 2, to: 3, label: "Non-Oxidative" },
        { from: 1, to: 4, label: "NADPH → GSH" },
        { from: 2, to: 4, label: "NADPH → GSH" }
      ],
      modes: [
        {
          id: "normal", label: "Active Antioxidant & FA Synthesis", speed: 1.1, boost: [0, 3, 4],
          note: "High in RBCs, lactating mammary gland, adipose, liver, and adrenal cortex.",
          metrics: [
            { label: "NADPH / G-6-P", val: "2 NADPH", cls: "is-ok" },
            { label: "ATP Produced", val: "0 ATP", cls: "is-info" },
            { label: "Key Cofactors", val: "TPP (B1) & Se (GPx)", cls: "is-info" },
            { label: "RBC Protection", val: "GSH Intact ✓", cls: "is-ok" }
          ]
        },
        {
          id: "g6pd", label: "G6PD / Oxidative Stress", speed: 0.2, blocked: [0, 3, 4],
          note: "Insufficient NADPH → GSSG cannot regenerate GSH → H₂O₂ oxidizes hemoglobin into insoluble Heinz bodies → intravascular hemolysis!",
          metrics: [
            { label: "NADPH Supply", val: "DEPLETED", cls: "is-danger" },
            { label: "Reduced GSH", val: "Critically Low", cls: "is-danger" },
            { label: "RBC Lesion", val: "Heinz Bodies / Lysis", cls: "is-danger" },
            { label: "Vet Triggers", val: "Onion/Garlic/Brassica", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u2-t13"] = [
    {
      engine: "pathway",
      title: "Gluconeogenesis (3 Bypasses), Cori Cycle & Ruminant Propionate Pathway",
      subtitle: "Compare fasting monogastric gluconeogenesis (Cori Cycle) vs the Ruminant Propionate → Succinyl-CoA → Glucose lifeline!",
      nodes: [
        { label: "Lactate / Alanine", sub: "Muscle (Cori)", x: 0.14, y: 0.26, kind: "organ", enzyme: "LDH / ALT", info: "Anaerobic muscle lactate travels via blood to liver (Cori cycle) to be resynthesized into glucose." },
        { label: "Propionate (3C)", sub: "Rumen VFA!", x: 0.14, y: 0.74, kind: "energy", enzyme: "Vit B12 (B12-dep.)", info: "In ruminants, propionate is the #1 glucogenic precursor (~60–70% of blood glucose). Cobalt/Vitamin B12 deficiency blocks Methylmalonyl-CoA mutase → Pine disease!" },
        { label: "OAA → PEP", sub: "Bypass #1 (PC + PEPCK)", x: 0.44, y: 0.50, kind: "rate", enzyme: "PC (Biotin) + PEPCK", info: "Bypasses Pyruvate Kinase! Costs 2 ATP + 2 GTP per glucose. Pyruvate Carboxylase is obligately activated by Acetyl-CoA." },
        { label: "F-1,6-BP → F-6-P", sub: "Bypass #2", x: 0.68, y: 0.50, kind: "rate", enzyme: "Fructose-1,6-BPase", info: "Bypasses PFK-1. Activated by Citrate; inhibited by AMP and Fructose-2,6-BP (reciprocal control with glycolysis)." },
        { label: "Free Glucose", sub: "Bypass #3 (ER)", x: 0.89, y: 0.50, kind: "energy", enzyme: "Glucose-6-Phosphatase", info: "Present in Liver and Kidney cortex (ABSENT in skeletal muscle, so muscle glycogen cannot raise blood glucose!)." }
      ],
      edges: [
        { from: 0, to: 2, label: "Pyruvate" },
        { from: 1, to: 2, label: "Succinyl-CoA → OAA" },
        { from: 2, to: 3, label: "Reversal (-2 ATP)" },
        { from: 3, to: 4, label: "G-6-Pase" }
      ],
      modes: [
        {
          id: "ruminant", label: "Ruminant (Propionate Lifeline)", speed: 1.2, boost: [1, 2, 3],
          note: "Adult ruminants run hepatic gluconeogenesis continuously even when fed, driven by ruminal propionate.",
          metrics: [
            { label: "Main Precursor", val: "Propionate (60–70%)", cls: "is-ok" },
            { label: "Essential Vitamin", val: "Cobalt / Vit B12", cls: "is-warn" },
            { label: "Energy Cost", val: "6 High-Energy P / Glc", cls: "is-info" },
            { label: "Cannot Convert", val: "Acetyl-CoA / Even FAs", cls: "is-danger" }
          ]
        },
        {
          id: "cori", label: "Monogastric Fasting / Cori", speed: 1.0, boost: [0, 2, 3],
          note: "Muscle glycolysis yields 2 ATP + Lactate; Liver spends 6 ATP-eq to convert 2 Lactate back to Glucose (net cost 4 ATP shifted to liver).",
          metrics: [
            { label: "Precursors", val: "Lactate, Glycerol, AAs", cls: "is-info" },
            { label: "Energy Cost", val: "4 ATP + 2 GTP + 2 NADH", cls: "is-warn" },
            { label: "Hormone Driver", val: "Glucagon & Cortisol", cls: "is-ok" },
            { label: "G-6-Pase Site", val: "Liver & Kidney only", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u2-t14"] = [
    {
      engine: "pathway",
      title: "Glycogenesis vs Glycogenolysis: Reciprocal cAMP-PKA Cascade",
      subtitle: "Toggle Fed (Insulin → Dephosphorylation) vs Fasted/Fight-or-Flight (Glucagon/Epinephrine → cAMP → PKA Phosphorylation).",
      nodes: [
        { label: "Glucose-6-P", sub: "⇄ G-1-P", x: 0.16, y: 0.50, kind: "normal", enzyme: "Phosphoglucomutase", info: "Reversible interconversion between G-6-P and G-1-P." },
        { label: "UDP-Glucose", sub: "Activated Donor", x: 0.48, y: 0.24, kind: "rate", enzyme: "Glycogen Synthase", info: "Rate-limiting for Glycogenesis! ACTIVE when DEPHOSPHORYLATED (Insulin → Protein Phosphatase-1). Forms α(1→4) links; Branching enzyme adds α(1→6)." },
        { label: "Glycogen (n+1)", sub: "Liver / Muscle", x: 0.84, y: 0.50, kind: "organ", enzyme: "Storage Polymer", info: "Liver glycogen (~10% wet wt) buffers blood glucose; Muscle glycogen (~1–2%) fuels local contraction only (no G-6-Pase)." },
        { label: "Glucose-1-P", sub: "Phosphorolysis", x: 0.48, y: 0.76, kind: "rate", enzyme: "Glycogen Phosphorylase (PLP)", info: "Rate-limiting for Glycogenolysis! ACTIVE when PHOSPHORYLATED (Glucagon/Epinephrine → cAMP → PKA → Phosphorylase Kinase). Requires Vit B6 (PLP)!" }
      ],
      edges: [
        { from: 0, to: 1, label: "+UTP (Synthesis)" },
        { from: 1, to: 2, label: "Glycogen Synthase" },
        { from: 2, to: 3, label: "Phosphorylase (+Pi)" },
        { from: 3, to: 0, label: "→ Blood Glc / Glycolysis" }
      ],
      modes: [
        {
          id: "fed", label: "Fed State (Insulin ↑)", speed: 1.2, boost: [0, 1], blocked: [2, 3],
          note: "Insulin activates PP-1 → dephosphorylates both enzymes: Glycogen Synthase ON, Glycogen Phosphorylase OFF!",
          metrics: [
            { label: "Glycogen Synthase", val: "ACTIVE (Dephosph.)", cls: "is-ok" },
            { label: "Glycogen Phosphorylase", val: "INACTIVE (Dephosph.)", cls: "is-info" },
            { label: "cAMP / PKA", val: "Low", cls: "is-ok" },
            { label: "Net Direction", val: "Glycogenesis ↑", cls: "is-ok" }
          ]
        },
        {
          id: "fasted", label: "Fasting / Stress (Glucagon / Epi ↑)", speed: 1.3, boost: [2, 3], blocked: [0, 1],
          note: "Glucagon (liver) & Epinephrine (liver+muscle) elevate cAMP → PKA phosphorylates both enzymes: Phosphorylase ON, Synthase OFF!",
          metrics: [
            { label: "Glycogen Phosphorylase", val: "ACTIVE (Phosph.)", cls: "is-ok" },
            { label: "Glycogen Synthase", val: "INACTIVE (Phosph.)", cls: "is-warn" },
            { label: "Cofactor", val: "PLP (Vitamin B6)", cls: "is-info" },
            { label: "Net Direction", val: "Glycogenolysis ↑", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u2-t15"] = [
    {
      engine: "pathway",
      title: "Mitochondrial β-Oxidation (Palmitate = 106 ATP) & Bovine Ketogenesis",
      subtitle: "See how CPT-I carnitine shuttle feeds β-oxidation, and how OAA depletion in early-lactation cows diverts Acetyl-CoA into Ketone Bodies.",
      compartment: { y: 0.34, top: "CYTOSOL (FA Activation -2 ATP Equiv. & CPT-I Gate)", bottom: "MITOCHONDRIAL MATRIX (β-Oxidation Spiral → TCA vs Ketogenesis)" },
      nodes: [
        { label: "Palmitate (C16)", sub: "Acyl-CoA (-2 ATP)", x: 0.16, y: 0.18, kind: "normal", enzyme: "Thiokinase", info: "Activation consumes ATP → AMP + PPi (2 high-energy bonds)." },
        { label: "Carnitine Shuttle", sub: "CPT-I (Rate-Limiting)", x: 0.50, y: 0.18, kind: "rate", enzyme: "CPT-I / CACT / CPT-II", info: "Inhibited by Malonyl-CoA (from FA synthesis) to prevent futile cycling!" },
        { label: "β-Oxidation (7 Cycles)", sub: "7 FADH₂ + 7 NADH", x: 0.50, y: 0.56, kind: "energy", enzyme: "4-Step Spiral", info: "Oxidation (FAD) → Hydration → Oxidation (NAD⁺) → Thiolysis. Yields 7 FADH₂ (10.5) + 7 NADH (17.5) + 8 Acetyl-CoA (80) - 2 = 106 Net ATP!" },
        { label: "TCA Cycle", sub: "Needs OAA!", x: 0.20, y: 0.82, kind: "organ", enzyme: "Citrate Synthase", info: "Normal fate when Oxaloacetate (OAA) is plentiful." },
        { label: "Ketone Bodies", sub: "AcAc / BHBA / Acetone", x: 0.82, y: 0.82, kind: "warn", enzyme: "HMG-CoA Synthase (Liver)", info: "Liver makes ketones but LACKS Thiophorase (SCOT) so it cannot oxidize them! Exported to heart, brain, kidney, and skeletal muscle." }
      ],
      edges: [
        { from: 0, to: 1, label: "Acyl-CoA" },
        { from: 1, to: 2, label: "Matrix Entry" },
        { from: 2, to: 3, label: "8 Acetyl-CoA (OAA OK)" },
        { from: 2, to: 4, label: "Excess Acetyl-CoA (OAA ↓)" }
      ],
      modes: [
        {
          id: "normal", label: "Balanced β-Oxidation (106 ATP)", speed: 1.1, boost: [0, 1, 2],
          note: "Palmitate (16C): 7 FADH₂ (10.5) + 7 NADH (17.5) + 8 Acetyl-CoA (80) - 2 activation = 106 net ATP.",
          metrics: [
            { label: "Palmitate Net ATP", val: "106 ATP", cls: "is-ok" },
            { label: "β-Oxidation Cycles", val: "7 Cycles", cls: "is-info" },
            { label: "Rate-Limiting", val: "CPT-I (Carnitine)", cls: "is-warn" },
            { label: "Odd-Chain End", val: "Propionyl-CoA (Glucogenic)", cls: "is-ok" }
          ]
        },
        {
          id: "ketosis", label: "Bovine Ketosis (OAA Depleted)", speed: 1.4, boost: [0, 1, 3], blocked: [2],
          note: "In high-yielding cows, OAA is drained for gluconeogenesis (lactose) → Acetyl-CoA cannot enter TCA → massive hepatic Ketogenesis (BHBA > 1.4 mM)!",
          metrics: [
            { label: "Serum BHBA", val: "> 1.4 mmol/L (High!)", cls: "is-danger" },
            { label: "OAA Status", val: "Depleted (→ Glucose)", cls: "is-danger" },
            { label: "Liver SCOT", val: "ABSENT (Exports only)", cls: "is-info" },
            { label: "Breath Odor", val: "Sweet Acetone", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u2-t16"] = [
    {
      engine: "pathway",
      title: "De Novo Fatty Acid Biosynthesis (Citrate Shuttle, ACC & FAS Complex)",
      subtitle: "Trace cytosolic Palmitate (C16) synthesis requiring 8 Acetyl-CoA + 7 ATP + 14 NADPH, and see how Malonyl-CoA blocks CPT-I.",
      compartment: { y: 0.34, top: "MITOCHONDRIA (Citrate Export)", bottom: "CYTOSOL (ACC Biotin Step + Fatty Acid Synthase Dimer)" },
      nodes: [
        { label: "Mito. Citrate", sub: "Shuttles Acetyl-CoA", x: 0.20, y: 0.18, kind: "organ", enzyme: "Citrate Transporter", info: "Acetyl-CoA cannot cross the inner mitochondrial membrane directly; it exits as Citrate." },
        { label: "Cytosolic Acetyl-CoA", sub: "+ OAA", x: 0.20, y: 0.62, kind: "normal", enzyme: "ATP-Citrate Lyase", info: "Cleaves citrate in cytosol (-1 ATP). Note: Ruminant adipose/mammary primarily uses Acetate directly via Acetyl-CoA Synthetase!" },
        { label: "Malonyl-CoA (3C)", sub: "Committed Step!", x: 0.52, y: 0.62, kind: "rate", enzyme: "ACC (Biotin + CO₂ + ATP)", info: "Rate-limiting enzyme! Activated by Citrate & Insulin; inhibited by Palmitoyl-CoA & Glucagon/AMPK. Malonyl-CoA inhibits CPT-I!" },
        { label: "Palmitate (C16:0)", sub: "7 Cycles · 14 NADPH", x: 0.84, y: 0.62, kind: "energy", enzyme: "FAS Multienzyme (ACP-B5)", info: "7 rounds of Condensation → Reduction (NADPH) → Dehydration → Reduction (NADPH) produce Palmitate. NADPH supplied by HMP shunt & Malic enzyme." }
      ],
      edges: [
        { from: 0, to: 1, label: "Citrate Shuttle" },
        { from: 1, to: 2, label: "ACC (-7 ATP)" },
        { from: 2, to: 3, label: "FAS (-14 NADPH)" }
      ],
      modes: [
        {
          id: "fed", label: "Fed / High Insulin (Active)", speed: 1.2, boost: [1, 2],
          note: "High Citrate & Insulin polymerize/activate ACC → Malonyl-CoA rises → FA synthesis ON, β-oxidation (CPT-I) OFF.",
          metrics: [
            { label: "Stoichiometry", val: "8 AcCoA + 7 ATP + 14 NADPH", cls: "is-info" },
            { label: "Rate-Limiting", val: "ACC (Biotin)", cls: "is-warn" },
            { label: "CPT-I Status", val: "BLOCKED (Malonyl-CoA)", cls: "is-ok" },
            { label: "Ruminant Fuel", val: "Acetate (Major)", cls: "is-info" }
          ]
        },
        {
          id: "fasted", label: "Fasted / Glucagon (Inhibited)", speed: 0.15, blocked: [1, 2],
          note: "Glucagon/AMPK phosphorylates and inactivates ACC → Malonyl-CoA drops → FA synthesis halts and β-oxidation turns ON.",
          metrics: [
            { label: "ACC Status", val: "INACTIVE (Phosph.)", cls: "is-danger" },
            { label: "Malonyl-CoA", val: "Very Low", cls: "is-warn" },
            { label: "CPT-I Status", val: "OPEN (β-Oxidation ↑)", cls: "is-ok" },
            { label: "Direction", val: "Lipolysis Dominant", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u2-t17"] = [
    {
      engine: "ribosome3d",
      title: "Live 70S Ribosome Translation (A–P–E Sites) & Antibiotic Blockade Lab",
      subtitle: "Watch 5'→3' mRNA codons translate into an N→C polypeptide chain — and test Tetracycline (30S), Chloramphenicol (50S), and Macrolide/Tylosin blockade!"
    }
  ];

  S["u2-t18"] = [
    {
      engine: "pathway",
      title: "Transamination (PLP), Oxidative Deamination (GDH) & Decarboxylation",
      subtitle: "Trace amino-group funneling from amino acids → Glutamate → free NH₄⁺ (for Urea Cycle) and biogenic amine decarboxylation.",
      nodes: [
        { label: "L-Amino Acid", sub: "e.g. Alanine / Asp", x: 0.14, y: 0.35, kind: "normal", enzyme: "ALT / AST", info: "Reversibly transfers α-amino group to α-Ketoglutarate using Pyridoxal Phosphate (PLP, Vitamin B6) via Ping-Pong Bi-Bi mechanism." },
        { label: "L-Glutamate", sub: "Nitrogen Collector", x: 0.48, y: 0.35, kind: "rate", enzyme: "Transaminases (PLP)", info: "Central amino-group sink of cellular nitrogen metabolism." },
        { label: "α-KG + Free NH₄⁺", sub: "To Urea Cycle", x: 0.82, y: 0.35, kind: "energy", enzyme: "Glutamate DH (GDH)", info: "Mitochondrial GDH uniquely uses EITHER NAD⁺ or NADP⁺. Activated by ADP/GDP; inhibited by ATP/GTP." },
        { label: "Biogenic Amines", sub: "GABA / Histamine / 5-HT", x: 0.48, y: 0.78, kind: "organ", enzyme: "Decarboxylases (PLP)", info: "Irreversible removal of CO₂ (PLP-dependent): Glutamate → GABA, Histidine → Histamine, Tryptophan → Serotonin." }
      ],
      edges: [
        { from: 0, to: 1, label: "+α-KG (PLP)" },
        { from: 1, to: 2, label: "GDH (NAD⁺/NADP⁺)" },
        { from: 1, to: 3, label: "-CO₂ (PLP)" }
      ],
      modes: [
        {
          id: "catab", label: "Transdeamination (Active)", speed: 1.2, boost: [0, 1],
          note: "Coupled Transamination + GDH Oxidative Deamination safely channels amino acid nitrogen to hepatic Urea Cycle.",
          metrics: [
            { label: "Universal Cofactor", val: "PLP (Vitamin B6)", cls: "is-ok" },
            { label: "GDH Coenzymes", val: "NAD⁺ or NADP⁺", cls: "is-info" },
            { label: "Clinical Markers", val: "ALT (Dog) & AST", cls: "is-warn" },
            { label: "Ammonia Fate", val: "Hepatic Urea Cycle", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u2-t19"] = [
    {
      engine: "pathway",
      title: "Hepatic Urea Cycle (Krebs-Henseleit) & Hyperammonaemia Lab",
      subtitle: "Follow the 2 mitochondrial + 3 cytosolic reactions detoxifying toxic NH₃ into Urea (3 ATP / 4 high-energy bonds) and simulate urea toxicity in cattle.",
      compartment: { y: 0.45, top: "MITOCHONDRIAL MATRIX (CPS-I & OTC — Rate-Limiting)", bottom: "HEPATOCYTE CYTOSOL (ASS, ASL, Arginase → Urea)" },
      nodes: [
        { label: "NH₄⁺ + HCO₃⁻", sub: "-2 ATP", x: 0.16, y: 0.24, kind: "rate", enzyme: "CPS-I (Rate-Limiting!)", info: "Carbamoyl Phosphate Synthetase-I requires N-Acetylglutamate (NAG) as obligate allosteric activator! Consumes 2 ATP." },
        { label: "Citrulline", sub: "Exits Matrix", x: 0.62, y: 0.24, kind: "normal", enzyme: "Ornithine Transcarbamoylase", info: "Combines Carbamoyl-P + Ornithine → Citrulline, which crosses into cytosol." },
        { label: "Argininosuccinate", sub: "+Aspartate (-2 P)", x: 0.80, y: 0.72, kind: "energy", enzyme: "ASS (ATP→AMP+PPi)", info: "Aspartate donates the 2nd nitrogen of Urea! Costs 1 ATP → AMP + PPi (2 high-energy bonds)." },
        { label: "Arginine + Fumarate", sub: "Bicycle Link", x: 0.48, y: 0.72, kind: "organ", enzyme: "Argininosuccinate Lyase", info: "Fumarate links Urea Cycle to Krebs Cycle ('Krebs Bicycle')." },
        { label: "Urea + Ornithine", sub: "Excreted in Urine", x: 0.18, y: 0.72, kind: "energy", enzyme: "Arginase (Liver only)", info: "Cleaves Arginine into non-toxic Urea + Ornithine (re-enters mitochondria). Cats are exquisitely sensitive to Arginine-free meals → fatal hyperammonaemia!" }
      ],
      edges: [
        { from: 0, to: 1, label: "CPS-I → OTC" },
        { from: 1, to: 2, label: "+Aspartate" },
        { from: 2, to: 3, label: "ASL (-Fumarate)" },
        { from: 3, to: 4, label: "Arginase (→ Urea)" },
        { from: 4, to: 1, label: "Ornithine Recycle" }
      ],
      modes: [
        {
          id: "normal", label: "Normal Detoxification", speed: 1.1, boost: [0, 3],
          note: "2 N atoms (1 from free NH₄⁺ + 1 from Aspartate) + 1 C (HCO₃⁻) → 1 Urea. Costs 3 ATP (4 high-energy bonds).",
          metrics: [
            { label: "Energy Cost", val: "3 ATP (4 ~P Bonds)", cls: "is-info" },
            { label: "Activator (CPS-I)", val: "N-Acetylglutamate", cls: "is-ok" },
            { label: "2nd N Donor", val: "Aspartate", cls: "is-info" },
            { label: "Blood NH₃", val: "Low (< 60 µmol/L)", cls: "is-ok" }
          ]
        },
        {
          id: "tox", label: "Bovine Urea Tox. / Cat Arg Def.", speed: 0.2, blocked: [0, 4],
          note: "Excess rumen NPN (urea) or Arginine deficiency in cats stalls the cycle → NH₃ crosses BBB → depletes brain α-KG & ATP → hepatic encephalopathy/seizures!",
          metrics: [
            { label: "Blood Ammonia", val: "SEVERE SPIKE!", cls: "is-danger" },
            { label: "Brain Lesion", val: "α-KG Depletion (TCA ↓)", cls: "is-danger" },
            { label: "Bovine Antidote", val: "Cold Vinegar (Acidifies)", cls: "is-warn" },
            { label: "Feline Note", val: "Arginine Strictly Essential", cls: "is-danger" }
          ]
        }
      ]
    }
  ];

  S["u2-t20"] = [
    {
      engine: "pathway",
      title: "Purine Catabolism, Salvage (HGPRT) & Dalmatian Urate Defect",
      subtitle: "Compare normal canine purine breakdown (→ soluble Allantoin) vs Dalmatian dogs & birds (excrete poorly soluble Uric Acid).",
      nodes: [
        { label: "IMP / AMP / GMP", sub: "De Novo (PRPP)", x: 0.14, y: 0.48, kind: "normal", enzyme: "PRPP Amidotransferase", info: "Purine ring assembled directly on Ribose-5-P (PRPP) using Glycine, Gln, Asp, CO₂, and Formyl-THF." },
        { label: "Hypoxanthine", sub: "Salvage Branch", x: 0.40, y: 0.48, kind: "rate", enzyme: "HGPRT Salvage", info: "HGPRT recycles Hypoxanthine/Guanine back to IMP/GMP saving ATP." },
        { label: "Uric Acid", sub: "Poorly Soluble", x: 0.68, y: 0.48, kind: "warn", enzyme: "Xanthine Oxidase (Mo)", info: "Molybdenum-containing enzyme inhibited by Allopurinol. Final end-product in Birds/Reptiles (uricotelic) and Primates." },
        { label: "Allantoin", sub: "Water-Soluble!", x: 0.90, y: 0.48, kind: "energy", enzyme: "Uricase (Hepatic)", info: "Most domestic mammals (dogs, cats, cattle, horses) oxidize Uric Acid → soluble Allantoin. Dalmatians have a SLC2A9 transporter defect causing urate urolithiasis!" }
      ],
      edges: [
        { from: 0, to: 1, label: "Degradation" },
        { from: 1, to: 2, label: "Xanthine Oxidase" },
        { from: 2, to: 3, label: "Uricase" }
      ],
      modes: [
        {
          id: "mammal", label: "Dog / Cattle (→ Allantoin)", speed: 1.1, boost: [2],
          note: "Hepatic Uricase converts Uric Acid into highly water-soluble Allantoin → zero gout risk.",
          metrics: [
            { label: "End Product", val: "Allantoin (Soluble)", cls: "is-ok" },
            { label: "Key Enzyme", val: "Uricase Active", cls: "is-ok" },
            { label: "XO Inhibitor", val: "Allopurinol", cls: "is-info" },
            { label: "Urolith Risk", val: "Very Low", cls: "is-ok" }
          ]
        },
        {
          id: "dalmatian", label: "Dalmatian / Avian (Uric Acid)", speed: 1.0, blocked: [2],
          note: "Dalmatians have defective hepatic urate uptake (SLC2A9); birds lack Uricase completely → hyperuricaemia & urate stones / visceral gout!",
          metrics: [
            { label: "End Product", val: "Uric Acid (Insoluble)", cls: "is-danger" },
            { label: "Dalmatian Defect", val: "SLC2A9 Transporter", cls: "is-warn" },
            { label: "Avian Lesion", val: "Visceral/Articular Gout", cls: "is-danger" },
            { label: "Management", val: "Low-Purine + Allopurinol", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u2-t21"] = [
    {
      engine: "replication3d",
      title: "Live DNA Replication Fork (Leading vs Okazaki Lagging & Enrofloxacin)",
      subtitle: "Watch Helicase & DNA Gyrase unwind dsDNA as the Leading Strand runs continuously 5'→3' and the Lagging Strand builds Okazaki fragments!"
    }
  ];

  S["u2-t22"] = [
    {
      engine: "pathway",
      title: "Whole-Body Integration of Metabolism (Fed vs Starved vs Lactating Cow)",
      subtitle: "Switch physiological states to observe real-time fuel trafficking between Liver, Adipose, Skeletal Muscle, Brain, and Mammary Gland.",
      nodes: [
        { label: "Liver", sub: "Metabolic Hub", x: 0.50, y: 0.24, kind: "rate", enzyme: "Gluconeogenesis / Ketones", info: "Maintains blood glucose via glycogenolysis/gluconeogenesis and synthesizes ketone bodies during fasting/lactation." },
        { label: "Adipose Tissue", sub: "TAG Depot", x: 0.16, y: 0.54, kind: "warn", enzyme: "LPL (Fed) / HSL (Fasted)", info: "Stores TAG under Insulin; mobilizes NEFA + Glycerol via HSL under Glucagon/Epinephrine." },
        { label: "Skeletal Muscle", sub: "Glucose / FA / KB", x: 0.84, y: 0.54, kind: "normal", enzyme: "GLUT4 (Insulin-dep.)", info: "Uses glucose when fed; switches to Fatty Acids and Ketone Bodies during starvation to spare glucose for Brain." },
        { label: "Brain / CNS", sub: "Glucose → Ketones", x: 0.30, y: 0.84, kind: "organ", enzyme: "GLUT1/3 (Insulin-indep.)", info: "Cannot oxidize fatty acids (BBB). Relies on Glucose (~120 g/day), adapting to Ketone Bodies during prolonged starvation." },
        { label: "Mammary Gland", sub: "Lactose & Milk Fat", x: 0.72, y: 0.84, kind: "energy", enzyme: "Lactose Synthase", info: "In a high-yielding dairy cow, mammary uptake consumes up to 70–80% of total hepatic glucose output for lactose!" }
      ],
      edges: [
        { from: 1, to: 0, label: "NEFA + Glycerol" },
        { from: 0, to: 3, label: "Glucose / Ketones" },
        { from: 0, to: 4, label: "Glucose (Lactose)" },
        { from: 1, to: 2, label: "NEFA Fuel" },
        { from: 2, to: 0, label: "Lactate / Alanine" }
      ],
      modes: [
        {
          id: "fed", label: "Well-Fed (Insulin ↑)", speed: 1.0, boost: [2],
          note: "High Insulin:Glucagon ratio promotes glycogenesis, glycolysis, lipogenesis, and protein synthesis.",
          metrics: [
            { label: "Insulin:Glucagon", val: "HIGH", cls: "is-ok" },
            { label: "Liver Mode", val: "Glycogenesis + Lipogenesis", cls: "is-ok" },
            { label: "Adipose Mode", val: "TAG Storage (LPL ↑)", cls: "is-ok" },
            { label: "Brain Fuel", val: "100% Glucose", cls: "is-info" }
          ]
        },
        {
          id: "starved", label: "Prolonged Starvation", speed: 1.2, boost: [0, 1, 3],
          note: "Low Insulin, High Glucagon: Lipolysis surges, muscle switches to FAs, liver exports Ketone Bodies to spare brain glucose & muscle protein.",
          metrics: [
            { label: "Insulin:Glucagon", val: "VERY LOW", cls: "is-warn" },
            { label: "Liver Mode", val: "Gluconeog. + Ketogenesis", cls: "is-warn" },
            { label: "Brain Adaptation", val: "Glucose + Ketone Bodies", cls: "is-info" },
            { label: "Muscle Proteolysis", val: "Slowed (Protein Sparing)", cls: "is-ok" }
          ]
        },
        {
          id: "lactation", label: "Early Lactation Dairy Cow", speed: 1.4, boost: [0, 2],
          note: "Homeorhesis prioritizes the mammary gland! Huge glucose drain for milk lactose + NEFA mobilization → high risk of Ketosis & Fatty Liver.",
          metrics: [
            { label: "Mammary Glucose", val: "70–80% of Liver Output", cls: "is-danger" },
            { label: "NEFA & BHBA", val: "Elevated (NEB)", cls: "is-danger" },
            { label: "Milk Fat Precursor", val: "Acetate + BHBA + NEFA", cls: "is-info" },
            { label: "Priority", val: "Propylene Glycol / Propionate", cls: "is-ok" }
          ]
        }
      ]
    }
  ];
})();
