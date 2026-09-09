# -*- coding: utf-8 -*-
"""
Unit 1: General Veterinary Biochemistry Quiz Questions
Curriculum: VCI MSVE Credit Hours 2+1=3 (Second Year B.V.Sc & A.H.)
Counts: 90 MCQ, 45 True/False, 45 Fill in the Blanks (Total 180 questions)
Strict 2 : 1 : 1 Ratio
Sub-sections:
  u1-s1: Membranes, Transport & Buffers (Topics: u1-t01 to u1-t05)
  u1-s2: Carbohydrate Chemistry (Topics: u1-t06 to u1-t09)
  u1-s3: Lipid Chemistry & Prostaglandins (Topics: u1-t10 to u1-t12)
  u1-s4: Amino Acids & Protein Chemistry (Topics: u1-t13 to u1-t15)
  u1-s5: Nucleic Acids & Nucleotides (Topics: u1-t16 to u1-t17)
"""

mcq = [
    # --- u1-s1: Membranes, Transport & Buffers (18 MCQs) ---
    {
        "q": "According to the Singer and Nicolson Fluid Mosaic Model, biological membranes are best described as:",
        "o": ["Rigid protein layers sandwiching a static lipid core", "Two-dimensional solutions of oriented lipids and globular proteins", "Continuous solid monolayers of carbohydrates and proteins", "Lipid monolayers interspersed with fixed structural glycoproteins"],
        "a": 1,
        "e": "Singer and Nicolson (1972) proposed the Fluid Mosaic Model where membranes are quasi-fluid, two-dimensional solutions of oriented phospholipids with embedded integral and peripheral proteins capable of lateral diffusion.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The primary driving force for the spontaneous formation of phospholipid bilayers in aqueous media is:",
        "o": ["Covalent bond formation between head groups", "Hydrophobic interactions and van der Waals forces between fatty acyl chains", "Electrostatic attraction between glycerol backbones", "Hydrogen bonding between hydrocarbon tails"],
        "a": 1,
        "e": "Hydrophobic interactions exclude water molecules from contacting non-polar hydrocarbon tails, increasing water entropy and stabilizing the bilayer alongside van der Waals forces.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "Which membrane transport process moves solutes against their electrochemical gradient directly utilizing ATP hydrolysis?",
        "o": ["Facilitated diffusion", "Simple passive diffusion", "Primary active transport", "Secondary active symport"],
        "a": 2,
        "e": "Primary active transport directly couples the hydrolysis of ATP to the uphill movement of ions against their electrochemical gradient (e.g., Na+/K+-ATPase).",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The Na+/K+-ATPase pump in animal cell membranes pumps:",
        "o": ["3 Na+ into the cell and 2 K+ out of the cell per ATP", "2 Na+ out of the cell and 3 K+ into the cell per ATP", "3 Na+ out of the cell and 2 K+ into the cell per ATP", "1 Na+ out of the cell and 1 K+ into the cell per ATP"],
        "a": 2,
        "e": "Na+/K+-ATPase is electrogenic, pumping 3 Na+ out of the cytoplasm and 2 K+ into the cell for every 1 molecule of ATP hydrolyzed.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "Glucose absorption across the apical border of ruminant and monogastric intestinal enterocytes occurs via:",
        "o": ["GLUT-2 facilitated uniporter", "SGLT-1 Na+-dependent secondary active symport", "Simple passive lipophilic partition", "Direct ATP-dependent ABC cassette pump"],
        "a": 1,
        "e": "SGLT-1 (Sodium-Glucose Cotransporter 1) transports 1 glucose molecule along with 2 Na+ ions down the Na+ electrochemical gradient maintained by the basolateral Na+/K+ pump.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "Donnan membrane equilibrium occurs across a semi-permeable membrane when:",
        "o": ["All ions can freely cross the membrane in equal numbers", "A non-diffusible charged macromolecule (like protein) is confined to one compartment", "No electrical potential gradient exists across the membrane", "Water movement is completely arrested by high hydrostatic pressure"],
        "a": 1,
        "e": "The presence of a non-diffusible, impermeable polyvalent ion (such as an intracellular polyanionic protein) forces an unequal distribution of diffusible cations and anions at equilibrium.",
        "topicId": "u1-t03", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "At Donnan equilibrium, the product of diffusible cations and anions on one side (Side 1) compared to the other side (Side 2) is:",
        "o": ["[C1+][A1-] = [C2+][A2-]", "[C1+] / [A1-] = [C2+] / [A2-]", "[C1+][C2+] = [A1-][A2-]", "[C1+] + [A1-] = [C2+] + [A2-]"],
        "a": 0,
        "e": "Gibbs-Donnan rule states that at thermodynamic equilibrium, the product of concentrations of diffusible monovalent cations and anions in one compartment equals that in the opposing compartment: [Na+1][Cl-1] = [Na+2][Cl-2].",
        "topicId": "u1-t03", "subSection": "u1-s1", "diff": 3
    },
    {
        "q": "Which physiological compartment exhibits significant Gibbs-Donnan effects due to high non-diffusible protein content?",
        "o": ["Glomerular filtrate in Bowman's capsule", "Blood plasma compared to interstitial fluid across capillary walls", "Cerebrospinal fluid compared to aqueous humor", "Gastric juice compared to bile"],
        "a": 1,
        "e": "Plasma proteins (chiefly albumin) cannot cross capillary endothelium, creating a Gibbs-Donnan distribution: plasma has slightly higher diffusible cation concentration and lower diffusible anion concentration than interstitial fluid.",
        "topicId": "u1-t03", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "The pH of a solution is defined mathematically as:",
        "o": ["ln [H+]", "-log10 [H+]", "10^[H+]", "-ln [OH-]"],
        "a": 1,
        "e": "Sørensen (1909) defined pH as the negative logarithm to the base 10 of hydrogen ion concentration in moles per liter: pH = -log10[H+].",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "A chemical buffer solution resists changes in pH because it consists of:",
        "o": ["A strong acid and its conjugate strong base", "A weak acid and its conjugate base (or weak base and conjugate acid)", "A neutral salt dissolved in distilled water", "Equimolar concentrations of strong HCl and NaOH"],
        "a": 1,
        "e": "Buffers contain a conjugate weak acid-base pair. When H+ or OH- ions are added, the weak base or weak acid neutralizes them with minimal shift in free [H+].",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The maximum buffering capacity of any weak acid-conjugate base buffer system is achieved when:",
        "o": ["pH is at least 2 units above the pKa", "pH equals the pKa of the weak acid", "Concentration of conjugate base is ten times the weak acid", "The solution is completely non-ionized"],
        "a": 1,
        "e": "When pH = pKa, the ratio of conjugate base to conjugate acid is exactly 1:1 ([A-] = [HA]), providing maximum resistance against both acid and alkali addition.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The Henderson-Hasselbalch equation for a weak acid (HA) is correctly stated as:",
        "o": ["pH = pKa + log([HA] / [A-])", "pH = pKa - log([A-] / [HA])", "pH = pKa + log([A-] / [HA])", "pH = pKa * log([A-] / [HA])"],
        "a": 2,
        "e": "The Henderson-Hasselbalch equation is pH = pKa + log10([Conjugate Base] / [Weak Acid]) or pH = pKa + log([A-]/[HA]).",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "Normal arterial blood pH in domestic cattle, sheep, and dogs is maintained tightly around:",
        "o": ["6.80 to 7.00", "7.10 to 7.20", "7.35 to 7.45", "7.70 to 7.85"],
        "a": 2,
        "e": "Normal mammalian arterial blood pH is tightly regulated within 7.35 to 7.45 (mean 7.40); values below 7.35 represent acidemia and above 7.45 represent alkalemia.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "In mammalian blood plasma at pH 7.40, the physiological ratio of [HCO3-] to dissolved [CO2] (dCO2) is approximately:",
        "o": ["1 : 1", "10 : 1", "20 : 1", "40 : 1"],
        "a": 2,
        "e": "Applying Henderson-Hasselbalch: 7.40 = 6.10 + log([HCO3-]/[dCO2]). Thus log ratio = 1.30, and the antilog of 1.30 is 20:1.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "The most effective physiological intracellular buffer system in erythrocytes is:",
        "o": ["Bicarbonate buffer", "Hemoglobin buffer system", "Ammonium buffer", "Acetate buffer"],
        "a": 1,
        "e": "Hemoglobin contains 38 histidine residues with imidazole side chains having pKa near 6.8, providing powerful intracellular buffering in RBCs.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "Water channels that facilitate rapid osmotic water movement across renal tubular and capillary membranes are known as:",
        "o": ["Cadherins", "Aquaporins", "Selectins", "Integrins"],
        "a": 1,
        "e": "Aquaporins (discovered by Peter Agre) are homotetrameric integral membrane proteins that selectively transport water molecules down osmotic gradients.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "Cholesterol modulates animal plasma membrane fluidity by:",
        "o": ["Always increasing fluidity at low temperatures and decreasing fluidity at high temperatures", "Completely preventing any protein from inserting into membranes", "Inducing permanent crystallization of all hydrocarbon chains", "Dissolving sphingolipids into single fatty acids"],
        "a": 0,
        "e": "Cholesterol acts as a membrane bidirectional fluidity buffer: its rigid steroid ring prevents fatty acyl crystallization at low temperatures while restricting excessive lipid motion at physiological temperatures.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "A weak acid has a pKa of 4.76. What is the pH when 50% of the acid is dissociated into its conjugate base?",
        "o": ["3.76", "4.76", "5.76", "7.00"],
        "a": 1,
        "e": "When 50% is dissociated, [A-] = [HA]. Therefore [A-]/[HA] = 1, log(1) = 0, and pH = pKa + 0 = 4.76.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 2
    },

    # --- u1-s2: Carbohydrate Chemistry (18 MCQs) ---
    {
        "q": "D-Glucose and D-Galactose are related to each other as:",
        "o": ["C-2 epimers", "C-4 epimers", "Enantiomers", "Anomers"],
        "a": 1,
        "e": "D-Glucose and D-Galactose differ in steric configuration only around Carbon-4, making them classic C-4 epimers.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "D-Glucose and D-Mannose are stereoisomers differing only at carbon position:",
        "o": ["C-1", "C-2", "C-3", "C-5"],
        "a": 1,
        "e": "D-Glucose and D-Mannose are C-2 epimers, differing only in the spatial orientation of the -OH group at Carbon-2.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The cyclic alpha and beta forms of D-glucopyranose are examples of:",
        "o": ["Epimers", "Anomers", "Enantiomers", "Constitutional isomers"],
        "a": 1,
        "e": "Anomers are isomeric forms of monosaccharides that differ only in their configuration about the hemiacetal or hemiketal carbonyl carbon (C-1 in aldoses).",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The prominent pentose sugar present in ATP, RNA, and NAD+ is:",
        "o": ["D-Arabinose", "D-Ribose", "D-Xylose", "D-Lyxose"],
        "a": 1,
        "e": "D-Ribose is a 5-carbon aldopentose forming the furanose backbone of ribonucleotides, ATP, coenzymes (NAD+, FAD, CoA), and RNA.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Which monosaccharide derivative is an essential component of bacterial cell wall peptidoglycan?",
        "o": ["N-Acetylgalactosamine", "N-Acetylglucosamine (NAG)", "Sorbitol", "Gluconolactone"],
        "a": 1,
        "e": "Bacterial peptidoglycan consists of alternating units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by beta-1,4 glycosidic bonds.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Sialic acid (N-acetylneuraminic acid, NANA) is derived chemically from condensation of:",
        "o": ["Glucose and acetate", "Mannosamine and pyruvate", "Galactose and glycerol", "Fructose and succinate"],
        "a": 1,
        "e": "Sialic acid (NANA) is a 9-carbon acidic amino sugar synthesized from N-acetylmannosamine-6-phosphate and phosphoenolpyruvate (PEP).",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 3
    },
    {
        "q": "Maltose is a reducing disaccharide composed of two glucose molecules joined by:",
        "o": ["alpha-1,4-glycosidic bond", "beta-1,4-glycosidic bond", "alpha-1,6-glycosidic bond", "alpha-1,beta-2-glycosidic bond"],
        "a": 0,
        "e": "Maltose is alpha-D-glucopyranosyl-(1->4)-D-glucopyranose, produced during starch hydrolysis by salivary and pancreatic alpha-amylase.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Lactose, the principal carbohydrate of bovine milk, is linked by which glycosidic bond?",
        "o": ["alpha-1,4-glycosidic bond", "beta-1,4-glycosidic bond", "alpha-1,6-glycosidic bond", "beta-1,2-glycosidic bond"],
        "a": 1,
        "e": "Lactose is beta-D-galactopyranosyl-(1->4)-D-glucopyranose, formed by beta-1,4 linkage between galactose and glucose.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Sucrose is a non-reducing disaccharide because:",
        "o": ["It contains no ketone or aldehyde groups in its structure", "Both anomeric carbons (C-1 of glucose and C-2 of fructose) participate in the glycosidic bond", "It cannot be hydrolyzed by dilute acids", "It lacks hydroxyl groups on C-3 and C-4"],
        "a": 1,
        "e": "In sucrose (alpha-D-glucopyranosyl-(1->2)-beta-D-fructofuranoside), the anomeric carbons of both glucose and fructose are tied up in the linkage, leaving no free hemiacetal/hemiketal group.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Cellobiose is obtained from partial hydrolysis of cellulose and consists of two glucose residues linked by:",
        "o": ["alpha-1,4 linkage", "beta-1,4 linkage", "alpha-1,6 linkage", "beta-1,6 linkage"],
        "a": 1,
        "e": "Cellobiose is beta-D-glucopyranosyl-(1->4)-D-glucopyranose, the repeating disaccharide unit of structural plant cellulose.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "In plant starch, amylopectin differs from amylose because amylopectin contains:",
        "o": ["Only beta-1,4 linkages", "Branch points with alpha-1,6-glycosidic bonds every 24 to 30 glucose units", "Only alpha-1,3-glycosidic bonds", "Fructose units interspersed with glucose"],
        "a": 1,
        "e": "Amylose is a linear polymer of alpha-1,4-linked D-glucose, whereas amylopectin is branched with alpha-1,6 linkages occurring every 24-30 residues.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Glycogen, the animal storage homopolysaccharide, is structurally most similar to amylopectin but:",
        "o": ["Has fewer branches with beta linkages", "Is more extensively branched with alpha-1,6 linkages every 8 to 12 residues", "Contains galactose residues in branches", "Is insoluble in water and unreactive"],
        "a": 1,
        "e": "Glycogen has higher branching density (branch points every 8-12 glucose units), providing abundant non-reducing ends for rapid phosphorolytic release of glucose-1-phosphate.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Inulin is a fructosan polysaccharide clinically utilized in veterinary diagnostics for measuring:",
        "o": ["Total blood volume", "Glomerular filtration rate (GFR)", "Hepatic glycogen reserve", "Pancreatic lipase efficiency"],
        "a": 1,
        "e": "Inulin is freely filtered at the renal glomerulus and is neither reabsorbed nor secreted by the nephron tubules, making inulin clearance the gold standard for GFR measurement.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Chitin, the major structural polymer in the exoskeleton of arthropods and fungal cell walls, consists of:",
        "o": ["beta-1,4-linked N-acetylglucosamine units", "alpha-1,4-linked galactosamine units", "beta-1,3-linked glucuronic acid units", "alpha-1,6-linked mannose units"],
        "a": 0,
        "e": "Chitin is a linear homopolysaccharide of N-acetyl-D-glucosamine (NAG) units joined by beta-1,4 glycosidic bonds, giving it high tensile strength.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Which glycosaminoglycan (mucopolysaccharide) contains no sulfate groups and acts as a biological lubricant in synovial fluid?",
        "o": ["Chondroitin sulfate", "Heparin", "Hyaluronic acid", "Keratan sulfate"],
        "a": 2,
        "e": "Hyaluronic acid is the only non-sulfated GAG, consisting of repeating units of D-glucuronic acid and N-acetylglucosamine, providing high viscosity to synovial fluid and vitreous humor.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Heparin is a powerful physiological anticoagulant produced by mast cells; its anticoagulant action is mediated by activating:",
        "o": ["Thrombin directly", "Antithrombin III (AT-III)", "Fibrinogen", "Factor VIII"],
        "a": 1,
        "e": "Heparin binds to and induces an allosteric conformational change in Antithrombin III, increasing its rate of inhibiting thrombin and Factor Xa by over 1,000-fold.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "The enzyme lysozyme found in tears, egg white, and milk exerts antibacterial action by hydrolyzing:",
        "o": ["Peptide cross-links between D-alanine residues", "beta-1,4 glycosidic bonds between NAM and NAG in bacterial peptidoglycan", "alpha-1,4 bonds of teichoic acids", "Phosphodiester bonds of bacterial mRNA"],
        "a": 1,
        "e": "Lysozyme specifically cleaves the beta-1,4 glycosidic linkage between N-acetylmuramic acid (NAM) and N-acetylglucosamine (NAG), lysing Gram-positive bacterial cell walls.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Mutarotation of D-glucose in aqueous solution is caused by:",
        "o": ["Hydrolysis of the pyranose ring into two trioses", "Spontaneous interconversion between alpha and beta anomers via the open-chain aldehyde form", "Epimerization into D-mannose at neutral pH", "Oxidation of C-6 into glucuronic acid"],
        "a": 1,
        "e": "Mutarotation is the change in specific optical rotation that accompanies the equilibration between alpha (+112.2 deg) and beta (+18.7 deg) anomers of D-glucose via the transient open-chain intermediate until reaching +52.7 deg.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 3
    },

    # --- u1-s3: Lipid Chemistry & Prostaglandins (18 MCQs) ---
    {
        "q": "Triacylglycerols (neutral fats) are chemically defined as:",
        "o": ["Glycerol esters of three fatty acid molecules", "Sphingosine linked to two fatty acids", "Glycerol phosphate linked to choline", "Steroid esters of long-chain fatty alcohols"],
        "a": 0,
        "e": "Triacylglycerols (TAG) are triesters of the trihydric alcohol glycerol with three fatty acids, serving as the chief energy storage form in animal adipose tissue.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Lecithin is a major compound phospholipid biochemically known as:",
        "o": ["Phosphatidylethanolamine", "Phosphatidylcholine", "Phosphatidylserine", "Phosphatidylinositol"],
        "a": 1,
        "e": "Lecithin is phosphatidylcholine, composed of glycerol, two fatty acids, phosphoric acid, and the nitrogenous base choline.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Cardiolipin (diphosphatidylglycerol) is an unusual phospholipid characteristically localized to:",
        "o": ["Outer leaflet of plasma membrane", "Inner mitochondrial membrane", "Rough endoplasmic reticulum lumen", "Lysosomal membrane"],
        "a": 1,
        "e": "Cardiolipin contains four fatty acyl chains and is virtually exclusive to the inner mitochondrial membrane, where it is required for optimum electron transport complex activity.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Which phospholipid acts as an essential precursor for intracellular secondary messengers IP3 and DAG upon phospholipase C activation?",
        "o": ["Phosphatidylserine", "Phosphatidylcholine", "Phosphatidylinositol 4,5-bisphosphate (PIP2)", "Sphingomyelin"],
        "a": 2,
        "e": "Receptor-stimulated Phospholipase C cleaves PIP2 into inositol 1,4,5-trisphosphate (IP3, mobilizes Ca2+) and diacylglycerol (DAG, activates Protein Kinase C).",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Sphingomyelin differs structurally from glycerophospholipids because its backbone is:",
        "o": ["Glycerol", "Sphingosine (an amino alcohol)", "Inositol", "Sterol nucleus"],
        "a": 1,
        "e": "Sphingomyelin contains sphingosine (18-carbon amino alcohol) linked to a fatty acid via an amide bond (forming ceramide), with a phosphocholine polar head group.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Which fatty acid is strictly dietary essential for domestic cats (felines) because they lack delta-6 desaturase activity?",
        "o": ["Oleic acid", "Linoleic acid", "Arachidonic acid", "Palmitic acid"],
        "a": 2,
        "e": "Cats lack sufficient hepatic delta-6 desaturase enzyme activity to convert linoleic acid to arachidonic acid, making dietary arachidonic acid strictly essential in feline nutrition.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "The Saponification Number of a fat or oil is defined as:",
        "o": ["Grams of iodine absorbed by 100 g of fat", "Milligrams of KOH required to saponify 1 g of fat", "Milligrams of KOH required to neutralize free fatty acids in 1 g of fat", "Milliliters of 0.1 N KOH required to neutralize steam-volatile soluble fatty acids from 5 g of fat"],
        "a": 1,
        "e": "Saponification number is the mg of KOH required to completely saponify 1 g of fat; it is inversely proportional to the average molecular weight (chain length) of fatty acids.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Butter fat has a uniquely high Reichert-Meissl (RM) number compared to vegetable oils because it is rich in:",
        "o": ["Polyunsaturated long-chain fatty acids", "Steam-volatile, water-soluble short-chain fatty acids (like butyric acid)", "Trans-fatty acids", "Phospholipids and glycolipids"],
        "a": 1,
        "e": "RM number measures steam-volatile, water-soluble fatty acids (chiefly butyric and caproic acids). Butterfat has an RM value of 26-32, whereas vegetable oils have RM < 1.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "The Iodine Number of a lipid indicates its degree of:",
        "o": ["Rancidity and free acid content", "Unsaturation (number of double bonds)", "Chain length of fatty acids", "Saponification velocity"],
        "a": 1,
        "e": "Iodine number is the grams of iodine absorbed by 100 g of fat, directly reflecting the number of carbon-carbon double bonds (degree of unsaturation).",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The Acid Number of an oil measures the extent of hydrolytic rancidity by quantifying:",
        "o": ["Total ester bonds present in 10 g of oil", "Free fatty acids liberated by lipase or moisture action", "Peroxides formed by auto-oxidation", "Soluble short-chain fatty acids"],
        "a": 1,
        "e": "Acid number is the mg of KOH required to neutralize free fatty acids in 1 g of fat; an elevated acid number indicates deterioration and hydrolytic rancidity.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Which plasma lipoprotein class has the lowest density, largest diameter, and carries exogenous dietary triacylglycerols from the intestine?",
        "o": ["Chylomicrons", "Very Low Density Lipoproteins (VLDL)", "Low Density Lipoproteins (LDL)", "High Density Lipoproteins (HDL)"],
        "a": 0,
        "e": "Chylomicrons have density < 0.95 g/mL, consist of ~85-90% triacylglycerols, and transport dietary lipids from the intestinal lymphatics into blood circulation.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Which lipoprotein is responsible for 'reverse cholesterol transport' by picking up cholesterol from peripheral tissues and delivering it to the liver?",
        "o": ["Chylomicrons", "VLDL", "LDL", "HDL"],
        "a": 3,
        "e": "HDL (High-Density Lipoprotein) contains Apo A-I and LCAT, mediating reverse cholesterol transport from peripheral tissues back to the liver for excretion in bile.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The primary physiological precursor for the enzymatic biosynthesis of all series-2 prostaglandins in animals is:",
        "o": ["Oleic acid", "Arachidonic acid (20:4, delta-5,8,11,14)", "Palmitic acid", "Alpha-linolenic acid"],
        "a": 1,
        "e": "Arachidonic acid (eicosatetraenoic acid, 20:4 omega-6) is liberated from membrane phospholipids by Phospholipase A2 and converted by Cyclooxygenase (COX) into PG series 2.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "In veterinary reproductive practice, Prostaglandin F2alpha (PGF2alpha) is widely administered for:",
        "o": ["Stimulating continuous lactation in heifers", "Inducing luteolysis (corpus luteum regression) and synchronizing estrus", "Suppressing uterine contractions during dystocia", "Promoting maternal recognition of pregnancy"],
        "a": 1,
        "e": "PGF2alpha is a powerful luteolytic agent in domestic animals (cows, mares, sows) that lyses the mature corpus luteum, triggering a sharp decline in progesterone and inducing estrus.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Non-steroidal anti-inflammatory drugs (NSAIDs) such as flunixin meglumine and meloxicam reduce inflammation by inhibiting:",
        "o": ["Phospholipase A2 directly", "Cyclooxygenase (COX-1 and COX-2) enzymes", "Lipoxygenase (LOX)", "Thromboxane synthase exclusively"],
        "a": 1,
        "e": "NSAIDs selectively or non-selectively inhibit cyclooxygenase enzymes, preventing the conversion of arachidonic acid to pro-inflammatory prostaglandins and thromboxanes.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Thromboxane A2 (TXA2) produced by platelets causes:",
        "o": ["Vasodilation and inhibition of platelet aggregation", "Vasoconstriction and promotion of platelet aggregation", "Bronchodilation and systemic hypotension", "Lysis of fibrin clots"],
        "a": 1,
        "e": "TXA2 is synthesized in platelets by thromboxane synthase and acts as a potent vasoconstrictor and inducer of platelet aggregation during primary hemostasis.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Cholesterol contains a sterol cyclopentanoperhydrophenanthrene (CPPP) ring system with a hydroxyl (-OH) group located at position:",
        "o": ["C-3", "C-7", "C-17", "C-12"],
        "a": 0,
        "e": "Cholesterol is a 27-carbon sterol with a single hydroxyl group at C-3, a double bond between C-5 and C-6, and an 8-carbon branched hydrocarbon tail at C-17.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Dipalmitoylphosphatidylcholine (DPPC) acts as an indispensable pulmonary surfactant; its absence causes:",
        "o": ["Neonatal Respiratory Distress Syndrome (Atelectasis)", "Bovine Ketosis", "Steatitis (Yellow fat disease)", "Fatty Liver Syndrome"],
        "a": 0,
        "e": "DPPC lowers alveolar surface tension, preventing collapse (atelectasis) of lung alveoli upon expiration; deficiency in premature neonates causes Respiratory Distress Syndrome.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },

    # --- u1-s4: Amino Acids & Protein Chemistry (18 MCQs) ---
    {
        "q": "Which of the following amino acids is optically inactive because its alpha-carbon has two identical hydrogen atoms?",
        "o": ["Alanine", "Glycine", "Valine", "Proline"],
        "a": 1,
        "e": "Glycine has two hydrogen atoms attached to its alpha-carbon (R = -H), lacking a chiral/asymmetric carbon, making it the only optically inactive standard amino acid.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Which amino acid contains an indole ring in its side chain?",
        "o": ["Phenylalanine", "Tyrosine", "Tryptophan", "Histidine"],
        "a": 2,
        "e": "Tryptophan contains an aromatic indole ring; tyrosine contains a phenol ring, phenylalanine a benzene ring, and histidine an imidazole ring.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Which sulfur-containing amino acid forms covalent disulfide bonds (-S-S-) that stabilize protein tertiary and quaternary structures?",
        "o": ["Methionine", "Cysteine", "Homocysteine", "Taurine"],
        "a": 1,
        "e": "Two cysteine residues undergo oxidation of their sulfhydryl (-SH) groups to form a covalent disulfide bridge, generating the dimeric amino acid cystine.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The isoelectric point (pI) of an amino acid or protein is defined as the pH at which:",
        "o": ["It carries a net positive charge and moves to the cathode", "It carries a net negative charge and moves to the anode", "Its net electric charge is exactly zero", "Its buffering capacity is at its absolute maximum"],
        "a": 2,
        "e": "At the isoelectric point (pI), the zwitterion form predominates, net electrical charge is zero, and the molecule will not migrate in an applied direct electric field.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The peptide bond linking amino acid residues in polypeptide chains is chemically a/an:",
        "o": ["Ester bond", "Substituted amide linkage", "Ether bond", "Anhydride bond"],
        "a": 1,
        "e": "A peptide bond (-CO-NH-) is a substituted amide linkage formed by condensation between the alpha-carboxyl group of one amino acid and the alpha-amino group of the next.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Due to resonance between the carbonyl oxygen and nitrogen, the peptide bond exhibits:",
        "o": ["Complete free rotation like a single C-C bond", "Partial (~40%) double-bond character, planarity, and rigid trans configuration", "Triple-bond rigidity with cis geometry", "Ionic character with instantaneous dissociation in water"],
        "a": 1,
        "e": "Pauling and Corey demonstrated that the C-N peptide bond has ~40% double bond character, is rigid and planar, and almost always adopts the lower-energy trans conformation.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "In the classical alpha-helix of protein secondary structure, intra-chain hydrogen bonds form between:",
        "o": ["The carbonyl oxygen of residue n and the amide hydrogen of residue n+4", "The carbonyl oxygen of residue n and the amide hydrogen of residue n+2", "Side chains of neighboring hydrophobic residues", "Terminal amino and carboxyl groups only"],
        "a": 0,
        "e": "In an alpha-helix, every carbonyl oxygen of residue n forms a hydrogen bond with the amide hydrogen of residue n+4, with 3.6 residues per turn and pitch of 0.54 nm.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Which amino acid is known as an 'alpha-helix breaker' because its rigid pyrrolidine cyclic structure cannot fit into the helical conformation?",
        "o": ["Alanine", "Leucine", "Proline", "Glutamate"],
        "a": 2,
        "e": "Proline has a rigid five-membered pyrrolidine ring that lacks an amide hydrogen for hydrogen bonding, introducing a kink/bend that disrupts alpha-helices.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Which non-standard amino acid is essential in domestic cats to prevent dilated cardiomyopathy and central retinal degeneration?",
        "o": ["Ornithine", "Citrulline", "Taurine (2-aminoethanesulfonic acid)", "Homoserine"],
        "a": 2,
        "e": "Cats have very low cysteine sulfinic acid decarboxylase activity and conjugate bile acids exclusively with taurine; deficiency causes retinal degeneration and cardiomyopathy.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Proteins that contain non-protein prosthetic groups firmly attached to the polypeptide chain are called:",
        "o": ["Simple proteins", "Conjugated proteins", "Derived proteins", "Fibrous proteins"],
        "a": 1,
        "e": "Conjugated proteins consist of an apoprotein linked to a non-amino acid prosthetic group (e.g., hemoglobin contains heme, mucoproteins contain carbohydrate).",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The primary structure of a protein refers specifically to its:",
        "o": ["Three-dimensional globular folding pattern", "Association of multiple polypeptide subunits", "Linear sequence of amino acids joined by covalent peptide bonds", "Local periodic alpha-helical arrangements"],
        "a": 2,
        "e": "Primary structure is the unique linear sequence of amino acids in a polypeptide chain encoded genetically by mRNA and maintained by covalent peptide bonds.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Which chemical agent denatures proteins specifically by disrupting non-covalent hydrophobic and hydrogen bonds without breaking peptide bonds?",
        "o": ["Cyanogen bromide", "Trypsin", "8 M Urea or Guanidine HCl", "Pepsin"],
        "a": 2,
        "e": "Urea and guanidinium chloride are chaotropic agents that disrupt hydrogen bonds and the hydrophobic core, unfolding native protein conformations without cleaving peptide backbones.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "The Ninhydrin reaction produces a deep purple color (Ruhemann's purple) with all standard alpha-amino acids EXCEPT proline, which yields a:",
        "o": ["Brick red precipitate", "Yellow color", "Blue color", "Green fluorescence"],
        "a": 1,
        "e": "Proline and hydroxyproline are secondary imino acids; reaction with ninhydrin produces a distinctive yellow-colored adduct absorbing at 440 nm instead of purple.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Hemoglobin is an oligomeric protein exhibiting quaternary structure consisting of:",
        "o": ["Two identical subunits", "Four polypeptide chains (two alpha and two beta) each with a heme group", "A single polypeptide chain with four heme rings", "Three alpha chains wound as a triple helix"],
        "a": 1,
        "e": "Adult hemoglobin (HbA) is a tetramer of two alpha and two beta globin subunits (alpha2beta2), with each subunit binding one oxygen-carrying iron-protoporphyrin IX (heme).",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Which basic amino acid contains a guanidino group in its side chain and has a pKa around 12.5?",
        "o": ["Lysine", "Histidine", "Arginine", "Asparagine"],
        "a": 2,
        "e": "Arginine has a positively charged guanidino group on its side chain that remains protonated at all physiological pH values (pKa ~ 12.5).",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Collagen, the most abundant structural protein in the animal body, is characterized by a high content of:",
        "o": ["Tryptophan and cysteine", "Glycine, proline, and 4-hydroxyproline", "Histidine and methionine", "Glutamate and aspartate"],
        "a": 1,
        "e": "Collagen has a repeating Gly-X-Y triplet (where X is often proline and Y is hydroxyproline), allowing tight winding of three polypeptide chains into a tropocollagen triple helix.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "The precipitation of proteins at high salt concentrations (such as saturated ammonium sulfate) is termed:",
        "o": ["Salting-in", "Salting-out", "Electrophoresis", "Dialysis"],
        "a": 1,
        "e": "Salting-out occurs when high concentrations of neutral salts strip the hydration shell from protein surfaces, allowing hydrophobic patches to aggregate and precipitate.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Which reaction is specific for peptide bonds and requires at least two peptide bonds (a tripeptide or larger) to form a violet complex with copper ions?",
        "o": ["Xanthoproteic reaction", "Millon's reaction", "Biuret reaction", "Sakaguchi reaction"],
        "a": 2,
        "e": "The Biuret test detects compounds with two or more peptide bonds; Cu2+ ions in alkaline solution coordinate with peptide nitrogens to form a characteristic violet-purple coordination complex.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },

    # --- u1-s5: Nucleic Acids & Nucleotides (18 MCQs) ---
    {
        "q": "The purine nitrogenous bases found in both DNA and RNA are:",
        "o": ["Cytosine and Thymine", "Adenine and Guanine", "Uracil and Cytosine", "Adenine and Uracil"],
        "a": 1,
        "e": "Adenine (6-aminopurine) and Guanine (2-amino-6-oxypurine) are the two heterocyclic purine bases present universally in both DNA and RNA.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Thymine differs chemically from Uracil by possessing:",
        "o": ["An additional amino group at C-4", "A methyl group at carbon-5 (5-methyluracil)", "An extra hydroxyl group at C-2", "A purine ring backbone"],
        "a": 1,
        "e": "Thymine is 5-methyluracil, containing a methyl (-CH3) group attached to position 5 of the pyrimidine ring, distinguishing DNA from RNA.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "A nucleoside consists of a nitrogenous base attached to a pentose sugar via which covalent bond?",
        "o": ["Phosphodiester linkage", "beta-N-glycosidic bond", "alpha-peptide bond", "Thioester bond"],
        "a": 1,
        "e": "In nucleosides, the base is linked via a beta-N-glycosidic bond from N-9 of purines or N-1 of pyrimidines to C-1' of the pentose sugar.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "A nucleotide is chemically distinct from a nucleoside because it contains:",
        "o": ["A second nitrogenous base", "One or more esterified phosphate groups attached to the pentose sugar", "An additional ribose unit", "An amino acid side chain"],
        "a": 1,
        "e": "A nucleotide is a phosphorylated nucleoside (nucleoside mono-, di-, or triphosphate), with phosphate esterified typically at the 5'-hydroxyl of the pentose.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Which cyclic nucleotide acts as an intracellular second messenger mediating the physiological actions of glucagon and epinephrine?",
        "o": ["cGMP", "cAMP (cyclic 3',5'-adenosine monophosphate)", "cUMP", "cIMP"],
        "a": 1,
        "e": "cAMP is synthesized from ATP by adenylyl cyclase upon beta-adrenergic or glucagon stimulation and activates Protein Kinase A (PKA).",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "In the Watson-Crick B-DNA double helix, adjacent nucleotides in a single polynucleotide strand are linked by:",
        "o": ["Hydrogen bonds between C-1' and C-4'", "3',5'-phosphodiester bonds", "Disulfide bridges", "Glycosidic linkages between phosphates"],
        "a": 1,
        "e": "The backbone of DNA consists of alternating deoxyribose and phosphate units joined by 3',5'-phosphodiester linkages.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "According to Chargaff's rules of base composition for double-stranded DNA:",
        "o": ["A = C and G = T", "A = T and G = C; therefore A + G = T + C", "A + T = G + C always", "Purines / Pyrimidines = 0.5"],
        "a": 1,
        "e": "Erwin Chargaff demonstrated that in dsDNA, adenine equals thymine (A=T) and guanine equals cytosine (G=C), meaning total purines equal total pyrimidines (A+G = T+C).",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "In B-DNA, Guanine pairs with Cytosine via:",
        "o": ["One covalent bond", "Two hydrogen bonds", "Three hydrogen bonds", "Four coordinate bonds"],
        "a": 2,
        "e": "G-C base pairs are joined by three specific hydrogen bonds, whereas A-T pairs are joined by only two hydrogen bonds, making GC-rich DNA thermodynamically more stable.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "The melting temperature (Tm) of double-stranded DNA increases with an increasing percentage of:",
        "o": ["A-T base pairs", "G-C base pairs", "Deoxyribose sugars", "Phosphate groups"],
        "a": 1,
        "e": "Because G-C pairs are held by three hydrogen bonds and stronger base-stacking interactions, DNA with higher G+C content requires higher temperatures to denature into single strands.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Thermal denaturation of native double-stranded DNA causes a marked increase in ultraviolet absorbance at 260 nm, a phenomenon known as:",
        "o": ["Hypochromism", "Hyperchromic effect (hyperchromicity)", "Optical rotary dispersion", "Fluorescence quenching"],
        "a": 1,
        "e": "In native dsDNA, tight base-stacking suppresses UV absorbance; upon denaturation, unstacked bases absorb UV light more freely, increasing absorbance at 260 nm by ~30-40%.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "The two polynucleotide strands in Watson-Crick B-DNA are described as:",
        "o": ["Parallel with identical 5' to 3' polarity", "Antiparallel with 5' to 3' and 3' to 5' opposing polarities", "Perpendicular and branched", "Covalently linked through end-to-end ribose bonds"],
        "a": 1,
        "e": "The two complementary strands run in opposite directions: one strand runs 5' -> 3' while the other runs 3' -> 5' (antiparallel orientation).",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Which RNA species contains a high proportion of unusual/modified post-transcriptional bases such as pseudouridine (psi) and dihydrouridine (D)?",
        "o": ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Small nuclear RNA (snRNA)"],
        "a": 1,
        "e": "tRNA contains up to 10% modified nucleosides (e.g., pseudouridine in the T-psi-C loop, dihydrouridine in the D-loop, inosine) crucial for codon recognition and structural stability.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "All mature biological transfer RNA (tRNA) molecules terminate at their 3'-acceptor arm with the conserved sequence:",
        "o": ["5'-UAA-3'", "5'-CCA-3'", "5'-AUG-3'", "5'-Poly(A)-3'"],
        "a": 1,
        "e": "Every tRNA possesses the invariant trinucleotide sequence CCA at its 3' terminus, where the terminal adenine's 3'-OH group forms an ester bond with its specific amino acid.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Eukaryotic mRNA is structurally characterized at its 5'-end by:",
        "o": ["A poly-A tail of 200 adenines", "A 7-methylguanosine (m7G) triphosphate cap", "A non-hydrolyzable CCA trinucleotide", "A stem-loop iron-response element"],
        "a": 1,
        "e": "Eukaryotic mRNA possesses a 5' cap consisting of 7-methylguanosine linked via a 5'-to-5' triphosphate bridge, protecting mRNA from 5'-exonucleases and aiding ribosome binding.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Which class of cellular RNA constitutes approximately 80% of total cellular RNA in animal cells?",
        "o": ["mRNA", "tRNA", "rRNA (ribosomal RNA)", "miRNA"],
        "a": 2,
        "e": "Ribosomal RNA (rRNA) is the most abundant RNA species in living cells (~80% of total RNA), forming the structural and catalytic core of ribosomes.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "S-Adenosylmethionine (SAM) is a vital biological methyl donor formed by transferring an adenosyl group from ATP to:",
        "o": ["Cysteine", "Methionine", "Homocysteine", "Choline"],
        "a": 1,
        "e": "SAM is generated by methionine adenosyltransferase from methionine and ATP; its sulfonium methyl group has high transfer potential for transmethylation reactions.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "In the B-DNA double helix, one complete helical turn spans a distance (pitch) of:",
        "o": ["1.2 nm (4 base pairs)", "2.0 nm (6 base pairs)", "3.4 nm (10.5 base pairs)", "5.4 nm (16 base pairs)"],
        "a": 2,
        "e": "B-DNA has a helical pitch of 3.4 nm (34 Angstroms), containing approximately 10 to 10.5 base pairs per turn with an axial distance of 0.34 nm between adjacent base pairs.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Synthetic nucleotide analogues such as 5-fluorouracil (5-FU) act as chemotherapeutic drugs by inhibiting:",
        "o": ["DNA ligase directly", "Thymidylate synthase, blocking dTMP synthesis", "Adenylate kinase", "Ribosomal peptidyl transferase"],
        "a": 1,
        "e": "5-FU is converted to 5-FdUMP, which acts as a suicide inhibitor of thymidylate synthase, halting thymidine nucleotide synthesis and blocking DNA replication.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 3
    }
]

tf = [
    # --- u1-s1: Membranes, Transport & Buffers (9 TF) ---
    {
        "q": "Integral membrane proteins can be readily dissociated from biological membranes by simply altering the ionic strength of the aqueous medium.",
        "a": False,
        "e": "False. Peripheral membrane proteins are dissociated by mild changes in ionic strength or pH, whereas integral membrane proteins are deeply embedded in the hydrophobic core and require detergents to extract.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "Facilitated diffusion accelerates solute movement down an electrochemical concentration gradient without requiring ATP expenditure.",
        "a": True,
        "e": "True. Facilitated diffusion uses transmembrane carrier or channel proteins to transport specific solutes downhill without consuming metabolic energy.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The Donnan equilibrium results in an unequal osmotic pressure across the semipermeable membrane, causing water to flow into the compartment containing non-diffusible protein.",
        "a": True,
        "e": "True. The accumulation of excess counter-ions inside the protein-containing compartment increases total osmolarity, drawing water in by osmosis.",
        "topicId": "u1-t03", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "A buffer functions with greatest effectiveness when the environmental pH is within +/- 1 unit of the weak acid's pKa.",
        "a": True,
        "e": "True. The effective buffering range is defined as pH = pKa +/- 1.0, where sufficient amounts of both the weak acid and its conjugate base exist to neutralize added H+ or OH-.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "According to the Henderson-Hasselbalch equation, if the ratio of conjugate base to acid is 10:1, the pH will be exactly one unit below the pKa.",
        "a": False,
        "e": "False. Log10(10/1) = +1, so pH = pKa + 1. It is one unit above the pKa, not below.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "In domestic animal erythrocytes, the chloride shift (Hamburger phenomenon) involves bicarbonate exiting the RBC in exchange for plasma chloride.",
        "a": True,
        "e": "True. At systemic capillaries, generated HCO3- diffuses out of erythrocytes in an electroneutral 1:1 exchange for plasma Cl- via the Band 3 anion exchanger.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "Pure distilled water at 25 degrees Celsius has an ion product (Kw) equal to 1.0 x 10^-14 (mol/L)^2.",
        "a": True,
        "e": "True. Kw = [H+][OH-] = 1.0 x 10^-14 at 25 deg C; thus [H+] = [OH-] = 1.0 x 10^-7 M, corresponding to neutral pH 7.0.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "Active transport systems are unsaturable and transport solutes at rates that increase linearly with solute concentration without reaching a Vmax.",
        "a": False,
        "e": "False. Active transport systems utilize finite protein carriers that exhibit saturation kinetics and a maximal velocity (Vmax) at high solute concentrations.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },
    {
        "q": "The pKa of carbonic acid in blood plasma under physiological conditions is approximately 6.1.",
        "a": True,
        "e": "True. The effective composite pKa' for the CO2 / HCO3- buffer system in blood at 37 deg C is 6.10.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 1
    },

    # --- u1-s2: Carbohydrate Chemistry (9 TF) ---
    {
        "q": "D-Fructose is a ketohexose that can reduce Benedict's and Fehling's reagents because it readily tautomerizes to aldoses via enediol intermediates in alkaline media.",
        "a": True,
        "e": "True. In mild alkaline reagents (Fehling's/Benedict's), fructose undergoes keto-enol tautomerization through an enediol intermediate to form glucose and mannose, acting as a reducing sugar.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Sucrose produces a red precipitate of cuprous oxide when boiled directly with Fehling's reagent without prior acid hydrolysis.",
        "a": False,
        "e": "False. Sucrose is a non-reducing disaccharide because its anomeric carbons are engaged in the glycosidic bond; it gives a negative Fehling's test unless hydrolyzed first.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Mammalian digestive enzymes can hydrolyze the beta-1,4 glycosidic linkages of cellulose.",
        "a": False,
        "e": "False. Mammalian digestive enzymes (such as alpha-amylase) hydrolyze only alpha-1,4 linkages. Breakdown of cellulose requires microbial cellulase produced by symbiotic rumen or cecal microbes.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Dextrans are highly branched polymers of D-glucose produced by bacteria from sucrose, used clinically as plasma volume expanders.",
        "a": True,
        "e": "True. Clinical dextrans are bacterial alpha-1,6-linked glucans with alpha-1,3 branches, maintaining oncotic pressure in hypovolemic veterinary shock.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Amylose gives a characteristic deep blue-black color with iodine solution due to the insertion of iodine molecules into its helical core.",
        "a": True,
        "e": "True. Unbranched amylose forms a continuous left-handed helix that accommodates polyiodide ions (I5-), producing an intense blue complex.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Sorbitol is a sugar acid produced by the oxidation of the aldehyde group of D-glucose.",
        "a": False,
        "e": "False. Sorbitol (D-glucitol) is a sugar alcohol (polyol) produced by the enzymatic REDUCTION of the aldehyde carbon of glucose by aldose reductase.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Hyaluronic acid contains sulfate ester groups attached to the C-4 and C-6 hydroxyls of its hexosamine units.",
        "a": False,
        "e": "False. Hyaluronic acid is the only major glycosaminoglycan that is entirely non-sulfated and not covalently attached to a core protein.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "Trehalose is a non-reducing disaccharide composed of two alpha-D-glucose molecules linked by an alpha-1,1 glycosidic bond.",
        "a": True,
        "e": "True. Trehalose (found in insect hemolymph and fungi) links the anomeric carbons of two D-glucose residues via an alpha-1,alpha-1 bond, rendering it non-reducing.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 2
    },
    {
        "q": "The D- and L- stereochemical designations of monosaccharides are assigned based on the spatial configuration of the asymmetric carbon farthest from the carbonyl carbon.",
        "a": True,
        "e": "True. D/L configuration is based on the reference standard D-glyceraldehyde and is determined by the orientation of the -OH group on the highest-numbered chiral carbon (e.g., C-5 in hexoses).",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 2
    },

    # --- u1-s3: Lipid Chemistry & Prostaglandins (9 TF) ---
    {
        "q": "Naturally occurring unsaturated fatty acids in animal tissues almost exclusively possess the cis double bond geometric configuration.",
        "a": True,
        "e": "True. Natural unsaturated fatty acids in animals have cis double bonds, which introduce a 30-degree kink in the hydrocarbon chain, maintaining membrane fluidity.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Fats containing primarily long-chain saturated fatty acids have lower melting points and remain liquid at room temperature.",
        "a": False,
        "e": "False. Saturated fatty acids pack closely and have high melting points, remaining solid at room temperature. Unsaturated fatty acids with cis kinks have lower melting points (oils).",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "A low Saponification Number in an oil signifies a higher average molecular weight of its constituent fatty acids.",
        "a": True,
        "e": "True. Saponification number is inversely proportional to molecular weight: fewer molecules of fat are present per gram, requiring fewer milligrams of KOH for saponification.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Prostaglandins are 20-carbon cyclopentane-containing fatty acid derivatives with extremely long biological half-lives that act exclusively as systemic hormones.",
        "a": False,
        "e": "False. Prostaglandins are local autocrine and paracrine autacoids with very short half-lives (seconds to minutes), being rapidly inactivated during passage through the lungs and liver.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Low-Density Lipoprotein (LDL) contains Apolipoprotein B-100 as its primary structural protein.",
        "a": True,
        "e": "True. Apo B-100 is the sole structural apolipoprotein on LDL, serving as the ligand recognized by tissue LDL receptors for endocytosis.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Cerebrosides are complex glycolipids containing a sphingosine backbone, a fatty acid, and an oligosaccharide chain with sialic acid residues.",
        "a": False,
        "e": "False. Cerebrosides contain only a single monosaccharide unit (glucose or galactose). Glycolipids containing branched oligosaccharides with sialic acid are gangliosides.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Prostacyclin (PGI2), synthesized by vascular endothelial cells, is a potent inhibitor of platelet aggregation and causes vasodilation.",
        "a": True,
        "e": "True. PGI2 opposes thromboxane A2: it elevates platelet cAMP, inhibiting aggregation and relaxing vascular smooth muscle to prevent thrombosis.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "Wax esters consist of glycerol esterified with three saturated short-chain fatty acids.",
        "a": False,
        "e": "False. Waxes are esters of long-chain fatty acids with long-chain monohydric alcohols (e.g., cetyl alcohol), not glycerol.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Essential fatty acids must be supplied in the diet because mammals cannot introduce double bonds beyond carbon-9 counting from the carboxyl end.",
        "a": True,
        "e": "True. Mammalian tissues possess delta-9, delta-6, and delta-5 desaturases, but lack delta-12 and delta-15 desaturases required to synthesize linoleic (omega-6) and alpha-linolenic (omega-3) acids.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },

    # --- u1-s4: Amino Acids & Protein Chemistry (9 TF) ---
    {
        "q": "All 20 standard amino acids incorporated into proteins during ribosomal translation belong to the L-stereochemical configuration.",
        "a": True,
        "e": "True. With the sole exception of achiral glycine, all standard proteinogenic amino acids in biological proteins have the L-configuration at the alpha-carbon.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "At a pH below its isoelectric point (pI), an amino acid carries a net positive charge and migrates toward the cathode in an electric field.",
        "a": True,
        "e": "True. When pH < pI, excess H+ protons suppress carboxyl ionization while protonating amino groups (-NH3+), yielding a net positive cation.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The secondary structure of proteins is primarily stabilized by covalent disulfide bonds between distant residues.",
        "a": False,
        "e": "False. Secondary structures (alpha-helix and beta-pleated sheet) are stabilized specifically by regular hydrogen bonds between peptide carbonyl oxygens and amide nitrogens.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Histidine is effective as a physiological buffer at physiological pH (7.4) because the pKa of its imidazole side chain is approximately 6.0 to 6.8.",
        "a": True,
        "e": "True. Histidine is the only standard amino acid with an ionizable side-chain pKa near physiological pH, making it the key buffering residue in hemoglobin and albumin.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Thermal denaturation of an enzyme destroys its primary structure by hydrolyzing its peptide bonds.",
        "a": False,
        "e": "False. Denaturation disrupts secondary, tertiary, and quaternary structures (hydrogen bonds, hydrophobic interactions) while leaving the primary covalent peptide backbone intact.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Beta-pleated sheets can be composed of either parallel or antiparallel polypeptide strands.",
        "a": True,
        "e": "True. In parallel beta-sheets, adjacent strands run in the same N-to-C direction; in antiparallel beta-sheets, adjacent strands run in opposite directions with more collinear hydrogen bonds.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The Sakaguchi test is a specific colorimetric test used to detect the imidazole ring of histidine.",
        "a": False,
        "e": "False. The Sakaguchi test detects the guanidino group of arginine (producing a red color). Histidine is detected by Pauly's test.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Serum albumin has a lower molecular weight than globulins but exerts approximately 75-80% of total plasma colloid osmotic (oncotic) pressure.",
        "a": True,
        "e": "True. Albumin (MW ~66.5 kDa) has high molar concentration and carries a net negative charge of -18 at pH 7.4, exerting dominant oncotic and Donnan effects.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "Prions are infectious proteinaceous agents that cause transmissible spongiform encephalopathies by inducing abnormal conformational change in normal prion proteins.",
        "a": True,
        "e": "True. Prion diseases (e.g., Bovine Spongiform Encephalopathy / BSE, scrapie) involve conversion of normal alpha-helical PrPc into insoluble, protease-resistant beta-sheet-rich PrPsc.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },

    # --- u1-s5: Nucleic Acids & Nucleotides (9 TF) ---
    {
        "q": "In RNA, the pyrimidine base thymine is replaced by uracil.",
        "a": True,
        "e": "True. RNA contains uracil (which lacks the 5-methyl group of thymine) base-pairing with adenine during transcription and translation.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "The 2'-hydroxyl group on the ribose ring makes RNA chemically more susceptible to alkaline hydrolysis than DNA.",
        "a": True,
        "e": "True. Under alkaline conditions, the 2'-OH group of RNA is deprotonated and nucleophilically attacks the adjacent 3',5'-phosphodiester bond, forming a 2',3'-cyclic monophosphate intermediate that cleaves RNA.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Chargaff's rules apply equally to single-stranded viral RNA genomes.",
        "a": False,
        "e": "False. Chargaff's rules (A=T or A=U, G=C) apply strictly to double-stranded nucleic acids; single-stranded nucleic acids do not require base parity.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Z-DNA is a left-handed double helix with a zigzag sugar-phosphate backbone favored by alternating purine-pyrimidine sequences.",
        "a": True,
        "e": "True. Z-DNA winds to the left, has 12 base pairs per turn, and is favored under high salt or alternating d(C-G) sequences.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "DNA absorption of UV light at 260 nm is primarily due to resonance in the heterocyclic rings of purine and pyrimidine bases.",
        "a": True,
        "e": "True. Conjugated double bonds in purine and pyrimidine rings absorb strongly in the ultraviolet spectrum with a characteristic absorption maximum at 260 nm.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "ATP contains three high-energy phosphoanhydride bonds.",
        "a": False,
        "e": "False. ATP contains TWO high-energy phosphoanhydride bonds (between alpha-beta and beta-gamma phosphates); the bond linking the alpha phosphate to ribose is a lower-energy phosphoester bond.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "The cloverleaf model of transfer RNA (tRNA) represents its folded, functional three-dimensional tertiary structure in vivo.",
        "a": False,
        "e": "False. The cloverleaf is the two-dimensional secondary structure of tRNA; its actual 3D tertiary structure is an inverted 'L-shaped' conformation.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Ribozymes are catalytic RNA molecules capable of catalyzing specific biochemical reactions without a protein component.",
        "a": True,
        "e": "True. Discovered by Cech and Altman, ribozymes (such as the 28S rRNA peptidyl transferase center of ribosomes) demonstrate enzymatic catalytic activity in RNA.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "Xanthine and hypoxanthine are standard pyrimidine intermediates of nucleic acid catabolism.",
        "a": False,
        "e": "False. Hypoxanthine and xanthine are PURINE intermediates produced during the catabolism of adenine and guanine on the pathway to uric acid.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    }
]

fib = [
    # --- u1-s1: Membranes, Transport & Buffers (9 FIB) ---
    {
        "q": "The widely accepted structural model of biological membranes proposed by Singer and Nicolson in 1972 is called the _____ model.",
        "a": ["fluid mosaic", "fluid mosaic model"],
        "a_display": "Fluid Mosaic",
        "e": "Singer and Nicolson proposed the Fluid Mosaic Model describing biological membranes as a fluid phospholipid bilayer with embedded mobile proteins.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The Na+/K+-ATPase pump moves 3 sodium ions out of the cell and _____ potassium ions into the cell per molecule of ATP hydrolyzed.",
        "a": ["2", "two"],
        "a_display": "2 (Two)",
        "e": "The Na+/K+-ATPase pump couples the hydrolysis of 1 ATP to the extrusion of 3 Na+ ions and uptake of 2 K+ ions.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The unequal distribution of diffusible ions across a membrane caused by the presence of non-diffusible polyvalent ions is known as the _____ membrane equilibrium.",
        "a": ["donnan", "gibbs-donnan", "gibbs donnan"],
        "a_display": "Donnan (Gibbs-Donnan)",
        "e": "Donnan membrane equilibrium accounts for asymmetric distribution of permeant electrolytes across capillary walls and cellular membranes.",
        "topicId": "u1-t03", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The equation pH = pKa + log([A-] / [HA]) used to calculate buffer pH is named the _____ equation.",
        "a": ["henderson-hasselbalch", "henderson hasselbalch"],
        "a_display": "Henderson-Hasselbalch",
        "e": "The Henderson-Hasselbalch equation relates pH, pKa, and the ratio of conjugate base to weak acid.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The primary extracellular chemical buffer system maintaining arterial blood pH in domestic animals is the _____ buffer system.",
        "a": ["bicarbonate", "bicarbonate-carbonic acid", "carbonic acid-bicarbonate"],
        "a_display": "Bicarbonate",
        "e": "The bicarbonate buffer system (HCO3- / H2CO3) is the foremost extracellular buffer system because its components are independently regulated by respiration (lungs) and kidneys.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "The normal mean physiological arterial blood pH in domestic cattle, dogs, and horses is approximately _____.",
        "a": ["7.4", "7.40", "7.35-7.45"],
        "a_display": "7.40 (7.35–7.45)",
        "e": "Arterial blood pH is regulated in health between 7.35 and 7.45, with 7.40 representing the central physiological setpoint.",
        "topicId": "u1-t04", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "Specialized transmembrane protein channels that facilitate rapid water diffusion across biological membranes are called _____.",
        "a": ["aquaporins", "aquaporin"],
        "a_display": "Aquaporins",
        "e": "Aquaporins are selective water-channel proteins that dramatically accelerate osmotic movement of water across cell membranes.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "When the molar concentration of a weak acid equals the molar concentration of its conjugate base, the pH of the buffer equals its _____.",
        "a": ["pka"],
        "a_display": "pKa",
        "e": "When [A-] = [HA], log([A-]/[HA]) = log(1) = 0, so pH = pKa.",
        "topicId": "u1-t05", "subSection": "u1-s1", "diff": 1
    },
    {
        "q": "In the erythrocyte membrane, the chloride shift (Hamburger phenomenon) is mediated by the anion exchange protein known as Band _____.",
        "a": ["3", "three"],
        "a_display": "3 (Band 3)",
        "e": "Band 3 (AE1) is the major integral anion exchanger in erythrocyte membranes that exchanges HCO3- for Cl-.",
        "topicId": "u1-t02", "subSection": "u1-s1", "diff": 2
    },

    # --- u1-s2: Carbohydrate Chemistry (9 FIB) ---
    {
        "q": "D-Glucose and D-Galactose differ in configuration only around carbon atom number _____.",
        "a": ["4", "c-4", "c4", "four"],
        "a_display": "4 (C-4)",
        "e": "Glucose and galactose are C-4 epimers, differing in stereochemistry at Carbon-4.",
        "topicId": "u1-t06", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The disaccharide maltose consists of two D-glucose molecules joined by an _____ glycosidic bond.",
        "a": ["alpha-1,4", "alpha 1,4", "alpha-1,4-", "alpha 1-4"],
        "a_display": "alpha-1,4",
        "e": "Maltose is an alpha-1,4-linked disaccharide of two D-glucose units formed during starch digestion.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The disaccharide of bovine milk, lactose, consists of D-galactose and D-glucose joined by a _____ glycosidic bond.",
        "a": ["beta-1,4", "beta 1,4", "beta-1,4-", "beta 1-4"],
        "a_display": "beta-1,4",
        "e": "Lactose is beta-D-galactopyranosyl-(1->4)-D-glucose, hydrolyzed by lactase in nursing animals.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Sucrose is a non-reducing sugar because the anomeric carbons of both glucose and _____ participate in the glycosidic bond.",
        "a": ["fructose", "d-fructose"],
        "a_display": "Fructose",
        "e": "Sucrose links C-1 of alpha-D-glucose and C-2 of beta-D-fructose, leaving no free anomeric hemiacetal/hemiketal group.",
        "topicId": "u1-t07", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The plant storage polysaccharide amylopectin contains linear alpha-1,4 bonds and branch points connected by _____ glycosidic bonds.",
        "a": ["alpha-1,6", "alpha 1,6", "alpha-1,6-", "alpha 1-6"],
        "a_display": "alpha-1,6",
        "e": "Amylopectin contains alpha-1,6 branch points every 24-30 residues along its alpha-1,4-linked glucose chains.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The animal storage polysaccharide stored predominantly in liver and skeletal muscle is _____.",
        "a": ["glycogen"],
        "a_display": "Glycogen",
        "e": "Glycogen is the major storage homopolysaccharide of animals, consisting of extensively branched alpha-D-glucose.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The homopolysaccharide inulin, used to measure glomerular filtration rate (GFR), is a polymer of _____.",
        "a": ["fructose", "d-fructose"],
        "a_display": "Fructose",
        "e": "Inulin is a fructosan homopolysaccharide of beta-2,1-linked D-fructose residues, neither secreted nor reabsorbed in renal tubules.",
        "topicId": "u1-t08", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "The non-sulfated glycosaminoglycan present in synovial fluid that acts as an articular lubricant and shock absorber is _____.",
        "a": ["hyaluronic acid", "hyaluronate", "hyaluronan"],
        "a_display": "Hyaluronic acid",
        "e": "Hyaluronic acid (hyaluronan) is a non-sulfated GAG composed of D-glucuronic acid and N-acetylglucosamine.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 1
    },
    {
        "q": "Bacterial cell wall peptidoglycan consists of alternating polysaccharide units of N-acetylglucosamine and _____.",
        "a": ["n-acetylmuramic acid", "nam"],
        "a_display": "N-Acetylmuramic acid (NAM)",
        "e": "Peptidoglycan is a heteropolymer of alternating beta-1,4-linked NAG and NAM cross-linked by tetrapeptide side chains.",
        "topicId": "u1-t09", "subSection": "u1-s2", "diff": 2
    },

    # --- u1-s3: Lipid Chemistry & Prostaglandins (9 FIB) ---
    {
        "q": "The ester bonds of neutral fat (triacylglycerol) connect one molecule of glycerol to _____ molecules of fatty acids.",
        "a": ["3", "three"],
        "a_display": "3 (Three)",
        "e": "Triacylglycerols consist of three fatty acyl chains esterified to the three hydroxyl carbons of glycerol.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "Lecithin is chemically known as phosphatidyl_____.",
        "a": ["choline"],
        "a_display": "Choline",
        "e": "Lecithin is phosphatidylcholine, the predominant glycerophospholipid in mammalian cell membranes and bile.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The degree of unsaturation of an oil or fat is quantitatively measured by its _____ number.",
        "a": ["iodine", "iodine value", "iodine number"],
        "a_display": "Iodine",
        "e": "Iodine number represents the grams of iodine absorbed per 100 grams of fat, directly indicating double bond abundance.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The milligrams of potassium hydroxide (KOH) required to completely saponify 1 gram of fat is called the _____ number.",
        "a": ["saponification", "saponification number", "saponification value"],
        "a_display": "Saponification",
        "e": "Saponification number reflects the average molecular weight (chain length) of fatty acids in a triacylglycerol sample.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The 20-carbon polyunsaturated fatty acid with four double bonds that serves as the immediate substrate for prostaglandin synthesis is _____ acid.",
        "a": ["arachidonic", "arachidonic acid"],
        "a_display": "Arachidonic",
        "e": "Arachidonic acid (20:4 delta-5,8,11,14) is oxygenated by cyclooxygenase to generate series-2 prostaglandins, prostacyclins, and thromboxanes.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "In veterinary medicine, the prostaglandin analogue PGF2alpha is injected into farm animals to induce regression of the _____ luteum.",
        "a": ["corpus", "corpus luteum"],
        "a_display": "Corpus (Corpus luteum)",
        "e": "PGF2alpha is a physiological luteolytic hormone that causes rapid luteolysis of the corpus luteum, terminating diestrus.",
        "topicId": "u1-t12", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The plasma lipoprotein that is least dense, has the largest diameter, and transports dietary lipids from the gut is the _____.",
        "a": ["chylomicron", "chylomicrons"],
        "a_display": "Chylomicron",
        "e": "Chylomicrons carry exogenous dietary triacylglycerols and cholesterol absorbed from the intestinal mucosa via the thoracic duct into the circulation.",
        "topicId": "u1-t11", "subSection": "u1-s3", "diff": 1
    },
    {
        "q": "The fundamental parent steroid hydrocarbon nucleus consisting of four fused rings found in cholesterol is the _____ ring.",
        "a": ["cyclopentanoperhydrophenanthrene", "cppp"],
        "a_display": "Cyclopentanoperhydrophenanthrene (CPPP)",
        "e": "All natural sterols contain the four-ring CPPP (cyclopentanoperhydrophenanthrene) nucleus with rings A, B, C, and D.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },
    {
        "q": "The pulmonary phospholipid surfactant deficiency in premature neonates that causes alveolar collapse is dipalmitoylphosphatidyl_____.",
        "a": ["choline", "dppc"],
        "a_display": "Choline (DPPC)",
        "e": "Dipalmitoylphosphatidylcholine (DPPC) reduces alveolar surface tension, preventing neonatal respiratory distress syndrome.",
        "topicId": "u1-t10", "subSection": "u1-s3", "diff": 2
    },

    # --- u1-s4: Amino Acids & Protein Chemistry (9 FIB) ---
    {
        "q": "The only standard proteinogenic amino acid that lacks a chiral center and is optically inactive is _____.",
        "a": ["glycine", "gly"],
        "a_display": "Glycine",
        "e": "Glycine has two hydrogen atoms bound to its alpha-carbon (R = H), possessing no asymmetric carbon atom.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The covalent bond that links adjacent amino acids in a polypeptide chain is the _____ bond.",
        "a": ["peptide", "peptide bond"],
        "a_display": "Peptide",
        "e": "Peptide bonds (-CO-NH-) are formed between the alpha-carboxyl of one amino acid and the alpha-amino group of the next.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The pH at which a protein or amino acid carries zero net electrical charge and does not migrate in an electric field is called its _____ point.",
        "a": ["isoelectric", "isoelectric point", "pi"],
        "a_display": "Isoelectric (pI)",
        "e": "At the isoelectric point (pI), negative and positive charges balance exactly, minimizing solubility.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "Cysteine residues form covalent _____ bonds that cross-link polypeptide chains and stabilize protein tertiary structure.",
        "a": ["disulfide", "disulphide", "disulfide bonds", "-s-s-"],
        "a_display": "Disulfide (-S-S-)",
        "e": "Oxidation of the thiol (-SH) groups of two cysteine residues yields a covalent disulfide bond, forming cystine.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The qualitative chemical test that detects peptide bonds by forming a violet-purple coordination complex with alkaline copper ions is the _____ test.",
        "a": ["biuret", "biuret test"],
        "a_display": "Biuret",
        "e": "The Biuret reaction detects compounds with two or more peptide bonds via copper coordination under alkaline conditions.",
        "topicId": "u1-t15", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The amino acid that contains an indole ring in its structure and serves as the precursor for serotonin and melatonin is _____.",
        "a": ["tryptophan", "trp"],
        "a_display": "Tryptophan",
        "e": "Tryptophan contains an indole aromatic side chain and is metabolized to serotonin (5-hydroxytryptamine) and melatonin.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The standard alpha-helix of protein secondary structure contains _____ amino acid residues per turn.",
        "a": ["3.6"],
        "a_display": "3.6",
        "e": "Paulings classic alpha-helix has exactly 3.6 amino acid residues per turn, with a pitch of 0.54 nm (5.4 Angstroms).",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 2
    },
    {
        "q": "The essential non-protein amino acid required in feline diets to prevent dilated cardiomyopathy is _____.",
        "a": ["taurine"],
        "a_display": "Taurine",
        "e": "Taurine (2-aminoethanesulfonic acid) is an obligate dietary requirement for cats because they cannot synthesize sufficient taurine from cysteine.",
        "topicId": "u1-t14", "subSection": "u1-s4", "diff": 1
    },
    {
        "q": "The cyclic imino acid that acts as a helix breaker because its rigid pyrrolidine ring disrupts alpha-helical geometry is _____.",
        "a": ["proline", "pro"],
        "a_display": "Proline",
        "e": "Proline lacks a free amide hydrogen when incorporated into a peptide chain and introduces a rigid bend that disrupts alpha-helical structures.",
        "topicId": "u1-t13", "subSection": "u1-s4", "diff": 1
    },

    # --- u1-s5: Nucleic Acids & Nucleotides (9 FIB) ---
    {
        "q": "The purine nitrogenous bases found in both DNA and RNA are adenine and _____.",
        "a": ["guanine", "gua"],
        "a_display": "Guanine",
        "e": "Adenine and guanine are the two universal bicyclic purine bases of genetic material.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "In the Watson-Crick double helix, adenine pairs with thymine via _____ hydrogen bonds.",
        "a": ["2", "two"],
        "a_display": "2 (Two)",
        "e": "A-T pairs form 2 hydrogen bonds, while G-C pairs form 3 hydrogen bonds.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "In B-DNA, guanine pairs with cytosine via _____ hydrogen bonds.",
        "a": ["3", "three"],
        "a_display": "3 (Three)",
        "e": "Guanine forms 3 hydrogen bonds with cytosine, making GC-rich DNA regions more thermally stable.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Nucleic acids absorb ultraviolet light most strongly at a wavelength of _____ nanometers (nm).",
        "a": ["260", "260 nm", "260nm"],
        "a_display": "260 nm",
        "e": "Purine and pyrimidine rings have conjugated pi-electron systems that absorb UV light with a characteristic peak at 260 nm.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "The rule stating that in double-stranded DNA, the ratio of A to T and G to C is 1:1 is known as _____ rule.",
        "a": ["chargaff's", "chargaff", "chargaffs"],
        "a_display": "Chargaff's",
        "e": "Erwin Chargaff discovered that dsDNA always exhibits stoichiometric equivalence: %A = %T and %G = %C.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "Adjacent nucleotides in a single polynucleotide strand of DNA or RNA are joined by 3',5'-_____ bonds.",
        "a": ["phosphodiester", "phosphodiester bonds", "phosphodiester linkage"],
        "a_display": "Phosphodiester",
        "e": "The covalent backbone of DNA and RNA consists of 3',5'-phosphodiester bridges connecting successive pentose units.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "The temperature at which 50% of double-stranded DNA helical structure is denatured into single strands is termed the _____ temperature (Tm).",
        "a": ["melting", "melting temperature"],
        "a_display": "Melting (Tm)",
        "e": "The melting temperature (Tm) is the midpoint of the thermal denaturation transition curve of DNA.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 1
    },
    {
        "q": "All mature transfer RNA (tRNA) molecules carry the invariant amino-acid-acceptor sequence _____ at their 3'-terminus.",
        "a": ["cca", "5'-cca-3'", "cca-3'"],
        "a_display": "CCA (5'-CCA-3')",
        "e": "Aminoacyl-tRNA synthetases esterify specific amino acids to the 3'-adenosine of the invariant 3'-terminal CCA sequence.",
        "topicId": "u1-t17", "subSection": "u1-s5", "diff": 2
    },
    {
        "q": "The intracellular second messenger synthesized from ATP by adenylyl cyclase is cyclic _____.",
        "a": ["amp", "camp", "adenosine monophosphate"],
        "a_display": "cAMP (cyclic AMP)",
        "e": "Cyclic adenosine 3',5'-monophosphate (cAMP) is a key second messenger transducing peptide and catecholamine hormonal signals.",
        "topicId": "u1-t16", "subSection": "u1-s5", "diff": 1
    }
]

if __name__ == "__main__":
    print(f"Unit 1 Loaded: {len(mcq)} MCQ, {len(tf)} TF, {len(fib)} FIB. Total = {len(mcq) + len(tf) + len(fib)}")
