import os
import sys
import shutil

sys.stdout.reconfigure(encoding='utf-8')

src_dir = os.path.join('TaiLieu', '2023-12-28_Catalogue đồng phục_1')
dst_dir = 'assets'
figma_dir = 'Figma Make App_files'

os.makedirs(dst_dir, exist_ok=True)
os.makedirs(figma_dir, exist_ok=True)

for i in range(1, 13):
    fname = f"{i:04d}.jpg"
    src_path = os.path.join(src_dir, fname)
    if os.path.exists(src_path):
        # copy to assets as 0001.jpg etc
        shutil.copy(src_path, os.path.join(dst_dir, fname))
        shutil.copy(src_path, os.path.join(figma_dir, fname))
        print(f"Copied {fname} -> {dst_dir} and {figma_dir}")

# Copy 0001.jpg specifically as hero_cover.jpg as well
shutil.copy(os.path.join(src_dir, '0001.jpg'), os.path.join(dst_dir, 'hero_cover.jpg'))
print("Copied 0001.jpg as assets/hero_cover.jpg")
