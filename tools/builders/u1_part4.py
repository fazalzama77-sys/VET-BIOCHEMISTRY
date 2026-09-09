"""
Unit 1 Part 4: Protein Chemistry & Amino Acids
Topics: u1-t13 to u1-t15
"""

PART4 = {
    "u1-t13": {
        "summary": "Proteins are nitrogenous macromolecules composed of L-alpha-amino acids organized into a four-tier structural hierarchy, exhibiting amphoteric, colloidal, and denaturation properties essential for cellular structure, enzymatic catalysis, and systemic immunity.",
        "desc": """<h4>1. Definition and Classification of Proteins</h4>
<p>Proteins are high-molecular-weight heteropolymers of $\\text{L-}\\alpha$-amino acids linked by peptide bonds, containing approximately 16% nitrogen by mass (converting nitrogen content to crude protein via the Kjeldahl multiplier: $\\text{Crude Protein} = N \\times 6.25$).</p>
<ul>
  <li><strong>1. Simple Proteins:</strong> Yield only amino acids upon complete hydrolysis:
    <ul>
      <li><em>Globular:</em> Soluble in water or dilute salt solutions, compact spherical shape (e.g., Albumin, Globulins, Histones).</li>
      <li><em>Fibrous (Scleroproteins):</em> Insoluble, extended polypeptide ropes providing mechanical strength (e.g., Collagen in connective tissue, $\\alpha$-Keratin in hooves/horns/wool, Elastin in ligaments).</li>
    </ul>
  </li>
  <li><strong>2. Conjugated Proteins:</strong> Composed of a simple protein combined with a non-protein prosthetic group:
    <ul>
      <li><em>Glycoproteins:</em> Protein + carbohydrate (e.g., Immunoglobulins, Mucin, TSH).</li>
      <li><em>Lipoproteins:</em> Protein + lipid (e.g., Chylomicrons, VLDL, HDL).</li>
      <li><em>Phosphoproteins:</em> Protein + phosphate (e.g., Casein of milk, Vitellin of egg yolk).</li>
      <li><em>Metalloproteins:</em> Protein + metal ion (e.g., Ceruloplasmin [$Cu$], Ferritin [$Fe$], Carbonic Anhydrase [$Zn$]).</li>
      <li><em>Chromoproteins:</em> Protein + pigmented prosthetic group (e.g., Hemoglobin [heme], Cytochromes, Rhodopsin).</li>
    </ul>
  </li>
  <li><strong>3. Derived Proteins:</strong> Denaturation or degradation products formed by heat, acid, alkali, or enzymatic proteolysis (e.g., Proteoses, Peptones, Polypeptides, Metaproteins).</li>
</ul>

<h4>2. Structural Hierarchy of Proteins</h4>
<ol>
  <li><strong>Primary Structure:</strong> The linear, covalent sequence of amino acids from the N-terminus to the C-terminus, dictated by the genetic code. Linked exclusively by <strong>peptide bonds</strong> and occasional covalent <strong>disulfide bonds</strong>. Determines all higher levels of folding.</li>
  <li><strong>Secondary Structure:</strong> Local spatial folding of the polypeptide backbone stabilized exclusively by <strong>Hydrogen Bonds</strong> between peptide amide ($N-H$) and carbonyl ($C=O$) groups:
    <ul>
      <li><em>$\\alpha$-Helix:</em> Right-handed coiled rod with 3.6 amino acid residues per turn ($0.54\\ \\text{nm}$ pitch). Intra-chain hydrogen bonds run parallel to the helical axis between the $C=O$ of residue $n$ and the $N-H$ of residue $n+4$. Proline disrupts $\\alpha$-helices (acts as a 'helix breaker').</li>
      <li><em>$\\beta$-Pleated Sheet:</em> Extended polypeptide strands aligned side-by-side. Hydrogen bonds form inter-strand bridges perpendicular to the polypeptide chain. Strands can be <em>parallel</em> (same direction) or <em>anti-parallel</em> (opposite directions, thermodynamically more stable).</li>
    </ul>
  </li>
  <li><strong>Tertiary Structure:</strong> The overall three-dimensional native conformation of a single polypeptide chain, folding into functional domains. Stabilized by interactions among amino acid side-chain (R-group) residues:
    <ul>
      <li><em>Hydrophobic Interactions:</em> Non-polar aliphatic and aromatic side chains bury themselves inside the protein interior away from water (the primary thermodynamic driving force of folding).</li>
      <li><em>Hydrogen Bonds:</em> Between polar side chains (e.g., Ser $-OH$ and Glu $-COOH$).</li>
      <li><em>Ionic Bonds (Salt Bridges):</em> Electrostatic attractions between positively charged basic residues ($Lys^+, Arg^+$) and negatively charged acidic residues ($Asp^-, Glu^-$).</li>
      <li><em>Disulfide Bonds ($-S-S-$):</em> Strong covalent bridges formed by oxidative cross-linking between two cysteine sulfhydryl ($-SH$) groups.</li>
    </ul>
  </li>
  <li><strong>Quaternary Structure:</strong> Spatial arrangement and non-covalent assembly of two or more independent tertiary polypeptide subunits into an oligomeric functional protein (e.g., Hemoglobin is a tetramer $\\alpha_2\\beta_2$; Immunoglobulin G is a heterotetramer $H_2L_2$).</li>
</ol>

<h4>3. Physicochemical Properties & Denaturation</h4>
<ul>
  <li><strong>Colloidal Nature:</strong> High molecular weights ($10 - 1,000\\ \\text{kDa}$) prevent passage through semipermeable membranes (dialysis principle) and produce light scattering (Tyndall effect). Plasma albumin generates intravascular oncotic pressure.</li>
  <li><strong>Denaturation:</strong> Disruption of secondary, tertiary, and quaternary native structures without breaking covalent peptide bonds. Induced by physical agents (heat, UV radiation, mechanical shearing) or chemical agents (strong acids/bases, urea, guanidine hydrochloride, heavy metals, organic solvents). Results in loss of biological and enzymatic activity, decreased solubility, increased viscosity, and exposure of buried hydrophobic groups causing precipitation.</li>
</ul>""",
        "eliteDesc": """<h4>Anfinsen's Dogma & The Thermodynamics of Protein Folding</h4>
<p>Christian Anfinsen demonstrated (1973) that the native 3D tertiary structure of a protein is encoded entirely within its primary amino acid sequence. Folding proceeds down a thermodynamic funnel toward the lowest free energy state ($\Delta G < 0$):</p>
$$\Delta G_{\\text{folding}} = \Delta H - T\Delta S$$
<p>Although the conformational entropy ($\Delta S_{\\text{chain}}$) of the polypeptide chain decreases during folding, this is overwhelmingly compensated by the massive increase in solvent entropy ($\Delta S_{\\text{solvent}} \gg 0$) resulting from the liberation of ordered water cages surrounding exposed hydrophobic residues (the <strong>Hydrophobic Effect</strong>).</p>

<h4>Prion Diseases: The Pathological Misfolding Template</h4>
<p>Prion encephalopathies in veterinary medicine (e.g., Bovine Spongiform Encephalopathy / BSE, Scrapie in sheep, Chronic Wasting Disease in deer) represent post-translational conformational template corruption. The normal cellular prion protein ($PrP^C$, rich in $\\alpha$-helices, 42%) undergoes a catastrophic structural shift into the pathogenic scrapie isoform ($PrP^{Sc}$, rich in $\\beta$-sheets, 43%). $PrP^{Sc}$ forms insoluble amyloid fibril plaques that resist autoclaving, formalization, and endogenous proteolysis by proteinase K.</p>""",
        "keyPoints": [
            "Proteins are nitrogenous macromolecules of L-alpha-amino acids (average 16% nitrogen; factor 6.25).",
            "Classified into Simple (globular, fibrous), Conjugated (prosthetic group), and Derived proteins.",
            "Primary structure is the linear amino acid sequence linked by covalent peptide and disulfide bonds.",
            "Secondary structure ($\\alpha$-helix, $\\beta$-sheet) is stabilized exclusively by peptide backbone hydrogen bonds.",
            "$\\alpha$-Helix has 3.6 residues per turn; proline acts as an obligate helix-breaker residue.",
            "Tertiary structure is the native 3D conformation driven predominantly by hydrophobic interactions.",
            "Disulfide bonds ($-S-S-$) between cysteines provide the strongest covalent stabilizing force in tertiary structure.",
            "Quaternary structure represents the oligomeric assembly of multiple polypeptide subunits (e.g., Hemoglobin).",
            "Plasma albumin provides 80% of intravascular colloidal osmotic (oncotic) pressure (~25 mmHg).",
            "Denaturation disrupts secondary, tertiary, and quaternary structures without cleaving peptide bonds.",
            "Denatured proteins lose biological activity, precipitate out of solution, and expose hydrophobic cores.",
            "Prion diseases (BSE, Scrapie) represent transmissible conversion of $\\alpha$-helices into insoluble $\\beta$-sheets."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Hypoalbuminemia and Pitting Edema in Canine Nephrotic Syndrome / Ruminant Fasciolosis:<br>
Serum albumin (MW ~66.5 kDa) is the principal contributor to plasma colloid osmotic (oncotic) pressure. When severe protein loss occurs—either through damaged glomerular basement membranes in canine glomerulonephritis/amyloidosis (proteinuria) or through hematophagous liver flukes in chronic ovine/bovine fasciolosis (<em>Fasciola hepatica</em>)—plasma albumin falls below the critical threshold of <strong>1.5 g/dL</strong> (normal 2.5–3.8 g/dL). According to Starling's equation of capillary filtration ($J_v = K_f [ (P_c - P_i) - \sigma (\pi_c - \pi_i) ]$), the collapse of capillary oncotic pressure ($\pi_c$) permits hydrostatic pressure ($P_c$) to drive fluid unchecked into interstitial spaces. This produces severe dependent pitting edema ('bottle jaw' in sheep and submandibular/ventral edema in cattle) and cavitary ascites in dogs.</p>""",
        "tables": [
            {
                "title": "Levels of Protein Structural Organization",
                "headers": ["Structural Level", "Definition", "Primary Stabilizing Bonds", "Characteristic Examples"],
                "rows": [
                    ["Primary", "Linear sequence of amino acids from N- to C-terminus", "Covalent peptide bonds; disulfide bonds", "Bovine Insulin A and B chains"],
                    ["Secondary", "Local regular folding of polypeptide backbone", "Hydrogen bonds between peptide $C=O$ and $N-H$", "$\\alpha$-Helix in keratin; $\\beta$-pleated sheets in fibroin"],
                    ["Tertiary", "Overall 3D spatial conformation of a single chain", "Hydrophobic forces, salt bridges, H-bonds, $-S-S-$", "Myoglobin, Ribonuclease, Albumin domain folding"],
                    ["Quaternary", "Spatial arrangement of multiple polypeptide subunits", "Non-covalent bonds (hydrophobic, ionic, H-bonds)", "Hemoglobin ($\\alpha_2\\beta_2$), Immunoglobulin G ($H_2L_2$)"]
                ]
            },
            {
                "title": "Fibrous vs. Globular Proteins in Animal Biology",
                "headers": ["Feature", "Fibrous Proteins (Scleroproteins)", "Globular Proteins"],
                "rows": [
                    ["Shape & Conformation", "Elongated, thread-like, rope-like structural fibers", "Compact, spherical, ellipsoidal dynamic molecules"],
                    ["Water Solubility", "Completely insoluble in water, dilute acids, and bases", "Soluble in water, neutral salt solutions, and buffers"],
                    ["Primary Role", "Structural integrity, mechanical strength, protection", "Dynamic functions: enzymatic, transport, defense, regulatory"],
                    ["Secondary Structure", "Dominated by single repetitive secondary structure", "Complex mixture of $\\alpha$-helices, $\\beta$-sheets, and loops"],
                    ["Veterinary Examples", "$\\alpha$-Keratin (horns, hooves, hair), Collagen, Elastin", "Enzymes, Serum Albumin, Hemoglobin, Antibodies"]
                ]
            }
        ],
        "img": "",
        "tags": ["Proteins", "Peptide Bond", "Alpha Helix", "Tertiary Structure", "Denaturation", "Albumin", "Edema"]
    },

    "u1-t14": {
        "summary": "Amino acids are the twenty standard monomeric building blocks of proteins, possessing a central alpha-carbon bonded to an amino group, a carboxyl group, and a variable side chain (R-group) whose chemical polarity, charge, and essentiality govern protein architecture and species-specific dietary requirements.",
        "desc": """<h4>1. Universal Chemical Structure of Amino Acids</h4>
<p>With the exception of proline (which is an $\\alpha$-imino acid with a cyclic pyrrolidine ring), all 20 standard proteinogenic amino acids share a common chemical structure: a central chiral <strong>$\\alpha$-carbon ($C_\\alpha$)</strong> covalently bonded to four distinct functional groups:</p>
<ol>
  <li>A basic <strong>Amino group ($-NH_2$)</strong>.</li>
  <li>An acidic <strong>Carboxyl group ($-COOH$)</strong>.</li>
  <li>A <strong>Hydrogen atom ($-H$)</strong>.</li>
  <li>A distinctive variable <strong>Side Chain (R-group)</strong> that confers specific chemical, physical, and functional properties.</li>
</ol>
<p>Because the $\\alpha$-carbon in 19 of the 20 amino acids is asymmetric (bonded to four different groups), they exhibit optical stereoisomerism. In living biological systems, <strong>all proteinogenic amino acids belong exclusively to the L-stereochemical series</strong>.</p>

<h4>2. Classification of Amino Acids Based on R-Group Polarity and Charge</h4>
<ul>
  <li><strong>1. Non-Polar, Aliphatic R-Groups (Hydrophobic):</strong>
    <ul>
      <li><strong>Glycine ($Gly, G$):</strong> Smallest amino acid; R-group is a single hydrogen atom ($-H$). Achiral (optically inactive); allows tight conformations in collagen and beta-turns.</li>
      <li><strong>Alanine ($Ala, A$):</strong> Methyl side chain ($-CH_3$); central substrate in the glucose-alanine cycle.</li>
      <li><strong>Valine ($Val, V$), Leucine ($Leu, L$), Isoleucine ($Ile, I$):</strong> <em>Branched-Chain Amino Acids (BCAAs)</em>. Extensively catabolized in skeletal muscle rather than the liver.</li>
      <li><strong>Proline ($Pro, P$):</strong> Cyclic imino acid; rigid five-membered pyrrolidine ring induces bends and terminates $\\alpha$-helices.</li>
      <li><strong>Methionine ($Met, M$):</strong> Thioether sulfur-containing amino acid; primary source of methyl groups via S-Adenosylmethionine (SAM).</li>
    </ul>
  </li>
  <li><strong>2. Aromatic R-Groups:</strong>
    <ul>
      <li><strong>Phenylalanine ($Phe, F$):</strong> Purely hydrophobic benzene ring.</li>
      <li><strong>Tyrosine ($Tyr, Y$):</strong> Phenolic hydroxyl group ($-OH$); weakly polar; precursor of catecholamines (epinephrine, dopamine), thyroid hormones ($T_3, T_4$), and melanin.</li>
      <li><strong>Tryptophan ($Trp, W$):</strong> Indole ring; absorbs UV light at 280 nm; precursor of serotonin, melatonin, and niacin.</li>
    </ul>
  </li>
  <li><strong>3. Polar, Uncharged R-Groups (Hydrophilic):</strong>
    <ul>
      <li><strong>Serine ($Ser, S$) & Threonine ($Thr, T$):</strong> Possess aliphatic hydroxyl ($-OH$) groups; sites of reversible regulatory phosphorylation and O-linked glycosylation.</li>
      <li><strong>Cysteine ($Cys, C$):</strong> Reactive sulfhydryl (thiol, $-SH$) group; oxidizes to form covalent <strong>disulfide bridges (Cystine)</strong> that stabilize tertiary and extracellular protein structures.</li>
      <li><strong>Asparagine ($Asn, N$) & Glutamine ($Gln, Q$):</strong> Amides of aspartic and glutamic acids; non-toxic circulating reservoirs and transporters of ammonia.</li>
    </ul>
  </li>
  <li><strong>4. Negatively Charged (Acidic) R-Groups:</strong>
    <ul>
      <li><strong>Aspartate ($Asp, D$) & Glutamate ($Glu, E$):</strong> Contain a second carboxyl group ($-COO^-$ at pH 7.4). Carry net negative charge at physiological pH; donate protons and coordinate metal cations.</li>
    </ul>
  </li>
  <li><strong>5. Positively Charged (Basic) R-Groups:</strong>
    <ul>
      <li><strong>Lysine ($Lys, K$):</strong> $\\epsilon$-amino group; basic; essential amino acid.</li>
      <li><strong>Arginine ($Arg, R$):</strong> Strongly basic <strong>guanidinium group</strong>; component of the urea cycle; precursor for nitric oxide (NO) synthesis.</li>
      <li><strong>Histidine ($His, H$):</strong> Contains an <strong>imidazole ring</strong> with a near-neutral $pK_a \\approx 6.0$. Can alternately accept or donate protons at physiological pH (7.4), acting as the premier catalytic general acid-base residue in enzyme active centers and hemoglobin.</li>
    </ul>
  </li>
</ul>

<h4>3. Nutritional Classification in Veterinary Species</h4>
<ul>
  <li><strong>Essential (Indispensable) Amino Acids:</strong> Cannot be synthesized endogenously at rates adequate to support animal maintenance and growth; must be supplied in feed.
    <p><em>Standard 10 Essential Amino Acids (Mnemonic: PVT TIM HALL):</em><br>
    <strong>P</strong>henylalanine, <strong>V</strong>aline, <strong>T</strong>hreonine, <strong>T</strong>ryptophan, <strong>I</strong>soleucine, <strong>M</strong>ethionine, <strong>H</strong>istidine, <strong>A</strong>rginine, <strong>L</strong>eucine, <strong>L</strong>ysine.</p>
  </li>
  <li><strong>Unique Species Requirements in Veterinary Medicine:</strong>
    <ul>
      <li><strong>Cats (Strict Carnivores):</strong> Require dietary <strong>Taurine</strong> (2-aminoethanesulfonic acid, a beta-sulfonic amino acid derivative). Cats have low activity of cysteine sulfinic acid decarboxylase and obligatorily conjugate bile acids exclusively with taurine. Deficiency causes feline central retinal degeneration (FCRD/blindness) and dilated cardiomyopathy (DCM). Cats also have an obligate dietary requirement for <strong>Arginine</strong>; a single arginine-free meal causes fatal hyperammonemia within hours.</li>
      <li><strong>Poultry (Broilers/Layers):</strong> Require <strong>Glycine</strong> and <strong>Proline</strong> as dietary essentials because rapid feather protein synthesis (keratin) and urate excretion (which consumes 1 glycine per uric acid molecule) exceed endogenous synthesis.</li>
      <li><strong>Adult Ruminants:</strong> Possess no dietary requirement for specific amino acids under normal production, because ruminal microbes synthesize all essential amino acids from non-protein nitrogen (urea) and dietary fiber. However, <strong>Methionine and Lysine</strong> are the first-limiting amino acids for high-yield milk protein production.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>UV Absorption Spectroscopy of Aromatic Amino Acids</h4>
<p>Proteins display a characteristic ultraviolet absorption spectrum with a sharp peak at <strong>280 nm</strong>, contributed almost entirely by the aromatic side chains of <strong>Tryptophan ($W$)</strong> and <strong>Tyrosine ($Y$)</strong> (with a minor contribution from Phenylalanine at 257 nm):</p>
$$A_{280} = \\epsilon_{280} \\cdot c \\cdot l \\quad (\\text{Beer-Lambert Law})$$
<p>Tryptophan has the highest molar extinction coefficient ($\\epsilon_{280} = 5,690\\ \\text{M}^{-1}\\text{cm}^{-1}$) due to its conjugated indole ring system. This biophysical property permits rapid, non-destructive spectrophotometric quantification of protein concentration in veterinary clinical pathology.</p>""",
        "keyPoints": [
            "Amino acids possess an $\\alpha$-carbon bonded to $-NH_2$, $-COOH$, $-H$, and a unique R-group.",
            "All 19 chiral amino acids in biological proteins belong to the L-stereochemical series.",
            "Glycine is the simplest amino acid, has no asymmetric carbon, and is optically inactive.",
            "Branched-chain amino acids (Valine, Leucine, Isoleucine) are catabolized in skeletal muscle.",
            "Proline contains a secondary cyclic imino ring and acts as an $\\alpha$-helix breaker.",
            "Cysteine contains a sulfhydryl ($-SH$) group, forming covalent disulfide bonds in proteins.",
            "Histidine contains an imidazole ring ($pK_a \\approx 6.0$), serving as a vital physiological buffer.",
            "The 10 essential amino acids are summarized by the mnemonic PVT TIM HALL.",
            "Felines require dietary Taurine; deficiency causes dilated cardiomyopathy and retinal blindness.",
            "Cats are exquisitely sensitive to Arginine deficiency; a single deficient meal causes fatal ammonia toxicity.",
            "Poultry require dietary Glycine and Proline for feather keratinization and uric acid excretion.",
            "Tryptophan and Tyrosine absorb UV light maximally at 280 nm, enabling spectrophotometric assay."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Feline Obligate Dietary Taurine Deficiency:<br>
Unlike dogs and humans, cats cannot synthesize sufficient quantities of <strong>Taurine</strong> (2-aminoethanesulfonic acid) from dietary cysteine and methionine because feline hepatic enzymes (cysteine dioxygenase and cysteinesulfinate decarboxylase) have extremely low activity. Furthermore, whereas dogs can switch to conjugating bile acids with glycine during taurine scarcity, feline hepatocytes obligatorily conjugate bile salts exclusively with taurine. If a cat is fed a vegetarian diet, canine dog food, or poorly formulated commercial rations deficient in animal tissue, whole-body taurine depletes. This results in two classic clinical pathologies: <strong>Feline Central Retinal Degeneration (FCRD)</strong> with irreversible cone photoreceptor loss and bilateral blindness, and myocardial failure manifesting as <strong>Feline Dilated Cardiomyopathy (DCM)</strong>. Taurine supplementation is curative if instituted before end-stage myocardial decompensation.</p>""",
        "tables": [
            {
                "title": "Classification of the 20 Standard Amino Acids by R-Group Properties",
                "headers": ["Chemical Category", "Amino Acid Members", "Single-Letter Code", "Key Side Chain Feature", "Physiological Role"],
                "rows": [
                    ["Non-Polar Aliphatic", "Glycine, Alanine, Valine, Leucine, Isoleucine, Proline", "G, A, V, L, I, P", "Hydrophobic hydrocarbon chains; proline is cyclic imino", "Buried in protein core; BCAAs fuel muscle metabolism"],
                    ["Aromatic", "Phenylalanine, Tyrosine, Tryptophan", "F, Y, W", "Benzene, phenol, and indole aromatic rings", "UV absorption at 280 nm; precursors for hormones/pigments"],
                    ["Polar Uncharged", "Serine, Threonine, Cysteine, Methionine, Asparagine, Glutamine", "S, T, C, M, N, Q", "Hydroxyl ($-OH$), sulfhydryl ($-SH$), thioether, or amide", "Phosphorylation sites; disulfide bonds; nitrogen transport"],
                    ["Acidic (Negative at pH 7)", "Aspartate, Glutamate", "D, E", "Carboxylate group ($-COO^-$)", "Salt bridge formation; catalytic proton shuttling"],
                    ["Basic (Positive at pH 7)", "Lysine, Arginine, Histidine", "K, R, H", "Amino, guanidinium, and imidazole rings", "DNA binding (histones); physiological buffering at pH 7.4"]
                ]
            },
            {
                "title": "Comparative Dietary Essential Amino Acid Requirements",
                "headers": ["Animal Species", "Standard Essentials (PVT TIM HALL)", "Additional Essential Requirements", "Clinical Manifestation of Deficiency"],
                "rows": [
                    ["Canine (Dog)", "All 10 required", "None (synthesizes taurine)", "Poor coat, weight loss, impaired growth"],
                    ["Feline (Cat)", "All 10 required", "Taurine + High Arginine requirement", "Retinal degeneration (FCRD), dilated cardiomyopathy (DCM), ammonia toxicity"],
                    ["Poultry (Chicken/Turkey)", "All 10 required", "Glycine + Proline essential", "Poor feathering, perosis, decreased egg production, reduced urate excretion"],
                    ["Ruminants (Cattle/Sheep)", "None dietary (microbial synthesis)", "Methionine & Lysine are production-limiting", "Decreased milk yield and low milk protein percentage"]
                ]
            }
        ],
        "img": "",
        "tags": ["Amino Acids", "Essential Amino Acids", "Taurine", "Arginine", "Cysteine", "Disulfide Bonds"]
    },

    "u1-t15": {
        "summary": "Amino acids exist in aqueous physiological solutions as dipolar zwitterions with characteristic isoelectric points (pI), condensing via rigid, planar trans-peptide bonds with partial double-bond character that form the covalent backbone of all proteins.",
        "desc": """<h4>1. Physical and Chemical Properties of Amino Acids</h4>
<ul>
  <li><strong>1. Optical Activity:</strong> All amino acids except glycine contain at least one chiral center ($C_\\alpha$) and rotate plane-polarized light. Natural amino acids are of the <strong>L-configuration</strong> (the $-NH_3^+$ group projects to the left in Fischer projections).</li>
  <li><strong>2. Amphoteric Nature & Zwitterion Formation:</strong> Amino acids possess both acidic ($-COOH$) and basic ($-NH_2$) groups. In neutral aqueous solution (pH 7.0), the carboxyl group loses a proton and the amino group gains a proton, forming a dipolar ion called a <strong>Zwitterion</strong> (German for 'hybrid ion'):
  $$H_3N^+ - CH(R) - COO^-$$
  A zwitterion possesses zero net electrical charge, high dipole moments, water solubility, and high melting points (> 200°C).</li>
  <li><strong>3. Isoelectric Point ($pI$):</strong>
    <ul>
      <li><strong>Definition:</strong> The specific pH at which an amino acid (or protein) carries <strong>zero net electrical charge</strong> and does not migrate in an electric field during electrophoresis.</li>
      <li>At $\\text{pH} = pI$, an amino acid exhibits <strong>minimum aqueous solubility, minimum buffering capacity, and maximum precipitability</strong>.</li>
      <li>At $\\text{pH} < pI$, the amino acid exists as a net <strong>cation ($+1$)</strong> and migrates toward the cathode.</li>
      <li>At $\\text{pH} > pI$, the amino acid exists as a net <strong>anion ($-1$)</strong> and migrates toward the anode.</li>
    </ul>
  </li>
  <li><strong>4. Calculation of $pI$:</strong>
    <ul>
      <li><em>For Diprotic Amino Acids (Neutral R-group, e.g., Alanine):</em>
      $$pI = \\frac{pK_{a1} (-COOH) + pK_{a2} (-NH_3^+)}{2}$$
      For Alanine ($pK_{a1} = 2.34, pK_{a2} = 9.69$): $pI = (2.34 + 9.69)/2 = \\mathbf{6.02}$.</li>
      <li><em>For Acidic Amino Acids (e.g., Aspartate):</em>
      $$pI = \\frac{pK_{a1} (\\alpha-COOH) + pK_{aR} (R-COOH)}{2} = \\frac{2.1 + 3.9}{2} = \\mathbf{3.0}$$</li>
      <li><em>For Basic Amino Acids (e.g., Lysine):</em>
      $$pI = \\frac{pK_{aR} (\\epsilon-NH_3^+) + pK_{a2} (\\alpha-NH_3^+)}{2} = \\frac{10.5 + 9.0}{2} = \\mathbf{9.75}$$</li>
    </ul>
  </li>
</ul>

<h4>2. The Peptide Bond</h4>
<p>A <strong>peptide bond</strong> is an amide linkage formed by the condensation of the $\\alpha$-carboxyl group of one amino acid with the $\\alpha$-amino group of another, eliminating a water molecule:</p>
$$R_1-COOH + H_2N-R_2 \\longrightarrow R_1-CO-NH-R_2 + H_2O$$

<h4>3. Electronic and Geometric Characteristics of the Peptide Bond</h4>
<p>Described by Linus Pauling and Robert Corey (1951):</p>
<ol>
  <li><strong>Partial Double-Bond Character (40%):</strong> Due to resonance delocalization of the lone pair of electrons on the amide nitrogen atom into the carbonyl group:
  $$C-N \\longleftrightarrow C=N^+$$
  Consequently, the $C-N$ bond length is <strong>$0.132\\ \\text{nm}$</strong>, significantly shorter than a normal single $C-N$ bond ($0.147\\ \\text{nm}$) and longer than a true $C=N$ double bond ($0.128\\ \\text{nm}$).</li>
  <li><strong>Rigidity and Planarity:</strong> The partial double bond prevents free rotation around the $C-N$ peptide axis. The six atoms of the peptide group ($C_\\alpha1, C, O, N, H, C_\\alpha2$) lie strictly within a <strong>single coplanar rigid plane</strong>.</li>
  <li><strong>Trans Conformation:</strong> Due to steric hindrance between the bulky R-groups of adjacent amino acids, the two $\\alpha$-carbons almost universally occupy the <strong>trans</strong> configuration (dihedral angle $\\omega = 180^\\circ$) across the peptide bond. (Cis peptide bonds occur rarely, restricted primarily to Proline residues).</li>
  <li><strong>Rotational Degrees of Freedom:</strong> Rotation in the polypeptide backbone is confined entirely to the bonds flanking the alpha-carbon:
    <ul>
      <li><strong>Phi ($\\phi$) angle:</strong> Rotation around the $N - C_\\alpha$ bond.</li>
      <li><strong>Psi ($\\psi$) angle:</strong> Rotation around the $C_\\alpha - C$ bond.</li>
    </ul>
    Allowed conformational values of $\\phi$ and $\\psi$ that avoid steric clash are mapped in the <strong>Ramachandran Plot</strong>.
  </li>
</ol>""",
        "eliteDesc": """<h4>The Ramachandran Plot and Allowed Secondary Structures</h4>
<p>G.N. Ramachandran (1963) at the University of Madras demonstrated that steric collisions between non-bonded atomic spheres strictly constrain the conformational freedom of the polypeptide backbone. In a Ramachandran diagram ($\phi$ plotted on the x-axis from $-180^\\circ$ to $+180^\\circ$, $\psi$ on the y-axis from $-180^\\circ$ to $+180^\\circ$), over 75% of conformational space is sterically forbidden:</p>
<ul>
  <li><strong>Top Left Quadrant ($\phi \\approx -120^\\circ, \\psi \\approx +120^\\circ$):</strong> Conformation of extended $\\beta$-pleated sheets (parallel and anti-parallel) and collagen triple helices.</li>
  <li><strong>Bottom Left Quadrant ($\phi \\approx -60^\\circ, \\psi \\approx -45^\\circ$):</strong> Conformation of right-handed $\\alpha$-helices.</li>
  <li><strong>Top Right Quadrant ($\phi \\approx +60^\\circ, \\psi \\approx +45^\\circ$):</strong> Conformation of rare left-handed $\\alpha$-helices.</li>
  <li><strong>Glycine Exception:</strong> Glycine lacks a side chain (R = H), possessing zero steric hindrance; its $(\phi, \psi)$ coordinates populate all four quadrants of the plot.</li>
</ul>""",
        "keyPoints": [
            "In aqueous neutral solutions, amino acids exist as dipolar zwitterions with zero net charge.",
            "Isoelectric point ($pI$) is the pH at which an amino acid carries net zero electrical charge.",
            "At its $pI$, an amino acid displays minimum water solubility and does not migrate during electrophoresis.",
            "When $\\text{pH} < pI$, amino acids exist as cations ($+$); when $\\text{pH} > pI$, they exist as anions ($-$).",
            "A peptide bond is an amide covalent linkage formed by elimination of water between $-COOH$ and $-NH_2$.",
            "Resonance gives the peptide bond 40% partial double-bond character ($0.132\\ \\text{nm}$ length).",
            "The six atoms of the peptide group ($C_\\alpha - C - O - N - H - C_\\alpha$) lie in a single rigid plane.",
            "Free rotation around the $C-N$ peptide bond is completely restricted.",
            "Peptide bonds almost universally adopt the sterically favored trans configuration.",
            "Polypeptide flexibility is restricted to rotations around $N - C_\\alpha$ ($\\phi$) and $C_\\alpha - C$ ($\\psi$).",
            "The Ramachandran plot maps sterically permissible $\\phi$ and $\\psi$ conformational angles.",
            "Glycine has conformational freedom in all quadrants of the Ramachandran plot due to its small R = H."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Serum Protein Electrophoresis (SPE) in Veterinary Clinical Diagnosis:<br>
Serum protein electrophoresis exploits the isoelectric point ($pI$) and net charge of proteins. Normal serum proteins are placed in an agarose gel or cellulose acetate strip buffered at an alkaline <strong>pH of 8.6</strong>. Because the $pI$ of major serum proteins is acidic (Albumin $pI \\approx 4.7$; Alpha-globulins $pI \\approx 5.1$; Beta-globulins $pI \\approx 5.6$; Gamma-globulins $pI \\approx 6.8 - 7.3$), at pH 8.6 all serum proteins carry net negative charges and migrate toward the <strong>anode ($+$)</strong>.<br>
Albumin carries the largest negative charge and has the smallest molecular weight, migrating the fastest and farthest. In cases of canine or feline <strong>Multiple Myeloma</strong> (plasma cell neoplasia), neoplastic plasma cells produce a monoclonal overabundance of a single immunoglobulin, visible on SPE as a narrow, tall, sharp spike in the gamma-globulin zone (<strong>Monoclonal Gammopathy / 'M-spike'</strong>). Conversely, chronic inflammatory conditions (such as Feline Infectious Peritonitis / FIP or equine strangles) generate a broad-based, heterogeneous elevation across the entire gamma region (<strong>Polyclonal Gammopathy</strong>).</p>""",
        "tables": [
            {
                "title": "Ionization States and Charges of an Amino Acid Across the pH Scale",
                "headers": ["Environmental pH", "Dominant Chemical Form", "Formula", "Net Electrical Charge", "Electrophoretic Migration"],
                "rows": [
                    ["Strongly Acidic ($\\text{pH} < pK_{a1}$)", "Fully protonated cation", "$H_3N^+ - CH(R) - COOH$", "+1", "Migrates toward Cathode ($-$)"],
                    ["Isoelectric Point ($\\text{pH} = pI$)", "Dipolar Zwitterion", "$H_3N^+ - CH(R) - COO^-$", "0 (Neutral)", "No migration (Stationary)"],
                    ["Strongly Alkaline ($\\text{pH} > pK_{a2}$)", "Fully deprotonated anion", "$H_2N - CH(R) - COO^-$", "-1", "Migrates toward Anode ($+$)"]
                ]
            },
            {
                "title": "Geometry and Bond Dimensions of the Peptide Backbone",
                "headers": ["Bond", "Bond Type", "Bond Length", "Rotational Freedom", "Governing Conformational Angle"],
                "rows": [
                    ["$C-N$ (Peptide)", "Partial double bond (resonance)", "$0.132\\ \\text{nm}$ (Shortened)", "Strictly rigid; no rotation", "$\\omega$ (Omega, fixed at $180^\\circ$ trans)"],
                    ["$N - C_\\alpha$", "Single covalent bond", "$0.145\\ \\text{nm}$", "Free rotation allowed", "$\\phi$ (Phi dihedral angle)"],
                    ["$C_\\alpha - C$", "Single covalent bond", "$0.152\\ \\text{nm}$", "Free rotation allowed", "$\\psi$ (Psi dihedral angle)"],
                    ["$C = O$ (Carbonyl)", "Double bond", "$0.124\\ \\text{nm}$", "Fixed within peptide plane", "Participates in secondary H-bonding"]
                ]
            }
        ],
        "img": "",
        "tags": ["Zwitterion", "Isoelectric Point", "Peptide Bond", "Ramachandran Plot", "Electrophoresis"]
    }
}
