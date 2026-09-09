"""
Master compiler for all Practical Units:
- prac-unit-1: General Veterinary Biochemistry Lab (7 topics)
- prac-unit-2: Intermediary Metabolism Lab (8 topics)
- prac-unit-3: Veterinary Analytical Biochemistry Lab (7 topics)

Writes to d:/VET BIOCHEMISTRY/data/data-practical.JS and repo mirror
"""
import json
import os
import sys

# Add builders directory to sys.path
sys.path.insert(0, os.path.dirname(__file__))

from p1_builder import PRAC_UNIT1
from p2_builder import PRAC_UNIT2
from p3_builder import PRAC_UNIT3

# Validate keys
expected_p1 = [f"p1-t{i:02d}" for i in range(1, 8)]
for k in expected_p1:
    assert k in PRAC_UNIT1, f"Missing key in prac-unit-1: {k}"

expected_p2 = [f"p2-t{i:02d}" for i in range(1, 9)]
for k in expected_p2:
    assert k in PRAC_UNIT2, f"Missing key in prac-unit-2: {k}"

expected_p3 = [f"p3-t{i:02d}" for i in range(1, 8)]
for k in expected_p3:
    assert k in PRAC_UNIT3, f"Missing key in prac-unit-3: {k}"

total_practical_topics = len(PRAC_UNIT1) + len(PRAC_UNIT2) + len(PRAC_UNIT3)
print(f"Successfully validated all {total_practical_topics} practical topics across all 3 units!")

# Format output file content
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "data", "data-practical.JS"))
repo_output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "repo", "data", "data-practical.JS"))

js_content = "var practicalData = window.practicalData = window.practicalData || {};\n\n"
js_content += 'practicalData["prac-unit-1"] = ' + json.dumps(PRAC_UNIT1, indent=2, ensure_ascii=False) + ";\n\n"
js_content += 'practicalData["prac-unit-2"] = ' + json.dumps(PRAC_UNIT2, indent=2, ensure_ascii=False) + ";\n\n"
js_content += 'practicalData["prac-unit-3"] = ' + json.dumps(PRAC_UNIT3, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Written to {output_path} successfully ({len(js_content)} characters).")

if os.path.exists(os.path.dirname(repo_output_path)):
    with open(repo_output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Mirrored to {repo_output_path} successfully.")
