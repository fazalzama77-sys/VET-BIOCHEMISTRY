# -*- coding: utf-8 -*-
"""
Unit 1 Q&A Bank: General Veterinary Biochemistry
Requirements:
  - 12 Two-mark definitions (marks: 2, type: "define")
  - 8 Five-mark short-answer questions (marks: 5, type: "short" / "diff")
  - 5 Twelve-mark long-answer questions (marks: 12, type: "long")
Total: 25 High-Yield Examination Questions
"""

unit1_qa = [
    # ============================================================
    # 12 TWO-MARK DEFINITION QUESTIONS (marks: 2, type: "define")
    # ============================================================
    {
        "id": "u1-def-01",
        "type": "define",
        "marks": 2,
        "question": "Define Donnan Membrane Equilibrium.",
        "topicId": "u1-t03",
        "answer": "<p><strong>Donnan Membrane Equilibrium (Gibbs-Donnan Equilibrium):</strong> The equilibrium established across a semi-permeable membrane when a non-diffusible charged macromolecule (such as an intracellular polyanionic protein, $\\text{Pr}^-$) is present on one side, resulting in an unequal distribution of diffusible cations and anions between the two compartments.</p><p>At thermodynamic equilibrium, the product of the concentrations of diffusible monovalent cations and anions on one side equals that on the opposite side: $$[\\text{C}^+_1][\\text{A}^-_1] = [\\text{C}^+_2][\\text{A}^-_2]$$</p>",
        "keyPoints": [
            "Presence of non-diffusible polyvalent charged ion on one side of a semi-permeable membrane",
            "Gibbs-Donnan rule: product of diffusible cations and anions is equal in both compartments ($[\\text{Na}^+_1][\\text{Cl}^-_1] = [\\text{Na}^+_2][\\text{Cl}^-_2]$)",
            "Generates an electrical potential difference (Donnan potential) and an osmotic pressure gradient"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "GADVASU 2021"]
    },
    {
        "id": "u1-def-02",
        "type": "define",
        "marks": 2,
        "question": "Define a Buffer Solution and Buffer Capacity.",
        "topicId": "u1-t04",
        "answer": "<p><strong>Buffer Solution:</strong> An aqueous solution containing a mixture of a weak acid and its conjugate base (or a weak base and its conjugate acid) that resists changes in pH upon the addition of small amounts of strong acid or strong alkali.</p><p><strong>Buffer Capacity ($\\beta$ / Van Slyke index):</strong> A quantitative measure of buffer resistance, defined as the number of gram equivalents (or moles) of strong acid or base required to change the pH of one liter of buffer solution by exactly one pH unit.</p>",
        "keyPoints": [
            "Composed of a conjugate weak acid-base pair (e.g., $\\text{H}_2\\text{CO}_3 / \\text{HCO}_3^-$)",
            "Resists pH shift upon addition of small amounts of $\\text{H}^+$ or $\\text{OH}^-$",
            "Buffer capacity is maximal when $\\text{pH} = \\text{p}K_a$, where $[\text{A}^-] = [\\text{HA}]$"
        ],
        "pyq": ["IVRI Annual Exam 2022", "RAJUVAS 2023", "KVAFSU 2021"]
    },
    {
        "id": "u1-def-03",
        "type": "define",
        "marks": 2,
        "question": "State the Henderson-Hasselbalch Equation and give its biological significance.",
        "topicId": "u1-t05",
        "answer": "<p><strong>Henderson-Hasselbalch Equation:</strong> A mathematical expression relating the pH of a solution to the ionization constant ($\\text{p}K_a$) of a weak acid and the ratio of conjugate base to weak acid: $$\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)$$</p><p><strong>Biological Significance:</strong> It is used clinically to determine arterial blood pH, quantify the bicarbonate-to-carbonic acid ratio ($20:1$ at physiological pH 7.40), and evaluate acid-base status in veterinary patients.</p>",
        "keyPoints": [
            "Formula: $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-] / [\\text{HA}])$",
            "At $\\text{pH} = \\text{p}K_a$, ratio $[\\text{A}^-] / [\\text{HA}] = 1$ and buffering capacity is maximal",
            "Applied to plasma bicarbonate buffer: $7.40 = 6.10 + \\log([\\text{HCO}_3^-] / [\\text{dCO}_2])$, yielding a $20:1$ ratio"
        ],
        "pyq": ["IVRI Annual Exam 2024", "WBUAFS 2023", "MAFSU 2022"]
    },
    {
        "id": "u1-def-04",
        "type": "define",
        "marks": 2,
        "question": "Define Epimers and Anomers with examples.",
        "topicId": "u1-t06",
        "answer": "<p><strong>Epimers:</strong> Stereoisomers that differ in the spatial configuration of a hydroxyl ($-\\text{OH}$) group around only one specific asymmetric carbon atom, other than the carbonyl carbon.<br><em>Example:</em> D-Glucose and D-Galactose are C-4 epimers; D-Glucose and D-Mannose are C-2 epimers.</p><p><strong>Anomers:</strong> Cyclic stereoisomers (diastereomers) that differ in configuration only around the hemiacetal or hemiketal carbonyl carbon (anomeric carbon: C-1 in aldoses, C-2 in ketoses).<br><em>Example:</em> $\\alpha$-D-glucopyranose and $\\beta$-D-glucopyranose.</p>",
        "keyPoints": [
            "Epimers differ at a single chiral center other than anomeric carbon (Glucose/Galactose at C-4)",
            "Anomers differ specifically at the hemiacetal/hemiketal anomeric carbon (C-1 in aldoses)",
            "Designated as $\\alpha$-form ($-OH$ opposite to $C_6$) and $\\beta$-form ($-OH$ on same side as $C_6$)"
        ],
        "pyq": ["TANUVAS 2023", "IVRI Annual Exam 2021", "SVVU 2022"]
    },
    {
        "id": "u1-def-05",
        "type": "define",
        "marks": 2,
        "question": "Define Mutarotation and state its biochemical mechanism.",
        "topicId": "u1-t06",
        "answer": "<p><strong>Mutarotation:</strong> The spontaneous change in specific optical rotation observed over time when an optically active monosaccharide is dissolved in water, until reaching a stable equilibrium value.</p><p><strong>Mechanism:</strong> Pure $\\alpha$-D-glucose ($+112.2^\\circ$) or $\\beta$-D-glucose ($+18.7^\\circ$) dissolves and undergoes ring opening into a transient open-chain aldehyde intermediate, followed by re-closure into a dynamic equilibrium mixture of $\\sim 36\\%\\ \\alpha$-anomer, $\\sim 64\\%\\ \\beta$-anomer, and $<0.02\\%$ open-chain form, resulting in a constant specific rotation of $+52.7^\\circ$.</p>",
        "keyPoints": [
            "Spontaneous change in specific optical rotation toward an equilibrium mixture",
            "Caused by reversible interconversion between $\\alpha$- and $\\beta$-anomers via open-chain aldehyde form",
            "Equilibrium rotation of D-glucose is $+52.7^\\circ$ ($36\\%\\ \\alpha$, $64\\%\\ \\beta$)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "LUVAS 2022", "GADVASU 2020"]
    },
    {
        "id": "u1-def-06",
        "type": "define",
        "marks": 2,
        "question": "Define Glycosaminoglycans (Mucopolysaccharides) and name two prominent examples.",
        "topicId": "u1-t09",
        "answer": "<p><strong>Glycosaminoglycans (GAGs / Mucopolysaccharides):</strong> Long, unbranched heteropolysaccharide chains composed of repeating disaccharide units consisting of an amino sugar (D-glucosamine or D-galactosamine) and an acidic sugar (D-glucuronic acid or L-iduronic acid), carrying high negative charges.</p><p><strong>Prominent Examples:</strong><br>1. <strong>Hyaluronic acid:</strong> Non-sulfated GAG present in synovial fluid and vitreous humor; acts as a shock absorber.<br>2. <strong>Heparin:</strong> Highly sulfated intracellular GAG of mast cells; acts as a physiological anticoagulant via antithrombin III.</p>",
        "keyPoints": [
            "Unbranched heteropolysaccharides with repeating [Uronic acid + Hexosamine] disaccharide units",
            "High negative charge density attracts water and cations, imparting high viscosity and compressibility",
            "Examples: Hyaluronic acid (lubricant in joints), Heparin (anticoagulant), Chondroitin sulfate (cartilage)"
        ],
        "pyq": ["IVRI Annual Exam 2022", "RAJUVAS 2021", "KVAFSU 2023"]
    },
    {
        "id": "u1-def-07",
        "type": "define",
        "marks": 2,
        "question": "Define Saponification Number and state its biochemical significance.",
        "topicId": "u1-t11",
        "answer": "<p><strong>Saponification Number (Value):</strong> The number of milligrams of potassium hydroxide ($\\text{KOH}$) required to completely saponify (hydrolyze the ester bonds of) one gram of fat or oil.</p><p><strong>Biochemical Significance:</strong> Saponification number is inversely proportional to the average molecular weight (chain length) of fatty acids in a triacylglycerol. Fats containing short-chain fatty acids (e.g., butter fat, saponification value 220–235) have higher saponification numbers than fats containing long-chain fatty acids.</p>",
        "keyPoints": [
            "Definition: mg of KOH required to saponify 1 g of fat",
            "Inversely proportional to the average molecular weight / carbon chain length of fatty acids",
            "Butter fat has a high saponification value (220–235) due to abundant short-chain butyric acid"
        ],
        "pyq": ["TANUVAS 2023", "IVRI Annual Exam 2021", "WBUAFS 2022"]
    },
    {
        "id": "u1-def-08",
        "type": "define",
        "marks": 2,
        "question": "Define Iodine Number (Value) and its diagnostic utility.",
        "topicId": "u1-t11",
        "answer": "<p><strong>Iodine Number (Value):</strong> The number of grams of iodine absorbed by 100 grams of fat or oil under standardized analytical conditions.</p><p><strong>Diagnostic Utility:</strong> It provides a direct quantitative measure of the degree of unsaturation (number of carbon-carbon double bonds, $-\\text{CH}=\\text{CH}-$) in a lipid. A higher iodine value indicates greater polyunsaturation (e.g., linseed oil $\\sim 175–200$, compared to saturated mutton tallow $\\sim 35–45$).</p>",
        "keyPoints": [
            "Definition: grams of iodine absorbed by 100 g of fat",
            "Directly measures the degree of unsaturation (double bonds)",
            "Differentiates drying oils (high iodine value) from solid animal fats (low iodine value)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "GADVASU 2022", "SVVU 2021"]
    },
    {
        "id": "u1-def-09",
        "type": "define",
        "marks": 2,
        "question": "Define Essential Fatty Acids (EFAs) and explain why cats have a unique requirement for arachidonic acid.",
        "topicId": "u1-t10",
        "answer": "<p><strong>Essential Fatty Acids (EFAs):</strong> Polyunsaturated fatty acids (PUFAs) with double bonds located beyond carbon-9 that cannot be synthesized de novo by mammalian tissues due to lack of $\\Delta^{12}$ and $\\Delta^{15}$ desaturases, and must therefore be supplied preformed in the diet (e.g., Linoleic acid $18:2\\ \\omega\\text{-}6$ and $\\alpha$-Linolenic acid $18:3\\ \\omega\\text{-}3$).</p><p><strong>Feline Requirement:</strong> Domestic cats lack sufficient hepatic $\\Delta^6$-desaturase activity to desaturate linoleic acid into arachidonic acid ($20:4\\ \\omega\\text{-}6$); hence, arachidonic acid is an obligate dietary essential fatty acid in felines.</p>",
        "keyPoints": [
            "PUFAs that mammals cannot synthesize because they lack desaturases beyond carbon-9",
            r"Include linoleic acid ($\omega-6$) and alpha-linolenic acid ($\omega-3$)",
            "Cats have negligible delta-6 desaturase activity, making arachidonic acid strictly essential in feline diets"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2022", "KVAFSU 2023"]
    },
    {
        "id": "u1-def-10",
        "type": "define",
        "marks": 2,
        "question": "Define Isoelectric Point (pI) of an amino acid and state its physical properties at pI.",
        "topicId": "u1-t15",
        "answer": "<p><strong>Isoelectric Point (pI):</strong> The specific pH at which an amino acid (or protein) carries zero net electrical charge, existing predominantly in its dipolar zwitterionic form.</p><p><strong>Physical Properties at pI:</strong><br>1. Net electrical charge is zero, so the molecule does not migrate toward cathode or anode in an electric field.<br>2. Aqueous solubility, buffering capacity, and viscosity are at their minimum, predisposing the protein to precipitation.</p>",
        "keyPoints": [
            "Specific pH where net electric charge of the amino acid / protein is exactly zero",
            "Formula for monoamino-monocarboxylic acids: $\\text{p}I = (\\text{p}K_1 + \\text{p}K_2) / 2$",
            "No migration in electrophoresis; minimum solubility and maximum precipitability"
        ],
        "pyq": ["IVRI Annual Exam 2022", "RAJUVAS 2023", "LUVAS 2021"]
    },
    {
        "id": "u1-def-11",
        "type": "define",
        "marks": 2,
        "question": "Define a Zwitterion with its chemical structure.",
        "topicId": "u1-t15",
        "answer": "<p><strong>Zwitterion (Dipolar Ion):</strong> An electrically neutral chemical species having separate, oppositely charged functional groups within the same molecule. In standard $\\alpha$-amino acids at physiological pH, the basic $\\alpha$-amino group is protonated ($-\\text{NH}_3^+$) while the acidic $\\alpha$-carboxyl group is dissociated ($-\\text{COO}^-$):</p><p>$$\\text{H}_3\\text{N}^+-\\text{CH(R)}-\\text{COO}^-$$</p>",
        "keyPoints": [
            "Dipolar ion carrying both a positive charge ($-\\text{NH}_3^+$) and negative charge ($-\\text{COO}^-$)",
            "Overall net electrical charge equals zero",
            "Possesses high dipole moment, high melting point, and high aqueous solubility"
        ],
        "pyq": ["IVRI Annual Exam 2021", "TANUVAS 2020", "MAFSU 2023"]
    },
    {
        "id": "u1-def-12",
        "type": "define",
        "marks": 2,
        "question": "State Chargaff's Rules of base composition in double-stranded DNA.",
        "topicId": "u1-t17",
        "answer": "<p><strong>Chargaff's Rules:</strong> Formulated by Erwin Chargaff (1950), governing the stoichiometric relationships between nitrogenous bases in native double-stranded DNA (dsDNA):<br>1. The molar ratio of Adenine (A) equals Thymine (T): $[\\text{A}] = [\\text{T}]$, or $[\\text{A}]/[\\text{T}] = 1.0$.<br>2. The molar ratio of Guanine (G) equals Cytosine (C): $[\\text{G}] = [\\text{C}]$, or $[\\text{G}]/[\\text{C}] = 1.0$.<br>3. Total purine bases equal total pyrimidine bases: $[\\text{A}] + [\\text{G}] = [\\text{T}] + [\\text{C}]$, or $(\\text{A}+\\text{G}) / (\\text{T}+\\text{C}) = 1.0$.</p>",
        "keyPoints": [
            "Applies strictly to double-stranded DNA (dsDNA), not single-stranded RNA or ssDNA",
            "Molar percentage of Adenine equals Thymine ($A = T$) and Guanine equals Cytosine ($G = C$)",
            "Sum of purines equals sum of pyrimidines ($A + G = T + C$)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "GADVASU 2021", "SVVU 2023"]
    },

    # ============================================================
    # 8 FIVE-MARK SHORT-ANSWER QUESTIONS (marks: 5, type: "short" / "diff")
    # ============================================================
    {
        "id": "u1-sa-01",
        "type": "short",
        "marks": 5,
        "question": "Describe the Fluid Mosaic Model of biological membranes and explain factors influencing membrane fluidity.",
        "topicId": "u1-t02",
        "answer": "<p><strong>Fluid Mosaic Model:</strong> Proposed by S. J. Singer and G. L. Nicolson (1972), biological membranes are structured as quasi-fluid, two-dimensional solutions of oriented phospholipids arranged in a bilayer with interspersed globular proteins capable of lateral diffusion.</p><p><strong>Key Structural Components:</strong><br>1. <strong>Phospholipid Bilayer:</strong> Amphipathic lipids with hydrophilic polar heads facing aqueous phases and hydrophobic fatty acyl tails forming the non-polar interior ($3.5–5.0\\text{ nm}$ thick).<br>2. <strong>Integral (Intrinsic) Proteins:</strong> Deeply embedded in the hydrophobic core via hydrophobic transmembrane $\\alpha$-helices; extractable only with detergents (e.g., aquaporins, ion channels, transport pumps).<br>3. <strong>Peripheral (Extrinsic) Proteins:</strong> Bound to the outer or inner membrane surface via ionic/hydrogen bonds; easily detached by salt or pH shifts (e.g., spectrin, cytochrome c).<br>4. <strong>Carbohydrates (Glycocalyx):</strong> Oligosaccharides covalently linked to lipids (glycolipids) or proteins (glycoproteins) projecting exclusively on the extracellular surface, functioning in cell-cell recognition.</p><p><strong>Factors Influencing Fluidity:</strong><br>&bull; <strong>Fatty Acid Unsaturation:</strong> Cis-double bonds produce a $30^\\circ$ kink in hydrocarbon chains, preventing tight crystal packing and increasing fluidity.<br>&bull; <strong>Chain Length:</strong> Shorter fatty acyl chains have lower van der Waals interactions and increase fluidity.<br>&bull; <strong>Cholesterol:</strong> Acts as a bidirectional fluidity buffer: restricts hydrocarbon movement at high temperatures (preventing excess fluidity) and prevents crystalline packing at cold temperatures.</p>",
        "keyPoints": [
            "Singer and Nicolson (1972) Fluid Mosaic Model: 2D fluid lipid bilayer with mobile proteins",
            "Integral proteins penetrate hydrophobic core; peripheral proteins loosely attached to surfaces",
            "Lipids and proteins exhibit rapid lateral diffusion, but rare transverse (flip-flop) migration",
            "Fluidity increased by short-chain and cis-unsaturated fatty acids",
            "Cholesterol serves as a physiological bidirectional membrane fluidity buffer"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "KVAFSU 2021"]
    },
    {
        "id": "u1-sa-02",
        "type": "diff",
        "marks": 5,
        "question": "Differentiate between Facilitated Diffusion and Primary Active Transport, detailing the operation of the Na+/K+-ATPase pump.",
        "topicId": "u1-t02",
        "answer": "<p>Membrane transport mechanisms move solutes across the lipid bilayer through specialized protein carriers.</p><p><strong>The $\\text{Na}^+/\\text{K}^+$-ATPase Pump:</strong> An electrogenic P-type ATPase that pumps $3\\text{ Na}^+$ out of the cytosol and $2\\text{ K}^+$ into the cell per molecule of ATP hydrolyzed:<br>1. In conformation $\\text{E}_1$, the pump binds $3\\text{ Na}^+$ with high affinity from the intracellular face.<br>2. ATP phosphorylates an invariant aspartate residue (forming $\\text{E}_1\\text{-P}$), inducing a conformational switch to $\\text{E}_2\\text{-P}$.<br>3. $\\text{E}_2\\text{-P}$ faces the extracellular space, releasing $3\\text{ Na}^+$ and binding $2\\text{ K}^+$.<br>4. Binding of $\\text{K}^+$ triggers dephosphorylation, returning the pump to $\\text{E}_1$ and releasing $2\\text{ K}^+$ into the cytoplasm.<br>5. <em>Inhibitors:</em> Cardiac glycosides (ouabain, digitalis) specifically block the extracellular $\\text{K}^+$-binding site.</p>",
        "table": {
            "title": "Comparison between Facilitated Diffusion and Primary Active Transport",
            "headers": ["Feature", "Facilitated Diffusion", "Primary Active Transport"],
            "rows": [
                ["Direction of Transport", "Down concentration gradient (downhill)", "Against electrochemical gradient (uphill)"],
                ["Energy Requirement", "No ATP required (passive process)", "Direct ATP hydrolysis required"],
                ["Carrier Saturation", "Exhibits saturation kinetics ($V_{max}$)", "Exhibits saturation kinetics ($V_{max}$)"],
                ["Specific Inhibitors", "Inhibited by specific competitive blockers", "Inhibited by metabolic poisons (e.g., ouabain, cyanide)"],
                ["Biological Examples", "GLUT-1, GLUT-4 in muscle and adipose", "$\\text{Na}^+/\\text{K}^+$-ATPase, $\\text{Ca}^{2+}$-ATPase (SERCA)"]
            ]
        },
        "keyPoints": [
            "Facilitated diffusion moves solutes downhill without energy; active transport pumps uphill using ATP",
            "Na+/K+-ATPase is electrogenic: extrudes 3 Na+ and imports 2 K+ per ATP hydrolyzed",
            "Maintains resting membrane potential, cell volume, and secondary active transport gradients",
            "Inhibited specifically by cardiac glycosides (ouabain and digoxin)"
        ],
        "pyq": ["IVRI Annual Exam 2022", "GADVASU 2023", "RAJUVAS 2020"]
    },
    {
        "id": "u1-sa-03",
        "type": "short",
        "marks": 5,
        "question": "Describe the chemical composition, glycosidic linkages, reducing properties, and biological importance of Maltose, Lactose, and Sucrose.",
        "topicId": "u1-t07",
        "answer": "<p>Disaccharides consist of two monosaccharide units joined by a glycosidic bond formed between the hemiacetal carbon of one sugar and a hydroxyl group of another.</p><p><strong>1. Maltose (Malt Sugar):</strong><br>&bull; <em>Composition:</em> Two $\\alpha$-D-glucose molecules linked by an $\\alpha\\text{-}1,4$-glycosidic bond.<br>&bull; <em>Reducing Status:</em> Reducing sugar (C-1 of the second glucose has a free hemiacetal group; forms sunflower-petal osazones).<br>&bull; <em>Importance:</em> Major intermediate produced during starch and glycogen digestion by salivary and pancreatic $\\alpha$-amylase.</p><p><strong>2. Lactose (Milk Sugar):</strong><br>&bull; <em>Composition:</em> $\\beta$-D-galactose and $\\alpha$-D-glucose joined by a $\\beta\\text{-}1,4$-glycosidic bond.<br>&bull; <em>Reducing Status:</em> Reducing sugar (glucose anomeric carbon is free; forms powder-puff / hedgehog osazones).<br>&bull; <em>Importance:</em> Principal carbohydrate of milk (approx. $4.5–5.0\\%$ in cows, $6–7\\%$ in mares); essential source of galactose for neonatal myelin cerebroside synthesis; digested by intestinal brush-border lactase.</p><p><strong>3. Sucrose (Table / Cane Sugar):</strong><br>&bull; <em>Composition:</em> $\\alpha$-D-glucose and $\\beta$-D-fructose linked by an $\\alpha\\text{-}1,\\beta\\text{-}2$-glycosidic bond.<br>&bull; <em>Reducing Status:</em> <strong>Non-reducing sugar</strong> (anomeric carbons of both glucose, C-1, and fructose, C-2, participate in the linkage; gives negative Benedict's test; does not form osazones).<br>&bull; <em>Importance:</em> Major transport carbohydrate in plants; hydrolyzed by sucrase (invertase) to an equimolar reducing mixture of glucose and fructose known as 'invert sugar'.</p>",
        "keyPoints": [
            "Maltose: alpha-D-glucose + alpha-D-glucose via alpha-1,4 bond; reducing sugar",
            "Lactose: beta-D-galactose + D-glucose via beta-1,4 bond; milk carbohydrate; reducing sugar",
            "Sucrose: alpha-D-glucose + beta-D-fructose via alpha-1,beta-2 bond; non-reducing sugar",
            "Reducing sugars possess a free anomeric hemiacetal/hemiketal carbon to reduce Benedict's reagent"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2021", "WBUAFS 2023"]
    },
    {
        "id": "u1-sa-04",
        "type": "diff",
        "marks": 5,
        "question": "Compare Amylose, Amylopectin, and Glycogen in terms of structure, glycosidic linkages, branching, and biological function.",
        "topicId": "u1-t08",
        "answer": "<p>Homopolysaccharides composed exclusively of D-glucose units (glucans) serve as vital energy storage reserves in plants and animals.</p>",
        "table": {
            "title": "Comparison of Storage Polysaccharides",
            "headers": ["Characteristic", "Amylose (Starch)", "Amylopectin (Starch)", "Glycogen (Animal Starch)"],
            "rows": [
                ["Biological Source", "Plant chloroplasts / amyloplasts ($15–20\\%$ of starch)", "Plant storage tubers and grains ($80–85\\%$ of starch)", "Animal liver ($5–10\\%$ by weight) and skeletal muscle ($1–2\\%$)"],
                ["Chain Structure", "Linear, continuous helical unbranched chain", "Branched polymer with compact bush-like structure", "Extensively branched, highly compact globular polymer"],
                ["Glycosidic Linkages", "Only $\\alpha\\text{-}1,4$-glycosidic bonds", "$\\alpha\\text{-}1,4$ linear bonds with $\\alpha\\text{-}1,6$ branch points", "$\\alpha\\text{-}1,4$ linear bonds with dense $\\alpha\\text{-}1,6$ branch points"],
                ["Branching Frequency", "No branching", "Branch points occur every 24 to 30 glucose units", "Branch points occur every 8 to 12 glucose units"],
                ["Iodine Color Reaction", "Deep blue-black helical inclusion complex", "Purple-red / violet color", "Reddish-brown color"],
                ["Digestibility", "Hydrolyzed by $\\alpha$-amylase to maltose and maltotriose", "Hydrolyzed to maltose, maltotriose, and $\\alpha$-limit dextrins", "Rapid phosphorolysis from non-reducing ends via glycogen phosphorylase"]
            ]
        },
        "keyPoints": [
            "Amylose is unbranched with exclusively alpha-1,4 linkages (blue iodine complex)",
            "Amylopectin is branched with alpha-1,6 linkages every 24–30 residues (purple iodine reaction)",
            "Glycogen has dense branching (every 8–12 residues), providing abundant non-reducing ends for rapid glucose mobilization",
            "Liver glycogen buffers blood glucose; muscle glycogen fuels internal muscle contraction"
        ],
        "pyq": ["IVRI Annual Exam 2023", "RAJUVAS 2022", "KVAFSU 2020"]
    },
    {
        "id": "u1-sa-05",
        "type": "short",
        "marks": 5,
        "question": "Describe the biosynthesis, structure, and clinical veterinary reproductive applications of Prostaglandin F2alpha (PGF2alpha).",
        "topicId": "u1-t12",
        "answer": "<p><strong>Structure and Biosynthesis:</strong><br>Prostaglandin $\\text{F}_{2\\alpha}$ ($\\text{PGF}_{2\\alpha}$) is a 20-carbon eicosanoid derivative of arachidonic acid ($20:4\\ \\omega\\text{-}6$). Under hormonal stimulation (oxytocin), Phospholipase $\\text{A}_2$ mobilizes arachidonic acid from membrane phospholipids. Cyclooxygenase (COX-1/COX-2) incorporates two $\\text{O}_2$ molecules to yield endoperoxide $\\text{PGG}_2$, which is reduced by peroxidase to $\\text{PGH}_2$. $\\text{PGH}_2$ is converted by $\\text{PGF}$ synthase into $\\text{PGF}_{2\\alpha}$, characterized by a cyclopentane ring with two cis-hydroxyl groups at C-9 and C-11.</p><p><strong>Veterinary Reproductive Applications:</strong><br>1. <strong>Estrus Synchronization:</strong> In dairy and beef herds, $\\text{PGF}_{2\\alpha}$ (or synthetic analogues like cloprostenol, dinoprost) is administered to induce rapid luteolysis of the functional corpus luteum (CL), causing progesterone to crash and bringing cycling cows into synchronized estrus within 48 to 72 hours.<br>2. <strong>Treatment of Pyometra / Chronic Endometritis:</strong> Induces intense myometrial contractions and evacuates purulent uterine exudate in cattle and bitches.<br>3. <strong>Induction of Parturition / Abortion:</strong> Administered in feedlot heifers or ewes to terminate unwanted pregnancies or induce parturition in sows at day 112–113 of gestation.<br>4. <strong>Luteal Cyst Therapy:</strong> Lyses persistent luteinized follicular cysts to restore normal ovarian cyclicity.</p>",
        "keyPoints": [
            "Synthesized from membrane arachidonic acid via Phospholipase A2 and Cyclooxygenase (COX)",
            "PGF2alpha possesses a cyclopentane ring with two cis-hydroxyl groups at C-9 and C-11",
            "Potent physiological luteolytic agent causing corpus luteum regression in livestock",
            "Used in estrus synchronization, expulsion of mummified fetuses/pyometra, and elective farrowing induction in sows"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2023", "LUVAS 2022"]
    },
    {
        "id": "u1-sa-06",
        "type": "short",
        "marks": 5,
        "question": "Classify Plasma Lipoproteins and explain their composition, apolipoproteins, and metabolic functions.",
        "topicId": "u1-t11",
        "answer": "<p>Lipoproteins are spherical macromolecular complexes composed of a non-polar neutral lipid core (triacylglycerols and cholesteryl esters) surrounded by an amphipathic monolayer of phospholipids, free cholesterol, and apolipoproteins, enabling hydrophobic lipids to circulate in blood plasma.</p><p><strong>Classification and Characteristics:</strong></p><p><strong>1. Chylomicrons:</strong><br>&bull; <em>Density:</em> $<0.95\\text{ g/mL}$ (lowest density, largest size: $75–1200\\text{ nm}$).<br>&bull; <em>Core:</em> $85–90\\%$ dietary (exogenous) triacylglycerol.<br>&bull; <em>Major Apos:</em> Apo B-48 (structural), Apo C-II (activates lipoprotein lipase), Apo E (liver receptor uptake).<br>&bull; <em>Function:</em> Transports dietary lipids from the intestine via lymphatics into blood circulation.</p><p><strong>2. Very Low Density Lipoproteins (VLDL):</strong><br>&bull; <em>Density:</em> $0.95–1.006\\text{ g/mL}$.<br>&bull; <em>Core:</em> $55–65\\%$ endogenous hepatic triacylglycerol.<br>&bull; <em>Major Apos:</em> Apo B-100, Apo C-II, Apo E.<br>&bull; <em>Function:</em> Transports endogenously synthesized triacylglycerol from the liver to peripheral muscle and adipose tissues.</p><p><strong>3. Low Density Lipoproteins (LDL):</strong><br>&bull; <em>Density:</em> $1.006–1.063\\text{ g/mL}$.<br>&bull; <em>Core:</em> High cholesteryl esters ($45–50\\%$ of mass).<br>&bull; <em>Major Apos:</em> Exclusively Apo B-100.<br>&bull; <em>Function:</em> Delivers cholesterol from liver to peripheral tissues via receptor-mediated endocytosis (LDL receptors).</p><p><strong>4. High Density Lipoproteins (HDL):</strong><br>&bull; <em>Density:</em> $1.063–1.210\\text{ g/mL}$ (highest density, smallest size: $5–12\\text{ nm}$).<br>&bull; <em>Core:</em> Rich in protein ($40–55\\%$) and phospholipids.<br>&bull; <em>Major Apos:</em> Apo A-I (activates LCAT), Apo A-II.<br>&bull; <em>Function:</em> Mediates <strong>reverse cholesterol transport</strong>, scavenging excess unesterified cholesterol from peripheral tissues and transporting it to the liver for excretion in bile.</p>",
        "keyPoints": [
            "Classified by density: Chylomicrons < VLDL < IDL < LDL < HDL",
            "Chylomicrons transport exogenous dietary triacylglycerols via Apo B-48 and Apo C-II",
            "VLDL delivers endogenously synthesized hepatic triacylglycerols",
            "LDL is cholesterol-rich and delivers cholesterol to peripheral cells via Apo B-100 receptors",
            "HDL mediates reverse cholesterol transport back to liver via Apo A-I and LCAT"
        ],
        "pyq": ["IVRI Annual Exam 2022", "GADVASU 2021", "SVVU 2023"]
    },
    {
        "id": "u1-sa-07",
        "type": "short",
        "marks": 5,
        "question": "Describe the Primary, Secondary, Tertiary, and Quaternary structural organization of proteins with stabilizing forces.",
        "topicId": "u1-t13",
        "answer": "<p>Proteins exhibit a hierarchical four-tier architectural organization essential for biological function:</p><p><strong>1. Primary Structure:</strong><br>&bull; The unique linear sequence of amino acids joined together by covalent <strong>peptide bonds</strong> ($-\\text{CO}-\\text{NH}-$) from the N-terminal to C-terminal.<br>&bull; Encoded genetically by mRNA; determines higher-order folding patterns.</p><p><strong>2. Secondary Structure:</strong><br>&bull; Regular, periodic spatial folding of the polypeptide backbone stabilized by <strong>hydrogen bonds</strong> between peptide carbonyl oxygens ($-\\text{C}=\\text{O}$) and amide hydrogens ($-\\text{N}-\\text{H}$).<br>&bull; <em>$\\alpha$-Helix:</em> Right-handed helical coil with $3.6$ residues per turn, pitch of $0.54\\text{ nm}$; intra-chain hydrogen bond formed between residue $n$ and $n+4$.<br>&bull; <em>$\\beta$-Pleated Sheet:</em> Fully extended polypeptide chains running parallel or antiparallel, stabilized by inter-strand hydrogen bonds.</p><p><strong>3. Tertiary Structure:</strong><br>&bull; Three-dimensional globular folding of a single polypeptide chain formed by interactions among amino acid side-chain (R) groups.<br>&bull; <em>Stabilizing Forces:</em> Hydrophobic interactions (core burial of non-polar residues), ionic salt bridges, hydrogen bonds, and covalent <strong>disulfide bonds</strong> ($-\\text{S}-\\text{S}-$) between cysteine pairs.</p><p><strong>4. Quaternary Structure:</strong><br>&bull; Spatial arrangement and assembly of two or more separate polypeptide chains (protomers / subunits) into an oligomeric functional protein.<br>&bull; <em>Stabilizing Forces:</em> Non-covalent hydrophobic, ionic, and hydrogen bonds (e.g., tetrameric adult hemoglobin, $\\alpha_2\\beta_2$, with cooperativity).</p>",
        "keyPoints": [
            "Primary: linear amino acid sequence maintained by covalent peptide bonds",
            "Secondary: alpha-helices and beta-sheets stabilized by backbone hydrogen bonds",
            "Tertiary: 3D native globular conformation driven by hydrophobic collapse, salt bridges, and disulfide bonds",
            "Quaternary: multi-subunit oligomeric assembly (e.g., tetrameric hemoglobin)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "RAJUVAS 2021"]
    },
    {
        "id": "u1-sa-08",
        "type": "diff",
        "marks": 5,
        "question": "Compare DNA and RNA in terms of pentose sugar, nitrogenous bases, secondary structure, stability, and major biological functions.",
        "topicId": "u1-t17",
        "answer": "<p>Deoxyribonucleic acid (DNA) and Ribonucleic acid (RNA) are the two master polynucleotide macromolecules of living systems.</p>",
        "table": {
            "title": "Comprehensive Comparison between DNA and RNA",
            "headers": ["Feature", "Deoxyribonucleic Acid (DNA)", "Ribonucleic Acid (RNA)"],
            "rows": [
                ["Pentose Sugar", "2'-Deoxy-D-ribose (lacks oxygen at C-2')", "D-Ribose (possesses 2'-OH hydroxyl group)"],
                ["Pyrimidines", "Cytosine and <strong>Thymine</strong> (5-methyluracil)", "Cytosine and <strong>Uracil</strong> (lacks 5-methyl group)"],
                ["Purines", "Adenine and Guanine", "Adenine and Guanine"],
                ["Strandedness / Structure", "Double-stranded antiparallel right-handed B-helix", "Predominantly single-stranded (forms complex loops and hairpins)"],
                ["Alkaline Stability", "Stable to alkaline hydrolysis (lacks 2'-OH)", "Hydrolyzed rapidly by dilute alkali via 2',3'-cyclic phosphate"],
                ["Chargaff's Rules", "Strictly obeys $[\\text{A}]=[\\text{T}]$ and $[\\text{G}]=[\\text{C}]$", "Does not obey Chargaff's parity rules"],
                ["Major Types", "Nuclear genomic DNA, mitochondrial DNA (mtDNA)", "mRNA (messenger), tRNA (transfer), rRNA (ribosomal)"],
                ["Primary Function", "Permanent storage and transmission of genetic code", "Protein biosynthesis, translation, gene regulation, catalysis (ribozymes)"]
            ]
        },
        "keyPoints": [
            "DNA contains 2-deoxyribose and thymine; RNA contains ribose and uracil",
            "DNA is double-stranded antiparallel; RNA is single-stranded folding into loops",
            "RNA is susceptible to alkaline hydrolysis due to reactive 2'-OH groups",
            "DNA strictly obeys Chargaff's rules; RNA does not",
            "DNA stores genetic information; RNA executes transcription and translation"
        ],
        "pyq": ["IVRI Annual Exam 2024", "KVAFSU 2022", "GADVASU 2020"]
    },

    # ============================================================
    # 5 TWELVE-MARK LONG-ANSWER QUESTIONS (marks: 12, type: "long")
    # ============================================================
    {
        "id": "u1-la-01",
        "type": "long",
        "marks": 12,
        "question": "Discuss the molecular architecture, transport mechanisms, and thermodynamic equilibria of biological membranes. Include detailed accounts of the Singer-Nicolson Fluid Mosaic Model, active vs passive transport systems, the Na+/K+-ATPase pump, and the Gibbs-Donnan Membrane Equilibrium with physiological implications.",
        "topicId": "u1-t02",
        "answer": "<h3>1. Introduction and Chemical Composition</h3><p>Biological membranes define cellular boundaries, compartmentalize organelles, and maintain electrochemical gradients indispensable for animal life. Typical mammalian plasma membranes consist of $\\sim 40–50\\%$ lipids, $\\sim 45–50\\%$ proteins, and $\\sim 5–10\\%$ carbohydrates by mass.</p><h3>2. The Singer and Nicolson Fluid Mosaic Model (1972)</h3><p>&bull; <strong>Matrix:</strong> The membrane is a quasi-fluid, two-dimensional liquid bilayer of amphipathic phospholipids and glycolipids. Hydrophilic zwitterionic polar heads orient outward contacting intra- and extracellular aqueous environments; hydrophobic fatty acyl hydrocarbon tails face inward, excluding water.</p><p>&bull; <strong>Membrane Proteins:</strong><br>1. <em>Integral (Intrinsic) Proteins:</em> Spanning or embedded within the bilayer via hydrophobic $\\alpha$-helical domains (e.g., glycophorin, SGLT-1, rhodopsin); extractable only with organic solvents or detergents.<br>2. <em>Peripheral (Extrinsic) Proteins:</em> Loosely bound to the hydrophilic surface via electrostatic interactions and hydrogen bonds (e.g., spectrin, ankyrin, cytochrome c); released by mild shifts in ionic strength or pH.</p><p>&bull; <strong>Dynamics:</strong> Lipids and proteins undergo rapid lateral diffusion ($1–2\\ \\mu\\text{m/s}$) and rotational motion. Transverse ('flip-flop') diffusion across leaflets is thermodynamically restricted and occurs only via ATP-dependent phospholipid translocases (flippases, floppases, and scramblases).</p><h3>3. Classification of Membrane Transport Mechanisms</h3><p><strong>A. Passive Transport (Downhill):</strong><br>1. <em>Simple Diffusion:</em> Unassisted movement of non-polar, lipophilic solutes ($\\text{O}_2, \\text{CO}_2, \\text{N}_2$, steroid hormones) directly through the lipid bilayer, obeying Fick's First Law ($J = -P\\Delta C$).<br>2. <em>Facilitated Diffusion:</em> Solutes move down their electrochemical gradient via transmembrane channels (aquaporins, ion channels) or carrier uniporters (GLUT-1 to GLUT-5) without consuming metabolic energy; exhibits saturation kinetics ($V_{max}$) and specific inhibition.</p><p><strong>B. Active Transport (Uphill):</strong><br>1. <em>Primary Active Transport:</em> Directly couples the hydrolysis of ATP to solute movement against an electrochemical gradient.<br>2. <em>Secondary Active Transport:</em> Couples the uphill movement of a solute to the downhill movement of an ion (typically $\\text{Na}^+$ or $\\text{H}^+$) whose gradient was pre-established by a primary active pump:<br>&bull; <strong>Symport (Cotransport):</strong> Both solutes move in the same direction (e.g., SGLT-1 transport of $1\\text{ glucose} + 2\\text{ Na}^+$ into intestinal enterocytes).<br>&bull; <strong>Antiport (Counter-transport):</strong> Solutes move in opposite directions (e.g., $\\text{Na}^+/\\text{Ca}^{2+}$ exchanger, Band 3 $\\text{HCO}_3^-/\\text{Cl}^-$ exchanger).</p><h3>4. The $\\text{Na}^+/\\text{K}^+$-ATPase Pump</h3><p>&bull; <strong>Structure:</strong> A transmembrane P-type ATPase tetramer ($\\alpha_2\\beta_2$). The catalytic $\\alpha$-subunit ($110\\text{ kDa}$) contains ATP-binding, phosphorylation, and ion-binding sites; the glycosylated $\\beta$-subunit ($55\\text{ kDa}$) ensures proper membrane targeting.</p><p>&bull; <strong>Stoichiometry & Catalytic Cycle:</strong> In state $\\text{E}_1$, the pump binds $3\\text{ Na}^+$ from the cytoplasm. ATP phosphorylates an aspartyl residue ($\text{Asp-}369$), producing $\\text{E}_1\\text{-P}$. The pump undergoes conformational relaxation to $\\text{E}_2\\text{-P}$, exposing the sodium-binding sites to the extracellular fluid, reducing sodium affinity and releasing $3\\text{ Na}^+$. Two extracellular $\\text{K}^+$ ions bind to $\\text{E}_2\\text{-P}$, triggering dephosphorylation to $\\text{E}_2$. The pump reverts to $\\text{E}_1$, releasing $2\\text{ K}^+$ into the cytoplasm.</p><p>&bull; <strong>Electrogenic Nature & Functions:</strong> Extruding $3\\text{ Na}^+$ while importing $2\\text{ K}^+$ creates a net negative intracellular current, directly contributing $5–10\\text{ mV}$ to resting membrane potential (RMP). It maintains cellular osmotic volume (preventing intracellular water swelling and lysis) and energizes secondary active nutrient uptake.</p><h3>5. Gibbs-Donnan Membrane Equilibrium</h3><p>&bull; <strong>Concept:</strong> When a semipermeable membrane separates two compartments, and one compartment contains an impermeable charged macromolecule (such as anionic plasma proteins, $\\text{Pr}^-$), diffusible ions redistribute unequally at thermodynamic equilibrium.</p><p>&bull; <strong>Gibbs-Donnan Equation:</strong> For monovalent diffusible ions ($\text{Na}^+$ and $\text{Cl}^-$), thermodynamic equality of chemical potentials dictates: $$[\\text{Na}^+_1][\\text{Cl}^-_1] = [\\text{Na}^+_2][\\text{Cl}^-_2]$$</p><p>&bull; <strong>Consequences & Physiological Implications:</strong><br>1. <em>Unequal Diffusible Ion Distribution:</em> Compartment 1 (containing protein $\\text{Pr}^-$) retains an excess of diffusible cations ($[\\text{Na}^+_1] > [\\text{Na}^+_2]$) and a deficit of diffusible anions ($[\\text{Cl}^-_1] < [\\text{Cl}^-_2]$).<br>2. <em>Donnan Potential:</em> The asymmetric ion distribution creates an electrical transmembrane potential difference (Donnan potential, $E = -58\\log([\\text{Na}^+_1]/[\\text{Na}^+_2])$).<br>3. <em>Colloid Osmotic Effect:</em> Total solute concentration is higher in the protein compartment, creating an osmotic gradient that draws water in. Across capillary endothelium, plasma albumin establishes Gibbs-Donnan effects that maintain plasma oncotic pressure (Starling forces), preventing interstitial edema.</p>",
        "keyPoints": [
            "Fluid mosaic model: amphipathic lipid bilayer matrix with embedded integral and peripheral proteins",
            "Transport spectrum: simple diffusion, facilitated diffusion, primary active, and secondary active symport/antiport",
            "Na+/K+-ATPase: electrogenic P-type pump moving 3 Na+ out / 2 K+ in per ATP; ouabain sensitive",
            "Maintains resting membrane potential, intracellular osmotic volume, and secondary active transport",
            "Gibbs-Donnan equilibrium: unequal distribution of permeant ions due to non-diffusible intracellular/plasma proteins",
            "Thermodynamic rule: $[\\text{Na}^+_1][\\text{Cl}^-_1] = [\\text{Na}^+_2][\\text{Cl}^-_2]$",
            "Generates Donnan transmembrane electrical potential and essential capillary colloid oncotic pressure"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "GADVASU 2021", "KVAFSU 2020"]
    },
    {
        "id": "u1-la-02",
        "type": "long",
        "marks": 12,
        "question": "Provide a comprehensive account of the Chemistry, Classification, and Biological Significance of Carbohydrates. Detail monosaccharide isomerism, reducing vs non-reducing disaccharides, storage and structural polysaccharides, and the structure of glycosaminoglycans and bacterial peptidoglycan.",
        "topicId": "u1-t06",
        "answer": "<h3>1. Definition and Structural Classification</h3><p>Carbohydrates are polyhydroxy aldehydes or ketones, or substances that yield such compounds upon hydrolysis. General empirical formula: $\\text{C}_n(\\text{H}_2\\text{O})_n$. They are classified into: Monosaccharides (1 unit), Disaccharides (2 units), Oligosaccharides (3–10 units), and Polysaccharides (>10 units).</p><h3>2. Monosaccharide Chemistry and Isomerism</h3><p>&bull; <strong>Classification:</strong> Aldoses (possessing an aldehyde group at C-1, e.g., glucose, galactose) and Ketoses (possessing a keto group at C-2, e.g., fructose). Classified by carbon number: Trioses (glyceraldehyde, DHAP), Pentoses (ribose, deoxyribose), and Hexoses.</p><p>&bull; <strong>Stereoisomerism:</strong><br>1. <em>D- and L-Isomers:</em> Determined by configuration of the asymmetric carbon farthest from carbonyl carbon relative to D-glyceraldehyde.<br>2. <em>Optical Activity:</em> Dextrorotatory ($+$ / $d$) or Levorotatory ($-$ / $l$).<br>3. <em>Epimers:</em> Differ around only one asymmetric carbon: D-Glucose and D-Galactose (C-4 epimers); D-Glucose and D-Mannose (C-2 epimers).<br>4. <em>Anomers:</em> Cyclization creates a new asymmetric center at C-1 (aldopyranose) or C-2 (ketofuranose), generating $\\alpha$- and $\\beta$-anomers which interconvert via mutarotation (equilibrium D-glucose rotation is $+52.7^\\circ$).</p><p>&bull; <strong>Amino Sugars:</strong> Hydroxyl group replaced by an amino group: D-Glucosamine (chitin, heparin), D-Galactosamine (chondroitin sulfate), and Sialic acid (N-acetylneuraminic acid, NANA) which caps gangliosides and glycoproteins.</p><h3>3. Disaccharides: Reducing vs Non-Reducing</h3><p>&bull; <strong>Maltose:</strong> $\\alpha$-D-glucopyranosyl-(1$\\rightarrow$4)-D-glucopyranose; formed by amylase hydrolysis of starch; reducing sugar; forms sunflower osazone crystals.<br>&bull; <strong>Lactose:</strong> $\\beta$-D-galactopyranosyl-(1$\\rightarrow$4)-D-glucopyranose; principal sugar of milk; reducing; forms powder-puff osazone crystals; digested by lactase.<br>&bull; <strong>Cellobiose:</strong> $\\beta$-D-glucopyranosyl-(1$\\rightarrow$4)-D-glucopyranose; repeating unit of plant cellulose; hydrolyzed by microbial cellulase.<br>&bull; <strong>Sucrose:</strong> $\\alpha$-D-glucopyranosyl-(1$\\rightarrow$2)-$\\beta$-D-fructofuranoside; non-reducing sugar because both anomeric carbons participate in the glycosidic bond; gives negative Benedict's test; hydrolyzed by sucrase to invert sugar.</p><h3>4. Polysaccharides: Storage and Structural</h3><p>&bull; <strong>Starch:</strong> Plant storage homopolysaccharide composed of:<br>1. <em>Amylose ($15–20\\%$):</em> Linear unbranched polymer of $\\alpha\\text{-}1,4$-D-glucose; forms helical inclusion complex giving deep blue color with iodine.<br>2. <em>Amylopectin ($80–85\\%$):</em> Highly branched polymer with $\\alpha\\text{-}1,4$ backbone and $\\alpha\\text{-}1,6$ branch points every 24–30 residues; purple-red iodine reaction.</p><p>&bull; <strong>Glycogen (Animal Starch):</strong> Extensively branched storage polymer in animal liver ($5–10\\%$) and skeletal muscle ($1–2\\%$); $\\alpha\\text{-}1,4$ chains with dense $\\alpha\\text{-}1,6$ branches every 8–12 residues; reddish-brown iodine reaction; high branch density provides rapid phosphorolytic release of glucose-1-phosphate.</p><p>&bull; <strong>Cellulose:</strong> Most abundant biomolecule on Earth; linear polymer of D-glucose linked by $\\beta\\text{-}1,4$-glycosidic bonds; forms intra- and inter-chain hydrogen-bonded microfibrils of enormous tensile strength; indigestible by mammalian digestive enzymes; fermented by symbiotic rumen and cecal microflora producing volatile fatty acids.</p><p>&bull; <strong>Inulin:</strong> Linear fructosan of $\\beta\\text{-}2,1$-linked D-fructose with a terminal glucose; freely filtered at renal glomerulus and neither reabsorbed nor secreted; gold standard for GFR measurement.</p><p>&bull; <strong>Chitin:</strong> Homopolymer of $\\beta\\text{-}1,4$-linked N-acetylglucosamine (NAG); major structural component of arthropod exoskeletons and fungal walls.</p><h3>5. Glycosaminoglycans (GAGs) and Bacterial Cell Wall</h3><p>&bull; <strong>Mucopolysaccharides (GAGs):</strong> Unbranched heteropolysaccharides of repeating [uronic acid + hexosamine] disaccharides:<br>1. <em>Hyaluronic Acid:</em> Non-sulfated; D-glucuronic acid + NAG; articular joint lubricant and shock absorber in synovial fluid.<br>2. <em>Chondroitin Sulfate:</em> D-glucuronic acid + GalNAc-4/6-sulfate; provides compressive resistance to cartilage and bone.<br>3. <em>Heparin:</em> L-iduronic acid-2-sulfate + Glucosamine-N-sulfate-6-sulfate; produced by mast cells; binds Antithrombin III, acting as a potent physiological anticoagulant.</p><p>&bull; <strong>Bacterial Peptidoglycan (Murein):</strong> Alternating units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by $\\beta\\text{-}1,4$-glycosidic bonds, cross-linked by short tetrapeptide bridges. Lysozyme (in tears, milk, egg white) hydrolyzes the $\\beta\\text{-}1,4$ bond between NAM and NAG, lysing Gram-positive bacterial cell walls.</p>",
        "keyPoints": [
            "Classification into aldoses/ketoses, trioses to hexoses, oligosaccharides, and polysaccharides",
            "Stereoisomerism: D/L configurations, optical rotation, C-2/C-4 epimers, anomers, and mutarotation",
            "Disaccharides: Maltose (alpha-1,4), Lactose (beta-1,4, milk carbohydrate), Sucrose (alpha-1,beta-2, non-reducing)",
            "Storage polysaccharides: Amylose (linear alpha-1,4), Amylopectin (alpha-1,6 branches every 24-30), Glycogen (branches every 8-12)",
            "Structural polysaccharides: Cellulose (beta-1,4, rumen fermentation), Inulin (fructosan for GFR), Chitin (beta-1,4 NAG)",
            "Mucopolysaccharides: Hyaluronic acid (synovial lubricant), Heparin (AT-III anticoagulant), Chondroitin sulfate",
            "Bacterial peptidoglycan: alternating beta-1,4 NAM-NAG cleaved by lysozyme"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "RAJUVAS 2022", "GADVASU 2021"]
    },
    {
        "id": "u1-la-03",
        "type": "long",
        "marks": 12,
        "question": "Write an exhaustive essay on the Chemistry, Classification, and Biological Functions of Lipids and Prostaglandins. Discuss simple, compound, and derived lipids, analytical fat indices with their clinical interpretations, lipoprotein transport, and the arachidonic acid cascade in veterinary medicine.",
        "topicId": "u1-t10",
        "answer": "<h3>1. Definition and Broad Classification</h3><p>Lipids are heterogeneous organic biomolecules insoluble in water but soluble in non-polar organic solvents (chloroform, ether, benzene). Classified into:<br>&bull; <strong>Simple Lipids:</strong> Esters of fatty acids with alcohols (Triacylglycerols, Waxes).<br>&bull; <strong>Compound (Complex) Lipids:</strong> Esters containing additional non-lipid groups (Phospholipids, Glycolipids, Lipoproteins).<br>&bull; <strong>Derived Lipids:</strong> Hydrolytic derivatives of simple and compound lipids (Fatty acids, Steroids, Cholesterol, Eicosanoids).</p><h3>2. Detailed Chemistry of Major Lipid Classes</h3><p><strong>A. Simple Lipids:</strong><br>1. <em>Triacylglycerols (TAG / Neutral Fats):</em> Triesters of glycerol with three fatty acid molecules. Chief chemical storage form of energy in animal adipose tissue ($9.3\\text{ kcal/g}$ vs $4.1\\text{ kcal/g}$ for carbohydrates).<br>2. <em>Waxes:</em> Esters of long-chain fatty acids with long-chain monohydric alcohols (e.g., beeswax containing myricyl palmitate, lanolin from sheep wool); function as water-repellent protective coatings.</p><p><strong>B. Compound Lipids:</strong><br>1. <em>Glycerophospholipids:</em> Possess a glycerol-3-phosphate backbone, two fatty acyl chains, and a nitrogenous or polar head group:<br>&bull; <strong>Phosphatidylcholine (Lecithin):</strong> Choline head group; dominant structural lipid in membranes and bile.<br>&bull; <strong>Dipalmitoylphosphatidylcholine (DPPC):</strong> Major pulmonary surfactant; deficiency causes Neonatal Respiratory Distress Syndrome.<br>&bull; <strong>Cardiolipin (Diphosphatidylglycerol):</strong> Inner mitochondrial membrane lipid required for ETC complexes.<br>&bull; <strong>Phosphatidylinositol 4,5-bisphosphate (PIP2):</strong> Cleaved by Phospholipase C into second messengers IP3 (calcium mobilization) and DAG (PKC activation).<br>2. <em>Sphingolipids:</em> Built on sphingosine (18-carbon amino alcohol). Fatty acid attached via amide linkage forms <strong>ceramide</strong>. Sphingomyelin contains phosphocholine (myelin sheath insulator). Glycosphingolipids include cerebrosides (single glucose/galactose) and gangliosides (oligosaccharide with sialic acid/NANA).</p><p><strong>C. Derived Lipids & Cholesterol:</strong><br>&bull; Cholesterol is a 27-carbon sterol possessing the cyclopentanoperhydrophenanthrene (CPPP) four-ring nucleus, a C-3 hydroxyl group, and a C-17 branched octyl side chain. Serves as precursor for bile acids (cholic, deoxycholic), steroid hormones (cortisol, progesterone, testosterone, estrogens), and Vitamin D3 (7-dehydrocholesterol).</p><h3>3. Analytical Fat Indices and Diagnostic Utility</h3><p>&bull; <strong>Saponification Number:</strong> Milligrams of $\\text{KOH}$ needed to saponify $1\\text{ g}$ of fat; inversely proportional to molecular weight / fatty acid chain length. Butterfat has high value ($220–235$) due to short-chain butyric acid.<br>&bull; <strong>Iodine Number:</strong> Grams of iodine absorbed per $100\\text{ g}$ of fat; measures degree of unsaturation (double bonds). Differentiates drying oils from saturated animal fats.<br>&bull; <strong>Acid Number:</strong> Milligrams of $\\text{KOH}$ required to neutralize free fatty acids in $1\\text{ g}$ of fat; quantifies hydrolytic rancidity and lipase degradation.<br>&bull; <strong>Reichert-Meissl (RM) Number:</strong> Milliliters of $0.1\\text{ N KOH}$ required to neutralize steam-volatile, water-soluble fatty acids from $5\\text{ g}$ of hydrolyzed fat. Butterfat has uniquely high RM value ($26–33$) due to volatile butyric and caproic acids; adulteration with vegetable oil ($RM < 1$) lowers RM number.<br>&bull; <strong>Polenske Number:</strong> Milliliters of $0.1\\text{ N KOH}$ to neutralize steam-volatile, water-insoluble fatty acids (caprylic, capric acids).</p><h3>4. Plasma Lipoproteins and Lipid Transport</h3><p>&bull; <strong>Chylomicrons:</strong> Density $<0.95\\text{ g/mL}$; transports exogenous dietary triacylglycerols from gut via Apo B-48 and Apo C-II.<br>&bull; <strong>VLDL:</strong> Transports endogenous hepatic triacylglycerols via Apo B-100 and Apo C-II to peripheral tissues.<br>&bull; <strong>LDL:</strong> Transports cholesterol to tissues; binds cellular LDL receptors via Apo B-100; elevated in canine hypothyroidism.<br>&bull; <strong>HDL:</strong> Mediates reverse cholesterol transport from tissues back to liver via Apo A-I and lecithin-cholesterol acyltransferase (LCAT).</p><h3>5. Prostaglandins and the Arachidonic Acid Cascade</h3><p>&bull; <strong>Biosynthesis:</strong> Phospholipase $\\text{A}_2$ cleaves membrane phospholipids, liberating arachidonic acid ($20:4\\ \\omega\\text{-}6$). Cyclooxygenase (COX-1 constitutive, COX-2 inducible) catalyzes bis-dioxygenation to unstable $\\text{PGG}_2$ and $\\text{PGH}_2$, which are converted by cell-specific synthases into prostaglandins ($\text{PGE}_2, \\text{PGF}_{2\\alpha}$), prostacyclin ($\\text{PGI}_2$), and thromboxanes ($\\text{TXA}_2$).<br>&bull; <strong>Thromboxane $\\text{TXA}_2$ vs Prostacyclin $\\text{PGI}_2$:</strong> Platelet $\\text{TXA}_2$ promotes vasoconstriction and platelet aggregation. Endothelial $\\text{PGI}_2$ causes vasodilation and inhibits platelet aggregation, maintaining vascular patency.<br>&bull; <strong>NSAID Action:</strong> Flunixin meglumine, meloxicam, and carprofen inhibit COX enzymes, suppressing inflammatory prostaglandins.<br>&bull; <strong>Veterinary Reproductive Pharmacology:</strong> $\\text{PGF}_{2\\alpha}$ (dinoprost, cloprostenol) induces luteolysis of the corpus luteum, used for estrus synchronization, pyometra evacuation, and parturition induction in domestic farm animals.</p>",
        "keyPoints": [
            "Classification: Simple (TAG, waxes), Compound (phospholipids, sphingolipids), Derived (steroids, fatty acids)",
            "Phospholipids: Lecithin, DPPC lung surfactant, cardiolipin, PIP2 second messenger precursor",
            "Steroids: Cholesterol structure (CPPP nucleus, C-3 OH), precursor of bile acids, steroid hormones, Vitamin D",
            "Fat indices: Saponification (chain length), Iodine (unsaturation), Acid (rancidity), RM number (volatile soluble acids in butterfat)",
            "Lipoproteins: Chylomicrons (dietary TAG), VLDL (endogenous TAG), LDL (cholesterol delivery), HDL (reverse cholesterol transport)",
            "Arachidonic acid cascade: PLA2, COX-1/2 pathway yielding PGE2, PGF2alpha, TXA2, PGI2",
            "Veterinary reproductive use: PGF2alpha luteolytic action in estrus synchronization, pyometra, and elective abortion"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "KVAFSU 2021", "WBUAFS 2020"]
    },
    {
        "id": "u1-la-04",
        "type": "long",
        "marks": 12,
        "question": "Write a comprehensive account of Amino Acids and Proteins. Detail the structural and nutritional classification of amino acids, their physical and chemical properties, isoelectric point determination, peptide bond characteristics, protein denaturation, precipitation reactions, and analytical color reactions used in diagnostics.",
        "topicId": "u1-t14",
        "answer": r"<h3>1. Classification of Standard Amino Acids</h3><p>Proteins are polymers of 20 standard $\alpha$-amino acids possessing an amino group ($-\text{NH}_2$), a carboxyl group ($-\text{COOH}$), a hydrogen atom, and a distinctive side-chain (R) group attached to the $\alpha$-carbon.</p><p><strong>A. Structural Classification based on R-group:</strong><br>1. <em>Aliphatic / Non-polar:</em> Glycine (achiral), Alanine, Valine, Leucine, Isoleucine (branched-chain), Proline (cyclic imino acid).<br>2. <em>Aromatic:</em> Phenylalanine (benzene ring), Tyrosine (phenol ring), Tryptophan (indole ring).<br>3. <em>Sulfur-containing:</em> Cysteine (thiol/sulfhydryl group forming disulfide bridges), Methionine (thioether methyl donor).<br>4. <em>Hydroxyl-containing:</em> Serine, Threonine (sites for regulatory phosphorylation and O-glycosylation).<br>5. <em>Acidic:</em> Aspartate, Glutamate (dicarboxylic acids, net negative charge at physiological pH).<br>6. <em>Basic:</em> Lysine ($\epsilon$-amino), Arginine (guanidino group, $\text{p}K_a \approx 12.5$), Histidine (imidazole ring, $\text{p}K_a \approx 6.0–6.8$, key physiological buffer).<br>7. <em>Amides:</em> Asparagine, Glutamine (non-toxic ammonia transport).</p><p><strong>B. Nutritional Classification:</strong><br>&bull; <em>Essential (Indispensable):</em> Cannot be synthesized at rates adequate for growth and must be supplied in feed (PVT TIM HALL: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine).<br>&bull; <em>Species Variations:</em> Arginine is essential in chicks and cats; Glycine and Proline are essential in rapidly growing broiler poultry; Taurine (aminoethanesulfonic acid) is an obligate dietary essential for felines to prevent dilated cardiomyopathy and retinal degeneration.</p><h3>2. Physical and Chemical Properties of Amino Acids</h3><p>&bull; <strong>Optical Activity:</strong> All standard amino acids except achiral glycine contain an asymmetric $\alpha$-carbon and exhibit optical isomerism; standard proteinogenic amino acids universally possess the <strong>L-stereochemical configuration</strong>.<br>&bull; <strong>Amphoteric Behavior and Zwitterion Formation:</strong> Amino acids contain both acidic ($\text{COOH}$) and basic ($\text{NH}_2$) groups. In aqueous solution at physiological pH, they exist as dipolar zwitterions: $$\text{H}_3\text{N}^+-\text{CH(R)}-\text{COO}^-$$<br>&bull; <strong>Isoelectric Point (pI):</strong> The pH at which net charge is zero. For neutral amino acids: $$\text{p}I = \frac{\text{p}K_1(\text{COOH}) + \text{p}K_2(\text{NH}_3^+)}{2}$$ For acidic amino acids (aspartate), $\text{p}I = (\text{p}K_1 + \text{p}K_R)/2$; for basic amino acids (lysine), $\text{p}I = (\text{p}K_2 + \text{p}K_R)/2$. At $\text{pH} < \text{p}I$, amino acids exist as cations migrating to cathode; at $\text{pH} > \text{p}I$, they exist as anions migrating to anode.</p><h3>3. The Peptide Bond</h3><p>&bull; <strong>Formation:</strong> Formed by condensation between the $\alpha$-carboxyl of one amino acid and the $\alpha$-amino of the next, releasing water ($-\text{CO}-\text{NH}-$).<br>&bull; <strong>Resonance and Planarity:</strong> Pauling and Corey established that resonance between the carbonyl oxygen and amide nitrogen imparts $\sim 40\%$ partial double-bond character to the C-N bond (length $0.132\text{ nm}$ vs single C-N $0.147\text{ nm}$). The peptide bond is rigid, planar, and almost always adopts the lower-energy <strong>trans configuration</strong>, with rotation permitted only around the $\text{N}-\text{C}_\alpha$ ($\phi$, phi) and $\text{C}_\alpha-\text{C}$ ($\psi$, psi) bonds (Ramachandran plot).</p><h3>4. Protein Denaturation and Precipitation Reactions</h3><p>&bull; <strong>Denaturation:</strong> Disruption of secondary, tertiary, and quaternary structures without cleavage of covalent peptide bonds, resulting in loss of biological activity, unfolding, and reduced solubility. Caused by heat, extreme pH, urea, guanidine HCl, heavy metals ($\text{Pb}^{2+}, \text{Hg}^{2+}$), and detergents.<br>&bull; <strong>Precipitation Reactions:</strong><br>1. <em>Salting-Out:</em> High concentrations of neutral salts (saturated $(NH_4)_2SO_4$) dehydrate protein surfaces, neutralizing charges and causing hydrophobic patches to aggregate and precipitate reversibly.<br>2. <em>Isoelectric Precipitation:</em> Adjusting pH to the protein's pI minimizes electrostatic repulsion, causing spontaneous precipitation (e.g., casein precipitation from milk at pH 4.6).<br>3. <em>Heavy Metal Salts:</em> Cations ($\text{Ag}^+, \text{Hg}^{2+}, \text{Pb}^{2+}$) form insoluble metal proteinates with anionic carboxylates; raw egg white is administered as an emergency oral antidote in heavy metal poisoning.</p><h3>5. Analytical Color Reactions Used in Diagnostics</h3><p>&bull; <strong>Biuret Reaction:</strong> Alkaline $\text{Cu}^{2+}$ coordinates with nitrogen atoms of compounds possessing two or more peptide bonds, forming a violet-purple coordination complex ($\lambda_{max} = 540\text{ nm}$); used in clinical laboratories for total serum protein estimation.<br>&bull; <strong>Ninhydrin Test:</strong> Oxidatively decarboxylates $\alpha$-amino acids to form Ruhemann's purple ($\lambda_{max} = 570\text{ nm}$); proline and hydroxyproline give a distinctive yellow product ($\lambda_{max} = 440\text{ nm}$).<br>&bull; <strong>Xanthoproteic Test:</strong> Nitration of aromatic rings (Tyr, Trp, Phe) with concentrated $\text{HNO}_3$ produces yellow nitro-compounds that turn deep orange upon adding alkali.<br>&bull; <strong>Millon's Test:</strong> Mercuric nitrate in nitric acid reacts with the phenolic group of tyrosine, yielding a red precipitate.<br>&bull; <strong>Sakaguchi Test:</strong> Detects the guanidino group of arginine using $\alpha$-naphthol and alkaline hypobromite, yielding a bright red color.</p>",
        "keyPoints": [
            "Amino acid classification: R-group polarity, nutritional requirements (PVT TIM HALL, feline taurine)",
            "Physical properties: L-configuration, zwitterion structure, amphoteric behavior, pI calculation and electrophoresis migration",
            "Peptide bond: substituted amide with 40% partial double-bond character, planar, rigid, trans conformation",
            "Protein denaturation: loss of 2D/3D structure without breaking primary peptide bonds",
            "Precipitation: salting-out with ammonium sulfate, isoelectric precipitation of casein at pH 4.6, heavy metal precipitation",
            "Colorimetric diagnostics: Biuret (peptide bonds, serum total protein), Ninhydrin (purple vs yellow proline), Xanthoproteic, Millon's, Sakaguchi"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "GADVASU 2022", "RAJUVAS 2021"]
    },
    {
        "id": "u1-la-05",
        "type": "long",
        "marks": 12,
        "question": "Provide a comprehensive treatise on Nucleic Acids and Nucleotides. Detail the chemistry of purines and pyrimidines, high-energy nucleotide coenzymes, the Watson-Crick B-DNA double helix model, base-pairing thermodynamics, DNA denaturation and hyperchromicity (Tm), and the structural features and biological functions of mRNA, tRNA, and rRNA.",
        "topicId": "u1-t16",
        "answer": r"<h3>1. Chemical Architecture of Nucleotides</h3><p>Nucleic acids (DNA and RNA) are linear polymers of monomeric nucleotide units. A nucleotide comprises three distinct components: a nitrogenous heterocyclic base, a pentose sugar, and one to three phosphate groups.</p><p>&bull; <strong>Nitrogenous Bases:</strong><br>1. <em>Purines:</em> Bicyclic aromatic rings containing a six-membered pyrimidine fused to a five-membered imidazole ring. Adenine (6-aminopurine) and Guanine (2-amino-6-oxypurine). Catabolic intermediates include hypoxanthine and xanthine.<br>2. <em>Pyrimidines:</em> Monocyclic six-membered heterocyclic rings. Cytosine (2-oxy-4-aminopyrimidine), Uracil (2,4-dioxypyrimidine in RNA), and Thymine (5-methyluracil in DNA).</p><p>&bull; <strong>Pentose Sugars and Glycosidic Bonds:</strong> D-Ribose in RNA; 2'-Deoxy-D-ribose in DNA. The nitrogenous base is linked via a $\beta\text{-N-glycosidic bond}$ from N-9 of purines or N-1 of pyrimidines to C-1' of the pentose sugar.<br>&bull; <strong>Nucleosides vs Nucleotides:</strong> Nucleoside = Base + Sugar (Adenosine, Guanosine, Cytidine, Uridine, Thymidine). Nucleotide = Nucleoside + Phosphate esterified at C-5' of the pentose sugar.</p><h3>2. Physiological Functions of Nucleotides</h3><p>&bull; <strong>Energy Currency:</strong> ATP and GTP contain high-energy phosphoanhydride bonds ($\Delta G^{0'} = -30.5\text{ kJ/mol}$) driving biosynthetic, mechanical, and transport processes.<br>&bull; <strong>Coenzymes:</strong> Adenine nucleotides form essential cores of metabolic electron and acyl carriers: $\text{NAD}^+, \text{NADP}^+, \text{FAD}$, and Coenzyme A.<br>&bull; <strong>Secondary Messengers:</strong> Cyclic AMP (cAMP) and Cyclic GMP (cGMP) transduce peptide hormone and nitric oxide signals.<br>&bull; <strong>Activated Intermediates:</strong> UDP-glucose (glycogenesis), UDP-glucuronic acid (Phase II detox), CDP-diacylglycerol (phospholipids), and S-adenosylmethionine (SAM, universal methyl donor).<br>&bull; <strong>Synthetic Analogues:</strong> 5-Fluorouracil (suicide inhibitor of thymidylate synthase in cancer chemotherapy) and Acyclovir (viral DNA polymerase inhibitor).</p><h3>3. The Watson-Crick B-DNA Double Helix Model (1953)</h3><p>James Watson and Francis Crick deduced the 3D structure of B-DNA based on Rosalind Franklin's X-ray diffraction patterns and Chargaff's rules:</p><p>&bull; <strong>Antiparallel Strands:</strong> DNA consists of two right-handed helical polynucleotide chains winding around a central axis in opposite directions: one strand runs $5' \rightarrow 3'$, the other runs $3' \rightarrow 5'$.<br>&bull; <strong>Sugar-Phosphate Backbone:</strong> Alternating deoxyribose and phosphate units joined by $3',5'$-phosphodiester linkages form the hydrophilic outer ridges; purine and pyrimidine bases project into the hydrophobic interior perpendicular to the helical axis.<br>&bull; <strong>Complementary Base Pairing:</strong><br>1. Adenine pairs exclusively with Thymine through <strong>two hydrogen bonds</strong> ($\text{A}=\text{T}$).<br>2. Guanine pairs exclusively with Cytosine through <strong>three hydrogen bonds</strong> ($\text{G}\equiv\text{C}$).<br>&bull; <strong>Dimensions of B-DNA:</strong> Helical diameter is $2.0\text{ nm}$ ($20\text{ \AA}$). Pitch (one complete $360^\circ$ turn) spans $3.4\text{ nm}$ ($34\text{ \AA}$), containing $10.0–10.5\text{ base pairs}$ with an axial rise of $0.34\text{ nm}$ per base pair.<br>&bull; <strong>Grooves:</strong> Asymmetric base attachment creates a wide Major Groove ($2.2\text{ nm}$) and a narrow Minor Groove ($1.2\text{ nm}$), providing sites for sequence-specific transcription factor and histones binding.</p><h3>4. DNA Denaturation, Melting Temperature (Tm), and Hyperchromicity</h3><p>&bull; <strong>Thermal Denaturation (Melting):</strong> Heating or alkaline pH disrupts inter-strand hydrogen bonds and base-stacking interactions, unwinding the native double helix into two separated random coils without cleaving covalent phosphodiester bonds.<br>&bull; <strong>Melting Temperature ($T_m$):</strong> The temperature at which $50\%$ of double-helical structure is denatured. $T_m$ is directly proportional to the mole fraction of $\text{G}\equiv\text{C}$ base pairs (due to 3 hydrogen bonds and stronger base stacking) and ionic strength of the buffer.<br>&bull; <strong>Hyperchromic Effect (Hyperchromicity):</strong> Conjugated heterocyclic bases absorb UV light strongly at $260\text{ nm}$. In native dsDNA, close base stacking suppresses UV absorption (hypochromism). Upon denaturation into single strands, bases unstack and absorb UV light freely, producing a characteristic $30–40\%$ increase in optical absorbance at $260\text{ nm}$.</p><h3>5. Major RNA Species: Structure and Biological Roles</h3><p>&bull; <strong>Messenger RNA (mRNA, $\sim 5\%$ of total RNA):</strong><br>Carries genetic codons from nuclear DNA to ribosomes for translation. In eukaryotes, processed by a $5'\text{-7-methylguanosine (m}^7\text{G)}$ triphosphate cap (protects against exonucleases, promotes ribosome assembly), coding sequence starting with AUG, and a $3'\text{-poly(A) tail}$ ($150–250$ adenines) ensuring stability.</p><p>&bull; <strong>Transfer RNA (tRNA, $\sim 15\%$ of total RNA):</strong><br>Small adaptor molecules ($73–93\text{ nucleotides}$) that decipher mRNA codons and deliver corresponding amino acids. Secondary structure exhibits a <strong>cloverleaf model</strong>:<br>1. <em>Acceptor Arm:</em> 7-bp stem terminating in invariant single-stranded $5'\text{-CCA-}3'$, where terminal adenosine esterifies amino acids.<br>2. <em>Anticodon Loop:</em> Contains triplet anticodon sequence complementary and antiparallel to mRNA codons.<br>3. <em>D-Arm:</em> Contains dihydrouridine (D); recognized by aminoacyl-tRNA synthetase.<br>4. <em>T\psi C-Arm:</em> Contains pseudouridine (\psi) and ribothymidine; binds ribosome surface.<br>Tertiary structure folds into a compact <strong>inverted L-shaped 3D conformation</strong> stabilized by tertiary hydrogen bonds.</p><p>&bull; <strong>Ribosomal RNA (rRNA, $\sim 80\%$ of total RNA):</strong><br>Structural and catalytic core of ribosomes. In eukaryotic 80S ribosomes: 60S large subunit contains 28S, 5.8S, and 5S rRNAs; 40S small subunit contains 18S rRNA. The $28\text{S rRNA}$ possesses peptidyl transferase ribozyme activity that catalyzes peptide bond synthesis during protein translation.</p>",
        "keyPoints": [
            "Nucleotide composition: purine/pyrimidine base + pentose + phosphate via beta-N-glycosidic and phosphodiester bonds",
            "Biological roles: energy currency (ATP/GTP), coenzymes (NAD, FAD, CoA), second messengers (cAMP), methyl donor (SAM)",
            "Watson-Crick B-DNA: antiparallel double helix, diameter 2.0 nm, pitch 3.4 nm (10.5 bp/turn), major and minor grooves",
            "Complementary base pairing: A=T (2 H-bonds) and G=C (3 H-bonds); obeys Chargaff's rules",
            "DNA denaturation and Tm: midpoint of thermal melting; higher in GC-rich DNA; hyperchromic shift at 260 nm",
            "mRNA: monocistronic in eukaryotes, 5' m7G cap, coding sequence, 3' poly(A) tail",
            "tRNA: cloverleaf secondary and inverted L tertiary structure, invariant 3'-CCA arm, anticodon loop, modified bases",
            "rRNA: dominant cellular RNA (~80%), provides ribosomal scaffold, 28S rRNA peptidyl transferase ribozyme activity"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "KVAFSU 2021", "GADVASU 2022"]
    }
]

if __name__ == "__main__":
    def_q = [q for q in unit1_qa if q["marks"] == 2]
    sa_q = [q for q in unit1_qa if q["marks"] == 5]
    la_q = [q for q in unit1_qa if q["marks"] == 12]
    print(f"Unit 1 Q&A Loaded: {len(def_q)} (2M), {len(sa_q)} (5M), {len(la_q)} (12M). Total = {len(unit1_qa)} questions.")
