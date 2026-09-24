/* ============================================================
   data-quiz.JS  —  Master Examination Quiz Bank
   Veterinary Biochemistry Studio (B.V.Sc & A.H. Year 2)
   Strictly aligned with VCI MSVE Syllabus (Credit Hours 2+1=3)
   Unit 1: 250 questions (126 MCQ, 62 TF, 62 FIB)
   Unit 2: 250 questions (126 MCQ, 62 TF, 62 FIB)
   Unit 3: 180 questions (90 MCQ, 45 TF, 45 FIB)
   Total Questions: 680 | MCQ : TF : FIB kept close to 2 : 1 : 1
   NOTE: add new questions at the END of each list. Question keys are
   unit:format:index, so re-ordering would detach saved Smart Review history.
   ============================================================ */

var quizBank = {
  "unit-1": {
    "mcq": [
      {
        "q": "According to the Singer and Nicolson Fluid Mosaic Model, biological membranes are best described as:",
        "o": [
          "Two-dimensional solutions of oriented lipids and globular proteins",
          "Rigid protein layers sandwiching a static lipid core",
          "Continuous solid monolayers of carbohydrates and proteins",
          "Lipid monolayers interspersed with fixed structural glycoproteins"
        ],
        "a": 0,
        "e": "Singer and Nicolson (1972) proposed the Fluid Mosaic Model where membranes are quasi-fluid, two-dimensional solutions of oriented phospholipids with embedded integral and peripheral proteins capable of lateral diffusion.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The primary driving force for the spontaneous formation of phospholipid bilayers in aqueous media is:",
        "o": [
          "Covalent bond formation between head groups",
          "Hydrogen bonding between hydrocarbon tails",
          "Electrostatic attraction between glycerol backbones",
          "Hydrophobic interactions and van der Waals forces between fatty acyl chains"
        ],
        "a": 3,
        "e": "Hydrophobic interactions exclude water molecules from contacting non-polar hydrocarbon tails, increasing water entropy and stabilizing the bilayer alongside van der Waals forces.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Which membrane transport process moves solutes against their electrochemical gradient directly utilizing ATP hydrolysis?",
        "o": [
          "Primary active transport",
          "Simple passive diffusion",
          "Facilitated diffusion",
          "Secondary active symport"
        ],
        "a": 0,
        "e": "Primary active transport directly couples the hydrolysis of ATP to the uphill movement of ions against their electrochemical gradient (e.g., Na+/K+-ATPase).",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The Na+/K+-ATPase pump in animal cell membranes pumps:",
        "o": [
          "3 Na+ into the cell and 2 K+ out of the cell per ATP",
          "2 Na+ out of the cell and 3 K+ into the cell per ATP",
          "3 Na+ out of the cell and 2 K+ into the cell per ATP",
          "1 Na+ out of the cell and 1 K+ into the cell per ATP"
        ],
        "a": 2,
        "e": "Na+/K+-ATPase is electrogenic, pumping 3 Na+ out of the cytoplasm and 2 K+ into the cell for every 1 molecule of ATP hydrolyzed.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Glucose absorption across the apical border of ruminant and monogastric intestinal enterocytes occurs via:",
        "o": [
          "GLUT-2 facilitated uniporter",
          "Simple passive lipophilic partition",
          "SGLT-1 Na+-dependent secondary active symport",
          "Direct ATP-dependent ABC cassette pump"
        ],
        "a": 2,
        "e": "SGLT-1 (Sodium-Glucose Cotransporter 1) transports 1 glucose molecule along with 2 Na+ ions down the Na+ electrochemical gradient maintained by the basolateral Na+/K+ pump.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Donnan membrane equilibrium occurs across a semi-permeable membrane when:",
        "o": [
          "All ions can freely cross the membrane in equal numbers",
          "No electrical potential gradient exists across the membrane",
          "A non-diffusible charged macromolecule (like protein) is confined to one compartment",
          "Water movement is completely arrested by high hydrostatic pressure"
        ],
        "a": 2,
        "e": "The presence of a non-diffusible, impermeable polyvalent ion (such as an intracellular polyanionic protein) forces an unequal distribution of diffusible cations and anions at equilibrium.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "At Donnan equilibrium, the product of diffusible cations and anions on one side (Side 1) compared to the other side (Side 2) is:",
        "o": [
          "[C1+][C2+] = [A1-][A2-]",
          "[C1+] / [A1-] = [C2+] / [A2-]",
          "[C1+][A1-] = [C2+][A2-]",
          "[C1+] + [A1-] = [C2+] + [A2-]"
        ],
        "a": 2,
        "e": "Gibbs-Donnan rule states that at thermodynamic equilibrium, the product of concentrations of diffusible monovalent cations and anions in one compartment equals that in the opposing compartment: [Na+1][Cl-1] = [Na+2][Cl-2].",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "Which physiological compartment exhibits significant Gibbs-Donnan effects due to high non-diffusible protein content?",
        "o": [
          "Glomerular filtrate in Bowman's capsule",
          "Blood plasma compared to interstitial fluid across capillary walls",
          "Cerebrospinal fluid compared to aqueous humor",
          "Gastric juice compared to bile"
        ],
        "a": 1,
        "e": "Plasma proteins (chiefly albumin) cannot cross capillary endothelium, creating a Gibbs-Donnan distribution: plasma has slightly higher diffusible cation concentration and lower diffusible anion concentration than interstitial fluid.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The pH of a solution is defined mathematically as:",
        "o": [
          "ln [H+]",
          "-ln [OH-]",
          "10^[H+]",
          "-log10 [H+]"
        ],
        "a": 3,
        "e": "Sørensen (1909) defined pH as the negative logarithm to the base 10 of hydrogen ion concentration in moles per liter: pH = -log10[H+].",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "A chemical buffer solution resists changes in pH because it consists of:",
        "o": [
          "A strong acid and its conjugate strong base",
          "Equimolar concentrations of strong HCl and NaOH",
          "A neutral salt dissolved in distilled water",
          "A weak acid and its conjugate base (or weak base and conjugate acid)"
        ],
        "a": 3,
        "e": "Buffers contain a conjugate weak acid-base pair. When H+ or OH- ions are added, the weak base or weak acid neutralizes them with minimal shift in free [H+].",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The maximum buffering capacity of any weak acid-conjugate base buffer system is achieved when:",
        "o": [
          "pH is at least 2 units above the pKa",
          "The solution is completely non-ionized",
          "Concentration of conjugate base is ten times the weak acid",
          "pH equals the pKa of the weak acid"
        ],
        "a": 3,
        "e": "When pH = pKa, the ratio of conjugate base to conjugate acid is exactly 1:1 ([A-] = [HA]), providing maximum resistance against both acid and alkali addition.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The Henderson-Hasselbalch equation for a weak acid (HA) is correctly stated as:",
        "o": [
          "pH = pKa + log([HA] / [A-])",
          "pH = pKa - log([A-] / [HA])",
          "pH = pKa * log([A-] / [HA])",
          "pH = pKa + log([A-] / [HA])"
        ],
        "a": 3,
        "e": "The Henderson-Hasselbalch equation is pH = pKa + log10([Conjugate Base] / [Weak Acid]) or pH = pKa + log([A-]/[HA]).",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Normal arterial blood pH in domestic cattle, sheep, and dogs is maintained tightly around:",
        "o": [
          "6.80 to 7.00",
          "7.10 to 7.20",
          "7.70 to 7.85",
          "7.35 to 7.45"
        ],
        "a": 3,
        "e": "Normal mammalian arterial blood pH is tightly regulated within 7.35 to 7.45 (mean 7.40); values below 7.35 represent acidemia and above 7.45 represent alkalemia.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "In mammalian blood plasma at pH 7.40, the physiological ratio of [HCO3-] to dissolved [CO2] (dCO2) is approximately:",
        "o": [
          "1 : 1",
          "10 : 1",
          "20 : 1",
          "40 : 1"
        ],
        "a": 2,
        "e": "Applying Henderson-Hasselbalch: 7.40 = 6.10 + log([HCO3-]/[dCO2]). Thus log ratio = 1.30, and the antilog of 1.30 is 20:1.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The most effective physiological intracellular buffer system in erythrocytes is:",
        "o": [
          "Hemoglobin buffer system",
          "Bicarbonate buffer",
          "Ammonium buffer",
          "Acetate buffer"
        ],
        "a": 0,
        "e": "Hemoglobin contains 38 histidine residues with imidazole side chains having pKa near 6.8, providing powerful intracellular buffering in RBCs.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Water channels that facilitate rapid osmotic water movement across renal tubular and capillary membranes are known as:",
        "o": [
          "Cadherins",
          "Selectins",
          "Aquaporins",
          "Integrins"
        ],
        "a": 2,
        "e": "Aquaporins (discovered by Peter Agre) are homotetrameric integral membrane proteins that selectively transport water molecules down osmotic gradients.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Cholesterol modulates animal plasma membrane fluidity by:",
        "o": [
          "Completely preventing any protein from inserting into membranes",
          "Always increasing fluidity at low temperatures and decreasing fluidity at high temperatures",
          "Inducing permanent crystallization of all hydrocarbon chains",
          "Dissolving sphingolipids into single fatty acids"
        ],
        "a": 1,
        "e": "Cholesterol acts as a membrane bidirectional fluidity buffer: its rigid steroid ring prevents fatty acyl crystallization at low temperatures while restricting excessive lipid motion at physiological temperatures.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "A weak acid has a pKa of 4.76. What is the pH when 50% of the acid is dissociated into its conjugate base?",
        "o": [
          "3.76",
          "7.00",
          "5.76",
          "4.76"
        ],
        "a": 3,
        "e": "When 50% is dissociated, [A-] = [HA]. Therefore [A-]/[HA] = 1, log(1) = 0, and pH = pKa + 0 = 4.76.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "D-Glucose and D-Galactose are related to each other as:",
        "o": [
          "C-2 epimers",
          "C-4 epimers",
          "Enantiomers",
          "Anomers"
        ],
        "a": 1,
        "e": "D-Glucose and D-Galactose differ in steric configuration only around Carbon-4, making them classic C-4 epimers.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "D-Glucose and D-Mannose are stereoisomers differing only at carbon position:",
        "o": [
          "C-1",
          "C-2",
          "C-3",
          "C-5"
        ],
        "a": 1,
        "e": "D-Glucose and D-Mannose are C-2 epimers, differing only in the spatial orientation of the -OH group at Carbon-2.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The cyclic alpha and beta forms of D-glucopyranose are examples of:",
        "o": [
          "Epimers",
          "Enantiomers",
          "Anomers",
          "Constitutional isomers"
        ],
        "a": 2,
        "e": "Anomers are isomeric forms of monosaccharides that differ only in their configuration about the hemiacetal or hemiketal carbonyl carbon (C-1 in aldoses).",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The prominent pentose sugar present in ATP, RNA, and NAD+ is:",
        "o": [
          "D-Ribose",
          "D-Arabinose",
          "D-Xylose",
          "D-Lyxose"
        ],
        "a": 0,
        "e": "D-Ribose is a 5-carbon aldopentose forming the furanose backbone of ribonucleotides, ATP, coenzymes (NAD+, FAD, CoA), and RNA.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Which monosaccharide derivative is an essential component of bacterial cell wall peptidoglycan?",
        "o": [
          "N-Acetylglucosamine (NAG)",
          "N-Acetylgalactosamine",
          "Sorbitol",
          "Gluconolactone"
        ],
        "a": 0,
        "e": "Bacterial peptidoglycan consists of alternating units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by beta-1,4 glycosidic bonds.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Sialic acid (N-acetylneuraminic acid, NANA) is derived chemically from condensation of:",
        "o": [
          "Glucose and acetate",
          "Fructose and succinate",
          "Galactose and glycerol",
          "Mannosamine and pyruvate"
        ],
        "a": 3,
        "e": "Sialic acid (NANA) is a 9-carbon acidic amino sugar synthesized from N-acetylmannosamine-6-phosphate and phosphoenolpyruvate (PEP).",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Maltose is a reducing disaccharide composed of two glucose molecules joined by:",
        "o": [
          "beta-1,4-glycosidic bond",
          "alpha-1,4-glycosidic bond",
          "alpha-1,6-glycosidic bond",
          "alpha-1,beta-2-glycosidic bond"
        ],
        "a": 1,
        "e": "Maltose is alpha-D-glucopyranosyl-(1->4)-D-glucopyranose, produced during starch hydrolysis by salivary and pancreatic alpha-amylase.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Lactose, the principal carbohydrate of bovine milk, is linked by which glycosidic bond?",
        "o": [
          "alpha-1,4-glycosidic bond",
          "alpha-1,6-glycosidic bond",
          "beta-1,4-glycosidic bond",
          "beta-1,2-glycosidic bond"
        ],
        "a": 2,
        "e": "Lactose is beta-D-galactopyranosyl-(1->4)-D-glucopyranose, formed by beta-1,4 linkage between galactose and glucose.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Sucrose is a non-reducing disaccharide because:",
        "o": [
          "It contains no ketone or aldehyde groups in its structure",
          "Both anomeric carbons (C-1 of glucose and C-2 of fructose) participate in the glycosidic bond",
          "It cannot be hydrolyzed by dilute acids",
          "It lacks hydroxyl groups on C-3 and C-4"
        ],
        "a": 1,
        "e": "In sucrose (alpha-D-glucopyranosyl-(1->2)-beta-D-fructofuranoside), the anomeric carbons of both glucose and fructose are tied up in the linkage, leaving no free hemiacetal/hemiketal group.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Cellobiose is obtained from partial hydrolysis of cellulose and consists of two glucose residues linked by:",
        "o": [
          "alpha-1,4 linkage",
          "beta-1,4 linkage",
          "alpha-1,6 linkage",
          "beta-1,6 linkage"
        ],
        "a": 1,
        "e": "Cellobiose is beta-D-glucopyranosyl-(1->4)-D-glucopyranose, the repeating disaccharide unit of structural plant cellulose.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "In plant starch, amylopectin differs from amylose because amylopectin contains:",
        "o": [
          "Branch points with alpha-1,6-glycosidic bonds every 24 to 30 glucose units",
          "Only beta-1,4 linkages",
          "Only alpha-1,3-glycosidic bonds",
          "Fructose units interspersed with glucose"
        ],
        "a": 0,
        "e": "Amylose is a linear polymer of alpha-1,4-linked D-glucose, whereas amylopectin is branched with alpha-1,6 linkages occurring every 24-30 residues.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Glycogen, the animal storage homopolysaccharide, is structurally most similar to amylopectin but:",
        "o": [
          "Has fewer branches with beta linkages",
          "Contains galactose residues in branches",
          "Is more extensively branched with alpha-1,6 linkages every 8 to 12 residues",
          "Is insoluble in water and unreactive"
        ],
        "a": 2,
        "e": "Glycogen has higher branching density (branch points every 8-12 glucose units), providing abundant non-reducing ends for rapid phosphorolytic release of glucose-1-phosphate.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Inulin is a fructosan polysaccharide clinically utilized in veterinary diagnostics for measuring:",
        "o": [
          "Total blood volume",
          "Glomerular filtration rate (GFR)",
          "Hepatic glycogen reserve",
          "Pancreatic lipase efficiency"
        ],
        "a": 1,
        "e": "Inulin is freely filtered at the renal glomerulus and is neither reabsorbed nor secreted by the nephron tubules, making inulin clearance the gold standard for GFR measurement.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Chitin, the major structural polymer in the exoskeleton of arthropods and fungal cell walls, consists of:",
        "o": [
          "alpha-1,4-linked galactosamine units",
          "beta-1,4-linked N-acetylglucosamine units",
          "beta-1,3-linked glucuronic acid units",
          "alpha-1,6-linked mannose units"
        ],
        "a": 1,
        "e": "Chitin is a linear homopolysaccharide of N-acetyl-D-glucosamine (NAG) units joined by beta-1,4 glycosidic bonds, giving it high tensile strength.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Which glycosaminoglycan (mucopolysaccharide) contains no sulfate groups and acts as a biological lubricant in synovial fluid?",
        "o": [
          "Chondroitin sulfate",
          "Hyaluronic acid",
          "Heparin",
          "Keratan sulfate"
        ],
        "a": 1,
        "e": "Hyaluronic acid is the only non-sulfated GAG, consisting of repeating units of D-glucuronic acid and N-acetylglucosamine, providing high viscosity to synovial fluid and vitreous humor.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Heparin is a powerful physiological anticoagulant produced by mast cells; its anticoagulant action is mediated by activating:",
        "o": [
          "Thrombin directly",
          "Antithrombin III (AT-III)",
          "Fibrinogen",
          "Factor VIII"
        ],
        "a": 1,
        "e": "Heparin binds to and induces an allosteric conformational change in Antithrombin III, increasing its rate of inhibiting thrombin and Factor Xa by over 1,000-fold.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The enzyme lysozyme found in tears, egg white, and milk exerts antibacterial action by hydrolyzing:",
        "o": [
          "Peptide cross-links between D-alanine residues",
          "beta-1,4 glycosidic bonds between NAM and NAG in bacterial peptidoglycan",
          "alpha-1,4 bonds of teichoic acids",
          "Phosphodiester bonds of bacterial mRNA"
        ],
        "a": 1,
        "e": "Lysozyme specifically cleaves the beta-1,4 glycosidic linkage between N-acetylmuramic acid (NAM) and N-acetylglucosamine (NAG), lysing Gram-positive bacterial cell walls.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Mutarotation of D-glucose in aqueous solution is caused by:",
        "o": [
          "Hydrolysis of the pyranose ring into two trioses",
          "Epimerization into D-mannose at neutral pH",
          "Spontaneous interconversion between alpha and beta anomers via the open-chain aldehyde form",
          "Oxidation of C-6 into glucuronic acid"
        ],
        "a": 2,
        "e": "Mutarotation is the change in specific optical rotation that accompanies the equilibration between alpha (+112.2 deg) and beta (+18.7 deg) anomers of D-glucose via the transient open-chain intermediate until reaching +52.7 deg.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Triacylglycerols (neutral fats) are chemically defined as:",
        "o": [
          "Sphingosine linked to two fatty acids",
          "Glycerol esters of three fatty acid molecules",
          "Glycerol phosphate linked to choline",
          "Steroid esters of long-chain fatty alcohols"
        ],
        "a": 1,
        "e": "Triacylglycerols (TAG) are triesters of the trihydric alcohol glycerol with three fatty acids, serving as the chief energy storage form in animal adipose tissue.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Lecithin is a major compound phospholipid biochemically known as:",
        "o": [
          "Phosphatidylcholine",
          "Phosphatidylethanolamine",
          "Phosphatidylserine",
          "Phosphatidylinositol"
        ],
        "a": 0,
        "e": "Lecithin is phosphatidylcholine, composed of glycerol, two fatty acids, phosphoric acid, and the nitrogenous base choline.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Cardiolipin (diphosphatidylglycerol) is an unusual phospholipid characteristically localized to:",
        "o": [
          "Outer leaflet of plasma membrane",
          "Lysosomal membrane",
          "Rough endoplasmic reticulum lumen",
          "Inner mitochondrial membrane"
        ],
        "a": 3,
        "e": "Cardiolipin contains four fatty acyl chains and is virtually exclusive to the inner mitochondrial membrane, where it is required for optimum electron transport complex activity.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which phospholipid acts as an essential precursor for intracellular secondary messengers IP3 and DAG upon phospholipase C activation?",
        "o": [
          "Phosphatidylserine",
          "Phosphatidylinositol 4,5-bisphosphate (PIP2)",
          "Phosphatidylcholine",
          "Sphingomyelin"
        ],
        "a": 1,
        "e": "Receptor-stimulated Phospholipase C cleaves PIP2 into inositol 1,4,5-trisphosphate (IP3, mobilizes Ca2+) and diacylglycerol (DAG, activates Protein Kinase C).",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Sphingomyelin differs structurally from glycerophospholipids because its backbone is:",
        "o": [
          "Glycerol",
          "Sterol nucleus",
          "Inositol",
          "Sphingosine (an amino alcohol)"
        ],
        "a": 3,
        "e": "Sphingomyelin contains sphingosine (18-carbon amino alcohol) linked to a fatty acid via an amide bond (forming ceramide), with a phosphocholine polar head group.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which fatty acid is strictly dietary essential for domestic cats (felines) because they lack delta-6 desaturase activity?",
        "o": [
          "Arachidonic acid",
          "Linoleic acid",
          "Oleic acid",
          "Palmitic acid"
        ],
        "a": 0,
        "e": "Cats lack sufficient hepatic delta-6 desaturase enzyme activity to convert linoleic acid to arachidonic acid, making dietary arachidonic acid strictly essential in feline nutrition.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The Saponification Number of a fat or oil is defined as:",
        "o": [
          "Grams of iodine absorbed by 100 g of fat",
          "Milligrams of KOH required to neutralize free fatty acids in 1 g of fat",
          "Milligrams of KOH required to saponify 1 g of fat",
          "Milliliters of 0.1 N KOH required to neutralize steam-volatile soluble fatty acids from 5 g of fat"
        ],
        "a": 2,
        "e": "Saponification number is the mg of KOH required to completely saponify 1 g of fat; it is inversely proportional to the average molecular weight (chain length) of fatty acids.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Butter fat has a uniquely high Reichert-Meissl (RM) number compared to vegetable oils because it is rich in:",
        "o": [
          "Polyunsaturated long-chain fatty acids",
          "Trans-fatty acids",
          "Steam-volatile, water-soluble short-chain fatty acids (like butyric acid)",
          "Phospholipids and glycolipids"
        ],
        "a": 2,
        "e": "RM number measures steam-volatile, water-soluble fatty acids (chiefly butyric and caproic acids). Butterfat has an RM value of 26-32, whereas vegetable oils have RM < 1.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The Iodine Number of a lipid indicates its degree of:",
        "o": [
          "Rancidity and free acid content",
          "Saponification velocity",
          "Chain length of fatty acids",
          "Unsaturation (number of double bonds)"
        ],
        "a": 3,
        "e": "Iodine number is the grams of iodine absorbed by 100 g of fat, directly reflecting the number of carbon-carbon double bonds (degree of unsaturation).",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The Acid Number of an oil measures the extent of hydrolytic rancidity by quantifying:",
        "o": [
          "Free fatty acids liberated by lipase or moisture action",
          "Total ester bonds present in 10 g of oil",
          "Peroxides formed by auto-oxidation",
          "Soluble short-chain fatty acids"
        ],
        "a": 0,
        "e": "Acid number is the mg of KOH required to neutralize free fatty acids in 1 g of fat; an elevated acid number indicates deterioration and hydrolytic rancidity.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which plasma lipoprotein class has the lowest density, largest diameter, and carries exogenous dietary triacylglycerols from the intestine?",
        "o": [
          "Chylomicrons",
          "Very Low Density Lipoproteins (VLDL)",
          "Low Density Lipoproteins (LDL)",
          "High Density Lipoproteins (HDL)"
        ],
        "a": 0,
        "e": "Chylomicrons have density < 0.95 g/mL, consist of ~85-90% triacylglycerols, and transport dietary lipids from the intestinal lymphatics into blood circulation.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Which lipoprotein is responsible for 'reverse cholesterol transport' by picking up cholesterol from peripheral tissues and delivering it to the liver?",
        "o": [
          "Chylomicrons",
          "HDL",
          "LDL",
          "VLDL"
        ],
        "a": 1,
        "e": "HDL (High-Density Lipoprotein) contains Apo A-I and LCAT, mediating reverse cholesterol transport from peripheral tissues back to the liver for excretion in bile.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The primary physiological precursor for the enzymatic biosynthesis of all series-2 prostaglandins in animals is:",
        "o": [
          "Oleic acid",
          "Arachidonic acid (20:4, delta-5,8,11,14)",
          "Palmitic acid",
          "Alpha-linolenic acid"
        ],
        "a": 1,
        "e": "Arachidonic acid (eicosatetraenoic acid, 20:4 omega-6) is liberated from membrane phospholipids by Phospholipase A2 and converted by Cyclooxygenase (COX) into PG series 2.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "In veterinary reproductive practice, Prostaglandin F2alpha (PGF2alpha) is widely administered for:",
        "o": [
          "Stimulating continuous lactation in heifers",
          "Promoting maternal recognition of pregnancy",
          "Suppressing uterine contractions during dystocia",
          "Inducing luteolysis (corpus luteum regression) and synchronizing estrus"
        ],
        "a": 3,
        "e": "PGF2alpha is a powerful luteolytic agent in domestic animals (cows, mares, sows) that lyses the mature corpus luteum, triggering a sharp decline in progesterone and inducing estrus.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Non-steroidal anti-inflammatory drugs (NSAIDs) such as flunixin meglumine and meloxicam reduce inflammation by inhibiting:",
        "o": [
          "Phospholipase A2 directly",
          "Cyclooxygenase (COX-1 and COX-2) enzymes",
          "Lipoxygenase (LOX)",
          "Thromboxane synthase exclusively"
        ],
        "a": 1,
        "e": "NSAIDs selectively or non-selectively inhibit cyclooxygenase enzymes, preventing the conversion of arachidonic acid to pro-inflammatory prostaglandins and thromboxanes.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Thromboxane A2 (TXA2) produced by platelets causes:",
        "o": [
          "Vasodilation and inhibition of platelet aggregation",
          "Lysis of fibrin clots",
          "Bronchodilation and systemic hypotension",
          "Vasoconstriction and promotion of platelet aggregation"
        ],
        "a": 3,
        "e": "TXA2 is synthesized in platelets by thromboxane synthase and acts as a potent vasoconstrictor and inducer of platelet aggregation during primary hemostasis.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Cholesterol contains a sterol cyclopentanoperhydrophenanthrene (CPPP) ring system with a hydroxyl (-OH) group located at position:",
        "o": [
          "C-17",
          "C-7",
          "C-3",
          "C-12"
        ],
        "a": 2,
        "e": "Cholesterol is a 27-carbon sterol with a single hydroxyl group at C-3, a double bond between C-5 and C-6, and an 8-carbon branched hydrocarbon tail at C-17.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Dipalmitoylphosphatidylcholine (DPPC) acts as an indispensable pulmonary surfactant; its absence causes:",
        "o": [
          "Fatty Liver Syndrome",
          "Bovine Ketosis",
          "Steatitis (Yellow fat disease)",
          "Neonatal Respiratory Distress Syndrome (Atelectasis)"
        ],
        "a": 3,
        "e": "DPPC lowers alveolar surface tension, preventing collapse (atelectasis) of lung alveoli upon expiration; deficiency in premature neonates causes Respiratory Distress Syndrome.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which of the following amino acids is optically inactive because its alpha-carbon has two identical hydrogen atoms?",
        "o": [
          "Alanine",
          "Valine",
          "Glycine",
          "Proline"
        ],
        "a": 2,
        "e": "Glycine has two hydrogen atoms attached to its alpha-carbon (R = -H), lacking a chiral/asymmetric carbon, making it the only optically inactive standard amino acid.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which amino acid contains an indole ring in its side chain?",
        "o": [
          "Phenylalanine",
          "Tryptophan",
          "Tyrosine",
          "Histidine"
        ],
        "a": 1,
        "e": "Tryptophan contains an aromatic indole ring; tyrosine contains a phenol ring, phenylalanine a benzene ring, and histidine an imidazole ring.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which sulfur-containing amino acid forms covalent disulfide bonds (-S-S-) that stabilize protein tertiary and quaternary structures?",
        "o": [
          "Methionine",
          "Homocysteine",
          "Cysteine",
          "Taurine"
        ],
        "a": 2,
        "e": "Two cysteine residues undergo oxidation of their sulfhydryl (-SH) groups to form a covalent disulfide bridge, generating the dimeric amino acid cystine.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The isoelectric point (pI) of an amino acid or protein is defined as the pH at which:",
        "o": [
          "It carries a net positive charge and moves to the cathode",
          "It carries a net negative charge and moves to the anode",
          "Its buffering capacity is at its absolute maximum",
          "Its net electric charge is exactly zero"
        ],
        "a": 3,
        "e": "At the isoelectric point (pI), the zwitterion form predominates, net electrical charge is zero, and the molecule will not migrate in an applied direct electric field.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The peptide bond linking amino acid residues in polypeptide chains is chemically a/an:",
        "o": [
          "Substituted amide linkage",
          "Ester bond",
          "Ether bond",
          "Anhydride bond"
        ],
        "a": 0,
        "e": "A peptide bond (-CO-NH-) is a substituted amide linkage formed by condensation between the alpha-carboxyl group of one amino acid and the alpha-amino group of the next.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Due to resonance between the carbonyl oxygen and nitrogen, the peptide bond exhibits:",
        "o": [
          "Complete free rotation like a single C-C bond",
          "Partial (~40%) double-bond character, planarity, and rigid trans configuration",
          "Triple-bond rigidity with cis geometry",
          "Ionic character with instantaneous dissociation in water"
        ],
        "a": 1,
        "e": "Pauling and Corey demonstrated that the C-N peptide bond has ~40% double bond character, is rigid and planar, and almost always adopts the lower-energy trans conformation.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "In the classical alpha-helix of protein secondary structure, intra-chain hydrogen bonds form between:",
        "o": [
          "Side chains of neighboring hydrophobic residues",
          "The carbonyl oxygen of residue n and the amide hydrogen of residue n+2",
          "The carbonyl oxygen of residue n and the amide hydrogen of residue n+4",
          "Terminal amino and carboxyl groups only"
        ],
        "a": 2,
        "e": "In an alpha-helix, every carbonyl oxygen of residue n forms a hydrogen bond with the amide hydrogen of residue n+4, with 3.6 residues per turn and pitch of 0.54 nm.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which amino acid is known as an 'alpha-helix breaker' because its rigid pyrrolidine cyclic structure cannot fit into the helical conformation?",
        "o": [
          "Alanine",
          "Leucine",
          "Proline",
          "Glutamate"
        ],
        "a": 2,
        "e": "Proline has a rigid five-membered pyrrolidine ring that lacks an amide hydrogen for hydrogen bonding, introducing a kink/bend that disrupts alpha-helices.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which non-standard amino acid is essential in domestic cats to prevent dilated cardiomyopathy and central retinal degeneration?",
        "o": [
          "Taurine (2-aminoethanesulfonic acid)",
          "Citrulline",
          "Ornithine",
          "Homoserine"
        ],
        "a": 0,
        "e": "Cats have very low cysteine sulfinic acid decarboxylase activity and conjugate bile acids exclusively with taurine; deficiency causes retinal degeneration and cardiomyopathy.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Proteins that contain non-protein prosthetic groups firmly attached to the polypeptide chain are called:",
        "o": [
          "Simple proteins",
          "Conjugated proteins",
          "Derived proteins",
          "Fibrous proteins"
        ],
        "a": 1,
        "e": "Conjugated proteins consist of an apoprotein linked to a non-amino acid prosthetic group (e.g., hemoglobin contains heme, mucoproteins contain carbohydrate).",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The primary structure of a protein refers specifically to its:",
        "o": [
          "Linear sequence of amino acids joined by covalent peptide bonds",
          "Association of multiple polypeptide subunits",
          "Three-dimensional globular folding pattern",
          "Local periodic alpha-helical arrangements"
        ],
        "a": 0,
        "e": "Primary structure is the unique linear sequence of amino acids in a polypeptide chain encoded genetically by mRNA and maintained by covalent peptide bonds.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which chemical agent denatures proteins specifically by disrupting non-covalent hydrophobic and hydrogen bonds without breaking peptide bonds?",
        "o": [
          "Cyanogen bromide",
          "8 M Urea or Guanidine HCl",
          "Trypsin",
          "Pepsin"
        ],
        "a": 1,
        "e": "Urea and guanidinium chloride are chaotropic agents that disrupt hydrogen bonds and the hydrophobic core, unfolding native protein conformations without cleaving peptide backbones.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The Ninhydrin reaction produces a deep purple color (Ruhemann's purple) with all standard alpha-amino acids EXCEPT proline, which yields a:",
        "o": [
          "Brick red precipitate",
          "Green fluorescence",
          "Blue color",
          "Yellow color"
        ],
        "a": 3,
        "e": "Proline and hydroxyproline are secondary imino acids; reaction with ninhydrin produces a distinctive yellow-colored adduct absorbing at 440 nm instead of purple.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Hemoglobin is an oligomeric protein exhibiting quaternary structure consisting of:",
        "o": [
          "Four polypeptide chains (two alpha and two beta) each with a heme group",
          "Two identical subunits",
          "A single polypeptide chain with four heme rings",
          "Three alpha chains wound as a triple helix"
        ],
        "a": 0,
        "e": "Adult hemoglobin (HbA) is a tetramer of two alpha and two beta globin subunits (alpha2beta2), with each subunit binding one oxygen-carrying iron-protoporphyrin IX (heme).",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which basic amino acid contains a guanidino group in its side chain and has a pKa around 12.5?",
        "o": [
          "Lysine",
          "Histidine",
          "Asparagine",
          "Arginine"
        ],
        "a": 3,
        "e": "Arginine has a positively charged guanidino group on its side chain that remains protonated at all physiological pH values (pKa ~ 12.5).",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Collagen, the most abundant structural protein in the animal body, is characterized by a high content of:",
        "o": [
          "Tryptophan and cysteine",
          "Histidine and methionine",
          "Glycine, proline, and 4-hydroxyproline",
          "Glutamate and aspartate"
        ],
        "a": 2,
        "e": "Collagen has a repeating Gly-X-Y triplet (where X is often proline and Y is hydroxyproline), allowing tight winding of three polypeptide chains into a tropocollagen triple helix.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The precipitation of proteins at high salt concentrations (such as saturated ammonium sulfate) is termed:",
        "o": [
          "Salting-out",
          "Salting-in",
          "Electrophoresis",
          "Dialysis"
        ],
        "a": 0,
        "e": "Salting-out occurs when high concentrations of neutral salts strip the hydration shell from protein surfaces, allowing hydrophobic patches to aggregate and precipitate.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which reaction is specific for peptide bonds and requires at least two peptide bonds (a tripeptide or larger) to form a violet complex with copper ions?",
        "o": [
          "Biuret reaction",
          "Millon's reaction",
          "Xanthoproteic reaction",
          "Sakaguchi reaction"
        ],
        "a": 0,
        "e": "The Biuret test detects compounds with two or more peptide bonds; Cu2+ ions in alkaline solution coordinate with peptide nitrogens to form a characteristic violet-purple coordination complex.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The purine nitrogenous bases found in both DNA and RNA are:",
        "o": [
          "Adenine and Guanine",
          "Cytosine and Thymine",
          "Uracil and Cytosine",
          "Adenine and Uracil"
        ],
        "a": 0,
        "e": "Adenine (6-aminopurine) and Guanine (2-amino-6-oxypurine) are the two heterocyclic purine bases present universally in both DNA and RNA.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Thymine differs chemically from Uracil by possessing:",
        "o": [
          "An additional amino group at C-4",
          "A purine ring backbone",
          "An extra hydroxyl group at C-2",
          "A methyl group at carbon-5 (5-methyluracil)"
        ],
        "a": 3,
        "e": "Thymine is 5-methyluracil, containing a methyl (-CH3) group attached to position 5 of the pyrimidine ring, distinguishing DNA from RNA.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "A nucleoside consists of a nitrogenous base attached to a pentose sugar via which covalent bond?",
        "o": [
          "Phosphodiester linkage",
          "alpha-peptide bond",
          "beta-N-glycosidic bond",
          "Thioester bond"
        ],
        "a": 2,
        "e": "In nucleosides, the base is linked via a beta-N-glycosidic bond from N-9 of purines or N-1 of pyrimidines to C-1' of the pentose sugar.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "A nucleotide is chemically distinct from a nucleoside because it contains:",
        "o": [
          "One or more esterified phosphate groups attached to the pentose sugar",
          "A second nitrogenous base",
          "An additional ribose unit",
          "An amino acid side chain"
        ],
        "a": 0,
        "e": "A nucleotide is a phosphorylated nucleoside (nucleoside mono-, di-, or triphosphate), with phosphate esterified typically at the 5'-hydroxyl of the pentose.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Which cyclic nucleotide acts as an intracellular second messenger mediating the physiological actions of glucagon and epinephrine?",
        "o": [
          "cGMP",
          "cAMP (cyclic 3',5'-adenosine monophosphate)",
          "cUMP",
          "cIMP"
        ],
        "a": 1,
        "e": "cAMP is synthesized from ATP by adenylyl cyclase upon beta-adrenergic or glucagon stimulation and activates Protein Kinase A (PKA).",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In the Watson-Crick B-DNA double helix, adjacent nucleotides in a single polynucleotide strand are linked by:",
        "o": [
          "Hydrogen bonds between C-1' and C-4'",
          "3',5'-phosphodiester bonds",
          "Disulfide bridges",
          "Glycosidic linkages between phosphates"
        ],
        "a": 1,
        "e": "The backbone of DNA consists of alternating deoxyribose and phosphate units joined by 3',5'-phosphodiester linkages.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "According to Chargaff's rules of base composition for double-stranded DNA:",
        "o": [
          "A = C and G = T",
          "A + T = G + C always",
          "A = T and G = C; therefore A + G = T + C",
          "Purines / Pyrimidines = 0.5"
        ],
        "a": 2,
        "e": "Erwin Chargaff demonstrated that in dsDNA, adenine equals thymine (A=T) and guanine equals cytosine (G=C), meaning total purines equal total pyrimidines (A+G = T+C).",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In B-DNA, Guanine pairs with Cytosine via:",
        "o": [
          "One covalent bond",
          "Two hydrogen bonds",
          "Three hydrogen bonds",
          "Four coordinate bonds"
        ],
        "a": 2,
        "e": "G-C base pairs are joined by three specific hydrogen bonds, whereas A-T pairs are joined by only two hydrogen bonds, making GC-rich DNA thermodynamically more stable.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The melting temperature (Tm) of double-stranded DNA increases with an increasing percentage of:",
        "o": [
          "A-T base pairs",
          "Phosphate groups",
          "Deoxyribose sugars",
          "G-C base pairs"
        ],
        "a": 3,
        "e": "Because G-C pairs are held by three hydrogen bonds and stronger base-stacking interactions, DNA with higher G+C content requires higher temperatures to denature into single strands.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Thermal denaturation of native double-stranded DNA causes a marked increase in ultraviolet absorbance at 260 nm, a phenomenon known as:",
        "o": [
          "Hyperchromic effect (hyperchromicity)",
          "Hypochromism",
          "Optical rotary dispersion",
          "Fluorescence quenching"
        ],
        "a": 0,
        "e": "In native dsDNA, tight base-stacking suppresses UV absorbance; upon denaturation, unstacked bases absorb UV light more freely, increasing absorbance at 260 nm by ~30-40%.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The two polynucleotide strands in Watson-Crick B-DNA are described as:",
        "o": [
          "Parallel with identical 5' to 3' polarity",
          "Perpendicular and branched",
          "Antiparallel with 5' to 3' and 3' to 5' opposing polarities",
          "Covalently linked through end-to-end ribose bonds"
        ],
        "a": 2,
        "e": "The two complementary strands run in opposite directions: one strand runs 5' -> 3' while the other runs 3' -> 5' (antiparallel orientation).",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Which RNA species contains a high proportion of unusual/modified post-transcriptional bases such as pseudouridine (psi) and dihydrouridine (D)?",
        "o": [
          "Transfer RNA (tRNA)",
          "Messenger RNA (mRNA)",
          "Ribosomal RNA (rRNA)",
          "Small nuclear RNA (snRNA)"
        ],
        "a": 0,
        "e": "tRNA contains up to 10% modified nucleosides (e.g., pseudouridine in the T-psi-C loop, dihydrouridine in the D-loop, inosine) crucial for codon recognition and structural stability.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "All mature biological transfer RNA (tRNA) molecules terminate at their 3'-acceptor arm with the conserved sequence:",
        "o": [
          "5'-CCA-3'",
          "5'-UAA-3'",
          "5'-AUG-3'",
          "5'-Poly(A)-3'"
        ],
        "a": 0,
        "e": "Every tRNA possesses the invariant trinucleotide sequence CCA at its 3' terminus, where the terminal adenine's 3'-OH group forms an ester bond with its specific amino acid.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Eukaryotic mRNA is structurally characterized at its 5'-end by:",
        "o": [
          "A poly-A tail of 200 adenines",
          "A 7-methylguanosine (m7G) triphosphate cap",
          "A non-hydrolyzable CCA trinucleotide",
          "A stem-loop iron-response element"
        ],
        "a": 1,
        "e": "Eukaryotic mRNA possesses a 5' cap consisting of 7-methylguanosine linked via a 5'-to-5' triphosphate bridge, protecting mRNA from 5'-exonucleases and aiding ribosome binding.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Which class of cellular RNA constitutes approximately 80% of total cellular RNA in animal cells?",
        "o": [
          "rRNA (ribosomal RNA)",
          "tRNA",
          "mRNA",
          "miRNA"
        ],
        "a": 0,
        "e": "Ribosomal RNA (rRNA) is the most abundant RNA species in living cells (~80% of total RNA), forming the structural and catalytic core of ribosomes.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "S-Adenosylmethionine (SAM) is a vital biological methyl donor formed by transferring an adenosyl group from ATP to:",
        "o": [
          "Cysteine",
          "Choline",
          "Homocysteine",
          "Methionine"
        ],
        "a": 3,
        "e": "SAM is generated by methionine adenosyltransferase from methionine and ATP; its sulfonium methyl group has high transfer potential for transmethylation reactions.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "In the B-DNA double helix, one complete helical turn spans a distance (pitch) of:",
        "o": [
          "3.4 nm (10.5 base pairs)",
          "2.0 nm (6 base pairs)",
          "1.2 nm (4 base pairs)",
          "5.4 nm (16 base pairs)"
        ],
        "a": 0,
        "e": "B-DNA has a helical pitch of 3.4 nm (34 Angstroms), containing approximately 10 to 10.5 base pairs per turn with an axial distance of 0.34 nm between adjacent base pairs.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Synthetic nucleotide analogues such as 5-fluorouracil (5-FU) act as chemotherapeutic drugs by inhibiting:",
        "o": [
          "DNA ligase directly",
          "Ribosomal peptidyl transferase",
          "Adenylate kinase",
          "Thymidylate synthase, blocking dTMP synthesis"
        ],
        "a": 3,
        "e": "5-FU is converted to 5-FdUMP, which acts as a suicide inhibitor of thymidylate synthase, halting thymidine nucleotide synthesis and blocking DNA replication.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 3
      },
      {
        "q": "The term 'biochemistry' was introduced in 1903 by the German chemist:",
        "o": [
          "Friedrich Wöhler",
          "Eduard Buchner",
          "Carl Neuberg",
          "Hans Krebs"
        ],
        "a": 2,
        "e": "Carl Neuberg coined the term 'biochemistry' in 1903 and is often called the father of modern biochemistry.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Friedrich Wöhler's synthesis of urea from ammonium cyanate in 1828 was a landmark in biochemistry because it:",
        "o": [
          "Identified urea as the main end product of protein metabolism in mammals",
          "Showed that an organic compound could be made from inorganic precursors, disproving vitalism",
          "Established the sequence of reactions of the urea cycle",
          "Demonstrated the first cell-free enzyme reaction"
        ],
        "a": 1,
        "e": "Before 1828, organic compounds were believed to require a 'vital force' of living organisms. Wöhler's laboratory synthesis of urea disproved this vitalism theory and laid the foundation of organic chemistry and biochemistry.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The most abundant chemical constituent of a living animal cell by weight is:",
        "o": [
          "Water",
          "Lipid",
          "Protein",
          "Nucleic acid"
        ],
        "a": 0,
        "e": "Water makes up roughly 70% of cell weight. It is the solvent for metabolism, the medium of transport and a participant in hydrolytic reactions. Proteins are the most abundant organic constituent.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The Na+/Ca2+ exchanger of cardiac muscle cells, which uses the sodium gradient to expel calcium, is an example of:",
        "o": [
          "Primary active transport",
          "Secondary active transport (antiport)",
          "Facilitated diffusion (uniport)",
          "Receptor-mediated endocytosis"
        ],
        "a": 1,
        "e": "The exchanger uses no ATP directly. It uses the Na+ gradient created by the Na+/K+-ATPase to move Ca2+ out of the cell against its gradient, in the opposite direction to Na+. This is secondary active transport by antiport.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Cells take up cholesterol-rich LDL particles from blood by:",
        "o": [
          "Simple diffusion across the lipid bilayer",
          "Pinocytosis without any specific receptor",
          "Receptor-mediated endocytosis through clathrin-coated pits",
          "Exocytosis"
        ],
        "a": 2,
        "e": "LDL binds specific LDL (apo B-100) receptors that cluster in clathrin-coated pits. These pits bud inwards to form coated vesicles. This is receptor-mediated endocytosis, described by Brown and Goldstein.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Because plasma proteins are non-diffusible anions, the Gibbs-Donnan effect makes plasma, compared with interstitial fluid, slightly richer in:",
        "o": [
          "Diffusible anions such as chloride",
          "Urea",
          "Glucose",
          "Diffusible cations such as sodium"
        ],
        "a": 3,
        "e": "Non-diffusible protein anions in plasma attract extra diffusible cations (Na+) and repel diffusible anions (Cl-). At equilibrium plasma therefore has slightly more Na+ and slightly less Cl- than interstitial fluid.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "A Donnan membrane potential develops across a semipermeable membrane because at equilibrium:",
        "o": [
          "The diffusible ions are unequally distributed on the two sides",
          "The non-diffusible ions slowly leak across the membrane",
          "The membrane actively pumps ions using ATP",
          "All ion concentrations become equal on both sides"
        ],
        "a": 0,
        "e": "The non-diffusible ion causes diffusible ions to be distributed unequally. This uneven distribution of charge creates a potential difference (the Donnan potential), with no pumping involved.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "If the hydrogen ion concentration of a solution is 1 x 10^-9 mol/L, its pH is:",
        "o": [
          "5",
          "9",
          "-9",
          "14"
        ],
        "a": 1,
        "e": "pH = -log[H+] = -log(10^-9) = 9. The solution is alkaline.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "A tenfold increase in the hydrogen ion concentration of blood changes its pH by:",
        "o": [
          "An increase of 1 unit",
          "A decrease of 10 units",
          "A decrease of 1 unit",
          "A decrease of 0.1 unit"
        ],
        "a": 2,
        "e": "pH is a negative logarithmic scale. Multiplying [H+] by 10 lowers the pH by exactly one unit, e.g. from 7.4 to 6.4.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The phosphate buffer system (H2PO4- / HPO4 2-, pKa about 6.8) is physiologically most important in:",
        "o": [
          "Gastric juice",
          "Blood plasma, where it is the main extracellular buffer",
          "Intracellular fluid and renal tubular fluid",
          "Bile"
        ],
        "a": 2,
        "e": "Phosphate is concentrated inside cells and in the renal tubules, where it buffers H+ secreted into urine as titratable acid. Its plasma concentration is too low to be the main extracellular buffer; bicarbonate plays that role.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Calculate the pH of a buffer containing 0.1 M acetic acid and 0.01 M sodium acetate (pKa = 4.76).",
        "o": [
          "3.76",
          "5.76",
          "4.76",
          "2.76"
        ],
        "a": 0,
        "e": "pH = pKa + log([A-]/[HA]) = 4.76 + log(0.01/0.1) = 4.76 + log(0.1) = 4.76 - 1 = 3.76.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In the plasma form of the Henderson-Hasselbalch equation, pH = 6.1 + log([HCO3-] / (0.03 x pCO2)), the factor 0.03 represents:",
        "o": [
          "The pKa of carbonic acid",
          "The normal bicarbonate to carbonic acid ratio",
          "The ion product of water",
          "The solubility coefficient of CO2 in plasma (mmol/L per mmHg)"
        ],
        "a": 3,
        "e": "0.03 is the solubility coefficient of CO2 in plasma. Multiplying pCO2 (mmHg) by 0.03 converts it into mmol/L of dissolved CO2 (carbonic acid). For example, 40 mmHg x 0.03 = 1.2 mmol/L.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "An aldohexose such as glucose has four asymmetric carbon atoms. The number of possible stereoisomers is:",
        "o": [
          "4",
          "8",
          "16",
          "32"
        ],
        "a": 2,
        "e": "Number of stereoisomers = 2^n, where n is the number of asymmetric carbons. 2^4 = 16 (8 D-forms and 8 L-forms).",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Glucose (an aldose) and fructose (a ketose) have the same molecular formula C6H12O6. They are:",
        "o": [
          "Epimers",
          "Anomers",
          "Enantiomers",
          "Functional group (aldose-ketose) isomers"
        ],
        "a": 3,
        "e": "Glucose carries an aldehyde group and fructose a keto group. Isomers that differ in their functional group are aldose-ketose (functional group) isomers.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Isomaltose, released during digestion of amylopectin and glycogen, consists of two glucose units joined by:",
        "o": [
          "An alpha(1->4) glycosidic bond",
          "An alpha(1->6) glycosidic bond",
          "A beta(1->4) glycosidic bond",
          "An alpha(1->1) glycosidic bond"
        ],
        "a": 1,
        "e": "Isomaltose comes from the branch points of amylopectin and glycogen, which are alpha(1->6) linkages. Maltose has alpha(1->4) bonds.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Lactose intolerance in adult animals is due to a deficiency of the intestinal enzyme:",
        "o": [
          "Sucrase",
          "Maltase",
          "Alpha-amylase",
          "Beta-galactosidase (lactase)"
        ],
        "a": 3,
        "e": "Lactase (beta-galactosidase) splits lactose into glucose and galactose. If lactase is deficient, undigested lactose is fermented in the colon, causing osmotic diarrhoea and gas.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Dextrins are best described as:",
        "o": [
          "Intermediate products formed by partial hydrolysis of starch",
          "Bacterial glucose polymers used as plasma expanders",
          "Polymers of fructose",
          "Structural polymers of N-acetylglucosamine"
        ],
        "a": 0,
        "e": "Dextrins are breakdown products of starch (amylodextrin, erythrodextrin, achrodextrin) formed by acid or amylase. Do not confuse them with dextrans, which are bacterial glucose polymers used as plasma volume expanders.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Glycogen gives which colour with iodine solution?",
        "o": [
          "Blue-black",
          "Green",
          "No colour",
          "Red-brown"
        ],
        "a": 3,
        "e": "Glycogen gives a red-brown colour with iodine because its short, highly branched chains cannot form long helices. Amylose gives blue-black and amylopectin gives reddish-violet.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The glycosaminoglycan of cornea and cartilage that contains galactose instead of a uronic acid is:",
        "o": [
          "Keratan sulfate",
          "Hyaluronic acid",
          "Heparin",
          "Dermatan sulfate"
        ],
        "a": 0,
        "e": "Keratan sulfate is the only glycosaminoglycan without uronic acid. Its repeating unit is galactose plus N-acetylglucosamine sulfate. It helps keep the cornea transparent.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Teichoic acids are polymers found characteristically in the cell walls of:",
        "o": [
          "Gram-positive bacteria",
          "Gram-negative bacteria",
          "Fungi",
          "Plant cells"
        ],
        "a": 0,
        "e": "Teichoic acids (polymers of glycerol phosphate or ribitol phosphate) are embedded in the thick peptidoglycan wall of Gram-positive bacteria. Gram-negative bacteria have an outer membrane containing lipopolysaccharide instead.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The lipopolysaccharide (LPS, endotoxin) of Gram-negative bacteria is located in the:",
        "o": [
          "Cytoplasmic (inner) membrane",
          "Capsule only",
          "Outer membrane",
          "Ribosomes"
        ],
        "a": 2,
        "e": "LPS makes up the outer leaflet of the outer membrane of Gram-negative bacteria. Its lipid A part is responsible for fever, shock and the other toxic effects of endotoxaemia.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Gangliosides differ from cerebrosides because gangliosides contain:",
        "o": [
          "A phosphate group",
          "A glycerol backbone",
          "No fatty acid",
          "One or more sialic acid (NANA) residues"
        ],
        "a": 3,
        "e": "Both are glycosphingolipids built on ceramide. Cerebrosides carry a single sugar. Gangliosides carry an oligosaccharide with one or more sialic acid residues and are abundant in nerve tissue.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Rancidity caused by oxygen attacking the double bonds of unsaturated fatty acids, forming peroxides, aldehydes and ketones, is called:",
        "o": [
          "Hydrogenation",
          "Hydrolytic rancidity",
          "Saponification",
          "Oxidative rancidity"
        ],
        "a": 3,
        "e": "Oxidative rancidity involves free-radical peroxidation at double bonds. Hydrolytic rancidity is caused by lipases releasing free fatty acids. Antioxidants such as vitamin E and BHT delay oxidative rancidity.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "VLDL, synthesised in the liver, mainly transports:",
        "o": [
          "Dietary (exogenous) triacylglycerol from the intestine",
          "Endogenous triacylglycerol from the liver to peripheral tissues",
          "Cholesterol from peripheral tissues back to the liver",
          "Free fatty acids bound to albumin"
        ],
        "a": 1,
        "e": "VLDL carries triacylglycerol made in the liver to muscle and adipose tissue. Chylomicrons carry dietary fat, HDL carries cholesterol back to the liver, and albumin carries free fatty acids.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The apolipoprotein that activates lipoprotein lipase on the capillary endothelium is:",
        "o": [
          "Apo A-I",
          "Apo B-48",
          "Apo C-II",
          "Apo E"
        ],
        "a": 2,
        "e": "Apo C-II, carried on chylomicrons and VLDL, activates lipoprotein lipase, which releases fatty acids from their triacylglycerol. Apo A-I activates LCAT, and Apo E binds hepatic receptors.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Aspirin inhibits prostaglandin synthesis by:",
        "o": [
          "Reversibly inhibiting phospholipase A2",
          "Blocking prostaglandin receptors",
          "Inhibiting 5-lipoxygenase",
          "Irreversibly acetylating cyclooxygenase (COX)"
        ],
        "a": 3,
        "e": "Aspirin transfers an acetyl group to a serine at the active site of COX, inactivating it permanently. Platelets cannot make new COX, so their thromboxane A2 synthesis stays blocked for their whole lifespan.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Glucocorticoids reduce the formation of both prostaglandins and leukotrienes mainly by inhibiting:",
        "o": [
          "Cyclooxygenase-1 only",
          "Phospholipase A2 (via lipocortin / annexin-1)",
          "Thromboxane synthase",
          "Prostacyclin synthase"
        ],
        "a": 1,
        "e": "Glucocorticoids induce lipocortin (annexin-1), which inhibits phospholipase A2. This limits release of arachidonic acid, the common precursor of both the COX and lipoxygenase pathways.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Keratin, collagen and elastin are classified by shape as:",
        "o": [
          "Globular proteins",
          "Conjugated proteins",
          "Fibrous proteins",
          "Derived proteins"
        ],
        "a": 2,
        "e": "Fibrous proteins are long, insoluble and structural (keratin of hair, hooves and horn; collagen of tendon and bone; elastin of ligaments). Globular proteins such as enzymes and albumin are compact and soluble.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Myoglobin, the oxygen-storing protein of muscle, has structural organisation only up to the:",
        "o": [
          "Primary level",
          "Secondary level",
          "Tertiary level",
          "Quaternary level"
        ],
        "a": 2,
        "e": "Myoglobin is a single polypeptide chain folded around one haem group, so its highest level is tertiary structure. Haemoglobin, with four subunits, has quaternary structure.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which of the following is an acidic amino acid?",
        "o": [
          "Lysine",
          "Aspartic acid",
          "Arginine",
          "Histidine"
        ],
        "a": 1,
        "e": "Aspartic acid and glutamic acid carry an extra carboxyl group, so they are acidic. Lysine, arginine and histidine are basic amino acids.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which amino acid has a hydroxyl group in its side chain and is a common site of protein phosphorylation?",
        "o": [
          "Serine",
          "Valine",
          "Alanine",
          "Leucine"
        ],
        "a": 0,
        "e": "Serine (like threonine and tyrosine) has a side-chain -OH that protein kinases can phosphorylate. This is how enzymes such as glycogen phosphorylase are regulated.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "At physiological pH, a monoamino-monocarboxylic amino acid exists predominantly as a:",
        "o": [
          "Neutral uncharged molecule",
          "Anion only",
          "Cation only",
          "Zwitterion (dipolar ion)"
        ],
        "a": 3,
        "e": "At pH 7.4 the carboxyl group is ionised (-COO-) and the amino group is protonated (-NH3+). The molecule carries both charges but no net charge; this is a zwitterion. It explains the amphoteric nature of amino acids.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The optical activity of all standard amino acids except glycine is due to:",
        "o": [
          "An asymmetric (chiral) alpha-carbon",
          "An aromatic ring",
          "The peptide bond",
          "A free amino group"
        ],
        "a": 0,
        "e": "The alpha-carbon of these amino acids carries four different groups, making it chiral. The molecules can therefore rotate plane-polarised light. Glycine's alpha-carbon carries two hydrogens, so it is optically inactive.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which of the following is a nucleoside?",
        "o": [
          "Adenine",
          "Adenosine",
          "AMP",
          "ATP"
        ],
        "a": 1,
        "e": "A nucleoside is a base plus a sugar (adenine + ribose = adenosine). Adenine is the free base, while AMP and ATP are nucleotides because they carry phosphate.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Caffeine, theophylline and theobromine, which inhibit phosphodiesterase, are methylated derivatives of:",
        "o": [
          "Uracil",
          "Thymine",
          "Cytosine",
          "Xanthine"
        ],
        "a": 3,
        "e": "These methylxanthines are purine derivatives. By inhibiting phosphodiesterase they raise cAMP, causing bronchodilation (theophylline) and CNS stimulation.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Watson and Crick's 1953 double-helix model of DNA relied heavily on X-ray diffraction data obtained by:",
        "o": [
          "Rosalind Franklin and Maurice Wilkins",
          "Erwin Chargaff",
          "Linus Pauling",
          "Meselson and Stahl"
        ],
        "a": 0,
        "e": "Franklin's X-ray diffraction images (notably 'Photo 51') and Wilkins' work revealed the helical structure. Chargaff's base-ratio rules supplied the pairing clue.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "Integral membrane proteins can be readily dissociated from biological membranes by simply altering the ionic strength of the aqueous medium.",
        "a": false,
        "e": "False. Peripheral membrane proteins are dissociated by mild changes in ionic strength or pH, whereas integral membrane proteins are deeply embedded in the hydrophobic core and require detergents to extract.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Facilitated diffusion accelerates solute movement down an electrochemical concentration gradient without requiring ATP expenditure.",
        "a": true,
        "e": "True. Facilitated diffusion uses transmembrane carrier or channel proteins to transport specific solutes downhill without consuming metabolic energy.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The Donnan equilibrium results in an unequal osmotic pressure across the semipermeable membrane, causing water to flow into the compartment containing non-diffusible protein.",
        "a": true,
        "e": "True. The accumulation of excess counter-ions inside the protein-containing compartment increases total osmolarity, drawing water in by osmosis.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "A buffer functions with greatest effectiveness when the environmental pH is within +/- 1 unit of the weak acid's pKa.",
        "a": true,
        "e": "True. The effective buffering range is defined as pH = pKa +/- 1.0, where sufficient amounts of both the weak acid and its conjugate base exist to neutralize added H+ or OH-.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "According to the Henderson-Hasselbalch equation, if the ratio of conjugate base to acid is 10:1, the pH will be exactly one unit below the pKa.",
        "a": false,
        "e": "False. Log10(10/1) = +1, so pH = pKa + 1. It is one unit above the pKa, not below.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In domestic animal erythrocytes, the chloride shift (Hamburger phenomenon) involves bicarbonate exiting the RBC in exchange for plasma chloride.",
        "a": true,
        "e": "True. At systemic capillaries, generated HCO3- diffuses out of erythrocytes in an electroneutral 1:1 exchange for plasma Cl- via the Band 3 anion exchanger.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Pure distilled water at 25 degrees Celsius has an ion product (Kw) equal to 1.0 x 10^-14 (mol/L)^2.",
        "a": true,
        "e": "True. Kw = [H+][OH-] = 1.0 x 10^-14 at 25 deg C; thus [H+] = [OH-] = 1.0 x 10^-7 M, corresponding to neutral pH 7.0.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Active transport systems are unsaturable and transport solutes at rates that increase linearly with solute concentration without reaching a Vmax.",
        "a": false,
        "e": "False. Active transport systems utilize finite protein carriers that exhibit saturation kinetics and a maximal velocity (Vmax) at high solute concentrations.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The pKa of carbonic acid in blood plasma under physiological conditions is approximately 6.1.",
        "a": true,
        "e": "True. The effective composite pKa' for the CO2 / HCO3- buffer system in blood at 37 deg C is 6.10.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "D-Fructose is a ketohexose that can reduce Benedict's and Fehling's reagents because it readily tautomerizes to aldoses via enediol intermediates in alkaline media.",
        "a": true,
        "e": "True. In mild alkaline reagents (Fehling's/Benedict's), fructose undergoes keto-enol tautomerization through an enediol intermediate to form glucose and mannose, acting as a reducing sugar.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Sucrose produces a red precipitate of cuprous oxide when boiled directly with Fehling's reagent without prior acid hydrolysis.",
        "a": false,
        "e": "False. Sucrose is a non-reducing disaccharide because its anomeric carbons are engaged in the glycosidic bond; it gives a negative Fehling's test unless hydrolyzed first.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Mammalian digestive enzymes can hydrolyze the beta-1,4 glycosidic linkages of cellulose.",
        "a": false,
        "e": "False. Mammalian digestive enzymes (such as alpha-amylase) hydrolyze only alpha-1,4 linkages. Breakdown of cellulose requires microbial cellulase produced by symbiotic rumen or cecal microbes.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Dextrans are highly branched polymers of D-glucose produced by bacteria from sucrose, used clinically as plasma volume expanders.",
        "a": true,
        "e": "True. Clinical dextrans are bacterial alpha-1,6-linked glucans with alpha-1,3 branches, maintaining oncotic pressure in hypovolemic veterinary shock.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Amylose gives a characteristic deep blue-black color with iodine solution due to the insertion of iodine molecules into its helical core.",
        "a": true,
        "e": "True. Unbranched amylose forms a continuous left-handed helix that accommodates polyiodide ions (I5-), producing an intense blue complex.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Sorbitol is a sugar acid produced by the oxidation of the aldehyde group of D-glucose.",
        "a": false,
        "e": "False. Sorbitol (D-glucitol) is a sugar alcohol (polyol) produced by the enzymatic REDUCTION of the aldehyde carbon of glucose by aldose reductase.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Hyaluronic acid contains sulfate ester groups attached to the C-4 and C-6 hydroxyls of its hexosamine units.",
        "a": false,
        "e": "False. Hyaluronic acid is the only major glycosaminoglycan that is entirely non-sulfated and not covalently attached to a core protein.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Trehalose is a non-reducing disaccharide composed of two alpha-D-glucose molecules linked by an alpha-1,1 glycosidic bond.",
        "a": true,
        "e": "True. Trehalose (found in insect hemolymph and fungi) links the anomeric carbons of two D-glucose residues via an alpha-1,alpha-1 bond, rendering it non-reducing.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The D- and L- stereochemical designations of monosaccharides are assigned based on the spatial configuration of the asymmetric carbon farthest from the carbonyl carbon.",
        "a": true,
        "e": "True. D/L configuration is based on the reference standard D-glyceraldehyde and is determined by the orientation of the -OH group on the highest-numbered chiral carbon (e.g., C-5 in hexoses).",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Naturally occurring unsaturated fatty acids in animal tissues almost exclusively possess the cis double bond geometric configuration.",
        "a": true,
        "e": "True. Natural unsaturated fatty acids in animals have cis double bonds, which introduce a 30-degree kink in the hydrocarbon chain, maintaining membrane fluidity.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Fats containing primarily long-chain saturated fatty acids have lower melting points and remain liquid at room temperature.",
        "a": false,
        "e": "False. Saturated fatty acids pack closely and have high melting points, remaining solid at room temperature. Unsaturated fatty acids with cis kinks have lower melting points (oils).",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "A low Saponification Number in an oil signifies a higher average molecular weight of its constituent fatty acids.",
        "a": true,
        "e": "True. Saponification number is inversely proportional to molecular weight: fewer molecules of fat are present per gram, requiring fewer milligrams of KOH for saponification.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Prostaglandins are 20-carbon cyclopentane-containing fatty acid derivatives with extremely long biological half-lives that act exclusively as systemic hormones.",
        "a": false,
        "e": "False. Prostaglandins are local autocrine and paracrine autacoids with very short half-lives (seconds to minutes), being rapidly inactivated during passage through the lungs and liver.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Low-Density Lipoprotein (LDL) contains Apolipoprotein B-100 as its primary structural protein.",
        "a": true,
        "e": "True. Apo B-100 is the sole structural apolipoprotein on LDL, serving as the ligand recognized by tissue LDL receptors for endocytosis.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Cerebrosides are complex glycolipids containing a sphingosine backbone, a fatty acid, and an oligosaccharide chain with sialic acid residues.",
        "a": false,
        "e": "False. Cerebrosides contain only a single monosaccharide unit (glucose or galactose). Glycolipids containing branched oligosaccharides with sialic acid are gangliosides.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Prostacyclin (PGI2), synthesized by vascular endothelial cells, is a potent inhibitor of platelet aggregation and causes vasodilation.",
        "a": true,
        "e": "True. PGI2 opposes thromboxane A2: it elevates platelet cAMP, inhibiting aggregation and relaxing vascular smooth muscle to prevent thrombosis.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Wax esters consist of glycerol esterified with three saturated short-chain fatty acids.",
        "a": false,
        "e": "False. Waxes are esters of long-chain fatty acids with long-chain monohydric alcohols (e.g., cetyl alcohol), not glycerol.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Essential fatty acids must be supplied in the diet because mammals cannot introduce double bonds beyond carbon-9 counting from the carboxyl end.",
        "a": true,
        "e": "True. Mammalian tissues possess delta-9, delta-6, and delta-5 desaturases, but lack delta-12 and delta-15 desaturases required to synthesize linoleic (omega-6) and alpha-linolenic (omega-3) acids.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "All 20 standard amino acids incorporated into proteins during ribosomal translation belong to the L-stereochemical configuration.",
        "a": true,
        "e": "True. With the sole exception of achiral glycine, all standard proteinogenic amino acids in biological proteins have the L-configuration at the alpha-carbon.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "At a pH below its isoelectric point (pI), an amino acid carries a net positive charge and migrates toward the cathode in an electric field.",
        "a": true,
        "e": "True. When pH < pI, excess H+ protons suppress carboxyl ionization while protonating amino groups (-NH3+), yielding a net positive cation.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The secondary structure of proteins is primarily stabilized by covalent disulfide bonds between distant residues.",
        "a": false,
        "e": "False. Secondary structures (alpha-helix and beta-pleated sheet) are stabilized specifically by regular hydrogen bonds between peptide carbonyl oxygens and amide nitrogens.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Histidine is effective as a physiological buffer at physiological pH (7.4) because the pKa of its imidazole side chain is approximately 6.0 to 6.8.",
        "a": true,
        "e": "True. Histidine is the only standard amino acid with an ionizable side-chain pKa near physiological pH, making it the key buffering residue in hemoglobin and albumin.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Thermal denaturation of an enzyme destroys its primary structure by hydrolyzing its peptide bonds.",
        "a": false,
        "e": "False. Denaturation disrupts secondary, tertiary, and quaternary structures (hydrogen bonds, hydrophobic interactions) while leaving the primary covalent peptide backbone intact.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Beta-pleated sheets can be composed of either parallel or antiparallel polypeptide strands.",
        "a": true,
        "e": "True. In parallel beta-sheets, adjacent strands run in the same N-to-C direction; in antiparallel beta-sheets, adjacent strands run in opposite directions with more collinear hydrogen bonds.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The Sakaguchi test is a specific colorimetric test used to detect the imidazole ring of histidine.",
        "a": false,
        "e": "False. The Sakaguchi test detects the guanidino group of arginine (producing a red color). Histidine is detected by Pauly's test.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Serum albumin has a lower molecular weight than globulins but exerts approximately 75-80% of total plasma colloid osmotic (oncotic) pressure.",
        "a": true,
        "e": "True. Albumin (MW ~66.5 kDa) has high molar concentration and carries a net negative charge of -18 at pH 7.4, exerting dominant oncotic and Donnan effects.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Prions are infectious proteinaceous agents that cause transmissible spongiform encephalopathies by inducing abnormal conformational change in normal prion proteins.",
        "a": true,
        "e": "True. Prion diseases (e.g., Bovine Spongiform Encephalopathy / BSE, scrapie) involve conversion of normal alpha-helical PrPc into insoluble, protease-resistant beta-sheet-rich PrPsc.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "In RNA, the pyrimidine base thymine is replaced by uracil.",
        "a": true,
        "e": "True. RNA contains uracil (which lacks the 5-methyl group of thymine) base-pairing with adenine during transcription and translation.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The 2'-hydroxyl group on the ribose ring makes RNA chemically more susceptible to alkaline hydrolysis than DNA.",
        "a": true,
        "e": "True. Under alkaline conditions, the 2'-OH group of RNA is deprotonated and nucleophilically attacks the adjacent 3',5'-phosphodiester bond, forming a 2',3'-cyclic monophosphate intermediate that cleaves RNA.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Chargaff's rules apply equally to single-stranded viral RNA genomes.",
        "a": false,
        "e": "False. Chargaff's rules (A=T or A=U, G=C) apply strictly to double-stranded nucleic acids; single-stranded nucleic acids do not require base parity.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Z-DNA is a left-handed double helix with a zigzag sugar-phosphate backbone favored by alternating purine-pyrimidine sequences.",
        "a": true,
        "e": "True. Z-DNA winds to the left, has 12 base pairs per turn, and is favored under high salt or alternating d(C-G) sequences.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "DNA absorption of UV light at 260 nm is primarily due to resonance in the heterocyclic rings of purine and pyrimidine bases.",
        "a": true,
        "e": "True. Conjugated double bonds in purine and pyrimidine rings absorb strongly in the ultraviolet spectrum with a characteristic absorption maximum at 260 nm.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "ATP contains three high-energy phosphoanhydride bonds.",
        "a": false,
        "e": "False. ATP contains TWO high-energy phosphoanhydride bonds (between alpha-beta and beta-gamma phosphates); the bond linking the alpha phosphate to ribose is a lower-energy phosphoester bond.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The cloverleaf model of transfer RNA (tRNA) represents its folded, functional three-dimensional tertiary structure in vivo.",
        "a": false,
        "e": "False. The cloverleaf is the two-dimensional secondary structure of tRNA; its actual 3D tertiary structure is an inverted 'L-shaped' conformation.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Ribozymes are catalytic RNA molecules capable of catalyzing specific biochemical reactions without a protein component.",
        "a": true,
        "e": "True. Discovered by Cech and Altman, ribozymes (such as the 28S rRNA peptidyl transferase center of ribosomes) demonstrate enzymatic catalytic activity in RNA.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Xanthine and hypoxanthine are standard pyrimidine intermediates of nucleic acid catabolism.",
        "a": false,
        "e": "False. Hypoxanthine and xanthine are PURINE intermediates produced during the catabolism of adenine and guanine on the pathway to uric acid.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Hans Adolf Krebs shared the 1953 Nobel Prize in Physiology or Medicine for discovering the citric acid cycle.",
        "a": true,
        "e": "True. Krebs shared the 1953 Nobel Prize with Fritz Lipmann (discoverer of coenzyme A). The citric acid cycle is therefore also called the Krebs cycle.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Cardiac glycosides such as ouabain and digoxin inhibit the Na+/K+-ATPase by binding to its extracellular face.",
        "a": true,
        "e": "True. They bind the extracellular side of the alpha subunit. The resulting rise in intracellular Na+ slows Ca2+ removal by the Na+/Ca2+ exchanger, so more Ca2+ is available for contraction (positive inotropic effect).",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In a Donnan system, the concentration of diffusible chloride is higher on the side containing the non-diffusible protein anion.",
        "a": false,
        "e": "False. Diffusible anions such as Cl- are repelled by the non-diffusible protein anion, so their concentration is LOWER on the protein side. Diffusible cations are higher on that side.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "According to the Brønsted-Lowry concept, an acid is a proton acceptor.",
        "a": false,
        "e": "False. A Brønsted-Lowry acid is a proton (H+) DONOR and a base is a proton ACCEPTOR. Each acid has a conjugate base (e.g. H2CO3 / HCO3-).",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Although its pKa (6.1) is far from 7.4, bicarbonate is the most important blood buffer because CO2 is controlled by the lungs and HCO3- by the kidneys.",
        "a": true,
        "e": "True. Bicarbonate is an 'open' buffer system: the lungs adjust pCO2 and the kidneys adjust HCO3-. This makes it far more powerful in the body than its pKa alone would suggest.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "In amino sugars such as glucosamine, the hydroxyl group at carbon-6 is replaced by an amino group.",
        "a": false,
        "e": "False. In glucosamine and galactosamine the -OH at carbon-2 is replaced by -NH2. They are components of hyaluronic acid, chondroitin sulfate, chitin and bacterial cell walls.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Like sucrose, cellobiose gives a negative Benedict's test.",
        "a": false,
        "e": "False. Cellobiose consists of two glucose units joined by beta(1->4). The anomeric carbon of the second glucose is free, so cellobiose is a REDUCING sugar. Sucrose and trehalose are the common non-reducing disaccharides.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Cellulose is a branched homopolysaccharide of glucose joined by alpha(1->4) and alpha(1->6) glycosidic bonds.",
        "a": false,
        "e": "False. Cellulose is an UNBRANCHED polymer of glucose joined by beta(1->4) bonds. The linear chains lie side by side, held by hydrogen bonds, forming strong fibres.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Penicillin kills susceptible bacteria by inhibiting the transpeptidase-catalysed cross-linking of peptidoglycan.",
        "a": true,
        "e": "True. Beta-lactam antibiotics bind the transpeptidases (penicillin-binding proteins) that cross-link peptidoglycan chains. The weakened cell wall bursts under osmotic pressure.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Phosphatidic acid is the simplest glycerophospholipid and a precursor of both triacylglycerols and other phospholipids.",
        "a": true,
        "e": "True. Phosphatidic acid (glycerol + 2 fatty acids + phosphate) is dephosphorylated to diacylglycerol, which is used to make triacylglycerols, lecithin and cephalin.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The Polenske number measures volatile, water-insoluble fatty acids and helps detect adulteration of ghee or butter with coconut oil.",
        "a": true,
        "e": "True. Coconut oil is rich in volatile but water-insoluble fatty acids (caprylic, capric, lauric), so it has a high Polenske number. The Reichert-Meissl number measures volatile water-SOLUBLE fatty acids.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 3
      },
      {
        "q": "Leukotrienes are synthesised from arachidonic acid by the cyclooxygenase pathway.",
        "a": false,
        "e": "False. Leukotrienes are made by the LIPOXYGENASE (5-LOX) pathway. The cyclooxygenase pathway produces prostaglandins, prostacyclin and thromboxanes.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Glycoproteins, lipoproteins and nucleoproteins are examples of derived proteins.",
        "a": false,
        "e": "False. They are CONJUGATED proteins (protein + non-protein prosthetic group). Derived proteins are breakdown products of proteins, such as proteoses, peptones and peptides.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Arginine is essential for cats, and a single arginine-free meal can cause acute hyperammonaemia in them.",
        "a": true,
        "e": "True. Cats synthesise very little ornithine or citrulline and depend on dietary arginine to keep the urea cycle running. Without it, ammonia accumulates within hours, causing vomiting, neurological signs and possibly death.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The xanthoproteic test gives a yellow colour with tyrosine and tryptophan when they are heated with concentrated nitric acid.",
        "a": true,
        "e": "True. Nitric acid nitrates their aromatic rings, giving yellow nitro derivatives that turn orange with alkali. The yellow staining of skin by nitric acid is the same reaction.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "In a nucleoside, pyrimidine bases are attached to the pentose sugar through their N-9 atom.",
        "a": false,
        "e": "False. PYRIMIDINES attach through N-1 and PURINES through N-9, each by a beta-N-glycosidic bond to C-1' of the sugar.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "In B-DNA the two strands are held together only by hydrogen bonds; base-stacking interactions contribute nothing to helix stability.",
        "a": false,
        "e": "False. Hydrophobic and van der Waals stacking between neighbouring base pairs is a MAJOR stabilising force, contributing more than the hydrogen bonds. Hydrogen bonds mainly provide specificity of pairing.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      }
    ],
    "fib": [
      {
        "q": "The widely accepted structural model of biological membranes proposed by Singer and Nicolson in 1972 is called the _____ model.",
        "a": [
          "fluid mosaic",
          "fluid mosaic model"
        ],
        "a_display": "Fluid Mosaic",
        "e": "Singer and Nicolson proposed the Fluid Mosaic Model describing biological membranes as a fluid phospholipid bilayer with embedded mobile proteins.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The Na+/K+-ATPase pump moves 3 sodium ions out of the cell and _____ potassium ions into the cell per molecule of ATP hydrolyzed.",
        "a": [
          "2",
          "two"
        ],
        "a_display": "2 (Two)",
        "e": "The Na+/K+-ATPase pump couples the hydrolysis of 1 ATP to the extrusion of 3 Na+ ions and uptake of 2 K+ ions.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The unequal distribution of diffusible ions across a membrane caused by the presence of non-diffusible polyvalent ions is known as the _____ membrane equilibrium.",
        "a": [
          "donnan",
          "gibbs-donnan",
          "gibbs donnan"
        ],
        "a_display": "Donnan (Gibbs-Donnan)",
        "e": "Donnan membrane equilibrium accounts for asymmetric distribution of permeant electrolytes across capillary walls and cellular membranes.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The equation pH = pKa + log([A-] / [HA]) used to calculate buffer pH is named the _____ equation.",
        "a": [
          "henderson-hasselbalch",
          "henderson hasselbalch"
        ],
        "a_display": "Henderson-Hasselbalch",
        "e": "The Henderson-Hasselbalch equation relates pH, pKa, and the ratio of conjugate base to weak acid.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The primary extracellular chemical buffer system maintaining arterial blood pH in domestic animals is the _____ buffer system.",
        "a": [
          "bicarbonate",
          "bicarbonate-carbonic acid",
          "carbonic acid-bicarbonate"
        ],
        "a_display": "Bicarbonate",
        "e": "The bicarbonate buffer system (HCO3- / H2CO3) is the foremost extracellular buffer system because its components are independently regulated by respiration (lungs) and kidneys.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The normal mean physiological arterial blood pH in domestic cattle, dogs, and horses is approximately _____.",
        "a": [
          "7.4",
          "7.40",
          "7.35-7.45"
        ],
        "a_display": "7.40 (7.35–7.45)",
        "e": "Arterial blood pH is regulated in health between 7.35 and 7.45, with 7.40 representing the central physiological setpoint.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Specialized transmembrane protein channels that facilitate rapid water diffusion across biological membranes are called _____.",
        "a": [
          "aquaporins",
          "aquaporin"
        ],
        "a_display": "Aquaporins",
        "e": "Aquaporins are selective water-channel proteins that dramatically accelerate osmotic movement of water across cell membranes.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "When the molar concentration of a weak acid equals the molar concentration of its conjugate base, the pH of the buffer equals its _____.",
        "a": [
          "pka"
        ],
        "a_display": "pKa",
        "e": "When [A-] = [HA], log([A-]/[HA]) = log(1) = 0, so pH = pKa.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "In the erythrocyte membrane, the chloride shift (Hamburger phenomenon) is mediated by the anion exchange protein known as Band _____.",
        "a": [
          "3",
          "three"
        ],
        "a_display": "3 (Band 3)",
        "e": "Band 3 (AE1) is the major integral anion exchanger in erythrocyte membranes that exchanges HCO3- for Cl-.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "D-Glucose and D-Galactose differ in configuration only around carbon atom number _____.",
        "a": [
          "4",
          "c-4",
          "c4",
          "four"
        ],
        "a_display": "4 (C-4)",
        "e": "Glucose and galactose are C-4 epimers, differing in stereochemistry at Carbon-4.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The disaccharide maltose consists of two D-glucose molecules joined by an _____ glycosidic bond.",
        "a": [
          "alpha-1,4",
          "alpha 1,4",
          "alpha-1,4-",
          "alpha 1-4"
        ],
        "a_display": "alpha-1,4",
        "e": "Maltose is an alpha-1,4-linked disaccharide of two D-glucose units formed during starch digestion.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The disaccharide of bovine milk, lactose, consists of D-galactose and D-glucose joined by a _____ glycosidic bond.",
        "a": [
          "beta-1,4",
          "beta 1,4",
          "beta-1,4-",
          "beta 1-4"
        ],
        "a_display": "beta-1,4",
        "e": "Lactose is beta-D-galactopyranosyl-(1->4)-D-glucose, hydrolyzed by lactase in nursing animals.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Sucrose is a non-reducing sugar because the anomeric carbons of both glucose and _____ participate in the glycosidic bond.",
        "a": [
          "fructose",
          "d-fructose"
        ],
        "a_display": "Fructose",
        "e": "Sucrose links C-1 of alpha-D-glucose and C-2 of beta-D-fructose, leaving no free anomeric hemiacetal/hemiketal group.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The plant storage polysaccharide amylopectin contains linear alpha-1,4 bonds and branch points connected by _____ glycosidic bonds.",
        "a": [
          "alpha-1,6",
          "alpha 1,6",
          "alpha-1,6-",
          "alpha 1-6"
        ],
        "a_display": "alpha-1,6",
        "e": "Amylopectin contains alpha-1,6 branch points every 24-30 residues along its alpha-1,4-linked glucose chains.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The animal storage polysaccharide stored predominantly in liver and skeletal muscle is _____.",
        "a": [
          "glycogen"
        ],
        "a_display": "Glycogen",
        "e": "Glycogen is the major storage homopolysaccharide of animals, consisting of extensively branched alpha-D-glucose.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The homopolysaccharide inulin, used to measure glomerular filtration rate (GFR), is a polymer of _____.",
        "a": [
          "fructose",
          "d-fructose"
        ],
        "a_display": "Fructose",
        "e": "Inulin is a fructosan homopolysaccharide of beta-2,1-linked D-fructose residues, neither secreted nor reabsorbed in renal tubules.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The non-sulfated glycosaminoglycan present in synovial fluid that acts as an articular lubricant and shock absorber is _____.",
        "a": [
          "hyaluronic acid",
          "hyaluronate",
          "hyaluronan"
        ],
        "a_display": "Hyaluronic acid",
        "e": "Hyaluronic acid (hyaluronan) is a non-sulfated GAG composed of D-glucuronic acid and N-acetylglucosamine.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Bacterial cell wall peptidoglycan consists of alternating polysaccharide units of N-acetylglucosamine and _____.",
        "a": [
          "n-acetylmuramic acid",
          "nam"
        ],
        "a_display": "N-Acetylmuramic acid (NAM)",
        "e": "Peptidoglycan is a heteropolymer of alternating beta-1,4-linked NAG and NAM cross-linked by tetrapeptide side chains.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The ester bonds of neutral fat (triacylglycerol) connect one molecule of glycerol to _____ molecules of fatty acids.",
        "a": [
          "3",
          "three"
        ],
        "a_display": "3 (Three)",
        "e": "Triacylglycerols consist of three fatty acyl chains esterified to the three hydroxyl carbons of glycerol.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Lecithin is chemically known as phosphatidyl_____.",
        "a": [
          "choline"
        ],
        "a_display": "Choline",
        "e": "Lecithin is phosphatidylcholine, the predominant glycerophospholipid in mammalian cell membranes and bile.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The degree of unsaturation of an oil or fat is quantitatively measured by its _____ number.",
        "a": [
          "iodine",
          "iodine value",
          "iodine number"
        ],
        "a_display": "Iodine",
        "e": "Iodine number represents the grams of iodine absorbed per 100 grams of fat, directly indicating double bond abundance.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The milligrams of potassium hydroxide (KOH) required to completely saponify 1 gram of fat is called the _____ number.",
        "a": [
          "saponification",
          "saponification number",
          "saponification value"
        ],
        "a_display": "Saponification",
        "e": "Saponification number reflects the average molecular weight (chain length) of fatty acids in a triacylglycerol sample.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The 20-carbon polyunsaturated fatty acid with four double bonds that serves as the immediate substrate for prostaglandin synthesis is _____ acid.",
        "a": [
          "arachidonic",
          "arachidonic acid"
        ],
        "a_display": "Arachidonic",
        "e": "Arachidonic acid (20:4 delta-5,8,11,14) is oxygenated by cyclooxygenase to generate series-2 prostaglandins, prostacyclins, and thromboxanes.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "In veterinary medicine, the prostaglandin analogue PGF2alpha is injected into farm animals to induce regression of the _____ luteum.",
        "a": [
          "corpus",
          "corpus luteum"
        ],
        "a_display": "Corpus (Corpus luteum)",
        "e": "PGF2alpha is a physiological luteolytic hormone that causes rapid luteolysis of the corpus luteum, terminating diestrus.",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The plasma lipoprotein that is least dense, has the largest diameter, and transports dietary lipids from the gut is the _____.",
        "a": [
          "chylomicron",
          "chylomicrons"
        ],
        "a_display": "Chylomicron",
        "e": "Chylomicrons carry exogenous dietary triacylglycerols and cholesterol absorbed from the intestinal mucosa via the thoracic duct into the circulation.",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The fundamental parent steroid hydrocarbon nucleus consisting of four fused rings found in cholesterol is the _____ ring.",
        "a": [
          "cyclopentanoperhydrophenanthrene",
          "cppp"
        ],
        "a_display": "Cyclopentanoperhydrophenanthrene (CPPP)",
        "e": "All natural sterols contain the four-ring CPPP (cyclopentanoperhydrophenanthrene) nucleus with rings A, B, C, and D.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The pulmonary phospholipid surfactant deficiency in premature neonates that causes alveolar collapse is dipalmitoylphosphatidyl_____.",
        "a": [
          "choline",
          "dppc"
        ],
        "a_display": "Choline (DPPC)",
        "e": "Dipalmitoylphosphatidylcholine (DPPC) reduces alveolar surface tension, preventing neonatal respiratory distress syndrome.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The only standard proteinogenic amino acid that lacks a chiral center and is optically inactive is _____.",
        "a": [
          "glycine",
          "gly"
        ],
        "a_display": "Glycine",
        "e": "Glycine has two hydrogen atoms bound to its alpha-carbon (R = H), possessing no asymmetric carbon atom.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The covalent bond that links adjacent amino acids in a polypeptide chain is the _____ bond.",
        "a": [
          "peptide",
          "peptide bond"
        ],
        "a_display": "Peptide",
        "e": "Peptide bonds (-CO-NH-) are formed between the alpha-carboxyl of one amino acid and the alpha-amino group of the next.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The pH at which a protein or amino acid carries zero net electrical charge and does not migrate in an electric field is called its _____ point.",
        "a": [
          "isoelectric",
          "isoelectric point",
          "pi"
        ],
        "a_display": "Isoelectric (pI)",
        "e": "At the isoelectric point (pI), negative and positive charges balance exactly, minimizing solubility.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Cysteine residues form covalent _____ bonds that cross-link polypeptide chains and stabilize protein tertiary structure.",
        "a": [
          "disulfide",
          "disulphide",
          "disulfide bonds",
          "-s-s-"
        ],
        "a_display": "Disulfide (-S-S-)",
        "e": "Oxidation of the thiol (-SH) groups of two cysteine residues yields a covalent disulfide bond, forming cystine.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The qualitative chemical test that detects peptide bonds by forming a violet-purple coordination complex with alkaline copper ions is the _____ test.",
        "a": [
          "biuret",
          "biuret test"
        ],
        "a_display": "Biuret",
        "e": "The Biuret reaction detects compounds with two or more peptide bonds via copper coordination under alkaline conditions.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The amino acid that contains an indole ring in its structure and serves as the precursor for serotonin and melatonin is _____.",
        "a": [
          "tryptophan",
          "trp"
        ],
        "a_display": "Tryptophan",
        "e": "Tryptophan contains an indole aromatic side chain and is metabolized to serotonin (5-hydroxytryptamine) and melatonin.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The standard alpha-helix of protein secondary structure contains _____ amino acid residues per turn.",
        "a": [
          "3.6"
        ],
        "a_display": "3.6",
        "e": "Paulings classic alpha-helix has exactly 3.6 amino acid residues per turn, with a pitch of 0.54 nm (5.4 Angstroms).",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The essential non-protein amino acid required in feline diets to prevent dilated cardiomyopathy is _____.",
        "a": [
          "taurine"
        ],
        "a_display": "Taurine",
        "e": "Taurine (2-aminoethanesulfonic acid) is an obligate dietary requirement for cats because they cannot synthesize sufficient taurine from cysteine.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The cyclic imino acid that acts as a helix breaker because its rigid pyrrolidine ring disrupts alpha-helical geometry is _____.",
        "a": [
          "proline",
          "pro"
        ],
        "a_display": "Proline",
        "e": "Proline lacks a free amide hydrogen when incorporated into a peptide chain and introduces a rigid bend that disrupts alpha-helical structures.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The purine nitrogenous bases found in both DNA and RNA are adenine and _____.",
        "a": [
          "guanine",
          "gua"
        ],
        "a_display": "Guanine",
        "e": "Adenine and guanine are the two universal bicyclic purine bases of genetic material.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In the Watson-Crick double helix, adenine pairs with thymine via _____ hydrogen bonds.",
        "a": [
          "2",
          "two"
        ],
        "a_display": "2 (Two)",
        "e": "A-T pairs form 2 hydrogen bonds, while G-C pairs form 3 hydrogen bonds.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In B-DNA, guanine pairs with cytosine via _____ hydrogen bonds.",
        "a": [
          "3",
          "three"
        ],
        "a_display": "3 (Three)",
        "e": "Guanine forms 3 hydrogen bonds with cytosine, making GC-rich DNA regions more thermally stable.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Nucleic acids absorb ultraviolet light most strongly at a wavelength of _____ nanometers (nm).",
        "a": [
          "260",
          "260 nm",
          "260nm"
        ],
        "a_display": "260 nm",
        "e": "Purine and pyrimidine rings have conjugated pi-electron systems that absorb UV light with a characteristic peak at 260 nm.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The rule stating that in double-stranded DNA, the ratio of A to T and G to C is 1:1 is known as _____ rule.",
        "a": [
          "chargaff's",
          "chargaff",
          "chargaffs"
        ],
        "a_display": "Chargaff's",
        "e": "Erwin Chargaff discovered that dsDNA always exhibits stoichiometric equivalence: %A = %T and %G = %C.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Adjacent nucleotides in a single polynucleotide strand of DNA or RNA are joined by 3',5'-_____ bonds.",
        "a": [
          "phosphodiester",
          "phosphodiester bonds",
          "phosphodiester linkage"
        ],
        "a_display": "Phosphodiester",
        "e": "The covalent backbone of DNA and RNA consists of 3',5'-phosphodiester bridges connecting successive pentose units.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The temperature at which 50% of double-stranded DNA helical structure is denatured into single strands is termed the _____ temperature (Tm).",
        "a": [
          "melting",
          "melting temperature"
        ],
        "a_display": "Melting (Tm)",
        "e": "The melting temperature (Tm) is the midpoint of the thermal denaturation transition curve of DNA.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "All mature transfer RNA (tRNA) molecules carry the invariant amino-acid-acceptor sequence _____ at their 3'-terminus.",
        "a": [
          "cca",
          "5'-cca-3'",
          "cca-3'"
        ],
        "a_display": "CCA (5'-CCA-3')",
        "e": "Aminoacyl-tRNA synthetases esterify specific amino acids to the 3'-adenosine of the invariant 3'-terminal CCA sequence.",
        "topicId": "u1-t17",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The intracellular second messenger synthesized from ATP by adenylyl cyclase is cyclic _____.",
        "a": [
          "amp",
          "camp",
          "adenosine monophosphate"
        ],
        "a_display": "cAMP (cyclic AMP)",
        "e": "Cyclic adenosine 3',5'-monophosphate (cAMP) is a key second messenger transducing peptide and catecholamine hormonal signals.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The old belief that organic compounds could only be formed inside living organisms by a special 'vital force' is called _____.",
        "a": [
          "vitalism",
          "vitalistic theory",
          "vital force theory",
          "theory of vitalism"
        ],
        "a_display": "Vitalism",
        "e": "Vitalism was disproved by Wöhler's synthesis of urea (1828), which showed that the chemistry of living things obeys the same laws as ordinary chemistry.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The word 'enzyme', meaning 'in yeast', was coined by the German physiologist Wilhelm _____.",
        "a": [
          "kühne",
          "kuhne",
          "kuehne"
        ],
        "a_display": "Kühne",
        "e": "Wilhelm Kühne introduced the term 'enzyme' (Greek en = in, zyme = leaven/yeast) in 1877 to describe the catalysts of living cells.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "Transport of two different solutes in the same direction across a membrane by a single carrier protein is called _____.",
        "a": [
          "symport",
          "cotransport",
          "co-transport",
          "symporter"
        ],
        "a_display": "Symport (cotransport)",
        "e": "Symport moves two solutes in the same direction (e.g. Na+-glucose via SGLT1). Antiport moves them in opposite directions. Uniport moves a single solute.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "In the classic Donnan system of sodium chloride with sodium proteinate, the non-diffusible ion is the _____ anion.",
        "a": [
          "protein",
          "proteinate",
          "protein anion"
        ],
        "a_display": "Protein (proteinate)",
        "e": "The large protein anion cannot cross the semipermeable membrane. It is the non-diffusible ion that produces the Donnan distribution of Na+ and Cl-.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The negative logarithm of the acid dissociation constant (Ka) of a weak acid is written as _____.",
        "a": [
          "pka",
          "p ka",
          "pk"
        ],
        "a_display": "pKa",
        "e": "pKa = -log Ka. A smaller pKa means a stronger acid. A buffer works best when the pH is within about 1 unit of its pKa.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "According to the Henderson-Hasselbalch equation, when the ratio [A-]/[HA] is 1:10, the pH equals pKa minus _____.",
        "a": [
          "1",
          "one",
          "1 unit",
          "one unit"
        ],
        "a_display": "1",
        "e": "log(1/10) = -1, so pH = pKa - 1. Similarly a ratio of 10:1 gives pH = pKa + 1.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Two sugars that differ in configuration around only one specific carbon atom (other than the anomeric carbon) are called _____.",
        "a": [
          "epimers",
          "epimer"
        ],
        "a_display": "Epimers",
        "e": "Glucose and galactose are C-4 epimers, and glucose and mannose are C-2 epimers.",
        "topicId": "u1-t06",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The enzyme sucrase (invertase) hydrolyses sucrose into glucose and _____.",
        "a": [
          "fructose",
          "d-fructose"
        ],
        "a_display": "Fructose",
        "e": "Hydrolysis of sucrose gives an equimolar mixture of glucose and fructose, called invert sugar, because the optical rotation changes from dextro to laevo.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Ruminants can digest cellulose because rumen microorganisms secrete the enzyme _____.",
        "a": [
          "cellulase",
          "cellulases"
        ],
        "a_display": "Cellulase",
        "e": "Mammals have no cellulase. Rumen bacteria, protozoa and fungi hydrolyse cellulose, and the released glucose is fermented to volatile fatty acids (acetate, propionate, butyrate) that the animal absorbs.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The toxic lipid component of Gram-negative bacterial lipopolysaccharide (endotoxin) is lipid _____.",
        "a": [
          "a",
          "lipid a"
        ],
        "a_display": "Lipid A",
        "e": "Lipid A anchors LPS in the outer membrane. It triggers release of cytokines (TNF-alpha, IL-1) from macrophages, causing fever and endotoxic shock.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Hydrolysis of fats by alkali to give glycerol and salts of fatty acids (soaps) is called _____.",
        "a": [
          "saponification"
        ],
        "a_display": "Saponification",
        "e": "Boiling a triacylglycerol with NaOH or KOH gives glycerol and sodium or potassium soaps. The saponification number is derived from this reaction.",
        "topicId": "u1-t10",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The plasma enzyme, activated by apolipoprotein A-I, that esterifies cholesterol within HDL is abbreviated _____.",
        "a": [
          "lcat",
          "lecithin cholesterol acyltransferase",
          "lecithin-cholesterol acyltransferase",
          "lecithin:cholesterol acyltransferase"
        ],
        "a_display": "LCAT",
        "e": "Lecithin-cholesterol acyltransferase transfers a fatty acid from lecithin to cholesterol. The cholesteryl ester moves into the core of HDL, allowing HDL to keep collecting cholesterol (reverse cholesterol transport).",
        "topicId": "u1-t11",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Prostaglandins contain a five-membered ring and are derived from the hypothetical C20 parent compound called _____ acid.",
        "a": [
          "prostanoic"
        ],
        "a_display": "Prostanoic acid",
        "e": "Prostanoic acid is a C20 fatty acid with a cyclopentane ring between carbons 8 and 12. All prostaglandins are named as derivatives of it (PGA to PGI).",
        "topicId": "u1-t12",
        "subSection": "u1-s3",
        "diff": 3
      },
      {
        "q": "Proteins that yield only amino acids on complete hydrolysis are called _____ proteins.",
        "a": [
          "simple"
        ],
        "a_display": "Simple",
        "e": "Simple proteins (albumins, globulins, histones, scleroproteins) contain only amino acids. Conjugated proteins also contain a prosthetic group.",
        "topicId": "u1-t13",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The branched-chain amino acids are valine, leucine and _____.",
        "a": [
          "isoleucine",
          "iso-leucine"
        ],
        "a_display": "Isoleucine",
        "e": "Valine, leucine and isoleucine have branched aliphatic side chains. They are essential and are mainly metabolised in skeletal muscle.",
        "topicId": "u1-t14",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Glycine has pKa1 = 2.34 and pKa2 = 9.60. Its isoelectric point (pI) is approximately _____.",
        "a": [
          "5.97",
          "5.97.",
          "6",
          "6.0",
          "5.9"
        ],
        "a_display": "5.97",
        "e": "For an amino acid with no ionisable side chain, pI = (pKa1 + pKa2) / 2 = (2.34 + 9.60) / 2 = 5.97.",
        "topicId": "u1-t15",
        "subSection": "u1-s4",
        "diff": 3
      },
      {
        "q": "The coenzymes NAD+, FAD and coenzyme A all contain a nucleotide made from the base _____.",
        "a": [
          "adenine",
          "adenosine",
          "amp",
          "adenylate",
          "adenosine monophosphate"
        ],
        "a_display": "Adenine (AMP)",
        "e": "NAD+ and FAD each contain an AMP unit, and coenzyme A contains 3'-phospho-ADP. This shows the wider biological role of nucleotides beyond nucleic acids.",
        "topicId": "u1-t16",
        "subSection": "u1-s5",
        "diff": 2
      }
    ]
  },
  "unit-2": {
    "mcq": [
      {
        "q": "According to the IUBMB classification system, enzymes that catalyze the joining of two molecules coupled with the cleavage of ATP are classified as:",
        "o": [
          "Hydrolases (EC 3)",
          "Lyases (EC 4)",
          "Isomerases (EC 5)",
          "Ligases (EC 6)"
        ],
        "a": 3,
        "e": "Class 6 Ligases (synthetases) catalyze the joining of two chemical groups with concomitant hydrolysis of a high-energy phosphate bond (e.g., pyruvate carboxylase, DNA ligase).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The non-protein organic molecule that is dialyzable, heat-stable, and loosely associated with an apoenzyme to form a holoenzyme is called a:",
        "o": [
          "Coenzyme",
          "Prosthetic group",
          "Zymogen",
          "Metalloenzyme"
        ],
        "a": 0,
        "e": "A coenzyme is a low-molecular-weight organic cofactor loosely bound to the protein apoenzyme (e.g., NAD+, NADP+), whereas a tightly or covalently bound cofactor is a prosthetic group.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The active site model proposing that the substrate induces a conformational fit in the enzyme's catalytic cleft was formulated by:",
        "o": [
          "Emil Fischer (1894)",
          "Daniel Koshland (1958)",
          "Leonor Michaelis (1913)",
          "Lineweaver and Burk (1934)"
        ],
        "a": 1,
        "e": "Daniel Koshland proposed the 'Induced Fit Theory', demonstrating that the active site is flexible and undergoes dynamic conformational reshaping upon substrate binding.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The Michaelis constant (Km) of an enzyme is mathematically defined as the substrate concentration at which the reaction velocity is:",
        "o": [
          "Equal to Vmax",
          "Exactly 1/2 of Vmax",
          "1/4 of Vmax",
          "Zero"
        ],
        "a": 1,
        "e": "Km is the substrate concentration ([S]) at which the initial reaction velocity (v) equals half of the maximal velocity (Vmax/2); a lower Km signifies higher enzyme affinity.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In a Lineweaver-Burk double-reciprocal plot (1/v versus 1/[S]), the intercept on the horizontal x-axis represents:",
        "o": [
          "1 / Vmax",
          "Vmax / Km",
          "Km / Vmax",
          "-1 / Km"
        ],
        "a": 3,
        "e": "In the Lineweaver-Burk equation (1/v = Km/Vmax * 1/[S] + 1/Vmax), the y-intercept is 1/Vmax and the x-intercept is -1/Km.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In competitive enzyme inhibition, the inhibitor structurally resembles the substrate, resulting in:",
        "o": [
          "Decreased Km with decreased Vmax",
          "Increased Km with unchanged Vmax",
          "Unchanged Km with decreased Vmax",
          "Both increased Km and increased Vmax"
        ],
        "a": 1,
        "e": "A competitive inhibitor competes with substrate for the free active site; adding excess substrate overcomes the inhibitor, leaving Vmax unchanged while increasing apparent Km.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Which of the following is a classic example of competitive enzyme inhibition?",
        "o": [
          "Inhibition of succinate dehydrogenase by malonate",
          "Inhibition of cytochrome oxidase by cyanide",
          "Inhibition of enolase by fluoride",
          "Inhibition of acetylcholinesterase by diisopropylfluorophosphate"
        ],
        "a": 0,
        "e": "Malonate is a structural analog of succinate (3 carbons vs 4 carbons) that competitively inhibits succinate dehydrogenase in the Krebs cycle.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In non-competitive enzyme inhibition, the inhibitor binds reversibly to both free enzyme and enzyme-substrate complex at an allosteric site, resulting in:",
        "o": [
          "Unchanged Km and decreased Vmax",
          "Increased Km and normal Vmax",
          "Decreased Km and normal Vmax",
          "Decreased Km and decreased Vmax"
        ],
        "a": 0,
        "e": "Non-competitive inhibitors do not interfere with substrate binding (Km unchanged), but prevent the catalytic breakdown of ES complex into products, reducing Vmax.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "An enzyme unit (International Unit, IU) is defined as the amount of enzyme that catalyzes the transformation of:",
        "o": [
          "1 mole of substrate per second",
          "1 gram of substrate per second",
          "1 milligram of substrate per hour",
          "1 micromole of substrate per minute under standard conditions"
        ],
        "a": 3,
        "e": "1 International Unit (IU) = 1 micromole (1 umol) of substrate converted per minute at 25 or 30 deg C under optimal assay conditions.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The SI unit of enzyme catalytic activity, the Katal (kat), corresponds to:",
        "o": [
          "1 mole of substrate converted per second",
          "1 micromole per minute",
          "1 millimole per hour",
          "1 nanomole per second"
        ],
        "a": 0,
        "e": "1 Katal = 1 mol of substrate transformed per second (1 kat = 6 x 10^7 IU).",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Specific activity of an enzyme preparation is expressed as:",
        "o": [
          "Enzyme units (IU) per milligram of total protein",
          "Total substrate consumed per liter",
          "Reaction velocity multiplied by time",
          "Molecular weight divided by turnover number"
        ],
        "a": 0,
        "e": "Specific activity = Enzyme Units / mg protein; it is the definitive measure of enzyme purity, increasing steadily during progressive purification steps.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Suicide inhibition (mechanism-based irreversible inhibition) occurs when an inhibitor is converted by the enzyme into a reactive intermediate that permanently inactivates it, as exemplified by:",
        "o": [
          "Aspirin on cyclooxygenase",
          "Allopurinol on xanthine oxidase",
          "Organophosphates on acetylcholinesterase",
          "All of the above"
        ],
        "a": 3,
        "e": "All listed compounds are classic mechanism-based irreversible/suicide inhibitors that form covalent modifications in the target enzyme's active center.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Lactate dehydrogenase (LDH) exists as five distinct tetrameric isoenzymes (LDH1 to LDH5) composed of combinations of:",
        "o": [
          "Three chains: A, B, and C",
          "Two polypeptide chains: H (heart) and M (muscle)",
          "Four distinct catalytic subunits",
          "Two non-protein coenzyme rings"
        ],
        "a": 1,
        "e": "LDH is a tetramer of H and M subunits: LDH-1 (H4, cardiac muscle), LDH-2 (H3M1), LDH-3 (H2M2), LDH-4 (HM3), and LDH-5 (M4, skeletal muscle and liver).",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Allosteric enzymes generally exhibit a velocity versus substrate concentration curve that is:",
        "o": [
          "Hyperbolic",
          "Parabolic inverted",
          "Linear with positive slope",
          "Sigmoidal (S-shaped)"
        ],
        "a": 3,
        "e": "Allosteric multimeric enzymes display cooperative substrate binding, producing a sigmoidal saturation curve rather than the classic Michaelis-Menten hyperbolic curve.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The temperature coefficient (Q10) for most biological enzyme-catalyzed reactions between 0 deg C and 40 deg C is approximately:",
        "o": [
          "0.5",
          "1.0",
          "2.0",
          "4.0"
        ],
        "a": 2,
        "e": "Q10 represents the factor by which reaction velocity increases with a 10 deg C temperature rise; for enzymatic reactions below denaturation temperatures, Q10 is approximately 2.0.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Which high-energy phosphate compound has the most negative standard free energy of hydrolysis (delta G0' = -61.9 kJ/mol)?",
        "o": [
          "Phosphoenolpyruvate (PEP)",
          "Phosphocreatine",
          "Adenosine triphosphate (ATP)",
          "1,3-Bisphosphoglycerate"
        ],
        "a": 0,
        "e": "Phosphoenolpyruvate (PEP) has the highest phosphate group transfer potential (-61.9 kJ/mol or -14.8 kcal/mol), followed by 1,3-BPG (-49.3 kJ/mol) and phosphocreatine (-43.1 kJ/mol).",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The Chemiosmotic Hypothesis of oxidative phosphorylation explaining ATP synthesis by a transmembrane electrochemical proton gradient was proposed by:",
        "o": [
          "Hans Krebs (1937)",
          "Fritz Lipmann (1941)",
          "Peter Mitchell (1961)",
          "Albert Lehninger (1955)"
        ],
        "a": 2,
        "e": "Peter Mitchell proposed the Chemiosmotic Hypothesis in 1961 (Nobel Prize 1978), demonstrating that electron transport pumps protons from the matrix into the intermembrane space, creating a proton-motive force.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Which respiratory chain complex contains FAD, does NOT pump protons across the inner mitochondrial membrane, and participates directly in the Krebs cycle?",
        "o": [
          "Complex II (Succinate-Q reductase)",
          "Complex I (NADH-Q oxidoreductase)",
          "Complex III (Q-cytochrome c oxidoreductase)",
          "Complex IV (Cytochrome c oxidase)"
        ],
        "a": 0,
        "e": "Complex II is Succinate Dehydrogenase; it oxidizes succinate to fumarate, reducing FAD to FADH2, and transfers electrons to ubiquinone without pumping any protons.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The mobile lipid-soluble electron carrier in the inner mitochondrial membrane that shuttles electrons from Complexes I and II to Complex III is:",
        "o": [
          "Ubiquinone (Coenzyme Q)",
          "Cytochrome c",
          "Plastoquinone",
          "Ferredoxin"
        ],
        "a": 0,
        "e": "Ubiquinone (Coenzyme Q10) has a long isoprenoid hydrophobic tail that dissolves in the lipid bilayer, allowing it to accept electrons and protons to form ubiquinol (QH2).",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Cytochrome c is a water-soluble peripheral hemeprotein located on the:",
        "o": [
          "Outer surface of the inner mitochondrial membrane facing the intermembrane space",
          "Matrix side of the inner mitochondrial membrane",
          "Outer mitochondrial membrane facing the cytosol",
          "Inner surface of the cristae lumen"
        ],
        "a": 0,
        "e": "Cytochrome c is a peripheral membrane protein loosely attached to the outer surface of the inner mitochondrial membrane, shuttling single electrons from Complex III to Complex IV.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Complex IV (Cytochrome c oxidase) contains two heme groups (a and a3) and two copper centers (CuA and CuB), and catalyzes the reduction of:",
        "o": [
          "Molecular O2 to two molecules of H2O",
          "Ubiquinone to ubiquinol",
          "NAD+ to NADH",
          "Pyruvate to lactate"
        ],
        "a": 0,
        "e": "Complex IV transfers four electrons from four reduced cytochrome c molecules to molecular oxygen (O2), reducing it completely to two H2O molecules while pumping 2 protons.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The toxic action of cyanide (CN-), carbon monoxide (CO), and sodium azide (NaN3) is due to specific inhibition of:",
        "o": [
          "Complex I (NADH dehydrogenase)",
          "Complex IV (Cytochrome c oxidase)",
          "Complex III (Cytochrome bc1)",
          "Complex II (Succinate dehydrogenase)"
        ],
        "a": 1,
        "e": "Cyanide, CO, and azide bind tightly to the Fe3+ and CuB centers of cytochrome a3 in Complex IV, arresting cellular respiration and causing histotoxic anoxia.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which compound is a classic inhibitor of Complex I of the respiratory chain and is used as a piscicide and botanical insecticide?",
        "o": [
          "Antimycin A",
          "Rotenone",
          "Oligomycin",
          "Malonate"
        ],
        "a": 1,
        "e": "Rotenone (derived from Derris root) and barbiturates (e.g., amytal) block electron transfer from the Fe-S centers of Complex I to ubiquinone.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Chemical uncouplers of oxidative phosphorylation (such as 2,4-dinitrophenol, DNP) act by:",
        "o": [
          "Inhibiting electron transfer through Complex IV",
          "Blocking oxygen delivery by hemoglobin",
          "Binding irreversibly to the active site of ATP synthase",
          "Dissipating the proton gradient across the inner mitochondrial membrane as heat without halting electron transport"
        ],
        "a": 3,
        "e": "Uncouplers are lipid-soluble weak acids that carry H+ protons across the inner mitochondrial membrane, collapsing the proton-motive force; electron flow speeds up and energy dissipates as heat.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Thermogenin (Uncoupling Protein-1, UCP-1) is a physiological uncoupler found abundantly in brown adipose tissue that functions to:",
        "o": [
          "Synthesize glycogen during torpor",
          "Generate non-shivering thermogenesis to protect newborn calves, lambs, and piglets from hypothermia",
          "Increase ATP storage in muscle",
          "Inhibit fatty acid oxidation during cold stress"
        ],
        "a": 1,
        "e": "UCP-1 uncouples mitochondrial respiration in brown fat, converting proton gradient energy directly into heat (non-shivering thermogenesis), critical for neonatal animal survival.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Oligomycin inhibits oxidative phosphorylation by:",
        "o": [
          "Uncoupling proton transport from ATP synthesis",
          "Binding to the F0 proton channel of ATP synthase, blocking H+ re-entry into the matrix",
          "Inhibiting cytochrome c oxidase",
          "Oxidizing reduced ubiquinone"
        ],
        "a": 1,
        "e": "Oligomycin binds directly to the F0 subunit of mitochondrial ATP synthase, blocking proton translocation back into the matrix and halting ATP generation.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "According to modern consensus bioenergetics, the P:O ratio (moles of ATP synthesized per pair of electrons) is approximately:",
        "o": [
          "2.5 for NADH and 1.5 for FADH2",
          "3.0 for NADH and 2.0 for FADH2",
          "4.0 for NADH and 2.0 for FADH2",
          "1.0 for NADH and 1.0 for FADH2"
        ],
        "a": 0,
        "e": "Because Complex I, III, and IV pump 10 H+ per NADH (yielding ~2.5 ATP via ATP synthase) and Complexes III and IV pump 6 H+ per FADH2 (yielding ~1.5 ATP), the modern P:O ratios are 2.5 and 1.5.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Atractyloside is a plant glycoside that inhibits cellular respiration by blocking:",
        "o": [
          "Complex I",
          "Cytochrome c",
          "Adenine Nucleotide Translocase (ADP/ATP translocase)",
          "ATP synthase F1 head"
        ],
        "a": 2,
        "e": "Atractyloside binds to the outer conformation of the adenine nucleotide translocase in the inner mitochondrial membrane, preventing cytosolic ADP entry and mitochondrial ATP exit.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 3
      },
      {
        "q": "In the respiratory chain, the direction of spontaneous electron flow between redox pairs is determined by:",
        "o": [
          "Standard reduction potential (from more negative E0' to more positive E0')",
          "Molecular weight of electron carriers",
          "Abundance of ATP in the matrix",
          "Membrane cholesterol concentration"
        ],
        "a": 0,
        "e": "Electrons flow spontaneously down the thermodynamic gradient from redox pairs with standard reduction potentials that are electronegative (NADH, E0' = -0.32 V) toward electropositive acceptors (O2/H2O, E0' = +0.82 V).",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Antimycin A blocks mitochondrial electron transport by specifically inhibiting:",
        "o": [
          "Complex I",
          "Complex II",
          "Complex III (Cytochrome bc1 complex)",
          "Complex IV"
        ],
        "a": 2,
        "e": "Antimycin A binds to the Qi site of Complex III (cytochrome bc1), preventing electron transfer from cytochrome b to ubiquinone in the Q-cycle.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The committed and primary rate-limiting regulatory enzyme of the glycolytic pathway is:",
        "o": [
          "Hexokinase",
          "Aldolase",
          "Phosphofructokinase-1 (PFK-1)",
          "Pyruvate kinase"
        ],
        "a": 2,
        "e": "PFK-1 catalyzes the irreversible phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate using ATP; it is allosterically activated by AMP and fructose-2,6-bisphosphate.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In glycolysis, substrate-level phosphorylation occurs during the reactions catalyzed by:",
        "o": [
          "Phosphoglycerate kinase and Pyruvate kinase",
          "Hexokinase and PFK-1",
          "Glyceraldehyde-3-phosphate dehydrogenase and Enolase",
          "Aldolase and Triose phosphate isomerase"
        ],
        "a": 0,
        "e": "ATP is directly synthesized by substrate-level transfer of high-energy phosphate in two glycolytic steps: 1,3-BPG -> 3-PG (phosphoglycerate kinase) and PEP -> Pyruvate (pyruvate kinase).",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Sodium fluoride is added to blood samples collected for clinical plasma glucose estimation because it specifically inhibits:",
        "o": [
          "Hexokinase",
          "Enolase (by removing magnesium as magnesium fluorophosphate)",
          "Glucokinase",
          "Lactate dehydrogenase"
        ],
        "a": 1,
        "e": "Fluoride complexes with magnesium and phosphate to inhibit enolase, stopping red blood cell in vitro glycolysis and preventing false drop in blood glucose readings.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The net yield of ATP produced per molecule of glucose during anaerobic glycolysis in animal erythrocytes is:",
        "o": [
          "1 ATP",
          "2 ATP",
          "4 ATP",
          "30 ATP"
        ],
        "a": 1,
        "e": "Anaerobic glycolysis consumes 2 ATP (hexokinase, PFK-1) and produces 4 ATP (2 phosphoglycerate kinase, 2 pyruvate kinase), yielding a net of 2 ATP along with 2 lactate.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The multi-enzyme Pyruvate Dehydrogenase (PDH) Complex requires how many distinct coenzymes derived from B-vitamins and metabolic intermediates?",
        "o": [
          "Two (NAD+ and FAD)",
          "Three (TPP, Lipoate, CoA)",
          "Five (TPP, Lipoate, CoASH, FAD, and NAD+)",
          "Six (including Biotin)"
        ],
        "a": 2,
        "e": "PDH complex consists of E1, E2, and E3 and requires 5 coenzymes: Thiamine pyrophosphate (TPP, Vit B1), Lipoamide, Coenzyme A (pantothenate), FAD (Vit B2), and NAD+ (niacin).",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Fluoroacetate (found in toxic plants and rat poisons) halts the Krebs cycle because it is converted into fluorocitrate, which powerfully inhibits:",
        "o": [
          "Citrate synthase",
          "Fumarase",
          "Isocitrate dehydrogenase",
          "Aconitase"
        ],
        "a": 3,
        "e": "Fluoroacetate undergoes 'lethal synthesis' by citrate synthase to form fluorocitrate, which suicide-inhibits aconitase, causing toxic accumulation of citrate.",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The only substrate-level phosphorylation step in the Citric Acid (Krebs) Cycle is catalyzed by:",
        "o": [
          "Succinyl-CoA synthetase (succinate thiokinase)",
          "Isocitrate dehydrogenase",
          "Citrate synthase",
          "Malate dehydrogenase"
        ],
        "a": 0,
        "e": "Succinyl-CoA synthetase cleaves the high-energy thioester bond of succinyl-CoA to yield succinate and phosphorylates GDP (or ADP) to GTP (or ATP).",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The Krebs cycle is termed 'amphibolic' because it serves both:",
        "o": [
          "Intracellular and extracellular buffering roles",
          "Aerobic and anaerobic energy generation equally",
          "Oxidative catabolic degradation and biosynthetic anabolic precursor generation",
          "Proton pumping and ATP hydrolysis"
        ],
        "a": 2,
        "e": "Krebs cycle catabolizes acetyl-CoA to CO2 and energy, while supplying carbon skeletons for anabolism (alpha-ketoglutarate for glutamate, oxaloacetate for aspartate and gluconeogenesis, succinyl-CoA for heme).",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The primary physiological function of the Hexose Monophosphate (HMP) Shunt in erythrocytes and adipose tissue is to generate:",
        "o": [
          "Large amounts of ATP via oxidative phosphorylation",
          "NADPH for reductive biosyntheses / antioxidant protection, and Ribose-5-phosphate for nucleotides",
          "Lactate to feed the Cori cycle",
          "Fructose for sperm energy"
        ],
        "a": 1,
        "e": "The HMP shunt (pentose phosphate pathway) produces no ATP directly; it produces NADPH (essential to reduce glutathione in RBCs and synthesize fatty acids) and ribose-5-P.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The rate-limiting and committed enzyme of the HMP Shunt whose deficiency causes hemolytic anemia in animals under oxidative challenge is:",
        "o": [
          "Transketolase",
          "Glucose-6-Phosphate Dehydrogenase (G6PD)",
          "Transaldolase",
          "6-Phosphogluconate dehydrogenase"
        ],
        "a": 1,
        "e": "G6PD catalyzes the first step of the HMP shunt; lack of G6PD impairs NADPH generation, leaving RBC glutathione oxidized and precipitating Heinz-body hemolytic anemia.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In high-producing ruminants (dairy cows and sheep), the principal precursor for hepatic gluconeogenesis that provides over 60-70% of endogenous blood glucose is:",
        "o": [
          "Propionate (volatile fatty acid)",
          "Glycerol",
          "L-Lactate",
          "Acetate"
        ],
        "a": 0,
        "e": "Propionate produced by rumen microbial fermentation is absorbed into portal blood and converted in the liver via propionyl-CoA, methylmalonyl-CoA, and succinyl-CoA to glucose.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which enzyme of gluconeogenesis is located inside the mitochondrial matrix and requires biotin and ATP to convert pyruvate to oxaloacetate?",
        "o": [
          "Phosphoenolpyruvate carboxykinase (PEPCK)",
          "Malate dehydrogenase",
          "Fructose-1,6-bisphosphatase",
          "Pyruvate carboxylase"
        ],
        "a": 3,
        "e": "Pyruvate carboxylase is a mitochondrial biotin-dependent ligase that carboxylates pyruvate into oxaloacetate, allosterically activated by acetyl-CoA.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Skeletal muscle cannot release free glucose into the systemic circulation during fasting because muscle tissue lacks:",
        "o": [
          "Glycogen phosphorylase",
          "Glucose-6-phosphatase",
          "Phosphoglucomutase",
          "Debranching enzyme"
        ],
        "a": 1,
        "e": "Glucose-6-phosphatase is present in liver and kidney cortex but completely absent in skeletal muscle; muscle glycogen can only be broken down for internal energy via glycolysis.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The Cori Cycle (glucose-lactate cycle) involves metabolic cooperation between:",
        "o": [
          "Skeletal muscle / RBCs (producing lactate) and liver (converting lactate back to glucose)",
          "Brain and kidney",
          "Adipose tissue and heart",
          "Rumen and small intestine"
        ],
        "a": 0,
        "e": "Lactate produced by anaerobic muscle and RBCs enters circulation, is taken up by the liver for gluconeogenesis, and the generated glucose returns to peripheral tissues.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Glycogen phosphorylase, the key regulatory enzyme of glycogenolysis, is activated by phosphorylation mediated by:",
        "o": [
          "Insulin and protein phosphatase-1",
          "High concentrations of glucose-6-phosphate",
          "Phosphorylase kinase stimulated by glucagon, epinephrine, and cAMP",
          "Excess ATP"
        ],
        "a": 2,
        "e": "Epinephrine and glucagon trigger adenylyl cyclase and PKA, which activates phosphorylase kinase; phosphorylase kinase converts inactive phosphorylase b to active phosphorylase a.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Triacylglycerol mobilization from adipocytes during negative energy balance is catalyzed by Hormone-Sensitive Lipase (HSL), which is activated by:",
        "o": [
          "Insulin",
          "Glucagon and catecholamines via cAMP-dependent Protein Kinase A (PKA)",
          "High blood glucose",
          "Excess dietary cholesterol"
        ],
        "a": 1,
        "e": "Glucagon and epinephrine stimulate beta-receptors, increasing cAMP and activating PKA, which phosphorylates and activates HSL to hydrolyze stored triacylglycerols into free fatty acids and glycerol.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Long-chain fatty acyl-CoA molecules require which carrier system to cross the inner mitochondrial membrane for beta-oxidation?",
        "o": [
          "Carnitine shuttle (CPT-I, translocase, CPT-II)",
          "Malate-aspartate shuttle",
          "Glycerol phosphate shuttle",
          "Citrate shuttle"
        ],
        "a": 0,
        "e": "Carnitine palmitoyltransferase I (CPT-I) on the outer membrane conjugates fatty acyl-CoA with carnitine; acylcarnitine is translocated across the inner membrane and converted back to acyl-CoA by CPT-II.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The rate-limiting enzyme of mitochondrial fatty acid beta-oxidation that is allosterically inhibited by malonyl-CoA is:",
        "o": [
          "Acyl-CoA synthetase",
          "Acyl-CoA dehydrogenase",
          "Carnitine Palmitoyltransferase-I (CPT-I)",
          "Thiolase"
        ],
        "a": 2,
        "e": "CPT-I is the gatekeeper of beta-oxidation; when lipogenesis is active, high levels of malonyl-CoA inhibit CPT-I, preventing simultaneous futile oxidation of newly made fatty acids.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Each round of the four-step beta-oxidation spiral of fatty acids generates:",
        "o": [
          "1 FADH2, 1 NADH, and 1 Acetyl-CoA (shortened by 2 carbons)",
          "1 ATP, 1 CO2, and 1 Pyruvate",
          "2 NADPH and 1 Propionyl-CoA",
          "1 FAD and 1 Acetoacetate"
        ],
        "a": 0,
        "e": "The 4 recurring steps (dehydrogenation by FAD, hydration, dehydrogenation by NAD+, thiolysis with CoASH) release 1 acetyl-CoA, 1 FADH2, and 1 NADH per cycle.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The complete oxidation of one molecule of palmitic acid (16:0) yields a net total of how many ATP molecules under modern counting?",
        "o": [
          "30 ATP",
          "144 ATP",
          "129 ATP",
          "106 ATP"
        ],
        "a": 3,
        "e": "Palmitate undergoes 7 cycles yielding 7 FADH2 (10.5 ATP), 7 NADH (17.5 ATP), and 8 Acetyl-CoA (80 ATP) = 108 ATP minus 2 high-energy bonds used in activation = 106 net ATP (129 in classical counting).",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The oxidation of odd-chain fatty acids terminates in the three-carbon compound propionyl-CoA, which is metabolized to succinyl-CoA requiring two B-vitamins:",
        "o": [
          "Thiamine (B1) and Riboflavin (B2)",
          "Biotin (B7) and Cobalamin (Vitamin B12)",
          "Niacin (B3) and Pyridoxine (B6)",
          "Folate and Pantothenic acid"
        ],
        "a": 1,
        "e": "Propionyl-CoA carboxylase requires Biotin (B7) to form D-methylmalonyl-CoA; methylmalonyl-CoA mutase requires 5'-deoxyadenosylcobalamin (B12) to form succinyl-CoA.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Which ketone body is chemically a true ketone, cannot be utilized for metabolic energy by animal tissues, and is excreted via the breath and urine giving a sweetish fruity odor?",
        "o": [
          "Acetoacetate",
          "Acetone",
          "Beta-hydroxybutyrate",
          "Acetoacetyl-CoA"
        ],
        "a": 1,
        "e": "Acetone is formed by spontaneous non-enzymatic decarboxylation of acetoacetate; it is volatile, non-metabolizable, and expelled via the lungs in bovine ketosis and diabetic ketoacidosis.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "In high-producing dairy cattle experiencing bovine ketosis, the predominant circulating ketone body in blood and milk is:",
        "o": [
          "Acetone",
          "Oxaloacetate",
          "Acetoacetate",
          "Beta-hydroxybutyrate (BHB)"
        ],
        "a": 3,
        "e": "Beta-hydroxybutyrate (BHB) is the major circulating ketone body in ruminants; serum BHB > 1.2 to 1.4 mmol/L is diagnostic of subclinical ketosis.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The rate-limiting and committed enzyme of ketone body synthesis located in liver mitochondria is:",
        "o": [
          "Thiolase",
          "Beta-hydroxybutyrate dehydrogenase",
          "HMG-CoA Reductase",
          "Mitochondrial HMG-CoA Synthase"
        ],
        "a": 3,
        "e": "Mitochondrial HMG-CoA synthase condenses acetoacetyl-CoA with acetyl-CoA to form 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA); it is the rate-limiting enzyme of ketogenesis.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Although the liver is the exclusive producer of ketone bodies, hepatic tissue cannot utilize ketones as fuel because it lacks:",
        "o": [
          "Thiophorase (Succinyl-CoA:3-ketoacid CoA transferase)",
          "Acetoacetate decarboxylase",
          "Acyl-CoA dehydrogenase",
          "Thiolase"
        ],
        "a": 0,
        "e": "The liver lacks thiophorase (beta-ketoacyl-CoA transferase), the enzyme that activates acetoacetate to acetoacetyl-CoA using succinyl-CoA; thus ketones must be exported to extrahepatic tissues.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "De novo biosynthesis of fatty acids occurs in which cellular compartment?",
        "o": [
          "Mitochondrial matrix",
          "Lysosome",
          "Cytosol",
          "Peroxisome"
        ],
        "a": 2,
        "e": "Fatty acid biosynthesis occurs in the cytosol (unlike beta-oxidation, which is mitochondrial), using acetyl-CoA transported from mitochondria via the citrate shuttle.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The rate-limiting and committed regulatory enzyme of fatty acid biosynthesis that converts acetyl-CoA to malonyl-CoA is:",
        "o": [
          "Fatty Acid Synthase",
          "Acetyl-CoA Carboxylase (ACC)",
          "ATP-citrate lyase",
          "Malic enzyme"
        ],
        "a": 1,
        "e": "Acetyl-CoA Carboxylase (ACC) requires biotin, ATP, and bicarbonate to synthesize malonyl-CoA; it is activated allosterically by citrate and inhibited by palmitoyl-CoA.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The reducing power (NADPH) required for fatty acid biosynthesis is primarily provided by:",
        "o": [
          "Complex I of the electron transport chain",
          "The Krebs cycle",
          "Glycolysis and beta-oxidation",
          "The Hexose Monophosphate (HMP) Shunt and Malic Enzyme"
        ],
        "a": 3,
        "e": "NADPH for lipogenesis is generated by G6PD and 6-phosphogluconate dehydrogenase in the HMP shunt, complemented by cytoplasmic malic enzyme (converting malate to pyruvate).",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The primary carbon donor for fatty acid synthesis in the mammary gland and adipose tissue of ruminants is:",
        "o": [
          "Glucose",
          "Acetate (rumen volatile fatty acid)",
          "Fructose",
          "Glycerol"
        ],
        "a": 1,
        "e": "Ruminants absorb negligible glucose; rumen-derived acetate is the major carbon source for lipogenesis, converted directly to acetyl-CoA by cytosolic acetyl-CoA synthetase.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The end product released from the eukaryotic multi-enzyme Fatty Acid Synthase (FAS) complex by its thioesterase domain is:",
        "o": [
          "Acetyl-CoA",
          "Palmitic acid (Palmitate, 16:0)",
          "Malonyl-CoA",
          "Stearic acid (18:0)"
        ],
        "a": 1,
        "e": "FAS synthesizes fatty acids up to 16 carbons; the thioesterase domain specifically cleaves palmitoyl-ACP to release free palmitate (16:0).",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "All transamination reactions in amino acid metabolism require which coenzyme derived from vitamin B6?",
        "o": [
          "Thiamine pyrophosphate (TPP)",
          "Biotin",
          "Pyridoxal Phosphate (PLP)",
          "Flavin adenine dinucleotide (FAD)"
        ],
        "a": 2,
        "e": "Transaminases (aminotransferases) universally require Pyridoxal Phosphate (PLP), forming a Schiff base intermediate to shuttle amino groups to alpha-ketoglutarate.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Which two standard amino acids do NOT participate in transamination and must be degraded by direct deamination?",
        "o": [
          "Lysine and Threonine",
          "Alanine and Aspartate",
          "Glutamate and Glutamine",
          "Leucine and Isoleucine"
        ],
        "a": 0,
        "e": "Lysine and threonine do not undergo transamination because their keto acids would cyclize into toxic or non-metabolizable products; they are degraded by direct cleavage/deamination.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The major enzyme responsible for oxidative deamination of L-glutamate in mammalian liver mitochondria, releasing free toxic ammonia (NH3), is:",
        "o": [
          "L-Amino acid oxidase",
          "Aspartate aminotransferase",
          "Glutaminase",
          "Glutamate Dehydrogenase (GDH)"
        ],
        "a": 3,
        "e": "GDH is an allosteric mitochondrial enzyme that uses either NAD+ or NADP+ to convert glutamate into alpha-ketoglutarate and free ammonia (NH3).",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "In animal tissues, ammonia is safely transported from extrahepatic tissues (especially brain and muscle) to the liver in the non-toxic form of:",
        "o": [
          "Urea",
          "Uric acid",
          "Glutamine and Alanine",
          "Ammonium chloride"
        ],
        "a": 2,
        "e": "Glutamine synthetase traps free NH3 onto glutamate to form non-toxic glutamine (transported to liver/kidney); muscle also uses alanine via the Glucose-Alanine cycle.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The rate-limiting and committed regulatory enzyme of the Urea Cycle located inside liver mitochondria is:",
        "o": [
          "Ornithine transcarbamoylase (OTC)",
          "Arginase",
          "Argininosuccinate synthetase (ASS)",
          "Carbamoyl Phosphate Synthetase I (CPS-I)"
        ],
        "a": 3,
        "e": "CPS-I synthesizes carbamoyl phosphate from NH4+, HCO3-, and 2 ATP in the mitochondrial matrix; it obligatorily requires N-acetylglutamate (NAG) as an allosteric activator.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The allosteric activator indispensable for the catalytic activity of Carbamoyl Phosphate Synthetase I (CPS-I) is:",
        "o": [
          "Citrate",
          "N-Acetylglutamate (NAG)",
          "Malonyl-CoA",
          "Succinyl-CoA"
        ],
        "a": 1,
        "e": "N-acetylglutamate (NAG) is synthesized from acetyl-CoA and glutamate by NAG synthase (activated by arginine); without NAG, CPS-I remains completely inactive.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The two nitrogen atoms in a molecule of urea are derived respectively from:",
        "o": [
          "Two molecules of free ammonia (NH3)",
          "Glutamine and Alanine",
          "Free ammonia (NH4+) and the amino group of Aspartate",
          "Uric acid and Glycine"
        ],
        "a": 2,
        "e": "One nitrogen comes from free ammonia (incorporated into carbamoyl phosphate by CPS-I) and the second nitrogen enters from aspartate (condensed by argininosuccinate synthetase).",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "How many high-energy phosphate bonds (ATP equivalents) are consumed for the synthesis of one molecule of urea?",
        "o": [
          "One",
          "Two",
          "Four (from 3 molecules of ATP)",
          "Six"
        ],
        "a": 2,
        "e": "CPS-I consumes 2 ATP (yielding 2 ADP + 2 Pi), and Argininosuccinate synthetase consumes 1 ATP (yielding AMP + PPi, where PPi is hydrolyzed to 2 Pi), totaling 4 high-energy bonds.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Which intermediate of the urea cycle is cleaved by argininosuccinate lyase to release fumarate, linking the urea cycle to the citric acid cycle (Krebs Bicycle)?",
        "o": [
          "Citrulline",
          "Ornithine",
          "Arginine",
          "Argininosuccinate"
        ],
        "a": 3,
        "e": "Argininosuccinate is cleaved into arginine and fumarate; the fumarate enters the mitochondria and participates in the Krebs cycle (Krebs 'Bicycle' linkage).",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The final cytosolic enzyme of the urea cycle that cleaves L-arginine into urea and regenerates L-ornithine is:",
        "o": [
          "Argininosuccinase",
          "Ornithine transcarbamoylase",
          "Urease",
          "Arginase"
        ],
        "a": 3,
        "e": "Arginase (a manganese-dependent cytosolic enzyme) hydrolyzes arginine into urea and ornithine; ornithine is re-transported into mitochondria to initiate the next cycle.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Avian species (poultry) and terrestrial reptiles are described as 'uricotelic' because they excrete their excess nitrogenous waste primarily as:",
        "o": [
          "Uric acid (paste-like insoluble crystals)",
          "Free ammonia gas",
          "Urea",
          "Creatinine"
        ],
        "a": 0,
        "e": "Birds lack a functional urea cycle (lacking mitochondrial CPS-I and arginase) and convert excess amino nitrogen into insoluble uric acid to conserve water.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The amino acid that undergoes decarboxylation to synthesize the powerful inflammatory and allergic mediator histamine is:",
        "o": [
          "Tryptophan",
          "Tyrosine",
          "Histidine",
          "Glutamate"
        ],
        "a": 2,
        "e": "Histidine is decarboxylated by histidine decarboxylase (requiring PLP) to form histamine, stored in mast cell and basophil granules.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The inhibitory neurotransmitter Gamma-Aminobutyric Acid (GABA) is produced by enzymatic decarboxylation of:",
        "o": [
          "Serine",
          "Glycine",
          "Aspartate",
          "L-Glutamate"
        ],
        "a": 3,
        "e": "Glutamate decarboxylase (GAD, PLP-dependent) removes the alpha-carboxyl group from L-glutamate to generate the major inhibitory CNS neurotransmitter GABA.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Which purely ketogenic amino acids yield only acetyl-CoA or acetoacetyl-CoA upon catabolism and cannot contribute to gluconeogenesis?",
        "o": [
          "Alanine and Glycine",
          "Valine and Methionine",
          "Leucine and Lysine",
          "Glutamate and Proline"
        ],
        "a": 2,
        "e": "Leucine and lysine are strictly ketogenic amino acids; their breakdown products cannot be converted into pyruvate or TCA intermediates for glucose synthesis.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The primary cellular organelle responsible for degradation of short-lived and misfolded proteins via ubiquitin tagging is the:",
        "o": [
          "Lysosome",
          "Endoplasmic reticulum",
          "Peroxisome",
          "26S Proteasome"
        ],
        "a": 3,
        "e": "Misfolded or regulatory proteins are polyubiquitinated by E1, E2, and E3 ubiquitin ligases and targeted to the ATP-dependent 26S proteasome for degradation.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The committed and rate-limiting step of de novo purine nucleotide biosynthesis is catalyzed by:",
        "o": [
          "PRPP synthetase",
          "Adenylosuccinate synthetase",
          "Glutamine:PRPP Amidotransferase",
          "IMP dehydrogenase"
        ],
        "a": 2,
        "e": "Glutamine:PRPP amidotransferase transfers an amino group from glutamine to PRPP, forming 5-phosphoribosylamine; it is feedback-inhibited by AMP, GMP, and IMP.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The parent purine nucleotide synthesized de novo from which both AMP and GMP are derived is:",
        "o": [
          "XMP (Xanthosine monophosphate)",
          "TMP",
          "CMP (Cytidine monophosphate)",
          "IMP (Inosine monophosphate)"
        ],
        "a": 3,
        "e": "Inosine monophosphate (IMP), containing the purine base hypoxanthine, is the branch-point parent nucleotide for the synthesis of AMP (requires GTP) and GMP (requires ATP).",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "In de novo pyrimidine synthesis, the initial committed step in animal cells is catalyzed by:",
        "o": [
          "Carbamoyl Phosphate Synthetase I (CPS-I)",
          "Carbamoyl Phosphate Synthetase II (CPS-II)",
          "Aspartate transcarbamoylase (ATCase)",
          "Dihydroorotase"
        ],
        "a": 1,
        "e": "Cytosolic CPS-II uses glutamine and HCO3- to produce carbamoyl phosphate; it is inhibited by UTP and activated by PRPP, distinguishing it from mitochondrial CPS-I of the urea cycle.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The final end product of purine catabolism in humans, primates, birds, and Dalmatian dogs is:",
        "o": [
          "Allantoin",
          "Urea",
          "Uric acid",
          "Ammonia"
        ],
        "a": 2,
        "e": "Xanthine oxidase oxidizes hypoxanthine and xanthine to uric acid. Most mammals convert uric acid to allantoin via hepatic uricase, but Dalmatians lack uricase transport, excreting uric acid.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "In domestic mammals other than primates and Dalmatians (e.g., cattle, horses, normal dogs), uric acid is converted to soluble allantoin by the enzyme:",
        "o": [
          "Xanthine oxidase",
          "Urease",
          "Urate oxidase (Uricase)",
          "Allantoinase"
        ],
        "a": 2,
        "e": "Hepatic urate oxidase (uricase) catalyzes the oxidative conversion of insoluble uric acid to water-soluble allantoin, preventing purine urolithiasis in most livestock.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The clinical drug allopurinol treats hyperuricemia and gout by competitively inhibiting:",
        "o": [
          "PRPP synthetase",
          "Adenosine deaminase",
          "Guanase",
          "Xanthine Oxidase"
        ],
        "a": 3,
        "e": "Allopurinol is oxidized by xanthine oxidase to alloxanthine (oxypurinol), which suicide-inhibits xanthine oxidase, lowering uric acid and accumulating soluble hypoxanthine/xanthine.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "Ribonucleotide Reductase, which converts ribonucleotides (NDPs) into deoxyribonucleotides (dNDPs) for DNA synthesis, is active only during which cell cycle phase?",
        "o": [
          "G0 phase",
          "G2 phase",
          "M phase",
          "S phase (DNA synthesis phase)"
        ],
        "a": 3,
        "e": "Ribonucleotide reductase activity is tightly coupled to the cell cycle, being highly induced in S-phase to supply dNTPs for active DNA replication.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "Thymidylate synthase converts dUMP to dTMP using which coenzyme as a methyl and methylene group donor?",
        "o": [
          "N5,N10-Methylene-tetrahydrofolate",
          "S-Adenosylmethionine (SAM)",
          "Methylcobalamin (B12)",
          "Biotin"
        ],
        "a": 0,
        "e": "Thymidylate synthase transfers a one-carbon unit from N5,N10-methylene-THF to dUMP, forming dTMP and dihydrofolate (DHF).",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The salvage pathway for purine nucleotide synthesis salvages free purine bases (hypoxanthine and guanine) using the enzyme:",
        "o": [
          "Purine nucleosidase",
          "Adenine deaminase",
          "Ribonucleotide reductase",
          "HGPRT (Hypoxanthine-Guanine Phosphoribosyltransferase)"
        ],
        "a": 3,
        "e": "HGPRT attaches a ribose-5-phosphate group from PRPP to hypoxanthine (yielding IMP) or guanine (yielding GMP), recycling over 90% of cellular purines.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "In eukaryotic DNA replication, the RNA primers are synthesized by:",
        "o": [
          "DNA Polymerase beta",
          "DNA Primase (associated with DNA Polymerase alpha)",
          "RNA Polymerase II",
          "DNA Topoisomerase II"
        ],
        "a": 1,
        "e": "DNA polymerase alpha-primase complex synthesizes a short RNA primer (~10 nucleotides) followed by a short stretch of initiator DNA before handing off to processive pol delta or epsilon.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "During transcription in eukaryotic nuclei, mRNA is synthesized by:",
        "o": [
          "RNA Polymerase I",
          "RNA Polymerase III",
          "RNA Polymerase II",
          "Mitochondrial RNA Polymerase"
        ],
        "a": 2,
        "e": "RNA Polymerase I synthesizes 28S, 18S, and 5.8S rRNAs; RNA Polymerase II synthesizes all protein-coding mRNAs and snRNAs; RNA Polymerase III synthesizes tRNAs and 5S rRNA.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "During prolonged starvation in monogastric animals, the brain adapts to utilize which alternative fuel source for up to 50-70% of its energy requirements?",
        "o": [
          "Free fatty acids",
          "Amino acids (Leucine)",
          "Ketone bodies (Acetoacetate and Beta-hydroxybutyrate)",
          "Glycerol"
        ],
        "a": 2,
        "e": "Fatty acids cannot cross the blood-brain barrier; during starvation, the brain induces monocarboxylate transporters to utilize circulating ketone bodies, sparing muscle protein breakdown.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "In the well-fed state, elevated blood insulin promotes all of the following biochemical pathways EXCEPT:",
        "o": [
          "Hepatic glycogenesis",
          "Adipocyte triacylglycerol synthesis (lipogenesis)",
          "Hepatic gluconeogenesis",
          "Glycolytic flux via PFK-1 activation"
        ],
        "a": 2,
        "e": "Insulin is an anabolic hormone that promotes glycogenesis, lipogenesis, and protein synthesis while powerfully SUPPRESSING gluconeogenesis and glycogenolysis.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The primary metabolic fuel utilized by adult mammalian cardiac muscle under resting aerobic conditions is:",
        "o": [
          "Glucose",
          "Free long-chain fatty acids (60-70% of energy)",
          "Ketone bodies exclusively",
          "L-Glutamine"
        ],
        "a": 1,
        "e": "Cardiac muscle is strictly aerobic and relies predominantly on beta-oxidation of free fatty acids for 60-70% of its ATP generation under physiological conditions.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The key metabolic crossroads molecule connecting carbohydrate, lipid, and amino acid metabolism is:",
        "o": [
          "Pyruvate and Acetyl-CoA",
          "Ribose-5-phosphate",
          "Succinate",
          "Bilirubin"
        ],
        "a": 0,
        "e": "Pyruvate and Acetyl-CoA sit at the central crossroad: carbohydrates, ketogenic amino acids, and fatty acids converge on acetyl-CoA for oxidation in the Krebs cycle or lipogenesis.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "According to the IUBMB system, enzymes that catalyse oxidation-reduction reactions belong to:",
        "o": [
          "EC 3 (Hydrolases)",
          "EC 2 (Transferases)",
          "EC 1 (Oxidoreductases)",
          "EC 6 (Ligases)"
        ],
        "a": 2,
        "e": "The six IUBMB classes are 1 Oxidoreductases, 2 Transferases, 3 Hydrolases, 4 Lyases, 5 Isomerases and 6 Ligases (a 7th class, Translocases, was added in 2018). Dehydrogenases and oxidases are EC 1 enzymes.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Aldolase splits fructose-1,6-bisphosphate into two trioses without using water or oxidation. It belongs to the class:",
        "o": [
          "Hydrolases",
          "Ligases",
          "Isomerases",
          "Lyases"
        ],
        "a": 3,
        "e": "Lyases (EC 4) break C-C, C-O or C-N bonds by means other than hydrolysis or oxidation, often forming a double bond or adding groups to one. Aldolase and fumarase are classic lyases.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Thiamine pyrophosphate (TPP) is the coenzyme required by:",
        "o": [
          "Transaminases",
          "Acetyl-CoA carboxylase",
          "Hydroxylases",
          "Pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase"
        ],
        "a": 3,
        "e": "TPP, the active form of vitamin B1, is needed for oxidative decarboxylation of alpha-keto acids (pyruvate DH, alpha-KG DH) and for transketolase. Thiamine deficiency causes polioencephalomalacia in ruminants.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Biotin serves as the coenzyme for:",
        "o": [
          "Transamination",
          "Decarboxylation of amino acids",
          "Carboxylation reactions such as pyruvate carboxylase",
          "Transfer of one-carbon units such as methyl groups"
        ],
        "a": 2,
        "e": "Biotin carries activated CO2 for carboxylases: pyruvate carboxylase, acetyl-CoA carboxylase and propionyl-CoA carboxylase. Raw egg white avidin binds biotin and can cause deficiency.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The creatine kinase isoenzyme CK-MM is found predominantly in:",
        "o": [
          "Brain",
          "Skeletal muscle",
          "Liver",
          "Kidney"
        ],
        "a": 1,
        "e": "CK-BB is in brain, CK-MB is enriched in heart and CK-MM is in skeletal muscle. A raised serum CK in animals mainly indicates muscle damage, e.g. exertional rhabdomyolysis or recumbency.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The 'lock and key' model of enzyme-substrate interaction was proposed by:",
        "o": [
          "Daniel Koshland",
          "Lineweaver and Burk",
          "Michaelis and Menten",
          "Emil Fischer"
        ],
        "a": 3,
        "e": "Emil Fischer (1894) proposed that the substrate fits a rigid, pre-shaped active site like a key in a lock. Koshland's induced fit model (1958) later described a flexible active site.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Urease acts only on urea and on no other substrate. This is an example of:",
        "o": [
          "Group specificity",
          "Bond specificity",
          "Stereospecificity",
          "Absolute specificity"
        ],
        "a": 3,
        "e": "Absolute (substrate) specificity means the enzyme acts on one substrate only. Other examples are carbonic anhydrase (CO2) and catalase (H2O2).",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "L-amino acid oxidase acts only on L-amino acids and not on their D-isomers. This is an example of:",
        "o": [
          "Stereo (optical) specificity",
          "Absolute specificity",
          "Group specificity",
          "Reaction specificity"
        ],
        "a": 0,
        "e": "Enzymes recognise the 3-D arrangement of groups around a chiral centre, so they act on only one optical isomer. Separate D-amino acid oxidases exist for D-isomers.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Pepsin shows maximum activity at a pH of about:",
        "o": [
          "1.5 - 2.0",
          "5.0",
          "7.4",
          "8.5"
        ],
        "a": 0,
        "e": "Pepsin works in the acid of the stomach (abomasum) at pH 1.5-2. Trypsin works best around pH 8, and most intracellular enzymes near pH 7.4.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "One katal is approximately equal to how many International Units (IU)?",
        "o": [
          "60",
          "1,000",
          "6 x 10^7",
          "1.67 x 10^-8"
        ],
        "a": 2,
        "e": "1 katal = 1 mol/second = 60 mol/min = 6 x 10^7 micromol/min = 6 x 10^7 IU. Conversely, 1 IU = 16.67 nkat.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "During enzyme purification, a rising specific activity indicates:",
        "o": [
          "A shift in the optimum pH",
          "Increasing purity of the enzyme preparation",
          "Increased affinity for the substrate",
          "Loss of enzyme by denaturation"
        ],
        "a": 1,
        "e": "Specific activity = units of enzyme activity per mg of total protein. As contaminating proteins are removed, activity per mg rises. A constant maximum value suggests the enzyme is pure.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In uncompetitive inhibition:",
        "o": [
          "Both Km and Vmax decrease",
          "Km is unchanged and Vmax decreases",
          "Km increases and Vmax is unchanged",
          "Both Km and Vmax increase"
        ],
        "a": 0,
        "e": "An uncompetitive inhibitor binds only the enzyme-substrate complex. It lowers Vmax and apparent Km by the same factor, so Lineweaver-Burk plots give parallel lines.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Aspartate transcarbamoylase, the committed enzyme of pyrimidine synthesis in bacteria, is inhibited by the end product CTP. This is a classic example of:",
        "o": [
          "Competitive inhibition",
          "Allosteric feedback inhibition",
          "Suicide inhibition",
          "Irreversible covalent inhibition"
        ],
        "a": 1,
        "e": "CTP binds a regulatory site separate from the active site and lowers ATCase activity. When CTP accumulates it switches off its own synthesis. ATP, an allosteric activator, has the opposite effect.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "NAD+ and NADP+ are coenzymes derived from the vitamin:",
        "o": [
          "Niacin (B3)",
          "Riboflavin (B2)",
          "Thiamine (B1)",
          "Pantothenic acid (B5)"
        ],
        "a": 0,
        "e": "Niacin (nicotinic acid / nicotinamide) forms NAD+ and NADP+. Riboflavin forms FAD and FMN, thiamine forms TPP and pantothenic acid forms coenzyme A.",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Oxidases differ from dehydrogenases because oxidases:",
        "o": [
          "Use NAD+ as the hydrogen acceptor",
          "Occur only in the cytosol",
          "Incorporate oxygen atoms into the substrate",
          "Use molecular oxygen as the hydrogen (electron) acceptor"
        ],
        "a": 3,
        "e": "Oxidases pass hydrogen to O2, forming H2O or H2O2 (e.g. cytochrome oxidase, xanthine oxidase). Dehydrogenases use NAD+, NADP+ or FAD. Oxygenases incorporate oxygen into the substrate.",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "About how many protons are pumped into the intermembrane space for each pair of electrons passing from NADH to oxygen?",
        "o": [
          "10",
          "6",
          "4",
          "12"
        ],
        "a": 0,
        "e": "Complex I pumps 4, Complex III pumps 4 and Complex IV pumps 2 protons: 10 in total. About 4 protons are needed per ATP (including transport), giving roughly 2.5 ATP per NADH.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 3
      },
      {
        "q": "The glycolytic enzyme that produces NADH is:",
        "o": [
          "Aldolase",
          "Enolase",
          "Glyceraldehyde-3-phosphate dehydrogenase",
          "Pyruvate kinase"
        ],
        "a": 2,
        "e": "Glyceraldehyde-3-phosphate dehydrogenase oxidises G3P to 1,3-bisphosphoglycerate, reducing NAD+ to NADH. This is the only oxidation step of glycolysis.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "How many molecules of NADH are produced in one turn of the citric acid cycle?",
        "o": [
          "1",
          "2",
          "3",
          "4"
        ],
        "a": 2,
        "e": "Isocitrate dehydrogenase, alpha-ketoglutarate dehydrogenase and malate dehydrogenase each produce one NADH. Succinate dehydrogenase produces one FADH2, and succinyl-CoA synthetase one GTP.",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Using modern P:O values, complete oxidation of one acetyl-CoA via the citric acid cycle and oxidative phosphorylation yields:",
        "o": [
          "12 ATP",
          "15 ATP",
          "10 ATP",
          "38 ATP"
        ],
        "a": 2,
        "e": "3 NADH x 2.5 = 7.5; 1 FADH2 x 1.5 = 1.5; 1 GTP = 1. Total = 10 ATP. Older textbooks give 12 ATP (P:O values of 3 and 2).",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The HMP shunt does NOT produce:",
        "o": [
          "NADPH",
          "Ribose-5-phosphate",
          "CO2",
          "ATP"
        ],
        "a": 3,
        "e": "The HMP shunt produces NADPH (for reductive synthesis and glutathione reduction), ribose-5-phosphate (for nucleotides) and CO2. It neither makes nor consumes ATP directly.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The TPP-dependent enzyme of the non-oxidative HMP shunt, whose erythrocyte activity is used to assess thiamine status, is:",
        "o": [
          "Transaldolase",
          "Transketolase",
          "6-Phosphogluconate dehydrogenase",
          "Glucose-6-phosphate dehydrogenase"
        ],
        "a": 1,
        "e": "Transketolase transfers two-carbon units and needs TPP. Low erythrocyte transketolase activity that rises when TPP is added in vitro indicates thiamine deficiency.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The gluconeogenic enzyme that bypasses the phosphofructokinase-1 step of glycolysis is:",
        "o": [
          "Fructose-1,6-bisphosphatase",
          "Glucose-6-phosphatase",
          "PEP carboxykinase",
          "Pyruvate carboxylase"
        ],
        "a": 0,
        "e": "Fructose-1,6-bisphosphatase hydrolyses F-1,6-BP to F-6-P. Glucose-6-phosphatase bypasses hexokinase, and pyruvate carboxylase plus PEPCK together bypass pyruvate kinase.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Which of the following CANNOT provide carbon for net glucose synthesis in animals?",
        "o": [
          "Acetyl-CoA from even-chain fatty acids",
          "Lactate",
          "Glycerol",
          "Propionate"
        ],
        "a": 0,
        "e": "Pyruvate dehydrogenase is irreversible, and the two carbons of acetyl-CoA are lost as 2 CO2 in the citric acid cycle. So even-chain fatty acids give no net glucose. Propionate, lactate, glycerol and glucogenic amino acids can.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The rate-limiting enzyme of glycogen synthesis (glycogenesis) is:",
        "o": [
          "Glycogen phosphorylase",
          "Glycogen synthase",
          "Branching enzyme",
          "Phosphoglucomutase"
        ],
        "a": 1,
        "e": "Glycogen synthase adds glucose units from UDP-glucose by alpha(1->4) bonds. It is activated by insulin (dephosphorylation) and inhibited by glucagon and adrenaline (phosphorylation).",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The activated glucose donor for glycogen synthesis in animals is:",
        "o": [
          "UDP-glucose",
          "Glucose-1-phosphate",
          "Glucose-6-phosphate",
          "ADP-glucose"
        ],
        "a": 0,
        "e": "UDP-glucose pyrophosphorylase forms UDP-glucose from glucose-1-phosphate and UTP. ADP-glucose is the donor for starch synthesis in plants.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Glycogen phosphorylase cleaves alpha(1->4) glycosidic bonds by adding inorganic phosphate, releasing:",
        "o": [
          "Free glucose",
          "Glucose-1-phosphate",
          "Glucose-6-phosphate",
          "UDP-glucose"
        ],
        "a": 1,
        "e": "This is phosphorolysis (not hydrolysis). The product glucose-1-phosphate is converted to glucose-6-phosphate by phosphoglucomutase. Phosphorylase needs pyridoxal phosphate.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In non-ruminants, acetyl-CoA formed inside mitochondria reaches the cytosol for fatty acid synthesis in the form of:",
        "o": [
          "Carnitine esters",
          "Malonyl-CoA",
          "Citrate",
          "Acetoacetate"
        ],
        "a": 2,
        "e": "The inner mitochondrial membrane is impermeable to acetyl-CoA. It is exported as citrate, which ATP-citrate lyase cleaves in the cytosol back to acetyl-CoA and oxaloacetate (the citrate shuttle). Ruminants use acetate activated directly in the cytosol instead.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The universal initiation (start) codon in protein synthesis is:",
        "o": [
          "UAA",
          "UAG",
          "AUG",
          "UGA"
        ],
        "a": 2,
        "e": "AUG codes for methionine (N-formylmethionine in bacteria) and marks the start of translation. UAA, UAG and UGA are stop codons.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Aminoacyl-tRNA synthetases attach each amino acid to:",
        "o": [
          "The anticodon loop of its tRNA",
          "The 5'-end of the mRNA",
          "The 3'-CCA end of its specific tRNA",
          "The D-arm of the tRNA"
        ],
        "a": 2,
        "e": "The amino acid is joined by an ester bond to the 3'-OH of the terminal adenosine of the CCA end. Activation uses ATP (-> AMP + PPi). These enzymes 'read' the genetic code, and many have proofreading activity.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Peptide bond formation on the ribosome is catalysed by peptidyl transferase, which is:",
        "o": [
          "A protein of the small ribosomal subunit",
          "A ribozyme (the rRNA of the large subunit)",
          "The elongation factor EF-Tu",
          "An aminoacyl-tRNA synthetase"
        ],
        "a": 1,
        "e": "Peptidyl transferase activity resides in the 23S rRNA (prokaryotes) or 28S rRNA (eukaryotes) of the large subunit, making the ribosome a ribozyme. Chloramphenicol inhibits it in bacteria.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Alanine aminotransferase (ALT) transfers the amino group of alanine to alpha-ketoglutarate, forming:",
        "o": [
          "Oxaloacetate and glutamate",
          "Lactate and glutamine",
          "Pyruvate and aspartate",
          "Pyruvate and glutamate"
        ],
        "a": 3,
        "e": "Alanine + alpha-ketoglutarate <-> pyruvate + glutamate (needs PLP). AST forms oxaloacetate and glutamate from aspartate. Both enzymes are important in diagnosing liver disease.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The semi-conservative nature of DNA replication was first demonstrated experimentally by:",
        "o": [
          "Watson and Crick",
          "Meselson and Stahl",
          "Hershey and Chase",
          "Avery, MacLeod and McCarty"
        ],
        "a": 1,
        "e": "In 1958 Meselson and Stahl grew E. coli in 15N then 14N medium. Density-gradient centrifugation showed each daughter DNA contained one old strand and one new strand.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "Okazaki fragments are formed during DNA replication on the:",
        "o": [
          "Lagging strand",
          "Leading strand",
          "Both strands equally",
          "RNA primer"
        ],
        "a": 0,
        "e": "DNA polymerase works only 5' -> 3'. The lagging strand therefore has to be made discontinuously as short Okazaki fragments, which are later joined by DNA ligase.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The enzyme that relieves torsional strain (supercoiling) ahead of the replication fork is:",
        "o": [
          "Helicase",
          "DNA topoisomerase (DNA gyrase in bacteria)",
          "Primase",
          "DNA ligase"
        ],
        "a": 1,
        "e": "Topoisomerases cut and rejoin DNA strands to remove supercoils created by helicase unwinding. Fluoroquinolone antibiotics (enrofloxacin) inhibit bacterial DNA gyrase.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "In the fasting state, the hormone that mainly stimulates hepatic glycogenolysis and gluconeogenesis is:",
        "o": [
          "Insulin",
          "Aldosterone",
          "Thyroxine",
          "Glucagon"
        ],
        "a": 3,
        "e": "Glucagon, released by pancreatic alpha cells when blood glucose falls, acts through cAMP on the liver to increase glycogen breakdown and glucose synthesis.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "In the well-fed state, insulin acts on key regulatory enzymes by promoting:",
        "o": [
          "Phosphorylation and activation of glycogen phosphorylase",
          "Activation of hormone-sensitive lipase",
          "Inhibition of acetyl-CoA carboxylase",
          "Dephosphorylation and activation of glycogen synthase and pyruvate dehydrogenase"
        ],
        "a": 3,
        "e": "Insulin activates protein phosphatases. Dephosphorylation activates glycogen synthase, PDH and acetyl-CoA carboxylase (storage), and inactivates glycogen phosphorylase and hormone-sensitive lipase.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 3
      }
    ],
    "tf": [
      {
        "q": "An enzyme accelerates the rate of a chemical reaction by lowering the activation energy barrier without altering the overall standard free energy change (delta G).",
        "a": true,
        "e": "True. Catalysts decrease the free energy of activation (delta G-dagger) required to reach the transition state, without changing initial or final thermodynamic equilibrium states.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "A low numerical value of Km indicates high binding affinity of the enzyme for its substrate.",
        "a": true,
        "e": "True. Because Km is the substrate concentration producing half-maximal velocity, an enzyme that reaches 1/2 Vmax at very low [S] has high affinity for that substrate.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In competitive enzyme inhibition, increasing the substrate concentration to saturating levels can completely overcome the inhibitory effect and restore Vmax.",
        "a": true,
        "e": "True. Because substrate and competitive inhibitor compete for the same active site, a high enough ratio of [S] displaces the inhibitor, reaching normal Vmax.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Uncompetitive inhibitors bind reversibly to the free enzyme alone prior to substrate attachment.",
        "a": false,
        "e": "False. Uncompetitive inhibitors bind exclusively to the Enzyme-Substrate (ES) complex, decreasing both apparent Vmax and apparent Km in parallel.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Zymogens (proenzymes) are active enzymes that are converted into inactive storage forms by feedback phosphorylation.",
        "a": false,
        "e": "False. Zymogens are inactive precursors (e.g., pepsinogen, trypsinogen) that require irreversible proteolytic cleavage of a peptide segment to expose their active catalytic center.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Isoenzymes are physically distinct forms of the same enzyme that catalyze the same chemical reaction but differ in amino acid sequence, tissue distribution, and kinetic properties.",
        "a": true,
        "e": "True. Isoenzymes (e.g., LDH1-5, CK-MM/MB/BB) are encoded by different genes or splice variants, enabling organ-specific metabolic tuning and diagnostic utility.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The turnover number (kcat) represents the maximum number of substrate molecules converted to product per active site per unit time.",
        "a": true,
        "e": "True. kcat = Vmax / [Et], representing the catalytic turnover rate of a fully saturated enzyme active center (expressed in sec^-1).",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Competitive inhibitors cause the Lineweaver-Burk double reciprocal plot to intersect on the y-axis at the same 1/Vmax point as the uninhibited enzyme.",
        "a": true,
        "e": "True. In competitive inhibition, Vmax is unchanged, so 1/Vmax (the y-intercept) remains identical, while the slope (Km/Vmax) increases and the x-intercept (-1/Km) shifts closer to zero.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Complex II (Succinate Dehydrogenase) pumps four protons across the inner mitochondrial membrane into the intermembrane space per pair of electrons transferred.",
        "a": false,
        "e": "False. Complex II does not pump ANY protons across the membrane because the free energy released during succinate-to-Q electron transfer is insufficient to drive proton translocation.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "In the Chemiosmotic model, ATP is synthesized when protons flow back from the intermembrane space into the mitochondrial matrix through the F0-F1 ATP synthase complex.",
        "a": true,
        "e": "True. Proton influx down the electrochemical gradient through the F0 channel drives rotation of the gamma stalk, inducing conformational changes in F1 beta subunits that synthesize ATP.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Chemical uncouplers like 2,4-DNP completely arrest the rate of oxygen consumption in isolated mitochondria.",
        "a": false,
        "e": "False. Uncouplers actually ACCELERATE oxygen consumption and electron flow because respiratory control by the proton gradient is abolished, dissipating energy as uncontrolled heat.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Brown adipose tissue generates heat in newborn lambs and calves because its inner mitochondrial membrane contains thermogenin (UCP-1).",
        "a": true,
        "e": "True. Thermogenin acts as a regulated proton conductor that bypasses ATP synthase, releasing the proton gradient energy purely as non-shivering thermogenesis.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Cyanide poisoning causes histotoxic hypoxia because cyanide binds to the ferric iron (Fe3+) of cytochrome a3 in Complex IV, arresting mitochondrial electron transport.",
        "a": true,
        "e": "True. Cyanide coordinates tightly with cytochrome oxidase heme iron, blocking cellular respiration; blood remains bright red because oxygen cannot be extracted by tissues.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Cytochrome c is an integral transmembrane protein embedded deeply within the inner mitochondrial lipid bilayer.",
        "a": false,
        "e": "False. Cytochrome c is a soluble peripheral protein loosely electrostatic-bound to the outer leaflet of the inner mitochondrial membrane.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Phosphoenolpyruvate (PEP) possesses a higher standard free energy of hydrolysis than ATP.",
        "a": true,
        "e": "True. Hydrolysis of PEP releases -61.9 kJ/mol compared to -30.5 kJ/mol for ATP, allowing PEP to drive substrate-level phosphorylation of ADP to ATP.",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Glucokinase in the liver has a much higher Km for glucose than hexokinase, allowing the liver to clear large glucose loads only following meals.",
        "a": true,
        "e": "True. Glucokinase has high Km (~10 mM) and is not inhibited by glucose-6-phosphate, functioning effectively during postprandial hyperglycemia to promote hepatic glycogen storage.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Mature mammalian erythrocytes rely 100% on anaerobic glycolysis for their ATP generation because they lack mitochondria.",
        "a": true,
        "e": "True. Mammalian RBCs lose all mitochondria during maturation; they cannot carry out Krebs cycle or oxidative phosphorylation and depend solely on glycolysis to maintain membrane integrity.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In high-yielding dairy cattle, propionate is converted directly into ketone bodies by the ruminal epithelium.",
        "a": false,
        "e": "False. Butyrate (and acetate) is converted to ketone bodies (BHB) by ruminal epithelium. Propionate is glucogenic and passes through the portal vein to the liver for gluconeogenesis.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The Citric Acid Cycle operates under anaerobic conditions in tissues experiencing severe hypoxia.",
        "a": false,
        "e": "False. Krebs cycle requires continuous re-oxidation of NADH and FADH2 by the mitochondrial respiratory chain, which depends on molecular O2; it halts rapidly in anoxia.",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Fructose-2,6-bisphosphate is the most potent allosteric activator of phosphofructokinase-1 (PFK-1) and inhibitor of fructose-1,6-bisphosphatase.",
        "a": true,
        "e": "True. Fructose-2,6-bisphosphate coordinates reciprocal control: high levels stimulate glycolysis (via PFK-1) while turning off gluconeogenesis, preventing a futile cycle.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Glucose-6-phosphate dehydrogenase (G6PD) deficiency leaves red blood cells vulnerable to oxidative hemolysis because reduced glutathione (GSH) cannot be regenerated without NADPH.",
        "a": true,
        "e": "True. Glutathione reductase requires NADPH to reduce GSSG to GSH, which neutralizes H2O2; G6PD deficiency impairs NADPH, causing membrane lipid peroxidation and hemolysis.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The Cori cycle shuttles alanine between muscle and liver to eliminate ammonia as urea.",
        "a": false,
        "e": "False. The Cori cycle shuttles LACTATE between muscle/RBCs and liver. The cycle that shuttles alanine is the Glucose-Alanine cycle (Cahill cycle).",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Glycogen breakdown in liver tissue is stimulated by glucagon via cAMP-dependent activation of glycogen phosphorylase.",
        "a": true,
        "e": "True. Glucagon binds hepatic receptors, elevating cAMP and activating PKA, which activates phosphorylase kinase to convert phosphorylase b to active phosphorylase a.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Malonyl-CoA, the first intermediate of fatty acid synthesis, acts as an allosteric inhibitor of Carnitine Palmitoyltransferase-I (CPT-I).",
        "a": true,
        "e": "True. This reciprocal regulation prevents newly synthesized fatty acids from immediately entering the mitochondria to be degraded via beta-oxidation.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Ketone bodies are synthesized primarily in the cytosol of adipose tissue cells.",
        "a": false,
        "e": "False. Ketogenesis occurs exclusively inside the MITOCHONDRIAL MATRIX of HEPATOCYTES (liver cells).",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The liver is unable to utilize ketone bodies as an energy source because it lacks the enzyme thiophorase (succinyl-CoA:3-ketoacid CoA transferase).",
        "a": true,
        "e": "True. Thiophorase is required to activate acetoacetate into acetoacetyl-CoA; its absence in hepatocytes prevents the liver from consuming the ketones it manufactures.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Beta-oxidation of odd-chain fatty acids produces acetyl-CoA units and a single final molecule of propionyl-CoA.",
        "a": true,
        "e": "True. Successive cleavage of two-carbon acetyl-CoA units from an odd-carbon fatty acyl chain leaves a terminal 3-carbon propionyl-CoA.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The eukaryotic Fatty Acid Synthase (FAS) complex consists of seven distinct monofunctional enzymes floating freely as soluble monomers in the cytoplasm.",
        "a": false,
        "e": "False. Eukaryotic FAS is a single homodimeric multi-enzyme polypeptide possessing all seven catalytic domains and an acyl carrier protein (ACP) on a single chain.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Insulin inhibits Hormone-Sensitive Lipase (HSL) in adipose tissue by promoting its dephosphorylation via protein phosphatase-1.",
        "a": true,
        "e": "True. Insulin lowers cAMP and activates protein phosphatases, dephosphorylating and inactivating HSL, which suppresses lipolysis and promotes fat storage.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Ruminants utilize blood glucose as the primary carbon substrate for fatty acid synthesis in adipose tissue.",
        "a": false,
        "e": "False. In ruminants, glucose is conserved for lactose and vital tissues; acetate (rumen VFA) is the primary carbon donor for fatty acid biosynthesis.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Rothera's nitroprusside test detects acetoacetate and acetone in urine and milk, but does not react with beta-hydroxybutyrate.",
        "a": true,
        "e": "True. Rothera's reagent reacts with true ketone groups present in acetoacetate and acetone, yielding a purple ring; beta-hydroxybutyrate has a secondary alcohol group and gives a negative test.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "All standard amino acids undergo transamination using alpha-ketoglutarate as the universal amino-group acceptor to form L-glutamate.",
        "a": false,
        "e": "False. Lysine and threonine do NOT undergo transamination. For other amino acids, alpha-ketoglutarate is indeed the predominant amino acceptor.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Carbamoyl Phosphate Synthetase I (CPS-I) of the urea cycle requires N-acetylglutamate (NAG) as an obligatory positive allosteric activator.",
        "a": true,
        "e": "True. Without NAG, CPS-I is catalytically inactive; NAG levels rise when amino acid concentrations (especially arginine) increase, stimulating urea synthesis.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The synthesis of one molecule of urea consumes a net total of four high-energy phosphate bonds from three ATP molecules.",
        "a": true,
        "e": "True. Two ATP are consumed by CPS-I (2 ADP + 2 Pi) and one ATP by argininosuccinate synthetase (AMP + PPi -> 2 Pi), expending four high-energy bonds.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The urea cycle takes place entirely within the mitochondrial matrix of hepatocytes.",
        "a": false,
        "e": "False. The urea cycle is compartmentalized: the first two steps occur inside mitochondria (CPS-I, OTC), while the remaining three steps occur in the cytosol (ASS, ASL, Arginase).",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Birds and reptiles excrete nitrogen as uric acid because they possess hyperactive mitochondrial arginase in their liver.",
        "a": false,
        "e": "False. Birds are uricotelic specifically because they LACK mitochondrial CPS-I and arginase, rendering them unable to synthesize urea.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Glutamate dehydrogenase (GDH) can utilize either NAD+ or NADP+ as an electron acceptor during oxidative deamination.",
        "a": true,
        "e": "True. GDH is unique among dehydrogenases in its ability to function with either NAD+ (for oxidative deamination) or NADP+ (for reductive amination).",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Ubiquitin is a 76-amino-acid polypeptide that covalently tags target proteins for ATP-dependent destruction inside the 26S proteasome.",
        "a": true,
        "e": "True. Ubiquitin attaches to lysine epsilon-amino groups of target proteins via isopeptide bonds, serving as a degradation signal recognized by the 26S proteasome.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "In de novo purine biosynthesis, the purine ring is constructed atom-by-atom directly onto a pre-existing ribose-5-phosphate scaffold (PRPP).",
        "a": true,
        "e": "True. Unlike pyrimidine synthesis where the ring is assembled before ribose attachment, purine synthesis builds the bicyclic ring directly onto PRPP starting with 5-phosphoribosylamine.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "Normal domestic dogs and cattle convert uric acid into water-soluble allantoin via the enzyme urate oxidase (uricase).",
        "a": true,
        "e": "True. Urate oxidase is active in the liver of domestic mammals, oxidizing uric acid to allantoin; only humans, higher apes, and Dalmatian dogs excrete high amounts of uric acid.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "Carbamoyl Phosphate Synthetase II (CPS-II) is located in the mitochondrial matrix and uses free ammonium ions as its nitrogen source.",
        "a": false,
        "e": "False. CPS-II is CYTOSOLIC and uses GLUTAMINE as its nitrogen donor for pyrimidine biosynthesis (unlike mitochondrial CPS-I which uses free NH4+ for urea synthesis).",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "Allopurinol acts as a suicide inhibitor of xanthine oxidase, reducing serum and urinary uric acid levels.",
        "a": true,
        "e": "True. Xanthine oxidase converts allopurinol to alloxanthine, which binds tightly to the molybdenum active site, arresting further uric acid generation.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "During starvation, the liver accelerates gluconeogenesis while simultaneously stimulating its own fatty acid biosynthesis.",
        "a": false,
        "e": "False. During starvation, glucagon suppresses fatty acid synthesis (by inactivating acetyl-CoA carboxylase) and stimulates gluconeogenesis and beta-oxidation.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "DNA replication in eukaryotic cells proceeds bidirectionally from multiple replication origins along each chromosome.",
        "a": true,
        "e": "True. Eukaryotic linear chromosomes have thousands of replication origins, each firing bidirectionally to replicate massive genomic DNA within S-phase.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "Skeletal muscle can export glucose into systemic circulation to maintain normoglycemia during intense exercise.",
        "a": false,
        "e": "False. Skeletal muscle lacks glucose-6-phosphatase; it cannot convert glucose-6-phosphate to free glucose and consumes all its glycogen internally via glycolysis.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The EC number of an enzyme consists of three numbers separated by dots.",
        "a": false,
        "e": "False. An EC number has FOUR numbers: class, subclass, sub-subclass and serial number. For example, hexokinase is EC 2.7.1.1.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "A prosthetic group is tightly (often covalently) bound to its enzyme, whereas a co-substrate type coenzyme such as NAD+ binds loosely and leaves after each reaction.",
        "a": true,
        "e": "True. FAD in succinate dehydrogenase and biotin in carboxylases are prosthetic groups. NAD+ behaves like a second substrate, shuttling between different dehydrogenases.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The active site of an enzyme occupies a large part of the total volume of the enzyme molecule.",
        "a": false,
        "e": "False. The active site is a SMALL three-dimensional cleft or pocket formed by a few amino acid residues brought together by folding. The rest of the protein maintains its shape.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "At substrate concentrations far above Km, the reaction velocity becomes practically independent of substrate concentration (zero-order kinetics).",
        "a": true,
        "e": "True. When the enzyme is saturated, adding more substrate cannot increase velocity, which stays at Vmax (zero order). At low [S], well below Km, velocity is proportional to [S] (first order).",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The turnover number of an enzyme is the number of enzyme molecules needed to convert one substrate molecule per second.",
        "a": false,
        "e": "False. Turnover number (kcat) is the number of SUBSTRATE molecules converted to product per enzyme molecule (or active site) per unit time when the enzyme is saturated. Carbonic anhydrase has one of the highest, about 10^6 per second.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Allosteric effectors bind at the catalytic (active) site of the enzyme.",
        "a": false,
        "e": "False. Allosteric effectors bind at a separate REGULATORY (allosteric) site. This changes the enzyme's conformation and so its activity, giving a sigmoidal velocity-substrate curve.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "FAD and FMN are coenzyme forms of niacin (vitamin B3).",
        "a": false,
        "e": "False. FAD and FMN are made from RIBOFLAVIN (vitamin B2). Niacin gives NAD+ and NADP+. Flavin coenzymes accept two hydrogen atoms (FAD -> FADH2).",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Malonate inhibits succinate dehydrogenase non-competitively.",
        "a": false,
        "e": "False. Malonate is a structural analogue of succinate and inhibits succinate dehydrogenase (Complex II) COMPETITIVELY. Adding excess succinate reverses the inhibition.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Arsenate uncouples glycolysis at the glyceraldehyde-3-phosphate dehydrogenase step, so no ATP is formed at the phosphoglycerate kinase step.",
        "a": true,
        "e": "True. Arsenate replaces phosphate, forming 1-arseno-3-phosphoglycerate, which hydrolyses spontaneously to 3-phosphoglycerate. The ATP-forming step is bypassed, so the net ATP yield of glycolysis falls to zero.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "The alpha-ketoglutarate dehydrogenase complex requires the same five coenzymes as the pyruvate dehydrogenase complex.",
        "a": true,
        "e": "True. Both complexes use TPP, lipoic acid, coenzyme A, FAD and NAD+ for oxidative decarboxylation, and both are inhibited by arsenite (which binds lipoic acid).",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Acetyl-CoA is an obligatory allosteric activator of pyruvate carboxylase.",
        "a": true,
        "e": "True. When fatty acid oxidation produces abundant acetyl-CoA, it activates pyruvate carboxylase to make oxaloacetate. This directs pyruvate into gluconeogenesis during fasting.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Glycogen synthase is activated by phosphorylation by cAMP-dependent protein kinase A.",
        "a": false,
        "e": "False. Phosphorylation INACTIVATES glycogen synthase and ACTIVATES glycogen phosphorylase. This reciprocal control prevents synthesis and breakdown from running at the same time.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Acetyl-CoA carboxylase requires biotin, is activated by citrate and is inhibited by long-chain acyl-CoA.",
        "a": true,
        "e": "True. Citrate signals plentiful acetyl-CoA and ATP. Long-chain acyl-CoA (end product) causes feedback inhibition. Glucagon and adrenaline inactivate it by phosphorylation.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The genetic code is degenerate, meaning that most amino acids are coded by more than one codon.",
        "a": true,
        "e": "True. 61 sense codons code for 20 amino acids, so most amino acids have several codons (leucine, serine and arginine have six each). Only methionine and tryptophan have a single codon.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Ornithine transcarbamoylase, which forms citrulline, is a cytosolic enzyme of the urea cycle.",
        "a": false,
        "e": "False. Ornithine transcarbamoylase is MITOCHONDRIAL, like carbamoyl phosphate synthetase I. Citrulline then moves to the cytosol, where the remaining three enzymes act.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "DNA polymerases synthesise new DNA strands in the 3' -> 5' direction.",
        "a": false,
        "e": "False. All DNA polymerases synthesise in the 5' -> 3' direction, adding nucleotides to the free 3'-OH of the growing strand. Their 3' -> 5' EXONUCLEASE activity is used for proofreading.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "Insulin is the only major hormone that lowers blood glucose concentration.",
        "a": true,
        "e": "True. Insulin lowers blood glucose by increasing uptake into muscle and fat, glycogen synthesis and lipogenesis. The counter-regulatory hormones (glucagon, adrenaline, cortisol, growth hormone) all raise it.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "Enzymes that catalyze the geometric or structural rearrangement within a single molecule are classified under IUBMB Class 5 as _____.",
        "a": [
          "isomerases",
          "isomerase"
        ],
        "a_display": "Isomerases",
        "e": "Class 5 Isomerases catalyze racemizations, epimerizations, cis-trans conversions, and intramolecular group transfers (e.g., phosphoglucomutase).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The substrate concentration at which an enzyme-catalyzed reaction achieves exactly half of its maximal velocity is called the _____ constant.",
        "a": [
          "michaelis",
          "michaelis constant",
          "km",
          "michaelis-menten"
        ],
        "a_display": "Michaelis (Km)",
        "e": "The Michaelis constant (Km) reflects enzyme-substrate affinity under steady-state conditions.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In competitive enzyme inhibition, the value of Km increases while the value of Vmax remains _____.",
        "a": [
          "unchanged",
          "constant",
          "same"
        ],
        "a_display": "Unchanged (Constant)",
        "e": "Excess substrate outcompetes the competitive inhibitor, allowing the reaction to reach the same maximum velocity (Vmax).",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In non-competitive enzyme inhibition, the value of Km remains unchanged while the value of Vmax is _____.",
        "a": [
          "decreased",
          "reduced",
          "lowered"
        ],
        "a_display": "Decreased",
        "e": "Non-competitive inhibitors decrease functional enzyme turnover without altering substrate binding affinity, lowering Vmax.",
        "topicId": "u2-t06",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The inactive zymogen precursor of the pancreatic endopeptidase trypsin is termed _____.",
        "a": [
          "trypsinogen"
        ],
        "a_display": "Trypsinogen",
        "e": "Trypsinogen is secreted by the pancreas and activated in the duodenum by enteropeptidase (enterokinase) via hexapeptide removal.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "One International Unit (IU) of enzyme activity represents the transformation of 1 _____ of substrate per minute.",
        "a": [
          "micromole",
          "umol",
          "micro mole"
        ],
        "a_display": "Micromole (umol)",
        "e": "1 IU = 1 umol of substrate converted per minute under specified standard assay conditions.",
        "topicId": "u2-t05",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Lactate dehydrogenase (LDH) is composed of four subunits and possesses _____ distinct isoenzyme forms.",
        "a": [
          "5",
          "five"
        ],
        "a_display": "5 (Five)",
        "e": "LDH forms five tetrameric isoenzymes (LDH-1 to LDH-5) formed by combinations of H and M polypeptide chains.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The double reciprocal plot of 1/v versus 1/[S] is commonly known as the _____-Burk plot.",
        "a": [
          "lineweaver",
          "lineweaver-burk",
          "lineweaver burk"
        ],
        "a_display": "Lineweaver-Burk",
        "e": "The Lineweaver-Burk linear transformation yields a straight line with y-intercept 1/Vmax and x-intercept -1/Km.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The Chemiosmotic Hypothesis of ATP synthesis in mitochondria was formulated by the British biochemist Peter _____.",
        "a": [
          "mitchell",
          "peter mitchell"
        ],
        "a_display": "Mitchell (Peter Mitchell)",
        "e": "Peter Mitchell proposed the chemiosmotic coupling mechanism in 1961 and was awarded the Nobel Prize in 1978.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Complex II of the respiratory chain is identical to the Krebs cycle enzyme _____ dehydrogenase.",
        "a": [
          "succinate",
          "succinate dehydrogenase"
        ],
        "a_display": "Succinate dehydrogenase",
        "e": "Succinate dehydrogenase is the only enzyme embedded in the inner mitochondrial membrane that participates in both TCA cycle and ETC.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The terminal enzyme of the mitochondrial respiratory chain that reduces molecular oxygen to water is cytochrome c _____.",
        "a": [
          "oxidase",
          "cytochrome c oxidase"
        ],
        "a_display": "Oxidase (Cytochrome c oxidase)",
        "e": "Complex IV (cytochrome c oxidase) transfers electrons from cytochrome c to O2, forming two water molecules.",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The classic chemical uncoupler 2,4-_____ dissipates the mitochondrial proton gradient as heat.",
        "a": [
          "dinitrophenol",
          "dnp",
          "2,4-dinitrophenol"
        ],
        "a_display": "Dinitrophenol (2,4-DNP)",
        "e": "2,4-DNP acts as a mobile lipophilic proton carrier, shuttling protons across the inner membrane and collapsing the proton-motive force.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The physiological uncoupling protein present in brown adipose tissue responsible for neonatal non-shivering thermogenesis is _____.",
        "a": [
          "thermogenin",
          "ucp-1",
          "ucp1",
          "uncoupling protein 1"
        ],
        "a_display": "Thermogenin (UCP-1)",
        "e": "Thermogenin (UCP-1) dissipates the proton gradient into heat to protect newborn calves, lambs, and piglets from hypothermia.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Cyanide and carbon monoxide block mitochondrial respiration by inhibiting respiratory Complex _____.",
        "a": [
          "4",
          "iv",
          "four"
        ],
        "a_display": "IV (Complex IV)",
        "e": "Cyanide and CO bind to heme a3 and copper centers of Complex IV (cytochrome c oxidase), causing cellular asphyxiation.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The antibiotic oligomycin inhibits ATP synthase by binding directly to its _____ subunit channel.",
        "a": [
          "f0",
          "fo"
        ],
        "a_display": "F0 (F-zero)",
        "e": "Oligomycin plugs the proton-translocating F0 channel of ATP synthase, arresting both phosphorylation and respiration.",
        "topicId": "u2-t09",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The committed, rate-limiting enzyme of the glycolytic pathway is phosphofructokinase-_____.",
        "a": [
          "1",
          "i",
          "one"
        ],
        "a_display": "1 (PFK-1)",
        "e": "PFK-1 converts fructose-6-phosphate to fructose-1,6-bisphosphate, representing the primary regulatory checkpoint in glycolysis.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Enolase, an enzyme of glycolysis, is clinically inhibited during blood sample collection by sodium _____.",
        "a": [
          "fluoride",
          "naf"
        ],
        "a_display": "Fluoride (Sodium fluoride)",
        "e": "Sodium fluoride inhibits enolase in grey-top blood collection tubes, halting in vitro glycolysis by erythrocytes.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The net ATP yield per glucose molecule metabolized via anaerobic glycolysis to lactate is _____ ATP.",
        "a": [
          "2",
          "two"
        ],
        "a_display": "2 (Two)",
        "e": "Anaerobic glycolysis generates 4 ATP by substrate-level phosphorylation and consumes 2 ATP, yielding a net of 2 ATP.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The rate-limiting enzyme of the Hexose Monophosphate Shunt is glucose-6-phosphate _____.",
        "a": [
          "dehydrogenase",
          "g6pd"
        ],
        "a_display": "Dehydrogenase (G6PD)",
        "e": "G6PD catalyzes the first step of the pentose phosphate pathway, producing NADPH required to protect RBCs from oxidative stress.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The major volatile fatty acid absorbed from the rumen that serves as the chief gluconeogenic precursor in cattle and sheep is _____.",
        "a": [
          "propionate",
          "propionic acid"
        ],
        "a_display": "Propionate",
        "e": "Propionate is converted to succinyl-CoA and provides over 60% of all endogenous blood glucose synthesized in ruminants.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The metabolic cycle that transfers lactate from exercising muscle or RBCs to the liver for glucose synthesis is the _____ cycle.",
        "a": [
          "cori",
          "cori cycle"
        ],
        "a_display": "Cori",
        "e": "The Cori cycle (lactic acid cycle) prevents lactic acidosis and recycles lactate carbon into glucose.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Skeletal muscle cannot export free glucose into blood because it lacks the enzyme glucose-6-_____.",
        "a": [
          "phosphatase"
        ],
        "a_display": "Phosphatase (Glucose-6-phosphatase)",
        "e": "Glucose-6-phosphatase is absent in muscle; hence muscle glycogen cannot contribute directly to blood glucose.",
        "topicId": "u2-t13",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The multi-enzyme Pyruvate Dehydrogenase complex requires _____ distinct cofactors to oxidatively decarboxylate pyruvate to acetyl-CoA.",
        "a": [
          "5",
          "five"
        ],
        "a_display": "5 (Five: TPP, Lipoate, CoA, FAD, NAD+)",
        "e": "PDH complex utilizes thiamine pyrophosphate (TPP), lipoic acid, coenzyme A, FAD, and NAD+.",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Long-chain fatty acids require the carrier molecule _____ to enter the mitochondrial matrix for beta-oxidation.",
        "a": [
          "carnitine"
        ],
        "a_display": "Carnitine",
        "e": "Carnitine forms acylcarnitine esters to shuttle activated fatty acids across the impermeable inner mitochondrial membrane.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The complete mitochondrial beta-oxidation of palmitic acid (16:0) produces _____ molecules of acetyl-CoA.",
        "a": [
          "8",
          "eight"
        ],
        "a_display": "8 (Eight)",
        "e": "Palmitic acid (16 carbons) undergoes 7 rounds of beta-oxidation, cleaving into 8 two-carbon acetyl-CoA molecules.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The three ketone bodies formed in the animal body are acetoacetate, acetone, and beta-_____.",
        "a": [
          "hydroxybutyrate",
          "hydroxybutyric acid",
          "d-beta-hydroxybutyrate"
        ],
        "a_display": "Hydroxybutyrate (Beta-hydroxybutyrate)",
        "e": "Acetoacetate, beta-hydroxybutyrate, and acetone comprise the three ketone bodies produced by liver mitochondria.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The volatile ketone body excreted via the breath giving a sweet fruity aroma during bovine ketosis is _____.",
        "a": [
          "acetone"
        ],
        "a_display": "Acetone",
        "e": "Acetone is non-metabolizable and is eliminated through the lungs in expired air and through the skin and kidneys.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The liver cannot utilize ketone bodies for its own energy needs because it lacks the activating enzyme _____.",
        "a": [
          "thiophorase",
          "succinyl-coa:3-ketoacid coa transferase",
          "beta-ketoacyl-coa transferase"
        ],
        "a_display": "Thiophorase (Succinyl-CoA:3-ketoacid CoA transferase)",
        "e": "Thiophorase is absent in liver tissue, forcing liver-derived ketones to be utilized solely by peripheral tissues like muscle and brain.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The committed rate-limiting enzyme of fatty acid biosynthesis in the cytosol is acetyl-CoA _____.",
        "a": [
          "carboxylase",
          "acc"
        ],
        "a_display": "Carboxylase (Acetyl-CoA carboxylase)",
        "e": "Acetyl-CoA carboxylase is a biotin-dependent enzyme that carboxylates acetyl-CoA to malonyl-CoA.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The intermediate that allosterically inhibits Carnitine Palmitoyltransferase-I (CPT-I) to shut down beta-oxidation during lipogenesis is _____-CoA.",
        "a": [
          "malonyl",
          "malonyl-coa"
        ],
        "a_display": "Malonyl (Malonyl-CoA)",
        "e": "Malonyl-CoA inhibits CPT-I, preventing fatty acid entry into mitochondria during active fatty acid synthesis.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "In lactating dairy ruminants, the volatile fatty acid that provides the bulk of acetyl units for milk fat synthesis is _____.",
        "a": [
          "acetate",
          "acetic acid"
        ],
        "a_display": "Acetate",
        "e": "Acetate produced by cellulolytic rumen microbes is the predominant building block for milk and tissue fat synthesis in ruminants.",
        "topicId": "u2-t16",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "All transamination reactions in the animal body require the active coenzyme form of vitamin B6 known as _____ phosphate.",
        "a": [
          "pyridoxal",
          "plp",
          "pyridoxal phosphate",
          "pyridoxal-5-phosphate"
        ],
        "a_display": "Pyridoxal (PLP)",
        "e": "Pyridoxal phosphate (PLP) forms a covalent Schiff base intermediate with amino acids during transamination.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The mitochondrial enzyme that oxidatively deaminates L-glutamate to release free toxic ammonia is glutamate _____.",
        "a": [
          "dehydrogenase",
          "gdh"
        ],
        "a_display": "Dehydrogenase (Glutamate dehydrogenase)",
        "e": "Glutamate dehydrogenase (GDH) oxidizes glutamate to alpha-ketoglutarate and NH4+ using NAD+ or NADP+.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The rate-limiting mitochondrial enzyme of the urea cycle is Carbamoyl Phosphate Synthetase _____.",
        "a": [
          "1",
          "i",
          "one"
        ],
        "a_display": "I (CPS-I)",
        "e": "CPS-I synthesizes carbamoyl phosphate inside liver mitochondria and requires N-acetylglutamate as an obligatory activator.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The obligatory allosteric activator of Carbamoyl Phosphate Synthetase I is N-acetyl_____.",
        "a": [
          "glutamate",
          "nag"
        ],
        "a_display": "Glutamate (N-acetylglutamate)",
        "e": "N-acetylglutamate (NAG) binds CPS-I to induce the active conformation required for carbamoyl phosphate formation.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The cytosolic enzyme of the urea cycle that cleaves L-arginine into urea and ornithine is _____.",
        "a": [
          "arginase"
        ],
        "a_display": "Arginase",
        "e": "Arginase is a manganese metalloenzyme that releases urea and regenerates ornithine for another turn of the cycle.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Animals like birds and reptiles that excrete excess nitrogen primarily as uric acid are described as _____.",
        "a": [
          "uricotelic"
        ],
        "a_display": "Uricotelic",
        "e": "Uricotelic species convert waste nitrogen into semi-solid, insoluble uric acid to minimize evaporative water loss.",
        "topicId": "u2-t19",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Histamine, an inflammatory mediator, is synthesized by the enzymatic decarboxylation of the amino acid _____.",
        "a": [
          "histidine"
        ],
        "a_display": "Histidine",
        "e": "Histidine decarboxylase removes the alpha-carboxyl group from histidine to form histamine.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The activated pentose phosphate donor that serves as the foundation for de novo purine and pyrimidine nucleotide synthesis is _____.",
        "a": [
          "prpp",
          "5-phosphoribosyl-1-pyrophosphate",
          "phosphoribosyl pyrophosphate"
        ],
        "a_display": "PRPP (Phosphoribosyl pyrophosphate)",
        "e": "PRPP synthetase uses ribose-5-phosphate and ATP to synthesize PRPP, the high-energy ribose donor.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The parent purine nucleotide containing hypoxanthine from which AMP and GMP are synthesized is inosine _____.",
        "a": [
          "monophosphate",
          "imp"
        ],
        "a_display": "Monophosphate (IMP)",
        "e": "IMP is the branch-point purine intermediate converted to AMP via adenylosuccinate or to GMP via XMP.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The final degradation product of purine catabolism in humans, birds, and Dalmatian dogs is _____ acid.",
        "a": [
          "uric",
          "uric acid"
        ],
        "a_display": "Uric (Uric acid)",
        "e": "Uric acid is generated by xanthine oxidase from xanthine; excess levels precipitate as gout or urinary calculi.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The hepatic enzyme that oxidizes uric acid to water-soluble allantoin in normal domestic cattle and dogs is urate _____.",
        "a": [
          "oxidase",
          "uricase"
        ],
        "a_display": "Oxidase (Uricase)",
        "e": "Urate oxidase (uricase) converts poorly soluble uric acid to highly soluble allantoin in most mammals.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The anti-hyperuricemic drug that treats gout by inhibiting xanthine oxidase is _____.",
        "a": [
          "allopurinol"
        ],
        "a_display": "Allopurinol",
        "e": "Allopurinol is metabolized to oxypurinol, which acts as a suicide inhibitor of xanthine oxidase.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The enzyme that converts ribonucleotides to deoxyribonucleotides for DNA replication is ribonucleotide _____.",
        "a": [
          "reductase"
        ],
        "a_display": "Reductase (Ribonucleotide reductase)",
        "e": "Ribonucleotide reductase reduces the 2'-OH of ribose in NDPs to 2'-H to yield dNDPs.",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 2
      },
      {
        "q": "The central metabolic organ that maintains systemic glucose homeostasis via both glycogen storage and gluconeogenesis is the _____.",
        "a": [
          "liver"
        ],
        "a_display": "Liver",
        "e": "The liver functions as the primary metabolic clearinghouse and buffer of circulating fuels in the animal body.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "The protein part of a conjugated enzyme, which is inactive without its cofactor, is called the _____.",
        "a": [
          "apoenzyme",
          "apo-enzyme",
          "apoprotein"
        ],
        "a_display": "Apoenzyme",
        "e": "Apoenzyme (protein) + cofactor/coenzyme = holoenzyme (the active enzyme).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Metal ions such as Mg2+, Zn2+ and Mn2+ that are required for enzyme activity are called metal _____.",
        "a": [
          "activators",
          "activator",
          "cofactors",
          "cofactor",
          "ions"
        ],
        "a_display": "Activators (cofactors)",
        "e": "Inorganic cofactors (metal activators) include Mg2+ for kinases, Zn2+ for carbonic anhydrase and Cu2+ for cytochrome oxidase. Metal-activated enzymes differ from metalloenzymes, in which the metal is tightly bound.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Hexokinase phosphorylates glucose, fructose and mannose. Because it acts on a group of structurally related substrates, it shows _____ specificity.",
        "a": [
          "group",
          "relative",
          "group (relative)",
          "broad"
        ],
        "a_display": "Group (relative)",
        "e": "Group specificity means the enzyme acts on a class of related compounds sharing a feature, e.g. hexokinase on hexoses, or pepsin on peptide bonds next to aromatic residues.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Most mammalian enzymes have an optimum temperature close to _____ degrees Celsius.",
        "a": [
          "37",
          "37 degrees",
          "37 c",
          "37°c",
          "37 °c",
          "37 degree"
        ],
        "a_display": "37 °C",
        "e": "Activity rises with temperature up to the optimum (about 37-40 °C in mammals). Above this, heat denaturation destroys the enzyme's shape and activity falls sharply.",
        "topicId": "u2-t04",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Enzymes that insert one atom of molecular oxygen into the substrate and reduce the other to water are called mixed-function oxidases or _____.",
        "a": [
          "monooxygenases",
          "monooxygenase",
          "mono-oxygenases",
          "mono-oxygenase",
          "hydroxylases",
          "hydroxylase"
        ],
        "a_display": "Monooxygenases (hydroxylases)",
        "e": "Monooxygenases such as the cytochrome P450 system and phenylalanine hydroxylase need a reductant (NADPH). Dioxygenases insert both oxygen atoms into the substrate.",
        "topicId": "u2-t07",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "ATP synthase, which uses the proton gradient to make ATP from ADP and Pi, is also called Complex _____ of the respiratory chain.",
        "a": [
          "v",
          "5",
          "five"
        ],
        "a_display": "V",
        "e": "ATP synthase (F0F1-ATPase) is Complex V. Protons flowing back through F0 rotate the enzyme, and conformational changes in F1 synthesise ATP (Boyer's binding-change mechanism).",
        "topicId": "u2-t08",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "In erythrocytes, 2,3-bisphosphoglycerate, which lowers the oxygen affinity of haemoglobin, is formed in the _____ shunt.",
        "a": [
          "rapoport-luebering",
          "rapoport luebering",
          "luebering-rapoport",
          "rapoport-leubering",
          "rapoport"
        ],
        "a_display": "Rapoport-Luebering",
        "e": "Bisphosphoglycerate mutase converts 1,3-BPG to 2,3-BPG. 2,3-BPG binds deoxyhaemoglobin and promotes O2 release to tissues, at the cost of the ATP normally made at the phosphoglycerate kinase step.",
        "topicId": "u2-t10",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "The first reaction of the citric acid cycle, condensation of acetyl-CoA with oxaloacetate, is catalysed by _____ synthase.",
        "a": [
          "citrate"
        ],
        "a_display": "Citrate synthase",
        "e": "Citrate synthase forms citrate. The reaction is strongly exergonic because the thioester bond of citryl-CoA is hydrolysed, which drives the cycle forward.",
        "topicId": "u2-t11",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The oxidative phase of the HMP shunt produces _____ molecules of NADPH per molecule of glucose-6-phosphate oxidised.",
        "a": [
          "2",
          "two"
        ],
        "a_display": "2",
        "e": "G6PD and 6-phosphogluconate dehydrogenase each produce one NADPH, giving 2 NADPH and 1 CO2 per glucose-6-phosphate converted to ribulose-5-phosphate.",
        "topicId": "u2-t12",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The enzyme that creates alpha(1->6) branch points during glycogen synthesis is the _____ enzyme.",
        "a": [
          "branching",
          "branching enzyme",
          "amylo-(1,4->1,6)-transglycosylase",
          "glycosyl-(4,6)-transferase"
        ],
        "a_display": "Branching enzyme",
        "e": "Branching enzyme transfers a block of about 6-7 glucose residues to an alpha(1->6) position. Branching increases solubility and creates many ends for rapid synthesis and breakdown.",
        "topicId": "u2-t14",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Very-long-chain fatty acids (longer than about 20 carbons) begin their beta-oxidation in the _____.",
        "a": [
          "peroxisomes",
          "peroxisome"
        ],
        "a_display": "Peroxisomes",
        "e": "Peroxisomal beta-oxidation shortens very-long-chain fatty acids, and the resulting medium-chain acyl-CoA is completed in mitochondria. Its first enzyme (acyl-CoA oxidase) produces H2O2 rather than FADH2.",
        "topicId": "u2-t15",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The number of stop (termination) codons in the standard genetic code is _____.",
        "a": [
          "3",
          "three"
        ],
        "a_display": "3",
        "e": "UAA (ochre), UAG (amber) and UGA (opal) have no tRNA. Release factors recognise them and free the completed polypeptide.",
        "topicId": "u2-t17",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Decarboxylation of DOPA produces the neurotransmitter _____, which is the precursor of noradrenaline.",
        "a": [
          "dopamine"
        ],
        "a_display": "Dopamine",
        "e": "Tyrosine -> DOPA (tyrosine hydroxylase) -> dopamine (aromatic L-amino acid decarboxylase, PLP-dependent) -> noradrenaline -> adrenaline.",
        "topicId": "u2-t18",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "In pyrimidine catabolism, thymine is broken down to the water-soluble end product beta-_____.",
        "a": [
          "aminoisobutyrate",
          "aminoisobutyric acid",
          "amino isobutyric acid",
          "aminoisobutyric",
          "amino-isobutyrate"
        ],
        "a_display": "beta-Aminoisobutyrate",
        "e": "Thymine -> beta-aminoisobutyrate, while cytosine and uracil -> beta-alanine, CO2 and NH3. Unlike purine breakdown (uric acid), pyrimidine end products are highly soluble.",
        "topicId": "u2-t20",
        "subSection": "u2-s6",
        "diff": 3
      },
      {
        "q": "The enzyme that seals nicks between adjacent Okazaki fragments by forming a phosphodiester bond is DNA _____.",
        "a": [
          "ligase"
        ],
        "a_display": "DNA ligase",
        "e": "DNA ligase joins the 3'-OH of one fragment to the 5'-phosphate of the next, using ATP (eukaryotes) or NAD+ (bacteria).",
        "topicId": "u2-t21",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "In the high-yielding dairy cow after calving, when energy lost in milk exceeds dietary energy intake, the cow is in negative energy _____.",
        "a": [
          "balance"
        ],
        "a_display": "Balance",
        "e": "Negative energy balance mobilises body fat. If the liver's capacity to oxidise the released fatty acids is exceeded, fatty liver and ketosis develop.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      },
      {
        "q": "Glucagon and adrenaline act through the second messenger _____ to activate protein kinase A.",
        "a": [
          "camp",
          "cyclic amp",
          "cyclic adenosine monophosphate",
          "3',5'-camp",
          "3,5-camp"
        ],
        "a_display": "cAMP",
        "e": "Hormone binding activates a Gs protein, which stimulates adenylyl cyclase to make cAMP from ATP. cAMP activates protein kinase A, which phosphorylates enzymes of glycogen and lipid metabolism.",
        "topicId": "u2-t22",
        "subSection": "u2-s6",
        "diff": 1
      }
    ]
  },
  "unit-3": {
    "mcq": [
      {
        "q": "Canine diabetes mellitus is most commonly characterized pathophysiologically by:",
        "o": [
          "Type 1 absolute insulin deficiency resulting from autoimmune or degenerative destruction of pancreatic beta-cells",
          "Type 2 non-insulin dependent diabetes due to peripheral receptor insensitivity",
          "Gestational diabetes responding only to progesterone therapy",
          "Secondary diabetes from somatostatin hypersecretion"
        ],
        "a": 0,
        "e": "Over 90% of diabetic dogs suffer from Type 1 diabetes mellitus characterized by permanent, progressive loss of pancreatic beta-cells and an absolute requirement for exogenous insulin therapy.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The classic clinical triad of symptoms observed in domestic dogs and cats with unmanaged diabetes mellitus is:",
        "o": [
          "Anuria, hypodipsia, and anorexia",
          "Polyuria, polydipsia, and polyphagia accompanied by weight loss",
          "Oliguria, ascites, and obesity",
          "Dyspnea, bradycardia, and jaundice"
        ],
        "a": 1,
        "e": "Glucosuria causes osmotic diuresis leading to polyuria (PU), compensatory polydipsia (PD), and cellular starvation triggering voracious appetite (polyphagia) despite progressive loss of body weight.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Diabetic cataracts develop rapidly in dogs with uncontrolled diabetes mellitus due to the conversion of lens glucose into:",
        "o": [
          "Galactose by galactokinase",
          "Glucuronic acid by UDP-glucose dehydrogenase",
          "Fructose-1,6-bisphosphate by PFK-1",
          "Sorbitol by aldose reductase, causing osmotic lens swelling and fiber rupture"
        ],
        "a": 3,
        "e": "Excess glucose enters the canine lens where aldose reductase reduces it to sorbitol; sorbitol cannot diffuse out, drawing water osmotically into the lens and causing lenticular opacity.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Serum fructosamine concentration is clinically valuable in veterinary medicine because it reflects glycemic control over the preceding:",
        "o": [
          "2 to 4 hours",
          "2 to 3 weeks",
          "2 to 3 months",
          "6 to 12 months"
        ],
        "a": 1,
        "e": "Fructosamine represents non-enzymatically glycated serum proteins (chiefly albumin); its half-life mirrors serum albumin, reflecting average glycemic control over the prior 2-3 weeks.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The renal threshold for glucose in healthy domestic dogs above which glucosuria occurs is approximately:",
        "o": [
          "50 to 70 mg/dL",
          "100 to 120 mg/dL",
          "350 to 400 mg/dL",
          "180 to 220 mg/dL"
        ],
        "a": 3,
        "e": "In dogs, the tubular transport maximum for glucose corresponds to a venous plasma glucose of ~180-220 mg/dL (10-12 mmol/L); in cats it is higher (~280-300 mg/dL).",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Bovine ketosis (acetonemia) in high-producing dairy cows occurs most frequently during which physiological stage?",
        "o": [
          "Dry period (last 60 days of gestation)",
          "Peak lactation (2 to 6 weeks postpartum)",
          "Mid-lactation (120 to 150 days in milk)",
          "At the time of artificial insemination"
        ],
        "a": 1,
        "e": "Peak milk production occurs 2-6 weeks after calving, exceeding dry matter intake capacity and precipitating severe negative energy balance (NEB), hypoglycemia, and hyperketonemia.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The primary biochemical defect initiating bovine ketosis is:",
        "o": [
          "Excessive dietary calcium intake",
          "Overproduction of glycogen in liver tissue",
          "Complete blockage of hormone-sensitive lipase in adipose tissue",
          "A deficit of oxaloacetate relative to acetyl-CoA, diverting acetyl units into ketogenesis"
        ],
        "a": 3,
        "e": "Depletion of oxaloacetate by intense gluconeogenesis starves the citrate synthase reaction, preventing entry of adipose-derived acetyl-CoA into the Krebs cycle and routing it to ketogenesis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Subclinical ketosis in dairy cattle is definitively diagnosed when serum beta-hydroxybutyrate (BHB) concentration exceeds:",
        "o": [
          "1.2 to 1.4 mmol/L",
          "0.6 to 0.8 mmol/L",
          "0.2 to 0.4 mmol/L",
          "5.0 to 6.5 mmol/L"
        ],
        "a": 0,
        "e": "The international veterinary threshold for subclinical ketosis is serum or blood BHB >= 1.2 to 1.4 mmol/L; values >= 3.0 mmol/L indicate severe clinical ketosis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The standard oral gluconeogenic precursor administered for treatment and prevention of bovine ketosis is:",
        "o": [
          "Propylene glycol (1,2-propanediol)",
          "Ethanol",
          "Acetoacetate",
          "Glycerol monostearate"
        ],
        "a": 0,
        "e": "Oral propylene glycol is absorbed from the rumen and converted in the liver to pyruvate and oxaloacetate, replenishing TCA intermediates and suppressing ketogenesis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Pregnancy toxaemia in ewes and does (twin lamb disease) develops in late gestation primarily because of:",
        "o": [
          "Autoimmune destruction of the placenta",
          "Excess dietary carbohydrate consumption in lush pasture",
          "Massive fetal glucose and amino acid demands in ewes carrying multiple fetuses combined with limited ruminal capacity",
          "Acute ruminal bloat"
        ],
        "a": 2,
        "e": "Twin and triplet fetuses demand huge amounts of maternal glucose (fetuses consume up to 40% of maternal glucose) during the final 4 weeks, causing severe hypoglycemia and ketosis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Neonatal baby pigs are exceptionally prone to severe fatal hypoglycemia during their first 24 to 48 hours of life because they:",
        "o": [
          "Are born with negligible body fat stores (<1-2%), limited liver glycogen, and immature gluconeogenic enzymes",
          "Lack insulin receptors in all peripheral tissues",
          "Excrete huge quantities of glucose in urine",
          "Lack the sodium-glucose transporter SGLT-1"
        ],
        "a": 0,
        "e": "Newborn piglets have virtually no adipose insulation or energy reserves; if separated from the sow, glycogen is exhausted within hours and gluconeogenesis is too immature to maintain blood glucose.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Canine insulinoma is a functional neuroendocrine neoplasm originating from which pancreatic cells?",
        "o": [
          "Alpha cells (secreting glucagon)",
          "Beta cells (secreting unregulated insulin)",
          "Delta cells (secreting somatostatin)",
          "F cells (secreting pancreatic polypeptide)"
        ],
        "a": 1,
        "e": "Insulinoma is an insulin-secreting tumor of pancreatic beta cells causing episodic, unsuppressed insulin release and severe neuroglycopenic hypoglycemia (<40 mg/dL).",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "In dogs with hyperinsulinism from insulinoma, clinical signs typically include:",
        "o": [
          "Extreme hyperglycemia and diabetic ketoacidosis",
          "Weakness, muscle tremors, ataxia, and generalized seizures relieved by intravenous glucose",
          "Marked jaundice and dark brown urine",
          "Severe polycythemia and hypertension"
        ],
        "a": 1,
        "e": "Neuroglycopenia (deprivation of glucose to the central nervous system) produces episodic tremors, mental dullness, collapse, and tonic-clonic seizures promptly reversed by glucose administration.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Marked fasting hypercholesterolemia in domestic dogs is most commonly a diagnostic hallmark of which endocrine disease?",
        "o": [
          "Hyperparathyroidism",
          "Hypothyroidism",
          "Addison's disease (Hypoadrenocorticism)",
          "Insulinoma"
        ],
        "a": 1,
        "e": "Thyroid hormones stimulate hepatic LDL-receptor expression and cholesterol 7-alpha-hydroxylase; canine hypothyroidism impairs LDL clearance, causing severe fasting hypercholesterolemia (>300-500 mg/dL).",
        "topicId": "u3-t06",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Equine hyperlipemia is a life-threatening metabolic disorder characterized by gross lactescent (milky) plasma and severe hepatic lipidosis, seen predominantly in:",
        "o": [
          "Thoroughbred racehorses in active training",
          "Ponies, miniature horses, and donkeys undergoing negative energy balance or stress",
          "Newborn foals on mare's colostrum",
          "Draft horses on high-grain diets"
        ],
        "a": 1,
        "e": "Ponies, donkeys, and miniature horses have poorly regulated adipose lipolysis; negative energy balance triggers massive mobilization of NEFA and VLDL, causing severe hypertriglyceridemia and fatty liver.",
        "topicId": "u3-t06",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which qualitative chemical reagent is universally used in veterinary urinalysis to detect reducing sugars like glucose in urine?",
        "o": [
          "Ehrlich's aldehyde reagent",
          "Hay's sulfur powder",
          "Benedict's qualitative reagent",
          "Fouchet's reagent"
        ],
        "a": 2,
        "e": "Benedict's qualitative reagent contains cupric sulfate in alkaline citrate; reducing sugars reduce Cu2+ to a yellow-to-brick-red precipitate of cuprous oxide (Cu2O).",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Feline diabetes mellitus exhibits significant clinical similarity to human Type 2 diabetes because it is heavily associated with:",
        "o": [
          "Immune-mediated destruction by anti-insulin antibodies in kittenhood",
          "Obesity, peripheral insulin resistance, and islet amyloid polypeptide (amylin) deposition",
          "Congenital absence of the pancreas",
          "High dietary vitamin A intake"
        ],
        "a": 1,
        "e": "Feline diabetes features insulin resistance driven by obesity and physical inactivity, accompanied by amyloid deposition (amylin) that causes progressive beta-cell vacuolation and death.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Transient stress hyperglycemia in cats presented to veterinary clinics can elevate blood glucose up to 250-300 mg/dL due to the release of:",
        "o": [
          "Insulin and somatostatin",
          "Epinephrine and cortisol triggering rapid glycogenolysis",
          "Parathyroid hormone",
          "Antidiuretic hormone"
        ],
        "a": 1,
        "e": "Catecholamine and glucocorticoid surges during handling stress stimulate massive hepatic glycogenolysis and gluconeogenesis in cats; measuring serum fructosamine rules out true diabetes.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Diabetic ketoacidosis (DKA) is a severe medical emergency characterized by the triad of:",
        "o": [
          "Hypoglycemia, metabolic alkalosis, and hypokalemia",
          "Normal blood glucose, respiratory acidosis, and hyperalbuminemia",
          "Severe hyperglycemia, high anion-gap metabolic acidosis, and ketonemia/ketonuria",
          "Hypocalcemia, hyperphosphatemia, and anuria"
        ],
        "a": 2,
        "e": "DKA arises from absolute insulin deficiency plus counter-regulatory hormone excess, causing hyperglycemia, glucosuria, unbridled ketogenesis, and profound high-anion-gap acidosis.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which volatile fatty acid in ruminants is directly ketogenic and lipogenic, being converted into beta-hydroxybutyrate by the ruminal epithelium?",
        "o": [
          "Propionate",
          "Butyrate",
          "Formate",
          "Succinate"
        ],
        "a": 1,
        "e": "Rumen-derived butyrate (a 4-carbon VFA) is converted by ruminal epithelial cells during absorption into beta-hydroxybutyrate, supplying basal ketone bodies to the portal circulation.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The glucose tolerance curve in an animal suffering from clinical diabetes mellitus demonstrates:",
        "o": [
          "A rapid fall in blood glucose to hypoglycemic levels within 30 minutes",
          "A higher fasting glucose, higher peak level, and delayed return to baseline (>2-3 hours)",
          "No change in blood glucose following intravenous dextrose",
          "A flat horizontal line identical to healthy controls"
        ],
        "a": 1,
        "e": "Impaired insulin secretion or peripheral action causes a diabetic glucose tolerance curve to start high, peak well above normal (>300 mg/dL), and fail to return to baseline within 120 minutes.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Glucated hemoglobin (HbA1c) measurement reflects average circulating blood glucose concentration over:",
        "o": [
          "1 to 2 days",
          "The circulating lifespan of the erythrocyte (60 to 120 days depending on species)",
          "2 to 3 weeks",
          "The entire calendar year"
        ],
        "a": 1,
        "e": "HbA1c forms non-enzymatically inside RBCs throughout their circulatory lifespan (~110-120 days in dogs, ~70 days in cats), reflecting long-term glycemic control.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In lactating cows with nervous ketosis, neurological signs such as abnormal gait, compulsive licking of walls, and aggression are caused by:",
        "o": [
          "Severe hypoglycemia coupled with toxic circulating concentrations of acetoacetate and isopropanol",
          "Direct viral encephalitis",
          "Hypercalcemic tetany",
          "Hypomagnesemic grass tetany"
        ],
        "a": 0,
        "e": "Nervous ketosis affects ~10% of ketotic cows, caused by severe neuroglycopenia combined with the toxic cerebral effects of acetoacetate, acetone, and microbial reduction to isopropanol.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Serum Alanine Aminotransferase (ALT) is a highly specific indicator of hepatocellular injury (leakage) in:",
        "o": [
          "Cattle and sheep",
          "Horses and donkeys",
          "Poultry and birds",
          "Dogs and cats"
        ],
        "a": 3,
        "e": "Hepatocytes of dogs and cats contain high cytosolic ALT activity; in horses, cattle, and sheep, hepatic ALT activity is negligible, making it clinically useless in large animal practice.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Which enzyme is the most reliable, liver-specific leakage enzyme used clinically to evaluate acute hepatocellular damage in horses and cattle?",
        "o": [
          "ALT",
          "Sorbitol Dehydrogenase (SDH) and Glutamate Dehydrogenase (GLDH)",
          "Amylase",
          "Creatine Kinase (CK)"
        ],
        "a": 1,
        "e": "SDH (cytosolic) and GLDH (mitochondrial) are liver-specific leakage enzymes with high activity in large animal hepatocytes, serving as the gold standard for equine and bovine liver necrosis.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Aspartate Aminotransferase (AST) is present in high concentrations in both liver and:",
        "o": [
          "Adipose tissue",
          "Salivary glands",
          "Skeletal and cardiac muscle",
          "Urinary bladder epithelium"
        ],
        "a": 2,
        "e": "AST is non-organ-specific, abundant in hepatocytes and skeletal/cardiac myocytes; serum AST elevations must be interpreted alongside Creatine Kinase (CK) to rule out muscle necrosis.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "A unique Corticosteroid-Induced Alkaline Phosphatase (C-ALP) isoenzyme that increases in response to glucocorticoids occurs ONLY in which domestic species?",
        "o": [
          "Dog (canine)",
          "Cat (feline)",
          "Horse (equine)",
          "Cow (bovine)"
        ],
        "a": 0,
        "e": "Dogs possess a unique gene for a corticosteroid-induced ALP isoenzyme (C-ALP) that is markedly induced by endogenous hyperadrenocorticism (Cushing's) or exogenous glucocorticoid therapy.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Marked elevations of serum Gamma-Glutamyl Transferase (GGT) are clinically diagnostic of:",
        "o": [
          "Cholestasis, biliary tract disease, or high colostrum intake in neonates",
          "Myocardial infarction and muscle rupture",
          "Acute renal medullary infarction",
          "Exocrine pancreatic insufficiency"
        ],
        "a": 0,
        "e": "GGT is anchored to the biliary canalicular membrane and is released in cholestatic liver diseases; it is also exceptionally high in maternal colostrum, verifying passive immunity transfer.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Creatine Kinase (CK) is the most sensitive and specific serum enzyme marker for evaluating damage to:",
        "o": [
          "Liver parenchyma",
          "Bone osteoclasts",
          "Renal tubular epithelium",
          "Skeletal and cardiac muscle"
        ],
        "a": 3,
        "e": "CK-MM (muscle isoenzyme) leaks into serum within hours of muscle injury, trauma, recumbency (downer cows), exertional rhabdomyolysis in horses, or capture myopathy.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In dogs with acute pancreatitis, the two classic diagnostic serum enzymes that show substantial activity increases are:",
        "o": [
          "ALT and AST",
          "LDH and CK",
          "ALP and GGT",
          "Amylase and Lipase"
        ],
        "a": 3,
        "e": "Acinar cell necrosis and duct obstruction release pancreatic alpha-amylase and lipase into the peritoneal cavity and systemic circulation, producing multi-fold serum elevations.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Pre-renal azotemia in dehydrated animals is biochemically differentiated from primary renal azotemia by:",
        "o": [
          "Low urine specific gravity and severe glucosuria",
          "Fixed isosthenuria (USG 1.008 to 1.012)",
          "Adequately concentrated urine (high USG >1.030 in dogs, >1.035 in cats) and a high BUN:Creatinine ratio that normalizes with fluid therapy",
          "High serum bilirubin"
        ],
        "a": 2,
        "e": "In pre-renal azotemia, intact nephrons respond to hypovolemia by maximally conserving water and urea, yielding concentrated urine (USG >1.030 in dogs, >1.035 in cats) and rapid resolution upon rehydration.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Primary renal azotemia (intrinsic acute or chronic kidney failure) becomes detectable in routine biochemistry only after what percentage of functional nephrons have been destroyed?",
        "o": [
          "25%",
          "50%",
          "At least 75%",
          "95%"
        ],
        "a": 2,
        "e": "Kidneys have tremendous functional reserve: loss of urine concentrating ability occurs at ~66% nephron loss, while azotemia (elevation of BUN and creatinine) appears only when >75% of nephrons fail.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Isosthenuria (urine specific gravity fixed between 1.008 and 1.012) signifies that the renal tubules:",
        "o": [
          "Are maximally concentrating glomerular filtrate",
          "Are completely obstructed by struvite calculi",
          "Can neither concentrate nor dilute glomerular filtrate relative to protein-free plasma",
          "Have hyperactive antidiuretic hormone receptors"
        ],
        "a": 2,
        "e": "Isosthenuria indicates that urine osmolality equals plasma osmolality (~300 mOsm/kg, USG 1.008-1.012); persistent isosthenuria with concurrent azotemia confirms intrinsic renal failure.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Post-renal azotemia in veterinary patients is typically caused by:",
        "o": [
          "Hypovolemic dehydration",
          "Glomerulonephritis",
          "Ethylene glycol toxicosis",
          "Urinary tract obstruction (e.g., urolithiasis in tomcats/steers) or ruptured urinary bladder (uroabdomen)"
        ],
        "a": 3,
        "e": "Post-renal azotemia arises from mechanical obstruction or rupture of the post-glomerular collecting system, often causing life-threatening hyperkalemia and uroabdomen.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In birds and terrestrial reptiles, the major serum biochemical analyte evaluated for assessing renal excretory capacity is:",
        "o": [
          "Blood Urea Nitrogen (BUN)",
          "Bilirubin",
          "Creatinine",
          "Uric acid"
        ],
        "a": 3,
        "e": "Uricotelic avian and reptilian kidneys actively secrete uric acid via renal tubules; elevated serum uric acid indicates severe renal compromise (>70% tubular failure) or visceral/articular gout.",
        "topicId": "u3-t10",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Serum creatinine is produced at a remarkably constant daily rate in healthy animals from the non-enzymatic breakdown of:",
        "o": [
          "Serum albumin in the liver",
          "Dietary vegetable purines",
          "Phosphocreatine and creatine in skeletal muscle mass",
          "Bilirubin in the spleen"
        ],
        "a": 2,
        "e": "Creatinine is formed non-enzymatically from muscle phosphocreatine proportional to muscle mass; it is freely filtered by glomeruli with minimal tubular handling, serving as a reliable GFR marker.",
        "topicId": "u3-t10",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In canine hepatic failure or portosystemic shunts (PSS), the definitive diagnostic liver function test demonstrating impaired hepatic clearance is the:",
        "o": [
          "Total serum calcium test",
          "Blood glucose estimation alone",
          "Bromsulfophthalein (BSP) or Pre- and Post-prandial Serum Bile Acids (SBA) test",
          "Serum amylase test"
        ],
        "a": 2,
        "e": "Bile acids undergo enterohepatic circulation; compromised portal perfusion (PSS) or reduced functional hepatocyte mass causes postprandial bile acids to rise dramatically in systemic blood.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Unconjugated (indirect) bilirubin is transported in blood circulation tightly bound to:",
        "o": [
          "Hemoglobin",
          "Serum Albumin",
          "Alpha-2 macroglobulin",
          "Transferrin"
        ],
        "a": 1,
        "e": "Unconjugated bilirubin is water-insoluble (lipophilic) and is transported in plasma bound to albumin; in hepatocytes, it is conjugated with glucuronic acid to form water-soluble direct bilirubin.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Hemolytic (pre-hepatic) jaundice in domestic animals is characterized biochemically by:",
        "o": [
          "Predominant elevation of conjugated direct bilirubin with clay-colored stools",
          "Predominant elevation of unconjugated (indirect) bilirubin with normal to high urobilinogen in urine",
          "Absence of bilirubin in serum",
          "High serum alkaline phosphatase only"
        ],
        "a": 1,
        "e": "Massive intravascular or extravascular hemolysis (e.g., babesiosis, autoimmune hemolytic anemia) floods the liver with biliverdin/bilirubin, elevating unconjugated bilirubin in blood.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Obstructive (post-hepatic / cholestatic) jaundice is characterized biochemically by:",
        "o": [
          "Elevated unconjugated bilirubin only",
          "Elevated conjugated (direct) bilirubin in serum, bilirubinuria, and absence of stercobilin in feces (acholic stools)",
          "Low serum GGT and ALP",
          "High BUN with normal creatinine"
        ],
        "a": 1,
        "e": "Biliary duct obstruction prevents excretion of conjugated bilirubin into intestine, causing reflux into hepatic sinusoidal blood, bilirubinuria, and pale chalky (acholic) feces.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Serum Albumin is synthesized exclusively by the:",
        "o": [
          "Hepatocytes of the liver",
          "Renal tubular cells",
          "Plasma cells in lymph nodes",
          "Bone marrow erythroblasts"
        ],
        "a": 0,
        "e": "Albumin is synthesized solely by hepatic parenchymal cells; chronic end-stage liver disease (cirrhosis) reduces synthesis, producing hypoalbuminemia and dependent edema/ascites.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Which major positive acute-phase protein increases up to 100- to 1000-fold in dogs during acute systemic inflammation?",
        "o": [
          "C-Reactive Protein (CRP)",
          "Serum Amyloid A (SAA)",
          "Haptoglobin",
          "Albumin"
        ],
        "a": 0,
        "e": "C-Reactive Protein (CRP) is the foremost major acute-phase protein in canines; in horses and cats, Serum Amyloid A (SAA) is the predominant major acute-phase reactant.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In cattle and sheep, the primary major positive acute-phase protein measured to detect subclinical mastitis and respiratory disease is:",
        "o": [
          "Alpha-fetoprotein",
          "C-Reactive Protein",
          "Fibrinogen alone",
          "Haptoglobin"
        ],
        "a": 3,
        "e": "Haptoglobin is normally undetectable in healthy ruminants but increases dramatically during inflammation, serving as the gold-standard bovine acute-phase marker.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "A marked decrease in the Albumin:Globulin (A:G) ratio (<0.45 to 0.60) in a young cat presenting with peritoneal effusion and fever is strongly suggestive of:",
        "o": [
          "Acute pancreatitis",
          "Diabetes mellitus",
          "Hyperthyroidism",
          "Feline Infectious Peritonitis (FIP)"
        ],
        "a": 3,
        "e": "FIP causes profound polyclonal B-cell stimulation and vasculitis, driving gamma-globulins to very high levels and dropping the A:G ratio below 0.5 (diagnostic cutoff).",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Symmetric Dimethylarginine (SDMA) has emerged as a sensitive veterinary renal biomarker because it detects kidney dysfunction when what fraction of nephron function is lost?",
        "o": [
          "25% to 40%",
          "10%",
          "75%",
          "90%"
        ],
        "a": 0,
        "e": "SDMA is an methylated arginine derivative excreted almost entirely by renal filtration; it detects renal compromise much earlier (~25-40% GFR decline) than serum creatinine (~75% loss).",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Hay's sulfur powder test performed on urine is a classic qualitative test designed to detect:",
        "o": [
          "Bile pigments (bilirubin)",
          "Urobilinogen",
          "Bile salts (due to lowering of surface tension)",
          "Hemoglobin"
        ],
        "a": 2,
        "e": "Bile salts lower the surface tension of urine; fine sulfur powder sprinkled onto the urine surface sinks immediately to the bottom if bile salts are present.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The primary clinical diagnostic indicator of Metabolic Acidosis in blood gas and electrolyte analysis is a decrease in plasma:",
        "o": [
          "Bicarbonate concentration ([HCO3-])",
          "Partial pressure of oxygen (pO2)",
          "Chloride concentration ([Cl-])",
          "Sodium concentration ([Na+])"
        ],
        "a": 0,
        "e": "Metabolic acidosis is defined by a primary deficit in plasma bicarbonate ([HCO3-]); the respiratory system compensates by hyperventilating to lower pCO2.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The serum Anion Gap (AG) is calculated clinically using the formula:",
        "o": [
          "([Na+] + [K+]) - ([Cl-] + [HCO3-])",
          "([Na+] + [Cl-]) - ([K+] + [HCO3-])",
          "([Cl-] + [HCO3-]) / ([Na+] + [K+])",
          "[Na+] - [K+]"
        ],
        "a": 0,
        "e": "Anion Gap represents unmeasured serum anions (albumin, phosphates, sulfates, organic acids): AG = ([Na+] + [K+]) - ([Cl-] + [HCO3-]).",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "A High Anion Gap Metabolic Acidosis in veterinary medicine is characteristically caused by:",
        "o": [
          "Diarrhea with bicarbonate loss",
          "Lactic acidosis, diabetic ketoacidosis, ethylene glycol poisoning, or uremic renal failure",
          "Vomiting of gastric hydrochloric acid",
          "Excess intravenous 0.9% NaCl administration"
        ],
        "a": 1,
        "e": "High AG acidosis occurs when unmeasured organic acid anions accumulate: lactate (hypovolemic shock/grain overload), beta-hydroxybutyrate/acetoacetate (ketosis), glycolate/oxalate (ethylene glycol), or uremic sulfates.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Severe acute diarrhea in calves (calf scours) causes which classic acid-base and electrolyte disturbance?",
        "o": [
          "Normal anion gap (hyperchloremic) metabolic acidosis with hypokalemia",
          "Metabolic alkalosis with hyperkalemia",
          "Respiratory alkalosis with hypernatremia",
          "High anion gap metabolic alkalosis"
        ],
        "a": 0,
        "e": "Secretory diarrhea causes massive fecal loss of alkaline intestinal fluid rich in HCO3- and K+, resulting in hyperchloremic metabolic acidosis and total body potassium depletion.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In dairy cows, Left or Right Displaced Abomasum (LDA/RDA) or abomasal volvulus causes which characteristic acid-base disturbance?",
        "o": [
          "Severe lactic acidosis",
          "Hypochloremic, hypokalemic metabolic alkalosis with paradoxical aciduria",
          "Hyperchloremic metabolic acidosis",
          "Pure respiratory acidosis"
        ],
        "a": 1,
        "e": "Abomasal atony/displacement sequesters HCl in the abomasum; loss of chloride and hydrogen ions produces metabolic alkalosis and hypochloremia, while renal K+/H+ exchange causes paradoxical aciduria.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Paradoxical aciduria in cattle with metabolic alkalosis occurs because the dehydrated kidney:",
        "o": [
          "Excretes huge quantities of bicarbonate",
          "Lacks carbonic anhydrase in renal tubules",
          "Produces excess sulfuric acid",
          "Conserves sodium by excreting hydrogen ions (H+) in the collecting tubules due to severe potassium and chloride depletion"
        ],
        "a": 3,
        "e": "Hypovolemia stimulates aldosterone to reabsorb Na+; because K+ and Cl- are severely depleted, the collecting duct principal and intercalated cells must excrete H+ along with reabsorbed Na+, acidifying urine.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 3
      },
      {
        "q": "Respiratory acidosis is defined primarily by an abnormal increase in arterial:",
        "o": [
          "pH above 7.55",
          "Bicarbonate concentration above 35 mEq/L",
          "Partial pressure of carbon dioxide (pCO2) due to hypoventilation",
          "Oxygen saturation"
        ],
        "a": 2,
        "e": "Respiratory acidosis occurs when alveolar hypoventilation impairs CO2 elimination, elevating arterial pCO2 (>45-50 mmHg) and driving the carbonic acid equilibrium toward H+ formation.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In dairy cattle and feedlot steers, acute ruminal lactic acidosis (grain overload) is initiated microbiologically by the rapid overgrowth of:",
        "o": [
          "Fibrobacter succinogenes",
          "Ruminococcus flavefaciens",
          "Megasphaera elsdenii",
          "Streptococcus bovis and Lactobacillus species"
        ],
        "a": 3,
        "e": "Sudden ingestion of rapidly fermentable starch fuels explosive growth of amylolytic Streptococcus bovis, producing copious L- and D-lactic acid and plunging rumen pH below 5.0.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "During acute ruminal acidosis, D-lactic acid accumulates systemically in bovine blood because:",
        "o": [
          "Cows absorb only D-lactate from the rumen",
          "D-lactate cannot cross into kidneys",
          "D-lactate is converted into volatile fatty acids",
          "Mammalian lactate dehydrogenase (L-LDH) cannot metabolize D-lactate, causing severe prolonged metabolic acidosis"
        ],
        "a": 3,
        "e": "Bacterial fermentation produces both D- and L-isomers of lactic acid; ruminant tissues possess L-LDH but very little D-LDH, leading to severe, refractory systemic D-lactic acidosis.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "When ruminal pH falls below 5.0 during severe grain engorgement, which physiological change occurs across the ruminal wall?",
        "o": [
          "Water is rapidly absorbed from the rumen into systemic circulation, causing hypervolemia",
          "Ruminal motility accelerates dramatically",
          "Massive osmotic shift draws large volumes of water from systemic blood into the hyperosmotic rumen, producing hypovolemic shock",
          "Ammonia absorption increases ten-fold"
        ],
        "a": 2,
        "e": "High lactate concentrations increase rumen osmolarity from ~280 to >400-500 mOsm/L, drawing extracellular fluid osmotically into the rumen, resulting in dehydration, hemoconcentration, and hypovolemic shock.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Superoxide dismutase (SOD) protects cells against oxidative damage by catalyzing the conversion of:",
        "o": [
          "Two superoxide radicals (O2.-) and 2 H+ into hydrogen peroxide (H2O2) and molecular oxygen (O2)",
          "Hydrogen peroxide to water and oxygen",
          "Lipid hydroperoxides into alcohols",
          "Hydroxyl radicals into water"
        ],
        "a": 0,
        "e": "SOD is the first line of antioxidant defense, dismutating 2 O2.- + 2 H+ -> H2O2 + O2; cytosolic SOD requires Copper and Zinc (Cu-Zn SOD), while mitochondrial SOD requires Manganese (Mn-SOD).",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The antioxidant enzyme Glutathione Peroxidase (GPx) requires which essential trace mineral as a catalytic selenocysteine residue at its active center?",
        "o": [
          "Copper",
          "Selenium",
          "Zinc",
          "Cobalt"
        ],
        "a": 1,
        "e": "GPx is a selenoprotein containing selenocysteine; it detoxifies H2O2 and lipid hydroperoxides to water and alcohols, oxidizing reduced glutathione (GSH) to GSSG.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Nutritional Myodegeneration (White Muscle Disease) in calves and lambs is an oxidative injury resulting from deficiency of:",
        "o": [
          "Calcium and Phosphorus",
          "Iron and Copper",
          "Selenium and Vitamin E",
          "Biotin and Thiamine"
        ],
        "a": 2,
        "e": "Vitamin E (lipid-soluble chain-breaking antioxidant) and Selenium (essential cofactor for GPx) act synergistically; dual deficiency causes unchecked free-radical peroxidation of muscle membranes.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Which reactive oxygen species (ROS) is the most cytotoxic and highly reactive, causing instantaneous peroxidation of membrane lipids and DNA strand breakage?",
        "o": [
          "Superoxide radical (O2.-)",
          "Hydroxyl radical (OH.)",
          "Hydrogen peroxide (H2O2)",
          "Singlet oxygen (1O2)"
        ],
        "a": 1,
        "e": "The hydroxyl radical (OH.), formed via the iron-catalyzed Fenton and Haber-Weiss reactions, reacts diffusion-controlled with virtually every biological molecule, lacking enzymatic detoxification.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The fluid deficit in a 400 kg dehydrated heifer estimated to be 8% dehydrated is calculated as:",
        "o": [
          "8 liters",
          "16 liters",
          "64 liters",
          "32 liters"
        ],
        "a": 3,
        "e": "Deficit (liters) = % dehydration x Body Weight (kg) = 0.08 x 400 kg = 32 liters (32,000 mL). Maintenance and ongoing losses must be added to this replacement volume.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Lactated Ringer's Solution (Hartmann's solution) is classified as an:",
        "o": [
          "Hypotonic crystalloid",
          "Acidifying replacement solution",
          "Hypertonic colloid",
          "Isotonic, balanced, alkalinizing replacement crystalloid"
        ],
        "a": 3,
        "e": "LRS contains Na+, K+, Ca2+, Cl-, and sodium lactate in concentrations close to plasma; the absorbed lactate is metabolized in the liver to bicarbonate, providing an alkalinizing effect.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Lactated Ringer's Solution should NOT be administered concurrently in the same intravenous infusion line with blood products containing citrate anticoagulant because:",
        "o": [
          "The lactate precipitates with plasma globulins",
          "LRS causes instantaneous red blood cell hemolysis",
          "The calcium ions in LRS can overwhelm the citrate anticoagulant, triggering blood clot formation",
          "The solution becomes highly acidic"
        ],
        "a": 2,
        "e": "LRS contains 3 mEq/L of ionized calcium, which can neutralize the sodium citrate in banked blood, initiating clotting cascades inside the intravenous infusion tubing.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Hypertonic saline (7.2% NaCl) is clinically administered as a rapid small-volume resuscitation fluid in hypovolemic shock because it:",
        "o": [
          "Slowly hydrates the intracellular space",
          "Acts as an alkalinizing buffer",
          "Draws water rapidly from the intracellular and interstitial compartments into the intravascular space via osmotic gradients, expanding blood volume",
          "Lowers systemic blood pressure"
        ],
        "a": 2,
        "e": "At ~2400 mOsm/L, 7.2% NaCl administered at 4-5 mL/kg pulls fluid instantaneously from swollen edematous cells into the circulation, restoring venous return and cardiac output within minutes.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which synthetic colloid fluid is composed of branched hydroxyethyl starch polymers and is used to sustain intravascular colloid oncotic pressure?",
        "o": [
          "Hetastarch (HES)",
          "Mannitol",
          "Normal Saline (0.9% NaCl)",
          "Ringer's Lactate"
        ],
        "a": 0,
        "e": "Hetastarch contains large polysaccharides that remain inside the vascular space, exerting colloid osmotic pressure to retain fluid in hypoproteinemic veterinary patients.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Intravenous 5% Dextrose in water (D5W) is physiologically classified once infused into the body as:",
        "o": [
          "An isotonic extracellular expander",
          "A hypertonic plasma expander",
          "Free water (hypotonic fluid) because glucose is rapidly metabolized by tissues, leaving pure water",
          "An alkalinizing buffer"
        ],
        "a": 2,
        "e": "Although D5W is iso-osmolar in the bottle (~252 mOsm/L), once infused, the dextrose is rapidly transported into cells and metabolized, leaving hypotonic free water that distributes through total body water.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In canine ethylene glycol (antifreeze) toxicity, the devastating renal damage and severe high anion gap acidosis are caused by toxic metabolites including:",
        "o": [
          "L-lactic acid and propionate",
          "Acetone and beta-hydroxybutyrate",
          "Glycolic acid and Oxalic acid (which precipitates as calcium oxalate monohydrate crystals in renal tubules)",
          "Hydrochloric acid and sulfuric acid"
        ],
        "a": 2,
        "e": "Alcohol dehydrogenase oxidizes ethylene glycol to glycoaldehyde, glycolic acid (severe acidosis), and oxalic acid, which complexes with Ca2+ to form insoluble oxalate crystals that destroy tubular epithelium.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Catalase, a heme-containing tetrameric enzyme found abundantly in peroxisomes, decomposes hydrogen peroxide into:",
        "o": [
          "Superoxide and hydroxyl radicals",
          "Peroxynitrite",
          "Ozone and hydrogen gas",
          "Water (H2O) and molecular oxygen (O2)"
        ],
        "a": 3,
        "e": "Catalase has one of the highest turnover numbers known: 2 H2O2 -> 2 H2O + O2, preventing toxic accumulation of hydrogen peroxide in cells.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Biotransformation (detoxification) of lipophilic xenobiotics in the liver generally converts them into:",
        "o": [
          "More lipophilic non-polar molecules that accumulate in body fat",
          "More polar, water-soluble metabolites easily excreted in bile and urine",
          "Volatile gases eliminated exclusively through the skin",
          "Structural membrane phospholipids"
        ],
        "a": 1,
        "e": "The overarching biological purpose of xenobiotic metabolism is to introduce or conjugate polar groups, making hydrophobic foreign compounds hydrophilic for renal or biliary excretion.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Phase I xenobiotic biotransformation reactions encompass:",
        "o": [
          "Oxidation, reduction, and hydrolysis",
          "Glucuronidation and sulfation",
          "Glutathione conjugation and acetylation",
          "Amino acid conjugation and methylation"
        ],
        "a": 0,
        "e": "Phase I (functionalization) reactions introduce or unmask reactive functional groups (-OH, -NH2, -SH, -COOH) via oxidation, reduction, or hydrolysis, preparing substrates for Phase II conjugation.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Cytochrome P450 monooxygenase enzymes are located primarily within which subcellular structure of hepatocytes?",
        "o": [
          "Mitochondrial matrix",
          "Lysosomes",
          "Nucleolus",
          "Smooth Endoplasmic Reticulum (microsomes)"
        ],
        "a": 3,
        "e": "Hepatic microsomal Cytochrome P450 enzymes are integral membrane hemeproteins embedded in the lipid bilayer of the smooth endoplasmic reticulum.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The Cytochrome P450 monooxygenase enzyme system derives its name from its characteristic absorption spectrum maximum at 450 nm when:",
        "o": [
          "Oxidized by hydrogen peroxide",
          "Exposed to ultraviolet radiation at 260 nm",
          "Reduced and bound to Carbon Monoxide (CO)",
          "Treated with concentrated sulfuric acid"
        ],
        "a": 2,
        "e": "When the heme iron of cytochrome P450 is reduced to Fe2+ and complexes with carbon monoxide (CO), it displays an intense, unique spectral absorbance peak at 450 nm.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The complete catalytic cycle of a Cytochrome P450 monooxygenase reaction requires:",
        "o": [
          "Cytochrome c and glucose",
          "Substrate, ATP, and Vitamin C",
          "FAD, NADH, and hydrogen peroxide",
          "Substrate, molecular oxygen (O2), NADPH, and NADPH-cytochrome P450 reductase"
        ],
        "a": 3,
        "e": "The overall monooxygenase equation: RH + O2 + NADPH + H+ -> R-OH + H2O + NADP+. Electrons are shuttled from NADPH to heme via the flavoprotein NADPH-CYP450 reductase.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Which Cytochrome P450 subfamily in domestic animals is the most abundant in the liver and metabolizes over 50% of therapeutic drugs?",
        "o": [
          "CYP1A",
          "CYP2D",
          "CYP3A (e.g., CYP3A4 / CYP3A12)",
          "CYP4A"
        ],
        "a": 2,
        "e": "The CYP3A subfamily possesses a large flexible substrate-binding pocket, metabolizing the widest variety of veterinary anesthetics, sedatives, antimicrobials, and anthelmintics.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Phenobarbital administration in dogs induces Cytochrome P450 enzyme synthesis, resulting clinically in:",
        "o": [
          "Complete cessation of drug clearance",
          "Massive hemolysis",
          "Immediate acute renal shutdown",
          "Accelerated metabolism (shorter half-life) of co-administered drugs and progressive drug tolerance"
        ],
        "a": 3,
        "e": "Phenobarbital is a potent inducer of hepatic CYP enzymes (especially CYP2B and CYP3A); increased enzyme mass accelerates its own metabolism and that of concurrently administered drugs.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Domestic cats (felines) have an extreme, life-threatening sensitivity to acetaminophen (paracetamol) poisoning primarily because cats possess a genetic deficiency of:",
        "o": [
          "Alcohol dehydrogenase",
          "Catalase",
          "Cytochrome P450 reductase",
          "Hepatic UDP-Glucuronosyltransferase (UGT, specifically UGT1A6)"
        ],
        "a": 3,
        "e": "Cats have multiple pseudogenized UGT genes, exhibiting negligible glucuronidation capacity; paracetamol is diverted into toxic CYP-mediated NAPQI, causing fatal methemoglobinemia and hepatic necrosis.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "In cats poisoned by acetaminophen (paracetamol), the reactive toxic metabolite NAPQI oxidizes hemoglobin ferrous iron (Fe2+) to ferric iron (Fe3+), producing:",
        "o": [
          "Methemoglobinemia, severe cyanosis (chocolate-brown blood), and Heinz body hemolytic anemia",
          "Carboxyhemoglobin and cherry-red blood",
          "Complete polycythemia",
          "Acute alkalemia"
        ],
        "a": 0,
        "e": "NAPQI depletes erythrocyte glutathione and oxidizes hemoglobin to methemoglobin (which cannot bind oxygen), turning blood dark chocolate-brown and precipitating oxidized globin as Heinz bodies.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The specific biochemical antidote administered to treat acetaminophen toxicity in veterinary medicine by replenishing intracellular glutathione is:",
        "o": [
          "Atropine sulfate",
          "Pralidoxime (2-PAM)",
          "N-Acetylcysteine (NAC)",
          "Vitamin K1"
        ],
        "a": 2,
        "e": "N-acetylcysteine provides cysteine, the rate-limiting precursor for glutathione synthesis; restored GSH conjugates and neutralizes toxic NAPQI to non-toxic mercapturic acid.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Domestic dogs (canines) are genetically deficient in which Phase II conjugation pathway, predisposing them to sulfonamide drug toxicity?",
        "o": [
          "N-Acetylation (N-acetyltransferase)",
          "Glucuronidation",
          "Glutathione conjugation",
          "Sulfation"
        ],
        "a": 0,
        "e": "Dogs lack functional N-acetyltransferase (NAT) genes; unable to acetylate aromatic amines, they metabolize sulfonamides via alternate oxidative pathways into toxic hydroxylamines (causing keratoconjunctivitis sicca and polyarthritis).",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The high-energy nucleotide donor molecule that supplies glucuronic acid for Phase II glucuronidation reactions is:",
        "o": [
          "UDP-Glucuronic acid (UDPGA)",
          "3'-Phosphoadenosine-5'-phosphosulfate (PAPS)",
          "S-Adenosylmethionine (SAM)",
          "Acetyl-CoA"
        ],
        "a": 0,
        "e": "UDP-glucuronic acid (UDPGA) is synthesized from UDP-glucose by UDP-glucose dehydrogenase; UDP-glucuronosyltransferases transfer glucuronate to xenobiotics.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The activated sulfate donor compound required by sulfotransferases in Phase II sulfoconjugation reactions is:",
        "o": [
          "Sodium sulfate",
          "S-Adenosylmethionine",
          "3'-Phosphoadenosine-5'-phosphosulfate (PAPS)",
          "Glutathione"
        ],
        "a": 2,
        "e": "PAPS (known as 'active sulfate') is formed from ATP and inorganic sulfate by PAPS synthetase, serving as the universal sulfate donor for xenobiotics and glycosaminoglycans.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Phase II glutathione conjugation of electrophilic drugs catalyzed by Glutathione S-Transferase (GST) yields excreted urinary end products known as:",
        "o": [
          "Mercapturic acids (N-acetylcysteine conjugates)",
          "Hippuric acids",
          "Uric acid crystals",
          "Bile salts"
        ],
        "a": 0,
        "e": "Glutathione conjugates undergo sequential enzymatic trimming (removal of glutamate and glycine) followed by N-acetylation of the remaining cysteine conjugate to form water-soluble mercapturic acids.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "In herbivores and carnivores, benzoic acid (a common food preservative) is detoxified by Phase II conjugation with which amino acid to form hippuric acid?",
        "o": [
          "L-Alanine",
          "L-Leucine",
          "L-Tryptophan",
          "Glycine"
        ],
        "a": 3,
        "e": "Benzoic acid is activated to benzoyl-CoA and conjugated with glycine by mitochondrial glycine N-acyltransferase, forming non-toxic hippuric acid excreted in urine.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "In avian species (birds), benzoic acid is uniquely conjugated with which amino acid instead of glycine to form ornithuric acid?",
        "o": [
          "L-Glutamate",
          "L-Ornithine",
          "L-Aspartate",
          "L-Cysteine"
        ],
        "a": 1,
        "e": "Avian species lack glycine conjugation for benzoates; they conjugate two molecules of benzoic acid with one molecule of L-ornithine to produce dibenzoylornithine (ornithuric acid).",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The universal methyl donor for Phase II methylation of catecholamines, histamine, and xenobiotics is:",
        "o": [
          "S-Adenosylmethionine (SAM)",
          "Methylene-THF",
          "Choline",
          "Betaine"
        ],
        "a": 0,
        "e": "Methyltransferases use SAM (S-adenosylmethionine) as the donor of reactive methyl groups, generating S-adenosylhomocysteine (SAH).",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Aflatoxin B1, a potent fungal hepatocarcinogen produced by Aspergillus flavus in moldy feedstuffs, is bioactivated by Cytochrome P450 enzymes into:",
        "o": [
          "Aflatoxin M1 exclusively",
          "Aflatoxin B1-8,9-epoxide, which covalently binds to DNA guanine residues",
          "Inactive benzoic acid",
          "Water-soluble glucuronide"
        ],
        "a": 1,
        "e": "Phase I CYP oxidation can bioactivate procarcinogens: CYP2A and CYP3A oxidize aflatoxin B1 into a highly mutagenic 8,9-epoxide that intercalates and forms covalent adducts with DNA.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Cimetidine and ketoconazole act in canine and feline clinical pharmacology as potent:",
        "o": [
          "Cytochrome P450 inducers",
          "Stimulators of glucuronidation",
          "Cytochrome P450 competitive inhibitors, slowing clearance and increasing toxicity of co-administered drugs",
          "Glutathione depleters"
        ],
        "a": 2,
        "e": "Cimetidine and imidazole antifungals (ketoconazole) bind tightly to CYP heme iron, reversibly inhibiting drug biotransformation and risking toxic accumulation of co-administered drugs.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Organophosphate insecticide toxicity in domestic livestock causes cholinergic crisis primarily by irreversibly inhibiting:",
        "o": [
          "Acetylcholinesterase (AChE)",
          "Cytochrome P450 monooxygenase",
          "Glutathione S-transferase",
          "UDP-glucuronosyltransferase"
        ],
        "a": 0,
        "e": "Organophosphates phosphorylate the active-site serine of acetylcholinesterase, preventing acetylcholine breakdown and causing continuous muscarinic and nicotinic hyperstimulation.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The specific pharmacological antidote that reactivates phosphorylated acetylcholinesterase in early organophosphate poisoning is:",
        "o": [
          "Pralidoxime (2-PAM)",
          "Atropine sulfate alone",
          "N-acetylcysteine",
          "Methylene blue"
        ],
        "a": 0,
        "e": "Pralidoxime (2-PAM) is an oxime that nucleophilically dephosphorylates the catalytic serine of acetylcholinesterase, regenerating active enzyme before 'aging' occurs.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Methylene blue is specifically indicated as an emergency veterinary antidote for the treatment of:",
        "o": [
          "Ethylene glycol poisoning",
          "Organophosphate toxicity",
          "Lead toxicity",
          "Nitrate / Nitrite toxicity causing severe methemoglobinemia in ruminants"
        ],
        "a": 3,
        "e": "Rumen microbes reduce fertilizer nitrates to nitrites, which oxidize hemoglobin Fe2+ to Fe3+ (methemoglobinemia); methylene blue acts as an artificial electron acceptor, accelerating methemoglobin reduction back to normal hemoglobin.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "In domestic dogs, diabetes mellitus is primarily an autoimmune Type 1 condition characterized by an absolute deficiency of circulating insulin.",
        "a": true,
        "e": "True. Over 90% of diabetic dogs suffer from Type 1 diabetes resulting from progressive destruction of pancreatic beta cells, requiring lifelong insulin therapy.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Canine diabetic cataracts are reversible by simply initiating insulin therapy once the lens becomes opaque.",
        "a": false,
        "e": "False. Diabetic cataracts result from osmotic swelling and permanent structural disruption of lens protein fibers by sorbitol; surgical phacoemulsification is required to restore vision.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Serum fructosamine measurement is unaffected by transient stress-induced hyperglycemia in domestic cats.",
        "a": true,
        "e": "True. Fructosamine reflects average blood glucose over the preceding 2-3 weeks; short-term acute stress hyperglycemia at the veterinary clinic does not alter serum fructosamine levels.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The renal threshold for glucose is higher in cats (approx 280-300 mg/dL) than in dogs (approx 180-220 mg/dL).",
        "a": true,
        "e": "True. Feline tubular glucose reabsorptive capacity is higher, requiring plasma glucose concentrations >=280 mg/dL before glucosuria spills into urine.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Bovine ketosis is characterized biochemically by concurrent hyperglycemia and high blood insulin concentrations.",
        "a": false,
        "e": "False. Bovine ketosis is characterized by profound HYPOGLYCEMIA and low blood insulin, driving uncontrolled lipolysis and massive ketogenesis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Beta-hydroxybutyrate (BHB) is the predominant circulating ketone body measured in blood and milk during bovine ketosis.",
        "a": true,
        "e": "True. Over 80% of circulating ketone bodies in ketotic ruminants consist of beta-hydroxybutyrate, making serum BHB the gold standard for diagnosis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Oral administration of propylene glycol is effective in treating bovine ketosis because it is absorbed and converted into oxaloacetate for gluconeogenesis.",
        "a": true,
        "e": "True. Propylene glycol bypasses rumen fermentation and is metabolized in the liver to pyruvate and oxaloacetate, replenishing TCA intermediates and suppressing ketogenesis.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Pregnancy toxemia in ewes typically occurs in early gestation when placental development begins.",
        "a": false,
        "e": "False. Pregnancy toxemia occurs during the LAST 2 to 4 WEEKS of gestation, driven by the massive fetal glucose demand of rapidly growing multiple fetuses (twins/triplets).",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Newborn piglets can survive up to 5 days without nursing colostrum without developing hypoglycemia.",
        "a": false,
        "e": "False. Neonatal baby pigs exhaust their limited liver glycogen within 12 to 24 hours if fasting, developing fatal hypothermic hypoglycemia within 24 to 36 hours.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Canine insulinoma produces severe episodic hypoglycemia, often falling below 40 mg/dL.",
        "a": true,
        "e": "True. Autonomous secretion of insulin by beta-cell tumors drives glucose into tissues regardless of circulating levels, precipitating severe neuroglycopenic hypoglycemia.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Canine hypothyroidism typically causes pronounced hypercholesterolemia due to reduced hepatic LDL-receptor clearance.",
        "a": true,
        "e": "True. Thyroid hormones upregulate LDL receptors and cholesterol 7-alpha-hydroxylase; their absence in hypothyroidism elevates serum total cholesterol in >75% of affected dogs.",
        "topicId": "u3-t06",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Alanine aminotransferase (ALT) is a sensitive and specific indicator of acute hepatocellular leakage in cattle and horses.",
        "a": false,
        "e": "False. Large animal hepatocytes contain negligible ALT activity. In cattle and horses, Sorbitol Dehydrogenase (SDH) and GLDH are used instead.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Sorbitol dehydrogenase (SDH) is a liver-specific leakage enzyme in horses and cattle, but is unstable in vitro at room temperature.",
        "a": true,
        "e": "True. SDH is highly specific for large animal liver necrosis, but its enzyme activity drops rapidly unless serum is separated immediately and analyzed or frozen.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Corticosteroid-induced alkaline phosphatase (C-ALP) is an isoenzyme unique to domestic canines (dogs).",
        "a": true,
        "e": "True. Dogs possess a specific gene encoding C-ALP that is induced by glucocorticoids (hyperadrenocorticism or steroid therapy); this isoenzyme does not occur in other domestic species.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Colostrum from dairy cows and female dogs contains extremely high activity of Gamma-Glutamyl Transferase (GGT).",
        "a": true,
        "e": "True. GGT activity in colostrum is hundreds of times higher than in adult serum; measuring high serum GGT in newborn calves or puppies confirms successful passive transfer of maternal antibodies.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Creatine kinase (CK) has a very long biological half-life, remaining elevated in serum for several weeks following a single episode of muscle trauma.",
        "a": false,
        "e": "False. CK has a very short serum half-life (only 2 to 4 hours in horses and dogs); persistent elevations indicate ongoing, active muscle damage rather than historical trauma.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Serum creatinine concentrations rise significantly before any change occurs in glomerular filtration rate (GFR).",
        "a": false,
        "e": "False. Serum creatinine rises inversely with GFR; however, due to renal functional reserve, creatinine does not exceed reference limits until GFR drops by ~75%.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In pre-renal azotemia caused by dehydration, domestic dogs produce adequately concentrated urine with a specific gravity greater than 1.030.",
        "a": true,
        "e": "True. Intact nephrons respond to hypovolemia by maximally absorbing water under ADH stimulation, concentrating urine above 1.030 in dogs (and >1.035 in cats).",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Persistent isosthenuria (USG 1.008 to 1.012) in an azotemic dog confirms intrinsic primary renal failure.",
        "a": true,
        "e": "True. The inability to concentrate urine despite high BUN/creatinine confirms that at least 66-75% of functional nephron capacity has been destroyed.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In avian medicine, blood urea nitrogen (BUN) is the preferred analyte for diagnosing renal failure.",
        "a": false,
        "e": "False. Birds are uricotelic and produce negligible urea; URIC ACID is the definitive renal biomarker in avian clinical pathology.",
        "topicId": "u3-t10",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Unconjugated bilirubin is water-soluble and is excreted directly by the kidneys into urine.",
        "a": false,
        "e": "False. Unconjugated bilirubin is lipophilic and bound to albumin; it cannot cross the glomerular filtration barrier. Only CONJUGATED (water-soluble) bilirubin passes into urine.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Serum Amyloid A (SAA) is the major positive acute-phase protein measured in horses to detect active systemic or joint inflammation.",
        "a": true,
        "e": "True. SAA levels in horses are virtually zero in health but surge up to 1000-fold within 24 hours of infection, making SAA the most sensitive inflammatory marker in equine practice.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Symmetric dimethylarginine (SDMA) detects renal disease earlier than serum creatinine because it increases when 25% to 40% of nephron function is lost.",
        "a": true,
        "e": "True. SDMA is excreted purely by glomerular filtration and is not influenced by muscle mass, detecting renal compromise long before creatinine rises at 75% loss.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Metabolic acidosis is characterized by a primary decrease in plasma bicarbonate ([HCO3-]).",
        "a": true,
        "e": "True. The primary deficit in metabolic acidosis is low [HCO3-]; the respiratory compensation involves blowing off CO2 via hyperventilation.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Diarrhea in neonatal calves causes a high anion gap metabolic acidosis with hyperkalemia.",
        "a": false,
        "e": "False. Simple calf diarrhea causes a NORMAL ANION GAP (hyperchloremic) metabolic acidosis due to direct loss of bicarbonate in intestinal feces.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Abomasal displacement in dairy cattle typically results in hypochloremic, hypokalemic metabolic alkalosis.",
        "a": true,
        "e": "True. Sequestration and backflow of HCl into the rumen removes H+ and Cl- from the circulation, producing metabolic alkalosis and hypochloremia.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Paradoxical aciduria in cows with metabolic alkalosis occurs when the kidney excretes H+ ions in exchange for Na+ to conserve circulating blood volume.",
        "a": true,
        "e": "True. Dehydration activates aldosterone; because K+ and Cl- are severely depleted, renal collecting tubules excrete H+ to reabsorb Na+, producing acidic urine despite systemic alkalosis.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In severe ruminal acidosis, explosive growth of Streptococcus bovis produces both D- and L-isomers of lactic acid.",
        "a": true,
        "e": "True. Amylolytic bacteria produce both isomers; because ruminant tissues have limited D-lactate dehydrogenase, D-lactic acid accumulates systemically.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Superoxide dismutase (SOD) converts toxic hydrogen peroxide into water and molecular oxygen.",
        "a": false,
        "e": "False. SOD converts SUPEROXIDE radicals into HYDROGEN PEROXIDE and oxygen (2 O2.- + 2 H+ -> H2O2 + O2). CATALASE and GPx convert H2O2 to water.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Selenium is an essential component of the antioxidant enzyme Glutathione Peroxidase.",
        "a": true,
        "e": "True. GPx contains selenocysteine in its catalytic triad; selenium deficiency impairs GPx, leaving cell membranes vulnerable to lipid peroxidation.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The fluid deficit for a 500 kg cow that is 10% dehydrated is 50 liters.",
        "a": true,
        "e": "True. Fluid deficit = Body weight (kg) x % dehydration = 500 kg x 0.10 = 50 liters.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Lactated Ringer's Solution (LRS) is an acidifying intravenous fluid recommended for treating metabolic alkalosis.",
        "a": false,
        "e": "False. LRS contains sodium lactate which is metabolized by the liver into BICARBONATE, making it an ALKALINIZING fluid suitable for metabolic acidosis.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Hypertonic saline (7.2% NaCl) pulls fluid osmotically from the interstitial and intracellular compartments into the vascular space, rapidly expanding effective blood volume.",
        "a": true,
        "e": "True. 7.2% hypertonic saline creates a massive transcapillary osmotic gradient, pulling ~3-4 mL of endogenous fluid into the vascular bed for every 1 mL infused.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In canine ethylene glycol toxicity, calcium oxalate crystals precipitate in renal tubules, leading to acute oliguric renal failure.",
        "a": true,
        "e": "True. Metabolized oxalic acid binds calcium to form insoluble calcium oxalate monohydrate crystals that physically destroy tubular epithelial cells.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Phase I biotransformation reactions always detoxify xenobiotics into completely inert, harmless products.",
        "a": false,
        "e": "False. Phase I reactions can bioactivate harmless procarcinogens or prodrugs into highly toxic, reactive intermediates (e.g., aflatoxin B1 into its mutagenic epoxide, paracetamol into NAPQI).",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Cytochrome P450 enzymes are located primarily on the inner mitochondrial membrane of erythrocytes.",
        "a": false,
        "e": "False. Drug-metabolizing CYP450 enzymes are located on the SMOOTH ENDOPLASMIC RETICULUM (microsomes) of HEPATOCYTES; mature erythrocytes lack ER and CYP450 entirely.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The CYP450 monooxygenase reaction requires molecular oxygen (O2) and NADPH as essential co-substrates.",
        "a": true,
        "e": "True. CYP450 incorporates one atom of molecular O2 into the substrate while reducing the other to water using electrons supplied by NADPH via CYP reductase.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Domestic cats are uniquely sensitive to paracetamol (acetaminophen) toxicity due to a genetic deficiency in UDP-glucuronosyltransferase (UGT).",
        "a": true,
        "e": "True. Cats have pseudogenized UGT1A6, preventing glucuronidation; paracetamol is metabolized by CYPs into toxic NAPQI, causing fatal methemoglobinemia.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "N-Acetylcysteine (NAC) acts as a specific antidote in feline and canine paracetamol poisoning by replenishing intracellular glutathione pools.",
        "a": true,
        "e": "True. NAC supplies cysteine for de novo glutathione synthesis, enabling the liver to conjugate and detoxify toxic NAPQI into non-toxic mercapturic acid.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Domestic dogs are genetically deficient in the Phase II N-acetylation pathway because they lack functional N-acetyltransferase enzymes.",
        "a": true,
        "e": "True. Dogs cannot acetylate aromatic amines (like sulfonamides), forcing metabolism into alternative oxidative pathways that form toxic hydroxylamines.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The active sulfate donor molecule used in Phase II sulfoconjugation reactions is 3'-phosphoadenosine-5'-phosphosulfate (PAPS).",
        "a": true,
        "e": "True. PAPS ('active sulfate') is synthesized from ATP and SO4(2-), donating sulfate groups to phenolic xenobiotics via sulfotransferases.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Glutathione conjugates are excreted directly into urine without any enzymatic trimming of amino acids.",
        "a": false,
        "e": "False. Glutathione conjugates are cleaved by gamma-glutamyltransferase and dipeptidases, then N-acetylated to form MERCAPTURIC ACIDS before urinary excretion.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Avian species (birds) detoxify benzoic acid by conjugating it with L-ornithine to form ornithuric acid.",
        "a": true,
        "e": "True. Birds lack glycine conjugation for benzoates; they conjugate benzoic acid with L-ornithine, excreting dibenzoylornithine (ornithuric acid).",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Phenobarbital acts as a potent inhibitor of hepatic Cytochrome P450 enzymes in dogs.",
        "a": false,
        "e": "False. Phenobarbital is a classic, powerful INDUCER of hepatic CYP enzymes (increasing enzyme synthesis), which accelerates drug clearance.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Methylene blue acts as an effective antidote for nitrite-induced methemoglobinemia in ruminants by promoting the enzymatic reduction of methemoglobin back to functional hemoglobin.",
        "a": true,
        "e": "True. At low doses, methylene blue is reduced by NADPH-methemoglobin reductase to leucomethylene blue, which non-enzymatically reduces Fe3+ methemoglobin back to Fe2+ hemoglobin.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "Over 90% of diabetic dogs suffer from Type _____ diabetes mellitus, characterized by permanent destruction of pancreatic beta cells.",
        "a": [
          "1",
          "i",
          "one"
        ],
        "a_display": "1 (Type 1)",
        "e": "Canine diabetes is overwhelmingly Type 1 (insulin-dependent) due to immune or degenerative loss of beta cells.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The three hallmark clinical signs of diabetes mellitus are polyuria, polydipsia, and _____.",
        "a": [
          "polyphagia"
        ],
        "a_display": "Polyphagia",
        "e": "PU/PD/polyphagia along with weight loss constitute the classic clinical tetrad of canine and feline diabetes mellitus.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "In uncontrolled canine diabetes, excess glucose in the lens is converted into _____ by aldose reductase, causing diabetic cataracts.",
        "a": [
          "sorbitol"
        ],
        "a_display": "Sorbitol",
        "e": "Sorbitol accumulation causes hyperosmotic lens swelling, rupture of lenticular fibers, and rapid bilateral cataract formation in dogs.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Serum _____ represents non-enzymatically glycated albumin and indicates average blood glucose control over the preceding 2 to 3 weeks.",
        "a": [
          "fructosamine"
        ],
        "a_display": "Fructosamine",
        "e": "Fructosamine is the premier veterinary assay for evaluating therapeutic glycemic control in diabetic dogs and cats.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The predominant circulating ketone body evaluated in blood or milk to diagnose bovine ketosis is beta-_____.",
        "a": [
          "hydroxybutyrate",
          "hydroxybutyric acid",
          "bhb"
        ],
        "a_display": "Hydroxybutyrate (Beta-hydroxybutyrate / BHB)",
        "e": "Beta-hydroxybutyrate comprises the overwhelming majority of circulating ketones in ruminants.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The oral glucogenic precursor administered to dairy cows to treat ketosis is _____ glycol.",
        "a": [
          "propylene",
          "propylene glycol"
        ],
        "a_display": "Propylene (Propylene glycol)",
        "e": "Propylene glycol is metabolized in the liver to pyruvate and oxaloacetate, promoting gluconeogenesis and clearing ketones.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Pregnancy toxaemia in ewes occurs during the last 2 to 4 weeks of gestation, especially in ewes carrying multiple _____.",
        "a": [
          "fetuses",
          "foetuses",
          "lambs",
          "twins"
        ],
        "a_display": "Fetuses (Twins / Triplets)",
        "e": "Multiple fetuses demand huge amounts of maternal glucose, precipitating acute negative energy balance and ketosis in late pregnancy.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Canine insulinoma is a functional neuroendocrine tumor of pancreatic _____ cells that hypersecretes insulin.",
        "a": [
          "beta",
          "beta-cells",
          "beta cells"
        ],
        "a_display": "Beta (Beta cells)",
        "e": "Insulinoma causes autonomous, unsuppressed insulin release from neoplastic beta cells, driving blood glucose below 40 mg/dL.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Canine hypothyroidism characteristically causes marked fasting hyper_____ in routine blood biochemistry.",
        "a": [
          "cholesterolemia",
          "cholesterol",
          "cholesterolaemia"
        ],
        "a_display": "Cholesterolemia (Hypercholesterolemia)",
        "e": "Deficiency of thyroid hormone downregulates hepatic LDL receptors, elevating serum cholesterol in >75% of hypothyroid dogs.",
        "topicId": "u3-t06",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Benedict's qualitative reagent detects reducing sugars in urine by forming a colored precipitate of _____ oxide.",
        "a": [
          "cuprous",
          "cuprous oxide",
          "cu2o"
        ],
        "a_display": "Cuprous (Cuprous oxide / Cu2O)",
        "e": "Reducing sugars reduce alkaline cupric ions (Cu2+) to a yellow-to-brick-red insoluble cuprous oxide (Cu2O) precipitate.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Feline diabetes mellitus is strongly linked to obesity, insulin resistance, and pancreatic islet amyloid deposition of the peptide _____.",
        "a": [
          "amylin",
          "islet amyloid polypeptide",
          "iapp"
        ],
        "a_display": "Amylin (IAPP)",
        "e": "Islet amyloid polypeptide (amylin) co-secreted with insulin aggregates into toxic fibrils that destroy feline beta cells in Type 2 diabetes.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In dogs and cats, the premier liver-specific enzyme for detecting acute hepatocellular injury is alanine _____.",
        "a": [
          "aminotransferase",
          "transaminase",
          "alt"
        ],
        "a_display": "Aminotransferase (ALT)",
        "e": "ALT is abundant in canine and feline hepatocyte cytoplasm, leaking rapidly into circulation following hepatocellular necrosis.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In cattle and horses, acute hepatocellular damage is evaluated using the liver-specific enzyme sorbitol _____.",
        "a": [
          "dehydrogenase",
          "sdh"
        ],
        "a_display": "Dehydrogenase (Sorbitol dehydrogenase / SDH)",
        "e": "SDH is the preferred liver-specific leakage enzyme in large animals because large animal liver contains negligible ALT.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Corticosteroid-induced alkaline phosphatase (C-ALP) is a distinct isoenzyme found exclusively in the domestic _____.",
        "a": [
          "dog",
          "canine",
          "dogs"
        ],
        "a_display": "Dog (Canine)",
        "e": "Only dogs possess the unique C-ALP gene, which is markedly induced in canine Cushing's syndrome or during steroid therapy.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The biliary enzyme whose activity is exceptionally high in maternal colostrum and is used to assess passive transfer of immunity in calves is gamma-glutamyl _____.",
        "a": [
          "transferase",
          "transpeptidase",
          "ggt"
        ],
        "a_display": "Transferase (GGT)",
        "e": "Serum GGT surges in colostrum-fed calves, providing a definitive biochemical check for adequate passive immunoglobulin transfer.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Creatine kinase (CK) is the most sensitive and specific serum enzyme marker for injury to skeletal and _____ muscle.",
        "a": [
          "cardiac",
          "heart"
        ],
        "a_display": "Cardiac (Cardiac muscle)",
        "e": "CK is concentrated in skeletal and cardiac myocytes, rising within hours of muscle injury, myositis, or recumbency.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Acute pancreatitis in dogs is diagnosed by marked increases in the serum activity of amylase and _____.",
        "a": [
          "lipase"
        ],
        "a_display": "Lipase",
        "e": "Pancreatic acinar cell breakdown releases amylase and lipase into the circulation, producing diagnostic multi-fold elevations.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Primary renal azotemia (elevated BUN and creatinine) appears only after at least _____ percent of functional nephrons are destroyed.",
        "a": [
          "75",
          "75%"
        ],
        "a_display": "75%",
        "e": "Renal functional reserve prevents azotemia until over 75% of the total nephron population has been irreversibly lost.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Urine with a fixed specific gravity between 1.008 and 1.012 that equals plasma osmolality is termed _____.",
        "a": [
          "isosthenuria",
          "isosthenuric"
        ],
        "a_display": "Isosthenuria",
        "e": "Isosthenuria signifies that the renal tubules can neither concentrate nor dilute the glomerular filtrate.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In birds and reptiles, the definitive nitrogenous analyte used to assess renal function and diagnose gout is _____ acid.",
        "a": [
          "uric",
          "uric acid"
        ],
        "a_display": "Uric (Uric acid)",
        "e": "Uricotelic avian and reptilian kidneys excrete uric acid; elevated levels reflect severe tubular dysfunction or articular/visceral gout.",
        "topicId": "u3-t10",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Serum bilirubin that has been conjugated with glucuronic acid in the liver and is water-soluble is clinically called _____ bilirubin.",
        "a": [
          "direct",
          "conjugated"
        ],
        "a_display": "Direct (Conjugated)",
        "e": "Direct (conjugated) bilirubin reacts rapidly in the van den Bergh diazo reaction without the addition of alcohol.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Serum albumin is synthesized exclusively by parenchymal cells of the _____.",
        "a": [
          "liver",
          "hepatocytes"
        ],
        "a_display": "Liver (Hepatocytes)",
        "e": "Hepatocytes are the sole source of albumin; hepatic cirrhosis results in progressive hypoalbuminemia and ascites.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The early renal biomarker that detects kidney disease at 25% to 40% loss of GFR is symmetric dimethyl_____ (SDMA).",
        "a": [
          "arginine",
          "sdma"
        ],
        "a_display": "Arginine (SDMA)",
        "e": "SDMA is an early, muscle-mass-independent biomarker that detects renal functional decline far earlier than creatinine.",
        "topicId": "u3-t09",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Metabolic acidosis is clinically defined by a primary deficit in plasma _____ concentration.",
        "a": [
          "bicarbonate",
          "hco3",
          "hco3-"
        ],
        "a_display": "Bicarbonate (HCO3-)",
        "e": "Metabolic acidosis represents a primary loss of bicarbonate or accumulation of non-volatile fixed acids that consume bicarbonate.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The difference between measured cations and measured anions is termed the anion _____.",
        "a": [
          "gap",
          "anion gap"
        ],
        "a_display": "Gap (Anion gap)",
        "e": "Anion Gap = ([Na+] + [K+]) - ([Cl-] + [HCO3-]), identifying unmeasured organic acid anions in metabolic acidosis.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Abomasal displacement in dairy cattle characteristically results in hypochloremic, hypokalemic metabolic _____.",
        "a": [
          "alkalosis"
        ],
        "a_display": "Alkalosis (Metabolic alkalosis)",
        "e": "Abomasal sequestration of hydrochloric acid removes H+ and Cl- from the circulation, generating hypochloremic metabolic alkalosis.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The paradoxical excretion of acidic urine by cattle suffering from metabolic alkalosis is termed paradoxical _____.",
        "a": [
          "aciduria"
        ],
        "a_display": "Aciduria (Paradoxical aciduria)",
        "e": "In hypovolemic, hypokalemic, hypochloremic alkalosis, renal tubules excrete H+ to conserve Na+, acidifying the urine.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "During grain overload in cattle, the rumen bacterium that explodes in number to produce massive lactic acid is Streptococcus _____.",
        "a": [
          "bovis",
          "streptococcus bovis"
        ],
        "a_display": "Bovis (Streptococcus bovis)",
        "e": "Streptococcus bovis rapidly ferments starches to lactic acid, dropping ruminal pH below 5.0.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The antioxidant enzyme that dismutates superoxide radicals into hydrogen peroxide and oxygen is superoxide _____.",
        "a": [
          "dismutase",
          "sod"
        ],
        "a_display": "Dismutase (SOD)",
        "e": "Superoxide dismutase converts highly reactive superoxide radicals (O2.-) into hydrogen peroxide and molecular oxygen.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The essential trace mineral required at the catalytic active site of Glutathione Peroxidase is _____.",
        "a": [
          "selenium",
          "se"
        ],
        "a_display": "Selenium",
        "e": "Glutathione peroxidase is a selenoprotein that reduces hydroperoxides to water and harmless alcohols.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "White Muscle Disease in calves and lambs is caused by nutritional deficiency of Vitamin E and the trace element _____.",
        "a": [
          "selenium",
          "se"
        ],
        "a_display": "Selenium",
        "e": "Combined selenium and vitamin E deficiency impairs antioxidant defenses, causing free-radical destruction of cardiac and skeletal muscle.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Lactated Ringer's Solution contains sodium _____ which is metabolized in the liver to generate bicarbonate.",
        "a": [
          "lactate"
        ],
        "a_display": "Lactate (Sodium lactate)",
        "e": "Hepatic conversion of lactate to bicarbonate gives LRS its beneficial alkalinizing property in metabolic acidosis.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Resuscitation of hypovolemic shock using small volumes (4-5 mL/kg) is accomplished using 7.2% _____ saline.",
        "a": [
          "hypertonic",
          "hypertonic saline"
        ],
        "a_display": "Hypertonic (Hypertonic saline)",
        "e": "7.2% NaCl pulls fluid osmotically from the interstitial and intracellular spaces into blood vessels, rapidly restoring cardiac output.",
        "topicId": "u3-t14",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In antifreeze toxicity, the toxic metabolite of ethylene glycol that forms insoluble crystals in renal tubules is _____ acid.",
        "a": [
          "oxalic",
          "oxalate",
          "oxalic acid"
        ],
        "a_display": "Oxalic (Oxalic acid / Oxalate)",
        "e": "Oxalic acid complexes with calcium to form calcium oxalate monohydrate crystals that destroy renal tubular cells.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Phase I biotransformation reactions consist of oxidation, reduction, and _____.",
        "a": [
          "hydrolysis"
        ],
        "a_display": "Hydrolysis",
        "e": "Phase I functionalization introduces or exposes polar groups via oxidation, reduction, or hydrolysis.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The Cytochrome P450 monooxygenase enzymes of the liver are located primarily in the smooth endoplasmic _____.",
        "a": [
          "reticulum",
          "ser"
        ],
        "a_display": "Reticulum (Smooth Endoplasmic Reticulum)",
        "e": "Microsomal Cytochrome P450 enzymes are integral membrane proteins of the smooth endoplasmic reticulum.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Cytochrome P450 is named for its characteristic absorbance peak at 450 nm when its reduced form binds to carbon _____.",
        "a": [
          "monoxide",
          "co"
        ],
        "a_display": "Monoxide (Carbon monoxide / CO)",
        "e": "The Fe2+-CO coordination complex of cytochrome P450 displays an intense optical absorption maximum at 450 nm.",
        "topicId": "u3-t16",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Domestic cats are highly susceptible to paracetamol poisoning because they are genetically deficient in the Phase II enzyme UDP-_____.",
        "a": [
          "glucuronosyltransferase",
          "glucuronyltransferase",
          "ugt"
        ],
        "a_display": "Glucuronosyltransferase (UGT)",
        "e": "Cats have pseudogenized UGT genes, severely impairing glucuronidation and diverting drugs to toxic oxidative pathways.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The specific antidote administered to treat feline and canine paracetamol poisoning by replenishing glutathione is N-acetyl_____.",
        "a": [
          "cysteine",
          "nac"
        ],
        "a_display": "Cysteine (N-acetylcysteine / NAC)",
        "e": "N-acetylcysteine provides cysteine to synthesize glutathione, which conjugates and neutralizes toxic NAPQI.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Domestic dogs are genetically deficient in Phase II N-_____ reactions, making them sensitive to sulfonamide drug toxicity.",
        "a": [
          "acetylation",
          "acetyltransferase"
        ],
        "a_display": "Acetylation (N-acetylation)",
        "e": "Dogs lack functional N-acetyltransferase (NAT) genes, preventing acetylation of aromatic amines like sulfonamides.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The active sulfate donor molecule used in Phase II sulfation reactions is _____.",
        "a": [
          "paps",
          "3'-phosphoadenosine-5'-phosphosulfate"
        ],
        "a_display": "PAPS (3'-Phosphoadenosine-5'-phosphosulfate)",
        "e": "PAPS is the high-energy sulfate carrier used by sulfotransferases to conjugate phenolic xenobiotics.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The end-product metabolites excreted in urine following glutathione conjugation of electrophilic drugs are _____ acids.",
        "a": [
          "mercapturic",
          "mercapturic acids"
        ],
        "a_display": "Mercapturic (Mercapturic acids)",
        "e": "Glutathione conjugates are processed to cysteine conjugates and N-acetylated to form water-soluble mercapturic acids.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Benzoic acid is detoxified in mammals by conjugation with the amino acid _____ to form hippuric acid.",
        "a": [
          "glycine"
        ],
        "a_display": "Glycine",
        "e": "Mitochondrial glycine N-acyltransferase conjugates benzoyl-CoA with glycine to produce hippuric acid.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Organophosphate insecticides cause toxicity by irreversibly inhibiting the enzyme acetylcholine_____.",
        "a": [
          "esterase",
          "ache"
        ],
        "a_display": "Esterase (Acetylcholinesterase)",
        "e": "Organophosphates phosphorylate the active serine of acetylcholinesterase, producing cholinergic hyperstimulation.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The specific chemical antidote used to reduce ferric methemoglobin back to ferrous hemoglobin in nitrate-poisoned cattle is _____ blue.",
        "a": [
          "methylene",
          "methylene blue"
        ],
        "a_display": "Methylene (Methylene blue)",
        "e": "Methylene blue is reduced to leucomethylene blue, which non-enzymatically reduces toxic methemoglobin back to hemoglobin.",
        "topicId": "u3-t15",
        "subSection": "u3-s4",
        "diff": 1
      }
    ]
  }
};
