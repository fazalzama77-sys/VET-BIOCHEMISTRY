with open('tools/builders/u3_part3.py', 'r', encoding='utf-8') as f:
    text3 = f.read()

text3 = text3.replace('"desc": """', '"desc": r"""')
text3 = text3.replace('"eliteDesc": """', '"eliteDesc": r"""')

with open('tools/builders/u3_part3.py', 'w', encoding='utf-8') as f:
    f.write(text3)

with open('tools/builders/u3_part4.py', 'r', encoding='utf-8') as f:
    text4 = f.read()

text4 = text4.replace('"desc": """', '"desc": r"""')
text4 = text4.replace('"eliteDesc": """', '"eliteDesc": r"""')

with open('tools/builders/u3_part4.py', 'w', encoding='utf-8') as f:
    f.write(text4)

print('Updated both u3_part3.py and u3_part4.py successfully.')
