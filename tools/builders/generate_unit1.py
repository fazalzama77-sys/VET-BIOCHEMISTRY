"""
Master compiler for Unit 1: General Veterinary Biochemistry
Merges all 5 parts and writes to d:/VET BIOCHEMISTRY/data/data-theory-unit1.JS
"""
import json
import os
import sys

# Add builders directory to sys.path
sys.path.insert(0, os.path.dirname(__file__))

from u1_part1 import PART1
from u1_part2 import PART2
from u1_part3 import PART3
from u1_part4 import PART4
from u1_part5 import PART5

unit1_data = {}
unit1_data.update(PART1)
unit1_data.update(PART2)
unit1_data.update(PART3)
unit1_data.update(PART4)
unit1_data.update(PART5)

expected_keys = [f"u1-t{i:02d}" for i in range(1, 18)]
for k in expected_keys:
    assert k in unit1_data, f"Missing key: {k}"

print(f"Successfully compiled all {len(unit1_data)} topics of Unit 1!")

# Format output file content
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "data", "data-theory-unit1.JS"))

js_content = "var theoryData = window.theoryData = window.theoryData || {};\n"
js_content += 'theoryData["unit-1"] = ' + json.dumps(unit1_data, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Written to {output_path} successfully ({len(js_content)} characters).")
