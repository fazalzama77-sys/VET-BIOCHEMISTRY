/* ============================================================
   data-sims-unit3.js — Theory Unit 3 Interactive Labs (16 topics)
   Veterinary Analytical & Clinical Biochemistry (u3-t01..t16)
   ============================================================ */
(function () {
  var S = window.topicSims = window.topicSims || {};

  S["u3-t01"] = [
    {
      engine: "clinical",
      title: "Diabetes Mellitus & Blood Glucose Hormonal Profile (Dog vs Cat)",
      subtitle: "Compare Normal, Canine Type I (Insulin-Deficient), Feline Type II (Insulin-Resistant), and Diabetic Ketoacidosis (DKA) biochemical panels.",
      cases: [
        {
          id: "normal", label: "Healthy Dog / Cat",
          banner: "Normal Glucose Homeostasis (Insulin ⇌ Glucagon Balance)",
          bars: [
            { label: "Fasting Glucose", val: 92, max: 500, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "Serum Fructosamine", val: 260, max: 700, refMin: 200, refMax: 350, unit: "µmol/L" },
            { label: "Serum BHBA (Ketones)", val: 0.2, max: 6, refMin: 0, refMax: 0.6, unit: "mmol/L" },
            { label: "Serum Insulin", val: 18, max: 60, refMin: 10, refMax: 30, unit: "µU/mL" }
          ],
          info: "Blood glucose stays below renal threshold (~180 mg/dL in dogs, ~280 mg/dL in cats), so urine is negative for glucose and ketones.",
          metrics: [
            { label: "Canine Renal Thresh.", val: "~180 mg/dL", cls: "is-info" },
            { label: "Feline Renal Thresh.", val: "~280 mg/dL", cls: "is-info" },
            { label: "Glucosuria", val: "Negative (-)", cls: "is-ok" },
            { label: "Fructosamine Window", val: "2–3 Weeks", cls: "is-ok" }
          ]
        },
        {
          id: "t1", label: "Canine Type I DM",
          banner: "Absolute β-Cell Insulin Deficiency → Persistent Hyperglycaemia & Glucosuria",
          bars: [
            { label: "Fasting Glucose", val: 380, max: 500, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "Serum Fructosamine", val: 560, max: 700, refMin: 200, refMax: 350, unit: "µmol/L" },
            { label: "Serum BHBA (Ketones)", val: 0.9, max: 6, refMin: 0, refMax: 0.6, unit: "mmol/L" },
            { label: "Serum Insulin", val: 2, max: 60, refMin: 10, refMax: 30, unit: "µU/mL" }
          ],
          info: "Glucose exceeds renal tubular Tm → osmotic diuresis (PU/PD), polyphagia with weight loss, and sorbitol accumulation in lens (diabetic cataracts in dogs!).",
          metrics: [
            { label: "Pathogenesis", val: "β-Cell Destruction", cls: "is-danger" },
            { label: "Classic Triad", val: "PU / PD / Weight Loss", cls: "is-warn" },
            { label: "Lens Complication", val: "Aldose Reductase Cataract", cls: "is-danger" },
            { label: "Therapy", val: "Exogenous Insulin", cls: "is-ok" }
          ]
        },
        {
          id: "dka", label: "Diabetic Ketoacidosis (DKA)",
          banner: "Emergency! Unchecked Lipolysis → Ketonaemia + High-Anion-Gap Metabolic Acidosis",
          bars: [
            { label: "Fasting Glucose", val: 470, max: 500, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "Serum Fructosamine", val: 640, max: 700, refMin: 200, refMax: 350, unit: "µmol/L" },
            { label: "Serum BHBA (Ketones)", val: 5.4, max: 6, refMin: 0, refMax: 0.6, unit: "mmol/L" },
            { label: "Serum Insulin", val: 1, max: 60, refMin: 10, refMax: 30, unit: "µU/mL" }
          ],
          info: "Lack of insulin + high glucagon/cortisol unleashes HSL lipolysis → massive hepatic ketogenesis (Acetoacetate & β-OHB) → severe metabolic acidosis (pH < 7.2) & hypokalaemia!",
          metrics: [
            { label: "Acid-Base", val: "High Anion Gap Met. Acidosis", cls: "is-danger" },
            { label: "Urine Ketones", val: "+++ Positive", cls: "is-danger" },
            { label: "Electrolyte Risk", val: "Hypokalaemia (Monitor K⁺)", cls: "is-warn" },
            { label: "Emergency Tx", val: "IV Fluids + Regular Insulin", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t02"] = [
    {
      engine: "clinical",
      title: "Bovine Ketosis & Ovine Pregnancy Toxaemia Diagnostic Panel",
      subtitle: "Compare healthy dairy cow/ewe vs Subclinical Ketosis, Clinical Bovine Ketosis, and Twin-Lamb Pregnancy Toxaemia.",
      cases: [
        {
          id: "normal", label: "Healthy Cow / Ewe",
          banner: "Balanced Rumen Propionate → Normal Blood Glucose & Low BHBA",
          bars: [
            { label: "Blood Glucose", val: 62, max: 100, refMin: 45, refMax: 75, unit: "mg/dL" },
            { label: "Serum BHBA", val: 0.5, max: 6, refMin: 0, refMax: 1.0, unit: "mmol/L" },
            { label: "Plasma NEFA", val: 0.25, max: 2.0, refMin: 0, refMax: 0.4, unit: "mEq/L" },
            { label: "Liver TAG %", val: 3, max: 25, refMin: 0, refMax: 5, unit: "% wet" }
          ],
          info: "Adequate propionate maintains hepatic oxaloacetate (OAA), keeping Acetyl-CoA entering the TCA cycle rather than spilling into ketogenesis.",
          metrics: [
            { label: "BHBA Cut-Off", val: "< 1.0 mmol/L Normal", cls: "is-ok" },
            { label: "Rothera's Test", val: "Negative (-)", cls: "is-ok" },
            { label: "Energy Balance", val: "Positive", cls: "is-ok" },
            { label: "Milk Yield", val: "Optimal", cls: "is-info" }
          ]
        },
        {
          id: "ketosis", label: "Clinical Bovine Ketosis",
          banner: "Early Lactation (2–6 wks Postpartum) — Hypoglycaemia + Hyperketonaemia",
          bars: [
            { label: "Blood Glucose", val: 28, max: 100, refMin: 45, refMax: 75, unit: "mg/dL" },
            { label: "Serum BHBA", val: 3.8, max: 6, refMin: 0, refMax: 1.0, unit: "mmol/L" },
            { label: "Plasma NEFA", val: 1.4, max: 2.0, refMin: 0, refMax: 0.4, unit: "mEq/L" },
            { label: "Liver TAG %", val: 14, max: 25, refMin: 0, refMax: 5, unit: "% wet" }
          ],
          info: "High mammary lactose demand drains hepatic OAA → hypoglycaemia (<35 mg/dL), BHBA > 3.0 mmol/L, Rothera's purple ring positive in milk/urine, sweet acetone breath!",
          metrics: [
            { label: "Subclinical BHBA", val: "1.2 – 2.9 mmol/L", cls: "is-warn" },
            { label: "Clinical BHBA", val: "> 3.0 mmol/L", cls: "is-danger" },
            { label: "Rothera's Test", val: "Permanganate Purple Ring", cls: "is-danger" },
            { label: "Treatment", val: "50% Dextrose IV + Prop. Glycol", cls: "is-ok" }
          ]
        },
        {
          id: "pregtox", label: "Ovine Pregnancy Toxaemia",
          banner: "Late-Gestation Twin/Triplet Ewe — Severe Foetal Glucose Drain & Hepatic Lipidosis",
          bars: [
            { label: "Blood Glucose", val: 20, max: 100, refMin: 45, refMax: 75, unit: "mg/dL" },
            { label: "Serum BHBA", val: 5.2, max: 6, refMin: 0, refMax: 1.0, unit: "mmol/L" },
            { label: "Plasma NEFA", val: 1.85, max: 2.0, refMin: 0, refMax: 0.4, unit: "mEq/L" },
            { label: "Liver TAG %", val: 22, max: 25, refMin: 0, refMax: 5, unit: "% wet" }
          ],
          info: "Last 4–6 weeks of twin pregnancy: foetal glucose demand skyrockets while gravid uterus compresses rumen volume → severe hypoglycaemic encephalopathy (blindness, star-gazing, recumbency).",
          metrics: [
            { label: "Timing", val: "Last 4–6 wks Gestation", cls: "is-danger" },
            { label: "CNS Signs", val: "Neuroglycopenia", cls: "is-danger" },
            { label: "Liver", val: "Severe Fatty Liver", cls: "is-danger" },
            { label: "Prognosis", val: "Guarded if Recumbent", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u3-t03"] = [
    {
      engine: "clinical",
      title: "Baby Pig Hypoglycaemia & Canine Insulinoma Analyzer",
      subtitle: "Contrast glycogen-depleted neonatal piglets (<48 hr) vs autonomous pancreatic β-cell insulinoma in middle-aged dogs.",
      cases: [
        {
          id: "piglet", label: "Neonatal Piglet Hypoglycaemia",
          banner: "Newborn Piglet (<48 hr) — Low Liver Glycogen + Immature Gluconeogenesis + Cold Stress",
          bars: [
            { label: "Blood Glucose", val: 24, max: 120, refMin: 65, refMax: 110, unit: "mg/dL" },
            { label: "Liver Glycogen", val: 5, max: 100, refMin: 40, refMax: 90, unit: "% store" },
            { label: "Serum Insulin", val: 3, max: 80, refMin: 5, refMax: 25, unit: "µU/mL" },
            { label: "Body Temp", val: 35, max: 40, refMin: 38.5, refMax: 39.5, unit: "°C" }
          ],
          info: "Piglets are born with virtually no brown adipose tissue and limited hepatic PEPCK/gluconeogenesis. Failure to nurse + chilling exhausts liver glycogen within 24–36 hours → coma/seizures!",
          metrics: [
            { label: "Critical Glucose", val: "< 40 mg/dL", cls: "is-danger" },
            { label: "Key Defect", val: "Low PEPCK & No BAT", cls: "is-warn" },
            { label: "Emergency Tx", val: "5–10% Dextrose IP + Warmth", cls: "is-ok" },
            { label: "Prevention", val: "Colostrum + Heat Lamp", cls: "is-ok" }
          ]
        },
        {
          id: "insulinoma", label: "Canine Insulinoma",
          banner: "β-Cell Tumor: Autonomous Hyperinsulinaemia Despite Profound Hypoglycaemia!",
          bars: [
            { label: "Blood Glucose", val: 34, max: 120, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "Liver Glycogen", val: 85, max: 100, refMin: 40, refMax: 90, unit: "% store" },
            { label: "Serum Insulin", val: 68, max: 80, refMin: 5, refMax: 25, unit: "µU/mL" },
            { label: "Body Temp", val: 38.5, max: 40, refMin: 38, refMax: 39.2, unit: "°C" }
          ],
          info: "Normally insulin shuts off when glucose < 60 mg/dL. In canine insulinoma, paired blood glucose < 60 mg/dL with inappropriately high insulin (>20 µU/mL) satisfies Whipple's Triad!",
          metrics: [
            { label: "Whipple's Triad", val: "Hypoglc + Neuro + Relief", cls: "is-danger" },
            { label: "Insulin:Glucose", val: "Markedly Elevated", cls: "is-danger" },
            { label: "Liver Glycogen", val: "Locked (High Insulin)", cls: "is-warn" },
            { label: "Treatment", val: "Small Frequent Meals / Surgery", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t04"] = [
    {
      engine: "clinical",
      title: "Carbohydrate Tolerance Tests (OGTT / IVGTT) & Glycated Proteins",
      subtitle: "Compare Normal, Stress Hyperglycaemia (Cats!), and Diabetic Glucose Tolerance & Fructosamine profiles.",
      cases: [
        {
          id: "normal", label: "Normal OGTT",
          banner: "Glucose Peaks at 30–60 min (<160 mg/dL) and Returns to Baseline by 2 Hours",
          bars: [
            { label: "0 min (Fasting)", val: 88, max: 400, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "60 min (Peak)", val: 148, max: 400, refMin: 110, refMax: 170, unit: "mg/dL" },
            { label: "120 min (Return)", val: 94, max: 400, refMin: 70, refMax: 120, unit: "mg/dL" },
            { label: "Fructosamine", val: 250, max: 650, refMin: 200, refMax: 350, unit: "µmol/L" }
          ],
          info: "Prompt insulin release clears absorbed glucose within 2 hours.",
          metrics: [
            { label: "2-hr Clearance", val: "Complete (<120 mg/dL)", cls: "is-ok" },
            { label: "Fructosamine", val: "Normal (2–3 wk avg)", cls: "is-ok" },
            { label: "HbA1c Window", val: "2–3 Months (RBC life)", cls: "is-info" },
            { label: "Tube Preservative", val: "NaF + K-Oxalate", cls: "is-info" }
          ]
        },
        {
          id: "stress", label: "Feline Stress Hyperglycaemia",
          banner: "Acute Epinephrine Surge: High Spot Glucose, NORMAL Fructosamine!",
          bars: [
            { label: "0 min (Clinic)", val: 295, max: 400, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "60 min", val: 210, max: 400, refMin: 110, refMax: 170, unit: "mg/dL" },
            { label: "120 min (Calm)", val: 125, max: 400, refMin: 70, refMax: 120, unit: "mg/dL" },
            { label: "Fructosamine", val: 280, max: 650, refMin: 200, refMax: 350, unit: "µmol/L" }
          ],
          info: "Frightened cats can hit 300+ mg/dL acutely from catecholamine glycogenolysis! Serum Fructosamine (glycated albumin, reflecting 2–3 weeks) stays NORMAL, differentiating stress from true Diabetes Mellitus.",
          metrics: [
            { label: "Spot Glucose", val: "Transiently High", cls: "is-warn" },
            { label: "Fructosamine", val: "NORMAL (Key Differentiator!)", cls: "is-ok" },
            { label: "Mechanism", val: "Epinephrine Glycogenolysis", cls: "is-info" },
            { label: "Diagnosis", val: "NOT Diabetes Mellitus", cls: "is-ok" }
          ]
        },
        {
          id: "dm", label: "Diabetic Curve",
          banner: "Fasting Hyperglycaemia, Delayed High Peak (>350), Elevated Fructosamine",
          bars: [
            { label: "0 min (Fasting)", val: 240, max: 400, refMin: 70, refMax: 115, unit: "mg/dL" },
            { label: "60 min (Peak)", val: 385, max: 400, refMin: 110, refMax: 170, unit: "mg/dL" },
            { label: "120 min (Persist)", val: 340, max: 400, refMin: 70, refMax: 120, unit: "mg/dL" },
            { label: "Fructosamine", val: 580, max: 650, refMin: 200, refMax: 350, unit: "µmol/L" }
          ],
          info: "Persistent elevation at 2 hours + elevated Fructosamine (>400 µmol/L) confirms chronic hyperglycaemia.",
          metrics: [
            { label: "2-hr Glucose", val: "> 300 mg/dL", cls: "is-danger" },
            { label: "Fructosamine", val: "Elevated (> 400 µmol/L)", cls: "is-danger" },
            { label: "Sample Error", val: "RBC Glycolysis (-7%/hr)", cls: "is-warn" },
            { label: "Prevent Error", val: "Sodium Fluoride (NaF)", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u3-t05"] = [
    {
      engine: "clinical",
      visual: "electrophoresis",
      title: "Serum Protein Electrophoresis (SPE) Densitometer & Acute-Phase Lab",
      subtitle: "Compare live SPE traces for Normal, Acute-Phase Inflammation, Nephrotic Syndrome, Hepatic Cirrhosis, Multiple Myeloma, and Calf FPT.",
      cases: [
        {
          id: "normal", label: "Normal SPE", peaks: [56, 6, 10, 12, 16],
          info: "Albumin migrates fastest toward the Anode (+) due to highest negative charge & smallest MW (69 kDa). Normal A:G ratio ≈ 0.8–1.5 depending on species.",
          metrics: [
            { label: "Albumin", val: "52–58% (Tallest)", cls: "is-ok" },
            { label: "A:G Ratio", val: "~1.15 (Normal)", cls: "is-ok" },
            { label: "Major APPs", val: "CRP (Dog), SAA (Cat/Horse)", cls: "is-info" },
            { label: "Bovine APP", val: "Haptoglobin & SAA", cls: "is-info" }
          ]
        },
        {
          id: "acute", label: "Acute-Phase Inflammation", peaks: [40, 12, 26, 15, 18],
          info: "IL-6 triggers hepatic synthesis of Positive Acute-Phase Proteins (α₂-haptoglobin, α₁-acid glycoprotein, CRP, fibrinogen) while Albumin drops (Negative APP)!",
          metrics: [
            { label: "Albumin (Neg. APP)", val: "Decreased ↓", cls: "is-warn" },
            { label: "α₂-Globulin Peak", val: "Markedly Elevated ↑", cls: "is-danger" },
            { label: "A:G Ratio", val: "0.58 (Decreased)", cls: "is-warn" },
            { label: "Cytokine Trigger", val: "IL-6 / IL-1 / TNF-α", cls: "is-info" }
          ]
        },
        {
          id: "nephrotic", label: "Nephrotic Syndrome", peaks: [22, 8, 34, 16, 10],
          info: "Glomerular damage leaks low-MW Albumin into urine; liver compensates by overproducing large α₂-macroglobulin & β-lipoproteins (hypercholesterolaemia + oedema).",
          metrics: [
            { label: "Albumin", val: "Severely Low ↓ (Oedema)", cls: "is-danger" },
            { label: "α₂-Macroglobulin", val: "Huge Compensatory Peak ↑", cls: "is-danger" },
            { label: "Urine Protein", val: "Heavy Proteinuria", cls: "is-danger" },
            { label: "A:G Ratio", val: "0.32 (Very Low)", cls: "is-danger" }
          ]
        },
        {
          id: "myeloma", label: "Multiple Myeloma (M-Spike)", peaks: [44, 5, 9, 10, 58],
          info: "Neoplastic plasma-cell clone secretes a single homogeneous immunoglobulin → tall, narrow 'church-spire' Monoclonal Gammopathy (M-spike) in the γ-region!",
          metrics: [
            { label: "γ-Region", val: "Tall Narrow M-Spike!", cls: "is-danger" },
            { label: "Bence-Jones", val: "Urine Light Chains", cls: "is-warn" },
            { label: "A:G Ratio", val: "0.48 (Reversed)", cls: "is-danger" },
            { label: "Hyperviscosity", val: "High Risk", cls: "is-danger" }
          ]
        },
        {
          id: "fpt", label: "Calf Colostrum Failure (FPT)", peaks: [52, 6, 9, 11, 2],
          info: "Ruminant syndesmochorial placenta blocks maternal IgG transfer. Newborn calves deprived of colostrum show an almost flat γ-globulin region (Agammaglobulinaemia) → lethal septicaemia!",
          metrics: [
            { label: "γ-Globulin Peak", val: "ABSENT / Flat!", cls: "is-danger" },
            { label: "Serum IgG", val: "< 1000 mg/dL (FPT)", cls: "is-danger" },
            { label: "A:G Ratio", val: "2.1 (High due to ↓ G)", cls: "is-warn" },
            { label: "Prevention", val: "Colostrum < 6 hr of Birth", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t06"] = [
    {
      engine: "clinical",
      title: "Veterinary Clinical Lipid Profile Analyzer",
      subtitle: "Evaluate Cholesterol, Triglycerides, and NEFA in Canine Hypothyroidism, Equine Hyperlipaemia, and Acute Pancreatitis.",
      cases: [
        {
          id: "normal", label: "Normal Canine",
          banner: "Clear Non-Lipaemic Fasting Serum",
          bars: [
            { label: "Total Cholesterol", val: 185, max: 600, refMin: 130, refMax: 270, unit: "mg/dL" },
            { label: "Triglycerides", val: 75, max: 900, refMin: 30, refMax: 150, unit: "mg/dL" },
            { label: "HDL Fraction", val: 72, max: 100, refMin: 60, refMax: 85, unit: "%" }
          ],
          info: "Dogs and cats are 'HDL mammals' (70–80% cholesterol in HDL), making them naturally resistant to human-style atherosclerosis unless severely hypothyroid.",
          metrics: [
            { label: "Serum Appearance", val: "Clear Straw", cls: "is-ok" },
            { label: "Dominant Fraction", val: "HDL (α-Lipoprotein)", cls: "is-info" },
            { label: "Fasting Window", val: "12 Hours", cls: "is-ok" },
            { label: "Atherosclerosis", val: "Rare (Normal)", cls: "is-ok" }
          ]
        },
        {
          id: "hypothyroid", label: "Canine Hypothyroidism",
          banner: "Reduced Hepatic LDL-Receptor Clearance → Marked Hypercholesterolaemia",
          bars: [
            { label: "Total Cholesterol", val: 520, max: 600, refMin: 130, refMax: 270, unit: "mg/dL" },
            { label: "Triglycerides", val: 240, max: 900, refMin: 30, refMax: 150, unit: "mg/dL" },
            { label: "HDL Fraction", val: 55, max: 100, refMin: 60, refMax: 85, unit: "%" }
          ],
          info: "Thyroid hormone (T3) upregulates hepatic LDL receptors and cholesterol 7α-hydroxylase. Hypothyroidism slows cholesterol clearance → ~75% of hypothyroid dogs have high cholesterol!",
          metrics: [
            { label: "Key Marker", val: "Cholesterol > 450 mg/dL", cls: "is-danger" },
            { label: "Mechanism", val: "↓ Hepatic LDL Clearance", cls: "is-warn" },
            { label: "Confirm With", val: "Low Free T4 + High TSH", cls: "is-info" },
            { label: "Risk", val: "Atherosclerosis Possible", cls: "is-warn" }
          ]
        },
        {
          id: "pony", label: "Equine Pony Hyperlipaemia",
          banner: "Milky-White Lipaemic Serum (TAG > 500 mg/dL) — Life-Threatening!",
          bars: [
            { label: "Total Cholesterol", val: 290, max: 600, refMin: 75, refMax: 150, unit: "mg/dL" },
            { label: "Triglycerides", val: 840, max: 900, refMin: 15, refMax: 80, unit: "mg/dL" },
            { label: "HDL Fraction", val: 20, max: 100, refMin: 55, refMax: 80, unit: "%" }
          ],
          info: "Obese, pregnant/lactating ponies or donkeys under anorexia/stress mobilize massive NEFAs → liver overproduces VLDL faster than LPL clears it → opaque milky serum & hepatic lipidosis!",
          metrics: [
            { label: "Serum Appearance", val: "Opaque Milky White!", cls: "is-danger" },
            { label: "Triglycerides", val: "> 500 mg/dL (Critical)", cls: "is-danger" },
            { label: "At-Risk Species", val: "Ponies, Donkeys, Mini Horses", cls: "is-warn" },
            { label: "Treatment", val: "Glucose + Insulin + Nutrition", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t07"] = [
    {
      engine: "clinical",
      title: "Species-Specific Clinical Enzymology & Organ-Leakage Comparator",
      subtitle: "See why ALT is liver-specific in Dogs/Cats, whereas Cattle/Horses require SDH, GLDH, and GGT for liver diagnosis!",
      cases: [
        {
          id: "dog_liver", label: "Dog: Acute Hepatitis",
          banner: "Canine Hepatocellular Necrosis — Massive Cytosolic ALT Surge",
          bars: [
            { label: "ALT (Liver-Dog)", val: 680, max: 800, refMin: 10, refMax: 100, unit: "U/L" },
            { label: "AST (Liver+Muscle)", val: 240, max: 800, refMin: 15, refMax: 65, unit: "U/L" },
            { label: "ALP (Cholestasis)", val: 220, max: 800, refMin: 20, refMax: 150, unit: "U/L" },
            { label: "CK (Muscle Only)", val: 95, max: 800, refMin: 20, refMax: 200, unit: "U/L" }
          ],
          info: "In dogs and cats, ALT is abundant in hepatocyte cytosol and is the gold-standard hepatocellular leakage marker. Normal CK rules out skeletal muscle as the source of AST.",
          metrics: [
            { label: "Dog/Cat Liver Marker", val: "ALT (Gold Standard)", cls: "is-ok" },
            { label: "Normal CK", val: "Rules Out Muscle Injury", cls: "is-ok" },
            { label: "Cholestasis", val: "ALP & GGT (Induced)", cls: "is-info" },
            { label: "Cushing's / Steroids", val: "Induces Canine ALP!", cls: "is-warn" }
          ]
        },
        {
          id: "cow_liver", label: "Cattle / Horse: Liver Injury",
          banner: "Large Animals Have LOW Hepatic ALT — Use SDH, GLDH & GGT Instead!",
          bars: [
            { label: "ALT (Useless in Cow!)", val: 38, max: 800, refMin: 10, refMax: 45, unit: "U/L" },
            { label: "SDH / GLDH (Liver)", val: 540, max: 800, refMin: 5, refMax: 35, unit: "U/L" },
            { label: "GGT (Biliary/Liver)", val: 320, max: 800, refMin: 10, refMax: 40, unit: "U/L" },
            { label: "AST (Liver+Muscle)", val: 480, max: 800, refMin: 50, refMax: 150, unit: "U/L" }
          ],
          info: "EXAM FAVORITE: Cattle, sheep, goats, horses, and pigs have very low hepatic ALT activity! Always measure SDH (Sorbitol DH), GLDH (mitochondrial), and GGT (biliary/fascioliasis/sporidesmin).",
          metrics: [
            { label: "ALT in Ruminants", val: "NOT Liver-Specific!", cls: "is-danger" },
            { label: "Best Leakage Markers", val: "SDH & GLDH", cls: "is-ok" },
            { label: "Best Biliary Marker", val: "GGT (Fasciola / Toxic)", cls: "is-ok" },
            { label: "Always Pair AST With", val: "CK (to exclude muscle)", cls: "is-info" }
          ]
        }
      ]
    }
  ];

  S["u3-t08"] = [
    {
      engine: "clinical",
      title: "Liver Function Tests & Differential Diagnosis of Jaundice (Icterus)",
      subtitle: "Differentiate Pre-Hepatic (Hemolytic), Hepatic (Parenchymal), and Post-Hepatic (Obstructive) Jaundice via Van den Bergh & Urine tests.",
      cases: [
        {
          id: "pre", label: "Pre-Hepatic (Hemolytic)",
          banner: "Babesiosis / IMHA — Excess Unconjugated (Indirect) Bilirubin Overwhelms Liver",
          bars: [
            { label: "Indirect (Unconj.) Bil", val: 7.2, max: 12, refMin: 0, refMax: 0.4, unit: "mg/dL" },
            { label: "Direct (Conj.) Bil", val: 0.5, max: 12, refMin: 0, refMax: 0.3, unit: "mg/dL" },
            { label: "Urine Urobilinogen", val: 90, max: 100, refMin: 10, refMax: 30, unit: "% rel" },
            { label: "Serum ALP / GGT", val: 20, max: 100, refMin: 10, refMax: 30, unit: "% max" }
          ],
          info: "Unconjugated bilirubin is albumin-bound and water-insoluble → CANNOT pass glomerulus (Acholuric jaundice: Urine Bilirubin NEGATIVE, but Urine Urobilinogen +++ & dark faeces!).",
          metrics: [
            { label: "Van den Bergh", val: "Indirect Positive", cls: "is-warn" },
            { label: "Urine Bilirubin", val: "NEGATIVE (Acholuric)", cls: "is-ok" },
            { label: "Urobilinogen", val: "Markedly Increased ↑↑", cls: "is-danger" },
            { label: "Vet Causes", val: "Babesia, IMHA, Cu Tox.", cls: "is-info" }
          ]
        },
        {
          id: "hep", label: "Hepatic (Hepatocellular)",
          banner: "Acute Hepatitis / Leptospirosis — Biphasic (Both Direct & Indirect Elevated)",
          bars: [
            { label: "Indirect (Unconj.) Bil", val: 4.5, max: 12, refMin: 0, refMax: 0.4, unit: "mg/dL" },
            { label: "Direct (Conj.) Bil", val: 4.8, max: 12, refMin: 0, refMax: 0.3, unit: "mg/dL" },
            { label: "Urine Urobilinogen", val: 55, max: 100, refMin: 10, refMax: 30, unit: "% rel" },
            { label: "Serum ALP / GGT", val: 55, max: 100, refMin: 10, refMax: 30, unit: "% max" }
          ],
          info: "Damaged hepatocytes fail to conjugate all bilirubin AND leak conjugated bilirubin into blood → Biphasic Van den Bergh, Urine Bilirubin Positive, High ALT/SDH.",
          metrics: [
            { label: "Van den Bergh", val: "Biphasic (Both ↑)", cls: "is-danger" },
            { label: "Urine Bilirubin", val: "POSITIVE (+)", cls: "is-warn" },
            { label: "Leakage Enzymes", val: "ALT / SDH ↑↑↑", cls: "is-danger" },
            { label: "Synthetic LFTs", val: "↓ Albumin, ↑ Bile Acids", cls: "is-warn" }
          ]
        },
        {
          id: "post", label: "Post-Hepatic (Obstructive)",
          banner: "Bile Duct Obstruction / Fascioliasis — Water-Soluble Direct Bilirubin Regurgitates",
          bars: [
            { label: "Indirect (Unconj.) Bil", val: 0.9, max: 12, refMin: 0, refMax: 0.4, unit: "mg/dL" },
            { label: "Direct (Conj.) Bil", val: 9.8, max: 12, refMin: 0, refMax: 0.3, unit: "mg/dL" },
            { label: "Urine Urobilinogen", val: 2, max: 100, refMin: 10, refMax: 30, unit: "% rel" },
            { label: "Serum ALP / GGT", val: 96, max: 100, refMin: 10, refMax: 30, unit: "% max" }
          ],
          info: "Conjugated bilirubin cannot reach intestine → clay-colored acholic faeces, ABSENT urine urobilinogen, dark tea-colored urine (Fouchet +++, Hay's bile salts +++), massive ALP & GGT!",
          metrics: [
            { label: "Van den Bergh", val: "Direct Immediate +", cls: "is-danger" },
            { label: "Urine Bilirubin", val: "STRONGLY +++ (Tea)", cls: "is-danger" },
            { label: "Urobilinogen / Stool", val: "ABSENT (Clay Stool)", cls: "is-danger" },
            { label: "Biliary Enzymes", val: "ALP & GGT ↑↑↑", cls: "is-danger" }
          ]
        }
      ]
    }
  ];

  S["u3-t09"] = [
    {
      engine: "clinical",
      title: "Renal Function Tests & Differential Diagnosis of Azotaemia",
      subtitle: "Use Urine Specific Gravity (USG) alongside BUN, Creatinine, and SDMA to distinguish Pre-Renal, Primary Renal, and Post-Renal Azotaemia.",
      cases: [
        {
          id: "prerenal", label: "Pre-Renal (Dehydration)",
          banner: "Reduced Renal Perfusion with INTACT Tubular Concentrating Ability (High USG!)",
          bars: [
            { label: "BUN", val: 62, max: 150, refMin: 8, refMax: 28, unit: "mg/dL" },
            { label: "Serum Creatinine", val: 2.3, max: 10, refMin: 0.5, refMax: 1.5, unit: "mg/dL" },
            { label: "Urine SG (×1000-1000)", val: 48, max: 60, refMin: 30, refMax: 50, unit: "(1.048)" },
            { label: "Functional Nephrons", val: 95, max: 100, refMin: 75, refMax: 100, unit: "%" }
          ],
          info: "Kidneys are healthy! Low blood flow drops GFR (↑ BUN disproportionately to Creatinine), while ADH concentrates urine to USG > 1.030 (dog) or > 1.035 (cat). Reverses rapidly with IV fluids.",
          metrics: [
            { label: "Urine SG", val: "> 1.030 (Concentrated)", cls: "is-ok" },
            { label: "BUN:Creatinine", val: "High (> 20:1)", cls: "is-warn" },
            { label: "Tubular Function", val: "INTACT ✓", cls: "is-ok" },
            { label: "Treatment", val: "IV Fluid Rehydration", cls: "is-ok" }
          ]
        },
        {
          id: "renal", label: "Primary Renal Failure",
          banner: "> 75% Nephron Loss — Azotaemia + Isosthenuria (USG Fixed at 1.008–1.012!)",
          bars: [
            { label: "BUN", val: 118, max: 150, refMin: 8, refMax: 28, unit: "mg/dL" },
            { label: "Serum Creatinine", val: 6.4, max: 10, refMin: 0.5, refMax: 1.5, unit: "mg/dL" },
            { label: "Urine SG (×1000-1000)", val: 10, max: 60, refMin: 30, refMax: 50, unit: "(1.010)" },
            { label: "Functional Nephrons", val: 18, max: 100, refMin: 75, refMax: 100, unit: "%" }
          ],
          info: "Classic triad of Primary Renal Failure: Azotaemia (↑ BUN, ↑ Creatinine, ↑ Phosphorus) + Isosthenuria (USG 1.008–1.012, identical to glomerular filtrate) because > 67–75% of nephrons are lost!",
          metrics: [
            { label: "Urine SG", val: "1.008–1.012 (Isosthenuria)", cls: "is-danger" },
            { label: "Nephron Loss", val: "> 75% (Azotaemia)", cls: "is-danger" },
            { label: "Early Marker", val: "SDMA (rises at 40% loss)", cls: "is-info" },
            { label: "Electrolytes", val: "Hyperphosphataemia", cls: "is-danger" }
          ]
        },
        {
          id: "postrenal", label: "Post-Renal (Blocked Cat/Buck)",
          banner: "Urethral Obstruction / Bladder Rupture — Severe Azotaemia + Life-Threatening Hyperkalaemia!",
          bars: [
            { label: "BUN", val: 142, max: 150, refMin: 8, refMax: 28, unit: "mg/dL" },
            { label: "Serum Creatinine", val: 8.8, max: 10, refMin: 0.5, refMax: 1.5, unit: "mg/dL" },
            { label: "Serum K⁺ (×10)", val: 82, max: 100, refMin: 35, refMax: 55, unit: "(8.2 mEq/L)" },
            { label: "Functional Nephrons", val: 80, max: 100, refMin: 75, refMax: 100, unit: "%" }
          ],
          info: "Urolithiasis in male cats or steers/bucks blocks urine outflow → back-pressure halts GFR and causes lethal Hyperkalaemia (cardiac arrest risk!). Immediate decompression required.",
          metrics: [
            { label: "Emergency Hazard", val: "Hyperkalaemia (> 7.5)", cls: "is-danger" },
            { label: "ECG Finding", val: "Spiked T-waves, No P", cls: "is-danger" },
            { label: "First Priority", val: "Relieve Obstruction + Ca-Gluc", cls: "is-ok" },
            { label: "Species Classic", val: "Male Cat / Feedlot Steer", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u3-t10"] = [
    {
      engine: "clinical",
      title: "BUN, Creatinine & Uric Acid Species Diagnostic Comparator",
      subtitle: "Understand why Creatinine is less affected by diet than BUN, how ruminants recycle urea, and why Birds use Uric Acid for renal diagnosis.",
      cases: [
        {
          id: "dog", label: "Canine / Feline (BUN & Cr)",
          banner: "Mammalian Ureotelic Markers — Creatinine Reflects GFR Steadily",
          bars: [
            { label: "BUN (Diet/Liver dep.)", val: 20, max: 100, refMin: 8, refMax: 28, unit: "mg/dL" },
            { label: "Creatinine (Muscle)", val: 1.1, max: 8, refMin: 0.5, refMax: 1.5, unit: "mg/dL" },
            { label: "Uric Acid (Low)", val: 0.4, max: 20, refMin: 0, refMax: 1.0, unit: "mg/dL" }
          ],
          info: "BUN rises with high-protein meals or GI bleeding and falls in liver failure (low urea cycle). Creatinine comes steadily from muscle phosphocreatine and is purely GFR-dependent.",
          metrics: [
            { label: "BUN Influenced By", val: "Diet, GI Bleed, Liver", cls: "is-warn" },
            { label: "Creatinine Source", val: "Muscle Phosphocreatine", cls: "is-info" },
            { label: "Ruminant Special", val: "Salivary Urea Recycling", cls: "is-ok" },
            { label: "Best GFR Index", val: "Creatinine + SDMA", cls: "is-ok" }
          ]
        },
        {
          id: "avian", label: "Avian Renal Failure (Uric Acid)",
          banner: "Birds Are Uricotelic — Plasma Uric Acid (>12 mg/dL) Replaces BUN/Creatinine!",
          bars: [
            { label: "BUN (Not Useful)", val: 4, max: 100, refMin: 1, refMax: 6, unit: "mg/dL" },
            { label: "Creatinine (Low)", val: 0.3, max: 8, refMin: 0.1, refMax: 0.5, unit: "mg/dL" },
            { label: "Uric Acid (PRIMARY!)", val: 18.5, max: 20, refMin: 2, refMax: 10, unit: "mg/dL" }
          ],
          info: "In poultry and pet birds, urea & creatinine are minimal. Renal tubular secretion eliminates 90% of Uric Acid — hyperuricaemia (>12–15 mg/dL) causes chalky white urate deposits (visceral gout)!",
          metrics: [
            { label: "Avian Renal Marker", val: "Plasma Uric Acid", cls: "is-ok" },
            { label: "Normal Bird UA", val: "2 – 10 mg/dL", cls: "is-info" },
            { label: "Pathology", val: "Visceral / Articular Gout", cls: "is-danger" },
            { label: "Creatinine in Birds", val: "Replaced by Creatine", cls: "is-warn" }
          ]
        }
      ]
    }
  ];

  S["u3-t11"] = [
    {
      engine: "henderson",
      mode: "bloodgas",
      title: "Veterinary Arterial Blood Gas & Davenport Acid-Base Analyzer",
      subtitle: "Adjust plasma [HCO₃⁻] and arterial pCO₂ or select veterinary cases (Calf Diarrhoea, Bovine LDA, Anaesthesia, Heat Stress) to diagnose acidosis/alkalosis.",
      hco3: 24,
      pco2: 40
    }
  ];

  S["u3-t12"] = [
    {
      engine: "clinical",
      title: "Rumen Fermentation Biochemistry & Acidosis Simulator",
      subtitle: "Switch between High-Roughage, Balanced Dairy, High-Concentrate, and Grain-Overload Rumen Lactic Acidosis to see VFA ratios and pH!",
      cases: [
        {
          id: "roughage", label: "High-Roughage Diet",
          banner: "Cellulolytic Flora Dominant → High Acetate (70%) + High Milk Fat + Stable pH 6.8",
          bars: [
            { label: "Acetate (C2) %", val: 70, max: 100, refMin: 60, refMax: 72, unit: "%" },
            { label: "Propionate (C3) %", val: 18, max: 100, refMin: 18, refMax: 25, unit: "%" },
            { label: "Butyrate (C4) %", val: 12, max: 100, refMin: 8, refMax: 14, unit: "%" },
            { label: "Ruminal pH (×10)", val: 68, max: 80, refMin: 62, refMax: 70, unit: "(pH 6.8)" }
          ],
          info: "Fibrous forage stimulates rumination & bicarbonate-rich saliva (pH ~8.2), keeping ruminal pH ~6.8. Acetate drives de novo mammary milk fat synthesis.",
          metrics: [
            { label: "Ac : Pr : Bu Ratio", val: "70 : 18 : 12", cls: "is-ok" },
            { label: "Ruminal pH", val: "6.8 (Optimal)", cls: "is-ok" },
            { label: "Milk Fat %", val: "High ✓", cls: "is-ok" },
            { label: "Saliva Buffer", val: "HCO₃⁻ + HPO₄²⁻ Rich", cls: "is-info" }
          ]
        },
        {
          id: "conc", label: "High-Concentrate Diet",
          banner: "Amylolytic Flora Shift → Higher Propionate (35%) for Glucose & Weight Gain",
          bars: [
            { label: "Acetate (C2) %", val: 52, max: 100, refMin: 60, refMax: 72, unit: "%" },
            { label: "Propionate (C3) %", val: 35, max: 100, refMin: 18, refMax: 25, unit: "%" },
            { label: "Butyrate (C4) %", val: 13, max: 100, refMin: 8, refMax: 14, unit: "%" },
            { label: "Ruminal pH (×10)", val: 58, max: 80, refMin: 62, refMax: 70, unit: "(pH 5.8)" }
          ],
          info: "Starch-rich grain boosts propionate (more hepatic glucose & higher milk volume/beef gain) but lowers Acetate:Propionate ratio, risking Milk Fat Depression & SARA (pH < 5.8).",
          metrics: [
            { label: "Ac : Pr Ratio", val: "Narrowed (1.5 : 1)", cls: "is-warn" },
            { label: "Ruminal pH", val: "5.8 (SARA Borderline)", cls: "is-warn" },
            { label: "Milk Volume", val: "Increased ↑", cls: "is-ok" },
            { label: "Risk", val: "Milk Fat Depression", cls: "is-warn" }
          ]
        },
        {
          id: "acidosis", label: "Acute Rumen Lactic Acidosis",
          banner: "EMERGENCY! Streptococcus bovis & Lactobacillus Overgrowth → D-Lactate Surge (pH 4.5!)",
          bars: [
            { label: "Acetate (C2) %", val: 30, max: 100, refMin: 60, refMax: 72, unit: "%" },
            { label: "Propionate (C3) %", val: 15, max: 100, refMin: 18, refMax: 25, unit: "%" },
            { label: "D/L-Lactic Acid %", val: 55, max: 100, refMin: 0, refMax: 2, unit: "% (TOXIC)" },
            { label: "Ruminal pH (×10)", val: 45, max: 80, refMin: 62, refMax: 70, unit: "(pH 4.5!)" }
          ],
          info: "Sudden grain overload causes Streptococcus bovis → Lactobacillus boom producing D- and L-lactic acid (pKa 3.86). Ruminal pH crashes < 5.0 → kills protozoa, damages rumen mucosa, causes severe systemic D-lactic acidosis & laminitis!",
          metrics: [
            { label: "Ruminal pH", val: "4.5 (Lethal Acidosis!)", cls: "is-danger" },
            { label: "Key Toxin", val: "D-Lactate (Slow Clearance)", cls: "is-danger" },
            { label: "Protozoa", val: "Dead / Absent", cls: "is-danger" },
            { label: "Treatment", val: "IV NaHCO₃ + Oral Mg(OH)₂", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t13"] = [
    {
      engine: "pathway",
      title: "Oxidative Stress (ROS Lipid Peroxidation) vs Antioxidant Defense (SOD–CAT–GPx)",
      subtitle: "Trace Superoxide (O₂•⁻) neutralization via SOD, Catalase, and Selenium-dependent GPx, and simulate Vitamin E / Selenium deficiency.",
      nodes: [
        { label: "O₂•⁻ (Superoxide)", sub: "ETC Leak / Phagocyte", x: 0.14, y: 0.48, kind: "warn", enzyme: "Complex I/III & NADPH Oxidase", info: "Primary reactive oxygen species generated during mitochondrial respiration, reperfusion injury, and shock." },
        { label: "H₂O₂ (Peroxide)", sub: "Intermediate", x: 0.44, y: 0.48, kind: "rate", enzyme: "SOD (Cu/Zn & Mn)", info: "Superoxide Dismutase converts 2 O₂•⁻ + 2 H⁺ → H₂O₂ + O₂." },
        { label: "2 H₂O (Safe)", sub: "Detoxified!", x: 0.80, y: 0.25, kind: "energy", enzyme: "Catalase & Se-GPx (GSH)", info: "Catalase (peroxisomes) and Selenium-dependent Glutathione Peroxidase (cytosol/mitochondria) convert H₂O₂ safely to water." },
        { label: "•OH → Lipid Perox.", sub: "MDA / Membrane Lysis", x: 0.80, y: 0.74, kind: "rate", enzyme: "Fenton Reaction (Fe²⁺)", info: "Unchecked H₂O₂ forms hydroxyl radical (•OH) which peroxidizes membrane PUFAs → Malondialdehyde (MDA) & myodegeneration (White Muscle Disease!). Vitamin E breaks lipid radical chains!" }
      ],
      edges: [
        { from: 0, to: 1, label: "SOD (Cu/Zn, Mn)" },
        { from: 1, to: 2, label: "CAT / Se-GPx" },
        { from: 1, to: 3, label: "Fe²⁺ Fenton (Damage)" }
      ],
      modes: [
        {
          id: "protected", label: "Protected (Se + Vit E Adequate)", speed: 1.1, boost: [0, 1], blocked: [2],
          note: "SOD + Catalase + Se-GPx + Membrane Vitamin E neutralize ROS before lipid peroxidation occurs.",
          metrics: [
            { label: "Key Minerals", val: "Se (GPx), Cu/Zn/Mn (SOD)", cls: "is-ok" },
            { label: "Chain-Breaker", val: "Vitamin E (α-Tocopherol)", cls: "is-ok" },
            { label: "MDA (Perox. Marker)", val: "Low (Normal)", cls: "is-ok" },
            { label: "Membrane Integrity", val: "Preserved ✓", cls: "is-ok" }
          ]
        },
        {
          id: "def", label: "Se / Vit E Deficiency (WMD)", speed: 1.3, boost: [0, 2], blocked: [1],
          note: "Low Se-GPx & Vit E allow H₂O₂ → •OH → massive membrane peroxidation (↑ MDA) → White Muscle Disease in calves/lambs & Mulberry Heart in pigs!",
          metrics: [
            { label: "Se-GPx Activity", val: "CRITICALLY LOW", cls: "is-danger" },
            { label: "Lipid Peroxidation", val: "HIGH (↑ MDA)", cls: "is-danger" },
            { label: "Serum CK", val: "Markedly Elevated ↑↑", cls: "is-danger" },
            { label: "Vet Disease", val: "White Muscle Disease", cls: "is-danger" }
          ]
        }
      ]
    }
  ];

  S["u3-t14"] = [
    {
      engine: "clinical",
      visual: "fluid",
      title: "Biochemical Basis of Fluid Therapy: ICF / ISF / IVF Compartment Shifts",
      subtitle: "Compare how Isotonic Crystalloids (0.9% NaCl / LRS), Hypertonic Saline (7.2%), Hypotonic 5% Dextrose, and Colloids redistribute body water.",
      cases: [
        {
          id: "normal", label: "Normal TBW (60% BW)",
          banner: "Normal Body Water Distribution: 2/3 ICF (40% BW) | 1/3 ECF (15% ISF + 5% IVF)",
          comp: { icf: 66, isf: 25, ivf: 9 },
          info: "Plasma osmolality (~290–300 mOsm/kg) is governed primarily by Na⁺ (2×Na⁺ + Glc/18 + BUN/2.8). Water moves freely across membranes to equalize osmolality.",
          metrics: [
            { label: "ICF Share", val: "66% TBW (40% BW)", cls: "is-info" },
            { label: "ISF Share", val: "25% TBW (15% BW)", cls: "is-info" },
            { label: "IVF (Plasma)", val: "9% TBW (5% BW)", cls: "is-ok" },
            { label: "Normal Osmolality", val: "290–300 mOsm/kg", cls: "is-ok" }
          ]
        },
        {
          id: "iso", label: "Isotonic Crystalloid (LRS / 0.9% NaCl)",
          banner: "Expands ECF Only (75% moves to ISF, 25% stays in IVF within 30–60 min) — ICF Unchanged",
          comp: { icf: 60, isf: 30, ivf: 10 },
          info: "LRS contains Lactate (metabolized by liver to HCO₃⁻ — ideal for calf diarrhoea metabolic acidosis!). 0.9% NaCl (acidifying) is preferred for Bovine LDA hypochloraemic metabolic alkalosis!",
          metrics: [
            { label: "ICF Shift", val: "None (Iso-osmotic)", cls: "is-ok" },
            { label: "Retained in Plasma", val: "~25% after 1 hr", cls: "is-info" },
            { label: "LRS Best For", val: "Metabolic Acidosis (Diarrhoea)", cls: "is-ok" },
            { label: "0.9% NaCl Best For", val: "Met. Alkalosis (LDA/Vomiting)", cls: "is-info" }
          ]
        },
        {
          id: "hyper", label: "Hypertonic Saline (7.2% NaCl)",
          banner: "Draws Water OUT of ICF & ISF into Plasma → Rapid Intravascular Volume Expansion!",
          comp: { icf: 52, isf: 24, ivf: 24 },
          info: "Small volume (4 mL/kg) rapidly pulls osmotic water from cells into vasculature (3–4× infused volume!) for acute haemorrhagic/endotoxic shock in cattle & horses. MUST follow with isotonic fluids!",
          metrics: [
            { label: "Osmolality", val: "~2460 mOsm/L (8× Plasma)", cls: "is-warn" },
            { label: "Plasma Expansion", val: "3–4× Infused Volume!", cls: "is-ok" },
            { label: "ICF Effect", val: "Transient Cell Shrinkage", cls: "is-warn" },
            { label: "Contraindication", val: "Hypernatraemia / Dehydration", cls: "is-danger" }
          ]
        },
        {
          id: "hypo", label: "5% Dextrose (D5W — Free Water)",
          banner: "Glucose Metabolized → Free Water Distributes Across ALL Compartments (Mostly ICF!)",
          comp: { icf: 72, isf: 21, ivf: 7 },
          info: "Once dextrose is metabolized, D5W acts as pure water — 66% enters ICF and <10% stays in plasma! Useful for free-water deficit (hypernatraemia), NEVER for hypovolaemic shock!",
          metrics: [
            { label: "Plasma Retention", val: "< 10% (Poor for Shock!)", cls: "is-danger" },
            { label: "ICF Entry", val: "66% (Cell Swelling Risk)", cls: "is-warn" },
            { label: "Primary Use", val: "Free Water Deficit", cls: "is-info" },
            { label: "Colloid Contrast", val: "Colloids Stay ~100% in IVF", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t15"] = [
    {
      engine: "pathway",
      title: "Xenobiotic Detoxification (Phase I & Phase II) & Feline Paracetamol Toxicity",
      subtitle: "Trace lipophilic drug conversion to water-soluble conjugates — and see why Cats suffer fatal Heinz-body & liver necrosis from Acetaminophen!",
      nodes: [
        { label: "Lipophilic Drug", sub: "e.g. Paracetamol", x: 0.14, y: 0.48, kind: "normal", enzyme: "Oral / IV Entry", info: "Lipophilic xenobiotics cannot be excreted easily by kidneys because they passively reabsorb across renal tubules." },
        { label: "Phase I (CYP450)", sub: "Oxidation / -OH", x: 0.42, y: 0.48, kind: "rate", enzyme: "CYP450 + NADPH + O₂", info: "Functionalization (hydroxylation, dealkylation). Can sometimes bioactivate drugs into toxic electrophiles (e.g., NAPQI from Paracetamol)!" },
        { label: "Phase II Conjugation", sub: "Glucuronide / Sulfate", x: 0.72, y: 0.26, kind: "energy", enzyme: "UGT1A6 / Sulfotransferase / GST", info: "Adds bulky polar groups (UDP-Glucuronic acid, PAPS, Glutathione) making drug water-soluble for renal/biliary excretion." },
        { label: "Toxic NAPQI Damage", sub: "MetHb + Liver Necrosis", x: 0.72, y: 0.76, kind: "warn", enzyme: "GSH Depletion!", info: "When glucuronidation is absent (CATS lack functional UGT1A6!), excess NAPQI depletes GSH → oxidizes Hb to chocolate-brown Methemoglobin & destroys hepatocytes!" }
      ],
      edges: [
        { from: 0, to: 1, label: "Phase I" },
        { from: 1, to: 2, label: "UGT / GST (Safe)" },
        { from: 1, to: 3, label: "NAPQI Overflow (Toxic!)" }
      ],
      modes: [
        {
          id: "normal", label: "Dog / Cattle (Normal Phase II)", speed: 1.1, boost: [0, 1], blocked: [2],
          note: "Intact UGT glucuronidation and sulfation rapidly clear xenobiotics into urine/bile.",
          metrics: [
            { label: "Phase I Goal", val: "Expose Polar Group (-OH)", cls: "is-info" },
            { label: "Phase II Goal", val: "Water-Soluble Excretion", cls: "is-ok" },
            { label: "Dog Defect", val: "Poor Acetylation (Sulfas)", cls: "is-warn" },
            { label: "Pig Defect", val: "Poor Sulfation", cls: "is-warn" }
          ]
        },
        {
          id: "cat", label: "Cat: Paracetamol Toxicity", speed: 1.3, boost: [0, 2], blocked: [1],
          note: "Cats lack functional UGT1A6 (glucuronyl transferase) → Paracetamol diverts to toxic NAPQI → MetHb ('chocolate blood') + facial oedema + liver necrosis!",
          metrics: [
            { label: "Feline Defect", val: "Deficient UGT1A6", cls: "is-danger" },
            { label: "Toxic Metabolite", val: "NAPQI", cls: "is-danger" },
            { label: "Antidote", val: "N-Acetylcysteine (NAC)", cls: "is-ok" },
            { label: "NAC Mechanism", val: "Replenishes GSH!", cls: "is-ok" }
          ]
        }
      ]
    }
  ];

  S["u3-t16"] = [
    {
      engine: "pathway",
      title: "Cytochrome P450 Monooxygenase Catalytic Cycle & Drug Interactions",
      subtitle: "Follow heme-Fe³⁺/Fe²⁺ mixed-function oxidase catalysis (RH + O₂ + NADPH + H⁺ → ROH + H₂O + NADP⁺) under Inducers vs Inhibitors.",
      nodes: [
        { label: "CYP-Fe³⁺ + Drug (RH)", sub: "SER Membrane", x: 0.18, y: 0.30, kind: "normal", enzyme: "Heme-Thiolate (Cys)", info: "Substrate binds near the heme iron in hepatic smooth endoplasmic reticulum (microsomes)." },
        { label: "CYP-Fe²⁺–O₂", sub: "+1 e⁻ (NADPH Reductase)", x: 0.50, y: 0.22, kind: "rate", enzyme: "NADPH-CYP Reductase (FAD/FMN)", info: "First electron reduces Fe³⁺→Fe²⁺ allowing O₂ binding (CO binds Fe²⁺ giving diagnostic 450 nm peak!)." },
        { label: "Active Ferryl [Fe=O]", sub: "+2nd e⁻ + 2 H⁺ → H₂O", x: 0.82, y: 0.48, kind: "energy", enzyme: "O–O Cleavage", info: "One oxygen atom forms H₂O; the second hyper-reactive ferryl-oxo oxygen hydroxylates the drug." },
        { label: "Hydroxylated Drug (ROH)", sub: "To Phase II / Excretion", x: 0.44, y: 0.78, kind: "organ", enzyme: "Product Release", info: "CYP returns to resting Fe³⁺ state; polar ROH proceeds to Phase II conjugation." }
      ],
      edges: [
        { from: 0, to: 1, label: "e⁻ (NADPH) + O₂" },
        { from: 1, to: 2, label: "2nd e⁻ (-H₂O)" },
        { from: 2, to: 3, label: "Hydroxylation" },
        { from: 3, to: 0, label: "Fe³⁺ Regenerated" }
      ],
      modes: [
        {
          id: "normal", label: "Baseline CYP450", speed: 1.0,
          note: "Mixed-function oxidase: incorporates 1 atom of O₂ into substrate and reduces the other to H₂O.",
          metrics: [
            { label: "CO Complex Peak", val: "450 nm (Origin of Name)", cls: "is-info" },
            { label: "Location", val: "Hepatic Smooth ER", cls: "is-info" },
            { label: "Cofactor", val: "NADPH + O₂ + Heme", cls: "is-ok" },
            { label: "Clearance Rate", val: "Normal (1×)", cls: "is-ok" }
          ]
        },
        {
          id: "induced", label: "Induced (Phenobarbital)", speed: 1.8, boost: [0, 1, 2, 3],
          note: "Phenobarbital induces hepatic CYP transcription → faster drug clearance (shortens half-life of co-administered drugs!).",
          metrics: [
            { label: "Inducer", val: "Phenobarbital / Rifampin", cls: "is-warn" },
            { label: "Drug Clearance", val: "ACCELERATED (↑↑)", cls: "is-warn" },
            { label: "Plasma Drug Level", val: "May Fall Subtherapeutic", cls: "is-danger" },
            { label: "ALP Effect (Dog)", val: "Mildly Elevated", cls: "is-info" }
          ]
        },
        {
          id: "inhibited", label: "Inhibited (Ketoconazole)", speed: 0.25, blocked: [1, 2],
          note: "Ketoconazole/Cimetidine/Chloramphenicol bind heme iron → slows clearance of co-administered drugs (risk of toxicity — e.g., Cyclosporine + Ketoconazole!).",
          metrics: [
            { label: "Inhibitor", val: "Ketoconazole / Chloramph.", cls: "is-danger" },
            { label: "Drug Clearance", val: "SLOWED (↓↓)", cls: "is-danger" },
            { label: "Toxicity Risk", val: "HIGH (Accumulation)", cls: "is-danger" },
            { label: "Vet Trick", val: "Used to Spare Cyclosporine", cls: "is-info" }
          ]
        }
      ]
    }
  ];
})();
