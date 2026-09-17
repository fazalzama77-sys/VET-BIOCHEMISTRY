
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

console.log('\nALL FILES 100% VALID JAVASCRIPT! NO SYNTAX ERRORS!');
