import re
import os
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

def extract_braced_group(text, pos):
    while pos < len(text) and text[pos].isspace():
        pos += 1
    if pos >= len(text) or text[pos] != '{':
        return None, pos
    depth = 0
    start = pos + 1
    for i in range(pos, len(text)):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return text[start:i], i + 1
    return None, pos

def clean_latex(text):
    if not text:
        return text

    # Step 0: Fix specific corrupted escapes like \u0007lpha or \x07lpha -> alpha
    text = text.replace('\\u0007lpha', 'α')
    text = text.replace('\x07lpha', 'α')
    text = text.replace('\\u0007', '')

    # Step 1: Handle block math $$ ... $$
    def convert_block(match):
        inner = match.group(1).strip()
        converted = convert_latex_math(inner)
        return f"<div class='equation-block'>{converted}</div>"

    text = re.sub(r'\$\$(.*?)\$\$', convert_block, text, flags=re.DOTALL)

    # Step 2: Handle inline math $ ... $
    def convert_inline(match):
        inner = match.group(1).strip()
        converted = convert_latex_math(inner)
        return converted

    text = re.sub(r'(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)', convert_inline, text)

    # Step 3: Any leftover standalone LaTeX commands outside $...$
    # We do NOT touch normal JS/HTML escapes like \n, \t, \" in raw text
    # But we clean specific symbols if they appear outside
    text = clean_standalone_symbols(text)

    return text

def clean_standalone_symbols(s):
    # Standalone \rightarrow, \alpha, etc. that might appear without $ signs
    standalone_replaces = [
        (r'\\+rightarrow', '→'),
        (r'\\+longrightarrow', '→'),
        (r'\\+leftarrow', '←'),
        (r'\\+rightleftharpoons', '⇌'),
        (r'\\+leftrightarrow', '↔'),
        (r'\\+alpha', 'α'),
        (r'\\+beta', 'β'),
        (r'\\+gamma', 'γ'),
        (r'\\+delta', 'δ'),
        (r'\\+Delta', 'Δ'),
        (r'\\+epsilon', 'ε'),
        (r'\\+lambda', 'λ'),
        (r'\\+mu', 'μ'),
        (r'\\+pi', 'π'),
        (r'\\+sigma', 'σ'),
        (r'\\+omega', 'ω'),
        (r'\\+times', '×'),
        (r'\\+pm', '±'),
        (r'\\+ge\b|\\+geq\b', '≥'),
        (r'\\+le\b|\\+leq\b', '≤'),
        (r'\\+approx\b', '≈'),
        (r'\\+cdot\b', '·'),
        (r'\\+circ\b', '°'),
        (r'\\+AA\b', 'Å'),
        (r'\\+uparrow\b', '↑'),
        (r'\\+downarrow\b', '↓'),
    ]
    for pat, sym in standalone_replaces:
        s = re.sub(pat, sym, s)
    return s

