# -*- coding: utf-8 -*-
"""
Master Quiz Bank Builder for Veterinary Biochemistry Studio
Assembles Unit 1, Unit 2, and Unit 3 question sets (540 total questions)
Strict 2 : 1 : 1 ratio (90 MCQ : 45 TF : 45 FIB per unit = 180 per unit)
"""

import json
import os
import sys

# Ensure tools directory is in sys.path
sys.path.insert(0, os.path.dirname(__file__))

import make_unit1_quiz
import make_unit2_quiz
import make_unit3_quiz

units_data = {
    "unit-1": {
        "mcq": make_unit1_quiz.mcq,
        "tf": make_unit1_quiz.tf,
        "fib": make_unit1_quiz.fib
    },
    "unit-2": {
        "mcq": make_unit2_quiz.mcq,
        "tf": make_unit2_quiz.tf,
        "fib": make_unit2_quiz.fib
    },
    "unit-3": {
        "mcq": make_unit3_quiz.mcq,
        "tf": make_unit3_quiz.tf,
        "fib": make_unit3_quiz.fib
    }
}

# Validation
print("=" * 60)
print("VALIDATING VETERINARY BIOCHEMISTRY QUIZ BANK...")
print("=" * 60)

total_questions = 0
for u_id, bank in units_data.items():
    n_mcq = len(bank["mcq"])
    n_tf = len(bank["tf"])
    n_fib = len(bank["fib"])
    u_total = n_mcq + n_tf + n_fib
    total_questions += u_total
    
    print(f"\n[Unit: {u_id}]")
    print(f"  MCQ: {n_mcq} (expected 90)")
    print(f"  TF:  {n_tf} (expected 45)")
    print(f"  FIB: {n_fib} (expected 45)")
    print(f"  Total: {u_total} (expected 180, ratio {n_mcq}:{n_tf}:{n_fib})")
    
    assert n_mcq == 90, f"{u_id} MCQ count is {n_mcq}, expected 90"
    assert n_tf == 45, f"{u_id} TF count is {n_tf}, expected 45"
    assert n_fib == 45, f"{u_id} FIB count is {n_fib}, expected 45"
    assert u_total == 180, f"{u_id} total count is {u_total}, expected 180"

    # Validate MCQ records
    for i, q in enumerate(bank["mcq"]):
        assert q["q"] and q["q"].strip(), f"Empty question in {u_id} MCQ index {i}"
        assert len(q["o"]) == 4, f"Options count != 4 in {u_id} MCQ index {i}"
        assert q["a"] in [0, 1, 2, 3], f"Invalid answer index in {u_id} MCQ index {i}"
        assert q["e"] and q["e"].strip(), f"Empty explanation in {u_id} MCQ index {i}"
        assert q["subSection"], f"Missing subSection in {u_id} MCQ index {i}"
        assert q["topicId"], f"Missing topicId in {u_id} MCQ index {i}"

    # Validate TF records
    for i, q in enumerate(bank["tf"]):
        assert q["q"] and q["q"].strip(), f"Empty question in {u_id} TF index {i}"
        assert isinstance(q["a"], bool), f"Answer not boolean in {u_id} TF index {i}"
        assert q["e"] and q["e"].strip(), f"Empty explanation in {u_id} TF index {i}"
        assert q["subSection"], f"Missing subSection in {u_id} TF index {i}"
        assert q["topicId"], f"Missing topicId in {u_id} TF index {i}"

    # Validate FIB records
    for i, q in enumerate(bank["fib"]):
        assert q["q"] and q["q"].strip(), f"Empty question in {u_id} FIB index {i}"
        assert isinstance(q["a"], list) and len(q["a"]) >= 1, f"Invalid acceptable answers in {u_id} FIB index {i}"
        assert q["a_display"] and q["a_display"].strip(), f"Missing a_display in {u_id} FIB index {i}"
        assert q["e"] and q["e"].strip(), f"Empty explanation in {u_id} FIB index {i}"
        assert q["subSection"], f"Missing subSection in {u_id} FIB index {i}"
        assert q["topicId"], f"Missing topicId in {u_id} FIB index {i}"

print("\n" + "=" * 60)
print(f"ALL CHECKS PASSED! TOTAL CURRICULUM QUESTIONS = {total_questions}")
print("=" * 60)

# Build JavaScript output
json_str = json.dumps(units_data, ensure_ascii=False, indent=2)
js_content = f"/* ============================================================\n" \
             f"   data-quiz.JS  —  Master Examination Quiz Bank\n" \
             f"   Veterinary Biochemistry Studio (B.V.Sc & A.H. Year 2)\n" \
             f"   Strictly aligned with VCI MSVE Syllabus (Credit Hours 2+1=3)\n" \
             f"   Units 1 to 3: 180 questions per unit (90 MCQ, 45 TF, 45 FIB)\n" \
             f"   Total Questions: 540 | Ratio 2 : 1 : 1\n" \
             f"   ============================================================ */\n\n" \
             f"var quizBank = {json_str};\n"

workspace_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
target_file = os.path.join(workspace_root, "data", "data-quiz.JS")
repo_target_file = os.path.join(workspace_root, "repo", "data", "data-quiz.JS")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(js_content)
print(f"Successfully wrote {target_file} ({len(js_content)} bytes)")

if os.path.exists(os.path.dirname(repo_target_file)):
    with open(repo_target_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Successfully mirrored to {repo_target_file} ({len(js_content)} bytes)")
