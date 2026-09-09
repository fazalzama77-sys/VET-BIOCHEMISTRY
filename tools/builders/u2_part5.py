r"""
Unit 2 Part 5: Protein & Amino Acid Metabolism, Transamination, Ammonia Transport & The Urea Cycle
Topics: u2-t17 to u2-t19
"""

PART5 = {
    "u2-t17": {
        "summary": "Protein turnover represents the dynamic steady-state balance between ribosomal translation governed by the universal degenerate genetic code and selective macromolecular degradation mediated by the ATP-dependent ubiquitin-proteasome system.",
        "desc": """<h4>1. The Genetic Code: Characteristics and Fidelity</h4>
<p>The genetic code translates the four-letter nucleotide language of mRNA into the twenty-letter amino acid language of proteins. Its universal biological characteristics include:</p>
<ol>
  <li><strong>Triplet Nature:</strong> A sequence of three consecutive nucleotides (a <strong>Codon</strong>) codes for a single amino acid. With 4 bases ($A, U, G, C$), there are $4^3 = 64$ possible codons: 61 sense codons code for amino acids, and 3 are <strong>Stop Codons (UAA, UAG, UGA)</strong> that terminate translation.</li>
  <li><strong>Initiation Codon:</strong> <strong>AUG</strong> codes for <strong>Methionine</strong> in eukaryotes (formyl-methionine / fMet in prokaryotes and mitochondria) and establishes the correct reading frame.</li>
  <li><strong>Degeneracy (Redundancy):</strong> Most amino acids are specified by more than one codon (e.g., Leucine and Arginine each have 6 codons). Only Methionine (AUG) and Tryptophan (UGG) have a single codon. Degeneracy minimizes the lethal impact of point mutations.</li>
  <li><strong>Non-Overlapping and Comma-less:</strong> The code is read continuously, three nucleotides at a time, without skipping or punctuation marks from a fixed initiation codon.</li>
  <li><strong>Universality:</strong> The code is virtually identical across all living organisms, from bacteria to horses and cattle (with minor variations in mitochondrial genomes).</li>
  <li><strong>Crick's Wobble Hypothesis (1966):</strong> The 5'-base of the tRNA anticodon that pairs with the 3'-base of the mRNA codon possesses spatial flexibility ('wobble'). This allows a single tRNA molecule to recognize multiple degenerate codons differing in their third position (e.g., inosine in the anticodon can base-pair with $U, C$, or $A$).</li>
</ol>

<h4>2. The Stages of Translation (Protein Biosynthesis)</h4>
<ol>
  <li><strong>Amino Acid Activation (Aminoacylation):</strong> Amino acids are esterified to their cognate tRNAs by <strong>Aminoacyl-tRNA Synthetases</strong> in the cytosol, consuming <strong>2 ATP bonds</strong> (ATP $\\rightarrow$ AMP $+ PP_i$). The enzyme's proofreading hydrolytic pocket ensures less than 1 error per 10,000 attachments.</li>
  <li><strong>Initiation:</strong> The 40S small ribosomal subunit, eukaryotic initiation factors (eIFs), and initiator Met-tRNA bind the 5'-$m^7G$ cap of mRNA, scanning to the first AUG codon. The 60S large subunit joins, assembling the functional 80S ribosome with three operational sites: <strong>A (Aminoacyl)</strong>, <strong>P (Peptidyl)</strong>, and <strong>E (Exit)</strong> site. (Consumes 1 GTP).</li>
  <li><strong>Elongation (A Three-Step Cycle):</strong>
    <ul>
      <li><em>Codon Recognition:</em> The incoming aminoacyl-tRNA docks into the A-site, guided by elongation factor eEF-1A (consumes <strong>1 GTP</strong>).</li>
      <li><em>Peptide Bond Formation:</em> The catalytic <strong>28S rRNA (Peptidyl Transferase ribozyme)</strong> transfers the polypeptide from the P-site tRNA to the amino group of the A-site amino acid, forming a peptide bond without external ATP/GTP input.</li>
      <li><em>Translocation:</em> eEF-2 (consumes <strong>1 GTP</strong>) shifts the ribosome three nucleotides downstream. The uncharged tRNA moves to the E-site and exits, while the peptidyl-tRNA moves from the A-site to the P-site, vacating the A-site for the next cycle.</li>
    </ul>
    <em>(Energetic Cost per Peptide Bond: 2 ATP for activation + 2 GTP for elongation = <strong>4 High-Energy Phosphate Bonds per amino acid incorporated</strong>).</em>
  </li>
  <li><strong>Termination:</strong> When a stop codon (UAA, UAG, UGA) reaches the A-site, eukaryotic Release Factors (eRFs) bind, activating peptidyl transferase to hydrolyze the ester linkage, releasing the nascent completed protein into the cytoplasm. (Consumes 1 GTP).</li>
</ol>

<h4>3. Post-Translational Modifications (PTMs)</h4>
<p>Nascent polypeptide chains undergo covalent modifications necessary for biological activation:</p>
<ul>
  <li><strong>Hydroxylation:</strong> Proline and Lysine residues in Collagen are hydroxylated by <em>Prolyl and Lysyl Hydroxylase</em> (requiring <strong>Vitamin C / Ascorbate</strong> and $Fe^{2+}$); essential for collagen triple-helix stability.</li>
  <li><strong>Carboxylation:</strong> Glutamate residues in blood clotting factors (II, VII, IX, X) are carboxylated to $\gamma$-carboxyglutamate by Vitamin K-dependent carboxylase; required for $Ca^{2+}$ binding.</li>
  <li><strong>Phosphorylation:</strong> Reversible addition of phosphate to Ser, Thr, or Tyr by protein kinases.</li>
  <li><strong>Glycosylation:</strong> Addition of carbohydrate chains in ER and Golgi (N-linked to Asn; O-linked to Ser/Thr).</li>
</ul>

<h4>4. Intracellular Protein Degradation: The Ubiquitin-Proteasome System (UPS)</h4>
<p>Cellular proteins have defined half-lives (from minutes for regulatory enzymes to months for structural crystallins). Damaged, misfolded, or short-lived regulatory proteins are degraded via the <strong>Ubiquitin-Proteasome System (UPS)</strong> (Nobel Prize 2004):</p>
<ol>
  <li><strong>Ubiquitination Cascade:</strong> <strong>Ubiquitin</strong> (a conserved 76-amino-acid peptide) is covalently attached to lysine residues on target proteins through three sequential enzymes:
    <ul>
      <li><strong>E1 (Ubiquitin-Activating Enzyme):</strong> Activates ubiquitin using ATP.</li>
      <li><strong>E2 (Ubiquitin-Conjugating Enzyme):</strong> Transfers activated ubiquitin to its active cysteine.</li>
      <li><strong>E3 (Ubiquitin-Protein Ligase):</strong> Specifically recognizes the target protein's degron signal and transfers ubiquitin to a lysine $\epsilon$-amino group on the substrate.</li>
    </ul>
  </li>
  <li><strong>Polyubiquitin Tag:</strong> Addition of a chain of at least four ubiquitins linked via Lys-48 forms the molecular degradation signal.</li>
  <li><strong>Proteasomal Cleavage:</strong> The polyubiquitinated substrate is directed to the <strong>26S Proteasome</strong> (a massive cylindrical protease complex consisting of a 20S catalytic core and two 19S regulatory caps). The 19S cap uses ATP to deubiquitinate and unfold the protein, threading it into the 20S core where it is cleaved into small 7–9 amino acid peptides, which are further degraded by cytosolic peptidases into free amino acids.</li>
</ol>""",
        "eliteDesc": """<h4>Veterinary Antibiotics Targeting Ribosomal Translation</h4>
<p>Bacterial 70S ribosomes (composed of 50S and 30S subunits) differ structurally from eukaryotic 80S ribosomes (60S and 40S subunits), providing selective targets for common veterinary antibiotics:</p>
<ul>
  <li><strong>Aminoglycosides (Gentamicin, Streptomycin):</strong> Bind the bacterial <strong>30S subunit</strong>, freezing initiation and causing codon misreading.</li>
  <li><strong>Tetracyclines (Oxytetracycline, Doxycycline):</strong> Bind the <strong>30S subunit</strong> and physically block the A-site, preventing aminoacyl-tRNA docking.</li>
  <li><strong>Chloramphenicol & Florfenicol:</strong> Bind the <strong>50S subunit</strong> and inhibit <strong>peptidyl transferase</strong> activity. (Prohibited in food-producing livestock due to risk of human aplastic anemia; Florfenicol is a safe fluorinated analogue widely used in bovine respiratory disease).</li>
  <li><strong>Macrolides (Tylosin, Tilmicosin) & Lincosamides:</strong> Bind the <strong>50S subunit</strong> near the peptide exit tunnel, blocking ribosomal translocation.</li>
</ul>""",
        "keyPoints": [
            "The genetic code is a triplet, non-overlapping, universal code with 61 sense codons and 3 stop codons.",
            "Degeneracy means multiple codons code for the same amino acid, buffering against lethal mutations.",
            "Crick's wobble hypothesis permits non-Watson-Crick pairing at the third 3'-base of the codon.",
            "Aminoacyl-tRNA synthetases esterify amino acids to tRNA, consuming 2 ATP equivalents.",
            "Peptidyl transferase is a ribozyme (28S rRNA) that catalyzes peptide bond formation.",
            "Incorporation of each amino acid into a growing protein consumes 4 high-energy bonds (2 ATP + 2 GTP).",
            "Vitamin C is required for prolyl and lysyl hydroxylation during collagen biosynthesis.",
            "Vitamin K is obligate for $\gamma$-carboxylation of clotting factors II, VII, IX, and X.",
            "Damaged and regulatory proteins are tagged for destruction by covalent polyubiquitin chains.",
            "Ubiquitination requires three sequential enzymes: E1 (activating), E2 (conjugating), and E3 (ligase).",
            "The 26S proteasome degrades polyubiquitinated proteins into short peptides in an ATP-dependent manner.",
            "Veterinary antibiotics selectively target bacterial 70S ribosomes (tetracyclines, macrolides, florfenicol)."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Cachexia and Massive Muscle Wasting in Canine Chronic Renal Failure & Heart Failure:<br>
In veterinary patients suffering from end-stage chronic kidney disease (CKD) or cardiac cachexia (congestive heart failure), systemic inflammation and metabolic acidosis trigger profound muscle wasting. Elevated circulating pro-inflammatory cytokines (TNF-alpha, IL-6) and cortisol massively upregulate the transcription of muscle-specific <strong>E3 Ubiquitin Ligases (MuRF-1 and Muscle Atrophy F-box / MAFbx / Atrogin-1)</strong>. Myofibrillar proteins (actin, myosin heavy chains) are aggressively polyubiquitinated and rapidly dismantled by the <strong>26S Proteasome</strong> into free amino acids to support hepatic gluconeogenesis and acute-phase protein synthesis. This results in progressive loss of lean muscle mass (sarcopenia), profound temporal and lumbar muscle atrophy, weakness, and decreased survival. Nutritional management focuses on high-quality, highly digestible protein with optimal branched-chain amino acid (BCAA) content and omega-3 fatty acids to suppress cytokine-driven proteasomal induction.</p>""",
        "tables": [
            {
                "title": "Selected High-Yield Veterinary Antibiotics Targeting Protein Biosynthesis",
                "headers": ["Antibiotic Class", "Specific Veterinary Drug", "Ribosomal Target Subunit", "Molecular Mechanism of Inhibition"],
                "rows": [
                    ["Tetracyclines", "Oxytetracycline, Doxycycline", "Bacterial 30S Subunit", "Blocks aminoacyl-tRNA docking into the ribosomal A-site"],
                    ["Aminoglycosides", "Gentamicin, Amikacin", "Bacterial 30S Subunit", "Freezes initiation complex; induces translational misreading"],
                    ["Amphenicols", "Florfenicol (Nuflor)", "Bacterial 50S Subunit", "Inhibits peptidyl transferase catalytic bond formation"],
                    ["Macrolides", "Tilmicosin, Tulathromycin", "Bacterial 50S Subunit", "Blocks peptide exit tunnel; arrests ribosomal translocation"],
                    ["Lincosamides", "Clindamycin, Lincomycin", "Bacterial 50S Subunit", "Prevents peptidyl transferase and peptide chain elongation"]
                ]
            },
            {
                "title": "Comparison of Protein Degradation Pathways in Animal Cells",
                "headers": ["Feature", "Ubiquitin-Proteasome System (UPS)", "Lysosomal Autophagy / Cathepsins"],
                "rows": [
                    ["Cellular Compartment", "Cytoplasm and Nucleus", "Acidic Lysosomal Organelles (pH 4.5 - 5.0)"],
                    ["Energy Requirement", "Strictly ATP-dependent (E1 and 19S cap)", "Independent of ATP once inside lysosome"],
                    ["Substrate Selectivity", "Exquisitely selective (specific degron & E3 recognition)", "Bulk degradation of long-lived proteins and whole organelles"],
                    ["Substrate Targeting Signal", "Covalent Lys-48 polyubiquitin chain", "KFERQ peptide motif or autophagic sequestration"],
                    ["Pathological Context", "Muscle wasting (cachexia), antigen presentation via MHC-I", "Starvation autophagy, necrosis, cellular organelle recycling"]
                ]
            }
        ],
        "img": "",
        "tags": ["Translation", "Ribosomes", "Genetic Code", "Ubiquitin", "Proteasome", "Antibiotics", "Cachexia"]
    },

    "u2-t18": {
        "summary": "Amino acid nitrogen catabolism commences with reversible pyridoxal phosphate (PLP)-dependent transamination, followed by mitochondrial oxidative deamination via glutamate dehydrogenase to liberate free ammonia, while amino acid decarboxylation synthesizes potent biogenic amines.",
        "desc": """<h4>1. Overview of Amino Acid Nitrogen Catabolism</h4>
<p>Because animal bodies cannot store excess amino acids or proteins, amino acids consumed in excess of immediate biosynthetic needs are degraded. Unlike carbon skeletons (which are metabolized into glucose, ketone bodies, or $CO_2$), the $\alpha$-amino nitrogen ($-NH_2$) must be removed and safely excreted to prevent toxic ammonia accumulation. Removal of amino nitrogen proceeds primarily in two coupled stages:</p>
<ol>
  <li><strong>Transamination:</strong> Shuffling of amino groups from diverse amino acids onto a single universal collector molecule ($\\alpha$-Ketoglutarate), forming <strong>Glutamate</strong>.</li>
  <li><strong>Oxidative Deamination:</strong> Removal of the amino group from glutamate as <strong>free ammonia ($NH_3/NH_4^+$)</strong> in the liver.</li>
</ol>

<h4>2. Transamination (Aminotransferase Reactions)</h4>
<p><strong>Transamination</strong> is the reversible transfer of an $\alpha$-amino group from an $\alpha$-amino acid to an $\alpha$-keto acid (almost universally $\alpha$-ketoglutarate), converting the original amino acid into its corresponding $\alpha$-keto acid, and producing <strong>L-Glutamate</strong>:</p>
$$\\text{Amino Acid}_1 + \\alpha\\text{-Ketoglutarate} \\xrightleftharpoons{\\text{Aminotransferase (PLP)}} \\alpha\\text{-Keto Acid}_1 + \\mathbf{\\text{L-Glutamate}}$$
<ul>
  <li><strong>Universal Coenzyme:</strong> All transaminases require <strong>Pyridoxal Phosphate (PLP / Vitamin $B_6$)</strong> covalently bound as a <strong>Schiff base</strong> to the $\epsilon$-amino group of an active-site lysine residue. During catalysis, PLP acts as an intermediate amine carrier, transiently converting to <em>Pyridoxamine Phosphate (PMP)</em>.</li>
  <li><strong>Diagnostic Transaminases in Veterinary Medicine:</strong>
    <ul>
      <li><strong>Alanine Aminotransferase (ALT / SGPT):</strong>
      $$\\text{Alanine} + \\alpha\\text{-Ketoglutarate} \\xrightleftharpoons{\\text{ALT}} \\text{Pyruvate} + \\text{Glutamate}$$
      Specific cytoplasmic leakage marker of acute hepatocellular injury in <strong>dogs, cats, and primates</strong>.</li>
      <li><strong>Aspartate Aminotransferase (AST / SGOT):</strong>
      $$\\text{Aspartate} + \\alpha\\text{-Ketoglutarate} \\xrightleftharpoons{\\text{AST}} \\text{Oxaloacetate} + \\text{Glutamate}$$
      Present in both cytoplasm and mitochondria of hepatocytes and skeletal/cardiac myocytes. Evaluates muscle and liver damage in <strong>horses, cattle, and birds</strong>.</li>
    </ul>
  </li>
  <li><strong>Exceptions:</strong> Four amino acids do <strong>not undergo transamination</strong>: <strong>Lysine, Threonine, Proline, and Hydroxyproline</strong>.</li>
</ul>

<h4>3. Oxidative Deamination: Glutamate Dehydrogenase (GDH)</h4>
<p>Because transamination merely transfers amino groups to glutamate, the nitrogen must be liberated. <strong>Glutamate Dehydrogenase (GDH)</strong> is a zinc-containing enzyme located exclusively in the <strong>mitochondrial matrix of hepatocytes</strong>. It oxidatively deaminates L-glutamate back into $\alpha$-ketoglutarate, releasing <strong>free toxic Ammonia ($NH_3/NH_4^+$)</strong>:</p>
$$\\text{L-Glutamate} + \\text{NAD(P)}^+ + H_2O \\xrightleftharpoons{\\mathbf{Glutamate\\text{ Dehydrogenase}}} \\alpha\\text{-Ketoglutarate} + \\mathbf{NH_4^+} + \\text{NAD(P)H} + H^+$$
<ul>
  <li><strong>Dual Coenzyme Specificity:</strong> GDH is unique among dehydrogenases in being able to utilize either <strong>$NAD^+$</strong> (for catabolic oxidative deamination) or <strong>$NADP^+$</strong> (for reverse reductive amination).</li>
  <li><strong>Allosteric Regulation:</strong> GDH is allosterically <strong>inhibited by high energy charge (GTP and ATP)</strong>; it is allosterically <strong>activated by low energy charge (ADP and GDP)</strong>.</li>
  <li><strong>Veterinary Diagnostic Value:</strong> In ruminants and horses, because ALT is low, serum <strong>GDH</strong> is the premier mitochondrial-specific biomarker for acute hepatocellular necrosis.</li>
</ul>

<h4>4. Non-Oxidative Deamination</h4>
<p>Direct removal of ammonia without redox cofactors:</p>
<ul>
  <li><strong>Amino Acid Dehydratases (Serine and Threonine):</strong> <em>Serine Dehydratase</em> (PLP-dependent) dehydrates and deaminates serine directly to <strong>Pyruvate $+ NH_4^+$</strong>. <em>Threonine Dehydratase</em> converts threonine to <strong>$\alpha$-Ketobutyrate $+ NH_4^+$</strong>.</li>
  <li><strong>Histidase:</strong> Deaminates Histidine directly to Urocanate $+ NH_4^+$.</li>
</ul>

<h4>5. Decarboxylation of Amino Acids and Biogenic Amines</h4>
<p>Enzymatic removal of the $\alpha$-carboxyl group as $CO_2$ is catalyzed by <strong>PLP-dependent Amino Acid Decarboxylases</strong>, converting amino acids into biologically potent <strong>biogenic amines</strong>:</p>
<ol>
  <li><strong>Histidine $\\longrightarrow$ Histamine $+ CO_2$</strong> (via <em>Histidine Decarboxylase</em>): Synthesized in mast cells. Mediates anaphylaxis, acute inflammatory vasodilation, bronchial constriction, and gastric $HCl$ secretion.</li>
  <li><strong>Glutamate $\\longrightarrow$ $\\gamma$-Aminobutyric Acid (GABA) $+ CO_2$</strong> (via <em>Glutamate Decarboxylase / GAD</em>): The primary inhibitory neurotransmitter in the central nervous system.</li>
  <li><strong>Tyrosine $\\longrightarrow$ DOPA $\\longrightarrow$ Dopamine $\\longrightarrow$ Norepinephrine $\\longrightarrow$ Epinephrine:</strong> The catecholamine pathway governing sympathetic autonomic tone.</li>
  <li><strong>Tryptophan $\\longrightarrow$ 5-Hydroxytryptophan $\\longrightarrow$ Serotonin (5-HT) $+ CO_2$:</strong> Neurotransmitter and regulator of intestinal peristalsis; precursor of pineal <strong>Melatonin</strong>.</li>
  <li><strong>Lysine $\\longrightarrow$ Cadaverine</strong> and <strong>Ornithine $\\longrightarrow$ Putrescine:</strong> Toxic diamines produced by bacterial putrefaction of animal protein in the gastrointestinal tract and decaying tissues.</li>
</ol>""",
        "eliteDesc": """<h4>Transdeamination: The Unified Funnel of Amino Nitrogen</h4>
<p>The tandem combination of cytosolic transamination and mitochondrial oxidative deamination is termed <strong>Transdeamination</strong>:</p>
$$\\text{Amino Acid} + \\alpha\\text{-KG} \\xrightleftharpoons{\\text{Transaminase}} \\alpha\\text{-Keto Acid} + \\text{Glutamate}$$
$$\\text{Glutamate} + \\text{NAD}^+ + H_2O \\xrightleftharpoons{\\text{GDH}} \\alpha\\text{-KG} + \\mathbf{NH_4^+} + \\text{NADH} + H^+$$
<p>This coordinated funnel allows hundreds of different dietary and endogenous amino acids to channel their amino nitrogen through a single common exit route, liberating ammonia directly adjacent to the mitochondrial enzymes of the Urea Cycle.</p>""",
        "keyPoints": [
            "Amino nitrogen catabolism proceeds via coupled transamination and oxidative deamination (transdeamination).",
            "Transamination reversibly transfers an amino group to $\\alpha$-ketoglutarate, forming L-Glutamate.",
            "All transaminases require Pyridoxal Phosphate (PLP / Vitamin $B_6$) as an intermediate Schiff base carrier.",
            "ALT is a specific cytosolic biomarker of liver necrosis in dogs, cats, and primates.",
            "AST is present in liver and muscle; used diagnostically in horses, cattle, and birds.",
            "Lysine, Threonine, Proline, and Hydroxyproline do not undergo transamination.",
            "Glutamate Dehydrogenase (GDH) oxidatively deaminates glutamate to $\\alpha$-KG and free $NH_4^+$ in mitochondria.",
            "GDH can utilize either $NAD^+$ or $NADP^+$; allosterically activated by ADP and inhibited by GTP.",
            "Serine dehydratase non-oxidatively deaminates serine directly into pyruvate and ammonia.",
            "Decarboxylation of amino acids produces biogenic amines: Histamine, GABA, Serotonin, Dopamine.",
            "GABA is synthesized by decarboxylation of glutamate, acting as the primary inhibitory neurotransmitter.",
            "Bacterial decarboxylation of lysine and ornithine generates foul putrefactive diamines (cadaverine, putrescine)."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Acute Anaphylactic Shock and Ruminal Histamine Toxaemia:<br>
1. <strong>Anaphylaxis:</strong> In domestic animals (such as dogs stung by bees or heifers reacting to parenteral biological vaccines), mast cell degranulation releases vast amounts of <strong>Histamine</strong> (synthesized via <em>Histidine Decarboxylase</em>). Histamine binds $H_1$ receptors on vascular smooth muscle, causing profound systemic vasodilation, widespread capillary extravasation, severe bronchoconstriction, and circulatory shock. (In dogs, the primary anaphylactic shock organ is the <strong>hepatic vein</strong>, causing acute portal hypertension and hepatic venous pooling). Emergency therapy requires intramuscular <strong>Epinephrine</strong> to counteract bronchospasm and vasodilation.<br>
2. <strong>Ruminal Acidosis & Histamine:</strong> During severe grain overload in cattle, ruminal bacterial decarboxylases convert dietary histidine into high concentrations of histamine. As ruminal pH drops, histamine is absorbed across the damaged ruminal epithelium into the portal circulation, inducing systemic vasodilation and contributing to acute <strong>bovine laminitis</strong>.</p>""",
        "tables": [
            {
                "title": "Major Biogenic Amines Synthesized by Amino Acid Decarboxylation",
                "headers": ["Precursor Amino Acid", "Decarboxylation Product", "Enzyme Required", "Key Biological Function in Animals"],
                "rows": [
                    ["L-Histidine", "<strong>Histamine</strong>", "Histidine Decarboxylase", "Anaphylactic shock mediator, acute vasodilation, gastric $HCl$ release"],
                    ["L-Glutamate", "<strong>$\\gamma$-Aminobutyric Acid (GABA)</strong>", "Glutamate Decarboxylase", "Major inhibitory neurotransmitter in mammalian central nervous system"],
                    ["3,4-Dihydroxyphenylalanine (DOPA)", "<strong>Dopamine</strong>", "DOPA Decarboxylase", "CNS neurotransmitter; motor control; precursor of epinephrine"],
                    ["5-Hydroxytryptophan", "<strong>Serotonin (5-HT)</strong>", "5-HTP Decarboxylase", "GI motility regulation, platelet aggregation, pineal melatonin synthesis"],
                    ["L-Ornithine", "<strong>Putrescine</strong>", "Ornithine Decarboxylase", "Polyamines for cell proliferation; putrefactive diamine in rotting meat"]
                ]
            },
            {
                "title": "Diagnostic Liver Enzymes Used Across Veterinary Domestic Species",
                "headers": ["Diagnostic Enzyme", "Primary Intracellular Location", "Canine / Feline Diagnostic Utility", "Equine / Bovine Diagnostic Utility"],
                "rows": [
                    ["Alanine Aminotransferase (ALT)", "Cytosol", "<strong>Gold-Standard Hepatocellular Marker</strong>", "Useless (Extremely low baseline activity in hepatocytes)"],
                    ["Aspartate Aminotransferase (AST)", "Cytosol and Mitochondria", "Useful for liver, but elevated in muscle injury", "<strong>Valuable Marker for Liver and Muscle Injury</strong>"],
                    ["Glutamate Dehydrogenase (GDH)", "Mitochondrial Matrix", "Marker of severe deep centrilobular necrosis", "<strong>Gold-Standard Liver Necrosis Marker in Horses/Cattle</strong>"],
                    ["Sorbitol Dehydrogenase (SDH)", "Cytosol", "Liver-specific, but short in vitro half-life", "<strong>Gold-Standard Acute Hepatocellular Marker in Large Animals</strong>"]
                ]
            }
        ],
        "img": "",
        "tags": ["Transamination", "ALT", "AST", "GDH", "Decarboxylation", "Histamine", "GABA", "Anaphylaxis"]
    },

    "u2-t19": {
        "summary": "Ammonia is a neurotoxic metabolic byproduct safely shuttled as glutamine or alanine and converted by the liver via the five-step Krebs-Henseleit urea cycle into non-toxic, water-soluble urea for renal excretion, with distinct nitrogen excretion strategies across ureotelic mammals and uricotelic birds.",
        "desc": """<h4>1. Neurotoxicity of Free Ammonia ($NH_3/NH_4^+$)</h4>
<p>Free ammonia is generated continuously during amino acid catabolism, purine/pyrimidine deamination, and ruminal bacterial urea hydrolysis. Even mild elevations in blood ammonia (> 50–100 $\mu\\text{mol/L}$, normal < 35 $\mu\\text{mol/L}$) induce severe <strong>hepatic encephalopathy</strong> in animals (ataxia, head pressing, pacing, salivation, seizures, and coma). Mechanisms of neurotoxicity include:</p>
<ol>
  <li><strong>Depletion of $\alpha$-Ketoglutarate:</strong> High ammonia reverses the GDH reaction ($\alpha\\text{-KG} + NH_4^+ + \\text{NADPH} \\longrightarrow \\text{Glutamate} + \\text{NADP}^+$), draining $\alpha$-ketoglutarate from the Krebs cycle and paralyzing cerebral ATP generation.</li>
  <li><strong>Astrocyte Swelling & Cerebral Edema:</strong> Astrocytes synthesize <strong>Glutamine</strong> to detoxify ammonia ($\text{Glutamate} + NH_4^+ + \\text{ATP} \\longrightarrow \\text{Glutamine}$). Massive intracellular accumulation of glutamine acts as an osmotic sponge, drawing water into astrocytes and precipitating intracranial hypertension.</li>
  <li><strong>Neurotransmitter Derangement:</strong> Decreases the inhibitory neurotransmitter GABA and elevates toxic byproducts.</li>
</ol>

<h4>2. Safe Inter-Organ Transport of Ammonia</h4>
<ul>
  <li><strong>1. The Glutamine Shuttle (From Brain and Extrahepatic Tissues):</strong> In peripheral tissues and astrocytes, <strong>Glutamine Synthetase</strong> condenses toxic ammonia with glutamate, consuming 1 ATP to form <strong>Glutamine</strong> (a neutral, non-toxic circulating amide). Glutamine travels via blood to the <strong>liver</strong>, where mitochondrial <strong>Glutaminase</strong> hydrolyzes it, releasing ammonia directly into the urea cycle:
  $$\\text{Glutamine} + H_2O \\xrightarrow{\\text{Glutaminase}} \\text{Glutamate} + \\mathbf{NH_4^+}$$
  In the kidneys, renal glutaminase releases $NH_3$ into the tubular lumen to trap protons ($NH_3 + H^+ \\rightarrow NH_4^+$), aiding systemic acid-base defense.</li>
  <li><strong>2. The Glucose-Alanine Cycle (From Skeletal Muscle):</strong> Contracting muscle degrades branched-chain amino acids, transferring the amino group to pyruvate to form <strong>Alanine</strong> via ALT. Alanine is transported to the liver, where hepatic ALT transfers the amino group back to $\alpha$-ketoglutarate, reforming pyruvate (which ascends gluconeogenesis to glucose) and glutamate (which feeds the urea cycle).</li>
</ul>

<h4>3. The Five Enzymatic Reactions of the Krebs-Henseleit Urea Cycle</h4>
<p>Discovered by Hans Krebs and Kurt Henseleit (1932); the first cyclic metabolic pathway ever elucidated. It is compartmentalized between the <strong>mitochondrial matrix</strong> (Steps 1–2) and the <strong>cytosol</strong> (Steps 3–5) of hepatocytes:</p>
<h5>Mitochondrial Reactions:</h5>
<ol>
  <li><strong>Synthesis of Carbamoyl Phosphate:</strong> Free ammonia ($NH_4^+$) condenses with bicarbonate ($HCO_3^-$) in the mitochondrial matrix via <strong>Carbamoyl Phosphate Synthetase I (CPS-I)</strong>, consuming <strong>2 ATP</strong>:
  $$\\mathbf{NH_4^+ + HCO_3^- + 2\\ ATP \\xrightarrow{CPS-I} \\text{Carbamoyl Phosphate} + 2\\ ADP + P_i}$$
  <p><em>CPS-I is the master committed rate-limiting enzyme of the urea cycle. It is <strong>absolutely inactive</strong> without its obligate allosteric activator, <strong>N-Acetylglutamate (NAG)</strong>. NAG is synthesized by NAG synthase when amino acid catabolism is high (stimulated by arginine). (CPS-II is cytosolic and functions in pyrimidine synthesis).</em></p>
  </li>
  <li><strong>Synthesis of Citrulline:</strong> The carbamoyl group is transferred to <strong>L-Ornithine</strong> by <strong>Ornithine Transcarbamoylase (OTC)</strong>, forming <strong>L-Citrulline</strong> and releasing $P_i$. Citrulline is exported to the cytosol via a mitochondrial transport antiporter in exchange for ornithine.</li>
</ol>

<h5>Cytosolic Reactions:</h5>
<ol start="3">
  <li><strong>Synthesis of Argininosuccinate:</strong> Citrulline condenses with <strong>L-Aspartate</strong> via <strong>Argininosuccinate Synthetase</strong>, consuming <strong>1 ATP</strong> (hydrolyzed to AMP $+ PP_i$, equivalent to <strong>2 high-energy phosphate bonds</strong>):
  $$\\text{Citrulline} + \\mathbf{\\text{Aspartate}} + \\text{ATP} \\longrightarrow \\mathbf{\\text{Argininosuccinate}} + \\text{AMP} + PP_i$$
  <em>Crucial Fact: The two nitrogen atoms of urea originate from two separate sources: the first nitrogen from free ammonia ($NH_4^+$); the second nitrogen directly from Aspartate.</em>
  </li>
  <li><strong>Cleavage of Argininosuccinate:</strong> Cleaved by <strong>Argininosuccinase (Argininosuccinate Lyase)</strong> to form <strong>L-Arginine</strong> and <strong>Fumarate</strong>.
    <p><em>The Krebs Bicycle:</em> The released Fumarate enters the Krebs cycle, is converted to Malate, then Oxaloacetate, which is transaminated back into Aspartate, creating an intimate metabolic link between the Urea and Krebs cycles.</p>
  </li>
  <li><strong>Cleavage of Arginine (Release of Urea):</strong> <strong>Arginase</strong> hydrolyzes arginine to release <strong>UREA</strong>, regenerating <strong>L-Ornithine</strong>:
  $$\\mathbf{\\text{L-Arginine} + H_2O \\xrightarrow{Arginase} \\text{UREA} + \\text{L-Ornithine}}$$
  Ornithine is re-imported into the mitochondrial matrix to initiate the next cycle. Arginase is expressed exclusively in the liver of ureotelic animals.</li>
</ol>

<h4>4. Energetics and Stoichiometry of the Urea Cycle</h4>
$$\\mathbf{NH_4^+ + HCO_3^- + \\text{Aspartate} + 3\\ ATP + H_2O \\longrightarrow \\text{Urea} + \\text{Fumarate} + 2\\ ADP + 2\\ P_i + \\text{AMP} + PP_i}$$
<p>Synthesis of 1 molecule of urea consumes <strong>3 ATP molecules</strong>, but breaks <strong>4 high-energy phosphate bonds</strong> (due to pyrophosphate cleavage in Step 3).</p>

<h4>5. Comparative Nitrogen Excretion in the Animal Kingdom</h4>
<ul>
  <li><strong>Ammonotelic (Aquatic Teleost Fish):</strong> Excrete toxic ammonia directly across their gills into vast volumes of surrounding water without spending ATP.</li>
  <li><strong>Ureotelic (Mammals, Adult Amphibians):</strong> Synthesize non-toxic, water-soluble <strong>Urea</strong> via the liver urea cycle; excreted by kidneys.
    <ul>
      <li><em>Ruminant Adaptation:</em> Up to 40–80% of synthesized urea is not excreted in urine; it is recycled via saliva and the rumen wall into the rumen, where bacterial urease hydrolyzes it to ammonia, driving microbial protein synthesis.</li>
    </ul>
  </li>
  <li><strong>Uricotelic (Birds and Terrestrial Reptiles):</strong> Birds completely <strong>lack mitochondrial Carbamoyl Phosphate Synthetase I and Arginase</strong>. They excrete nitrogenous waste as water-insoluble <strong>Uric Acid</strong> (as a white paste of microscopic urate crystals in droppings). This conserves water and prevents toxic accumulation inside closed cleidoic eggshells.</li>
</ul>""",
        "eliteDesc": """<h4>Canine Portosystemic Shunts (PSS) & Uric Acid Excretion in Dalmatians</h4>
<ul>
  <li><strong>Portosystemic Shunts (PSS):</strong> Congenital vascular anomalies (extrahepatic in small breeds like Yorkies; intrahepatic in large breeds) divert portal blood directly into the systemic vena cava, bypassing the hepatic sinusoids. Ammonia and biogenic amines absorbed from the gut bypass the hepatic urea cycle, causing profound hyperammonemia, microhepatica, and severe <strong>hepatic encephalopathy</strong> (ataxia, circling, copper-colored irises in cats, ammonium urate urolithiasis).</li>
  <li><strong>Dalmatian Purine Defect:</strong> Dalmatians have a fully functional urea cycle, but possess an autosomal recessive defect in the liver membrane uric acid transporter (SLC2A9). Uric acid cannot enter hepatocytes to be degraded by <em>Urate Oxidase (Uricase)</em> into allantoin, resulting in hyperuricosuria and radiolucent <strong>Ammonium Urate Bladder Stones</strong>.</li>
</ul>""",
        "keyPoints": [
            "Free ammonia is highly neurotoxic, depleting cerebral $\\alpha$-ketoglutarate and causing astrocyte edema.",
            "Ammonia is safely transported from brain/tissues as Glutamine, and from muscle as Alanine.",
            "Hepatic glutaminase releases ammonia in mitochondria directly to enter the urea cycle.",
            "The Urea Cycle occurs exclusively in hepatocytes: Steps 1-2 in mitochondria, Steps 3-5 in cytosol.",
            "CPS-I is the committed rate-limiting enzyme, requiring N-Acetylglutamate (NAG) for allosteric activation.",
            "The two nitrogens of urea originate from two distinct sources: free $NH_4^+$ and L-Aspartate.",
            "Synthesis of 1 molecule of urea consumes 3 ATP molecules (breaking 4 high-energy phosphate bonds).",
            "Fumarate released by argininosuccinase connects the Urea cycle to the Krebs cycle ('Krebs Bicycle').",
            "Arginase hydrolyzes arginine to produce urea and regenerate ornithine.",
            "Mammals are ureotelic; birds and reptiles are uricotelic, excreting insoluble uric acid.",
            "Birds lack Carbamoyl Phosphate Synthetase I and Arginase, unable to synthesize urea.",
            "Portosystemic shunts bypass hepatic clearance, precipitating hyperammonemic encephalopathy."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Acute Urea Poisoning (Bovine Non-Protein Nitrogen Toxicosis):<br>
In ruminant feeding, feed-grade synthetic <strong>Urea</strong> is commonly added to low-protein cattle rations as an economical non-protein nitrogen (NPN) source. In the rumen, bacterial <strong>Urease</strong> rapidly hydrolyzes urea into ammonia and carbon dioxide:<br>
$$\\text{Urea} + H_2O \\xrightarrow{\\text{Bacterial Urease}} 2\\ \\mathbf{NH_3} + CO_2$$
If cattle accidentally consume excess urea (> 0.5 g/kg body weight) or if rations are mixed improperly, ammonia production vastly exceeds the capacity of ruminal bacteria to incorporate it into microbial protein. Rumen pH rises from 6.5 to > 8.0. At alkaline pH, ammonium ions ($NH_4^+$) convert into lipophilic uncharged ammonia gas ($NH_3$), which diffuses rapidly across the ruminal wall into the portal vein. Hepatic capacity of the urea cycle is overwhelmed. Systemic blood ammonia skyrockets (> 1,000 $\mu\\text{mol/L}$), causing severe muscle tremors, ataxia, violent tetanic spasms, bloat, and death from respiratory failure within 1–2 hours. Emergency treatment requires drenching with <strong>20–30 liters of cold water</strong> (to lower ruminal temperature and slow bacterial urease) combined with <strong>4–5 liters of 5% Acetic Acid (Vinegar)</strong> to acidify the rumen, trapping ammonia as non-absorbable ammonium ions ($NH_4^+$).</p>""",
        "tables": [
            {
                "title": "The Five Enzymatic Reactions of the Krebs-Henseleit Urea Cycle",
                "headers": ["Step / Reaction", "Enzyme", "Subcellular Location", "Energy / High-Energy Bonds Consumed", "Regulators / Substrates"],
                "rows": [
                    ["1. $NH_4^+ + HCO_3^- \\rightarrow$ Carbamoyl-P", "<strong>CPS-I</strong>", "Mitochondrial Matrix", "Consumes 2 ATP", "Strictly requires <strong>N-Acetylglutamate (NAG)</strong>"],
                    ["2. Carbamoyl-P + Ornithine $\\rightarrow$ Citrulline", "Ornithine Transcarbamoylase (OTC)", "Mitochondrial Matrix", "None ($P_i$ released)", "Citrulline exported to cytosol via antiporter"],
                    ["3. Citrulline + Aspartate $\\rightarrow$ Argininosuccinate", "Argininosuccinate Synthetase", "Cytosol", "Consumes 1 ATP (cleaved to AMP + $PP_i$)", "Incorporates the second nitrogen atom from Aspartate"],
                    ["4. Argininosuccinate $\\rightarrow$ Arginine + Fumarate", "Argininosuccinase (Lyase)", "Cytosol", "None", "Fumarate connects to the Krebs cycle"],
                    ["5. Arginine $+ H_2O \\rightarrow$ <strong>Urea</strong> + Ornithine", "<strong>Arginase</strong>", "Cytosol", "None (Hydrolysis)", "Expressed only in liver; Ornithine recycled to mitochondria"]
                ]
            },
            {
                "title": "Comparison of Nitrogen Excretion Strategies in Domestic and Wild Animals",
                "headers": ["Strategy", "Primary Nitrogenous End-Product", "Toxicity", "Water Requirement for Excretion", "Animal Groups"],
                "rows": [
                    ["Ammonotelic", "Free Ammonia ($NH_3$)", "Extremely High (Neurotoxic)", "Massive (0.5 L water per gram nitrogen)", "Aquatic freshwater teleost fish, tadpoles"],
                    ["Ureotelic", "<strong>Urea</strong> ($H_2N-CO-NH_2$)", "Very Low", "Moderate (0.05 L water per gram nitrogen)", "<strong>Mammals (Cattle, Dogs, Horses)</strong>, Adult amphibians"],
                    ["Uricotelic", "<strong>Uric Acid</strong> (Purine derivative)", "Completely Non-toxic", "Minimal / Negligible (Insoluble paste)", "<strong>Poultry (Chickens)</strong>, Reptiles, Birds"]
                ]
            }
        ],
        "img": "",
        "tags": ["Urea Cycle", "Ammonia", "CPS-1", "Urea Poisoning", "Hepatic Encephalopathy", "Uricotelic", "Cori Cycle"]
    }
}
