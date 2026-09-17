import re
import glob

files = [
    "data/data-theory-unit1.JS",
    "data/data-theory-unit2.JS",
    "data/data-theory-unit3.JS",
    "data/data-practical.JS",
    "data/data-qa.JS"
]

for f in files:
    print("=" * 60)
    print("FILE:", f)
    with open(f, "r", encoding="utf-8") as fp:
        txt = fp.read()
    
    # Blocks: $$ ... $$
    blocks = re.findall(r'\$\$(.*?)\$\$', txt, re.DOTALL)
    print("Block count ($$...$$):", len(blocks))
    for b in blocks[:5]:
        print("  BLOCK:", repr(b.strip()[:120]))
    
    # Inlines: $ ... $
    inlines = re.findall(r'(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)', txt)
    print("Inline count ($...$):", len(inlines))
    for inl in inlines[:8]:
        print("  INLINE:", repr(inl.strip()))
