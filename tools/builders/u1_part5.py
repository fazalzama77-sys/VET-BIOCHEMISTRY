"""
Unit 1 Part 5: Nucleic Acid Chemistry
Topics: u1-t16 to u1-t17
"""

PART5 = {
    "u1-t16": {
        "summary": "Nucleotides are the fundamental monomeric units of nucleic acids, consisting of a nitrogenous base, a pentose sugar, and one or more phosphate groups, functioning not only as genetic informational monomers but also as cellular energy currencies (ATP), coenzymes (NAD, FAD), and secondary messengers (cAMP).",
        "desc": """<h4>1. Nitrogenous Bases: Purines and Pyrimidines</h4>
<p>Nucleic acids contain two distinct classes of planar, aromatic, heterocyclic nitrogenous bases:</p>
<ul>
  <li><strong>1. Purines (Bicyclic 9-membered ring system):</strong>
    <ul>
      <li><strong>Adenine ($A$):</strong> 6-Aminopurine. Found in both DNA and RNA.</li>
      <li><strong>Guanine ($G$):</strong> 2-Amino-6-oxypurine. Found in both DNA and RNA.</li>
      <li><em>Minor Purines:</em> Hypoxanthine (6-oxypurine), Xanthine (2,6-dioxypurine), and Uric acid (2,6,8-trioxypurine; end-product of purine catabolism in avians and Dalmatians).</li>
    </ul>
  </li>
  <li><strong>2. Pyrimidines (Monocyclic 6-membered ring system):</strong>
    <ul>
      <li><strong>Cytosine ($C$):</strong> 2-Oxy-4-aminopyrimidine. Found in both DNA and RNA.</li>
      <li><strong>Uracil ($U$):</strong> 2,4-Dioxypyrimidine. Found <em>exclusively in RNA</em>.</li>
      <li><strong>Thymine ($T$):</strong> 5-Methyl-2,4-dioxypyrimidine (5-Methyluracil). Found <em>exclusively in DNA</em>.</li>
    </ul>
  </li>
  <li><strong>Tautomerism:</strong> Bases exist in dynamic keto-enol (lactam-lactim) and amino-imino tautomeric equilibria. At physiological pH, the <strong>amino and keto (lactam) tautomers predominate</strong>, which is critical for accurate Watson-Crick hydrogen bonding. Transient shifts to rare imino or enol forms cause spontaneous mutagenic base-pairing misincorporations ($A_{\\text{imino}} \\cdot C$ or $T_{\\text{enol}} \\cdot G$).</li>
</ul>

<h4>2. Nucleosides vs. Nucleotides</h4>
<ul>
  <li><strong>Nucleoside:</strong> Nitrogenous Base + Pentose Sugar (D-ribose in RNA; 2-deoxy-D-ribose in DNA). Joined by a <strong>$\\beta$-N-Glycosidic Bond</strong> linking the anomeric carbon (C-1') of the pentose to:
    <ul>
      <li><strong>$N-9$</strong> of a purine (e.g., Adenosine, Guanosine, Deoxyadenosine).</li>
      <li><strong>$N-1$</strong> of a pyrimidine (e.g., Cytidine, Uridine, Thymidine).</li>
    </ul>
  </li>
  <li><strong>Nucleotide:</strong> Nucleoside + one, two, or three Phosphate Groups esterified to the sugar (typically at the C-5' hydroxyl). Nucleotides are nucleoside mono-, di-, or triphosphates (e.g., AMP, ADP, ATP).</li>
  <li><strong>Phosphodiester Linkage:</strong> In polynucleotide chains (DNA and RNA), individual nucleotide units are joined covalently by <strong>$3',5'$-phosphodiester bonds</strong>, forming an alternating sugar-phosphate backbone with intrinsic $5' \\rightarrow 3'$ directional polarity.</li>
</ul>

<h4>3. Diverse Biological Roles of Free Nucleotides</h4>
<ol>
  <li><strong>Universal Cellular Energy Currency:</strong> <strong>Adenosine Triphosphate (ATP)</strong> contains two phosphoanhydride 'high-energy' bonds ($\Delta G^{\circ\\prime} \\approx -30.5\\ \\text{kJ/mol}$). Hydrolysis of ATP to ADP and $P_i$ drives endergonic biosynthesis, muscle cross-bridge cycling, and ion pumps ($Na^+/K^+$-ATPase). GTP powers ribosomal protein synthesis.</li>
  <li><strong>Metabolic Second Messengers:</strong> <strong>Cyclic AMP (cAMP)</strong> is generated from ATP by membrane <em>Adenylyl Cyclase</em> in response to epinephrine and glucagon, activating Protein Kinase A (PKA). <strong>Cyclic GMP (cGMP)</strong> mediates nitric oxide (NO) vasodilation.</li>
  <li><strong>Components of Coenzymes:</strong> Adenine nucleotides form the structural core of major redox coenzymes: <strong>$NAD^+, NADP^+, FAD$</strong>, and acyl carrier <strong>Coenzyme A (CoA-SH)</strong>.</li>
  <li><strong>Activated Intermediates:</strong> UDP-Glucose drives glycogen synthesis; CDP-Choline drives phospholipid assembly; S-Adenosylmethionine (SAM) serves as the universal biological methyl donor.</li>
</ol>""",
        "eliteDesc": """<h4>Syn vs. Anti Conformation Around the Glycosidic Bond</h4>
<p>Steric constraints allow the planar nitrogenous base to rotate around the $\\beta$-N-glycosidic bond relative to the pentose sugar ring:</p>
<ul>
  <li><strong>Anti Conformation:</strong> The bulky base points away from the furanose ring. Pyrimidines almost universally adopt the <em>anti</em> conformation due to severe steric clash between the C-2 oxygen ($=O$) and the pentose ring in the <em>syn</em> orientation.</li>
  <li><strong>Syn Conformation:</strong> The base projects over the pentose ring. Purines can adopt both <em>anti</em> and <em>syn</em> conformations. In standard B-DNA, purines are exclusively in the <em>anti</em> conformation; in left-handed Z-DNA, alternating purines flip into the <em>syn</em> conformation.</li>
</ul>""",
        "keyPoints": [
            "Purines are bicyclic 9-membered rings (Adenine, Guanine); pyrimidines are monocyclic 6-membered rings (C, U, T).",
            "Thymine is 5-methyluracil, found in DNA; Uracil is found in RNA.",
            "Physiological bases exist predominantly in keto and amino tautomeric forms.",
            "Nucleosides link base to pentose via a $\\beta$-N-glycosidic bond ($N-9$ of purine, $N-1$ of pyrimidine).",
            "Nucleotides are phosphate esters of nucleosides, linked to the 5'-carbon of the pentose sugar.",
            "Polynucleotide chains are linked by covalent $3',5'$-phosphodiester bridges.",
            "ATP is the universal energy currency, with two high-energy phosphoanhydride bonds.",
            "Cyclic AMP (cAMP) is an intracellular second messenger synthesized by adenylyl cyclase.",
            "GTP supplies energy for translation and acts as the molecular switch for G-proteins.",
            "Nucleotide coenzymes include $NAD^+$, $NADP^+$, $FAD$, and Coenzyme A.",
            "UDP-glucose is the activated glycosyl donor for glycogen synthesis.",
            "S-Adenosylmethionine (SAM) is the principal biological methyl group donor in animal cells."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Allopurinol Therapy in Canine Urolithiasis and Leishmaniasis:<br>
In veterinary medicine, the purine structural analogue <strong>Allopurinol</strong> (a pyrazolopyrimidine inhibitor of <strong>Xanthine Oxidase</strong>) is employed in two distinct clinical conditions:<br>
1. <strong>Dalmatian Urate Urolithiasis:</strong> Dalmatians have an inherited autosomal recessive mutation in the hepatic uric acid transporter (SLC2A9), impairing hepatic conversion of uric acid to soluble allantoin. This causes hyperuricosuria and recurrent bladder uroliths. Allopurinol blocks xanthine oxidase, reducing uric acid production and substituting more soluble xanthine and hypoxanthine.<br>
2. <strong>Canine Leishmaniasis:</strong> The intracellular protozoan parasite <em>Leishmania infantum</em> cannot synthesize purines de novo and must salvage host purines. Allopurinol is mistakenly incorporated by leishmanial RNA polymerase into parasitic RNA as an aberrant adenine analogue, terminating parasite transcription and protein synthesis.</p>""",
        "tables": [
            {
                "title": "Nomenclature of Nitrogenous Bases, Nucleosides, and Nucleotides",
                "headers": ["Base", "Base Class", "Ribonucleoside", "Ribonucleotide (5'-Monophosphate)", "Abbreviation"],
                "rows": [
                    ["Adenine", "Purine (6-amino)", "Adenosine", "Adenosine monophosphate (Adenylic acid)", "AMP"],
                    ["Guanine", "Purine (2-amino-6-oxy)", "Guanosine", "Guanosine monophosphate (Guanylic acid)", "GMP"],
                    ["Cytosine", "Pyrimidine (2-oxy-4-amino)", "Cytidine", "Cytidine monophosphate (Cytidylic acid)", "CMP"],
                    ["Uracil", "Pyrimidine (2,4-dioxy)", "Uridine", "Uridine monophosphate (Uridylic acid)", "UMP"],
                    ["Thymine", "Pyrimidine (5-methyl-2,4-dioxy)", "Deoxythymidine", "Deoxythymidine monophosphate", "dTMP"]
                ]
            },
            {
                "title": "Major Non-Nucleic Acid Biological Functions of Nucleotides",
                "headers": ["Nucleotide Derivative", "Biochemical Classification", "Primary Metabolic Function", "Target Tissue / Pathway"],
                "rows": [
                    ["ATP", "High-Energy Phosphate Carrier", "Direct thermodynamic coupling to endergonic reactions", "All animal tissues; muscle contraction, ion transport"],
                    ["cAMP & cGMP", "Cyclic Nucleotide Second Messenger", "Allosteric activation of Protein Kinase A and PKG", "Hormone signaling (Epinephrine, Glucagon, Vasopressin)"],
                    ["$NAD^+$ & $NADP^+$", "Pyridine Dinucleotide Coenzyme", "Hydride ion ($H^-$) transfer in catabolic & anabolic redox", "Glycolysis, Krebs cycle, fatty acid synthesis (NADPH)"],
                    ["FAD & FMN", "Flavin Nucleotide Coenzyme", "Two-electron / two-proton transfer ($H_2$)", "Succinate dehydrogenase, acyl-CoA dehydrogenase"],
                    ["Coenzyme A (CoA-SH)", "Pantothenate Nucleotide", "Activation and transfer of acyl and acetyl groups", "Fatty acid beta-oxidation, acetyl-CoA entry into TCA"]
                ]
            }
        ],
        "img": "",
        "tags": ["Nucleotides", "Purines", "Pyrimidines", "ATP", "cAMP", "Allopurinol", "Dalmatian Urolithiasis"]
    },

    "u1-t17": {
        "summary": "Deoxyribonucleic acid (DNA) stores genetic information as an antiparallel double helix stabilized by complementary base pairing and stacking forces, while ribonucleic acids (RNA) express this information as messenger, transfer, ribosomal, and regulatory polymers.",
        "desc": """<h4>1. Structure of DNA: The Watson-Crick B-DNA Model</h4>
<p>In 1953, James Watson and Francis Crick elucidated the secondary structure of double-stranded DNA based on Rosalind Franklin's X-ray diffraction patterns and Erwin Chargaff's rules. The canonical <strong>B-DNA</strong> conformation possesses the following structural features:</p>
<ol>
  <li><strong>Double Helical Architecture:</strong> Consists of two polynucleotide chains wound around a common central axis in a <strong>right-handed</strong> helix.</li>
  <li><strong>Antiparallel Polarity:</strong> The two strands run in opposite directions: one strand runs $5' \\rightarrow 3'$, while the complementary strand runs $3' \\rightarrow 5'$.</li>
  <li><strong>Sugar-Phosphate Backbone:</strong> The hydrophilic deoxyribose sugars and negatively charged phosphodiester bonds form the outer structural rails exposed to water, giving DNA an overall polyanionic charge.</li>
  <li><strong>Hydrophobic Base Core:</strong> The planar, hydrophobic purine and pyrimidine bases are stacked horizontally inside the helix, perpendicular to the long helical axis.</li>
  <li><strong>Complementary Base Pairing:</strong>
    <ul>
      <li><strong>Adenine ($A$) pairs exclusively with Thymine ($T$)</strong> via <strong>2 Hydrogen Bonds</strong> ($A = T$).</li>
      <li><strong>Guanine ($G$) pairs exclusively with Cytosine ($C$)</strong> via <strong>3 Hydrogen Bonds</strong> ($G \\equiv C$).</li>
    </ul>
    Because $G \\equiv C$ pairs have three hydrogen bonds, DNA regions rich in $G-C$ content possess higher thermal stability and higher melting temperatures ($T_m$).</li>
  <li><strong>Helical Dimensions:</strong>
    <ul>
      <li>Diameter of the double helix: <strong>$2.0\\ \\text{nm}$ ($20\\ \\text{\\AA}$)</strong>.</li>
      <li>Helical repeat pitch: <strong>$3.4\\ \\text{nm}$ ($34\\ \\text{\\AA}$)</strong> per complete $360^\\circ$ turn.</li>
      <li>Base pair spacing: <strong>$0.34\\ \\text{nm}$ ($3.4\\ \\text{\\AA}$)</strong> rise between adjacent base pairs; exactly <strong>10.5 base pairs per helical turn</strong> in aqueous solution.</li>
    </ul>
  </li>
  <li><strong>Major and Minor Grooves:</strong> Unequal spacing of the sugar-phosphate backbones creates an alternating spiral of a wide <strong>Major Groove ($2.2\\ \\text{nm}$)</strong> and a narrow <strong>Minor Groove ($1.2\\ \\text{nm}$)</strong>, allowing sequence-specific transcription factors and DNA-binding proteins to access base edges without unwinding the helix.</li>
</ol>

<h4>2. Chargaff's Rules of DNA Composition</h4>
<p>Formulated by Erwin Chargaff for double-stranded cellular DNA:</p>
<ol>
  <li>The sum of purines equals the sum of pyrimidines: $\\mathbf{[A] + [G] = [T] + [C]}$.</li>
  <li>The molar ratio of adenine equals thymine: $\\mathbf{[A] = [T]} \\implies [A]/[T] = 1.0$.</li>
  <li>The molar ratio of guanine equals cytosine: $\\mathbf{[G] = [C]} \\implies [G]/[C] = 1.0$.</li>
  <li>The ratio $([A]+[T]) / ([G]+[C])$ is species-specific and varies widely between organisms.</li>
</ol>

<h4>3. DNA Denaturation, Melting Temperature ($T_m$), and Hyperchromic Effect</h4>
<ul>
  <li>When native double-stranded DNA in aqueous solution is heated or exposed to extreme pH, the non-covalent hydrogen bonds and base-stacking interactions rupture, causing the two strands to separate into random single coils (<strong>Denaturation / Melting</strong>).</li>
  <li><strong>Hyperchromic Effect:</strong> Single-stranded DNA absorbs significantly more UV light at 260 nm (~30–40% increase in $A_{260}$) than double-stranded DNA because base stacking in the native helix shields the aromatic ring electron resonance from incident light.</li>
  <li><strong>Melting Temperature ($T_m$):</strong> The temperature at which 50% of the helical DNA is denatured into single strands. $T_m$ is directly proportional to the percentage of $G-C$ base pairs.</li>
</ul>

<h4>4. Structure, Types, and Functions of RNA</h4>
<p>Ribonucleic acid differs from DNA by containing <strong>D-ribose</strong> (with a 2'-OH group), <strong>Uracil</strong> instead of thymine, and existing predominantly as a single-stranded molecule that folds into intricate stem-loop hairpins.</p>
<ul>
  <li><strong>1. Messenger RNA (mRNA, ~5% of total RNA):</strong>
    <ul>
      <li>Carries the genetic code from DNA to ribosomes for translation. In eukaryotes, mature mRNA is <strong>monocistronic</strong>, capped at the 5'-end with <strong>7-methylguanosine ($m^7G$)</strong> and polyadenylated at the 3'-end with a <strong>poly(A) tail</strong> of 200–250 adenylate residues. Bacterial mRNA is polycistronic without a 5' cap.</li>
    </ul>
  </li>
  <li><strong>2. Transfer RNA (tRNA, ~15% of total RNA):</strong>
    <ul>
      <li>Small adaptor molecules (73–93 nucleotides, 4S). Transports specific activated amino acids to the ribosome. Folds into a 2D <strong>cloverleaf structure</strong> and a 3D <strong>L-shaped conformation</strong>:
        <ul>
          <li><em>Acceptor Stem:</em> Terminates in the invariant <strong>$5'\\text{-CCA-}3'$</strong> sequence, which esterifies the cognate amino acid at the 3'-OH of adenosine.</li>
          <li><em>Anticodon Loop:</em> Contains the specific 3-base triplet that base-pairs with the complementary codon on mRNA.</li>
          <li><em>D-Arm and $T\\Psi C$-Arm:</em> Contain modified bases (dihydrouracil, pseudouridine) for ribosomal docking.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>3. Ribosomal RNA (rRNA, ~80% of total RNA):</strong>
    <ul>
      <li>Structural and catalytic core of ribosomes. In eukaryotic domestic animals (80S ribosome), it consists of a <strong>60S large subunit</strong> (28S, 5.8S, 5S rRNAs + 49 proteins) and a <strong>40S small subunit</strong> (18S rRNA + 33 proteins). The catalytic peptidyl transferase activity that forms peptide bonds is mediated directly by the 28S rRNA (a <strong>Ribozyme</strong>).</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Alternative Helical Forms: B-DNA, A-DNA, and Z-DNA</h4>
<table class="tbl comp-table">
  <thead><tr><th>Conformational Parameter</th><th>B-DNA (Canonical)</th><th>A-DNA (Dehydrated)</th><th>Z-DNA (Left-Handed)</th></tr></thead>
  <tbody>
    <tr><td>Helical Sense</td><td>Right-handed</td><td>Right-handed</td><td>Left-handed (Zigzag)</td></tr>
    <tr><td>Base Pairs per Turn</td><td>10.5</td><td>11.0</td><td>12.0 (6 dimers)</td></tr>
    <tr><td>Helical Pitch</td><td>3.4 nm (34 Å)</td><td>2.8 nm (28 Å)</td><td>4.5 nm (45 Å)</td></tr>
    <tr><td>Base Orientation</td><td>Perpendicular ($1^\\circ$)</td><td>Tilted ($20^\\circ$)</td><td>Tilted ($-7^\\circ$)</td></tr>
    <tr><td>Biological Occurrence</td><td>Standard aqueous physiology</td><td>DNA-RNA hybrids, dsRNA</td><td>Alternating purine-pyrimidine ($C-G$) tracts</td></tr>
  </tbody>
</table>""",
        "keyPoints": [
            "Watson and Crick modeled B-DNA as a right-handed, antiparallel double helix.",
            "Sugar-phosphate backbone is on the exterior; hydrophobic stacked bases are on the interior.",
            "Adenine pairs with Thymine via 2 H-bonds; Guanine pairs with Cytosine via 3 H-bonds.",
            "Helical diameter is 2.0 nm; pitch is 3.4 nm; 10.5 base pairs per complete helical turn.",
            "Chargaff's rules state that in double-stranded DNA: $[A] = [T]$, $[G] = [C]$, and $[Purines] = [Pyrimidines]$.",
            "DNA denaturation causes the Hyperchromic Effect: a 30-40% increase in UV absorbance at 260 nm.",
            "Melting temperature ($T_m$) increases with higher Guanine-Cytosine ($G-C$) content.",
            "RNA contains D-ribose (2'-OH) and Uracil instead of Thymine, existing as a single strand.",
            "Eukaryotic mRNA has a 5' 7-methylguanosine cap and a 3' poly(A) tail.",
            "tRNA has a cloverleaf secondary structure with an anticodon loop and a 3'-CCA amino acid acceptor stem.",
            "rRNA constitutes 80% of cellular RNA; 28S rRNA acts as a ribozyme catalyzing peptide bond synthesis.",
            "Z-DNA is a left-handed helix with a zigzag sugar-phosphate backbone in alternating purine-pyrimidine tracts."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Real-Time PCR and Melting Curve Analysis in Veterinary Diagnostics:<br>
The thermodynamic melting temperature ($T_m$) and hyperchromic properties of double-stranded DNA form the physical basis for diagnostic <strong>Real-Time Quantitative PCR (qPCR)</strong>. In veterinary diagnostic laboratories diagnosing pathogens such as <strong>Canine Parvovirus (CPV-2a/b/c)</strong>, <strong>African Swine Fever Virus (ASFV)</strong>, or <strong>Peste des Petits Ruminants (PPR)</strong>, DNA amplification is monitored using intercalating fluorophores (SYBR Green I). Following thermal cycling, post-PCR <strong>Dissociation (Melting) Curve Analysis</strong> is performed by slowly heating the amplicons while measuring fluorescence. Because the specific $T_m$ is strictly dictated by amplicon length and $G-C$ percentage, a sharp drop in fluorescence at a precise temperature produces a distinctive derivative peak ($-dF/dT$). This enables veterinarians to differentiate specific pathogen DNA from non-specific primer-dimers without running agarose gel electrophoresis.</p>""",
        "tables": [
            {
                "title": "Comprehensive Structural Comparison Between DNA and RNA",
                "headers": ["Structural Feature", "Deoxyribonucleic Acid (DNA)", "Ribonucleic Acid (RNA)"],
                "rows": [
                    ["Pentose Sugar", "2'-Deoxy-D-ribose (lacks 2'-OH)", "D-Ribose (possesses reactive 2'-OH)"],
                    ["Nitrogenous Bases", "Adenine, Guanine, Cytosine, <strong>Thymine</strong>", "Adenine, Guanine, Cytosine, <strong>Uracil</strong>"],
                    ["Strandedness", "Double-stranded double helix (dsDNA)", "Single-stranded (ssRNA); forms complex stem-loops"],
                    ["Chargaff's Rules", "Strictly applicable ($A=T, G=C$)", "Not applicable (ratios vary; single-stranded)"],
                    ["Alkaline Stability", "Stable in dilute alkaline solutions ($NaOH$)", "Labile; rapidly hydrolyzed by $OH^-$ via 2',3'-cyclic monophosphate"],
                    ["Primary Biological Role", "Permanent repository of cellular genetic information", "Transmission, translation, and regulation of gene expression"]
                ]
            },
            {
                "title": "Major Classes of Cellular RNA and Their Functions",
                "headers": ["RNA Class", "Percentage of Total RNA", "Sedimentation / Size", "Structural Hallmark", "Veterinary Biological Function"],
                "rows": [
                    ["Ribosomal RNA (rRNA)", "80 - 85%", "28S, 18S, 5.8S, 5S", "Folded catalytic ribonucleoprotein complexes", "Forms ribosome scaffold; ribozyme peptidyl transferase"],
                    ["Transfer RNA (tRNA)", "10 - 15%", "4S (73 - 93 nt)", "Cloverleaf 2D; L-shaped 3D; 3'-CCA terminal", "Decodes mRNA codons; delivers activated amino acids"],
                    ["Messenger RNA (mRNA)", "3 - 5%", "Heterogeneous (0.5 - 10 kb)", "5' $m^7G$ cap, 3' poly(A) tail (eukaryotic)", "Transfers protein-coding genetic template from nucleus to cytosol"],
                    ["Small Nuclear RNA (snRNA)", "< 1%", "100 - 300 nt", "Complexed with Sm proteins (snRNPs)", "Spliceosome assembly; excision of introns from pre-mRNA"],
                    ["MicroRNA (miRNA)", "< 1%", "21 - 25 nt", "Single-stranded non-coding regulatory RNAs", "Post-transcriptional gene silencing via mRNA degradation / translational repression"]
                ]
            }
        ],
        "img": "",
        "tags": ["DNA Structure", "Double Helix", "Chargaff Rules", "Hyperchromic Effect", "RNA", "tRNA", "qPCR"]
    }
}
