"""
Master compiler for Unit 2: Intermediary Metabolism
Merges all 6 parts and writes to d:/VET BIOCHEMISTRY/data/data-theory-unit2.JS
"""
import json
import os
import sys

# Add builders directory to sys.path
sys.path.insert(0, os.path.dirname(__file__))

from u2_part1 import PART1
from u2_part2 import PART2
from u2_part3 import PART3
from u2_part4 import PART4
from u2_part5 import PART5
from u2_part6 import PART6

unit2_data = {}
unit2_data.update(PART1)
unit2_data.update(PART2)
unit2_data.update(PART3)
unit2_data.update(PART4)
unit2_data.update(PART5)
unit2_data.update(PART6)

expected_keys = [f"u2-t{i:02d}" for i in range(1, 23)]
for k in expected_keys:
    assert k in unit2_data, f"Missing key: {k}"

print(f"Successfully compiled all {len(unit2_data)} topics of Unit 2!")

# Format output file content
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "data", "data-theory-unit2.JS"))

js_content = "var theoryData = window.theoryData = window.theoryData || {};\n"
js_content += 'theoryData["unit-2"] = ' + json.dumps(unit2_data, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Written to {output_path} successfully ({len(js_content)} characters).")
