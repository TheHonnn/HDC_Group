import os
import sys
import shutil
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('assets', exist_ok=True)

# Mapping enterprise images to clean, semantic names
enterprise_mapping = {
    # Hero & Branding
    'extracted_images/page_1_1_X4.jpg': 'assets/hero_model.jpg',
    'extracted_images/page_1_3_X12.png': 'assets/hero_shirt_cutout.png',
    'TaiLieu/1790138822725_5676346164805423165_g351590524180151578_d0240d27c274de1fc73906538b5276e1.jpg': 'assets/founder_ceo.jpg',
    'TaiLieu/1790138822764_5676346164805423165_g351590524180151578_2477e3337a015d79816b7d11cc22d776.jpg': 'assets/hdc_team.jpg',

    # Section 1: Sustainable Green Materials
    'extracted_images/page_2_5_X21.jpg': 'assets/material_green_overview.jpg',
    'extracted_images/page_2_4_X16.jpg': 'assets/material_bamboo.jpg',
    'extracted_images/page_2_13_X33.jpg': 'assets/material_banana_coconut.jpg',
    'extracted_images/page_2_12_X31.png': 'assets/material_eco_fabric.png',

    # Section 2: Seamless Technology
    'extracted_images/page_3_15_X39.jpg': 'assets/seamless_cuff_detail.jpg',
    'extracted_images/page_3_16_X40.jpg': 'assets/seamless_collar_detail.jpg',
    'extracted_images/page_3_18_X43.jpg': 'assets/seamless_shirt_full.jpg',

    # Section 3: Cultural Heritage Series
    'extracted_images/page_4_22_X50.jpg': 'assets/culture_hang_xom_trai.jpg',
    'extracted_images/page_4_23_X51.jpg': 'assets/culture_trong_dong_co.jpg',
    'extracted_images/page_4_24_X52.jpg': 'assets/culture_nui_dau_rong.jpg',
    'extracted_images/page_4_25_X53.jpg': 'assets/culture_suoi_kim_boi.jpg',

    # Section 4: Shirts
    'extracted_images/page_5_42_X87.png': 'assets/shirt_natural_green.png',
    'extracted_images/page_5_46_X95.png': 'assets/shirt_model_longsleeve.png',
    'extracted_images/page_5_38_X79.png': 'assets/shirt_seamless_white.png',
    'extracted_images/page_5_39_X81.png': 'assets/shirt_stripes_blue.png',
    'extracted_images/page_5_43_X89.png': 'assets/shirt_classic_navy.png',

    # Section 5: Polo & Golf
    'extracted_images/page_6_47_X4.jpg': 'assets/polo_corporate_team.jpg',
    'extracted_images/page_6_48_X5.png': 'assets/polo_orange_collar.png',
    'extracted_images/page_6_49_X7.png': 'assets/polo_white_navy.png',
    'extracted_images/page_6_52_X13.png': 'assets/polo_navy_sport.png',
    'extracted_images/page_8_59_X35.jpg': 'assets/golf_tournament_dnt.jpg',
    'extracted_images/page_8_57_X33.jpg': 'assets/golf_antiuv_player.jpg',

    # Section 6: IHDC Kids School Uniform
    'extracted_images/page_9_60_X65.jpg': 'assets/kids_students_banner.jpg',
    'extracted_images/page_11_66_X4.png': 'assets/kids_polo_orange.png',
    'extracted_images/page_11_68_X11.png': 'assets/kids_polo_cyan.png',
    'extracted_images/page_11_69_X13.png': 'assets/kids_uniform_gile_skirt.png',
    'extracted_images/page_11_70_X15.png': 'assets/kids_uniform_boy_set.png',
    'extracted_images/page_12_74_X30.png': 'assets/kids_classroom_group.png',

    # Section 7: B2B Services
    'extracted_images/page_7_55_X28.jpg': 'assets/b2b_consulting_factory.jpg',
    'extracted_images/page_7_54_X27.jpg': 'assets/b2b_design_process.jpg'
}

print("Optimizing and saving enterprise images...")
for src, dst in enterprise_mapping.items():
    if os.path.exists(src):
        try:
            with Image.open(src) as img:
                max_dim = 1800 if ('hero' in dst or 'founder' in dst) else 1200
                img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                
                if dst.endswith('.jpg') and img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                img.save(dst, quality=90, optimize=True)
                print(f"[OK] Saved {dst} ({img.size}) from {src}")
        except Exception as e:
            shutil.copy(src, dst)
            print(f"[COPIED] {src} -> {dst}: {e}")
    else:
        print(f"[NOT FOUND] {src}")

print("All enterprise images processed successfully.")
