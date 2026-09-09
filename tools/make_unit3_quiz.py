# -*- coding: utf-8 -*-
"""
Unit 3: Veterinary Analytical Biochemistry Quiz Questions
Curriculum: VCI MSVE Credit Hours 2+1=3 (Second Year B.V.Sc & A.H.)
Counts: 90 MCQ, 45 True/False, 45 Fill in the Blanks (Total 180 questions)
Strict 2 : 1 : 1 Ratio
Sub-sections:
  u3-s1: Disorders of Carbohydrate & Lipid Metabolism (Topics: u3-t01 to u3-t04, u3-t06) [23 MCQ, 11 TF, 11 FIB = 45 Qs]
  u3-s2: Clinical Enzymology & Organ Function Tests (Topics: u3-t05, u3-t07 to u3-t10) [23 MCQ, 12 TF, 12 FIB = 47 Qs]
  u3-s3: Acid-Base, Digestive & Fluid Balance (Topics: u3-t11 to u3-t14) [22 MCQ, 11 TF, 11 FIB = 44 Qs]
  u3-s4: Detoxification & Cytochrome P450 (Topics: u3-t15 to u3-t16) [22 MCQ, 11 TF, 11 FIB = 44 Qs]
Total: 90 MCQ, 45 TF, 45 FIB = 180 Questions
"""

