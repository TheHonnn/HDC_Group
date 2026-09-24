import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('figma_site_app.js', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

app_part = c[380000:]
with open('app_component.js', 'w', encoding='utf-8') as f:
    f.write(app_part)

print(f"Extracted {len(app_part)} bytes of application code to app_component.js")
