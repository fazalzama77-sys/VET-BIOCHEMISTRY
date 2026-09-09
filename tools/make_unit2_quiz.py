# -*- coding: utf-8 -*-
"""
Unit 2: Intermediary Metabolism Quiz Questions
Curriculum: VCI MSVE Credit Hours 2+1=3 (Second Year B.V.Sc & A.H.)
Counts: 90 MCQ, 45 True/False, 45 Fill in the Blanks (Total 180 questions)
Strict 2 : 1 : 1 Ratio
Sub-sections:
  u2-s1: Enzymes, Kinetics & Inhibition (Topics: u2-t01 to u2-t06) [15 MCQ, 8 TF, 8 FIB = 31 Qs]
  u2-s2: Biological Oxidation & ETC (Topics: u2-t07 to u2-t09) [15 MCQ, 7 TF, 7 FIB = 29 Qs]
  u2-s3: Carbohydrate Metabolism (Topics: u2-t10 to u2-t14) [15 MCQ, 8 TF, 8 FIB = 31 Qs]
  u2-s4: Lipid Metabolism & Ketogenesis (Topics: u2-t15 to u2-t16) [15 MCQ, 8 TF, 8 FIB = 31 Qs]
  u2-s5: Protein Metabolism & Urea Cycle (Topics: u2-t17 to u2-t19) [15 MCQ, 7 TF, 7 FIB = 29 Qs]
  u2-s6: Nucleic Acid Metabolism & Integration (Topics: u2-t20 to u2-t22) [15 MCQ, 7 TF, 7 FIB = 29 Qs]
Total: 90 MCQ, 45 TF, 45 FIB = 180 Questions
"""

