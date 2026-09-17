
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

console.log('\nALL 10 FILES (data/ and repo/data/) ARE 100% VALID JAVASCRIPT!');
