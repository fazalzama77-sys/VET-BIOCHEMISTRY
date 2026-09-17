import re
import sys
import json

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

from test_latex_cleaner import clean_latex

files = [
    "data/data-theory-unit1.JS",
    "data/data-theory-unit2.JS",
    "data/data-theory-unit3.JS",
    "data/data-practical.JS",
    "data/data-qa.JS"
]

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    
    cleaned = clean_latex(raw)
    
    # Check for remaining \rightarrow
    rem_arrows = len(re.findall(r'\\rightarrow', cleaned))
    rem_alphas = len(re.findall(r'\\alpha', cleaned))
    rem_fracs = len(re.findall(r'\\frac', cleaned))
    rem_texts = len(re.findall(r'\\text\{', cleaned))
    rem_dollars = len(re.findall(r'\$', cleaned))
    
    print(f"FILE: {f}")
    print(f"  Raw len: {len(raw)}, Cleaned len: {len(cleaned)}")
    print(f"  Remaining \\rightarrow: {rem_arrows}")
    print(f"  Remaining \\alpha: {rem_alphas}")
    print(f"  Remaining \\frac: {rem_fracs}")
    print(f"  Remaining \\text: {rem_texts}")
    print(f"  Remaining $: {rem_dollars}")
    
    if rem_fracs > 0:
        f_matches = re.findall(r'.{0,40}\\frac.{0,60}', cleaned)
        print("  Sample remaining \\frac:")
        for fm in f_matches[:8]:
            print("    ", repr(fm))
