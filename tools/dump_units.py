import json

def dump_unit(in_file, out_file):
    with open(in_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    with open(out_file, 'w', encoding='utf-8') as out:
        for tid in sorted(data.keys()):
            t = data[tid]
            out.write(f"*** TOPIC: {tid} ***\n")
            out.write(f"SUMMARY: {t.get('summary')}\n\n")
            out.write("--- DESC ---\n" + str(t.get('desc')) + "\n\n")
            out.write("--- ELITE DESC ---\n" + str(t.get('eliteDesc')) + "\n\n")
            out.write("--- KEY POINTS ---\n")
            for kp in t.get('keyPoints', []):
                out.write(f" * {kp}\n")
            out.write("\n--- CLINICAL ---\n" + str(t.get('clinical')) + "\n\n")
            out.write("--- TABLES ---\n")
            for tab in t.get('tables', []):
                out.write(f" [Table] {tab.get('title')}\n")
                out.write(f"  Headers: {tab.get('headers')}\n")
                for row in tab.get('rows', []):
                    out.write(f"  Row: {row}\n")
            out.write("\n" + "="*80 + "\n\n")

if __name__ == '__main__':
    dump_unit('tools/_u1.json', 'tools/u1_dump.txt')
    dump_unit('tools/_u2.json', 'tools/u2_dump.txt')
    dump_unit('tools/_u3.json', 'tools/u3_dump.txt')
    print('Dumped all 3 units to tools/uX_dump.txt successfully')
