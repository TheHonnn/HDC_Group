import os
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

folder = 'Figma Make App_files'
for f in os.listdir(folder):
    p = os.path.join(folder, f)
    if os.path.isfile(p):
        sz = os.path.getsize(p)
        try:
            with Image.open(p) as img:
                print(f, sz, img.size, img.format)
        except Exception as e:
            print(f, sz, type(e).__name__)
