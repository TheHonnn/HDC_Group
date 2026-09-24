import os
import shutil

os.makedirs('assets', exist_ok=True)

# Copy founder photo
founder_src = 'TaiLieu/1790138822725_5676346164805423165_g351590524180151578_d0240d27c274de1fc73906538b5276e1.jpg'
if os.path.exists(founder_src):
    shutil.copy(founder_src, 'assets/founder.jpg')
    print("Copied founder.jpg")

# Copy key catalogue images
mapping = {
    'extracted_images/page_1_1_X4.jpg': 'assets/hero_model.jpg',
    'extracted_images/page_1_3_X12.png': 'assets/hero_shirt.png',
    'extracted_images/page_2_4_X16.jpg': 'assets/material_bamboo.jpg',
    'extracted_images/page_2_5_X21.jpg': 'assets/material_green.jpg',
    'extracted_images/page_2_13_X33.jpg': 'assets/material_banana.jpg',
    'extracted_images/page_3_15_X39.jpg': 'assets/seamless_detail.jpg',
    'extracted_images/page_3_18_X43.jpg': 'assets/seamless_shirt.jpg',
    'extracted_images/page_4_22_X50.jpg': 'assets/culture_hang_xom_trai.jpg',
    'extracted_images/page_4_23_X51.jpg': 'assets/culture_trong_dong.jpg',
    'extracted_images/page_4_24_X52.jpg': 'assets/culture_nui_dau_rong.jpg',
    'extracted_images/page_4_25_X53.jpg': 'assets/culture_kim_boi.jpg',
    'extracted_images/page_5_42_X87.png': 'assets/shirt_green_natural.png',
    'extracted_images/page_5_46_X95.png': 'assets/shirt_model.png',
    'extracted_images/page_6_47_X4.jpg': 'assets/polo_team.jpg',
    'extracted_images/page_6_48_X5.png': 'assets/polo_orange.png',
    'extracted_images/page_6_52_X13.png': 'assets/polo_blue.png',
    'extracted_images/page_7_55_X28.jpg': 'assets/b2b_service.jpg',
    'extracted_images/page_8_59_X35.jpg': 'assets/golf_uniform.jpg',
    'extracted_images/page_9_60_X65.jpg': 'assets/kids_banner.jpg',
    'extracted_images/page_11_66_X4.png': 'assets/kids_polo.png',
    'extracted_images/page_11_69_X13.png': 'assets/kids_uniform_set.png',
    'extracted_images/page_12_74_X30.png': 'assets/kids_group.png',
}

for src, dst in mapping.items():
    if os.path.exists(src):
        shutil.copy(src, dst)
        print(f"Copied {src} -> {dst}")
