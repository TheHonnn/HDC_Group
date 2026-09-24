import sys

sys.stdout.reconfigure(encoding='utf-8')

for fname in ['figma_site_app.js', 'Figma Make App_files/index-C_QTQ5Gb.js.download']:
    try:
        with open(fname, 'r', encoding='utf-8', errors='ignore') as f:
            c = f.read()
        print(f"File {fname}: length={len(c)}")
        for kw in ['HDC', 'Fashion', 'table-vector', 'Sơ mi', 'Polo', 'bộ sưu tập', 'doanh nhân', 'Fraunces', '0d9bb4']:
            idx = c.find(kw)
            print(f"  Keyword '{kw}': found at {idx}")
    except Exception as e:
        print(f"Error {fname}: {e}")
