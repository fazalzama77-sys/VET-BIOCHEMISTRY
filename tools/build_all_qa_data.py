# -*- coding: utf-8 -*-
"""
Master Q&A Bank Builder for Veterinary Biochemistry Studio
Assembles Unit 1, Unit 2, and Unit 3 Question Banks (75 total questions)
Strict Examination Distribution:
  - 12 Two-mark definitions (marks: 2, type: "define")
  - 8 Five-mark short-answer questions (marks: 5, type: "short" / "diff")
  - 5 Twelve-mark long-answer questions (marks: 12, type: "long")
Total: Exactly 25 questions per unit * 3 units = 75 High-Yield Questions
"""

import json
import os
import sys

# Ensure tools directory is in sys.path
sys.path.insert(0, os.path.dirname(__file__))

import make_unit1_qa
import make_unit2_qa
import make_unit3_qa

units_qa = {
    "unit-1": make_unit1_qa.unit1_qa,
    "unit-2": make_unit2_qa.unit2_qa,
    "unit-3": make_unit3_qa.unit3_qa
}

print("=" * 60)
print("VALIDATING VETERINARY BIOCHEMISTRY Q&A MASTER BANK...")
print("=" * 60)

all_ids = set()
total_questions = 0

for u_id, questions in units_qa.items():
    q2m = [q for q in questions if q.get("marks") == 2]
    q5m = [q for q in questions if q.get("marks") == 5]
    q12m = [q for q in questions if q.get("marks") == 12]
    u_total = len(questions)
    total_questions += u_total
    
    print(f"\n[Unit: {u_id}]")
    print(f"  2-Mark Definitions: {len(q2m)} (expected 12)")
    print(f"  5-Mark Short Notes: {len(q5m)} (expected 8)")
    print(f"  12-Mark Long Essays: {len(q12m)} (expected 5)")
    print(f"  Unit Total: {u_total} (expected 25)")
    
    assert len(q2m) == 12, f"{u_id} 2M definitions count is {len(q2m)}, expected 12"
    assert len(q5m) == 8, f"{u_id} 5M short questions count is {len(q5m)}, expected 8"
    assert len(q12m) == 5, f"{u_id} 12M long questions count is {len(q12m)}, expected 5"
    assert u_total == 25, f"{u_id} total count is {u_total}, expected 25"
    
    # Detailed schema verification for each question
    for idx, q in enumerate(questions):
        qid = q.get("id")
        assert qid, f"Missing id in {u_id} index {idx}"
        assert qid not in all_ids, f"Duplicate question ID '{qid}' found in {u_id} index {idx}"
        all_ids.add(qid)
        
        marks = q.get("marks")
        assert marks in [2, 5, 12], f"Invalid marks {marks} in {qid}"
        
        qtype = q.get("type")
        assert qtype in ["define", "short", "diff", "long"], f"Invalid type '{qtype}' in {qid}"
        if marks == 2:
            assert qtype == "define", f"2-mark question {qid} has type '{qtype}', expected 'define'"
        elif marks == 5:
            assert qtype in ["short", "diff"], f"5-mark question {qid} has type '{qtype}', expected 'short' or 'diff'"
        elif marks == 12:
            assert qtype == "long", f"12-mark question {qid} has type '{qtype}', expected 'long'"
            
        prompt = q.get("question")
        assert prompt and prompt.strip(), f"Empty question text in {qid}"
        
        topicId = q.get("topicId")
        assert topicId and topicId.startswith(f"u{u_id[-1]}-"), f"Mismatched topicId '{topicId}' in {qid}"
        
        ans = q.get("answer")
        assert ans and len(ans.strip()) > 30, f"Model answer too short or missing in {qid}"
        
        kp = q.get("keyPoints")
        assert isinstance(kp, list) and len(kp) >= 2, f"Key points missing or < 2 items in {qid}"
        
        pyq = q.get("pyq")
        assert isinstance(pyq, list) and len(pyq) >= 1, f"PYQ missing in {qid}"
        
        if q.get("table"):
            tbl = q["table"]
            assert "headers" in tbl and isinstance(tbl["headers"], list) and len(tbl["headers"]) >= 2
            assert "rows" in tbl and isinstance(tbl["rows"], list) and len(tbl["rows"]) >= 1

print("\n" + "=" * 60)
print(f"ALL CHECKS PASSED: {total_questions} Questions in Master Q&A Bank.")
print(f"Grand Total: 3 Units x (12 Def + 8 SA + 5 LA) = {total_questions} Questions.")
print("=" * 60)

# Build JS content
base_dir = os.path.dirname(os.path.dirname(__file__))
data_file = os.path.join(base_dir, "data", "data-qa.JS")
repo_file = os.path.join(base_dir, "repo", "data", "data-qa.JS")

# Serialize to JSON with formatting
json_str = json.dumps(units_qa, indent=2, ensure_ascii=False)
js_content = f"/* Master Question & Answer Bank for Veterinary Biochemistry Studio */\n/* Generated for B.V.Sc & A.H. Second Year (VCI MSVE Syllabus) */\nvar qaBank = {json_str};\n"

with open(data_file, "w", encoding="utf-8") as f:
    f.write(js_content)
print(f"\nWrote {os.path.getsize(data_file):,} bytes to {data_file}")

if os.path.exists(os.path.dirname(repo_file)):
    with open(repo_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Mirrored {os.path.getsize(repo_file):,} bytes to {repo_file}")

print("\nMaster Q&A Bank build complete successfully!")
