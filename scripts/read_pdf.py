import os
import sys
import PyPDF2

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = None
for f in os.listdir('TaiLieu'):
    if f.lower().endswith('.pdf'):
        pdf_path = os.path.join('TaiLieu', f)
        break

print("Found PDF:", pdf_path)
if pdf_path:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        print("Total pages:", len(reader.pages))
        for i in range(min(15, len(reader.pages))):
            text = reader.pages[i].extract_text() or ''
            clean_text = ' '.join(text.split())
            if len(clean_text) > 0:
                print(f"--- Page {i+1} ---")
                print(clean_text[:200])
