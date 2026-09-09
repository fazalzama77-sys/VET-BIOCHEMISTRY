"""
Unit 1 Part 3: Lipid Chemistry, Lipoproteins, Fat Indices & Prostaglandins
Topics: u1-t10 to u1-t12
"""

PART3 = {
    "u1-t10": {
        "summary": "Lipids are heterogeneous, water-insoluble organic biomolecules soluble in non-polar organic solvents, classified into simple lipids (fats, waxes), compound lipids (phospholipids, glycolipids), and derived lipids (fatty acids, steroids) that function as energy reserves, biological membranes, and signaling mediators.",
        "desc": """<h4>1. Definition and Bloor's Classification of Lipids</h4>
<p>Lipids are organic substances composed of carbon, hydrogen, and oxygen (frequently containing phosphorus, nitrogen, or sulfur), characterized by being insoluble in water but freely soluble in non-polar organic solvents (chloroform, ether, benzene, acetone). According to Bloor (1943), lipids are classified into three major groups:</p>

<h4>2. Simple Lipids (Esters of Fatty Acids with Alcohols)</h4>
<ul>
  <li><strong>1. Neutral Fats (Triacylglycerols / Triglycerides / TAGs):</strong>
    <ul>
      <li>Esters of glycerol with three fatty acid molecules. They represent the primary concentrated energy storage reservoir in animal adipose tissue (yielding $9.3\\ \\text{kcal/g}$ compared to $4.1\\ \\text{kcal/g}$ for carbohydrates and proteins).</li>
      <li><em>Fats vs. Oils:</em> Fats are solid at room temperature due to a predominance of saturated fatty acids (e.g., tallow, lard). Oils are liquid at room temperature due to a high proportion of cis-unsaturated fatty acids (e.g., vegetable oils, fish oils).</li>
    </ul>
  </li>
  <li><strong>2. Waxes:</strong>
    <ul>
      <li>Esters of long-chain fatty acids with high-molecular-weight monohydric alcohols (e.g., cetyl alcohol, melissyl alcohol). Examples include beeswax (myricyl palmitate), lanolin (wool fat in sheep, used as an ointment base), and spermaceti. Provide water-repellent coatings on animal skin, wool, and avian feathers.</li>
    </ul>
  </li>
</ul>

<h4>3. Compound (Complex) Lipids</h4>
<p>Esters of fatty acids containing additional functional prosthetic groups (phosphate, carbohydrate, sulfate, or protein):</p>
<ul>
  <li><strong>1. Phospholipids (Glycerophospholipids & Sphingophospholipids):</strong>
    <ul>
      <li><em>Phosphatidylcholine (Lecithin):</em> Glycerol + 2 fatty acids + phosphate + choline. Major structural component of animal cell membranes and pulmonary surfactant (dipalmitoyl lecithin). Lipotropic agent preventing hepatic lipid accumulation.</li>
      <li><em>Phosphatidylethanolamine (Cephalin):</em> Contains ethanolamine; vital for nervous tissue and blood clotting thromboplastin activity.</li>
      <li><em>Phosphatidylserine:</em> Contains serine; participates in apoptosis signaling (flips to outer membrane leaflet as an 'eat-me' signal for macrophages).</li>
      <li><em>Cardiolipin (Diphosphatidylglycerol):</em> Two phosphatidic acid units joined by glycerol. Major constituent of the inner mitochondrial membrane, essential for the structural integrity of respiratory chain complexes.</li>
      <li><em>Sphingomyelin:</em> Contains <strong>Sphingosine</strong> (an 18-carbon amino alcohol) instead of glycerol, linked to a fatty acid via an amide bond (forming <strong>Ceramide</strong>), with a phosphorylcholine headgroup. Abundant in the myelin sheath of axons.</li>
    </ul>
  </li>
  <li><strong>2. Glycolipids (Glycosphingolipids):</strong>
    <ul>
      <li>Contain ceramide linked to carbohydrates; lack phosphate:
        <ul>
          <li><em>Cerebrosides:</em> Ceramide + single neutral sugar (galactocerebroside in brain white matter; glucocerebroside in non-neural tissues).</li>
          <li><em>Gangliosides:</em> Ceramide + branched oligosaccharide chain containing one or more <strong>Sialic Acid (NANA)</strong> residues. Concentrated in ganglion cells, serving as receptors for toxins (e.g., tetanus and cholera toxins).</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h4>4. Derived Lipids</h4>
<p>Substances produced by hydrolytic cleavage of simple and compound lipids, or displaying lipid-like physical properties:</p>
<ul>
  <li><strong>Fatty Acids:</strong> Saturated (palmitic 16:0, stearic 18:0) and Unsaturated (oleic 18:1, linoleic 18:2, linolenic 18:3, arachidonic 20:4).</li>
  <li><strong>Sterols and Steroids:</strong> Contain the four-fused-ring <strong>Cyclopentanoperhydrophenanthrene (CPPP)</strong> nucleus (Sterane ring). <strong>Cholesterol</strong> is the principal animal sterol, serving as the obligate metabolic precursor for bile acids (cholic, deoxycholic), steroid hormones (cortisol, aldosterone, progesterone, testosterone, estrogens), and Vitamin D3 (7-dehydrocholesterol).</li>
</ul>""",
        "eliteDesc": """<h4>Structural Diversity and Chirality of Glycerophospholipids</h4>
<p>Glycerophospholipids are derived stereospecifically from <em>sn</em>-glycerol-3-phosphate (stereospecific numbering, <em>sn</em>). In domestic animal cell membranes, the <em>sn-1</em> position is typically esterified with a saturated fatty acid (palmitic or stearic), while the <em>sn-2</em> position almost exclusively binds a polyunsaturated fatty acid (PUFA, usually arachidonic acid). Venom phospholipase $A_2$ ($PLA_2$) from elapid and viperid snakes specifically cleaves the <em>sn-2</em> ester bond, releasing free arachidonic acid and generating cytotoxic, hemolytic <strong>lysolecithins</strong> that destroy erythrocyte membranes.</p>""",
        "keyPoints": [
            "Lipids are water-insoluble biomolecules soluble in organic solvents (ether, chloroform).",
            "Classified by Bloor into Simple (TAGs, waxes), Compound (phospholipids, glycolipids), and Derived.",
            "Triacylglycerols (TAGs) are the principal concentrated form of stored metabolic energy ($9.3\\ \\text{kcal/g}$).",
            "Lanolin (wool wax) is an ester of fatty acids with sterols/monohydric alcohols in sheep wool.",
            "Phospholipids are amphipathic molecules forming the structural backbone of biological membranes.",
            "Lecithin (Phosphatidylcholine) is the primary lipid component of alveolar pulmonary surfactant.",
            "Cardiolipin contains two phosphatidic acids linked by glycerol, unique to inner mitochondrial membranes.",
            "Sphingomyelin is a sphingophospholipid containing ceramide and choline, insulating nerve axons.",
            "Cerebrosides are neutral glycolipids containing galactose or glucose attached to ceramide.",
            "Gangliosides contain sialic acid (NANA) and act as cell surface receptors for veterinary toxins.",
            "Cholesterol possesses the cyclopentanoperhydrophenanthrene (CPPP) ring system.",
            "Cholesterol is the metabolic precursor for bile acids, steroid hormones, and Vitamin D3."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Bovine Neonatal Respiratory Distress Syndrome (Pulmonary Surfactant Deficiency):<br>
In prematurely born calves and lambs, the type II alveolar pneumocytes have not yet matured to synthesize adequate quantities of pulmonary surfactant. The active anti-atelectasis surfactant agent is <strong>Dipalmitoylphosphatidylcholine (Dipalmitoyl Lecithin)</strong>. Surfactant reduces alveolar surface tension to near zero as alveolar radius shrinks during expiration (following the Law of Laplace: $P = 2T/r$). Without sufficient lecithin, alveolar surface tension remains high, causing massive alveolar collapse (atelectasis), severe hypoxemia, respiratory acidosis, and formation of pulmonary hyaline membranes. Treatment involves exogenous intratracheal surfactant instillation and maternal corticosteroid administration prior to anticipated preterm delivery.</p>""",
        "tables": [
            {
                "title": "Comprehensive Classification of Lipids (Bloor's System)",
                "headers": ["Major Class", "Subclass", "Chemical Composition", "Characteristic Animal Example"],
                "rows": [
                    ["Simple Lipids", "Neutral Fats (TAGs)", "Glycerol + 3 Fatty Acids", "Adipose tissue fat (bovine tallow, porcine lard)"],
                    ["Simple Lipids", "Waxes", "Fatty Acid + High MW Alcohol", "Lanolin (sheep wool grease), Beeswax"],
                    ["Compound Lipids", "Glycerophospholipids", "Glycerol + 2 FAs + Phosphate + Base", "Lecithin (Choline), Cephalin (Ethanolamine)"],
                    ["Compound Lipids", "Sphingophospholipids", "Sphingosine + FA + Phosphate + Base", "Sphingomyelin (axonal myelin sheath)"],
                    ["Compound Lipids", "Glycosphingolipids", "Sphingosine + FA + Carbohydrate", "Galactocerebrosides, GM1 Gangliosides"],
                    ["Derived Lipids", "Steroids & Sterols", "CPPP nucleus + hydrocarbon side chain", "Cholesterol, Cholic acid, Cortisol, Testosterone"]
                ]
            },
            {
                "title": "Major Phospholipids and Their Specialized Functions",
                "headers": ["Phospholipid", "Alcohol Backbone", "Nitrogenous Base / Headgroup", "Specialized Biological Role"],
                "rows": [
                    ["Phosphatidylcholine (Lecithin)", "Glycerol", "Choline", "Membrane fluidity, pulmonary surfactant, lipotropic bile constituent"],
                    ["Phosphatidylethanolamine (Cephalin)", "Glycerol", "Ethanolamine", "Blood thromboplastin cascade, inner membrane leaflet"],
                    ["Phosphatidylserine", "Glycerol", "Serine", "Apoptosis signaling; flips outward in senescent red blood cells"],
                    ["Cardiolipin", "Glycerol (dimer)", "None (2 Phosphatidyl groups)", "Stabilizes respiratory chain Complex I, III, IV in mitochondria"],
                    ["Sphingomyelin", "Sphingosine", "Phosphocholine", "Electrical insulator for saltatory conduction in myelinated nerves"]
                ]
            }
        ],
        "img": "",
        "tags": ["Lipids", "Phospholipids", "Sphingomyelin", "Cholesterol", "Surfactant", "Lecithin"]
    },

    "u1-t11": {
        "summary": "Lipoproteins are macromolecular lipid-protein complexes that solubilize and transport hydrophobic lipids in blood plasma, while fat indices (saponification, iodine, acid, and Reichert-Meissl values) provide standardized analytical constants for assessing purity, saturation, chain length, and rancidity of feed fats and oils.",
        "desc": """<h4>1. Plasma Lipoproteins: Structure and Classification</h4>
<p>Because triacylglycerols and cholesteryl esters are completely insoluble in aqueous blood plasma, they are packaged into spherical <strong>lipoprotein particles</strong>. A lipoprotein consists of a hydrophobic neutral lipid core (triacylglycerols and cholesteryl esters) surrounded by an amphipathic shell of unesterified cholesterol, phospholipids, and specialized proteins called <strong>Apolipoproteins (Apos)</strong>.</p>
<p>Classified by buoyant density via ultracentrifugation and electrophoretic mobility:</p>
<ul>
  <li><strong>1. Chylomicrons (Density $< 0.95\\ \\text{g/mL}$):</strong>
    <ul>
      <li>Largest particles (100–1000 nm), lowest protein content (1–2%), highest triacylglycerol content (85–90%).</li>
      <li>Synthesized by intestinal enterocytes to transport dietary (exogenous) lipids from the intestine via lymph (chyle) into the systemic circulation. Contain <strong>Apo B-48</strong>, Apo C-II, and Apo E.</li>
    </ul>
  </li>
  <li><strong>2. Very Low-Density Lipoproteins (VLDL, Density $0.95 - 1.006\\ \\text{g/mL}$):</strong>
    <ul>
      <li>Synthesized exclusively in the <strong>liver</strong> to transport endogenous triacylglycerols to peripheral adipose and muscle tissues. Contains <strong>Apo B-100</strong>, Apo C-II, and Apo E.</li>
    </ul>
  </li>
  <li><strong>3. Low-Density Lipoproteins (LDL, Density $1.006 - 1.063\\ \\text{g/mL}$):</strong>
    <ul>
      <li>Formed in the circulation by degradation of VLDL through Intermediate-Density Lipoprotein (IDL). Carries 70% of total plasma cholesterol in monogastrics. Contains exclusively <strong>Apo B-100</strong>, which binds to cell-surface LDL receptors for cellular cholesterol delivery.</li>
    </ul>
  </li>
  <li><strong>4. High-Density Lipoproteins (HDL, Density $1.063 - 1.210\\ \\text{g/mL}$):</strong>
    <ul>
      <li>Smallest particles (5–12 nm), highest protein content (45–55%). Synthesized by liver and small intestine. Contains <strong>Apo A-I</strong> (which activates LCAT / Lecithin-Cholesterol Acyltransferase) and Apo A-II.</li>
      <li>Mediates <strong>Reverse Cholesterol Transport</strong>: extracts excess cholesterol from peripheral tissues and delivers it back to the liver for excretion in bile.</li>
      <li><strong>Veterinary Species Fact:</strong> Dogs, cats, cattle, and horses are predominantly <strong>'HDL-mammals'</strong> (possessing high circulating HDL and low LDL), making domestic animals naturally resistant to atheroma and coronary atherosclerosis.</li>
    </ul>
  </li>
</ul>

<h4>2. Analytical Fat Indices (Chemical Constants of Fats & Oils)</h4>
<p>Standardized chemical titration indices used in veterinary feed laboratories to assess the quality, purity, and adulteration of dietary fats, tallow, and ghee:</p>
<ul>
  <li><strong>1. Saponification Number (Value):</strong>
    <ul>
      <li><strong>Definition:</strong> The number of milligrams ($mg$) of Potassium Hydroxide ($KOH$) required to completely saponify (hydrolyze) 1 gram of fat or oil.</li>
      <li><strong>Biochemical Principle:</strong> Each ester bond consumes one molecule of $KOH$. Thus, 1 mole of triacylglycerol (containing 3 ester bonds) consumes 3 moles of $KOH$ (168,300 mg).</li>
      <li><strong>Significance:</strong> Inversely proportional to the average molecular weight (chain length) of the constituent fatty acids. Butter fat (rich in short-chain fatty acids like butyrate) has a high saponification value (220–230), whereas beef tallow (long-chain stearate/palmitate) has a lower value (190–200).</li>
    </ul>
  </li>
  <li><strong>2. Iodine Number (Value):</strong>
    <ul>
      <li><strong>Definition:</strong> The number of grams ($g$) of Iodine absorbed by 100 grams of fat or oil.</li>
      <li><strong>Significance:</strong> A direct measure of the <strong>degree of unsaturation</strong> of fatty acids. Halogens add quantitatively across carbon-carbon double bonds ($-CH=CH-$). Saturated animal fats (butter, tallow) have low iodine values (25–45); highly unsaturated vegetable and fish oils have high iodine values (120–180).</li>
    </ul>
  </li>
  <li><strong>3. Acid Number (Value):</strong>
    <ul>
      <li><strong>Definition:</strong> The number of milligrams of $KOH$ required to neutralize the free fatty acids present in 1 gram of fat or oil.</li>
      <li><strong>Significance:</strong> Reflects hydrolytic rancidity and improper storage. Fresh fats have near-zero acid values (< 0.5); spoiled, rancid feed fats exhibit high acid values due to bacterial or lipase-driven triglyceride hydrolysis.</li>
    </ul>
  </li>
  <li><strong>4. Reichert-Meissl (R.M.) Number:</strong>
    <ul>
      <li><strong>Definition:</strong> The number of milliliters ($mL$) of 0.1 N $KOH$ required to neutralize the <strong>steam-volatile, water-soluble fatty acids</strong> distilled from 5 grams of saponified fat.</li>
      <li><strong>Significance:</strong> Measures butyric and caproic acid content. Ghee and cow butter have a high R.M. value (26–32), whereas vegetable oils and animal tallows have values < 1. Essential for detecting adulteration of pure desi ghee with vegetable vanaspati.</li>
    </ul>
  </li>
  <li><strong>5. Polenske Number:</strong>
    <ul>
      <li><strong>Definition:</strong> The milliliters of 0.1 N $KOH$ required to neutralize the <strong>steam-volatile, water-insoluble fatty acids</strong> (caprylic, capric, lauric acids) distilled from 5 grams of fat. High in coconut oil.</li>
    </ul>
  </li>
</ul>""",
        "eliteDesc": """<h4>Enzymology of Lipoprotein Remodeling</h4>
<p>Circulating lipoproteins undergo continuous intravascular remodeling by four key enzymes:</p>
<ol>
  <li><strong>Lipoprotein Lipase (LPL):</strong> Anchored to capillary endothelial heparan sulfate in adipose and muscle beds; activated by <strong>Apo C-II</strong>. Cleaves core triacylglycerols into free fatty acids and glycerol.</li>
  <li><strong>Lecithin-Cholesterol Acyltransferase (LCAT):</strong> Synthesized by liver; circulates with HDL and is activated by <strong>Apo A-I</strong>. Transfers a fatty acyl chain from phosphatidylcholine C-2 to free cholesterol, generating hydrophobic cholesteryl ester that retreats into the core of nascent discoidal HDL, converting it into mature spherical HDL3 and HDL2.</li>
  <li><strong>Cholesteryl Ester Transfer Protein (CETP):</strong> Transfers cholesteryl esters from HDL to VLDL/LDL in exchange for triacylglycerols. Notably, dogs and horses lack significant CETP activity, preserving very high plasma HDL levels.</li>
</ol>""",
        "keyPoints": [
            "Lipoproteins solubilize hydrophobic lipids within an amphipathic shell of phospholipids and proteins.",
            "Chylomicrons transport exogenous (dietary) triglycerides from the intestine via the thoracic duct.",
            "VLDL is synthesized by the liver to transport endogenous triglycerides to peripheral tissues.",
            "LDL contains Apo B-100 and functions as the primary cholesterol carrier to peripheral cells.",
            "HDL contains Apo A-I and mediates reverse cholesterol transport back to the liver for biliary excretion.",
            "Domestic animals (canines, felines, equines, bovines) are 'HDL mammals', naturally resistant to atherosclerosis.",
            "Saponification value measures mg of KOH to saponify 1g fat; inversely related to fatty acid chain length.",
            "Iodine value measures grams of iodine absorbed per 100g fat; directly proportional to double bond unsaturation.",
            "Acid value measures free fatty acids in 1g fat, quantifying hydrolytic rancidity and feed spoilage.",
            "Reichert-Meissl (R.M.) value measures steam-volatile, water-soluble fatty acids (butyric acid in butter/ghee).",
            "Polenske value measures steam-volatile, water-insoluble fatty acids (caprylic, capric acids).",
            "Lipoprotein lipase (LPL) is activated by Apo C-II to release free fatty acids from chylomicrons and VLDL."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Canine Idiopathic Hyperlipidemia and Acute Pancreatitis:<br>
In certain dog breeds (notably Miniature Schnauzers), an inherited defect in capillary <strong>Lipoprotein Lipase (LPL)</strong> or its cofactor <strong>Apo C-II</strong> causes severe defective clearance of chylomicrons and VLDL. Fasting serum appears milky and turbid (lipemic), with serum triglycerides often exceeding 1,000–3,000 mg/dL (reference < 150 mg/dL). Excess circulating chylomicrons enter the pancreatic microcirculation, where local pancreatic lipase degrades triglycerides into massive concentrations of toxic free fatty acids. These cause capillary endothelial necrosis, ischemia, and zymogen autodigestion, triggering life-threatening acute <strong>pancreatitis</strong>. Management requires a strict ultra-low-fat diet (< 10% dry matter fat) and omega-3 fatty acid supplementation.</p>""",
        "tables": [
            {
                "title": "Characteristics of Plasma Lipoproteins",
                "headers": ["Lipoprotein Class", "Density (g/mL)", "Major Core Lipid", "Major Apolipoproteins", "Primary Physiological Function"],
                "rows": [
                    ["Chylomicrons", "< 0.95", "Dietary Triacylglycerol (85-90%)", "Apo B-48, Apo C-II, Apo E", "Delivery of exogenous dietary fat from gut to peripheral tissues"],
                    ["VLDL", "0.95 - 1.006", "Endogenous Triacylglycerol (55-65%)", "Apo B-100, Apo C-II, Apo E", "Delivery of hepatic synthesized fat to adipose and skeletal muscle"],
                    ["LDL", "1.006 - 1.063", "Cholesteryl Esters (45-50%)", "Apo B-100 exclusively", "Delivery of cholesterol to peripheral cells via LDL receptor endocytosis"],
                    ["HDL", "1.063 - 1.210", "Protein (50%) & Phospholipids", "Apo A-I, Apo A-II, Apo C-II, Apo E", "Reverse cholesterol transport from tissues back to liver; Apo reservoir"]
                ]
            },
            {
                "title": "Summary of Analytical Fat Indices Used in Feed Chemistry",
                "headers": ["Fat Index", "Reagent / Titrant", "Chemical Property Measured", "Typical Values", "Practical Veterinary Application"],
                "rows": [
                    ["Saponification Value", "0.5 N Alcoholic KOH", "Average molecular weight & chain length", "Butter: 220 - 230; Tallow: 190 - 200", "Identifies short-chain fats vs. long-chain tallow"],
                    ["Iodine Value", "Hanus / Wijs iodine solution", "Degree of unsaturation (double bonds)", "Coconut oil: 8 - 10; Linseed oil: 170 - 190", "Assesses drying oils, feed softening, and oxidative stability"],
                    ["Acid Value", "0.1 N Aqueous KOH", "Quantity of free fatty acids", "Fresh oil: < 0.5; Spoiled fat: > 3 - 5", "Detects hydrolytic rancidity and feed spoilage"],
                    ["Reichert-Meissl (R.M.)", "0.1 N KOH (after distillation)", "Steam-volatile, water-soluble fatty acids", "Cow Ghee: 26 - 32; Vanaspati: < 1.0", "Detects fraudulent adulteration of pure milk fat / ghee"]
                ]
            }
        ],
        "img": "",
        "tags": ["Lipoproteins", "Chylomicrons", "VLDL", "HDL", "Saponification Value", "Iodine Value", "Pancreatitis"]
    },

    "u1-t12": {
        "summary": "Prostaglandins are 20-carbon oxygenated eicosanoid local autacoids synthesized from membrane arachidonic acid via the cyclooxygenase (COX) pathway, functioning as key regulators of reproductive cyclicity (luteolysis by PGF2alpha), gastric mucosal defense, renal perfusion, and inflammatory pain.",
        "desc": """<h4>1. Nature and Nomenclature of Eicosanoids</h4>
<p><strong>Eicosanoids</strong> are a family of potent 20-carbon ($C_{20}$) signaling molecules derived from polyunsaturated fatty acids (primarily <strong>Arachidonic Acid</strong>, 20:4 $\\Delta^{5,8,11,14}$). Because they are synthesized on demand, act locally via specific G-protein coupled receptors, and are rapidly inactivated within the pulmonary circulation, they function as <strong>autacoids</strong> (local hormones) rather than systemic endocrine hormones.</p>
<p>The term <strong>Prostaglandins (PGs)</strong> derives from their initial isolation from sheep prostate glands and seminal fluid by Ulf von Euler (1935). Structurally, all prostaglandins possess a 20-carbon cyclopentane ring with two aliphatic side chains, designated as <strong>Prostanoic Acid</strong> derivatives.</p>

<h4>2. Biosynthetic Pathway (The Arachidonic Acid Cascade)</h4>
<ol>
  <li><strong>Mobilization of Arachidonic Acid:</strong> Physiological stimuli (hormones, mechanical trauma, inflammatory cytokines) stimulate <strong>Phospholipase $A_2$ ($PLA_2$)</strong>, which cleaves arachidonic acid from the <em>sn-2</em> position of membrane glycerophospholipids. Glucocorticoids (dexamethasone, prednisolone) induce <strong>Lipocortin (Annexin A1)</strong>, which directly inhibits $PLA_2$.</li>
  <li><strong>The Cyclooxygenase (COX) Pathway:</strong> The bifunctional enzyme <strong>Prostaglandin Endoperoxide Synthase (PTGS / COX)</strong> catalyzes two sequential reactions:
    <ul>
      <li><em>Cyclooxygenase activity:</em> Adds two molecules of $O_2$ to arachidonic acid to form the cyclic endoperoxide <strong>Prostaglandin $G_2$ ($PGG_2$)</strong>.</li>
      <li><em>Peroxidase activity:</em> Reduces $PGG_2$ to <strong>Prostaglandin $H_2$ ($PGH_2$)</strong> using glutathione.</li>
    </ul>
  </li>
  <li><strong>Downstream Isomerization:</strong> Specific tissue synthases convert intermediate $PGH_2$ into biologically active terminal eicosanoids:
    <ul>
      <li><strong>Prostacyclin ($PGI_2$):</strong> Synthesized by vascular endothelial cells via Prostacyclin Synthase. Powerful vasodilator and potent inhibitor of platelet aggregation.</li>
      <li><strong>Thromboxane $A_2$ ($TXA_2$):</strong> Synthesized by platelets via Thromboxane Synthase. Potent vasoconstrictor and stimulator of platelet aggregation and thrombus formation.</li>
      <li><strong>Prostaglandin $E_2$ ($PGE_2$):</strong> Promotes vasodilation, hyperalgesia (sensitizes nociceptors), resets the hypothalamic thermostat to induce fever, stimulates gastric cytoprotective mucus/bicarbonate secretion, and maintains renal blood flow.</li>
      <li><strong>Prostaglandin $F_{2\\alpha}$ ($PGF_{2\\alpha}$):</strong> Causes potent contraction of smooth muscle in the myometrium and pulmonary bronchioles, and induces <strong>luteolysis</strong> (regression of the corpus luteum).</li>
    </ul>
  </li>
</ol>

<h4>3. The Isoforms of Cyclooxygenase: COX-1 vs. COX-2</h4>
<ul>
  <li><strong>COX-1 (Constitutive):</strong> Expressed constitutively in most animal tissues (gastric mucosa, renal tubules, vascular endothelium, platelets). Responsible for baseline homeostatic functions: producing cytoprotective gastric mucus, maintaining renal cortical blood flow during hypovolemia, and regulating platelet aggregation.</li>
  <li><strong>COX-2 (Inducible):</strong> Expressed minimally in healthy resting tissues (except kidney and CNS), but massively induced by pro-inflammatory cytokines (IL-1, TNF-alpha) and endotoxins at sites of tissue damage and inflammation. Generates the prostaglandins that mediate inflammatory swelling, erythema, and pain.</li>
</ul>

<h4>4. Veterinary Clinical and Theriogenological Applications of PGF2alpha</h4>
<p>Prostaglandin $F_{2\\alpha}$ (dinoprost tromethamine) and its synthetic potent analogues (cloprostenol sodium) are the most widely utilized pharmacological agents in modern veterinary reproduction:</p>
<ul>
  <li><strong>Estrus Synchronization:</strong> Injection of $PGF_{2\\alpha}$ in dairy cows, heifers, and mares between Day 6 and Day 16 of the estrous cycle induces rapid luteolysis. Progesterone drops precipitously within 24 hours, permitting pre-ovulatory follicular maturation and synchronous estrus within 48–72 hours.</li>
  <li><strong>Induction of Parturition:</strong> In species dependent on the corpus luteum for maintenance of gestation throughout entire pregnancy (e.g., goat, sow, cow), $PGF_{2\\alpha}$ administration reliably terminates pregnancy or induces scheduled parturition.</li>
  <li><strong>Treatment of Pyometra and Luteal Cysts:</strong> Evacuates infected uterine exudate by combining functional luteolysis with active myometrial contractions.</li>
</ul>""",
        "eliteDesc": """<h4>Molecular Mechanism of NSAID Action and Gastric Toxicity</h4>
<p>Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) act by reversibly or irreversibly inhibiting cyclooxygenase:</p>
<ul>
  <li><strong>Aspirin (Acetylsalicylic Acid):</strong> Irreversibly acetylates a specific serine residue in the catalytic channel of COX (Ser-530 in COX-1, Ser-516 in COX-2), permanently blocking arachidonic acid entry. Platelets lack nuclei and cannot synthesize new enzyme, causing lifelong suppression of $TXA_2$ production.</li>
  <li><strong>Non-Selective NSAIDs (Flunixin Meglumine, Phenylbutazone, Ketoprofen):</strong> Inhibit both COX-1 and COX-2. While suppressing inflammatory pain (anti-COX-2), they simultaneously destroy gastric cytoprotection and renal medullary prostaglandin synthesis (anti-COX-1), leading to severe abomasal ulceration in calves and right dorsal colitis in horses.</li>
  <li><strong>Preferential / Selective COX-2 Inhibitors (Meloxicam, Carprofen, Firocoxib):</strong> Specifically dock into the wider secondary side-pocket of the COX-2 catalytic channel without inhibiting COX-1 at therapeutic doses, providing pain relief with markedly superior gastrointestinal and renal safety in canines and livestock.</li>
</ul>""",
        "keyPoints": [
            "Prostaglandins are 20-carbon eicosanoid local autacoids synthesized from membrane arachidonic acid.",
            "Phospholipase $A_2$ ($PLA_2$) releases arachidonic acid from the membrane <em>sn-2</em> position.",
            "Glucocorticoids suppress eicosanoid synthesis upstream by inducing Lipocortin to inhibit $PLA_2$.",
            "Cyclooxygenase (COX) converts arachidonic acid sequentially into $PGG_2$ and $PGH_2$.",
            "COX-1 is constitutive, protecting the gastric mucosal barrier and maintaining renal perfusion.",
            "COX-2 is inducible by cytokines, driving inflammatory swelling, pain, and pyrexia.",
            "Prostacyclin ($PGI_2$) causes vasodilation and inhibits platelet aggregation.",
            "Thromboxane $A_2$ ($TXA_2$) causes vasoconstriction and accelerates platelet aggregation.",
            "$PGE_2$ mediates hypothalamic fever, nociceptor sensitization, and gastric cytoprotection.",
            "$PGF_{2\\alpha}$ is the natural uterine luteolytic hormone in domestic ruminants, mares, and sows.",
            "Cloprostenol and dinoprost ($PGF_{2\\alpha}$) are used for estrus synchronization and parturition induction.",
            "Selective COX-2 inhibitors (Carprofen, Meloxicam, Firocoxib) spare gastric COX-1 in veterinary patients."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Equine Phenylbutazone Toxicity (Right Dorsal Colitis and Renal Papillary Necrosis):<br>
When horses are treated with high or prolonged doses of non-selective NSAIDs like <strong>Phenylbutazone ('Bute')</strong> or Flunixin Meglumine, systemic inhibition of <strong>COX-1</strong> suppresses baseline mucosal production of <strong>$PGE_2$ and $PGI_2$</strong>. In the right dorsal colon, loss of prostaglandin-dependent mucosal microvascular perfusion and bicarbonate/mucus secretion leads to severe, protein-losing <strong>Right Dorsal Colitis</strong> (hypoalbuminemia, ventral edema, severe colic). Concurrently, in dehydrated horses, loss of renal medullary vasodilatory prostaglandins causes acute ischemic <strong>Renal Papillary Necrosis</strong>. Therapy requires immediate cessation of non-selective NSAIDs, feeding a pelleted complete diet, and administering misoprostol (a synthetic $PGE_1$ methyl ester analogue).</p>""",
        "tables": [
            {
                "title": "Biological Actions of Key Prostaglandins and Eicosanoids",
                "headers": ["Eicosanoid", "Primary Site of Synthesis", "Vascular / Platelet Effect", "Smooth Muscle Action", "Veterinary Significance"],
                "rows": [
                    ["Prostacyclin ($PGI_2$)", "Vascular endothelium", "Vasodilation; inhibits platelet aggregation", "Relaxes vascular smooth muscle", "Prevents spontaneous intravascular clotting"],
                    ["Thromboxane $A_2$ ($TXA_2$)", "Blood platelets", "Vasoconstriction; promotes platelet aggregation", "Contracts vascular smooth muscle", "Primary hemostasis and clot consolidation"],
                    ["Prostaglandin $E_2$ ($PGE_2$)", "Macrophages, fibroblasts, renal medulla", "Vasodilation (erythema)", "Relaxes bronchioles; contracts uterus", "Mediates inflammatory pain, pyrexia; gastric cytoprotection"],
                    ["Prostaglandin $F_{2\\alpha}$ ($PGF_{2\\alpha}$)", "Uterine endometrium", "Mild vasoconstriction", "Potent myometrial contraction; bronchoconstriction", "Induces luteolysis; estrus synchronization; abortion"]
                ]
            },
            {
                "title": "Comparison of Cyclooxygenase Isoforms (COX-1 vs. COX-2)",
                "headers": ["Feature", "COX-1 (Constitutive)", "COX-2 (Inducible)"],
                "rows": [
                    ["Gene & Expression", "Housekeeping gene; constant baseline expression", "Immediate-early gene; induced by TNF-$\\alpha$, IL-1, LPS"],
                    ["Tissue Distribution", "Gastric mucosa, platelets, renal cortex, vascular endothelium", "Inflammatory cells (macrophages, synoviocytes), injured tissues"],
                    ["Primary Function", "Physiological homeostasis, gastric barrier, renal blood flow", "Mediates inflammation, pain transmission, hyperalgesia, fever"],
                    ["Active Site Pocket", "Narrow, compact catalytic binding pocket", "Wider active channel with a flexible secondary side-pocket"],
                    ["Inhibition by Steroids", "Not significantly suppressed by glucocorticoids", "Markedly suppressed by glucocorticoid-mediated lipocortin"],
                    ["Veterinary Drug Selectivity", "Inhibited by Aspirin, Flunixin, Phenylbutazone, Ketoprofen", "Selectively inhibited by Carprofen, Meloxicam, Firocoxib, Robenacoxib"]
                ]
            }
        ],
        "img": "",
        "tags": ["Prostaglandins", "Arachidonic Acid", "COX-1", "COX-2", "PGF2alpha", "Luteolysis", "NSAIDs"]
    }
}
