r"""
Unit 2 Part 6: Nucleic Acid Metabolism, DNA/RNA Biosynthesis & Integration of Metabolism
Topics: u2-t20 to u2-t22
"""

PART6 = {
    "u2-t20": {
        "summary": "Nucleotide metabolism encompasses the coordinated de novo assembly and salvage of purine and pyrimidine rings, followed by distinct catabolic pathways converting purines into uric acid or allantoin across domestic species, and pyrimidines into soluble amino acid metabolites.",
        "desc": """<h4>1. De Novo Biosynthesis of Purine Nucleotides</h4>
<p>Purine ring assembly occurs in the <strong>cytosol of the liver</strong>. Unlike pyrimidines, the purine bicyclic ring is synthesized directly on a pre-existing ribose-5-phosphate scaffold derived from the HMP shunt:</p>
<ol>
  <li><strong>Synthesis of PRPP:</strong> Ribose-5-Phosphate is activated by <strong>PRPP Synthetase</strong> to <strong>5-Phosphoribosyl-1-Pyrophosphate (PRPP)</strong>, consuming 1 ATP (pyrophosphate transfer).</li>
  <li><strong>The Committed Step:</strong> <strong>Glutamine-PRPP Amidotransferase</strong> transfers an amide nitrogen from Glutamine to PRPP, displacing pyrophosphate to form <strong>5-Phosphoribosylamine</strong>.
    <p><em>This is the primary rate-limiting, committed step of purine synthesis. It is feedback-inhibited by AMP, GMP, and IMP, and allosterically stimulated by PRPP.</em></p>
  </li>
  <li><strong>Building the Inosine Monophosphate (IMP) Ring:</strong> Nine subsequent enzymatic steps assemble the purine ring by incorporating contributions from:
    <ul>
      <li><strong>Glycine:</strong> Donates carbons 4 and 5, and nitrogen 7.</li>
      <li><strong>Glutamine (Amide $N$):</strong> Donates nitrogens 3 and 9.</li>
      <li><strong>Aspartate:</strong> Donates nitrogen 1.</li>
      <li><strong>$N^{10}$-Formyl-Tetrahydrofolate ($N^{10}$-Formyl-THF):</strong> Donates carbons 2 and 8 (folate-dependent).</li>
      <li><strong>$CO_2$ (Respiratory bicarbonate):</strong> Donates carbon 6.</li>
    </ul>
    The pathway culminates in the parent purine nucleotide: <strong>Inosine Monophosphate (IMP)</strong>.
  </li>
  <li><strong>Conversion of IMP to AMP and GMP:</strong>
    <ul>
      <li><em>IMP to AMP:</em> Aspartate condenses with IMP (consuming <strong>GTP</strong>) to form Adenylosuccinate, which is cleaved by adenylosuccinase, releasing fumarate and <strong>AMP</strong>.</li>
      <li><em>IMP to GMP:</em> IMP is oxidized by IMP Dehydrogenase (reducing $NAD^+$) to XMP, then transaminated with glutamine (consuming <strong>ATP</strong>) to form <strong>GMP</strong>.</li>
    </ul>
  </li>
</ol>

<h4>2. The Purine Salvage Pathway</h4>
<p>De novo purine synthesis is energetically costly (consuming 6 high-energy phosphates per purine ring). Cells salvage pre-formed purine bases from normal intracellular RNA turnover or dietary nucleic acids via two phosphoribosyltransferases:</p>
<ul>
  <li><strong>Hypoxanthine-Guanine Phosphoribosyltransferase (HGPRT):</strong>
  $$\\text{Hypoxanthine} + \\text{PRPP} \\longrightarrow \\text{IMP} + PP_i$$
  $$\\text{Guanine} + \\text{PRPP} \\longrightarrow \\text{GMP} + PP_i$$
  </li>
  <li><strong>Adenine Phosphoribosyltransferase (APRT):</strong> $\\text{Adenine} + \\text{PRPP} \\longrightarrow \\text{AMP} + PP_i$.</li>
</ul>

<h4>3. Purine Catabolism and Species-Specific Excretion</h4>
<p>Cellular purine nucleotides (AMP and GMP) are dephosphorylated to nucleosides (adenosine, inosine, guanosine), then hydrolyzed to free purine bases (hypoxanthine, guanine):</p>
<ol>
  <li>Guanine is deaminated to <strong>Xanthine</strong> by <em>Guanase</em>.</li>
  <li>Hypoxanthine is oxidized to <strong>Xanthine</strong> by the molybdenum-containing enzyme <strong>Xanthine Oxidase</strong>.</li>
  <li>Xanthine is further oxidized to <strong>Uric Acid</strong> by <strong>Xanthine Oxidase</strong>.</li>
  <li><strong>Comparative Veterinary Destiny of Uric Acid:</strong>
    <ul>
      <li><strong>Avians, Reptiles, and Humans:</strong> Lack the enzyme <em>Urate Oxidase (Uricase)</em>; <strong>Uric Acid</strong> is the final terminal excretory product. In birds, uric acid is actively secreted by renal tubules as a water-insoluble paste.</li>
      <li><strong>Normal Domestic Mammals (Cattle, Sheep, Horses, Pigs, Non-Dalmatian Dogs, Cats):</strong> Hepatocytes express <strong>Uricase (Urate Oxidase)</strong>, which oxidizes uric acid into <strong>Allantoin</strong> (a highly water-soluble neutral compound excreted freely by the kidneys):
      $$\\text{Uric Acid} + O_2 + H_2O \\xrightarrow{\\mathbf{Uricase}} \\mathbf{\\text{Allantoin}} + CO_2 + H_2O_2$$
      </li>
      <li><strong>Dalmatian Dogs:</strong> Possess hepatic uricase, but have a genetic defect in the renal and hepatic uric acid transporter (SLC2A9), excreting large quantities of insoluble uric acid rather than allantoin.</li>
    </ul>
  </li>
</ol>

<h4>4. Biosynthesis and Catabolism of Pyrimidines</h4>
<p>Unlike purines, the monocyclic pyrimidine ring is <strong>assembled first as a free base (Orotic Acid)</strong> and subsequently attached to PRPP:</p>
<ol>
  <li><strong>Carbamoyl Phosphate Synthetase II (CPS-II, Cytosolic):</strong> Condenses Glutamine, $HCO_3^-$, and 2 ATP in the cytosol to form Carbamoyl Phosphate. <em>Rate-limiting committed step of pyrimidine synthesis; activated by PRPP, inhibited by UTP.</em></li>
  <li><strong>Condensation:</strong> <em>Aspartate Transcarbamoylase (ATCase)</em> adds Aspartate to form Carbamoyl Aspartate.</li>
  <li><strong>Ring Closure:</strong> Dihydroorotase closes the ring to form Dihydroorotate.</li>
  <li><strong>Oxidation:</strong> Dihydroorotate is oxidized to <strong>Orotate</strong> by <em>Dihydroorotate Dehydrogenase</em> (located on the outer surface of the inner mitochondrial membrane, coupled to the Q pool).</li>
  <li><strong>Attachment to PRPP:</strong> Orotate condenses with PRPP via <em>Orotate Phosphoribosyltransferase</em> to form <strong>OMP (Orotidine Monophosphate)</strong>.</li>
  <li><strong>Decarboxylation:</strong> OMP is decarboxylated by <em>OMP Decarboxylase</em> to yield <strong>UMP (Uridine Monophosphate)</strong>. (Steps 5 and 6 are catalyzed by a single bifunctional cytoplasmic enzyme, <strong>UMP Synthase</strong>).</li>
  <li><strong>Synthesis of CTP and dTMP:</strong>
    <ul>
      <li>UMP is phosphorylated to UTP, which is aminated by <em>CTP Synthetase</em> (consuming glutamine and ATP) to form <strong>CTP</strong>.</li>
      <li>UDP is reduced to dUDP by <em>Ribonucleotide Reductase</em>, converted to dUMP, and methylated by <strong>Thymidylate Synthase</strong> (using $N^5,N^{10}$-methylene-THF) to form <strong>dTMP</strong>.</li>
    </ul>
  </li>
</ol>
<p><strong>Pyrimidine Catabolism:</strong> Pyrimidines are degraded into highly water-soluble products: $\beta$-alanine (from uracil/cytosine) and $\beta$-aminoisobutyrate (from thymine), which are excreted in urine or catabolized into Krebs cycle intermediates.</p>""",
        "eliteDesc": """<h4>Targeting Pyrimidine Metabolism in Veterinary Chemotherapy</h4>
<p>Because rapidly dividing neoplastic cells have an absolute requirement for thymidine nucleotides (dTMP) for DNA replication, pyrimidine synthesis enzymes are key targets in veterinary oncology:</p>
<ul>
  <li><strong>5-Fluorouracil (5-FU):</strong> A fluorinated pyrimidine analogue converted intracellularly into 5-fluoro-dUMP (FdUMP). FdUMP acts as a <strong>suicide inhibitor of Thymidylate Synthase</strong>, forming an irreversible covalent ternary complex with the enzyme and folate cofactor, halting DNA replication. (<em>CRITICAL VETERINARY CONTRAINDICATION: 5-FU is <strong>strictly fatal in cats</strong>; causes catastrophic neurotoxicity, seizures, and death due to lack of dihydropyrimidine dehydrogenase</em>).</li>
  <li><strong>Methotrexate:</strong> Competitive inhibitor of <strong>Dihydrofolate Reductase (DHFR)</strong>, blocking regeneration of tetrahydrofolate (THF) needed by thymidylate synthase.</li>
</ul>""",
        "keyPoints": [
            "Purine rings are assembled directly onto PRPP in the cytosol, starting with Glutamine-PRPP amidotransferase.",
            "The purine ring receives atoms from Glycine, Aspartate, Glutamine, $CO_2$, and $N^{10}$-Formyl-THF.",
            "IMP is the branch-point intermediate, converted to AMP (using GTP) and GMP (using ATP).",
            "The purine salvage pathway (HGPRT and APRT) recycles free bases, conserving significant metabolic energy.",
            "Purine catabolism proceeds from hypoxanthine and xanthine to Uric Acid via Xanthine Oxidase.",
            "Mammals express Uricase (Urate Oxidase) to convert insoluble uric acid into water-soluble Allantoin.",
            "Avians and reptiles lack uricase, excreting insoluble uric acid paste to conserve water.",
            "Dalmatian dogs possess a mutated SLC2A9 transporter, excreting uric acid and forming bladder calculi.",
            "CPS-II is cytosolic, rate-limiting for pyrimidines, utilizing Glutamine and inhibited by UTP.",
            "The pyrimidine ring is synthesized as free Orotate before being linked to PRPP to form UMP.",
            "Thymidylate synthase methylates dUMP to dTMP using $N^5,N^{10}$-Methylene-THF.",
            "5-Fluorouracil inhibits thymidylate synthase; strictly contraindicated and fatal in felines."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Avian Visceral Gout and Articular Gout:<br>
Because birds are <strong>uricotelic</strong>, their baseline plasma uric acid concentrations (2.5–7.0 mg/dL) are far higher than in mammals. Uric acid has very low aqueous solubility. In poultry (broilers, commercial layers) or pet birds (budgerigars, parrots) suffering from severe dehydration, infectious bronchitis nephrosis, or excess dietary protein, renal tubular uric acid excretion fails, causing <strong>Hyperuricemia (> 15–20 mg/dL)</strong>. Insoluble monosodium urate microcrystals precipitate directly onto the serosal surfaces of internal organs (<strong>Visceral Gout</strong>: white, chalky, plaster-like coating over the pericardium, liver capsule, and air sacs) and within periarticular joint capsules (<strong>Articular Gout</strong>: swollen, painful, warm foot joints causing severe lameness). Treatment requires correcting hydration, reducing dietary protein, and administering allopurinol.</p>""",
        "tables": [
            {
                "title": "Comparison of Purine vs. Pyrimidine De Novo Biosynthesis",
                "headers": ["Feature", "Purine Biosynthesis", "Pyrimidine Biosynthesis"],
                "rows": [
                    ["Ring Assembly Strategy", "Synthesized atom-by-atom directly onto PRPP", "Ring assembled as free Orotate, then attached to PRPP"],
                    ["Committed Rate-Limiting Step", "Glutamine-PRPP Amidotransferase", "Carbamoyl Phosphate Synthetase II (CPS-II)"],
                    ["Primary Amino Acid Donors", "Glutamine, Glycine, and Aspartate", "Glutamine and Aspartate exclusively"],
                    ["One-Carbon Folate Donor", "Requires two formyl groups ($N^{10}$-Formyl-THF)", "Requires methylene group for dTMP (Thymidylate Synthase)"],
                    ["Parent Intermediate", "Inosine Monophosphate (IMP)", "Uridine Monophosphate (UMP)"],
                    ["End-Products of Catabolism", "Uric Acid / Allantoin (sparingly soluble)", "$\\beta$-Alanine and $\\beta$-Aminoisobutyrate (highly soluble)"]
                ]
            },
            {
                "title": "Nitrogenous Purine Excretion Across Veterinary Species",
                "headers": ["Species Group", "Presence of Uricase?", "Primary Purine Excretory End-Product", "Solubility / Water Loss", "Primary Clinical Pathology"],
                "rows": [
                    ["Domestic Mammals (Cattle, Horse, Pig, Dog)", "<strong>Present in liver</strong>", "<strong>Allantoin</strong>", "High water solubility; low water volume", "None (efficient clearance)"],
                    ["Dalmatian Dogs", "Present, but transporter defective", "<strong>Uric Acid (Hyperuricosuria)</strong>", "Low solubility; precipitates readily", "Ammonium urate cystic urolithiasis; urethral obstruction"],
                    ["Poultry & Avian Species", "<strong>Completely Absent</strong>", "<strong>Uric Acid</strong>", "Insoluble white paste; zero water loss", "Visceral and articular gout in layers/broilers"],
                    ["Primates (Humans, Apes)", "Absent (Pseudogene)", "Uric Acid", "Sparingly soluble", "Gouty arthritis and renal urate stones"]
                ]
            }
        ],
        "img": "",
        "tags": ["Purines", "Pyrimidines", "Uric Acid", "Allantoin", "Avian Gout", "Dalmatian", "5-Fluorouracil"]
    },

    "u2-t21": {
        "summary": "DNA replication executes semi-conservative, bidirectional duplication of the genome with proofreading fidelity, while RNA transcription selectively expresses genomic segments into RNA transcripts under the control of promoters and regulatory transcription factors.",
        "desc": """<h4>1. DNA Replication: Fundamental Rules</h4>
<p>DNA replication faithfully duplicates the genomic template prior to cell division. It conforms to three universal biological principles:</p>
<ol>
  <li><strong>Semiconservative:</strong> Each daughter double helix contains one intact parental strand and one newly synthesized daughter strand (Meselson and Stahl experiment, 1958).</li>
  <li><strong>Bidirectional from Origins:</strong> Initiates at specific sequence sites called <strong>Origins of Replication (ori)</strong> and unwinds bidirectionally, creating two active <strong>Replication Forks</strong>.</li>
  <li><strong>Strict $5' \\rightarrow 3'$ Directionality:</strong> DNA polymerases can add new deoxyribonucleotides only to a free <strong>3'-hydroxyl ($-OH$) group</strong>. The template is read $3' \\rightarrow 5'$, and the new strand is synthesized strictly in the <strong>$5' \\rightarrow 3'$ direction</strong>.</li>
</ol>

<h4>2. Enzymatic Machinery of the Replication Fork</h4>
<ol>
  <li><strong>DNA Helicase:</strong> Unwinds and separates the parental double helix ahead of the fork, consuming ATP.</li>
  <li><strong>Single-Stranded DNA-Binding Proteins (SSBs / RPA):</strong> Bind to exposed single strands, preventing premature re-annealing and protecting against nuclease degradation.</li>
  <li><strong>DNA Topoisomerases (Gyrase):</strong> Relieve positive supercoiling and torsional strain ahead of the advancing replication fork by transiently cutting, rotating, and resealing DNA strands:
    <ul>
      <li><em>Type I Topoisomerase:</em> Cleaves one strand (ATP-independent).</li>
      <li><em>Type II Topoisomerase (DNA Gyrase in bacteria):</em> Cleaves both strands (ATP-dependent).
        <p><strong>Veterinary Pharmacology Target:</strong> <strong>Fluoroquinolone antibiotics</strong> (e.g., <strong>Enrofloxacin / Baytril, Marbofloxacin</strong>) specifically trap bacterial <strong>DNA Gyrase and Topoisomerase IV</strong> in a cleaved complex, halting bacterial DNA replication and causing lethal double-stranded DNA breaks.</p>
      </li>
    </ul>
  </li>
  <li><strong>Primase (RNA Polymerase):</strong> Synthesizes short <strong>RNA primers (10–12 nucleotides)</strong>, providing the free 3'-OH required by DNA polymerase to initiate synthesis.</li>
  <li><strong>DNA Polymerase III (Eukaryotic Pol $\delta$ and Pol $\epsilon$):</strong> The primary high-speed replicative polymerase. Synthesizes DNA with exceptional accuracy:
    <ul>
      <li><strong>Leading Strand:</strong> Synthesized <strong>continuously</strong> toward the advancing replication fork from a single RNA primer.</li>
      <li><strong>Lagging Strand:</strong> Synthesized <strong>discontinuously</strong> away from the replication fork as short fragments called <strong>Okazaki Fragments</strong> (1,000–2,000 nt in bacteria; 100–200 nt in animals), each requiring a new RNA primer.</li>
      <li><strong>Proofreading (High Fidelity):</strong> Possesses an intrinsic <strong>$3' \\rightarrow 5'$ exonuclease activity</strong> that recognizes and excises mismatched bases immediately, reducing error rates to less than 1 in $10^7$ base pairs.</li>
    </ul>
  </li>
  <li><strong>DNA Polymerase I (or FEN-1 / RNase H):</strong> Excises the RNA primers via its unique <strong>$5' \\rightarrow 3'$ exonuclease activity</strong> and fills the resulting gaps with deoxyribonucleotides.</li>
  <li><strong>DNA Ligase:</strong> Seals the final single-stranded nick in the phosphodiester backbone between adjacent Okazaki fragments, consuming ATP (or $NAD^+$ in bacteria).</li>
</ol>

<h4>3. Transcription: Biosynthesis of RNA</h4>
<p>Transcription is the enzymatic copying of a DNA gene template strand into a complementary RNA molecule by <strong>RNA Polymerase</strong>. Unlike DNA replication, transcription does not require a primer, copies only selected segments of the genome, and lacks a $3' \\rightarrow 5'$ proofreading exonuclease.</p>
<ul>
  <li><strong>Template vs. Coding Strand:</strong>
    <ul>
      <li><strong>Template (Antisense) Strand:</strong> The DNA strand read by RNA polymerase ($3' \\rightarrow 5'$).</li>
      <li><strong>Coding (Sense) Strand:</strong> The non-template DNA strand ($5' \\rightarrow 3'$); has the exact same base sequence as the resulting RNA transcript (with $T$ replaced by $U$).</li>
    </ul>
  </li>
  <li><strong>Stages of Transcription:</strong>
    <ol>
      <li><strong>Initiation:</strong> RNA polymerase recognizes and binds to specific promoter sequences located upstream of the transcription start site ($+1$).
        <ul>
          <li><em>Bacterial Promoters:</em> Consist of the <strong>$-10$ box (Pribnow box: TATAAT)</strong> and <strong>$-35$ box (TTGACA)</strong>, recognized by the <strong>Sigma ($\\sigma$) factor</strong>.</li>
          <li><em>Eukaryotic Promoters:</em> Contain the <strong>TATA box (Goldberg-Hogness box, ~$-25$)</strong> recognized by TATA-Binding Protein (TBP) and basal transcription factors (TFIIA-H).</li>
        </ul>
      </li>
      <li><strong>Elongation:</strong> RNA polymerase unwinds a 14-base-pair transcription bubble and synthesizes RNA in the $5' \\rightarrow 3'$ direction, adding ribonucleoside triphosphates (ATP, GTP, CTP, UTP).</li>
      <li><strong>Termination:</strong> In bacteria, termination occurs via <em>Rho-dependent</em> (protein helicase) or <em>Rho-independent</em> (GC-rich hairpin stem-loop followed by a poly-U tract) mechanisms.</li>
    </ol>
  </li>
</ul>

<h4>4. Post-Transcriptional Processing of Eukaryotic mRNA</h4>
<p>Primary precursor mRNA (pre-mRNA) undergoes three mandatory nuclear modifications before transport to the cytoplasm:</p>
<ol>
  <li><strong>5'-Capping:</strong> Addition of <strong>7-Methylguanosine ($m^7G$)</strong> via an unusual $5'-5'$ triphosphate linkage. Protects mRNA against 5'-exonucleases and serves as the ribosome binding recognition landmark.</li>
  <li><strong>3'-Polyadenylation:</strong> Endonucleolytic cleavage downstream of the <em>AAUAAA</em> polyadenylation signal, followed by addition of a <strong>Poly(A) Tail (200–250 adenine residues)</strong> by <em>Poly(A) Polymerase</em>. Enhances mRNA stability and nuclear export.</li>
  <li><strong>Splicing:</strong> Precise excision of non-coding intervening sequences (<strong>Introns</strong>) and ligation of coding sequences (<strong>Exons</strong>) by the <strong>Spliceosome</strong> (composed of snRNAs U1, U2, U4, U5, U6 and snRNP proteins).
    <p><em>Alternative Splicing:</em> Permits a single pre-mRNA to assemble exons in different combinations, enabling a single gene to produce multiple tissue-specific protein isoforms (e.g., membrane-bound vs. secreted Immunoglobulin M in B-lymphocytes).</p>
  </li>
</ol>""",
        "eliteDesc": """<h4>Inhibitors of Transcription as Antibiotics and Toxins</h4>
<ul>
  <li><strong>Rifampin (Rifampicin):</strong> Binds specifically to the $\beta$-subunit of <strong>bacterial RNA Polymerase</strong>, arresting transcription initiation. Broad-spectrum antibiotic widely used in veterinary medicine for treating severe <em>Rhodococcus equi</em> foal pneumonia.</li>
  <li><strong>Actinomycin D:</strong> Intercalates tightly between adjacent $G-C$ base pairs in DNA, preventing transcription bubble advance. Used as an antineoplastic agent.</li>
  <li><strong>$\\alpha$-Amanitin:</strong> Lethal octapeptide toxin from the 'death cap' mushroom (<em>Amanita phalloides</em>), a frequent cause of fatal poisoning in scavenging dogs. Potently inhibits eukaryotic <strong>RNA Polymerase II</strong> ($K_d = 10\\ \\text{nM}$), arresting mRNA synthesis and causing massive acute centrilobular hepatic necrosis within 48–72 hours.</li>
</ul>""",
        "keyPoints": [
            "DNA replication is semiconservative, bidirectional, and proceeds strictly in the $5' \\rightarrow 3'$ direction.",
            "DNA Helicase unwinds the double helix; SSBs stabilize single-stranded parental DNA.",
            "Topoisomerases (Gyrase) relieve torsional strain; target of fluoroquinolone antibiotics (Enrofloxacin).",
            "Primase synthesizes short RNA primers required to initiate DNA polymerization.",
            "Leading strand is synthesized continuously; lagging strand is synthesized as Okazaki fragments.",
            "DNA polymerase proofreads via its $3' \\rightarrow 5'$ exonuclease activity, ensuring high fidelity.",
            "DNA Ligase seals phosphodiester nicks between completed Okazaki fragments.",
            "RNA transcription copies the template ($3' \\rightarrow 5'$) strand into RNA ($5' \\rightarrow 3'$) without primers.",
            "Bacterial promoters contain $-10$ (Pribnow) and $-35$ consensus boxes recognized by the $\\sigma$ factor.",
            "Eukaryotic pre-mRNA processing requires 5'-$m^7G$ capping, 3'-poly(A) tailing, and intron splicing.",
            "Alternative splicing produces multiple distinct protein isoforms from a single gene locus.",
            "$\\alpha$-Amanitin mushroom toxicity in dogs fatally inhibits eukaryotic RNA Polymerase II."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Enrofloxacin (Baytril) Mechanism & Retinal Toxicity in Cats:<br>
1. <strong>Bacterial Gyrase Inhibition:</strong> Enrofloxacin is a fluoroquinolone antibiotic that binds to the A-subunit of bacterial <strong>DNA Gyrase (Topoisomerase II)</strong> and <strong>Topoisomerase IV</strong>. It stabilizes the covalent enzyme-DNA cleavage complex, converting essential topoisomerases into cellular poisons that fragment the bacterial chromosome, producing rapid bactericidal action in bovine respiratory disease and canine pyoderma.<br>
2. <strong>Feline Retinopathy Warning:</strong> In cats, enrofloxacin must be used with extreme caution at strictly restricted dosages ($\le 5\\ \\text{mg/kg/day}$). Cats possess a defective ABCG2 retinal blood-ocular barrier transporter. Systemic enrofloxacin accumulates in the feline retina. When exposed to ambient light, enrofloxacin generates massive amounts of reactive oxygen species that induce diffuse phototoxic retinal ganglion cell necrosis and permanent, irreversible <strong>acute blindness with complete mydriasis</strong>.</p>""",
        "tables": [
            {
                "title": "Comparison of DNA Replication vs. RNA Transcription",
                "headers": ["Feature", "DNA Replication", "RNA Transcription"],
                "rows": [
                    ["Template Utilized", "Both strands of double-stranded DNA", "Only one selected template strand (antisense)"],
                    ["Substrate Monomers", "Deoxyribonucleoside triphosphates (dNTPs)", "Ribonucleoside triphosphates (NTPs: ATP, GTP, CTP, UTP)"],
                    ["Primer Requirement", "Strictly requires RNA primer (synthesized by primase)", "Does <strong>not</strong> require a primer (de novo initiation)"],
                    ["Direction of Synthesis", "$5' \\rightarrow 3'$ exclusively", "$5' \\rightarrow 3'$ exclusively"],
                    ["Proofreading Activity", "High ($3' \\rightarrow 5'$ exonuclease proofreading)", "Minimal / absent; higher tolerated error rate (~$10^{-4}$)"],
                    ["Product Released", "Double-stranded genomic DNA", "Single-stranded RNA transcript (mRNA, tRNA, rRNA)"]
                ]
            },
            {
                "title": "Eukaryotic RNA Polymerases and Their Selective Inhibitor Sensitivity",
                "headers": ["Enzyme", "Synthesized RNA Transcripts", "Subcellular Location", "Sensitivity to $\\alpha$-Amanitin (Mushroom Toxin)"],
                "rows": [
                    ["RNA Polymerase I", "Pre-rRNA (28S, 18S, 5.8S)", "Nucleolus", "Completely Insensitive"],
                    ["RNA Polymerase II", "Pre-mRNA, snRNA, microRNA", "Nucleoplasm", "<strong>Extreme Sensitivity</strong> (Inhibited at $10^{-8}\\ \\text{M}$)"],
                    ["RNA Polymerase III", "tRNA, 5S rRNA, U6 snRNA", "Nucleoplasm", "Moderate Sensitivity (Inhibited at high concentrations)"]
                ]
            }
        ],
        "img": "",
        "tags": ["DNA Replication", "Enrofloxacin", "DNA Gyrase", "Transcription", "RNA Polymerase", "Alpha-Amanitin", "Splicing"]
    },

    "u2-t22": {
        "summary": "Intermediary metabolism functions as a tightly integrated network governed by reciprocal hormonal orchestration between insulin and counter-regulatory hormones, directing tissue-specific metabolic division of labor during fed, fasting, and production stress states.",
        "desc": """<h4>1. Metabolic Specialization and Division of Labor Among Major Organs</h4>
<p>In domestic animals, tissues are metabolically specialized to maintain systemic homeostasis:</p>
<ul>
  <li><strong>1. The Liver (The Central Metabolic Clearinghouse):</strong>
    <ul>
      <li>Receives nutrient-rich portal blood from the digestive tract.</li>
      <li>Buffers systemic blood glucose via glucokinase, glycogenesis, glycogenolysis, and continuous gluconeogenesis.</li>
      <li>Primary site of the urea cycle, fatty acid $\beta$-oxidation, ketogenesis, plasma albumin and clotting factor synthesis, and Phase I/II drug biotransformation.</li>
    </ul>
  </li>
  <li><strong>2. Skeletal Muscle (The Major Energy Consumer):</strong>
    <ul>
      <li>Consumes glucose, free fatty acids, and ketone bodies. Stores glycogen (~1–2% of mass) solely for its own contraction (lacks Glucose-6-Phosphatase).</li>
      <li>During vigorous exercise, produces lactate for the Cori cycle; degrades branched-chain amino acids (BCAAs) to export alanine for the glucose-alanine cycle.</li>
    </ul>
  </li>
  <li><strong>3. Cardiac Myocardium (Obligate Aerobic Organ):</strong>
    <ul>
      <li>Relies almost exclusively on <strong>Fatty Acids (60–80%)</strong> and <strong>Ketone Bodies</strong> for continuous ATP generation via oxidative phosphorylation; consumes glucose minimally. Rich in mitochondria (occupying 40% of myocyte volume).</li>
    </ul>
  </li>
  <li><strong>4. White Adipose Tissue (The Energy Storage Buffer):</strong>
    <ul>
      <li>Stores energy as triacylglycerols. Releases free fatty acids (NEFA) and glycerol via HSL lipolysis during fasting. Secretes regulatory adipokines (leptin, adiponectin).</li>
    </ul>
  </li>
  <li><strong>5. The Brain (The Privileged Glucose Consumer):</strong>
    <ul>
      <li>Under normal conditions, blood glucose is the <strong>exclusive fuel</strong> (lacks fuel storage reserves; consumes 20% of resting glucose). Cannot utilize free fatty acids (blocked by the blood-brain barrier). Adapts to oxidize <strong>ketone bodies</strong> (acetoacetate and BHBA) during prolonged starvation.</li>
    </ul>
  </li>
  <li><strong>6. The Lactating Mammary Gland (Production Powerhouse):</strong>
    <ul>
      <li>In dairy cattle, consumes up to 80% of whole-body circulating glucose, cleared via insulin-independent transporters to synthesize <strong>lactose</strong> and drive milk volume.</li>
    </ul>
  </li>
</ul>

<h4>2. Metabolic Transitions: Fed vs. Fasting States</h4>
<ul>
  <li><strong>1. The Fed (Absorptive) State: High Insulin, Low Glucagon</strong>
    <ul>
      <li><em>Metabolic Signal:</em> High insulin:glucagon ratio promotes <strong>anabolic fuel storage</strong>.</li>
      <li><em>Liver:</em> Glycolysis, glycogenesis, HMP shunt (NADPH generation), and de novo lipogenesis are activated; gluconeogenesis, glycogenolysis, and ketogenesis are shut down.</li>
      <li><em>Adipose:</em> Capillary Lipoprotein Lipase (LPL) is stimulated to clear circulating chylomicrons/VLDL; glucose uptake (GLUT-4) generates glycerol-3-phosphate; intracellular HSL is inhibited, halting lipolysis.</li>
      <li><em>Muscle:</em> GLUT-4 translocation drives glucose uptake and glycogenesis; amino acid uptake drives protein synthesis.</li>
    </ul>
  </li>
  <li><strong>2. The Fasting (Post-Absorptive) State: Low Insulin, High Glucagon & Epinephrine</strong>
    <ul>
      <li><em>Metabolic Signal:</em> Low insulin:glucagon ratio promotes <strong>catabolic fuel mobilization</strong> via the cAMP-PKA phosphorylation cascade.</li>
      <li><em>Liver:</em> Glycogenolysis accelerates immediately to maintain blood glucose (first 12–24 hours). As liver glycogen depletes, <strong>gluconeogenesis</strong> becomes the dominant glucose source. $\beta$-Oxidation of fatty acids accelerates, producing acetyl-CoA to power gluconeogenesis.</li>
      <li><em>Adipose:</em> HSL is phosphorylated and activated, driving massive release of NEFA and glycerol into the blood.</li>
      <li><em>Muscle:</em> Switches fuel from glucose to fatty acids and ketone bodies, sparing glucose for the brain and erythrocytes. Proteolysis releases alanine and glutamine.</li>
    </ul>
  </li>
  <li><strong>3. Prolonged Starvation:</strong>
    <ul>
      <li>To prevent lethal depletion of skeletal muscle mass, whole-body protein catabolism is dialed down. The liver runs maximal fatty acid $\beta$-oxidation, flooding the circulation with <strong>Ketone Bodies (BHBA and Acetoacetate)</strong>. The brain adapts to utilize ketone bodies for up to 60–70% of its energy, reducing glucose requirements.</li>
    </ul>
  </li>
</ul>

<h4>3. Hormonal Orchestration and Homeorhesis in Dairy Cattle</h4>
<p>In high-yielding dairy cows and goats, metabolic regulation operates under <strong>Homeorhesis</strong>—the coordinated physiological partitioning of whole-body nutrients to prioritize a dominant physiological state (<strong>Lactation</strong>):</p>
<ul>
  <li><strong>Prolactin, Growth Hormone (Bovine Somatotropin / bST), and Cortisol:</strong> Induce profound peripheral insulin resistance in skeletal muscle and adipose tissue.</li>
  <li>Peripheral glucose uptake by muscle is suppressed, preserving the entire available blood glucose pool for uptake by the non-insulin-dependent <strong>mammary gland (GLUT-1)</strong> for milk lactose synthesis.</li>
</ul>""",
        "eliteDesc": """<h4>Equine Metabolic Syndrome (EMS) & Insulin Resistance</h4>
<p>Equine Metabolic Syndrome is a widespread endocrinopathy affecting ponies, Morgans, and Andalusian horses characterized by <strong>Insulin Dysregulation / Peripheral Insulin Resistance</strong>, generalized obesity with regional adiposity ('cresty neck' and tailhead fat pads), and predisposition to <strong>endocrinopathic laminitis</strong>. Adipose tissue secretes high levels of pro-inflammatory cytokines and free fatty acids that downregulate insulin receptor substrate (IRS-1) signaling in myocytes. To compensate, pancreatic $\beta$-cells secrete massive quantities of insulin (resting insulin > 50–100 $\mu\\text{IU/mL}$). Sustained, severe hyperinsulinemia directly damages digital laminar vascular endothelial cells and induces unregulated endothelin-1 vasoconstriction, triggering laminar separation and agonizing, crippling laminitis.</p>""",
        "keyPoints": [
            "The liver acts as the central metabolic distribution clearinghouse for carbohydrates, lipids, and nitrogen.",
            "Muscle glycogen lacks Glucose-6-Phosphatase; it cannot release free glucose into blood.",
            "Cardiac muscle depends almost exclusively on fatty acid beta-oxidation and ketone bodies for ATP.",
            "The brain normally utilizes glucose exclusively; adapts to oxidize ketone bodies during starvation.",
            "Fed state is dominated by Insulin: stimulates glycogenesis, lipogenesis, and protein synthesis.",
            "Fasting state is dominated by Glucagon and Epinephrine: stimulates glycogenolysis, lipolysis, and gluconeogenesis.",
            "In early lactation, homeorhesis partitions whole-body glucose toward the mammary gland.",
            "Mammary glucose uptake is insulin-independent, driving milk lactose synthesis.",
            "During prolonged starvation, ketone bodies replace glucose as the brain's primary fuel, sparing muscle protein.",
            "Equine Metabolic Syndrome (EMS) involves severe insulin resistance, cresty neck adiposity, and laminitis.",
            "Bovine fatty liver syndrome occurs when adipose NEFA mobilization exceeds hepatic VLDL export capacity.",
            "AMPK is the master cellular fuel sensor, shutting down ATP-consuming anabolism when AMP is elevated."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Bovine Hepatic Lipidosis (Fatty Liver Syndrome) in Periparturient Dairy Cows:<br>
In high-yielding dairy cattle entering early lactation with excessive body condition score (BCS $\ge 4.0/5.0$, 'Fat Cow Syndrome'), extreme negative energy balance triggers massive lipolysis of adipose triacylglycerols. Non-esterified fatty acids (NEFA) flood the portal circulation (> 0.70–1.0 mmol/L). Hepatocytes take up NEFA at rates exceeding their capacity for mitochondrial $\beta$-oxidation or ketogenesis. Excess fatty acids are re-esterified into triacylglycerols. Because ruminant hepatocytes have an inherently slow rate of <strong>Apolipoprotein B</strong> synthesis and <strong>VLDL secretion</strong>, triacylglycerols cannot be exported into the bloodstream. Massive macrovesicular lipid droplets accumulate within hepatocytes (exceeding 20–30% of liver fresh weight). Afflicted cows manifest severe anorexia, profound depression, recumbency (downer cow), ketosis, immunosuppression (severe metritis/mastitis), and failure to respond to standard dextrose therapy, carrying a high mortality rate.</p>""",
        "tables": [
            {
                "title": "Metabolic Profiles and Preferred Energy Fuels of Major Animal Tissues",
                "headers": ["Tissue / Organ", "Primary Fuel Consumed (Fed State)", "Primary Fuel Consumed (Fasting State)", "Major Energy Reservoir Stored", "Specialized Metabolic Role"],
                "rows": [
                    ["Liver", "Glucose, Amino acids", "Fatty acids (NEFA)", "Glycogen (5-8% weight)", "Maintains blood glucose; urea cycle; ketogenesis"],
                    ["Skeletal Muscle", "Glucose", "Fatty acids, Ketone bodies", "Glycogen (1-2% weight)", "Fuel consumer for locomotion; exports alanine/lactate"],
                    ["Cardiac Muscle", "Fatty acids (60-80%)", "Fatty acids, Ketone bodies", "Negligible", "Continuous aerobic pump; dense with mitochondria"],
                    ["Adipose Tissue", "Glucose (makes glycerol-3-P)", "Fatty acids", "Triacylglycerols (85% weight)", "Primary whole-body energy reservoir; secretes leptin"],
                    ["Brain", "Glucose exclusively", "Glucose + Ketone bodies", "None (Zero)", "Constant high ATP demand for ion pumps; no fuel storage"],
                    ["Mammary Gland", "Glucose (makes lactose)", "Acetate (makes milk fat)", "None", "Lactation sink: consumes up to 80% of whole-body glucose"]
                ]
            },
            {
                "title": "Hormonal Reciprocal Control of Key Metabolic Checkpoint Enzymes",
                "headers": ["Metabolic Pathway", "Key Checkpoint Enzyme", "Effect of Insulin (Fed State)", "Effect of Glucagon / Epinephrine (Fasting)"],
                "rows": [
                    ["Glycolysis", "Phosphofructokinase-1 (PFK-1)", "<strong>Activated</strong> (via elevated F2,6BP)", "<strong>Inhibited</strong> (via decreased F2,6BP)"],
                    ["Gluconeogenesis", "Fructose-1,6-Bisphosphatase", "<strong>Inhibited</strong> (by F2,6BP)", "<strong>Activated</strong> (decreased F2,6BP relieves block)"],
                    ["Glycogenesis", "Glycogen Synthase", "<strong>Activated</strong> (Dephosphorylated)", "<strong>Inactivated</strong> (Phosphorylated via PKA)"],
                    ["Glycogenolysis", "Glycogen Phosphorylase", "<strong>Inactivated</strong> (Dephosphorylated)", "<strong>Activated</strong> (Phosphorylated via PKA)"],
                    ["Lipogenesis", "Acetyl-CoA Carboxylase (ACC)", "<strong>Activated</strong> (Dephosphorylated)", "<strong>Inactivated</strong> (Phosphorylated via AMPK/PKA)"],
                    ["Lipolysis (Adipose)", "Hormone-Sensitive Lipase (HSL)", "<strong>Inactivated</strong> (Halts lipolysis)", "<strong>Activated</strong> (Stimulates massive lipolysis)"]
                ]
            }
        ],
        "img": "",
        "tags": ["Metabolic Integration", "Fed State", "Fasting", "Insulin", "Glucagon", "Fatty Liver Syndrome", "EMS", "Homeorhesis"]
    }
}
