import os
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

print("--- Checking all extracted images from PDF ---")
files = sorted(os.listdir('extracted_images'))
for f in files:
    p = os.path.join('extracted_images', f)
    if os.path.isfile(p):
        try:
            with Image.open(p) as img:
                print(f"{f}: size={img.size}, format={img.format}, bytes={os.path.getsize(p)}")
        except Exception as e:
            print(f"{f}: error {e}")
