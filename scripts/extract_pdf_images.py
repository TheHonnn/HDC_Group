import os
import sys
import PyPDF2
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('extracted_images', exist_ok=True)

pdf_path = 'TaiLieu/2023-12-28_Catalogue đồng phục_1.pdf'
with open(pdf_path, 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    img_count = 0
    for page_idx, page in enumerate(reader.pages):
        for img_obj in page.images:
            img_count += 1
            out_name = f"page_{page_idx+1}_{img_count}_{img_obj.name}"
            out_path = os.path.join('extracted_images', out_name)
            with open(out_path, 'wb') as img_out:
                img_out.write(img_obj.data)
            
            try:
                with Image.open(out_path) as im:
                    print(f"P{page_idx+1}: {out_name} - {im.size} {im.format} ({os.path.getsize(out_path)} bytes)")
            except Exception as e:
                print(f"P{page_idx+1}: {out_name} (error: {e})")

print(f"Extracted total {img_count} images.")
