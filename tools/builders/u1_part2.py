"""
Unit 1 Part 2: Carbohydrate Chemistry
Topics: u1-t06 to u1-t09
"""

PART2 = {
    "u1-t06": {
        "summary": "Monosaccharides are polyhydroxy aldehydes or ketones that cannot be further hydrolyzed into simpler carbohydrates, serving as primary cellular fuels, metabolic intermediates, and structural components of nucleotides and glycoconjugates.",
        "desc": """<h4>1. Definition, Classification and Chemical Structure</h4>
<p>Monosaccharides are simple sugars possessing the empirical formula $(CH_2O)_n$ (where $n \\ge 3$). They are classified based on the functional carbonyl group and the number of carbon atoms:</p>
<ul>
  <li><strong>Aldoses:</strong> Possess an aldehyde group ($-CHO$) at Carbon-1 (e.g., D-Glyceraldehyde, D-Ribose, D-Glucose, D-Galactose, D-Mannose).</li>
  <li><strong>Ketoses:</strong> Possess a keto group ($>C=O$) at Carbon-2 (e.g., Dihydroxyacetone, D-Fructose, D-Ribulose).</li>
</ul>

<h4>2. Stereochemistry and Isomerism of Monosaccharides</h4>
<ul>
  <li><strong>D- and L-Isomerism (Enantiomers):</strong> Determined by the spatial orientation of the $-OH$ group on the penultimate (highest-numbered chiral) carbon atom relative to D-glyceraldehyde. If the $-OH$ projects to the right in a Fischer projection, it is a <strong>D-sugar</strong>; if to the left, it is an <strong>L-sugar</strong>. Naturally occurring mammalian sugars are predominantly <strong>D-isomers</strong>.</li>
  <li><strong>Epimers:</strong> Two monosaccharides differing in spatial configuration around a single asymmetric carbon atom other than the anomeric carbon:
    <ul>
      <li><strong>D-Glucose and D-Galactose are C-4 epimers.</strong></li>
      <li><strong>D-Glucose and D-Mannose are C-2 epimers.</strong></li>
    </ul>
  </li>
  <li><strong>Ring Formation and Anomers ($\\alpha$ and $\\beta$):</strong> In aqueous solution, pentoses and hexoses cyclize through intramolecular hemiacetal (aldoses) or hemiketal (ketoses) formation. The carbonyl carbon becomes a new chiral center known as the <strong>anomeric carbon</strong> (C-1 in aldoses, C-2 in ketoses). If the anomeric $-OH$ is below the ring (Haworth projection), it is the <strong>$\\alpha$-anomer</strong>; if above, it is the <strong>$\\beta$-anomer</strong>.</li>
  <li><strong>Mutarotation:</strong> The spontaneous change in specific optical rotation when pure $\\alpha$-D-glucose ($+112.2^\\circ$) or $\\beta$-D-glucose ($+18.7^\\circ$) is dissolved in water until an equilibrium mixture ($+52.7^\\circ$, ~64% $\\beta$ and 36% $\\alpha$) is established through the open-chain intermediate.</li>
</ul>

<h4>3. Biological Significance of Specific Monosaccharides</h4>
<ul>
  <li><strong>D-Glucose (Dextrose / Blood Sugar):</strong> The universal physiological fuel for animal cells. Essential for erythrocytes (which lack mitochondria) and the central nervous system. In lactating ruminants, mammary uptake of glucose drives lactose synthesis and milk volume.</li>
  <li><strong>D-Fructose (Fruit Sugar / Levulose):</strong> A ketohexose. It is the primary energy substrate in the seminal plasma of bulls, rams, and boars, produced by seminal vesicles under androgenic control to fuel sperm motility.</li>
  <li><strong>D-Galactose:</strong> An aldohexose required for the biosynthesis of lactose in the lactating mammary gland and glycolipids (cerebrosides) in nervous tissue myelin.</li>
  <li><strong>D-Mannose:</strong> A C-2 epimer of glucose; an essential constituent of glycoproteins and bacterial binding adhesins.</li>
  <li><strong>D-Ribose & 2-Deoxy-D-Ribose:</strong> Aldopentoses forming the pentose backbone of RNA, DNA, ATP, NADH, and FAD.</li>
</ul>

<h4>4. Amino Sugars and Derivatives</h4>
<p>Amino sugars have a hydroxyl group (usually at C-2) replaced by an amino group ($-NH_2$), which is frequently acetylated:</p>
<ul>
  <li><strong>D-Glucosamine (and N-Acetylglucosamine / NAG):</strong> Precursor of glycosaminoglycans (hyaluronic acid, heparin) and chitin.</li>
  <li><strong>D-Galactosamine (and N-Acetylgalactosamine / GalNAc):</strong> Component of chondroitin sulfate in cartilage and blood group antigens.</li>
  <li><strong>Sialic Acids (N-Acetylneuraminic Acid / NANA):</strong> 9-carbon acidic amino sugars capping gangliosides and cell-surface glycoproteins, mediating negative surface charge and receptor-ligand interactions.</li>
</ul>""",
        "eliteDesc": """<h4>Pyranose vs. Furanose Conformation and Thermodynamic Stability</h4>
<p>In solution, aldohexoses adopt 6-membered <strong>pyranose</strong> rings, while aldopentoses and ketohexoses form 5-membered <strong>furanose</strong> rings. The pyranose ring is non-planar and adopts the energetically favored <strong>chair conformation</strong> ($^4C_1$). $\\beta$-D-glucopyranose is the most thermodynamically stable aldohexose in nature because all bulky substituents ($-OH$ groups and the $-CH_2OH$ group) occupy equatorial positions, minimizing 1,3-diaxial steric clash.</p>

<h4>Enzymatic Interconversion in Semen</h4>
<p>In the seminal vesicles of domestic livestock (bull, ram), fructose is generated via the <strong>Polyol Pathway</strong>: D-Glucose is reduced to sorbitol by Aldose Reductase (using NADPH), and sorbitol is oxidized to D-Fructose by Sorbitol Dehydrogenase (using $NAD^+$). Spermatozoa utilize fructose via fructokinase because fructose entry is independent of insulin.</p>""",
        "keyPoints": [
            "Monosaccharides are polyhydroxy aldehydes (aldoses) or polyhydroxy ketones (ketoses).",
            "Naturally occurring animal carbohydrates belong to the D-stereochemical series.",
            "Epimers differ in configuration at only one chiral carbon: C-4 (Galactose) or C-2 (Mannose) vs Glucose.",
            "Cyclization generates an anomeric carbon (C-1 in aldoses, C-2 in ketoses) forming $\\alpha$ and $\\beta$ anomers.",
            "Mutarotation is the spontaneous change in specific optical rotation reaching an equilibrium value ($+52.7^\\circ$).",
            "$\\beta$-D-glucopyranose is the most stable aldohexose because all $-OH$ groups are equatorial in chair form.",
            "Glucose is the obligate metabolic fuel for mammalian red blood cells and brain tissue.",
            "In ruminants, blood glucose is synthesized endogenously in the liver from ruminal propionate.",
            "Fructose is the exclusive glycolytic fuel for spermatozoa in bull, ram, and boar seminal plasma.",
            "Galactose synthesized in the mammary gland condenses with glucose to produce milk lactose.",
            "Ribose and deoxyribose form the pentose sugar backbones of RNA, DNA, and nucleotide coenzymes.",
            "Amino sugars (NAG, GalNAc) provide the structural foundation for connective tissue glycosaminoglycans."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Seminal Fructose Assessment in Breeding Soundness Examination (BSE):<br>
In bulls, rams, and stallions, seminal plasma fructose concentration directly reflects seminal vesicle secretory function and circulating testosterone status. Normal bull seminal fructose ranges between 300 and 800 mg/dL. In cases of seminal vesiculitis or bilateral aplasia/obstruction of the ampullae and seminal vesicles, fructose levels plummet drastically (<50 mg/dL), leading to severe asthenozoospermia (immotile sperm) and herd infertility. Measuring seminal fructose provides a definitive diagnostic tool during pre-purchase breeding soundness evaluations.</p>""",
        "tables": [
            {
                "title": "Classification and Selected Examples of Monosaccharides",
                "headers": ["Carbon Number", "Class Name", "Aldose Example", "Ketose Example", "Biological Role"],
                "rows": [
                    ["3 Carbons ($C_3H_6O_3$)", "Triose", "D-Glyceraldehyde", "Dihydroxyacetone", "Intermediates in glycolysis and lipid synthesis"],
                    ["4 Carbons ($C_4H_8O_4$)", "Tetrose", "D-Erythrose", "D-Erythrulose", "Intermediate in HMP shunt / carbon fixation"],
                    ["5 Carbons ($C_5H_{10}O_5$)", "Pentose", "D-Ribose, D-Xylose", "D-Ribulose, D-Xylulose", "RNA backbone; coenzymes (ATP, NAD, FAD)"],
                    ["6 Carbons ($C_6H_{12}O_6$)", "Hexose", "D-Glucose, D-Galactose, D-Mannose", "D-Fructose", "Primary cellular fuels and disaccharide synthesis"],
                    ["7 Carbons ($C_7H_{14}O_7$)", "Heptose", "D-Glucoheptose", "Sedoheptulose", "HMP shunt branch point intermediate"]
                ]
            },
            {
                "title": "Comparison of Important Hexose Isomers",
                "headers": ["Monosaccharide", "Carbonyl Type", "Ring Form in Solution", "Relation to D-Glucose", "Primary Veterinary Occurrence"],
                "rows": [
                    ["D-Glucose", "Aldohexose (C-1)", "$\\beta$-D-glucopyranose", "Parent reference sugar", "Systemic circulation (blood sugar); milk precursor"],
                    ["D-Galactose", "Aldohexose (C-1)", "$\\beta$-D-galactopyranose", "C-4 Epimer", "Mammary gland, milk lactose, myelin cerebrosides"],
                    ["D-Mannose", "Aldohexose (C-1)", "$\\alpha$-D-mannopyranose", "C-2 Epimer", "Glycoproteins, mucins, bacterial adhesin target"],
                    ["D-Fructose", "Ketohexose (C-2)", "$\\beta$-D-fructofuranose", "Functional group structural isomer", "Seminal plasma of farm livestock, honey, fruit"]
                ]
            }
        ],
        "img": "",
        "tags": ["Monosaccharides", "Glucose", "Fructose", "Epimers", "Mutarotation", "Seminal Plasma"]
    },

    "u1-t07": {
        "summary": "Disaccharides consist of two monosaccharide units covalently linked by an O-glycosidic bond, serving as transport carbohydrates, milk nutrients (lactose), or hydrolytic intermediates of structural polysaccharides.",
        "desc": """<h4>1. Nature of the Glycosidic Bond</h4>
<p>A <strong>disaccharide</strong> ($C_{12}H_{22}O_{11}$) is formed when the anomeric hydroxyl group of one monosaccharide condenses with a hydroxyl group of another monosaccharide, eliminating a molecule of water. The resulting linkage is an <strong>O-glycosidic bond</strong>.</p>
<ul>
  <li><strong>Reducing vs. Non-Reducing Disaccharides:</strong>
    <ul>
      <li><em>Reducing Disaccharides:</em> Formed when only one anomeric carbon participates in the bond, leaving the second anomeric carbon with a free hemiacetal or hemiketal group (e.g., Maltose, Lactose, Cellobiose). They exhibit mutarotation, form osazone crystals, and reduce Benedict's, Fehling's, and Tollens' reagents.</li>
      <li><em>Non-Reducing Disaccharides:</em> Formed when the anomeric carbons of both monosaccharide units are linked together directly (e.g., Sucrose, Trehalose). No free hemiacetal group remains; thus they do not undergo mutarotation, do not form osazones, and yield a negative Benedict's test unless first hydrolyzed by acid or enzymes.</li>
    </ul>
  </li>
</ul>

<h4>2. Detailed Chemistry of Major Disaccharides</h4>
<ul>
  <li><strong>1. Lactose (Milk Sugar):</strong>
    <ul>
      <li><strong>Composition:</strong> $\\beta$-D-Galactose + D-Glucose.</li>
      <li><strong>Glycosidic Linkage:</strong> $\\mathbf{\\beta(1 \\rightarrow 4)}$ glycosidic bond.</li>
      <li><strong>Properties:</strong> Reducing sugar; undergoes mutarotation; forms characteristic 'puff-ball' or 'hedgehog' osazone crystals. Hydrolyzed by the intestinal brush border enzyme <strong>lactase ($\\beta$-galactosidase)</strong>.</li>
      <li><strong>Veterinary Significance:</strong> The sole carbohydrate in mammalian milk. Lactose draws water into the mammary secretory alveolar lumen via osmosis, directly dictating total daily milk volume.</li>
    </ul>
  </li>
  <li><strong>2. Maltose (Malt Sugar):</strong>
    <ul>
      <li><strong>Composition:</strong> $\\alpha$-D-Glucose + D-Glucose.</li>
      <li><strong>Glycosidic Linkage:</strong> $\\mathbf{\\alpha(1 \\rightarrow 4)}$ glycosidic bond.</li>
      <li><strong>Properties:</strong> Reducing sugar; produced as the major intermediate during the digestion of starch and glycogen by salivary and pancreatic $\\alpha$-amylase. Forms sunflower-shaped osazone crystals. Hydrolyzed by <strong>maltase ($\\alpha$-glucosidase)</strong>.</li>
    </ul>
  </li>
  <li><strong>3. Isomaltose:</strong>
    <ul>
      <li><strong>Composition:</strong> $\\alpha$-D-Glucose + D-Glucose.</li>
      <li><strong>Glycosidic Linkage:</strong> $\\mathbf{\\alpha(1 \\rightarrow 6)}$ glycosidic bond.</li>
      <li><strong>Properties:</strong> Reducing sugar; derived from the branch points of amylopectin and glycogen during amylolytic cleavage. Cleaved by <strong>isomaltase</strong>.</li>
    </ul>
  </li>
  <li><strong>4. Sucrose (Cane Sugar / Table Sugar):</strong>
    <ul>
      <li><strong>Composition:</strong> $\\alpha$-D-Glucose + $\\beta$-D-Fructose.</li>
      <li><strong>Glycosidic Linkage:</strong> $\\mathbf{\\alpha1 \\leftrightarrow \\beta2}$ diglycosidic linkage (anomeric to anomeric).</li>
      <li><strong>Properties:</strong> Non-reducing sugar; does not mutarotate. Upon acid or sucrase (invertase) hydrolysis, its dextrorotatory optical rotation ($+66.5^\\circ$) inverts to levorotatory ($-19.7^\\circ$) because the levorotation of free fructose ($-92.4^\\circ$) exceeds the dextrorotation of free glucose ($+52.7^\\circ$). The resulting 1:1 equimolar mixture is called <strong>Invert Sugar</strong>.</li>
      <li><strong>Veterinary Note:</strong> Neonatal calves and piglets lack intestinal sucrase at birth; feeding them sucrose-containing milk replacers induces severe osmotic diarrhea.</li>
    </ul>
  </li>
  <li><strong>5. Cellobiose:</strong>
    <ul>
      <li><strong>Composition:</strong> $\\beta$-D-Glucose + D-Glucose.</li>
      <li><strong>Glycosidic Linkage:</strong> $\\mathbf{\\beta(1 \\rightarrow 4)}$ glycosidic bond.</li>
      <li><strong>Properties:</strong> Reducing sugar; repeating structural repeating disaccharide of <strong>cellulose</strong>. Mammalian digestive enzymes cannot hydrolyze the $\\beta(1 \\rightarrow 4)$ bond; it is digested exclusively by microbial <strong>cellobiase</strong> in the rumen and hindgut.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Thermodynamics of Invert Sugar Formation</h4>
<p>Sucrose is a non-reducing sugar possessing high potential energy because of its strained diglycosidic linkage between two hemiacetal/hemiketal centers ($\Delta G^{\circ\\prime} = -29.3\\ \\text{kJ/mol}$ for hydrolysis). The optical inversion phenomenon (Walden-like change in macro-polarimetry) occurs according to:</p>
$$\\text{Sucrose } (+66.5^\\circ) + H_2O \\xrightarrow{\\text{Invertase}} \\text{D-Glucose } (+52.7^\\circ) + \\text{D-Fructose } (-92.4^\\circ)$$
$$\\text{Net Specific Rotation of Mixture} = \\frac{+52.7^\\circ + (-92.4^\\circ)}{2} = -19.85^\\circ \\quad (\\text{Inverted})$$

<h4>Trehalose: Comparative Protective Role</h4>
<p>Trehalose is an $\\alpha(1 \\leftrightarrow 1)$ non-reducing disaccharide of two glucose units. Found in insect hemolymph and certain nematodes, it acts as anhydrobiotic cryoprotectant, preserving cell membrane integrity during freezing or severe desiccation.</p>""",
        "keyPoints": [
            "Disaccharides are formed by two monosaccharides linked by an O-glycosidic bond.",
            "Reducing disaccharides retain a free anomeric hydroxyl group (Maltose, Lactose, Cellobiose).",
            "Non-reducing disaccharides link both anomeric carbons together (Sucrose, Trehalose).",
            "Lactose is composed of $\\beta$-D-galactose and D-glucose linked by a $\\beta(1 \\rightarrow 4)$ bond.",
            "Lactose is unique to milk; acts as the primary osmotic regulator of milk volume.",
            "Maltose contains two $\\alpha$-D-glucose units joined by an $\\alpha(1 \\rightarrow 4)$ linkage.",
            "Isomaltose possesses an $\\alpha(1 \\rightarrow 6)$ linkage, representing amylopectin branch points.",
            "Sucrose connects glucose and fructose via an $\\alpha1 \\leftrightarrow \\beta2$ glycosidic linkage.",
            "Hydrolysis of sucrose yields 'Invert Sugar' due to optical inversion from $+66.5^\\circ$ to $-19.8^\\circ$.",
            "Cellobiose consists of two glucose units with a $\\beta(1 \\rightarrow 4)$ linkage (cellulose fragment).",
            "Mammals lack cellulase/cellobiase; reliant on rumen and cecal microflora for cleavage.",
            "Young calves lack intestinal sucrase; sucrose in milk replacer causes lethal osmotic scours."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Secondary Lactase Deficiency and Osmotic Scours in Calves and Puppies:<br>
Intestinal brush border lactase ($\\beta$-galactosidase) reaches peak expression during the neonatal suckling period. Following viral enteritis (e.g., Bovine Rotavirus, Coronavirus, or Canine Parvovirus), the apical villous enterocytes are blunted and sloughed off. Without brush border lactase, undigested lactose remains in the intestinal lumen, drawing water osmotically (watery diarrhea) and fermenting into lactic acid and volatile fatty acids by colonic bacteria. This leads to severe flatulence, metabolic acidosis, and dehydration. Treatment requires oral rehydration solutions and temporary withholding of whole milk or substitution with hydrolyzed milk diets.</p>""",
        "tables": [
            {
                "title": "Diagnostic Summary of Major Disaccharides",
                "headers": ["Disaccharide", "Monomer Units", "Glycosidic Bond", "Reducing Status", "Osazone Crystal Shape"],
                "rows": [
                    ["Lactose", "$\\beta$-D-Galactose + D-Glucose", "$\\beta(1 \\rightarrow 4)$", "Reducing", "Puff-ball / Hedgehog / Cotton-ball shaped"],
                    ["Maltose", "$\\alpha$-D-Glucose + D-Glucose", "$\\alpha(1 \\rightarrow 4)$", "Reducing", "Sunflower / Petal-shaped crystals"],
                    ["Isomaltose", "$\\alpha$-D-Glucose + D-Glucose", "$\\alpha(1 \\rightarrow 6)$", "Reducing", "Fine needle rosettes (slow forming)"],
                    ["Sucrose", "$\\alpha$-D-Glucose + $\\beta$-D-Fructose", "$\\alpha1 \\leftrightarrow \\beta2$", "Non-Reducing", "No crystals formed (Negative)"],
                    ["Cellobiose", "$\\beta$-D-Glucose + D-Glucose", "$\\beta(1 \\rightarrow 4)$", "Reducing", "Fine microscopic needles"]
                ]
            },
            {
                "title": "Digestion of Dietary Disaccharides in Domestic Animals",
                "headers": ["Disaccharide", "Brush Border Enzyme", "End Products", "Clinical / Species Nuance"],
                "rows": [
                    ["Lactose", "Lactase ($\\beta$-Galactosidase)", "Glucose + Galactose", "Declines after weaning; absent in adult cats/dogs (adult hypolactasia)"],
                    ["Maltose", "Maltase ($\\alpha$-Glucosidase)", "2 Glucose", "High activity in weaned pigs and carnivores; low in neonatal calves"],
                    ["Sucrose", "Sucrase (Invertase)", "Glucose + Fructose", "Absent in neonatal ruminants; low in mature cattle; high in adult dogs"],
                    ["Cellobiose", "Microbial Cellobiase", "2 Glucose (fermented to VFAs)", "Digested in rumen/reticulum (cattle) or cecum/colon (horse)"]
                ]
            }
        ],
        "img": "",
        "tags": ["Disaccharides", "Lactose", "Maltose", "Sucrose", "Glycosidic Bond", "Invert Sugar"]
    },

    "u1-t08": {
        "summary": "Polysaccharides (glycans) are high-molecular-weight polymers of monosaccharides linked by glycosidic bonds, functioning either as cellular energy reservoirs (starch, glycogen, inulin) or structural architectural scaffolds (cellulose, chitin).",
        "desc": """<h4>1. Definition and Classification of Polysaccharides</h4>
<p>Polysaccharides (glycans) consist of tens to thousands of monosaccharide units joined together. They are classified into two broad categories:</p>
<ul>
  <li><strong>Homopolysaccharides (Homoglycans):</strong> Yield a single type of monosaccharide upon complete hydrolysis (e.g., Starch, Glycogen, Cellulose, Inulin, Chitin, Dextran).</li>
  <li><strong>Heteropolysaccharides (Heteroglycans):</strong> Yield two or more different types of monosaccharides or their derivatives upon hydrolysis (e.g., Glycosaminoglycans, Hemicellulose, Pectin).</li>
</ul>

<h4>2. Detailed Chemistry of Major Storage Homopolysaccharides</h4>
<ul>
  <li><strong>1. Starch:</strong>
    <ul>
      <li>The primary storage polysaccharide of plants (cereal grains, seeds, tubers). Polymer of D-glucose consisting of two structural components:
        <ul>
          <li><em>Amylose (15–20%):</em> Linear, unbranched chain of D-glucose units linked by <strong>$\\alpha(1 \\rightarrow 4)$</strong> glycosidic bonds. Adopts a helical secondary structure that traps molecular iodine, producing an intense <strong>deep blue color</strong>.</li>
          <li><em>Amylopectin (80–85%):</em> Highly branched polymer. The main backbone contains <strong>$\\alpha(1 \\rightarrow 4)$</strong> linkages, with branch points occurring every <strong>24 to 30 glucose residues</strong> via <strong>$\\alpha(1 \\rightarrow 6)$</strong> linkages. Gives a <strong>reddish-purple / purplish-red color</strong> with iodine.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>2. Glycogen (Animal Starch):</strong>
    <ul>
      <li>The major storage polysaccharide in animal tissues, stored primarily in the <strong>liver (up to 5–8% of fresh weight)</strong> and <strong>skeletal muscle (1–2%)</strong>.</li>
      <li>Polymer of D-glucose similar in structure to amylopectin, but <strong>much more extensively branched and compact</strong>: branch points occur every <strong>8 to 12 glucose residues</strong> via $\\alpha(1 \\rightarrow 6)$ linkages, with linear chains linked by $\\alpha(1 \\rightarrow 4)$ bonds.</li>
      <li>Highly branched structure provides thousands of non-reducing ends for rapid enzymatic mobilization (glycogenolysis) during acute muscular exercise or fasting. Produces a <strong>red-brown / mahogany color</strong> with iodine.</li>
    </ul>
  </li>
  <li><strong>3. Dextrins:</strong>
    <ul>
      <li>Partial hydrolytic breakdown products of starch produced by amylase action or dry heating. Include soluble starch, amylodextrin (blue with iodine), erythrodextrin (red with iodine), and achroodextrin (colorless).</li>
    </ul>
  </li>
  <li><strong>4. Dextrans:</strong>
    <ul>
      <li>Highly branched homopolymers of D-glucose linked primarily by <strong>$\\alpha(1 \\rightarrow 6)$</strong> bonds, with $\\alpha(1 \\rightarrow 3)$ and $\\alpha(1 \\rightarrow 4)$ branches, synthesized by bacteria (e.g., <em>Leuconostoc mesenteroides</em>). Used clinically in veterinary medicine as a synthetic plasma volume expander for hypovolemic shock.</li>
    </ul>
  </li>
  <li><strong>5. Inulin:</strong>
    <ul>
      <li>Linear homopolysaccharide composed of D-fructose units linked by <strong>$\\beta(2 \\rightarrow 1)$</strong> glycosidic bonds, with a terminal glucose. Stored in chicory and dahlia tubers.</li>
      <li>Not hydrolyzed by mammalian digestive enzymes. Completely filtered at the renal glomerulus and neither reabsorbed nor secreted by tubules, making inulin the gold-standard reference marker for measuring <strong>Glomerular Filtration Rate (GFR)</strong> in animals.</li>
    </ul>
  </li>
</ul>

<h4>3. Structural Homopolysaccharides</h4>
<ul>
  <li><strong>1. Cellulose:</strong>
    <ul>
      <li>The most abundant organic biomolecule on earth; primary constituent of plant cell walls.</li>
      <li>Linear, unbranched homopolymer of D-glucose linked exclusively by <strong>$\\mathbf{\\beta(1 \\rightarrow 4)}$</strong> glycosidic bonds.</li>
      <li>Unlike the flexible helices of amylose, individual cellulose chains adopt an extended linear conformation stabilized by extensive intra-chain and inter-chain <strong>hydrogen bonding</strong>, bundling into rigid, water-insoluble <strong>microfibrils</strong> with high tensile strength.</li>
      <li>Mammals do not secrete endogenous cellulase; digestion in ruminants (rumen) and equines (cecum/colon) depends on symbiotic cellulolytic microbes (e.g., <em>Fibrobacter succinogenes, Ruminococcus flavefaciens</em>).</li>
    </ul>
  </li>
  <li><strong>2. Chitin:</strong>
    <ul>
      <li>Linear homopolymer of <strong>N-acetyl-D-glucosamine (NAG)</strong> linked by <strong>$\\beta(1 \\rightarrow 4)$</strong> glycosidic bonds. Forms the hard exoskeleton of arthropods (insects, crustaceans, ticks, mites) and cell walls of fungi.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Supramolecular Organization of Cellulose vs. Glycogen</h4>
<p>The fundamental functional difference between cellulose and glycogen arises from their glycosidic stereochemistry:
$$\\alpha(1 \\rightarrow 4)\\text{ (Glycogen/Starch)} \\implies 60^\\circ\\text{ bond angle} \\implies \\text{Open, soluble, coiled hollow helix}$$
$$\\beta(1 \\rightarrow 4)\\text{ (Cellulose)} \\implies 180^\\circ\\text{ bond angle (flip per residue)} \\implies \\text{Rigid, flat, linear ribbon}$$
<p>Because every alternating glucose residue in cellulose is flipped 180°, inter-chain hydrogen bonds between C-3 hydroxyls and C-6 hydroxymethyls form a paracrystalline lattice that excludes water and is completely impenetrable to standard mammalian proteases and amylases.</p>""",
        "keyPoints": [
            "Homopolysaccharides yield a single monomer type; heteropolysaccharides yield two or more types.",
            "Starch is composed of linear Amylose ($\\alpha 1 \\rightarrow 4$) and branched Amylopectin ($\\alpha 1 \\rightarrow 4$ and $\\alpha 1 \\rightarrow 6$).",
            "Amylose forms a helical coil and gives a characteristic deep blue reaction with molecular iodine.",
            "Amylopectin branches every 24 to 30 glucose units, giving a reddish-purple color with iodine.",
            "Glycogen is the animal storage polysaccharide, highly branched every 8 to 12 residues.",
            "Liver glycogen buffers blood glucose; muscle glycogen serves strictly as an intracellular fuel.",
            "Cellulose is a linear unbranched polymer of D-glucose linked by $\\beta(1 \\rightarrow 4)$ glycosidic bonds.",
            "Mammals lack endogenous cellulase; ruminant and equine digestion depends on microbial fermentation.",
            "Cellulose microfibrils are cross-linked by hydrogen bonds, providing exceptional tensile strength.",
            "Inulin is a polymer of D-fructose linked by $\\beta(2 \\rightarrow 1)$ bonds; used to measure animal GFR.",
            "Dextran is an $\\alpha(1 \\rightarrow 6)$ bacterial glucan used as an emergency plasma volume expander.",
            "Chitin consists of $\\beta(1 \\rightarrow 4)$-linked N-acetylglucosamine in arthropod exoskeletons."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Ruminal Acidosis (Grain Overload / Carbohydrate Engorgement):<br>
When cattle, sheep, or goats accidentally consume excessive amounts of rapidly fermentable cereal grain (rich in starch/amylose and amylopectin), the normal microbial ecosystem in the rumen collapses. Amylolytic bacteria (such as <em>Streptococcus bovis</em>) multiply explosively, converting starch into large quantities of D- and L-lactic acid. The ruminal pH plunges from a normal 6.2–6.8 down to < 5.0. This destroys cellulolytic bacteria, damages the ruminal stratified squamous epithelium (chemical ruminitis), causes systemic lactic acidosis, severe dehydration via osmotic fluid shift into the rumen, and hepatic abscessation due to translocation of <em>Fusobacterium necrophorum</em>.</p>""",
        "tables": [
            {
                "title": "Comprehensive Comparison of Major Polysaccharides",
                "headers": ["Polysaccharide", "Monomer Unit", "Linkages Present", "Branching Frequency", "Iodine Reaction", "Biological Function"],
                "rows": [
                    ["Amylose", "D-Glucose", "$\\alpha(1 \\rightarrow 4)$ exclusively", "None (linear helix)", "Deep Blue", "Plant energy storage (seeds, tubers)"],
                    ["Amylopectin", "D-Glucose", "$\\alpha(1 \\rightarrow 4)$ & $\\alpha(1 \\rightarrow 6)$", "Every 24 - 30 residues", "Reddish-Purple", "Major plant starch fraction (80-85%)"],
                    ["Glycogen", "D-Glucose", "$\\alpha(1 \\rightarrow 4)$ & $\\alpha(1 \\rightarrow 6)$", "Every 8 - 12 residues", "Red-Brown / Mahogany", "Animal energy storage (liver and muscle)"],
                    ["Cellulose", "D-Glucose", "$\\beta(1 \\rightarrow 4)$ exclusively", "None (linear ribbon)", "No reaction (Yellow)", "Structural plant cell wall architecture"],
                    ["Inulin", "D-Fructose", "$\\beta(2 \\rightarrow 1)$", "None (linear)", "No reaction", "Plant storage; veterinary GFR clearance marker"],
                    ["Chitin", "N-Acetylglucosamine", "$\\beta(1 \\rightarrow 4)$", "None (linear sheets)", "No reaction", "Exoskeleton of arthropods, fungal cell walls"]
                ]
            },
            {
                "title": "Starch vs. Cellulose Digestion in Veterinary Species",
                "headers": ["Parameter", "Starch Digestion", "Cellulose Digestion"],
                "rows": [
                    ["Cleaving Enzyme", "Pancreatic $\\alpha$-amylase, maltase, isomaltase", "Microbial cellulase and cellobiase"],
                    ["Site in Ruminant", "Rumen (microbial) + Small intestine (amylase)", "Rumen and Reticulum exclusively"],
                    ["Site in Horse", "Stomach & Small intestine (enzymatic)", "Cecum and Large Colon (microbial fermentation)"],
                    ["End Products", "Glucose (monogastric) or Propionate (ruminant)", "Volatile Fatty Acids (Acetate, Butyrate)"],
                    ["Pathology of Excess", "Lactic ruminal acidosis, equine cecal laminitis", "Poor digestibility; impaction colic if unchopped"]
                ]
            }
        ],
        "img": "",
        "tags": ["Polysaccharides", "Starch", "Glycogen", "Cellulose", "Inulin", "Ruminal Acidosis"]
    },

    "u1-t09": {
        "summary": "Mucopolysaccharides (glycosaminoglycans) are unbranched heteropolysaccharides of repeating disaccharide units that provide hydration, compressive elasticity, and joint lubrication, while bacterial cell-wall peptidoglycan and lipopolysaccharides govern microbial morphology, Gram-staining, and veterinary endotoxic shock.",
        "desc": """<h4>1. Mucopolysaccharides (Glycosaminoglycans / GAGs)</h4>
<p><strong>Glycosaminoglycans (GAGs)</strong>, historically termed mucopolysaccharides, are long, linear, unbranched heteropolysaccharide chains composed of repeating disaccharide units: <strong>[Uronic Acid + Amino Sugar]$_n$</strong>.</p>
<ul>
  <li><strong>Chemical Properties:</strong> Except for hyaluronic acid, all GAGs contain covalently bound sulfate groups. The combination of carboxyl ($-COO^-$) and sulfate ($-SO_4^{2-}$) groups gives GAGs an extremely high density of negative electrical charge (polyanions).</li>
  <li><strong>Physiological Role:</strong> They attract water and sodium ions, adopting extended, hydrated conformations that form viscous, gel-like shock-absorbing matrices in animal extracellular connective tissue and joint synovial fluid.</li>
</ul>

<h4>2. Major Glycosaminoglycans in Domestic Animals</h4>
<ul>
  <li><strong>1. Hyaluronic Acid (Hyaluronan):</strong>
    <ul>
      <li><strong>Repeating Disaccharide:</strong> <strong>D-Glucuronic Acid + N-Acetylglucosamine (NAG)</strong> via $\\beta(1 \\rightarrow 3)$ linkage; disaccharides joined by $\\beta(1 \\rightarrow 4)$ bonds.</li>
      <li><strong>Distinctive Feature:</strong> The only GAG that is <em>non-sulfated</em> and not covalently linked to a protein core. Consists of up to 25,000 disaccharide units.</li>
      <li><strong>Location & Function:</strong> Synovial fluid of joints (providing boundary lubrication), vitreous humor of the eye, umbilical cord (Wharton's jelly), and cartilage.</li>
    </ul>
  </li>
  <li><strong>2. Chondroitin Sulfate:</strong>
    <ul>
      <li><strong>Repeating Disaccharide:</strong> <strong>D-Glucuronic Acid + N-Acetylgalactosamine-4/6-sulfate</strong>.</li>
      <li><strong>Location & Function:</strong> Most abundant GAG in the body; found in hyaline cartilage, bone matrix, tendons, and heart valves. Covalently bound to aggrecan core protein, giving cartilage its resilience to compression.</li>
    </ul>
  </li>
  <li><strong>3. Keratan Sulfate:</strong>
    <ul>
      <li><strong>Repeating Disaccharide:</strong> <strong>D-Galactose (instead of uronic acid) + N-Acetylglucosamine-6-sulfate</strong>.</li>
      <li><strong>Location & Function:</strong> Cornea (maintains perfect corneal optical transparency) and intervertebral discs.</li>
    </ul>
  </li>
  <li><strong>4. Heparin and Heparan Sulfate:</strong>
    <ul>
      <li><strong>Repeating Disaccharide:</strong> <strong>D-Glucuronic / L-Iduronic Acid-2-sulfate + N-Sulfo-D-glucosamine-6-sulfate</strong>.</li>
      <li><strong>Properties:</strong> The highest negative charge density of any known biological macromolecule. Stored inside the secretory granules of mast cells and basophils.</li>
      <li><strong>Veterinary Anticoagulant Action:</strong> Heparin binds to and allosterically activates <strong>Antithrombin III (AT-III)</strong>, accelerating its inhibition of thrombin (Factor IIa) and Factor Xa by over 1,000-fold, preventing intravascular thrombosis.</li>
    </ul>
  </li>
  <li><strong>5. Dermatan Sulfate:</strong>
    <ul>
      <li><strong>Repeating Disaccharide:</strong> <strong>L-Iduronic Acid + N-Acetylgalactosamine-4-sulfate</strong>. Found in skin, blood vessels, and heart valves.</li>
    </ul>
  </li>
</ul>

<h4>3. Bacterial Cell-Wall Polysaccharides</h4>
<ul>
  <li><strong>1. Peptidoglycan (Murein):</strong>
    <ul>
      <li>The rigid exoskeleton mesh protecting bacterial cells from osmotic lysis.</li>
      <li>Consists of alternating polysaccharide chains of <strong>N-Acetylglucosamine (NAG)</strong> and <strong>N-Acetylmuramic Acid (NAM)</strong> joined by <strong>$\\mathbf{\\beta(1 \\rightarrow 4)}$</strong> glycosidic bonds.</li>
      <li>From each NAM residue projects a short tetrapeptide stem containing unusual <strong>D-amino acids</strong> (L-Ala, D-Glu, L-Lys / meso-DAP, D-Ala). Parallel chains are cross-linked via peptide bridges (e.g., pentaglycine bridge in <em>Staphylococcus aureus</em>).</li>
      <li><strong>Antibiotic & Enzyme Vulnerability:</strong> Cleaved by the veterinary innate defense enzyme <strong>Lysozyme</strong> (found in tears, saliva, and egg white). $\\beta$-Lactam antibiotics (penicillins, cephalosporins) inhibit the bacterial transpeptidase enzyme that cross-links peptidoglycan.</li>
    </ul>
  </li>
  <li><strong>2. Gram-Positive vs. Gram-Negative Cell Walls:</strong>
    <ul>
      <li><em>Gram-Positive:</em> Thick, multilayered peptidoglycan (20–80 nm) interlaced with charged <strong>Teichoic Acids</strong> and lipoteichoic acids.</li>
      <li><em>Gram-Negative:</em> Thin single layer of peptidoglycan (2–7 nm) surrounded by an asymmetric <strong>Outer Membrane</strong> containing <strong>Lipopolysaccharide (LPS / Endotoxin)</strong>.</li>
    </ul>
  </li>
  <li><strong>3. Lipopolysaccharide (LPS / Endotoxin):</strong>
    <ul>
      <li>Found in the outer membrane of Gram-negative pathogens (e.g., <em>E. coli, Salmonella, Pasteurella</em>). Consists of three regions:
        <ol>
          <li><strong>Lipid A:</strong> Phosphorylated glucosamine disaccharide attached to fatty acids (beta-hydroxymyristic acid); the toxic, pyrogenic moiety responsible for endotoxic shock.</li>
          <li><strong>Core Polysaccharide:</strong> Branched oligosaccharide containing KDO (2-keto-3-deoxyoctonate) and heptose.</li>
          <li><strong>O-Specific Antigen (O-Polysaccharide):</strong> Highly variable repeating oligosaccharide side chains extending outward, conferring serotype specificity and antiphagocytic evasion.</li>
        </ol>
      </li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Aggrecan-Hyaluronan Supramolecular Complexes</h4>
<p>In articular cartilage, hundreds of aggrecan proteoglycan monomers non-covalently bind to a central, elongated hyaluronic acid backbone via globular G1 domains stabilized by a small link protein. The resulting megadalton aggregate creates massive polyanionic charge density. Under joint compression, water is temporarily squeezed out; when load is released, the elastic electrostatic repulsion of the sulfate groups instantly sucks water back in, providing frictionless, shock-absorbing joint locomotion in racehorses and working dogs.</p>""",
        "keyPoints": [
            "Mucopolysaccharides (GAGs) are linear heteropolysaccharides of repeating [Uronic acid + Amino sugar] units.",
            "Except for hyaluronic acid, all GAGs are sulfated and covalently linked to protein cores (proteoglycans).",
            "GAG polyanionic charges attract $Na^+$ and water, forming hydrated shock-absorbing gel matrices.",
            "Hyaluronic acid is non-sulfated, non-protein bound, and serves as the primary joint synovial lubricant.",
            "Chondroitin sulfate is the most abundant body GAG, providing compressive resistance in cartilage.",
            "Heparin carries the highest negative charge density of any known biological macromolecule.",
            "Heparin exerts veterinary anticoagulant action by accelerating Antithrombin III inhibition of Thrombin.",
            "Peptidoglycan forms the bacterial cell wall: alternating NAG-NAM chains linked by $\\beta(1 \\rightarrow 4)$ bonds.",
            "Bacterial cell walls contain D-amino acids (D-alanine, D-glutamate) resistant to mammalian peptidases.",
            "Lysozyme hydrolyzes the $\\beta(1 \\rightarrow 4)$ bond between NAM and NAG in bacterial peptidoglycan.",
            "Gram-negative bacteria possess an outer membrane containing Lipopolysaccharide (LPS / Endotoxin).",
            "Lipid A is the toxic, pyrogenic anchor of LPS triggering fatal endotoxic shock in domestic animals."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Equine Endotoxemia (Colic and Laminitis):<br>
In horses suffering from strangulating intestinal obstruction or acute carbohydrate overload, the compromised intestinal mucosal barrier permits massive transmural leakage of Gram-negative bacterial <strong>Lipopolysaccharide (LPS)</strong> into the portal and systemic circulation. <strong>Lipid A</strong> binds to host Lipopolysaccharide-Binding Protein (LBP) and activates macrophage <strong>TLR-4 (Toll-Like Receptor 4)</strong>. This triggers an explosive systemic release of pro-inflammatory cytokines (TNF-alpha, IL-1beta, IL-6). The horse manifests hyperemic 'toxic' mucous membranes, tachycardia, severe hypotension, and widespread digital microvascular thrombosis, culminating in devastating acute <strong>laminitis ('founder')</strong>.</p>""",
        "tables": [
            {
                "title": "Classification and Properties of Major Glycosaminoglycans (GAGs)",
                "headers": ["GAG Type", "Uronic Acid Component", "Amino Sugar Component", "Sulfate Present?", "Primary Anatomical Distribution"],
                "rows": [
                    ["Hyaluronic Acid", "D-Glucuronic Acid", "N-Acetylglucosamine", "No (Non-sulfated)", "Synovial fluid, vitreous humor, umbilical cord, loose connective tissue"],
                    ["Chondroitin Sulfate", "D-Glucuronic Acid", "N-Acetylgalactosamine-4/6-S", "Yes", "Articular cartilage, bone matrix, heart valves, aorta"],
                    ["Keratan Sulfate", "None (D-Galactose instead)", "N-Acetylglucosamine-6-S", "Yes", "Cornea (maintains clarity), intervertebral discs, cartilage"],
                    ["Heparin", "D-Glucuronic / L-Iduronic-2-S", "N-Sulfo-D-glucosamine-6-S", "Yes (Highest density)", "Mast cell granules, lung, liver; physiological anticoagulant"],
                    ["Dermatan Sulfate", "L-Iduronic Acid", "N-Acetylgalactosamine-4-S", "Yes", "Skin, sclera, blood vessel walls, heart valves"]
                ]
            },
            {
                "title": "Bacterial Peptidoglycan and Cell Wall Comparison",
                "headers": ["Feature", "Gram-Positive Bacteria (e.g., Staphylococcus)", "Gram-Negative Bacteria (e.g., E. coli)"],
                "rows": [
                    ["Peptidoglycan Layer", "Thick, multilayered (20 - 80 nm; up to 90% of wall)", "Thin, single layer (2 - 7 nm; 10% of wall)"],
                    ["Teichoic / Lipoteichoic Acids", "Present (major surface antigens)", "Completely absent"],
                    ["Outer Membrane", "Absent", "Present (contains LPS and transmembrane porins)"],
                    ["Lipopolysaccharide (Endotoxin)", "Absent", "Abundant in outer leaflet of outer membrane"],
                    ["Lysozyme Susceptibility", "Highly susceptible (forms protoplasts)", "Low susceptibility unless outer membrane disrupted (forms spheroplasts)"],
                    ["Typical Veterinary Infection", "Mastitis, abscesses, pyoderma", "Coliform mastitis, calf scours, equine endotoxemic colic"]
                ]
            }
        ],
        "img": "",
        "tags": ["Glycosaminoglycans", "Hyaluronic Acid", "Heparin", "Peptidoglycan", "LPS", "Endotoxemia"]
    }
}
