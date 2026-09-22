import sys, re
sys.stdout.reconfigure(encoding='utf-8')

files = [
    ('Unit 1', 'data/data-theory-unit1.JS'),
    ('Unit 2', 'data/data-theory-unit2.JS'),
    ('Unit 3', 'data/data-theory-unit3.JS')
]

for uname, fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            s = line.strip()
            # If line is inside a string (contains quotes) and contains } or {
            if ('"' in line or "'" in line):
                # ignore structural lines like "key": { or },
                if s.endswith('{') or s.endswith('},') or s == '}' or s == '};':
                    continue
                if '}' in line or '{' in line:
                    # check where } or { is
                    print(f"[{uname}] Line {idx}: {s[:120]}")
