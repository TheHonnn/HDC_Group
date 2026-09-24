import sys

sys.stdout.reconfigure(encoding='utf-8')
with open('app_component.js', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

# Simple formatting: insert newlines after semicolons and braces
res = c.replace(';', ';\n').replace('{', '{\n').replace('}', '\n}')
with open('app_component_beautified.js', 'w', encoding='utf-8') as f:
    f.write(res)
print("Formatted successfully, lines:", res.count('\n'))
