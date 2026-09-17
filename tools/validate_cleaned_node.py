import os
import sys
import subprocess
import json

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

from test_latex_cleaner import clean_latex

files_to_test = [
    ("data/data-theory-unit1.JS", "DATA_THEORY_U1"),
    ("data/data-theory-unit2.JS", "DATA_THEORY_U2"),
    ("data/data-theory-unit3.JS", "DATA_THEORY_U3"),
    ("data/data-practical.JS", "DATA_PRACTICAL"),
    ("data/data-qa.JS", "DATA_QA"),
]

# Write cleaned content to temp files in scratch directory or tools/temp_*.js
os.makedirs("tools/temp_test", exist_ok=True)

for file_path, var_name in files_to_test:
    with open(file_path, "r", encoding="utf-8") as fp:
        raw = fp.read()
    
    cleaned = clean_latex(raw)
    
    temp_path = os.path.join("tools/temp_test", os.path.basename(file_path))
    with open(temp_path, "w", encoding="utf-8") as fp:
        fp.write(cleaned)

# Now run a node script to verify each temp file
node_test_code = """
const fs = require('fs');

global.window = {};

function testFile(file, evalExpr, expectedKeys) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    eval(code);
    const obj = eval(evalExpr);
    if (!obj) {
      console.error(`FAILED: ${evalExpr} is not defined in ${file}`);
      process.exit(1);
    }
    const keys = Object.keys(obj);
    console.log(`PASS: ${file} -> ${evalExpr} has ${keys.length} items`);
    if (expectedKeys && keys.length !== expectedKeys) {
      console.error(`  Warning: expected ${expectedKeys} items, got ${keys.length}`);
    }
  } catch (err) {
    console.error(`ERROR evaluating ${file}:`, err);
    process.exit(1);
  }
}

testFile('tools/temp_test/data-theory-unit1.JS', 'global.window.theoryData["unit-1"]', 14);
testFile('tools/temp_test/data-theory-unit2.JS', 'global.window.theoryData["unit-2"]', 20);
testFile('tools/temp_test/data-theory-unit3.JS', 'global.window.theoryData["unit-3"]', 21);
testFile('tools/temp_test/data-practical.JS', 'global.window.practicalData["prac-unit-1"]', 7);
testFile('tools/temp_test/data-practical.JS', 'global.window.practicalData["prac-unit-2"]', 8);
testFile('tools/temp_test/data-practical.JS', 'global.window.practicalData["prac-unit-3"]', 7);
testFile('tools/temp_test/data-qa.JS', 'qaBank["unit-1"]', null);

console.log('\\nALL FILES 100% VALID JAVASCRIPT! NO SYNTAX ERRORS!');
"""

with open("tools/temp_test/verify_node.js", "w", encoding="utf-8") as fp:
    fp.write(node_test_code)

print("Running Node.js validation...")
res = subprocess.run(["node", "tools/temp_test/verify_node.js"], capture_output=True, text=True, encoding="utf-8")
print(res.stdout)
if res.stderr:
    print("STDERR:", res.stderr)
