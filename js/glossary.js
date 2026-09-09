// =========================================================
// GLOSSARY — B.V.Sc UG-Level Tooltip Term Dictionary
// Veterinary Biochemistry Studio
// =========================================================
// Usage: glossary.decorate(rootElement) scans rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {
    categories: {
        "General & Physical Biochemistry": [
                "ph",
                "pka",
                "buffer system",
                "henderson-hasselbalch equation",
                "donnan membrane equilibrium",
                "osmolarity",
                "oncotic pressure",
                "zwitterion",
                "isoelectric point",
                "dialysis",
                "biological membrane",
                "fluid mosaic model",
                "active transport",
                "facilitated diffusion",
                "aquaporin"
        ],
        "Carbohydrate Chemistry & Metabolism": [
                "monosaccharide",
                "aldose",
                "ketose",
                "mutarotation",
                "glycosidic bond",
                "benedict test",
                "barfoed test",
                "seliwanoff test",
                "disaccharide",
                "maltose",
                "lactose",
                "sucrose",
                "cellobiose",
                "polysaccharide",
                "glycogen",
                "amylose",
                "amylopectin",
                "cellulose",
                "inulin",
                "chitin",
                "mucopolysaccharide",
                "hyaluronic acid",
                "chondroitin sulfate",
                "heparin",
                "peptidoglycan",
                "glycolysis",
                "hexokinase",
                "glucokinase",
                "phosphofructokinase-1",
                "pyruvate kinase",
                "substrate-level phosphorylation",
                "cori cycle",
                "gluconeogenesis",
                "pyruvate carboxylase",
                "pepck",
                "krebs cycle",
                "citrate synthase",
                "isocitrate dehydrogenase",
                "amphibolic pathway",
                "anaplerotic reaction",
                "hmp shunt",
                "g6pd",
                "nadph",
                "glycogenesis",
                "glycogenolysis",
                "glycogen phosphorylase",
                "glycogen synthase",
                "von gierke disease"
        ],
        "Lipid Chemistry & Metabolism": [
                "fatty acid",
                "saturated fatty acid",
                "unsaturated fatty acid",
                "essential fatty acid",
                "linoleic acid",
                "arachidonic acid",
                "triacylglycerol",
                "saponification number",
                "iodine number",
                "acid value",
                "reichert-meissl number",
                "polenske number",
                "phospholipid",
                "lecithin",
                "cephalin",
                "sphingomyelin",
                "cholesterol",
                "lipoprotein",
                "chylomicron",
                "vldl",
                "ldl",
                "hdl",
                "prostaglandin",
                "thromboxane",
                "leukotriene",
                "cyclooxygenase",
                "beta-oxidation",
                "carnitine shuttle",
                "cpt-1",
                "ketogenesis",
                "ketone bodies",
                "acetoacetate",
                "beta-hydroxybutyrate",
                "acetone",
                "ketosis",
                "bovine ketosis",
                "pregnancy toxaemia",
                "fatty liver syndrome",
                "lipogenesis",
                "fatty acid synthase"
        ],
        "Protein, Amino Acid & Nitrogen Metabolism": [
                "amino acid",
                "essential amino acid",
                "glucogenic amino acid",
                "ketogenic amino acid",
                "aromatic amino acid",
                "peptide bond",
                "primary structure",
                "secondary structure",
                "alpha helix",
                "beta pleated sheet",
                "tertiary structure",
                "quaternary structure",
                "protein denaturation",
                "biuret test",
                "ninhydrin reaction",
                "xanthoproteic test",
                "transamination",
                "alt",
                "ast",
                "deamination",
                "glutamate dehydrogenase",
                "decarboxylation",
                "urea cycle",
                "cps-1",
                "ornithine transcarbamylase",
                "arginase",
                "hyperammonemia",
                "uric acid",
                "gout",
                "bun",
                "creatinine",
                "jaffe reaction"
        ],
        "Enzymology & Biological Oxidation": [
                "enzyme",
                "apoenzyme",
                "holoenzyme",
                "coenzyme",
                "cofactor",
                "prosthetic group",
                "active centre",
                "km",
                "vmax",
                "turnover number",
                "competitive inhibition",
                "non-competitive inhibition",
                "uncompetitive inhibition",
                "suicide inhibition",
                "allosteric enzyme",
                "isoenzyme",
                "biological oxidation",
                "redox potential",
                "electron transport chain",
                "complex i",
                "complex ii",
                "complex iii",
                "complex iv",
                "atp synthase",
                "oxidative phosphorylation",
                "uncoupler",
                "2,4-dinitrophenol",
                "oligomycin",
                "rotenone",
                "cyanide"
        ],
        "Clinical & Analytical Veterinary Biochemistry": [
                "diabetes mellitus",
                "insulin",
                "glucagon",
                "fructosamine",
                "neonatal hypoglycaemia",
                "hyperinsulinism",
                "acute-phase proteins",
                "c-reactive protein",
                "serum amyloid a",
                "haptoglobin",
                "a:g ratio",
                "dysproteinemia",
                "liver function tests",
                "bilirubin",
                "van den bergh reaction",
                "icterus",
                "renal function tests",
                "metabolic acidosis",
                "metabolic alkalosis",
                "respiratory acidosis",
                "respiratory alkalosis",
                "anion gap",
                "fluid therapy",
                "oxidative stress",
                "superoxide dismutase",
                "glutathione peroxidase"
        ],
        "Toxicology & Xenobiotic Detoxification": [
                "xenobiotic",
                "biotransformation",
                "phase i reaction",
                "cytochrome p450",
                "phase ii conjugation",
                "glucuronidation",
                "glutathione s-transferase",
                "feline acetaminophen toxicity"
        ]
},

    terms: {
    "ph": "Negative logarithm of hydrogen ion activity (-log10[H+]); fundamental parameter governing enzymatic ionization, blood homeostasis (7.35-7.45 in mammals), and cellular energetics.",
    "pka": "The negative log of the acid dissociation constant (Ka); the exact pH at which an ionizable group exists in 50% protonated and 50% unprotonated forms.",
    "buffer system": "A solution of a weak acid and its conjugate base that resists changes in pH upon addition of small quantities of acid or alkali; physiological examples include bicarbonate, phosphate, and hemoglobin.",
    "henderson-hasselbalch equation": "Mathematical relationship pH = pKa + log([A-]/[HA]) relating solution pH, acid dissociation constant, and buffer component concentrations; used clinically to evaluate acid-base status.",
    "donnan membrane equilibrium": "Unequal distribution of diffusible ions across a semipermeable membrane when one side contains non-diffusible charged macromolecules (e.g., plasma proteins), establishing transmembrane electrical potential and osmotic gradient.",
    "osmolarity": "Concentration of osmotically active solute particles per litre of solution (Osmol/L); normal mammalian plasma osmolarity is approximately 290-310 mOsm/L.",
    "oncotic pressure": "Colloid osmotic pressure exerted specifically by non-diffusible plasma proteins (predominantly albumin, ~80%) across capillary endothelium, retaining fluid within intravascular space.",
    "zwitterion": "A dipolar molecule containing both positive (e.g., -NH3+) and negative (e.g., -COO-) charges, resulting in net zero charge at its isoelectric point (pI).",
    "isoelectric point": "The characteristic pH at which a molecule or protein carries no net electrical charge (neutral zwitterion) and exhibits minimal solubility and zero electrophoretic mobility.",
    "dialysis": "Separation of small crystalloid solutes from colloidal macromolecules across a semipermeable membrane down a concentration gradient; principle utilized in renal hemodialysis.",
    "biological membrane": "Asymmetric phospholipid bilayer embedded with integral and peripheral proteins, carbohydrates, and cholesterol, regulating selective cellular permeability and signal transduction.",
    "fluid mosaic model": "Thermodynamic membrane model proposed by Singer and Nicolson (1972) describing a viscous two-dimensional fluid lipid bilayer in which proteins freely diffuse laterally.",
    "active transport": "Carrier-mediated movement of solutes across a membrane against electrochemical/concentration gradients, requiring metabolic energy (primary via ATP hydrolysis, e.g., Na+/K+-ATPase; secondary via coupled ion gradients).",
    "facilitated diffusion": "Passive carrier- or channel-mediated transmembrane transport down an electrochemical gradient without direct energy expenditure (e.g., GLUT glucose transporters).",
    "aquaporin": "Specialized integral membrane pore proteins facilitating rapid, highly selective water transport across cell membranes (e.g., AQP2 regulated by ADH in renal collecting ducts).",
    "monosaccharide": "Simplest carbohydrate monomer that cannot be further hydrolyzed into smaller polyhydroxy aldehydes or ketones (e.g., glucose, fructose, ribose).",
    "aldose": "Monosaccharide possessing an aldehyde group (-CHO) at carbon-1 (e.g., D-glucose, D-galactose, D-ribose).",
    "ketose": "Monosaccharide possessing a ketone carbonyl group (C=O) typically at carbon-2 (e.g., D-fructose, dihydroxyacetone).",
    "mutarotation": "Spontaneous change in optical rotation observed when alpha and beta anomers of a reducing sugar equilibrate in aqueous solution via open-chain intermediate.",
    "glycosidic bond": "Covalent acetal or ketal linkage formed between the hemiacetal group of a saccharide and the hydroxyl group of another molecule, releasing water.",
    "benedict test": "Qualitative and semi-quantitative reduction test where reducing sugars reduce cupric ions (Cu2+) in alkaline citrate medium to red cuprous oxide (Cu2O) precipitate upon boiling.",
    "barfoed test": "Diagnostic copper reduction test in mildly acidic medium, distinguishing rapidly reducing monosaccharides (forming red Cu2O precipitate within 3 minutes) from slower disaccharides.",
    "seliwanoff test": "Colorimetric resorcinol reaction specifically differentiating ketohexoses (fructose produces a cherry-red condensation complex within 1 minute) from aldoses.",
    "disaccharide": "Carbohydrate composed of two monosaccharide units joined by a covalent glycosidic bond (e.g., maltose, lactose, sucrose).",
    "maltose": "Reducing disaccharide composed of two D-glucose units linked by an alpha-1,4-glycosidic bond; intermediate product of starch digestion by amylase.",
    "lactose": "Primary disaccharide of milk composed of beta-D-galactose and D-glucose linked by a beta-1,4-glycosidic bond; synthesized in mammary alveolar cells by lactose synthase.",
    "sucrose": "Non-reducing dietary disaccharide composed of alpha-D-glucose and beta-D-fructose linked by an alpha-1,beta-2-glycosidic bond (table sugar).",
    "cellobiose": "Reducing disaccharide consisting of two D-glucose molecules joined by a beta-1,4-glycosidic bond; fundamental repeating subunit of plant cellulose cleaved by ruminal microbial cellulase.",
    "polysaccharide": "High molecular weight polymer of repeating monosaccharide units linked glycosidically, serving structural (cellulose, chitin) or energy storage (glycogen, starch) roles.",
    "glycogen": "Major animal storage homopolysaccharide composed of alpha-D-glucose chains with alpha-1,4 linkages and abundant alpha-1,6 branch points every 8-12 residues, concentrated in liver and skeletal muscle.",
    "amylose": "Unbranched linear component of plant starch comprising D-glucose units linked exclusively by alpha-1,4-glycosidic bonds, adopting a helical coil conformation.",
    "amylopectin": "Branched component of plant starch comprising alpha-1,4-linked D-glucose chains with alpha-1,6 branch points every 24-30 residues.",
    "cellulose": "Insoluble linear structural plant homopolysaccharide of D-glucose units linked by beta-1,4-glycosidic bonds; ruminal microflora ferment cellulose into volatile fatty acids (VFAs).",
    "inulin": "Non-digestible plant storage fructan polymer of beta-2,1-linked fructose units; filtered freely at the glomerulus without tubular secretion or reabsorption, serving as gold standard for GFR estimation.",
    "chitin": "Structural homopolysaccharide composed of N-acetylglucosamine units linked by beta-1,4-glycosidic bonds, forming the tough exoskeleton of arthropods and fungal cell walls.",
    "mucopolysaccharide": "Glycosaminoglycan (GAG); long, unbranched heteropolysaccharide chains of repeating disaccharide units (uronic acid + amino sugar), often sulfated, providing viscoelastic lubrication in connective tissues.",
    "hyaluronic acid": "Non-sulfated glycosaminoglycan composed of D-glucuronic acid and N-acetylglucosamine linked beta-1,3 and beta-1,4, providing shock-absorption in synovial fluid and vitreous humor.",
    "chondroitin sulfate": "Sulfated glycosaminoglycan of D-glucuronic acid and N-acetylgalactosamine sulfate, imparting tensile strength and elasticity to articular cartilage and tendons.",
    "heparin": "Highly sulfated anticoagulant glycosaminoglycan stored within mast cell granules; accelerates antithrombin III inactivation of thrombin and factor Xa.",
    "peptidoglycan": "Murein polymer forming the rigid bacterial cell wall, consisting of alternating beta-1,4-linked NAG and NAM glycan strands cross-linked by short peptide stems.",
    "glycolysis": "Cytosolic catabolic pathway converting one molecule of D-glucose into two molecules of pyruvate with net generation of 2 ATP and 2 NADH.",
    "hexokinase": "Regulatory enzyme catalyzing ATP-dependent phosphorylation of glucose to glucose-6-phosphate in extrahepatic tissues; high affinity (low Km), inhibited by glucose-6-phosphate.",
    "glucokinase": "Liver- and pancreatic beta-cell specific isoenzyme (Hexokinase IV); low affinity (high Km) and high capacity (Vmax), not inhibited by G6P, active during postprandial hyperglycemia.",
    "phosphofructokinase-1": "Rate-limiting and committed-step pacemaker enzyme of glycolysis, converting fructose-6-phosphate to fructose-1,6-bisphosphate; allosterically stimulated by AMP and fructose-2,6-bisphosphate, inhibited by ATP and citrate.",
    "pyruvate kinase": "Terminal glycolytic enzyme transferring phosphate from phosphoenolpyruvate (PEP) to ADP to yield pyruvate and ATP via substrate-level phosphorylation.",
    "substrate-level phosphorylation": "Direct metabolic transfer of a high-energy phosphate group from a phosphorylated reaction intermediate to ADP/GDP, occurring independently of the electron transport chain (e.g., in glycolysis and Krebs cycle).",
    "cori cycle": "Inter-organ metabolic cycle wherein lactate produced by anaerobic glycolysis in muscle/erythrocytes travels to the liver for gluconeogenesis, returning glucose to peripheral tissues.",
    "gluconeogenesis": "Anabolic pathway synthesizing glucose from non-carbohydrate precursors (propionate, lactate, glycerol, amino acids); vital in ruminants which absorb minimal hexose from the GI tract.",
    "pyruvate carboxylase": "Biotin-dependent mitochondrial enzyme catalyzing conversion of pyruvate to oxaloacetate, requiring ATP and allosterically activated by acetyl-CoA; key gluconeogenic and anaplerotic entry step.",
    "pepck": "Phosphoenolpyruvate carboxykinase; rate-limiting gluconeogenic enzyme converting oxaloacetate into phosphoenolpyruvate (PEP) with GTP decarboxylation.",
    "krebs cycle": "Tricarboxylic acid (TCA) cycle / citric acid cycle; mitochondrial central amphibolic metabolic hub oxidizing acetyl-CoA to 2 CO2, generating 3 NADH, 1 FADH2, and 1 GTP per cycle.",
    "citrate synthase": "Pace-setting pacemaker enzyme of the Krebs cycle catalyzing the condensation of acetyl-CoA with oxaloacetate to produce citrate, driven by thioester hydrolysis.",
    "isocitrate dehydrogenase": "Rate-limiting mitochondrial Krebs cycle enzyme catalyzing oxidative decarboxylation of isocitrate to alpha-ketoglutarate with NADH generation; inhibited by high ATP/NADH.",
    "amphibolic pathway": "Metabolic pathway functioning in both catabolism (oxidative energy release) and anabolism (supplying precursor carbon skeletons for biosynthesis), exemplified by the Krebs cycle.",
    "anaplerotic reaction": "Replenishing chemical reaction that synthesizes and feeds four-carbon intermediates back into the catalytic pool of the Krebs cycle (e.g., pyruvate carboxylase forming oxaloacetate).",
    "hmp shunt": "Hexose monophosphate pathway (pentose phosphate shunt); alternative cytosolic glucose pathway producing NADPH for biosynthetic reductions (lipogenesis, antioxidant defense) and ribose-5-phosphate for nucleic acids.",
    "g6pd": "Glucose-6-phosphate dehydrogenase; rate-limiting enzyme of the HMP shunt oxidizing G6P to 6-phosphoglucono-delta-lactone while reducing NADP+ to NADPH; deficiency induces hemolytic crisis under oxidative stress.",
    "nadph": "Reduced nicotinamide adenine dinucleotide phosphate; essential metabolic reducing cofactor driving fatty acid synthesis, cholesterol synthesis, and regeneration of reduced glutathione (GSH).",
    "glycogenesis": "Anabolic pathway converting UDP-glucose into branched glycogen polymers for storage in hepatocytes and myocytes, stimulated by insulin.",
    "glycogenolysis": "Catabolic breakdown of stored glycogen into glucose-1-phosphate (via glycogen phosphorylase) and free glucose, activated by glucagon (liver) and epinephrine (liver and muscle).",
    "glycogen phosphorylase": "Rate-limiting phosphorolytic enzyme of glycogenolysis cleaving alpha-1,4-glucosidic bonds with inorganic phosphate to yield glucose-1-phosphate until 4 units before a branch point.",
    "glycogen synthase": "Key regulatory enzyme of glycogenesis transferring glucosyl residues from UDP-glucose to glycogen primer via alpha-1,4 linkages; active when dephosphorylated by protein phosphatase-1 (stimulated by insulin).",
    "von gierke disease": "Type I glycogen storage disease caused by glucose-6-phosphatase deficiency; causes massive hepatomegaly, severe fasting hypoglycemia, lactic acidosis, and hyperlipidemia.",
    "fatty acid": "Aliphatic monocarboxylic acid with an unbranched hydrocarbon chain (even-numbered carbons in animals); principal constituent of triacylglycerols and membrane phospholipids.",
    "saturated fatty acid": "Fatty acid with no carbon-carbon double bonds along its hydrocarbon tail (e.g., palmitic acid C16:0, stearic acid C18:0); higher melting point and solid at room temperature.",
    "unsaturated fatty acid": "Fatty acid containing one or more double bonds (usually cis conformation in nature), e.g., oleic acid C18:1; confers fluidity to membranes.",
    "essential fatty acid": "Polyunsaturated fatty acid that cannot be synthesized de novo by animal desaturases beyond delta-9 and must be provided in diet (linoleic C18:2, alpha-linolenic C18:3; arachidonic C20:4 strictly essential in cats).",
    "linoleic acid": "Omega-6 essential polyunsaturated fatty acid (18:2 delta-9,12); precursor for arachidonic acid synthesis in most mammals except felines.",
    "arachidonic acid": "Omega-6 polyunsaturated fatty acid (20:4 delta-5,8,11,14); released from membrane phospholipids by phospholipase A2 to serve as primary substrate for eicosanoid biosynthesis; obligate dietary nutrient in cats.",
    "triacylglycerol": "Triglyceride / neutral fat; lipid formed by esterification of glycerol with three fatty acid molecules; principal dense, anhydrous energy reservoir in animal adipose tissue.",
    "saponification number": "Milligrams of KOH required to saponify 1 gram of fat or oil; inversely proportional to the mean molecular weight of constituent fatty acids.",
    "iodine number": "Grams of iodine absorbed by 100 grams of fat or oil; direct quantitative index of the degree of unsaturation (double bonds) present in fatty acid chains.",
    "acid value": "Milligrams of KOH required to neutralize the free fatty acids present in 1 gram of fat; indicator of hydrolytic rancidity during storage.",
    "reichert-meissl number": "Millilitres of 0.1 N KOH required to neutralize steam-volatile, water-soluble fatty acids distilled from 5 grams of saponified fat; characteristically high in butter fat (butyric acid).",
    "polenske number": "Millilitres of 0.1 N KOH required to neutralize steam-volatile, water-insoluble fatty acids (caprylic, capric) from 5 grams of saponified fat; diagnostic for coconut oil adulteration.",
    "phospholipid": "Amphipathic polar lipid consisting of a glycerol or sphingosine backbone esterified to fatty acids and a phosphate group linked to an amino alcohol, forming the architectural matrix of biological bilayers.",
    "lecithin": "Phosphatidylcholine; major structural glycerophospholipid of cell membranes and bile, acting as a potent emulsifier and pulmonary surfactant component (dipalmitoyl lecithin).",
    "cephalin": "Phosphatidylethanolamine / phosphatidylserine; glycerophospholipid prevalent in brain and neural tissue, active in thromboplastin coagulation pathways.",
    "sphingomyelin": "Sphingophospholipid containing sphingosine, a fatty acid in amide linkage (ceramide), and phosphorylcholine; abundant in myelin sheath surrounding myelinated nerve axons.",
    "cholesterol": "Principal animal sterol possessing a cyclopentanoperhydrophenanthrene ring with C-3 beta-OH and C-17 branched aliphatic chain; membrane fluidity buffer and precursor of steroid hormones, bile acids, and vitamin D3.",
    "lipoprotein": "Macromolecular micellar complex of hydrophobic core lipids (triglycerides, cholesteryl esters) surrounded by amphipathic shell (phospholipids, free cholesterol, apolipoproteins) facilitating systemic lipid transport.",
    "chylomicron": "Largest, lowest-density lipoprotein synthesized by intestinal enterocytes to transport absorbed dietary exogenous triacylglycerols via lymphatic lacteals into venous circulation.",
    "vldl": "Very low-density lipoprotein; synthesized in hepatocytes to transport endogenous triacylglycerols to peripheral tissues, where lipoprotein lipase (LPL) hydrolyzes them into free fatty acids.",
    "ldl": "Low-density lipoprotein; cholesterol-rich core remnant of VLDL catabolism that delivers cholesterol to peripheral cells via receptor-mediated endocytosis of apoB-100.",
    "hdl": "High-density lipoprotein; synthesized in liver and intestine; rich in apoA-I, mediates reverse cholesterol transport from peripheral tissues back to the liver for biliary excretion.",
    "prostaglandin": "Biologically active 20-carbon autocrine/paracrine lipid signaling mediator derived from arachidonic acid via cyclooxygenase; regulates vascular tone, gastric mucosal defense, pyrexia, pain, and luteolysis (PGF2alpha).",
    "thromboxane": "Eicosanoid synthesized in platelets via thromboxane synthase (TXA2); potent vasoconstrictor and stimulator of platelet aggregation.",
    "leukotriene": "Lipoxygenase-derived eicosanoid mediator of allergic and inflammatory responses, bronchoconstriction, and neutrophil chemotaxis (LTB4, LTC4, LTD4).",
    "cyclooxygenase": "COX / prostaglandin-endoperoxide synthase; rate-limiting bifunctional enzyme converting arachidonic acid to PGH2; target of NSAIDs (flunixin, meloxicam, carprofen).",
    "beta-oxidation": "Cyclic mitochondrial catabolic pathway that cleaves 2-carbon acetyl-CoA units sequentially from the carboxyl end of fatty acyl-CoA, yielding FADH2, NADH, and acetyl-CoA.",
    "carnitine shuttle": "Transmembrane carrier system utilizing Carnitine Palmitoyltransferase I (CPT-1), carnitine-acylcarnitine translocase, and CPT-2 to transport long-chain acyl-CoAs across the inner mitochondrial membrane.",
    "cpt-1": "Carnitine palmitoyltransferase-1; outer mitochondrial membrane pace-setting enzyme of beta-oxidation; allosterically inhibited by malonyl-CoA to prevent simultaneous fatty acid synthesis and oxidation.",
    "ketogenesis": "Hepatic mitochondrial metabolic pathway converting surplus acetyl-CoA into water-soluble ketone bodies during states of accelerated fatty acid mobilization and oxaloacetate depletion.",
    "ketone bodies": "Acetoacetate, beta-hydroxybutyrate, and acetone; water-soluble circulating fuel substrates exported by the liver to sustain extrahepatic tissues (brain, heart, skeletal muscle) during carbohydrate deprivation.",
    "acetoacetate": "Primary four-carbon ketone body synthesized from acetyl-CoA via HMG-CoA lyase; can spontaneously decarboxylate to acetone or be enzymatically reduced to beta-hydroxybutyrate.",
    "beta-hydroxybutyrate": "Predominant circulating ketone body in ruminants and small animals, formed by NADH-dependent reduction of acetoacetate; key diagnostic biomarker for subclinical/clinical ketosis.",
    "acetone": "Volatile three-carbon ketone formed by non-enzymatic spontaneous decarboxylation of acetoacetate; expired through lungs, imparting a characteristic sweet/fruity breath odor in ketotic animals.",
    "ketosis": "Pathological metabolic state characterized by elevated circulating ketone bodies (hyperketonemia), ketonuria, hypoglycemia, and metabolic acidosis.",
    "bovine ketosis": "Acetonemia; severe metabolic disorder of high-yielding dairy cows during early lactation caused by negative energy balance, excessive adipose lipolysis, hepatic lipidosis, and ketonemia.",
    "pregnancy toxaemia": "Twin lamb disease; acute, frequently fatal metabolic ketosis in ewes carrying multiple fetuses in late gestation, precipitated by energy deficit and inability to meet fetal glucose demand.",
    "fatty liver syndrome": "Hepatic lipidosis; excessive accumulation of triacylglycerols in hepatocytes (>10% wet weight) exceeding the liver export capacity via VLDL, precipitating hepatic failure in dairy cows and cats.",
    "lipogenesis": "De novo enzymatic synthesis of fatty acids from cytosolic acetyl-CoA, occurring primarily in liver (poultry, humans) or adipose tissue (ruminants, pigs), driven by insulin.",
    "fatty acid synthase": "Multifunctional dimeric cytoplasmic enzyme complex with acyl carrier protein (ACP) that sequentially elongates fatty acyl chains by 2 carbons using malonyl-CoA and NADPH, terminating at palmitate.",
    "amino acid": "Organic amphoteric monomer possessing both an amino group (-NH2) and a carboxylic acid group (-COOH) bound to an alpha-carbon, plus a variable distinguishing side chain (R-group).",
    "essential amino acid": "Amino acid that cannot be synthesized de novo by animal cells in quantities sufficient to meet metabolic demands and must be supplied in feed (PVT TIM HALL mnemonic).",
    "glucogenic amino acid": "Amino acid whose carbon skeleton can be converted into pyruvate or Krebs cycle intermediates (alpha-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate) to generate glucose via gluconeogenesis.",
    "ketogenic amino acid": "Amino acid whose catabolism yields acetoacetate or acetyl-CoA directly, unable to contribute to net glucose synthesis (leucine and lysine are purely ketogenic).",
    "aromatic amino acid": "Amino acid containing an aromatic ring side chain: phenylalanine, tyrosine, and tryptophan; absorb ultraviolet light strongly at 280 nm.",
    "peptide bond": "Rigid, planar covalent amide linkage formed between the alpha-carboxyl group of one amino acid and the alpha-amino group of another with loss of water.",
    "primary structure": "Linear, covalent amino acid sequence of a polypeptide chain determined by genetic coding, specifying all higher-order folding patterns.",
    "secondary structure": "Spatial local folding arrangement of polypeptide backbone stabilized by hydrogen bonds between peptide amide and carbonyl groups (alpha-helix, beta-pleated sheets, beta-turns).",
    "alpha helix": "Right-handed coiled secondary structure stabilized by intrachain hydrogen bonds between the C=O of residue n and the N-H of residue n+4 (3.6 residues per turn).",
    "beta pleated sheet": "Extended polypeptide secondary structure stabilized by interchain or intrachain hydrogen bonds between adjacent parallel or antiparallel polypeptide strands.",
    "tertiary structure": "Overall three-dimensional conformation of a single folded polypeptide chain stabilized by hydrophobic interactions, disulfide bonds, salt bridges, and hydrogen bonds.",
    "quaternary structure": "Higher-order spatial association and subunit stoichiometric arrangement of two or more individual polypeptide chains in a multimeric functional protein (e.g., tetrameric hemoglobin).",
    "protein denaturation": "Loss of native three-dimensional tertiary and secondary protein conformation caused by heat, extreme pH, urea, or organic solvents, without cleavage of covalent peptide bonds, causing loss of biological function.",
    "biuret test": "Colorimetric assay where copper ions (Cu2+) in alkaline solution coordinate with peptide bonds (at least 2 peptide linkages) to form a purple-violet coordination complex, measuring total protein.",
    "ninhydrin reaction": "Chromogenic reaction where ninhydrin reacts with free alpha-amino acids to produce a brilliant blue-purple pigment (Ruhemann's purple); yellow with imino acids (proline).",
    "xanthoproteic test": "Diagnostic protein test where nitric acid nitrates activated benzene rings of aromatic amino acids (tyrosine, tryptophan), yielding a yellow derivative turning orange in alkali.",
    "transamination": "Reversible transfer of an alpha-amino group from an amino acid to an alpha-keto acid catalyzed by pyridoxal phosphate (PLP)-dependent aminotransferases, forming a new amino acid and keto acid.",
    "alt": "Alanine aminotransferase (SGPT); cytosolic enzyme catalyzing transamination between alanine and alpha-ketoglutarate; specific diagnostic marker of acute hepatocellular injury in dogs and cats.",
    "ast": "Aspartate aminotransferase (SGOT); mitochondrial and cytosolic enzyme catalyzing transamination between aspartate and alpha-ketoglutarate; marker of hepatocellular and skeletal/cardiac muscle damage across species.",
    "deamination": "Removal of an amino group from an amino acid as free ammonia, most actively catalyzed in hepatocytes by mitochondrial glutamate dehydrogenase (oxidative deamination).",
    "glutamate dehydrogenase": "Key mitochondrial enzyme catalyzing reversible oxidative deamination of glutamate to alpha-ketoglutarate and free ammonia, linking amino acid catabolism with Krebs cycle.",
    "decarboxylation": "Removal of a carboxyl group from an amino acid to form a biogenic amine (e.g., histidine to histamine, tyrosine to dopamine, glutamate to GABA), catalyzed by PLP-dependent decarboxylases.",
    "urea cycle": "Hepatic cyclic metabolic pathway (Krebs-Henseleit cycle) converting toxic free ammonia and bicarbonate into non-toxic urea for renal excretion, consuming 4 high-energy phosphates per turn.",
    "cps-1": "Carbamoyl phosphate synthetase-I; rate-limiting pacemaker enzyme of the mitochondrial urea cycle condensing ammonia and bicarbonate into carbamoyl phosphate; allosterically dependent on N-acetylglutamate.",
    "ornithine transcarbamylase": "Mitochondrial urea cycle enzyme transferring a carbamoyl group to ornithine to form citrulline, which is subsequently transported into the cytosol.",
    "arginase": "Terminal cytosolic urea cycle enzyme exclusively expressed in the liver, hydrolyzing arginine into urea and regenerating ornithine.",
    "hyperammonemia": "Pathological accumulation of neurotoxic free ammonia in the blood (>100 micromol/L), leading to hepatic encephalopathy, seizures, and coma (seen in portosystemic shunts or urea cycle enzyme defects).",
    "uric acid": "Primary purine catabolic end-product in uricotelic species (birds, reptiles) and Dalmatians; insoluble nitrogenous waste excreted in avian urine and feces.",
    "gout": "Pathological deposition of insoluble monosodium urate crystals in articular joints (articular gout) or visceral serosal surfaces (visceral gout) in poultry and reptiles.",
    "bun": "Blood Urea Nitrogen; concentration of nitrogen present in circulating urea (mg/dL); useful biomarker of glomerular filtration rate (prerenal, renal, postrenal azotemia).",
    "creatinine": "Non-protein nitrogenous waste product formed by non-enzymatic spontaneous dehydration of muscle creatine phosphate at a constant rate proportional to muscle mass; filtered freely at the glomerulus, serving as primary diagnostic biomarker of GFR.",
    "jaffe reaction": "Colorimetric assay for creatinine based on its reaction with alkaline picrate to form a red-orange Janovski creatinine-picrate chromogen measured at 505-520 nm.",
    "enzyme": "Biological protein catalyst that dramatically accelerates chemical reaction velocity by lowering the activation energy barrier without being consumed or altering reaction equilibrium.",
    "apoenzyme": "The proteinaceous, catalytically inactive portion of a conjugated enzyme requiring binding of an essential non-protein cofactor or coenzyme to become functionally active.",
    "holoenzyme": "The complete, catalytically active conjugated enzyme complex comprising the protein apoenzyme joined with its required coenzyme or inorganic cofactor.",
    "coenzyme": "Low-molecular-weight organic non-protein molecule, often derived from water-soluble B-vitamins, that participates directly in enzymatic catalysis by transferring chemical groups or electrons (e.g., NAD+, FAD, CoA, PLP).",
    "cofactor": "Non-protein chemical component required for enzyme activity, encompassing inorganic metal ions (e.g., Mg2+, Zn2+, Fe2+) or organic coenzymes.",
    "prosthetic group": "A tightly or covalently bound non-protein cofactor permanently integrated into an enzyme structure (e.g., heme in catalase, biotin in pyruvate carboxylase, FAD in succinate dehydrogenase).",
    "active centre": "Active site; specific 3D cleft or pocket in an enzyme composed of catalytic and substrate-binding amino acid residues where the substrate binds and catalysis occurs.",
    "km": "Michaelis constant; substrate concentration [S] at which reaction velocity reaches exactly half of maximum velocity (Vmax/2); inverse measure of enzyme affinity for its substrate.",
    "vmax": "Maximum theoretical velocity of an enzymatic reaction when all active enzyme sites are fully saturated with substrate at infinite [S].",
    "turnover number": "kcat; catalytic constant; number of substrate molecules converted to product per enzyme active site per unit time when the enzyme is fully saturated.",
    "competitive inhibition": "Reversible inhibition where inhibitor resembles substrate and competes directly for the active site; increases apparent Km without changing Vmax; overcome by high [S].",
    "non-competitive inhibition": "Reversible allosteric inhibition where inhibitor binds to an allosteric site on both free enzyme and ES complex with equal affinity; decreases Vmax without altering Km.",
    "uncompetitive inhibition": "Reversible inhibition where inhibitor binds exclusively to the enzyme-substrate (ES) complex; decreases both Vmax and apparent Km proportionately.",
    "suicide inhibition": "Irreversible mechanism-based enzyme inactivation where the enzyme converts a pseudo-substrate analog into a chemically reactive intermediate that covalently binds and permanently destroys the active site.",
    "allosteric enzyme": "Regulatory multimeric oligomer exhibiting cooperative sigmoidal kinetics, whose catalytic activity is modulated by non-covalent binding of allosteric effectors at secondary allosteric sites.",
    "isoenzyme": "Multiple structural forms of the same catalytic enzyme that catalyze the identical chemical reaction but differ in amino acid sequence, tissue distribution, electrophoretic mobility, and kinetic parameters (e.g., LDH 1-5, CK-BB/MB/MM).",
    "biological oxidation": "Enzymatic dehydrogenation / electron-transfer reactions in aerobic cells by which substrates are oxidized to release metabolic energy, coupled to ATP synthesis.",
    "redox potential": "Standard oxidation-reduction potential (E0'); quantitative measure of the tendency of a redox couple to donate (negative potential) or accept (positive potential) electrons under standard conditions.",
    "electron transport chain": "Mitochondrial respiratory chain; series of four multi-protein electron carrier complexes (Complex I-IV) located in the inner mitochondrial membrane that transfer electrons from NADH/FADH2 to molecular oxygen, generating a proton gradient.",
    "complex i": "NADH-ubiquinone oxidoreductase; large L-shaped respiratory complex that oxidizes NADH, reduces ubiquinone (coenzyme Q), and pumps 4 protons (H+) from matrix to intermembrane space.",
    "complex ii": "Succinate-ubiquinone oxidoreductase (succinate dehydrogenase); membrane-bound Krebs cycle enzyme transferring electrons from succinate via FADH2 to ubiquinone without pumping protons.",
    "complex iii": "Ubiquinol-cytochrome c oxidoreductase; cytochrome bc1 complex operating the Q cycle to transfer electrons from ubiquinol to cytochrome c, pumping 4 protons across the membrane.",
    "complex iv": "Cytochrome c oxidase; terminal respiratory complex containing heme a/a3 and CuA/CuB centers transferring electrons to molecular oxygen to form water, pumping 2 protons.",
    "atp synthase": "Complex V / F0F1-ATP synthase; rotary molecular motor that couples the electrochemical proton-motive force across the inner mitochondrial membrane to condense ADP and Pi into ATP.",
    "oxidative phosphorylation": "Mitochondrial process wherein the free energy released by electron flow along the respiratory chain is utilized by ATP synthase to phosphorylate ADP to ATP (Mitchell's chemiosmotic hypothesis).",
    "uncoupler": "Lipophilic chemical agent or physiological protein (e.g., 2,4-DNP, thermogenin/UCP-1 in brown adipose tissue) that dissipates the proton gradient across the inner mitochondrial membrane as heat without inhibiting electron flow, halting ATP synthesis.",
    "2,4-dinitrophenol": "Prototypical synthetic lipophilic weak acid uncoupler that binds protons in the intermembrane space and diffuses across the inner mitochondrial membrane to release them in the matrix, inducing lethal hyperthermia.",
    "oligomycin": "Macrolide antibiotic inhibitor of ATP synthase that binds the F0 proton channel subunit, blocking proton re-entry and secondarily inhibiting the electron transport chain in coupled mitochondria.",
    "rotenone": "Piscicide and insecticide that specifically blocks electron transfer from iron-sulfur centers of Complex I to ubiquinone, abolishing NADH-linked respiration.",
    "cyanide": "Potent respiratory poison that binds ferric iron (Fe3+) in the heme a3 center of cytochrome c oxidase (Complex IV), irreversibly halting electron transfer and cellular aerobic respiration.",
    "diabetes mellitus": "Endocrine metabolic syndrome caused by absolute insulin deficiency (Type 1, common in dogs) or peripheral insulin resistance with beta-cell dysfunction (Type 2, common in cats), causing chronic hyperglycemia, glucosuria, polydipsia, and polyuria.",
    "insulin": "Anabolic peptide hormone synthesized by pancreatic beta cells; promotes glucose uptake (via GLUT4 translocation in muscle/adipose), glycogenesis, lipogenesis, and protein synthesis while inhibiting gluconeogenesis and lipolysis.",
    "glucagon": "Catabolic peptide hormone secreted by pancreatic alpha cells in response to hypoglycemia; stimulates hepatic glycogenolysis, gluconeogenesis, and lipolysis to elevate blood glucose.",
    "fructosamine": "Stable serum glycated protein complex formed by non-enzymatic ketoamine linkage between glucose and albumin; reflects mean glycemic control over the preceding 2-3 weeks in dogs and cats.",
    "neonatal hypoglycaemia": "Acute, life-threatening drop in blood glucose (<50 mg/dL) in newborn piglets due to poor hepatic glycogen stores, delayed gluconeogenesis, cold stress, and starvation.",
    "hyperinsulinism": "Condition of autonomous, excessive insulin secretion, most commonly caused by a functional pancreatic beta-cell insulinoma in dogs and ferrets, causing profound episodic hypoglycemia and seizures.",
    "acute-phase proteins": "Hepatic blood proteins whose plasma concentrations significantly increase (positive APPs: CRP, SAA, haptoglobin, fibrinogen) or decrease (negative APPs: albumin) in response to pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha).",
    "c-reactive protein": "Major positive acute-phase protein in dogs and pigs that binds phosphocholine on microbial pathogens to activate the classical complement pathway and enhance phagocytosis; rapid biomarker of systemic inflammation.",
    "serum amyloid a": "Major positive acute-phase apolipoprotein in horses, cattle, and cats that rises up to 1000-fold within 24 hours of infection or tissue injury.",
    "haptoglobin": "Positive acute-phase alpha2-globulin that binds free extracellular hemoglobin with high affinity, preventing renal oxidative injury and depriving bacteria of iron; major APP in cattle and sheep.",
    "a:g ratio": "Albumin to globulin ratio in serum; calculated by dividing serum albumin by total globulins (total protein - albumin); low ratio indicates hypoalbuminemia, chronic antigenic stimulation/hyperglobulinemia, or FIP.",
    "dysproteinemia": "Abnormal concentration or proportion of serum protein fractions, including monoclonal gammopathies (multiple myeloma), polyclonal gammopathies (chronic infections, FIP), or panhypoproteinemia.",
    "liver function tests": "Panel of serum clinical assays assessing hepatic synthetic capacity (albumin, BUN, cholesterol, coagulation factors), excretion/cholestasis (bilirubin, ALP, GGT), and integrity (ALT, AST, SDH).",
    "bilirubin": "Yellow tetrapyrrolic bile pigment produced by catabolism of heme from senescent erythrocytes via biliverdin; unconjugated (indirect) form is water-insoluble and bound to albumin; conjugated (direct) form is glucuronidated in hepatocytes.",
    "van den bergh reaction": "Diagnostic diazotization reaction with sulfanilic acid and sodium nitrite; conjugated bilirubin reacts immediately without alcohol ('direct positive'); unconjugated bilirubin reacts only after adding alcohol ('indirect positive').",
    "icterus": "Jaundice; yellow discoloration of sclera, mucous membranes, and skin resulting from hyperbilirubinemia (>2.0 mg/dL), classified as pre-hepatic (hemolytic), hepatic (hepatocellular), or post-hepatic (obstructive).",
    "renal function tests": "Diagnostic biochemical evaluations measuring glomerular filtration rate and tubular integrity, including serum BUN, creatinine, SDMA, urinalysis, and urine specific gravity.",
    "metabolic acidosis": "Acid-base disorder characterized by primary deficit in serum bicarbonate (HCO3-) and decreased blood pH, caused by accumulation of organic acids (ketones, lactate) or excessive bicarbonate loss (severe diarrhea).",
    "metabolic alkalosis": "Acid-base disturbance characterized by primary elevation in serum bicarbonate and increased blood pH, typically caused by abomasal displacement/torsion or severe vomiting with gastric HCl loss.",
    "respiratory acidosis": "Acid-base disorder caused by primary alveolar hypoventilation leading to retention of carbon dioxide (hypercapnia) and carbonic acid accumulation.",
    "respiratory alkalosis": "Acid-base disorder resulting from primary alveolar hyperventilation with excessive elimination of carbon dioxide (hypocapnia), often triggered by hypoxemia, pain, or heat stress.",
    "anion gap": "Calculated parameter ([Na+ + K+] - [Cl- + HCO3-]); represents unmeasured serum anions (albumin, phosphates, sulfates, organic acids); elevated in lactic acidosis, diabetic ketoacidosis, and ethylene glycol poisoning.",
    "fluid therapy": "Intravenous or oral administration of balanced crystalloid or colloid solutions to restore effective circulating volume, correct dehydration, normalize electrolytes, and stabilize acid-base balance.",
    "oxidative stress": "Pathological cellular state where generation of reactive oxygen species (ROS: superoxide, hydroxyl radical, hydrogen peroxide) exceeds the endogenous antioxidant defense capacity, damaging lipids, proteins, and DNA.",
    "superoxide dismutase": "Metalloenzyme (Cu/Zn-SOD in cytosol, Mn-SOD in mitochondria) that dismutates toxic superoxide radicals (O2.-) into hydrogen peroxide and molecular oxygen.",
    "glutathione peroxidase": "Selenium-dependent tetrameric enzyme that reduces hydrogen peroxide and lipid hydroperoxides to water using reduced glutathione (GSH) as electron donor; protects erythrocytes against hemolysis.",
    "xenobiotic": "Foreign chemical substance found within an organism that is not naturally produced by or expected to be present within that organism (e.g., pharmaceuticals, pesticides, feed mycotoxins, plant alkaloids).",
    "biotransformation": "Metabolic conversion of lipophilic xenobiotics into hydrophilic, water-soluble metabolites by enzymatic systems, facilitating renal or biliary excretion.",
    "phase i reaction": "Initial detoxification stage introducing or exposing a functional polar reactive group (-OH, -NH2, -SH, -COOH) through oxidation, reduction, or hydrolysis, predominantly catalyzed by the microsomal cytochrome P450 system.",
    "cytochrome p450": "CYP; superfamily of microsomal membrane-bound b-type hemoprotein monooxygenases residing on hepatic smooth endoplasmic reticulum that transfer one atom of molecular oxygen to a substrate and one to water using NADPH-cytochrome P450 reductase.",
    "phase ii conjugation": "Synthetic detoxification reactions where a Phase I metabolite or parent drug is covalently coupled with an endogenous polar molecule (glucuronide, sulfate, glutathione, glycine) to produce an inactive, highly water-soluble conjugate.",
    "glucuronidation": "Major Phase II conjugation pathway wherein UDP-glucuronosyltransferase (UGT) transfers glucuronic acid from UDP-glucuronic acid to substrates containing hydroxyl, carboxyl, or amino groups.",
    "glutathione s-transferase": "GST; family of Phase II detoxifying enzymes that conjugate reactive electrophilic xenobiotics to the nucleophilic sulfhydryl group of reduced glutathione (GSH), neutralizing toxic metabolites.",
    "feline acetaminophen toxicity": "Fatal toxicosis in cats caused by inherent deficiency in hepatic UDP-glucuronosyltransferase (UGT1A6); paracetamol is shunted to cytochrome P450, generating excessive toxic NAPQI which depletes glutathione, causing severe methemoglobinemia, cyanosis, and hepatic necrosis."
},

    _regex: null,
    _lookup: null,

    _buildIndex() {
        this._lookup = {};
        for (const [term, def] of Object.entries(this.terms)) {
            this._lookup[term.toLowerCase()] = def;
        }
        const escaped = Object.keys(this._lookup)
            .sort((a, b) => b.length - a.length)
            .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        this._regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    },

    _positionTooltip(span) {
        let tip = document.getElementById('gloss-tooltip');
        if (!tip) {
            tip = document.createElement('div');
            tip.id = 'gloss-tooltip';
            tip.className = 'gloss-tooltip';
            tip.setAttribute('role', 'tooltip');
            document.body.appendChild(tip);
        }

        const def = span.dataset.def || '';
        const term = span.textContent.trim();
        const phonetic = span.dataset.phonetic ? `<span class="gloss-phonetic">[${span.dataset.phonetic}]</span>` : '';

        tip.innerHTML = `
            <div class="gloss-tooltip-header">
                <span class="gloss-tooltip-term">${term}</span>
                ${phonetic}
                <button class="gloss-speak-btn" onclick="app.speak('${term.replace(/'/g, "\\'")}'); event.stopPropagation();" title="Listen to pronunciation" aria-label="Pronounce">
                    <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5"/><path d="M17.5 7a7 7 0 0 1 0 10"/></svg>
                </button>
            </div>
            <div class="gloss-tooltip-def">${def}</div>
            <div class="gloss-tooltip-hint">Double-click term to hear pronunciation &bull; View in Library</div>
        `;

        const rect = span.getBoundingClientRect();
        const tipWidth = 320;
        let left = rect.left + (rect.width / 2) - (tipWidth / 2);
        left = Math.max(12, Math.min(left, window.innerWidth - tipWidth - 12));

        tip.style.width = `${tipWidth}px`;
        tip.style.left = `${left}px`;

        tip.classList.add('visible');
        const tipHeight = tip.offsetHeight || 130;

        let top = rect.top - tipHeight - 8;
        if (top < 10) {
            top = rect.bottom + 8;
            tip.classList.add('arrow-top');
            tip.classList.remove('arrow-bottom');
        } else {
            tip.classList.add('arrow-bottom');
            tip.classList.remove('arrow-top');
        }

        tip.style.top = `${top}px`;

        const hide = () => {
            tip.classList.remove('visible');
            span.removeEventListener('mouseleave', hide);
            span.removeEventListener('blur', hide);
        };
        span.addEventListener('mouseleave', hide);
        span.addEventListener('blur', hide);
    },

    decorate(rootElement) {
        if (!rootElement) return;
        if (typeof document === 'undefined' || !document.createTreeWalker || typeof NodeFilter === 'undefined') return;
        if (!this._lookup) this._buildIndex();

        const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'CODE', 'PRE', 'A', 'BUTTON', 'H1', 'H2', 'H3', 'svg', 'SVG']);

        const walker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!this._regex.test(text)) return;
            this._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = this._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                const def = this._lookup[m[0].toLowerCase()] || '';
                span.dataset.def = def;
                span.setAttribute('tabindex', '0');
                span.setAttribute('role', 'button');
                span.setAttribute('aria-label', `Definition of ${m[0]}: ${def}`);

                const onShow = (e) => this._positionTooltip(e.currentTarget);
                span.addEventListener('mouseenter', onShow);
                span.addEventListener('focus', onShow);
                span.addEventListener('touchstart', onShow, { passive: true });

                span.addEventListener('dblclick', (e) => {
                    e.preventDefault();
                    if (window.app && typeof window.app.speak === 'function') {
                        window.app.speak(e.currentTarget.textContent);
                    }
                });

                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }

            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }

            textNode.parentNode.replaceChild(frag, textNode);
        });

        if (!this._scrollHooked) {
            this._scrollHooked = true;
            const reposition = () => {
                const active = document.querySelector('.gloss-term:hover, .gloss-term:focus');
                if (active) this._positionTooltip(active);
            };
            window.addEventListener('scroll', reposition, { passive: true, capture: true });
            window.addEventListener('resize', reposition, { passive: true });
        }
    },

    define(term) {
        if (!this._lookup) this._buildIndex();
        return this._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') {
    window.glossary = glossary;
}
