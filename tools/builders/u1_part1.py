"""
Unit 1 Part 1: Biophysical Foundations & Water/Electrolytes
Topics: u1-t01 to u1-t05
"""

PART1 = {
    "u1-t01": {
        "summary": "Veterinary Biochemistry investigates the molecular logic of animal life, providing the fundamental chemical basis for animal nutrition, clinical diagnostics, disease pathogenesis, pharmacology, and livestock production.",
        "desc": """<h4>1. Definition and Historical Scope</h4>
<p>Biochemistry is the chemistry of life—the science concerned with the chemical constituents of living organisms, their transformations, and the energy changes accompanying them. In veterinary medicine, it bridges basic cellular biology with animal physiology, pathology, animal nutrition, and clinical medicine. It explains how inanimate chemical molecules interact to maintain life, sustain health, and drive animal productivity.</p>

<h4>2. Major Branches of Veterinary Biochemistry</h4>
<ul>
  <li><strong>Structural Biochemistry:</strong> Elucidates the chemical architecture of biomolecules (proteins, carbohydrates, lipids, nucleic acids, minerals, and vitamins) and relates structure to physiological function.</li>
  <li><strong>Intermediary Metabolism:</strong> Maps enzymatic pathways (catabolism and anabolism), bioenergetics (ATP yield and thermodynamic driving forces), and hormonal integration across tissues (liver, muscle, adipose, mammary gland).</li>
  <li><strong>Veterinary Clinical & Analytical Biochemistry:</strong> Explores metabolic alterations in diseased states, organ-specific enzymology (e.g., ALT, AST, CK), blood gas chemistry, and diagnostic laboratory testing.</li>
  <li><strong>Molecular Biology & Veterinary Genetics:</strong> Examines nucleic acid replication, gene expression, recombinant DNA biotechnology, and hereditary metabolic errors.</li>
</ul>

<h4>3. Pillars of Importance in Veterinary Practice</h4>
<ul>
  <li><strong>Pathogenesis of Metabolic Diseases:</strong> Explains complex production diseases such as bovine ketosis, pregnancy toxaemia in ewes, equine exertional rhabdomyolysis, and post-parturient hemoglobinuria at the enzyme and substrate level.</li>
  <li><strong>Clinical Diagnosis & Organ Function:</strong> Serum enzymology reveals cellular injury before gross symptoms appear (e.g., elevated SDH/GLDH in large animal hepatopathy; cPLI in canine pancreatitis). Urine analysis and renal clearance tests (BUN, creatinine) monitor excretory integrity.</li>
  <li><strong>Animal Nutrition & Feed Efficiency:</strong> Ruminant nutrition is essentially microbial biochemistry: ruminal fermentation converts structural plant carbohydrates (cellulose, hemicellulose) into volatile fatty acids (acetate, propionate, butyrate), driving gluconeogenesis and milk fat synthesis.</li>
  <li><strong>Pharmacology & Toxicology:</strong> Drug biotransformation relies on Phase I (Cytochrome P450) and Phase II (conjugation) hepatic enzyme systems. Toxic mechanisms (e.g., cyanide inhibiting cytochrome c oxidase, fluoroacetate blocking aconitase) are purely biochemical lesions.</li>
  <li><strong>Livestock Genetics & Production:</strong> Marker-assisted selection, genomic breeding values, and biochemical markers (such as milk protein casein variants like A1 vs. A2 beta-casein) directly impact animal productivity and breed conservation.</li>
</ul>""",
        "eliteDesc": """<h4>Molecular Logic of Animal Cells</h4>
<p>Living organisms exist in a dynamic steady state far from thermodynamic equilibrium. Veterinary biochemistry explains how domestic animals extract free energy ($\\Delta G$) from feedstuffs and couple exergonic catabolic reactions to endergonic physiological work (muscle contraction, active transport, lactation, thermoregulation).</p>

<h4>Comparative Species Nuances</h4>
<ul>
  <li><strong>Ruminants vs. Simple Monogastrics:</strong> Ruminants absorb virtually no glucose from the gastrointestinal tract; nearly all circulating glucose is synthesized via hepatic gluconeogenesis utilizing ruminal propionate.</li>
  <li><strong>Strict Carnivores (Felines):</strong> Cats have unique dietary requirements due to altered metabolic enzyme expression: permanent high activity of hepatic amino acid catabolic enzymes (transaminases, urea cycle), inability to synthesize taurine from cysteine efficiently, and lack of functional delta-6-desaturase and beta-carotene dioxygenase (requiring pre-formed arachidonic acid and vitamin A).</li>
  <li><strong>Avians:</strong> Birds maintain higher core body temperatures (41-42°C), higher resting plasma glucose concentrations (200-300 mg/dL), and excrete nitrogenous waste as insoluble uric acid rather than urea, minimizing water mass for flight.</li>
</ul>""",
        "keyPoints": [
            "Biochemistry is the molecular foundation of animal health, production, and veterinary clinical diagnosis.",
            "Structural biochemistry correlates biomolecular 3D architecture with physiological function.",
            "Intermediary metabolism governs catabolism (energy release) and anabolism (biosynthesis).",
            "Production diseases (ketosis, milk fever, pregnancy toxaemia) are biochemical derangements of homeorhesis.",
            "Ruminants depend entirely on ruminal microbial fermentation producing volatile fatty acids (VFAs).",
            "Hepatic gluconeogenesis from propionate is the lifeline of carbohydrate economy in adult ruminants.",
            "Serum clinical enzymology detects organ-specific cellular leakage (ALT, AST, CK, GGT, SDH).",
            "Felines are obligate carnivores with constitutive amino acid catabolism and unique taurine requirements.",
            "Avians are uricotelic organisms maintaining physiological blood glucose levels double those of mammals.",
            "Biochemical toxicology defines mechanisms of toxicant action (e.g., cyanide inhibiting cytochrome oxidase).",
            "Phase I and Phase II hepatic biotransformation pathways govern veterinary pharmacology and clearance.",
            "Biomarkers and molecular diagnostics guide precision livestock breeding and genetic selection."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> In veterinary medicine, biochemical profiling is indispensable for definitive diagnosis. A high-yielding Holstein-Friesian or Murrah buffalo in early lactation entering negative energy balance mobilizes adipose non-esterified fatty acids (NEFA). When hepatic uptake exceeds mitochondrial beta-oxidation and TCA cycle capacity, ketogenesis accelerates, resulting in clinical ketosis. Measuring serum beta-hydroxybutyrate (BHBA > 1.4 mmol/L) allows rapid stall-side detection and immediate intervention before irreversible hepatic lipidosis sets in.</p>""",
        "tables": [
            {
                "title": "Major Veterinary Disciplines and Their Biochemical Basis",
                "headers": ["Discipline", "Biochemical Basis", "Clinical / Field Example"],
                "rows": [
                    ["Animal Nutrition", "Rumen microbial fermentation & VFA energetics", "Propionate optimization for milk yield in dairy cattle"],
                    ["Veterinary Pathology", "Cellular injury, membrane peroxidation, enzyme leakage", "Serum CK elevation in white muscle disease (Se deficiency)"],
                    ["Veterinary Pharmacology", "Phase I (CYP450) and Phase II hepatic biotransformation", "Acetaminophen toxicity in cats due to low glucuronidation"],
                    ["Theriogenology", "Steroidogenesis, prostaglandins, peptide hormones", "PGF2alpha administration for luteolysis and estrus synchronization"],
                    ["Veterinary Diagnostics", "Spectrophotometric enzyme assays, electrolyte balance", "BUN and creatinine assessment in canine renal failure"]
                ]
            },
            {
                "title": "Comparative Metabolic Adaptations Across Domestic Species",
                "headers": ["Feature", "Ruminants (Bovine/Ovine)", "Monogastrics (Swine/Canine)", "Strict Carnivores (Feline)"],
                "rows": [
                    ["Primary Glucose Source", "Hepatic gluconeogenesis (propionate)", "Dietary starch/sugar absorption", "Continuous gluconeogenesis (amino acids)"],
                    ["Nitrogen Excretion", "Ureotelic (urea cycle + rumen recycling)", "Ureotelic (renal excretion of urea)", "Ureotelic (high constitutive enzyme activity)"],
                    ["Taurine Requirement", "Endogenous synthesis sufficient", "Endogenous synthesis sufficient", "Essential nutrient (deficiency causes DCM & FCRD)"],
                    ["Essential Fatty Acid", "Linoleic and Linolenic acids", "Linoleic and Linolenic acids", "Must provide pre-formed Arachidonic acid"]
                ]
            }
        ],
        "img": "",
        "tags": ["Veterinary Biochemistry", "Scope", "Comparative Metabolism", "Clinical Enzymology"]
    },

    "u1-t02": {
        "summary": "Biological membranes are dynamic, amphipathic lipid bilayers embedded with proteins, operating under the Fluid Mosaic Model to maintain selective permeability and cellular homeostasis via passive, active, and vesicular transport.",
        "desc": """<h4>1. Architecture: The Fluid Mosaic Model</h4>
<p>Proposed by Singer and Nicolson (1972), the <strong>Fluid Mosaic Model</strong> describes biological membranes as a 2D liquid-crystalline lipid bilayer in which integral proteins are embedded and peripheral proteins are surface-bound. The membrane is asymmetric and dynamic.</p>
<ul>
  <li><strong>Phospholipid Bilayer:</strong> Amphipathic phosphoglycerides (phosphatidylcholine, phosphatidylethanolamine, phosphatidylserine) and sphingomyelin orient their hydrophilic polar head groups outward toward aqueous phases and hydrophobic fatty acyl tails inward.</li>
  <li><strong>Membrane Fluidity:</strong> Regulated by fatty acid chain saturation and cholesterol content. Cis-unsaturated double bonds introduce kinks that prevent tight packing, increasing fluidity. Cholesterol acts as a bidirectional fluidity buffer: preventing membrane crystallization at low temperatures and restricting excessive fluidity at high temperatures.</li>
  <li><strong>Membrane Proteins:</strong> Integral (transmembrane) proteins serve as ion channels, carriers, receptors, and enzymes. Peripheral proteins attach via electrostatic interactions and anchor to the cytoskeleton (spectrin, ankyrin).</li>
  <li><strong>Glycocalyx:</strong> Carbohydrate chains of glycolipids and glycoproteins project exclusively on the extracellular leaflet, mediating cell-cell recognition, immune surveillance, and pathogen adherence.</li>
</ul>

<h4>2. Mechanisms of Membrane Transport</h4>
<ul>
  <li><strong>1. Simple Diffusion:</strong> Passive downhill movement of non-polar, hydrophobic solutes ($O_2$, $CO_2$, $N_2$, fatty acids, steroid hormones) down their concentration gradient directly through the lipid bilayer, following Fick's first law. No energy or carrier protein required.</li>
  <li><strong>2. Facilitated Diffusion:</strong> Passive downhill transport of polar or charged solutes (glucose via GLUT uniporters; water via aquaporins) mediated by specific carrier proteins or ion channels without metabolic energy expenditure. Demonstrates saturation kinetics ($V_{max}$) and competitive inhibition.</li>
  <li><strong>3. Primary Active Transport:</strong> Direct coupling of solute movement against an electrochemical gradient with ATP hydrolysis:
    <ul>
      <li><em>$Na^+/K^+$-ATPase:</em> Electrogenic pump exporting $3\\ Na^+$ and importing $2\\ K^+$ per ATP hydrolyzed. Maintains resting membrane potential (-70 mV), cell volume, and osmotic balance.</li>
      <li><em>$Ca^{2+}$-ATPase (SERCA & PMCA):</em> Pumps cytosolic calcium into the sarcoplasmic reticulum or extracellular fluid, essential for muscle relaxation.</li>
      <li><em>$H^+/K^+$-ATPase:</em> Gastric parietal cell proton pump secreting hydrochloric acid into the stomach lumen.</li>
    </ul>
  </li>
  <li><strong>4. Secondary Active Transport (Coupled Transport):</strong> Uphill transport driven by the electrochemical gradient established by primary active transport:
    <ul>
      <li><em>Symport (Cotransport):</em> SGLT-1 imports $1\\ \\text{Glucose}$ alongside $2\\ Na^+$ across the intestinal brush border.</li>
      <li><em>Antiport (Exchanger):</em> $Na^+/H^+$ exchanger and $Na^+/Ca^{2+}$ exchanger in cardiac myocytes.</li>
    </ul>
  </li>
  <li><strong>5. Vesicular Transport (Endocytosis & Exocytosis):</strong> Bulk transport of macromolecules. Receptor-mediated endocytosis (clathrin-coated pits) for LDL uptake; phagocytosis in macrophages; exocytosis for neurotransmitter and digestive zymogen release.</li>
</ul>""",
        "eliteDesc": """<h4>Electrochemical Thermodynamics & Transport Kinetics</h4>
<p>The free energy change ($\\Delta G$) for transporting an uncharged solute across a membrane is:</p>
$$\\Delta G = 2.303\\ RT \\log_{10} \\left(\\frac{[C_{in}]}{[C_{out}]}\\right)$$
<p>For charged ions, the membrane potential ($\\Delta\\Psi$) must be incorporated into the electrochemical potential:</p>
$$\\Delta G = 2.303\\ RT \\log_{10} \\left(\\frac{[C_{in}]}{[C_{out}]}\\right) + zF\\Delta\\Psi$$
<p>Where $z$ is the valence of the ion, $F$ is Faraday's constant ($96,485\\ \\text{C/mol}$), and $\\Delta\\Psi$ is the membrane potential in volts. When $\\Delta G$ is positive, transport requires energy input (active transport).</p>

<h4>Lipid Rafts & Signal Transduction</h4>
<p>Membrane microdomains enriched in cholesterol, glycosphingolipids, and GPI-anchored proteins form rigid platforms called <strong>lipid rafts</strong>. In domestic animals, lipid rafts are critical for immunological synapse assembly in T-cells and pathogen entry (e.g., viral envelope fusion in Equine Arteritis Virus and Canine Parvovirus).</p>""",
        "keyPoints": [
            "Biological membranes conform to Singer & Nicolson's Fluid Mosaic Model (1972).",
            "Phospholipids are amphipathic: hydrophilic phosphate heads and hydrophobic hydrocarbon tails.",
            "Membrane fluidity is promoted by cis-unsaturated fatty acids and modulated by cholesterol.",
            "Integral proteins span the bilayer; peripheral proteins are loosely electrostatically associated.",
            "The glycocalyx resides exclusively on the outer leaflet, serving cell identity and receptor functions.",
            "Simple diffusion is passive, non-saturable, and applies to lipophilic molecules (gases, steroids).",
            "Facilitated diffusion uses protein carriers (GLUT) or channels, showing saturation ($V_{max}$).",
            "Primary active transport couples ATP hydrolysis directly to uphill solute transport.",
            "$Na^+/K^+$-ATPase pumps $3\\ Na^+$ out and $2\\ K^+$ in, maintaining cell volume and resting potential.",
            "Cardiac glycosides (ouabain, digoxin) specifically inhibit $Na^+/K^+$-ATPase.",
            "Secondary active transport utilizes the inward $Na^+$ electrochemical gradient (e.g., SGLT-1).",
            "Ionophores (monensin, lasalocid) disrupt membrane cation gradients to alter ruminal microflora."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> In veterinary medicine, ionophore antibiotics such as <strong>Monensin</strong> and <strong>Lasalocid</strong> are widely used as feed additives in ruminants. Monensin acts as a lipophilic $Na^+/H^+$ antiporter ionophore, inserting into microbial cell membranes and dissipating ion gradients. Gram-positive ruminal bacteria (which produce acetate, butyrate, and methane) lack a protective outer membrane and are selectively suppressed, while Gram-negative propionate producers thrive. This increases ruminal propionate production, boosting hepatic gluconeogenesis and preventing bovine ketosis. However, monensin accidental overdosage in horses causes severe fatal cardiomyopathy due to intracellular calcium overload.</p>""",
        "tables": [
            {
                "title": "Comparison of Membrane Transport Mechanisms",
                "headers": ["Property", "Simple Diffusion", "Facilitated Diffusion", "Primary Active Transport", "Secondary Active Transport"],
                "rows": [
                    ["Energy Requirement", "None (passive)", "None (passive)", "Direct ATP hydrolysis", "Indirect (ion gradient)"],
                    ["Transport Direction", "Down gradient", "Down gradient", "Against gradient", "Against gradient"],
                    ["Carrier Protein", "No", "Yes (Permease/Channel)", "Yes (Pump/ATPase)", "Yes (Symporter/Antiporter)"],
                    ["Saturation Kinetics", "No ($V$ is linear)", "Yes ($V_{max}$ plateau)", "Yes ($V_{max}$ plateau)", "Yes ($V_{max}$ plateau)"],
                    ["Examples", "$O_2, CO_2$, urea, fatty acids", "GLUT-4 in myocytes, Aquaporins", "$Na^+/K^+$-ATPase, SERCA", "SGLT-1 in enterocytes, $Na^+/H^+$ antiporter"]
                ]
            },
            {
                "title": "Major Physiological Ion Distributions in Mammals",
                "headers": ["Ion", "Extracellular Fluid (ECF)", "Intracellular Fluid (ICF)", "Transmembrane Ratio (ECF/ICF)"],
                "rows": [
                    ["Sodium ($Na^+$)", "140 - 145 mmol/L", "10 - 14 mmol/L", "~10 : 1"],
                    ["Potassium ($K^+$)", "3.5 - 5.0 mmol/L", "140 - 150 mmol/L", "~1 : 30"],
                    ["Chloride ($Cl^-$)", "100 - 108 mmol/L", "4 - 8 mmol/L", "~20 : 1"],
                    ["Ionized Calcium ($Ca^{2+}$)", "1.1 - 1.3 mmol/L", "0.0001 mmol/L (100 nM)", "~10,000 : 1"]
                ]
            }
        ],
        "img": "",
        "tags": ["Cell Membrane", "Fluid Mosaic Model", "Active Transport", "Na-K ATPase", "Ionophores"]
    },

    "u1-t03": {
        "summary": "Donnan Membrane Equilibrium describes the unequal distribution of diffusible ions across a semipermeable membrane caused by non-diffusible macromolecular polyions, establishing resting electrical potentials, colloidal osmotic pressure, and cellular swelling tendencies.",
        "desc": """<h4>1. Fundamental Principle of Donnan Equilibrium</h4>
<p>Formulated by Frederick G. Donnan in 1911, the <strong>Gibbs-Donnan equilibrium</strong> occurs when two solutions containing electrolytes are separated by a semipermeable membrane that is permeable to small diffusible ions (e.g., $Na^+$, $K^+$, $Cl^-$) and water, but completely impermeable to large charged macromolecules (such as intracellular proteins or plasma albumin).</p>
<p>Because the non-diffusible polyanionic proteins ($Pr^-$) are trapped on one side (e.g., Compartment 1 / Intracellular fluid), they exert an electrostatic attraction on diffusible cations ($Na^+, K^+$) and repel diffusible anions ($Cl^-$). This sets up an asymmetric equilibrium governed by two strict physical requirements:</p>
<ol>
  <li><strong>Electrical Neutrality:</strong> Each compartment must maintain macroscopic electroneutrality (the total positive charges must equal total negative charges on each side).</li>
  <li><strong>Chemical Potential Balance:</strong> At thermodynamic equilibrium, the chemical potential and product of diffusible ion concentrations must be equal on both sides:
  $$[Na^+]_1 \\times [Cl^-]_1 = [Na^+]_2 \\times [Cl^-]_2$$
  </li>
</ol>

<h4>2. The Donnan Ratio ($r$)</h4>
<p>Rearranging the equilibrium equation yields the classic Donnan Ratio ($r$):</p>
$$r = \\frac{[Na^+]_1}{[Na^+]_2} = \\frac{[Cl^-]_2}{[Cl^-]_1} = \\frac{[K^+]_1}{[K^+]_2}$$
<p>Notice that for diffusible anions ($Cl^-$), the ratio is inverted compared to diffusible cations ($Na^+$). This proves that the compartment containing the trapped non-diffusible polyanion will always hold a higher concentration of diffusible cations and a lower concentration of diffusible anions.</p>

<h4>3. Physiological Consequences of the Donnan Effect</h4>
<ul>
  <li><strong>1. Unequal Total Particle Concentration (Osmotic Imbalance):</strong> The sum of all osmotically active particles is invariably higher in the compartment with the non-diffusible protein:
  $$\\sum [\\text{Solutes}]_1 > \\sum [\\text{Solutes}]_2$$
  This creates an osmotic pressure gradient that draws water into the protein-containing compartment. In animal cells, this creates a constant tendency to take up water and lyse unless actively countered.</li>
  <li><strong>2. Donnan Potential:</strong> The unequal separation of diffusible ions creates an electrical potential difference ($\\Delta V$) across the membrane, calculated by the Nernst-Donnan equation:
  $$\\Delta V = \\frac{RT}{F} \\ln(r) = 61.5 \\log_{10}(r) \\quad (\\text{in mV at } 37^\\circ\\text{C})$$
  </li>
  <li><strong>3. Cellular Volume Maintenance via the $Na^+/K^+$ Pump:</strong> To prevent Donnan osmotic swelling and cytolysis, animal cells use the active $Na^+/K^+$-ATPase pump to continuously extrude $Na^+$. By making the membrane functionally impermeable to $Na^+$, the cell counterbalances the Donnan colloidal osmotic effect (the 'Double-Donnan' steady state).</li>
</ul>""",
        "eliteDesc": """<h4>Mathematical Proof of Donnan Inequality</h4>
<p>Consider Compartment 1 (inside, volume $V$) containing non-diffusible protein polyanion $[Pr^-]$ and diffusible ions $[Na^+]_1, [Cl^-]_1$. Compartment 2 (outside) contains $[Na^+]_2, [Cl^-]_2$.</p>
<p>From electroneutrality:</p>
$$[Na^+]_1 = [Cl^-]_1 + z[Pr^-] \\implies [Na^+]_1 > [Cl^-]_1$$
$$[Na^+]_2 = [Cl^-]_2$$
<p>Since $[Na^+]_1 [Cl^-]_1 = [Na^+]_2 [Cl^-]_2 = ([Na^+]_2)^2$, substituting $[Na^+]_1$ gives:</p>
$$([Cl^-]_1 + z[Pr^-])[Cl^-]_1 = ([Cl^-]_2)^2$$
$$([Cl^-]_1)^2 + z[Pr^-][Cl^-]_1 = ([Cl^-]_2)^2 \\implies [Cl^-]_2 > [Cl^-]_1$$
<p>Therefore, $[Na^+]_1 > [Na^+]_2$ while $[Cl^-]_2 > [Cl^-]_1$.</p>
<p>Now consider total osmolarity:</p>
$$\\text{Total}_1 = [Na^+]_1 + [Cl^-]_1 + [Pr^-] = 2[Cl^-]_1 + (z+1)[Pr^-]$$
$$\\text{Total}_2 = [Na^+]_2 + [Cl^-]_2 = 2[Cl^-]_2$$
<p>Because the geometric mean is always less than the arithmetic mean for unequal quantities, $\\text{Total}_1 > \\text{Total}_2$. This rigorously proves that the protein-containing compartment always develops excess colloid osmotic pressure (Donnan osmotic pressure).</p>""",
        "keyPoints": [
            "Donnan equilibrium is established when a non-diffusible charged ion is confined to one side of a membrane.",
            "Macromolecular intracellular proteins and plasma albumin act as non-diffusible polyanions ($Pr^-$).",
            "Condition 1: Electroneutrality must be strictly preserved within every compartment.",
            "Condition 2: The product of diffusible cation and anion concentrations is identical on both sides.",
            "The Donnan ratio ($r$): $[Na^+]_1 / [Na^+]_2 = [Cl^-]_2 / [Cl^-]_1$.",
            "The compartment containing non-diffusible polyanions concentrates diffusible cations and depletes diffusible anions.",
            "Total osmolarity inside the protein compartment is always greater than the external solution.",
            "Unchecked Donnan osmotic gradient draws water inward, threatening cell lysis (colloid swelling).",
            "Animal cells prevent Donnan swelling by continuously pumping out $Na^+$ via $Na^+/K^+$-ATPase.",
            "In vascular beds, plasma albumin creates an intravascular Donnan-enhanced oncotic pressure.",
            "The Donnan effect contributes ~-10 to -20 mV to the cellular resting membrane potential.",
            "Hypoxia or metabolic poisons (cyanide, ouabain) impair ATP production, causing Donnan cell swelling."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> In veterinary medicine, when an animal experiences acute cellular hypoxia (e.g., severe shock, endotoxemia, or mesenteric torsion in horses), cellular ATP levels plunge. Without ATP, the $Na^+/K^+$-ATPase pump fails instantly. The protective 'Double-Donnan' steady state collapses: $Na^+$ and $Cl^-$ flood down their Donnan equilibrium gradients into the cell, accompanied by water. This causes acute <strong>cytotoxic cellular edema</strong> and hydropic degeneration of parenchymal cells in the brain, liver, and kidneys, leading to irreversible organ failure.</p>""",
        "tables": [
            {
                "title": "Donnan Equilibrium Ion Distribution Across Biological Compartments",
                "headers": ["Compartment", "Non-diffusible Solute", "Diffusible Cations ($Na^+, K^+$)", "Diffusible Anions ($Cl^-, HCO_3^-$)", "Colloid Osmotic Effect"],
                "rows": [
                    ["Intracellular Fluid (ICF)", "Proteinate anions ($Pr^-$), Phosphates", "High (electrostatically trapped)", "Low (electrostatically repelled)", "Causes potential cellular swelling; countered by $Na^+/K^+$ pump"],
                    ["Interstitial Fluid (ISF)", "Negligible protein", "Lower than ICF, lower than plasma", "Higher than plasma, higher than ICF", "Reference fluid compartment"],
                    ["Plasma (Intravascular)", "Albumin ($Alb^{18-}$ at pH 7.4)", "Slightly higher than ISF (~5% excess)", "Slightly lower than ISF (~5% lower)", "Generates Oncotic Pressure (25 mmHg) preventing edema"]
                ]
            },
            {
                "title": "Differences Between Simple Osmotic Equilibrium and Donnan Equilibrium",
                "headers": ["Feature", "Simple Osmotic Equilibrium", "Donnan Membrane Equilibrium"],
                "rows": [
                    ["Solute Type", "All solutes diffusible across membrane", "Contains at least one non-diffusible charged macromolecule"],
                    ["Ion Distribution", "Equal concentrations on both sides", "Unequal distribution of diffusible ions ($r \\neq 1$)"],
                    ["Electrical Potential", "Zero transmembrane potential generated", "Generates an equilibrium electrical potential difference ($\\Delta V$)"],
                    ["Total Osmolarity", "Equal across compartments", "Compartment with trapped protein has permanently higher osmolarity"]
                ]
            }
        ],
        "img": "",
        "tags": ["Donnan Equilibrium", "Membrane Biophysics", "Colloid Osmotic Pressure", "Cell Swelling", "Edema"]
    },

    "u1-t04": {
        "summary": "Acids dissociate in aqueous solutions to release protons ($H^+$), whose concentration determines pH ($-\\log[H^+]$), while biological buffer systems (bicarbonate, phosphate, protein, and hemoglobin) prevent life-threatening shifts in body fluid pH.",
        "desc": """<h4>1. Dissociation of Acids and Bases</h4>
<p>According to the Brønsted-Lowry concept, an <strong>acid</strong> is a proton ($H^+$) donor, and a <strong>base</strong> is a proton acceptor. When an acid ($HA$) dissolves in water, it dissociates into a proton and its conjugate base ($A^-$):</p>
$$HA + H_2O \\rightleftharpoons H_3O^+ + A^- \\quad (\\text{simplified as } HA \\rightleftharpoons H^+ + A^-)$$
<ul>
  <li><strong>Strong Acids:</strong> Dissociate completely ($100\\%$) in dilute aqueous solutions (e.g., $HCl, H_2SO_4$). They have very large dissociation constants ($K_a$).</li>
  <li><strong>Weak Acids:</strong> Dissociate only partially, establishing a dynamic chemical equilibrium (e.g., $CH_3COOH, H_2CO_3, H_2PO_4^-$). Their dissociation is quantified by the acid dissociation constant ($K_a$):
  $$K_a = \\frac{[H^+][A^-]}{[HA]} \\quad \\implies \\quad pK_a = -\\log_{10}(K_a)$$
  The lower the $pK_a$, the stronger the weak acid.
  </li>
</ul>

<h4>2. The Concept of pH</h4>
<p>Introduced by Sørensen in 1909, <strong>pH</strong> is defined as the negative logarithm (base 10) of the hydrogen ion activity (approximated as concentration in dilute biological fluids):</p>
$$\\text{pH} = -\\log_{10}[H^+] \\quad \\iff \\quad [H^+] = 10^{-\\text{pH}}$$
<p>In pure water at 25°C, autoionization yields $[H^+][OH^-] = K_w = 1.0 \\times 10^{-14}\\ \\text{M}^2$. Thus, neutral $\\text{pH} = 7.0$. Normal mammalian arterial blood pH is tightly defended between <strong>7.35 and 7.45</strong> ($[H^+] \\approx 40\\ \\text{nmol/L}$). Acidemia exists when $\\text{pH} < 7.35$; alkalemia exists when $\\text{pH} > 7.45$. Deviations below 6.8 or above 7.8 are rapidly fatal.</p>

<h4>3. Biological Buffer Systems</h4>
<p>A <strong>buffer</strong> is a solution that resists changes in pH upon the addition of small amounts of strong acid or strong base. It consists of a weak acid and its conjugate base (or a weak base and its conjugate acid). Maximum buffering capacity occurs when $\\text{pH} = pK_a$, and its effective range is $\\text{pH} = pK_a \\pm 1.0$.</p>
<ul>
  <li><strong>1. Carbonic Acid-Bicarbonate Buffer ($H_2CO_3 / HCO_3^-$):</strong>
    <ul>
      <li>Primary buffer of the <strong>Extracellular Fluid (ECF)</strong>.</li>
      <li>$pK_a = 6.10$. Even though 6.10 is outside the ideal range for blood pH (7.40), it is the most powerful physiological buffer because it operates as an <em>open system</em>: $[H_2CO_3]$ is controlled by the lungs via $CO_2$ exhalation, and $[HCO_3^-]$ is controlled by renal reabsorption and secretion.</li>
      <li>At pH 7.4, the ratio $[HCO_3^-] : [H_2CO_3] = 20 : 1$.</li>
    </ul>
  </li>
  <li><strong>2. Phosphate Buffer System ($H_2PO_4^- / HPO_4^{2-}$):</strong>
    <ul>
      <li>Primary buffer of the <strong>Intracellular Fluid (ICF)</strong> and <strong>Renal Tubular Fluid</strong>.</li>
      <li>$pK_a = 6.80$, close to physiological intracellular pH (~7.0 - 7.2). Concentrated inside erythrocytes, renal tubules, and skeletal myocytes.</li>
    </ul>
  </li>
  <li><strong>3. Protein Buffer System:</strong>
    <ul>
      <li>Most abundant buffer in body cells and blood plasma (albumin). Proteins contain ionizable carboxyl ($-COOH$) and amino ($-NH_2$) groups, but buffering at physiological pH is primarily mediated by the <strong>imidazole ring of Histidine residues</strong> ($pK_a \\approx 6.0 - 6.8$).</li>
    </ul>
  </li>
  <li><strong>4. Hemoglobin Buffer System (Erythrocytes):</strong>
    <ul>
      <li>Hemoglobin contains 38 histidine residues per tetramer. <strong>Deoxygenated hemoglobin is a weaker acid and better proton acceptor than oxyhemoglobin</strong> (the <em>Haldane effect</em>), allowing it to bind protons generated from $CO_2$ hydration in peripheral capillary beds without lowering erythrocyte pH.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Isohydric Principle</h4>
<p>In any body fluid compartment containing multiple buffer pairs (bicarbonate, phosphate, plasma proteins, hemoglobin), all buffer systems are in equilibrium with the same ambient hydrogen ion concentration ($[H^+]$):</p>
$$\\text{pH} = pK_1 + \\log\\left(\\frac{[A_1^-]}{[HA_1]}\\right) = pK_2 + \\log\\left(\\frac{[A_2^-]}{[HA_2]}\\right) = pK_3 + \\log\\left(\\frac{[A_3^-]}{[HA_3]}\\right)$$
<p>Consequently, any physiological disturbance that changes $[H^+]$ alters the ratio of all buffer pairs simultaneously. Assessing the bicarbonate system provides an accurate diagnostic readout for all body buffers.</p>

<h4>Buffer Value / Van Slyke Buffer Index ($\\beta$)</h4>
<p>The buffering capacity ($\\beta$) represents the millimoles of strong base ($dB$) required to change the pH of one liter of buffer solution by one unit:</p>
$$\\beta = \\frac{dB}{d\\text{pH}} = 2.303 \\cdot C_{\\text{total}} \\cdot \\frac{K_a [H^+]}{(K_a + [H^+])^2}$$
<p>$\\beta$ is maximal when $[H^+] = K_a$ ($\\text{pH} = pK_a$).</p>""",
        "keyPoints": [
            "Brønsted-Lowry acid is a proton donor; a base is a proton acceptor.",
            "Weak acids dissociate partially, governed by $K_a$; $pK_a = -\\log_{10}(K_a)$.",
            "The lower the $pK_a$ value, the stronger the weak acid.",
            "pH is the negative logarithm of hydrogen ion activity: $\\text{pH} = -\\log[H^+]$.",
            "Normal mammalian arterial blood pH is tightly regulated between 7.35 and 7.45.",
            "Buffers resist pH shifts; composed of a weak acid and its conjugate base.",
            "A buffer exhibits maximum capacity when $\\text{pH} = pK_a$; effective range is $pK_a \\pm 1$.",
            "The Bicarbonate buffer ($H_2CO_3 / HCO_3^-$) is the principal ECF buffer ($pK_a = 6.1$).",
            "The bicarbonate system functions as an open physiological system coupled to lungs and kidneys.",
            "Normal blood $[HCO_3^-] : [H_2CO_3]$ ratio at pH 7.4 is exactly 20 : 1.",
            "Phosphate buffer ($H_2PO_4^- / HPO_4^{2-}$, $pK_a = 6.8$) dominates intracellular fluid and urine.",
            "Protein buffering at pH 7.4 depends predominantly on the imidazole group of histidine residues.",
            "Deoxyhemoglobin is a better proton acceptor than oxyhemoglobin (Haldane effect)."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> In calves suffering from severe neonatal diarrhea (calf scours caused by E. coli or Rotavirus), vast quantities of sodium and bicarbonate are lost in watery feces. As blood $[HCO_3^-]$ drops from a normal 24 mmol/L to below 12-14 mmol/L, the $20:1$ buffer ratio collapses, driving blood pH below 7.15 (<strong>severe metabolic acidosis</strong>). The calf exhibits dehydration, depression, cold extremities, loss of suckle reflex, and hyperventilation (Kussmaul breathing) to exhale $CO_2$. Immediate IV infusion of isotonic or hypertonic sodium bicarbonate ($NaHCO_3$) is life-saving, restoring the bicarbonate buffer pool and normalizing extracellular pH.</p>""",
        "tables": [
            {
                "title": "Major Physiological Buffer Systems in Domestic Animals",
                "headers": ["Buffer System", "Components (Acid / Conjugate Base)", "$pK_a$", "Primary Fluid Compartment", "Key Mechanism / Characteristic"],
                "rows": [
                    ["Bicarbonate", "$H_2CO_3 / HCO_3^-$", "6.10", "Extracellular Fluid (Plasma & ISF)", "Open system; lungs regulate $CO_2$, kidneys regulate $HCO_3^-$"],
                    ["Phosphate", "$H_2PO_4^- / HPO_4^{2-}$", "6.80", "Intracellular Fluid & Renal Tubules", "High intracellular concentration; titratable acid in urine"],
                    ["Protein", "$\\text{Protein-H} / \\text{Protein}^-$", "6.0 - 7.0", "Intracellular & Blood Plasma", "Mediated by histidine imidazole rings; albumin in plasma"],
                    ["Hemoglobin", "$\\text{HHb} / \\text{Hb}^-$ and $\\text{HHbO}_2 / \\text{HbO}_2^-$", "6.6 (Hb) / 7.85 (HbO2)", "Erythrocytes", "Deoxygenation in capillaries consumes $H^+$ from tissue $CO_2$"]
                ]
            },
            {
                "title": "Normal Acid-Base Parameters Across Domestic Species",
                "headers": ["Species", "Arterial Blood pH", "$PaCO_2$ (mmHg)", "Plasma $HCO_3^-$ (mmol/L)", "Base Excess (mmol/L)"],
                "rows": [
                    ["Canine (Dog)", "7.36 - 7.44", "35 - 42", "20 - 24", "-2 to +2"],
                    ["Feline (Cat)", "7.35 - 7.42", "30 - 36", "18 - 22", "-3 to +1"],
                    ["Bovine (Cattle)", "7.35 - 7.48", "38 - 48", "24 - 30", "0 to +4"],
                    ["Equine (Horse)", "7.38 - 7.46", "38 - 46", "24 - 28", "-1 to +3"],
                    ["Ovine / Caprine", "7.35 - 7.48", "36 - 44", "22 - 27", "-2 to +2"]
                ]
            }
        ],
        "img": "",
        "tags": ["Acid-Base Balance", "Buffers", "pH", "Bicarbonate System", "Histidine"]
    },

    "u1-t05": {
        "summary": "The Henderson-Hasselbalch equation quantifies the relationship between pH, the dissociation constant ($pK_a$) of a weak acid, and the ratio of conjugate base to undissociated acid, serving as the mathematical cornerstone for diagnosing acid-base disorders and formulating therapeutic intravenous fluids.",
        "desc": """<h4>1. Derivation of the Henderson-Hasselbalch Equation</h4>
<p>Consider the dissociation of a weak acid $HA$ in aqueous solution:</p>
$$HA \\rightleftharpoons H^+ + A^-$$
<p>The thermodynamic equilibrium constant ($K_a$) is expressed as:</p>
$$K_a = \\frac{[H^+][A^-]}{[HA]}$$
<p>Solving explicitly for hydrogen ion concentration $[H^+]$:</p>
$$[H^+] = K_a \\cdot \\frac{[HA]}{[A^-]}$$
<p>Taking the negative logarithm ($-\\log_{10}$) of both sides of the equation:</p>
$$-\\log_{10}[H^+] = -\\log_{10} K_a - \\log_{10}\\left(\\frac{[HA]}{[A^-]}\\right)$$
<p>By definition, $\\text{pH} = -\\log_{10}[H^+]$ and $pK_a = -\\log_{10} K_a$. Substituting these terms:</p>
$$\\text{pH} = pK_a - \\log_{10}\\left(\\frac{[HA]}{[A^-]}\\right)$$
<p>Inverting the argument of the logarithm to change the negative sign to positive yields the classic <strong>Henderson-Hasselbalch Equation</strong>:</p>
$$\\mathbf{\\text{pH} = pK_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)} = pK_a + \\log_{10}\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Undissociated Weak Acid}]}\\right)$$

<h4>2. Application to the Bicarbonate Buffer System</h4>
<p>In animal blood, the primary extracellular buffer is carbonic acid ($H_2CO_3$) and bicarbonate ($HCO_3^-$):</p>
$$CO_2\\text{ (dissolved)} + H_2O \\xrightleftharpoons{\\text{Carbonic Anhydrase}} H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$
<p>Because dissolved $[H_2CO_3]$ is extremely low and in direct equilibrium with dissolved $CO_2$, clinical biochemistry uses the combined Henry's Law solubility coefficient ($\\alpha = 0.0307\\ \\text{mmol/L/mmHg}$ at 37°C) and partial pressure of carbon dioxide ($PaCO_2$):</p>
$$[H_2CO_3] = \\alpha \\times PaCO_2$$
<p>The effective $pK_a'$ for this combined system is <strong>6.10</strong>. Thus, the clinical equation is:</p>
$$\\text{pH} = 6.10 + \\log_{10}\\left(\\frac{[HCO_3^-]}{0.0307 \\times PaCO_2}\\right)$$

<h4>3. Physiological Interpretation of the 20:1 Ratio</h4>
<p>Under normal physiological conditions in mammalian blood:</p>
<ul>
  <li>$[HCO_3^-] = 24.0\\ \\text{mmol/L}$</li>
  <li>$PaCO_2 = 40\\ \\text{mmHg} \\implies [H_2CO_3] = 0.0307 \\times 40 = 1.2\\ \\text{mmol/L}$</li>
  <li>Substituting into the equation:
  $$\\text{pH} = 6.10 + \\log_{10}\\left(\\frac{24.0}{1.2}\\right) = 6.10 + \\log_{10}(20) = 6.10 + 1.301 = \\mathbf{7.40}$$
  </li>
</ul>
<p>As long as the ratio of $[HCO_3^-]$ to dissolved $CO_2$ remains <strong>20 : 1</strong>, the blood pH remains exactly 7.40, regardless of the absolute numerical concentrations of the individual components.</p>

<h4>4. Clinical Classification of Acid-Base Disturbances</h4>
<ul>
  <li><strong>Metabolic Acidosis:</strong> Primary deficit of $[HCO_3^-]$ (ratio $< 20:1 \\implies \\text{pH} < 7.35$). Compensated by hyperventilation lowering $PaCO_2$.</li>
  <li><strong>Metabolic Alkalosis:</strong> Primary excess of $[HCO_3^-]$ (ratio $> 20:1 \\implies \\text{pH} > 7.45$). Compensated by hypoventilation elevating $PaCO_2$.</li>
  <li><strong>Respiratory Acidosis:</strong> Primary retention of $CO_2$ ($PaCO_2 \\uparrow$, ratio $< 20:1 \\implies \\text{pH} < 7.35$). Compensated by renal $HCO_3^-$ retention.</li>
  <li><strong>Respiratory Alkalosis:</strong> Primary blowing off of $CO_2$ ($PaCO_2 \\downarrow$, ratio $> 20:1 \\implies \\text{pH} > 7.45$). Compensated by renal $HCO_3^-$ excretion.</li>
</ul>""",
        "eliteDesc": """<h4>Mathematical Calculation of Buffer Adjustments and Drug Ionization</h4>
<p>The Henderson-Hasselbalch equation dictates the fraction of weak electrolytes existing in charged (ionized) versus uncharged (lipophilic) states across biological membranes:</p>
$$\\text{Fraction Ionized (for Weak Acid)} = \\frac{10^{(\\text{pH} - pK_a)}}{1 + 10^{(\\text{pH} - pK_a)}}$$
$$\\text{Fraction Ionized (for Weak Base)} = \\frac{1}{1 + 10^{(\\text{pH} - pK_a)}}$$

<h4>Ion Trapping in Veterinary Pharmacology</h4>
<p>Weakly acidic drugs (e.g., aspirin, NSAIDs, phenobarbital, $pK_a \\approx 3.5$) are largely non-ionized and lipophilic in the highly acidic canine stomach (pH 1.5 - 2.0), diffusing rapidly into gastric mucosal cells. Inside the cell (pH 7.2), they dissociate into ionized anions and become trapped, causing mucosal petechiae. Conversely, alkalinizing the urine with $NaHCO_3$ traps weak acids in the renal tubular lumen as non-reabsorbable ions, accelerating renal clearance in poisoning cases.</p>""",
        "keyPoints": [
            "Derived from the weak acid dissociation constant: $K_a = [H^+][A^-] / [HA]$.",
            "General form: $\\text{pH} = pK_a + \\log_{10}([\\text{Conjugate Base}] / [\\text{Acid}])$.",
            "When $[A^-] = [HA]$, $\\log_{10}(1) = 0$, and therefore $\\text{pH} = pK_a$.",
            "Clinical blood equation: $\\text{pH} = 6.10 + \\log_{10}([HCO_3^-] / (0.0307 \\times PaCO_2))$.",
            "At normal arterial blood pH (7.40), the ratio $[HCO_3^-] : [H_2CO_3]$ is exactly 20 : 1.",
            "Since $\\log_{10}(20) = 1.30$, $\\text{pH} = 6.10 + 1.30 = 7.40$.",
            "Metabolic disorders primarily alter the numerator ($[HCO_3^-]$, renal control).",
            "Respiratory disorders primarily alter the denominator ($PaCO_2$, pulmonary control).",
            "Compensation always shifts the unaffected parameter in the same direction to restore the 20:1 ratio.",
            "Used to calculate the Base Deficit in dehydrated and acidemic domestic animals.",
            "Governs drug ionization and the pharmacological phenomenon of 'ion trapping'.",
            "Essential for calculating the buffer capacity ($\\beta$) of parenteral fluid formulations."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Calculating Bicarbonate Replacement Deficit in a Downer Cow or Acidemic Foal:<br>
The Henderson-Hasselbalch equation enables veterinarians to calculate the exact millimoles of sodium bicarbonate needed to treat severe metabolic acidosis using the formula:<br>
$$\\text{Bicarbonate Deficit (mmol)} = \\text{Body Weight (kg)} \\times 0.5 \\times (\\text{Target } [HCO_3^-] - \\text{Measured } [HCO_3^-])$$
<em>(where 0.5 represents the extracellular fluid distribution volume factor for bicarbonate in cattle).</em><br>
If a 400 kg crossbred cow with acute grain overload has a plasma $[HCO_3^-]$ of 12 mmol/L (target 24 mmol/L):<br>
$$\\text{Deficit} = 400 \\times 0.5 \\times (24 - 12) = 200 \\times 12 = 2400\\ \\text{mmol of } NaHCO_3$$
Administering half this calculated amount over 2-4 hours prevents cerebral edema while restoring the physiological 20:1 buffer ratio.</p>""",
        "tables": [
            {
                "title": "Primary Acid-Base Disturbances and Compensatory Responses",
                "headers": ["Disorder", "Primary Biochemical Lesion", "Henderson-Hasselbalch Ratio", "Compensatory Response", "Common Veterinary Etiology"],
                "rows": [
                    ["Metabolic Acidosis", "Plasma $[HCO_3^-] \\downarrow$", "$< 20 : 1$ (pH $\\downarrow$)", "Hyperventilation ($PaCO_2 \\downarrow$)", "Calf diarrhea, grain overload (lactic acidosis), bovine ketosis"],
                    ["Metabolic Alkalosis", "Plasma $[HCO_3^-] \\uparrow$", "$> 20 : 1$ (pH $\\uparrow$)", "Hypoventilation ($PaCO_2 \\uparrow$)", "Abomasal torsion/displacement in cattle, vomiting in dogs ($HCl$ loss)"],
                    ["Respiratory Acidosis", "$PaCO_2 \\uparrow$ (hypoventilation)", "$< 20 : 1$ (pH $\\downarrow$)", "Renal $HCO_3^-$ retention ($[HCO_3^-] \\uparrow$)", "Bovine respiratory disease (BRD), pneumothorax, general anesthesia"],
                    ["Respiratory Alkalosis", "$PaCO_2 \\downarrow$ (hyperventilation)", "$> 20 : 1$ (pH $\\uparrow$)", "Renal $HCO_3^-$ excretion ($[HCO_3^-] \\downarrow$)", "Heat stress in dairy cattle/poultry, high altitude hypoxia, pain"]
                ]
            },
            {
                "title": "Mathematical Relationship Between [A-]/[HA] Ratio and pH Shift from pKa",
                "headers": ["[Conjugate Base] : [Acid] Ratio", "$\\log_{10}([A^-] / [HA])$", "Resulting pH Relative to $pK_a$", "Percentage of Acid Dissociated (%)"],
                "rows": [
                    ["1 : 100", "-2.0", "$pK_a - 2.0$", "0.99%"],
                    ["1 : 10", "-1.0", "$pK_a - 1.0$", "9.09%"],
                    ["1 : 1", "0.0", "$pK_a$", "50.0% (Half-dissociated)"],
                    ["10 : 1", "+1.0", "$pK_a + 1.0$", "90.9%"],
                    ["20 : 1 (Physiological Bicarbonate)", "+1.301", "$pK_a + 1.301 = 7.40$", "95.2%"],
                    ["100 : 1", "+2.0", "$pK_a + 2.0$", "99.0%"]
                ]
            }
        ],
        "img": "",
        "tags": ["Henderson-Hasselbalch", "Acid-Base Disorders", "Bicarbonate Deficit", "Ion Trapping", "Fluid Therapy"]
    }
}