mcq = [
    # --- u3-s1: Disorders of Carbohydrate & Lipid Metabolism (23 MCQs) ---
    {
        "q": "Canine diabetes mellitus is most commonly characterized pathophysiologically by:",
        "o": ["Type 2 non-insulin dependent diabetes due to peripheral receptor insensitivity", "Type 1 absolute insulin deficiency resulting from autoimmune or degenerative destruction of pancreatic beta-cells", "Gestational diabetes responding only to progesterone therapy", "Secondary diabetes from somatostatin hypersecretion"],
        "a": 1,
        "e": "Over 90% of diabetic dogs suffer from Type 1 diabetes mellitus characterized by permanent, progressive loss of pancreatic beta-cells and an absolute requirement for exogenous insulin therapy.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The classic clinical triad of symptoms observed in domestic dogs and cats with unmanaged diabetes mellitus is:",
        "o": ["Anuria, hypodipsia, and anorexia", "Polyuria, polydipsia, and polyphagia accompanied by weight loss", "Oliguria, ascites, and obesity", "Dyspnea, bradycardia, and jaundice"],
        "a": 1,
        "e": "Glucosuria causes osmotic diuresis leading to polyuria (PU), compensatory polydipsia (PD), and cellular starvation triggering voracious appetite (polyphagia) despite progressive loss of body weight.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Diabetic cataracts develop rapidly in dogs with uncontrolled diabetes mellitus due to the conversion of lens glucose into:",
        "o": ["Galactose by galactokinase", "Sorbitol by aldose reductase, causing osmotic lens swelling and fiber rupture", "Fructose-1,6-bisphosphate by PFK-1", "Glucuronic acid by UDP-glucose dehydrogenase"],
        "a": 1,
        "e": "Excess glucose enters the canine lens where aldose reductase reduces it to sorbitol; sorbitol cannot diffuse out, drawing water osmotically into the lens and causing lenticular opacity.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Serum fructosamine concentration is clinically valuable in veterinary medicine because it reflects glycemic control over the preceding:",
        "o": ["2 to 4 hours", "2 to 3 weeks", "2 to 3 months", "6 to 12 months"],
        "a": 1,
        "e": "Fructosamine represents non-enzymatically glycated serum proteins (chiefly albumin); its half-life mirrors serum albumin, reflecting average glycemic control over the prior 2-3 weeks.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The renal threshold for glucose in healthy domestic dogs above which glucosuria occurs is approximately:",
        "o": ["50 to 70 mg/dL", "100 to 120 mg/dL", "180 to 220 mg/dL", "350 to 400 mg/dL"],
        "a": 2,
        "e": "In dogs, the tubular transport maximum for glucose corresponds to a venous plasma glucose of ~180-220 mg/dL (10-12 mmol/L); in cats it is higher (~280-300 mg/dL).",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Bovine ketosis (acetonemia) in high-producing dairy cows occurs most frequently during which physiological stage?",
        "o": ["Dry period (last 60 days of gestation)", "Peak lactation (2 to 6 weeks postpartum)", "Mid-lactation (120 to 150 days in milk)", "At the time of artificial insemination"],
        "a": 1,
        "e": "Peak milk production occurs 2-6 weeks after calving, exceeding dry matter intake capacity and precipitating severe negative energy balance (NEB), hypoglycemia, and hyperketonemia.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The primary biochemical defect initiating bovine ketosis is:",
        "o": ["Excessive dietary calcium intake", "A deficit of oxaloacetate relative to acetyl-CoA, diverting acetyl units into ketogenesis", "Complete blockage of hormone-sensitive lipase in adipose tissue", "Overproduction of glycogen in liver tissue"],
        "a": 1,
        "e": "Depletion of oxaloacetate by intense gluconeogenesis starves the citrate synthase reaction, preventing entry of adipose-derived acetyl-CoA into the Krebs cycle and routing it to ketogenesis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Subclinical ketosis in dairy cattle is definitively diagnosed when serum beta-hydroxybutyrate (BHB) concentration exceeds:",
        "o": ["0.2 to 0.4 mmol/L", "0.6 to 0.8 mmol/L", "1.2 to 1.4 mmol/L", "5.0 to 6.5 mmol/L"],
        "a": 2,
        "e": "The international veterinary threshold for subclinical ketosis is serum or blood BHB >= 1.2 to 1.4 mmol/L; values >= 3.0 mmol/L indicate severe clinical ketosis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "The standard oral gluconeogenic precursor administered for treatment and prevention of bovine ketosis is:",
        "o": ["Ethanol", "Propylene glycol (1,2-propanediol)", "Acetoacetate", "Glycerol monostearate"],
        "a": 1,
        "e": "Oral propylene glycol is absorbed from the rumen and converted in the liver to pyruvate and oxaloacetate, replenishing TCA intermediates and suppressing ketogenesis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Pregnancy toxaemia in ewes and does (twin lamb disease) develops in late gestation primarily because of:",
        "o": ["Massive fetal glucose and amino acid demands in ewes carrying multiple fetuses combined with limited ruminal capacity", "Excess dietary carbohydrate consumption in lush pasture", "Autoimmune destruction of the placenta", "Acute ruminal bloat"],
        "a": 0,
        "e": "Twin and triplet fetuses demand huge amounts of maternal glucose (fetuses consume up to 40% of maternal glucose) during the final 4 weeks, causing severe hypoglycemia and ketosis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Neonatal baby pigs are exceptionally prone to severe fatal hypoglycemia during their first 24 to 48 hours of life because they:",
        "o": ["Lack insulin receptors in all peripheral tissues", "Are born with negligible body fat stores (<1-2%), limited liver glycogen, and immature gluconeogenic enzymes", "Excrete huge quantities of glucose in urine", "Lack the sodium-glucose transporter SGLT-1"],
        "a": 1,
        "e": "Newborn piglets have virtually no adipose insulation or energy reserves; if separated from the sow, glycogen is exhausted within hours and gluconeogenesis is too immature to maintain blood glucose.",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Canine insulinoma is a functional neuroendocrine neoplasm originating from which pancreatic cells?",
        "o": ["Alpha cells (secreting glucagon)", "Beta cells (secreting unregulated insulin)", "Delta cells (secreting somatostatin)", "F cells (secreting pancreatic polypeptide)"],
        "a": 1,
        "e": "Insulinoma is an insulin-secreting tumor of pancreatic beta cells causing episodic, unsuppressed insulin release and severe neuroglycopenic hypoglycemia (<40 mg/dL).",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "In dogs with hyperinsulinism from insulinoma, clinical signs typically include:",
        "o": ["Extreme hyperglycemia and diabetic ketoacidosis", "Weakness, muscle tremors, ataxia, and generalized seizures relieved by intravenous glucose", "Marked jaundice and dark brown urine", "Severe polycythemia and hypertension"],
        "a": 1,
        "e": "Neuroglycopenia (deprivation of glucose to the central nervous system) produces episodic tremors, mental dullness, collapse, and tonic-clonic seizures promptly reversed by glucose administration.",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Marked fasting hypercholesterolemia in domestic dogs is most commonly a diagnostic hallmark of which endocrine disease?",
        "o": ["Hyperparathyroidism", "Hypothyroidism", "Addison's disease (Hypoadrenocorticism)", "Insulinoma"],
        "a": 1,
        "e": "Thyroid hormones stimulate hepatic LDL-receptor expression and cholesterol 7-alpha-hydroxylase; canine hypothyroidism impairs LDL clearance, causing severe fasting hypercholesterolemia (>300-500 mg/dL).",
        "topicId": "u3-t06", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Equine hyperlipemia is a life-threatening metabolic disorder characterized by gross lactescent (milky) plasma and severe hepatic lipidosis, seen predominantly in:",
        "o": ["Thoroughbred racehorses in active training", "Ponies, miniature horses, and donkeys undergoing negative energy balance or stress", "Newborn foals on mare's colostrum", "Draft horses on high-grain diets"],
        "a": 1,
        "e": "Ponies, donkeys, and miniature horses have poorly regulated adipose lipolysis; negative energy balance triggers massive mobilization of NEFA and VLDL, causing severe hypertriglyceridemia and fatty liver.",
        "topicId": "u3-t06", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Which qualitative chemical reagent is universally used in veterinary urinalysis to detect reducing sugars like glucose in urine?",
        "o": ["Ehrlich's aldehyde reagent", "Benedict's qualitative reagent", "Hay's sulfur powder", "Fouchet's reagent"],
        "a": 1,
        "e": "Benedict's qualitative reagent contains cupric sulfate in alkaline citrate; reducing sugars reduce Cu2+ to a yellow-to-brick-red precipitate of cuprous oxide (Cu2O).",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Feline diabetes mellitus exhibits significant clinical similarity to human Type 2 diabetes because it is heavily associated with:",
        "o": ["Obesity, peripheral insulin resistance, and islet amyloid polypeptide (amylin) deposition", "Immune-mediated destruction by anti-insulin antibodies in kittenhood", "Congenital absence of the pancreas", "High dietary vitamin A intake"],
        "a": 0,
        "e": "Feline diabetes features insulin resistance driven by obesity and physical inactivity, accompanied by amyloid deposition (amylin) that causes progressive beta-cell vacuolation and death.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Transient stress hyperglycemia in cats presented to veterinary clinics can elevate blood glucose up to 250-300 mg/dL due to the release of:",
        "o": ["Insulin and somatostatin", "Epinephrine and cortisol triggering rapid glycogenolysis", "Parathyroid hormone", "Antidiuretic hormone"],
        "a": 1,
        "e": "Catecholamine and glucocorticoid surges during handling stress stimulate massive hepatic glycogenolysis and gluconeogenesis in cats; measuring serum fructosamine rules out true diabetes.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Diabetic ketoacidosis (DKA) is a severe medical emergency characterized by the triad of:",
        "o": ["Hypoglycemia, metabolic alkalosis, and hypokalemia", "Severe hyperglycemia, high anion-gap metabolic acidosis, and ketonemia/ketonuria", "Normal blood glucose, respiratory acidosis, and hyperalbuminemia", "Hypocalcemia, hyperphosphatemia, and anuria"],
        "a": 1,
        "e": "DKA arises from absolute insulin deficiency plus counter-regulatory hormone excess, causing hyperglycemia, glucosuria, unbridled ketogenesis, and profound high-anion-gap acidosis.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Which volatile fatty acid in ruminants is directly ketogenic and lipogenic, being converted into beta-hydroxybutyrate by the ruminal epithelium?",
        "o": ["Propionate", "Butyrate", "Formate", "Succinate"],
        "a": 1,
        "e": "Rumen-derived butyrate (a 4-carbon VFA) is converted by ruminal epithelial cells during absorption into beta-hydroxybutyrate, supplying basal ketone bodies to the portal circulation.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "The glucose tolerance curve in an animal suffering from clinical diabetes mellitus demonstrates:",
        "o": ["A rapid fall in blood glucose to hypoglycemic levels within 30 minutes", "A higher fasting glucose, higher peak level, and delayed return to baseline (>2-3 hours)", "No change in blood glucose following intravenous dextrose", "A flat horizontal line identical to healthy controls"],
        "a": 1,
        "e": "Impaired insulin secretion or peripheral action causes a diabetic glucose tolerance curve to start high, peak well above normal (>300 mg/dL), and fail to return to baseline within 120 minutes.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Glucated hemoglobin (HbA1c) measurement reflects average circulating blood glucose concentration over:",
        "o": ["1 to 2 days", "2 to 3 weeks", "The circulating lifespan of the erythrocyte (60 to 120 days depending on species)", "The entire calendar year"],
        "a": 2,
        "e": "HbA1c forms non-enzymatically inside RBCs throughout their circulatory lifespan (~110-120 days in dogs, ~70 days in cats), reflecting long-term glycemic control.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "In lactating cows with nervous ketosis, neurological signs such as abnormal gait, compulsive licking of walls, and aggression are caused by:",
        "o": ["Severe hypoglycemia coupled with toxic circulating concentrations of acetoacetate and isopropanol", "Direct viral encephalitis", "Hypercalcemic tetany", "Hypomagnesemic grass tetany"],
        "a": 0,
        "e": "Nervous ketosis affects ~10% of ketotic cows, caused by severe neuroglycopenia combined with the toxic cerebral effects of acetoacetate, acetone, and microbial reduction to isopropanol.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 2
    },

    # --- u3-s2: Clinical Enzymology & Organ Function Tests (23 MCQs) ---
    {
        "q": "Serum Alanine Aminotransferase (ALT) is a highly specific indicator of hepatocellular injury (leakage) in:",
        "o": ["Cattle and sheep", "Horses and donkeys", "Dogs and cats", "Poultry and birds"],
        "a": 2,
        "e": "Hepatocytes of dogs and cats contain high cytosolic ALT activity; in horses, cattle, and sheep, hepatic ALT activity is negligible, making it clinically useless in large animal practice.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Which enzyme is the most reliable, liver-specific leakage enzyme used clinically to evaluate acute hepatocellular damage in horses and cattle?",
        "o": ["ALT", "Sorbitol Dehydrogenase (SDH) and Glutamate Dehydrogenase (GLDH)", "Amylase", "Creatine Kinase (CK)"],
        "a": 1,
        "e": "SDH (cytosolic) and GLDH (mitochondrial) are liver-specific leakage enzymes with high activity in large animal hepatocytes, serving as the gold standard for equine and bovine liver necrosis.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Aspartate Aminotransferase (AST) is present in high concentrations in both liver and:",
        "o": ["Adipose tissue", "Skeletal and cardiac muscle", "Salivary glands", "Urinary bladder epithelium"],
        "a": 1,
        "e": "AST is non-organ-specific, abundant in hepatocytes and skeletal/cardiac myocytes; serum AST elevations must be interpreted alongside Creatine Kinase (CK) to rule out muscle necrosis.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "A unique Corticosteroid-Induced Alkaline Phosphatase (C-ALP) isoenzyme that increases in response to glucocorticoids occurs ONLY in which domestic species?",
        "o": ["Cat (feline)", "Dog (canine)", "Horse (equine)", "Cow (bovine)"],
        "a": 1,
        "e": "Dogs possess a unique gene for a corticosteroid-induced ALP isoenzyme (C-ALP) that is markedly induced by endogenous hyperadrenocorticism (Cushing's) or exogenous glucocorticoid therapy.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Marked elevations of serum Gamma-Glutamyl Transferase (GGT) are clinically diagnostic of:",
        "o": ["Myocardial infarction and muscle rupture", "Cholestasis, biliary tract disease, or high colostrum intake in neonates", "Acute renal medullary infarction", "Exocrine pancreatic insufficiency"],
        "a": 1,
        "e": "GGT is anchored to the biliary canalicular membrane and is released in cholestatic liver diseases; it is also exceptionally high in maternal colostrum, verifying passive immunity transfer.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Creatine Kinase (CK) is the most sensitive and specific serum enzyme marker for evaluating damage to:",
        "o": ["Liver parenchyma", "Skeletal and cardiac muscle", "Renal tubular epithelium", "Bone osteoclasts"],
        "a": 1,
        "e": "CK-MM (muscle isoenzyme) leaks into serum within hours of muscle injury, trauma, recumbency (downer cows), exertional rhabdomyolysis in horses, or capture myopathy.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In dogs with acute pancreatitis, the two classic diagnostic serum enzymes that show substantial activity increases are:",
        "o": ["ALT and AST", "Amylase and Lipase", "ALP and GGT", "LDH and CK"],
        "a": 1,
        "e": "Acinar cell necrosis and duct obstruction release pancreatic alpha-amylase and lipase into the peritoneal cavity and systemic circulation, producing multi-fold serum elevations.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Pre-renal azotemia in dehydrated animals is biochemically differentiated from primary renal azotemia by:",
        "o": ["Low urine specific gravity and severe glucosuria", "Adequately concentrated urine (high USG >1.030 in dogs, >1.035 in cats) and a high BUN:Creatinine ratio that normalizes with fluid therapy", "Fixed isosthenuria (USG 1.008 to 1.012)", "High serum bilirubin"],
        "a": 1,
        "e": "In pre-renal azotemia, intact nephrons respond to hypovolemia by maximally conserving water and urea, yielding concentrated urine (USG >1.030 in dogs, >1.035 in cats) and rapid resolution upon rehydration.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Primary renal azotemia (intrinsic acute or chronic kidney failure) becomes detectable in routine biochemistry only after what percentage of functional nephrons have been destroyed?",
        "o": ["25%", "50%", "At least 75%", "95%"],
        "a": 2,
        "e": "Kidneys have tremendous functional reserve: loss of urine concentrating ability occurs at ~66% nephron loss, while azotemia (elevation of BUN and creatinine) appears only when >75% of nephrons fail.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Isosthenuria (urine specific gravity fixed between 1.008 and 1.012) signifies that the renal tubules:",
        "o": ["Are maximally concentrating glomerular filtrate", "Can neither concentrate nor dilute glomerular filtrate relative to protein-free plasma", "Are completely obstructed by struvite calculi", "Have hyperactive antidiuretic hormone receptors"],
        "a": 1,
        "e": "Isosthenuria indicates that urine osmolality equals plasma osmolality (~300 mOsm/kg, USG 1.008-1.012); persistent isosthenuria with concurrent azotemia confirms intrinsic renal failure.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Post-renal azotemia in veterinary patients is typically caused by:",
        "o": ["Hypovolemic dehydration", "Glomerulonephritis", "Urinary tract obstruction (e.g., urolithiasis in tomcats/steers) or ruptured urinary bladder (uroabdomen)", "Ethylene glycol toxicosis"],
        "a": 2,
        "e": "Post-renal azotemia arises from mechanical obstruction or rupture of the post-glomerular collecting system, often causing life-threatening hyperkalemia and uroabdomen.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In birds and terrestrial reptiles, the major serum biochemical analyte evaluated for assessing renal excretory capacity is:",
        "o": ["Blood Urea Nitrogen (BUN)", "Uric acid", "Creatinine", "Bilirubin"],
        "a": 1,
        "e": "Uricotelic avian and reptilian kidneys actively secrete uric acid via renal tubules; elevated serum uric acid indicates severe renal compromise (>70% tubular failure) or visceral/articular gout.",
        "topicId": "u3-t10", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Serum creatinine is produced at a remarkably constant daily rate in healthy animals from the non-enzymatic breakdown of:",
        "o": ["Serum albumin in the liver", "Phosphocreatine and creatine in skeletal muscle mass", "Dietary vegetable purines", "Bilirubin in the spleen"],
        "a": 1,
        "e": "Creatinine is formed non-enzymatically from muscle phosphocreatine proportional to muscle mass; it is freely filtered by glomeruli with minimal tubular handling, serving as a reliable GFR marker.",
        "topicId": "u3-t10", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In canine hepatic failure or portosystemic shunts (PSS), the definitive diagnostic liver function test demonstrating impaired hepatic clearance is the:",
        "o": ["Bromsulfophthalein (BSP) or Pre- and Post-prandial Serum Bile Acids (SBA) test", "Blood glucose estimation alone", "Total serum calcium test", "Serum amylase test"],
        "a": 0,
        "e": "Bile acids undergo enterohepatic circulation; compromised portal perfusion (PSS) or reduced functional hepatocyte mass causes postprandial bile acids to rise dramatically in systemic blood.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Unconjugated (indirect) bilirubin is transported in blood circulation tightly bound to:",
        "o": ["Hemoglobin", "Serum Albumin", "Alpha-2 macroglobulin", "Transferrin"],
        "a": 1,
        "e": "Unconjugated bilirubin is water-insoluble (lipophilic) and is transported in plasma bound to albumin; in hepatocytes, it is conjugated with glucuronic acid to form water-soluble direct bilirubin.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Hemolytic (pre-hepatic) jaundice in domestic animals is characterized biochemically by:",
        "o": ["Predominant elevation of unconjugated (indirect) bilirubin with normal to high urobilinogen in urine", "Predominant elevation of conjugated direct bilirubin with clay-colored stools", "Absence of bilirubin in serum", "High serum alkaline phosphatase only"],
        "a": 0,
        "e": "Massive intravascular or extravascular hemolysis (e.g., babesiosis, autoimmune hemolytic anemia) floods the liver with biliverdin/bilirubin, elevating unconjugated bilirubin in blood.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Obstructive (post-hepatic / cholestatic) jaundice is characterized biochemically by:",
        "o": ["Elevated conjugated (direct) bilirubin in serum, bilirubinuria, and absence of stercobilin in feces (acholic stools)", "Elevated unconjugated bilirubin only", "Low serum GGT and ALP", "High BUN with normal creatinine"],
        "a": 0,
        "e": "Biliary duct obstruction prevents excretion of conjugated bilirubin into intestine, causing reflux into hepatic sinusoidal blood, bilirubinuria, and pale chalky (acholic) feces.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Serum Albumin is synthesized exclusively by the:",
        "o": ["Renal tubular cells", "Hepatocytes of the liver", "Plasma cells in lymph nodes", "Bone marrow erythroblasts"],
        "a": 1,
        "e": "Albumin is synthesized solely by hepatic parenchymal cells; chronic end-stage liver disease (cirrhosis) reduces synthesis, producing hypoalbuminemia and dependent edema/ascites.",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Which major positive acute-phase protein increases up to 100- to 1000-fold in dogs during acute systemic inflammation?",
        "o": ["Serum Amyloid A (SAA)", "C-Reactive Protein (CRP)", "Haptoglobin", "Albumin"],
        "a": 1,
        "e": "C-Reactive Protein (CRP) is the foremost major acute-phase protein in canines; in horses and cats, Serum Amyloid A (SAA) is the predominant major acute-phase reactant.",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "In cattle and sheep, the primary major positive acute-phase protein measured to detect subclinical mastitis and respiratory disease is:",
        "o": ["Haptoglobin", "C-Reactive Protein", "Fibrinogen alone", "Alpha-fetoprotein"],
        "a": 0,
        "e": "Haptoglobin is normally undetectable in healthy ruminants but increases dramatically during inflammation, serving as the gold-standard bovine acute-phase marker.",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "A marked decrease in the Albumin:Globulin (A:G) ratio (<0.45 to 0.60) in a young cat presenting with peritoneal effusion and fever is strongly suggestive of:",
        "o": ["Acute pancreatitis", "Feline Infectious Peritonitis (FIP)", "Hyperthyroidism", "Diabetes mellitus"],
        "a": 1,
        "e": "FIP causes profound polyclonal B-cell stimulation and vasculitis, driving gamma-globulins to very high levels and dropping the A:G ratio below 0.5 (diagnostic cutoff).",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Symmetric Dimethylarginine (SDMA) has emerged as a sensitive veterinary renal biomarker because it detects kidney dysfunction when what fraction of nephron function is lost?",
        "o": ["10%", "25% to 40%", "75%", "90%"],
        "a": 1,
        "e": "SDMA is an methylated arginine derivative excreted almost entirely by renal filtration; it detects renal compromise much earlier (~25-40% GFR decline) than serum creatinine (~75% loss).",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Hay's sulfur powder test performed on urine is a classic qualitative test designed to detect:",
        "o": ["Bile pigments (bilirubin)", "Bile salts (due to lowering of surface tension)", "Urobilinogen", "Hemoglobin"],
        "a": 1,
        "e": "Bile salts lower the surface tension of urine; fine sulfur powder sprinkled onto the urine surface sinks immediately to the bottom if bile salts are present.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 1
    },

    # --- u3-s3: Acid-Base, Digestive & Fluid Balance (22 MCQs) ---
    {
        "q": "The primary clinical diagnostic indicator of Metabolic Acidosis in blood gas and electrolyte analysis is a decrease in plasma:",
        "o": ["Partial pressure of oxygen (pO2)", "Bicarbonate concentration ([HCO3-])", "Chloride concentration ([Cl-])", "Sodium concentration ([Na+])"],
        "a": 1,
        "e": "Metabolic acidosis is defined by a primary deficit in plasma bicarbonate ([HCO3-]); the respiratory system compensates by hyperventilating to lower pCO2.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The serum Anion Gap (AG) is calculated clinically using the formula:",
        "o": ["([Na+] + [K+]) - ([Cl-] + [HCO3-])", "([Na+] + [Cl-]) - ([K+] + [HCO3-])", "([Cl-] + [HCO3-]) / ([Na+] + [K+])", "[Na+] - [K+]"],
        "a": 0,
        "e": "Anion Gap represents unmeasured serum anions (albumin, phosphates, sulfates, organic acids): AG = ([Na+] + [K+]) - ([Cl-] + [HCO3-]).",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "A High Anion Gap Metabolic Acidosis in veterinary medicine is characteristically caused by:",
        "o": ["Diarrhea with bicarbonate loss", "Lactic acidosis, diabetic ketoacidosis, ethylene glycol poisoning, or uremic renal failure", "Vomiting of gastric hydrochloric acid", "Excess intravenous 0.9% NaCl administration"],
        "a": 1,
        "e": "High AG acidosis occurs when unmeasured organic acid anions accumulate: lactate (hypovolemic shock/grain overload), beta-hydroxybutyrate/acetoacetate (ketosis), glycolate/oxalate (ethylene glycol), or uremic sulfates.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Severe acute diarrhea in calves (calf scours) causes which classic acid-base and electrolyte disturbance?",
        "o": ["Normal anion gap (hyperchloremic) metabolic acidosis with hypokalemia", "Metabolic alkalosis with hyperkalemia", "Respiratory alkalosis with hypernatremia", "High anion gap metabolic alkalosis"],
        "a": 0,
        "e": "Secretory diarrhea causes massive fecal loss of alkaline intestinal fluid rich in HCO3- and K+, resulting in hyperchloremic metabolic acidosis and total body potassium depletion.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "In dairy cows, Left or Right Displaced Abomasum (LDA/RDA) or abomasal volvulus causes which characteristic acid-base disturbance?",
        "o": ["Severe lactic acidosis", "Hypochloremic, hypokalemic metabolic alkalosis with paradoxical aciduria", "Hyperchloremic metabolic acidosis", "Pure respiratory acidosis"],
        "a": 1,
        "e": "Abomasal atony/displacement sequesters HCl in the abomasum; loss of chloride and hydrogen ions produces metabolic alkalosis and hypochloremia, while renal K+/H+ exchange causes paradoxical aciduria.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Paradoxical aciduria in cattle with metabolic alkalosis occurs because the dehydrated kidney:",
        "o": ["Excretes huge quantities of bicarbonate", "Conserves sodium by excreting hydrogen ions (H+) in the collecting tubules due to severe potassium and chloride depletion", "Produces excess sulfuric acid", "Lacks carbonic anhydrase in renal tubules"],
        "a": 1,
        "e": "Hypovolemia stimulates aldosterone to reabsorb Na+; because K+ and Cl- are severely depleted, the collecting duct principal and intercalated cells must excrete H+ along with reabsorbed Na+, acidifying urine.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 3
    },
    {
        "q": "Respiratory acidosis is defined primarily by an abnormal increase in arterial:",
        "o": ["pH above 7.55", "Partial pressure of carbon dioxide (pCO2) due to hypoventilation", "Bicarbonate concentration above 35 mEq/L", "Oxygen saturation"],
        "a": 1,
        "e": "Respiratory acidosis occurs when alveolar hypoventilation impairs CO2 elimination, elevating arterial pCO2 (>45-50 mmHg) and driving the carbonic acid equilibrium toward H+ formation.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "In dairy cattle and feedlot steers, acute ruminal lactic acidosis (grain overload) is initiated microbiologically by the rapid overgrowth of:",
        "o": ["Fibrobacter succinogenes", "Streptococcus bovis and Lactobacillus species", "Megasphaera elsdenii", "Ruminococcus flavefaciens"],
        "a": 1,
        "e": "Sudden ingestion of rapidly fermentable starch fuels explosive growth of amylolytic Streptococcus bovis, producing copious L- and D-lactic acid and plunging rumen pH below 5.0.",
        "topicId": "u3-t12", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "During acute ruminal acidosis, D-lactic acid accumulates systemically in bovine blood because:",
        "o": ["Cows absorb only D-lactate from the rumen", "Mammalian lactate dehydrogenase (L-LDH) cannot metabolize D-lactate, causing severe prolonged metabolic acidosis", "D-lactate is converted into volatile fatty acids", "D-lactate cannot cross into kidneys"],
        "a": 1,
        "e": "Bacterial fermentation produces both D- and L-isomers of lactic acid; ruminant tissues possess L-LDH but very little D-LDH, leading to severe, refractory systemic D-lactic acidosis.",
        "topicId": "u3-t12", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "When ruminal pH falls below 5.0 during severe grain engorgement, which physiological change occurs across the ruminal wall?",
        "o": ["Water is rapidly absorbed from the rumen into systemic circulation, causing hypervolemia", "Massive osmotic shift draws large volumes of water from systemic blood into the hyperosmotic rumen, producing hypovolemic shock", "Ruminal motility accelerates dramatically", "Ammonia absorption increases ten-fold"],
        "a": 1,
        "e": "High lactate concentrations increase rumen osmolarity from ~280 to >400-500 mOsm/L, drawing extracellular fluid osmotically into the rumen, resulting in dehydration, hemoconcentration, and hypovolemic shock.",
        "topicId": "u3-t12", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Superoxide dismutase (SOD) protects cells against oxidative damage by catalyzing the conversion of:",
        "o": ["Hydrogen peroxide to water and oxygen", "Two superoxide radicals (O2.-) and 2 H+ into hydrogen peroxide (H2O2) and molecular oxygen (O2)", "Lipid hydroperoxides into alcohols", "Hydroxyl radicals into water"],
        "a": 1,
        "e": "SOD is the first line of antioxidant defense, dismutating 2 O2.- + 2 H+ -> H2O2 + O2; cytosolic SOD requires Copper and Zinc (Cu-Zn SOD), while mitochondrial SOD requires Manganese (Mn-SOD).",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "The antioxidant enzyme Glutathione Peroxidase (GPx) requires which essential trace mineral as a catalytic selenocysteine residue at its active center?",
        "o": ["Copper", "Zinc", "Selenium", "Cobalt"],
        "a": 2,
        "e": "GPx is a selenoprotein containing selenocysteine; it detoxifies H2O2 and lipid hydroperoxides to water and alcohols, oxidizing reduced glutathione (GSH) to GSSG.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Nutritional Myodegeneration (White Muscle Disease) in calves and lambs is an oxidative injury resulting from deficiency of:",
        "o": ["Calcium and Phosphorus", "Selenium and Vitamin E", "Iron and Copper", "Biotin and Thiamine"],
        "a": 1,
        "e": "Vitamin E (lipid-soluble chain-breaking antioxidant) and Selenium (essential cofactor for GPx) act synergistically; dual deficiency causes unchecked free-radical peroxidation of muscle membranes.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Which reactive oxygen species (ROS) is the most cytotoxic and highly reactive, causing instantaneous peroxidation of membrane lipids and DNA strand breakage?",
        "o": ["Superoxide radical (O2.-)", "Hydrogen peroxide (H2O2)", "Hydroxyl radical (OH.)", "Singlet oxygen (1O2)"],
        "a": 2,
        "e": "The hydroxyl radical (OH.), formed via the iron-catalyzed Fenton and Haber-Weiss reactions, reacts diffusion-controlled with virtually every biological molecule, lacking enzymatic detoxification.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "The fluid deficit in a 400 kg dehydrated heifer estimated to be 8% dehydrated is calculated as:",
        "o": ["8 liters", "16 liters", "32 liters", "64 liters"],
        "a": 2,
        "e": "Deficit (liters) = % dehydration x Body Weight (kg) = 0.08 x 400 kg = 32 liters (32,000 mL). Maintenance and ongoing losses must be added to this replacement volume.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Lactated Ringer's Solution (Hartmann's solution) is classified as an:",
        "o": ["Hypotonic crystalloid", "Isotonic, balanced, alkalinizing replacement crystalloid", "Hypertonic colloid", "Acidifying replacement solution"],
        "a": 1,
        "e": "LRS contains Na+, K+, Ca2+, Cl-, and sodium lactate in concentrations close to plasma; the absorbed lactate is metabolized in the liver to bicarbonate, providing an alkalinizing effect.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Lactated Ringer's Solution should NOT be administered concurrently in the same intravenous infusion line with blood products containing citrate anticoagulant because:",
        "o": ["The lactate precipitates with plasma globulins", "The calcium ions in LRS can overwhelm the citrate anticoagulant, triggering blood clot formation", "LRS causes instantaneous red blood cell hemolysis", "The solution becomes highly acidic"],
        "a": 1,
        "e": "LRS contains 3 mEq/L of ionized calcium, which can neutralize the sodium citrate in banked blood, initiating clotting cascades inside the intravenous infusion tubing.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Hypertonic saline (7.2% NaCl) is clinically administered as a rapid small-volume resuscitation fluid in hypovolemic shock because it:",
        "o": ["Slowly hydrates the intracellular space", "Draws water rapidly from the intracellular and interstitial compartments into the intravascular space via osmotic gradients, expanding blood volume", "Acts as an alkalinizing buffer", "Lowers systemic blood pressure"],
        "a": 1,
        "e": "At ~2400 mOsm/L, 7.2% NaCl administered at 4-5 mL/kg pulls fluid instantaneously from swollen edematous cells into the circulation, restoring venous return and cardiac output within minutes.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Which synthetic colloid fluid is composed of branched hydroxyethyl starch polymers and is used to sustain intravascular colloid oncotic pressure?",
        "o": ["Hetastarch (HES)", "Mannitol", "Normal Saline (0.9% NaCl)", "Ringer's Lactate"],
        "a": 0,
        "e": "Hetastarch contains large polysaccharides that remain inside the vascular space, exerting colloid osmotic pressure to retain fluid in hypoproteinemic veterinary patients.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Intravenous 5% Dextrose in water (D5W) is physiologically classified once infused into the body as:",
        "o": ["An isotonic extracellular expander", "Free water (hypotonic fluid) because glucose is rapidly metabolized by tissues, leaving pure water", "A hypertonic plasma expander", "An alkalinizing buffer"],
        "a": 1,
        "e": "Although D5W is iso-osmolar in the bottle (~252 mOsm/L), once infused, the dextrose is rapidly transported into cells and metabolized, leaving hypotonic free water that distributes through total body water.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "In canine ethylene glycol (antifreeze) toxicity, the devastating renal damage and severe high anion gap acidosis are caused by toxic metabolites including:",
        "o": ["Glycolic acid and Oxalic acid (which precipitates as calcium oxalate monohydrate crystals in renal tubules)", "Acetone and beta-hydroxybutyrate", "L-lactic acid and propionate", "Hydrochloric acid and sulfuric acid"],
        "a": 0,
        "e": "Alcohol dehydrogenase oxidizes ethylene glycol to glycoaldehyde, glycolic acid (severe acidosis), and oxalic acid, which complexes with Ca2+ to form insoluble oxalate crystals that destroy tubular epithelium.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Catalase, a heme-containing tetrameric enzyme found abundantly in peroxisomes, decomposes hydrogen peroxide into:",
        "o": ["Superoxide and hydroxyl radicals", "Water (H2O) and molecular oxygen (O2)", "Ozone and hydrogen gas", "Peroxynitrite"],
        "a": 1,
        "e": "Catalase has one of the highest turnover numbers known: 2 H2O2 -> 2 H2O + O2, preventing toxic accumulation of hydrogen peroxide in cells.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },

    # --- u3-s4: Detoxification & Cytochrome P450 (22 MCQs) ---
    {
        "q": "Biotransformation (detoxification) of lipophilic xenobiotics in the liver generally converts them into:",
        "o": ["More lipophilic non-polar molecules that accumulate in body fat", "More polar, water-soluble metabolites easily excreted in bile and urine", "Volatile gases eliminated exclusively through the skin", "Structural membrane phospholipids"],
        "a": 1,
        "e": "The overarching biological purpose of xenobiotic metabolism is to introduce or conjugate polar groups, making hydrophobic foreign compounds hydrophilic for renal or biliary excretion.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Phase I xenobiotic biotransformation reactions encompass:",
        "o": ["Oxidation, reduction, and hydrolysis", "Glucuronidation and sulfation", "Glutathione conjugation and acetylation", "Amino acid conjugation and methylation"],
        "a": 0,
        "e": "Phase I (functionalization) reactions introduce or unmask reactive functional groups (-OH, -NH2, -SH, -COOH) via oxidation, reduction, or hydrolysis, preparing substrates for Phase II conjugation.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Cytochrome P450 monooxygenase enzymes are located primarily within which subcellular structure of hepatocytes?",
        "o": ["Mitochondrial matrix", "Smooth Endoplasmic Reticulum (microsomes)", "Nucleolus", "Lysosomes"],
        "a": 1,
        "e": "Hepatic microsomal Cytochrome P450 enzymes are integral membrane hemeproteins embedded in the lipid bilayer of the smooth endoplasmic reticulum.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The Cytochrome P450 monooxygenase enzyme system derives its name from its characteristic absorption spectrum maximum at 450 nm when:",
        "o": ["Oxidized by hydrogen peroxide", "Reduced and bound to Carbon Monoxide (CO)", "Exposed to ultraviolet radiation at 260 nm", "Treated with concentrated sulfuric acid"],
        "a": 1,
        "e": "When the heme iron of cytochrome P450 is reduced to Fe2+ and complexes with carbon monoxide (CO), it displays an intense, unique spectral absorbance peak at 450 nm.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The complete catalytic cycle of a Cytochrome P450 monooxygenase reaction requires:",
        "o": ["Substrate, molecular oxygen (O2), NADPH, and NADPH-cytochrome P450 reductase", "Substrate, ATP, and Vitamin C", "FAD, NADH, and hydrogen peroxide", "Cytochrome c and glucose"],
        "a": 0,
        "e": "The overall monooxygenase equation: RH + O2 + NADPH + H+ -> R-OH + H2O + NADP+. Electrons are shuttled from NADPH to heme via the flavoprotein NADPH-CYP450 reductase.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Which Cytochrome P450 subfamily in domestic animals is the most abundant in the liver and metabolizes over 50% of therapeutic drugs?",
        "o": ["CYP1A", "CYP2D", "CYP3A (e.g., CYP3A4 / CYP3A12)", "CYP4A"],
        "a": 2,
        "e": "The CYP3A subfamily possesses a large flexible substrate-binding pocket, metabolizing the widest variety of veterinary anesthetics, sedatives, antimicrobials, and anthelmintics.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Phenobarbital administration in dogs induces Cytochrome P450 enzyme synthesis, resulting clinically in:",
        "o": ["Complete cessation of drug clearance", "Accelerated metabolism (shorter half-life) of co-administered drugs and progressive drug tolerance", "Immediate acute renal shutdown", "Massive hemolysis"],
        "a": 1,
        "e": "Phenobarbital is a potent inducer of hepatic CYP enzymes (especially CYP2B and CYP3A); increased enzyme mass accelerates its own metabolism and that of concurrently administered drugs.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Domestic cats (felines) have an extreme, life-threatening sensitivity to acetaminophen (paracetamol) poisoning primarily because cats possess a genetic deficiency of:",
        "o": ["Alcohol dehydrogenase", "Hepatic UDP-Glucuronosyltransferase (UGT, specifically UGT1A6)", "Cytochrome P450 reductase", "Catalase"],
        "a": 1,
        "e": "Cats have multiple pseudogenized UGT genes, exhibiting negligible glucuronidation capacity; paracetamol is diverted into toxic CYP-mediated NAPQI, causing fatal methemoglobinemia and hepatic necrosis.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "In cats poisoned by acetaminophen (paracetamol), the reactive toxic metabolite NAPQI oxidizes hemoglobin ferrous iron (Fe2+) to ferric iron (Fe3+), producing:",
        "o": ["Carboxyhemoglobin and cherry-red blood", "Methemoglobinemia, severe cyanosis (chocolate-brown blood), and Heinz body hemolytic anemia", "Complete polycythemia", "Acute alkalemia"],
        "a": 1,
        "e": "NAPQI depletes erythrocyte glutathione and oxidizes hemoglobin to methemoglobin (which cannot bind oxygen), turning blood dark chocolate-brown and precipitating oxidized globin as Heinz bodies.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The specific biochemical antidote administered to treat acetaminophen toxicity in veterinary medicine by replenishing intracellular glutathione is:",
        "o": ["Atropine sulfate", "N-Acetylcysteine (NAC)", "Pralidoxime (2-PAM)", "Vitamin K1"],
        "a": 1,
        "e": "N-acetylcysteine provides cysteine, the rate-limiting precursor for glutathione synthesis; restored GSH conjugates and neutralizes toxic NAPQI to non-toxic mercapturic acid.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Domestic dogs (canines) are genetically deficient in which Phase II conjugation pathway, predisposing them to sulfonamide drug toxicity?",
        "o": ["Glucuronidation", "N-Acetylation (N-acetyltransferase)", "Glutathione conjugation", "Sulfation"],
        "a": 1,
        "e": "Dogs lack functional N-acetyltransferase (NAT) genes; unable to acetylate aromatic amines, they metabolize sulfonamides via alternate oxidative pathways into toxic hydroxylamines (causing keratoconjunctivitis sicca and polyarthritis).",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The high-energy nucleotide donor molecule that supplies glucuronic acid for Phase II glucuronidation reactions is:",
        "o": ["UDP-Glucuronic acid (UDPGA)", "3'-Phosphoadenosine-5'-phosphosulfate (PAPS)", "S-Adenosylmethionine (SAM)", "Acetyl-CoA"],
        "a": 0,
        "e": "UDP-glucuronic acid (UDPGA) is synthesized from UDP-glucose by UDP-glucose dehydrogenase; UDP-glucuronosyltransferases transfer glucuronate to xenobiotics.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The activated sulfate donor compound required by sulfotransferases in Phase II sulfoconjugation reactions is:",
        "o": ["Sodium sulfate", "3'-Phosphoadenosine-5'-phosphosulfate (PAPS)", "S-Adenosylmethionine", "Glutathione"],
        "a": 1,
        "e": "PAPS (known as 'active sulfate') is formed from ATP and inorganic sulfate by PAPS synthetase, serving as the universal sulfate donor for xenobiotics and glycosaminoglycans.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Phase II glutathione conjugation of electrophilic drugs catalyzed by Glutathione S-Transferase (GST) yields excreted urinary end products known as:",
        "o": ["Hippuric acids", "Mercapturic acids (N-acetylcysteine conjugates)", "Uric acid crystals", "Bile salts"],
        "a": 1,
        "e": "Glutathione conjugates undergo sequential enzymatic trimming (removal of glutamate and glycine) followed by N-acetylation of the remaining cysteine conjugate to form water-soluble mercapturic acids.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "In herbivores and carnivores, benzoic acid (a common food preservative) is detoxified by Phase II conjugation with which amino acid to form hippuric acid?",
        "o": ["L-Alanine", "Glycine", "L-Tryptophan", "L-Leucine"],
        "a": 1,
        "e": "Benzoic acid is activated to benzoyl-CoA and conjugated with glycine by mitochondrial glycine N-acyltransferase, forming non-toxic hippuric acid excreted in urine.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "In avian species (birds), benzoic acid is uniquely conjugated with which amino acid instead of glycine to form ornithuric acid?",
        "o": ["L-Ornithine", "L-Glutamate", "L-Aspartate", "L-Cysteine"],
        "a": 0,
        "e": "Avian species lack glycine conjugation for benzoates; they conjugate two molecules of benzoic acid with one molecule of L-ornithine to produce dibenzoylornithine (ornithuric acid).",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The universal methyl donor for Phase II methylation of catecholamines, histamine, and xenobiotics is:",
        "o": ["Methylene-THF", "S-Adenosylmethionine (SAM)", "Choline", "Betaine"],
        "a": 1,
        "e": "Methyltransferases use SAM (S-adenosylmethionine) as the donor of reactive methyl groups, generating S-adenosylhomocysteine (SAH).",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Aflatoxin B1, a potent fungal hepatocarcinogen produced by Aspergillus flavus in moldy feedstuffs, is bioactivated by Cytochrome P450 enzymes into:",
        "o": ["Aflatoxin M1 exclusively", "Aflatoxin B1-8,9-epoxide, which covalently binds to DNA guanine residues", "Inactive benzoic acid", "Water-soluble glucuronide"],
        "a": 1,
        "e": "Phase I CYP oxidation can bioactivate procarcinogens: CYP2A and CYP3A oxidize aflatoxin B1 into a highly mutagenic 8,9-epoxide that intercalates and forms covalent adducts with DNA.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Cimetidine and ketoconazole act in canine and feline clinical pharmacology as potent:",
        "o": ["Cytochrome P450 inducers", "Cytochrome P450 competitive inhibitors, slowing clearance and increasing toxicity of co-administered drugs", "Stimulators of glucuronidation", "Glutathione depleters"],
        "a": 1,
        "e": "Cimetidine and imidazole antifungals (ketoconazole) bind tightly to CYP heme iron, reversibly inhibiting drug biotransformation and risking toxic accumulation of co-administered drugs.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Organophosphate insecticide toxicity in domestic livestock causes cholinergic crisis primarily by irreversibly inhibiting:",
        "o": ["Cytochrome P450 monooxygenase", "Acetylcholinesterase (AChE)", "Glutathione S-transferase", "UDP-glucuronosyltransferase"],
        "a": 1,
        "e": "Organophosphates phosphorylate the active-site serine of acetylcholinesterase, preventing acetylcholine breakdown and causing continuous muscarinic and nicotinic hyperstimulation.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The specific pharmacological antidote that reactivates phosphorylated acetylcholinesterase in early organophosphate poisoning is:",
        "o": ["Atropine sulfate alone", "Pralidoxime (2-PAM)", "N-acetylcysteine", "Methylene blue"],
        "a": 1,
        "e": "Pralidoxime (2-PAM) is an oxime that nucleophilically dephosphorylates the catalytic serine of acetylcholinesterase, regenerating active enzyme before 'aging' occurs.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Methylene blue is specifically indicated as an emergency veterinary antidote for the treatment of:",
        "o": ["Ethylene glycol poisoning", "Nitrate / Nitrite toxicity causing severe methemoglobinemia in ruminants", "Lead toxicity", "Organophosphate toxicity"],
        "a": 1,
        "e": "Rumen microbes reduce fertilizer nitrates to nitrites, which oxidize hemoglobin Fe2+ to Fe3+ (methemoglobinemia); methylene blue acts as an artificial electron acceptor, accelerating methemoglobin reduction back to normal hemoglobin.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    }
]

tf = [
    # --- u3-s1: Disorders of Carbohydrate & Lipid Metabolism (11 TF) ---
    {
        "q": "In domestic dogs, diabetes mellitus is primarily an autoimmune Type 1 condition characterized by an absolute deficiency of circulating insulin.",
        "a": True,
        "e": "True. Over 90% of diabetic dogs suffer from Type 1 diabetes resulting from progressive destruction of pancreatic beta cells, requiring lifelong insulin therapy.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Canine diabetic cataracts are reversible by simply initiating insulin therapy once the lens becomes opaque.",
        "a": False,
        "e": "False. Diabetic cataracts result from osmotic swelling and permanent structural disruption of lens protein fibers by sorbitol; surgical phacoemulsification is required to restore vision.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Serum fructosamine measurement is unaffected by transient stress-induced hyperglycemia in domestic cats.",
        "a": True,
        "e": "True. Fructosamine reflects average blood glucose over the preceding 2-3 weeks; short-term acute stress hyperglycemia at the veterinary clinic does not alter serum fructosamine levels.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The renal threshold for glucose is higher in cats (approx 280-300 mg/dL) than in dogs (approx 180-220 mg/dL).",
        "a": True,
        "e": "True. Feline tubular glucose reabsorptive capacity is higher, requiring plasma glucose concentrations >=280 mg/dL before glucosuria spills into urine.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 2
    },
    {
        "q": "Bovine ketosis is characterized biochemically by concurrent hyperglycemia and high blood insulin concentrations.",
        "a": False,
        "e": "False. Bovine ketosis is characterized by profound HYPOGLYCEMIA and low blood insulin, driving uncontrolled lipolysis and massive ketogenesis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Beta-hydroxybutyrate (BHB) is the predominant circulating ketone body measured in blood and milk during bovine ketosis.",
        "a": True,
        "e": "True. Over 80% of circulating ketone bodies in ketotic ruminants consist of beta-hydroxybutyrate, making serum BHB the gold standard for diagnosis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Oral administration of propylene glycol is effective in treating bovine ketosis because it is absorbed and converted into oxaloacetate for gluconeogenesis.",
        "a": True,
        "e": "True. Propylene glycol bypasses rumen fermentation and is metabolized in the liver to pyruvate and oxaloacetate, replenishing TCA intermediates and suppressing ketogenesis.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Pregnancy toxemia in ewes typically occurs in early gestation when placental development begins.",
        "a": False,
        "e": "False. Pregnancy toxemia occurs during the LAST 2 to 4 WEEKS of gestation, driven by the massive fetal glucose demand of rapidly growing multiple fetuses (twins/triplets).",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Newborn piglets can survive up to 5 days without nursing colostrum without developing hypoglycemia.",
        "a": False,
        "e": "False. Neonatal baby pigs exhaust their limited liver glycogen within 12 to 24 hours if fasting, developing fatal hypothermic hypoglycemia within 24 to 36 hours.",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Canine insulinoma produces severe episodic hypoglycemia, often falling below 40 mg/dL.",
        "a": True,
        "e": "True. Autonomous secretion of insulin by beta-cell tumors drives glucose into tissues regardless of circulating levels, precipitating severe neuroglycopenic hypoglycemia.",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Canine hypothyroidism typically causes pronounced hypercholesterolemia due to reduced hepatic LDL-receptor clearance.",
        "a": True,
        "e": "True. Thyroid hormones upregulate LDL receptors and cholesterol 7-alpha-hydroxylase; their absence in hypothyroidism elevates serum total cholesterol in >75% of affected dogs.",
        "topicId": "u3-t06", "subSection": "u3-s1", "diff": 1
    },

    # --- u3-s2: Clinical Enzymology & Organ Function Tests (12 TF) ---
    {
        "q": "Alanine aminotransferase (ALT) is a sensitive and specific indicator of acute hepatocellular leakage in cattle and horses.",
        "a": False,
        "e": "False. Large animal hepatocytes contain negligible ALT activity. In cattle and horses, Sorbitol Dehydrogenase (SDH) and GLDH are used instead.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Sorbitol dehydrogenase (SDH) is a liver-specific leakage enzyme in horses and cattle, but is unstable in vitro at room temperature.",
        "a": True,
        "e": "True. SDH is highly specific for large animal liver necrosis, but its enzyme activity drops rapidly unless serum is separated immediately and analyzed or frozen.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Corticosteroid-induced alkaline phosphatase (C-ALP) is an isoenzyme unique to domestic canines (dogs).",
        "a": True,
        "e": "True. Dogs possess a specific gene encoding C-ALP that is induced by glucocorticoids (hyperadrenocorticism or steroid therapy); this isoenzyme does not occur in other domestic species.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Colostrum from dairy cows and female dogs contains extremely high activity of Gamma-Glutamyl Transferase (GGT).",
        "a": True,
        "e": "True. GGT activity in colostrum is hundreds of times higher than in adult serum; measuring high serum GGT in newborn calves or puppies confirms successful passive transfer of maternal antibodies.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Creatine kinase (CK) has a very long biological half-life, remaining elevated in serum for several weeks following a single episode of muscle trauma.",
        "a": False,
        "e": "False. CK has a very short serum half-life (only 2 to 4 hours in horses and dogs); persistent elevations indicate ongoing, active muscle damage rather than historical trauma.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 2
    },
    {
        "q": "Serum creatinine concentrations rise significantly before any change occurs in glomerular filtration rate (GFR).",
        "a": False,
        "e": "False. Serum creatinine rises inversely with GFR; however, due to renal functional reserve, creatinine does not exceed reference limits until GFR drops by ~75%.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In pre-renal azotemia caused by dehydration, domestic dogs produce adequately concentrated urine with a specific gravity greater than 1.030.",
        "a": True,
        "e": "True. Intact nephrons respond to hypovolemia by maximally absorbing water under ADH stimulation, concentrating urine above 1.030 in dogs (and >1.035 in cats).",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Persistent isosthenuria (USG 1.008 to 1.012) in an azotemic dog confirms intrinsic primary renal failure.",
        "a": True,
        "e": "True. The inability to concentrate urine despite high BUN/creatinine confirms that at least 66-75% of functional nephron capacity has been destroyed.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In avian medicine, blood urea nitrogen (BUN) is the preferred analyte for diagnosing renal failure.",
        "a": False,
        "e": "False. Birds are uricotelic and produce negligible urea; URIC ACID is the definitive renal biomarker in avian clinical pathology.",
        "topicId": "u3-t10", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Unconjugated bilirubin is water-soluble and is excreted directly by the kidneys into urine.",
        "a": False,
        "e": "False. Unconjugated bilirubin is lipophilic and bound to albumin; it cannot cross the glomerular filtration barrier. Only CONJUGATED (water-soluble) bilirubin passes into urine.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Serum Amyloid A (SAA) is the major positive acute-phase protein measured in horses to detect active systemic or joint inflammation.",
        "a": True,
        "e": "True. SAA levels in horses are virtually zero in health but surge up to 1000-fold within 24 hours of infection, making SAA the most sensitive inflammatory marker in equine practice.",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Symmetric dimethylarginine (SDMA) detects renal disease earlier than serum creatinine because it increases when 25% to 40% of nephron function is lost.",
        "a": True,
        "e": "True. SDMA is excreted purely by glomerular filtration and is not influenced by muscle mass, detecting renal compromise long before creatinine rises at 75% loss.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },

    # --- u3-s3: Acid-Base, Digestive & Fluid Balance (11 TF) ---
    {
        "q": "Metabolic acidosis is characterized by a primary decrease in plasma bicarbonate ([HCO3-]).",
        "a": True,
        "e": "True. The primary deficit in metabolic acidosis is low [HCO3-]; the respiratory compensation involves blowing off CO2 via hyperventilation.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Diarrhea in neonatal calves causes a high anion gap metabolic acidosis with hyperkalemia.",
        "a": False,
        "e": "False. Simple calf diarrhea causes a NORMAL ANION GAP (hyperchloremic) metabolic acidosis due to direct loss of bicarbonate in intestinal feces.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Abomasal displacement in dairy cattle typically results in hypochloremic, hypokalemic metabolic alkalosis.",
        "a": True,
        "e": "True. Sequestration and backflow of HCl into the rumen removes H+ and Cl- from the circulation, producing metabolic alkalosis and hypochloremia.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Paradoxical aciduria in cows with metabolic alkalosis occurs when the kidney excretes H+ ions in exchange for Na+ to conserve circulating blood volume.",
        "a": True,
        "e": "True. Dehydration activates aldosterone; because K+ and Cl- are severely depleted, renal collecting tubules excrete H+ to reabsorb Na+, producing acidic urine despite systemic alkalosis.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "In severe ruminal acidosis, explosive growth of Streptococcus bovis produces both D- and L-isomers of lactic acid.",
        "a": True,
        "e": "True. Amylolytic bacteria produce both isomers; because ruminant tissues have limited D-lactate dehydrogenase, D-lactic acid accumulates systemically.",
        "topicId": "u3-t12", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Superoxide dismutase (SOD) converts toxic hydrogen peroxide into water and molecular oxygen.",
        "a": False,
        "e": "False. SOD converts SUPEROXIDE radicals into HYDROGEN PEROXIDE and oxygen (2 O2.- + 2 H+ -> H2O2 + O2). CATALASE and GPx convert H2O2 to water.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "Selenium is an essential component of the antioxidant enzyme Glutathione Peroxidase.",
        "a": True,
        "e": "True. GPx contains selenocysteine in its catalytic triad; selenium deficiency impairs GPx, leaving cell membranes vulnerable to lipid peroxidation.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The fluid deficit for a 500 kg cow that is 10% dehydrated is 50 liters.",
        "a": True,
        "e": "True. Fluid deficit = Body weight (kg) x % dehydration = 500 kg x 0.10 = 50 liters.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Lactated Ringer's Solution (LRS) is an acidifying intravenous fluid recommended for treating metabolic alkalosis.",
        "a": False,
        "e": "False. LRS contains sodium lactate which is metabolized by the liver into BICARBONATE, making it an ALKALINIZING fluid suitable for metabolic acidosis.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Hypertonic saline (7.2% NaCl) pulls fluid osmotically from the interstitial and intracellular compartments into the vascular space, rapidly expanding effective blood volume.",
        "a": True,
        "e": "True. 7.2% hypertonic saline creates a massive transcapillary osmotic gradient, pulling ~3-4 mL of endogenous fluid into the vascular bed for every 1 mL infused.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "In canine ethylene glycol toxicity, calcium oxalate crystals precipitate in renal tubules, leading to acute oliguric renal failure.",
        "a": True,
        "e": "True. Metabolized oxalic acid binds calcium to form insoluble calcium oxalate monohydrate crystals that physically destroy tubular epithelial cells.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },

    # --- u3-s4: Detoxification & Cytochrome P450 (11 TF) ---
    {
        "q": "Phase I biotransformation reactions always detoxify xenobiotics into completely inert, harmless products.",
        "a": False,
        "e": "False. Phase I reactions can bioactivate harmless procarcinogens or prodrugs into highly toxic, reactive intermediates (e.g., aflatoxin B1 into its mutagenic epoxide, paracetamol into NAPQI).",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Cytochrome P450 enzymes are located primarily on the inner mitochondrial membrane of erythrocytes.",
        "a": False,
        "e": "False. Drug-metabolizing CYP450 enzymes are located on the SMOOTH ENDOPLASMIC RETICULUM (microsomes) of HEPATOCYTES; mature erythrocytes lack ER and CYP450 entirely.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The CYP450 monooxygenase reaction requires molecular oxygen (O2) and NADPH as essential co-substrates.",
        "a": True,
        "e": "True. CYP450 incorporates one atom of molecular O2 into the substrate while reducing the other to water using electrons supplied by NADPH via CYP reductase.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Domestic cats are uniquely sensitive to paracetamol (acetaminophen) toxicity due to a genetic deficiency in UDP-glucuronosyltransferase (UGT).",
        "a": True,
        "e": "True. Cats have pseudogenized UGT1A6, preventing glucuronidation; paracetamol is metabolized by CYPs into toxic NAPQI, causing fatal methemoglobinemia.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "N-Acetylcysteine (NAC) acts as a specific antidote in feline and canine paracetamol poisoning by replenishing intracellular glutathione pools.",
        "a": True,
        "e": "True. NAC supplies cysteine for de novo glutathione synthesis, enabling the liver to conjugate and detoxify toxic NAPQI into non-toxic mercapturic acid.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Domestic dogs are genetically deficient in the Phase II N-acetylation pathway because they lack functional N-acetyltransferase enzymes.",
        "a": True,
        "e": "True. Dogs cannot acetylate aromatic amines (like sulfonamides), forcing metabolism into alternative oxidative pathways that form toxic hydroxylamines.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The active sulfate donor molecule used in Phase II sulfoconjugation reactions is 3'-phosphoadenosine-5'-phosphosulfate (PAPS).",
        "a": True,
        "e": "True. PAPS ('active sulfate') is synthesized from ATP and SO4(2-), donating sulfate groups to phenolic xenobiotics via sulfotransferases.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Glutathione conjugates are excreted directly into urine without any enzymatic trimming of amino acids.",
        "a": False,
        "e": "False. Glutathione conjugates are cleaved by gamma-glutamyltransferase and dipeptidases, then N-acetylated to form MERCAPTURIC ACIDS before urinary excretion.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Avian species (birds) detoxify benzoic acid by conjugating it with L-ornithine to form ornithuric acid.",
        "a": True,
        "e": "True. Birds lack glycine conjugation for benzoates; they conjugate benzoic acid with L-ornithine, excreting dibenzoylornithine (ornithuric acid).",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Phenobarbital acts as a potent inhibitor of hepatic Cytochrome P450 enzymes in dogs.",
        "a": False,
        "e": "False. Phenobarbital is a classic, powerful INDUCER of hepatic CYP enzymes (increasing enzyme synthesis), which accelerates drug clearance.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Methylene blue acts as an effective antidote for nitrite-induced methemoglobinemia in ruminants by promoting the enzymatic reduction of methemoglobin back to functional hemoglobin.",
        "a": True,
        "e": "True. At low doses, methylene blue is reduced by NADPH-methemoglobin reductase to leucomethylene blue, which non-enzymatically reduces Fe3+ methemoglobin back to Fe2+ hemoglobin.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    }
]

fib = [
    # --- u3-s1: Disorders of Carbohydrate & Lipid Metabolism (11 FIB) ---
    {
        "q": "Over 90% of diabetic dogs suffer from Type _____ diabetes mellitus, characterized by permanent destruction of pancreatic beta cells.",
        "a": ["1", "i", "one"],
        "a_display": "1 (Type 1)",
        "e": "Canine diabetes is overwhelmingly Type 1 (insulin-dependent) due to immune or degenerative loss of beta cells.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The three hallmark clinical signs of diabetes mellitus are polyuria, polydipsia, and _____.",
        "a": ["polyphagia"],
        "a_display": "Polyphagia",
        "e": "PU/PD/polyphagia along with weight loss constitute the classic clinical tetrad of canine and feline diabetes mellitus.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "In uncontrolled canine diabetes, excess glucose in the lens is converted into _____ by aldose reductase, causing diabetic cataracts.",
        "a": ["sorbitol"],
        "a_display": "Sorbitol",
        "e": "Sorbitol accumulation causes hyperosmotic lens swelling, rupture of lenticular fibers, and rapid bilateral cataract formation in dogs.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Serum _____ represents non-enzymatically glycated albumin and indicates average blood glucose control over the preceding 2 to 3 weeks.",
        "a": ["fructosamine"],
        "a_display": "Fructosamine",
        "e": "Fructosamine is the premier veterinary assay for evaluating therapeutic glycemic control in diabetic dogs and cats.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The predominant circulating ketone body evaluated in blood or milk to diagnose bovine ketosis is beta-_____.",
        "a": ["hydroxybutyrate", "hydroxybutyric acid", "bhb"],
        "a_display": "Hydroxybutyrate (Beta-hydroxybutyrate / BHB)",
        "e": "Beta-hydroxybutyrate comprises the overwhelming majority of circulating ketones in ruminants.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "The oral glucogenic precursor administered to dairy cows to treat ketosis is _____ glycol.",
        "a": ["propylene", "propylene glycol"],
        "a_display": "Propylene (Propylene glycol)",
        "e": "Propylene glycol is metabolized in the liver to pyruvate and oxaloacetate, promoting gluconeogenesis and clearing ketones.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Pregnancy toxaemia in ewes occurs during the last 2 to 4 weeks of gestation, especially in ewes carrying multiple _____.",
        "a": ["fetuses", "foetuses", "lambs", "twins"],
        "a_display": "Fetuses (Twins / Triplets)",
        "e": "Multiple fetuses demand huge amounts of maternal glucose, precipitating acute negative energy balance and ketosis in late pregnancy.",
        "topicId": "u3-t02", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Canine insulinoma is a functional neuroendocrine tumor of pancreatic _____ cells that hypersecretes insulin.",
        "a": ["beta", "beta-cells", "beta cells"],
        "a_display": "Beta (Beta cells)",
        "e": "Insulinoma causes autonomous, unsuppressed insulin release from neoplastic beta cells, driving blood glucose below 40 mg/dL.",
        "topicId": "u3-t03", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Canine hypothyroidism characteristically causes marked fasting hyper_____ in routine blood biochemistry.",
        "a": ["cholesterolemia", "cholesterol", "cholesterolaemia"],
        "a_display": "Cholesterolemia (Hypercholesterolemia)",
        "e": "Deficiency of thyroid hormone downregulates hepatic LDL receptors, elevating serum cholesterol in >75% of hypothyroid dogs.",
        "topicId": "u3-t06", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Benedict's qualitative reagent detects reducing sugars in urine by forming a colored precipitate of _____ oxide.",
        "a": ["cuprous", "cuprous oxide", "cu2o"],
        "a_display": "Cuprous (Cuprous oxide / Cu2O)",
        "e": "Reducing sugars reduce alkaline cupric ions (Cu2+) to a yellow-to-brick-red insoluble cuprous oxide (Cu2O) precipitate.",
        "topicId": "u3-t04", "subSection": "u3-s1", "diff": 1
    },
    {
        "q": "Feline diabetes mellitus is strongly linked to obesity, insulin resistance, and pancreatic islet amyloid deposition of the peptide _____.",
        "a": ["amylin", "islet amyloid polypeptide", "iapp"],
        "a_display": "Amylin (IAPP)",
        "e": "Islet amyloid polypeptide (amylin) co-secreted with insulin aggregates into toxic fibrils that destroy feline beta cells in Type 2 diabetes.",
        "topicId": "u3-t01", "subSection": "u3-s1", "diff": 2
    },

    # --- u3-s2: Clinical Enzymology & Organ Function Tests (12 FIB) ---
    {
        "q": "In dogs and cats, the premier liver-specific enzyme for detecting acute hepatocellular injury is alanine _____.",
        "a": ["aminotransferase", "transaminase", "alt"],
        "a_display": "Aminotransferase (ALT)",
        "e": "ALT is abundant in canine and feline hepatocyte cytoplasm, leaking rapidly into circulation following hepatocellular necrosis.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In cattle and horses, acute hepatocellular damage is evaluated using the liver-specific enzyme sorbitol _____.",
        "a": ["dehydrogenase", "sdh"],
        "a_display": "Dehydrogenase (Sorbitol dehydrogenase / SDH)",
        "e": "SDH is the preferred liver-specific leakage enzyme in large animals because large animal liver contains negligible ALT.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Corticosteroid-induced alkaline phosphatase (C-ALP) is a distinct isoenzyme found exclusively in the domestic _____.",
        "a": ["dog", "canine", "dogs"],
        "a_display": "Dog (Canine)",
        "e": "Only dogs possess the unique C-ALP gene, which is markedly induced in canine Cushing's syndrome or during steroid therapy.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "The biliary enzyme whose activity is exceptionally high in maternal colostrum and is used to assess passive transfer of immunity in calves is gamma-glutamyl _____.",
        "a": ["transferase", "transpeptidase", "ggt"],
        "a_display": "Transferase (GGT)",
        "e": "Serum GGT surges in colostrum-fed calves, providing a definitive biochemical check for adequate passive immunoglobulin transfer.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Creatine kinase (CK) is the most sensitive and specific serum enzyme marker for injury to skeletal and _____ muscle.",
        "a": ["cardiac", "heart"],
        "a_display": "Cardiac (Cardiac muscle)",
        "e": "CK is concentrated in skeletal and cardiac myocytes, rising within hours of muscle injury, myositis, or recumbency.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Acute pancreatitis in dogs is diagnosed by marked increases in the serum activity of amylase and _____.",
        "a": ["lipase"],
        "a_display": "Lipase",
        "e": "Pancreatic acinar cell breakdown releases amylase and lipase into the circulation, producing diagnostic multi-fold elevations.",
        "topicId": "u3-t07", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Primary renal azotemia (elevated BUN and creatinine) appears only after at least _____ percent of functional nephrons are destroyed.",
        "a": ["75", "75%"],
        "a_display": "75%",
        "e": "Renal functional reserve prevents azotemia until over 75% of the total nephron population has been irreversibly lost.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Urine with a fixed specific gravity between 1.008 and 1.012 that equals plasma osmolality is termed _____.",
        "a": ["isosthenuria", "isosthenuric"],
        "a_display": "Isosthenuria",
        "e": "Isosthenuria signifies that the renal tubules can neither concentrate nor dilute the glomerular filtrate.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "In birds and reptiles, the definitive nitrogenous analyte used to assess renal function and diagnose gout is _____ acid.",
        "a": ["uric", "uric acid"],
        "a_display": "Uric (Uric acid)",
        "e": "Uricotelic avian and reptilian kidneys excrete uric acid; elevated levels reflect severe tubular dysfunction or articular/visceral gout.",
        "topicId": "u3-t10", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Serum bilirubin that has been conjugated with glucuronic acid in the liver and is water-soluble is clinically called _____ bilirubin.",
        "a": ["direct", "conjugated"],
        "a_display": "Direct (Conjugated)",
        "e": "Direct (conjugated) bilirubin reacts rapidly in the van den Bergh diazo reaction without the addition of alcohol.",
        "topicId": "u3-t08", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "Serum albumin is synthesized exclusively by parenchymal cells of the _____.",
        "a": ["liver", "hepatocytes"],
        "a_display": "Liver (Hepatocytes)",
        "e": "Hepatocytes are the sole source of albumin; hepatic cirrhosis results in progressive hypoalbuminemia and ascites.",
        "topicId": "u3-t05", "subSection": "u3-s2", "diff": 1
    },
    {
        "q": "The early renal biomarker that detects kidney disease at 25% to 40% loss of GFR is symmetric dimethyl_____ (SDMA).",
        "a": ["arginine", "sdma"],
        "a_display": "Arginine (SDMA)",
        "e": "SDMA is an early, muscle-mass-independent biomarker that detects renal functional decline far earlier than creatinine.",
        "topicId": "u3-t09", "subSection": "u3-s2", "diff": 2
    },

    # --- u3-s3: Acid-Base, Digestive & Fluid Balance (11 FIB) ---
    {
        "q": "Metabolic acidosis is clinically defined by a primary deficit in plasma _____ concentration.",
        "a": ["bicarbonate", "hco3", "hco3-"],
        "a_display": "Bicarbonate (HCO3-)",
        "e": "Metabolic acidosis represents a primary loss of bicarbonate or accumulation of non-volatile fixed acids that consume bicarbonate.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The difference between measured cations and measured anions is termed the anion _____.",
        "a": ["gap", "anion gap"],
        "a_display": "Gap (Anion gap)",
        "e": "Anion Gap = ([Na+] + [K+]) - ([Cl-] + [HCO3-]), identifying unmeasured organic acid anions in metabolic acidosis.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Abomasal displacement in dairy cattle characteristically results in hypochloremic, hypokalemic metabolic _____.",
        "a": ["alkalosis"],
        "a_display": "Alkalosis (Metabolic alkalosis)",
        "e": "Abomasal sequestration of hydrochloric acid removes H+ and Cl- from the circulation, generating hypochloremic metabolic alkalosis.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The paradoxical excretion of acidic urine by cattle suffering from metabolic alkalosis is termed paradoxical _____.",
        "a": ["aciduria"],
        "a_display": "Aciduria (Paradoxical aciduria)",
        "e": "In hypovolemic, hypokalemic, hypochloremic alkalosis, renal tubules excrete H+ to conserve Na+, acidifying the urine.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },
    {
        "q": "During grain overload in cattle, the rumen bacterium that explodes in number to produce massive lactic acid is Streptococcus _____.",
        "a": ["bovis", "streptococcus bovis"],
        "a_display": "Bovis (Streptococcus bovis)",
        "e": "Streptococcus bovis rapidly ferments starches to lactic acid, dropping ruminal pH below 5.0.",
        "topicId": "u3-t12", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The antioxidant enzyme that dismutates superoxide radicals into hydrogen peroxide and oxygen is superoxide _____.",
        "a": ["dismutase", "sod"],
        "a_display": "Dismutase (SOD)",
        "e": "Superoxide dismutase converts highly reactive superoxide radicals (O2.-) into hydrogen peroxide and molecular oxygen.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "The essential trace mineral required at the catalytic active site of Glutathione Peroxidase is _____.",
        "a": ["selenium", "se"],
        "a_display": "Selenium",
        "e": "Glutathione peroxidase is a selenoprotein that reduces hydroperoxides to water and harmless alcohols.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "White Muscle Disease in calves and lambs is caused by nutritional deficiency of Vitamin E and the trace element _____.",
        "a": ["selenium", "se"],
        "a_display": "Selenium",
        "e": "Combined selenium and vitamin E deficiency impairs antioxidant defenses, causing free-radical destruction of cardiac and skeletal muscle.",
        "topicId": "u3-t13", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Lactated Ringer's Solution contains sodium _____ which is metabolized in the liver to generate bicarbonate.",
        "a": ["lactate"],
        "a_display": "Lactate (Sodium lactate)",
        "e": "Hepatic conversion of lactate to bicarbonate gives LRS its beneficial alkalinizing property in metabolic acidosis.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "Resuscitation of hypovolemic shock using small volumes (4-5 mL/kg) is accomplished using 7.2% _____ saline.",
        "a": ["hypertonic", "hypertonic saline"],
        "a_display": "Hypertonic (Hypertonic saline)",
        "e": "7.2% NaCl pulls fluid osmotically from the interstitial and intracellular spaces into blood vessels, rapidly restoring cardiac output.",
        "topicId": "u3-t14", "subSection": "u3-s3", "diff": 1
    },
    {
        "q": "In antifreeze toxicity, the toxic metabolite of ethylene glycol that forms insoluble crystals in renal tubules is _____ acid.",
        "a": ["oxalic", "oxalate", "oxalic acid"],
        "a_display": "Oxalic (Oxalic acid / Oxalate)",
        "e": "Oxalic acid complexes with calcium to form calcium oxalate monohydrate crystals that destroy renal tubular cells.",
        "topicId": "u3-t11", "subSection": "u3-s3", "diff": 2
    },

    # --- u3-s4: Detoxification & Cytochrome P450 (11 FIB) ---
    {
        "q": "Phase I biotransformation reactions consist of oxidation, reduction, and _____.",
        "a": ["hydrolysis"],
        "a_display": "Hydrolysis",
        "e": "Phase I functionalization introduces or exposes polar groups via oxidation, reduction, or hydrolysis.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The Cytochrome P450 monooxygenase enzymes of the liver are located primarily in the smooth endoplasmic _____.",
        "a": ["reticulum", "ser"],
        "a_display": "Reticulum (Smooth Endoplasmic Reticulum)",
        "e": "Microsomal Cytochrome P450 enzymes are integral membrane proteins of the smooth endoplasmic reticulum.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Cytochrome P450 is named for its characteristic absorbance peak at 450 nm when its reduced form binds to carbon _____.",
        "a": ["monoxide", "co"],
        "a_display": "Monoxide (Carbon monoxide / CO)",
        "e": "The Fe2+-CO coordination complex of cytochrome P450 displays an intense optical absorption maximum at 450 nm.",
        "topicId": "u3-t16", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Domestic cats are highly susceptible to paracetamol poisoning because they are genetically deficient in the Phase II enzyme UDP-_____.",
        "a": ["glucuronosyltransferase", "glucuronyltransferase", "ugt"],
        "a_display": "Glucuronosyltransferase (UGT)",
        "e": "Cats have pseudogenized UGT genes, severely impairing glucuronidation and diverting drugs to toxic oxidative pathways.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The specific antidote administered to treat feline and canine paracetamol poisoning by replenishing glutathione is N-acetyl_____.",
        "a": ["cysteine", "nac"],
        "a_display": "Cysteine (N-acetylcysteine / NAC)",
        "e": "N-acetylcysteine provides cysteine to synthesize glutathione, which conjugates and neutralizes toxic NAPQI.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Domestic dogs are genetically deficient in Phase II N-_____ reactions, making them sensitive to sulfonamide drug toxicity.",
        "a": ["acetylation", "acetyltransferase"],
        "a_display": "Acetylation (N-acetylation)",
        "e": "Dogs lack functional N-acetyltransferase (NAT) genes, preventing acetylation of aromatic amines like sulfonamides.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The active sulfate donor molecule used in Phase II sulfation reactions is _____.",
        "a": ["paps", "3'-phosphoadenosine-5'-phosphosulfate"],
        "a_display": "PAPS (3'-Phosphoadenosine-5'-phosphosulfate)",
        "e": "PAPS is the high-energy sulfate carrier used by sulfotransferases to conjugate phenolic xenobiotics.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "The end-product metabolites excreted in urine following glutathione conjugation of electrophilic drugs are _____ acids.",
        "a": ["mercapturic", "mercapturic acids"],
        "a_display": "Mercapturic (Mercapturic acids)",
        "e": "Glutathione conjugates are processed to cysteine conjugates and N-acetylated to form water-soluble mercapturic acids.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 2
    },
    {
        "q": "Benzoic acid is detoxified in mammals by conjugation with the amino acid _____ to form hippuric acid.",
        "a": ["glycine"],
        "a_display": "Glycine",
        "e": "Mitochondrial glycine N-acyltransferase conjugates benzoyl-CoA with glycine to produce hippuric acid.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "Organophosphate insecticides cause toxicity by irreversibly inhibiting the enzyme acetylcholine_____.",
        "a": ["esterase", "ache"],
        "a_display": "Esterase (Acetylcholinesterase)",
        "e": "Organophosphates phosphorylate the active serine of acetylcholinesterase, producing cholinergic hyperstimulation.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    },
    {
        "q": "The specific chemical antidote used to reduce ferric methemoglobin back to ferrous hemoglobin in nitrate-poisoned cattle is _____ blue.",
        "a": ["methylene", "methylene blue"],
        "a_display": "Methylene (Methylene blue)",
        "e": "Methylene blue is reduced to leucomethylene blue, which non-enzymatically reduces toxic methemoglobin back to hemoglobin.",
        "topicId": "u3-t15", "subSection": "u3-s4", "diff": 1
    }
]

if __name__ == "__main__":
    print(f"Unit 3 Loaded: {len(mcq)} MCQ, {len(tf)} TF, {len(fib)} FIB. Total = {len(mcq) + len(tf) + len(fib)}")
