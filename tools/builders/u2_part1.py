r"""
Unit 2 Part 1: Enzymology, Kinetics, Isoenzymes, Inhibition & Allostery
Topics: u2-t01 to u2-t06
"""

PART1 = {
    "u2-t01": {
        "summary": "Enzymes are specialized biological catalysts—predominantly globular proteins—that accelerate biochemical reaction rates by lowering the activation energy barrier without being consumed or altering overall thermodynamic equilibrium.",
        "desc": """<h4>1. Definition and Catalytic Characteristics of Enzymes</h4>
<p>Enzymes are biological catalysts produced by living cells that accelerate the rate of chemical reactions by factors of $10^6$ to $10^{12}$ times under mild physiological conditions of temperature (37–39°C), neutral pH (7.0–7.4), and atmospheric pressure. With the exception of catalytic RNA molecules (<strong>Ribozymes</strong>), all known enzymes are globular proteins.</p>
<ul>
  <li><strong>Colloidal & Protein Nature:</strong> Soluble, heat-labile macromolecules destroyed by extremes of pH and temperature (denaturation).</li>
  <li><strong>Thermodynamic Role (Activation Energy):</strong> Enzymes do <strong>not</strong> alter the overall free energy change ($\Delta G$) of a reaction, nor do they alter the chemical equilibrium constant ($K_{eq}$). Instead, they accelerate the rate of reaching equilibrium by lowering the <strong>Activation Energy ($E_a$ / $\Delta G^\ddagger$)</strong> required to transition substrate molecules into the high-energy, unstable <strong>Transition State</strong>.</li>
  <li><strong>Unchanged at Reaction Completion:</strong> Enzymes emerge chemically unchanged at the end of the reaction cycle, ready to process subsequent substrate molecules.</li>
</ul>

<h4>2. IUBMB Systematic Classification of Enzymes</h4>
<p>The International Union of Biochemistry and Molecular Biology (IUBMB) classifies all enzymes into <strong>6 major classes</strong> based on the chemical nature of the reaction catalyzed (EC Number: Class.Subclass.Sub-subclass.Serial):</p>
<ol>
  <li><strong>Class 1: Oxidoreductases:</strong> Catalyze oxidation-reduction reactions (electron, hydrogen, or oxygen transfer). Include dehydrogenases, oxidases, peroxidases, and oxygenases (e.g., Lactate Dehydrogenase, Cytochrome Oxidase).</li>
  <li><strong>Class 2: Transferases:</strong> Catalyze the transfer of a specific chemical group (methyl, amino, acyl, phosphate) from one donor molecule to an acceptor (e.g., Alanine Aminotransferase / ALT transferring an amino group; Hexokinase transferring a phosphate from ATP).</li>
  <li><strong>Class 3: Hydrolases:</strong> Catalyze hydrolytic cleavage of covalent bonds ($C-O, C-N, C-C, P-O$) with the addition of water (e.g., Pepsin, Amylase, Alkaline Phosphatase, Lipase).</li>
  <li><strong>Class 4: Lyases:</strong> Catalyze non-hydrolytic addition or removal of groups, forming or eliminating double bonds without water or ATP hydrolysis (e.g., Aldolase, Carbonic Anhydrase, Fumarase).</li>
  <li><strong>Class 5: Isomerases:</strong> Catalyze geometric, optical, or structural rearrangements within a single molecule (e.g., Triose Phosphate Isomerase, Phosphohexose Isomerase).</li>
  <li><strong>Class 6: Ligases (Synthetases):</strong> Catalyze the joining of two molecules coupled with the simultaneous cleavage of a high-energy phosphate bond (ATP or GTP) (e.g., Pyruvate Carboxylase, Glutamine Synthetase, DNA Ligase).</li>
</ol>
<p><em>(Mnemonic to remember the 6 IUBMB classes in order: <strong>O-T-H-L-I-L</strong> = <strong>O</strong>ver <strong>T</strong>he <strong>H</strong>ill <strong>L</strong>ies <strong>I</strong>ndia's <strong>L</strong>ivestock).</em></p>""",
        "eliteDesc": """<h4>Transition State Stabilization & Catalytic Rate Enhancement</h4>
<p>According to transition state theory, the rate of an enzymatic reaction is governed by the Arrhenius and Eyring formulations:</p>
$$k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}$$
<p>Where $\Delta G^\ddagger$ is the free energy of activation. Enzymes bind the <strong>transition state ($\mathbf{S^\ddagger}$) far more tightly</strong> than either the ground-state substrate ($S$) or product ($P$). The binding energy ($\Delta G_B$) liberated from non-covalent interactions (hydrogen bonds, electrostatic forces) formed specifically between active-site residues and the transition state offsets the activation energy barrier, accelerating the reaction exponentially.</p>""",
        "keyPoints": [
            "Enzymes are biocatalysts that accelerate reaction rates by $10^6$ to $10^{12}$ fold.",
            "With the exception of ribozymes, all biological enzymes are globular proteins.",
            "Enzymes lower the Activation Energy ($E_a$) without altering $\Delta G$ or $K_{eq}$.",
            "IUBMB classifies enzymes into 6 major classes: OTHLIL (1 to 6).",
            "Class 1 (Oxidoreductases) transfer electrons or hydrogen atoms (e.g., LDH).",
            "Class 2 (Transferases) transfer functional groups between molecules (e.g., ALT, AST).",
            "Class 3 (Hydrolases) cleave bonds with the addition of water (e.g., Lipase, ALP).",
            "Class 4 (Lyases) cleave bonds without hydrolysis, leaving double bonds (e.g., Aldolase).",
            "Class 5 (Isomerases) interconvert geometric or optical isomers (e.g., Phosphohexose isomerase).",
            "Class 6 (Ligases) join two molecules with concomitant ATP hydrolysis (e.g., Pyruvate carboxylase).",
            "Enzymes achieve catalysis by binding and stabilizing the unstable transition state ($S^\\ddagger$).",
            "Enzymes emerge chemically unaltered following the release of reaction products."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Organ-Specific Leakage Enzymes in Veterinary Hepatic Disease:<br>
Because intracellular enzymes reside in specific subcellular compartments, their appearance in blood plasma directly indicates cellular damage. In dogs and cats, <strong>Alanine Aminotransferase (ALT, EC 2.6.1.2, a Class 2 Transferase)</strong> is located free in the hepatocyte cytoplasm; acute hepatocellular necrosis or toxic injury (e.g., phenobarbital toxicity) causes massive cytosolic leakage into blood within 24–48 hours. In contrast, in adult horses, cattle, and sheep, hepatocyte ALT activity is negligible; veterinarians instead measure <strong>Sorbitol Dehydrogenase (SDH, Class 1 Oxidoreductase)</strong> or <strong>Glutamate Dehydrogenase (GLDH)</strong> to detect acute hepatocellular necrosis.</p>""",
        "tables": [
            {
                "title": "IUBMB Enzyme Classification System with Veterinary Examples",
                "headers": ["Class Number", "Class Name", "Chemical Reaction Catalyzed", "Characteristic Veterinary Enzyme", "Clinical / Metabolic Context"],
                "rows": [
                    ["EC 1", "Oxidoreductases", "Oxidation-reduction; hydride/electron transfer", "Lactate Dehydrogenase (LDH)", "Serum marker of tissue ischemia/necrosis"],
                    ["EC 2", "Transferases", "Transfer of functional group (amino, methyl, acyl)", "Alanine Aminotransferase (ALT)", "Canine/feline hepatocellular leakage marker"],
                    ["EC 3", "Hydrolases", "Cleavage of bonds with addition of $H_2O$", "Alkaline Phosphatase (ALP)", "Biliary obstruction & osteoblastic bone growth"],
                    ["EC 4", "Lyases", "Non-hydrolytic bond cleavage; double bond formation", "Carbonic Anhydrase", "RBC bicarbonate transport and gastric $HCl$ secretion"],
                    ["EC 5", "Isomerases", "Intramolecular structural rearrangement", "Phosphoglucomutase", "Glycogenolysis and gluconeogenesis pathway"],
                    ["EC 6", "Ligases", "Joining of two molecules coupled with ATP cleavage", "Pyruvate Carboxylase", "First regulatory step of ruminant gluconeogenesis"]
                ]
            },
            {
                "title": "Comparison of Chemical Catalysts vs. Biological Enzymes",
                "headers": ["Property", "Inorganic Chemical Catalyst (e.g., Platinum, $H^+$)", "Biological Enzyme (Protein)"],
                "rows": [
                    ["Chemical Nature", "Simple inorganic metals, acids, or bases", "High molecular weight complex globular proteins"],
                    ["Operating Temperature", "Requires high temperatures (100 - 500°C)", "Optimum at body temperature (37 - 39°C); denatures > 55°C"],
                    ["Reaction Specificity", "Broad and non-specific; produces multiple side-products", "Stereospecific; absolute or group specificity; zero side-products"],
                    ["Regulation", "Not subject to cellular metabolic regulation", "Strictly regulated via allostery, covalent modification, and hormones"],
                    ["Catalytic Efficiency", "Modest rate acceleration ($10^2 - 10^4$)", "Enormous rate acceleration ($10^6 - 10^{12}$)"]
                ]
            }
        ],
        "img": "",
        "tags": ["Enzymes", "IUBMB Classification", "Activation Energy", "Catalysis", "Transition State", "ALT"]
    },

    "u2-t02": {
        "summary": "Coenzymes and inorganic cofactors are non-protein chemical partners essential for the catalytic activity of conjugated holoenzymes, while isoenzymes are genetically distinct molecular variants of the same enzyme that catalyze identical chemical reactions in different tissues and developmental stages.",
        "desc": """<h4>1. Cofactors, Coenzymes, and the Holoenzyme Complex</h4>
<p>Many enzymes require non-protein chemical entities for catalytic activity. The complete, catalytically active enzyme system is called a <strong>Holoenzyme</strong>:</p>
$$\\mathbf{\\text{Holoenzyme} = \\text{Apoenzyme (Protein part)} + \\text{Cofactor (Non-protein part)}}$$
<ul>
  <li><strong>Apoenzyme:</strong> The thermolabile, catalytically inactive protein component. Dictates substrate specificity.</li>
  <li><strong>Cofactor:</strong> Non-protein component, sub-divided into:
    <ul>
      <li><em>Prosthetic Group:</em> A tightly bound (often covalently linked) organic cofactor that does not dissociate from the apoenzyme during catalytic cycling (e.g., <strong>FAD</strong> in succinate dehydrogenase; <strong>Biotin</strong> in pyruvate carboxylase; <strong>Heme</strong> in cytochromes).</li>
      <li><em>Coenzyme:</em> A heat-stable, low-molecular-weight organic molecule that is loosely and reversibly bound, functioning as a dynamic co-substrate (e.g., <strong>$NAD^+, NADP^+$</strong>, Coenzyme A). Most coenzymes are derived from water-soluble <strong>B-complex vitamins</strong>.</li>
      <li><em>Inorganic Metal Activators (Metalloenzymes):</em> Divalent cations ($Mg^{2+}, Zn^{2+}, Fe^{2+}, Cu^{2+}, Mn^{2+}$) that coordinate substrate orientation, stabilize negative charges, or participate in redox (e.g., $Mg^{2+}$ for all kinase enzymes; $Zn^{2+}$ in carbonic anhydrase and alcohol dehydrogenase).</li>
    </ul>
  </li>
</ul>

<h4>2. Major Vitamin-Derived Coenzymes in Metabolism</h4>
<ul>
  <li><strong>Thiamine Pyrophosphate (TPP, from Vitamin $B_1$):</strong> Coenzyme for pyruvate dehydrogenase and $\alpha$-ketoglutarate dehydrogenase (oxidative decarboxylation). Deficiency in ruminants causes Polioencephalomalacia (PEM / cerebrocortical necrosis).</li>
  <li><strong>$NAD^+$ and $NADP^+$ (from Niacin / Vitamin $B_3$):</strong> Pyridine nucleotide coenzymes transferring two electrons and one proton as a hydride ion ($:H^-$). $NAD^+$ drives catabolic oxidations; NADPH powers anabolic biosyntheses.</li>
  <li><strong>FAD and FMN (from Riboflavin / Vitamin $B_2$):</strong> Flavin nucleotide coenzymes transferring two electrons and two protons ($2e^- + 2H^+$) through semiquinone intermediates.</li>
  <li><strong>Pyridoxal Phosphate (PLP, from Vitamin $B_6$):</strong> Obligate coenzyme for all amino acid transaminases (ALT, AST), decarboxylases, and glycogen phosphorylase.</li>
  <li><strong>Coenzyme A (CoA-SH, from Pantothenic Acid / Vitamin $B_5$):</strong> Thiol coenzyme activating and carrying acyl and acetyl groups via high-energy thioester bonds.</li>
  <li><strong>Biotin (Vitamin $B_7$):</strong> Coenzyme for ATP-dependent carboxylation reactions (Pyruvate Carboxylase, Acetyl-CoA Carboxylase).</li>
</ul>

<h4>3. Isoenzymes (Isozymes)</h4>
<p><strong>Isoenzymes</strong> are multiple, physically distinct molecular forms of the same enzyme that catalyze the exact same chemical reaction within an organism, but differ in amino acid sequence, electrophoretic mobility, kinetic parameters ($K_m, V_{max}$), and tissue distribution.</p>
<ul>
  <li><strong>1. Lactate Dehydrogenase (LDH, EC 1.1.1.27):</strong>
    <ul>
      <li>Tetrameric enzyme assembled from two distinct polypeptide subunit chains: <strong>Heart ($H$)</strong> and <strong>Muscle ($M$)</strong>, encoded by separate genes. Combination yields <strong>5 distinct isoenzymes</strong>:
        <ol>
          <li><strong>$LDH_1$ ($H_4$):</strong> Predominates in myocardium and erythrocytes. Highest electrophoretic migration toward anode ($+$); inhibited by pyruvate.</li>
          <li><strong>$LDH_2$ ($H_3M$):</strong> Reticuloendothelial system and heart.</li>
          <li><strong>$LDH_3$ ($H_2M_2$):</strong> Lung and spleen.</li>
          <li><strong>$LDH_4$ ($HM_3$):</strong> Kidney and placenta.</li>
          <li><strong>$LDH_5$ ($M_4$):</strong> Predominates in skeletal muscle and liver. Lowest migration; functions in anaerobic glycolysis.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li><strong>2. Creatine Kinase (CK / CPK, EC 2.7.3.2):</strong>
    <ul>
      <li>Dimeric enzyme composed of <strong>Brain ($B$)</strong> and <strong>Muscle ($M$)</strong> subunits, forming 3 isoenzymes:
        <ol>
          <li><strong>CK-BB (CK-1):</strong> Brain and nervous tissue.</li>
          <li><strong>CK-MB (CK-2):</strong> Cardiac myocardium (~15–20% of cardiac CK). Specific serum biomarker for canine myocardial infarction and myocarditis.</li>
          <li><strong>CK-MM (CK-3):</strong> Skeletal muscle (>95% of muscle CK). Markedly elevated in canine muscular dystrophy and equine 'tying-up' syndrome (rhabdomyolysis).</li>
        </ol>
      </li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Kinetic Specialization of Isoenzymes: Glucokinase vs. Hexokinase</h4>
<p>A classic metabolic example of isoenzymes is Hexokinase IV (<strong>Glucokinase</strong>, liver/pancreas) versus Hexokinase I–III (peripheral muscle/brain):</p>
<ul>
  <li><strong>Hexokinase I:</strong> Very low $K_m$ ($0.05\\ \\text{mmol/L}$), high substrate affinity; operates at $V_{max}$ even during fasting hypoglycemia. Strongly inhibited by its product, Glucose-6-Phosphate (G6P).</li>
  <li><strong>Glucokinase:</strong> High $K_m$ ($10.0\\ \\text{mmol/L}$), low affinity; not inhibited by G6P. Operates only when portal blood glucose rises post-prandially, permitting the liver to clear large glucose loads without feedback shutdown.</li>
</ul>""",
        "keyPoints": [
            "Holoenzyme is the active complex: Apoenzyme (protein) + Cofactor (non-protein).",
            "Prosthetic groups are permanently, tightly bound cofactors (e.g., FAD, Biotin).",
            "Coenzymes are loosely bound, dissociable organic co-substrates derived from B-vitamins.",
            "Metalloenzymes require divalent inorganic cations ($Mg^{2+}, Zn^{2+}, Mn^{2+}$) for catalytic activity.",
            "TPP (from $B_1$) catalyzes oxidative decarboxylation; deficiency causes cerebrocortical necrosis.",
            "PLP (from $B_6$) is the obligate coenzyme for transaminases (ALT, AST) and decarboxylases.",
            "Isoenzymes catalyze the same reaction but differ in structure, kinetics, and tissue distribution.",
            "LDH exists as 5 tetrameric isoenzymes ($LDH_1$ $H_4$ in heart to $LDH_5$ $M_4$ in liver/muscle).",
            "Creatine Kinase exists as 3 dimeric isozymes: CK-BB (brain), CK-MB (heart), CK-MM (skeletal muscle).",
            "Serum CK-MM surges dramatically in equine exertional rhabdomyolysis ('tying-up').",
            "Hexokinase I (muscle) has low $K_m$ and G6P inhibition; Glucokinase (liver) has high $K_m$ and no G6P inhibition.",
            "Electrophoretic separation of isoenzymes provides precise organ-specific diagnostic pathology."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Equine Exertional Rhabdomyolysis ('Tying-Up' Syndrome / Azoturia):<br>
In working horses and racehorses subjected to unaccustomed strenuous exercise following a period of rest on high grain rations (Monday Morning Disease), acute sarcolemmal necrosis occurs in large gluteal and thigh muscles. Damaged skeletal muscle cells release massive amounts of <strong>Creatine Kinase (specifically the CK-MM isoenzyme)</strong> into the bloodstream. Plasma CK peaks within 4–6 hours, often soaring from a normal < 300 U/L to over 50,000–100,000 U/L. Concurrently, Aspartate Aminotransferase (AST) rises slowly, peaking at 24–48 hours. Concomitant release of myoglobin causes dark reddish-brown 'coffee-colored' urine (myoglobinuria), risking secondary acute renal tubular necrosis.</p>""",
        "tables": [
            {
                "title": "Major B-Complex Vitamins, Coenzymes, and Metabolic Roles",
                "headers": ["Vitamin Precursor", "Active Coenzyme Form", "Abbreviation", "Chemical Reaction / Group Transferred", "Veterinary Deficiency / Role"],
                "rows": [
                    ["Thiamine ($B_1$)", "Thiamine Pyrophosphate", "TPP", "Decarboxylation of $\\alpha$-keto acids", "Polioencephalomalacia (PEM) in cattle/sheep"],
                    ["Riboflavin ($B_2$)", "Flavin Adenine Dinucleotide", "FAD / FMN", "Redox; transfers $2e^- + 2H^+$", "Curled toe paralysis in chicks; succinate dehydrogenase"],
                    ["Niacin ($B_3$)", "Nicotinamide Adenine Dinucleotide", "NAD+ / NADP+", "Redox; transfers hydride ($:H^-$)", "Black tongue in dogs; Pellagra; drives ATP generation"],
                    ["Pantothenic Acid ($B_5$)", "Coenzyme A", "CoA-SH", "Acyl and acetyl group transfer", "Goose stepping gait in swine; fatty acid beta-oxidation"],
                    ["Pyridoxine ($B_6$)", "Pyridoxal Phosphate", "PLP", "Transamination and decarboxylation", "ALT/AST amino acid transamination; neurotransmitters"],
                    ["Biotin ($B_7$)", "Biocytin (Enzyme-bound Biotin)", "Biotin", "ATP-dependent $CO_2$ carboxylation", "Pyruvate carboxylase; hoof horn cracking in cattle"]
                ]
            },
            {
                "title": "Diagnostic Isoenzyme Profiles of LDH and Creatine Kinase",
                "headers": ["Isoenzyme", "Subunit Composition", "Primary Tissue Source", "Electrophoretic Anodal Migration", "Veterinary Clinical Indication"],
                "rows": [
                    ["$LDH_1$", "$H_4$ (Heart)", "Myocardium, Erythrocytes", "Fastest (migrates farthest to anode)", "Canine myocarditis; immune-mediated hemolytic anemia"],
                    ["$LDH_2$", "$H_3M$", "Reticuloendothelial, Kidney", "Fast", "Renal infarction, pulmonary embolism"],
                    ["$LDH_5$", "$M_4$ (Muscle)", "Liver, Skeletal Muscle", "Slowest (remains near cathode)", "Equine acute hepatitis; muscle crushing trauma"],
                    ["CK-BB (CK-1)", "$BB$ (Brain)", "Cerebral cortex, smooth muscle", "Fastest", "Head trauma, meningitis, encephalitis"],
                    ["CK-MB (CK-2)", "$MB$ (Cardiac)", "Myocardium", "Intermediate", "Canine dilated cardiomyopathy (DCM), myocardial infarction"],
                    ["CK-MM (CK-3)", "$MM$ (Muscle)", "Skeletal Muscle (>95%)", "Slowest", "Equine rhabdomyolysis, capture myopathy in wild deer"]
                ]
            }
        ],
        "img": "",
        "tags": ["Coenzymes", "Cofactors", "Isoenzymes", "LDH", "Creatine Kinase", "B-Vitamins", "Rhabdomyolysis"]
    },

    "u2-t03": {
        "summary": "Enzymes demonstrate exquisite catalytic specificity dictated by their 3D active sites—specialized spatial clefts lined with catalytic and binding residues that interact with substrates via Fischer's lock-and-key and Koshland's dynamic induced-fit mechanisms.",
        "desc": """<h4>1. The Active Center (Active Site) of an Enzyme</h4>
<p>The <strong>active center</strong> is the specific three-dimensional cleft, pocket, or groove on an enzyme molecule where the substrate binds and catalytic transformation takes place. It occupies only a small fraction (typically 1–5%) of the total enzyme volume.</p>
<ul>
  <li><strong>Structure of the Active Center:</strong> Formed by the precise tertiary spatial juxtaposition of amino acid residues that may be located far apart in the linear primary sequence (e.g., in Chymotrypsin, the catalytic triad consists of $His-57$, $Asp-102$, and $Ser-195$).</li>
  <li><strong>Functional Regions within the Active Site:</strong>
    <ol>
      <li><strong>Substrate-Binding Site:</strong> Lined with amino acid residues whose side chains form non-covalent contacts (hydrogen bonds, electrostatic salt bridges, hydrophobic van der Waals forces) that orient the substrate in the precise stereo-chemical position.</li>
      <li><strong>Catalytic Site:</strong> Contains reactive amino acid side chains (such as the imidazole of Histidine, the $-OH$ of Serine, the carboxyl of Asp/Glu, or the $-SH$ of Cysteine) that directly donate/accept protons or form transient covalent intermediates.</li>
    </ol>
  </li>
</ul>

<h4>2. Models of Enzyme-Substrate Complex ($ES$) Formation</h4>
<ul>
  <li><strong>1. The Lock-and-Key Model (Fischer, 1894):</strong>
    <ul>
      <li>Proposes that the enzyme's active site possesses a <strong>pre-formed, rigid geometric shape</strong> that is precisely complementary to the substrate, exactly like a key fitting into a lock.</li>
      <li><em>Limitation:</em> Fails to account for enzyme conformational changes during catalysis, allosteric regulation, or how the enzyme destabilizes the ground-state substrate into the transition state.</li>
    </ul>
  </li>
  <li><strong>2. The Induced-Fit Model (Koshland, 1958):</strong>
    <ul>
      <li>Proposes that the active site is <strong>flexible and dynamic</strong>. The initial binding of the substrate induces a conformational realignment of the active site residues, molding the enzyme around the substrate (analogous to a hand entering a glove).</li>
      <li>Crucially, this structural rearrangement positions the catalytic amino acid side chains into optimal alignment with the substrate bonds, straining the substrate toward the high-energy <strong>transition state</strong>.</li>
    </ul>
  </li>
</ul>

<h4>3. Types of Enzyme Specificity</h4>
<ul>
  <li><strong>1. Absolute Specificity:</strong> The enzyme acts upon only <strong>one single chemical substrate</strong> and catalyzes one specific reaction (e.g., <strong>Urease</strong> hydrolyzes urea exclusively; it has zero activity toward methylurea or thiourea; <strong>Lactase</strong> cleaves only lactose).</li>
  <li><strong>2. Group Specificity (Relative Specificity):</strong> The enzyme acts upon a family of substrates sharing a specific structural chemical functional group:
    <ul>
      <li><em>Trypsin:</em> Cleaves peptide bonds specifically on the carboxyl side of basic amino acids (<strong>Lysine</strong> and <strong>Arginine</strong>).</li>
      <li><em>Chymotrypsin:</em> Cleaves peptide bonds adjacent to bulky aromatic amino acids (<strong>Phenylalanine, Tyrosine, Tryptophan</strong>).</li>
      <li><em>Pancreatic Lipase:</em> Hydrolyzes the primary (1 and 3) ester bonds of any long-chain triacylglycerol.</li>
    </ul>
  </li>
  <li><strong>3. Optical (Stereochemical) Specificity:</strong> Enzymes recognize only one optical stereoisomer ($D$ or $L$) of a chiral substrate:
    <ul>
      <li><strong>L-Amino Acid Oxidase</strong> oxidizes only L-amino acids; D-amino acids are completely ignored.</li>
      <li>All mammalian glycolytic enzymes (Hexokinase, PFK-1) interact exclusively with <strong>D-sugars</strong>.</li>
    </ul>
  </li>
  <li><strong>4. Geometric Specificity:</strong> Enzymes discriminate between cis- and trans-isomers (e.g., <strong>Fumarase</strong> hydrates trans-fumarate to L-malate, but exhibits zero activity toward cis-maleate).</li>
</ul>""",
        "eliteDesc": """<h4>Catalytic Mechanism of Serine Proteases: The Charge-Relay Triad</h4>
<p>In pancreatic digestive enzymes of domestic animals (Trypsin, Chymotrypsin, Elastase), peptide bond hydrolysis relies on a conserved catalytic triad: $\mathbf{Asp-102 \\cdots His-57 \\cdots Ser-195}$:</p>
<ol>
  <li><strong>General Base Catalysis:</strong> $His-57$, polarized by the negative carboxylate of $Asp-102$, extracts a proton from the $-OH$ of $Ser-195$.</li>
  <li><strong>Nucleophilic Attack:</strong> The activated, highly nucleophilic alkoxide oxygen ($Ser-O^-$) attacks the carbonyl carbon of the scissile peptide bond, forming a tetrahedral intermediate.</li>
  <li><strong>Oxyanion Hole Stabilization:</strong> The developing negative charge on the carbonyl oxygen is stabilized by hydrogen bonds from the polypeptide backbone amide protons of $Gly-193$ and $Ser-195$ (the <strong>Oxyanion Hole</strong>).</li>
  <li><strong>Covalent Acyl-Enzyme Intermediate:</strong> The peptide amine product is released; water enters to hydrolyze the acyl-ester intermediate, regenerating the resting active site.</li>
</ol>""",
        "keyPoints": [
            "The active center is the 3D cleft where substrate binds and catalysis occurs (1-5% of enzyme volume).",
            "Active site residues originate from distant linear positions brought together by tertiary folding.",
            "Consists of a Substrate-Binding site (orientation) and a Catalytic site (chemical transformation).",
            "Fischer's Lock-and-Key model (1894) posits a rigid, pre-existing complementary active site.",
            "Koshland's Induced-Fit model (1958) envisions a flexible active site that molds around the substrate.",
            "Induced fit optimizes catalytic alignment and strains substrate bonds toward the transition state.",
            "Absolute specificity: Enzyme acts on only one substrate (e.g., Urease acts solely on urea).",
            "Group specificity: Enzyme cleaves specific functional groups (e.g., Trypsin cleaves Lys/Arg).",
            "Stereochemical specificity: Mammalian enzymes act exclusively on L-amino acids and D-sugars.",
            "Geometric specificity: Fumarase acts on trans-fumarate, completely ignoring cis-maleate.",
            "Serine proteases utilize a conserved catalytic triad: Asp-102, His-57, and Ser-195.",
            "The oxyanion hole stabilizes the high-energy tetrahedral transition state intermediate."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Organophosphate (OP) Toxicity and Acetylcholinesterase Active Site Irreversible Inhibition:<br>
In veterinary toxicology, agricultural organophosphate pesticides (e.g., Malathion, Chlorpyrifos, Dichlorvos) specifically target the active site of <strong>Acetylcholinesterase (AChE)</strong> at neuromuscular junctions and autonomic synapses. The active site of AChE possesses an esteratic site containing a nucleophilic <strong>Serine hydroxyl group</strong>. The organophosphate forms a stable, covalent covalent phosphoester bond with this serine residue. This irreversibly blocks acetylcholine binding. Acetylcholine accumulates in synaptic clefts, causing continuous stimulation of muscarinic and nicotinic receptors in cattle, dogs, and horses (manifesting as <strong>SLUDDE signs</strong>: Salivation, Lacrimation, Urination, Defecation, Dyspnea, and Emesis). If administered promptly before the enzyme-inhibitor complex undergoes 'aging', the specific oxime antidote <strong>Pralidoxime (2-PAM)</strong> acts as a super-nucleophile that displaces the organophosphate group and reactivates the enzyme's catalytic active site.</p>""",
        "tables": [
            {
                "title": "Comparison of Lock-and-Key vs. Induced-Fit Catalytic Models",
                "headers": ["Feature", "Lock-and-Key Model (Emil Fischer, 1894)", "Induced-Fit Model (Daniel Koshland, 1958)"],
                "rows": [
                    ["Active Site Geometry", "Pre-formed, rigid, and unyielding", "Flexible, dynamic, and plastic"],
                    ["Substrate Binding", "Passive entry into complementary static pocket", "Substrate binding actively induces conformational shift"],
                    ["Transition State", "Does not explain how substrate bonds are strained", "Conformational strain actively forces substrate into transition state"],
                    ["Enzyme Regulation", "Cannot explain allosteric activation or inhibition", "Readily accommodates allosteric transitions and cooperativity"],
                    ["Modern Status", "Historical model; applies to few rigid lock-step sites", "Universally accepted model of modern enzymology"]
                ]
            },
            {
                "title": "Enzymatic Specificity Patterns in Digestive Proteases",
                "headers": ["Enzyme", "Type of Specificity", "Target Bond / Cleavage Site", "Physiological Function in Domestic Animals"],
                "rows": [
                    ["Urease", "Absolute Specificity", "Urea exclusively ($-CO-NH_2$ bond)", "Microbial nitrogen recycling in the rumen"],
                    ["Trypsin", "Group Specificity", "Carboxyl side of basic residues ($Arg, Lys$)", "Pancreatic protein digestion in small intestine"],
                    ["Chymotrypsin", "Group Specificity", "Carboxyl side of aromatic residues ($Phe, Tyr, Trp$)", "Pancreatic proteolysis of dietary protein"],
                    ["Pepsin", "Group Specificity", "Amino side of hydrophobic residues ($Leu, Phe$)", "Gastric initiates protein hydrolysis at pH 1.5 - 2.0"],
                    ["L-Amino Acid Oxidase", "Optical / Stereospecific", "L-Amino acids exclusively", "Amino acid deamination in viper venoms"]
                ]
            }
        ],
        "img": "",
        "tags": ["Active Site", "Induced Fit", "Lock and Key", "Enzyme Specificity", "Organophosphate Toxicity", "AChE"]
    },

    "u2-t04": {
        "summary": "Enzyme velocity is dynamically governed by temperature, pH, substrate concentration ([S], exhibiting hyperbolic Michaelis-Menten kinetics), and enzyme concentration ([E]), defining physiological setpoints and diagnostic kinetics.",
        "desc": """<h4>1. Effect of Temperature on Enzyme Velocity</h4>
<p>The rate of an enzyme-catalyzed reaction increases with rising temperature up to a maximum velocity, beyond which activity drops precipitously to zero, producing an asymmetric <strong>bell-shaped curve</strong>.</p>
<ul>
  <li><strong>$Q_{10}$ Temperature Coefficient:</strong> For most enzymatic reactions, the rate roughly doubles for every 10°C rise in temperature ($Q_{10} \\approx 2.0$) within the physiological range, because elevated thermal kinetic energy increases the frequency of productive collisions between substrate and active site.</li>
  <li><strong>Optimum Temperature ($T_{opt}$):</strong> The specific temperature at which an enzyme displays maximum catalytic velocity. In domestic mammals, $T_{opt} \\approx 37 - 40^\\circ\\text{C}$; in avians, $T_{opt} \\approx 41 - 42^\\circ\\text{C}$.</li>
  <li><strong>Thermal Inactivation:</strong> Beyond 45–55°C, thermal agitation disrupts the non-covalent hydrogen bonds, hydrophobic interactions, and ionic bridges stabilizing tertiary protein conformation. The enzyme undergoes irreversible <strong>thermal denaturation</strong>, collapsing the active site.</li>
</ul>

<h4>2. Effect of pH on Enzyme Activity</h4>
<p>Most enzymes exhibit a characteristic bell-shaped curve when velocity is plotted against pH, displaying a distinct <strong>Optimum pH ($pH_{opt}$)</strong> where catalytic activity peaks.</p>
<ul>
  <li><strong>Mechanism of pH Sensitivity:</strong> Shifts in hydrogen ion concentration ($[H^+]$) alter the ionization (protonation/deprotonation) state of:
    <ol>
      <li>The substrate molecule itself.</li>
      <li>Catalytic and substrate-binding amino acid side chains within the active site (e.g., if a catalytic Histidine must be unprotonated to act as a general base, lowering pH protonates it to $His-H^+$, terminating catalysis).</li>
      <li>Residues maintaining overall tertiary protein folding. Extreme pH causes irreversible denaturation.</li>
    </ol>
  </li>
  <li><strong>Physiological Diversity of $pH_{opt}$:</strong>
    <ul>
      <li><strong>Pepsin (Gastric):</strong> $pH_{opt} \\approx 1.5 - 2.0$ (adapted to gastric $HCl$).</li>
      <li><strong>Trypsin & Chymotrypsin (Intestinal):</strong> $pH_{opt} \\approx 7.8 - 8.2$.</li>
      <li><strong>Alkaline Phosphatase (ALP):</strong> $pH_{opt} \\approx 9.5 - 10.5$.</li>
      <li><strong>Acid Phosphatase (ACP):</strong> $pH_{opt} \\approx 4.5 - 5.0$.</li>
    </ul>
  </li>
</ul>

<h4>3. Effect of Substrate Concentration ($[S]$): The Michaelis-Menten Equation</h4>
<p>At constant enzyme concentration, increasing $[S]$ produces a rectangular <strong>hyperbolic saturation curve</strong> described by Leonor Michaelis and Maud Menten (1913):</p>
$$\\mathbf{V_0 = \\frac{V_{max} [S]}{K_m + [S]}}$$
<ul>
  <li><strong>At very low $[S]$ ($[S] \\ll K_m$):</strong> The denominator $K_m + [S] \\approx K_m$. The equation simplifies to $V_0 = (V_{max} / K_m)[S]$. Reaction rate is directly proportional to $[S]$ (<strong>First-Order Kinetics</strong>).</li>
  <li><strong>At very high $[S]$ ($[S] \\gg K_m$):</strong> The denominator $K_m + [S] \\approx [S]$. The equation simplifies to $V_0 = V_{max}$. All enzyme active sites are fully saturated with substrate ($ES$ complex). The reaction rate is constant and independent of $[S]$ (<strong>Zero-Order Kinetics</strong>).</li>
  <li><strong>The Michaelis Constant ($K_m$):</strong>
    <ul>
      <li><strong>Definition:</strong> The specific substrate concentration at which the reaction velocity is exactly <strong>half of its maximum velocity</strong> ($V_0 = V_{max}/2$).</li>
      <li><strong>Physical Significance:</strong> $K_m$ is an intrinsic characteristic constant of an enzyme for a given substrate; it is completely independent of enzyme concentration.</li>
      <li><strong>Affinity Relationship:</strong> $K_m$ is <strong>inversely proportional to enzyme-substrate affinity</strong>. An enzyme with a <em>low $K_m$</em> possesses high affinity and reaches $V_{max}$ at low substrate concentrations; an enzyme with a <em>high $K_m$</em> has low affinity and requires high substrate levels for saturation.</li>
    </ul>
  </li>
</ul>

<h4>4. Effect of Enzyme Concentration ($[E]$)</h4>
<p>When substrate is present in saturating, non-limiting excess ($[S] \\gg K_m$, operating in zero-order kinetics with respect to substrate), the initial velocity ($V_0$) is <strong>directly and linearly proportional to the concentration of active enzyme</strong>: $V_0 = k_{cat} [E]_{total}$. This linear proportionality is the absolute foundation for all quantitative spectrophotometric serum enzyme diagnostic assays in veterinary pathology.</p>""",
        "eliteDesc": """<h4>The Lineweaver-Burk Double-Reciprocal Transformation</h4>
<p>Because determining true $V_{max}$ from an asymptotic hyperbolic curve is prone to experimental error, Hans Lineweaver and Dean Burk (1934) took the algebraic reciprocal of both sides of the Michaelis-Menten equation, yielding a linear formulation ($y = mx + c$):</p>
$$\\mathbf{\\frac{1}{V_0} = \\left(\\frac{K_m}{V_{max}}\\right) \\frac{1}{[S]} + \\frac{1}{V_{max}}}$$
<table class="tbl comp-table">
  <thead><tr><th>Plot Parameter</th><th>Lineweaver-Burk Coordinate</th><th>Diagnostic Significance</th></tr></thead>
  <tbody>
    <tr><td>Y-Axis ($y$)</td><td>$1 / V_0$</td><td>Reciprocal of initial reaction velocity</td></tr>
    <tr><td>X-Axis ($x$)</td><td>$1 / [S]$</td><td>Reciprocal of substrate concentration</td></tr>
    <tr><td>Slope ($m$)</td><td>$K_m / V_{max}$</td><td>Reflects catalytic efficiency</td></tr>
    <tr><td>Y-Intercept ($c$)</td><td>$1 / V_{max}$</td><td>Exact value of maximum velocity</td></tr>
    <tr><td>X-Intercept</td><td>$-1 / K_m$</td><td>Direct determination of Michaelis constant ($K_m$)</td></tr>
  </tbody>
</table>""",
        "keyPoints": [
            "Enzyme velocity produces an asymmetric bell-shaped curve with increasing temperature.",
            "$Q_{10}$ temperature coefficient is ~2.0 (reaction rate doubles per 10°C rise below $T_{opt}$).",
            "Thermal denaturation occurs above 45-55°C as non-covalent folding bonds disrupt.",
            "The pH curve is bell-shaped; optimum pH maintains correct ionization of active site residues.",
            "Pepsin operates optimally at pH 1.5–2.0; Trypsin at pH 7.8–8.2; ALP at pH 9.5–10.5.",
            "Michaelis-Menten equation: $V_0 = (V_{max} [S]) / (K_m + [S])$, yielding a rectangular hyperbola.",
            "At $[S] \\ll K_m$, reaction follows First-Order kinetics (rate is proportional to $[S]$).",
            "At $[S] \\gg K_m$, enzyme is fully saturated, following Zero-Order kinetics ($V_0 = V_{max}$).",
            "$K_m$ is the substrate concentration at which reaction velocity reaches half-maximum ($V_{max}/2$).",
            "$K_m$ is inversely proportional to substrate affinity (low $K_m$ = high affinity).",
            "Under saturating substrate conditions, velocity is directly and linearly proportional to $[E]$.",
            "Lineweaver-Burk plot linearizes kinetics: y-intercept is $1/V_{max}$, x-intercept is $-1/K_m$."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Diagnostic Design of Clinical Chemistry Spectrophotometric Assays:<br>
When a veterinary diagnostic laboratory measures serum enzymes (such as ALT, AST, Alkaline Phosphatase, or Amylase), the analytical goal is to quantify the concentration of enzyme $[E]$ in the patient's blood sample. In order for the reaction rate to be strictly and linearly proportional to $[E]$, the reagent assay buffer must provide substrate $[S]$ at concentrations <strong>at least 10 to 20 times higher than the enzyme's known $K_m$</strong> ($[S] \\ge 20\\ K_m$). Under these massively saturating zero-order conditions with respect to substrate ($V_0 = V_{max}$), the observed rate of absorbance change per minute ($\Delta A / \\text{min}$) is 100% dependent on patient serum enzyme concentration, guaranteeing accurate clinical diagnosis of organ damage.</p>""",
        "tables": [
            {
                "title": "Optimum pH Values of Selected Animal Enzymes",
                "headers": ["Enzyme", "Optimum pH ($pH_{opt}$)", "Physiological Environment", "Consequence of Extreme pH Shift"],
                "rows": [
                    ["Pepsin", "1.5 - 2.0", "Stomach (Abomasum / Canine stomach)", "Rapidly inactivated and denatured in neutral duodenum"],
                    ["Salivary $\\alpha$-Amylase", "6.7 - 7.0", "Oral cavity (pig, primates; absent in carnivores/cattle)", "Instantly destroyed upon entering acidic gastric juice"],
                    ["Trypsin", "7.8 - 8.2", "Duodenal lumen (neutralized by pancreatic $HCO_3^-$)", "Inactive at acidic pH; requires alkaline bile/pancreatic juice"],
                    ["Acid Phosphatase (ACP)", "4.8 - 5.2", "Lysosomes, canine prostate", "Diagnostic marker for canine prostatic adenocarcinoma"],
                    ["Alkaline Phosphatase (ALP)", "9.5 - 10.5", "Canalicular bile membranes, osteoblasts", "Serum marker for cholestasis and active bone remodeling"]
                ]
            },
            {
                "title": "Kinetic Order of Enzymatic Reactions Based on Substrate Concentration",
                "headers": ["Condition", "Kinetic Order", "Mathematical Rate Law", "Enzyme Saturation State", "Analytical / Diagnostic Application"],
                "rows": [
                    ["$[S] \\ll K_m$", "First-Order Kinetics", "$V_0 = \\left(\\frac{V_{max}}{K_m}\\right) [S]$", "Most active sites are free and empty (< 10% occupied)", "Cellular metabolic regulation; rate adjusts dynamically to substrate availability"],
                    ["$[S] = K_m$", "Mixed-Order Kinetics", "$V_0 = 0.5\\ V_{max}$", "Exactly 50% of active sites are saturated ($ES$)", "Definition of Michaelis Constant ($K_m$); sensitive control point"],
                    ["$[S] \\gg K_m$", "Zero-Order Kinetics", "$V_0 = V_{max} = k_{cat} [E]$", "100% of enzyme active sites are saturated ($ES$)", "In vitro clinical diagnostic laboratory enzyme assays"]
                ]
            }
        ],
        "img": "",
        "tags": ["Michaelis-Menten", "Km", "Vmax", "Lineweaver-Burk", "Optimum Temperature", "Optimum pH"]
    },

    "u2-t05": {
        "summary": "Enzyme catalytic activity is quantified through standardized international units (IU and Katal), turnover numbers (kcat), and specific activity, establishing rigorous parameters for assessing enzyme purity and measuring diagnostic serum enzyme activity in veterinary clinical biochemistry.",
        "desc": """<h4>1. Need for Measuring Enzyme Activity</h4>
<p>Because enzymes are present in biological fluids in minute, microgram-level concentrations alongside thousands of other proteins, directly measuring their physical mass is technically challenging. Instead, clinical enzymology quantifies enzymes by their <strong>catalytic activity</strong>—the velocity at which they convert substrate into product under strictly standardized, zero-order conditions (specified substrate saturation, optimum temperature, and defined buffer pH).</p>

<h4>2. Units of Enzyme Activity</h4>
<ul>
  <li><strong>1. The International Unit (IU / U):</strong>
    <ul>
      <li>Adopted by the Commission on Enzymes of the IUBMB in 1961.</li>
      <li><strong>Definition:</strong> One International Unit (1 IU) is the amount of enzyme that catalyzes the transformation of <strong>1 micromole ($1\\ \\mu\\text{mol} = 10^{-6}\\ \\text{mol}$) of substrate into product per minute</strong> under specified optimum assay conditions:
      $$1\\ \\text{IU} = 1\\ \\mu\\text{mol of substrate transformed} / \\text{min} = \\frac{10^{-6}\\ \\text{mol}}{60\\ \\text{seconds}} = 1.67 \\times 10^{-8}\\ \\text{mol/s}$$
      </li>
      <li>All standard veterinary clinical pathology lab reports (ALT, AST, CK, ALP) express serum enzyme concentrations in <strong>Units per Liter (U/L or IU/L)</strong>.</li>
    </ul>
  </li>
  <li><strong>2. The Katal (kat, SI Unit):</strong>
    <ul>
      <li>Recommended by the International System of Units (SI).</li>
      <li><strong>Definition:</strong> One Katal (1 kat) is the amount of enzyme that converts <strong>1 mole of substrate into product per second</strong> under optimal conditions:
      $$1\\ \\text{kat} = 1\\ \\text{mol of substrate} / \\text{second}$$
      </li>
      <li>Because 1 katal is a massive quantity, biological activities are typically reported in microkatals ($\mu\\text{kat}$) or nanokatals ($n\\text{kat}$).</li>
      <li><strong>Interconversion between IU and Katal:</strong>
      $$1\\ \\text{IU} = \\frac{1\\ \\mu\\text{mol}}{60\\ \\text{s}} = \\frac{10^{-6}\\ \\text{mol}}{60\\ \\text{s}} = 1.667 \\times 10^{-8}\\ \\text{kat} = \\mathbf{16.67\\ n\\text{kat}}$$
      $$1\\ \\text{katal} = 60 \\times 10^6\\ \\text{IU} = \\mathbf{6 \\times 10^7\\ \\text{IU}}$$
      </li>
    </ul>
  </li>
</ul>

<h4>3. Turnover Number ($k_{cat}$)</h4>
<p>The <strong>turnover number</strong> ($k_{cat}$), also termed the molecular catalytic constant, represents the maximum number of substrate molecules converted to product per unit time by a single enzyme active site when the enzyme is fully saturated ($V_{max}$):</p>
$$\\mathbf{k_{cat} = \\frac{V_{max}}{[E]_{total}}} \\quad (\\text{units: } \\text{time}^{-1}, \\text{e.g., } \\text{second}^{-1})$$
<ul>
  <li>Turnover numbers in biological enzymes range from $10^2\\ \\text{s}^{-1}$ up to $10^7\\ \\text{s}^{-1}$.</li>
  <li><strong>Carbonic Anhydrase</strong> is one of the fastest enzymes known in domestic animals: it has a $k_{cat} \\approx 600,000\\ \\text{s}^{-1}$ ($6 \\times 10^5$ molecules of $CO_2$ hydrated per second per active site), essential for rapid erythrocyte gas exchange in galloping horses.</li>
</ul>

<h4>4. Specific Activity and Catalytic Efficiency</h4>
<ul>
  <li><strong>Specific Activity:</strong>
    <ul>
      <li><strong>Definition:</strong> The units of enzyme activity per milligram of total protein present in the preparation:
      $$\\mathbf{\\text{Specific Activity} = \\frac{\\text{Total Enzyme Activity (IU)}}{\\text{Total Protein (mg)}}} \\quad (\\text{units: IU/mg protein})$$
      </li>
      <li><strong>Significance:</strong> Specific activity is the universal index of <strong>enzyme purity</strong> during protein purification. As a crude tissue homogenate is fractionated (via ammonium sulfate precipitation, ion-exchange chromatography, and gel filtration), extraneous contaminating proteins are removed. While total enzyme activity decreases due to procedural losses, <strong>specific activity increases progressively</strong>, reaching a maximum plateau when the enzyme is 100% pure.</li>
    </ul>
  </li>
  <li><strong>Catalytic Efficiency ($k_{cat} / K_m$):</strong>
    <ul>
      <li>The ratio of turnover number to the Michaelis constant ($k_{cat} / K_m$, units: $\\text{M}^{-1}\\text{s}^{-1}$) represents the best measure of catalytic efficiency for competing substrates. The theoretical upper ceiling (the <em>catalytic perfection limit</em>) is $10^8$ to $10^9\\ \\text{M}^{-1}\\text{s}^{-1}$, bounded only by the physical rate of diffusion of substrate into the active site.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Mathematical Calculation of Serum Enzyme Activity from Spectrophotometric Data</h4>
<p>In veterinary diagnostic analyzers, enzyme activity is calculated from continuous kinetic spectrophotometric absorbance tracking ($\Delta A / \\text{min}$) using the Beer-Lambert Law:</p>
$$\\text{Activity (IU/L)} = \\frac{\\Delta A / \\text{min} \\times V_{\\text{total}} (\\text{mL}) \\times 10^6}{\\epsilon \\times l \\times V_{\\text{sample}} (\\text{mL})}$$
<p>Where $\epsilon$ is the molar extinction coefficient of the absorbing product (e.g., for NADH at 340 nm, $\epsilon = 6,220\\ \\text{M}^{-1}\\text{cm}^{-1}$), $l$ is the optical path length (1.0 cm), $V_{\\text{total}}$ is total assay volume, and $V_{\\text{sample}}$ is the patient serum volume.</p>""",
        "keyPoints": [
            "Enzymes are quantified by catalytic activity rather than physical mass.",
            "One International Unit (1 IU) transforms $1\\ \\mu\\text{mol}$ of substrate per minute under optimal conditions.",
            "Serum clinical chemistry values (ALT, AST, CK) are universally reported in IU/L (or U/L).",
            "The Katal (kat) is the SI unit: transforms $1\\ \\text{mole}$ of substrate per second.",
            "$1\\ \\text{IU} = 16.67\\ n\\text{kat}$; $1\\ \\text{katal} = 6 \\times 10^7\\ \\text{IU}$.",
            "Turnover number ($k_{cat}$) is the molecules of substrate converted per active site per second ($V_{max}/[E]$).",
            "Carbonic anhydrase has one of the highest turnover numbers: ~600,000 substrate molecules/second.",
            "Specific activity is expressed as Enzyme Units per milligram of total protein (IU/mg).",
            "Specific activity serves as the definitive parameter of enzyme purity during isolation.",
            "Catalytic efficiency is quantified by the second-order rate constant ratio $k_{cat} / K_m$.",
            "The upper limit of catalytic efficiency is $10^8 - 10^9\\ \\text{M}^{-1}\\text{s}^{-1}$ (diffusion-controlled limit).",
            "Continuous clinical assays calculate IU/L from the millimolar extinction coefficient of NADH ($\epsilon_{340} = 6.22$)."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Spectrophotometric Kinetic Assay of Serum ALT/AST via Coupled NADH Reaction:<br>
Veterinary clinical biochemistry analyzers measure serum <strong>Alanine Aminotransferase (ALT)</strong> and <strong>Aspartate Aminotransferase (AST)</strong> using continuous-monitoring UV kinetic assays coupled to <strong>Lactate Dehydrogenase (LDH)</strong> or <strong>Malate Dehydrogenase (MDH)</strong>:<br>
$$\\text{Alanine} + \\alpha\\text{-Ketoglutarate} \\xrightarrow{\\text{ALT}} \\text{Pyruvate} + \\text{Glutamate}$$
$$\\text{Pyruvate} + \\mathbf{NADH} + H^+ \\xrightarrow{\\text{LDH}} \\text{Lactate} + \\mathbf{NAD^+}$$
Because reduced coenzyme $\\mathbf{NADH}$ absorbs UV light strongly at <strong>340 nm</strong> while oxidized $NAD^+$ has zero absorbance at this wavelength, the enzymatic velocity is tracked directly as a <strong>decrease in absorbance at 340 nm per minute ($\\Delta A_{340}/\\text{min}$)</strong>. The analyzer automatically multiplies $\\Delta A_{340}/\\text{min}$ by an assay calibration factor derived from the extinction coefficient of NADH ($\epsilon = 6,220\\ \\text{M}^{-1}\\text{cm}^{-1}$) to display patient serum ALT activity in <strong>U/L</strong>. Marked elevations (> 5-10× baseline) confirm acute hepatocellular necrosis.</p>""",
        "tables": [
            {
                "title": "Standard Units and Metrics of Enzyme Catalysis",
                "headers": ["Metric", "Standard Symbol", "Definition Formula", "Standard Units", "Diagnostic / Practical Meaning"],
                "rows": [
                    ["International Unit", "IU or U", "$\\mu\\text{mol substrate} / \\text{minute}$", "$\\mu\\text{mol/min}$", "Standard clinical diagnostic reporting unit (U/L)"],
                    ["Katal", "kat", "$\\text{moles substrate} / \\text{second}$", "$\\text{mol/s}$", "Official SI unit; $1\\ \\text{IU} = 16.67\\ n\\text{kat}$"],
                    ["Turnover Number", "$k_{cat}$", "$V_{max} / [E]_{total}$", "$\\text{seconds}^{-1}$ ($s^{-1}$)", "Molecules transformed per active site per second"],
                    ["Specific Activity", "Sp. Act.", "$\\text{Total Activity (IU)} / \\text{Total Protein (mg)}$", "IU/mg protein", "Primary measure of enzyme purity during isolation"],
                    ["Catalytic Efficiency", "$k_{cat} / K_m$", "Molecular speed relative to affinity", "$\\text{M}^{-1}\\text{s}^{-1}$", "Identifies preferred physiological substrate; diffusion limit"]
                ]
            },
            {
                "title": "Representative Turnover Numbers ($k_{cat}$) of Important Animal Enzymes",
                "headers": ["Enzyme", "Substrate Transformed", "Turnover Number ($k_{cat}$, $\\text{s}^{-1}$)", "Veterinary Biological Function"],
                "rows": [
                    ["Carbonic Anhydrase", "$CO_2 + H_2O \\rightleftharpoons H_2CO_3$", "600,000", "Erythrocyte respiration; rapid capillary gas transport"],
                    ["Catalase", "$2\\ H_2O_2 \\longrightarrow 2\\ H_2O + O_2$", "400,000", "Peroxisomal breakdown of toxic hydrogen peroxide"],
                    ["Acetylcholinesterase", "Acetylcholine $\\longrightarrow$ Acetate + Choline", "25,000", "Instant synaptic termination of nerve impulse transmission"],
                    ["Lactate Dehydrogenase", "Pyruvate + NADH $\\rightleftharpoons$ Lactate + $NAD^+$", "1,000", "Anaerobic glycolysis regeneration of $NAD^+$ in muscle"],
                    ["Lysozyme", "Bacterial peptidoglycan cleavage", "0.5", "Slow hydrolytic destruction of bacterial cell wall in secretions"]
                ]
            }
        ],
        "img": "",
        "tags": ["Enzyme Units", "International Unit", "Katal", "Turnover Number", "Specific Activity", "NADH", "Spectrophotometry"]
    },

    "u2-t06": {
        "summary": "Enzyme inhibitors are chemical agents that diminish catalytic rates via reversible (competitive, non-competitive, uncompetitive) or irreversible (suicide) mechanisms, while allosteric enzymes modulate metabolic pathways through cooperative, sigmoidal non-covalent effector interactions.",
        "desc": """<h4>1. Reversible Enzyme Inhibition</h4>
<p>Reversible inhibitors bind to enzymes via non-covalent interactions (hydrogen bonds, electrostatic bonds, hydrophobic forces) and can dissociate, restoring full enzymatic activity when the inhibitor is removed:</p>
<ul>
  <li><strong>1. Competitive Inhibition:</strong>
    <ul>
      <li><strong>Mechanism:</strong> The inhibitor is a structural analogue that closely resembles the substrate and <strong>competes directly for the active site</strong>. The inhibitor can bind only to the free enzyme ($E$), forming an inactive $EI$ complex.</li>
      <li><strong>Effect on Kinetics:</strong> Because high substrate concentrations can displace the inhibitor, <strong>$\mathbf{V_{max}}$ remains unchanged</strong>. However, more substrate is required to reach half-maximal velocity; therefore, <strong>$\mathbf{K_m}$ increases</strong> ($K_m' > K_m$, apparent affinity decreases).</li>
      <li><strong>Lineweaver-Burk Plot:</strong> Curves intersect on the Y-axis (identical $1/V_{max}$), with a steeper slope and X-intercept closer to the origin ($-1/K_m'$).</li>
      <li><strong>Veterinary Examples:</strong>
        <ul>
          <li><strong>Malonate</strong> competitively inhibits <em>Succinate Dehydrogenase</em> (structural analogue of succinate).</li>
          <li><strong>Sulfonamide antibiotics</strong> (Sulfadiazine) competitively inhibit bacterial <em>Dihydropteroate Synthase</em> (structural analogue of Para-Aminobenzoic Acid / PABA), blocking folate synthesis.</li>
          <li><strong>Ethanol / 4-Methylpyrazole (Fomepizole)</strong> competitively inhibits <em>Alcohol Dehydrogenase</em>, preventing toxic conversion of ethylene glycol (antifreeze) in dogs.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>2. Non-Competitive Inhibition:</strong>
    <ul>
      <li><strong>Mechanism:</strong> The inhibitor binds to an <strong>allosteric regulatory site distinct from the active site</strong>. It binds with equal affinity to either the free enzyme ($E$) or the enzyme-substrate complex ($ES$), forming inactive $EI$ and $ESI$ complexes. Substrate binding is not blocked, but catalysis cannot proceed.</li>
      <li><strong>Effect on Kinetics:</strong> Substrate cannot displace the inhibitor; therefore, the effective concentration of active enzyme is decreased: <strong>$\mathbf{V_{max}}$ decreases</strong>. Because the inhibitor does not interfere with substrate docking at the active site, <strong>$\mathbf{K_m}$ remains unchanged</strong>.</li>
      <li><strong>Lineweaver-Burk Plot:</strong> Curves intersect on the X-axis (identical $-1/K_m$), with a higher Y-intercept ($1/V_{max}'$).</li>
      <li><strong>Veterinary Examples:</strong> Heavy metals ($Pb^{2+}, Hg^{2+}, As^{3+}$) binding to sulfhydryl ($-SH$) groups of enzymes (e.g., Ferrochelatase in lead poisoning). Cyanide inhibiting Cytochrome c Oxidase.</li>
    </ul>
  </li>
  <li><strong>3. Uncompetitive Inhibition:</strong>
    <ul>
      <li><strong>Mechanism:</strong> The inhibitor binds <strong>exclusively to the pre-formed Enzyme-Substrate ($ES$) complex</strong> at a site created only upon substrate binding. Cannot bind to free enzyme.</li>
      <li><strong>Effect on Kinetics:</strong> Both <strong>$\mathbf{V_{max}}$ decreases and $\mathbf{K_m}$ decreases</strong> by identical proportional factors. The ratio $K_m / V_{max}$ remains constant.</li>
      <li><strong>Lineweaver-Burk Plot:</strong> Produces a series of <strong>parallel lines</strong> with identical slopes.</li>
      <li><strong>Veterinary Example:</strong> Inhibition of intestinal alkaline phosphatase by L-phenylalanine.</li>
    </ul>
  </li>
</ul>

<h4>2. Irreversible and Suicide (Mechanism-Based) Inhibition</h4>
<ul>
  <li><strong>Irreversible Inhibition:</strong> Inhibitor forms a permanent covalent bond with essential active-site amino acid side chains, permanently inactivating the enzyme. (e.g., Diisopropylfluorophosphate / DFP and Organophosphates covalently phosphorylating Serine in Acetylcholinesterase; Aspirin acetylating Serine in Cyclooxygenase).</li>
  <li><strong>Suicide Inhibition (Mechanism-Based Inactivation):</strong> A specialized form of irreversible inhibition where a relatively unreactive substrate analogue enters the active site. The enzyme's own catalytic machinery converts this analogue into a highly reactive chemical intermediate that attacks and forms a permanent covalent adduct with the active site, permanently killing the enzyme ('suicide').
    <ul>
      <li><strong>Allopurinol:</strong> Oxidized by <em>Xanthine Oxidase</em> to Alloxanthine (Oxypurinol), which coordinates irreversibly with molybdenum in the active site.</li>
      <li><strong>Clavulanic Acid:</strong> Suicide inhibitor of bacterial $\beta$-lactamase, co-administered with amoxicillin (Synulox) to overcome antibiotic resistance in veterinary medicine.</li>
    </ul>
  </li>
</ul>

<h4>3. Allosteric Enzymes</h4>
<p><strong>Allosteric enzymes</strong> possess one or more regulatory (allosteric) sites physically separate from the catalytic active site. They are multi-subunit, oligomeric proteins that do not obey standard Michaelis-Menten kinetics:</p>
<ul>
  <li><strong>Sigmoidal Saturation Curve:</strong> Velocity plotted against $[S]$ produces an <strong>S-shaped (sigmoidal) curve</strong> reflecting <strong>Positive Cooperativity</strong>: binding of a substrate molecule to one subunit induces a conformational transition that increases affinity across adjacent subunits.</li>
  <li><strong>Two Conformational States (MWC Model):</strong>
    <ul>
      <li><strong>$T$ (Tense) State:</strong> Low substrate affinity, constrained inactive conformation. Stabilized by <em>allosteric inhibitors (negative effectors)</em>.</li>
      <li><strong>$R$ (Relaxed) State:</strong> High substrate affinity, active relaxed conformation. Stabilized by <em>substrates and allosteric activators (positive effectors)</em>.</li>
    </ul>
  </li>
  <li><strong>Feedback (End-Product) Inhibition:</strong> The ultimate end-product of a multi-step biosynthetic pathway binds allosterically to the first committed regulatory enzyme, inhibiting it when cellular end-product levels are sufficient (e.g., CTP inhibiting Aspartate Transcarbamoylase / ATCase; ATP and Citrate allosterically inhibiting Phosphofructokinase-1 / PFK-1 in glycolysis).</li>
</ul>""",
        "eliteDesc": """<h4>Hill Equation and Hill Coefficient ($n_H$)</h4>
<p>Cooperativity in allosteric enzymes and multimeric binding proteins is quantified by the <strong>Hill Equation</strong>:</p>
$$\\log\\left(\\frac{\\theta}{1-\\theta}\\right) = n_H \\log [S] - \\log K_d$$
<ul>
  <li>$n_H = 1.0$: No cooperativity (standard hyperbolic Michaelis-Menten kinetics, e.g., Myoglobin).</li>
  <li>$n_H > 1.0$: <strong>Positive Cooperativity</strong> (binding of first substrate enhances subsequent binding; e.g., Hemoglobin $n_H \\approx 2.8$; Phosphofructokinase-1).</li>
  <li>$n_H < 1.0$: <strong>Negative Cooperativity</strong> (binding of first substrate reduces subsequent affinity).</li>
</ul>""",
        "keyPoints": [
            "Competitive inhibitors mimic the substrate and compete directly for the active center.",
            "In competitive inhibition, $V_{max}$ is unchanged, while $K_m$ increases ($K_m' > K_m$).",
            "Competitive inhibition can be completely overcome by adding excess substrate.",
            "Non-competitive inhibitors bind to an allosteric site on both free $E$ and $ES$ complex.",
            "In non-competitive inhibition, $V_{max}$ decreases, while $K_m$ remains unchanged.",
            "Uncompetitive inhibitors bind exclusively to the $ES$ complex, decreasing both $V_{max}$ and $K_m$ equally.",
            "On a Lineweaver-Burk plot: Competitive intersects at Y-axis; Non-competitive intersects at X-axis.",
            "Lineweaver-Burk plot of uncompetitive inhibition produces diagnostic parallel lines.",
            "Suicide inhibitors are metabolized by the target enzyme into an active covalent killer intermediate.",
            "Clavulanic acid is a suicide inhibitor of $\\beta$-lactamase; Allopurinol of xanthine oxidase.",
            "Allosteric enzymes display sigmoidal (S-shaped) saturation kinetics due to subunit cooperativity.",
            "Allosteric transitions switch between inactive T (Tense) and active R (Relaxed) conformational states."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Ethylene Glycol (Antifreeze) Poisoning in Canines and Felines:<br>
Ethylene glycol, the primary constituent of automotive antifreeze, has a sweet taste that makes it a frequent lethal toxicant in dogs and cats. Ethylene glycol itself is minimally toxic, but is metabolized in the liver by <strong>Alcohol Dehydrogenase (ADH)</strong> into glycoaldehyde, glycolic acid, and oxalic acid, causing severe high-anion-gap metabolic acidosis and acute renal tubular oxalate precipitation. Treatment requires immediate competitive inhibition of ADH using <strong>4-Methylpyrazole (Fomepizole)</strong> or high-dose <strong>Ethanol</strong>. Because ADH has a much lower $K_m$ (higher affinity) for ethanol and fomepizole than for ethylene glycol, ethanol competitively blocks the active site of ADH, allowing unchanged ethylene glycol to be excreted harmlessly in the urine.</p>""",
        "tables": [
            {
                "title": "Comprehensive Kinetic Diagnostic Summary of Reversible Enzyme Inhibition",
                "headers": ["Inhibition Type", "Inhibitor Binding Target", "Effect on $V_{max}$", "Effect on $K_m$", "Lineweaver-Burk Intersect", "Reversal by High $[S]$?"],
                "rows": [
                    ["Competitive", "Free Enzyme ($E$) only at Active Site", "<strong>Unchanged</strong>", "<strong>Increased</strong> ($K_m \\uparrow$)", "Intersects on Y-axis ($1/V_{max}$)", "Yes (100% reversed)"],
                    ["Non-Competitive", "Both Free $E$ and $ES$ Complex", "<strong>Decreased</strong> ($V_{max} \\downarrow$)", "<strong>Unchanged</strong>", "Intersects on X-axis ($-1/K_m$)", "No (cannot be overcome)"],
                    ["Uncompetitive", "$ES$ Complex exclusively", "<strong>Decreased</strong> ($V_{max} \\downarrow$)", "<strong>Decreased</strong> ($K_m \\downarrow$)", "Parallel lines (identical slope)", "No (cannot be overcome)"]
                ]
            },
            {
                "title": "Veterinary Pharmacological and Toxicological Enzyme Inhibitors",
                "headers": ["Inhibitor Compound", "Target Enzyme", "Type of Inhibition", "Veterinary Clinical Context"],
                "rows": [
                    ["Sulfadiazine", "Dihydropteroate Synthase", "Competitive (vs. PABA)", "Broad-spectrum antibacterial therapy"],
                    ["Fomepizole (4-MP)", "Alcohol Dehydrogenase", "Competitive (vs. Ethylene glycol)", "Antidote for canine antifreeze poisoning"],
                    ["Lead ($Pb^{2+}$)", "Ferrochelatase & ALAD", "Non-Competitive ($-SH$ binding)", "Lead toxicosis in calves (basophilic stippling, blindness)"],
                    ["Clavulanic Acid", "Bacterial $\\beta$-Lactamase", "Suicide / Mechanism-Based", "Synulox / Augmentin combination antibiotic therapy"],
                    ["Organophosphates", "Acetylcholinesterase", "Irreversible Covalent (Serine)", "Toxicosis in cattle/dogs; reversed by Pralidoxime (2-PAM)"]
                ]
            }
        ],
        "img": "",
        "tags": ["Enzyme Inhibition", "Competitive Inhibition", "Non-Competitive", "Allosteric Enzymes", "Ethylene Glycol", "Suicide Inhibition"]
    }
}
