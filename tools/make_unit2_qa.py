# -*- coding: utf-8 -*-
"""
Unit 2 Q&A Bank: Intermediary Metabolism
Requirements:
  - 12 Two-mark definitions (marks: 2, type: "define")
  - 8 Five-mark short-answer questions (marks: 5, type: "short" / "diff")
  - 5 Twelve-mark long-answer questions (marks: 12, type: "long")
Total: 25 High-Yield Examination Questions
"""

unit2_qa = [
    # ============================================================
    # 12 TWO-MARK DEFINITION QUESTIONS (marks: 2, type: "define")
    # ============================================================
    {
        "id": "u2-def-01",
        "type": "define",
        "marks": 2,
        "question": "Define Michaelis Constant (Km) and state its physiological significance.",
        "topicId": "u2-t04",
        "answer": r"<p><strong>Michaelis Constant ($K_m$):</strong> The substrate concentration ($[S]$) at which an enzyme-catalyzed reaction achieves exactly half of its maximal velocity ($V_{max}/2$). It is expressed in moles per liter (M or mM).</p><p><strong>Significance:</strong> $K_m$ reflects enzyme-substrate affinity; a low numerical $K_m$ value indicates high binding affinity (less substrate needed to reach $V_{max}/2$), whereas a high $K_m$ indicates low affinity.</p>",
        "keyPoints": [
            "Substrate concentration at which initial reaction velocity $v = V_{max} / 2$",
            "Inversely related to enzyme-substrate binding affinity",
            "Characteristic constant for an enzyme-substrate pair independent of enzyme concentration"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "GADVASU 2022"]
    },
    {
        "id": "u2-def-02",
        "type": "define",
        "marks": 2,
        "question": "Define Isoenzymes (Isozymes) and give two clinical examples.",
        "topicId": "u2-t02",
        "answer": r"<p><strong>Isoenzymes (Isozymes):</strong> Physically distinct, multiple molecular forms of an enzyme that catalyze the same biochemical reaction within the same organism, but differ in amino acid sequence, electrophoretic mobility, immunological properties, tissue distribution, and kinetic parameters ($K_m, V_{max}$).</p><p><strong>Clinical Examples:</strong><br>1. <strong>Lactate Dehydrogenase (LDH):</strong> 5 tetrameric isoenzymes (LDH-1 in myocardium to LDH-5 in skeletal muscle/liver).<br>2. <strong>Creatine Kinase (CK):</strong> 3 dimeric isoenzymes (CK-MM in muscle, CK-MB in myocardium, CK-BB in brain).</p>",
        "keyPoints": [
            "Catalyze the same chemical reaction but differ in structure and kinetic properties",
            "Encoded by different gene loci or alternative splicing variants",
            "Examples: LDH 1–5 tetramers, CK-MM / CK-MB / CK-BB dimers"
        ],
        "pyq": ["IVRI Annual Exam 2023", "RAJUVAS 2022", "KVAFSU 2021"]
    },
    {
        "id": "u2-def-03",
        "type": "define",
        "marks": 2,
        "question": "Define Turnover Number (kcat) and Specific Activity.",
        "topicId": "u2-t05",
        "answer": r"<p><strong>Turnover Number ($k_{cat}$):</strong> The number of substrate molecules transformed into product per catalytic active site (or per enzyme molecule) per unit time when the enzyme is completely saturated with substrate ($k_{cat} = V_{max} / [E_t]$, expressed in $\text{sec}^{-1}$).</p><p><strong>Specific Activity:</strong> The number of enzyme catalytic units (IU) per milligram of total protein ($\text{IU/mg protein}$); it is the definitive index of enzyme purity during isolation.</p>",
        "keyPoints": [
            "Turnover number ($k_{cat} = V_{max} / [E_t]$): substrate molecules converted per active site per second",
            "Specific activity: Enzyme units per mg total protein ($\text{IU/mg}$)",
            "Specific activity increases with increasing purity during protein purification"
        ],
        "pyq": ["IVRI Annual Exam 2022", "LUVAS 2023", "WBUAFS 2021"]
    },
    {
        "id": "u2-def-04",
        "type": "define",
        "marks": 2,
        "question": "Define Competitive Enzyme Inhibition and provide an example.",
        "topicId": "u2-t06",
        "answer": r"<p><strong>Competitive Inhibition:</strong> A form of reversible enzyme inhibition in which a structural analog of the substrate competes directly with the normal substrate for binding to the free catalytic active center of the enzyme.</p><p><strong>Kinetic Hallmark:</strong> $K_m$ increases (apparent affinity decreases), while $V_{max}$ remains unchanged (can be overcome by excess substrate).<br><em>Classic Example:</em> Malonate competitively inhibits succinate dehydrogenase in the Krebs cycle by mimicking succinate.</p>",
        "keyPoints": [
            "Inhibitor structurally resembles the substrate and binds to the free active site",
            "Increases apparent $K_m$ without altering $V_{max}$",
            "Can be completely reversed by increasing substrate concentration",
            "Example: Malonate vs Succinate Dehydrogenase; Statins vs HMG-CoA Reductase"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2022", "SVVU 2021"]
    },
    {
        "id": "u2-def-05",
        "type": "define",
        "marks": 2,
        "question": "Define Uncouplers of Oxidative Phosphorylation and state their physiological or toxic effect.",
        "topicId": "u2-t09",
        "answer": r"<p><strong>Uncouplers:</strong> Chemical agents or physiological proteins that dissociate the process of electron transport from ATP synthesis by collapsing the transmembrane electrochemical proton gradient ($\Delta\mu_{\text{H}^+}$) across the inner mitochondrial membrane without arresting electron flow.</p><p><strong>Effect:</strong> Electron flow and oxygen consumption accelerate, but no ATP is synthesized; the liberated free energy is dissipated entirely as heat (e.g., 2,4-dinitrophenol causing hyperthermia, or thermogenin/UCP-1 mediating non-shivering thermogenesis in brown fat of newborn calves).</p>",
        "keyPoints": [
            "Dissociate electron transport from ATP synthesis by dissipating proton-motive force",
            "Permit rapid electron flow and oxygen uptake while halting phosphorylation",
            "Energy is released as heat: 2,4-DNP (toxic hyperthermia), Thermogenin/UCP-1 (neonatal warmth)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "GADVASU 2022", "RAJUVAS 2020"]
    },
    {
        "id": "u2-def-06",
        "type": "define",
        "marks": 2,
        "question": "Define Substrate-Level Phosphorylation and cite two examples from glycolysis.",
        "topicId": "u2-t10",
        "answer": r"<p><strong>Substrate-Level Phosphorylation:</strong> The direct enzymatic transfer of a high-energy phosphate group from a phosphorylated metabolic intermediate directly to ADP (or GDP) to generate ATP (or GTP), without requiring the electron transport chain or oxygen.</p><p><strong>Glycolytic Examples:</strong><br>1. <strong>Phosphoglycerate Kinase:</strong> $1,3\text{-Bisphosphoglycerate} + \text{ADP} \rightarrow 3\text{-Phosphoglycerate} + \text{ATP}$<br>2. <strong>Pyruvate Kinase:</strong> $\text{Phosphoenolpyruvate (PEP)} + \text{ADP} \rightarrow \text{Pyruvate} + \text{ATP}$</p>",
        "keyPoints": [
            "Direct synthesis of ATP/GTP by transfer of high-energy phosphate from a metabolic intermediate",
            "Independent of mitochondrial electron transport chain and oxygen availability",
            "Examples: Phosphoglycerate kinase and Pyruvate kinase in glycolysis; Succinyl-CoA synthetase in TCA cycle"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2021", "KVAFSU 2023"]
    },
    {
        "id": "u2-def-07",
        "type": "define",
        "marks": 2,
        "question": "Define Anaplerotic Reactions and give the foremost example in carbohydrate metabolism.",
        "topicId": "u2-t11",
        "answer": r"<p><strong>Anaplerotic Reactions ('Filling-up' Reactions):</strong> Enzymatic reactions that replenish intermediates of the Citric Acid (Krebs) Cycle that have been siphoned off for biosynthetic anabolic pathways (such as gluconeogenesis, amino acid synthesis, and porphyrin synthesis).</p><p><strong>Foremost Example:</strong> Carboxylation of pyruvate to oxaloacetate catalyzed by mitochondrial <strong>Pyruvate Carboxylase</strong>, requiring ATP and biotin: $$\text{Pyruvate} + \text{CO}_2 + \text{ATP} + \text{H}_2\text{O} \xrightarrow{\text{Biotin, Acetyl-CoA}} \text{Oxaloacetate} + \text{ADP} + \text{P}_i$$</p>",
        "keyPoints": [
            "Anaplerotic means 'filling up' depleted catalytic intermediates of the Krebs cycle",
            "Maintains oxaloacetate levels for continued condensation with acetyl-CoA",
            "Primary reaction: Pyruvate Carboxylase (mitochondrial, biotin-dependent, activated by acetyl-CoA)"
        ],
        "pyq": ["IVRI Annual Exam 2022", "MAFSU 2023", "LUVAS 2021"]
    },
    {
        "id": "u2-def-08",
        "type": "define",
        "marks": 2,
        "question": "Define the Cori Cycle and explain its physiological role.",
        "topicId": "u2-t13",
        "answer": r"<p><strong>Cori Cycle (Lactic Acid Cycle):</strong> The metabolic cooperation between exercising skeletal muscle (or mature erythrocytes) and the liver. Anaerobic glycolysis in peripheral tissues produces lactate, which diffuses into blood and is transported to the liver, where it is resynthesized via gluconeogenesis into glucose, which is then released back into the circulation.</p><p><strong>Role:</strong> Prevents lactic acidosis in strenuous muscular exertion and recycles metabolic carbon skeletons.</p>",
        "keyPoints": [
            "Inter-organ metabolic cycle connecting anaerobic muscle/RBCs to the liver",
            "Muscle: Glucose $\rightarrow$ 2 Lactate (net 2 ATP produced)",
            "Liver: 2 Lactate $\rightarrow$ Glucose via gluconeogenesis (consumes 6 high-energy bonds)",
            "Prevents fatal systemic lactic acidosis during vigorous exercise"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2022", "WBUAFS 2023"]
    },
    {
        "id": "u2-def-09",
        "type": "define",
        "marks": 2,
        "question": "Define Ketogenesis and name the three biological ketone bodies.",
        "topicId": "u2-t15",
        "answer": r"<p><strong>Ketogenesis:</strong> The biochemical pathway occurring exclusively in the mitochondrial matrix of hepatocytes by which acetyl-CoA derived from accelerated fatty acid beta-oxidation is converted into water-soluble ketone bodies during states of carbohydrate deficiency or intense negative energy balance.</p><p><strong>The Three Ketone Bodies:</strong><br>1. <strong>Acetoacetate:</strong> Primary ketone body formed.<br>2. <strong>$\beta$-Hydroxybutyrate (BHB):</strong> Chemically a hydroxy acid; predominant circulating form in ruminants.<br>3. <strong>Acetone:</strong> Volatile non-metabolizable ketone expelled via breath and urine.</p>",
        "keyPoints": [
            "Synthesis of ketone bodies in liver mitochondria from excess acetyl-CoA",
            "Triggered when oxaloacetate is depleted by high gluconeogenic demand",
            "Three ketone bodies: Acetoacetate, Beta-hydroxybutyrate, and Acetone"
        ],
        "pyq": ["IVRI Annual Exam 2023", "RAJUVAS 2021", "KVAFSU 2022"]
    },
    {
        "id": "u2-def-10",
        "type": "define",
        "marks": 2,
        "question": "Define the Carnitine Shuttle and state its rate-limiting enzyme.",
        "topicId": "u2-t15",
        "answer": r"<p><strong>Carnitine Shuttle:</strong> The specialized multi-component carrier system required to transport long-chain fatty acyl-CoA molecules across the impermeable inner mitochondrial membrane into the matrix for beta-oxidation.</p><p><strong>Rate-Limiting Enzyme:</strong> <strong>Carnitine Palmitoyltransferase-I (CPT-I)</strong>, located on the outer mitochondrial membrane; it conjugates fatty acyl groups with carnitine to form acylcarnitine and is allosterically inhibited by malonyl-CoA during lipogenesis.</p>",
        "keyPoints": [
            "Translocates long-chain acyl-CoA across impermeable inner mitochondrial membrane",
            "Components: CPT-I (outer membrane), Carnitine-acylcarnitine translocase, CPT-II (inner membrane)",
            "CPT-I is the committed rate-limiting step, inhibited by Malonyl-CoA"
        ],
        "pyq": ["IVRI Annual Exam 2024", "GADVASU 2023", "SVVU 2022"]
    },
    {
        "id": "u2-def-11",
        "type": "define",
        "marks": 2,
        "question": "Define Transamination and name the essential coenzyme involved.",
        "topicId": "u2-t18",
        "answer": r"<p><strong>Transamination:</strong> The reversible enzymatic transfer of an $\alpha$-amino group ($-\text{NH}_2$) from an $\alpha$-amino acid to an $\alpha$-keto acid (predominantly $\alpha$-ketoglutarate), forming a new $\alpha$-amino acid (L-glutamate) and a new $\alpha$-keto acid, without the release of free ammonia.</p><p><strong>Coenzyme:</strong> <strong>Pyridoxal Phosphate (PLP)</strong>, the active coenzyme form of Vitamin B6, which forms a Schiff base intermediate.</p>",
        "keyPoints": [
            "Reversible transfer of amino group from amino acid to an alpha-keto acid",
            "Catalyzed by aminotransferases (ALT, AST); no free ammonia released",
            "Obligatory coenzyme: Pyridoxal Phosphate (PLP, Vitamin B6)",
            "Lysine and threonine do not undergo transamination"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "LUVAS 2021"]
    },
    {
        "id": "u2-def-12",
        "type": "define",
        "marks": 2,
        "question": "Differentiate between Ureotelic, Uricotelic, and Ammonotelic animals with veterinary examples.",
        "topicId": "u2-t19",
        "answer": r"<p>Animals are classified based on the principal chemical form in which they excrete toxic waste nitrogen derived from protein catabolism:</p><p>1. <strong>Ureotelic Animals:</strong> Excrete nitrogen primarily as water-soluble <strong>urea</strong> synthesized via the hepatic urea cycle. <em>Examples:</em> All domestic mammals (cattle, horses, dogs, sheep) and adult amphibians.<br>2. <strong>Uricotelic Animals:</strong> Excrete nitrogen primarily as semi-solid, insoluble <strong>uric acid</strong> crystals to minimize evaporative water loss. <em>Examples:</em> Birds (poultry) and terrestrial reptiles.<br>3. <strong>Ammonotelic Animals:</strong> Excrete toxic free <strong>ammonia</strong> directly through gills into surrounding water. <em>Examples:</em> Teleost (bony) fishes and aquatic invertebrates.</p>",
        "keyPoints": [
            "Ureotelic: excrete urea (mammals, adult amphibians) via hepatic urea cycle",
            "Uricotelic: excrete uric acid (birds/poultry, terrestrial reptiles) to conserve water",
            "Ammonotelic: excrete free ammonia directly (freshwater teleost fish)"
        ],
        "pyq": ["IVRI Annual Exam 2024", "KVAFSU 2023", "RAJUVAS 2021"]
    },

    # ============================================================
    # 8 FIVE-MARK SHORT-ANSWER QUESTIONS (marks: 5, type: "short" / "diff")
    # ============================================================
    {
        "id": "u2-sa-01",
        "type": "short",
        "marks": 5,
        "question": "Explain Michaelis-Menten Kinetics, the derivation of the Lineweaver-Burk Plot, and factors influencing enzyme velocity.",
        "topicId": "u2-t04",
        "answer": r"<p><strong>Michaelis-Menten Equation:</strong> Relates initial reaction velocity ($v$) to substrate concentration ($[S]$): $$v = \frac{V_{max}[S]}{K_m + [S]}$$</p><p>When $[S] \ll K_m$, reaction is first order ($v \propto [S]$). When $[S] \gg K_m$, enzyme is saturated and reaction is zero order ($v = V_{max}$). When $[S] = K_m$, $v = V_{max}/2$.</p><p><strong>Lineweaver-Burk Double-Reciprocal Plot:</strong> Taking the algebraic reciprocal of both sides yields a straight line equation ($y = mx + c$): $$\frac{1}{v} = \left(\frac{K_m}{V_{max}}\right)\frac{1}{[S]} + \frac{1}{V_{max}}$$ &bull; <strong>y-Intercept:</strong> $1/V_{max}$<br>&bull; <strong>x-Intercept:</strong> $-1/K_m$<br>&bull; <strong>Slope:</strong> $K_m / V_{max}$</p><p><strong>Factors Influencing Velocity:</strong><br>1. <em>Substrate Concentration:</em> Hyperbolic increase until saturation at $V_{max}$.<br>2. <em>Enzyme Concentration:</em> Linear proportional increase ($v \propto [E]$) under excess substrate.<br>3. <em>Temperature:</em> Rate doubles for every $10^\circ\text{C}$ rise ($Q_{10} \approx 2.0$) up to the optimum ($37–42^\circ\text{C}$ in domestic animals), beyond which thermal denaturation rapidly destroys activity.<br>4. <em>pH:</em> Bell-shaped curve with sharp optimum (e.g., Pepsin pH 1.5–2.0, Trypsin pH 8.0, Alkaline Phosphatase pH 9.5–10.0).</p>",
        "keyPoints": [
            "Michaelis-Menten equation: $v = V_{max}[S] / (K_m + [S])$; hyperbolic curve",
            "Lineweaver-Burk reciprocal equation: $1/v = (K_m/V_{max})(1/[S]) + 1/V_{max}$",
            "y-intercept is $1/V_{max}$; x-intercept is $-1/K_m$; slope is $K_m/V_{max}$",
            "Velocity affected by temperature (bell-shaped, $Q_{10}=2$), pH (ionization of active site), [S], and [E]"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "GADVASU 2021"]
    },
    {
        "id": "u2-sa-02",
        "type": "diff",
        "marks": 5,
        "question": "Differentiate between Competitive, Non-Competitive, and Uncompetitive Enzyme Inhibition with kinetic parameters and clinical examples.",
        "topicId": "u2-t06",
        "answer": r"<p>Enzyme inhibition provides profound insights into drug action, metabolic regulation, and toxic mechanisms.</p>",
        "table": {
            "title": "Comparison of Enzyme Inhibition Types",
            "headers": ["Feature", "Competitive Inhibition", "Non-Competitive Inhibition", "Uncompetitive Inhibition"],
            "rows": [
                ["Inhibitor Binding Site", "Binds directly to catalytic active site of free enzyme (E)", "Binds to allosteric site on both free E and ES complex", "Binds exclusively to Enzyme-Substrate (ES) complex"],
                ["Structural Analogy", "Structurally resembles true substrate", "No structural resemblance to substrate", "No resemblance to substrate"],
                ["Effect on Km", "<strong>Increases</strong> (apparent affinity decreases)", "<strong>Unchanged</strong>", "<strong>Decreases</strong> (ES complex trapped)"],
                ["Effect on Vmax", "<strong>Unchanged</strong> (overcome by excess [S])", "<strong>Decreases</strong> (catalytic turnover halted)", "<strong>Decreases</strong>"],
                ["Lineweaver-Burk Plot", "Lines intersect on y-axis at identical $1/V_{max}$", "Lines intersect on negative x-axis at $-1/K_m$", "Parallel lines with identical slopes ($K_m/V_{max}$)"],
                ["Clinical / Toxic Example", "Malonate vs Succinate Dehydrogenase; Allopurinol vs Xanthine Oxidase", "Cyanide on Cytochrome Oxidase; Fluoride on Enolase", "Lithium on inositol monophosphatase"]
            ]
        },
        "keyPoints": [
            "Competitive: binds active site, Km increases, Vmax unchanged, lines intersect on y-axis",
            "Non-competitive: binds allosteric site on E and ES, Km unchanged, Vmax decreases, lines intersect on x-axis",
            "Uncompetitive: binds only ES complex, both Km and Vmax decrease in parallel",
            "Reversibility: competitive can be outcompeted by excess substrate; non-competitive cannot"
        ],
        "pyq": ["IVRI Annual Exam 2024", "KVAFSU 2022", "RAJUVAS 2023"]
    },
    {
        "id": "u2-sa-03",
        "type": "short",
        "marks": 5,
        "question": "Describe Peter Mitchell's Chemiosmotic Hypothesis and the rotary mechanism of mitochondrial ATP Synthase (Complex V).",
        "topicId": "u2-t08",
        "answer": r"<p><strong>Chemiosmotic Hypothesis (Peter Mitchell, 1961):</strong><br>Oxidative phosphorylation couples electron transport to ATP synthesis through an electrochemical proton gradient across the inner mitochondrial membrane (IMM):<br>1. As electrons traverse Complexes I, III, and IV, free energy drives active extrusion of protons ($\text{H}^+$) from the matrix into the intermembrane space ($10\text{ H}^+$ pumped per NADH, $6\text{ H}^+$ per $\text{FADH}_2$).<br>2. Because the IMM is impermeable to protons, this creates a <strong>proton-motive force (PMF)</strong> comprising an electrical membrane potential ($\Delta\Psi \approx 160–180\text{ mV}$, inside negative) and a chemical pH gradient ($\Delta\text{pH} \approx 0.75–1.0$, matrix alkaline).<br>3. Protons can re-enter the matrix only through the specific channel of ATP Synthase, driving the phosphorylation of ADP to ATP.</p><p><strong>Structure and Rotary Mechanism of ATP Synthase ($F_0F_1$ Complex):</strong><br>&bull; <strong>$F_0$ Subunit (Membrane-Embedded):</strong> Contains proton channel; composed of $a$, $b_2$, and a rotating ring of $c$-subunits ($c_{8–12}$). Inhibited by <strong>oligomycin</strong>.<br>&bull; <strong>$F_1$ Subunit (Matrix Globular Head):</strong> Catalytic core composed of three $\alpha\beta$ pairs surrounding a central asymmetric $\gamma\epsilon$ rotor shaft.<br>&bull; <strong>Binding Change Mechanism (Paul Boyer):</strong> Proton flux through $F_0$ causes the $c$-ring and $\gamma$-shaft to rotate. As $\gamma$ rotates, it induces sequential conformational changes in the catalytic $\beta$-subunits through three states:<br>1. <em>Open (O) State:</em> Very low affinity; binds ADP + $\text{P}_i$ and releases newly formed ATP.<br>2. <em>Loose (L) State:</em> Binds ADP and $\text{P}_i$ securely in close proximity.<br>3. <em>Tight (T) State:</em> Catalyzes spontaneous synthesis of ATP from ADP and $\text{P}_i$.<br>One full $360^\circ$ rotation of $\gamma$ produces 3 molecules of ATP.</p>",
        "keyPoints": [
            "Peter Mitchell (1961): electron transport pumps protons out, generating proton-motive force (PMF)",
            "PMF consists of transmembrane electrical potential (160–180 mV) and pH gradient",
            "F0 subunit forms transmembrane proton channel; blocked by oligomycin",
            "F1 head contains 3 catalytic alpha-beta dimers driven by asymmetric rotating gamma shaft",
            "Boyer's binding change mechanism: Open (O), Loose (L), and Tight (T) conformational states",
            "Full 360-degree rotation yields 3 ATP molecules"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "GADVASU 2020"]
    },
    {
        "id": "u2-sa-04",
        "type": "short",
        "marks": 5,
        "question": "Enumerate the four respiratory chain complexes, mobile electron carriers, and specific site inhibitors of the mitochondrial ETC.",
        "topicId": "u2-t08",
        "answer": r"<p>The mitochondrial Electron Transport Chain (ETC) comprises four multi-protein complexes embedded in the inner mitochondrial membrane:</p><p><strong>1. Complex I (NADH-Q Oxidoreductase):</strong> Contains FMN and Fe-S centers; transfers electrons from NADH to Ubiquinone (CoQ) while pumping $4\text{ H}^+$ into intermembrane space.<br>&bull; <em>Specific Inhibitors:</em> <strong>Rotenone</strong> (botanical insecticide), Amytal (barbiturate), Piericidin A.</p><p><strong>2. Complex II (Succinate-Q Reductase):</strong> Composed of succinate dehydrogenase, FAD, and Fe-S centers; transfers electrons from succinate to CoQ. <strong>Pumps ZERO protons</strong>.<br>&bull; <em>Specific Inhibitors:</em> <strong>Malonate</strong> (competitive), TTFA, Carboxin.</p><p><strong>3. Complex III (Q-Cytochrome c Oxidoreductase):</strong> Cytochrome $b$, $c_1$, and Rieske Fe-S center; executes the Q-cycle, shuttling electrons to Cytochrome c while pumping $4\text{ H}^+$.<br>&bull; <em>Specific Inhibitor:</em> <strong>Antimycin A</strong> (blocks Q-cycle electron transfer to cyt $b$).</p><p><strong>4. Complex IV (Cytochrome c Oxidase):</strong> Hemes $a$ and $a_3$, copper centers $\text{Cu}_A$ and $\text{Cu}_B$; transfers 4 electrons from cytochrome c to reduce molecular $\text{O}_2 \rightarrow 2\text{ H}_2\text{O}$ while pumping $2\text{ H}^+$.<br>&bull; <em>Specific Inhibitors:</em> <strong>Cyanide ($\text{CN}^-$)</strong>, <strong>Carbon Monoxide (CO)</strong>, Sodium Azide ($\text{NaN}_3$), and $\text{H}_2\text{S}$ (bind ferric/ferrous heme $a_3$).</p><p><strong>Mobile Carriers:</strong><br>&bull; <em>Ubiquinone (Coenzyme Q):</em> Lipid-soluble benzoquinone in the membrane interior shuttling electrons from Complexes I and II to III.<br>&bull; <em>Cytochrome c:</em> Water-soluble peripheral hemeprotein on outer surface shuttling electrons from Complex III to IV.</p>",
        "keyPoints": [
            "Complex I (NADH-Q oxidoreductase): pumps 4 H+; inhibited by Rotenone and Amytal",
            "Complex II (Succinate dehydrogenase): does NOT pump protons; inhibited by Malonate",
            "Complex III (Cytochrome bc1): pumps 4 H+ via Q-cycle; inhibited by Antimycin A",
            "Complex IV (Cytochrome c oxidase): reduces O2 to H2O, pumps 2 H+; inhibited by Cyanide, CO, Azide",
            "Mobile carriers: lipid-soluble Ubiquinone (CoQ) and water-soluble Cytochrome c"
        ],
        "pyq": ["IVRI Annual Exam 2024", "KVAFSU 2023", "LUVAS 2022"]
    },
    {
        "id": "u2-sa-05",
        "type": "short",
        "marks": 5,
        "question": "Describe the Hexose Monophosphate (HMP) Shunt, its rate-limiting enzyme, and the clinical consequences of G6PD deficiency in veterinary medicine.",
        "topicId": "u2-t12",
        "answer": r"<p><strong>The HMP Shunt (Pentose Phosphate Pathway):</strong> An alternative cytosolic pathway of glucose oxidation that produces no ATP directly, but fulfills two vital metabolic requirements:</p><p><strong>1. Oxidative Phase (Irreversible):</strong><br>Glucose-6-phosphate is converted to Ribulose-5-phosphate with the generation of <strong>2 NADPH</strong>:<br>&bull; <em>Step 1:</em> Glucose-6-phosphate $\xrightarrow{\text{G6PD, NADP}^+}$ 6-Phosphoglucono-$\delta$-lactone + NADPH (Rate-limiting and committed step).<br>&bull; <em>Step 2:</em> Lactonase hydrolyzes it to 6-Phosphogluconate.<br>&bull; <em>Step 3:</em> 6-Phosphogluconate dehydrogenase decarboxylates it to Ribulose-5-phosphate + $\text{CO}_2$ + NADPH.</p><p><strong>2. Non-Oxidative Phase (Reversible):</strong><br>Ribulose-5-P is converted by isomerases, epimerases, <strong>transketolase</strong> (TPP-dependent), and transaldolase into Ribose-5-phosphate (nucleotide synthesis) and glycolytic intermediates (fructose-6-P and glyceraldehyde-3-P).</p><p><strong>Biochemical Roles of NADPH:</strong><br>1. Reductive biosyntheses: Fatty acid synthesis, cholesterol/steroid synthesis, and surfactant synthesis.<br>2. Cytochrome P450 xenobiotic detoxification in hepatic microsomes.<br>3. Respiratory burst in phagocytic neutrophils (NADPH oxidase producing superoxide).</p><p><strong>Clinical Consequences of G6PD Deficiency in Animals:</strong><br>In mature erythrocytes lacking mitochondria, the HMP shunt is the sole source of NADPH. NADPH is essential for Glutathione Reductase to maintain Glutathione in its reduced state (GSH). GSH protects RBC membrane lipids and hemoglobin from oxidative damage by $\text{H}_2\text{O}_2$. In G6PD deficiency, oxidative drugs, toxins (e.g., allium/onions, brassica, copper toxicity in sheep), or infections cause unchecked peroxidation, hemoglobin oxidation into insoluble Heinz bodies, and acute intravascular <strong>Heinz-body hemolytic anemia</strong>.</p>",
        "keyPoints": [
            "Cytosolic pathway generating NADPH and Ribose-5-phosphate; no direct ATP synthesis",
            "G6PD (Glucose-6-Phosphate Dehydrogenase) is the committed rate-limiting step; requires NADP+",
            "NADPH fuels reductive biosyntheses (fatty acids, steroids) and phagocyte respiratory burst",
            "In RBCs, NADPH maintains reduced glutathione (GSH) via glutathione reductase",
            "G6PD deficiency causes oxidative erythrocyte lysis and Heinz-body hemolytic anemia"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2021", "RAJUVAS 2022"]
    },
    {
        "id": "u2-sa-06",
        "type": "short",
        "marks": 5,
        "question": "Explain the unique bypass reactions of Gluconeogenesis, the role of Propionate in ruminants, and reciprocal hormonal regulation.",
        "topicId": "u2-t13",
        "answer": r"<p><strong>Gluconeogenesis:</strong> The synthesis of glucose from non-carbohydrate precursors (propionate, lactate, glycerol, glucogenic amino acids) occurring predominantly in the liver ($90\\%$) and renal cortex ($10\\%$).</p><p><strong>The Four Unique Irreversible Bypass Reactions:</strong><br>Glycolysis has three irreversible kinase steps that are circumvented in gluconeogenesis by four specific enzymes:</p><p>1. <strong>Bypass of Pyruvate Kinase:</strong><br>&bull; <em>Pyruvate Carboxylase (Mitochondria):</em> Pyruvate + $\text{CO}_2$ + ATP $\rightarrow$ Oxaloacetate (biotin-dependent; allosterically activated by acetyl-CoA).<br>&bull; <em>PEPCK (Phosphoenolpyruvate Carboxykinase):</em> Oxaloacetate + GTP $\rightarrow$ Phosphoenolpyruvate (PEP) + $\text{CO}_2$ + GDP.</p><p>2. <strong>Bypass of PFK-1:</strong><br>&bull; <em>Fructose-1,6-Bisphosphatase:</em> Fructose-1,6-bisphosphate + $\text{H}_2\text{O} \rightarrow$ Fructose-6-phosphate + $\text{P}_i$ (allosterically inhibited by AMP and F-2,6-BP).</p><p>3. <strong>Bypass of Hexokinase/Glucokinase:</strong><br>&bull; <em>Glucose-6-Phosphatase:</em> Glucose-6-phosphate + $\text{H}_2\text{O} \rightarrow$ Free Glucose + $\text{P}_i$ (located in ER lumen of liver and kidney; <strong>absent in skeletal muscle</strong>).</p><p><strong>Propionate Gluconeogenesis in Ruminants:</strong><br>Ruminants absorb negligible glucose from the gut. Ruminal microbial fermentation of dietary carbohydrates yields <strong>propionate</strong> (a 3-carbon volatile fatty acid), which enters the portal vein and provides $60–70\%$ of all endogenous blood glucose:<br>$$\text{Propionate} \xrightarrow{\text{Propionyl-CoA Synthetase}} \text{Propionyl-CoA} \xrightarrow{\text{Propionyl-CoA Carboxylase (Biotin)}} \text{D-Methylmalonyl-CoA}$$<br>$$\xrightarrow{\text{Epimerase}} \text{L-Methylmalonyl-CoA} \xrightarrow{\text{Methylmalonyl-CoA Mutase (Vit } \text{B}_{12}\text{)}} \text{Succinyl-CoA} \rightarrow \text{TCA Cycle} \rightarrow \text{Glucose}$$</p><p><strong>Reciprocal Regulation:</strong> Glucagon stimulates gluconeogenesis by decreasing Fructose-2,6-bisphosphate and inducing PEPCK expression. Insulin suppresses gluconeogenesis and activates glycolysis.</p>",
        "keyPoints": [
            "Circumvents 3 irreversible steps of glycolysis using 4 bypass enzymes",
            "Bypass enzymes: Pyruvate carboxylase (biotin), PEPCK, Fructose-1,6-bisphosphatase, Glucose-6-phosphatase",
            "Glucose-6-phosphatase is absent in skeletal muscle (muscle cannot export glucose)",
            "Propionate is the chief gluconeogenic precursor in ruminants via succinyl-CoA (requiring Biotin and Vitamin B12)",
            "Reciprocally controlled: Glucagon induces gluconeogenesis; Insulin represses it"
        ],
        "pyq": ["IVRI Annual Exam 2024", "KVAFSU 2023", "GADVASU 2022"]
    },
    {
        "id": "u2-sa-07",
        "type": "short",
        "marks": 5,
        "question": "Describe the mitochondrial Beta-Oxidation spiral of saturated fatty acids and calculate the net ATP yield from one molecule of Palmitic Acid (16:0).",
        "topicId": "u2-t15",
        "answer": r"<p><strong>Beta-Oxidation:</strong> The cyclical pathway occurring in the mitochondrial matrix where fatty acyl-CoA is degraded at the $\beta$-carbon, releasing two-carbon acetyl-CoA units sequentially.</p><p><strong>The 4-Step Spiral Reaction:</strong><br>1. <strong>Oxidation (Dehydrogenation):</strong> Acyl-CoA $\xrightarrow{\text{Acyl-CoA Dehydrogenase}}$ trans-$\Delta^2$-Enoyl-CoA (FAD reduced to $\text{FADH}_2$).<br>2. <strong>Hydration:</strong> trans-$\Delta^2$-Enoyl-CoA + $\text{H}_2\text{O} \xrightarrow{\text{Enoyl-CoA Hydratase}}$ L-3-Hydroxyacyl-CoA.<br>3. <strong>Oxidation:</strong> L-3-Hydroxyacyl-CoA $\xrightarrow{\text{3-Hydroxyacyl-CoA Dehydrogenase}}$ 3-Ketoacyl-CoA ($\text{NAD}^+$ reduced to $\text{NADH} + \text{H}^+$).<br>4. <strong>Thiolysis (Cleavage):</strong> 3-Ketoacyl-CoA + $\text{CoASH} \xrightarrow{\beta\text{-Ketothiolase}}$ Acetyl-CoA + Acyl-CoA shortened by 2 carbons.</p><p><strong>Bioenergetics of Palmitic Acid (16C, Saturated):</strong><br>&bull; Palmitate requires <strong>7 cycles</strong> of $\beta$-oxidation, yielding: <strong>8 Acetyl-CoA</strong>, <strong>7 $\text{FADH}_2$</strong>, and <strong>7 $\text{NADH}$</strong>.</p><p><strong>ATP Balance Sheet (Modern P:O Ratios):</strong><br>&bull; 8 Acetyl-CoA oxidized in TCA cycle ($8 \times 10\text{ ATP}$) = $80\text{ ATP}$<br>&bull; 7 $\text{FADH}_2$ via ETC ($7 \times 1.5\text{ ATP}$) = $10.5\text{ ATP}$<br>&bull; 7 $\text{NADH}$ via ETC ($7 \times 2.5\text{ ATP}$) = $17.5\text{ ATP}$<br>&bull; <em>Gross ATP Yield:</em> $80 + 10.5 + 17.5 = 108\text{ ATP}$<br>&bull; <em>Activation Cost:</em> Fatty acid activation consumes $2\text{ high-energy bonds}$ ($\text{ATP} \rightarrow \text{AMP} + \text{PP}_i \rightarrow 2\text{ P}_i$) = $-2\text{ ATP}$<br>&bull; <strong>Net ATP Yield:</strong> $108 - 2 = \mathbf{106\text{ ATP}}$ (or $129\text{ ATP}$ under classical counting: $8 \times 12 + 7 \times 2 + 7 \times 3 - 2 = 129$).</p>",
        "keyPoints": [
            "Mitochondrial matrix recurring 4-step sequence: Oxidation (FAD), Hydration, Oxidation (NAD+), Thiolysis",
            "Palmitate (16C) undergoes 7 cycles to yield 8 Acetyl-CoA, 7 FADH2, and 7 NADH",
            "Gross energy generated: 108 ATP (modern calculation)",
            "Net yield: 108 - 2 (activation cost) = 106 ATP (129 ATP in classical counting)"
        ],
        "pyq": ["IVRI Annual Exam 2023", "TANUVAS 2022", "WBUAFS 2021"]
    },
    {
        "id": "u2-sa-08",
        "type": "short",
        "marks": 5,
        "question": "Describe de novo Fatty Acid Biosynthesis, detailing the Citrate Shuttle and the multi-enzyme Fatty Acid Synthase (FAS) complex.",
        "topicId": "u2-t16",
        "answer": r"<p><strong>De Novo Lipogenesis:</strong> Occurs in the <strong>cytosol</strong> of liver, adipose tissue, and lactating mammary glands, synthesizing palmitate (16:0) from acetyl-CoA.</p><p><strong>1. The Citrate-Malate Shuttle:</strong><br>Acetyl-CoA is generated inside mitochondria and cannot cross the inner mitochondrial membrane. Mitochondrial Citrate Synthase condenses acetyl-CoA with oxaloacetate into <strong>citrate</strong>. A tricarboxylate transporter exports citrate to the cytosol, where <strong>ATP-Citrate Lyase</strong> cleaves it back into cytosolic Acetyl-CoA + Oxaloacetate at the cost of 1 ATP.</p><p><strong>2. Committed Regulatory Step (Acetyl-CoA Carboxylase, ACC):</strong><br>Cytosolic Acetyl-CoA + $\text{CO}_2$ + ATP $\xrightarrow{\text{ACC (Biotin)}}$ Malonyl-CoA + ADP + $\text{P}_i$. Activated allosterically by citrate; inhibited by palmitoyl-CoA.</p><p><strong>3. Fatty Acid Synthase (FAS) Multi-Enzyme Complex:</strong><br>A homodimer of identical multifunctional polypeptide chains arranged head-to-tail, each containing 7 catalytic domains and an Acyl Carrier Protein (ACP) with a 4'-phosphopantetheine prosthetic group:</p><p>&bull; <em>Cycle of 4 Steps:</em><br>1. <strong>Condensation:</strong> $\beta$-Ketoacyl synthase (KS) condenses acetyl (or growing acyl) with malonyl-ACP, releasing $\text{CO}_2$.<br>2. <strong>Reduction:</strong> $\beta$-Ketoacyl reductase reduces keto group to alcohol using NADPH.<br>3. <strong>Dehydration:</strong> $\beta$-Hydroxyacyl dehydratase removes water to form trans-$\Delta^2$-enoyl-ACP.<br>4. <strong>Reduction:</strong> Enoyl reductase reduces double bond using NADPH to yield a saturated acyl-ACP elongated by 2 carbons.</p><p>&bull; <em>Termination:</em> After 7 cycles, the 16-carbon palmitoyl-ACP is reached; the <strong>Thioesterase (TE)</strong> domain specifically hydrolyzes it to release free <strong>Palmitate (16:0)</strong>.</p><p><strong>Sources of NADPH:</strong> HMP shunt (G6PD, 6-phosphogluconate dehydrogenase) and cytosolic Malic Enzyme ($\text{Malate} + \text{NADP}^+ \rightarrow \text{Pyruvate} + \text{CO}_2 + \text{NADPH}$). In ruminants, rumen-derived <strong>acetate</strong> is the primary carbon donor.</p>",
        "keyPoints": [
            "Cytosolic pathway using Acetyl-CoA exported via the Citrate-Malate shuttle",
            "Rate-limiting committed step: Acetyl-CoA Carboxylase (biotin-dependent; synthesizes Malonyl-CoA)",
            "Fatty Acid Synthase (FAS) is a homodimeric multi-enzyme complex with 7 catalytic domains and ACP",
            "Elongation cycle: Condensation, Reduction (NADPH), Dehydration, Reduction (NADPH)",
            "Thioesterase domain cleaves palmitoyl-ACP to release free Palmitate (16:0)",
            "Ruminants utilize rumen acetate rather than glucose for fatty acid synthesis"
        ],
        "pyq": ["IVRI Annual Exam 2024", "RAJUVAS 2023", "KVAFSU 2021"]
    },

    # ============================================================
    # 5 TWELVE-MARK LONG-ANSWER QUESTIONS (marks: 12, type: "long")
    # ============================================================
    {
        "id": "u2-la-01",
        "type": "long",
        "marks": 12,
        "question": "Provide a comprehensive dissertation on Enzyme Biochemistry. Discuss IUBMB systematic classification (EC 1 to 6 with examples), catalytic active site theories, enzyme kinetics (Michaelis-Menten and Lineweaver-Burk derivation), factors influencing enzyme velocity, and an exhaustive comparative analysis of competitive, non-competitive, uncompetitive, and suicide inhibition.",
        "topicId": "u2-t01",
        "answer": r"<h3>1. Introduction and Nature of Enzymes</h3><p>Enzymes are biological catalysts, almost universally globular proteins (with the exception of catalytic RNA ribozymes), that accelerate chemical reactions by factors of $10^6$ to $10^{17}$ by lowering activation energy ($\Delta G^\ddagger$) without shifting thermodynamic equilibrium ($\Delta G$).</p><h3>2. IUBMB Systematic Enzyme Classification (EC System)</h3><p>The International Union of Biochemistry and Molecular Biology (IUBMB) classifies all enzymes into six major classes based on the reaction catalyzed (EC Number: Class.Subclass.Sub-subclass.Individual number):</p><p>1. <strong>Class 1: Oxidoreductases:</strong> Catalyze oxidation-reduction reactions involving electron transfer, hydride ions, or hydrogen atoms. <em>Examples:</em> Lactate dehydrogenase (LDH, EC 1.1.1.27), Succinate dehydrogenase.<br>2. <strong>Class 2: Transferases:</strong> Catalyze the transfer of functional chemical groups (amino, methyl, phosphate, glycosyl) from a donor to an acceptor. <em>Examples:</em> Alanine aminotransferase (ALT, EC 2.6.1.2), Hexokinase.<br>3. <strong>Class 3: Hydrolases:</strong> Catalyze the cleavage of covalent bonds (ester, peptide, glycosidic) by the addition of water. <em>Examples:</em> Lipase, Trypsin, Alkaline phosphatase (ALP, EC 3.1.3.1).<br>4. <strong>Class 4: Lyases:</strong> Catalyze the non-hydrolytic cleavage of $\text{C}-\text{C}, \text{C}-\text{O}, \text{C}-\text{N}$ bonds, leaving double bonds or adding groups to double bonds without ATP consumption. <em>Examples:</em> Aldolase, Pyruvate decarboxylase.<br>5. <strong>Class 5: Isomerases:</strong> Catalyze geometric, structural, or optical intramolecular rearrangements within a single molecule. <em>Examples:</em> Triose phosphate isomerase, Phosphoglucomutase.<br>6. <strong>Class 6: Ligases (Synthetases):</strong> Catalyze the joining of two molecules coupled with the simultaneous cleavage of a high-energy phosphate bond (ATP). <em>Examples:</em> Pyruvate carboxylase (EC 6.4.1.1), DNA ligase.</p><h3>3. Active Site Models and Catalytic Mechanisms</h3><p>&bull; <strong>Emil Fischer Lock-and-Key Model (1894):</strong> Proposed that the enzyme active center has a rigid, pre-formed geometric shape perfectly complementary to the substrate.<br>&bull; <strong>Daniel Koshland Induced-Fit Theory (1958):</strong> Demonstrates that the active site is dynamic and flexible. Substrate binding induces a precise conformational reshaping in the catalytic cleft, aligning reactive amino acid residues (catalytic triad: Ser, His, Asp in serine proteases) to stabilize the transition state.</p><h3>4. Enzyme Kinetics and Derivations</h3><p>&bull; <strong>Michaelis-Menten Model:</strong> Based on the Briggs-Haldane steady-state assumption where $[ES]$ remains constant ($d[ES]/dt = 0$): $$\text{E} + \text{S} \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{ES} \xrightarrow{k_2} \text{E} + \text{P}$$ Michaelis constant: $K_m = (k_{-1} + k_2)/k_1$. At steady state: $$v = \frac{V_{max}[S]}{K_m + [S]}$$</p><p>&bull; <strong>Lineweaver-Burk Double-Reciprocal Transformation:</strong> Inverting the Michaelis-Menten equation produces a straight line equation: $$\frac{1}{v} = \left(\frac{K_m}{V_{max}}\right)\frac{1}{[S]} + \frac{1}{V_{max}}$$ &bull; <em>x-Intercept:</em> $-1/K_m$<br>&bull; <em>y-Intercept:</em> $1/V_{max}$<br>&bull; <em>Slope:</em> $K_m / V_{max}$</p><h3>5. Factors Influencing Reaction Velocity</h3><p>1. <em>Substrate Concentration:</em> Hyperbolic response shifting from first order to zero order at saturation ($V_{max}$).<br>2. <em>Temperature:</em> Rate accelerates with temperature up to thermal optimum ($37–42^\circ\text{C}$ in domestic animals), after which heat denaturation causes rapid loss of function ($Q_{10} \approx 2.0$).<br>3. <em>pH:</em> Determines ionization of catalytic residues; bell-shaped curves with characteristic optima (Pepsin 1.5–2.0, Salivary Amylase 6.8, ALP 9.5–10.0).</p><h3>6. Detailed Comparative Analysis of Enzyme Inhibition</h3><p>&bull; <strong>Competitive Inhibition:</strong> Inhibitor (I) is a structural analog of substrate (S) and competes for the free active site. Adding excess substrate displaces the inhibitor. Kinetic outcome: <strong>$K_m$ increases, $V_{max}$ unchanged</strong>. Lineweaver-Burk lines intersect on the y-axis at $1/V_{max}$. <em>Examples:</em> Malonate vs Succinate dehydrogenase; Allopurinol vs Xanthine oxidase; Methotrexate vs Dihydrofolate reductase; Statins vs HMG-CoA reductase.</p><p>&bull; <strong>Non-Competitive Inhibition:</strong> Inhibitor binds reversibly to both free E and ES complex at an allosteric site. Substrate binding cannot overcome inhibition. Kinetic outcome: <strong>$K_m$ unchanged, $V_{max}$ decreases</strong>. Lineweaver-Burk lines intersect on the negative x-axis at $-1/K_m$. <em>Examples:</em> Cyanide inhibiting cytochrome oxidase; heavy metals ($\text{Pb}^{2+}, \text{Hg}^{2+}$) binding sulfhydryl ($-\text{SH}$) enzymes; Fluoride on enolase.</p><p>&bull; <strong>Uncompetitive Inhibition:</strong> Inhibitor binds exclusively to the ES complex, trapping it and preventing catalytic turnover. Kinetic outcome: <strong>Both $K_m$ and $V_{max}$ decrease in equal proportion</strong> ($K_m/V_{max}$ slope remains constant). Lineweaver-Burk lines yield parallel plots. <em>Example:</em> Lithium inhibiting inositol monophosphatase.</p><p>&bull; <strong>Suicide (Mechanism-Based Irreversible) Inhibition:</strong> The enzyme converts an unreactive substrate analog into a chemically reactive intermediate that forms an irreversible covalent bond with active-site catalytic residues, permanently inactivating the enzyme. <em>Examples:</em> Organophosphates phosphorylating the active serine of acetylcholinesterase; Aspirin acetylating serine-530 of Cyclooxygenase (COX-1/2); Disulfiram on aldehyde dehydrogenase.</p>",
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
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "GADVASU 2022", "KVAFSU 2021", "RAJUVAS 2020"]
    },
    {
        "id": "u2-la-02",
        "type": "long",
        "marks": 12,
        "question": "Write an exhaustive treatise on Biological Oxidation, the Mitochondrial Electron Transport Chain, and Oxidative Phosphorylation. Detail the organization of respiratory complexes, the mechanism of the F0F1 ATP Synthase rotor, modern P:O stoichiometry, site-specific respiratory inhibitors, and chemical vs physiological uncoupling in neonatal animals.",
        "topicId": "u2-t07",
        "answer": r"<h3>1. Bioenergetics and Redox Potentials</h3><p>Biological oxidation involves the removal of electrons from organic fuel molecules, transferred via reduced coenzymes ($\text{NADH}, \text{FADH}_2$) to molecular oxygen. The standard reduction potential ($E_0'$, in volts) measures the tendency of a redox pair to donate or accept electrons. Standard free energy change ($\Delta G^{0'}$) is directly related to the redox potential difference ($\Delta E_0'$): $$\Delta G^{0'} = -nF\Delta E_0'$$ Electrons flow spontaneously down the thermodynamic gradient from electronegative donors ($\text{NAD}^+/\text{NADH}, E_0' = -0.32\text{ V}$) toward the electropositive terminal acceptor ($\frac{1}{2}\text{O}_2/\text{H}_2\text{O}, E_0' = +0.82\text{ V}$), liberating $\Delta G^{0'} = -220\text{ kJ/mol}$ ($-52.6\text{ kcal/mol}$) of free energy per electron pair.</p><h3>2. High-Energy Phosphate Compounds</h3><p>Phosphorylated compounds that release more free energy upon hydrolysis than the terminal bond of ATP ($\Delta G^{0'} = -30.5\text{ kJ/mol}$) are high-energy compounds:<br>&bull; <strong>Phosphoenolpyruvate (PEP):</strong> $\Delta G^{0'} = -61.9\text{ kJ/mol}$ (highest phosphate transfer potential).<br>&bull; <strong>1,3-Bisphosphoglycerate (1,3-BPG):</strong> $\Delta G^{0'} = -49.3\text{ kJ/mol}$.<br>&bull; <strong>Phosphocreatine:</strong> $\Delta G^{0'} = -43.1\text{ kJ/mol}$ (muscle energy reservoir).<br>&bull; <strong>Acetyl-CoA / Succinyl-CoA:</strong> Thioester bonds releasing $\sim -31.5\text{ kJ/mol}$.</p><h3>3. Architecture of the Respiratory Chain Complexes</h3><p>Four multi-protein complexes are embedded in the inner mitochondrial membrane (IMM):</p><p><strong>A. Complex I (NADH-Q Oxidoreductase, $850\text{ kDa}$, 45 subunits):</strong><br>Accepts 2 electrons from NADH via Flavin Mononucleotide (FMN), shuttling them through a chain of 8 Iron-Sulfur (Fe-S) centers to Ubiquinone (CoQ). The large conformational switch pumps <strong>$4\text{ H}^+$</strong> across the IMM into the intermembrane space.<br>&bull; <em>Specific Inhibitors:</em> Rotenone, Amytal, Piericidin A.</p><p><strong>B. Complex II (Succinate-Q Reductase / Succinate Dehydrogenase, $140\text{ kDa}$, 4 subunits):</strong><br>The only membrane-bound enzyme of the Krebs cycle. Contains covalently bound FAD and three Fe-S centers $[2\text{Fe-}2\text{S}, 4\text{Fe-}4\text{S}, 3\text{Fe-}4\text{S}]$. Oxidizes succinate to fumarate, reducing FAD $\rightarrow \text{FADH}_2$, and transfers electrons to CoQ. <strong>Pumps ZERO protons</strong> ($\Delta G$ is insufficient to drive translocation).<br>&bull; <em>Inhibitor:</em> Malonate (competitive).</p><p><strong>C. Complex III (Q-Cytochrome c Oxidoreductase, $250\text{ kDa}$, 11 subunits):</strong><br>Contains Cytochrome $b$ (hemes $b_L$ and $b_H$), Rieske Fe-S center, and Cytochrome $c_1$. Executes the cyclic <strong>Q-Cycle</strong>, transferring electrons from two-electron carrier ubiquinol ($\text{QH}_2$) to single-electron carrier Cytochrome c, pumping <strong>$4\text{ H}^+$</strong>.<br>&bull; <em>Inhibitor:</em> Antimycin A (Qi site inhibitor), Myxothiazol (Qo site inhibitor).</p><p><strong>D. Complex IV (Cytochrome c Oxidase, $204\text{ kDa}$, 13 subunits):</strong><br>Contains two heme groups ($a$ and $a_3$) and two copper centers ($\text{Cu}_A$ and $\text{Cu}_B$). Accepts single electrons sequentially from 4 reduced Cytochrome c molecules to completely reduce $1\text{ O}_2 \rightarrow 2\text{ H}_2\text{O}$, while pumping <strong>$2\text{ H}^+$</strong>.<br>&bull; <em>Inhibitors:</em> Cyanide ($\text{CN}^-$), Carbon Monoxide (CO), Sodium Azide ($\text{NaN}_3$), and Hydrogen Sulfide ($\text{H}_2\text{S}$).</p><h3>4. Peter Mitchell's Chemiosmotic Hypothesis and ATP Synthase</h3><p>&bull; <strong>Proton-Motive Force (PMF):</strong> Total protons pumped per pair of electrons: $10\text{ H}^+$ per NADH ($4+4+2$) and $6\text{ H}^+$ per $\text{FADH}_2$ ($0+4+2$). This establishes an electrochemical potential: $$\text{PMF} = \Delta\Psi - \left(\frac{2.3RT}{F}\right)\Delta\text{pH} \approx 180–220\text{ mV}$$</p><p>&bull; <strong>ATP Synthase ($F_0F_1$ Complex V):</strong><br>Protons flow back into the matrix through the $F_0$ rotor ring ($c_8$ in vertebrates), driving a $360^\circ$ rotation of the central $\gamma$-shaft. According to Paul Boyer's <em>Binding Change Mechanism</em>, the three catalytic $\beta$-subunits cycle through Open (O), Loose (L), and Tight (T) conformations. Four protons translocated generate 1 ATP ($3\text{ H}^+$ for mechanical rotation $+ 1\text{ H}^+$ for phosphate import via the $\text{P}_i/\text{H}^+$ symporter).<br>&bull; <strong>Modern P:O Ratios:</strong> $\text{NADH} = 10 / 4 = \mathbf{2.5\text{ ATP}}$; $\text{FADH}_2 = 6 / 4 = \mathbf{1.5\text{ ATP}}$.</p><h3>5. Uncoupling: Toxic vs Physiological Non-Shivering Thermogenesis</h3><p>&bull; <strong>Chemical Uncouplers:</strong> 2,4-Dinitrophenol (2,4-DNP), dicumarol, and FCCP are lipophilic weak acids that shuttle protons across the inner membrane, collapsing the PMF. Respiration accelerates uncontrolled, but ATP is not synthesized; energy is dissipated as lethal hyperthermia.<br>&bull; <strong>Physiological Uncoupling (Thermogenin / UCP-1):</strong> Brown adipose tissue (BAT) in newborn lambs, calves, and piglets contains Uncoupling Protein-1 (UCP-1 / Thermogenin). UCP-1 opens a regulated proton channel in the inner membrane, dissipating PMF directly into heat. This <strong>non-shivering thermogenesis</strong> protects vulnerable newborn farm animals from fatal neonatal hypothermia.</p><h3>6. ATP Synthase and Transport Inhibitors</h3><p>&bull; <strong>Oligomycin:</strong> Binds to the $F_0$ subunit, plugging the proton channel and arresting both ATP synthesis and respiration.<br>&bull; <strong>Atractyloside & Bongkrekic Acid:</strong> Inhibit the Adenine Nucleotide Translocase (ANT), blocking ADP entry and ATP exit from the mitochondrial matrix.</p>",
        "keyPoints": [
            "Bioenergetics: $\\Delta G^{0'} = -nF\\Delta E_0'$; exergonic electron transfer from NADH (-0.32 V) to O2 (+0.82 V)",
            "High-energy compounds: Phosphoenolpyruvate (-61.9 kJ/mol), 1,3-BPG, phosphocreatine, ATP",
            "Complexes I, III, IV pump protons (10 H+ per NADH, 6 H+ per FADH2); Complex II does not pump protons",
            "Site-specific ETC blockers: Rotenone (I), Malonate (II), Antimycin A (III), Cyanide and CO (IV)",
            "ATP Synthase (Complex V): F0 proton rotor, F1 catalytic head, Boyer's binding change mechanism (O, L, T states)",
            "Modern stoichiometry: P:O ratio is 2.5 for NADH, 1.5 for FADH2 (4 H+ per ATP synthesized and imported)",
            "Chemical uncouplers (2,4-DNP) collapse PMF causing hyperthermia; UCP-1/Thermogenin in neonatal brown fat generates vital warmth"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "KVAFSU 2022", "GADVASU 2021"]
    },
    {
        "id": "u2-la-03",
        "type": "long",
        "marks": 12,
        "question": "Provide a comprehensive description of Carbohydrate Catabolism. Discuss the complete enzymatic sequence of Glycolysis (EMP pathway), its regulatory enzymes, anaerobic vs aerobic fates, the Pyruvate Dehydrogenase (PDH) multi-enzyme complex, the Citric Acid Cycle, its amphibolic nature, anaplerotic reactions, and a complete net ATP balance sheet per mole of glucose.",
        "topicId": "u2-t10",
        "answer": r"<h3>1. Glycolysis (Embden-Meyerhof-Parnas / EMP Pathway)</h3><p>The universal cytosolic pathway converting one mole of glucose (6C) into two moles of pyruvate (3C) with concomitant generation of ATP and NADH. Operates with or without oxygen.</p><p><strong>Phase I: Energy Investment Phase (Consumes 2 ATP):</strong><br>1. <em>Hexokinase / Glucokinase:</em> $\text{Glucose} + \text{ATP} \rightarrow \text{Glucose-6-Phosphate (G6P)} + \text{ADP}$. Hexokinase (all tissues) has low $K_m$ ($0.1\text{ mM}$) and is inhibited by G6P. Glucokinase (liver, pancreatic $\beta$-cells) has high $K_m$ ($10\text{ mM}$), is not inhibited by G6P, and functions during postprandial hyperglycemia.<br>2. <em>Phosphohexose Isomerase:</em> $\text{G6P} \rightleftharpoons \text{Fructose-6-Phosphate (F6P)}$.<br>3. <em>Phosphofructokinase-1 (PFK-1):</em> $\text{F6P} + \text{ATP} \rightarrow \text{Fructose-1,6-Bisphosphate (F1,6BP)} + \text{ADP}$. <strong>Committed, rate-limiting step</strong>. Activated allosterically by AMP and Fructose-2,6-bisphosphate; inhibited by ATP and citrate.<br>4. <em>Aldolase:</em> $\text{F1,6BP} \rightleftharpoons \text{DHAP} + \text{Glyceraldehyde-3-Phosphate (G3P)}$.<br>5. <em>Triose Phosphate Isomerase:</em> $\text{DHAP} \rightleftharpoons \text{G3P}$.</p><p><strong>Phase II: Energy Generation Phase (Per 2 Trioses: Produces 4 ATP + 2 NADH):</strong><br>6. <em>G3P Dehydrogenase:</em> $2\text{ G3P} + 2\text{ NAD}^+ + 2\text{ P}_i \rightleftharpoons 2\ (1,3\text{-Bisphosphoglycerate}) + 2\text{ NADH} + 2\text{ H}^+$.<br>7. <em>Phosphoglycerate Kinase:</em> $2\ (1,3\text{-BPG}) + 2\text{ ADP} \rightleftharpoons 2\ (3\text{-PG}) + 2\text{ ATP}$ (1st Substrate-Level Phosphorylation).<br>8. <em>Phosphoglycerate Mutase:</em> $2\ (3\text{-PG}) \rightleftharpoons 2\ (2\text{-PG})$.<br>9. <em>Enolase:</em> $2\ (2\text{-PG}) \rightleftharpoons 2\ \text{Phosphoenolpyruvate (PEP)} + 2\text{ H}_2\text{O}$ (Inhibited by <strong>Fluoride</strong>).<br>10. <em>Pyruvate Kinase:</em> $2\ \text{PEP} + 2\text{ ADP} \rightarrow 2\ \text{Pyruvate} + 2\text{ ATP}$ (2nd Substrate-Level Phosphorylation).</p><p>&bull; <strong>Anaerobic Fate:</strong> In erythrocytes or hypoxic muscle, <strong>Lactate Dehydrogenase (LDH)</strong> reduces pyruvate to lactate, re-oxidizing $\text{NADH} \rightarrow \text{NAD}^+$ to permit continuous glycolysis: $\text{Pyruvate} + \text{NADH} + \text{H}^+ \rightleftharpoons \text{Lactate} + \text{NAD}^+$. Net yield = <strong>2 ATP</strong>.</p><h3>2. The Pyruvate Dehydrogenase (PDH) Multi-Enzyme Complex</h3><p>Located in the mitochondrial matrix; catalyzes irreversible oxidative decarboxylation: $$\text{Pyruvate} + \text{NAD}^+ + \text{CoASH} \rightarrow \text{Acetyl-CoA} + \text{NADH} + \text{H}^+ + \text{CO}_2$$<br>&bull; <strong>3 Enzymes:</strong> $E_1$ (Pyruvate dehydrogenase), $E_2$ (Dihydrolipoyl transacetylase), $E_3$ (Dihydrolipoyl dehydrogenase).<br>&bull; <strong>5 Coenzymes:</strong> Thiamine pyrophosphate (TPP, $\text{B}_1$), Lipoic acid, Coenzyme A (pantothenate, $\text{B}_5$), FAD ($\text{B}_2$), and $\text{NAD}^+$ (niacin, $\text{B}_3$).</p><h3>3. The Citric Acid Cycle (Krebs / TCA Cycle)</h3><p>The cyclic 8-step pathway in the mitochondrial matrix completely oxidizing acetyl-CoA to $2\text{ CO}_2$:</p><p>1. <em>Citrate Synthase:</em> $\text{Acetyl-CoA} + \text{Oxaloacetate} + \text{H}_2\text{O} \rightarrow \text{Citrate} + \text{CoASH}$.<br>2. <em>Aconitase:</em> $\text{Citrate} \rightleftharpoons \text{cis-Aconitate} \rightleftharpoons \text{Isocitrate}$ (Suicide-inhibited by <strong>fluorocitrate</strong>).<br>3. <em>Isocitrate Dehydrogenase:</em> $\text{Isocitrate} + \text{NAD}^+ \rightarrow \alpha\text{-Ketoglutarate} + \text{CO}_2 + \text{NADH}$ (Rate-limiting).<br>4. <em>$\alpha$-Ketoglutarate Dehydrogenase Complex:</em> $\alpha\text{-KG} + \text{NAD}^+ + \text{CoASH} \rightarrow \text{Succinyl-CoA} + \text{CO}_2 + \text{NADH}$ (Requires 5 cofactors like PDH).<br>5. <em>Succinyl-CoA Synthetase:</em> $\text{Succinyl-CoA} + \text{GDP} + \text{P}_i \rightleftharpoons \text{Succinate} + \text{GTP} + \text{CoASH}$ (Substrate-Level Phosphorylation).<br>6. <em>Succinate Dehydrogenase:</em> $\text{Succinate} + \text{FAD} \rightleftharpoons \text{Fumarate} + \text{FADH}_2$ (Complex II, inhibited by malonate).<br>7. <em>Fumarase:</em> $\text{Fumarate} + \text{H}_2\text{O} \rightleftharpoons \text{L-Malate}$.<br>8. <em>Malate Dehydrogenase:</em> $\text{L-Malate} + \text{NAD}^+ \rightleftharpoons \text{Oxaloacetate} + \text{NADH} + \text{H}^+$.</p><h3>4. Amphibolic Nature and Anaplerosis</h3><p>&bull; <strong>Amphibolic Role:</strong> Functions in both catabolism and anabolism. Intermediates supply precursor skeletons: $\alpha$-ketoglutarate for glutamate/GABA, succinyl-CoA for heme biosynthesis, oxaloacetate for aspartate and gluconeogenesis, citrate for cytosolic lipogenesis.<br>&bull; <strong>Anaplerotic Enzymes:</strong> Replenish drained intermediates. Most critical: <strong>Pyruvate Carboxylase</strong> ($\text{Pyruvate} + \text{CO}_2 + \text{ATP} \rightarrow \text{Oxaloacetate}$).</p><h3>5. Total Net ATP Balance Sheet per Glucose (Aerobic Oxidation)</h3><p>&bull; <em>Glycolysis:</em> 2 ATP (substrate-level) $+ 2\text{ NADH}$ ($2 \times 2.5 = 5\text{ ATP}$ via malate-aspartate shuttle) = $7\text{ ATP}$ (or $5\text{ ATP}$ via glycerol-phosphate shuttle).<br>&bull; <em>PDH Reaction (2 Pyruvate):</em> $2\text{ NADH} \times 2.5 = 5\text{ ATP}$.<br>&bull; <em>Krebs Cycle (2 Acetyl-CoA):</em> $2\text{ GTP} = 2\text{ ATP}$; $6\text{ NADH} \times 2.5 = 15\text{ ATP}$; $2\text{ FADH}_2 \times 1.5 = 3\text{ ATP}$; Subtotal = $20\text{ ATP}$.<br>&bull; <strong>Grand Total:</strong> $7 + 5 + 20 = \mathbf{32\text{ ATP}}$ per mole of glucose under modern stoichiometry (or $38\text{ ATP}$ classical: $8 + 6 + 24 = 38$).</p>",
        "keyPoints": [
            "Glycolysis: 10 cytosolic steps; key regulatory enzymes: Hexokinase, PFK-1 (rate-limiting), Pyruvate kinase",
            "Substrate-level phosphorylation: Phosphoglycerate kinase and Pyruvate kinase",
            "Anaerobic fate: LDH reduces pyruvate to lactate, regenerating NAD+; net yield 2 ATP",
            "PDH complex: mitochondrial, 3 enzymes, 5 cofactors (TPP, lipoate, CoA, FAD, NAD); yields acetyl-CoA + NADH",
            "Citric Acid Cycle: 8 steps; isocitrate dehydrogenase rate-limiting; succinyl-CoA synthetase produces GTP",
            "Amphibolic nature: dual catabolic/anabolic roles; anaplerosis via Pyruvate Carboxylase",
            "Complete bioenergetics: 30 to 32 ATP per glucose under modern counting (36 to 38 ATP classical)"
        ],
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "KVAFSU 2022", "RAJUVAS 2021"]
    },
    {
        "id": "u2-la-04",
        "type": "long",
        "marks": 12,
        "question": "Write an exhaustive treatise on Lipid Metabolism. Discuss the mobilization of adipose triacylglycerols, the carnitine shuttle, the four-step mitochondrial Beta-Oxidation spiral, bioenergetics of palmitate and odd-chain fatty acids, the hepatic pathway of Ketogenesis, extrahepatic ketone utilization, and cytosolic de novo Fatty Acid Biosynthesis with species differences in ruminants.",
        "topicId": "u2-t15",
        "answer": r"<h3>1. Adipose Triacylglycerol Mobilization</h3><p>During negative energy balance, fasting, or lactation, lipolysis is initiated in adipocytes. Glucagon and catecholamines stimulate $\beta$-adrenergic receptors, elevating intracellular cAMP and activating Protein Kinase A (PKA). PKA phosphorylates <strong>Perilipin</strong> and <strong>Hormone-Sensitive Lipase (HSL)</strong>. Adipose Triglyceride Lipase (ATGL) initiates hydrolysis ($\text{TAG} \rightarrow \text{DAG}$), HSL hydrolyzes $\text{DAG} \rightarrow \text{MAG}$, and Monoacylglycerol Lipase (MAGL) yields free glycerol and three non-esterified fatty acids (NEFA). Insulin suppresses lipolysis via phosphodiesterase-mediated cAMP breakdown.</p><h3>2. Fatty Acid Activation and the Carnitine Shuttle</h3><p>&bull; <strong>Activation:</strong> On the outer mitochondrial membrane, <strong>Acyl-CoA Synthetase (Thiokinase)</strong> activates fatty acids to fatty acyl-CoA, consuming 2 high-energy bonds ($\text{ATP} \rightarrow \text{AMP} + \text{PP}_i \xrightarrow{\text{Pyrophosphatase}} 2\text{ P}_i$).<br>&bull; <strong>The Carnitine Shuttle:</strong> Fatty acyl-CoA cannot cross the inner mitochondrial membrane (IMM):<br>1. <em>Carnitine Palmitoyltransferase-I (CPT-I):</em> Outer membrane enzyme that transfers fatty acyl group to carnitine, forming acylcarnitine. <strong>Rate-limiting step</strong> of fatty acid oxidation; allosterically inhibited by <strong>Malonyl-CoA</strong>.<br>2. <em>Carnitine-Acylcarnitine Translocase:</em> Antiport in IMM moving acylcarnitine into matrix while exporting free carnitine.<br>3. <em>Carnitine Palmitoyltransferase-II (CPT-II):</em> Inner membrane enzyme that regenerates fatty acyl-CoA and free carnitine in the matrix.</p><h3>3. The Mitochondrial $\beta$-Oxidation Spiral</h3><p>Each cycle cleaves a 2-carbon acetyl-CoA unit from the carboxyl end via 4 recurring reactions:<br>1. <em>Acyl-CoA Dehydrogenase:</em> $\text{Acyl-CoA} + \text{FAD} \rightarrow \text{trans-}\Delta^2\text{-Enoyl-CoA} + \text{FADH}_2$.<br>2. <em>Enoyl-CoA Hydratase:</em> $\text{trans-}\Delta^2\text{-Enoyl-CoA} + \text{H}_2\text{O} \rightarrow \text{L-3-Hydroxyacyl-CoA}$.<br>3. <em>3-Hydroxyacyl-CoA Dehydrogenase:</em> $\text{L-3-Hydroxyacyl-CoA} + \text{NAD}^+ \rightarrow \text{3-Ketoacyl-CoA} + \text{NADH} + \text{H}^+$.<br>4. <em>$\beta$-Ketothiolase:</em> $\text{3-Ketoacyl-CoA} + \text{CoASH} \rightarrow \text{Acetyl-CoA} + \text{Acyl-CoA}$ (shortened by 2C).</p><p>&bull; <strong>Bioenergetics of Palmitate (16:0):</strong> 7 cycles yield $8\text{ Acetyl-CoA} + 7\text{ FADH}_2 + 7\text{ NADH}$.<br>&bull; $8\text{ Acetyl-CoA} \times 10 = 80\text{ ATP}$; $7\text{ FADH}_2 \times 1.5 = 10.5\text{ ATP}$; $7\text{ NADH} \times 2.5 = 17.5\text{ ATP}$; Gross = $108\text{ ATP}$. Subtract 2 ATP for activation = <strong>106 Net ATP</strong> (or 129 ATP classical).<br>&bull; <strong>Odd-Chain Fatty Acids:</strong> Cleaved to a terminal 3-carbon <strong>Propionyl-CoA</strong>, converted to methylmalonyl-CoA (propionyl-CoA carboxylase, Biotin) and isomerized to <strong>Succinyl-CoA</strong> (methylmalonyl-CoA mutase, Vitamin $\text{B}_{12}$) which enters the TCA cycle for gluconeogenesis.</p><h3>4. Hepatic Ketogenesis</h3><p>&bull; <strong>Location & Triggers:</strong> Mitochondrial matrix of hepatocytes. Triggered when excessive $\beta$-oxidation floods liver with acetyl-CoA while intense gluconeogenesis depletes oxaloacetate.<br>&bull; <strong>Pathway:</strong><br>1. $2\text{ Acetyl-CoA} \xrightarrow{\text{Thiolase}} \text{Acetoacetyl-CoA} + \text{CoASH}$.<br>2. $\text{Acetoacetyl-CoA} + \text{Acetyl-CoA} \xrightarrow{\text{Mitochondrial HMG-CoA Synthase}} \text{HMG-CoA} + \text{CoASH}$ (<strong>Rate-limiting step</strong>).<br>3. $\text{HMG-CoA} \xrightarrow{\text{HMG-CoA Lyase}} \text{Acetoacetate} + \text{Acetyl-CoA}$.<br>4. Acetoacetate is reduced by <strong>$\beta$-Hydroxybutyrate Dehydrogenase</strong> to <strong>$\beta$-Hydroxybutyrate (BHB)</strong> (favored by high $[\text{NADH}]/[\text{NAD}^+]$) or spontaneously decarboxylates to volatile <strong>Acetone</strong>.</p><h3>5. Extrahepatic Ketone Body Utilization (Ketolysis)</h3><p>&bull; Skeletal muscle, cardiac muscle, and starved brain convert BHB back to acetoacetate. <strong>Thiophorase (Succinyl-CoA:3-Ketoacid CoA Transferase)</strong> transfers CoA from succinyl-CoA to acetoacetate, forming acetoacetyl-CoA. Thiolase cleaves it to $2\text{ Acetyl-CoA}$ for oxidation in the Krebs cycle.<br>&bull; <strong>Why Liver Cannot Use Ketones:</strong> The liver <strong>lacks Thiophorase</strong>; hence it is an obligate producer and exporter of ketone bodies.</p><h3>6. De Novo Fatty Acid Synthesis and Ruminant Specifics</h3><p>&bull; <strong>Location:</strong> Cytosol. Citrate shuttle exports mitochondrial acetyl units as citrate, cleaved by ATP-citrate lyase.<br>&bull; <strong>Committed Step:</strong> $\text{Acetyl-CoA} + \text{CO}_2 + \text{ATP} \xrightarrow{\text{Acetyl-CoA Carboxylase (Biotin)}} \text{Malonyl-CoA}$.<br>&bull; <strong>FAS Complex:</strong> Homodimeric multi-enzyme complex with ACP. Successive condensation, reduction, dehydration, and reduction reactions consume 2 NADPH per 2-carbon addition until Palmitate (16:0) is cleaved by thioesterase.<br>&bull; <strong>Ruminant Specifics:</strong> Ruminants conserve glucose; cytosolic <strong>Acetate</strong> (rumen VFA) converted by acetyl-CoA synthetase is the primary carbon substrate for fatty acid and milk fat synthesis, with NADPH supplied by the isocitrate dehydrogenase and HMP shunt.</p>",
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
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "GADVASU 2022", "KVAFSU 2021"]
    },
    {
        "id": "u2-la-05",
        "type": "long",
        "marks": 12,
        "question": "Provide a comprehensive dissertation on Amino Acid Catabolism, Ammonia Transport, and the Urea Cycle. Discuss transamination mechanisms, glutamate dehydrogenase oxidative deamination, glucose-alanine and glutamine transport cycles, the complete enzymatic sequence and compartmentalization of the Krebs-Henseleit Urea Cycle, its bioenergetics, regulation by N-acetylglutamate, metabolic linkage to the Citric Acid Cycle (Krebs Bicycle), and comparative nitrogen excretion across domestic animal species.",
        "topicId": "u2-t19",
        "answer": r"<h3>1. General Catabolism of Amino Acids</h3><p>Unlike carbohydrates and lipids, excess dietary amino acids cannot be stored in the animal body. Catabolism begins with the removal of the $\alpha$-amino group, routing carbon skeletons into amphibolic intermediates and toxic ammonia into disposal pathways.</p><p><strong>A. Transamination:</strong><br>&bull; Reversible transfer of an amino group from an amino acid to an $\alpha$-keto acid (typically $\alpha$-ketoglutarate), forming a new keto acid and L-glutamate: $$\text{Amino Acid} + \alpha\text{-Ketoglutarate} \rightleftharpoons \alpha\text{-Keto Acid} + \text{L-Glutamate}$$<br>&bull; Catalyzed by <strong>Aminotransferases</strong> (e.g., Alanine Aminotransferase, ALT; Aspartate Aminotransferase, AST).<br>&bull; <em>Mechanism:</em> Universally requires <strong>Pyridoxal Phosphate (PLP)</strong>. Forms an initial Schiff base (aldimine), isomerizes to ketimine, hydrolyzes to release the keto acid and Pyridoxamine Phosphate (PAMP), which then transfers the amino group to $\alpha$-ketoglutarate via a 'ping-pong' mechanism.<br>&bull; <em>Exceptions:</em> Lysine and Threonine do not undergo transamination.</p><p><strong>B. Oxidative Deamination:</strong><br>&bull; <strong>Glutamate Dehydrogenase (GDH):</strong> Located in the mitochondrial matrix of hepatocytes. Uniquely utilizes either $\text{NAD}^+$ (oxidative deamination) or $\text{NADP}^+$ (reductive amination): $$\text{L-Glutamate} + \text{NAD(P)}^+ + \text{H}_2\text{O} \rightleftharpoons \alpha\text{-Ketoglutarate} + \text{NH}_4^+ + \text{NAD(P)H} + \text{H}^+$$<br>&bull; Allosterically activated by ADP and GDP; inhibited by ATP and GTP. The sequential action of transaminases and GDH is termed <strong>Transdeamination</strong>.</p><h3>2. Non-Toxic Ammonia Transport to the Liver</h3><p>Free ammonia ($\text{NH}_3/\text{NH}_4^+$) is a potent neurotoxin that depletes cerebral $\alpha$-ketoglutarate (halting Krebs cycle ATP generation) and impairs GABA synthesis. Animals safely transport ammonia to the liver via two distinct pathways:</p><p>1. <strong>The Glutamine Synthetase Cycle (Brain and Non-Muscle Tissues):</strong><br>$$\text{Glutamate} + \text{NH}_4^+ + \text{ATP} \xrightarrow{\text{Glutamine Synthetase}} \text{Glutamine} + \text{ADP} + \text{P}_i$$ Non-toxic glutamine circulates to liver and kidneys, where mitochondrial <strong>Glutaminase</strong> hydrolyzes it: $\text{Glutamine} + \text{H}_2\text{O} \rightarrow \text{Glutamate} + \text{NH}_4^+$.</p><p>2. <strong>The Glucose-Alanine Cycle (Skeletal Muscle):</strong><br>Pyruvate from glycolysis accepts the amino group from glutamate via ALT to form <strong>Alanine</strong>. Alanine travels to the liver, where hepatic ALT transfers the amino group back to $\alpha$-ketoglutarate (forming glutamate for urea synthesis), while the pyruvate is converted via gluconeogenesis to glucose, returning to muscle.</p><h3>3. The Urea Cycle (Krebs-Henseleit Ornithine Cycle, 1932)</h3><p>Exclusively functional in parenchymal hepatocytes. Compartmentalized between mitochondria and cytosol:</p><p><strong>Mitochondrial Matrix Reactions:</strong><br>1. <em>Carbamoyl Phosphate Synthetase I (CPS-I):</em> $$\text{NH}_4^+ + \text{HCO}_3^- + 2\text{ ATP} \xrightarrow{\text{N-Acetylglutamate}} \text{Carbamoyl Phosphate} + 2\text{ ADP} + \text{P}_i$$ <strong>Rate-limiting committed step</strong>. Requires obligatory allosteric activation by <strong>N-Acetylglutamate (NAG)</strong>.<br>2. <em>Ornithine Transcarbamoylase (OTC):</em> $$\text{Carbamoyl Phosphate} + \text{L-Ornithine} \rightarrow \text{L-Citrulline} + \text{P}_i$$ Citrulline is exported to the cytosol via a specific ornithine/citrulline antiporter.</p><p><strong>Cytosolic Reactions:</strong><br>3. <em>Argininosuccinate Synthetase (ASS):</em> $$\text{Citrulline} + \text{Aspartate} + \text{ATP} \rightarrow \text{Argininosuccinate} + \text{AMP} + \text{PP}_i \xrightarrow{\text{Pyrophosphatase}} 2\text{ P}_i$$ Condenses citrulline with aspartate (providing the second nitrogen atom of urea). Consumes 2 high-energy bonds.<br>4. <em>Argininosuccinate Lyase (ASL):</em> $$\text{Argininosuccinate} \rightleftharpoons \text{L-Arginine} + \text{Fumarate}$$ Cleaves argininosuccinate, releasing fumarate.<br>5. <em>Arginase:</em> $$\text{L-Arginine} + \text{H}_2\text{O} \xrightarrow{\text{Mn}^{2+}} \text{Urea} + \text{L-Ornithine}$$ Manganese metalloenzyme. Cleaves arginine to release <strong>Urea</strong> and regenerate <strong>Ornithine</strong>, which re-enters mitochondria.</p><h3>4. Bioenergetics and Regulation</h3><p>&bull; <strong>Energy Cost:</strong> Synthesis of 1 urea molecule consumes 3 ATP molecules, but utilizes <strong>4 high-energy phosphate bonds</strong> ($2\text{ ATP}$ at CPS-I $+ 1\text{ ATP} \rightarrow \text{AMP} + \text{PP}_i \rightarrow 2\text{ P}_i$ at ASS).<br>&bull; <strong>Regulation by N-Acetylglutamate (NAG):</strong> Synthesized by NAG Synthase from acetyl-CoA and glutamate. Activated allosterically by arginine. High protein intake elevates arginine and glutamate, accelerating NAG synthesis and upregulating CPS-I.</p><h3>5. The Krebs Bicycle (Link to Citric Acid Cycle)</h3><p>The fumarate released by argininosuccinate lyase in the cytosol is hydrated to malate by cytosolic fumarase. Malate enters the mitochondria and is oxidized by malate dehydrogenase to oxaloacetate, producing $1\text{ NADH}$ ($2.5\text{ ATP}$). Transamination of oxaloacetate with glutamate regenerates aspartate, which re-enters the urea cycle at ASS. This ATP generation offsets the energy cost of urea synthesis.</p><h3>6. Comparative Nitrogen Excretion</h3><p>&bull; <strong>Mammals (Ureotelic):</strong> Convert $80–90\%$ of waste nitrogen into soluble non-toxic urea.<br>&bull; <strong>Birds / Poultry (Uricotelic):</strong> Lack mitochondrial CPS-I and arginase; synthesize insoluble <strong>uric acid</strong> through purine de novo pathways, excreted as paste with urine.<br>&bull; <strong>Teleost Fish (Ammonotelic):</strong> Diffuse toxic ammonia directly across gills into water.</p>",
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
        "pyq": ["IVRI Annual Exam 2024", "TANUVAS 2023", "GADVASU 2022", "KVAFSU 2021", "RAJUVAS 2020"]
    }
]

if __name__ == "__main__":
    def_q = [q for q in unit2_qa if q["marks"] == 2]
    sa_q = [q for q in unit2_qa if q["marks"] == 5]
    la_q = [q for q in unit2_qa if q["marks"] == 12]
    print(f"Unit 2 Q&A Loaded: {len(def_q)} (2M), {len(sa_q)} (5M), {len(la_q)} (12M). Total = {len(unit2_qa)} questions.")
