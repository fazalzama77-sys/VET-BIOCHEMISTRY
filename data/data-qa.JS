/* Master Question & Answer Bank for Veterinary Biochemistry Studio */
/* Generated for B.V.Sc & A.H. Second Year (VCI MSVE Syllabus) */
var qaBank = {
  "unit-1": [
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2022",
        "RAJUVAS 2023",
        "KVAFSU 2021"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2024",
        "WBUAFS 2023",
        "MAFSU 2022"
      ]
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
      "pyq": [
        "TANUVAS 2023",
        "IVRI Annual Exam 2021",
        "SVVU 2022"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "LUVAS 2022",
        "GADVASU 2020"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2022",
        "RAJUVAS 2021",
        "KVAFSU 2023"
      ]
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
      "pyq": [
        "TANUVAS 2023",
        "IVRI Annual Exam 2021",
        "WBUAFS 2022"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "GADVASU 2022",
        "SVVU 2021"
      ]
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
        "Include linoleic acid ($\\omega-6$) and alpha-linolenic acid ($\\omega-3$)",
        "Cats have negligible delta-6 desaturase activity, making arachidonic acid strictly essential in feline diets"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2022",
        "KVAFSU 2023"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2022",
        "RAJUVAS 2023",
        "LUVAS 2021"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2021",
        "TANUVAS 2020",
        "MAFSU 2023"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "GADVASU 2021",
        "SVVU 2023"
      ]
    },
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "KVAFSU 2021"
      ]
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
        "headers": [
          "Feature",
          "Facilitated Diffusion",
          "Primary Active Transport"
        ],
        "rows": [
          [
            "Direction of Transport",
            "Down concentration gradient (downhill)",
            "Against electrochemical gradient (uphill)"
          ],
          [
            "Energy Requirement",
            "No ATP required (passive process)",
            "Direct ATP hydrolysis required"
          ],
          [
            "Carrier Saturation",
            "Exhibits saturation kinetics ($V_{max}$)",
            "Exhibits saturation kinetics ($V_{max}$)"
          ],
          [
            "Specific Inhibitors",
            "Inhibited by specific competitive blockers",
            "Inhibited by metabolic poisons (e.g., ouabain, cyanide)"
          ],
          [
            "Biological Examples",
            "GLUT-1, GLUT-4 in muscle and adipose",
            "$\\text{Na}^+/\\text{K}^+$-ATPase, $\\text{Ca}^{2+}$-ATPase (SERCA)"
          ]
        ]
      },
      "keyPoints": [
        "Facilitated diffusion moves solutes downhill without energy; active transport pumps uphill using ATP",
        "Na+/K+-ATPase is electrogenic: extrudes 3 Na+ and imports 2 K+ per ATP hydrolyzed",
        "Maintains resting membrane potential, cell volume, and secondary active transport gradients",
        "Inhibited specifically by cardiac glycosides (ouabain and digoxin)"
      ],
      "pyq": [
        "IVRI Annual Exam 2022",
        "GADVASU 2023",
        "RAJUVAS 2020"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2021",
        "WBUAFS 2023"
      ]
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
        "headers": [
          "Characteristic",
          "Amylose (Starch)",
          "Amylopectin (Starch)",
          "Glycogen (Animal Starch)"
        ],
        "rows": [
          [
            "Biological Source",
            "Plant chloroplasts / amyloplasts ($15–20\\%$ of starch)",
            "Plant storage tubers and grains ($80–85\\%$ of starch)",
            "Animal liver ($5–10\\%$ by weight) and skeletal muscle ($1–2\\%$)"
          ],
          [
            "Chain Structure",
            "Linear, continuous helical unbranched chain",
            "Branched polymer with compact bush-like structure",
            "Extensively branched, highly compact globular polymer"
          ],
          [
            "Glycosidic Linkages",
            "Only $\\alpha\\text{-}1,4$-glycosidic bonds",
            "$\\alpha\\text{-}1,4$ linear bonds with $\\alpha\\text{-}1,6$ branch points",
            "$\\alpha\\text{-}1,4$ linear bonds with dense $\\alpha\\text{-}1,6$ branch points"
          ],
          [
            "Branching Frequency",
            "No branching",
            "Branch points occur every 24 to 30 glucose units",
            "Branch points occur every 8 to 12 glucose units"
          ],
          [
            "Iodine Color Reaction",
            "Deep blue-black helical inclusion complex",
            "Purple-red / violet color",
            "Reddish-brown color"
          ],
          [
            "Digestibility",
            "Hydrolyzed by $\\alpha$-amylase to maltose and maltotriose",
            "Hydrolyzed to maltose, maltotriose, and $\\alpha$-limit dextrins",
            "Rapid phosphorolysis from non-reducing ends via glycogen phosphorylase"
          ]
        ]
      },
      "keyPoints": [
        "Amylose is unbranched with exclusively alpha-1,4 linkages (blue iodine complex)",
        "Amylopectin is branched with alpha-1,6 linkages every 24–30 residues (purple iodine reaction)",
        "Glycogen has dense branching (every 8–12 residues), providing abundant non-reducing ends for rapid glucose mobilization",
        "Liver glycogen buffers blood glucose; muscle glycogen fuels internal muscle contraction"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "RAJUVAS 2022",
        "KVAFSU 2020"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2023",
        "LUVAS 2022"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2022",
        "GADVASU 2021",
        "SVVU 2023"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "RAJUVAS 2021"
      ]
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
        "headers": [
          "Feature",
          "Deoxyribonucleic Acid (DNA)",
          "Ribonucleic Acid (RNA)"
        ],
        "rows": [
          [
            "Pentose Sugar",
            "2'-Deoxy-D-ribose (lacks oxygen at C-2')",
            "D-Ribose (possesses 2'-OH hydroxyl group)"
          ],
          [
            "Pyrimidines",
            "Cytosine and <strong>Thymine</strong> (5-methyluracil)",
            "Cytosine and <strong>Uracil</strong> (lacks 5-methyl group)"
          ],
          [
            "Purines",
            "Adenine and Guanine",
            "Adenine and Guanine"
          ],
          [
            "Strandedness / Structure",
            "Double-stranded antiparallel right-handed B-helix",
            "Predominantly single-stranded (forms complex loops and hairpins)"
          ],
          [
            "Alkaline Stability",
            "Stable to alkaline hydrolysis (lacks 2'-OH)",
            "Hydrolyzed rapidly by dilute alkali via 2',3'-cyclic phosphate"
          ],
          [
            "Chargaff's Rules",
            "Strictly obeys $[\\text{A}]=[\\text{T}]$ and $[\\text{G}]=[\\text{C}]$",
            "Does not obey Chargaff's parity rules"
          ],
          [
            "Major Types",
            "Nuclear genomic DNA, mitochondrial DNA (mtDNA)",
            "mRNA (messenger), tRNA (transfer), rRNA (ribosomal)"
          ],
          [
            "Primary Function",
            "Permanent storage and transmission of genetic code",
            "Protein biosynthesis, translation, gene regulation, catalysis (ribozymes)"
          ]
        ]
      },
      "keyPoints": [
        "DNA contains 2-deoxyribose and thymine; RNA contains ribose and uracil",
        "DNA is double-stranded antiparallel; RNA is single-stranded folding into loops",
        "RNA is susceptible to alkaline hydrolysis due to reactive 2'-OH groups",
        "DNA strictly obeys Chargaff's rules; RNA does not",
        "DNA stores genetic information; RNA executes transcription and translation"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "KVAFSU 2022",
        "GADVASU 2020"
      ]
    },
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "GADVASU 2021"
      ]
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
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "KVAFSU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u1-la-04",
      "type": "long",
      "marks": 12,
      "question": "Write a comprehensive account of Amino Acids and Proteins. Detail the structural and nutritional classification of amino acids, their physical and chemical properties, isoelectric point determination, peptide bond characteristics, protein denaturation, precipitation reactions, and analytical color reactions used in diagnostics.",
      "topicId": "u1-t14",
      "answer": "<h3>1. Classification of Standard Amino Acids</h3><p>Proteins are polymers of 20 standard $\\alpha$-amino acids possessing an amino group ($-\\text{NH}_2$), a carboxyl group ($-\\text{COOH}$), a hydrogen atom, and a distinctive side-chain (R) group attached to the $\\alpha$-carbon.</p><p><strong>A. Structural Classification based on R-group:</strong><br>1. <em>Aliphatic / Non-polar:</em> Glycine (achiral), Alanine, Valine, Leucine, Isoleucine (branched-chain), Proline (cyclic imino acid).<br>2. <em>Aromatic:</em> Phenylalanine (benzene ring), Tyrosine (phenol ring), Tryptophan (indole ring).<br>3. <em>Sulfur-containing:</em> Cysteine (thiol/sulfhydryl group forming disulfide bridges), Methionine (thioether methyl donor).<br>4. <em>Hydroxyl-containing:</em> Serine, Threonine (sites for regulatory phosphorylation and O-glycosylation).<br>5. <em>Acidic:</em> Aspartate, Glutamate (dicarboxylic acids, net negative charge at physiological pH).<br>6. <em>Basic:</em> Lysine ($\\epsilon$-amino), Arginine (guanidino group, $\\text{p}K_a \\approx 12.5$), Histidine (imidazole ring, $\\text{p}K_a \\approx 6.0–6.8$, key physiological buffer).<br>7. <em>Amides:</em> Asparagine, Glutamine (non-toxic ammonia transport).</p><p><strong>B. Nutritional Classification:</strong><br>&bull; <em>Essential (Indispensable):</em> Cannot be synthesized at rates adequate for growth and must be supplied in feed (PVT TIM HALL: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine).<br>&bull; <em>Species Variations:</em> Arginine is essential in chicks and cats; Glycine and Proline are essential in rapidly growing broiler poultry; Taurine (aminoethanesulfonic acid) is an obligate dietary essential for felines to prevent dilated cardiomyopathy and retinal degeneration.</p><h3>2. Physical and Chemical Properties of Amino Acids</h3><p>&bull; <strong>Optical Activity:</strong> All standard amino acids except achiral glycine contain an asymmetric $\\alpha$-carbon and exhibit optical isomerism; standard proteinogenic amino acids universally possess the <strong>L-stereochemical configuration</strong>.<br>&bull; <strong>Amphoteric Behavior and Zwitterion Formation:</strong> Amino acids contain both acidic ($\\text{COOH}$) and basic ($\\text{NH}_2$) groups. In aqueous solution at physiological pH, they exist as dipolar zwitterions: $$\\text{H}_3\\text{N}^+-\\text{CH(R)}-\\text{COO}^-$$<br>&bull; <strong>Isoelectric Point (pI):</strong> The pH at which net charge is zero. For neutral amino acids: $$\\text{p}I = \\frac{\\text{p}K_1(\\text{COOH}) + \\text{p}K_2(\\text{NH}_3^+)}{2}$$ For acidic amino acids (aspartate), $\\text{p}I = (\\text{p}K_1 + \\text{p}K_R)/2$; for basic amino acids (lysine), $\\text{p}I = (\\text{p}K_2 + \\text{p}K_R)/2$. At $\\text{pH} < \\text{p}I$, amino acids exist as cations migrating to cathode; at $\\text{pH} > \\text{p}I$, they exist as anions migrating to anode.</p><h3>3. The Peptide Bond</h3><p>&bull; <strong>Formation:</strong> Formed by condensation between the $\\alpha$-carboxyl of one amino acid and the $\\alpha$-amino of the next, releasing water ($-\\text{CO}-\\text{NH}-$).<br>&bull; <strong>Resonance and Planarity:</strong> Pauling and Corey established that resonance between the carbonyl oxygen and amide nitrogen imparts $\\sim 40\\%$ partial double-bond character to the C-N bond (length $0.132\\text{ nm}$ vs single C-N $0.147\\text{ nm}$). The peptide bond is rigid, planar, and almost always adopts the lower-energy <strong>trans configuration</strong>, with rotation permitted only around the $\\text{N}-\\text{C}_\\alpha$ ($\\phi$, phi) and $\\text{C}_\\alpha-\\text{C}$ ($\\psi$, psi) bonds (Ramachandran plot).</p><h3>4. Protein Denaturation and Precipitation Reactions</h3><p>&bull; <strong>Denaturation:</strong> Disruption of secondary, tertiary, and quaternary structures without cleavage of covalent peptide bonds, resulting in loss of biological activity, unfolding, and reduced solubility. Caused by heat, extreme pH, urea, guanidine HCl, heavy metals ($\\text{Pb}^{2+}, \\text{Hg}^{2+}$), and detergents.<br>&bull; <strong>Precipitation Reactions:</strong><br>1. <em>Salting-Out:</em> High concentrations of neutral salts (saturated $(NH_4)_2SO_4$) dehydrate protein surfaces, neutralizing charges and causing hydrophobic patches to aggregate and precipitate reversibly.<br>2. <em>Isoelectric Precipitation:</em> Adjusting pH to the protein's pI minimizes electrostatic repulsion, causing spontaneous precipitation (e.g., casein precipitation from milk at pH 4.6).<br>3. <em>Heavy Metal Salts:</em> Cations ($\\text{Ag}^+, \\text{Hg}^{2+}, \\text{Pb}^{2+}$) form insoluble metal proteinates with anionic carboxylates; raw egg white is administered as an emergency oral antidote in heavy metal poisoning.</p><h3>5. Analytical Color Reactions Used in Diagnostics</h3><p>&bull; <strong>Biuret Reaction:</strong> Alkaline $\\text{Cu}^{2+}$ coordinates with nitrogen atoms of compounds possessing two or more peptide bonds, forming a violet-purple coordination complex ($\\lambda_{max} = 540\\text{ nm}$); used in clinical laboratories for total serum protein estimation.<br>&bull; <strong>Ninhydrin Test:</strong> Oxidatively decarboxylates $\\alpha$-amino acids to form Ruhemann's purple ($\\lambda_{max} = 570\\text{ nm}$); proline and hydroxyproline give a distinctive yellow product ($\\lambda_{max} = 440\\text{ nm}$).<br>&bull; <strong>Xanthoproteic Test:</strong> Nitration of aromatic rings (Tyr, Trp, Phe) with concentrated $\\text{HNO}_3$ produces yellow nitro-compounds that turn deep orange upon adding alkali.<br>&bull; <strong>Millon's Test:</strong> Mercuric nitrate in nitric acid reacts with the phenolic group of tyrosine, yielding a red precipitate.<br>&bull; <strong>Sakaguchi Test:</strong> Detects the guanidino group of arginine using $\\alpha$-naphthol and alkaline hypobromite, yielding a bright red color.</p>",
      "keyPoints": [
        "Amino acid classification: R-group polarity, nutritional requirements (PVT TIM HALL, feline taurine)",
        "Physical properties: L-configuration, zwitterion structure, amphoteric behavior, pI calculation and electrophoresis migration",
        "Peptide bond: substituted amide with 40% partial double-bond character, planar, rigid, trans conformation",
        "Protein denaturation: loss of 2D/3D structure without breaking primary peptide bonds",
        "Precipitation: salting-out with ammonium sulfate, isoelectric precipitation of casein at pH 4.6, heavy metal precipitation",
        "Colorimetric diagnostics: Biuret (peptide bonds, serum total protein), Ninhydrin (purple vs yellow proline), Xanthoproteic, Millon's, Sakaguchi"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u1-la-05",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive treatise on Nucleic Acids and Nucleotides. Detail the chemistry of purines and pyrimidines, high-energy nucleotide coenzymes, the Watson-Crick B-DNA double helix model, base-pairing thermodynamics, DNA denaturation and hyperchromicity (Tm), and the structural features and biological functions of mRNA, tRNA, and rRNA.",
      "topicId": "u1-t16",
      "answer": "<h3>1. Chemical Architecture of Nucleotides</h3><p>Nucleic acids (DNA and RNA) are linear polymers of monomeric nucleotide units. A nucleotide comprises three distinct components: a nitrogenous heterocyclic base, a pentose sugar, and one to three phosphate groups.</p><p>&bull; <strong>Nitrogenous Bases:</strong><br>1. <em>Purines:</em> Bicyclic aromatic rings containing a six-membered pyrimidine fused to a five-membered imidazole ring. Adenine (6-aminopurine) and Guanine (2-amino-6-oxypurine). Catabolic intermediates include hypoxanthine and xanthine.<br>2. <em>Pyrimidines:</em> Monocyclic six-membered heterocyclic rings. Cytosine (2-oxy-4-aminopyrimidine), Uracil (2,4-dioxypyrimidine in RNA), and Thymine (5-methyluracil in DNA).</p><p>&bull; <strong>Pentose Sugars and Glycosidic Bonds:</strong> D-Ribose in RNA; 2'-Deoxy-D-ribose in DNA. The nitrogenous base is linked via a $\\beta\\text{-N-glycosidic bond}$ from N-9 of purines or N-1 of pyrimidines to C-1' of the pentose sugar.<br>&bull; <strong>Nucleosides vs Nucleotides:</strong> Nucleoside = Base + Sugar (Adenosine, Guanosine, Cytidine, Uridine, Thymidine). Nucleotide = Nucleoside + Phosphate esterified at C-5' of the pentose sugar.</p><h3>2. Physiological Functions of Nucleotides</h3><p>&bull; <strong>Energy Currency:</strong> ATP and GTP contain high-energy phosphoanhydride bonds ($\\Delta G^{0'} = -30.5\\text{ kJ/mol}$) driving biosynthetic, mechanical, and transport processes.<br>&bull; <strong>Coenzymes:</strong> Adenine nucleotides form essential cores of metabolic electron and acyl carriers: $\\text{NAD}^+, \\text{NADP}^+, \\text{FAD}$, and Coenzyme A.<br>&bull; <strong>Secondary Messengers:</strong> Cyclic AMP (cAMP) and Cyclic GMP (cGMP) transduce peptide hormone and nitric oxide signals.<br>&bull; <strong>Activated Intermediates:</strong> UDP-glucose (glycogenesis), UDP-glucuronic acid (Phase II detox), CDP-diacylglycerol (phospholipids), and S-adenosylmethionine (SAM, universal methyl donor).<br>&bull; <strong>Synthetic Analogues:</strong> 5-Fluorouracil (suicide inhibitor of thymidylate synthase in cancer chemotherapy) and Acyclovir (viral DNA polymerase inhibitor).</p><h3>3. The Watson-Crick B-DNA Double Helix Model (1953)</h3><p>James Watson and Francis Crick deduced the 3D structure of B-DNA based on Rosalind Franklin's X-ray diffraction patterns and Chargaff's rules:</p><p>&bull; <strong>Antiparallel Strands:</strong> DNA consists of two right-handed helical polynucleotide chains winding around a central axis in opposite directions: one strand runs $5' \\rightarrow 3'$, the other runs $3' \\rightarrow 5'$.<br>&bull; <strong>Sugar-Phosphate Backbone:</strong> Alternating deoxyribose and phosphate units joined by $3',5'$-phosphodiester linkages form the hydrophilic outer ridges; purine and pyrimidine bases project into the hydrophobic interior perpendicular to the helical axis.<br>&bull; <strong>Complementary Base Pairing:</strong><br>1. Adenine pairs exclusively with Thymine through <strong>two hydrogen bonds</strong> ($\\text{A}=\\text{T}$).<br>2. Guanine pairs exclusively with Cytosine through <strong>three hydrogen bonds</strong> ($\\text{G}\\equiv\\text{C}$).<br>&bull; <strong>Dimensions of B-DNA:</strong> Helical diameter is $2.0\\text{ nm}$ ($20\\text{ \\AA}$). Pitch (one complete $360^\\circ$ turn) spans $3.4\\text{ nm}$ ($34\\text{ \\AA}$), containing $10.0–10.5\\text{ base pairs}$ with an axial rise of $0.34\\text{ nm}$ per base pair.<br>&bull; <strong>Grooves:</strong> Asymmetric base attachment creates a wide Major Groove ($2.2\\text{ nm}$) and a narrow Minor Groove ($1.2\\text{ nm}$), providing sites for sequence-specific transcription factor and histones binding.</p><h3>4. DNA Denaturation, Melting Temperature (Tm), and Hyperchromicity</h3><p>&bull; <strong>Thermal Denaturation (Melting):</strong> Heating or alkaline pH disrupts inter-strand hydrogen bonds and base-stacking interactions, unwinding the native double helix into two separated random coils without cleaving covalent phosphodiester bonds.<br>&bull; <strong>Melting Temperature ($T_m$):</strong> The temperature at which $50\\%$ of double-helical structure is denatured. $T_m$ is directly proportional to the mole fraction of $\\text{G}\\equiv\\text{C}$ base pairs (due to 3 hydrogen bonds and stronger base stacking) and ionic strength of the buffer.<br>&bull; <strong>Hyperchromic Effect (Hyperchromicity):</strong> Conjugated heterocyclic bases absorb UV light strongly at $260\\text{ nm}$. In native dsDNA, close base stacking suppresses UV absorption (hypochromism). Upon denaturation into single strands, bases unstack and absorb UV light freely, producing a characteristic $30–40\\%$ increase in optical absorbance at $260\\text{ nm}$.</p><h3>5. Major RNA Species: Structure and Biological Roles</h3><p>&bull; <strong>Messenger RNA (mRNA, $\\sim 5\\%$ of total RNA):</strong><br>Carries genetic codons from nuclear DNA to ribosomes for translation. In eukaryotes, processed by a $5'\\text{-7-methylguanosine (m}^7\\text{G)}$ triphosphate cap (protects against exonucleases, promotes ribosome assembly), coding sequence starting with AUG, and a $3'\\text{-poly(A) tail}$ ($150–250$ adenines) ensuring stability.</p><p>&bull; <strong>Transfer RNA (tRNA, $\\sim 15\\%$ of total RNA):</strong><br>Small adaptor molecules ($73–93\\text{ nucleotides}$) that decipher mRNA codons and deliver corresponding amino acids. Secondary structure exhibits a <strong>cloverleaf model</strong>:<br>1. <em>Acceptor Arm:</em> 7-bp stem terminating in invariant single-stranded $5'\\text{-CCA-}3'$, where terminal adenosine esterifies amino acids.<br>2. <em>Anticodon Loop:</em> Contains triplet anticodon sequence complementary and antiparallel to mRNA codons.<br>3. <em>D-Arm:</em> Contains dihydrouridine (D); recognized by aminoacyl-tRNA synthetase.<br>4. <em>T\\psi C-Arm:</em> Contains pseudouridine (\\psi) and ribothymidine; binds ribosome surface.<br>Tertiary structure folds into a compact <strong>inverted L-shaped 3D conformation</strong> stabilized by tertiary hydrogen bonds.</p><p>&bull; <strong>Ribosomal RNA (rRNA, $\\sim 80\\%$ of total RNA):</strong><br>Structural and catalytic core of ribosomes. In eukaryotic 80S ribosomes: 60S large subunit contains 28S, 5.8S, and 5S rRNAs; 40S small subunit contains 18S rRNA. The $28\\text{S rRNA}$ possesses peptidyl transferase ribozyme activity that catalyzes peptide bond synthesis during protein translation.</p>",
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
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "KVAFSU 2021",
        "GADVASU 2022"
      ]
    }
  ],
  "unit-2": [
    {
      "id": "u2-def-01",
      "type": "define",
      "marks": 2,
      "question": "Define Michaelis Constant (Km) and state its physiological significance.",
      "topicId": "u2-t04",
      "answer": "<p><strong>Michaelis Constant ($K_m$):</strong> The substrate concentration ($[S]$) at which an enzyme-catalyzed reaction achieves exactly half of its maximal velocity ($V_{max}/2$). It is expressed in moles per liter (M or mM).</p><p><strong>Significance:</strong> $K_m$ reflects enzyme-substrate affinity; a low numerical $K_m$ value indicates high binding affinity (less substrate needed to reach $V_{max}/2$), whereas a high $K_m$ indicates low affinity.</p>",
      "keyPoints": [
        "Substrate concentration at which initial reaction velocity $v = V_{max} / 2$",
        "Inversely related to enzyme-substrate binding affinity",
        "Characteristic constant for an enzyme-substrate pair independent of enzyme concentration"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u2-def-02",
      "type": "define",
      "marks": 2,
      "question": "Define Isoenzymes (Isozymes) and give two clinical examples.",
      "topicId": "u2-t02",
      "answer": "<p><strong>Isoenzymes (Isozymes):</strong> Physically distinct, multiple molecular forms of an enzyme that catalyze the same biochemical reaction within the same organism, but differ in amino acid sequence, electrophoretic mobility, immunological properties, tissue distribution, and kinetic parameters ($K_m, V_{max}$).</p><p><strong>Clinical Examples:</strong><br>1. <strong>Lactate Dehydrogenase (LDH):</strong> 5 tetrameric isoenzymes (LDH-1 in myocardium to LDH-5 in skeletal muscle/liver).<br>2. <strong>Creatine Kinase (CK):</strong> 3 dimeric isoenzymes (CK-MM in muscle, CK-MB in myocardium, CK-BB in brain).</p>",
      "keyPoints": [
        "Catalyze the same chemical reaction but differ in structure and kinetic properties",
        "Encoded by different gene loci or alternative splicing variants",
        "Examples: LDH 1–5 tetramers, CK-MM / CK-MB / CK-BB dimers"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "RAJUVAS 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u2-def-03",
      "type": "define",
      "marks": 2,
      "question": "Define Turnover Number (kcat) and Specific Activity.",
      "topicId": "u2-t05",
      "answer": "<p><strong>Turnover Number ($k_{cat}$):</strong> The number of substrate molecules transformed into product per catalytic active site (or per enzyme molecule) per unit time when the enzyme is completely saturated with substrate ($k_{cat} = V_{max} / [E_t]$, expressed in $\\text{sec}^{-1}$).</p><p><strong>Specific Activity:</strong> The number of enzyme catalytic units (IU) per milligram of total protein ($\\text{IU/mg protein}$); it is the definitive index of enzyme purity during isolation.</p>",
      "keyPoints": [
        "Turnover number ($k_{cat} = V_{max} / [E_t]$): substrate molecules converted per active site per second",
        "Specific activity: Enzyme units per mg total protein ($\text{IU/mg}$)",
        "Specific activity increases with increasing purity during protein purification"
      ],
      "pyq": [
        "IVRI Annual Exam 2022",
        "LUVAS 2023",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u2-def-04",
      "type": "define",
      "marks": 2,
      "question": "Define Competitive Enzyme Inhibition and provide an example.",
      "topicId": "u2-t06",
      "answer": "<p><strong>Competitive Inhibition:</strong> A form of reversible enzyme inhibition in which a structural analog of the substrate competes directly with the normal substrate for binding to the free catalytic active center of the enzyme.</p><p><strong>Kinetic Hallmark:</strong> $K_m$ increases (apparent affinity decreases), while $V_{max}$ remains unchanged (can be overcome by excess substrate).<br><em>Classic Example:</em> Malonate competitively inhibits succinate dehydrogenase in the Krebs cycle by mimicking succinate.</p>",
      "keyPoints": [
        "Inhibitor structurally resembles the substrate and binds to the free active site",
        "Increases apparent $K_m$ without altering $V_{max}$",
        "Can be completely reversed by increasing substrate concentration",
        "Example: Malonate vs Succinate Dehydrogenase; Statins vs HMG-CoA Reductase"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2022",
        "SVVU 2021"
      ]
    },
    {
      "id": "u2-def-05",
      "type": "define",
      "marks": 2,
      "question": "Define Uncouplers of Oxidative Phosphorylation and state their physiological or toxic effect.",
      "topicId": "u2-t09",
      "answer": "<p><strong>Uncouplers:</strong> Chemical agents or physiological proteins that dissociate the process of electron transport from ATP synthesis by collapsing the transmembrane electrochemical proton gradient ($\\Delta\\mu_{\\text{H}^+}$) across the inner mitochondrial membrane without arresting electron flow.</p><p><strong>Effect:</strong> Electron flow and oxygen consumption accelerate, but no ATP is synthesized; the liberated free energy is dissipated entirely as heat (e.g., 2,4-dinitrophenol causing hyperthermia, or thermogenin/UCP-1 mediating non-shivering thermogenesis in brown fat of newborn calves).</p>",
      "keyPoints": [
        "Dissociate electron transport from ATP synthesis by dissipating proton-motive force",
        "Permit rapid electron flow and oxygen uptake while halting phosphorylation",
        "Energy is released as heat: 2,4-DNP (toxic hyperthermia), Thermogenin/UCP-1 (neonatal warmth)"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "GADVASU 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-def-06",
      "type": "define",
      "marks": 2,
      "question": "Define Substrate-Level Phosphorylation and cite two examples from glycolysis.",
      "topicId": "u2-t10",
      "answer": "<p><strong>Substrate-Level Phosphorylation:</strong> The direct enzymatic transfer of a high-energy phosphate group from a phosphorylated metabolic intermediate directly to ADP (or GDP) to generate ATP (or GTP), without requiring the electron transport chain or oxygen.</p><p><strong>Glycolytic Examples:</strong><br>1. <strong>Phosphoglycerate Kinase:</strong> $1,3\\text{-Bisphosphoglycerate} + \\text{ADP} \\rightarrow 3\\text{-Phosphoglycerate} + \\text{ATP}$<br>2. <strong>Pyruvate Kinase:</strong> $\\text{Phosphoenolpyruvate (PEP)} + \\text{ADP} \\rightarrow \\text{Pyruvate} + \\text{ATP}$</p>",
      "keyPoints": [
        "Direct synthesis of ATP/GTP by transfer of high-energy phosphate from a metabolic intermediate",
        "Independent of mitochondrial electron transport chain and oxygen availability",
        "Examples: Phosphoglycerate kinase and Pyruvate kinase in glycolysis; Succinyl-CoA synthetase in TCA cycle"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2021",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u2-def-07",
      "type": "define",
      "marks": 2,
      "question": "Define Anaplerotic Reactions and give the foremost example in carbohydrate metabolism.",
      "topicId": "u2-t11",
      "answer": "<p><strong>Anaplerotic Reactions ('Filling-up' Reactions):</strong> Enzymatic reactions that replenish intermediates of the Citric Acid (Krebs) Cycle that have been siphoned off for biosynthetic anabolic pathways (such as gluconeogenesis, amino acid synthesis, and porphyrin synthesis).</p><p><strong>Foremost Example:</strong> Carboxylation of pyruvate to oxaloacetate catalyzed by mitochondrial <strong>Pyruvate Carboxylase</strong>, requiring ATP and biotin: $$\\text{Pyruvate} + \\text{CO}_2 + \\text{ATP} + \\text{H}_2\\text{O} \\xrightarrow{\\text{Biotin, Acetyl-CoA}} \\text{Oxaloacetate} + \\text{ADP} + \\text{P}_i$$</p>",
      "keyPoints": [
        "Anaplerotic means 'filling up' depleted catalytic intermediates of the Krebs cycle",
        "Maintains oxaloacetate levels for continued condensation with acetyl-CoA",
        "Primary reaction: Pyruvate Carboxylase (mitochondrial, biotin-dependent, activated by acetyl-CoA)"
      ],
      "pyq": [
        "IVRI Annual Exam 2022",
        "MAFSU 2023",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u2-def-08",
      "type": "define",
      "marks": 2,
      "question": "Define the Cori Cycle and explain its physiological role.",
      "topicId": "u2-t13",
      "answer": "<p><strong>Cori Cycle (Lactic Acid Cycle):</strong> The metabolic cooperation between exercising skeletal muscle (or mature erythrocytes) and the liver. Anaerobic glycolysis in peripheral tissues produces lactate, which diffuses into blood and is transported to the liver, where it is resynthesized via gluconeogenesis into glucose, which is then released back into the circulation.</p><p><strong>Role:</strong> Prevents lactic acidosis in strenuous muscular exertion and recycles metabolic carbon skeletons.</p>",
      "keyPoints": [
        "Inter-organ metabolic cycle connecting anaerobic muscle/RBCs to the liver",
        "Muscle: Glucose $\rightarrow$ 2 Lactate (net 2 ATP produced)",
        "Liver: 2 Lactate $\rightarrow$ Glucose via gluconeogenesis (consumes 6 high-energy bonds)",
        "Prevents fatal systemic lactic acidosis during vigorous exercise"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2022",
        "WBUAFS 2023"
      ]
    },
    {
      "id": "u2-def-09",
      "type": "define",
      "marks": 2,
      "question": "Define Ketogenesis and name the three biological ketone bodies.",
      "topicId": "u2-t15",
      "answer": "<p><strong>Ketogenesis:</strong> The biochemical pathway occurring exclusively in the mitochondrial matrix of hepatocytes by which acetyl-CoA derived from accelerated fatty acid beta-oxidation is converted into water-soluble ketone bodies during states of carbohydrate deficiency or intense negative energy balance.</p><p><strong>The Three Ketone Bodies:</strong><br>1. <strong>Acetoacetate:</strong> Primary ketone body formed.<br>2. <strong>$\\beta$-Hydroxybutyrate (BHB):</strong> Chemically a hydroxy acid; predominant circulating form in ruminants.<br>3. <strong>Acetone:</strong> Volatile non-metabolizable ketone expelled via breath and urine.</p>",
      "keyPoints": [
        "Synthesis of ketone bodies in liver mitochondria from excess acetyl-CoA",
        "Triggered when oxaloacetate is depleted by high gluconeogenic demand",
        "Three ketone bodies: Acetoacetate, Beta-hydroxybutyrate, and Acetone"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "RAJUVAS 2021",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u2-def-10",
      "type": "define",
      "marks": 2,
      "question": "Define the Carnitine Shuttle and state its rate-limiting enzyme.",
      "topicId": "u2-t15",
      "answer": "<p><strong>Carnitine Shuttle:</strong> The specialized multi-component carrier system required to transport long-chain fatty acyl-CoA molecules across the impermeable inner mitochondrial membrane into the matrix for beta-oxidation.</p><p><strong>Rate-Limiting Enzyme:</strong> <strong>Carnitine Palmitoyltransferase-I (CPT-I)</strong>, located on the outer mitochondrial membrane; it conjugates fatty acyl groups with carnitine to form acylcarnitine and is allosterically inhibited by malonyl-CoA during lipogenesis.</p>",
      "keyPoints": [
        "Translocates long-chain acyl-CoA across impermeable inner mitochondrial membrane",
        "Components: CPT-I (outer membrane), Carnitine-acylcarnitine translocase, CPT-II (inner membrane)",
        "CPT-I is the committed rate-limiting step, inhibited by Malonyl-CoA"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "GADVASU 2023",
        "SVVU 2022"
      ]
    },
    {
      "id": "u2-def-11",
      "type": "define",
      "marks": 2,
      "question": "Define Transamination and name the essential coenzyme involved.",
      "topicId": "u2-t18",
      "answer": "<p><strong>Transamination:</strong> The reversible enzymatic transfer of an $\\alpha$-amino group ($-\\text{NH}_2$) from an $\\alpha$-amino acid to an $\\alpha$-keto acid (predominantly $\\alpha$-ketoglutarate), forming a new $\\alpha$-amino acid (L-glutamate) and a new $\\alpha$-keto acid, without the release of free ammonia.</p><p><strong>Coenzyme:</strong> <strong>Pyridoxal Phosphate (PLP)</strong>, the active coenzyme form of Vitamin B6, which forms a Schiff base intermediate.</p>",
      "keyPoints": [
        "Reversible transfer of amino group from amino acid to an alpha-keto acid",
        "Catalyzed by aminotransferases (ALT, AST); no free ammonia released",
        "Obligatory coenzyme: Pyridoxal Phosphate (PLP, Vitamin B6)",
        "Lysine and threonine do not undergo transamination"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u2-def-12",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Ureotelic, Uricotelic, and Ammonotelic animals with veterinary examples.",
      "topicId": "u2-t19",
      "answer": "<p>Animals are classified based on the principal chemical form in which they excrete toxic waste nitrogen derived from protein catabolism:</p><p>1. <strong>Ureotelic Animals:</strong> Excrete nitrogen primarily as water-soluble <strong>urea</strong> synthesized via the hepatic urea cycle. <em>Examples:</em> All domestic mammals (cattle, horses, dogs, sheep) and adult amphibians.<br>2. <strong>Uricotelic Animals:</strong> Excrete nitrogen primarily as semi-solid, insoluble <strong>uric acid</strong> crystals to minimize evaporative water loss. <em>Examples:</em> Birds (poultry) and terrestrial reptiles.<br>3. <strong>Ammonotelic Animals:</strong> Excrete toxic free <strong>ammonia</strong> directly through gills into surrounding water. <em>Examples:</em> Teleost (bony) fishes and aquatic invertebrates.</p>",
      "keyPoints": [
        "Ureotelic: excrete urea (mammals, adult amphibians) via hepatic urea cycle",
        "Uricotelic: excrete uric acid (birds/poultry, terrestrial reptiles) to conserve water",
        "Ammonotelic: excrete free ammonia directly (freshwater teleost fish)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "KVAFSU 2023",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u2-sa-01",
      "type": "short",
      "marks": 5,
      "question": "Explain Michaelis-Menten Kinetics, the derivation of the Lineweaver-Burk Plot, and factors influencing enzyme velocity.",
      "topicId": "u2-t04",
      "answer": "<p><strong>Michaelis-Menten Equation:</strong> Relates initial reaction velocity ($v$) to substrate concentration ($[S]$): $$v = \\frac{V_{max}[S]}{K_m + [S]}$$</p><p>When $[S] \\ll K_m$, reaction is first order ($v \\propto [S]$). When $[S] \\gg K_m$, enzyme is saturated and reaction is zero order ($v = V_{max}$). When $[S] = K_m$, $v = V_{max}/2$.</p><p><strong>Lineweaver-Burk Double-Reciprocal Plot:</strong> Taking the algebraic reciprocal of both sides yields a straight line equation ($y = mx + c$): $$\\frac{1}{v} = \\left(\\frac{K_m}{V_{max}}\\right)\\frac{1}{[S]} + \\frac{1}{V_{max}}$$ &bull; <strong>y-Intercept:</strong> $1/V_{max}$<br>&bull; <strong>x-Intercept:</strong> $-1/K_m$<br>&bull; <strong>Slope:</strong> $K_m / V_{max}$</p><p><strong>Factors Influencing Velocity:</strong><br>1. <em>Substrate Concentration:</em> Hyperbolic increase until saturation at $V_{max}$.<br>2. <em>Enzyme Concentration:</em> Linear proportional increase ($v \\propto [E]$) under excess substrate.<br>3. <em>Temperature:</em> Rate doubles for every $10^\\circ\\text{C}$ rise ($Q_{10} \\approx 2.0$) up to the optimum ($37–42^\\circ\\text{C}$ in domestic animals), beyond which thermal denaturation rapidly destroys activity.<br>4. <em>pH:</em> Bell-shaped curve with sharp optimum (e.g., Pepsin pH 1.5–2.0, Trypsin pH 8.0, Alkaline Phosphatase pH 9.5–10.0).</p>",
      "keyPoints": [
        "Michaelis-Menten equation: $v = V_{max}[S] / (K_m + [S])$; hyperbolic curve",
        "Lineweaver-Burk reciprocal equation: $1/v = (K_m/V_{max})(1/[S]) + 1/V_{max}$",
        "y-intercept is $1/V_{max}$; x-intercept is $-1/K_m$; slope is $K_m/V_{max}$",
        "Velocity affected by temperature (bell-shaped, $Q_{10}=2$), pH (ionization of active site), [S], and [E]"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u2-sa-02",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Competitive, Non-Competitive, and Uncompetitive Enzyme Inhibition with kinetic parameters and clinical examples.",
      "topicId": "u2-t06",
      "answer": "<p>Enzyme inhibition provides profound insights into drug action, metabolic regulation, and toxic mechanisms.</p>",
      "table": {
        "title": "Comparison of Enzyme Inhibition Types",
        "headers": [
          "Feature",
          "Competitive Inhibition",
          "Non-Competitive Inhibition",
          "Uncompetitive Inhibition"
        ],
        "rows": [
          [
            "Inhibitor Binding Site",
            "Binds directly to catalytic active site of free enzyme (E)",
            "Binds to allosteric site on both free E and ES complex",
            "Binds exclusively to Enzyme-Substrate (ES) complex"
          ],
          [
            "Structural Analogy",
            "Structurally resembles true substrate",
            "No structural resemblance to substrate",
            "No resemblance to substrate"
          ],
          [
            "Effect on Km",
            "<strong>Increases</strong> (apparent affinity decreases)",
            "<strong>Unchanged</strong>",
            "<strong>Decreases</strong> (ES complex trapped)"
          ],
          [
            "Effect on Vmax",
            "<strong>Unchanged</strong> (overcome by excess [S])",
            "<strong>Decreases</strong> (catalytic turnover halted)",
            "<strong>Decreases</strong>"
          ],
          [
            "Lineweaver-Burk Plot",
            "Lines intersect on y-axis at identical $1/V_{max}$",
            "Lines intersect on negative x-axis at $-1/K_m$",
            "Parallel lines with identical slopes ($K_m/V_{max}$)"
          ],
          [
            "Clinical / Toxic Example",
            "Malonate vs Succinate Dehydrogenase; Allopurinol vs Xanthine Oxidase",
            "Cyanide on Cytochrome Oxidase; Fluoride on Enolase",
            "Lithium on inositol monophosphatase"
          ]
        ]
      },
      "keyPoints": [
        "Competitive: binds active site, Km increases, Vmax unchanged, lines intersect on y-axis",
        "Non-competitive: binds allosteric site on E and ES, Km unchanged, Vmax decreases, lines intersect on x-axis",
        "Uncompetitive: binds only ES complex, both Km and Vmax decrease in parallel",
        "Reversibility: competitive can be outcompeted by excess substrate; non-competitive cannot"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "KVAFSU 2022",
        "RAJUVAS 2023"
      ]
    },
    {
      "id": "u2-sa-03",
      "type": "short",
      "marks": 5,
      "question": "Describe Peter Mitchell's Chemiosmotic Hypothesis and the rotary mechanism of mitochondrial ATP Synthase (Complex V).",
      "topicId": "u2-t08",
      "answer": "<p><strong>Chemiosmotic Hypothesis (Peter Mitchell, 1961):</strong><br>Oxidative phosphorylation couples electron transport to ATP synthesis through an electrochemical proton gradient across the inner mitochondrial membrane (IMM):<br>1. As electrons traverse Complexes I, III, and IV, free energy drives active extrusion of protons ($\\text{H}^+$) from the matrix into the intermembrane space ($10\\text{ H}^+$ pumped per NADH, $6\\text{ H}^+$ per $\\text{FADH}_2$).<br>2. Because the IMM is impermeable to protons, this creates a <strong>proton-motive force (PMF)</strong> comprising an electrical membrane potential ($\\Delta\\Psi \\approx 160–180\\text{ mV}$, inside negative) and a chemical pH gradient ($\\Delta\\text{pH} \\approx 0.75–1.0$, matrix alkaline).<br>3. Protons can re-enter the matrix only through the specific channel of ATP Synthase, driving the phosphorylation of ADP to ATP.</p><p><strong>Structure and Rotary Mechanism of ATP Synthase ($F_0F_1$ Complex):</strong><br>&bull; <strong>$F_0$ Subunit (Membrane-Embedded):</strong> Contains proton channel; composed of $a$, $b_2$, and a rotating ring of $c$-subunits ($c_{8–12}$). Inhibited by <strong>oligomycin</strong>.<br>&bull; <strong>$F_1$ Subunit (Matrix Globular Head):</strong> Catalytic core composed of three $\\alpha\\beta$ pairs surrounding a central asymmetric $\\gamma\\epsilon$ rotor shaft.<br>&bull; <strong>Binding Change Mechanism (Paul Boyer):</strong> Proton flux through $F_0$ causes the $c$-ring and $\\gamma$-shaft to rotate. As $\\gamma$ rotates, it induces sequential conformational changes in the catalytic $\\beta$-subunits through three states:<br>1. <em>Open (O) State:</em> Very low affinity; binds ADP + $\\text{P}_i$ and releases newly formed ATP.<br>2. <em>Loose (L) State:</em> Binds ADP and $\\text{P}_i$ securely in close proximity.<br>3. <em>Tight (T) State:</em> Catalyzes spontaneous synthesis of ATP from ADP and $\\text{P}_i$.<br>One full $360^\\circ$ rotation of $\\gamma$ produces 3 molecules of ATP.</p>",
      "keyPoints": [
        "Peter Mitchell (1961): electron transport pumps protons out, generating proton-motive force (PMF)",
        "PMF consists of transmembrane electrical potential (160–180 mV) and pH gradient",
        "F0 subunit forms transmembrane proton channel; blocked by oligomycin",
        "F1 head contains 3 catalytic alpha-beta dimers driven by asymmetric rotating gamma shaft",
        "Boyer's binding change mechanism: Open (O), Loose (L), and Tight (T) conformational states",
        "Full 360-degree rotation yields 3 ATP molecules"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u2-sa-04",
      "type": "short",
      "marks": 5,
      "question": "Enumerate the four respiratory chain complexes, mobile electron carriers, and specific site inhibitors of the mitochondrial ETC.",
      "topicId": "u2-t08",
      "answer": "<p>The mitochondrial Electron Transport Chain (ETC) comprises four multi-protein complexes embedded in the inner mitochondrial membrane:</p><p><strong>1. Complex I (NADH-Q Oxidoreductase):</strong> Contains FMN and Fe-S centers; transfers electrons from NADH to Ubiquinone (CoQ) while pumping $4\\text{ H}^+$ into intermembrane space.<br>&bull; <em>Specific Inhibitors:</em> <strong>Rotenone</strong> (botanical insecticide), Amytal (barbiturate), Piericidin A.</p><p><strong>2. Complex II (Succinate-Q Reductase):</strong> Composed of succinate dehydrogenase, FAD, and Fe-S centers; transfers electrons from succinate to CoQ. <strong>Pumps ZERO protons</strong>.<br>&bull; <em>Specific Inhibitors:</em> <strong>Malonate</strong> (competitive), TTFA, Carboxin.</p><p><strong>3. Complex III (Q-Cytochrome c Oxidoreductase):</strong> Cytochrome $b$, $c_1$, and Rieske Fe-S center; executes the Q-cycle, shuttling electrons to Cytochrome c while pumping $4\\text{ H}^+$.<br>&bull; <em>Specific Inhibitor:</em> <strong>Antimycin A</strong> (blocks Q-cycle electron transfer to cyt $b$).</p><p><strong>4. Complex IV (Cytochrome c Oxidase):</strong> Hemes $a$ and $a_3$, copper centers $\\text{Cu}_A$ and $\\text{Cu}_B$; transfers 4 electrons from cytochrome c to reduce molecular $\\text{O}_2 \\rightarrow 2\\text{ H}_2\\text{O}$ while pumping $2\\text{ H}^+$.<br>&bull; <em>Specific Inhibitors:</em> <strong>Cyanide ($\\text{CN}^-$)</strong>, <strong>Carbon Monoxide (CO)</strong>, Sodium Azide ($\\text{NaN}_3$), and $\\text{H}_2\\text{S}$ (bind ferric/ferrous heme $a_3$).</p><p><strong>Mobile Carriers:</strong><br>&bull; <em>Ubiquinone (Coenzyme Q):</em> Lipid-soluble benzoquinone in the membrane interior shuttling electrons from Complexes I and II to III.<br>&bull; <em>Cytochrome c:</em> Water-soluble peripheral hemeprotein on outer surface shuttling electrons from Complex III to IV.</p>",
      "keyPoints": [
        "Complex I (NADH-Q oxidoreductase): pumps 4 H+; inhibited by Rotenone and Amytal",
        "Complex II (Succinate dehydrogenase): does NOT pump protons; inhibited by Malonate",
        "Complex III (Cytochrome bc1): pumps 4 H+ via Q-cycle; inhibited by Antimycin A",
        "Complex IV (Cytochrome c oxidase): reduces O2 to H2O, pumps 2 H+; inhibited by Cyanide, CO, Azide",
        "Mobile carriers: lipid-soluble Ubiquinone (CoQ) and water-soluble Cytochrome c"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "KVAFSU 2023",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u2-sa-05",
      "type": "short",
      "marks": 5,
      "question": "Describe the Hexose Monophosphate (HMP) Shunt, its rate-limiting enzyme, and the clinical consequences of G6PD deficiency in veterinary medicine.",
      "topicId": "u2-t12",
      "answer": "<p><strong>The HMP Shunt (Pentose Phosphate Pathway):</strong> An alternative cytosolic pathway of glucose oxidation that produces no ATP directly, but fulfills two vital metabolic requirements:</p><p><strong>1. Oxidative Phase (Irreversible):</strong><br>Glucose-6-phosphate is converted to Ribulose-5-phosphate with the generation of <strong>2 NADPH</strong>:<br>&bull; <em>Step 1:</em> Glucose-6-phosphate $\\xrightarrow{\\text{G6PD, NADP}^+}$ 6-Phosphoglucono-$\\delta$-lactone + NADPH (Rate-limiting and committed step).<br>&bull; <em>Step 2:</em> Lactonase hydrolyzes it to 6-Phosphogluconate.<br>&bull; <em>Step 3:</em> 6-Phosphogluconate dehydrogenase decarboxylates it to Ribulose-5-phosphate + $\\text{CO}_2$ + NADPH.</p><p><strong>2. Non-Oxidative Phase (Reversible):</strong><br>Ribulose-5-P is converted by isomerases, epimerases, <strong>transketolase</strong> (TPP-dependent), and transaldolase into Ribose-5-phosphate (nucleotide synthesis) and glycolytic intermediates (fructose-6-P and glyceraldehyde-3-P).</p><p><strong>Biochemical Roles of NADPH:</strong><br>1. Reductive biosyntheses: Fatty acid synthesis, cholesterol/steroid synthesis, and surfactant synthesis.<br>2. Cytochrome P450 xenobiotic detoxification in hepatic microsomes.<br>3. Respiratory burst in phagocytic neutrophils (NADPH oxidase producing superoxide).</p><p><strong>Clinical Consequences of G6PD Deficiency in Animals:</strong><br>In mature erythrocytes lacking mitochondria, the HMP shunt is the sole source of NADPH. NADPH is essential for Glutathione Reductase to maintain Glutathione in its reduced state (GSH). GSH protects RBC membrane lipids and hemoglobin from oxidative damage by $\\text{H}_2\\text{O}_2$. In G6PD deficiency, oxidative drugs, toxins (e.g., allium/onions, brassica, copper toxicity in sheep), or infections cause unchecked peroxidation, hemoglobin oxidation into insoluble Heinz bodies, and acute intravascular <strong>Heinz-body hemolytic anemia</strong>.</p>",
      "keyPoints": [
        "Cytosolic pathway generating NADPH and Ribose-5-phosphate; no direct ATP synthesis",
        "G6PD (Glucose-6-Phosphate Dehydrogenase) is the committed rate-limiting step; requires NADP+",
        "NADPH fuels reductive biosyntheses (fatty acids, steroids) and phagocyte respiratory burst",
        "In RBCs, NADPH maintains reduced glutathione (GSH) via glutathione reductase",
        "G6PD deficiency causes oxidative erythrocyte lysis and Heinz-body hemolytic anemia"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2021",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u2-sa-06",
      "type": "short",
      "marks": 5,
      "question": "Explain the unique bypass reactions of Gluconeogenesis, the role of Propionate in ruminants, and reciprocal hormonal regulation.",
      "topicId": "u2-t13",
      "answer": "<p><strong>Gluconeogenesis:</strong> The synthesis of glucose from non-carbohydrate precursors (propionate, lactate, glycerol, glucogenic amino acids) occurring predominantly in the liver ($90\\\\%$) and renal cortex ($10\\\\%$).</p><p><strong>The Four Unique Irreversible Bypass Reactions:</strong><br>Glycolysis has three irreversible kinase steps that are circumvented in gluconeogenesis by four specific enzymes:</p><p>1. <strong>Bypass of Pyruvate Kinase:</strong><br>&bull; <em>Pyruvate Carboxylase (Mitochondria):</em> Pyruvate + $\\text{CO}_2$ + ATP $\\rightarrow$ Oxaloacetate (biotin-dependent; allosterically activated by acetyl-CoA).<br>&bull; <em>PEPCK (Phosphoenolpyruvate Carboxykinase):</em> Oxaloacetate + GTP $\\rightarrow$ Phosphoenolpyruvate (PEP) + $\\text{CO}_2$ + GDP.</p><p>2. <strong>Bypass of PFK-1:</strong><br>&bull; <em>Fructose-1,6-Bisphosphatase:</em> Fructose-1,6-bisphosphate + $\\text{H}_2\\text{O} \\rightarrow$ Fructose-6-phosphate + $\\text{P}_i$ (allosterically inhibited by AMP and F-2,6-BP).</p><p>3. <strong>Bypass of Hexokinase/Glucokinase:</strong><br>&bull; <em>Glucose-6-Phosphatase:</em> Glucose-6-phosphate + $\\text{H}_2\\text{O} \\rightarrow$ Free Glucose + $\\text{P}_i$ (located in ER lumen of liver and kidney; <strong>absent in skeletal muscle</strong>).</p><p><strong>Propionate Gluconeogenesis in Ruminants:</strong><br>Ruminants absorb negligible glucose from the gut. Ruminal microbial fermentation of dietary carbohydrates yields <strong>propionate</strong> (a 3-carbon volatile fatty acid), which enters the portal vein and provides $60–70\\%$ of all endogenous blood glucose:<br>$$\\text{Propionate} \\xrightarrow{\\text{Propionyl-CoA Synthetase}} \\text{Propionyl-CoA} \\xrightarrow{\\text{Propionyl-CoA Carboxylase (Biotin)}} \\text{D-Methylmalonyl-CoA}$$<br>$$\\xrightarrow{\\text{Epimerase}} \\text{L-Methylmalonyl-CoA} \\xrightarrow{\\text{Methylmalonyl-CoA Mutase (Vit } \\text{B}_{12}\\text{)}} \\text{Succinyl-CoA} \\rightarrow \\text{TCA Cycle} \\rightarrow \\text{Glucose}$$</p><p><strong>Reciprocal Regulation:</strong> Glucagon stimulates gluconeogenesis by decreasing Fructose-2,6-bisphosphate and inducing PEPCK expression. Insulin suppresses gluconeogenesis and activates glycolysis.</p>",
      "keyPoints": [
        "Circumvents 3 irreversible steps of glycolysis using 4 bypass enzymes",
        "Bypass enzymes: Pyruvate carboxylase (biotin), PEPCK, Fructose-1,6-bisphosphatase, Glucose-6-phosphatase",
        "Glucose-6-phosphatase is absent in skeletal muscle (muscle cannot export glucose)",
        "Propionate is the chief gluconeogenic precursor in ruminants via succinyl-CoA (requiring Biotin and Vitamin B12)",
        "Reciprocally controlled: Glucagon induces gluconeogenesis; Insulin represses it"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "KVAFSU 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u2-sa-07",
      "type": "short",
      "marks": 5,
      "question": "Describe the mitochondrial Beta-Oxidation spiral of saturated fatty acids and calculate the net ATP yield from one molecule of Palmitic Acid (16:0).",
      "topicId": "u2-t15",
      "answer": "<p><strong>Beta-Oxidation:</strong> The cyclical pathway occurring in the mitochondrial matrix where fatty acyl-CoA is degraded at the $\\beta$-carbon, releasing two-carbon acetyl-CoA units sequentially.</p><p><strong>The 4-Step Spiral Reaction:</strong><br>1. <strong>Oxidation (Dehydrogenation):</strong> Acyl-CoA $\\xrightarrow{\\text{Acyl-CoA Dehydrogenase}}$ trans-$\\Delta^2$-Enoyl-CoA (FAD reduced to $\\text{FADH}_2$).<br>2. <strong>Hydration:</strong> trans-$\\Delta^2$-Enoyl-CoA + $\\text{H}_2\\text{O} \\xrightarrow{\\text{Enoyl-CoA Hydratase}}$ L-3-Hydroxyacyl-CoA.<br>3. <strong>Oxidation:</strong> L-3-Hydroxyacyl-CoA $\\xrightarrow{\\text{3-Hydroxyacyl-CoA Dehydrogenase}}$ 3-Ketoacyl-CoA ($\\text{NAD}^+$ reduced to $\\text{NADH} + \\text{H}^+$).<br>4. <strong>Thiolysis (Cleavage):</strong> 3-Ketoacyl-CoA + $\\text{CoASH} \\xrightarrow{\\beta\\text{-Ketothiolase}}$ Acetyl-CoA + Acyl-CoA shortened by 2 carbons.</p><p><strong>Bioenergetics of Palmitic Acid (16C, Saturated):</strong><br>&bull; Palmitate requires <strong>7 cycles</strong> of $\\beta$-oxidation, yielding: <strong>8 Acetyl-CoA</strong>, <strong>7 $\\text{FADH}_2$</strong>, and <strong>7 $\\text{NADH}$</strong>.</p><p><strong>ATP Balance Sheet (Modern P:O Ratios):</strong><br>&bull; 8 Acetyl-CoA oxidized in TCA cycle ($8 \\times 10\\text{ ATP}$) = $80\\text{ ATP}$<br>&bull; 7 $\\text{FADH}_2$ via ETC ($7 \\times 1.5\\text{ ATP}$) = $10.5\\text{ ATP}$<br>&bull; 7 $\\text{NADH}$ via ETC ($7 \\times 2.5\\text{ ATP}$) = $17.5\\text{ ATP}$<br>&bull; <em>Gross ATP Yield:</em> $80 + 10.5 + 17.5 = 108\\text{ ATP}$<br>&bull; <em>Activation Cost:</em> Fatty acid activation consumes $2\\text{ high-energy bonds}$ ($\\text{ATP} \\rightarrow \\text{AMP} + \\text{PP}_i \\rightarrow 2\\text{ P}_i$) = $-2\\text{ ATP}$<br>&bull; <strong>Net ATP Yield:</strong> $108 - 2 = \\mathbf{106\\text{ ATP}}$ (or $129\\text{ ATP}$ under classical counting: $8 \\times 12 + 7 \\times 2 + 7 \\times 3 - 2 = 129$).</p>",
      "keyPoints": [
        "Mitochondrial matrix recurring 4-step sequence: Oxidation (FAD), Hydration, Oxidation (NAD+), Thiolysis",
        "Palmitate (16C) undergoes 7 cycles to yield 8 Acetyl-CoA, 7 FADH2, and 7 NADH",
        "Gross energy generated: 108 ATP (modern calculation)",
        "Net yield: 108 - 2 (activation cost) = 106 ATP (129 ATP in classical counting)"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u2-sa-08",
      "type": "short",
      "marks": 5,
      "question": "Describe de novo Fatty Acid Biosynthesis, detailing the Citrate Shuttle and the multi-enzyme Fatty Acid Synthase (FAS) complex.",
      "topicId": "u2-t16",
      "answer": "<p><strong>De Novo Lipogenesis:</strong> Occurs in the <strong>cytosol</strong> of liver, adipose tissue, and lactating mammary glands, synthesizing palmitate (16:0) from acetyl-CoA.</p><p><strong>1. The Citrate-Malate Shuttle:</strong><br>Acetyl-CoA is generated inside mitochondria and cannot cross the inner mitochondrial membrane. Mitochondrial Citrate Synthase condenses acetyl-CoA with oxaloacetate into <strong>citrate</strong>. A tricarboxylate transporter exports citrate to the cytosol, where <strong>ATP-Citrate Lyase</strong> cleaves it back into cytosolic Acetyl-CoA + Oxaloacetate at the cost of 1 ATP.</p><p><strong>2. Committed Regulatory Step (Acetyl-CoA Carboxylase, ACC):</strong><br>Cytosolic Acetyl-CoA + $\\text{CO}_2$ + ATP $\\xrightarrow{\\text{ACC (Biotin)}}$ Malonyl-CoA + ADP + $\\text{P}_i$. Activated allosterically by citrate; inhibited by palmitoyl-CoA.</p><p><strong>3. Fatty Acid Synthase (FAS) Multi-Enzyme Complex:</strong><br>A homodimer of identical multifunctional polypeptide chains arranged head-to-tail, each containing 7 catalytic domains and an Acyl Carrier Protein (ACP) with a 4'-phosphopantetheine prosthetic group:</p><p>&bull; <em>Cycle of 4 Steps:</em><br>1. <strong>Condensation:</strong> $\\beta$-Ketoacyl synthase (KS) condenses acetyl (or growing acyl) with malonyl-ACP, releasing $\\text{CO}_2$.<br>2. <strong>Reduction:</strong> $\\beta$-Ketoacyl reductase reduces keto group to alcohol using NADPH.<br>3. <strong>Dehydration:</strong> $\\beta$-Hydroxyacyl dehydratase removes water to form trans-$\\Delta^2$-enoyl-ACP.<br>4. <strong>Reduction:</strong> Enoyl reductase reduces double bond using NADPH to yield a saturated acyl-ACP elongated by 2 carbons.</p><p>&bull; <em>Termination:</em> After 7 cycles, the 16-carbon palmitoyl-ACP is reached; the <strong>Thioesterase (TE)</strong> domain specifically hydrolyzes it to release free <strong>Palmitate (16:0)</strong>.</p><p><strong>Sources of NADPH:</strong> HMP shunt (G6PD, 6-phosphogluconate dehydrogenase) and cytosolic Malic Enzyme ($\\text{Malate} + \\text{NADP}^+ \\rightarrow \\text{Pyruvate} + \\text{CO}_2 + \\text{NADPH}$). In ruminants, rumen-derived <strong>acetate</strong> is the primary carbon donor.</p>",
      "keyPoints": [
        "Cytosolic pathway using Acetyl-CoA exported via the Citrate-Malate shuttle",
        "Rate-limiting committed step: Acetyl-CoA Carboxylase (biotin-dependent; synthesizes Malonyl-CoA)",
        "Fatty Acid Synthase (FAS) is a homodimeric multi-enzyme complex with 7 catalytic domains and ACP",
        "Elongation cycle: Condensation, Reduction (NADPH), Dehydration, Reduction (NADPH)",
        "Thioesterase domain cleaves palmitoyl-ACP to release free Palmitate (16:0)",
        "Ruminants utilize rumen acetate rather than glucose for fatty acid synthesis"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "RAJUVAS 2023",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u2-la-01",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive dissertation on Enzyme Biochemistry. Discuss IUBMB systematic classification (EC 1 to 6 with examples), catalytic active site theories, enzyme kinetics (Michaelis-Menten and Lineweaver-Burk derivation), factors influencing enzyme velocity, and an exhaustive comparative analysis of competitive, non-competitive, uncompetitive, and suicide inhibition.",
      "topicId": "u2-t01",
      "answer": "<h3>1. Introduction and Nature of Enzymes</h3><p>Enzymes are biological catalysts, almost universally globular proteins (with the exception of catalytic RNA ribozymes), that accelerate chemical reactions by factors of $10^6$ to $10^{17}$ by lowering activation energy ($\\Delta G^\\ddagger$) without shifting thermodynamic equilibrium ($\\Delta G$).</p><h3>2. IUBMB Systematic Enzyme Classification (EC System)</h3><p>The International Union of Biochemistry and Molecular Biology (IUBMB) classifies all enzymes into six major classes based on the reaction catalyzed (EC Number: Class.Subclass.Sub-subclass.Individual number):</p><p>1. <strong>Class 1: Oxidoreductases:</strong> Catalyze oxidation-reduction reactions involving electron transfer, hydride ions, or hydrogen atoms. <em>Examples:</em> Lactate dehydrogenase (LDH, EC 1.1.1.27), Succinate dehydrogenase.<br>2. <strong>Class 2: Transferases:</strong> Catalyze the transfer of functional chemical groups (amino, methyl, phosphate, glycosyl) from a donor to an acceptor. <em>Examples:</em> Alanine aminotransferase (ALT, EC 2.6.1.2), Hexokinase.<br>3. <strong>Class 3: Hydrolases:</strong> Catalyze the cleavage of covalent bonds (ester, peptide, glycosidic) by the addition of water. <em>Examples:</em> Lipase, Trypsin, Alkaline phosphatase (ALP, EC 3.1.3.1).<br>4. <strong>Class 4: Lyases:</strong> Catalyze the non-hydrolytic cleavage of $\\text{C}-\\text{C}, \\text{C}-\\text{O}, \\text{C}-\\text{N}$ bonds, leaving double bonds or adding groups to double bonds without ATP consumption. <em>Examples:</em> Aldolase, Pyruvate decarboxylase.<br>5. <strong>Class 5: Isomerases:</strong> Catalyze geometric, structural, or optical intramolecular rearrangements within a single molecule. <em>Examples:</em> Triose phosphate isomerase, Phosphoglucomutase.<br>6. <strong>Class 6: Ligases (Synthetases):</strong> Catalyze the joining of two molecules coupled with the simultaneous cleavage of a high-energy phosphate bond (ATP). <em>Examples:</em> Pyruvate carboxylase (EC 6.4.1.1), DNA ligase.</p><h3>3. Active Site Models and Catalytic Mechanisms</h3><p>&bull; <strong>Emil Fischer Lock-and-Key Model (1894):</strong> Proposed that the enzyme active center has a rigid, pre-formed geometric shape perfectly complementary to the substrate.<br>&bull; <strong>Daniel Koshland Induced-Fit Theory (1958):</strong> Demonstrates that the active site is dynamic and flexible. Substrate binding induces a precise conformational reshaping in the catalytic cleft, aligning reactive amino acid residues (catalytic triad: Ser, His, Asp in serine proteases) to stabilize the transition state.</p><h3>4. Enzyme Kinetics and Derivations</h3><p>&bull; <strong>Michaelis-Menten Model:</strong> Based on the Briggs-Haldane steady-state assumption where $[ES]$ remains constant ($d[ES]/dt = 0$): $$\\text{E} + \\text{S} \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} \\text{ES} \\xrightarrow{k_2} \\text{E} + \\text{P}$$ Michaelis constant: $K_m = (k_{-1} + k_2)/k_1$. At steady state: $$v = \\frac{V_{max}[S]}{K_m + [S]}$$</p><p>&bull; <strong>Lineweaver-Burk Double-Reciprocal Transformation:</strong> Inverting the Michaelis-Menten equation produces a straight line equation: $$\\frac{1}{v} = \\left(\\frac{K_m}{V_{max}}\\right)\\frac{1}{[S]} + \\frac{1}{V_{max}}$$ &bull; <em>x-Intercept:</em> $-1/K_m$<br>&bull; <em>y-Intercept:</em> $1/V_{max}$<br>&bull; <em>Slope:</em> $K_m / V_{max}$</p><h3>5. Factors Influencing Reaction Velocity</h3><p>1. <em>Substrate Concentration:</em> Hyperbolic response shifting from first order to zero order at saturation ($V_{max}$).<br>2. <em>Temperature:</em> Rate accelerates with temperature up to thermal optimum ($37–42^\\circ\\text{C}$ in domestic animals), after which heat denaturation causes rapid loss of function ($Q_{10} \\approx 2.0$).<br>3. <em>pH:</em> Determines ionization of catalytic residues; bell-shaped curves with characteristic optima (Pepsin 1.5–2.0, Salivary Amylase 6.8, ALP 9.5–10.0).</p><h3>6. Detailed Comparative Analysis of Enzyme Inhibition</h3><p>&bull; <strong>Competitive Inhibition:</strong> Inhibitor (I) is a structural analog of substrate (S) and competes for the free active site. Adding excess substrate displaces the inhibitor. Kinetic outcome: <strong>$K_m$ increases, $V_{max}$ unchanged</strong>. Lineweaver-Burk lines intersect on the y-axis at $1/V_{max}$. <em>Examples:</em> Malonate vs Succinate dehydrogenase; Allopurinol vs Xanthine oxidase; Methotrexate vs Dihydrofolate reductase; Statins vs HMG-CoA reductase.</p><p>&bull; <strong>Non-Competitive Inhibition:</strong> Inhibitor binds reversibly to both free E and ES complex at an allosteric site. Substrate binding cannot overcome inhibition. Kinetic outcome: <strong>$K_m$ unchanged, $V_{max}$ decreases</strong>. Lineweaver-Burk lines intersect on the negative x-axis at $-1/K_m$. <em>Examples:</em> Cyanide inhibiting cytochrome oxidase; heavy metals ($\\text{Pb}^{2+}, \\text{Hg}^{2+}$) binding sulfhydryl ($-\\text{SH}$) enzymes; Fluoride on enolase.</p><p>&bull; <strong>Uncompetitive Inhibition:</strong> Inhibitor binds exclusively to the ES complex, trapping it and preventing catalytic turnover. Kinetic outcome: <strong>Both $K_m$ and $V_{max}$ decrease in equal proportion</strong> ($K_m/V_{max}$ slope remains constant). Lineweaver-Burk lines yield parallel plots. <em>Example:</em> Lithium inhibiting inositol monophosphatase.</p><p>&bull; <strong>Suicide (Mechanism-Based Irreversible) Inhibition:</strong> The enzyme converts an unreactive substrate analog into a chemically reactive intermediate that forms an irreversible covalent bond with active-site catalytic residues, permanently inactivating the enzyme. <em>Examples:</em> Organophosphates phosphorylating the active serine of acetylcholinesterase; Aspirin acetylating serine-530 of Cyclooxygenase (COX-1/2); Disulfiram on aldehyde dehydrogenase.</p>",
      "keyPoints": [
        "IUBMB 6 classes: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases",
        "Koshland induced-fit model: dynamic active center complementary to the transition state",
        "Michaelis-Menten kinetics: $v = V_{max}[S] / (K_m + [S])$; derivation and steady-state assumption",
        "Lineweaver-Burk plot: straight line with y-intercept $1/V_{max}$ and x-intercept $-1/K_m$",
        "Competitive inhibition: Km increases, Vmax unchanged, outcompeted by excess substrate",
        "Non-competitive inhibition: Km unchanged, Vmax decreases, binds allosteric site",
        "Uncompetitive inhibition: both Km and Vmax decrease in parallel",
        "Suicide inhibition: covalent mechanism-based inactivation (organophosphates, aspirin, allopurinol)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-la-02",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Biological Oxidation, the Mitochondrial Electron Transport Chain, and Oxidative Phosphorylation. Detail the organization of respiratory complexes, the mechanism of the F0F1 ATP Synthase rotor, modern P:O stoichiometry, site-specific respiratory inhibitors, and chemical vs physiological uncoupling in neonatal animals.",
      "topicId": "u2-t07",
      "answer": "<h3>1. Bioenergetics and Redox Potentials</h3><p>Biological oxidation involves the removal of electrons from organic fuel molecules, transferred via reduced coenzymes ($\\text{NADH}, \\text{FADH}_2$) to molecular oxygen. The standard reduction potential ($E_0'$, in volts) measures the tendency of a redox pair to donate or accept electrons. Standard free energy change ($\\Delta G^{0'}$) is directly related to the redox potential difference ($\\Delta E_0'$): $$\\Delta G^{0'} = -nF\\Delta E_0'$$ Electrons flow spontaneously down the thermodynamic gradient from electronegative donors ($\\text{NAD}^+/\\text{NADH}, E_0' = -0.32\\text{ V}$) toward the electropositive terminal acceptor ($\\frac{1}{2}\\text{O}_2/\\text{H}_2\\text{O}, E_0' = +0.82\\text{ V}$), liberating $\\Delta G^{0'} = -220\\text{ kJ/mol}$ ($-52.6\\text{ kcal/mol}$) of free energy per electron pair.</p><h3>2. High-Energy Phosphate Compounds</h3><p>Phosphorylated compounds that release more free energy upon hydrolysis than the terminal bond of ATP ($\\Delta G^{0'} = -30.5\\text{ kJ/mol}$) are high-energy compounds:<br>&bull; <strong>Phosphoenolpyruvate (PEP):</strong> $\\Delta G^{0'} = -61.9\\text{ kJ/mol}$ (highest phosphate transfer potential).<br>&bull; <strong>1,3-Bisphosphoglycerate (1,3-BPG):</strong> $\\Delta G^{0'} = -49.3\\text{ kJ/mol}$.<br>&bull; <strong>Phosphocreatine:</strong> $\\Delta G^{0'} = -43.1\\text{ kJ/mol}$ (muscle energy reservoir).<br>&bull; <strong>Acetyl-CoA / Succinyl-CoA:</strong> Thioester bonds releasing $\\sim -31.5\\text{ kJ/mol}$.</p><h3>3. Architecture of the Respiratory Chain Complexes</h3><p>Four multi-protein complexes are embedded in the inner mitochondrial membrane (IMM):</p><p><strong>A. Complex I (NADH-Q Oxidoreductase, $850\\text{ kDa}$, 45 subunits):</strong><br>Accepts 2 electrons from NADH via Flavin Mononucleotide (FMN), shuttling them through a chain of 8 Iron-Sulfur (Fe-S) centers to Ubiquinone (CoQ). The large conformational switch pumps <strong>$4\\text{ H}^+$</strong> across the IMM into the intermembrane space.<br>&bull; <em>Specific Inhibitors:</em> Rotenone, Amytal, Piericidin A.</p><p><strong>B. Complex II (Succinate-Q Reductase / Succinate Dehydrogenase, $140\\text{ kDa}$, 4 subunits):</strong><br>The only membrane-bound enzyme of the Krebs cycle. Contains covalently bound FAD and three Fe-S centers $[2\\text{Fe-}2\\text{S}, 4\\text{Fe-}4\\text{S}, 3\\text{Fe-}4\\text{S}]$. Oxidizes succinate to fumarate, reducing FAD $\\rightarrow \\text{FADH}_2$, and transfers electrons to CoQ. <strong>Pumps ZERO protons</strong> ($\\Delta G$ is insufficient to drive translocation).<br>&bull; <em>Inhibitor:</em> Malonate (competitive).</p><p><strong>C. Complex III (Q-Cytochrome c Oxidoreductase, $250\\text{ kDa}$, 11 subunits):</strong><br>Contains Cytochrome $b$ (hemes $b_L$ and $b_H$), Rieske Fe-S center, and Cytochrome $c_1$. Executes the cyclic <strong>Q-Cycle</strong>, transferring electrons from two-electron carrier ubiquinol ($\\text{QH}_2$) to single-electron carrier Cytochrome c, pumping <strong>$4\\text{ H}^+$</strong>.<br>&bull; <em>Inhibitor:</em> Antimycin A (Qi site inhibitor), Myxothiazol (Qo site inhibitor).</p><p><strong>D. Complex IV (Cytochrome c Oxidase, $204\\text{ kDa}$, 13 subunits):</strong><br>Contains two heme groups ($a$ and $a_3$) and two copper centers ($\\text{Cu}_A$ and $\\text{Cu}_B$). Accepts single electrons sequentially from 4 reduced Cytochrome c molecules to completely reduce $1\\text{ O}_2 \\rightarrow 2\\text{ H}_2\\text{O}$, while pumping <strong>$2\\text{ H}^+$</strong>.<br>&bull; <em>Inhibitors:</em> Cyanide ($\\text{CN}^-$), Carbon Monoxide (CO), Sodium Azide ($\\text{NaN}_3$), and Hydrogen Sulfide ($\\text{H}_2\\text{S}$).</p><h3>4. Peter Mitchell's Chemiosmotic Hypothesis and ATP Synthase</h3><p>&bull; <strong>Proton-Motive Force (PMF):</strong> Total protons pumped per pair of electrons: $10\\text{ H}^+$ per NADH ($4+4+2$) and $6\\text{ H}^+$ per $\\text{FADH}_2$ ($0+4+2$). This establishes an electrochemical potential: $$\\text{PMF} = \\Delta\\Psi - \\left(\\frac{2.3RT}{F}\\right)\\Delta\\text{pH} \\approx 180–220\\text{ mV}$$</p><p>&bull; <strong>ATP Synthase ($F_0F_1$ Complex V):</strong><br>Protons flow back into the matrix through the $F_0$ rotor ring ($c_8$ in vertebrates), driving a $360^\\circ$ rotation of the central $\\gamma$-shaft. According to Paul Boyer's <em>Binding Change Mechanism</em>, the three catalytic $\\beta$-subunits cycle through Open (O), Loose (L), and Tight (T) conformations. Four protons translocated generate 1 ATP ($3\\text{ H}^+$ for mechanical rotation $+ 1\\text{ H}^+$ for phosphate import via the $\\text{P}_i/\\text{H}^+$ symporter).<br>&bull; <strong>Modern P:O Ratios:</strong> $\\text{NADH} = 10 / 4 = \\mathbf{2.5\\text{ ATP}}$; $\\text{FADH}_2 = 6 / 4 = \\mathbf{1.5\\text{ ATP}}$.</p><h3>5. Uncoupling: Toxic vs Physiological Non-Shivering Thermogenesis</h3><p>&bull; <strong>Chemical Uncouplers:</strong> 2,4-Dinitrophenol (2,4-DNP), dicumarol, and FCCP are lipophilic weak acids that shuttle protons across the inner membrane, collapsing the PMF. Respiration accelerates uncontrolled, but ATP is not synthesized; energy is dissipated as lethal hyperthermia.<br>&bull; <strong>Physiological Uncoupling (Thermogenin / UCP-1):</strong> Brown adipose tissue (BAT) in newborn lambs, calves, and piglets contains Uncoupling Protein-1 (UCP-1 / Thermogenin). UCP-1 opens a regulated proton channel in the inner membrane, dissipating PMF directly into heat. This <strong>non-shivering thermogenesis</strong> protects vulnerable newborn farm animals from fatal neonatal hypothermia.</p><h3>6. ATP Synthase and Transport Inhibitors</h3><p>&bull; <strong>Oligomycin:</strong> Binds to the $F_0$ subunit, plugging the proton channel and arresting both ATP synthesis and respiration.<br>&bull; <strong>Atractyloside & Bongkrekic Acid:</strong> Inhibit the Adenine Nucleotide Translocase (ANT), blocking ADP entry and ATP exit from the mitochondrial matrix.</p>",
      "keyPoints": [
        "Bioenergetics: $\\Delta G^{0'} = -nF\\Delta E_0'$; exergonic electron transfer from NADH (-0.32 V) to O2 (+0.82 V)",
        "High-energy compounds: Phosphoenolpyruvate (-61.9 kJ/mol), 1,3-BPG, phosphocreatine, ATP",
        "Complexes I, III, IV pump protons (10 H+ per NADH, 6 H+ per FADH2); Complex II does not pump protons",
        "Site-specific ETC blockers: Rotenone (I), Malonate (II), Antimycin A (III), Cyanide and CO (IV)",
        "ATP Synthase (Complex V): F0 proton rotor, F1 catalytic head, Boyer's binding change mechanism (O, L, T states)",
        "Modern stoichiometry: P:O ratio is 2.5 for NADH, 1.5 for FADH2 (4 H+ per ATP synthesized and imported)",
        "Chemical uncouplers (2,4-DNP) collapse PMF causing hyperthermia; UCP-1/Thermogenin in neonatal brown fat generates vital warmth"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "KVAFSU 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u2-la-03",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive description of Carbohydrate Catabolism. Discuss the complete enzymatic sequence of Glycolysis (EMP pathway), its regulatory enzymes, anaerobic vs aerobic fates, the Pyruvate Dehydrogenase (PDH) multi-enzyme complex, the Citric Acid Cycle, its amphibolic nature, anaplerotic reactions, and a complete net ATP balance sheet per mole of glucose.",
      "topicId": "u2-t10",
      "answer": "<h3>1. Glycolysis (Embden-Meyerhof-Parnas / EMP Pathway)</h3><p>The universal cytosolic pathway converting one mole of glucose (6C) into two moles of pyruvate (3C) with concomitant generation of ATP and NADH. Operates with or without oxygen.</p><p><strong>Phase I: Energy Investment Phase (Consumes 2 ATP):</strong><br>1. <em>Hexokinase / Glucokinase:</em> $\\text{Glucose} + \\text{ATP} \\rightarrow \\text{Glucose-6-Phosphate (G6P)} + \\text{ADP}$. Hexokinase (all tissues) has low $K_m$ ($0.1\\text{ mM}$) and is inhibited by G6P. Glucokinase (liver, pancreatic $\\beta$-cells) has high $K_m$ ($10\\text{ mM}$), is not inhibited by G6P, and functions during postprandial hyperglycemia.<br>2. <em>Phosphohexose Isomerase:</em> $\\text{G6P} \\rightleftharpoons \\text{Fructose-6-Phosphate (F6P)}$.<br>3. <em>Phosphofructokinase-1 (PFK-1):</em> $\\text{F6P} + \\text{ATP} \\rightarrow \\text{Fructose-1,6-Bisphosphate (F1,6BP)} + \\text{ADP}$. <strong>Committed, rate-limiting step</strong>. Activated allosterically by AMP and Fructose-2,6-bisphosphate; inhibited by ATP and citrate.<br>4. <em>Aldolase:</em> $\\text{F1,6BP} \\rightleftharpoons \\text{DHAP} + \\text{Glyceraldehyde-3-Phosphate (G3P)}$.<br>5. <em>Triose Phosphate Isomerase:</em> $\\text{DHAP} \\rightleftharpoons \\text{G3P}$.</p><p><strong>Phase II: Energy Generation Phase (Per 2 Trioses: Produces 4 ATP + 2 NADH):</strong><br>6. <em>G3P Dehydrogenase:</em> $2\\text{ G3P} + 2\\text{ NAD}^+ + 2\\text{ P}_i \\rightleftharpoons 2\\ (1,3\\text{-Bisphosphoglycerate}) + 2\\text{ NADH} + 2\\text{ H}^+$.<br>7. <em>Phosphoglycerate Kinase:</em> $2\\ (1,3\\text{-BPG}) + 2\\text{ ADP} \\rightleftharpoons 2\\ (3\\text{-PG}) + 2\\text{ ATP}$ (1st Substrate-Level Phosphorylation).<br>8. <em>Phosphoglycerate Mutase:</em> $2\\ (3\\text{-PG}) \\rightleftharpoons 2\\ (2\\text{-PG})$.<br>9. <em>Enolase:</em> $2\\ (2\\text{-PG}) \\rightleftharpoons 2\\ \\text{Phosphoenolpyruvate (PEP)} + 2\\text{ H}_2\\text{O}$ (Inhibited by <strong>Fluoride</strong>).<br>10. <em>Pyruvate Kinase:</em> $2\\ \\text{PEP} + 2\\text{ ADP} \\rightarrow 2\\ \\text{Pyruvate} + 2\\text{ ATP}$ (2nd Substrate-Level Phosphorylation).</p><p>&bull; <strong>Anaerobic Fate:</strong> In erythrocytes or hypoxic muscle, <strong>Lactate Dehydrogenase (LDH)</strong> reduces pyruvate to lactate, re-oxidizing $\\text{NADH} \\rightarrow \\text{NAD}^+$ to permit continuous glycolysis: $\\text{Pyruvate} + \\text{NADH} + \\text{H}^+ \\rightleftharpoons \\text{Lactate} + \\text{NAD}^+$. Net yield = <strong>2 ATP</strong>.</p><h3>2. The Pyruvate Dehydrogenase (PDH) Multi-Enzyme Complex</h3><p>Located in the mitochondrial matrix; catalyzes irreversible oxidative decarboxylation: $$\\text{Pyruvate} + \\text{NAD}^+ + \\text{CoASH} \\rightarrow \\text{Acetyl-CoA} + \\text{NADH} + \\text{H}^+ + \\text{CO}_2$$<br>&bull; <strong>3 Enzymes:</strong> $E_1$ (Pyruvate dehydrogenase), $E_2$ (Dihydrolipoyl transacetylase), $E_3$ (Dihydrolipoyl dehydrogenase).<br>&bull; <strong>5 Coenzymes:</strong> Thiamine pyrophosphate (TPP, $\\text{B}_1$), Lipoic acid, Coenzyme A (pantothenate, $\\text{B}_5$), FAD ($\\text{B}_2$), and $\\text{NAD}^+$ (niacin, $\\text{B}_3$).</p><h3>3. The Citric Acid Cycle (Krebs / TCA Cycle)</h3><p>The cyclic 8-step pathway in the mitochondrial matrix completely oxidizing acetyl-CoA to $2\\text{ CO}_2$:</p><p>1. <em>Citrate Synthase:</em> $\\text{Acetyl-CoA} + \\text{Oxaloacetate} + \\text{H}_2\\text{O} \\rightarrow \\text{Citrate} + \\text{CoASH}$.<br>2. <em>Aconitase:</em> $\\text{Citrate} \\rightleftharpoons \\text{cis-Aconitate} \\rightleftharpoons \\text{Isocitrate}$ (Suicide-inhibited by <strong>fluorocitrate</strong>).<br>3. <em>Isocitrate Dehydrogenase:</em> $\\text{Isocitrate} + \\text{NAD}^+ \\rightarrow \\alpha\\text{-Ketoglutarate} + \\text{CO}_2 + \\text{NADH}$ (Rate-limiting).<br>4. <em>$\\alpha$-Ketoglutarate Dehydrogenase Complex:</em> $\\alpha\\text{-KG} + \\text{NAD}^+ + \\text{CoASH} \\rightarrow \\text{Succinyl-CoA} + \\text{CO}_2 + \\text{NADH}$ (Requires 5 cofactors like PDH).<br>5. <em>Succinyl-CoA Synthetase:</em> $\\text{Succinyl-CoA} + \\text{GDP} + \\text{P}_i \\rightleftharpoons \\text{Succinate} + \\text{GTP} + \\text{CoASH}$ (Substrate-Level Phosphorylation).<br>6. <em>Succinate Dehydrogenase:</em> $\\text{Succinate} + \\text{FAD} \\rightleftharpoons \\text{Fumarate} + \\text{FADH}_2$ (Complex II, inhibited by malonate).<br>7. <em>Fumarase:</em> $\\text{Fumarate} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{L-Malate}$.<br>8. <em>Malate Dehydrogenase:</em> $\\text{L-Malate} + \\text{NAD}^+ \\rightleftharpoons \\text{Oxaloacetate} + \\text{NADH} + \\text{H}^+$.</p><h3>4. Amphibolic Nature and Anaplerosis</h3><p>&bull; <strong>Amphibolic Role:</strong> Functions in both catabolism and anabolism. Intermediates supply precursor skeletons: $\\alpha$-ketoglutarate for glutamate/GABA, succinyl-CoA for heme biosynthesis, oxaloacetate for aspartate and gluconeogenesis, citrate for cytosolic lipogenesis.<br>&bull; <strong>Anaplerotic Enzymes:</strong> Replenish drained intermediates. Most critical: <strong>Pyruvate Carboxylase</strong> ($\\text{Pyruvate} + \\text{CO}_2 + \\text{ATP} \\rightarrow \\text{Oxaloacetate}$).</p><h3>5. Total Net ATP Balance Sheet per Glucose (Aerobic Oxidation)</h3><p>&bull; <em>Glycolysis:</em> 2 ATP (substrate-level) $+ 2\\text{ NADH}$ ($2 \\times 2.5 = 5\\text{ ATP}$ via malate-aspartate shuttle) = $7\\text{ ATP}$ (or $5\\text{ ATP}$ via glycerol-phosphate shuttle).<br>&bull; <em>PDH Reaction (2 Pyruvate):</em> $2\\text{ NADH} \\times 2.5 = 5\\text{ ATP}$.<br>&bull; <em>Krebs Cycle (2 Acetyl-CoA):</em> $2\\text{ GTP} = 2\\text{ ATP}$; $6\\text{ NADH} \\times 2.5 = 15\\text{ ATP}$; $2\\text{ FADH}_2 \\times 1.5 = 3\\text{ ATP}$; Subtotal = $20\\text{ ATP}$.<br>&bull; <strong>Grand Total:</strong> $7 + 5 + 20 = \\mathbf{32\\text{ ATP}}$ per mole of glucose under modern stoichiometry (or $38\\text{ ATP}$ classical: $8 + 6 + 24 = 38$).</p>",
      "keyPoints": [
        "Glycolysis: 10 cytosolic steps; key regulatory enzymes: Hexokinase, PFK-1 (rate-limiting), Pyruvate kinase",
        "Substrate-level phosphorylation: Phosphoglycerate kinase and Pyruvate kinase",
        "Anaerobic fate: LDH reduces pyruvate to lactate, regenerating NAD+; net yield 2 ATP",
        "PDH complex: mitochondrial, 3 enzymes, 5 cofactors (TPP, lipoate, CoA, FAD, NAD); yields acetyl-CoA + NADH",
        "Citric Acid Cycle: 8 steps; isocitrate dehydrogenase rate-limiting; succinyl-CoA synthetase produces GTP",
        "Amphibolic nature: dual catabolic/anabolic roles; anaplerosis via Pyruvate Carboxylase",
        "Complete bioenergetics: 30 to 32 ATP per glucose under modern counting (36 to 38 ATP classical)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "KVAFSU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u2-la-04",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Lipid Metabolism. Discuss the mobilization of adipose triacylglycerols, the carnitine shuttle, the four-step mitochondrial Beta-Oxidation spiral, bioenergetics of palmitate and odd-chain fatty acids, the hepatic pathway of Ketogenesis, extrahepatic ketone utilization, and cytosolic de novo Fatty Acid Biosynthesis with species differences in ruminants.",
      "topicId": "u2-t15",
      "answer": "<h3>1. Adipose Triacylglycerol Mobilization</h3><p>During negative energy balance, fasting, or lactation, lipolysis is initiated in adipocytes. Glucagon and catecholamines stimulate $\\beta$-adrenergic receptors, elevating intracellular cAMP and activating Protein Kinase A (PKA). PKA phosphorylates <strong>Perilipin</strong> and <strong>Hormone-Sensitive Lipase (HSL)</strong>. Adipose Triglyceride Lipase (ATGL) initiates hydrolysis ($\\text{TAG} \\rightarrow \\text{DAG}$), HSL hydrolyzes $\\text{DAG} \\rightarrow \\text{MAG}$, and Monoacylglycerol Lipase (MAGL) yields free glycerol and three non-esterified fatty acids (NEFA). Insulin suppresses lipolysis via phosphodiesterase-mediated cAMP breakdown.</p><h3>2. Fatty Acid Activation and the Carnitine Shuttle</h3><p>&bull; <strong>Activation:</strong> On the outer mitochondrial membrane, <strong>Acyl-CoA Synthetase (Thiokinase)</strong> activates fatty acids to fatty acyl-CoA, consuming 2 high-energy bonds ($\\text{ATP} \\rightarrow \\text{AMP} + \\text{PP}_i \\xrightarrow{\\text{Pyrophosphatase}} 2\\text{ P}_i$).<br>&bull; <strong>The Carnitine Shuttle:</strong> Fatty acyl-CoA cannot cross the inner mitochondrial membrane (IMM):<br>1. <em>Carnitine Palmitoyltransferase-I (CPT-I):</em> Outer membrane enzyme that transfers fatty acyl group to carnitine, forming acylcarnitine. <strong>Rate-limiting step</strong> of fatty acid oxidation; allosterically inhibited by <strong>Malonyl-CoA</strong>.<br>2. <em>Carnitine-Acylcarnitine Translocase:</em> Antiport in IMM moving acylcarnitine into matrix while exporting free carnitine.<br>3. <em>Carnitine Palmitoyltransferase-II (CPT-II):</em> Inner membrane enzyme that regenerates fatty acyl-CoA and free carnitine in the matrix.</p><h3>3. The Mitochondrial $\\beta$-Oxidation Spiral</h3><p>Each cycle cleaves a 2-carbon acetyl-CoA unit from the carboxyl end via 4 recurring reactions:<br>1. <em>Acyl-CoA Dehydrogenase:</em> $\\text{Acyl-CoA} + \\text{FAD} \\rightarrow \\text{trans-}\\Delta^2\\text{-Enoyl-CoA} + \\text{FADH}_2$.<br>2. <em>Enoyl-CoA Hydratase:</em> $\\text{trans-}\\Delta^2\\text{-Enoyl-CoA} + \\text{H}_2\\text{O} \\rightarrow \\text{L-3-Hydroxyacyl-CoA}$.<br>3. <em>3-Hydroxyacyl-CoA Dehydrogenase:</em> $\\text{L-3-Hydroxyacyl-CoA} + \\text{NAD}^+ \\rightarrow \\text{3-Ketoacyl-CoA} + \\text{NADH} + \\text{H}^+$.<br>4. <em>$\\beta$-Ketothiolase:</em> $\\text{3-Ketoacyl-CoA} + \\text{CoASH} \\rightarrow \\text{Acetyl-CoA} + \\text{Acyl-CoA}$ (shortened by 2C).</p><p>&bull; <strong>Bioenergetics of Palmitate (16:0):</strong> 7 cycles yield $8\\text{ Acetyl-CoA} + 7\\text{ FADH}_2 + 7\\text{ NADH}$.<br>&bull; $8\\text{ Acetyl-CoA} \\times 10 = 80\\text{ ATP}$; $7\\text{ FADH}_2 \\times 1.5 = 10.5\\text{ ATP}$; $7\\text{ NADH} \\times 2.5 = 17.5\\text{ ATP}$; Gross = $108\\text{ ATP}$. Subtract 2 ATP for activation = <strong>106 Net ATP</strong> (or 129 ATP classical).<br>&bull; <strong>Odd-Chain Fatty Acids:</strong> Cleaved to a terminal 3-carbon <strong>Propionyl-CoA</strong>, converted to methylmalonyl-CoA (propionyl-CoA carboxylase, Biotin) and isomerized to <strong>Succinyl-CoA</strong> (methylmalonyl-CoA mutase, Vitamin $\\text{B}_{12}$) which enters the TCA cycle for gluconeogenesis.</p><h3>4. Hepatic Ketogenesis</h3><p>&bull; <strong>Location & Triggers:</strong> Mitochondrial matrix of hepatocytes. Triggered when excessive $\\beta$-oxidation floods liver with acetyl-CoA while intense gluconeogenesis depletes oxaloacetate.<br>&bull; <strong>Pathway:</strong><br>1. $2\\text{ Acetyl-CoA} \\xrightarrow{\\text{Thiolase}} \\text{Acetoacetyl-CoA} + \\text{CoASH}$.<br>2. $\\text{Acetoacetyl-CoA} + \\text{Acetyl-CoA} \\xrightarrow{\\text{Mitochondrial HMG-CoA Synthase}} \\text{HMG-CoA} + \\text{CoASH}$ (<strong>Rate-limiting step</strong>).<br>3. $\\text{HMG-CoA} \\xrightarrow{\\text{HMG-CoA Lyase}} \\text{Acetoacetate} + \\text{Acetyl-CoA}$.<br>4. Acetoacetate is reduced by <strong>$\\beta$-Hydroxybutyrate Dehydrogenase</strong> to <strong>$\\beta$-Hydroxybutyrate (BHB)</strong> (favored by high $[\\text{NADH}]/[\\text{NAD}^+]$) or spontaneously decarboxylates to volatile <strong>Acetone</strong>.</p><h3>5. Extrahepatic Ketone Body Utilization (Ketolysis)</h3><p>&bull; Skeletal muscle, cardiac muscle, and starved brain convert BHB back to acetoacetate. <strong>Thiophorase (Succinyl-CoA:3-Ketoacid CoA Transferase)</strong> transfers CoA from succinyl-CoA to acetoacetate, forming acetoacetyl-CoA. Thiolase cleaves it to $2\\text{ Acetyl-CoA}$ for oxidation in the Krebs cycle.<br>&bull; <strong>Why Liver Cannot Use Ketones:</strong> The liver <strong>lacks Thiophorase</strong>; hence it is an obligate producer and exporter of ketone bodies.</p><h3>6. De Novo Fatty Acid Synthesis and Ruminant Specifics</h3><p>&bull; <strong>Location:</strong> Cytosol. Citrate shuttle exports mitochondrial acetyl units as citrate, cleaved by ATP-citrate lyase.<br>&bull; <strong>Committed Step:</strong> $\\text{Acetyl-CoA} + \\text{CO}_2 + \\text{ATP} \\xrightarrow{\\text{Acetyl-CoA Carboxylase (Biotin)}} \\text{Malonyl-CoA}$.<br>&bull; <strong>FAS Complex:</strong> Homodimeric multi-enzyme complex with ACP. Successive condensation, reduction, dehydration, and reduction reactions consume 2 NADPH per 2-carbon addition until Palmitate (16:0) is cleaved by thioesterase.<br>&bull; <strong>Ruminant Specifics:</strong> Ruminants conserve glucose; cytosolic <strong>Acetate</strong> (rumen VFA) converted by acetyl-CoA synthetase is the primary carbon substrate for fatty acid and milk fat synthesis, with NADPH supplied by the isocitrate dehydrogenase and HMP shunt.</p>",
      "keyPoints": [
        "Adipose lipolysis: PKA activates Hormone-Sensitive Lipase (HSL); inhibited by insulin",
        "Carnitine shuttle: CPT-I rate-limiting gatekeeper on outer membrane; inhibited by Malonyl-CoA",
        "Beta-oxidation spiral: 4 steps (dehydrogenation by FAD, hydration, dehydrogenation by NAD+, thiolysis)",
        "Bioenergetics: Palmitate yields 106 net ATP (modern) or 129 ATP (classical)",
        "Odd-chain fatty acids produce Propionyl-CoA, converted to Succinyl-CoA via Biotin and B12",
        "Ketogenesis: mitochondrial HMG-CoA synthase is rate-limiting; Acetoacetate, BHB, Acetone produced",
        "Thiophorase absent in liver: liver produces ketones but cannot consume them",
        "Fatty acid synthesis: cytosolic, Acetyl-CoA Carboxylase (ACC) rate-limiting, FAS multi-enzyme complex",
        "Ruminants utilize rumen acetate rather than glucose for milk and body fat synthesis"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u2-la-05",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive dissertation on Amino Acid Catabolism, Ammonia Transport, and the Urea Cycle. Discuss transamination mechanisms, glutamate dehydrogenase oxidative deamination, glucose-alanine and glutamine transport cycles, the complete enzymatic sequence and compartmentalization of the Krebs-Henseleit Urea Cycle, its bioenergetics, regulation by N-acetylglutamate, metabolic linkage to the Citric Acid Cycle (Krebs Bicycle), and comparative nitrogen excretion across domestic animal species.",
      "topicId": "u2-t19",
      "answer": "<h3>1. General Catabolism of Amino Acids</h3><p>Unlike carbohydrates and lipids, excess dietary amino acids cannot be stored in the animal body. Catabolism begins with the removal of the $\\alpha$-amino group, routing carbon skeletons into amphibolic intermediates and toxic ammonia into disposal pathways.</p><p><strong>A. Transamination:</strong><br>&bull; Reversible transfer of an amino group from an amino acid to an $\\alpha$-keto acid (typically $\\alpha$-ketoglutarate), forming a new keto acid and L-glutamate: $$\\text{Amino Acid} + \\alpha\\text{-Ketoglutarate} \\rightleftharpoons \\alpha\\text{-Keto Acid} + \\text{L-Glutamate}$$<br>&bull; Catalyzed by <strong>Aminotransferases</strong> (e.g., Alanine Aminotransferase, ALT; Aspartate Aminotransferase, AST).<br>&bull; <em>Mechanism:</em> Universally requires <strong>Pyridoxal Phosphate (PLP)</strong>. Forms an initial Schiff base (aldimine), isomerizes to ketimine, hydrolyzes to release the keto acid and Pyridoxamine Phosphate (PAMP), which then transfers the amino group to $\\alpha$-ketoglutarate via a 'ping-pong' mechanism.<br>&bull; <em>Exceptions:</em> Lysine and Threonine do not undergo transamination.</p><p><strong>B. Oxidative Deamination:</strong><br>&bull; <strong>Glutamate Dehydrogenase (GDH):</strong> Located in the mitochondrial matrix of hepatocytes. Uniquely utilizes either $\\text{NAD}^+$ (oxidative deamination) or $\\text{NADP}^+$ (reductive amination): $$\\text{L-Glutamate} + \\text{NAD(P)}^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\alpha\\text{-Ketoglutarate} + \\text{NH}_4^+ + \\text{NAD(P)H} + \\text{H}^+$$<br>&bull; Allosterically activated by ADP and GDP; inhibited by ATP and GTP. The sequential action of transaminases and GDH is termed <strong>Transdeamination</strong>.</p><h3>2. Non-Toxic Ammonia Transport to the Liver</h3><p>Free ammonia ($\\text{NH}_3/\\text{NH}_4^+$) is a potent neurotoxin that depletes cerebral $\\alpha$-ketoglutarate (halting Krebs cycle ATP generation) and impairs GABA synthesis. Animals safely transport ammonia to the liver via two distinct pathways:</p><p>1. <strong>The Glutamine Synthetase Cycle (Brain and Non-Muscle Tissues):</strong><br>$$\\text{Glutamate} + \\text{NH}_4^+ + \\text{ATP} \\xrightarrow{\\text{Glutamine Synthetase}} \\text{Glutamine} + \\text{ADP} + \\text{P}_i$$ Non-toxic glutamine circulates to liver and kidneys, where mitochondrial <strong>Glutaminase</strong> hydrolyzes it: $\\text{Glutamine} + \\text{H}_2\\text{O} \\rightarrow \\text{Glutamate} + \\text{NH}_4^+$.</p><p>2. <strong>The Glucose-Alanine Cycle (Skeletal Muscle):</strong><br>Pyruvate from glycolysis accepts the amino group from glutamate via ALT to form <strong>Alanine</strong>. Alanine travels to the liver, where hepatic ALT transfers the amino group back to $\\alpha$-ketoglutarate (forming glutamate for urea synthesis), while the pyruvate is converted via gluconeogenesis to glucose, returning to muscle.</p><h3>3. The Urea Cycle (Krebs-Henseleit Ornithine Cycle, 1932)</h3><p>Exclusively functional in parenchymal hepatocytes. Compartmentalized between mitochondria and cytosol:</p><p><strong>Mitochondrial Matrix Reactions:</strong><br>1. <em>Carbamoyl Phosphate Synthetase I (CPS-I):</em> $$\\text{NH}_4^+ + \\text{HCO}_3^- + 2\\text{ ATP} \\xrightarrow{\\text{N-Acetylglutamate}} \\text{Carbamoyl Phosphate} + 2\\text{ ADP} + \\text{P}_i$$ <strong>Rate-limiting committed step</strong>. Requires obligatory allosteric activation by <strong>N-Acetylglutamate (NAG)</strong>.<br>2. <em>Ornithine Transcarbamoylase (OTC):</em> $$\\text{Carbamoyl Phosphate} + \\text{L-Ornithine} \\rightarrow \\text{L-Citrulline} + \\text{P}_i$$ Citrulline is exported to the cytosol via a specific ornithine/citrulline antiporter.</p><p><strong>Cytosolic Reactions:</strong><br>3. <em>Argininosuccinate Synthetase (ASS):</em> $$\\text{Citrulline} + \\text{Aspartate} + \\text{ATP} \\rightarrow \\text{Argininosuccinate} + \\text{AMP} + \\text{PP}_i \\xrightarrow{\\text{Pyrophosphatase}} 2\\text{ P}_i$$ Condenses citrulline with aspartate (providing the second nitrogen atom of urea). Consumes 2 high-energy bonds.<br>4. <em>Argininosuccinate Lyase (ASL):</em> $$\\text{Argininosuccinate} \\rightleftharpoons \\text{L-Arginine} + \\text{Fumarate}$$ Cleaves argininosuccinate, releasing fumarate.<br>5. <em>Arginase:</em> $$\\text{L-Arginine} + \\text{H}_2\\text{O} \\xrightarrow{\\text{Mn}^{2+}} \\text{Urea} + \\text{L-Ornithine}$$ Manganese metalloenzyme. Cleaves arginine to release <strong>Urea</strong> and regenerate <strong>Ornithine</strong>, which re-enters mitochondria.</p><h3>4. Bioenergetics and Regulation</h3><p>&bull; <strong>Energy Cost:</strong> Synthesis of 1 urea molecule consumes 3 ATP molecules, but utilizes <strong>4 high-energy phosphate bonds</strong> ($2\\text{ ATP}$ at CPS-I $+ 1\\text{ ATP} \\rightarrow \\text{AMP} + \\text{PP}_i \\rightarrow 2\\text{ P}_i$ at ASS).<br>&bull; <strong>Regulation by N-Acetylglutamate (NAG):</strong> Synthesized by NAG Synthase from acetyl-CoA and glutamate. Activated allosterically by arginine. High protein intake elevates arginine and glutamate, accelerating NAG synthesis and upregulating CPS-I.</p><h3>5. The Krebs Bicycle (Link to Citric Acid Cycle)</h3><p>The fumarate released by argininosuccinate lyase in the cytosol is hydrated to malate by cytosolic fumarase. Malate enters the mitochondria and is oxidized by malate dehydrogenase to oxaloacetate, producing $1\\text{ NADH}$ ($2.5\\text{ ATP}$). Transamination of oxaloacetate with glutamate regenerates aspartate, which re-enters the urea cycle at ASS. This ATP generation offsets the energy cost of urea synthesis.</p><h3>6. Comparative Nitrogen Excretion</h3><p>&bull; <strong>Mammals (Ureotelic):</strong> Convert $80–90\\%$ of waste nitrogen into soluble non-toxic urea.<br>&bull; <strong>Birds / Poultry (Uricotelic):</strong> Lack mitochondrial CPS-I and arginase; synthesize insoluble <strong>uric acid</strong> through purine de novo pathways, excreted as paste with urine.<br>&bull; <strong>Teleost Fish (Ammonotelic):</strong> Diffuse toxic ammonia directly across gills into water.</p>",
      "keyPoints": [
        "Transamination: PLP Schiff base mechanism; transfers amino group to alpha-ketoglutarate",
        "Oxidative deamination: Glutamate Dehydrogenase (GDH) in mitochondria releases free NH4+",
        "Non-toxic ammonia transport: Glutamine (tissues/brain) and Glucose-Alanine cycle (muscle)",
        "Urea cycle compartmentalization: Steps 1-2 in mitochondria (CPS-I, OTC); Steps 3-5 in cytosol (ASS, ASL, Arginase)",
        "CPS-I is rate-limiting, requiring obligatory allosteric activation by N-acetylglutamate (NAG)",
        "Nitrogen origin: one N from free NH4+, second N from Aspartate; carbon from HCO3-",
        "Energetics: consumes 4 high-energy phosphate bonds from 3 ATP per urea molecule",
        "Krebs Bicycle: fumarate links urea cycle back to TCA cycle via malate and aspartate",
        "Comparative physiology: Ureotelic mammals (urea) vs Uricotelic birds (uric acid due to lack of CPS-I/arginase)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "RAJUVAS 2020"
      ]
    }
  ],
  "unit-3": [
    {
      "id": "u3-def-01",
      "type": "define",
      "marks": 2,
      "question": "Define Renal Glucosuria and state the renal threshold for glucose in dogs, cats, and cattle.",
      "topicId": "u3-t01",
      "answer": "<p><strong>Renal Glucosuria:</strong> The excretion of glucose in urine despite normal blood glucose concentrations, resulting from impaired tubular reabsorption in the proximal convoluted tubules (e.g., canine congenital Fanconi syndrome, acute tubular necrosis, or gentamycin nephrotoxicity).</p><p><strong>Renal Threshold for Glucose:</strong> The blood glucose concentration above which tubular transport maximum ($T_{mG}$) is exceeded and glucose spills into urine:</p><ul><li><strong>Dog:</strong> ~180 mg/dL (10.0 mmol/L)</li><li><strong>Cat:</strong> ~280–300 mg/dL (15.5–16.6 mmol/L)</li><li><strong>Cattle:</strong> ~100–120 mg/dL (5.5–6.6 mmol/L)</li></ul>",
      "keyPoints": [
        "Renal Glucosuria: Glucose in urine with normal blood glucose due to proximal tubular reabsorption defect",
        "Renal Threshold: Blood glucose level exceeding tubular transport maximum ($T_{mG}$)",
        "Values: Dog ~180 mg/dL, Cat ~280–300 mg/dL, Cattle ~100–120 mg/dL"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u3-def-02",
      "type": "define",
      "marks": 2,
      "question": "Define Glycated Hemoglobin (HbA1c) and Fructosamine, and state their diagnostic monitoring windows in small animals.",
      "topicId": "u3-t04",
      "answer": "<p><strong>Glycated Hemoglobin ($\\text{HbA}_{1c}$):</strong> Formed by irreversible, non-enzymatic ketoamine condensation between glucose and N-terminal valine of hemoglobin $\\beta$-chains. It reflects mean blood glucose concentration over the preceding <strong>2 to 3 months</strong> (corresponding to the erythrocyte lifespan: ~110 days in dogs, ~70 days in cats).</p><p><strong>Serum Fructosamine:</strong> Formed by non-enzymatic glycosylation of circulating serum proteins (primarily albumin). It reflects glycemic control over the preceding <strong>2 to 3 weeks</strong> (albumin half-life: ~2 weeks). Fructosamine is preferred in cats to distinguish sustained diabetic hyperglycemia from transient acute stress hyperglycemia.</p>",
      "keyPoints": [
        "HbA1c: Non-enzymatic glycation of hemoglobin reflecting glycemic control over past 2–3 months",
        "Fructosamine: Non-enzymatic glycation of serum proteins (albumin) reflecting glycemic control over past 2–3 weeks",
        "Diagnostic utility: Distinguishes true canine/feline diabetes mellitus from transient stress hyperglycemia"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u3-def-03",
      "type": "define",
      "marks": 2,
      "question": "Define Bovine Ketosis (Acetonemia) and state its primary biochemical triad.",
      "topicId": "u3-t02",
      "answer": "<p><strong>Bovine Ketosis (Acetonemia):</strong> A major metabolic disorder of high-yielding dairy cattle occurring in early lactation (peak incidence 2 to 6 weeks postpartum), precipitated by negative energy balance (NEB) when glucose demand for mammary lactose synthesis vastly exceeds gluconeogenic capacity.</p><p><strong>Primary Biochemical Triad:</strong></p><ol><li><strong>Hypoglycemia:</strong> Blood glucose drops to 20–40 mg/dL (normal: 45–75 mg/dL).</li><li><strong>Hyperketonemia:</strong> Elevation of circulating ketone bodies, primarily $\\beta$-hydroxybutyrate ($\\text{BHB} > 1.2\\text{ mmol/L}$ in subclinical, $> 3.0\\text{ mmol/L}$ in clinical ketosis), acetoacetate, and acetone.</li><li><strong>Ketonuria and Ketolactia:</strong> Excretion of ketones in urine and milk with concurrent hepatic lipidosis (fatty liver infiltration).</li></ol>",
      "keyPoints": [
        "Metabolic disorder of high-yielding dairy cows during early lactation (2–6 weeks postpartum)",
        "Underlying cause: Negative energy balance where mammary lactose drain outstrips gluconeogenesis",
        "Biochemical triad: Hypoglycemia, Hyperketonemia (elevated BHB), Ketonuria/Ketolactia"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "GADVASU 2023",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u3-def-04",
      "type": "define",
      "marks": 2,
      "question": "Define Pregnancy Toxaemia in Ewes (Twin Lamb Disease) and state its precipitating triggers.",
      "topicId": "u3-t02",
      "answer": "<p><strong>Pregnancy Toxaemia (Twin Lamb Disease / Ovine Ketosis):</strong> A severe, frequently fatal metabolic syndrome of pregnant ewes and does occurring during the final 4 to 6 weeks of gestation, especially in animals carrying multiple fetuses (twins or triplets).</p><p><strong>Precipitating Triggers:</strong></p><ul><li><strong>Extreme Fetal Glucose Drain:</strong> Over 80% of fetal growth occurs in the final month; twin fetuses consume over 60–70% of total maternal glucose supply.</li><li><strong>Rumen Compression:</strong> The enlarged gravid uterus physically compresses the rumen, restricting voluntary dry matter intake.</li><li><strong>Acute Stressors:</strong> Inclement cold weather, transport, shearing, or sudden starvation trigger massive lipolysis, severe hypoglycemia, ketoacidosis, and fatal hepatic encephalopathy.</li></ul>",
      "keyPoints": [
        "Severe metabolic disorder of pregnant ewes carrying twin/triplet lambs in late gestation (last 4–6 weeks)",
        "Mechanism: Fetal glucose demand exceeds maternal hepatic gluconeogenesis combined with rumen physical compression",
        "Triggers: Inadequate dietary energy, inclement weather, sudden feed withdrawal, leading to severe hypoglycemia and ketoacidosis"
      ],
      "pyq": [
        "RAJUVAS 2024",
        "IVRI 2023",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u3-def-05",
      "type": "define",
      "marks": 2,
      "question": "Differentiate Functional Plasma Enzymes from Non-Functional Plasma Enzymes with examples.",
      "topicId": "u3-t07",
      "answer": "<p><strong>Functional (Plasma-Specific) Enzymes:</strong> Actively synthesized and secreted by organs (mainly liver) into circulation where they perform specific physiological roles. Their normal concentration in plasma is higher than in tissues. Decreased activity indicates hepatic synthetic failure. <em>Examples:</em> Prothrombin, Fibrinogen, Thrombin, Lipoprotein Lipase (LPL), Pseudocholinesterase.</p><p><strong>Non-Functional (Cell-Derived) Enzymes:</strong> Intracellular enzymes that perform no known physiological catalytic function in plasma. Under normal health, low levels are present due to normal cell turnover; marked elevations in plasma signify increased cell membrane permeability, cell injury, or necrosis. <em>Examples:</em> ALT, AST, SDH, GLDH, Creatine Kinase (CK), Amylase, Lipase, ALP.</p>",
      "keyPoints": [
        "Functional enzymes: Actively perform functions in blood; plasma level higher than tissue level; e.g. prothrombin, LPL",
        "Non-functional enzymes: Intracellular enzymes with no function in blood; released during cell damage/necrosis; e.g. ALT, AST, CK, SDH",
        "Diagnostic significance: Functional decrease indicates liver failure; non-functional elevation indicates organ-specific injury"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2022",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u3-def-06",
      "type": "define",
      "marks": 2,
      "question": "Differentiate Pre-Renal Azotemia from Renal Azotemia using Urine Specific Gravity (USG).",
      "topicId": "u3-t09",
      "answer": "<p><strong>Pre-Renal Azotemia:</strong> Elevation of Blood Urea Nitrogen (BUN) and serum creatinine caused by decreased renal blood flow and reduced Glomerular Filtration Rate (GFR) without primary intrinsic renal parenchymal lesions (e.g., severe dehydration, hypovolemic shock, cardiac insufficiency). Because renal tubular concentrating capacity is preserved, urine is highly concentrated:</p><ul><li><strong>Dog USG:</strong> $> 1.030$</li><li><strong>Cat USG:</strong> $> 1.035$</li><li><strong>Large Animal USG:</strong> $> 1.025$</li></ul><p><strong>Renal Azotemia:</strong> Elevation of BUN and creatinine due to loss of $\\ge 75\\%$ of functional nephrons (intrinsic acute or chronic renal disease). Because tubular concentrating and diluting mechanisms are ruined, kidneys cannot concentrate urine despite dehydration, manifesting as <strong>Isosthenuria (USG: 1.008–1.012)</strong> or poorly concentrated urine ($< 1.030$ in dogs, $< 1.035$ in cats).</p>",
      "keyPoints": [
        "Pre-renal azotemia: Reduced GFR secondary to hypoperfusion/dehydration; tubules intact; concentrated urine (USG > 1.030 dog, > 1.035 cat)",
        "Renal azotemia: Intrinsic parenchymal nephron loss (> 75%); impaired tubular concentrating ability",
        "Hallmark of renal failure: Inadequately concentrated or isosthenuric urine (USG 1.008–1.012) in an azotemic dehydrated patient"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2022",
        "GADVASU 2023"
      ]
    },
    {
      "id": "u3-def-07",
      "type": "define",
      "marks": 2,
      "question": "Define Isosthenuria and state its diagnostic significance in veterinary medicine.",
      "topicId": "u3-t09",
      "answer": "<p><strong>Isosthenuria:</strong> The excretion of urine with an osmolality and specific gravity identical to that of protein-free glomerular filtrate / plasma, having a <strong>Urine Specific Gravity (USG) strictly between 1.008 and 1.012</strong> (~300 mOsm/kg).</p><p><strong>Diagnostic Significance:</strong> It demonstrates that renal tubules are neither concentrating nor diluting the ultrafiltrate. While a random isosthenuric sample may occur in well-hydrated animals, <strong>persistent isosthenuria in the presence of azotemia and clinical dehydration</strong> is the definitive diagnostic hallmark of primary renal failure (loss of $\\ge 66–75\\%$ functional tubular mass).</p>",
      "keyPoints": [
        "Isosthenuria: Urine specific gravity equals glomerular ultrafiltrate / plasma osmolality (USG 1.008–1.012)",
        "Reflects complete absence of renal tubular concentrating and diluting function",
        "Diagnostic significance: In dehydrated, azotemic animals, persistent isosthenuria confirms intrinsic renal failure"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "LUVAS 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u3-def-08",
      "type": "define",
      "marks": 2,
      "question": "Differentiate Direct Bilirubin from Indirect Bilirubin in the Van den Bergh Reaction.",
      "topicId": "u3-t08",
      "answer": "<p><strong>Direct (Conjugated) Bilirubin:</strong> Bilirubin mono- and di-glucuronide. It is water-soluble, weakly bound to albumin, and reacts immediately with diazotized sulfanilic acid without requiring an accelerator (alcohol). It produces a <strong>Prompt Direct Positive Van den Bergh reaction</strong> (purple color within 1 minute). Markedly elevated in post-hepatic biliary obstruction and hepatocellular cholestasis.</p><p><strong>Indirect (Unconjugated) Bilirubin:</strong> Free bilirubin formed from heme breakdown. It is lipid-soluble, tightly bound to albumin, insoluble in water, and does not react directly with the diazo reagent until alcohol or caffeine is added to solubilize it. It produces an <strong>Indirect Positive Van den Bergh reaction</strong>. Markedly elevated in pre-hepatic hemolytic anemias.</p>",
      "keyPoints": [
        "Direct Bilirubin: Conjugated glucuronide; water-soluble; reacts promptly without alcohol (Prompt Direct Positive); elevated in biliary obstruction",
        "Indirect Bilirubin: Unconjugated; lipid-soluble; bound to albumin; requires alcohol to react (Indirect Positive); elevated in hemolysis",
        "Biphasic reaction: Both direct and indirect components elevated; characteristic of hepatocellular disease (hepatitis/toxicosis)"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "TANUVAS 2023",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-def-09",
      "type": "define",
      "marks": 2,
      "question": "Define Acute-Phase Proteins (APPs) and state the major positive APPs in dogs, cats, and ruminants.",
      "topicId": "u3-t05",
      "answer": "<p><strong>Acute-Phase Proteins (APPs):</strong> Blood proteins primarily synthesized by hepatocytes whose plasma concentrations increase (positive APPs) or decrease (negative APPs, e.g., albumin) by $\\ge 25\\%$ in response to pro-inflammatory cytokines (IL-1, IL-6, TNF-$\\alpha$) during systemic inflammation, infection, or tissue trauma.</p><p><strong>Major Positive APPs Across Species:</strong></p><ul><li><strong>Dog:</strong> C-Reactive Protein (CRP) and Serum Amyloid A (SAA)</li><li><strong>Cat:</strong> Serum Amyloid A (SAA) and $\\alpha_1$-Acid Glycoprotein (AGP, crucial diagnostic biomarker for Feline Infectious Peritonitis / FIP)</li><li><strong>Ruminants (Cattle, Sheep):</strong> Haptoglobin (Hp) and Serum Amyloid A (SAA); bovine CRP is negligible</li><li><strong>Horse:</strong> Serum Amyloid A (SAA) and Fibrinogen</li></ul>",
      "keyPoints": [
        "APPs: Hepatic proteins whose plasma concentrations alter by $\\ge 25\\%$ in response to pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha)",
        "Dog major APP: C-Reactive Protein (CRP)",
        "Ruminant major APP: Haptoglobin (Hp) and SAA (bovine CRP is non-responsive)",
        "Cat major APP: SAA and alpha-1-Acid Glycoprotein (AGP; FIP marker)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u3-def-10",
      "type": "define",
      "marks": 2,
      "question": "Define Serum Anion Gap, state its mathematical formula, and list three clinical causes of High Anion Gap Metabolic Acidosis (HAGMA).",
      "topicId": "u3-t11",
      "answer": "<p><strong>Serum Anion Gap (AG):</strong> The calculated difference between routinely measured serum cations and measured anions, representing the concentration of unmeasured physiological anions in circulation (plasma proteins—chiefly albumin, phosphates, sulfates, and organic acid anions).</p><p><strong>Mathematical Formula:</strong><br>$$\\text{Anion Gap} = ([\\text{Na}^+] + [\\text{K}^+]) - ([\\text{Cl}^-] + [\\text{HCO}_3^-])$$<br><em>Or simplified without potassium (small animals):</em> $[\\text{Na}^+] - ([\\text{Cl}^-] + [\\text{HCO}_3^-])$. Normal reference: 12 to 24 mEq/L.</p><p><strong>Causes of High Anion Gap Acidosis (HAGMA):</strong></p><ol><li><strong>Diabetic Ketoacidosis (DKA):</strong> Accumulation of acetoacetate and $\\beta$-hydroxybutyrate.</li><li><strong>Lactic Acidosis:</strong> Ruminal grain overload (D-lactate) or tissue hypoperfusion/shock (L-lactate).</li><li><strong>Uremic Renal Failure:</strong> Retention of sulfates, phosphates, and hippurates.</li><li><strong>Toxicosis:</strong> Ethylene glycol (antifreeze) poisoning (glycolate and oxalate metabolites).</li></ol>",
      "keyPoints": [
        "Anion Gap represents unmeasured serum anions (albumin, phosphate, sulfate, organic acids)",
        "Formula: $([Na^+] + [K^+]) - ([Cl^-] + [HCO_3^-])$",
        "Causes of HAGMA: Ketoacidosis (DKA, ketosis), Lactic acidosis (grain overload, shock), Uremia, Ethylene glycol toxicosis"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u3-def-11",
      "type": "define",
      "marks": 2,
      "question": "Define Ruminal Lactic Acidosis (Grain Overload) and name the key microorganism and acid isomer involved.",
      "topicId": "u3-t12",
      "answer": "<p><strong>Ruminal Lactic Acidosis (Grain Engorgement / Rumen Impaction):</strong> An acute fermentation disorder of ruminants caused by ingestion of large quantities of readily fermentable, starch-rich non-structural carbohydrates (grains, cereal flour, concentrates), causing ruminal pH to plummet from normal (6.2–6.8) to below 5.0.</p><p><strong>Key Microorganism and Acid Isomer:</strong></p><ul><li><strong>Microorganism:</strong> Rapid proliferation of amylolytic <em>Streptococcus bovis</em>, followed by acid-tolerant <em>Lactobacillus</em> species at pH $< 5.5$, outcompeting cellulolytic bacteria and protozoa.</li><li><strong>Acid Isomer:</strong> Massive production of racemic lactic acid. The <strong>D(-)-lactic acid</strong> isomer cannot be rapidly metabolized by ruminant mammalian L-lactate dehydrogenase, resulting in systemic D-lactic acidosis, hyperosmolality, hemoconcentration, chemical ruminitis, and circulatory collapse.</li></ul>",
      "keyPoints": [
        "Ruminal lactic acidosis: Acute carbohydrate engorgement dropping rumen pH below 5.0",
        "Primary microbes: Streptococcus bovis initial surge, followed by Lactobacillus acidophilus proliferation",
        "Critical acid isomer: D(-)-lactic acid accumulates because animal tissues lack adequate D-lactate dehydrogenase, causing fatal systemic acidosis"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "GADVASU 2023",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-def-12",
      "type": "define",
      "marks": 2,
      "question": "Differentiate Phase I from Phase II Xenobiotic Biotransformation Reactions.",
      "topicId": "u3-t15",
      "answer": "<p><strong>Phase I (Functionalization Reactions):</strong> Converts lipophilic xenobiotics into more polar metabolites by introducing or unmasking polar functional groups ($-\\text{OH}$, $-\\text{COOH}$, $-\\text{NH}_2$, $-\\text{SH}$) through oxidation (catalyzed predominantly by microsomal <strong>Cytochrome P450 monooxygenases</strong>), reduction, or hydrolysis. Phase I metabolites may be biologically inactive, equally active, or more toxic (reactive intermediates).</p><p><strong>Phase II (Conjugation Reactions):</strong> Covalently couples the parent xenobiotic or its Phase I functionalized intermediate with an endogenous, highly polar, hydrophilic substrate (such as UDP-glucuronic acid, 3'-phosphoadenosine-5'-phosphosulfate / PAPS, glutathione, glycine, or S-adenosylmethionine). This yields stable, non-toxic, highly water-soluble conjugates that are rapidly excreted via bile or urine.</p>",
      "keyPoints": [
        "Phase I (Functionalization): Introduces or exposes polar functional groups (-OH, -COOH, -NH2) via CYP450 oxidation, reduction, or hydrolysis",
        "Phase II (Conjugation): Covalently attaches endogenous hydrophilic groups (glucuronic acid, sulfate, glutathione, glycine, acetate)",
        "Biological outcome: Phase I creates reactive handles; Phase II creates water-soluble, inactive excretion products"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2022",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u3-sa-01",
      "type": "short",
      "marks": 5,
      "question": "Discuss the pathophysiology, clinical signs, and laboratory diagnostic findings of Diabetes Mellitus in dogs and cats.",
      "topicId": "u3-t01",
      "answer": "<p><strong>Etiological Classification:</strong></p><ul><li><strong>Canine Diabetes Mellitus:</strong> Almost exclusively <strong>Type 1 (Insulin Deficiency)</strong>, caused by immune-mediated destruction or severe vacuolar degeneration of pancreatic $\\beta$-islet cells, requiring lifelong exogenous insulin.</li><li><strong>Feline Diabetes Mellitus:</strong> Predominantly <strong>Type 2 (Insulin Resistance & $\\beta$-Cell Exhaustion)</strong>, associated with obesity, glucotoxicity, and deposition of islet amyloid polypeptide (IAPP / amylin) in pancreatic islets.</li></ul><p><strong>Pathophysiology:</strong> Absolute or relative insulin deficiency disrupts cellular glucose uptake by GLUT-4 (muscle and adipose tissues) and removes inhibition on hepatic glycogenolysis and gluconeogenesis, producing persistent extracellular hyperglycemia. When blood glucose exceeds the renal threshold (dog ~180 mg/dL; cat ~280 mg/dL), unabsorbed tubular glucose causes osmotic diuresis (polyuria) and compensatory compensatory polydipsia. Intracellular glucose starvation stimulates the hypothalamic satiety center, inducing polyphagia accompanied by progressive weight loss due to muscle protein catabolism and unrestrained lipolysis.</p><p><strong>Clinical Hallmarks (The Classic '4 P's'):</strong></p><ol><li><strong>Polyuria (PU):</strong> Solute-drag osmotic diuresis.</li><li><strong>Polydipsia (PD):</strong> Thirst response to hypovolemia.</li><li><strong>Polyphagia (PP):</strong> Lack of intracellular satiety signaling.</li><li><strong>Progressive Weight Loss:</strong> Mobilization of muscle and adipose stores.</li><li><em>Species-specific signs:</em> Bilateral diabetic cataracts in dogs (due to aldose reductase sorbitol accumulation in lens); Diabetic peripheral neuropathy in cats (distal hindlimb weakness, plantigrade stance).</li></ol><p><strong>Laboratory Diagnosis:</strong></p><ul><li><strong>Persistent Fasting Hyperglycemia:</strong> Dog $> 200\\text{ mg/dL}$, Cat $> 300\\text{ mg/dL}$.</li><li><strong>Glucosuria with High Urine Specific Gravity:</strong> USG typically remains concentrated ($> 1.025–1.035$) due to glucose solute load despite massive volume.</li><li><strong>Serum Fructosamine Estimation:</strong> Reference range: 250–350 $\\mu\\text{mol/L}$; values $> 400\\ \\mu\\text{mol/L}$ confirm chronic sustained hyperglycemia over 2–3 weeks, ruling out feline stress-induced hyperglycemia.</li><li><strong>Ketonuria & Anion Gap:</strong> Positive nitroprusside test in urine/plasma signifies Diabetic Ketoacidosis (DKA) with elevated anion gap.</li></ul>",
      "keyPoints": [
        "Canine (Type 1: beta-cell destruction, absolute insulin deficiency) vs Feline (Type 2: insulin resistance, islet amyloidosis)",
        "Pathophysiology: GLUT-4 uptake failure + uninhibited gluconeogenesis -> hyperglycemia -> osmotic diuresis -> classic 4 P's (PU, PD, PP, weight loss)",
        "Species lesions: Aldose reductase sorbitol cataracts in dogs; plantigrade stance neuropathy in cats",
        "Lab confirmation: Fasting hyperglycemia, glucosuria, elevated serum fructosamine (> 400 umol/L), urine ketone testing"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u3-sa-02",
      "type": "short",
      "marks": 5,
      "question": "Describe Bovine Ketosis under the following headings: (a) Types and Etiology, (b) Biochemical Lesion, (c) Rothera's Test, and (d) Principles of Treatment.",
      "topicId": "u3-t02",
      "answer": "<p><strong>(a) Types and Etiology:</strong></p><ul><li><strong>Type I Ketosis (Spontaneous / Underfeeding Ketosis):</strong> Occurs at peak milk yield (3 to 6 weeks postpartum). High lactation drain of lactose (requiring ~50 g glucose per kg milk) outstrips dietary intake of glucogenic propionate, forcing reliance on body reserves. Responds quickly to glucose therapy.</li><li><strong>Type II Ketosis (Fatty Liver Ketosis):</strong> Occurs at or immediately around calving in overconditioned ('fat cow syndrome') animals. Characterized by severe peripheral insulin resistance, massive prepartum NEFA mobilization, and extensive hepatic lipidosis. More refractory to treatment.</li><li><strong>Secondary Ketosis:</strong> Triggered by primary diseases suppressing appetite (displaced abomasum, metritis, mastitis, reticuloperitonitis).</li></ul><p><strong>(b) Biochemical Lesion:</strong> The intense demand for glucose directs all available hepatic <strong>oxaloacetate (OAA)</strong> into the gluconeogenic pathway. Consequently, OAA becomes severely depleted in mitochondrial matrix. Meanwhile, adipose lipolysis floods the liver with Non-Esterified Fatty Acids (NEFAs), yielding enormous quantities of <strong>acetyl-CoA</strong> via $\\beta$-oxidation. Because acetyl-CoA cannot condense with OAA to enter the Krebs cycle, it is shunted into <strong>ketogenesis</strong> (forming acetoacetate, $\\beta$-hydroxybutyrate, and acetone). The resulting hyperketonemia suppresses appetite, creating a vicious metabolic spiral.</p><p><strong>(c) Rothera's Nitroprusside Test:</strong></p><ul><li><strong>Principle:</strong> In an alkaline medium (ammonium hydroxide and ammonium sulfate), sodium nitroprusside reacts with the carbonyl group of <strong>acetoacetate and acetone</strong> to yield an intense purple / permanganate permanganate permanganate-colored ring.</li><li><em>Diagnostic Note:</em> Rothera's test does <strong>not</strong> react with $\\beta$-hydroxybutyrate (which lacks a ketone carbonyl group). Because milk ketone testing correlates best with blood BHB, milk Rothera test is highly diagnostic for clinical ketolactia.</li></ul><p><strong>(d) Principles of Treatment:</strong></p><ol><li><strong>Immediate Glucose Replacement:</strong> Intravenous infusion of 500 mL of 50% Dextrose to break the neuroglycopenic crisis and stimulate endogenous insulin.</li><li><strong>Oral Gluconeogenic Precursors:</strong> Propylene glycol (250–400 g orally twice daily for 3–5 days) or glycerol; these are converted by liver into oxaloacetate via pyruvate and lactate.</li><li><strong>Glucocorticoids:</strong> Dexamethasone (10–20 mg IM) or Isoflupredone acetate to promote gluconeogenesis, suppress milk synthesis, and stimulate appetite.</li><li><strong>Insulin & Vitamin B12:</strong> Low-dose protamine zinc insulin (50–100 IU SC) plus cobalt/cyanocobalamin to facilitate propionate utilization via methylmalonyl-CoA mutase.</li></ol>",
      "keyPoints": [
        "Type I (peak lactation energy deficit) vs Type II (periparturient fat cow syndrome, hepatic lipidosis)",
        "Biochemical lesion: OAA diversion to gluconeogenesis halts Krebs cycle, diverting acetyl-CoA to ketogenesis",
        "Rothera's Test: Nitroprusside + alkaline medium reacts with acetoacetate and acetone forming purple ring (does not detect BHB)",
        "Therapy: 50% IV Dextrose, oral propylene glycol (gluconeogenic precursor), glucocorticoids (dexamethasone), vitamin B12"
      ],
      "pyq": [
        "IVRI Annual Exam 2023",
        "RAJUVAS 2023",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u3-sa-03",
      "type": "short",
      "marks": 5,
      "question": "Compare the diagnostic utility of Hepatocellular Leakage Enzymes (ALT, AST, SDH, GLDH) across small and large domestic animals.",
      "topicId": "u3-t07",
      "answer": "<p><strong>Diagnostic Concept:</strong> Hepatocellular leakage enzymes reside inside hepatocytes. When hepatocyte cell membranes are disrupted by hypoxia, toxins, lipid accumulation, or inflammation, these enzymes diffuse into the sinusoidal circulation. The magnitude of elevation correlates with the <em>number of affected hepatocytes</em>, but does not indicate whether damage is reversible or irreversible.</p><p><strong>1. Alanine Aminotransferase (ALT):</strong></p><ul><li>Cytosolic enzyme. Highly liver-specific in <strong>dogs and cats</strong>. Peak elevation occurs within 24–48 hours after acute insult, with a plasma half-life of ~48–60 hours in dogs.</li><li><em>Veterinary Limitation:</em> In <strong>horses, cattle, sheep, goats, and pigs</strong>, hepatocyte ALT activity is negligible; therefore, ALT has <strong>zero diagnostic value</strong> in large animal hepatology.</li></ul><p><strong>2. Aspartate Aminotransferase (AST):</strong></p><ul><li>Present as cytosolic and mitochondrial isozymes. Widely distributed in both liver and skeletal/cardiac muscle in all domestic animals.</li><li><em>Interpretation:</em> It is sensitive for liver disease in large animals, but <strong>not liver-specific</strong>. Concurrent assay of <strong>Creatine Kinase (CK)</strong> is mandatory: if AST is elevated while CK is normal, hepatic necrosis is confirmed; if both are elevated, primary muscle injury is active.</li></ul><p><strong>3. Sorbitol Dehydrogenase (SDH / IDH):</strong></p><ul><li>Cytosolic enzyme. <strong>Highly liver-specific in all domestic species</strong>, particularly in horses, cattle, and sheep.</li><li><em>Limitation:</em> Extremely unstable in vitro (plasma activity declines significantly within 4–8 hours at room temperature; requires immediate chilling or freezing).</li></ul><p><strong>4. Glutamate Dehydrogenase (GLDH):</strong></p><ul><li>Mitochondrial enzyme. Highly liver-specific across all domestic species, including birds and exotic mammals. Because it is sequestered within mitochondrial matrix, marked elevations signify deep centrilobular hepatocyte necrosis. Highly stable in serum.</li></ul>",
      "keyPoints": [
        "ALT: Gold-standard liver leakage enzyme in dogs and cats; completely useless in large animals/ruminants",
        "AST: Sensitive in all species, but non-specific (present in muscle + liver); must run alongside CK to differentiate",
        "SDH: True liver-specific leakage enzyme for horses and cattle; highly labile in vitro",
        "GLDH: Mitochondrial enzyme indicating deep centrilobular necrosis in large animals, horses, and birds; highly stable"
      ],
      "table": {
        "title": "Diagnostic Profile of Hepatocellular Leakage Enzymes Across Domestic Species",
        "headers": [
          "Enzyme",
          "Intracellular Location",
          "Species Specificity",
          "Plasma Half-Life",
          "Clinical Diagnostic Value"
        ],
        "rows": [
          [
            "ALT",
            "Cytosol",
            "High in Dog & Cat; Absent in Large Animals",
            "~60 hours (dog), ~24 hours (cat)",
            "Primary marker of acute hepatocellular injury in small animals"
          ],
          [
            "AST",
            "Cytosol & Mitochondria",
            "Low (Liver + Skeletal/Cardiac Muscle)",
            "~12 hours (dog), ~50 hours (horse)",
            "Marker in large animals; must evaluate alongside CK"
          ],
          [
            "SDH",
            "Cytosol",
            "High in ALL species (Equine/Bovine standard)",
            "< 12 hours (horse, cow)",
            "Gold-standard acute hepatic necrosis marker in horses & cattle"
          ],
          [
            "GLDH",
            "Mitochondria",
            "High in ALL species (Horses, Cattle, Birds)",
            "~14 hours (ruminants)",
            "Indicates severe, deep mitochondrial / centrilobular necrosis"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u3-sa-04",
      "type": "short",
      "marks": 5,
      "question": "Discuss the diagnostic significance of Cholestatic Enzymes (ALP and GGT) in domestic animals, highlighting canine C-ALP and colostral GGT.",
      "topicId": "u3-t07",
      "answer": "<p><strong>Mechanism of Induction:</strong> Unlike leakage enzymes, cholestatic enzymes (ALP and GGT) are bound to the canalicular and microvillar membranes of hepatocytes and biliary epithelial cells. Cholestasis (impaired bile flow) and accumulation of bile acid salts stimulate de novo gene transcription, protein synthesis, and enzymatic shedding into blood.</p><p><strong>1. Alkaline Phosphatase (ALP):</strong></p><ul><li><strong>Isoenzymes:</strong> Liver-ALP (L-ALP), Bone-ALP (B-ALP), Intestinal-ALP, and Placental-ALP. B-ALP is physiologically elevated in rapidly growing young animals (osteoblast activity) and in osteosarcoma.</li><li><strong>Canine Corticosteroid-Induced ALP (C-ALP):</strong> Unique to <strong>dogs</strong>. Both endogenous hyperadrenocorticism (Cushing's disease) and exogenous glucocorticoid administration induce a unique, heat-stable (resists denaturation at 65°C) C-ALP isoform.</li><li><strong>Feline Clinical Specificity:</strong> Cats have small hepatocyte ALP reserves and an extremely short plasma half-life (~6 hours, compared to ~72 hours in dogs). Therefore, <strong>ANY elevation of ALP in a cat is clinically significant</strong> and strongly suggests feline hepatic lipidosis or cholangiohepatitis.</li></ul><p><strong>2. Gamma-Glutamyltransferase (GGT):</strong></p><ul><li>Located on the apical membrane of biliary epithelial cells and renal tubular brush borders. It is the premier cholestatic marker in <strong>horses, cattle, sheep, and cats</strong>.</li><li>In small animal hepatic lipidosis, ALP is typically massively elevated while GGT remains normal or only mildly elevated, providing a critical diagnostic clue.</li><li><strong>Colostral GGT as a Biomarker for Passive Transfer:</strong> Colostrum of cows, ewes, and bitches contains astronomical concentrations of GGT (up to 20,000–50,000 IU/L, derived from mammary epithelium). In neonates (calves, lambs, puppies), serum GGT reaches thousands of units within 24 hours of nursing. <strong>Failure of passive transfer of colostral maternal antibodies (FPT)</strong> is immediately diagnosed if neonatal serum GGT fails to surge post-suckle.</li></ul>",
      "keyPoints": [
        "Mechanism: Induced synthesis and membrane release triggered by bile flow obstruction and bile acids",
        "Canine C-ALP: Unique heat-stable isoform induced by endogenous or exogenous glucocorticoids (Cushing's disease)",
        "Feline ALP: Very short half-life (~6h); any elevation in cats is clinically pathological (hepatic lipidosis)",
        "Colostral GGT: Massive GGT in colostrum makes neonatal serum GGT the gold-standard test for failure of passive transfer (FPT)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u3-sa-05",
      "type": "short",
      "marks": 5,
      "question": "Compare Blood Urea Nitrogen (BUN), Serum Creatinine, Symmetric Dimethylarginine (SDMA), and Avian Uric Acid as renal function indices.",
      "topicId": "u3-t09",
      "answer": "<p><strong>1. Blood Urea Nitrogen (BUN):</strong></p><ul><li>Synthesized exclusively by hepatocytes from ammonia via the urea cycle. Freely filtered at the glomerulus, but 40–50% is passively reabsorbed in renal tubules (more reabsorption at low tubular flow rates, e.g., dehydration).</li><li><em>Non-Renal Confounders:</em> Elevated by high-protein diets, upper gastrointestinal hemorrhage, and tissue catabolism; decreased in hepatic insufficiency and low-protein intake.</li><li><em>Ruminant Limitation:</em> In cattle and sheep, circulating urea is extensively recycled into the rumen via saliva and rumen wall for bacterial protein synthesis; thus, BUN is an <strong>insensitive and unreliable index of early renal disease in ruminants</strong>.</li></ul><p><strong>2. Serum Creatinine:</strong></p><ul><li>Formed non-enzymatically at a constant daily rate from phosphocreatine in skeletal muscle. Freely filtered at the glomerulus with negligible tubular reabsorption or secretion in domestic mammals.</li><li>Superior to BUN for estimating Glomerular Filtration Rate (GFR). However, serum creatinine rises above normal reference limits only after <strong>$\\ge 75\\%$ of functional nephrons are lost</strong>. Influenced by total muscle mass (lower in cachectic patients).</li></ul><p><strong>3. Symmetric Dimethylarginine (SDMA):</strong></p><ul><li>Produced by all nucleated cells during post-translational methylation of arginine residues in nuclear proteins; excreted almost 100% by renal glomerular filtration.</li><li><strong>Key Advantages:</strong> Unaffected by muscle wasting or dietary protein; detects renal function decline much earlier (elevates at <strong>25% to 40% loss of GFR</strong> compared to 75% for creatinine).</li></ul><p><strong>4. Avian Uric Acid:</strong></p><ul><li>Birds and terrestrial reptiles are <strong>uricotelic</strong>, lacking the functional urea cycle (arginase and CPS-I deficient). Ammonia is converted to insoluble uric acid in liver and kidneys.</li><li>Uric acid is excreted primarily by <strong>active tubular secretion</strong> (~90%) rather than glomerular filtration. Hyperuricemia indicates severe proximal tubular damage or dehydration, and precipitates as articular/visceral gout.</li></ul>",
      "keyPoints": [
        "BUN: Filtered and reabsorbed; confounded by diet and GI bleed; insensitive in ruminants due to rumino-hepatic urea recycling",
        "Creatinine: Muscle phosphocreatine breakdown; constant excretion; rises only after 75% nephron loss",
        "SDMA: Early biomonitor of GFR; unaffected by muscle mass; detects renal disease at 25–40% nephron loss",
        "Avian Uric Acid: Uricotelic nitrogen excretion; secreted by renal tubules; hyperuricemia leads to visceral and articular gout"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u3-sa-06",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate Pre-Hepatic, Hepatocellular, and Post-Hepatic Jaundice in domestic animals based on biochemical and urinary findings.",
      "topicId": "u3-t08",
      "answer": "<p><strong>Jaundice (Icterus):</strong> Yellow discoloration of tissues, mucous membranes, and sclera resulting from hyperbilirubinemia ($> 1.5–2.0\\text{ mg/dL}$ in blood). Clinically classified into three pathophysiological categories:</p><p><strong>1. Pre-Hepatic (Hemolytic) Jaundice:</strong></p><ul><li><strong>Etiology:</strong> Accelerated destruction of erythrocytes exceeding the hepatic conjugation capacity (e.g., Babesiosis, Anaplasmosis, autoimmune hemolytic anemia, copper toxicosis in sheep, neonatal isoerythrolysis in foals).</li><li><strong>Key Profile:</strong> Marked elevation of <strong>unconjugated (indirect) bilirubin</strong>; Indirect Van den Bergh positive; high urobilinogen in urine and stercobilin in feces (dark orange/brown feces); hemoglobinuria often present; liver enzymes are normal or only mildly elevated due to anemic hypoxia.</li></ul><p><strong>2. Hepatocellular (Toxic / Infectious) Jaundice:</strong></p><ul><li><strong>Etiology:</strong> Diffuse parenchymal damage impairing both bilirubin uptake/conjugation and biliary excretion (e.g., Infectious Canine Hepatitis, aflatoxicosis, leptospirosis, acute carbon tetrachloride toxicosis).</li><li><strong>Key Profile:</strong> Both <strong>unconjugated and conjugated bilirubin</strong> are elevated; <strong>Biphasic Van den Bergh reaction</strong>; marked leakage of hepatocellular enzymes (ALT in dogs/cats, SDH/AST in large animals); urine contains both conjugated bilirubin and urobilinogen.</li></ul><p><strong>3. Post-Hepatic (Obstructive) Jaundice:</strong></p><ul><li><strong>Etiology:</strong> Mechanical or physical obstruction of extrahepatic or intrahepatic bile ducts (e.g., cholelithiasis, pancreatitis compressing bile duct, cholangiocarcinoma, liver flukes—<em>Fasciola hepatica</em> in sheep/cattle).</li><li><strong>Key Profile:</strong> Marked elevation of <strong>conjugated (direct) bilirubin</strong>; <strong>Prompt Direct Van den Bergh positive</strong>; intense bilirubinuria with <strong>negative urine urobilinogen</strong>; acholic (clay-colored) feces due to absence of stercobilin; astronomical elevation of cholestatic enzymes (ALP and GGT).</li></ul>",
      "keyPoints": [
        "Pre-hepatic: Hemolysis -> elevated unconjugated bilirubin, indirect Van den Bergh +, dark feces, high urobilinogen",
        "Hepatocellular: Parenchymal damage -> both conjugated and unconjugated elevated, biphasic Van den Bergh, massive ALT/AST/SDH leakage",
        "Post-hepatic: Duct obstruction -> conjugated bilirubin elevated, prompt direct Van den Bergh +, acholic (clay-colored) feces, massive ALP/GGT, zero urine urobilinogen"
      ],
      "table": {
        "title": "Differential Biochemical Panel of Jaundice in Domestic Animals",
        "headers": [
          "Criterion / Parameter",
          "Pre-Hepatic (Hemolytic)",
          "Hepatocellular (Toxic/Infectious)",
          "Post-Hepatic (Obstructive)"
        ],
        "rows": [
          [
            "Predominant Serum Bilirubin",
            "Unconjugated (Indirect)",
            "Both Conjugated & Unconjugated",
            "Conjugated (Direct)"
          ],
          [
            "Van den Bergh Reaction",
            "Indirect Positive",
            "Biphasic Positive",
            "Prompt Direct Positive"
          ],
          [
            "Urine Bilirubin",
            "Negative (unconjugated is bound to albumin)",
            "Positive (moderate)",
            "Intensely Positive"
          ],
          [
            "Urine Urobilinogen",
            "Markedly Increased",
            "Normal to Increased",
            "Absent / Negative"
          ],
          [
            "Fecal Color",
            "Dark Brown / Orange (high stercobilin)",
            "Normal to Light Brown",
            "Clay-colored / Acholic (stercobilin absent)"
          ],
          [
            "Serum Leakage Enzymes (ALT/SDH)",
            "Normal (or mild anemic hypoxia)",
            "Markedly Elevated (10–100x)",
            "Mild to Moderately Elevated (secondary)"
          ],
          [
            "Cholestatic Enzymes (ALP/GGT)",
            "Normal",
            "Mildly to Moderately Elevated",
            "Markedly Elevated (10–50x)"
          ]
        ]
      },
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-sa-07",
      "type": "diff",
      "marks": 5,
      "question": "Compare High Anion Gap Metabolic Acidosis with Left/Right Abomasal Displacement (Hypochloremic, Hypokalemic Metabolic Alkalosis with Paradoxical Aciduria).",
      "topicId": "u3-t11",
      "answer": "<p><strong>1. High Anion Gap Metabolic Acidosis (HAGMA):</strong></p><ul><li><strong>Pathophysiology:</strong> Generation and accumulation of non-carbonic, unmeasured organic acid anions in blood, which consume plasma bicarbonate ($[\\text{HCO}_3^-]$):<br>$$\\text{H}^+\\text{A}^- + \\text{HCO}_3^- \\to \\text{H}_2\\text{CO}_3 + \\text{A}^- \\to \\text{H}_2\\text{O} + \\text{CO}_2 \\uparrow + \\text{A}^-$$</li><li><strong>Causes:</strong> Ruminal grain overload (D-lactic acid), severe hypovolemic/septic shock (L-lactic acid), bovine/ovine ketosis and canine diabetes (acetoacetate, $\\beta$-OHB), uremia (sulfates, phosphates).</li><li><strong>Laboratory Findings:</strong> Blood $\\text{pH} < 7.35$, plasma $[\\text{HCO}_3^-] < 18\\text{ mEq/L}$, Normal chloride, Anion Gap markedly elevated ($> 25–35\\text{ mEq/L}$). Compensatory respiratory tachypnea (Kussmaul breathing) washes out $\\text{CO}_2$.</li></ul><p><strong>2. Abomasal Displacement / Volvulus (Metabolic Alkalosis with Paradoxical Aciduria):</strong></p><ul><li><strong>Pathophysiology:</strong> The abomasum secretes hydrochloric acid ($\\text{HCl}$) and potassium ($\\text{KCl}$). In left displaced abomasum (LDA), right displaced abomasum (RDA), or abomasal volvulus, gastric outflow is mechanically obstructed. $\\text{H}^+$ and $\\text{Cl}^-$ are sequestered within the atonic abomasum or refluxed into the omasum and rumen, never reaching duodenum to stimulate pancreatic bicarbonate neutralization.</li><li><strong>Systemic Profile:</strong> Profound <strong>Hypochloremia</strong> ($[\\text{Cl}^-] < 75\\text{ mEq/L}$), <strong>Hypokalemia</strong>, and systemic <strong>Metabolic Alkalosis</strong> (elevated blood $\\text{pH} > 7.45$ and high $[\\text{HCO}_3^-] > 35\\text{ mEq/L}$).</li><li><strong>Paradoxical Aciduria Mechanism:</strong> Systemic alkalosis should normally stimulate kidneys to excrete bicarbonate in alkaline urine. However, concurrent dehydration activates the renin-angiotensin-aldosterone system (RAAS), forcing proximal and distal renal tubules to avidly conserve $\\text{Na}^+$:<ul><li>To absorb $\\text{Na}^+$, tubules normally co-transport $\\text{Cl}^-$; but blood chloride is critically depleted.</li><li>Tubules must exchange $\\text{Na}^+$ for cations ($\\text{K}^+$ or $\\text{H}^+$).</li><li>Because whole-body potassium is already depleted, collecting duct principal cells and intercalated cells <strong>secrete hydrogen ions ($\\text{H}^+$) into urine</strong> in exchange for $\\text{Na}^+$.</li><li>Result: The cow excretes <strong>acidic urine (pH 5.0–6.0)</strong> despite life-threatening systemic alkalemia (Paradoxical Aciduria)!</li></ul></li></ul>",
      "keyPoints": [
        "HAGMA: Organic acid accumulation (D-lactate in grain overload, ketones in DKA) consuming bicarbonate; elevated anion gap",
        "Abomasal displacement: Sequestration of abomasal HCl -> severe hypochloremia, hypokalemia, and metabolic alkalosis",
        "Paradoxical Aciduria mechanism: Severe volume depletion + hypochloremia forces renal Na+ conservation; lack of K+ forces tubules to excrete H+ into urine",
        "Clinical indicator: Acidic urine (pH 5.0–6.0) in a cow with systemic metabolic alkalemia is pathognomonic for displaced abomasum / vagus indigestion"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "RAJUVAS 2023",
        "GADVASU 2022"
      ]
    },
    {
      "id": "u3-sa-08",
      "type": "short",
      "marks": 5,
      "question": "Explain the biochemical basis of Species Peculiarities in Phase II Drug Metabolism, focusing on Feline Glucuronidation Deficiency and Canine Acetylation Deficiency.",
      "topicId": "u3-t15",
      "answer": "<p><strong>1. Feline Glucuronidation Deficiency (Paracetamol / Acetaminophen Toxicity):</strong></p><ul><li><strong>Biochemical Defect:</strong> The domestic cat (and other Felidae) has an evolutionary pseudogene mutation resulting in a profound genetic deficiency of hepatic <strong>UDP-glucuronosyltransferase 1A6 (UGT1A6)</strong> and related UGT isoforms. Consequently, cats cannot efficiently conjugate phenolic drugs, phenols, benzoic acid, aspirin, or acetaminophen with glucuronic acid.</li><li><strong>Mechanism of Paracetamol Toxicity:</strong> In dogs and humans, paracetamol is safely cleared ($> 90\\%$) by glucuronidation and sulfation. In cats, these pathways are rapidly saturated. Excess paracetamol is shunted through hepatic <strong>Cytochrome P450 (CYP1A2/CYP2E1)</strong>, producing the electrophilic, highly toxic intermediate <strong>N-acetyl-p-benzoquinone imine (NAPQI)</strong>.</li><li><strong>Pathological Consequences:</strong> NAPQI rapidly depletes intrahepatic and intraerythrocytic glutathione (GSH). Once GSH is exhausted, NAPQI covalently binds macromolecular proteins:<ul><li>In erythrocytes, NAPQI oxidizes ferrous iron ($\\text{Fe}^{2+}$) of hemoglobin to ferric iron ($\\text{Fe}^{3+}$), causing massive <strong>Methemoglobinemia</strong> (chocolate-brown blood, severe anemic hypoxia, cyanosis).</li><li>Feline hemoglobin contains 8 reactive sulfhydryl ($-\\text{SH}$) groups (compared to 4 in dogs and 2 in humans), making feline RBCs extraordinarily vulnerable to oxidative cross-linking, producing <strong>Heinz bodies</strong> and acute hemolytic crisis.</li><li>Acute centrilobular hepatic necrosis and facial/paw subcutaneous edema ensue.</li></ul></li><li><strong>Specific Antidote:</strong> <strong>N-Acetylcysteine (NAC):</strong> Provides cysteine precursors to rapidly replenish intracellular glutathione stores and directly conjugates NAPQI.</li></ul><p><strong>2. Canine Acetylation Deficiency (Sulfonamide Sensitivity):</strong></p><ul><li><strong>Biochemical Defect:</strong> Dogs completely lack the genes for <strong>N-acetyltransferase (NAT1 and NAT2)</strong>. Dogs cannot acetylate aromatic amines and heterocyclic sulfonamides (e.g., sulfamethoxazole, sulfadiazine).</li><li><strong>Clinical Implication:</strong> Sulfonamides are shunted into oxidative CYP450 pathways, producing hydroxylamine metabolites that bind host proteins as haptens. This triggers idiosyncratic immune-mediated toxicities in dogs: <strong>Keratoconjunctivitis Sicca (KCS / dry eye)</strong>, acute hepatic necrosis, non-septic polyarthritis, and immune-mediated thrombocytopenia.</li></ul><p><strong>3. Other Species Quirks:</strong> Pigs lack sulfate conjugation (deficient sulfotransferase); Birds have low glucuronidation capacity and utilize ornithine conjugation.</p>",
      "keyPoints": [
        "Feline defect: Genetic lack of UGT1A6 -> inability to glucuronidate phenols, paracetamol, aspirin",
        "Paracetamol cascade: CYP450 shunts drug to toxic NAPQI -> glutathione depletion -> methemoglobinemia (chocolate blood), Heinz bodies, hepatic necrosis",
        "Specific antidote: N-Acetylcysteine (NAC) replenishes glutathione",
        "Canine defect: Complete absence of N-acetyltransferases (NAT1/2) -> shunting of sulfonamides to toxic hydroxylamines causing dry eye (KCS) and hepatitis"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u3-la-01",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive essay on the major metabolic disorders of carbohydrate and lipid metabolism in domestic animals: (a) Canine and Feline Diabetes Mellitus, (b) Bovine Ketosis (Acetonemia), (c) Pregnancy Toxaemia in Ewes, and (d) Neonatal Piglet Hypoglycaemia and Equine Hyperlipemia. Include etiology, biochemical pathogenesis, diagnostic panels, and therapeutic principles.",
      "topicId": "u3-t01",
      "answer": "<h3>1. Introduction & Overview</h3><p>Metabolic disorders of carbohydrate and lipid metabolism represent significant clinical and economic challenges in veterinary practice. Because ruminants, carnivores, and neonatal monogastrics operate under unique metabolic adaptations (e.g., ruminant reliance on propionate gluconeogenesis; neonatal piglet glycogen dependence), disturbances in the insulin-to-glucagon ratio or sudden negative energy balances trigger life-threatening cascade lesions.</p><h3>2. Canine and Feline Diabetes Mellitus</h3><p><strong>Etiology and Pathogenesis:</strong></p><ul><li><strong>Canine Diabetes:</strong> Equivalent to human <strong>Type 1 DM</strong>. Resulting from immune-mediated lymphocytic destruction of pancreatic $\\beta$-islets, acute/chronic necrotizing pancreatitis, or canine diestrus-induced progesterone/GH insulin antagonism. Dogs have absolute insulinopenia and require permanent insulin replacement.</li><li><strong>Feline Diabetes:</strong> Analogous to human <strong>Type 2 DM</strong>. Initiated by obesity-induced peripheral insulin resistance, downregulated GLUT-4 translocation, and $\\beta$-cell exhaustion accompanied by progressive deposition of <strong>islet amyloid polypeptide (IAPP / amylin)</strong>. Many cats can achieve diabetic remission if treated early.</li></ul><p><strong>Biochemical Cascade:</strong> Cellular glucose uptake by skeletal muscle and adipose tissues halts. Concurrently, uninhibited hepatic glycogenolysis and gluconeogenesis flood the vascular compartment, generating severe hyperglycemia exceeding the renal tubular threshold (dog ~180 mg/dL; cat ~280 mg/dL). Osmotic diuresis causes polyuria, leading to compensatory polydipsia. Intracellular glucose starvation triggers polyphagia, while unchecked adipose lipolysis and muscle proteolysis cause profound wasting.</p><p><strong>Diabetic Ketoacidosis (DKA):</strong> Low insulin:glucagon ratio activates adipose hormone-sensitive lipase (HSL), mobilizing massive NEFAs to the liver. Hepatic carnitine palmitoyltransferase-1 (CPT-1) is disinhibited. As oxaloacetate is drained into gluconeogenesis, acetyl-CoA accumulates and is shunted into ketogenesis, producing acetoacetate and $\\beta$-hydroxybutyrate. The accumulation of these organic acids induces high anion gap metabolic acidosis, severe hypokalemia, hypophosphatemia, and hyperosmolality.</p><p><strong>Laboratory Profile:</strong> Fasting hyperglycemia, glucosuria with high USG, elevated serum fructosamine ($> 400\\ \\mu\\text{mol/L}$), hypercholesterolemia, hypertriglyceridemia, and positive Rothera urine test during DKA.</p><h3>3. Bovine Ketosis (Acetonemia)</h3><p><strong>Etiological Classification:</strong></p><ul><li><strong>Type I (Peak Lactation Ketosis):</strong> Occurs 3 to 6 weeks postpartum. Intense milk lactose secretion consumes up to 2.5–3.0 kg of blood glucose daily. Dietary propionate supply fails to match demand, creating a severe negative energy balance.</li><li><strong>Type II (Fatty Liver / Calving Ketosis):</strong> Occurs around parturition in fat cows (BCS $\\ge 4.0$). Severe insulin resistance and massive prepartum lipolysis cause hepatic lipidosis, where triglyceride accumulation exceeds VLDL secretory capacity.</li></ul><p><strong>Biochemical Lesion:</strong> The absolute deficit of oxaloacetate (OAA) prevents condensation with acetyl-CoA in the citrate synthase step. Free acetyl-CoA builds up and undergoes thiolase, HMG-CoA synthase, and HMG-CoA lyase reactions to form acetoacetate, which is enzymatically reduced to $\\beta$-hydroxybutyrate ($\\beta$-OHB) or spontaneously decarboxylated to volatile acetone.</p><p><strong>Diagnosis & Treatment:</strong> Blood $\\beta$-OHB monitoring ($\\ge 1.2\\text{ mmol/L}$ subclinical; $\\ge 3.0\\text{ mmol/L}$ clinical); Rothera's purple ring test on milk and urine. Therapy requires IV 50% Dextrose (500 mL), oral propylene glycol (300 g BID as an anaplerotic OAA precursor), and dexamethasone.</p><h3>4. Pregnancy Toxaemia in Ewes (Twin Lamb Disease)</h3><p><strong>Pathogenesis:</strong> Occurs in ewes during the final 4–6 weeks of pregnancy when carrying twins or triplets. Fetal glucose demand surges (fetal weight increases by 80% during late gestation) while physical compression of the rumen by the gravid uterus reduces feed intake capacity. Inclement cold weather or transport stress triggers acute epinephrine/cortisol surges, provoking catastrophic lipolysis, profound hypoglycemia ($< 20\\text{ mg/dL}$), severe ketosis, and fatal hepatic encephalopathy (dullness, teeth grinding, blindness, recumbency).</p><p><strong>Management:</strong> Immediate delivery of lambs via emergency Caesarean section, IV glucose infusions, and oral glycerol/propylene glycol.</p><h3>5. Neonatal Piglet Hypoglycaemia & Equine Hyperlipemia</h3><p><strong>Piglet Hypoglycaemia (Baby Pig Disease):</strong> Newborn piglets are born with exceptionally low body fat reserves ($< 1–2\\%$) and minimal liver glycogen reserves that can sustain normoglycemia for only 8–12 hours. Furthermore, neonatal gluconeogenic enzymes (PEPCK, G6Pase) have very low basal expression and take 48–72 hours to achieve full maturation. Any interruption in colostrum intake (agalactia in sow, chilling, splayleg) rapidly plunges blood glucose below 30 mg/dL, producing shivering, coma, convulsions, and death within 24–36 hours. Therapy: Immediate intraperitoneal (IP) injection of 5%–10% glucose solution (warm, 15–20 mL) and thermal support.</p><p><strong>Equine Hyperlipemia:</strong> Occurs in obese ponies, miniature horses, and donkeys experiencing acute negative energy balance (feed restriction, colic, pregnancy). Massive uncontrolled lipolysis releases non-esterified fatty acids; the equine liver has poor ketone-synthesizing capacity and instead re-esterifies NEFAs into triglycerides, secreting massive amounts of VLDLs. Serum turns grossly opaque and milky (lipemia), leading to hepatic rupture, renal failure, and high mortality ($> 60\\%$).</p>",
      "keyPoints": [
        "Canine (Type 1 immune-mediated beta-cell loss) vs Feline (Type 2 amyloidosis & obesity insulin resistance)",
        "DKA cascade: Low insulin -> HSL activation -> massive NEFA release -> OAA exhaustion -> acetyl-CoA diversion to ketoacids",
        "Bovine Ketosis: Type I (peak lactation glucose deficit) vs Type II (periparturient fat cow hepatic lipidosis); therapy with 50% dextrose + propylene glycol",
        "Pregnancy Toxaemia: Twin fetuses consume 70% of glucose + rumen compression -> severe hypoglycemia and ketoacidosis",
        "Piglet Hypoglycemia: Low glycogen reserves + immature neonatal gluconeogenesis -> coma and shivering within 12h without colostrum",
        "Equine Hyperlipemia: Obese ponies unable to oxidize NEFAs secrete massive VLDL -> gross milky serum and hepatic lipidosis"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-la-02",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive treatise on Diagnostic Clinical Enzymology in Veterinary Medicine: (a) Classification into functional and non-functional enzymes, (b) Hepatocellular leakage markers (ALT, AST, SDH, GLDH), (c) Hepatobiliary cholestatic markers (ALP, GGT), (d) Muscle injury markers (CK, AST, Cardiac Troponins), and (e) Exocrine pancreatic markers (Amylase, Lipase, Pancreatic Lipase Immunoreactivity). Highlight species differences, serum half-lives, and isoenzyme analysis.",
      "topicId": "u3-t07",
      "answer": "<h3>1. General Principles of Clinical Enzymology</h3><p>Enzyme diagnostics evaluate organ integrity, cell membrane permeability, cellular necrosis, and functional organ mass. Enzymes are classified into:</p><ul><li><strong>Functional (Plasma-Specific) Enzymes:</strong> Secreted by tissues (predominantly liver) to perform physiological actions in circulating blood. Plasma concentrations are higher than tissue concentrations. Decreased levels indicate end-stage organ dysfunction. Examples: Clotting factors (Prothrombin, Factor VII, X), Lipoprotein Lipase (LPL), Lecithin-Cholesterol Acyltransferase (LCAT), Pseudocholinesterase.</li><li><strong>Non-Functional (Cell-Derived) Enzymes:</strong> Perform specialized intracellular functions in cytoplasm, mitochondria, or cell membranes. Normal physiological levels in plasma are low (derived from basal cell senescence). Elevated activities in plasma signify pathological leakage, ductal obstruction, or chemical enzyme induction.</li></ul><h3>2. Hepatocellular Leakage Enzymes</h3><p>Leakage enzymes escape through compromised plasma membranes into the sinusoidal circulation. The circulating activity reflects the <em>active rate of cell injury</em> rather than residual hepatic function.</p><ol><li><strong>Alanine Aminotransferase (ALT):</strong> Cytosolic enzyme. Liver-specific in <strong>dogs, cats, and primates</strong>. Following acute injury, ALT peaks at 24–48 hours and declines with a half-life of ~60 hours in dogs and ~24 hours in cats. <em>Species limitation:</em> Completely devoid of diagnostic value in cattle, sheep, goats, horses, and pigs due to negligible hepatocyte ALT concentrations.</li><li><strong>Aspartate Aminotransferase (AST):</strong> Distributed across cytosol and mitochondria of liver and muscle tissue in all domestic species. Sensitive for liver necrosis in horses and ruminants, but non-specific; simultaneous determination of <strong>Creatine Kinase (CK)</strong> is mandatory to differentiate liver from muscle injury.</li><li><strong>Sorbitol Dehydrogenase (SDH):</strong> Cytosolic, zinc-containing enzyme. <strong>Gold-standard liver-specific leakage marker in horses and cattle</strong>. Half-life is very short ($< 12\\text{ hours}$ in horses); therefore, persistent elevation confirms ongoing active hepatocellular necrosis. Labile in vitro (requires prompt processing).</li><li><strong>Glutamate Dehydrogenase (GLDH):</strong> Sequestered exclusively within mitochondrial matrix. Highly liver-specific in all animals, ruminants, and birds. Elevation indicates severe, deep centrilobular hepatocyte necrosis. Highly stable in refrigerated or frozen serum.</li></ol><h3>3. Hepatobiliary Cholestatic Enzymes</h3><p>Synthesized de novo and shed into circulation during impaired bile flow (cholestasis) or biliary hyperplasia:</p><ul><li><strong>Alkaline Phosphatase (ALP):</strong> Membrane-bound zinc metalloenzyme. Isoenzymes include Liver-ALP (L-ALP), Bone-ALP (B-ALP), and Canine Corticosteroid-Induced ALP (C-ALP). B-ALP is elevated in young growing animals and in osteosarcoma. In dogs, glucocorticoids induce the unique, heat-stable C-ALP isoform. In cats, ALP has a very short half-life (~6 hours) and low hepatocyte abundance; hence, <em>any elevation in a cat is highly significant</em> (hepatic lipidosis, cholangitis).</li><li><strong>Gamma-Glutamyltransferase (GGT):</strong> Canalicular membrane enzyme. Premier cholestatic marker in cattle, sheep, horses, and cats. Furthermore, colostrum contains massive amounts of GGT; neonatal calf and puppy serum GGT is evaluated within 24 hours post-partum as the definitive test for <strong>failure of passive transfer (FPT)</strong> of maternal colostral immunoglobulins.</li></ul><h3>4. Muscle Injury Markers</h3><ul><li><strong>Creatine Kinase (CK):</strong> Cytosolic dimer catalyzing reversible phosphorylation of creatine. Three dimeric isoenzymes: <strong>CK-MM</strong> (skeletal muscle), <strong>CK-MB</strong> (cardiac muscle), and <strong>CK-BB</strong> (brain/viscera). CK-MM is the most sensitive and tissue-specific marker of acute skeletal muscle necrosis (myositis, downer cow syndrome, equine rhabdomyolysis / 'tying-up'). It rises within 2 hours, peaks at 6–12 hours, and has a very short half-life (~2–4 hours). A persistent CK elevation indicates ongoing muscle damage.</li><li><strong>Cardiac Troponins (cTnI and cTnT):</strong> Non-enzymatic structural proteins of the contractile apparatus. Cardiac Troponin I (cTnI) is the gold standard for diagnosing myocardial infarction, cardiomyopathy (canine DCM, feline HCM), and toxic myocarditis.</li></ul><h3>5. Exocrine Pancreatic Markers</h3><ul><li><strong>Serum Amylase and Lipase:</strong> Classically measured for canine acute pancreatitis. However, both have poor diagnostic specificity because they are also synthesized by gastric mucosa, duodenum, and cleared by the kidneys (prerenal/renal azotemia elevates both).</li><li><strong>Pancreatic Lipase Immunoreactivity (cPLI in dogs, fPLI in cats):</strong> Measures only exocrine pancreatic lipase protein using species-specific monoclonal antibodies. It is unaffected by renal failure or non-pancreatic lipases, serving as the definitive diagnostic biomarker for canine and feline acute pancreatitis.</li></ul>",
      "keyPoints": [
        "Functional enzymes (prothrombin, LPL: secreted into blood to act) vs Non-functional enzymes (ALT, CK: intracellular markers of cell injury)",
        "ALT: Liver-specific for dog/cat; useless in ruminants and horses",
        "SDH & GLDH: Premier liver-specific leakage markers for large animals (cow, sheep, horse); GLDH reflects mitochondrial necrosis",
        "AST: Non-specific (muscle + liver); must be paired with CK",
        "ALP & GGT: Cholestatic induction markers; canine steroid-induced C-ALP; feline ALP short half-life; colostral GGT for FPT diagnosis",
        "CK: Highly sensitive muscle necrosis marker (CK-MM); cTnI for myocardial injury; cPLI/fPLI for acute pancreatitis"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u3-la-03",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive treatise on the Comprehensive Biochemical Evaluation of Hepatic and Renal Functions in Domestic Animals: (a) Liver Function Tests (LFTs) evaluating synthetic capacity, clearance, and excretion; (b) Renal Function Tests (RFTs) evaluating glomerular filtration, tubular reabsorption/concentration, and urinalysis; and (c) Comparative physiology of mammalian versus avian nitrogenous excretion.",
      "topicId": "u3-t08",
      "answer": "<h3>1. Biochemical Assessment of Hepatic Function (LFTs)</h3><p>Because enzyme activities merely reflect cellular damage rather than functional mass, true liver function tests evaluate the metabolic, synthetic, and excretory capacity of hepatocytes:</p><h4>A. Hepatic Synthetic Function:</h4><ul><li><strong>Serum Albumin:</strong> Synthesized exclusively by hepatocytes. Because albumin has a plasma half-life of ~8 days in dogs and ~14–20 days in horses/cattle, hypoalbuminemia occurs primarily in <strong>chronic end-stage liver failure</strong> (loss of $\\ge 70–80\\%$ functional hepatic parenchyma). Pre-renal (protein-losing nephropathy/enteropathy) and malnutrition causes must be excluded.</li><li><strong>Coagulation Factors & Fibrinogen:</strong> All clotting factors (except Factor VIII) are produced by the liver. Factors II, VII, IX, and X require vitamin K. In acute liver failure or biliary obstruction (preventing fat-soluble vitamin K absorption), <strong>Prothrombin Time (PT)</strong> and <strong>Activated Partial Thromboplastin Time (aPTT)</strong> become prolonged. Because Factor VII has the shortest half-life (~4–6 hours), PT prolongs earliest.</li><li><strong>Blood Urea Nitrogen (BUN):</strong> Urea is synthesized from ammonia in hepatocytes. Severe hepatic cirrhosis or portosystemic shunts (PSS) impair urea synthesis, causing low BUN ($< 5\\text{ mg/dL}$) accompanied by life-threatening <strong>Hyperammonemia</strong>.</li></ul><h4>B. Hepatic Clearance & Excretory Function:</h4><ul><li><strong>Serum Bile Acids (SBA):</strong> Synthesized from cholesterol, conjugated with taurine or glycine, and secreted into bile. After aiding intestinal fat digestion, $\\sim 95\\%$ are reabsorbed in the ileum and returned to liver via portal circulation (enterohepatic circulation).<br><em>Pre- and Post-Prandial Bile Acid Test:</em> Fasting blood sample drawn, animal fed high-fat meal to stimulate gall bladder contraction, second sample drawn at 2 hours. Markedly elevated post-prandial SBA is the gold-standard diagnostic marker for <strong>portosystemic shunts (PSS)</strong> and hepatic cirrhosis.</li><li><strong>Serum Bilirubin & Van den Bergh Reaction:</strong> Fractionation into unconjugated (indirect) and conjugated (direct) bilirubin differentiates pre-hepatic hemolysis, hepatocellular injury, and post-hepatic biliary obstruction.</li><li><strong>Bromsulphthalein (BSP) Dye Clearance Test:</strong> Historical clearance test where IV-injected BSP dye is extracted exclusively by hepatocytes and excreted in bile. Delayed clearance ($> 5\\%$ retention at 30 minutes in dogs; $> 3.5\\text{ minutes}$ half-life in horses) indicates impaired hepatic blood flow or parenchyma loss.</li></ul><h3>2. Biochemical Assessment of Renal Function (RFTs)</h3><h4>A. Glomerular Filtration Rate (GFR) Markers:</h4><ul><li><strong>Serum Creatinine:</strong> End-product of muscle phosphocreatine. Constant production rate, freely filtered, minimal tubular alteration. Excellent GFR marker, but insensitive in early disease: rises above reference interval only after <strong>$\\ge 75\\%$ of functional nephrons are lost</strong>.</li><li><strong>Blood Urea Nitrogen (BUN):</strong> Filtered and partially reabsorbed; influenced by protein intake, GI bleeding, and flow rate. In ruminants, BUN is extensively recycled into rumen, rendering it useless for early GFR monitoring.</li><li><strong>Symmetric Dimethylarginine (SDMA):</strong> Modern, highly sensitive GFR biomarker. Detects renal impairment early, elevating at <strong>$25\\%–40\\%$ loss of functional GFR</strong>. Completely independent of muscle mass.</li></ul><h4>B. Tubular Concentrating and Diluting Function:</h4><ul><li><strong>Urine Specific Gravity (USG):</strong> Measures solute concentration via refractometry. Differentiates pre-renal from renal azotemia. In dogs, renal failure is confirmed when azotemia is paired with inappropriately dilute urine ($< 1.030$ in dogs, $< 1.035$ in cats).</li><li><strong>Isosthenuria (USG 1.008–1.012):</strong> Identical to protein-free glomerular ultrafiltrate. Persistent isosthenuria in a dehydrated, azotemic patient is diagnostic for intrinsic renal failure (loss of $\\ge 66–75\\%$ tubular functional mass).</li><li><strong>Modified Water Deprivation Test:</strong> Differentiates Central Diabetes Insipidus (ADH deficiency), Nephrogenic Diabetes Insipidus (tubular ADH resistance), and Psychogenic Polydipsia.</li></ul><h4>C. Urinalysis:</h4><p>Evaluation of proteinuria (Urine Protein-to-Creatinine ratio / UPC: $> 0.5$ in dogs indicates glomerular disease), glucosuria (tubular dysfunction), cellular and granular casts (active tubular necrosis), and crystalluria (ammonium urate in PSS; calcium oxalate monohydrate in ethylene glycol poisoning).</p><h3>3. Comparative Nitrogenous Excretion: Mammalian vs Avian</h3><ul><li><strong>Mammals (Ureotelic):</strong> Convert toxic ammonia into non-toxic, water-soluble <strong>urea</strong> via the hepatic urea cycle. Requires significant water for urinary excretion. BUN is the primary index.</li><li><strong>Birds & Terrestrial Reptiles (Uricotelic):</strong> Lack mitochondrial carbamoyl phosphate synthetase-I (CPS-I) and arginase. Ammonia is detoxified into <strong>uric acid</strong> (purine pathway). Uric acid has very low water solubility and is excreted as a semisolid white paste with minimal water loss (evolutionary adaptation for cleidoic eggs and flight). In birds, uric acid is excreted primarily by <strong>active proximal tubular secretion</strong> (not GFR). Elevated avian uric acid indicates severe tubular nephropathy or dehydration and causes <strong>articular and visceral gout</strong> (monosodium urate crystal deposition on serosal organs).</li></ul>",
      "keyPoints": [
        "Hepatic synthetic markers: Albumin (chronic failure marker, t1/2 ~8-20d), Clotting factors (PT/aPTT, Factor VII earliest), low BUN with hyperammonemia",
        "Hepatic clearance/excretion: Pre/post-prandial Serum Bile Acids (gold standard for portosystemic shunts), Bilirubin fractionation (Van den Bergh), BSP clearance",
        "Renal GFR markers: Creatinine (elevates at 75% loss), BUN (confounded by diet/ruminal recycling), SDMA (early marker at 25-40% loss)",
        "Renal tubular tests: USG, isosthenuria (1.008-1.012), UPC ratio for glomerular proteinuria, casts for tubular necrosis",
        "Comparative excretion: Ureotelic mammals (urea via GFR) vs Uricotelic birds (uric acid via tubular secretion; hyperuricemia produces visceral/articular gout)"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u3-la-04",
      "type": "long",
      "marks": 12,
      "question": "Discuss the Biochemistry of Acid-Base Balance, Digestive Disorders, and Fluid Therapy in Domestic Animals: (a) Physiological buffering systems and Henderson-Hasselbalch equation; (b) Systematic evaluation of simple and mixed acid-base disorders using Anion Gap; (c) Pathophysiology of Ruminal Lactic Acidosis and Abomasal Displacement with Paradoxical Aciduria; and (d) Biochemical principles of fluid therapy, classification of crystalloids/colloids, and fluid deficit calculations.",
      "topicId": "u3-t11",
      "answer": "<h3>1. Physiological Buffering Systems & Henderson-Hasselbalch Relationship</h3><p>Maintenance of physiological extracellular pH ($7.35–7.45$) is essential for enzymatic activity, membrane potential, and cellular integrity. Defense against pH changes operates via three coordinated lines of defense:</p><ol><li><strong>Chemical Buffering Systems (Immediate, seconds):</strong><ul><li><strong>Bicarbonate-Carbonic Acid System:</strong> Primary extracellular buffer. Described by the Henderson-Hasselbalch equation:<br>$$\\text{pH} = \\text{pK}_a + \\log \\left( \\frac{[\\text{HCO}_3^-]}{[\\text{H}_2\\text{CO}_3]} \\right) = 6.1 + \\log \\left( \\frac{[\\text{HCO}_3^-]}{0.03 \\times \\text{pCO}_2} \\right)$$<br>Its power derives from being an <em>open physiological system</em>: $[\\text{HCO}_3^-]$ is regulated by the kidneys, and $\\text{pCO}_2$ is regulated by the lungs.</li><li><strong>Intracellular & Protein Buffers:</strong> Hemoglobin in erythrocytes (histidine imidazole residues buffer $\\text{H}^+$ during tissue deoxygenation—Bohr/Haldane effects); intracellular and plasma proteins; phosphate buffer system ($\\text{HPO}_4^{2-} / \\text{H}_2\\text{PO}_4^-$) operating primarily in renal tubular lumen and intracellular fluid.</li></ul></li><li><strong>Respiratory Compensation (Minutes to hours):</strong> Medullary chemoreceptors adjust alveolar ventilation: hyperventilation blows off $\\text{CO}_2$ to compensate for metabolic acidosis; hypoventilation retains $\\text{CO}_2$ during metabolic alkalosis.</li><li><strong>Renal Regulation (Hours to days):</strong> Reabsorption of filtered bicarbonate in proximal tubules, de novo synthesis of bicarbonate, and net acid excretion as titratable acid ($\\text{H}_2\\text{PO}_4^-$) and ammonium ($\\text{NH}_4^+$).</li></ol><h3>2. Diagnostic Evaluation of Acid-Base Disorders & Anion Gap</h3><p><strong>Systematic Diagnostic Algorithm:</strong></p><ul><li>Step 1: Check blood pH: $\\text{pH} < 7.35$ (acidemia) vs $\\text{pH} > 7.45$ (alkalemia).</li><li>Step 2: Check $\\text{pCO}_2$ (respiratory component) and $[\\text{HCO}_3^-]$ / Base Excess (metabolic component) to identify primary disorder and compensation.</li><li>Step 3: In metabolic acidosis, calculate the <strong>Serum Anion Gap (AG)</strong>:<br>$$\\text{Anion Gap} = ([\\text{Na}^+] + [\\text{K}^+]) - ([\\text{Cl}^-] + [\\text{HCO}_3^-])$$</li><li><strong>High Anion Gap Metabolic Acidosis (HAGMA):</strong> AG $> 25\\text{ mEq/L}$. Caused by accumulation of unmeasured organic anions: D-lactic acid (ruminal grain overload), L-lactic acid (septic shock, hypovolemia), ketoacids (bovine ketosis, canine DKA), uremic acids, or toxic anions (ethylene glycol).</li><li><strong>Normal Anion Gap (Hyperchloremic) Metabolic Acidosis:</strong> AG is normal (12–20 mEq/L). Caused by direct loss of bicarbonate matched by reciprocal retention of chloride ($[\\text{Cl}^-]$): severe diarrhea (scours in calves), proximal or distal renal tubular acidosis (RTA).</li></ul><h3>3. Biochemical Pathophysiology of Major Ruminant Digestive Disorders</h3><h4>A. Ruminal Lactic Acidosis (Grain Engorgement / Overload):</h4><p>Ingestion of excessive starch/concentrates leads to rapid microbial fermentation. <em>Streptococcus bovis</em> multiplies rapidly, producing massive amounts of L-lactic acid, dropping rumen pH to $< 5.5$. Acid-tolerant <em>Lactobacillus</em> spp. take over, generating racemic <strong>D- and L-lactic acid</strong>, plunging rumen pH to $< 4.5$.</p><p><em>Systemic Sequelae:</em> Hyperosmolality of rumen contents pulls extracellular fluid into the rumen, causing severe dehydration and hemoconcentration. Ruminal microflora and protozoa die. D-lactic acid is absorbed into systemic blood; because mammalian L-lactate dehydrogenase cannot rapidly metabolize D-lactate, profound systemic D-lactic acidosis, chemical ruminitis, liver abscessation (via *Fusobacterium necrophorum* translocation), and circulatory collapse develop.</p><h4>B. Abomasal Displacement with Paradoxical Aciduria:</h4><p>Obstruction in abomasal outflow (LDA, RDA, volvulus) sequesters $\\text{HCl}$ and $\\text{KCl}$. Blood develops <strong>hypochloremia, hypokalemia, and metabolic alkalosis</strong>. Dehydration activates aldosterone; due to severe chloride depletion, renal distal tubules reabsorb $\\text{Na}^+$ by exchanging for $\\text{H}^+$ and $\\text{K}^+$. Since body potassium is depleted, kidneys pump $\\text{H}^+$ into urine, producing <strong>acidic urine (pH 5.0–6.0) despite systemic alkalemia</strong> (Paradoxical Aciduria).</p><h3>4. Biochemical Principles of Fluid Therapy</h3><h4>A. Classification of Intravenous Fluids:</h4><ul><li><strong>Crystalloids:</strong> Aqueous mineral/sugar solutions that distribute across all extracellular compartments (intravascular and interstitial) within 30–60 minutes:<ul><li><em>Replacement (Isotonic):</em> Resemble extracellular fluid. Examples: <strong>Lactated Ringer's Solution (LRS)</strong> (contains sodium, chloride, potassium, calcium, and lactate which the liver metabolizes to bicarbonate; ideal for dehydration, shock, diarrhea); <strong>Normal Saline (0.9% NaCl)</strong> (indicated for hypochloremic metabolic alkalosis in displaced abomasum, hypercalcemia, and Addisonian crisis).</li><li><em>Maintenance (Hypotonic):</em> Lower sodium, higher potassium (e.g., 0.45% NaCl + 2.5% Dextrose) for ongoing daily metabolic needs.</li><li><em>Hypertonic Saline (7.2% NaCl):</em> Rapidly pulls water from interstitial space into intravascular compartment by osmosis, expanding plasma volume by 4–5 times the infused volume; used for rapid resuscitation in hemorrhagic shock.</li></ul></li><li><strong>Colloids:</strong> Large molecular weight polymers (Hetastarch, Dextrans, Plasma, Albumin) that cannot cross healthy capillary membranes. They generate oncotic pressure, expanding intravascular volume for 12–24 hours in hypoproteinemic animals.</li></ul><h4>B. Fluid Deficit and Replacement Calculations:</h4><p>Total fluid required over 24 hours equals the sum of three components:<br>$$\\text{Total Fluid Volume} = \\text{Dehydration Deficit} + \\text{Maintenance Requirement} + \\text{Ongoing Losses}$$</p><ol><li><strong>Dehydration Deficit (Liters):</strong><br>$$\\text{Deficit (L)} = \\text{Body Weight (kg)} \\times \\frac{\\text{Estimated Dehydration \\%}}{100}$$<br><em>Example:</em> A 400 kg cow with 8% dehydration has a deficit of $400 \\times 0.08 = 32\\text{ Liters}$.</li><li><strong>Maintenance Volume:</strong> Adult animals: 40–60 mL/kg/day; Neonates: 80–100 mL/kg/day.</li><li><strong>Ongoing Losses:</strong> Estimated volume of continued diarrhea, vomiting, or reflux.</li><li><strong>Correction of Acidosis:</strong> Bicarbonate deficit calculation:<br>$$\\text{Bicarbonate Deficit (mEq)} = \\text{Body Weight (kg)} \\times 0.5 \\times (\\text{Desired } [\\text{HCO}_3^-] - \\text{Patient } [\\text{HCO}_3^-])$$</li></ol>",
      "keyPoints": [
        "Buffers: Bicarbonate-carbonic open system (Henderson-Hasselbalch equation), hemoglobin imidazole, intracellular proteins, phosphates",
        "Acid-Base Diagnosis: Systematic steps checking pH, pCO2, HCO3-; High Anion Gap (organic acids: D-lactate, ketones, uremia) vs Normal Anion Gap (scours diarrhea HCO3- loss with hyperchloremia)",
        "Ruminal Acidosis: S. bovis and Lactobacillus surge producing non-metabolizable D-lactate -> ruminal hyperosmolality + severe D-lactic acidosis",
        "Displaced Abomasum: Sequestration of gastric HCl -> hypochloremic hypokalemic alkalosis with Paradoxical Aciduria (renal H+ excretion driven by Na+ conservation)",
        "Fluid Therapy: Isotonic crystalloids (LRS, 0.9% NaCl), maintenance, hypertonic saline (7.2%), and colloids (oncotic expansion)",
        "Deficit calculation: Deficit = Body Weight (kg) * % Dehydration + Maintenance (50 mL/kg) + Ongoing losses"
      ],
      "pyq": [
        "TANUVAS 2024",
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-la-05",
      "type": "long",
      "marks": 12,
      "question": "Provide an in-depth treatise on the Biochemistry of Oxidative Stress, Xenobiotic Biotransformation, and the Cytochrome P450 Enzyme Superfamily in Domestic Animals: (a) Generation of Reactive Oxygen Species (ROS) and cellular targets of oxidative damage; (b) Enzymatic and non-enzymatic antioxidant defense systems and clinical oxidative diseases (White Muscle Disease in calves/lambs, Heinz body anemia in cats/dogs); (c) Cytochrome P450 monooxygenase system (catalytic mechanism, electron transport, induction/inhibition); and (d) Phase II conjugation pathways, species differences, and the biochemical mechanism and antidotal treatment of Feline Paracetamol (Acetaminophen) Poisoning.",
      "topicId": "u3-t13",
      "answer": "<h3>1. Generation of Reactive Oxygen Species (ROS) & Cellular Targets</h3><p>During normal aerobic respiration, 1% to 3% of electrons leak from the mitochondrial electron transport chain (primarily at Complexes I and III), incompletely reducing molecular oxygen ($\\text{O}_2$) to generate free radicals:</p>$$\\text{O}_2 \\xrightarrow{e^-} \\text{O}_2^{\\bullet-} \\text{ (Superoxide)} \\xrightarrow{e^- + 2\\text{H}^+} \\text{H}_2\\text{O}_2 \\text{ (Hydrogen Peroxide)} \\xrightarrow{e^- + \\text{H}^+} \\text{OH}^{\\bullet} \\text{ (Hydroxyl Radical)} + \\text{H}_2\\text{O}$$<p>In the presence of free ferrous iron ($\\text{Fe}^{2+}$) or cuprous copper ($\\text{Cu}^+$), $\\text{H}_2\\text{O}_2$ undergoes the <strong>Fenton Reaction</strong> to generate the extremely cytotoxic <strong>Hydroxyl radical ($\\text{OH}^{\\bullet}$)</strong>:<br>$$\\text{Fe}^{2+} + \\text{H}_2\\text{O}_2 \\to \\text{Fe}^{3+} + \\text{OH}^{\\bullet} + \\text{OH}^-$$</p><p><strong>Cellular Targets of Oxidative Damage:</strong></p><ul><li><strong>Lipid Peroxidation:</strong> Hydroxyl radicals attack bis-allylic methylene carbons of polyunsaturated fatty acids (PUFAs) in cell and organelle membranes, initiating self-propagating lipid peroxidation that disrupts membrane fluidity and forms cytotoxic aldehydes like <strong>Malondialdehyde (MDA)</strong> and 4-hydroxynonenal (4-HNE).</li><li><strong>Protein Carbonylation & Disulfide Cross-linking:</strong> Oxidation of sulfhydryl ($-SH$) groups of cysteine and methionine, inactivating essential enzymes and structural proteins.</li><li><strong>DNA Damage:</strong> Hydroxylation of guanine to <strong>8-hydroxy-2'-deoxyguanosine (8-OHdG)</strong>, producing transversions, single/double-strand breaks, and apoptotic cell death.</li></ul><h3>2. Antioxidant Defense Systems & Clinical Veterinary Syndromes</h3><h4>A. Enzymatic & Non-Enzymatic Antioxidant Defenses:</h4><ul><li><strong>Superoxide Dismutase (SOD):</strong> Cytosolic/extracellular Cu-Zn SOD and mitochondrial Mn-SOD dismutate superoxide into hydrogen peroxide: $2\\text{O}_2^{\\bullet-} + 2\\text{H}^+ \\to \\text{H}_2\\text{O}_2 + \\text{O}_2$.</li><li><strong>Catalase:</strong> Heme-containing peroxisomal enzyme that converts high concentrations of $\\text{H}_2\\text{O}_2$ into water and oxygen: $2\\text{H}_2\\text{O}_2 \\to 2\\text{H}_2\\text{O} + \\text{O}_2$.</li><li><strong>Glutathione Peroxidase (GPx):</strong> <strong>Selenium-dependent</strong> cytosolic/mitochondrial enzyme that converts $\\text{H}_2\\text{O}_2$ and lipid hydroperoxides to water/alcohols, oxidizing reduced glutathione (GSH) to glutathione disulfide (GSSG):<br>$$\\text{H}_2\\text{O}_2 + 2\\text{GSH} \\xrightarrow{\\text{GPx (Selenium)}} 2\\text{H}_2\\text{O} + \\text{GSSG}$$<br>Glutathione Reductase then regenerates GSH using NADPH derived from the HMP shunt.</li><li><strong>Non-Enzymatic Antioxidants:</strong> Vitamin E ($\\alpha$-tocopherol, the premier chain-breaking lipophilic antioxidant in cell membranes), Vitamin C (ascorbate, water-soluble radical scavenger), $\\beta$-carotene, zinc, and reduced glutathione.</li></ul><h4>B. Clinical Oxidative Disorders in Domestic Animals:</h4><ul><li><strong>Nutritional Muscular Dystrophy (White Muscle Disease / Stiff Lamb Disease):</strong> Deficiency of <strong>Vitamin E and/or Selenium</strong> in rapidly growing calves, lambs, and foals. Lack of GPx and $\\alpha$-tocopherol causes rampant lipid peroxidation of sarcolemmal and mitochondrial membranes in cardiac and skeletal muscle, inducing calcium influx, Zenker's degeneration, muscle pallor ('chalky white streaks'), massive CK elevation, and heart failure.</li><li><strong>Heinz Body Hemolytic Anemia:</strong> Heinz bodies are precipitates of denatured, oxidatively cross-linked hemoglobin adhering to inner erythrocyte membranes. Feline hemoglobin contains 8 reactive sulfhydryl groups (dogs have 4, humans have 2), making cats hypersensitive to oxidative toxins (onions/garlic—allium organosulfoxides, acetaminophen, propylene glycol, zinc). Heinz bodies reduce RBC deformability; splenic macrophages pit the inclusions (producing 'bite cells') or destroy the RBCs, causing acute hemolytic anemia.</li><li><strong>Post-Parturient Hemoglobinuria (PPH):</strong> Occurs in high-yielding dairy cows 2–4 weeks after calving, linked to severe <strong>hypophosphatemia</strong>. Intracellular ATP and 2,3-BPG decline in erythrocytes, impairing glutathione regeneration and leading to massive intravascular hemolysis.</li></ul><h3>3. The Cytochrome P450 Monooxygenase Superfamily</h3><p>Microsomal heme-thiolate enzymes located in the smooth endoplasmic reticulum (SER) of hepatocytes (chiefly CYP1, CYP2, and CYP3 families). They catalyze <strong>Phase I functionalization</strong> reactions, converting lipophilic xenobiotics into polar derivatives:</p>$$\\text{RH} + \\text{O}_2 + \\text{NADPH} + \\text{H}^+ \\xrightarrow{\\text{CYP450}} \\text{R-OH} + \\text{H}_2\\text{O} + \\text{NADP}^+$$<p><strong>Electron Transport Chain:</strong> Electrons are transferred from NADPH to the CYP450 ferric ($\\text{Fe}^{3+}$) heme iron via the flavoprotein <strong>NADPH-Cytochrome P450 Reductase</strong> (containing FAD and FMN prosthetic groups). This reduces iron to ferrous ($\\text{Fe}^{2+}$), enabling molecular oxygen binding and insertion of one oxygen atom into the drug substrate while the other forms $\\text{H}_2\\text{O}$.</p><p><strong>Enzyme Induction and Inhibition:</strong></p><ul><li><strong>Induction:</strong> Phenobarbital (CYP2B), Rifampin, and Griseofulvin upregulate CYP transcription via nuclear receptors (CAR/PXR), accelerating clearance of concurrent medications.</li><li><strong>Inhibition:</strong> Cimetidine, Ketoconazole, and Chloramphenicol bind CYP450 active sites, inhibiting metabolism and increasing the toxic risk of co-administered drugs.</li></ul><h3>4. Phase II Conjugation & Feline Paracetamol Toxicity</h3><h4>A. Phase II Conjugation Pathways:</h4><ol><li><strong>Glucuronidation:</strong> Conjugation with UDP-glucuronic acid via UDP-glucuronosyltransferases (UGT). Most prominent clearance pathway in mammals.</li><li><strong>Sulfation:</strong> Conjugation with 3'-phosphoadenosine-5'-phosphosulfate (PAPS) via sulfotransferases.</li><li><strong>Glutathione (GSH) Conjugation:</strong> Detoxification of reactive electrophiles by Glutathione S-Transferases (GST).</li><li><strong>Acetylation:</strong> Transfer of acetyl-CoA by N-acetyltransferases (NAT).</li><li><strong>Amino Acid Conjugation:</strong> Glycine conjugation of benzoic acid (hippuric acid) and bile acids.</li></ol><h4>B. Biochemical Mechanism of Feline Paracetamol (Acetaminophen) Poisoning:</h4><ul><li><strong>The Genetic Defect:</strong> Cats harbor an evolutionary inactivating pseudogene mutation in <strong>UGT1A6</strong>, causing a severe deficiency of hepatic glucuronidation.</li><li><strong>Toxic Metabolite Formation:</strong> Therapeutic doses of paracetamol that are safely glucuronidated in dogs saturate the limited feline pathway. Excess drug is shunted to <strong>CYP2E1 and CYP1A2</strong>, producing the highly reactive, electrophilic intermediate <strong>N-acetyl-p-benzoquinone imine (NAPQI)</strong>.</li><li><strong>Glutathione Depletion & Oxidative Catastrophe:</strong> NAPQI covalently consumes erythrocyte and hepatic reduced glutathione (GSH). When GSH drops below 20% of normal, NAPQI oxidizes the heme iron of feline hemoglobin from $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$, producing massive <strong>Methemoglobinemia</strong> ($> 50\\%$). Blood turns a diagnostic <strong>chocolate-brown color</strong> and cannot release oxygen to tissues.</li><li>Extensive cross-linking of feline hemoglobin sulfhydryl groups triggers widespread <strong>Heinz body formation</strong>, severe intravascular/extravascular hemolysis, acute centrilobular liver necrosis, hypothermia, facial and paw edema, and asphyxial death.</li><li><strong>Antidotal Therapy:</strong> <strong>N-Acetylcysteine (NAC):</strong> Administered IV or orally (initial dose 140 mg/kg, then 70 mg/kg every 4 hours for 7 doses). NAC provides a direct cysteine precursor for de novo glutathione biosynthesis and directly couples with NAPQI to form non-toxic mercapturic acid conjugates. Concurrently, <strong>Methylene Blue</strong> or <strong>Ascorbic Acid (Vitamin C)</strong> is given to reduce methemoglobin back to functional hemoglobin.</li></ul>",
      "keyPoints": [
        "ROS Generation: Mitochondrial electron leakage -> Superoxide -> H2O2 -> Fenton reaction producing cytotoxic Hydroxyl radical (OH-dot)",
        "Cellular Targets: Lipid peroxidation (MDA marker), protein carbonylation, DNA oxidation (8-OHdG)",
        "Antioxidant Systems: SOD (Cu/Zn and Mn), Catalase (heme), GPx (Selenium-dependent) utilizing GSH, Vitamin E membrane chain-breaker",
        "Clinical Syndromes: White Muscle Disease (Selenium/Vit E deficiency in calves/lambs), Heinz body anemia in cats/dogs (oxidant drugs, onions), Post-parturient hemoglobinuria (hypophosphatemia)",
        "Cytochrome P450 System: SER monooxygenases utilizing NADPH-CYP reductase; subject to induction (phenobarbital) and inhibition (ketoconazole, cimetidine)",
        "Feline Paracetamol Toxicity: Genetic lack of UGT1A6 -> CYP450 shunting to toxic NAPQI -> glutathione exhaustion -> methemoglobinemia (chocolate blood), Heinz bodies, and acute hepatic necrosis",
        "Specific Antidote: N-Acetylcysteine (NAC) supplies cysteine for glutathione regeneration; methylene blue/vit C reduces methemoglobin"
      ],
      "pyq": [
        "IVRI Annual Exam 2024",
        "TANUVAS 2023",
        "GADVASU 2023",
        "RAJUVAS 2022",
        "LUVAS 2021"
      ]
    }
  ]
};
