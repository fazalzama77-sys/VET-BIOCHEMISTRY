import os
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Read original and cleaned
with open('data/data-theory-unit1.JS', 'r', encoding='utf-8') as fp:
    orig_u1 = fp.read()
with open('tools/temp_test/data-theory-unit1.JS', 'r', encoding='utf-8') as fp:
    clean_u1 = fp.read()

idx1 = orig_u1.find('Dextrans:')
idx2 = clean_u1.find('Dextrans:')

print("=== SAMPLE 1: DEXTRANS (USER SCREENSHOT TOPIC) ===")
print("BEFORE (ORIGINAL):")
print(orig_u1[idx1:idx1+350])
print("\nAFTER (CLEANED):")
print(clean_u1[idx2:idx2+350])

print("\n" + "="*70 + "\n")

with open('data/data-theory-unit2.JS', 'r', encoding='utf-8') as fp:
    orig_u2 = fp.read()
with open('tools/temp_test/data-theory-unit2.JS', 'r', encoding='utf-8') as fp:
    clean_u2 = fp.read()

idx1 = orig_u2.find('Lineweaver-Burk')
idx2 = clean_u2.find('Lineweaver-Burk')

print("=== SAMPLE 2: ENZYME KINETICS (UNIT 2) ===")
print("BEFORE (ORIGINAL):")
print(orig_u2[idx1:idx1+350])
print("\nAFTER (CLEANED):")
print(clean_u2[idx2:idx2+350])

print("\n" + "="*70 + "\n")

with open('data/data-theory-unit3.JS', 'r', encoding='utf-8') as fp:
    orig_u3 = fp.read()
with open('tools/temp_test/data-theory-unit3.JS', 'r', encoding='utf-8') as fp:
    clean_u3 = fp.read()

idx1 = orig_u3.find('Anion Gap')
idx2 = clean_u3.find('Anion Gap')

print("=== SAMPLE 3: ANION GAP & ACID-BASE (UNIT 3) ===")
print("BEFORE (ORIGINAL):")
print(orig_u3[idx1:idx1+350])
print("\nAFTER (CLEANED):")
print(clean_u3[idx2:idx2+350])

print("\n" + "="*70 + "\n")

with open('data/data-practical.JS', 'r', encoding='utf-8') as fp:
    orig_p = fp.read()
with open('tools/temp_test/data-practical.JS', 'r', encoding='utf-8') as fp:
    clean_p = fp.read()

idx1 = orig_p.find('Molarity (M)')
idx2 = clean_p.find('Molarity (M)')

print("=== SAMPLE 4: MOLARITY & CALCULATIONS (PRACTICALS) ===")
print("BEFORE (ORIGINAL):")
print(orig_p[idx1:idx1+350])
print("\nAFTER (CLEANED):")
print(clean_p[idx2:idx2+350])
