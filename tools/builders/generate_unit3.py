"""
Master compiler for Unit 3: Veterinary Analytical Biochemistry
Merges all 4 parts and writes to d:/VET BIOCHEMISTRY/data/data-theory-unit3.JS and repo mirror
"""
import json
import os
import sys
import shutil

# Add builders directory to sys.path
sys.path.insert(0, os.path.dirname(__file__))

from u3_part1 import PART1
from u3_part2 import PART2
from u3_part3 import PART3
from u3_part4 import PART4

unit3_data = {}
unit3_data.update(PART1)
unit3_data.update(PART2)
unit3_data.update(PART3)
unit3_data.update(PART4)

# Ensure every topic has a rich clinical HTML property for app.js
for k, v in unit3_data.items():
    if "clinicalCases" in v and ("clinical" not in v or not v["clinical"]):
        cases_html = []
        for c in v["clinicalCases"]:
            cases_html.append(
                f"<p><strong>Clinical Case Study: {c.get('title', '')}</strong><br>"
                f"<strong>Species & Signalment:</strong> {c.get('species', '')} — {c.get('signalment', '')}<br>"
                f"<strong>History & Signs:</strong> {c.get('history', '')}<br>"
                f"<strong>Biochemical Findings:</strong> {c.get('biochemFindings', '')}<br>"
                f"<strong>Diagnostic Interpretation:</strong> {c.get('interpretation', '')}<br>"
                f"<strong>Therapeutic Management:</strong> {c.get('action', '')}</p>"
            )
        v["clinical"] = "".join(cases_html)

expected_keys = [f"u3-t{i:02d}" for i in range(1, 17)]
for k in expected_keys:
    assert k in unit3_data, f"Missing key: {k}"

print(f"Successfully compiled all {len(unit3_data)} topics of Unit 3!")

# Format output file content
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "data", "data-theory-unit3.JS"))
repo_output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "repo", "data", "data-theory-unit3.JS"))

js_content = "var theoryData = window.theoryData = window.theoryData || {};\n"
js_content += 'theoryData["unit-3"] = ' + json.dumps(unit3_data, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Written to {output_path} successfully ({len(js_content)} characters).")

if os.path.exists(os.path.dirname(repo_output_path)):
    with open(repo_output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Mirrored to {repo_output_path} successfully.")
