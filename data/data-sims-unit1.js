/* ============================================================
   data-sims-unit1.js — Theory Unit 1 Interactive Labs (17 topics)
   General Veterinary Biochemistry (u1-t01 through u1-t17)
   ============================================================ */
(function () {
  var S = window.topicSims = window.topicSims || {};

  S["u1-t01"] = [
    {
      engine: "pathway",
      sectionMatch: "1. Definition and Historical Scope",
      title: "Bioenergetic Coupling & Comparative Species Metabolism",
      subtitle: "Explore how catabolism drives ATP/NADPH generation across Ruminants, Monogastrics, and Obligate Carnivores (Cats).",
      nodes: [
        { label: "Dietary Feed", sub: "Carbs / Lipid / Prot", x: 0.14, y: 0.50, kind: "organ", info: "In monogastrics, starch yields glucose directly. In ruminants, ruminal microbes ferment cellulose/starch into VFAs (Acetate, Propionate, Butyrate)." },
        { label: "Catabolism", sub: "Oxidation (ΔG < 0)", x: 0.42, y: 0.28, kind: "rate", info: "Exergonic breakdown (Glycolysis, β-oxidation, TCA cycle) harvests free energy into ATP, NADH, and FADH₂." },
        { label: "ATP & NADPH", sub: "Energy Currency", x: 0.68, y: 0.50, kind: "energy", info: "High-energy phosphoanhydride bonds of ATP (ΔG°' = -30.5 kJ/mol) and reducing power of NADPH drive biosynthesis and active transport." },
        { label: "Anabolism", sub: "Biosynthesis (ΔG > 0)", x: 0.42, y: 0.74, kind: "normal", info: "Endergonic synthesis of milk lactose/casein, muscle protein, body fat, and nucleic acids." },
        { label: "Clinical Output", sub: "Homeostasis / Milk", x: 0.88, y: 0.50, kind: "organ", info: "Balanced bioenergetics sustains growth, lactation, and thermoregulation; imbalance causes ketosis, acidosis, or hypoglycaemia." }
      ],
      edges: [
        { from: 0, to: 1, label: "Digestion" },
        { from: 1, to: 2, label: "ATP / NADH" },
        { from: 2, to: 3, label: "Coupled ΔG" },
        { from: 3, to: 4, label: "Milk / Tissue" },
        { from: 2, to: 4, label: "Active Work" }
      ],
      modes: [
        {
          id: "ruminant", label: "Ruminant (Dairy Cow)", speed: 1.1, boost: [0, 1],
          note: "Virtually zero dietary glucose absorbed; ruminal propionate drives hepatic gluconeogenesis for lactose synthesis.",
          metrics: [
            { label: "Primary Glucose", val: "Propionate → Liver", cls: "is-info" },
            { label: "Major Fuel", val: "VFAs (Ac/Pr/Bu)", cls: "is-ok" },
            { label: "Plasma Glucose", val: "45–75 mg/dL", cls: "is-info" },
            { label: "Key Risk", val: "Bovine Ketosis", cls: "is-warn" }
          ]
        },
        {
          id: "monogastric", label: "Monogastric (Dog / Pig)", speed: 1.0,
          note: "Direct intestinal glucose absorption via SGLT-1; insulin regulates postprandial glycogen and lipid storage.",
          metrics: [
            { label: "Primary Glucose", val: "Dietary Starch", cls: "is-ok" },
            { label: "Nitrogen Waste", val: "Urea (Ureotelic)", cls: "is-info" },
            { label: "Plasma Glucose", val: "75–115 mg/dL", cls: "is-ok" },
            { label: "Key Risk", val: "Neonatal Hypoglycaemia", cls: "is-warn" }
          ]
        },
        {
          id: "feline", label: "Strict Carnivore (Cat)", speed: 1.2, boost: [1, 2],
          note: "Constitutively high hepatic transaminases & urea cycle; lacks Δ6-desaturase and requires dietary Taurine & Arachidonic acid.",
          metrics: [
            { label: "Gluconeogenesis", val: "Continuous (AAs)", cls: "is-warn" },
            { label: "Essential Nutrients", val: "Taurine, Arg, AA", cls: "is-danger" },
            { label: "Glucuronidation", val: "Deficient (UGT1A6)", cls: "is-danger" },
            { label: "Drug Hazard", val: "Paracetamol Toxic!", cls: "is-danger" }
          ]
        }
      ]
    }
  ];

  S["u1-t02"] = [
    {
      engine: "membrane",
      sectionMatch: "1. Architecture: The Fluid Mosaic Model",
      title: "Fluid Mosaic Plasma Membrane: Fluidity & Cholesterol Buffer Lab",
      subtitle: "Adjust temperature, cis-unsaturated fatty acid kinks, and cholesterol to observe bidirectional fluidity buffering and bilayer integrity.",
      initialMode: "fluidity",
      tabs: [
        { id: "fluidity", label: "Bilayer Fluidity & Integrity" },
        { id: "simple", label: "Simple Diffusion (O₂/CO₂)" }
      ],
      temp: 37,
      unsat: 50,
      chol: 25
    },
    {
      engine: "membrane",
      sectionMatch: "2. Mechanisms of Membrane Transport",
      title: "Membrane Ion Transport & Electrogenic Na⁺/K⁺-ATPase Pump",
      subtitle: "Compare Passive Facilitated Diffusion (GLUT), Primary Active Na⁺/K⁺-ATPase (3 Na⁺ out / 2 K⁺ in + Ouabain block), and Secondary SGLT-1 Symport.",
      initialMode: "pump",
      tabs: [
        { id: "pump", label: "Na⁺/K⁺-ATPase (3 Na⁺ / 2 K⁺)" },
        { id: "facilitated", label: "Facilitated (GLUT)" },
        { id: "sglt", label: "Secondary Active (SGLT-1)" },
        { id: "simple", label: "Simple Diffusion" }
      ]
    }
  ];

  S["u1-t03"] = [
    {
      engine: "donnan",
      sectionMatch: "1. Principle",
      title: "Gibbs-Donnan Membrane Equilibrium & Osmotic Swelling Simulator",
      subtitle: "Adjust intracellular impermeant proteinate [Pr⁻] and diffusible [NaCl] to verify [Na⁺]ᵢ[Cl⁻]ᵢ = [Na⁺]ₒ[Cl⁻]ₒ, Nernst potential, and Na⁺/K⁺-ATPase volume protection.",
      pr: 45,
      nacl: 100
    }
  ];

  S["u1-t04"] = [
    {
      engine: "henderson",
      sectionMatch: "Buffer",
      title: "Weak Acid Dissociation & Physiological Buffer Simulator",
      subtitle: "Titrate Bicarbonate, Phosphate, Acetate, or Histidine/Hb buffers and watch [HA] vs [A⁻] molecular ratios and buffer capacity (pKa ± 1).",
      mode: "titration",
      bufferKey: "phos",
      ratioPct: 50
    }
  ];

  S["u1-t05"] = [
    {
      engine: "henderson",
      sectionMatch: "Henderson-Hasselbalch",
      title: "Henderson-Hasselbalch Equation & Buffer Capacity Lab",
      subtitle: "Verify pH = pKa + log₁₀([A⁻]/[HA]) interactively across biological buffers and locate the exact inflection point where [A⁻] = [HA].",
      mode: "titration",
      bufferKey: "bicarb",
      ratioPct: 50
    },
    {
      engine: "henderson",
      title: "Blood Bicarbonate Buffer (20:1 Ratio) Clinical Explorer",
      subtitle: "See why plasma pH stays at 7.40 when [HCO₃⁻] : H₂CO₃ is 20:1 (24 mEq/L : 1.2 mM) despite pKa = 6.1.",
      mode: "bloodgas",
      hco3: 24,
      pco2: 40
    }
  ];

  S["u1-t06"] = [
    {
      engine: "monosaccharide3d",
      title: "3D Rotatable Monosaccharide Chair, Mutarotation & Epimer Explorer",
      subtitle: "Drag to rotate the 3D ⁴C₁ chair! Compare α vs β D-Glucose (axial vs equatorial C1-OH), watch C2 flip for Mannose, C4 flip for Galactose, and C2-NHAc for GlcNAc."
    }
  ];

  S["u1-t07"] = [
    {
      engine: "disaccharide3d",
      title: "Disaccharide Haworth Structures, Benedict's Cu²⁺ Test & Hydrolysis Lab",
      subtitle: "Inspect exact C1–C6 Haworth rings and glycosidic oxygen bridges — test Maltose, Lactose, and Sucrose with Benedict's Cu²⁺ and Sucrase/HCl hydrolysis!"
    }
  ];

  S["u1-t08"] = [
    {
      engine: "polysaccharide3d",
      title: "3D Amylose Helix (+ Iodine), Glycogen Branching & Rumen Cellulose Lab",
      subtitle: "See I₃⁻ slip inside Amylose's 3D helix, watch Phosphorylase attack Glycogen's multiple ends, and compare Mammalian Amylase vs Rumen Cellulase on β(1→4) Cellulose!"
    }
  ];

  S["u1-t09"] = [
    {
      engine: "peptidoglycan3d",
      title: "Peptidoglycan Cell Wall (Lysozyme & Penicillin) & Synovial GAG Cushion",
      subtitle: "Apply Lysozyme (cuts β1→4 NAG–NAM) or Penicillin (blocks cross-links) to see bacterial osmotic lysis, or compress a hydrated equine joint GAG shock absorber."
    }
  ];

  S["u1-t10"] = [
    {
      engine: "lipid3d",
      title: "Triacylglycerol Ester Hydrolysis (Lipase) & Phospholipid Bilayer Assembly",
      subtitle: "See straight saturated vs kinked cis-unsaturated fatty acyl chains on Glycerol, cleave with Lipase, and watch amphipathic phospholipids self-assemble in water!"
    }
  ];

  S["u1-t11"] = [
    {
      engine: "molecule",
      title: "Plasma Lipoproteins: Diameter, Density & Lipid-Protein Composition",
      subtitle: "Click each lipoprotein class to see how size decreases as density and protein percentage increase from Chylomicrons to HDL.",
      states: [
        {
          id: "cm", label: "Chylomicrons", style: "lipoprotein", radius: 88, coreLabel: "85% Dietary TAG",
          bars: [
            { label: "Triacylglycerol (TAG)", pct: 85, color: "coral" },
            { label: "Phospholipid", pct: 8, color: "teal" },
            { label: "Cholesterol", pct: 5, color: "purple" },
            { label: "Protein (ApoB-48, C-II)", pct: 2, color: "blue" }
          ],
          info: "Largest, least dense (<0.95 g/mL) lipoprotein. Synthesized in enterocytes to transport dietary TAG via intestinal lymphatics. ApoC-II activates capillary Lipoprotein Lipase (LPL).",
          metrics: [
            { label: "Density", val: "< 0.95 g/mL (Floats)", cls: "is-info" },
            { label: "Diameter", val: "80 – 500 nm", cls: "is-info" },
            { label: "Key Apoprotein", val: "ApoB-48, ApoC-II", cls: "is-ok" },
            { label: "Origin", val: "Intestinal Enterocyte", cls: "is-warn" }
          ]
        },
        {
          id: "vldl", label: "VLDL", style: "lipoprotein", radius: 66, coreLabel: "55% Endogenous TAG",
          bars: [
            { label: "Triacylglycerol (TAG)", pct: 55, color: "coral" },
            { label: "Cholesterol", pct: 19, color: "purple" },
            { label: "Phospholipid", pct: 18, color: "teal" },
            { label: "Protein (ApoB-100, C-II)", pct: 8, color: "blue" }
          ],
          info: "Synthesized in liver to export endogenous TAG to adipose/muscle/mammary gland. Ruminants have inherently low hepatic VLDL export — predisposing dairy cows to Fatty Liver (Hepatic Lipidosis)!",
          metrics: [
            { label: "Density", val: "0.95 – 1.006 g/mL", cls: "is-info" },
            { label: "Key Apoprotein", val: "ApoB-100, ApoC-II", cls: "is-ok" },
            { label: "Origin", val: "Liver", cls: "is-info" },
            { label: "Bovine Clinical", val: "Low VLDL → Fatty Liver", cls: "is-danger" }
          ]
        },
        {
          id: "ldl", label: "LDL", style: "lipoprotein", radius: 46, coreLabel: "45% Cholesterol",
          bars: [
            { label: "Cholesterol & CE", pct: 45, color: "purple" },
            { label: "Protein (ApoB-100)", pct: 22, color: "blue" },
            { label: "Phospholipid", pct: 23, color: "teal" },
            { label: "Triacylglycerol", pct: 10, color: "coral" }
          ],
          info: "Cholesterol-rich remnant of VLDL catabolism. Delivers cholesterol to peripheral tissues and steroidogenic glands via receptor-mediated endocytosis recognizing ApoB-100.",
          metrics: [
            { label: "Density", val: "1.019 – 1.063 g/mL", cls: "is-info" },
            { label: "Key Apoprotein", val: "ApoB-100 (sole)", cls: "is-warn" },
            { label: "Primary Role", val: "Cholesterol Delivery", cls: "is-info" },
            { label: "Electrophoresis", val: "β-Lipoprotein", cls: "is-ok" }
          ]
        },
        {
          id: "hdl", label: "HDL", style: "lipoprotein", radius: 30, coreLabel: "50% Protein + CE",
          bars: [
            { label: "Protein (ApoA-I)", pct: 50, color: "blue" },
            { label: "Phospholipid", pct: 28, color: "teal" },
            { label: "Cholesterol & CE", pct: 18, color: "purple" },
            { label: "Triacylglycerol", pct: 4, color: "coral" }
          ],
          info: "Smallest, densest (1.063–1.21 g/mL) lipoprotein. Dominant lipoprotein in dogs, cats, cattle, and horses! Mediates Reverse Cholesterol Transport via LCAT (activated by ApoA-I).",
          metrics: [
            { label: "Density", val: "1.063 – 1.21 g/mL", cls: "is-ok" },
            { label: "Key Apoprotein", val: "ApoA-I (LCAT activator)", cls: "is-ok" },
            { label: "Primary Role", val: "Reverse Chol. Transport", cls: "is-ok" },
            { label: "Vet Species", val: "Major fraction in Dog/Cow", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u1-t12"] = [
    {
      engine: "molecule",
      kind: "eicosanoid",
      title: "Prostaglandin Biosynthesis & Veterinary NSAID Inhibition Lab",
      subtitle: "Observe Arachidonic Acid (C20:4 ω-6) conversion via COX-1/COX-2 into PGF₂α, PGE₂, PGI₂, and TXA₂ — and toggle NSAID blockade.",
      nsaid: false
    }
  ];

  S["u1-t13"] = [
    {
      engine: "molecule",
      kind: "folding",
      title: "Protein 3D Folding Stability & Thermal Denaturation Simulator",
      subtitle: "Increase temperature to observe disruption of non-covalent 2°/3° stabilizing forces while covalent primary peptide bonds remain intact.",
      temp: 37
    }
  ];

  S["u1-t14"] = [
    {
      engine: "molecule",
      kind: "zwitterion",
      title: "Amino Acid Zwitterion & Ionization State Lab (pH 1–13)",
      subtitle: "Slide solution pH across pK₁ (2.34) and pK₂ (9.60) to watch α-amino and α-carboxyl protonation and electrophoretic migration.",
      pk1: 2.34,
      pk2: 9.60,
      ph: 6.0,
      rGroup: "R (Side Chain)"
    }
  ];

  S["u1-t15"] = [
    {
      engine: "molecule",
      kind: "zwitterion",
      title: "Isoelectric Point (pI) & Electrophoretic Mobility Simulator",
      subtitle: "Find the exact pH = pI where net charge is 0 (zwitterion, zero migration, minimum solubility — basis of casein precipitation at pH 4.6).",
      pk1: 2.34,
      pk2: 9.60,
      ph: 5.97,
      rGroup: "Glycine (pI = 5.97)"
    }
  ];

  S["u1-t16"] = [
    {
      engine: "atp3d",
      title: "ATP High-Energy Phosphoanhydride Bond & Electrostatic Repulsion Lab",
      subtitle: "See Adenine + Ribose + α-β-γ Phosphates chelated by Mg²⁺, then hydrolyze the terminal γ-phosphate to watch -30.5 kJ/mol energy release!"
    }
  ];

  S["u1-t17"] = [
    {
      engine: "molecule",
      kind: "helix",
      sectionMatch: "DNA",
      title: "Watson-Crick DNA Double Helix & Thermal Melting (Tm) Simulator",
      subtitle: "Vary GC% (3 H-bonds) vs AT% (2 H-bonds) and raise temperature to observe strand denaturation and Marmur-Doty Tm shift.",
      gc: 50,
      temp: 37
    }
  ];
})();