def convert_latex_math(s, is_general=False):
    if not s:
        return s

    # Normalize multiple backslashes (e.g. \\alpha or \\\\alpha -> \alpha)
    s = re.sub(r'\\+', r'\\', s)

    # 1. Parse \frac{num}{den} with balanced brace extractor
    while r'\frac' in s:
        idx = s.find(r'\frac')
        pos = idx + 5
        num, pos2 = extract_braced_group(s, pos)
        if num is None:
            # Check if it's single character or digit e.g. \frac12
            # or malformed
            break
        den, pos3 = extract_braced_group(s, pos2)
        if den is None:
            break
        # Recursively convert numerator and denominator
        c_num = convert_latex_math(num)
        c_den = convert_latex_math(den)
        
        # Decide if parentheses are needed
        if any(op in c_num for op in ['+', '-', '×', '·', ' ']) and not (c_num.startswith('(') and c_num.endswith(')')):
            c_num_str = f'({c_num})'
        else:
            c_num_str = c_num
            
        if any(op in c_den for op in ['+', '-', '×', '·', ' ']) and not (c_den.startswith('(') and c_den.endswith(')')):
            c_den_str = f'({c_den})'
        else:
            c_den_str = c_den
            
        replacement = f'{c_num_str} / {c_den_str}'
        s = s[:idx] + replacement + s[pos3:]

    # 2. Text and styling macros with balanced braces: \mathbf{}, \textbf{}, \text{}, \mathrm{}, etc.
    for macro in [r'\mathbf', r'\textbf', r'\text', r'\mathrm', r'\mathit', r'\underline']:
        while macro in s:
            idx = s.find(macro)
            pos = idx + len(macro)
            content, end_pos = extract_braced_group(s, pos)
            if content is None:
                break
            c_content = convert_latex_math(content)
            if macro in [r'\mathbf', r'\textbf']:
                rep = f'<b>{c_content}</b>'
            elif macro == r'\mathit':
                rep = f'<i>{c_content}</i>'
            elif macro == r'\underline':
                rep = f'<u>{c_content}</u>'
            else:
                rep = c_content
            s = s[:idx] + rep + s[end_pos:]

    # 3. \xrightarrow[below]{above}
    while r'\xrightarrow' in s:
        idx = s.find(r'\xrightarrow')
        pos = idx + len(r'\xrightarrow')
        below = ""
        if pos < len(s) and s[pos] == '[':
            end_bracket = s.find(']', pos)
            if end_bracket != -1:
                below = s[pos+1:end_bracket]
                pos = end_bracket + 1
        above, end_pos = extract_braced_group(s, pos)
        if above is None:
            # If no brace, just replace with arrow
            s = s[:idx] + ' → ' + s[pos:]
            continue
        c_above = convert_latex_math(above).strip()
        c_below = convert_latex_math(below).strip() if below else ""
        label = c_above + (f' / {c_below}' if c_below else '')
        s = s[:idx] + f' ──[ {label} ]──> ' + s[end_pos:]

    # 4. \underset and \overset (e.g. rate constants over/under reversible arrows)
    while r'\underset' in s or r'\overset' in s:
        idx_under = s.find(r'\underset')
        idx_over = s.find(r'\overset')
        if idx_under != -1 and (idx_over == -1 or idx_under < idx_over):
            macro = r'\underset'
            idx = idx_under
        else:
            macro = r'\overset'
            idx = idx_over
        pos = idx + len(macro)
        arg1, pos2 = extract_braced_group(s, pos)
        if arg1 is None:
            s = s[:idx] + s[pos:]
            continue
        next_macro = None
        if s[pos2:].startswith(r'\overset'):
            next_macro = r'\overset'
        elif s[pos2:].startswith(r'\underset'):
            next_macro = r'\underset'
            
        if next_macro:
            pos3 = pos2 + len(next_macro)
            arg2, pos4 = extract_braced_group(s, pos3)
            arg3, pos5 = extract_braced_group(s, pos4)
            c1 = convert_latex_math(arg1)
            c2 = convert_latex_math(arg2) if arg2 else ""
            c3 = convert_latex_math(arg3) if arg3 else ""
            if '⇌' in c3 or r'\rightleftharpoons' in (arg3 or ''):
                rep = f' ⇌ ({c2} / {c1}) ⇌ '
            else:
                rep = f' {c3} ({c2} / {c1}) '
            s = s[:idx] + rep + s[pos5:]
        else:
            arg2, pos3 = extract_braced_group(s, pos2)
            if arg2:
                c1 = convert_latex_math(arg1)
                c2 = convert_latex_math(arg2)
                s = s[:idx] + f' {c2} ({c1}) ' + s[pos3:]
            else:
                c1 = convert_latex_math(arg1)
                s = s[:idx] + f' {c1} ' + s[pos2:]

    while r'\xrightleftharpoons' in s:
        idx = s.find(r'\xrightleftharpoons')
        pos = idx + len(r'\xrightleftharpoons')
        below = ""
        if pos < len(s) and s[pos] == '[':
            end_bracket = s.find(']', pos)
            if end_bracket != -1:
                below = s[pos+1:end_bracket]
                pos = end_bracket + 1
        above, end_pos = extract_braced_group(s, pos)
        if above is None:
            s = s[:idx] + ' ⇌ ' + s[pos:]
            continue
        c_above = convert_latex_math(above).strip()
        s = s[:idx] + f' ⇌ [ {c_above} ] ⇌ ' + s[end_pos:]

    # 5. Greek letters
    greek_map = [
        (r'\\alpha', 'α'),
        (r'\\beta', 'β'),
        (r'\\gamma', 'γ'),
        (r'\\Delta', 'Δ'),
        (r'\\delta', 'δ'),
        (r'\\epsilon', 'ε'),
        (r'\\varepsilon', 'ε'),
        (r'\\lambda', 'λ'),
        (r'\\mu', 'μ'),
        (r'\\pi', 'π'),
        (r'\\sigma', 'σ'),
        (r'\\omega', 'ω'),
        (r'\\Omega', 'Ω'),
        (r'\\phi', 'φ'),
        (r'\\psi', 'ψ'),
        (r'\\Psi', 'Ψ'),
        (r'\\kappa', 'κ'),
        (r'\\theta', 'θ'),
    ]
    for pat, sym in greek_map:
        s = re.sub(pat + r'(?![a-zA-Z])', sym, s)

    # 6. Math operators & symbols
    operator_map = [
        (r'\\rightleftharpoons', '⇌'),
        (r'\\leftrightarrow', '↔'),
        (r'\\longleftrightarrow', '↔'),
        (r'\\longrightarrow', '→'),
        (r'\\rightarrow', '→'),
        (r'\\to(?![a-zA-Z])', '→'),
        (r'\\longleftarrow', '←'),
        (r'\\leftarrow', '←'),
        (r'\\implies', '⇒'),
        (r'\\iff', '⇔'),
        (r'\\uparrow', '↑'),
        (r'\\downarrow', '↓'),
        (r'\\times', '×'),
        (r'\\pm', '±'),
        (r'\\ge(?![a-zA-Z])', '≥'),
        (r'\\geq', '≥'),
        (r'\\le(?![a-zA-Z])', '≤'),
        (r'\\leq', '≤'),
        (r'\\approx', '≈'),
        (r'\\sim(?![a-zA-Z])', '≈'),
        (r'\\cdot', '·'),
        (r'\\bullet', '·'),
        (r'\\equiv', '≡'),
        (r'\\neq', '≠'),
        (r'\\gg', '≫'),
        (r'\\ll', '≪'),
        (r'\\propto', '∝'),
        (r'\\sum', 'Σ'),
        (r'\\cdots', '...'),
        (r'\\ddagger', '‡'),
        (r'\\AA(?![a-zA-Z])', 'Å'),
        (r'\\prime', '′'),
        (r'\\circ', '°'),
        (r'\\bar\{?x\}?', 'x̄'),
        (r'\\%', '%'),
    ]
    for pat, sym in operator_map:
        s = re.sub(pat, sym, s)

    # 7. Brackets & Spacing
    s = s.replace(r'\left(', '(').replace(r'\right)', ')')
    s = s.replace(r'\left[', '[').replace(r'\right]', ']')
    s = s.replace(r'\left\{', '{').replace(r'\right\}', '}')
    s = s.replace(r'\quad', '  ').replace(r'\qquad', '    ')
    s = s.replace(r'\,', ' ').replace(r'\;', ' ').replace(r'\ ', ' ')
    s = s.replace(r'\log_{10}', 'log₁₀')
    s = s.replace(r'\log_e', 'ln').replace(r'\ln(?![a-zA-Z])', 'ln')
    s = re.sub(r'\\log(?![a-zA-Z])', 'log', s)

    # 8. Specific common biochemistry sub/superscripts
    # Chemical ions
    s = re.sub(r'\bNa\^\+', 'Na⁺', s)
    s = re.sub(r'\bK\^\+', 'K⁺', s)
    s = re.sub(r'\bCl\^-', 'Cl⁻', s)
    s = re.sub(r'\bCa\^\{?2\+\}?', 'Ca²⁺', s)
    s = re.sub(r'\bMg\^\{?2\+\}?', 'Mg²⁺', s)
    s = re.sub(r'\bH\^\+', 'H⁺', s)
    s = re.sub(r'\bOH\^-', 'OH⁻', s)
    s = re.sub(r'\bHCO_3\^-', 'HCO₃⁻', s)
    s = re.sub(r'\bCO_2\b', 'CO₂', s)
    s = re.sub(r'\bO_2\b', 'O₂', s)
    s = re.sub(r'\bN_2\b', 'N₂', s)
    s = re.sub(r'\bH_2O\b', 'H₂O', s)
    s = re.sub(r'\bH_2O_2\b', 'H₂O₂', s)
    s = re.sub(r'\bH_2SO_4\b', 'H₂SO₄', s)
    s = re.sub(r'\bH_3PO_4\b', 'H₃PO₄', s)
    s = re.sub(r'\bPO_4\^\{?3-\}?', 'PO₄³⁻', s)
    s = re.sub(r'\bNH_4\^\+', 'NH₄⁺', s)

    # Exponents / powers
    s = re.sub(r'10\^\{?-(\d+)\}?', lambda m: '10' + ''.join({'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}[d] for d in m.group(1)), s)
    s = re.sub(r'10\^\{?(\d+)\}?', lambda m: '10' + ''.join({'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}[d] for d in m.group(1)), s)

    # Enzyme kinetics symbols
    s = re.sub(r'V_\{?max\}?', 'Vmax', s)
    s = re.sub(r'K_\{?m\}?', 'Km', s)
    s = re.sub(r'k_\{?cat\}?', 'kcat', s)
    s = re.sub(r'K_\{?eq\}?', 'Keq', s)
    s = re.sub(r'E_\{?a\}?', 'Ea', s)
    s = re.sub(r'ΔG\^\{?‡\}?', 'ΔG‡', s)
    s = re.sub(r'ΔG\^\{?°\}?', 'ΔG°', s)
    s = re.sub(r'ΔG\^\{?0\}?', 'ΔG°', s)
    s = re.sub(r'ΔG\^\{?\\ddagger\}?', 'ΔG‡', s)
    s = re.sub(r'ΔG\^\{?\\circ\}?', 'ΔG°', s)
    s = re.sub(r'ΔΨ', 'ΔΨ', s)

    # Degree Celsius
    s = re.sub(r'\^\{?°\}?C|\^°\s*C', '°C', s)

    # Number subscripts (e.g. C_1, C_2, V_1, V_2, alpha_1, beta_2, K_a1, etc.)
    def sub_nums(m):
        base = m.group(1)
        sub = m.group(2)
        sub_map = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'}
        return base + ''.join(sub_map.get(d, d) for d in sub)
    s = re.sub(r'([a-zA-Zαβγδε])_\{?(\d+)\}?', sub_nums, s)

    # Linkage notation specifically: e.g. α(1 → 6)
    s = re.sub(r'α\(1\s*→\s*([0-9])\)', r'α(1 → \1)', s)
    s = re.sub(r'β\(1\s*→\s*([0-9])\)', r'β(1 → \1)', s)

    # Any remaining backslash followed by letters inside math expression: e.g. \seconds -> seconds
    s = re.sub(r'\\([a-zA-Z]+)', r'\1', s)

    # Clean leftover braces from math groups
    s = re.sub(r'\{([^{}]+)\}', r'\1', s)

    # Clean redundant spaces
    s = re.sub(r' +', ' ', s)

    # Remove any lingering backslash inside math expression
    s = s.replace('\\', '')

    return s
