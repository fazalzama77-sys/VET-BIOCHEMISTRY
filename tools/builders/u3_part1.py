r"""
Unit 3 Part 1: Disorders of Carbohydrate Metabolism, Hormonal Control & Diagnostic Tests
Topics: u3-t01 to u3-t04
"""

PART1 = {
    "u3-t01": {
        "summary": "Diabetes mellitus is a primary endocrinopathy of deficient insulin action causing sustained hyperglycemia, glucosuria, and polyuria, while systemic blood glucose is defended within narrow species-specific limits through the counter-regulatory antagonism of insulin against glucagon, epinephrine, cortisol, and growth hormone.",
        "desc": """<h4>1. Hormonal Regulation of Blood Glucose</h4>
<p>In domestic mammals, systemic blood glucose concentration is maintained within strict physiological limits (Canine/Feline: 70–120 mg/dL; Bovine: 40–70 mg/dL; Ovine: 50–70 mg/dL; Equine: 75–115 mg/dL; Avian: 200–300 mg/dL). This balance represents a continuous dynamic equilibrium between glucose entry into blood (intestinal absorption, hepatic glycogenolysis, and gluconeogenesis) and glucose exit (tissue uptake and oxidation, glycogenesis, and lipogenesis).</p>

<h5>A. The Hypoglycemic Hormone: Insulin</h5>
<p>Synthesized and secreted by the <strong>$\beta$-cells of the pancreatic Islets of Langerhans</strong> as preproinsulin, processed into proinsulin, and cleaved into mature 51-amino-acid <strong>Insulin</strong> and equimolar <strong>C-Peptide</strong>.</p>
<ul>
  <li><strong>Mechanism of Action:</strong> Binds to the cell-surface <strong>Insulin Receptor (a heterotetrameric $\alpha_2\beta_2$ receptor tyrosine kinase)</strong>. Autophosphorylation of the intracellular $\beta$-subunits recruits and activates <em>Insulin Receptor Substrates (IRS-1/2)</em>, initiating the <em>PI3K-Akt (Protein Kinase B)</em> signaling pathway.</li>
  <li><strong>Downstream Metabolic Actions:</strong>
    <ul>
      <li>Stimulates rapid translocation of the insulin-responsive glucose transporter <strong>GLUT-4</strong> to the plasma membrane in skeletal muscle and adipose tissue, accelerating glucose uptake.</li>
      <li>In the liver, stimulates <strong>Glucokinase</strong> and <strong>Glycogen Synthase</strong> (via PP-1 dephosphorylation), promoting glycogenesis.</li>
      <li>Activates <strong>PFK-1</strong> (via increased Fructose-2,6-bisphosphate) and <strong>Pyruvate Kinase</strong>, accelerating glycolysis.</li>
      <li>Stimulates de novo fatty acid synthesis by activating <strong>Acetyl-CoA Carboxylase (ACC)</strong> and capillary <strong>Lipoprotein Lipase (LPL)</strong>.</li>
      <li>Potently inhibits hepatic gluconeogenesis (represses PEPCK and G6Pase) and glycogenolysis.</li>
      <li>Inhibits adipose <strong>Hormone-Sensitive Lipase (HSL)</strong>, completely suppressing lipolysis.</li>
    </ul>
  </li>
</ul>

<h5>B. The Hyperglycemic Counter-Regulatory Hormones</h5>
<ol>
  <li><strong>Glucagon ($\alpha$-cells of pancreas):</strong> Secreted during hypoglycemia. Acts primarily on hepatocytes via G-protein coupled receptors and the cAMP-PKA cascade, rapidly stimulating <strong>Glycogen Phosphorylase</strong> (glycogenolysis) and <strong>Fructose-1,6-Bisphosphatase / PEPCK</strong> (gluconeogenesis), while turning off glycolysis and glycogenesis.</li>
  <li><strong>Epinephrine (Adrenal Medulla):</strong> Released during acute stress ('fight-or-flight'). Binds $\beta_2$-adrenergic receptors, instantly triggering hepatic and muscular glycogenolysis and adipose lipolysis. Inhibits pancreatic insulin release via $\alpha_2$-adrenergic receptors.</li>
  <li><strong>Glucocorticoids (Cortisol / Corticosterone, Adrenal Cortex):</strong> Stimulate muscle proteolysis to release gluconeogenic amino acids (alanine), induce hepatic PEPCK and Glucose-6-Phosphatase transcription, and induce peripheral insulin resistance by impairing GLUT-4 translocation.</li>
  <li><strong>Growth Hormone (Somatotropin, Anterior Pituitary):</strong> Antagonizes insulin action; suppresses peripheral glucose uptake in muscle and stimulates adipose lipolysis.</li>
</ol>

<h4>2. Diabetes Mellitus in Domestic Animals</h4>
<p><strong>Diabetes mellitus</strong> is a chronic metabolic disorder resulting from an absolute or relative deficiency of functional insulin, leading to impaired carbohydrate, lipid, and protein metabolism.</p>
<ul>
  <li><strong>Type 1 Diabetes (Insulin-Dependent Diabetes Mellitus / IDDM):</strong>
    <ul>
      <li><strong>Prevalence:</strong> The predominant form in <strong>Dogs (>95% of canine cases)</strong>.</li>
      <li><strong>Pathogenesis:</strong> Immune-mediated destruction, chronic pancreatitis, or genetic atrophy of pancreatic $\beta$-cells, resulting in absolute insulin deficiency. Dogs almost always require lifelong exogenous insulin injections.</li>
    </ul>
  </li>
  <li><strong>Type 2 Diabetes (Non-Insulin-Dependent Diabetes Mellitus / NIDDM):</strong>
    <ul>
      <li><strong>Prevalence:</strong> The predominant form in <strong>Cats (~80% of feline cases)</strong>.</li>
      <li><strong>Pathogenesis:</strong> Combination of peripheral insulin resistance (frequently driven by obesity, physical inactivity, or high-carbohydrate diets) and progressive $\beta$-cell dysfunction associated with the deposition of <strong>Islet Amyloid Polypeptide (IAPP / Amylin)</strong> within the islets of Langerhans. Cats may achieve diabetic remission if treated early with low-carbohydrate diets and insulin glargine.</li>
    </ul>
  </li>
</ul>

<h4>3. Pathophysiology and Cardinal Clinical Signs</h4>
<ol>
  <li><strong>Persistent Hyperglycemia:</strong> Lack of insulin prevents muscle/adipose glucose uptake while hepatic gluconeogenesis runs unchecked. Fasting blood glucose rises above normal (often 250–500 mg/dL).</li>
  <li><strong>Glucosuria:</strong> When blood glucose exceeds the <strong>Renal Tubular Threshold</strong> (~180 mg/dL in dogs, ~280 mg/dL in cats), tubular SGLT-1/2 carriers are saturated, and unabsorbed glucose spills into the urine.</li>
  <li><strong>Polyuria (PU):</strong> Unabsorbed luminal glucose acts as a powerful non-reabsorbable osmotic agent, drawing water into the renal tubules (<strong>Osmotic Diuresis</strong>).</li>
  <li><strong>Polydipsia (PD):</strong> Compelling water loss via osmotic diuresis stimulates hypothalamic osmoreceptors, triggering compensatory excessive drinking.</li>
  <li><strong>Polyphagia with Paradoxical Weight Loss:</strong> Because cells cannot take up glucose without insulin, the hypothalamic satiety center registers intracellular starvation ('starvation in the midst of plenty'), causing voracious hunger. Concurrently, unchecked proteolysis and adipose lipolysis mobilize body tissue mass, causing progressive muscle wasting and weight loss.</li>
  <li><strong>Diabetic Cataracts (Canine):</strong> Excess lens glucose is converted by <em>Aldose Reductase</em> into <strong>Sorbitol</strong> via the polyol pathway. Because canine lens lacks sorbitol dehydrogenase, sorbitol accumulates osmotically, drawing water into lens fibers, precipitating lens protein fibrillar opacity and bilateral blindness within months.</li>
</ol>""",
        "eliteDesc": """<h4>Pathogenesis of Diabetic Ketoacidosis (DKA)</h4>
<p>DKA is a life-threatening acute crisis of unmanaged or decompensated diabetes mellitus triggered by absolute insulin absence coupled with a surge in counter-regulatory stress hormones (glucagon, cortisol, epinephrine):</p>
<ol>
  <li><strong>Unrestrained Lipolysis:</strong> Absence of insulin unleashes <strong>Hormone-Sensitive Lipase</strong>, flooding the liver with NEFA.</li>
  <li><strong>Accelerated Ketogenesis:</strong> Glucagon lowers hepatic malonyl-CoA, relieving inhibition on <strong>CPT-I</strong>. Massive $\beta$-oxidation generates excess acetyl-CoA. Concurrently, oxaloacetate is depleted by gluconeogenesis. Acetyl-CoA overflows into mitochondrial HMG-CoA synthase, generating vast amounts of <strong>Acetoacetic Acid and $\beta$-Hydroxybutyric Acid</strong>.</li>
  <li><strong>High Anion Gap Acidosis:</strong> Ketone bodies are organic acids ($pK_a \\approx 3.5 - 4.7$) that dissociate completely at blood pH (7.4), donating protons ($H^+$) that consume plasma bicarbonate:
  $$\\text{Anion Gap} = ([Na^+] + [K^+]) - ([Cl^-] + [HCO_3^-]) \\quad (\\text{Normal: } 12 - 20\\ \\text{mmol/L})$$
  In DKA, unmeasured organic ketoacids drive the anion gap $> 25 - 35\\ \\text{mmol/L}$.</li>
  <li><strong>Osmotic Collapse:</strong> Combined glucosuric and ketonuric osmotic diuresis causes profound dehydration, hypokalemia, hypophosphatemia, and prerenal azotemia.</li>
</ol>""",
        "keyPoints": [
            "Normal mammalian blood glucose is tightly defended by insulin vs. counter-regulatory hormones.",
            "Insulin is secreted by pancreatic $\\beta$-cells; acts via a tyrosine kinase receptor (PI3K-Akt pathway).",
            "Insulin stimulates GLUT-4 translocation in muscle and adipose tissue, promoting glucose uptake.",
            "Insulin stimulates glycogenesis and lipogenesis, while shutting down gluconeogenesis and lipolysis.",
            "Counter-regulatory hormones (Glucagon, Epinephrine, Cortisol, GH) elevate blood glucose.",
            "Canine diabetes is predominantly Type 1 (immune-mediated $\\beta$-cell loss; absolute insulin deficit).",
            "Feline diabetes is predominantly Type 2 (insulin resistance + islet amyloid deposition).",
            "The 4 cardinal clinical signs of diabetes are: Polyuria, Polydipsia, Polyphagia, and Weight Loss.",
            "Glucosuria occurs when blood glucose exceeds the renal threshold (~180 mg/dL in dogs; ~280 mg/dL in cats).",
            "Polyuria is driven by osmotic diuresis; polydipsia is the compensatory response.",
            "Canine diabetic cataracts result from sorbitol accumulation in the lens via Aldose Reductase.",
            "Diabetic Ketoacidosis (DKA) is a high anion gap metabolic acidosis driven by unrestrained lipolysis."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Clinical Management of Canine DKA Emergency:<br>
A 9-year-old intact female Labrador Retriever is presented comatose with severe vomiting, dehydration (10%), tachypnea (Kussmaul breathing), acetone breath, blood glucose of 480 mg/dL, urine positive for glucose ($4+$) and ketones ($3+$), and blood pH of 7.10 with an anion gap of 32 mmol/L. Pathophysiological goals of emergency resuscitation include:<br>
1. <strong>Fluid Resuscitation:</strong> IV 0.9% Normal Saline ($NaCl$) to restore intravascular circulating volume and renal perfusion.<br>
2. <strong>Regular Insulin Infusion:</strong> Low-dose regular crystalline insulin administered via continuous IV rate infusion (CRI at 0.05–0.1 U/kg/hr) to gradually lower blood glucose by 50–75 mg/dL per hour. Rapid drops are strictly avoided to prevent fatal <strong>Cerebral Edema</strong> caused by sudden osmotic fluid shifts.<br>
3. <strong>Potassium and Phosphate Supplementation:</strong> Insulin and rehydration drive extracellular $K^+$ and phosphate into cells. Without aggressive prophylactic IV potassium chloride/phosphate addition, severe hypokalemia can trigger fatal cardiac arrhythmias and generalized flaccid paralysis.</p>""",
        "tables": [
            {
                "title": "Physiological Blood Glucose Reference Ranges and Renal Thresholds",
                "headers": ["Animal Species", "Normal Fasting Blood Glucose (mg/dL)", "Renal Tubular Glucose Threshold (mg/dL)", "Dominant Glycemic Regulator"],
                "rows": [
                    ["Canine (Dog)", "70 - 120 mg/dL", "175 - 180 mg/dL", "Dietary absorption & hepatic glycogenolysis"],
                    ["Feline (Cat)", "70 - 130 mg/dL", "270 - 290 mg/dL", "Dietary protein gluconeogenesis (high stress-susceptible)"],
                    ["Bovine (Cattle)", "40 - 70 mg/dL", "100 - 120 mg/dL", "Hepatic gluconeogenesis from ruminal propionate exclusively"],
                    ["Equine (Horse)", "75 - 115 mg/dL", "150 - 180 mg/dL", "Cecal/colonic VFA propionate + small intestinal starch"],
                    ["Avian (Chicken)", "200 - 300 mg/dL", "250 - 300 mg/dL", "Constitutively high metabolic rate; uricotelic adaptation"]
                ]
            },
            {
                "title": "Comparison of Canine vs. Feline Diabetes Mellitus",
                "headers": ["Feature", "Canine Diabetes Mellitus", "Feline Diabetes Mellitus"],
                "rows": [
                    ["Primary Classification", "<strong>Type 1 (Insulin-Dependent / IDDM)</strong>", "<strong>Type 2 (Non-Insulin-Dependent / NIDDM)</strong>"],
                    ["Etiopathology", "Immune $\\beta$-cell destruction; chronic pancreatitis", "Peripheral insulin resistance + Islet Amyloid (Amylin)"],
                    ["Need for Exogenous Insulin", "Mandatory and permanent for life (>95%)", "Required initially; 20-30% achieve dietary remission"],
                    ["Complication: Cataracts", "<strong>Very Common (>80% within 12 months)</strong>", "Extremely rare (low lens aldose reductase activity)"],
                    ["Complication: Neuropathy", "Uncommon", "<strong>Common: Diabetic Plantigrade Stance</strong> (hock dropped)"],
                    ["Dietary Management", "High insoluble fiber, moderate complex carbohydrates", "<strong>Ultra-low carbohydrate, high protein diet</strong>"]
                ]
            }
        ],
        "img": "",
        "tags": ["Diabetes Mellitus", "Insulin", "Glucagon", "Glucosuria", "Osmotic Diuresis", "DKA", "Canine", "Feline"]
    },

    "u3-t02": {
        "summary": "Clinical ketosis is a state of severe pathological hyperketonemia occurring during profound negative energy balance in early-lactating dairy cows (bovine ketosis) and late-pregnant ewes (pregnancy toxaemia), characterized by oxaloacetate depletion, accelerated hepatic ketogenesis, and neuroglycopenic signs.",
        "desc": """<h4>1. Pathophysiological Concept of Ketosis</h4>
<p><strong>Ketosis (Acetonemia)</strong> is a metabolic disease of domestic ruminants characterized by abnormally elevated concentrations of circulating <strong>ketone bodies</strong> (acetoacetate, $\beta$-hydroxybutyrate [BHBA], and acetone) in blood (hyperketonemia), milk (hyperketolactia), and urine (ketonuria), accompanied by <strong>hypoglycemia</strong> and low hepatic glycogen reserves.</p>
<ul>
  <li><strong>The Fundamental Biochemical Lesion:</strong> The core defect is a mismatch between high glucose demand and inadequate gluconeogenic precursor supply during periods of intense physiological stress:
    $$\\mathbf{\\text{Negative Energy Balance (NEB)} \\implies \\text{Adipose Lipolysis (NEFA} \\uparrow) \\implies \\text{Oxaloacetate Depletion (OAA} \\downarrow) \\implies \\text{Ketogenesis}}$$
  </li>
  <li>When hepatic uptake of free fatty acids exceeds mitochondrial $\beta$-oxidation capacity and oxaloacetate is exhausted by gluconeogenesis, acetyl-CoA cannot condense with OAA to enter the Krebs cycle. Acetyl-CoA accumulates and is diverted into <strong>hepatic mitochondrial ketogenesis</strong>.</li>
</ul>

<h4>2. Bovine Ketosis (Acetonemia in Dairy Cattle)</h4>
<p>Primarily affects high-yielding dairy cows during the first <strong>2 to 6 weeks post-calving</strong> (peak lactation):</p>
<ul>
  <li><strong>Primary (Production) Ketosis:</strong> Driven by peak milk yield (~40–60 kg/day) requiring up to 2.5–3.0 kg of glucose daily for milk lactose synthesis. Because dry matter intake (DMI) lags behind milk production, the cow plunges into severe Negative Energy Balance.</li>
  <li><strong>Secondary Ketosis:</strong> Triggered by any concurrent postpartum disease that depresses appetite (e.g., displaced abomasum, metritis, clinical mastitis, reticuloperitonitis).</li>
  <li><strong>Types of Bovine Ketosis:</strong>
    <ul>
      <li><strong>Type I (Underfeeding / Spontaneous Ketosis):</strong> Occurs at peak lactation (weeks 3–6); responsive to glucose and oral propylene glycol.</li>
      <li><strong>Type II (Fatty Liver Ketosis / Periparturient):</strong> Occurs at calving in over-conditioned cows (BCS $\ge 4.0/5.0$); severe hepatic lipidosis; refractory to therapy.</li>
    </ul>
  </li>
  <li><strong>Clinical Manifestations:</strong>
    <ul>
      <li><em>Wasting Form:</em> Selective inappetence (refusing grain and concentrates while eating straw/hay), rapid weight loss, firm dry feces, sharp drop in milk production, and a sweet fruity odor of acetone on breath and milk.</li>
      <li><em>Nervous Form (~10% of cases):</em> Caused by neuroglycopenia and toxic ketone intermediates: intense head pressing, compulsive wall licking, abnormal gait, tremors, apparent blindness, bellowing, and aggressive behavioral changes.</li>
    </ul>
  </li>
</ul>

<h4>3. Pregnancy Toxaemia in Sheep and Goats (Twin Lamb Disease)</h4>
<p>Affects pregnant ewes and does during the <strong>last 4 to 6 weeks of gestation</strong>, almost exclusively in animals carrying <strong>multiple fetuses (twins, triplets)</strong>:</p>
<ul>
  <li><strong>Biochemical Mechanism:</strong> In late gestation, the growing fetuses consume up to <strong>70% of circulating maternal glucose</strong>. Concurrently, the massive gravid uterus physically compresses the rumen, reducing rumen volume and dietary dry matter intake by 20–30%.</li>
  <li>The ewe cannot synthesize enough glucose to meet both maternal brain requirements and fetal demands.</li>
  <li>Severe hypoglycemia (< 20–30 mg/dL) triggers massive adipose lipolysis. Hepatic ketogenesis explodes, driving serum BHBA $> 2.5 - 4.0\\ \\text{mmol/L}$.</li>
  <li><strong>Clinical Hallmarks:</strong> Ewes separate from the flock, exhibit depression, stargazing, dullness, loss of menace response (apparent blindness), grinding of teeth (bruxism), tremors, sternal recumbency, and coma. Post-mortem examination reveals a pale yellow, enlarged, greasy, friable liver (diffuse hepatic lipidosis) and twin or triplet fetuses.</li>
</ul>

<h4>4. Diagnostic Thresholds for Ruminant Ketosis</h4>
<ul>
  <li><strong>Serum $\beta$-Hydroxybutyrate (BHBA) Gold Standard:</strong>
    <ul>
      <li><em>Normal Ruminant:</em> $\text{BHBA} < 1.0\\ \\text{mmol/L}$.</li>
      <li><em>Subclinical Ketosis (SCK):</em> $\mathbf{\\text{BHBA } 1.2 - 2.9\\ \\text{mmol/L}}$. (Causes hidden herd milk production losses, increased risk of displaced abomasum, and impaired fertility).</li>
      <li><em>Clinical Ketosis:</em> $\mathbf{\\text{BHBA } \\ge 3.0\\ \\text{mmol/L}}$ in cattle; $\ge 2.5\\ \\text{mmol/L}$ in pregnant ewes.</li>
    </ul>
  </li>
  <li><strong>Rothera's Nitroprusside Reaction:</strong> Detects Acetoacetate and Acetone in milk and urine (produces an intense purple permanganate color). Milk Rothera testing is highly specific for clinical mastitic/ketotic diagnosis.</li>
</ul>""",
        "eliteDesc": """<h4>Therapeutic Principles and Metabolic Rescue in Bovine Ketosis</h4>
<p>Therapy must simultaneously relieve hypoglycemia, arrest adipose lipolysis, and replenish the mitochondrial oxaloacetate pool:</p>
<ol>
  <li><strong>Intravenous Hypertonic Glucose (50% Dextrose, 500 mL IV):</strong> Instantly normalizes blood glucose, providing an immediate surge in insulin that turns off adipose Hormone-Sensitive Lipase (HSL), arresting NEFA mobilization and ketogenesis.</li>
  <li><strong>Oral Propylene Glycol (250–400 mL orally twice daily):</strong> A 3-carbon dihydric alcohol that is absorbed directly across the ruminal wall and metabolized in the liver into <strong>Pyruvate and Oxaloacetate</strong>, directly replenishing the Krebs cycle anaplerotic pool. (Avoid rapid drenching into lungs).</li>
  <li><strong>Glucocorticoids (Dexamethasone or Isoflupredone acetate, 10–20 mg IM):</strong> Suppress peripheral muscle glucose uptake and stimulate hepatic gluconeogenic enzyme transcription, sustaining blood glucose for 24–48 hours. (Causes temporary milk drop; contraindicated in late pregnant cows due to abortion risk).</li>
</ol>""",
        "keyPoints": [
            "Ketosis is characterized by hyperketonemia, hypoglycemia, and depleted liver glycogen.",
            "The primary biochemical defect is oxaloacetate depletion under negative energy balance.",
            "Without oxaloacetate, excess acetyl-CoA overflows into mitochondrial ketogenesis.",
            "Bovine ketosis affects high-yielding cows at peak lactation (weeks 2–6 postpartum).",
            "Clinical forms of bovine ketosis include the wasting form and the neuroglycopenic nervous form.",
            "Pregnancy toxaemia affects ewes in the last 4 weeks of gestation carrying multiple fetuses.",
            "The gravid uterus compresses the rumen while twin fetuses consume 70% of maternal glucose.",
            "Beta-hydroxybutyrate (BHBA) is the gold-standard quantitative biomarker for ruminant ketosis.",
            "Subclinical bovine ketosis is defined as serum BHBA 1.2 to 2.9 mmol/L; clinical is $\ge 3.0$ mmol/L.",
            "Rothera's nitroprusside test detects acetoacetate and acetone (purple permanganate ring).",
            "Emergency therapy: IV 50% Dextrose (suppresses HSL) + oral Propylene Glycol (replenishes OAA).",
            "Type II fatty liver ketosis occurs in over-conditioned cows at calving and is refractory to therapy."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Herd-Level Monitoring of Subclinical Ketosis (SCK) in Dairy Herds:<br>
In modern intensive dairy farms, <strong>Subclinical Ketosis (SCK)</strong> affects 30–50% of fresh cows without showing obvious outward symptoms, but causing severe economic losses (reduced milk peak, delayed conception, and a 4- to 8-fold increased incidence of Left Displaced Abomasum / LDA). Herd screening is performed using hand-held electronic electrochemical blood meters measuring whole-blood <strong>BHBA</strong> (using a drop of tail-vessel blood, similar to human glucometers). If more than <strong>15% of tested fresh cows</strong> between 5 and 14 days in milk exhibit blood $\text{BHBA} \ge 1.2\\ \\text{mmol/L}$, an immediate nutritional herd intervention is mandated: dry cow ration energy density is rebalanced, monensin sodium feed additive is incorporated to boost ruminal propionate production, and affected cows receive oral propylene glycol for 3–5 days.</p>""",
        "tables": [
            {
                "title": "Comparative Features of Bovine Ketosis vs. Ovine Pregnancy Toxaemia",
                "headers": ["Feature", "Bovine Ketosis (Acetonemia)", "Ovine Pregnancy Toxaemia (Twin Lamb Disease)"],
                "rows": [
                    ["Susceptible Physiological Stage", "Early lactation (Weeks 2 - 6 postpartum)", "Late gestation (Last 2 - 4 weeks of pregnancy)"],
                    ["Primary Glucose Drain", "Mammary gland lactose synthesis (Milk yield)", "Multiple fetuses (Twin/triplet fetal brain & placenta)"],
                    ["Ruminal Capacity Limitation", "Lagging dry matter intake relative to milk output", "Physical compression of rumen by gravid uterus"],
                    ["Typical Blood Glucose", "Low to moderate (25 - 40 mg/dL)", "<strong>Extremely Low (15 - 30 mg/dL)</strong>"],
                    ["Diagnostic Serum BHBA", "$\\ge 1.2$ (Subclinical); $\\ge 3.0\\ \\text{mmol/L}$ (Clinical)", "$\\ge 1.6$ (Subclinical); $\\ge 2.5 - 4.0\\ \\text{mmol/L}$ (Clinical)"],
                    ["Response to Therapy", "Excellent if diagnosed early (IV Dextrose + PG)", "Guarded/Poor; often requires emergency C-section"]
                ]
            },
            {
                "title": "Diagnostic Tests for Detecting Ketone Bodies in Biological Fluids",
                "headers": ["Biological Fluid", "Diagnostic Assay / Reagent", "Specific Ketone Body Detected", "Diagnostic Sensitivity / Threshold"],
                "rows": [
                    ["Whole Blood", "Electronic hand-held biosensor (BHBA)", "$\\beta$-Hydroxybutyrate (BHBA)", "Quantitative gold standard ($\ge 1.2\\ \\text{mmol/L}$)"],
                    ["Milk", "Rothera's Nitroprusside powder / strip", "Acetoacetate + Acetone", "Highly specific for clinical ketosis (> 100 $\\mu$mol/L)"],
                    ["Urine", "Commercial dipstick (Acetoacetate)", "Acetoacetate exclusively", "High sensitivity, but lags behind blood concentration"],
                    ["Expired Air", "Olfactory detection (Breath)", "Acetone (Volatile)", "Subjective; fruity sweet acetone odor in barn"]
                ]
            }
        ],
        "img": "",
        "tags": ["Bovine Ketosis", "Pregnancy Toxaemia", "BHBA", "Rothera Test", "Negative Energy Balance", "Propylene Glycol"]
    },

    "u3-t03": {
        "summary": "Hypoglycemia produces profound neuroglycopenic brain dysfunction and seizures, manifesting as a fatal neonatal metabolic emergency in newborn piglets due to deficient gluconeogenesis and low glycogen reserves, and in dogs as a paraneoplastic syndrome secondary to functional pancreatic beta-cell insulinomas.",
        "desc": """<h4>1. Neuroglycopenia and the Critical Vulnerability of the Brain</h4>
<p>The mammalian central nervous system possesses virtually zero endogenous glycogen reserves and cannot oxidize free fatty acids due to the blood-brain barrier. When systemic blood glucose drops below the critical threshold (<strong>< 40–50 mg/dL in dogs; < 30–40 mg/dL in swine</strong>), cerebral ATP generation fails, producing <strong>neuroglycopenia</strong>:</p>
<ul>
  <li>Loss of neuronal membrane resting potential and failure of $Na^+/K^+$-ATPase pumps.</li>
  <li>Release of excitotoxic glutamate into synaptic clefts, causing continuous neuronal depolarization, tremors, violent seizures, coma, and irreversible cerebral laminar cortical necrosis.</li>
</ul>

<h4>2. Neonatal Hypoglycaemia in Baby Pigs (Hypoglycemia Neonatorum)</h4>
<p>Newborn piglets are uniquely vulnerable to fatal hypoglycemia during the first 24 to 72 hours of life due to physiological and biochemical immaturity:</p>
<ul>
  <li><strong>Inherent Biochemical Vulnerabilities of Newborn Piglets:</strong>
    <ol>
      <li><strong>Extremely Limited Energy Reserves:</strong> Newborn piglets have less than <strong>1–2% total body fat</strong> (virtually zero insulating white adipose or brown fat tissue). Hepatic glycogen reserves are minute and can sustain normal blood glucose for only <strong>12 to 18 hours</strong> in the absence of suckling.</li>
      <li><strong>Immature Gluconeogenic Capacity:</strong> At birth, hepatic gluconeogenic enzymes—particularly <strong>Phosphoenolpyruvate Carboxykinase (PEPCK)</strong> and <strong>Glucose-6-Phosphatase</strong>—have very low baseline activity, taking 48–72 hours to reach full transcriptional maturity.</li>
      <li><strong>Poor Thermoregulation:</strong> Piglets are born wet with sparse hair coat into cold farrowing environments. Shivering rapidly exhausts skeletal muscle glycogen stores.</li>
    </ol>
  </li>
  <li><strong>Precipitating Causes:</strong> Agalactia in the sow (mastitis-metritis-agalactia / MMA syndrome), inverted nipples, splayleg piglets, or chilling (< 30°C farrowing pen temperature).</li>
  <li><strong>Clinical Hallmarks:</strong> Piglets huddle together under the heat lamp, shiver violently, squeal weakly, become ataxic, develop a characteristic 'stilt-legged' gait, progress to lateral recumbency with rhythmic <strong>paddling convulsions</strong>, hypothermia (< 35°C), and die in hypoglycemic coma within 24–36 hours. Blood glucose is typically <strong>< 15–25 mg/dL</strong>.</li>
  <li><strong>Therapeutic Rescue:</strong> Immediate warming (farrowing creep area warmed to 32–35°C) combined with <strong>intraperitoneal (IP) injection of 10–15 mL of warm sterile 5–10% Glucose solution</strong> (using a 20-gauge needle inserted 1 cm lateral to the umbilicus). Oral feeding must not be attempted until the suckle reflex returns.</li>
</ul>

<h4>3. Hyperinsulinism in Dogs: Pancreatic Beta-Cell Insulinoma</h4>
<p>In adult and geriatric dogs (commonly medium-to-large breeds: German Shepherds, Boxers, Golden Retrievers), the primary cause of severe, recurrent hypoglycemia is an <strong>Insulinoma</strong>—a functional neuroendocrine neoplasm (adenoma or carcinoma) of the pancreatic islet $\beta$-cells.</p>
<ul>
  <li><strong>Pathophysiology:</strong> Neoplastic $\beta$-cells lose all physiological feedback control. They <strong>autonomously synthesize and secrete insulin</strong> regardless of ambient blood glucose concentrations:
    <ul>
      <li>Insulin secretion continues unabated even when blood glucose plunges below 30–40 mg/dL.</li>
      <li>Simultaneously, hyperinsulinemia potently suppresses hepatic gluconeogenesis and glycogenolysis, preventing normal compensatory counter-regulatory glucose release.</li>
    </ul>
  </li>
  <li><strong>Clinical Manifestations:</strong>
    <ul>
      <li>Intermittent, episodic clinical signs typically triggered by exercise, fasting, or excitement (which increases peripheral glucose consumption).</li>
      <li>Episodes of generalized muscle weakness, hindlimb ataxia, disorientation, glazed expression, focal facial muscle twitching, collapsing, and generalized grand mal epileptiform seizures.</li>
      <li>Episodes frequently resolve spontaneously after the animal rests or consumes a meal (transient glucose elevation).</li>
    </ul>
  </li>
  <li><strong>Definitive Biochemical Diagnosis:</strong>
    <ul>
      <li>Demonstration of <strong>inappropriately elevated serum Insulin in the face of concurrent Hypoglycemia</strong>:
      $$\\mathbf{\\text{Blood Glucose } < 60\\ \\text{mg/dL} \\quad \\text{with concurrent } \\text{Serum Insulin } > 15 - 20\\ \\mu\\text{IU/mL}}$$
      </li>
      <li><strong>Amended Insulin-to-Glucose Ratio (AIGR):</strong>
      $$\\mathbf{\\text{AIGR} = \\frac{\\text{Serum Insulin (}\\mu\\text{IU/mL)} \\times 100}{\\text{Blood Glucose (mg/dL)} - 30}}$$
      An AIGR <strong>$> 30$</strong> is diagnostic of an autonomous insulin-secreting tumor.</li>
    </ul>
  </li>
  <li><strong>Medical Management:</strong> Frequent small meals rich in complex carbohydrates, protein, and fat; <strong>Prednisone</strong> (stimulates gluconeogenesis and causes peripheral insulin resistance); and <strong>Diazoxide</strong> (opens ATP-sensitive $K^+$ channels in $\beta$-cells, directly inhibiting insulin exocytosis).</li>
</ul>""",
        "eliteDesc": """<h4>Other Etiologies of Canine Hypoglycemia</h4>
<ul>
  <li><strong>Juvenile / Toy Breed Hypoglycemia:</strong> Occurs in toy breed puppies (Chihuahuas, Yorkshire Terriers under 4 months of age) due to a combination of high metabolic rate, large brain-to-body mass ratio, and minute liver mass with insufficient glycogen storage.</li>
  <li><strong>Canine Xylitol Toxicity:</strong> Xylitol (an artificial sugar alcohol used in human chewing gums and peanut butters) is harmless to humans but causes a <strong>catastrophic 6-fold surge in insulin secretion in dogs</strong>. Xylitol is absorbed within 30 minutes, stimulating massive $\beta$-cell degranulation. Dogs develop profound, life-threatening hypoglycemia (< 30 mg/dL) within 30–60 minutes, followed by acute, massive <strong>centrilobular hepatic necrosis and liver failure</strong> at higher doses (> 0.5 g/kg).</li>
  <li><strong>Hunting Dog / Working Dog Hypoglycemia:</strong> Occurs in field trial dogs during vigorous, continuous exercise due to rapid depletion of glycogen reserves combined with delayed gluconeogenesis.</li>
</ul>""",
        "keyPoints": [
            "The mammalian brain relies on glucose as its obligate fuel; hypoglycemia causes neuroglycopenia.",
            "Neuroglycopenia manifests as weakness, ataxia, tremors, grand mal seizures, and coma.",
            "Newborn piglets have < 1-2% body fat and can survive fasting for only 12-18 hours.",
            "Piglet PEPCK and Glucose-6-Phosphatase gluconeogenic enzymes are immature at birth.",
            "Chilling and sow agalactia trigger fatal neonatal hypoglycemia (blood glucose < 20 mg/dL).",
            "Emergency piglet therapy: Warm creep box (32-35°C) + intraperitoneal warm 5-10% glucose.",
            "Canine insulinoma is a functional $\beta$-cell neoplasm autonomously secreting insulin.",
            "Insulinoma causes intermittent fasting hypoglycemia, exercise intolerance, and seizures.",
            "Diagnostic hallmark: Inappropriately normal or elevated serum insulin during concurrent hypoglycemia.",
            "Amended Insulin-to-Glucose Ratio (AIGR) > 30 confirms autonomous hyperinsulinism.",
            "Medical therapy for insulinoma: Frequent meals, Prednisone (gluconeogenesis), and Diazoxide.",
            "Xylitol ingestion in dogs triggers a massive, lethal insulin surge followed by acute liver necrosis."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Emergency Presentation of Canine Xylitol Poisoning:<br>
A 3-year-old Boxer dog is brought to an emergency clinic 45 minutes after raiding a backpack and consuming a packet of sugar-free chewing gum containing <strong>Xylitol</strong>. The dog is collapsed, comatose, and actively seizing. Blood analysis reveals a critical blood glucose of <strong>22 mg/dL</strong> (severe profound hypoglycemia) and rising ALT. Pathophysiological emergency therapy requires:<br>
1. <strong>Immediate IV Dextrose Bolus:</strong> Rapid intravenous administration of 1–2 mL/kg of 25% Dextrose (diluted 1:1 with sterile saline) over 2–3 minutes to abort hypoglycemic brain damage.<br>
2. <strong>Continuous Dextrose Infusion:</strong> Because xylitol-stimulated insulin release persists for up to 24–48 hours, the dog is maintained on an IV CRI of <strong>2.5% to 5% Dextrose</strong> with serial blood glucose monitoring every 1–2 hours.<br>
3. <strong>Hepatoprotective Therapy:</strong> N-acetylcysteine (NAC) and S-adenosylmethionine (SAMe) are instituted immediately to mitigate anticipated acute hepatotoxicity.</p>""",
        "tables": [
            {
                "title": "Comparison of Neonatal Piglet Hypoglycaemia vs. Canine Insulinoma",
                "headers": ["Feature", "Neonatal Hypoglycaemia in Baby Pigs", "Hyperinsulinism (Canine Insulinoma)"],
                "rows": [
                    ["Target Population", "Piglets in first 24 - 72 hours of life", "Adult and geriatric dogs (German Shepherds, Boxers)"],
                    ["Primary Etiology", "Substrate & enzyme deficiency; immature gluconeogenesis", "Functional neoplastic pancreatic $\\beta$-cell adenoma/carcinoma"],
                    ["Circulating Insulin Level", "<strong>Extremely Low / Undetectable</strong>", "<strong>Inappropriately Elevated</strong> (> 15 - 20 $\\mu$IU/mL)"],
                    ["Clinical Signs", "Shivering, stilt-legged gait, weak squeal, paddling", "Episodic weakness, glazed eyes, twitching, seizures"],
                    ["Triggering Factor", "Chilling, cold farrowing pen, sow agalactia", "Fasting, vigorous exercise, high-carbohydrate meal"],
                    ["Definitive Emergency Therapy", "Warming (32-35°C) + Intraperitoneal 5-10% glucose", "IV Dextrose bolus, surgical excision, Prednisone, Diazoxide"]
                ]
            },
            {
                "title": "Major Causes of Hypoglycemia in Veterinary Practice",
                "headers": ["Category", "Specific Condition", "Species Affected", "Underlying Biochemical Mechanism"],
                "rows": [
                    ["Neonatal Immaturity", "Neonatal Piglet / Toy Breed Hypoglycemia", "Piglets, Chihuahuas", "Deficient hepatic glycogen stores; immature PEPCK enzyme"],
                    ["Endocrine Neoplasia", "Pancreatic $\\beta$-cell Insulinoma", "Canines, Ferrets", "Autonomous, unregulated hypersecretion of insulin"],
                    ["Toxicological", "Xylitol Toxicity (Artificial sweetener)", "Canines", "Massive non-physiological stimulation of $\\beta$-cell insulin release"],
                    ["Severe Sepsis", "Septic Shock / Endotoxemia", "All species (Foals, Calves)", "Massive systemic glucose consumption + hepatic gluconeogenic arrest"],
                    ["Endocrine Deficiency", "Hypoadrenocorticism (Addison's Disease)", "Dogs", "Lack of cortisol impairs gluconeogenesis and enzyme induction"]
                ]
            }
        ],
        "img": "",
        "tags": ["Hypoglycaemia", "Piglets", "Insulinoma", "Xylitol Toxicity", "AIGR", "Neuroglycopenia", "Canine"]
    },

    "u3-t04": {
        "summary": "Biochemical assessment of carbohydrate disturbances utilizes baseline blood glucose, urine glucose testing, oral and intravenous glucose tolerance tests, insulin assays, and glycated blood proteins (serum fructosamine and HbA1c) to achieve definitive diagnosis and therapeutic monitoring of animal diabetes and metabolic disorders.",
        "desc": """<h4>1. Collection and Preservation of Blood for Glucose Testing</h4>
<p>Accurate measurement of blood glucose is complicated by ongoing in vitro metabolism: red blood cells and leukocytes continue <strong>anaerobic glycolysis</strong> after blood collection, consuming glucose at a rate of <strong>5 to 10% per hour at room temperature</strong> (even faster in leukocytic blood samples):</p>
<ul>
  <li><strong>Anticoagulant of Choice:</strong> Blood must be collected in tubes containing <strong>Sodium Fluoride ($NaF$)</strong> with potassium oxalate (Grey-top tube). Fluoride specifically inhibits the glycolytic enzyme <strong>Enolase</strong> by forming an inactive magnesium fluorophosphate complex, arresting in vitro glycolysis and stabilizing blood glucose for up to 24–48 hours.</li>
  <li>Alternatively, serum or plasma must be separated from cellular elements by centrifugation within <strong>30 minutes</strong> of collection.</li>
</ul>

<h4>2. Standard Methods for Blood Glucose Determination</h4>
<ul>
  <li><strong>1. Glucose Oxidase-Peroxidase (GOD-POD) Method:</strong>
    <ul>
      <li>Highly specific, enzymatic colorimetric gold-standard method:
      $$\\text{D-Glucose} + O_2 + H_2O \\xrightarrow{\\mathbf{Glucose\\text{ Oxidase (GOD)}}} \\text{D-Gluconic Acid} + \\mathbf{H_2O_2}$$
      $$\\mathbf{H_2O_2} + 4\\text{-Aminoantipyrine} + \\text{Phenol} \\xrightarrow{\\mathbf{Peroxidase (POD)}}} \\mathbf{\\text{Quinoneimine Dye (Pink-Red)}} + 4\\ H_2O$$
      </li>
      <li>The intensity of the pink quinoneimine chromophore is measured spectrophotometrically at <strong>505 nm</strong> and is directly proportional to glucose concentration.</li>
    </ul>
  </li>
  <li><strong>2. Hexokinase Method:</strong>
    <ul>
      <li>Reference method for automated clinical analyzers: Glucose is phosphorylated by Hexokinase to G6P, which is oxidized by G6PD using $NADP^+$, generating <strong>NADPH</strong> measured at 340 nm.</li>
    </ul>
  </li>
  <li><strong>3. Hand-Held Veterinary Glucometers:</strong>
    <ul>
      <li>Amperometric biosensors utilizing glucose dehydrogenase (GDH) or glucose oxidase. Crucially, human glucometers should not be used in animals without calibration: canine and feline red blood cells have a different glucose distribution between erythrocytes and plasma compared to humans (feline RBCs contain only ~15% of whole-blood glucose, whereas human RBCs contain ~45%). Veterinary-calibrated glucometers (e.g., AlphaTRAK) must be selected.</li>
    </ul>
  </li>
</ul>

<h4>3. Dynamic Endocrine Diagnostic Tests</h4>
<ul>
  <li><strong>1. Glucose Tolerance Tests (GTT):</strong> Evaluates the dynamic capacity of pancreatic $\beta$-cells to clear a glucose challenge:
    <ul>
      <li><strong>Intravenous Glucose Tolerance Test (IVGTT):</strong> Preferred in veterinary medicine over oral GTT because it avoids variable gastric emptying and ruminal microbial fermentation. Sterile 50% dextrose (0.5 g/kg) is infused IV over 2 minutes after a 12-hour fast. Blood samples are collected at 0, 15, 30, 60, 90, and 120 minutes.</li>
      <li><em>Normal Dog/Cat:</em> Blood glucose peaks immediately (~300 mg/dL), triggers an insulin surge, and returns to baseline (< 120 mg/dL) within <strong>60 to 90 minutes</strong>.</li>
      <li><em>Diabetic Animal:</em> Fractional clearance rate ($k$-value) is severely reduced; blood glucose remains severely elevated (> 200 mg/dL) at 120–180 minutes.</li>
      <li><em>Equine Metabolic Syndrome:</em> Shows prolonged hyperinsulinemia and delayed glucose clearance.</li>
    </ul>
  </li>
  <li><strong>2. Oral Glucose Tolerance Test (OGTT):</strong> Used in horses to evaluate small intestinal mucosal absorption (malabsorption syndromes).</li>
</ul>

<h4>4. Assessment of Long-Term Glycemic Control: Glycated Proteins</h4>
<p>Transient stress or excitement during veterinary clinic visits causes massive sympathetic epinephrine release, stimulating rapid hepatic glycogenolysis. This produces profound <strong>Transient Stress Hyperglycemia</strong> (especially in cats, where blood glucose can spike to 300–400 mg/dL without true diabetes). To distinguish transient stress hyperglycemia from true chronic diabetes mellitus, veterinarians measure <strong>glycated blood proteins</strong>:</p>
<ul>
  <li><strong>1. Serum Fructosamine:</strong>
    <ul>
      <li><strong>Biochemical Principle:</strong> Glucose non-enzymatically condenses with free amino groups on circulating plasma proteins (predominantly <strong>Albumin</strong>) via a ketoamine linkage (Amadori rearrangement) to form <strong>Fructosamine</strong>.</li>
      <li><strong>Diagnostic Time Window:</strong> Because plasma albumin has a circulating half-life of <strong>2 to 3 weeks</strong> in dogs and cats, serum fructosamine directly reflects the <strong>average blood glucose concentration over the preceding 2 to 3 weeks</strong>.</li>
      <li><strong>Interpretation:</strong>
        <ul>
          <li><em>Normal Dog/Cat:</em> <strong>190 – 350 $\mu\text{mol/L}$</strong>.</li>
          <li><em>Transient Stress Hyperglycemia:</em> Blood glucose is high, but Fructosamine is <strong>completely normal (< 350 $\mu\text{mol/L}$)</strong>.</li>
          <li><em>Chronic Diabetes Mellitus:</em> Fructosamine is significantly elevated (<strong>> 400 – 600 $\mu\text{mol/L}$</strong>).</li>
          <li><em>Monitoring Insulin Therapy:</em> Evaluates adequacy of insulin dosage without hospital stress interference.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>2. Glycated Hemoglobin (HbA1c):</strong>
    <ul>
      <li>Non-enzymatic glycation of the N-terminal valine of the hemoglobin $\beta$-chain inside erythrocytes. Reflects average glycemic control over the entire lifespan of the red blood cell (~110 days in dogs; ~70 days in cats). Less widely used in veterinary clinics than fructosamine due to technical assay limitations.</li>
    </ul>
  </li>
</ul>

<h4>5. Urine Analysis in Carbohydrate Disturbances</h4>
<ul>
  <li><strong>Urine Glucose:</strong> Detected via commercial reagent dipsticks based on the glucose oxidase method (detects $> 100\\ \\text{mg/dL}$ of glucose). Normal urine is completely negative.</li>
  <li><strong>Urine Ketones:</strong> Detected via Rothera's nitroprusside reaction (purple color). Detects acetoacetate and acetone; does not detect BHBA.</li>
</ul>""",
        "eliteDesc": """<h4>Interference and Artifacts in Fructosamine Interpretation</h4>
<p>Because fructosamine represents glycated plasma albumin, alterations in circulating protein levels directly artifact the measurement:</p>
<ul>
  <li><strong>Hypoalbuminemia / Hypoproteinemia:</strong> In dogs suffering from protein-losing nephropathy or enteropathy, low plasma albumin produces a <strong>falsely low fructosamine value</strong>, which can mask poorly controlled diabetes.</li>
  <li><strong>Hyperthyroidism in Cats:</strong> Feline hyperthyroidism accelerates protein turnover and albumin catabolism, lowering serum fructosamine independently of blood glucose.</li>
</ul>""",
        "keyPoints": [
            "In vitro glycolysis consumes 5-10% of blood glucose per hour if not rapidly separated.",
            "Sodium Fluoride ($NaF$, grey-top tube) inhibits Enolase, stabilizing glucose for 24-48 hours.",
            "The Glucose Oxidase-Peroxidase (GOD-POD) method measures pink quinoneimine dye at 505 nm.",
            "Veterinary-calibrated glucometers (AlphaTRAK) must be used due to species erythrocyte differences.",
            "Intravenous Glucose Tolerance Test (IVGTT) evaluates $\beta$-cell reserve and clearance rate.",
            "In normal animals, blood glucose returns to baseline within 60 to 90 minutes post-IVGTT.",
            "Cats frequently exhibit transient stress hyperglycemia (300-400 mg/dL) due to epinephrine.",
            "Serum Fructosamine represents non-enzymatic glycation of plasma albumin.",
            "Fructosamine reflects average blood glucose over the preceding 2 to 3 weeks.",
            "Fructosamine > 400 $\mu$mol/L confirms chronic diabetes and rules out transient stress spikes.",
            "Hypoalbuminemia causes a falsely decreased fructosamine reading.",
            "Glycated Hemoglobin (HbA1c) reflects glycemic control over the RBC lifespan (70-110 days)."
        ],
        "clinical": """<p><strong>Clinical Correlation:</strong> Differentiating Feline Stress Hyperglycemia from True Diabetes Mellitus:<br>
A 7-year-old neutered male domestic shorthair cat is brought to a veterinary clinic for an annual health check. The cat is terrified, hissing, and struggling violently during restraint. Routine blood chemistry reveals a striking blood glucose of <strong>340 mg/dL</strong>, which would suggest diabetes mellitus in an unstressed patient. However, the cat has no owner-reported polyuria or weight loss, and urine dipstick is negative for ketones and glucose. To avoid misdiagnosing the cat and inappropriately initiating dangerous insulin therapy, the veterinarian measures <strong>Serum Fructosamine</strong>. The fructosamine value returns at <strong>260 $\mu\text{mol/L}$</strong> (well within the normal reference range of 190–350 $\mu\text{mol/L}$). This proves conclusively that the cat has experienced <strong>acute sympathetic stress hyperglycemia</strong> (transient epinephrine-driven hepatic glycogenolysis) rather than chronic diabetes mellitus, averting fatal iatrogenic hypoglycemic insulin administration.</p>""",
        "tables": [
            {
                "title": "Comparison of Glycemic Diagnostic Tests Used in Veterinary Medicine",
                "headers": ["Diagnostic Test", "Biological Sample", "Time Frame Reflected", "Normal Range (Canine/Feline)", "Primary Clinical Diagnostic Value"],
                "rows": [
                    ["Fasting Blood Glucose", "Fluoride plasma / serum", "Point in time (Instantaneous)", "70 - 120 mg/dL", "Detects acute hypoglycemia or severe hyperglycemia"],
                    ["Serum Fructosamine", "Serum (Red top tube)", "<strong>Past 2 - 3 weeks</strong>", "<strong>190 - 350 $\\mu$mol/L</strong>", "Differentiates stress hyperglycemia; monitors insulin therapy"],
                    ["Glycated Hemoglobin (HbA1c)", "EDTA whole blood", "<strong>Past 2 - 3 months</strong>", "1.5 - 3.5% of total Hb", "Long-term monitoring in research and referral hospitals"],
                    ["Urine Glucose Dipstick", "Fresh urine", "Hours since last voiding", "Negative (Zero)", "Identifies glucosuria when blood glucose > renal threshold"],
                    ["Intravenous GTT", "Serial fluoride plasma", "Dynamic metabolic response", "Returns < 120 mg/dL in 90 min", "Assesses $\\beta$-cell clearance in equine metabolic syndrome"]
                ]
            },
            {
                "title": "Diagnostic Interpretation of Serum Fructosamine in Diabetic Pets",
                "headers": ["Serum Fructosamine Concentration", "Clinical Interpretation", "Therapeutic Decision"],
                "rows": [
                    ["< 190 $\\mu$mol/L", "Severe prolonged hypoglycemia / Overdosed insulin", "Immediate reduction of insulin dose to prevent fatal seizures"],
                    ["190 - 350 $\\mu$mol/L", "Normal non-diabetic / Excellent diabetic control", "Maintain current dietary and insulin management"],
                    ["350 - 450 $\\mu$mol/L", "Good glycemic control in a diabetic pet", "Acceptable clinical management; continue current therapy"],
                    ["450 - 550 $\\mu$mol/L", "Fair to moderate glycemic control", "Evaluate Somogyi rebound, diet compliance, or adjust dose"],
                    ["> 550 $\\mu$mol/L", "<strong>Poor glycemic control / Unregulated Diabetes</strong>", "Significant risk of DKA; increase insulin dose; investigate resistance"]
                ]
            }
        ],
        "img": "",
        "tags": ["Fructosamine", "Glucose Tolerance Test", "HbA1c", "Sodium Fluoride", "Stress Hyperglycemia", "GOD-POD"]
    }
}
