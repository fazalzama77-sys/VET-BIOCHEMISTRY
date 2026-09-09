r"""
Unit 2 Part 4: Lipid Metabolism: Beta-Oxidation, Ketogenesis & Fatty Acid Biosynthesis
Topics: u2-t15 to u2-t16
"""

PART4 = {
    "u2-t15": {
        "summary": "Beta-oxidation is the mitochondrial catabolic pathway that cleaves fatty acyl-CoA into acetyl-CoA via a four-step cycle yielding massive quantities of ATP, while excessive acetyl-CoA overflow in the liver drives ketogenesis to produce circulating fuel substrates (acetoacetate and beta-hydroxybutyrate).",
        "desc": """<h4>1. Mobilization of Adipose Triacylglycerols</h4>
<p>During fasting, starvation, stress, or early lactation, lipolysis in white adipose tissue is activated. <strong>Adipose Triglyceride Lipase (ATGL)</strong> and <strong>Hormone-Sensitive Lipase (HSL)</strong> are stimulated by glucagon, epinephrine, and growth hormone via the cAMP-PKA cascade, while being potently inhibited by insulin. Lipolysis hydrolyzes stored triacylglycerols into <strong>Free Fatty Acids (Non-Esterified Fatty Acids / NEFA)</strong> and <strong>Glycerol</strong>. NEFA binds reversibly to plasma albumin for transport to peripheral tissues (skeletal muscle, heart, liver), while glycerol is cleared by the liver for gluconeogenesis.</p>

<h4>2. Fatty Acid Activation and the Carnitine Shuttle</h4>
<ol>
  <li><strong>Cytosolic Activation:</strong> In the outer mitochondrial membrane or ER, free fatty acids are condensed with Coenzyme A by <strong>Fatty Acyl-CoA Synthetase (Thiokinase)</strong>, consuming the equivalent of <strong>2 ATP bonds</strong> (ATP $\\rightarrow$ AMP $+ PP_i$, driven to completion by pyrophosphatase):
  $$\\text{Fatty Acid} + \\text{ATP} + \\text{CoA-SH} \\longrightarrow \\text{Acyl-CoA} + \\text{AMP} + PP_i$$
  </li>
  <li><strong>The Carnitine Shuttle:</strong> Long-chain acyl-CoA ($> 12C$) cannot cross the impermeable inner mitochondrial membrane (IMM). Transport requires the three-part <strong>Carnitine Shuttle</strong>:
    <ul>
      <li><strong>Carnitine Palmitoyltransferase-I (CPT-I):</strong> Located on the outer mitochondrial membrane. Transfers the fatty acyl group from CoA to <strong>L-Carnitine</strong> ($\beta$-hydroxy-$\gamma$-trimethylammonium butyrate), forming <strong>Acylcarnitine</strong> and releasing free CoA.
        <p><em>CPT-I is the master rate-limiting checkpoint of fatty acid catabolism. It is potently allosterically inhibited by <strong>Malonyl-CoA</strong> (the first intermediate of fatty acid synthesis), preventing simultaneous synthesis and breakdown (futile cycling).</em></p>
      </li>
      <li><strong>Carnitine-Acylcarnitine Translocase (CACT):</strong> Antiporter in the IMM that shuttles acylcarnitine into the matrix while exporting free carnitine out.</li>
      <li><strong>Carnitine Palmitoyltransferase-II (CPT-II):</strong> Located on the matrix side of the IMM. Re-transfers the fatty acyl chain back to mitochondrial CoA-SH, regenerating <strong>Fatty Acyl-CoA</strong> in the matrix and releasing free carnitine.</li>
    </ul>
  </li>
</ol>

<h4>3. The Four Cyclic Steps of $\beta$-Oxidation</h4>
<p>Each turn of the spiral removes a <strong>2-carbon Acetyl-CoA</strong> fragment by oxidizing the $\beta$-carbon (Carbon-3):</p>
<ol>
  <li><strong>First Oxidation (Dehydrogenation):</strong> Fatty acyl-CoA is dehydrogenated by <strong>Acyl-CoA Dehydrogenase</strong> to form a <em>trans-$\\Delta^2$-enoyl-CoA</em>, reducing enzyme-bound <strong>FAD</strong> to <strong>$FADH_2$</strong> ($1.5\\ \\text{ATP}$). (Substrate-specific isozymes: VLCAD, LCAD, MCAD, SCAD).</li>
  <li><strong>Hydration:</strong> Water is added stereospecifically across the trans double bond by <strong>Enoyl-CoA Hydratase</strong> to form <em>L-3-Hydroxyacyl-CoA</em>.</li>
  <li><strong>Second Oxidation:</strong> L-3-Hydroxyacyl-CoA is oxidized by <strong>3-Hydroxyacyl-CoA Dehydrogenase</strong> to form <em>3-Ketoacyl-CoA</em>, reducing $NAD^+$ to <strong>$NADH + H^+$</strong> ($2.5\\ \\text{ATP}$).</li>
  <li><strong>Thiolytic Cleavage (Thiolysis):</strong> <strong>$\beta$-Ketothiolase (Thiolase)</strong> cleaves 3-ketoacyl-CoA using a new molecule of CoA-SH, releasing one molecule of <strong>Acetyl-CoA ($2C$)</strong> and a shortened <strong>Acyl-CoA ($n-2$ carbons)</strong> that re-enters the cycle.</li>
</ol>

<h4>4. Bioenergetic Yield of Palmitate ($C_{16:0}$) Complete Oxidation</h4>
<p>Palmitate ($16C$) undergoes <strong>7 cycles</strong> of $\beta$-oxidation, generating <strong>8 Acetyl-CoA</strong>, <strong>7 $FADH_2$</strong>, and <strong>7 NADH</strong>:</p>
<ul>
  <li>7 cycles $\\times 1\\ FADH_2$ ($7 \\times 1.5\\ \\text{ATP}$) = $\\mathbf{10.5\\ \\text{ATP}}$</li>
  <li>7 cycles $\\times 1\\ \\text{NADH}$ ($7 \\times 2.5\\ \\text{ATP}$) = $\\mathbf{17.5\\ \\text{ATP}}$</li>
  <li>8 Acetyl-CoA metabolized in Krebs cycle ($8 \\times 10\\ \\text{ATP}$) = $\\mathbf{80.0\\ \\text{ATP}}$</li>
  <li>Gross ATP Yield = $10.5 + 17.5 + 80.0 = 108.0\\ \\text{ATP}$</li>
  <li>Less initial fatty acid activation (ATP $\\rightarrow$ AMP $+ 2\\ P_i$) = $\\mathbf{-2.0\\ \\text{ATP}}$</li>
  <li><strong>Net ATP Yield per Palmitate Molecule = 106.0 ATP</strong> ($8.2\\ \\text{ATP per Carbon atom}$; vastly superior to the 5.3 ATP/C of glucose).</li>
</ul>

<h4>5. Ketone Body Formation (Ketogenesis)</h4>
<p>When fatty acid mobilization exceeds the metabolic capacity of the Krebs cycle (depletion of oxaloacetate), the liver mitochondrial matrix diverts excess acetyl-CoA into <strong>Ketogenesis</strong>, producing three <strong>Ketone Bodies</strong>:</p>
<ol>
  <li><strong>Acetoacetate</strong> (Primary parent ketone body; $4C$).</li>
  <li><strong>$\beta$-Hydroxybutyrate (BHBA)</strong> (Quantitatively dominant in blood; reduced form of acetoacetate).</li>
  <li><strong>Acetone</strong> (Volatile spontaneous decarboxylation side-product excreted in breath and urine; produces sweet fruity odor).</li>
</ol>

<h5>Enzymatic Steps of Ketogenesis in Hepatic Mitochondria</h5>
<ol>
  <li>$2\\ \\text{Acetyl-CoA} \\xrightleftharpoons{\\text{Thiolase}} \\text{Acetoacetyl-CoA} + \\text{CoA-SH}$.</li>
  <li>$\\text{Acetoacetyl-CoA} + \\text{Acetyl-CoA} + H_2O \\xrightarrow{\\mathbf{HMG-CoA\\text{ Synthase}}} \\mathbf{HMG-CoA} + \\text{CoA-SH}$.
    <p><em>Mitochondrial HMG-CoA Synthase is the committed rate-limiting enzyme of ketogenesis. (Cytosolic HMG-CoA synthase is reserved for cholesterol synthesis).</em></p>
  </li>
  <li>$\\text{HMG-CoA} \\xrightarrow{\\text{HMG-CoA Lyase}} \\mathbf{\\text{Acetoacetate}} + \\text{Acetyl-CoA}$.</li>
  <li>$\\text{Acetoacetate} + \\text{NADH} + H^+ \\xrightleftharpoons{\\beta\\text{-Hydroxybutyrate DH}} \\mathbf{\\beta\\text{-Hydroxybutyrate}} + \\text{NAD}^+$. (Reversible; high hepatic [NADH]/[$NAD^+$] drives complete reduction to BHBA).</li>
</ol>

<h4>6. Extrahepatic Utilization of Ketone Bodies (Ketolysis)</h4>
<p>Ketone bodies are water-soluble fuels exported into the blood for uptake by extrahepatic tissues (skeletal muscle, cardiac muscle, brain during prolonged fasting, and renal cortex). In target tissues:</p>
<ul>
  <li>BHBA is re-oxidized to Acetoacetate by $\beta$-hydroxybutyrate dehydrogenase.</li>
  <li>Acetoacetate is activated to Acetoacetyl-CoA by <strong>Thiophorase (Succinyl-CoA:3-Ketoacid CoA-Transferase)</strong>, using Succinyl-CoA from the Krebs cycle:
  $$\\text{Acetoacetate} + \\text{Succinyl-CoA} \\xrightarrow{\\mathbf{Thiophorase}} \\text{Acetoacetyl-CoA} + \\text{Succinate}$$
  </li>
  <li>Acetoacetyl-CoA is cleaved by Thiolase into <strong>2 Acetyl-CoA</strong>, which enter the Krebs cycle, yielding <strong>20 ATP</strong>.</li>
  <li><strong>Why the Liver Cannot Utilize Ketone Bodies:</strong> The liver completely <strong>lacks Thiophorase</strong>. Thus, the liver is an obligate producer of ketone bodies, never a consumer.</li>
</ul>""",
        "eliteDesc": """<h4>Oxidation of Odd-Chain and Unsaturated Fatty Acids</h4>
<ul>
  <li><strong>Odd-Chain Fatty Acids:</strong> Catabolized by standard $\beta$-oxidation until the final thiolytic cleavage yields one Acetyl-CoA ($2C$) and one <strong>Propionyl-CoA ($3C$)</strong>. As described in gluconeogenesis, propionyl-CoA is converted via biotin-dependent carboxylase and Vitamin $B_{12}$-dependent mutase to Succinyl-CoA, making odd-chain fatty acids the only fatty acids capable of net gluconeogenesis in animals.</li>
  <li><strong>Unsaturated Fatty Acids:</strong> Require two auxiliary enzymes to handle pre-existing double bonds:
    <ol>
      <li><strong>$\\Delta^3,\\Delta^2$-Enoyl-CoA Isomerase:</strong> Shifts cis double bonds to trans-$\Delta^2$ conformation compatible with enoyl-CoA hydratase.</li>
      <li><strong>2,4-Dienoyl-CoA Reductase (NADPH-dependent):</strong> Resolves conjugated double-bond intermediates in polyunsaturated fatty acids.</li>
    </ol>
  </li>
</ul>""",
        "keyPoints": [
            "Adipose lipolysis is catalyzed by HSL and ATGL, activated by glucagon and inhibited by insulin.",
            "Free fatty acids are activated to Acyl-CoA in the cytosol, consuming 2 ATP equivalents.",
            "The Carnitine Shuttle (CPT-I, CACT, CPT-II) transports long-chain acyl groups into mitochondria.",
            "CPT-I is the master rate-limiting enzyme of $\beta$-oxidation; allosterically inhibited by Malonyl-CoA.",
            "Four repetitive steps of $\beta$-oxidation: Oxidation (FAD), Hydration, Oxidation (NAD+), Thiolysis.",
            "Complete oxidation of palmitate (16C) produces 8 Acetyl-CoA, 7 $FADH_2$, and 7 NADH = 106 ATP net.",
            "Ketogenesis occurs exclusively in liver mitochondrial matrix during oxaloacetate depletion.",
            "The three ketone bodies are Acetoacetate, $\beta$-Hydroxybutyrate (BHBA), and volatile Acetone.",
            "Mitochondrial HMG-CoA Synthase is the rate-limiting committed enzyme of ketogenesis.",
            "BHBA is quantitatively the dominant circulating ketone body in domestic ruminants.",
            "Extrahepatic tissues oxidize ketone bodies using Thiophorase (Succinyl-CoA transferase).",
            "The liver lacks Thiophorase; it produces ketone bodies but cannot consume them."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Ovine Pregnancy Toxaemia (Twin Lamb Disease) & Canine Diabetic Ketoacidosis (DKA):<br>
1. <strong>Ovine Pregnancy Toxaemia:</strong> In late-gestation ewes carrying twins or triplets, the fetal demand for glucose peaks during the final 4 weeks of pregnancy. If feed quality or ruminal capacity is inadequate, maternal hypoglycemia sets in. Adipose lipolysis floods the liver with NEFA. Oxaloacetate is drained into gluconeogenesis, arresting the Krebs cycle. Acetyl-CoA overflows into ketogenesis. Serum BHBA exceeds 2.5–3.0 mmol/L, causing <strong>hypoglycemic and ketoacidotic encephalopathy</strong> (blindness, tremors, teeth grinding, recumbency, coma).<br>
2. <strong>Canine DKA:</strong> In unmanaged diabetic dogs (absolute insulin deficiency), unchecked HSL activity produces massive lipolysis. Ketone bodies accumulate faster than peripheral tissues can clear them. Because acetoacetate and BHBA are moderately strong organic acids ($pK_a \\approx 3.5 - 4.7$), they dissociate completely at blood pH, titrating plasma bicarbonate and causing life-threatening <strong>High Anion Gap Metabolic Acidosis</strong>, severe osmotic diuresis, electrolyte depletion, and hypovolemic shock.</p>""",
        "tables": [
            {
                "title": "Enzymatic Steps of the Mitochondrial Beta-Oxidation Spiral",
                "headers": ["Reaction Step", "Enzyme Catalyzing Step", "Prosthetic Group / Coenzyme", "High-Energy Product", "ATP Formed via Respiratory Chain"],
                "rows": [
                    ["1. Dehydrogenation", "Acyl-CoA Dehydrogenase", "FAD (Flavin-linked)", "$1\\ FADH_2$", "1.5 ATP"],
                    ["2. Hydration", "Enoyl-CoA Hydratase", "None ($+H_2O$ addition)", "None", "0"],
                    ["3. Dehydrogenation", "3-Hydroxyacyl-CoA Dehydrogenase", "$NAD^+$ (Pyridine-linked)", "$1\\ \\text{NADH} + H^+$", "2.5 ATP"],
                    ["4. Thiolytic Cleavage", "$\\beta$-Ketothiolase (Thiolase)", "Coenzyme A (CoA-SH)", "1 Acetyl-CoA + shortened Acyl-CoA", "10.0 ATP (when Acetyl-CoA enters TCA)"]
                ]
            },
            {
                "title": "Comparison of the Three Physiological Ketone Bodies",
                "headers": ["Ketone Body", "Chemical Structure", "Proportion in Blood", "Metabolic Utilizability", "Diagnostic Detection Test"],
                "rows": [
                    ["Acetoacetate", "$\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{COO}^-$ ($4C$ $\\beta$-ketoacid)", "~20%", "Actively oxidized by heart, muscle, and brain", "Rothera's nitroprusside test (Purple ring)"],
                    ["$\\beta$-Hydroxybutyrate", "$\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{COO}^-$ ($4C$ hydroxyacid)", "<strong>~75 - 80% (Dominant)</strong>", "Actively oxidized by heart, muscle, and brain", "Enzymatic spectrophotometric / handheld meter"],
                    ["Acetone", "$\\text{CH}_3-\\text{CO}-\\text{CH}_3$ ($3C$ volatile ketone)", "< 5%", "Cannot be metabolized; excreted in breath and urine", "Fruity sweet odor on breath; Rothera's test"]
                ]
            }
        ],
        "img": "",
        "tags": ["Beta-Oxidation", "Carnitine Shuttle", "CPT-1", "Ketogenesis", "BHBA", "Pregnancy Toxaemia", "DKA"]
    },

    "u2-t16": {
        "summary": "Fatty acid biosynthesis is a cytosolic reductive anabolic pathway driven by the multienzyme Fatty Acid Synthase (FAS) complex utilizing NADPH, initiated by the rate-limiting carboxylation of acetyl-CoA to malonyl-CoA, with distinct tissue specialization across domestic animal species.",
        "desc": """<h4>1. Cellular Location and Substrate Supply</h4>
<p>Unlike $\beta$-oxidation (which is mitochondrial and catabolic), <strong>de novo fatty acid synthesis (lipogenesis)</strong> is an anabolic pathway located in the <strong>cytosol</strong>. It synthesizes saturated fatty acids (predominantly <strong>Palmitic Acid, 16:0</strong>) from <strong>Acetyl-CoA</strong>, consuming <strong>ATP</strong> and <strong>NADPH</strong>.</p>
<ul>
  <li><strong>The Citrate-Malate Shuttle (Exporting Acetyl-CoA to Cytosol):</strong>
    <ul>
      <li>Acetyl-CoA is generated in the mitochondrial matrix, but the inner mitochondrial membrane is strictly impermeable to Acetyl-CoA.</li>
      <li>Matrix Acetyl-CoA condenses with Oxaloacetate to form <strong>Citrate</strong> via <em>Citrate Synthase</em>. When mitochondrial energy charge is high (high ATP, isocitrate dehydrogenase inhibited), citrate accumulates and is exported to the cytosol via the <strong>Tricarboxylate Transporter</strong>.</li>
      <li>In the cytosol, <strong>ATP-Citrate Lyase</strong> cleaves citrate back into <strong>Acetyl-CoA</strong> and <strong>Oxaloacetate</strong>, consuming 1 ATP:
      $$\\text{Citrate} + \\text{ATP} + \\text{CoA-SH} + H_2O \\xrightarrow{\\text{ATP-Citrate Lyase}} \\text{Acetyl-CoA} + \\text{Oxaloacetate} + \\text{ADP} + P_i$$
      </li>
      <li>Cytosolic OAA is reduced to Malate by cytosolic MDH, and Malate is converted to Pyruvate by <strong>NADP-dependent Malic Enzyme</strong>, generating <strong>cytosolic NADPH</strong>.</li>
    </ul>
  </li>
  <li><strong>Sources of Reducing Equivalents (NADPH):</strong>
    <ol>
      <li>The <strong>Hexose Monophosphate (HMP) Shunt</strong> (contributes ~60% of NADPH).</li>
      <li>The <strong>Malic Enzyme Reaction</strong>: $\\text{Malate} + \\text{NADP}^+ \\longrightarrow \\text{Pyruvate} + CO_2 + \\mathbf{NADPH}$.</li>
      <li><strong>Isocitrate Dehydrogenase (Cytosolic NADP-dependent):</strong> Especially important in ruminant adipose tissue.</li>
    </ol>
  </li>
</ul>

<h4>2. The Committed Step: Acetyl-CoA Carboxylase (ACC)</h4>
<p>Acetyl-CoA is carboxylated to form <strong>Malonyl-CoA ($3C$)</strong> by the multienzyme complex <strong>Acetyl-CoA Carboxylase (ACC)</strong>, consuming 1 ATP:</p>
$$\\text{Acetyl-CoA} + \\text{HCO}_3^- + \\text{ATP} \\xrightarrow{\\mathbf{Acetyl-CoA\\text{ Carboxylase (Biotin)}}} \\mathbf{\\text{Malonyl-CoA}} + \\text{ADP} + P_i$$
<ul>
  <li><strong>Cofactor:</strong> Contains covalently bound <strong>Biotin</strong>, which acts as a swinging arm transferring $CO_2$ from bicarbonate to acetyl-CoA.</li>
  <li><strong>Master Checkpoint Regulation:</strong>
    <ul>
      <li><em>Allosteric Regulation:</em> <strong>Citrate</strong> acts as a powerful allosteric activator, inducing inactive ACC protomers to polymerize into long, active filaments. <strong>Palmitoyl-CoA</strong> (the end-product) causes depolymerization and feedback inhibition.</li>
      <li><em>Covalent Regulation:</em> ACC is <strong>inactivated by phosphorylation</strong> catalyzed by <em>AMP-Activated Protein Kinase (AMPK)</em> and PKA (fasting / glucagon / epinephrine). ACC is <strong>activated by dephosphorylation</strong> catalyzed by <em>Protein Phosphatase-2A</em> (stimulated by insulin in the fed state).</li>
    </ul>
  </li>
</ul>

<h4>3. The Fatty Acid Synthase (FAS) Multienzyme Complex</h4>
<p>In animal cells, the remaining steps are carried out by a multifunctional, homodimeric homoprotein called the <strong>Fatty Acid Synthase (FAS) Complex</strong> (MW ~540 kDa). Each monomer contains seven discrete catalytic domains and an <strong>Acyl Carrier Protein (ACP)</strong> possessing a flexible <strong>$4'$-Phosphopantetheine</strong> prosthetic arm that shuttles intermediates between catalytic centers.</p>
<h5>The Four Repetitive Reactions of Chain Elongation:</h5>
<ol>
  <li><strong>Loading (Priming):</strong>
    <ul>
      <li>Acetyl-CoA is loaded onto the cysteine sulfhydryl ($-SH$) of the <em>$\beta$-Ketoacyl-ACP Synthase (KS)</em> domain.</li>
      <li>Malonyl-CoA is loaded onto the phosphopantetheine sulfhydryl of the <em>ACP</em> domain via <em>Malonyl/Acetyl Transferase (MAT)</em>.</li>
    </ul>
  </li>
  <li><strong>Condensation:</strong> The <em>KS</em> domain catalyzes decarboxylative condensation of the malonyl group on ACP with the acetyl group on KS, releasing <strong>$CO_2$</strong> to form <strong>$\beta$-Ketoacyl-ACP (Acetoacetyl-ACP, $4C$)</strong>. Driven forward by the release of $CO_2$.</li>
  <li><strong>First Reduction:</strong> $\beta$-Ketoacyl-ACP is reduced to <em>D-3-Hydroxyacyl-ACP</em> by <strong>$\beta$-Ketoacyl Reductase (KR)</strong>, consuming <strong>$1\\ \\text{NADPH}$</strong>.</li>
  <li><strong>Dehydration:</strong> Water is removed by <strong>$\beta$-Hydroxyacyl Dehydratase (DH)</strong>, forming a <em>trans-$\\Delta^2$-enoyl-ACP</em>.</li>
  <li><strong>Second Reduction:</strong> The double bond is reduced to a saturated acyl chain (butyryl-ACP) by <strong>Enoyl Reductase (ER)</strong>, consuming the <strong>second NADPH</strong>.</li>
</ol>
<p>The newly formed saturated acyl chain is transferred from ACP to the KS domain $-SH$ group. A new malonyl-CoA is loaded onto ACP, and the cycle repeats <strong>7 times</strong> until a 16-carbon chain is assembled. The final step is catalyzed by <strong>Thioesterase (TE)</strong>, which hydrolyzes the ester linkage, releasing <strong>free Palmitate (16:0)</strong>.</p>

<h4>4. Overall Stoichiometry of Palmitate Biosynthesis</h4>
$$\\text{Acetyl-CoA} + 7\\ \\text{Malonyl-CoA} + 14\\ \\text{NADPH} + 14\\ H^+ \\longrightarrow \\mathbf{\\text{Palmitate (16:0)}} + 7\\ CO_2 + 14\\ \\text{NADP}^+ + 8\\ \\text{CoA-SH} + 6\\ H_2O$$
<p>Including the 7 ATP consumed to synthesize the 7 malonyl-CoA molecules, the net synthesis of 1 palmitate consumes <strong>8 Acetyl-CoA, 7 ATP, and 14 NADPH</strong>.</p>

<h4>5. Comparative Species Sites of Lipogenesis</h4>
<p>The primary anatomical sites of de novo fatty acid synthesis vary dramatically across domestic animal species:</p>
<ul>
  <li><strong>Adipose Tissue Predominates:</strong> In <strong>Ruminants (Cattle, Sheep, Goats)</strong> and <strong>Swine (Pigs)</strong>, over <strong>90% of de novo lipogenesis occurs in white adipose tissue</strong>; hepatic synthesis is negligible (< 5%). Furthermore, in ruminants, <strong>Acetate</strong> (from ruminal fiber fermentation) is the primary substrate rather than glucose, because ruminant adipose tissue lacks significant ATP-Citrate Lyase activity.</li>
  <li><strong>Liver Predominates:</strong> In <strong>Poultry (Chickens, Turkeys)</strong> and humans, <strong>>90% of de novo lipogenesis occurs in the liver</strong>. The liver packages synthesized triglycerides into VLDL, which circulates to adipose tissue or egg yolk (vitellin) for deposition.</li>
  <li><strong>Dual Sites (Liver and Adipose):</strong> In <strong>Rodents, Dogs, and Cats</strong>, synthesis occurs actively in both liver and adipose tissue.</li>
</ul>""",
        "eliteDesc": """<h4>Fatty Acid Chain Elongation and Desaturation Systems</h4>
<p>Palmitate (16:0) is the terminal product of cytosolic FAS. Further processing occurs in the smooth endoplasmic reticulum:</p>
<ul>
  <li><strong>Elongation:</strong> The <em>Fatty Acid Elongase</em> system adds 2-carbon units from malonyl-CoA to extend palmitate into stearate (18:0) and longer chains.</li>
  <li><strong>Desaturation:</strong> Mammals express <strong>$\\Delta^9$-Desaturase (Stearoyl-CoA Desaturase / SCD)</strong>, which inserts a cis double bond at carbon-9, converting stearate (18:0) to oleate (18:1 $\\Delta^9$) and palmitate to palmitoleate (16:1 $\Delta^9$).</li>
  <li><strong>Mammalian Limitation & Essential Fatty Acids:</strong> Mammalian desaturases <strong>cannot insert double bonds beyond carbon-9</strong> (lacking $\\Delta^{12}$- and $\\Delta^{15}$-desaturases). Therefore, plant-derived <strong>Linoleic Acid (18:2 $\\Delta^{9,12}$, $\\omega-6$)</strong> and <strong>$\\alpha$-Linolenic Acid (18:3 $\\Delta^{9,12,15}$, $\\omega-3$)</strong> are obligate <strong>dietary essential fatty acids</strong>.</li>
  <li><strong>The Feline Exception:</strong> Cats lack functional hepatic <strong>$\\Delta^6$-desaturase</strong> activity. Cats cannot convert linoleic acid into arachidonic acid ($20:4\\ \\Delta^{5,8,11,14}$), making <strong>pre-formed Arachidonic Acid an absolute dietary essential nutrient in felines</strong>.</li>
</ul>""",
        "keyPoints": [
            "De novo fatty acid synthesis occurs in the cytosol, utilizing Acetyl-CoA, ATP, and NADPH.",
            "Acetyl-CoA is exported from mitochondria to cytosol via the Citrate-Malate shuttle.",
            "ATP-Citrate Lyase cleaves cytosolic citrate to Acetyl-CoA and Oxaloacetate.",
            "NADPH is supplied by the HMP shunt (~60%) and the cytosolic Malic Enzyme reaction.",
            "Acetyl-CoA Carboxylase (ACC) catalyzes the rate-limiting step, forming Malonyl-CoA ($3C$).",
            "ACC contains Biotin, requires ATP, is activated by Citrate, and is inhibited by Palmitoyl-CoA.",
            "ACC is inactivated by phosphorylation (glucagon/PKA/AMPK) and activated by insulin.",
            "Fatty Acid Synthase (FAS) is a homodimeric multienzyme complex with a 4'-phosphopantetheine ACP arm.",
            "FAS elongates the chain through 4 steps: Condensation, Reduction (NADPH), Dehydration, Reduction (NADPH).",
            "Synthesis of 1 Palmitate (16:0) consumes 8 Acetyl-CoA, 7 ATP, and 14 NADPH.",
            "In ruminants and swine, lipogenesis occurs >90% in adipose tissue; acetate is the primary substrate.",
            "In poultry, lipogenesis occurs >90% in the liver, exporting lipids as VLDL to adipose and egg yolk."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Avian Fatty Liver Hemorrhagic Syndrome (FLHS) in High-Producing Caged Layers:<br>
In high-producing commercial laying hens, enormous quantities of lipids are required for egg yolk synthesis (~2 g of fat per egg yolk). Because <strong>>90% of avian lipogenesis occurs in the liver</strong>, the hepatic tissue is under extreme lipogenic drive stimulated by high circulating estrogens. If caged hens consume high-energy carbohydrate rations with restricted exercise, excessive hepatic de novo fatty acid synthesis overwhelms the liver's capacity to package and export triglycerides as VLDL. Hepatocytes become severely engorged with macrovesicular lipid vacuoles (<strong>Hepatic Lipidosis / Steatosis</strong>). The friable, yellow, greasy liver develops reticular parenchymal rupture, culminating in massive subcapsular hematoma, catastrophic fatal <strong>intra-abdominal hemorrhage</strong>, and sudden death in the flock's highest-producing layers.</p>""",
        "tables": [
            {
                "title": "Fundamental Differences Between Fatty Acid Synthesis and Beta-Oxidation",
                "headers": ["Feature", "Fatty Acid Biosynthesis (Lipogenesis)", "Fatty Acid Degradation ($\\beta$-Oxidation)"],
                "rows": [
                    ["Cellular Compartment", "Cytosol", "Mitochondrial Matrix"],
                    ["Carrier Protein / Backbone", "Acyl Carrier Protein (ACP)", "Coenzyme A (CoA-SH)"],
                    ["Enzyme Architecture", "Single multifunctional dimeric complex (FAS)", "Separate individual mitochondrial enzymes"],
                    ["2-Carbon Building Block / Product", "Malonyl-CoA ($3C$ donor releasing $CO_2$)", "Acetyl-CoA ($2C$ product)"],
                    ["Redox Coenzymes", "Consumes <strong>NADPH</strong> (reductive anabolism)", "Generates <strong>$NADH + H^+$ and $FADH_2$</strong>"],
                    ["Stereochemistry of Intermediate", "D-3-Hydroxyacyl intermediate", "L-3-Hydroxyacyl intermediate"],
                    ["Key Rate-Limiting Enzyme", "Acetyl-CoA Carboxylase (ACC)", "Carnitine Palmitoyltransferase-I (CPT-I)"],
                    ["Hormonal Activation", "Stimulated by <strong>Insulin</strong> in the fed state", "Stimulated by <strong>Glucagon / Epinephrine</strong> in fasting"]
                ]
            },
            {
                "title": "Comparative Primary Sites and Substrates of De Novo Lipogenesis Across Species",
                "headers": ["Animal Group", "Primary Anatomical Site", "Primary Carbon Substrate", "ATP-Citrate Lyase Activity"],
                "rows": [
                    ["Ruminants (Cattle, Sheep, Goats)", "<strong>Adipose Tissue (>90%)</strong>", "Acetate (from rumen fermentation)", "Extremely Low / Negligible"],
                    ["Swine (Pigs)", "<strong>Adipose Tissue (>90%)</strong>", "Glucose (from dietary starch)", "High"],
                    ["Poultry (Chickens, Ducks, Turkeys)", "<strong>Liver (>90%)</strong>", "Glucose (from diet)", "High"],
                    ["Equine (Horses)", "Liver and Cecal mucosa / Adipose", "Acetate (hindgut fermentation) & Glucose", "Moderate"],
                    ["Canines and Felines", "Both Liver and Adipose tissue (~50:50)", "Glucose and dietary amino acids", "High"]
                ]
            }
        ],
        "img": "",
        "tags": ["Fatty Acid Synthesis", "Acetyl-CoA Carboxylase", "FAS Complex", "Malonyl-CoA", "NADPH", "FLHS", "Ruminant Lipogenesis"]
    }
}
