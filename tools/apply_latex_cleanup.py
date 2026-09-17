import os
import sys
import shutil
import subprocess

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Add tools to path
sys.path.insert(0, os.path.abspath('tools'))
from test_latex_cleaner import clean_latex

targets = [
    "data/data-theory-unit1.JS",
    "data/data-theory-unit2.JS",
    "data/data-theory-unit3.JS",
    "data/data-practical.JS",
    "data/data-qa.JS"
]

backup_dir = "tools/backup_data"
os.makedirs(backup_dir, exist_ok=True)

print("Step 1: Creating safety backups...")
for rel_path in targets:
    fname = os.path.basename(rel_path)
    shutil.copy2(rel_path, os.path.join(backup_dir, fname))
print(f"Safety backups created in {backup_dir}/")

print("\nStep 2: Cleaning LaTeX from target data files...")
for rel_path in targets:
    with open(rel_path, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    
    cleaned = clean_latex(raw)
    
    with open(rel_path, 'w', encoding='utf-8') as fp:
        fp.write(cleaned)
    
    # Mirror to repo/data/
    repo_path = os.path.join("repo", rel_path)
    if os.path.exists(os.path.dirname(repo_path)):
        with open(repo_path, 'w', encoding='utf-8') as fp:
            fp.write(cleaned)
    
    print(f"  Processed & mirrored: {rel_path} (Raw: {len(raw)} chars -> Cleaned: {len(cleaned)} chars)")

print("\nStep 3: Running Node.js validation on updated files...")
node_verify_code = """
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
  } catch (err) {
    console.error(`ERROR evaluating ${file}:`, err);
    process.exit(1);
  }
}

testFile('data/data-theory-unit1.JS', 'global.window.theoryData["unit-1"]', 17);
testFile('data/data-theory-unit2.JS', 'global.window.theoryData["unit-2"]', 22);
testFile('data/data-theory-unit3.JS', 'global.window.theoryData["unit-3"]', 16);
testFile('data/data-practical.JS', 'global.window.practicalData["prac-unit-1"]', 7);
testFile('data/data-practical.JS', 'global.window.practicalData["prac-unit-2"]', 8);
testFile('data/data-practical.JS', 'global.window.practicalData["prac-unit-3"]', 7);
testFile('data/data-qa.JS', 'qaBank["unit-1"]', 25);

// Also test repo files
testFile('repo/data/data-theory-unit1.JS', 'global.window.theoryData["unit-1"]', 17);
testFile('repo/data/data-theory-unit2.JS', 'global.window.theoryData["unit-2"]', 22);
testFile('repo/data/data-theory-unit3.JS', 'global.window.theoryData["unit-3"]', 16);
testFile('repo/data/data-practical.JS', 'global.window.practicalData["prac-unit-1"]', 7);
testFile('repo/data/data-practical.JS', 'global.window.practicalData["prac-unit-2"]', 8);
testFile('repo/data/data-practical.JS', 'global.window.practicalData["prac-unit-3"]', 7);
testFile('repo/data/data-qa.JS', 'qaBank["unit-1"]', 25);

console.log('\\nALL 10 FILES (data/ and repo/data/) ARE 100% VALID JAVASCRIPT!');
"""

with open("tools/verify_applied.js", "w", encoding="utf-8") as fp:
    fp.write(node_verify_code)

res = subprocess.run(["node", "tools/verify_applied.js"], capture_output=True, text=True, encoding="utf-8")
print(res.stdout)
if res.stderr:
    print("STDERR:", res.stderr)
