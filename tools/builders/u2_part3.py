r"""
Unit 2 Part 3: Carbohydrate Metabolism
Topics: u2-t10 to u2-t14
"""

PART3 = {
    "u2-t10": {
        "summary": "Glycolysis (Embden-Meyerhof-Parnas pathway) is the universal cytosolic sequence of ten enzymatic reactions converting one molecule of glucose into two molecules of pyruvate, generating ATP via substrate-level phosphorylation under both aerobic and anaerobic conditions.",
        "desc": """<h4>1. Overview and Cellular Location</h4>
<p><strong>Glycolysis</strong> (from the Greek <em>glykys</em>, sweet; and <em>lysis</em>, splitting) takes place in the <strong>cytoplasm</strong> of all animal cells. It functions either aerobically (yielding pyruvate, which enters mitochondria) or anaerobically (yielding lactate when oxygen is absent or in cells devoid of mitochondria, such as mature mammalian erythrocytes).</p>

<h4>2. The Ten Enzymatic Steps of Glycolysis</h4>
<p>The pathway is divided into two distinct operational phases:</p>
<h5>Phase I: The Preparatory (Energy-Investment) Phase (Consumes 2 ATP)</h5>
<ol>
  <li><strong>Phosphorylation of Glucose:</strong> Glucose is phosphorylated to <strong>Glucose-6-Phosphate (G6P)</strong> by <strong>Hexokinase</strong> (all tissues, low $K_m$) or <strong>Glucokinase</strong> (liver/pancreas, high $K_m$), consuming <strong>1 ATP</strong>. Traps glucose inside the cell. <em>Irreversible Regulatory Step.</em></li>
  <li><strong>Isomerization of G6P:</strong> G6P is converted to <strong>Fructose-6-Phosphate (F6P)</strong> by <em>Phosphohexose Isomerase</em>.</li>
  <li><strong>Phosphorylation of F6P (The Committed Step):</strong> F6P is phosphorylated to <strong>Fructose-1,6-Bisphosphate (F1,6BP)</strong> by <strong>Phosphofructokinase-1 (PFK-1)</strong>, consuming the <strong>second ATP</strong>. <em>Primary rate-limiting, irreversible checkpoint of glycolysis.</em></li>
  <li><strong>Cleavage of F1,6BP:</strong> Cleaved by <em>Aldolase</em> into two triose phosphates: <strong>Glyceraldehyde-3-Phosphate (G3P)</strong> and <strong>Dihydroxyacetone Phosphate (DHAP)</strong>.</li>
  <li><strong>Isomerization of Triose Phosphates:</strong> DHAP is reversibly converted into a second molecule of G3P by <em>Triose Phosphate Isomerase</em>. (All subsequent steps occur in duplicate per original glucose molecule).</li>
</ol>

<h5>Phase II: The Pay-off (Energy-Generating) Phase (Produces 4 ATP + 2 NADH)</h5>
<ol start="6">
  <li><strong>Oxidation and Phosphorylation of G3P:</strong> G3P is oxidized and phosphorylated to <strong>1,3-Bisphosphoglycerate (1,3-BPG)</strong> by <em>Glyceraldehyde-3-Phosphate Dehydrogenase (GAPDH)</em>, reducing $NAD^+$ to <strong>$NADH + H^+$</strong> (yields 2 NADH per glucose). (Specifically inhibited by iodoacetate).</li>
  <li><strong>First Substrate-Level Phosphorylation:</strong> 1,3-BPG transfers a high-energy phosphate to ADP via <strong>Phosphoglycerate Kinase (PGK)</strong>, producing <strong>3-Phosphoglycerate (3-PG)</strong> and <strong>1 ATP</strong> (yields 2 ATP per glucose). Reversible reaction.</li>
  <li><strong>Shift of the Phosphate Group:</strong> 3-PG is isomerized to <strong>2-Phosphoglycerate (2-PG)</strong> by <em>Phosphoglycerate Mutase</em>.</li>
  <li><strong>Dehydration to High-Energy Enol:</strong> 2-PG is dehydrated to <strong>Phosphoenolpyruvate (PEP)</strong> by <strong>Enolase</strong>, creating a high-energy enol-phosphate bond. (Enolase is competitively inhibited by <strong>Sodium Fluoride [$NaF$]</strong>, used in veterinary grey-top blood collection tubes to arrest in vitro glycolysis).</li>
  <li><strong>Second Substrate-Level Phosphorylation:</strong> PEP transfers its phosphate to ADP via <strong>Pyruvate Kinase (PK)</strong>, generating <strong>Pyruvate</strong> and <strong>1 ATP</strong> (yields 2 ATP per glucose). <em>Irreversible Regulatory Step.</em></li>
</ol>

<h4>3. Regulation of Glycolysis</h4>
<p>Governed by three non-equilibrium, thermodynamically irreversible regulatory enzymes:</p>
<ul>
  <li><strong>1. Phosphofructokinase-1 (PFK-1):</strong> The master pacemaker. Allosterically inhibited by high energy signals (<strong>ATP, Citrate, $H^+$ [low pH]</strong>); allosterically activated by low energy signals (<strong>AMP, ADP</strong>) and potently by <strong>Fructose-2,6-Bisphosphate ($F2,6BP$)</strong>.</li>
  <li><strong>2. Hexokinase / Glucokinase:</strong> Hexokinase is inhibited by its product, G6P. Glucokinase is regulated by insulin induction and compartmental sequestration.</li>
  <li><strong>3. Pyruvate Kinase:</strong> Allosterically activated by F1,6BP (feed-forward activation); allosterically inhibited by ATP and Alanine. Phosphorylated (inactivated) by glucagon via PKA in the liver during fasting.</li>
</ul>

<h4>4. Fates of Pyruvate & Bioenergetics</h4>
<ul>
  <li><strong>Aerobic Glycolysis:</strong> Pyruvate enters the mitochondrial matrix and is converted to Acetyl-CoA by the Pyruvate Dehydrogenase Complex. The 2 cytosolic NADH enter the respiratory chain via the malate-aspartate shuttle (yielding $2 \\times 2.5 = 5\\ \\text{ATP}$) or glycerol-3-phosphate shuttle ($2 \\times 1.5 = 3\\ \\text{ATP}$).
  $$\\mathbf{\\text{Net Aerobic Yield (Glycolysis alone)} = 2\\ \\text{ATP (substrate-level)} + 5\\ \\text{ATP (from 2 NADH)} = \\mathbf{7\\ \\text{ATP (or 5 ATP)}}}$$
  </li>
  <li><strong>Anaerobic Glycolysis:</strong> Under anoxia or in mature erythrocytes, mitochondrial oxidation is impossible. To prevent glycolysis from arresting due to depletion of the cellular $NAD^+$ pool, <strong>Lactate Dehydrogenase (LDH)</strong> reduces Pyruvate to <strong>Lactate</strong>, re-oxidizing NADH back to $NAD^+$:
  $$\\text{Pyruvate} + \\text{NADH} + H^+ \\xrightleftharpoons{\\text{LDH}} \\text{L-Lactate} + \\text{NAD}^+$$
  $$\\mathbf{\\text{Net Anaerobic Yield} = \\mathbf{2\\ \\text{ATP per Glucose}}}$$
  </li>
</ul>""",
        "eliteDesc": """<h4>Reciprocal Allosteric Regulation by Fructose-2,6-Bisphosphate</h4>
<p>Fructose-2,6-bisphosphate ($F2,6BP$) is not a glycolytic intermediate; it is the master regulatory signal of carbohydrate flux. It is synthesized by <em>Phosphofructokinase-2 (PFK-2)</em> and degraded by <em>Fructose-2,6-Bisphosphatase (FBPase-2)</em>, both housed on a single tandem bifunctional polypeptide:</p>
<ul>
  <li><strong>Fed State (High Insulin):</strong> Dephosphorylation of the bifunctional enzyme activates PFK-2 and inactivates FBPase-2. Levels of $F2,6BP$ surge, potently activating PFK-1 and stimulating glycolysis.</li>
  <li><strong>Fasting State (High Glucagon):</strong> Protein Kinase A phosphorylates the enzyme, activating FBPase-2 and inactivating PFK-2. $F2,6BP$ levels plummet, relieving inhibition on FBPase-1 and shutting down glycolysis in favor of hepatic gluconeogenesis.</li>
</ul>""",
        "keyPoints": [
            "Glycolysis converts 1 glucose into 2 pyruvates in the cytoplasm of all animal cells.",
            "Preparatory phase consumes 2 ATP (Hexokinase and PFK-1 steps).",
            "PFK-1 catalyzes the primary rate-limiting, committed step of glycolysis.",
            "Pay-off phase produces 4 ATP via substrate-level phosphorylation and 2 NADH.",
            "Substrate-level phosphorylation occurs at Phosphoglycerate Kinase and Pyruvate Kinase.",
            "Enolase dehydrates 2-PG to PEP; inhibited by Sodium Fluoride ($NaF$) in grey-top tubes.",
            "PFK-1 is inhibited by ATP and Citrate; allosterically activated by AMP and Fructose-2,6-bisphosphate.",
            "Under aerobic conditions, glycolysis yields 7 ATP net (2 ATP + 2 NADH via malate shuttle).",
            "Under anaerobic conditions, LDH reduces pyruvate to lactate to regenerate $NAD^+$.",
            "Net yield of anaerobic glycolysis is strictly 2 ATP per molecule of glucose.",
            "Mature mammalian erythrocytes depend 100% on anaerobic glycolysis for ATP to power $Na^+/K^+$ pumps.",
            "Lactate exported from muscle and red cells is recycled back to glucose in liver via the Cori cycle."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Equine Acute Cecal Acidosis and Laminitis from Carbohydrate Overload:<br>
When a horse accidentally breaks into a feed room and consumes excessive grain (starch), the digestive capacity of the small intestinal amylase is overwhelmed. Large amounts of undigested starch spill into the cecum and large colon. Amylolytic cecal bacteria (e.g., <em>Streptococcus equinus, Lactobacillus</em>) undergo massive anaerobic glycolysis, converting glucose into enormous quantities of <strong>D- and L-Lactic Acid</strong>. The luminal pH plunges from a physiological 6.5–7.0 down to < 4.5. The acidic environment destroys Gram-negative cellulolytic flora, releasing massive amounts of <strong>Lipopolysaccharide (LPS)</strong> endotoxin and mucosal permeability factors into the circulation, precipitating severe systemic endotoxemia, circulatory collapse, and bilateral <strong>acute laminitis</strong> within 24–48 hours.</p>""",
        "tables": [
            {
                "title": "Bioenergetic Balance Sheet of Glycolysis per Molecule of Glucose",
                "headers": ["Reaction Step", "Enzyme Catalyzing Step", "High-Energy Compound Consumed / Produced", "Net ATP Yield (Aerobic)", "Net ATP Yield (Anaerobic)"],
                "rows": [
                    ["Glucose $\\rightarrow$ G6P", "Hexokinase / Glucokinase", "Consumes 1 ATP", "-1 ATP", "-1 ATP"],
                    ["F6P $\\rightarrow$ F1,6BP", "Phosphofructokinase-1 (PFK-1)", "Consumes 1 ATP", "-1 ATP", "-1 ATP"],
                    ["$2\\ \\text{G3P} \\rightarrow 2\\ (1,3\\text{-BPG})$", "G3P Dehydrogenase (GAPDH)", "Produces $2\\ \\text{NADH} + 2\\ H^+$", "+5.0 ATP (via shuttle)", "0 ATP ($NAD^+$ recycled by LDH)"],
                    ["$2\\ (1,3\\text{-BPG}) \\rightarrow 2\\ (3\\text{-PG})$", "Phosphoglycerate Kinase", "Substrate-level phosphorylation", "+2.0 ATP", "+2.0 ATP"],
                    ["$2\\ \\text{PEP} \\rightarrow 2\\ \\text{Pyruvate}$", "Pyruvate Kinase", "Substrate-level phosphorylation", "+2.0 ATP", "+2.0 ATP"],
                    ["<strong>Net Total Balance</strong>", "<strong>Complete Glycolytic Pathway</strong>", "<strong>Net Cellular Energy Output</strong>", "<strong>+7.0 ATP</strong> (or +5.0)", "<strong>+2.0 ATP</strong>"]
                ]
            },
            {
                "title": "Comparison of Aerobic vs. Anaerobic Glycolysis in Domestic Animals",
                "headers": ["Parameter", "Aerobic Glycolysis", "Anaerobic Glycolysis"],
                "rows": [
                    ["End Product", "2 Pyruvate molecules", "2 L-Lactate molecules"],
                    ["Terminal Electron Acceptor", "Molecular Oxygen ($O_2$) via mitochondrial ETC", "Pyruvate (reduced by LDH)"],
                    ["$NAD^+$ Regeneration", "NADH transfers electrons into mitochondria via shuttles", "Cytoplasmic reduction of pyruvate to lactate by LDH"],
                    ["Net Energy Yield", "7 ATP (or 5 ATP) per glucose", "Exactly 2 ATP per glucose"],
                    ["Typical Animal Tissues", "Resting skeletal muscle, liver, brain, myocardium", "Mature erythrocytes, vigorously sprinting muscle, renal medulla"]
                ]
            }
        ],
        "img": "",
        "tags": ["Glycolysis", "PFK-1", "Pyruvate", "Lactate", "Substrate-Level Phosphorylation", "Fluoride", "Bioenergetics"]
    },

    "u2-t11": {
        "summary": "The Krebs cycle (Citric Acid / TCA cycle) is the central amphibolic mitochondrial hub of cellular respiration, oxidizing acetyl-CoA derived from carbohydrates, fatty acids, and amino acids to yield reducing equivalents (NADH, FADH2), GTP, and metabolic biosynthetic precursors.",
        "desc": """<h4>1. The Bridge Step: Pyruvate Dehydrogenase (PDH) Complex</h4>
<p>Before pyruvate enters the Krebs cycle, it is transported into the mitochondrial matrix and converted to <strong>Acetyl-CoA</strong> by the <strong>Pyruvate Dehydrogenase Multi-Enzyme Complex (PDH)</strong> in a multi-step irreversible reaction known as <strong>oxidative decarboxylation</strong>:</p>
$$\\text{Pyruvate} + \\text{NAD}^+ + \\text{CoA-SH} \\xrightarrow{\\text{PDH Complex}} \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH} + H^+ \\quad (\\Delta G^{\\circ\\prime} = -33.4\\ \\text{kJ/mol})$$
<ul>
  <li><strong>Structure of the Complex:</strong> A massive oligomer of three distinct catalytic enzymes:
    <ol>
      <li><strong>$E_1$ (Pyruvate Dehydrogenase / Decarboxylase):</strong> Contains <strong>Thiamine Pyrophosphate (TPP)</strong>. Releases $CO_2$ and forms hydroxyethyl-TPP.</li>
      <li><strong>$E_2$ (Dihydrolipoyl Transacetylase):</strong> Contains covalently attached <strong>Lipoic Acid (Lipoamide)</strong> and uses <strong>Coenzyme A (CoA-SH)</strong>. Transacetylates the acetyl group to CoA, forming Acetyl-CoA.</li>
      <li><strong>$E_3$ (Dihydrolipoyl Dehydrogenase):</strong> Contains <strong>FAD</strong> and uses <strong>$NAD^+$</strong>. Re-oxidizes reduced dihydrolipoamide, transferring electrons through $FAD$ to $NAD^+$, generating NADH.</li>
    </ol>
  </li>
  <li><strong>Five Coenzymes Required:</strong> <strong>TPP</strong> ($B_1$), <strong>Lipoic acid</strong>, <strong>Coenzyme A</strong> ($B_5$), <strong>FAD</strong> ($B_2$), and <strong>$NAD^+$</strong> ($B_3$). <em>(Mnemonic: <strong>T</strong>ender <strong>L</strong>oving <strong>C</strong>are <strong>F</strong>or <strong>N</strong>utrition).</em></li>
  <li><strong>PDH Regulation:</strong> Inactivated by reversible phosphorylation catalyzed by <em>PDH Kinase</em> (stimulated by ATP, Acetyl-CoA, NADH); activated by dephosphorylation catalyzed by <em>PDH Phosphatase</em> (stimulated by $Ca^{2+}$, especially during muscle contraction, and insulin). Arsenite toxicosis specifically complexes with lipoamide sulfhydryl groups, completely paralyzing PDH.</li>
</ul>

<h4>2. The Eight Enzymatic Reactions of the Krebs Cycle</h4>
<ol>
  <li><strong>Condensation:</strong> Acetyl-CoA ($2C$) condenses with Oxaloacetate ($4C$) via <strong>Citrate Synthase</strong> to form <strong>Citrate ($6C$)</strong>, releasing free CoA-SH. Driven by thioester hydrolysis ($\Delta G^{\circ\\prime} = -31.5\\ \\text{kJ/mol}$). Irreversible.</li>
  <li><strong>Isomerization:</strong> Citrate is isomerized to <strong>Isocitrate ($6C$)</strong> by <em>Aconitase</em> via the enzyme-bound intermediate <em>cis-aconitate</em>. (Competitively inhibited by <strong>Fluorocitrate</strong> in fluoroacetate / 1080 pesticide poisoning).</li>
  <li><strong>First Oxidative Decarboxylation:</strong> Isocitrate is oxidized and decarboxylated to <strong>$\\alpha$-Ketoglutarate ($5C$)</strong> by <strong>Isocitrate Dehydrogenase (ICDH)</strong>, releasing <strong>$CO_2$</strong> and generating the <strong>first NADH</strong>. Major rate-limiting checkpoint.</li>
  <li><strong>Second Oxidative Decarboxylation:</strong> $\alpha$-Ketoglutarate is converted to <strong>Succinyl-CoA ($4C$)</strong> by the <strong>$\\alpha$-Ketoglutarate Dehydrogenase Complex</strong>, releasing the <strong>second $CO_2$</strong> and generating the <strong>second NADH</strong>. Identical multienzyme mechanism and 5 cofactors as PDH. Irreversible.</li>
  <li><strong>Substrate-Level Phosphorylation:</strong> Succinyl-CoA is cleaved to <strong>Succinate ($4C$)</strong> by <strong>Succinate Thiokinase (Succinyl-CoA Synthetase)</strong>, driving the phosphorylation of GDP to <strong>GTP</strong> (which equilibrates with ATP via nucleoside diphosphate kinase) and releasing CoA-SH.</li>
  <li><strong>Dehydrogenation to Fumarate:</strong> Succinate is oxidized to <strong>Fumarate ($4C$)</strong> by <strong>Succinate Dehydrogenase (Complex II)</strong>, transferring electrons directly to enzyme-bound <strong>FAD</strong>, producing <strong>$FADH_2$</strong>. (Competitively inhibited by Malonate).</li>
  <li><strong>Hydration:</strong> Fumarate is stereospecifically hydrated across the trans double bond to <strong>L-Malate ($4C$)</strong> by <em>Fumarase</em>.</li>
  <li><strong>Regeneration of Oxaloacetate:</strong> L-Malate is oxidized back to <strong>Oxaloacetate ($4C$)</strong> by <strong>Malate Dehydrogenase (MDH)</strong>, generating the <strong>third NADH</strong>, completing the cyclic loop.</li>
</ol>

<h4>3. Bioenergetics and ATP Yield per Acetyl-CoA</h4>
<p>Each turn of the Krebs cycle consumes one Acetyl-CoA and generates:</p>
<ul>
  <li>$3\\ \\text{NADH} \\times 2.5\\ \\text{ATP} = \\mathbf{7.5\\ \\text{ATP}}$</li>
  <li>$1\\ FADH_2 \\times 1.5\\ \\text{ATP} = \\mathbf{1.5\\ \\text{ATP}}$</li>
  <li>$1\\ \\text{GTP} (\\text{Substrate-level}) = \\mathbf{1.0\\ \\text{ATP}}$</li>
  <li><strong>Total ATP Yield per Acetyl-CoA = 10.0 ATP</strong></li>
  <li><em>Complete Oxidation of 1 Glucose (Aerobic):</em> Glycolysis (7 ATP) + 2 PDH (5 ATP) + 2 Krebs cycles ($2 \\times 10 = 20\\ \\text{ATP}$) = <strong>32 ATP net</strong>.</li>
</ul>

<h4>4. The Amphibolic Nature and Anaplerotic Reactions</h4>
<p>The Krebs cycle is <strong>amphibolic</strong>—it functions in both <strong>catabolism</strong> (oxidative combustion of fuels) and <strong>anabolism</strong> (supplying carbon intermediates for biosynthesis):</p>
<ul>
  <li>Citrate $\\rightarrow$ Fatty acid and cholesterol synthesis.</li>
  <li>$\alpha$-Ketoglutarate $\\rightarrow$ Glutamate, glutamine, and other amino acids.</li>
  <li>Succinyl-CoA $\\rightarrow$ Heme and porphyrin synthesis.</li>
  <li>Oxaloacetate $\\rightarrow$ Aspartate and glucose synthesis (gluconeogenesis).</li>
</ul>
<p>Because biosynthetic pathways continuously siphon off TCA cycle intermediates (<strong>cataplerosis</strong>), the cell must replenish them via <strong>Anaplerotic (filling-up) Reactions</strong>:</p>
<ul>
  <li><strong>Pyruvate Carboxylase (Primary anaplerotic enzyme):</strong> Carboxylates pyruvate to oxaloacetate in mitochondria:
  $$\\text{Pyruvate} + CO_2 + \\text{ATP} \\xrightarrow{\\text{Pyruvate Carboxylase (Biotin)}} \\text{Oxaloacetate} + \\text{ADP} + P_i$$
  Allosterically activated by Acetyl-CoA. Essential in ruminants and lactating dairy cows.</li>
</ul>""",
        "eliteDesc": """<h4>Toxic Mechanism of Fluoroacetate Poisoning ('1080' Toxicosis)</h4>
<p>Sodium monofluoroacetate (Compound 1080, used as a rodenticide and found in toxic plants like <em>Dichapetalum</em>) is a classic example of <strong>Lethal Synthesis</strong>: Fluoroacetate is chemically harmless until it enters the cell and is converted by Citrate Synthase into <strong>Fluorocitrate</strong>. Fluorocitrate acts as a tight-binding suicide inhibitor of <strong>Aconitase</strong>, completely freezing the Krebs cycle. Cellular citrate accumulates to massive concentrations in the brain and heart. Severe citrate chelation of ionized calcium triggers tetany, violent seizures, cardiac arrhythmias, and respiratory paralysis in dogs and grazing livestock.</p>""",
        "keyPoints": [
            "PDH complex oxidatively decarboxylates pyruvate to Acetyl-CoA in the mitochondrial matrix.",
            "PDH contains 3 enzymes (E1, E2, E3) and requires 5 coenzymes: TPP, Lipoate, CoA, FAD, NAD+.",
            "PDH is inhibited by ATP, NADH, and Acetyl-CoA; activated by $Ca^{2+}$ and insulin.",
            "Citrate synthase condenses Oxaloacetate ($4C$) and Acetyl-CoA ($2C$) into Citrate ($6C$).",
            "Aconitase isomerizes citrate to isocitrate; inhibited by fluorocitrate in '1080' poisoning.",
            "Two oxidative decarboxylation steps release $2\\ CO_2$ (Isocitrate DH and $\\alpha$-Ketoglutarate DH).",
            "Succinate thiokinase catalyzes substrate-level phosphorylation, generating 1 GTP (1 ATP).",
            "Succinate dehydrogenase (Complex II) generates $1\\ FADH_2$; inhibited by Malonate.",
            "Each turn of the Krebs cycle generates $3\\ \\text{NADH}, 1\\ FADH_2,$ and $1\\ \\text{GTP} = \\mathbf{10\\ \\text{ATP}}$.",
            "Complete aerobic oxidation of 1 molecule of glucose yields 32 net ATP.",
            "The cycle is amphibolic: provides intermediates for heme, fatty acids, and amino acids.",
            "Pyruvate carboxylase is the primary anaplerotic enzyme, replenishing oxaloacetate."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Polioencephalomalacia (PEM / Cerebrocortical Necrosis) in Ruminants:<br>
In feedlot cattle and sheep fed high-concentrate rations or grazing pastures with high sulfur content, thiamine (Vitamin $B_1$) deficiency can develop acutely due to the proliferation of ruminal bacteria (e.g., <em>Paenibacillus thiaminolyticus</em>) producing thiaminase enzymes. Without <strong>Thiamine Pyrophosphate (TPP)</strong>, both <strong>Pyruvate Dehydrogenase (PDH)</strong> and <strong>$\\alpha$-Ketoglutarate Dehydrogenase</strong> are paralyzed. Because the cerebral cortex relies entirely on glucose oxidation via the PDH-Krebs cycle pathway for ATP, neurons suffer acute energy failure. Cattle develop severe cerebrocortical necrosis manifesting as <strong>star-gazing, opisthotonos, bilateral blindness, ataxia, and paddling convulsions</strong>. Post-mortem brain examination under UV light reveals pathognomonic autofluorescence of necrotic cerebral gray matter. Prompt IV thiamine administration produces dramatic clinical recovery if administered before irreversible cortical cavitation occurs.</p>""",
        "tables": [
            {
                "title": "Enzymatic Steps, Redox Products, and Energetics of the Citric Acid Cycle",
                "headers": ["Step / Reaction", "Enzyme", "Coenzymes / Cofactors", "High-Energy Product Generated", "Equivalent ATP Formed"],
                "rows": [
                    ["Acetyl-CoA + OAA $\\rightarrow$ Citrate", "Citrate Synthase", "None (Thioester hydrolysis)", "None (Exergonic driving step)", "0"],
                    ["Citrate $\\rightleftharpoons$ Isocitrate", "Aconitase", "$[4Fe-4S]$ cluster", "None", "0"],
                    ["Isocitrate $\\rightarrow \\alpha$-KG + $CO_2$", "Isocitrate Dehydrogenase", "$NAD^+, Mg^{2+}$", "$1\\ \\text{NADH} + H^+$", "2.5 ATP"],
                    ["$\\alpha$-KG $\\rightarrow$ Succinyl-CoA + $CO_2$", "$\\alpha$-Ketoglutarate DH", "TPP, Lipoate, CoA, FAD, $NAD^+$", "$1\\ \\text{NADH} + H^+$", "2.5 ATP"],
                    ["Succinyl-CoA $\\rightarrow$ Succinate", "Succinate Thiokinase", "GDP, $P_i, Mg^{2+}$", "1 GTP (Substrate-level)", "1.0 ATP"],
                    ["Succinate $\\rightarrow$ Fumarate", "Succinate Dehydrogenase", "FAD, Fe-S clusters", "$1\\ FADH_2$", "1.5 ATP"],
                    ["Fumarate $\\rightarrow$ L-Malate", "Fumarase", "None (Stereospecific hydration)", "None", "0"],
                    ["L-Malate $\\rightarrow$ Oxaloacetate", "Malate Dehydrogenase", "$NAD^+$", "$1\\ \\text{NADH} + H^+$", "2.5 ATP"],
                    ["<strong>Total per Acetyl-CoA</strong>", "<strong>Full TCA Cycle Turn</strong>", "<strong>3 NADH + 1 FADH2 + 1 GTP</strong>", "<strong>Release of 2 CO2</strong>", "<strong>10.0 ATP</strong>"]
                ]
            },
            {
                "title": "Anaplerotic (Replenishing) Reactions of the Citric Acid Cycle",
                "headers": ["Anaplerotic Enzyme", "Substrates", "Product Replenishing TCA", "Tissue Distribution", "Regulatory Effector"],
                "rows": [
                    ["Pyruvate Carboxylase", "Pyruvate + $CO_2$ + ATP", "Oxaloacetate (OAA)", "Liver, kidney, mammary gland", "Allosterically activated by Acetyl-CoA"],
                    ["Glutamate Dehydrogenase", "Glutamate + $NAD(P)^+$", "$\\alpha$-Ketoglutarate", "Liver, muscle mitochondria", "Inhibited by GTP/ATP; activated by ADP"],
                    ["Propionyl-CoA Carboxylase", "Propionate + $CO_2$ + ATP", "Succinyl-CoA", "Ruminant liver (massive flux)", "Biotin and Vitamin $B_{12}$ dependent"],
                    ["Aspartate Aminotransferase", "Aspartate + $\\alpha$-KG", "Oxaloacetate + Glutamate", "All animal tissues (cytosol/matrix)", "Reversible equilibrium"]
                ]
            }
        ],
        "img": "",
        "tags": ["Krebs Cycle", "TCA Cycle", "PDH Complex", "Pyruvate", "Anaplerosis", "PEM", "Bioenergetics"]
    },

    "u2-t12": {
        "summary": "The Hexose Monophosphate (HMP) Shunt is a multi-functional cytosolic glucose-oxidizing pathway that generates NADPH for reductive biosynthetic pathways and antioxidant defenses, alongside ribose-5-phosphate for nucleotide synthesis, without generating or consuming ATP.",
        "desc": """<h4>1. Overview and Metabolic Purpose</h4>
<p>The <strong>Hexose Monophosphate (HMP) Shunt</strong>—also designated as the <strong>Pentose Phosphate Pathway (PPP)</strong> or <em>Phosphogluconate Pathway</em>—is an alternative cytosolic pathway for glucose catabolism. Unlike glycolysis, the HMP shunt:</p>
<ul>
  <li>Does <strong>not produce or consume any ATP</strong>.</li>
  <li>Does <strong>not oxidize glucose completely to $CO_2$</strong> for energy.</li>
  <li>Produces <strong>NADPH</strong> (the high-energy reducing currency for reductive anabolism and antioxidant maintenance).</li>
  <li>Synthesizes <strong>Ribose-5-Phosphate</strong>, the essential structural building block for RNA, DNA, ATP, $NAD^+$, FAD, and CoA.</li>
  <li>Operates with exceptionally high activity in tissues engaged in active lipid biosynthesis: <strong>lactating mammary gland, adipose tissue, liver, adrenal cortex</strong>, and <strong>erythrocytes</strong>.</li>
</ul>

<h4>2. The Two Phases of the HMP Shunt</h4>
<h5>Phase I: The Oxidative Irreversible Phase (Generates 2 NADPH)</h5>
<ol>
  <li><strong>First Dehydrogenation:</strong> Glucose-6-Phosphate (G6P) is oxidized at C-1 by <strong>Glucose-6-Phosphate Dehydrogenase (G6PD)</strong> to form <em>6-Phosphoglucono-$\delta$-lactone</em>, reducing $NADP^+$ to <strong>the first NADPH</strong>.
    <p><em>G6PD is the primary rate-limiting, committed regulatory enzyme of the pathway. It is strictly regulated by the availability of $NADP^+$ (allosterically inhibited by a high NADPH/$NADP^+$ ratio).</em></p>
  </li>
  <li><strong>Hydrolysis:</strong> 6-Phosphoglucono-$\delta$-lactone is hydrolyzed by <em>Gluconolactonase</em> to form <strong>6-Phosphogluconate</strong>.</li>
  <li><strong>Oxidative Decarboxylation:</strong> 6-Phosphogluconate is oxidized and decarboxylated by <strong>6-Phosphogluconate Dehydrogenase</strong> to form the pentose sugar <strong>Ribulose-5-Phosphate</strong>, releasing <strong>$CO_2$</strong> and generating <strong>the second NADPH</strong>.</li>
</ol>
<p><strong>Net of Phase I per G6P:</strong> $\\text{G6P} + 2\\ \\text{NADP}^+ + H_2O \\longrightarrow \\text{Ribulose-5-P} + \\mathbf{2\\ \\text{NADPH}} + 2\\ H^+ + \\mathbf{CO_2}$.</p>

<h5>Phase II: The Non-Oxidative Reversible Phase (Sugar Interconversions)</h5>
<p>Ribulose-5-phosphate is reversibly isomerized to <strong>Ribose-5-Phosphate</strong> (by <em>Phosphopentose Isomerase</em>) or epimerized to <strong>Xylulose-5-Phosphate</strong> (by <em>Phosphopentose Epimerase</em>). These pentoses are then shuffled into glycolytic intermediates ($F6P$ and $G3P$) via two key enzymes:</p>
<ul>
  <li><strong>1. Transketolase:</strong> Transfers a <strong>2-carbon glycoaldehyde unit</strong> from a ketose donor to an aldose acceptor. Requires <strong>Thiamine Pyrophosphate (TPP)</strong> and $Mg^{2+}$ as an obligate coenzyme. (Measuring erythrocyte transketolase activity before and after adding TPP in vitro is the gold-standard laboratory assay for Vitamin $B_1$ nutritional status in domestic animals).</li>
  <li><strong>2. Transaldolase:</strong> Transfers a <strong>3-carbon dihydroxyacetone unit</strong> from Sedoheptulose-7-phosphate to Glyceraldehyde-3-phosphate to form Fructose-6-phosphate and Erythrose-4-phosphate.</li>
</ul>

<h4>3. Physiological and Biochemical Roles of NADPH</h4>
<p>NADPH differs from NADH by a single phosphate group at the 2'-position of adenosine, yet their metabolic functions are completely segregated: <strong>$NAD^+$ is reserved for catabolic energy generation; NADPH is reserved for reductive biosynthesis and cellular defense:</strong></p>
<ol>
  <li><strong>Reductive Biosynthesis of Lipids:</strong> De novo synthesis of fatty acids (in lactating mammary gland and adipose tissue) and cholesterol/steroid hormones (in adrenal cortex and gonads) requires massive quantities of NADPH.</li>
  <li><strong>Erythrocyte Protection Against Hemolysis:</strong> Mature red blood cells lack mitochondria and depend entirely on the HMP shunt as their <strong>sole source of NADPH</strong>. NADPH is required by <strong>Glutathione Reductase</strong> to maintain cellular glutathione in its active reduced state (<strong>$GSH$</strong>):
  $$\\text{GSSG (Oxidized)} + \\mathbf{NADPH} + H^+ \\xrightarrow{\\text{Glutathione Reductase}} 2\\ \\mathbf{GSH (Reduced)} + \\text{NADP}^+$$
  Reduced glutathione then reduces dangerous hydrogen peroxide ($H_2O_2$) and lipid peroxides to harmless water via <strong>Glutathione Peroxidase</strong> (a selenium-containing enzyme):
  $$2\\ \\text{GSH} + H_2O_2 \\xrightarrow{\\text{Glutathione Peroxidase (Selenium)}} \\text{GSSG} + 2\\ H_2O$$
  Without NADPH, $H_2O_2$ accumulates, oxidizing hemoglobin into Heinz bodies and lysing erythrocyte membranes.</li>
  <li><strong>Phagocytic Respiratory Burst (Immunity):</strong> Neutrophils and macrophages use <strong>NADPH Oxidase</strong> to reduce molecular oxygen into superoxide radicals ($O_2^{\\cdot-}$), generating hypochlorous acid ($HOCl$) to destroy phagocytosed bacteria.</li>
  <li><strong>Hepatic Cytochrome P450 Detoxification:</strong> Powers microsomal hydroxylation of drugs, toxins, and steroids.</li>
</ol>""",
        "eliteDesc": """<h4>Four Metabolic Operating Modes of the Pentose Phosphate Pathway</h4>
<p>Because the non-oxidative reactions are freely reversible, the HMP shunt operates in four flexible metabolic modes based on cellular requirements for NADPH versus Ribose-5-Phosphate:</p>
<ol>
  <li><strong>Mode 1 (Need much more Ribose-5-P than NADPH):</strong> In rapidly dividing cells; glycolysis generates F6P and G3P, which transketolase and transaldolase convert backward into Ribose-5-P without running the oxidative phase.</li>
  <li><strong>Mode 2 (Need both NADPH and Ribose-5-P equally):</strong> Oxidative phase runs to generate 2 NADPH and Ribulose-5-P, which is converted to Ribose-5-P for DNA/RNA synthesis.</li>
  <li><strong>Mode 3 (Need much more NADPH than Ribose-5-P):</strong> In lactating mammary gland and adipose tissue; G6P runs through the oxidative phase, generating NADPH; the pentoses are recycled by transketolase back into F6P, which is converted to G6P for repeated oxidation until all carbons are released as $6\\ CO_2$.</li>
  <li><strong>Mode 4 (Need NADPH and ATP simultaneously):</strong> Pentoses generated by the oxidative phase are converted into F6P and G3P, which enter glycolysis to generate pyruvate and ATP.</li>
</ol>""",
        "keyPoints": [
            "HMP Shunt is an alternative cytosolic pathway producing NADPH and Ribose-5-phosphate.",
            "The pathway generates zero ATP and consumes zero ATP.",
            "Operates with high activity in lactating mammary gland, adipose, liver, and red blood cells.",
            "Phase I is oxidative and irreversible, catalyzed by G6PD and 6-phosphogluconate dehydrogenase.",
            "G6PD is the primary rate-limiting enzyme; inhibited allosterically by high NADPH/NADP+ ratio.",
            "Oxidative phase yields 2 NADPH and 1 $CO_2$ per molecule of Glucose-6-phosphate oxidized.",
            "Phase II is non-oxidative and reversible, shuffling pentose carbons via transketolase and transaldolase.",
            "Transketolase requires Thiamine Pyrophosphate (TPP); used as an assay for Vitamin $B_1$ status.",
            "NADPH provides reducing power for de novo fatty acid and steroid biosynthesis.",
            "In erythrocytes, NADPH is obligate for Glutathione Reductase to regenerate reduced glutathione ($GSH$).",
            "Glutathione Peroxidase contains Selenium, detoxifying toxic hydrogen peroxide ($H_2O_2$) into water.",
            "Neutrophils utilize NADPH in the respiratory burst to generate antimicrobial superoxide radicals."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Enzootic Nutritional Muscular Dystrophy (White Muscle Disease) and Erythrocyte Fragility:<br>
In calves, lambs, and goat kids raised on soils deficient in <strong>Selenium</strong> and Vitamin E (widespread in volcanic and acidic soil regions of India and globally), the protective antioxidant tandem of the HMP shunt collapses. <strong>Glutathione Peroxidase</strong> requires four selenium atoms per tetramer. Even with adequate NADPH from the HMP shunt, deficient glutathione peroxidase cannot reduce cellular peroxides ($H_2O_2$). In skeletal and cardiac muscle, unchecked free radicals peroxidize mitochondrial and sarcolemmal membranes, causing massive calcium influx, myofibrillar necrosis, and chalky white calcified streaks in muscle bundles (<strong>White Muscle Disease</strong>). Concurrently, erythrocytes exhibit severe membrane fragility and intravascular hemolysis. Prophylaxis requires subcutaneous sodium selenite and alpha-tocopherol injection to pregnant dams and newborn stock.</p>""",
        "tables": [
            {
                "title": "Comparison of Glycolysis vs. Hexose Monophosphate Shunt",
                "headers": ["Feature", "Glycolysis (EMP Pathway)", "Hexose Monophosphate (HMP) Shunt"],
                "rows": [
                    ["Cellular Location", "Cytoplasm of all animal cells", "Cytoplasm of specialized lipogenic tissues & RBCs"],
                    ["Primary Biological Goal", "Generate ATP for cellular energy", "Generate NADPH (biosynthesis) and Ribose-5-P"],
                    ["ATP Generation", "Generates net 2 ATP (anaerobic) or 7 ATP (aerobic)", "<strong>Zero ATP generated or consumed</strong>"],
                    ["Redox Coenzyme Reduced", "$NAD^+ \\longrightarrow \\text{NADH}$ (catabolic energy)", "$NADP^+ \\longrightarrow \\text{NADPH}$ (reductive anabolism)"],
                    ["Carbon Dioxide ($CO_2$) Release", "No $CO_2$ released", "Releases $1\\ CO_2$ per G6P (oxidative decarboxylation)"],
                    ["Key Rate-Limiting Enzyme", "Phosphofructokinase-1 (PFK-1)", "Glucose-6-Phosphate Dehydrogenase (G6PD)"]
                ]
            },
            {
                "title": "Distinct Biochemical Roles of NADH vs. NADPH in Domestic Animals",
                "headers": ["Coenzyme", "Structure", "Primary Cellular Compartment", "Intracellular Ratio", "Primary Metabolic Role"],
                "rows": [
                    ["NADH", "Nicotinamide adenine dinucleotide", "Mitochondrial matrix & Cytosol", "High $NAD^+ / NADH$ ratio (~700 : 1)", "Catabolism; transfers electrons to ETC Complex I to generate ATP"],
                    ["NADPH", "Phosphorylated at 2'-adenosine", "Cytosol exclusively", "High $NADPH / NADP^+$ ratio (~100 : 1)", "Anabolism; fatty acid synthesis, $GSH$ regeneration, drug hydroxylation"]
                ]
            }
        ],
        "img": "",
        "tags": ["HMP Shunt", "G6PD", "NADPH", "Glutathione", "Transketolase", "Selenium", "White Muscle Disease"]
    },

    "u2-t13": {
        "summary": "Gluconeogenesis is the anabolic synthesis of glucose from non-carbohydrate precursors—predominantly propionate in ruminants, alongside lactate, glycerol, and glucogenic amino acids—reversing glycolysis through four unique bypass enzymes to sustain blood glucose homeostasis during fasting, high lactation, and the Cori cycle.",
        "desc": """<h4>1. Biological Importance of Gluconeogenesis</h4>
<p><strong>Gluconeogenesis</strong> is the enzymatic pathway that synthesizes glucose from non-carbohydrate carbon precursors. It occurs predominantly in the <strong>liver (~90%)</strong> and to a lesser extent in the renal cortex (~10%). It is essential because:</p>
<ul>
  <li>Brain tissue, erythrocytes, renal medulla, and the lactating mammary gland have an absolute, continuous dependency on glucose as an obligate metabolic fuel or lactose precursor.</li>
  <li>Whole-body glycogen reserves in the liver are depleted within 12–24 hours of fasting.</li>
  <li><strong>The Ruminant Mandate:</strong> Adult ruminants (cattle, buffaloes, sheep, goats) absorb virtually zero glucose from the digestive tract due to complete microbial fermentation in the rumen. Consequently, <strong>gluconeogenesis operates at maximal, continuous rates at all times in ruminants</strong> (even immediately after feeding), synthesizing over 90% of circulating blood glucose.</li>
</ul>

<h4>2. Major Gluconeogenic Substrates</h4>
<ol>
  <li><strong>Propionate:</strong> The single most important gluconeogenic precursor in ruminants (contributing 60–80% of total glucose). Converted into Succinyl-CoA via propionyl-CoA carboxylase (biotin) and methylmalonyl-CoA mutase (Vitamin $B_{12}$).</li>
  <li><strong>Lactate:</strong> Exported by anaerobic erythrocytes and sprinting skeletal muscle; delivered to the liver and converted to pyruvate by Lactate Dehydrogenase (the <strong>Cori Cycle</strong>).</li>
  <li><strong>Glycerol:</strong> Released from adipose tissue triacylglycerol lipolysis. Phosphorylated by hepatic <em>Glycerol Kinase</em> to glycerol-3-phosphate, then oxidized to DHAP.</li>
  <li><strong>Glucogenic Amino Acids:</strong> Released during muscle protein turnover (primarily <strong>Alanine</strong> via the <em>Glucose-Alanine Cycle</em> and Glutamine). All amino acids except leucine and lysine can yield glucose.</li>
</ol>

<h4>3. The Four Bypass Enzymes (Overcoming Glycolysis Checkpoints)</h4>
<p>Seven reactions of glycolysis are reversible and shared. The three thermodynamically irreversible steps of glycolysis are bypassed by four unique gluconeogenic enzymes:</p>
<h5>Bypass 1: Pyruvate to Phosphoenolpyruvate (Bypasses Pyruvate Kinase)</h5>
<ol>
  <li><strong>Pyruvate Carboxylase (Mitochondrial Matrix):</strong> Pyruvate is carboxylated to <strong>Oxaloacetate (OAA)</strong>, consuming <strong>1 ATP</strong>. Requires covalently bound <strong>Biotin</strong> and $Mg^{2+}$. Allosterically activated by <strong>Acetyl-CoA</strong>.
  $$\\text{Pyruvate} + CO_2 + \\text{ATP} \\xrightarrow{\\text{Pyruvate Carboxylase}} \\text{Oxaloacetate} + \\text{ADP} + P_i$$
  <em>Malate Shuttle:</em> The inner mitochondrial membrane lacks an OAA transporter. OAA is reduced to Malate by mitochondrial MDH, exported to cytosol via the dicarboxylate carrier, and re-oxidized to OAA by cytosolic MDH.</li>
  <li><strong>Phosphoenolpyruvate Carboxykinase (PEPCK, Cytosolic/Mitochondrial):</strong> Decarboxylates and phosphorylates OAA to <strong>Phosphoenolpyruvate (PEP)</strong>, consuming <strong>1 GTP</strong>:
  $$\\text{Oxaloacetate} + \\text{GTP} \\xrightarrow{\\text{PEPCK}} \\text{Phosphoenolpyruvate} + \\text{GDP} + CO_2$$
  </li>
</ol>

<h5>Bypass 2: Fructose-1,6-Bisphosphate to Fructose-6-Phosphate (Bypasses PFK-1)</h5>
<ul>
  <li><strong>Fructose-1,6-Bisphosphatase (FBPase-1, Cytosolic):</strong> Hydrolyzes the phosphate at C-1 by simple ester hydrolysis without ATP generation:
  $$\\text{Fructose-1,6-Bisphosphate} + H_2O \\xrightarrow{\\text{FBPase-1}} \\text{Fructose-6-Phosphate} + P_i$$
  Allosterically stimulated by Citrate; potently inhibited by <strong>AMP</strong> and <strong>Fructose-2,6-Bisphosphate ($F2,6BP$)</strong>.</li>
</ul>

<h5>Bypass 3: Glucose-6-Phosphate to Free Glucose (Bypasses Hexokinase)</h5>
<ul>
  <li><strong>Glucose-6-Phosphatase (Endoplasmic Reticulum Lumen):</strong> Hydrolyzes G6P to release <strong>free D-glucose</strong> into the bloodstream:
  $$\\text{Glucose-6-Phosphate} + H_2O \\xrightarrow{\\text{Glucose-6-Phosphatase}} \\text{D-Glucose} + P_i$$
  Expressed almost exclusively in <strong>liver and renal cortex</strong>. <em>Crucial Veterinary Note: Skeletal muscle lacks Glucose-6-Phosphatase; therefore, muscle glycogen can never contribute free glucose directly to the bloodstream!</em></li>
</ul>

<h4>4. Energetic Cost of Gluconeogenesis</h4>
<p>Synthesis of 1 molecule of glucose from 2 molecules of pyruvate consumes <strong>6 High-Energy Phosphate Bonds</strong> ($4\\ \\text{ATP} + 2\\ \\text{GTP}$) and <strong>2 NADH</strong>:</p>
$$2\\ \\text{Pyruvate} + 4\\ \\text{ATP} + 2\\ \\text{GTP} + 2\\ \\text{NADH} + 2\\ H^+ + 6\\ H_2O \\longrightarrow \\text{Glucose} + 4\\ \\text{ADP} + 2\\ \\text{GDP} + 6\\ P_i + 2\\ \\text{NAD}^+$$

<h4>5. The Cori Cycle (Lactic Acid Shunt)</h4>
<p>Described by Carl and Gerty Cori (Nobel Prize 1947):</p>
<ol>
  <li>In vigorously contracting skeletal muscle (or erythrocytes), anaerobic glycolysis converts glucose into <strong>2 Lactate</strong>, yielding <strong>2 ATP</strong> net.</li>
  <li>Lactate diffuses into the bloodstream and is transported to the <strong>liver</strong>.</li>
  <li>Hepatic <em>Lactate Dehydrogenase (LDH)</em> oxidizes lactate back to <strong>Pyruvate</strong>, generating NADH.</li>
  <li>Hepatic gluconeogenesis converts the 2 Pyruvates back into <strong>1 Glucose</strong>, consuming <strong>6 ATP</strong> equivalents.</li>
  <li>The newly synthesized glucose is released into the blood and returns to muscle, completing the cycle. The net energetic deficit of the cycle ($-4\\ \\text{ATP}$) is borne entirely by liver oxidative metabolism.</li>
</ol>""",
        "eliteDesc": """<h4>The Unique Pathway of Propionate Gluconeogenesis in Ruminants</h4>
<p>Propionate produced by ruminal cellulolytic fermentation enters the liver and is transformed into glucose via the <strong>Propionyl-CoA Pathway</strong>:</p>
<ol>
  <li><strong>Propionyl-CoA Synthetase:</strong> $\\text{Propionate} + \\text{CoA} + \\text{ATP} \\longrightarrow \\text{Propionyl-CoA} + \\text{AMP} + PP_i$.</li>
  <li><strong>Propionyl-CoA Carboxylase (Biotin-dependent):</strong> Adds $CO_2$ to form <em>D-Methylmalonyl-CoA</em>, consuming 1 ATP.</li>
  <li><strong>Methylmalonyl-CoA Racemase:</strong> Converts D-isomer to <em>L-Methylmalonyl-CoA</em>.</li>
  <li><strong>Methylmalonyl-CoA Mutase (Vitamin $B_{12}$ / Cobalamin-dependent):</strong> Catalyzes a complex intramolecular carbon skeleton rearrangement, converting L-Methylmalonyl-CoA into <strong>Succinyl-CoA</strong>, which enters the Krebs cycle, forms Oxaloacetate, and ascends gluconeogenesis.</li>
</ol>
<p><em>Cobalt Deficiency:</em> Ruminal bacteria require dietary <strong>Cobalt</strong> to synthesize Vitamin $B_{12}$. Cobalt deficiency in sheep and cattle (Pine disease) paralyzes methylmalonyl-CoA mutase, causing profound hepatic gluconeogenic failure, severe hypoglycemia, emaciation, and death.</p>""",
        "keyPoints": [
            "Gluconeogenesis synthesizes glucose from non-carbohydrate precursors in liver (90%) and kidney (10%).",
            "Adult ruminants absorb almost no dietary glucose; gluconeogenesis supplies >90% of blood glucose.",
            "Propionate is the premier gluconeogenic substrate in ruminants, entering via Succinyl-CoA.",
            "Other substrates include lactate (Cori cycle), glycerol (adipose lipolysis), and glucogenic amino acids.",
            "Bypasses 3 irreversible steps of glycolysis using 4 distinct enzymes: PC, PEPCK, FBPase-1, and G6Pase.",
            "Pyruvate Carboxylase is mitochondrial, requires Biotin and ATP, and is allosterically activated by Acetyl-CoA.",
            "PEPCK converts oxaloacetate to phosphoenolpyruvate, consuming 1 GTP.",
            "Fructose-1,6-bisphosphatase is the key regulatory control point; inhibited by F2,6BP and AMP.",
            "Glucose-6-phosphatase is in liver and kidney ER; absent in skeletal muscle.",
            "Synthesizing 1 glucose from 2 pyruvates consumes 6 high-energy bonds ($4\\ \\text{ATP} + 2\\ \\text{GTP}$) and 2 NADH.",
            "The Cori cycle recycles muscle/RBC lactate to glucose in liver at a net cost of 4 ATP.",
            "Vitamin $B_{12}$ (cobalt-dependent) is essential for methylmalonyl-CoA mutase in propionate utilization."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Bovine Ketosis (Acetonemia) in High-Yielding Dairy Cows:<br>
In early lactation (weeks 2–6 post-calving), a high-producing dairy cow requires massive quantities of glucose (~2.5–3.0 kg/day), 80% of which is taken up by the mammary gland for milk lactose synthesis. Because feed intake lags behind milk yield (Negative Energy Balance), the cow relies entirely on hepatic gluconeogenesis from ruminal propionate. If propionate intake is insufficient, or if amino acids and oxaloacetate are depleted by extreme gluconeogenic demand, <strong>Oxaloacetate (OAA)</strong> levels plunge in liver mitochondria. Without OAA, Acetyl-CoA derived from massive adipose NEFA mobilization cannot enter the Krebs cycle via Citrate Synthase. Acetyl-CoA backs up and is diverted into <strong>hepatic ketogenesis</strong>, producing excessive acetoacetate, acetone, and beta-hydroxybutyrate (BHBA > 1.4 mmol/L). The cow manifests depression, anorexia (refusing concentrates), rapid drop in milk yield, acetone breath, and nervous signs (nervous ketosis). Emergency treatment requires IV 50% Dextrose, oral propylene glycol (a gluconeogenic propionate surrogate), and dexamethasone.</p>""",
        "tables": [
            {
                "title": "The Four Unique Bypass Enzymes of Gluconeogenesis vs. Glycolysis",
                "headers": ["Glycolytic Checkpoint Bypassed", "Gluconeogenic Bypass Enzyme", "Subcellular Location", "Cofactor / Energy Consumed", "Allosteric Regulators"],
                "rows": [
                    ["Pyruvate Kinase (Step 1)", "Pyruvate Carboxylase", "Mitochondrial Matrix", "Biotin, $Mg^{2+}$; consumes 1 ATP", "Activated by Acetyl-CoA"],
                    ["Pyruvate Kinase (Step 2)", "PEPCK (PEP Carboxykinase)", "Cytosol and Mitochondria", "Consumes 1 GTP", "Induced by Glucagon and Cortisol; repressed by Insulin"],
                    ["PFK-1 (Phosphofructokinase-1)", "Fructose-1,6-Bisphosphatase", "Cytosol", "Ester hydrolysis ($H_2O$); no ATP", "Inhibited by F2,6BP and AMP; activated by Citrate"],
                    ["Hexokinase / Glucokinase", "Glucose-6-Phosphatase", "Endoplasmic Reticulum Lumen", "Ester hydrolysis ($H_2O$); no ATP", "Substrate-level regulation by G6P concentration"]
                ]
            },
            {
                "title": "Comparison of the Cori Cycle vs. the Glucose-Alanine Cycle",
                "headers": ["Parameter", "The Cori Cycle (Lactic Acid Cycle)", "The Glucose-Alanine Cycle (Cahill Cycle)"],
                "rows": [
                    ["Peripheral Tissue Source", "Vigorously exercising muscle; anaerobic erythrocytes", "Degraded skeletal muscle amino acids during fasting"],
                    ["Circulating Carrier", "L-Lactate", "L-Alanine (non-toxic nitrogen shuttle)"],
                    ["Hepatic Intermediate", "Pyruvate (via LDH)", "Pyruvate (via ALT transamination) + Ammonia"],
                    ["Secondary Hepatic Product", "None (pure carbon recycling)", "Urea (ammonia excreted via the Urea Cycle)"],
                    ["Primary Physiological Role", "Eliminates muscle lactate; prevents lactic acidosis", "Transports amino nitrogen safely from muscle to liver"]
                ]
            }
        ],
        "img": "",
        "tags": ["Gluconeogenesis", "Propionate", "Cori Cycle", "PEPCK", "Pyruvate Carboxylase", "Bovine Ketosis", "Cobalt"]
    },

    "u2-t14": {
        "summary": "Glycogen metabolism involves the reciprocal enzymatic synthesis (glycogenesis via glycogen synthase) and breakdown (glycogenolysis via glycogen phosphorylase) of branched animal starch, regulated by phosphorylation cascades driven by glucagon, epinephrine, and insulin.",
        "desc": """<h4>1. Architecture and Storage of Glycogen</h4>
<p>Glycogen is a branched polymer of $\alpha$-D-glucose with $\alpha(1 \rightarrow 4)$ glycosidic linkages and $\alpha(1 \rightarrow 6)$ branch points every 8 to 12 residues. It is stored as cytosolic granules in two primary tissues:</p>
<ul>
  <li><strong>Liver Glycogen (up to 5–8% of fresh weight):</strong> Functions to <strong>buffer and maintain systemic blood glucose</strong> during fasting. Depleted within 12–24 hours of starvation.</li>
  <li><strong>Skeletal Muscle Glycogen (1–2% of weight):</strong> Functions strictly as an <strong>intramuscular fuel reserve</strong> to generate ATP for muscle contraction during anaerobic exercise. Lacks Glucose-6-Phosphatase; cannot release free glucose into the systemic circulation.</li>
</ul>

<h4>2. Glycogenesis (Glycogen Synthesis)</h4>
<p>Occurs in the cytosol, requiring energy from both ATP and UTP:</p>
<ol>
  <li><strong>Phosphorylation & Isomerization:</strong> Glucose is phosphorylated to G6P by Hexokinase/Glucokinase, then converted to <strong>Glucose-1-Phosphate (G1P)</strong> by <em>Phosphoglucomutase</em>.</li>
  <li><strong>Activation to UDP-Glucose:</strong> G1P condenses with UTP to form <strong>Uridine Diphosphate Glucose (UDP-Glucose)</strong> via <em>UDP-Glucose Pyrophosphorylase</em>, driving the reaction forward through inorganic pyrophosphate ($PP_i$) hydrolysis. UDP-glucose is the active metabolic glucosyl donor.</li>
  <li><strong>Initiation via Glycogenin:</strong> Glycogen synthesis requires a primer. The protein <strong>Glycogenin</strong> autocatalyzes the attachment of the first 8 glucose residues to its own tyrosine-194 hydroxyl group.</li>
  <li><strong>Chain Elongation:</strong> <strong>Glycogen Synthase</strong> transfers glucosyl units from UDP-glucose to the non-reducing ends of the glycogen chain, creating linear <strong>$\\alpha(1 \\rightarrow 4)$</strong> glycosidic bonds. <em>Primary rate-limiting regulatory enzyme.</em></li>
  <li><strong>Branching:</strong> When a chain reaches ~11 residues, the <strong>Branching Enzyme (Amylo-$\\alpha(1,4 \\rightarrow 1,6)$-transglycosylase)</strong> clips off an oligosaccharide block of 6–7 residues and attaches it to an interior glucose via an <strong>$\\alpha(1 \\rightarrow 6)$</strong> bond, creating multiple non-reducing ends for rapid mobilization.</li>
</ol>

<h4>3. Glycogenolysis (Glycogen Degradation)</h4>
<p>Not the simple reversal of synthesis; utilizes distinct phosphorolytic machinery:</p>
<ol>
  <li><strong>Phosphorolytic Cleavage:</strong> <strong>Glycogen Phosphorylase</strong> uses inorganic phosphate ($P_i$) to cleave $\alpha(1 \rightarrow 4)$ linkages sequentially from non-reducing ends, releasing <strong>Glucose-1-Phosphate (G1P)</strong> without consuming ATP. Requires <strong>Pyridoxal Phosphate (PLP / Vitamin $B_6$)</strong> as a catalytic coenzyme. Cleavage stops 4 residues before an $\alpha(1 \rightarrow 6)$ branch point (forming a <em>limit dextrin</em>).</li>
  <li><strong>Debranching:</strong> The bifunctional <strong>Debranching Enzyme</strong> performs two reactions:
    <ul>
      <li><em>Oligo-$\\alpha(1,4 \\rightarrow 1,4)$-glucan transferase activity:</em> Transfers the outer 3 glucose residues to an adjacent linear chain.</li>
      <li><em>$\\alpha(1 \\rightarrow 6)$-Glucosidase activity:</em> Hydrolytically cleaves the remaining single branch glucose at the $\alpha(1 \rightarrow 6)$ linkage, releasing <strong>1 free Glucose</strong> (non-phosphorylated, representing ~8–10% of glycogen residues).</li>
    </ul>
  </li>
  <li><strong>Conversion to G6P:</strong> G1P is converted to G6P by <em>Phosphoglucomutase</em>. In the liver, G6P is hydrolyzed to free blood glucose by <em>Glucose-6-Phosphatase</em>. In muscle, G6P enters glycolysis directly, yielding 3 net ATP (saving the 1 ATP normally consumed by Hexokinase).</li>
</ol>

<h4>4. Reciprocal Hormonal Regulation (The cAMP Cascade)</h4>
<p>Glycogenesis and glycogenolysis are strictly coordinated in opposite directions by reversible phosphorylation to prevent futile cycling:</p>
<ul>
  <li><strong>Fasting / Stress (Glucagon in liver, Epinephrine in muscle and liver):</strong>
    <ul>
      <li>Hormones bind G-protein coupled receptors, activating <strong>Adenylyl Cyclase</strong> to generate <strong>cAMP</strong>.</li>
      <li>cAMP activates <strong>Protein Kinase A (PKA)</strong>.</li>
      <li>PKA phosphorylates and activates <strong>Phosphorylase Kinase</strong>, which phosphorylates inactive <em>Glycogen Phosphorylase b</em> into its active <strong>Glycogen Phosphorylase a</strong>. <strong>Glycogenolysis accelerates instantly.</strong></li>
      <li>Simultaneously, PKA directly phosphorylates active <em>Glycogen Synthase a</em> into its inactive <strong>Glycogen Synthase b</strong>. <strong>Glycogenesis is shut down.</strong></li>
    </ul>
  </li>
  <li><strong>Fed State (Insulin):</strong>
    <ul>
      <li>Insulin binds its tyrosine kinase receptor, activating <strong>Protein Phosphatase-1 (PP-1)</strong>.</li>
      <li>PP-1 dephosphorylates both enzymes: inactivating Glycogen Phosphorylase and activating Glycogen Synthase. <strong>Glycogenesis proceeds; glycogenolysis halts.</strong></li>
    </ul>
  </li>
  <li><strong>Allosteric Muscle Regulation:</strong> In contracting muscle, <strong>$5'\\text{-AMP}$</strong> allosterically activates Phosphorylase b without phosphorylation; calcium ($Ca^{2+}$) released from the sarcoplasmic reticulum activates Phosphorylase Kinase directly via its calmodulin ($\delta$) subunit.</li>
</ul>""",
        "eliteDesc": """<h4>Glycogen Storage Diseases (GSDs) in Veterinary Medicine</h4>
<table class="tbl comp-table">
  <thead><tr><th>GSD Type</th><th>Defective Enzyme</th><th>Tissues Affected</th><th>Veterinary Species & Pathology</th></tr></thead>
  <tbody>
    <tr><td><strong>Type I (von Gierke's)</strong></td><td>Glucose-6-Phosphatase</td><td>Liver and Kidney</td><td>Maltese and German Shepherd pups; severe fasting hypoglycemia, lactic acidosis, massive hepatomegaly with hepatic steatosis.</td></tr>
    <tr><td><strong>Type II (Pompe's)</strong></td><td>Lysosomal $\\alpha(1 \\rightarrow 4)$-glucosidase (Acid Maltase)</td><td>All organs; massive in Heart & Muscle</td><td>Brahman and Shorthorn cattle, Lapland dogs; severe cardiac hypertrophy, progressive muscle weakness, megaesophagus, and early death.</td></tr>
    <tr><td><strong>Type III (Cori's)</strong></td><td>Debranching Enzyme</td><td>Liver and Muscle</td><td>German Shepherd dogs; accumulation of abnormal limit dextrin with short outer branches; hepatomegaly and hypoglycemia.</td></tr>
    <tr><td><strong>Type IV (Andersen's)</strong></td><td>Branching Enzyme</td><td>Liver and Heart</td><td>Norwegian Forest cats, Quarter Horses; unbranched amylopectin-like glycogen precipitates, causing fatal juvenile hepatic cirrhosis and cardiomyopathy.</td></tr>
  </tbody>
</table>""",
        "keyPoints": [
            "Liver glycogen buffers blood glucose; muscle glycogen serves strictly as an intramuscular fuel reserve.",
            "Muscle lacks Glucose-6-Phosphatase; muscle glycogen cannot release free glucose into blood.",
            "Glycogenesis utilizes UDP-Glucose as the activated glucosyl donor.",
            "Glycogenin provides the essential primer core protein for initiating new glycogen particles.",
            "Glycogen Synthase creates $\\alpha(1 \\rightarrow 4)$ bonds; Branching Enzyme creates $\\alpha(1 \\rightarrow 6)$ branch points.",
            "Glycogenolysis cleaves glycogen via phosphorolysis using Glycogen Phosphorylase, producing G1P.",
            "Glycogen Phosphorylase requires Pyridoxal Phosphate (PLP / Vitamin $B_6$) as a cofactor.",
            "Debranching enzyme has two activities: transferase and $\\alpha(1 \\rightarrow 6)$-glucosidase (releasing free glucose).",
            "Glucagon and Epinephrine activate the cAMP-PKA cascade, phosphorylating and activating Phosphorylase.",
            "Insulin activates Protein Phosphatase-1, dephosphorylating and activating Glycogen Synthase.",
            "In contracting muscle, AMP and $Ca^{2+}$ allosterically activate glycogenolysis directly.",
            "Glycogen Storage Diseases (von Gierke's, Pompe's) are genetic enzyme defects causing organ failure in animals."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Equine Polysaccharide Storage Myopathy (PSSM Type 1):<br>
PSSM Type 1 is a widespread autosomal dominant genetic myopathy affecting Quarter Horses, Draft breeds, and warmbloods, caused by a missense gain-of-function mutation in the <strong>Glycogen Synthase 1 (GYS1)</strong> gene. The mutant glycogen synthase enzyme is constitutively hyperactive and deregulated, continuously synthesizing glycogen even in the absence of insulin stimulation. Myocytes accumulate excessive normal glycogen alongside abnormal, amylase-resistant, non-branched polysaccharide aggregates. When afflicted horses are exercised, energy utilization is defective, causing acute painful muscle stiffness, cramping, reluctance to move, tremors, profuse sweating, and massive elevations of serum Creatine Kinase (CK) and AST (classic <strong>'tying-up' / exertional rhabdomyolysis</strong>). Management requires an absolute restriction of dietary starch and cereal grains, replaced with high-fat (vegetable oil) and high-fiber diets combined with regular, daily turnout exercise.</p>""",
        "tables": [
            {
                "title": "Reciprocal Covalent Regulation of Glycogen Metabolism Enzymes",
                "headers": ["Enzyme", "Phosphorylated Form", "Dephosphorylated Form", "Active Form Under What Hormone?", "Metabolic Purpose"],
                "rows": [
                    ["Glycogen Phosphorylase", "<strong>Phosphorylase a (Active)</strong>", "Phosphorylase b (Inactive)", "<strong>Glucagon / Epinephrine</strong> (via PKA)", "Mobilizes glycogen to glucose during fasting or fight-or-flight"],
                    ["Glycogen Synthase", "Synthase b (Inactive)", "<strong>Synthase a (Active)</strong>", "<strong>Insulin</strong> (via Protein Phosphatase-1)", "Stores excess post-prandial glucose as glycogen"],
                    ["Phosphorylase Kinase", "<strong>Active</strong>", "Inactive", "Glucagon / Epinephrine & $Ca^{2+}$", "Amplifies kinase cascade to rapidly activate phosphorylase"],
                    ["Inhibitor-1", "<strong>Active</strong> (blocks PP-1)", "Inactive", "Glucagon / Epinephrine", "Prevents dephosphorylation, locking phosphorylase in active state"]
                ]
            },
            {
                "title": "Comparison of Hepatic vs. Skeletal Muscle Glycogen Reserves",
                "headers": ["Parameter", "Liver Glycogen", "Skeletal Muscle Glycogen"],
                "rows": [
                    ["Percentage of Tissue Weight", "High (5 - 8% fresh weight)", "Moderate (1 - 2% fresh weight)"],
                    ["Total Body Mass Contributed", "Lower (~100 - 500 g depending on species)", "Higher (~2 - 4 kg; larger total muscle mass)"],
                    ["Primary Physiological Function", "Maintenance of systemic blood glucose", "Immediate ATP fuel for contraction and locomotion"],
                    ["Glucose-6-Phosphatase Present?", "<strong>Yes (Abundant in ER)</strong>", "<strong>Completely Absent</strong>"],
                    ["Hormonal Sensitivity", "Sensitive to <strong>Glucagon</strong> and Epinephrine", "<strong>Completely Insensitive to Glucagon</strong>; responsive to Epinephrine"],
                    ["Depletion Dynamics", "Depleted after 12 - 24 hours of fasting", "Depleted only after exhaustive physical sprinting / exercise"]
                ]
            }
        ],
        "img": "",
        "tags": ["Glycogen", "Glycogenesis", "Glycogenolysis", "Glycogen Phosphorylase", "PSSM", "cAMP Cascade", "GSD"]
    }
}