mcq = [
    # --- u2-s1: Enzymes, Kinetics & Inhibition (15 MCQs) ---
    {
        "q": "According to the IUBMB classification system, enzymes that catalyze the joining of two molecules coupled with the cleavage of ATP are classified as:",
        "o": ["Hydrolases (EC 3)", "Lyases (EC 4)", "Isomerases (EC 5)", "Ligases (EC 6)"],
        "a": 3,
        "e": "Class 6 Ligases (synthetases) catalyze the joining of two chemical groups with concomitant hydrolysis of a high-energy phosphate bond (e.g., pyruvate carboxylase, DNA ligase).",
        "topicId": "u2-t01", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The non-protein organic molecule that is dialyzable, heat-stable, and loosely associated with an apoenzyme to form a holoenzyme is called a:",
        "o": ["Prosthetic group", "Coenzyme", "Zymogen", "Metalloenzyme"],
        "a": 1,
        "e": "A coenzyme is a low-molecular-weight organic cofactor loosely bound to the protein apoenzyme (e.g., NAD+, NADP+), whereas a tightly or covalently bound cofactor is a prosthetic group.",
        "topicId": "u2-t02", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The active site model proposing that the substrate induces a conformational fit in the enzyme's catalytic cleft was formulated by:",
        "o": ["Emil Fischer (1894)", "Daniel Koshland (1958)", "Leonor Michaelis (1913)", "Lineweaver and Burk (1934)"],
        "a": 1,
        "e": "Daniel Koshland proposed the 'Induced Fit Theory', demonstrating that the active site is flexible and undergoes dynamic conformational reshaping upon substrate binding.",
        "topicId": "u2-t03", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The Michaelis constant (Km) of an enzyme is mathematically defined as the substrate concentration at which the reaction velocity is:",
        "o": ["Equal to Vmax", "Exactly 1/2 of Vmax", "1/4 of Vmax", "Zero"],
        "a": 1,
        "e": "Km is the substrate concentration ([S]) at which the initial reaction velocity (v) equals half of the maximal velocity (Vmax/2); a lower Km signifies higher enzyme affinity.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "In a Lineweaver-Burk double-reciprocal plot (1/v versus 1/[S]), the intercept on the horizontal x-axis represents:",
        "o": ["1 / Vmax", "-1 / Km", "Km / Vmax", "Vmax / Km"],
        "a": 1,
        "e": "In the Lineweaver-Burk equation (1/v = Km/Vmax * 1/[S] + 1/Vmax), the y-intercept is 1/Vmax and the x-intercept is -1/Km.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "In competitive enzyme inhibition, the inhibitor structurally resembles the substrate, resulting in:",
        "o": ["Increased Km with unchanged Vmax", "Decreased Km with decreased Vmax", "Unchanged Km with decreased Vmax", "Both increased Km and increased Vmax"],
        "a": 0,
        "e": "A competitive inhibitor competes with substrate for the free active site; adding excess substrate overcomes the inhibitor, leaving Vmax unchanged while increasing apparent Km.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Which of the following is a classic example of competitive enzyme inhibition?",
        "o": ["Inhibition of cytochrome oxidase by cyanide", "Inhibition of succinate dehydrogenase by malonate", "Inhibition of enolase by fluoride", "Inhibition of acetylcholinesterase by diisopropylfluorophosphate"],
        "a": 1,
        "e": "Malonate is a structural analog of succinate (3 carbons vs 4 carbons) that competitively inhibits succinate dehydrogenase in the Krebs cycle.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "In non-competitive enzyme inhibition, the inhibitor binds reversibly to both free enzyme and enzyme-substrate complex at an allosteric site, resulting in:",
        "o": ["Increased Km and normal Vmax", "Unchanged Km and decreased Vmax", "Decreased Km and normal Vmax", "Decreased Km and decreased Vmax"],
        "a": 1,
        "e": "Non-competitive inhibitors do not interfere with substrate binding (Km unchanged), but prevent the catalytic breakdown of ES complex into products, reducing Vmax.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "An enzyme unit (International Unit, IU) is defined as the amount of enzyme that catalyzes the transformation of:",
        "o": ["1 mole of substrate per second", "1 micromole of substrate per minute under standard conditions", "1 milligram of substrate per hour", "1 gram of substrate per second"],
        "a": 1,
        "e": "1 International Unit (IU) = 1 micromole (1 umol) of substrate converted per minute at 25 or 30 deg C under optimal assay conditions.",
        "topicId": "u2-t05", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The SI unit of enzyme catalytic activity, the Katal (kat), corresponds to:",
        "o": ["1 micromole per minute", "1 mole of substrate converted per second", "1 millimole per hour", "1 nanomole per second"],
        "a": 1,
        "e": "1 Katal = 1 mol of substrate transformed per second (1 kat = 6 x 10^7 IU).",
        "topicId": "u2-t05", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Specific activity of an enzyme preparation is expressed as:",
        "o": ["Total substrate consumed per liter", "Enzyme units (IU) per milligram of total protein", "Reaction velocity multiplied by time", "Molecular weight divided by turnover number"],
        "a": 1,
        "e": "Specific activity = Enzyme Units / mg protein; it is the definitive measure of enzyme purity, increasing steadily during progressive purification steps.",
        "topicId": "u2-t05", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Suicide inhibition (mechanism-based irreversible inhibition) occurs when an inhibitor is converted by the enzyme into a reactive intermediate that permanently inactivates it, as exemplified by:",
        "o": ["Aspirin on cyclooxygenase", "Allopurinol on xanthine oxidase", "Organophosphates on acetylcholinesterase", "All of the above"],
        "a": 3,
        "e": "All listed compounds are classic mechanism-based irreversible/suicide inhibitors that form covalent modifications in the target enzyme's active center.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "Lactate dehydrogenase (LDH) exists as five distinct tetrameric isoenzymes (LDH1 to LDH5) composed of combinations of:",
        "o": ["Two polypeptide chains: H (heart) and M (muscle)", "Three chains: A, B, and C", "Four distinct catalytic subunits", "Two non-protein coenzyme rings"],
        "a": 0,
        "e": "LDH is a tetramer of H and M subunits: LDH-1 (H4, cardiac muscle), LDH-2 (H3M1), LDH-3 (H2M2), LDH-4 (HM3), and LDH-5 (M4, skeletal muscle and liver).",
        "topicId": "u2-t02", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "Allosteric enzymes generally exhibit a velocity versus substrate concentration curve that is:",
        "o": ["Hyperbolic", "Sigmoidal (S-shaped)", "Linear with positive slope", "Parabolic inverted"],
        "a": 1,
        "e": "Allosteric multimeric enzymes display cooperative substrate binding, producing a sigmoidal saturation curve rather than the classic Michaelis-Menten hyperbolic curve.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "The temperature coefficient (Q10) for most biological enzyme-catalyzed reactions between 0 deg C and 40 deg C is approximately:",
        "o": ["0.5", "1.0", "2.0", "4.0"],
        "a": 2,
        "e": "Q10 represents the factor by which reaction velocity increases with a 10 deg C temperature rise; for enzymatic reactions below denaturation temperatures, Q10 is approximately 2.0.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 2
    },

    # --- u2-s2: Biological Oxidation & ETC (15 MCQs) ---
    {
        "q": "Which high-energy phosphate compound has the most negative standard free energy of hydrolysis (delta G0' = -61.9 kJ/mol)?",
        "o": ["Adenosine triphosphate (ATP)", "Phosphocreatine", "Phosphoenolpyruvate (PEP)", "1,3-Bisphosphoglycerate"],
        "a": 2,
        "e": "Phosphoenolpyruvate (PEP) has the highest phosphate group transfer potential (-61.9 kJ/mol or -14.8 kcal/mol), followed by 1,3-BPG (-49.3 kJ/mol) and phosphocreatine (-43.1 kJ/mol).",
        "topicId": "u2-t07", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "The Chemiosmotic Hypothesis of oxidative phosphorylation explaining ATP synthesis by a transmembrane electrochemical proton gradient was proposed by:",
        "o": ["Hans Krebs (1937)", "Peter Mitchell (1961)", "Fritz Lipmann (1941)", "Albert Lehninger (1955)"],
        "a": 1,
        "e": "Peter Mitchell proposed the Chemiosmotic Hypothesis in 1961 (Nobel Prize 1978), demonstrating that electron transport pumps protons from the matrix into the intermembrane space, creating a proton-motive force.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Which respiratory chain complex contains FAD, does NOT pump protons across the inner mitochondrial membrane, and participates directly in the Krebs cycle?",
        "o": ["Complex I (NADH-Q oxidoreductase)", "Complex II (Succinate-Q reductase)", "Complex III (Q-cytochrome c oxidoreductase)", "Complex IV (Cytochrome c oxidase)"],
        "a": 1,
        "e": "Complex II is Succinate Dehydrogenase; it oxidizes succinate to fumarate, reducing FAD to FADH2, and transfers electrons to ubiquinone without pumping any protons.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "The mobile lipid-soluble electron carrier in the inner mitochondrial membrane that shuttles electrons from Complexes I and II to Complex III is:",
        "o": ["Cytochrome c", "Ubiquinone (Coenzyme Q)", "Plastoquinone", "Ferredoxin"],
        "a": 1,
        "e": "Ubiquinone (Coenzyme Q10) has a long isoprenoid hydrophobic tail that dissolves in the lipid bilayer, allowing it to accept electrons and protons to form ubiquinol (QH2).",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Cytochrome c is a water-soluble peripheral hemeprotein located on the:",
        "o": ["Matrix side of the inner mitochondrial membrane", "Outer surface of the inner mitochondrial membrane facing the intermembrane space", "Outer mitochondrial membrane facing the cytosol", "Inner surface of the cristae lumen"],
        "a": 1,
        "e": "Cytochrome c is a peripheral membrane protein loosely attached to the outer surface of the inner mitochondrial membrane, shuttling single electrons from Complex III to Complex IV.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Complex IV (Cytochrome c oxidase) contains two heme groups (a and a3) and two copper centers (CuA and CuB), and catalyzes the reduction of:",
        "o": ["NAD+ to NADH", "Ubiquinone to ubiquinol", "Molecular O2 to two molecules of H2O", "Pyruvate to lactate"],
        "a": 2,
        "e": "Complex IV transfers four electrons from four reduced cytochrome c molecules to molecular oxygen (O2), reducing it completely to two H2O molecules while pumping 2 protons.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "The toxic action of cyanide (CN-), carbon monoxide (CO), and sodium azide (NaN3) is due to specific inhibition of:",
        "o": ["Complex I (NADH dehydrogenase)", "Complex II (Succinate dehydrogenase)", "Complex III (Cytochrome bc1)", "Complex IV (Cytochrome c oxidase)"],
        "a": 3,
        "e": "Cyanide, CO, and azide bind tightly to the Fe3+ and CuB centers of cytochrome a3 in Complex IV, arresting cellular respiration and causing histotoxic anoxia.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Which compound is a classic inhibitor of Complex I of the respiratory chain and is used as a piscicide and botanical insecticide?",
        "o": ["Antimycin A", "Rotenone", "Oligomycin", "Malonate"],
        "a": 1,
        "e": "Rotenone (derived from Derris root) and barbiturates (e.g., amytal) block electron transfer from the Fe-S centers of Complex I to ubiquinone.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Chemical uncouplers of oxidative phosphorylation (such as 2,4-dinitrophenol, DNP) act by:",
        "o": ["Inhibiting electron transfer through Complex IV", "Dissipating the proton gradient across the inner mitochondrial membrane as heat without halting electron transport", "Binding irreversibly to the active site of ATP synthase", "Blocking oxygen delivery by hemoglobin"],
        "a": 1,
        "e": "Uncouplers are lipid-soluble weak acids that carry H+ protons across the inner mitochondrial membrane, collapsing the proton-motive force; electron flow speeds up and energy dissipates as heat.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Thermogenin (Uncoupling Protein-1, UCP-1) is a physiological uncoupler found abundantly in brown adipose tissue that functions to:",
        "o": ["Synthesize glycogen during torpor", "Generate non-shivering thermogenesis to protect newborn calves, lambs, and piglets from hypothermia", "Increase ATP storage in muscle", "Inhibit fatty acid oxidation during cold stress"],
        "a": 1,
        "e": "UCP-1 uncouples mitochondrial respiration in brown fat, converting proton gradient energy directly into heat (non-shivering thermogenesis), critical for neonatal animal survival.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Oligomycin inhibits oxidative phosphorylation by:",
        "o": ["Binding to the F0 proton channel of ATP synthase, blocking H+ re-entry into the matrix", "Uncoupling proton transport from ATP synthesis", "Inhibiting cytochrome c oxidase", "Oxidizing reduced ubiquinone"],
        "a": 0,
        "e": "Oligomycin binds directly to the F0 subunit of mitochondrial ATP synthase, blocking proton translocation back into the matrix and halting ATP generation.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "According to modern consensus bioenergetics, the P:O ratio (moles of ATP synthesized per pair of electrons) is approximately:",
        "o": ["3.0 for NADH and 2.0 for FADH2", "2.5 for NADH and 1.5 for FADH2", "4.0 for NADH and 2.0 for FADH2", "1.0 for NADH and 1.0 for FADH2"],
        "a": 1,
        "e": "Because Complex I, III, and IV pump 10 H+ per NADH (yielding ~2.5 ATP via ATP synthase) and Complexes III and IV pump 6 H+ per FADH2 (yielding ~1.5 ATP), the modern P:O ratios are 2.5 and 1.5.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Atractyloside is a plant glycoside that inhibits cellular respiration by blocking:",
        "o": ["Complex I", "Adenine Nucleotide Translocase (ADP/ATP translocase)", "Cytochrome c", "ATP synthase F1 head"],
        "a": 1,
        "e": "Atractyloside binds to the outer conformation of the adenine nucleotide translocase in the inner mitochondrial membrane, preventing cytosolic ADP entry and mitochondrial ATP exit.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 3
    },
    {
        "q": "In the respiratory chain, the direction of spontaneous electron flow between redox pairs is determined by:",
        "o": ["Standard reduction potential (from more negative E0' to more positive E0')", "Molecular weight of electron carriers", "Abundance of ATP in the matrix", "Membrane cholesterol concentration"],
        "a": 0,
        "e": "Electrons flow spontaneously down the thermodynamic gradient from redox pairs with standard reduction potentials that are electronegative (NADH, E0' = -0.32 V) toward electropositive acceptors (O2/H2O, E0' = +0.82 V).",
        "topicId": "u2-t07", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Antimycin A blocks mitochondrial electron transport by specifically inhibiting:",
        "o": ["Complex I", "Complex II", "Complex III (Cytochrome bc1 complex)", "Complex IV"],
        "a": 2,
        "e": "Antimycin A binds to the Qi site of Complex III (cytochrome bc1), preventing electron transfer from cytochrome b to ubiquinone in the Q-cycle.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },

    # --- u2-s3: Carbohydrate Metabolism (15 MCQs) ---
    {
        "q": "The committed and primary rate-limiting regulatory enzyme of the glycolytic pathway is:",
        "o": ["Hexokinase", "Phosphofructokinase-1 (PFK-1)", "Aldolase", "Pyruvate kinase"],
        "a": 1,
        "e": "PFK-1 catalyzes the irreversible phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate using ATP; it is allosterically activated by AMP and fructose-2,6-bisphosphate.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "In glycolysis, substrate-level phosphorylation occurs during the reactions catalyzed by:",
        "o": ["Hexokinase and PFK-1", "Phosphoglycerate kinase and Pyruvate kinase", "Glyceraldehyde-3-phosphate dehydrogenase and Enolase", "Aldolase and Triose phosphate isomerase"],
        "a": 1,
        "e": "ATP is directly synthesized by substrate-level transfer of high-energy phosphate in two glycolytic steps: 1,3-BPG -> 3-PG (phosphoglycerate kinase) and PEP -> Pyruvate (pyruvate kinase).",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Sodium fluoride is added to blood samples collected for clinical plasma glucose estimation because it specifically inhibits:",
        "o": ["Hexokinase", "Glucokinase", "Enolase (by removing magnesium as magnesium fluorophosphate)", "Lactate dehydrogenase"],
        "a": 2,
        "e": "Fluoride complexes with magnesium and phosphate to inhibit enolase, stopping red blood cell in vitro glycolysis and preventing false drop in blood glucose readings.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The net yield of ATP produced per molecule of glucose during anaerobic glycolysis in animal erythrocytes is:",
        "o": ["1 ATP", "2 ATP", "4 ATP", "30 ATP"],
        "a": 1,
        "e": "Anaerobic glycolysis consumes 2 ATP (hexokinase, PFK-1) and produces 4 ATP (2 phosphoglycerate kinase, 2 pyruvate kinase), yielding a net of 2 ATP along with 2 lactate.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The multi-enzyme Pyruvate Dehydrogenase (PDH) Complex requires how many distinct coenzymes derived from B-vitamins and metabolic intermediates?",
        "o": ["Two (NAD+ and FAD)", "Three (TPP, Lipoate, CoA)", "Five (TPP, Lipoate, CoASH, FAD, and NAD+)", "Six (including Biotin)"],
        "a": 2,
        "e": "PDH complex consists of E1, E2, and E3 and requires 5 coenzymes: Thiamine pyrophosphate (TPP, Vit B1), Lipoamide, Coenzyme A (pantothenate), FAD (Vit B2), and NAD+ (niacin).",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "Fluoroacetate (found in toxic plants and rat poisons) halts the Krebs cycle because it is converted into fluorocitrate, which powerfully inhibits:",
        "o": ["Citrate synthase", "Aconitase", "Isocitrate dehydrogenase", "Fumarase"],
        "a": 1,
        "e": "Fluoroacetate undergoes 'lethal synthesis' by citrate synthase to form fluorocitrate, which suicide-inhibits aconitase, causing toxic accumulation of citrate.",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "The only substrate-level phosphorylation step in the Citric Acid (Krebs) Cycle is catalyzed by:",
        "o": ["Citrate synthase", "Isocitrate dehydrogenase", "Succinyl-CoA synthetase (succinate thiokinase)", "Malate dehydrogenase"],
        "a": 2,
        "e": "Succinyl-CoA synthetase cleaves the high-energy thioester bond of succinyl-CoA to yield succinate and phosphorylates GDP (or ADP) to GTP (or ATP).",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The Krebs cycle is termed 'amphibolic' because it serves both:",
        "o": ["Oxidative catabolic degradation and biosynthetic anabolic precursor generation", "Aerobic and anaerobic energy generation equally", "Intracellular and extracellular buffering roles", "Proton pumping and ATP hydrolysis"],
        "a": 0,
        "e": "Krebs cycle catabolizes acetyl-CoA to CO2 and energy, while supplying carbon skeletons for anabolism (alpha-ketoglutarate for glutamate, oxaloacetate for aspartate and gluconeogenesis, succinyl-CoA for heme).",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "The primary physiological function of the Hexose Monophosphate (HMP) Shunt in erythrocytes and adipose tissue is to generate:",
        "o": ["Large amounts of ATP via oxidative phosphorylation", "NADPH for reductive biosyntheses / antioxidant protection, and Ribose-5-phosphate for nucleotides", "Lactate to feed the Cori cycle", "Fructose for sperm energy"],
        "a": 1,
        "e": "The HMP shunt (pentose phosphate pathway) produces no ATP directly; it produces NADPH (essential to reduce glutathione in RBCs and synthesize fatty acids) and ribose-5-P.",
        "topicId": "u2-t12", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The rate-limiting and committed enzyme of the HMP Shunt whose deficiency causes hemolytic anemia in animals under oxidative challenge is:",
        "o": ["Transketolase", "Transaldolase", "Glucose-6-Phosphate Dehydrogenase (G6PD)", "6-Phosphogluconate dehydrogenase"],
        "a": 2,
        "e": "G6PD catalyzes the first step of the HMP shunt; lack of G6PD impairs NADPH generation, leaving RBC glutathione oxidized and precipitating Heinz-body hemolytic anemia.",
        "topicId": "u2-t12", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "In high-producing ruminants (dairy cows and sheep), the principal precursor for hepatic gluconeogenesis that provides over 60-70% of endogenous blood glucose is:",
        "o": ["L-Lactate", "Glycerol", "Propionate (volatile fatty acid)", "Acetate"],
        "a": 2,
        "e": "Propionate produced by rumen microbial fermentation is absorbed into portal blood and converted in the liver via propionyl-CoA, methylmalonyl-CoA, and succinyl-CoA to glucose.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "Which enzyme of gluconeogenesis is located inside the mitochondrial matrix and requires biotin and ATP to convert pyruvate to oxaloacetate?",
        "o": ["Phosphoenolpyruvate carboxykinase (PEPCK)", "Pyruvate carboxylase", "Fructose-1,6-bisphosphatase", "Malate dehydrogenase"],
        "a": 1,
        "e": "Pyruvate carboxylase is a mitochondrial biotin-dependent ligase that carboxylates pyruvate into oxaloacetate, allosterically activated by acetyl-CoA.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "Skeletal muscle cannot release free glucose into the systemic circulation during fasting because muscle tissue lacks:",
        "o": ["Glycogen phosphorylase", "Phosphoglucomutase", "Glucose-6-phosphatase", "Debranching enzyme"],
        "a": 2,
        "e": "Glucose-6-phosphatase is present in liver and kidney cortex but completely absent in skeletal muscle; muscle glycogen can only be broken down for internal energy via glycolysis.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "The Cori Cycle (glucose-lactate cycle) involves metabolic cooperation between:",
        "o": ["Brain and kidney", "Skeletal muscle / RBCs (producing lactate) and liver (converting lactate back to glucose)", "Adipose tissue and heart", "Rumen and small intestine"],
        "a": 1,
        "e": "Lactate produced by anaerobic muscle and RBCs enters circulation, is taken up by the liver for gluconeogenesis, and the generated glucose returns to peripheral tissues.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Glycogen phosphorylase, the key regulatory enzyme of glycogenolysis, is activated by phosphorylation mediated by:",
        "o": ["Insulin and protein phosphatase-1", "Phosphorylase kinase stimulated by glucagon, epinephrine, and cAMP", "High concentrations of glucose-6-phosphate", "Excess ATP"],
        "a": 1,
        "e": "Epinephrine and glucagon trigger adenylyl cyclase and PKA, which activates phosphorylase kinase; phosphorylase kinase converts inactive phosphorylase b to active phosphorylase a.",
        "topicId": "u2-t14", "subSection": "u2-s3", "diff": 2
    },

    # --- u2-s4: Lipid Metabolism & Ketogenesis (15 MCQs) ---
    {
        "q": "Triacylglycerol mobilization from adipocytes during negative energy balance is catalyzed by Hormone-Sensitive Lipase (HSL), which is activated by:",
        "o": ["Insulin", "Glucagon and catecholamines via cAMP-dependent Protein Kinase A (PKA)", "High blood glucose", "Excess dietary cholesterol"],
        "a": 1,
        "e": "Glucagon and epinephrine stimulate beta-receptors, increasing cAMP and activating PKA, which phosphorylates and activates HSL to hydrolyze stored triacylglycerols into free fatty acids and glycerol.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "Long-chain fatty acyl-CoA molecules require which carrier system to cross the inner mitochondrial membrane for beta-oxidation?",
        "o": ["Malate-aspartate shuttle", "Carnitine shuttle (CPT-I, translocase, CPT-II)", "Glycerol phosphate shuttle", "Citrate shuttle"],
        "a": 1,
        "e": "Carnitine palmitoyltransferase I (CPT-I) on the outer membrane conjugates fatty acyl-CoA with carnitine; acylcarnitine is translocated across the inner membrane and converted back to acyl-CoA by CPT-II.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The rate-limiting enzyme of mitochondrial fatty acid beta-oxidation that is allosterically inhibited by malonyl-CoA is:",
        "o": ["Acyl-CoA synthetase", "Carnitine Palmitoyltransferase-I (CPT-I)", "Acyl-CoA dehydrogenase", "Thiolase"],
        "a": 1,
        "e": "CPT-I is the gatekeeper of beta-oxidation; when lipogenesis is active, high levels of malonyl-CoA inhibit CPT-I, preventing simultaneous futile oxidation of newly made fatty acids.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Each round of the four-step beta-oxidation spiral of fatty acids generates:",
        "o": ["1 ATP, 1 CO2, and 1 Pyruvate", "1 FADH2, 1 NADH, and 1 Acetyl-CoA (shortened by 2 carbons)", "2 NADPH and 1 Propionyl-CoA", "1 FAD and 1 Acetoacetate"],
        "a": 1,
        "e": "The 4 recurring steps (dehydrogenation by FAD, hydration, dehydrogenation by NAD+, thiolysis with CoASH) release 1 acetyl-CoA, 1 FADH2, and 1 NADH per cycle.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The complete oxidation of one molecule of palmitic acid (16:0) yields a net total of how many ATP molecules under modern counting?",
        "o": ["30 ATP", "106 ATP", "129 ATP", "144 ATP"],
        "a": 1,
        "e": "Palmitate undergoes 7 cycles yielding 7 FADH2 (10.5 ATP), 7 NADH (17.5 ATP), and 8 Acetyl-CoA (80 ATP) = 108 ATP minus 2 high-energy bonds used in activation = 106 net ATP (129 in classical counting).",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "The oxidation of odd-chain fatty acids terminates in the three-carbon compound propionyl-CoA, which is metabolized to succinyl-CoA requiring two B-vitamins:",
        "o": ["Thiamine (B1) and Riboflavin (B2)", "Biotin (B7) and Cobalamin (Vitamin B12)", "Niacin (B3) and Pyridoxine (B6)", "Folate and Pantothenic acid"],
        "a": 1,
        "e": "Propionyl-CoA carboxylase requires Biotin (B7) to form D-methylmalonyl-CoA; methylmalonyl-CoA mutase requires 5'-deoxyadenosylcobalamin (B12) to form succinyl-CoA.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Which ketone body is chemically a true ketone, cannot be utilized for metabolic energy by animal tissues, and is excreted via the breath and urine giving a sweetish fruity odor?",
        "o": ["Acetoacetate", "Beta-hydroxybutyrate", "Acetone", "Acetoacetyl-CoA"],
        "a": 2,
        "e": "Acetone is formed by spontaneous non-enzymatic decarboxylation of acetoacetate; it is volatile, non-metabolizable, and expelled via the lungs in bovine ketosis and diabetic ketoacidosis.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "In high-producing dairy cattle experiencing bovine ketosis, the predominant circulating ketone body in blood and milk is:",
        "o": ["Acetone", "Beta-hydroxybutyrate (BHB)", "Acetoacetate", "Oxaloacetate"],
        "a": 1,
        "e": "Beta-hydroxybutyrate (BHB) is the major circulating ketone body in ruminants; serum BHB > 1.2 to 1.4 mmol/L is diagnostic of subclinical ketosis.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "The rate-limiting and committed enzyme of ketone body synthesis located in liver mitochondria is:",
        "o": ["Thiolase", "Mitochondrial HMG-CoA Synthase", "HMG-CoA Reductase", "Beta-hydroxybutyrate dehydrogenase"],
        "a": 1,
        "e": "Mitochondrial HMG-CoA synthase condenses acetoacetyl-CoA with acetyl-CoA to form 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA); it is the rate-limiting enzyme of ketogenesis.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Although the liver is the exclusive producer of ketone bodies, hepatic tissue cannot utilize ketones as fuel because it lacks:",
        "o": ["Acetoacetate decarboxylase", "Thiophorase (Succinyl-CoA:3-ketoacid CoA transferase)", "Acyl-CoA dehydrogenase", "Thiolase"],
        "a": 1,
        "e": "The liver lacks thiophorase (beta-ketoacyl-CoA transferase), the enzyme that activates acetoacetate to acetoacetyl-CoA using succinyl-CoA; thus ketones must be exported to extrahepatic tissues.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "De novo biosynthesis of fatty acids occurs in which cellular compartment?",
        "o": ["Mitochondrial matrix", "Cytosol", "Lysosome", "Peroxisome"],
        "a": 1,
        "e": "Fatty acid biosynthesis occurs in the cytosol (unlike beta-oxidation, which is mitochondrial), using acetyl-CoA transported from mitochondria via the citrate shuttle.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The rate-limiting and committed regulatory enzyme of fatty acid biosynthesis that converts acetyl-CoA to malonyl-CoA is:",
        "o": ["Fatty Acid Synthase", "Acetyl-CoA Carboxylase (ACC)", "ATP-citrate lyase", "Malic enzyme"],
        "a": 1,
        "e": "Acetyl-CoA Carboxylase (ACC) requires biotin, ATP, and bicarbonate to synthesize malonyl-CoA; it is activated allosterically by citrate and inhibited by palmitoyl-CoA.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The reducing power (NADPH) required for fatty acid biosynthesis is primarily provided by:",
        "o": ["Complex I of the electron transport chain", "The Hexose Monophosphate (HMP) Shunt and Malic Enzyme", "Glycolysis and beta-oxidation", "The Krebs cycle"],
        "a": 1,
        "e": "NADPH for lipogenesis is generated by G6PD and 6-phosphogluconate dehydrogenase in the HMP shunt, complemented by cytoplasmic malic enzyme (converting malate to pyruvate).",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "The primary carbon donor for fatty acid synthesis in the mammary gland and adipose tissue of ruminants is:",
        "o": ["Glucose", "Acetate (rumen volatile fatty acid)", "Fructose", "Glycerol"],
        "a": 1,
        "e": "Ruminants absorb negligible glucose; rumen-derived acetate is the major carbon source for lipogenesis, converted directly to acetyl-CoA by cytosolic acetyl-CoA synthetase.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "The end product released from the eukaryotic multi-enzyme Fatty Acid Synthase (FAS) complex by its thioesterase domain is:",
        "o": ["Acetyl-CoA", "Malonyl-CoA", "Palmitic acid (Palmitate, 16:0)", "Stearic acid (18:0)"],
        "a": 2,
        "e": "FAS synthesizes fatty acids up to 16 carbons; the thioesterase domain specifically cleaves palmitoyl-ACP to release free palmitate (16:0).",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 1
    },

    # --- u2-s5: Protein Metabolism & Urea Cycle (15 MCQs) ---
    {
        "q": "All transamination reactions in amino acid metabolism require which coenzyme derived from vitamin B6?",
        "o": ["Thiamine pyrophosphate (TPP)", "Pyridoxal Phosphate (PLP)", "Biotin", "Flavin adenine dinucleotide (FAD)"],
        "a": 1,
        "e": "Transaminases (aminotransferases) universally require Pyridoxal Phosphate (PLP), forming a Schiff base intermediate to shuttle amino groups to alpha-ketoglutarate.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Which two standard amino acids do NOT participate in transamination and must be degraded by direct deamination?",
        "o": ["Alanine and Aspartate", "Lysine and Threonine", "Glutamate and Glutamine", "Leucine and Isoleucine"],
        "a": 1,
        "e": "Lysine and threonine do not undergo transamination because their keto acids would cyclize into toxic or non-metabolizable products; they are degraded by direct cleavage/deamination.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The major enzyme responsible for oxidative deamination of L-glutamate in mammalian liver mitochondria, releasing free toxic ammonia (NH3), is:",
        "o": ["Glutamate Dehydrogenase (GDH)", "Aspartate aminotransferase", "Glutaminase", "L-Amino acid oxidase"],
        "a": 0,
        "e": "GDH is an allosteric mitochondrial enzyme that uses either NAD+ or NADP+ to convert glutamate into alpha-ketoglutarate and free ammonia (NH3).",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "In animal tissues, ammonia is safely transported from extrahepatic tissues (especially brain and muscle) to the liver in the non-toxic form of:",
        "o": ["Urea", "Glutamine and Alanine", "Uric acid", "Ammonium chloride"],
        "a": 1,
        "e": "Glutamine synthetase traps free NH3 onto glutamate to form non-toxic glutamine (transported to liver/kidney); muscle also uses alanine via the Glucose-Alanine cycle.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The rate-limiting and committed regulatory enzyme of the Urea Cycle located inside liver mitochondria is:",
        "o": ["Ornithine transcarbamoylase (OTC)", "Carbamoyl Phosphate Synthetase I (CPS-I)", "Argininosuccinate synthetase (ASS)", "Arginase"],
        "a": 1,
        "e": "CPS-I synthesizes carbamoyl phosphate from NH4+, HCO3-, and 2 ATP in the mitochondrial matrix; it obligatorily requires N-acetylglutamate (NAG) as an allosteric activator.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The allosteric activator indispensable for the catalytic activity of Carbamoyl Phosphate Synthetase I (CPS-I) is:",
        "o": ["Citrate", "N-Acetylglutamate (NAG)", "Malonyl-CoA", "Succinyl-CoA"],
        "a": 1,
        "e": "N-acetylglutamate (NAG) is synthesized from acetyl-CoA and glutamate by NAG synthase (activated by arginine); without NAG, CPS-I remains completely inactive.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The two nitrogen atoms in a molecule of urea are derived respectively from:",
        "o": ["Two molecules of free ammonia (NH3)", "Free ammonia (NH4+) and the amino group of Aspartate", "Glutamine and Alanine", "Uric acid and Glycine"],
        "a": 1,
        "e": "One nitrogen comes from free ammonia (incorporated into carbamoyl phosphate by CPS-I) and the second nitrogen enters from aspartate (condensed by argininosuccinate synthetase).",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "How many high-energy phosphate bonds (ATP equivalents) are consumed for the synthesis of one molecule of urea?",
        "o": ["One", "Two", "Four (from 3 molecules of ATP)", "Six"],
        "a": 2,
        "e": "CPS-I consumes 2 ATP (yielding 2 ADP + 2 Pi), and Argininosuccinate synthetase consumes 1 ATP (yielding AMP + PPi, where PPi is hydrolyzed to 2 Pi), totaling 4 high-energy bonds.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "Which intermediate of the urea cycle is cleaved by argininosuccinate lyase to release fumarate, linking the urea cycle to the citric acid cycle (Krebs Bicycle)?",
        "o": ["Citrulline", "Argininosuccinate", "Arginine", "Ornithine"],
        "a": 1,
        "e": "Argininosuccinate is cleaved into arginine and fumarate; the fumarate enters the mitochondria and participates in the Krebs cycle (Krebs 'Bicycle' linkage).",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The final cytosolic enzyme of the urea cycle that cleaves L-arginine into urea and regenerates L-ornithine is:",
        "o": ["Arginase", "Ornithine transcarbamoylase", "Urease", "Argininosuccinase"],
        "a": 0,
        "e": "Arginase (a manganese-dependent cytosolic enzyme) hydrolyzes arginine into urea and ornithine; ornithine is re-transported into mitochondria to initiate the next cycle.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Avian species (poultry) and terrestrial reptiles are described as 'uricotelic' because they excrete their excess nitrogenous waste primarily as:",
        "o": ["Urea", "Free ammonia gas", "Uric acid (paste-like insoluble crystals)", "Creatinine"],
        "a": 2,
        "e": "Birds lack a functional urea cycle (lacking mitochondrial CPS-I and arginase) and convert excess amino nitrogen into insoluble uric acid to conserve water.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The amino acid that undergoes decarboxylation to synthesize the powerful inflammatory and allergic mediator histamine is:",
        "o": ["Tryptophan", "Tyrosine", "Histidine", "Glutamate"],
        "a": 2,
        "e": "Histidine is decarboxylated by histidine decarboxylase (requiring PLP) to form histamine, stored in mast cell and basophil granules.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The inhibitory neurotransmitter Gamma-Aminobutyric Acid (GABA) is produced by enzymatic decarboxylation of:",
        "o": ["L-Glutamate", "Glycine", "Aspartate", "Serine"],
        "a": 0,
        "e": "Glutamate decarboxylase (GAD, PLP-dependent) removes the alpha-carboxyl group from L-glutamate to generate the major inhibitory CNS neurotransmitter GABA.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Which purely ketogenic amino acids yield only acetyl-CoA or acetoacetyl-CoA upon catabolism and cannot contribute to gluconeogenesis?",
        "o": ["Alanine and Glycine", "Leucine and Lysine", "Valine and Methionine", "Glutamate and Proline"],
        "a": 1,
        "e": "Leucine and lysine are strictly ketogenic amino acids; their breakdown products cannot be converted into pyruvate or TCA intermediates for glucose synthesis.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The primary cellular organelle responsible for degradation of short-lived and misfolded proteins via ubiquitin tagging is the:",
        "o": ["Lysosome", "26S Proteasome", "Peroxisome", "Endoplasmic reticulum"],
        "a": 1,
        "e": "Misfolded or regulatory proteins are polyubiquitinated by E1, E2, and E3 ubiquitin ligases and targeted to the ATP-dependent 26S proteasome for degradation.",
        "topicId": "u2-t17", "subSection": "u2-s5", "diff": 2
    },

    # --- u2-s6: Nucleic Acid Metabolism & Integration (15 MCQs) ---
    {
        "q": "The committed and rate-limiting step of de novo purine nucleotide biosynthesis is catalyzed by:",
        "o": ["PRPP synthetase", "Glutamine:PRPP Amidotransferase", "Adenylosuccinate synthetase", "IMP dehydrogenase"],
        "a": 1,
        "e": "Glutamine:PRPP amidotransferase transfers an amino group from glutamine to PRPP, forming 5-phosphoribosylamine; it is feedback-inhibited by AMP, GMP, and IMP.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The parent purine nucleotide synthesized de novo from which both AMP and GMP are derived is:",
        "o": ["XMP (Xanthosine monophosphate)", "IMP (Inosine monophosphate)", "CMP (Cytidine monophosphate)", "TMP"],
        "a": 1,
        "e": "Inosine monophosphate (IMP), containing the purine base hypoxanthine, is the branch-point parent nucleotide for the synthesis of AMP (requires GTP) and GMP (requires ATP).",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "In de novo pyrimidine synthesis, the initial committed step in animal cells is catalyzed by:",
        "o": ["Carbamoyl Phosphate Synthetase I (CPS-I)", "Carbamoyl Phosphate Synthetase II (CPS-II)", "Aspartate transcarbamoylase (ATCase)", "Dihydroorotase"],
        "a": 1,
        "e": "Cytosolic CPS-II uses glutamine and HCO3- to produce carbamoyl phosphate; it is inhibited by UTP and activated by PRPP, distinguishing it from mitochondrial CPS-I of the urea cycle.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The final end product of purine catabolism in humans, primates, birds, and Dalmatian dogs is:",
        "o": ["Allantoin", "Uric acid", "Urea", "Ammonia"],
        "a": 1,
        "e": "Xanthine oxidase oxidizes hypoxanthine and xanthine to uric acid. Most mammals convert uric acid to allantoin via hepatic uricase, but Dalmatians lack uricase transport, excreting uric acid.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "In domestic mammals other than primates and Dalmatians (e.g., cattle, horses, normal dogs), uric acid is converted to soluble allantoin by the enzyme:",
        "o": ["Xanthine oxidase", "Urate oxidase (Uricase)", "Urease", "Allantoinase"],
        "a": 1,
        "e": "Hepatic urate oxidase (uricase) catalyzes the oxidative conversion of insoluble uric acid to water-soluble allantoin, preventing purine urolithiasis in most livestock.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The clinical drug allopurinol treats hyperuricemia and gout by competitively inhibiting:",
        "o": ["PRPP synthetase", "Xanthine Oxidase", "Guanase", "Adenosine deaminase"],
        "a": 1,
        "e": "Allopurinol is oxidized by xanthine oxidase to alloxanthine (oxypurinol), which suicide-inhibits xanthine oxidase, lowering uric acid and accumulating soluble hypoxanthine/xanthine.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "Ribonucleotide Reductase, which converts ribonucleotides (NDPs) into deoxyribonucleotides (dNDPs) for DNA synthesis, is active only during which cell cycle phase?",
        "o": ["G0 phase", "S phase (DNA synthesis phase)", "M phase", "G2 phase"],
        "a": 1,
        "e": "Ribonucleotide reductase activity is tightly coupled to the cell cycle, being highly induced in S-phase to supply dNTPs for active DNA replication.",
        "topicId": "u2-t21", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "Thymidylate synthase converts dUMP to dTMP using which coenzyme as a methyl and methylene group donor?",
        "o": ["S-Adenosylmethionine (SAM)", "N5,N10-Methylene-tetrahydrofolate", "Methylcobalamin (B12)", "Biotin"],
        "a": 1,
        "e": "Thymidylate synthase transfers a one-carbon unit from N5,N10-methylene-THF to dUMP, forming dTMP and dihydrofolate (DHF).",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The salvage pathway for purine nucleotide synthesis salvages free purine bases (hypoxanthine and guanine) using the enzyme:",
        "o": ["HGPRT (Hypoxanthine-Guanine Phosphoribosyltransferase)", "Adenine deaminase", "Ribonucleotide reductase", "Purine nucleosidase"],
        "a": 0,
        "e": "HGPRT attaches a ribose-5-phosphate group from PRPP to hypoxanthine (yielding IMP) or guanine (yielding GMP), recycling over 90% of cellular purines.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "In eukaryotic DNA replication, the RNA primers are synthesized by:",
        "o": ["DNA Polymerase beta", "DNA Primase (associated with DNA Polymerase alpha)", "RNA Polymerase II", "DNA Topoisomerase II"],
        "a": 1,
        "e": "DNA polymerase alpha-primase complex synthesizes a short RNA primer (~10 nucleotides) followed by a short stretch of initiator DNA before handing off to processive pol delta or epsilon.",
        "topicId": "u2-t21", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "During transcription in eukaryotic nuclei, mRNA is synthesized by:",
        "o": ["RNA Polymerase I", "RNA Polymerase II", "RNA Polymerase III", "Mitochondrial RNA Polymerase"],
        "a": 1,
        "e": "RNA Polymerase I synthesizes 28S, 18S, and 5.8S rRNAs; RNA Polymerase II synthesizes all protein-coding mRNAs and snRNAs; RNA Polymerase III synthesizes tRNAs and 5S rRNA.",
        "topicId": "u2-t21", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "During prolonged starvation in monogastric animals, the brain adapts to utilize which alternative fuel source for up to 50-70% of its energy requirements?",
        "o": ["Free fatty acids", "Ketone bodies (Acetoacetate and Beta-hydroxybutyrate)", "Amino acids (Leucine)", "Glycerol"],
        "a": 1,
        "e": "Fatty acids cannot cross the blood-brain barrier; during starvation, the brain induces monocarboxylate transporters to utilize circulating ketone bodies, sparing muscle protein breakdown.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "In the well-fed state, elevated blood insulin promotes all of the following biochemical pathways EXCEPT:",
        "o": ["Hepatic glycogenesis", "Adipocyte triacylglycerol synthesis (lipogenesis)", "Hepatic gluconeogenesis", "Glycolytic flux via PFK-1 activation"],
        "a": 2,
        "e": "Insulin is an anabolic hormone that promotes glycogenesis, lipogenesis, and protein synthesis while powerfully SUPPRESSING gluconeogenesis and glycogenolysis.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The primary metabolic fuel utilized by adult mammalian cardiac muscle under resting aerobic conditions is:",
        "o": ["Glucose", "Free long-chain fatty acids (60-70% of energy)", "Ketone bodies exclusively", "L-Glutamine"],
        "a": 1,
        "e": "Cardiac muscle is strictly aerobic and relies predominantly on beta-oxidation of free fatty acids for 60-70% of its ATP generation under physiological conditions.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The key metabolic crossroads molecule connecting carbohydrate, lipid, and amino acid metabolism is:",
        "o": ["Pyruvate and Acetyl-CoA", "Ribose-5-phosphate", "Succinate", "Bilirubin"],
        "a": 0,
        "e": "Pyruvate and Acetyl-CoA sit at the central crossroad: carbohydrates, ketogenic amino acids, and fatty acids converge on acetyl-CoA for oxidation in the Krebs cycle or lipogenesis.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    }
]

tf = [
    # --- u2-s1: Enzymes, Kinetics & Inhibition (8 TF) ---
    {
        "q": "An enzyme accelerates the rate of a chemical reaction by lowering the activation energy barrier without altering the overall standard free energy change (delta G).",
        "a": True,
        "e": "True. Catalysts decrease the free energy of activation (delta G-dagger) required to reach the transition state, without changing initial or final thermodynamic equilibrium states.",
        "topicId": "u2-t01", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "A low numerical value of Km indicates high binding affinity of the enzyme for its substrate.",
        "a": True,
        "e": "True. Because Km is the substrate concentration producing half-maximal velocity, an enzyme that reaches 1/2 Vmax at very low [S] has high affinity for that substrate.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "In competitive enzyme inhibition, increasing the substrate concentration to saturating levels can completely overcome the inhibitory effect and restore Vmax.",
        "a": True,
        "e": "True. Because substrate and competitive inhibitor compete for the same active site, a high enough ratio of [S] displaces the inhibitor, reaching normal Vmax.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Uncompetitive inhibitors bind reversibly to the free enzyme alone prior to substrate attachment.",
        "a": False,
        "e": "False. Uncompetitive inhibitors bind exclusively to the Enzyme-Substrate (ES) complex, decreasing both apparent Vmax and apparent Km in parallel.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "Zymogens (proenzymes) are active enzymes that are converted into inactive storage forms by feedback phosphorylation.",
        "a": False,
        "e": "False. Zymogens are inactive precursors (e.g., pepsinogen, trypsinogen) that require irreversible proteolytic cleavage of a peptide segment to expose their active catalytic center.",
        "topicId": "u2-t01", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Isoenzymes are physically distinct forms of the same enzyme that catalyze the same chemical reaction but differ in amino acid sequence, tissue distribution, and kinetic properties.",
        "a": True,
        "e": "True. Isoenzymes (e.g., LDH1-5, CK-MM/MB/BB) are encoded by different genes or splice variants, enabling organ-specific metabolic tuning and diagnostic utility.",
        "topicId": "u2-t02", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The turnover number (kcat) represents the maximum number of substrate molecules converted to product per active site per unit time.",
        "a": True,
        "e": "True. kcat = Vmax / [Et], representing the catalytic turnover rate of a fully saturated enzyme active center (expressed in sec^-1).",
        "topicId": "u2-t05", "subSection": "u2-s1", "diff": 2
    },
    {
        "q": "Competitive inhibitors cause the Lineweaver-Burk double reciprocal plot to intersect on the y-axis at the same 1/Vmax point as the uninhibited enzyme.",
        "a": True,
        "e": "True. In competitive inhibition, Vmax is unchanged, so 1/Vmax (the y-intercept) remains identical, while the slope (Km/Vmax) increases and the x-intercept (-1/Km) shifts closer to zero.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 2
    },

    # --- u2-s2: Biological Oxidation & ETC (7 TF) ---
    {
        "q": "Complex II (Succinate Dehydrogenase) pumps four protons across the inner mitochondrial membrane into the intermembrane space per pair of electrons transferred.",
        "a": False,
        "e": "False. Complex II does not pump ANY protons across the membrane because the free energy released during succinate-to-Q electron transfer is insufficient to drive proton translocation.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "In the Chemiosmotic model, ATP is synthesized when protons flow back from the intermembrane space into the mitochondrial matrix through the F0-F1 ATP synthase complex.",
        "a": True,
        "e": "True. Proton influx down the electrochemical gradient through the F0 channel drives rotation of the gamma stalk, inducing conformational changes in F1 beta subunits that synthesize ATP.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Chemical uncouplers like 2,4-DNP completely arrest the rate of oxygen consumption in isolated mitochondria.",
        "a": False,
        "e": "False. Uncouplers actually ACCELERATE oxygen consumption and electron flow because respiratory control by the proton gradient is abolished, dissipating energy as uncontrolled heat.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Brown adipose tissue generates heat in newborn lambs and calves because its inner mitochondrial membrane contains thermogenin (UCP-1).",
        "a": True,
        "e": "True. Thermogenin acts as a regulated proton conductor that bypasses ATP synthase, releasing the proton gradient energy purely as non-shivering thermogenesis.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Cyanide poisoning causes histotoxic hypoxia because cyanide binds to the ferric iron (Fe3+) of cytochrome a3 in Complex IV, arresting mitochondrial electron transport.",
        "a": True,
        "e": "True. Cyanide coordinates tightly with cytochrome oxidase heme iron, blocking cellular respiration; blood remains bright red because oxygen cannot be extracted by tissues.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Cytochrome c is an integral transmembrane protein embedded deeply within the inner mitochondrial lipid bilayer.",
        "a": False,
        "e": "False. Cytochrome c is a soluble peripheral protein loosely electrostatic-bound to the outer leaflet of the inner mitochondrial membrane.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 2
    },
    {
        "q": "Phosphoenolpyruvate (PEP) possesses a higher standard free energy of hydrolysis than ATP.",
        "a": True,
        "e": "True. Hydrolysis of PEP releases -61.9 kJ/mol compared to -30.5 kJ/mol for ATP, allowing PEP to drive substrate-level phosphorylation of ADP to ATP.",
        "topicId": "u2-t07", "subSection": "u2-s2", "diff": 2
    },

    # --- u2-s3: Carbohydrate Metabolism (8 TF) ---
    {
        "q": "Glucokinase in the liver has a much higher Km for glucose than hexokinase, allowing the liver to clear large glucose loads only following meals.",
        "a": True,
        "e": "True. Glucokinase has high Km (~10 mM) and is not inhibited by glucose-6-phosphate, functioning effectively during postprandial hyperglycemia to promote hepatic glycogen storage.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "Mature mammalian erythrocytes rely 100% on anaerobic glycolysis for their ATP generation because they lack mitochondria.",
        "a": True,
        "e": "True. Mammalian RBCs lose all mitochondria during maturation; they cannot carry out Krebs cycle or oxidative phosphorylation and depend solely on glycolysis to maintain membrane integrity.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "In high-yielding dairy cattle, propionate is converted directly into ketone bodies by the ruminal epithelium.",
        "a": False,
        "e": "False. Butyrate (and acetate) is converted to ketone bodies (BHB) by ruminal epithelium. Propionate is glucogenic and passes through the portal vein to the liver for gluconeogenesis.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "The Citric Acid Cycle operates under anaerobic conditions in tissues experiencing severe hypoxia.",
        "a": False,
        "e": "False. Krebs cycle requires continuous re-oxidation of NADH and FADH2 by the mitochondrial respiratory chain, which depends on molecular O2; it halts rapidly in anoxia.",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Fructose-2,6-bisphosphate is the most potent allosteric activator of phosphofructokinase-1 (PFK-1) and inhibitor of fructose-1,6-bisphosphatase.",
        "a": True,
        "e": "True. Fructose-2,6-bisphosphate coordinates reciprocal control: high levels stimulate glycolysis (via PFK-1) while turning off gluconeogenesis, preventing a futile cycle.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 2
    },
    {
        "q": "Glucose-6-phosphate dehydrogenase (G6PD) deficiency leaves red blood cells vulnerable to oxidative hemolysis because reduced glutathione (GSH) cannot be regenerated without NADPH.",
        "a": True,
        "e": "True. Glutathione reductase requires NADPH to reduce GSSG to GSH, which neutralizes H2O2; G6PD deficiency impairs NADPH, causing membrane lipid peroxidation and hemolysis.",
        "topicId": "u2-t12", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The Cori cycle shuttles alanine between muscle and liver to eliminate ammonia as urea.",
        "a": False,
        "e": "False. The Cori cycle shuttles LACTATE between muscle/RBCs and liver. The cycle that shuttles alanine is the Glucose-Alanine cycle (Cahill cycle).",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Glycogen breakdown in liver tissue is stimulated by glucagon via cAMP-dependent activation of glycogen phosphorylase.",
        "a": True,
        "e": "True. Glucagon binds hepatic receptors, elevating cAMP and activating PKA, which activates phosphorylase kinase to convert phosphorylase b to active phosphorylase a.",
        "topicId": "u2-t14", "subSection": "u2-s3", "diff": 1
    },

    # --- u2-s4: Lipid Metabolism & Ketogenesis (8 TF) ---
    {
        "q": "Malonyl-CoA, the first intermediate of fatty acid synthesis, acts as an allosteric inhibitor of Carnitine Palmitoyltransferase-I (CPT-I).",
        "a": True,
        "e": "True. This reciprocal regulation prevents newly synthesized fatty acids from immediately entering the mitochondria to be degraded via beta-oxidation.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Ketone bodies are synthesized primarily in the cytosol of adipose tissue cells.",
        "a": False,
        "e": "False. Ketogenesis occurs exclusively inside the MITOCHONDRIAL MATRIX of HEPATOCYTES (liver cells).",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The liver is unable to utilize ketone bodies as an energy source because it lacks the enzyme thiophorase (succinyl-CoA:3-ketoacid CoA transferase).",
        "a": True,
        "e": "True. Thiophorase is required to activate acetoacetate into acetoacetyl-CoA; its absence in hepatocytes prevents the liver from consuming the ketones it manufactures.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Beta-oxidation of odd-chain fatty acids produces acetyl-CoA units and a single final molecule of propionyl-CoA.",
        "a": True,
        "e": "True. Successive cleavage of two-carbon acetyl-CoA units from an odd-carbon fatty acyl chain leaves a terminal 3-carbon propionyl-CoA.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The eukaryotic Fatty Acid Synthase (FAS) complex consists of seven distinct monofunctional enzymes floating freely as soluble monomers in the cytoplasm.",
        "a": False,
        "e": "False. Eukaryotic FAS is a single homodimeric multi-enzyme polypeptide possessing all seven catalytic domains and an acyl carrier protein (ACP) on a single chain.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Insulin inhibits Hormone-Sensitive Lipase (HSL) in adipose tissue by promoting its dephosphorylation via protein phosphatase-1.",
        "a": True,
        "e": "True. Insulin lowers cAMP and activates protein phosphatases, dephosphorylating and inactivating HSL, which suppresses lipolysis and promotes fat storage.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Ruminants utilize blood glucose as the primary carbon substrate for fatty acid synthesis in adipose tissue.",
        "a": False,
        "e": "False. In ruminants, glucose is conserved for lactose and vital tissues; acetate (rumen VFA) is the primary carbon donor for fatty acid biosynthesis.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "Rothera's nitroprusside test detects acetoacetate and acetone in urine and milk, but does not react with beta-hydroxybutyrate.",
        "a": True,
        "e": "True. Rothera's reagent reacts with true ketone groups present in acetoacetate and acetone, yielding a purple ring; beta-hydroxybutyrate has a secondary alcohol group and gives a negative test.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },

    # --- u2-s5: Protein Metabolism & Urea Cycle (7 TF) ---
    {
        "q": "All standard amino acids undergo transamination using alpha-ketoglutarate as the universal amino-group acceptor to form L-glutamate.",
        "a": False,
        "e": "False. Lysine and threonine do NOT undergo transamination. For other amino acids, alpha-ketoglutarate is indeed the predominant amino acceptor.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "Carbamoyl Phosphate Synthetase I (CPS-I) of the urea cycle requires N-acetylglutamate (NAG) as an obligatory positive allosteric activator.",
        "a": True,
        "e": "True. Without NAG, CPS-I is catalytically inactive; NAG levels rise when amino acid concentrations (especially arginine) increase, stimulating urea synthesis.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The synthesis of one molecule of urea consumes a net total of four high-energy phosphate bonds from three ATP molecules.",
        "a": True,
        "e": "True. Two ATP are consumed by CPS-I (2 ADP + 2 Pi) and one ATP by argininosuccinate synthetase (AMP + PPi -> 2 Pi), expending four high-energy bonds.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The urea cycle takes place entirely within the mitochondrial matrix of hepatocytes.",
        "a": False,
        "e": "False. The urea cycle is compartmentalized: the first two steps occur inside mitochondria (CPS-I, OTC), while the remaining three steps occur in the cytosol (ASS, ASL, Arginase).",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Birds and reptiles excrete nitrogen as uric acid because they possess hyperactive mitochondrial arginase in their liver.",
        "a": False,
        "e": "False. Birds are uricotelic specifically because they LACK mitochondrial CPS-I and arginase, rendering them unable to synthesize urea.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "Glutamate dehydrogenase (GDH) can utilize either NAD+ or NADP+ as an electron acceptor during oxidative deamination.",
        "a": True,
        "e": "True. GDH is unique among dehydrogenases in its ability to function with either NAD+ (for oxidative deamination) or NADP+ (for reductive amination).",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "Ubiquitin is a 76-amino-acid polypeptide that covalently tags target proteins for ATP-dependent destruction inside the 26S proteasome.",
        "a": True,
        "e": "True. Ubiquitin attaches to lysine epsilon-amino groups of target proteins via isopeptide bonds, serving as a degradation signal recognized by the 26S proteasome.",
        "topicId": "u2-t17", "subSection": "u2-s5", "diff": 1
    },

    # --- u2-s6: Nucleic Acid Metabolism & Integration (7 TF) ---
    {
        "q": "In de novo purine biosynthesis, the purine ring is constructed atom-by-atom directly onto a pre-existing ribose-5-phosphate scaffold (PRPP).",
        "a": True,
        "e": "True. Unlike pyrimidine synthesis where the ring is assembled before ribose attachment, purine synthesis builds the bicyclic ring directly onto PRPP starting with 5-phosphoribosylamine.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "Normal domestic dogs and cattle convert uric acid into water-soluble allantoin via the enzyme urate oxidase (uricase).",
        "a": True,
        "e": "True. Urate oxidase is active in the liver of domestic mammals, oxidizing uric acid to allantoin; only humans, higher apes, and Dalmatian dogs excrete high amounts of uric acid.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "Carbamoyl Phosphate Synthetase II (CPS-II) is located in the mitochondrial matrix and uses free ammonium ions as its nitrogen source.",
        "a": False,
        "e": "False. CPS-II is CYTOSOLIC and uses GLUTAMINE as its nitrogen donor for pyrimidine biosynthesis (unlike mitochondrial CPS-I which uses free NH4+ for urea synthesis).",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "Allopurinol acts as a suicide inhibitor of xanthine oxidase, reducing serum and urinary uric acid levels.",
        "a": True,
        "e": "True. Xanthine oxidase converts allopurinol to alloxanthine, which binds tightly to the molybdenum active site, arresting further uric acid generation.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "During starvation, the liver accelerates gluconeogenesis while simultaneously stimulating its own fatty acid biosynthesis.",
        "a": False,
        "e": "False. During starvation, glucagon suppresses fatty acid synthesis (by inactivating acetyl-CoA carboxylase) and stimulates gluconeogenesis and beta-oxidation.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "DNA replication in eukaryotic cells proceeds bidirectionally from multiple replication origins along each chromosome.",
        "a": True,
        "e": "True. Eukaryotic linear chromosomes have thousands of replication origins, each firing bidirectionally to replicate massive genomic DNA within S-phase.",
        "topicId": "u2-t21", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "Skeletal muscle can export glucose into systemic circulation to maintain normoglycemia during intense exercise.",
        "a": False,
        "e": "False. Skeletal muscle lacks glucose-6-phosphatase; it cannot convert glucose-6-phosphate to free glucose and consumes all its glycogen internally via glycolysis.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    }
]

fib = [
    # --- u2-s1: Enzymes, Kinetics & Inhibition (8 FIB) ---
    {
        "q": "Enzymes that catalyze the geometric or structural rearrangement within a single molecule are classified under IUBMB Class 5 as _____.",
        "a": ["isomerases", "isomerase"],
        "a_display": "Isomerases",
        "e": "Class 5 Isomerases catalyze racemizations, epimerizations, cis-trans conversions, and intramolecular group transfers (e.g., phosphoglucomutase).",
        "topicId": "u2-t01", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The substrate concentration at which an enzyme-catalyzed reaction achieves exactly half of its maximal velocity is called the _____ constant.",
        "a": ["michaelis", "michaelis constant", "km", "michaelis-menten"],
        "a_display": "Michaelis (Km)",
        "e": "The Michaelis constant (Km) reflects enzyme-substrate affinity under steady-state conditions.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "In competitive enzyme inhibition, the value of Km increases while the value of Vmax remains _____.",
        "a": ["unchanged", "constant", "same"],
        "a_display": "Unchanged (Constant)",
        "e": "Excess substrate outcompetes the competitive inhibitor, allowing the reaction to reach the same maximum velocity (Vmax).",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "In non-competitive enzyme inhibition, the value of Km remains unchanged while the value of Vmax is _____.",
        "a": ["decreased", "reduced", "lowered"],
        "a_display": "Decreased",
        "e": "Non-competitive inhibitors decrease functional enzyme turnover without altering substrate binding affinity, lowering Vmax.",
        "topicId": "u2-t06", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The inactive zymogen precursor of the pancreatic endopeptidase trypsin is termed _____.",
        "a": ["trypsinogen"],
        "a_display": "Trypsinogen",
        "e": "Trypsinogen is secreted by the pancreas and activated in the duodenum by enteropeptidase (enterokinase) via hexapeptide removal.",
        "topicId": "u2-t01", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "One International Unit (IU) of enzyme activity represents the transformation of 1 _____ of substrate per minute.",
        "a": ["micromole", "umol", "micro mole"],
        "a_display": "Micromole (umol)",
        "e": "1 IU = 1 umol of substrate converted per minute under specified standard assay conditions.",
        "topicId": "u2-t05", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "Lactate dehydrogenase (LDH) is composed of four subunits and possesses _____ distinct isoenzyme forms.",
        "a": ["5", "five"],
        "a_display": "5 (Five)",
        "e": "LDH forms five tetrameric isoenzymes (LDH-1 to LDH-5) formed by combinations of H and M polypeptide chains.",
        "topicId": "u2-t02", "subSection": "u2-s1", "diff": 1
    },
    {
        "q": "The double reciprocal plot of 1/v versus 1/[S] is commonly known as the _____-Burk plot.",
        "a": ["lineweaver", "lineweaver-burk", "lineweaver burk"],
        "a_display": "Lineweaver-Burk",
        "e": "The Lineweaver-Burk linear transformation yields a straight line with y-intercept 1/Vmax and x-intercept -1/Km.",
        "topicId": "u2-t04", "subSection": "u2-s1", "diff": 1
    },

    # --- u2-s2: Biological Oxidation & ETC (7 FIB) ---
    {
        "q": "The Chemiosmotic Hypothesis of ATP synthesis in mitochondria was formulated by the British biochemist Peter _____.",
        "a": ["mitchell", "peter mitchell"],
        "a_display": "Mitchell (Peter Mitchell)",
        "e": "Peter Mitchell proposed the chemiosmotic coupling mechanism in 1961 and was awarded the Nobel Prize in 1978.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Complex II of the respiratory chain is identical to the Krebs cycle enzyme _____ dehydrogenase.",
        "a": ["succinate", "succinate dehydrogenase"],
        "a_display": "Succinate dehydrogenase",
        "e": "Succinate dehydrogenase is the only enzyme embedded in the inner mitochondrial membrane that participates in both TCA cycle and ETC.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "The terminal enzyme of the mitochondrial respiratory chain that reduces molecular oxygen to water is cytochrome c _____.",
        "a": ["oxidase", "cytochrome c oxidase"],
        "a_display": "Oxidase (Cytochrome c oxidase)",
        "e": "Complex IV (cytochrome c oxidase) transfers electrons from cytochrome c to O2, forming two water molecules.",
        "topicId": "u2-t08", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "The classic chemical uncoupler 2,4-_____ dissipates the mitochondrial proton gradient as heat.",
        "a": ["dinitrophenol", "dnp", "2,4-dinitrophenol"],
        "a_display": "Dinitrophenol (2,4-DNP)",
        "e": "2,4-DNP acts as a mobile lipophilic proton carrier, shuttling protons across the inner membrane and collapsing the proton-motive force.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "The physiological uncoupling protein present in brown adipose tissue responsible for neonatal non-shivering thermogenesis is _____.",
        "a": ["thermogenin", "ucp-1", "ucp1", "uncoupling protein 1"],
        "a_display": "Thermogenin (UCP-1)",
        "e": "Thermogenin (UCP-1) dissipates the proton gradient into heat to protect newborn calves, lambs, and piglets from hypothermia.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "Cyanide and carbon monoxide block mitochondrial respiration by inhibiting respiratory Complex _____.",
        "a": ["4", "iv", "four"],
        "a_display": "IV (Complex IV)",
        "e": "Cyanide and CO bind to heme a3 and copper centers of Complex IV (cytochrome c oxidase), causing cellular asphyxiation.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 1
    },
    {
        "q": "The antibiotic oligomycin inhibits ATP synthase by binding directly to its _____ subunit channel.",
        "a": ["f0", "fo"],
        "a_display": "F0 (F-zero)",
        "e": "Oligomycin plugs the proton-translocating F0 channel of ATP synthase, arresting both phosphorylation and respiration.",
        "topicId": "u2-t09", "subSection": "u2-s2", "diff": 2
    },

    # --- u2-s3: Carbohydrate Metabolism (8 FIB) ---
    {
        "q": "The committed, rate-limiting enzyme of the glycolytic pathway is phosphofructokinase-_____.",
        "a": ["1", "i", "one"],
        "a_display": "1 (PFK-1)",
        "e": "PFK-1 converts fructose-6-phosphate to fructose-1,6-bisphosphate, representing the primary regulatory checkpoint in glycolysis.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Enolase, an enzyme of glycolysis, is clinically inhibited during blood sample collection by sodium _____.",
        "a": ["fluoride", "naf"],
        "a_display": "Fluoride (Sodium fluoride)",
        "e": "Sodium fluoride inhibits enolase in grey-top blood collection tubes, halting in vitro glycolysis by erythrocytes.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The net ATP yield per glucose molecule metabolized via anaerobic glycolysis to lactate is _____ ATP.",
        "a": ["2", "two"],
        "a_display": "2 (Two)",
        "e": "Anaerobic glycolysis generates 4 ATP by substrate-level phosphorylation and consumes 2 ATP, yielding a net of 2 ATP.",
        "topicId": "u2-t10", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The rate-limiting enzyme of the Hexose Monophosphate Shunt is glucose-6-phosphate _____.",
        "a": ["dehydrogenase", "g6pd"],
        "a_display": "Dehydrogenase (G6PD)",
        "e": "G6PD catalyzes the first step of the pentose phosphate pathway, producing NADPH required to protect RBCs from oxidative stress.",
        "topicId": "u2-t12", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The major volatile fatty acid absorbed from the rumen that serves as the chief gluconeogenic precursor in cattle and sheep is _____.",
        "a": ["propionate", "propionic acid"],
        "a_display": "Propionate",
        "e": "Propionate is converted to succinyl-CoA and provides over 60% of all endogenous blood glucose synthesized in ruminants.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The metabolic cycle that transfers lactate from exercising muscle or RBCs to the liver for glucose synthesis is the _____ cycle.",
        "a": ["cori", "cori cycle"],
        "a_display": "Cori",
        "e": "The Cori cycle (lactic acid cycle) prevents lactic acidosis and recycles lactate carbon into glucose.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "Skeletal muscle cannot export free glucose into blood because it lacks the enzyme glucose-6-_____.",
        "a": ["phosphatase"],
        "a_display": "Phosphatase (Glucose-6-phosphatase)",
        "e": "Glucose-6-phosphatase is absent in muscle; hence muscle glycogen cannot contribute directly to blood glucose.",
        "topicId": "u2-t13", "subSection": "u2-s3", "diff": 1
    },
    {
        "q": "The multi-enzyme Pyruvate Dehydrogenase complex requires _____ distinct cofactors to oxidatively decarboxylate pyruvate to acetyl-CoA.",
        "a": ["5", "five"],
        "a_display": "5 (Five: TPP, Lipoate, CoA, FAD, NAD+)",
        "e": "PDH complex utilizes thiamine pyrophosphate (TPP), lipoic acid, coenzyme A, FAD, and NAD+.",
        "topicId": "u2-t11", "subSection": "u2-s3", "diff": 2
    },

    # --- u2-s4: Lipid Metabolism & Ketogenesis (8 FIB) ---
    {
        "q": "Long-chain fatty acids require the carrier molecule _____ to enter the mitochondrial matrix for beta-oxidation.",
        "a": ["carnitine"],
        "a_display": "Carnitine",
        "e": "Carnitine forms acylcarnitine esters to shuttle activated fatty acids across the impermeable inner mitochondrial membrane.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The complete mitochondrial beta-oxidation of palmitic acid (16:0) produces _____ molecules of acetyl-CoA.",
        "a": ["8", "eight"],
        "a_display": "8 (Eight)",
        "e": "Palmitic acid (16 carbons) undergoes 7 rounds of beta-oxidation, cleaving into 8 two-carbon acetyl-CoA molecules.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The three ketone bodies formed in the animal body are acetoacetate, acetone, and beta-_____.",
        "a": ["hydroxybutyrate", "hydroxybutyric acid", "d-beta-hydroxybutyrate"],
        "a_display": "Hydroxybutyrate (Beta-hydroxybutyrate)",
        "e": "Acetoacetate, beta-hydroxybutyrate, and acetone comprise the three ketone bodies produced by liver mitochondria.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The volatile ketone body excreted via the breath giving a sweet fruity aroma during bovine ketosis is _____.",
        "a": ["acetone"],
        "a_display": "Acetone",
        "e": "Acetone is non-metabolizable and is eliminated through the lungs in expired air and through the skin and kidneys.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The liver cannot utilize ketone bodies for its own energy needs because it lacks the activating enzyme _____.",
        "a": ["thiophorase", "succinyl-coa:3-ketoacid coa transferase", "beta-ketoacyl-coa transferase"],
        "a_display": "Thiophorase (Succinyl-CoA:3-ketoacid CoA transferase)",
        "e": "Thiophorase is absent in liver tissue, forcing liver-derived ketones to be utilized solely by peripheral tissues like muscle and brain.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "The committed rate-limiting enzyme of fatty acid biosynthesis in the cytosol is acetyl-CoA _____.",
        "a": ["carboxylase", "acc"],
        "a_display": "Carboxylase (Acetyl-CoA carboxylase)",
        "e": "Acetyl-CoA carboxylase is a biotin-dependent enzyme that carboxylates acetyl-CoA to malonyl-CoA.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 1
    },
    {
        "q": "The intermediate that allosterically inhibits Carnitine Palmitoyltransferase-I (CPT-I) to shut down beta-oxidation during lipogenesis is _____-CoA.",
        "a": ["malonyl", "malonyl-coa"],
        "a_display": "Malonyl (Malonyl-CoA)",
        "e": "Malonyl-CoA inhibits CPT-I, preventing fatty acid entry into mitochondria during active fatty acid synthesis.",
        "topicId": "u2-t15", "subSection": "u2-s4", "diff": 2
    },
    {
        "q": "In lactating dairy ruminants, the volatile fatty acid that provides the bulk of acetyl units for milk fat synthesis is _____.",
        "a": ["acetate", "acetic acid"],
        "a_display": "Acetate",
        "e": "Acetate produced by cellulolytic rumen microbes is the predominant building block for milk and tissue fat synthesis in ruminants.",
        "topicId": "u2-t16", "subSection": "u2-s4", "diff": 1
    },

    # --- u2-s5: Protein Metabolism & Urea Cycle (7 FIB) ---
    {
        "q": "All transamination reactions in the animal body require the active coenzyme form of vitamin B6 known as _____ phosphate.",
        "a": ["pyridoxal", "plp", "pyridoxal phosphate", "pyridoxal-5-phosphate"],
        "a_display": "Pyridoxal (PLP)",
        "e": "Pyridoxal phosphate (PLP) forms a covalent Schiff base intermediate with amino acids during transamination.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The mitochondrial enzyme that oxidatively deaminates L-glutamate to release free toxic ammonia is glutamate _____.",
        "a": ["dehydrogenase", "gdh"],
        "a_display": "Dehydrogenase (Glutamate dehydrogenase)",
        "e": "Glutamate dehydrogenase (GDH) oxidizes glutamate to alpha-ketoglutarate and NH4+ using NAD+ or NADP+.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The rate-limiting mitochondrial enzyme of the urea cycle is Carbamoyl Phosphate Synthetase _____.",
        "a": ["1", "i", "one"],
        "a_display": "I (CPS-I)",
        "e": "CPS-I synthesizes carbamoyl phosphate inside liver mitochondria and requires N-acetylglutamate as an obligatory activator.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "The obligatory allosteric activator of Carbamoyl Phosphate Synthetase I is N-acetyl_____.",
        "a": ["glutamate", "nag"],
        "a_display": "Glutamate (N-acetylglutamate)",
        "e": "N-acetylglutamate (NAG) binds CPS-I to induce the active conformation required for carbamoyl phosphate formation.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 2
    },
    {
        "q": "The cytosolic enzyme of the urea cycle that cleaves L-arginine into urea and ornithine is _____.",
        "a": ["arginase"],
        "a_display": "Arginase",
        "e": "Arginase is a manganese metalloenzyme that releases urea and regenerates ornithine for another turn of the cycle.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Animals like birds and reptiles that excrete excess nitrogen primarily as uric acid are described as _____.",
        "a": ["uricotelic"],
        "a_display": "Uricotelic",
        "e": "Uricotelic species convert waste nitrogen into semi-solid, insoluble uric acid to minimize evaporative water loss.",
        "topicId": "u2-t19", "subSection": "u2-s5", "diff": 1
    },
    {
        "q": "Histamine, an inflammatory mediator, is synthesized by the enzymatic decarboxylation of the amino acid _____.",
        "a": ["histidine"],
        "a_display": "Histidine",
        "e": "Histidine decarboxylase removes the alpha-carboxyl group from histidine to form histamine.",
        "topicId": "u2-t18", "subSection": "u2-s5", "diff": 1
    },

    # --- u2-s6: Nucleic Acid Metabolism & Integration (7 FIB) ---
    {
        "q": "The activated pentose phosphate donor that serves as the foundation for de novo purine and pyrimidine nucleotide synthesis is _____.",
        "a": ["prpp", "5-phosphoribosyl-1-pyrophosphate", "phosphoribosyl pyrophosphate"],
        "a_display": "PRPP (Phosphoribosyl pyrophosphate)",
        "e": "PRPP synthetase uses ribose-5-phosphate and ATP to synthesize PRPP, the high-energy ribose donor.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The parent purine nucleotide containing hypoxanthine from which AMP and GMP are synthesized is inosine _____.",
        "a": ["monophosphate", "imp"],
        "a_display": "Monophosphate (IMP)",
        "e": "IMP is the branch-point purine intermediate converted to AMP via adenylosuccinate or to GMP via XMP.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The final degradation product of purine catabolism in humans, birds, and Dalmatian dogs is _____ acid.",
        "a": ["uric", "uric acid"],
        "a_display": "Uric (Uric acid)",
        "e": "Uric acid is generated by xanthine oxidase from xanthine; excess levels precipitate as gout or urinary calculi.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The hepatic enzyme that oxidizes uric acid to water-soluble allantoin in normal domestic cattle and dogs is urate _____.",
        "a": ["oxidase", "uricase"],
        "a_display": "Oxidase (Uricase)",
        "e": "Urate oxidase (uricase) converts poorly soluble uric acid to highly soluble allantoin in most mammals.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The anti-hyperuricemic drug that treats gout by inhibiting xanthine oxidase is _____.",
        "a": ["allopurinol"],
        "a_display": "Allopurinol",
        "e": "Allopurinol is metabolized to oxypurinol, which acts as a suicide inhibitor of xanthine oxidase.",
        "topicId": "u2-t20", "subSection": "u2-s6", "diff": 1
    },
    {
        "q": "The enzyme that converts ribonucleotides to deoxyribonucleotides for DNA replication is ribonucleotide _____.",
        "a": ["reductase"],
        "a_display": "Reductase (Ribonucleotide reductase)",
        "e": "Ribonucleotide reductase reduces the 2'-OH of ribose in NDPs to 2'-H to yield dNDPs.",
        "topicId": "u2-t21", "subSection": "u2-s6", "diff": 2
    },
    {
        "q": "The central metabolic organ that maintains systemic glucose homeostasis via both glycogen storage and gluconeogenesis is the _____.",
        "a": ["liver"],
        "a_display": "Liver",
        "e": "The liver functions as the primary metabolic clearinghouse and buffer of circulating fuels in the animal body.",
        "topicId": "u2-t22", "subSection": "u2-s6", "diff": 1
    }
]

if __name__ == "__main__":
    print(f"Unit 2 Loaded: {len(mcq)} MCQ, {len(tf)} TF, {len(fib)} FIB. Total = {len(mcq) + len(tf) + len(fib)}")
