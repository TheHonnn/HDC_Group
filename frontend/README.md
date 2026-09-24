# HDC Fashion - Frontend Application

Dự án Frontend hiện đại cho thương hiệu **HDC Fashion - Phong Cách Tạo Thành Công**.

## 🛠 Công Nghệ Sử Dụng

- **Vite 6** & **React 19**
- **TypeScript** (Strict Type Safety, Type-Only Imports)
- **Tailwind CSS** (Tùy biến bảng màu HDC: `hdc-teal`, `hdc-cyan`, `hdc-gold`, `hdc-linen`, typography Fraunces & DM Sans)
- **Lucide React** (Hệ thống icon vector tối giản, sắc nét)

## 📦 Kiến Trúc Thư Mục `src/`

```
src/
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx   # Thanh thông báo trên cùng (hotline, cam kết)
│   │   ├── Header.tsx            # Thanh điều hướng sticky, logo, badge giỏ tư vấn, menu mobile
│   │   └── Footer.tsx            # Chân trang đầy đủ thông tin pháp lý, hotline, địa chỉ, liên kết
│   ├── home/
│   │   ├── HeroSection.tsx       # Bìa catalogue 0001.jpg, thông điệp chủ đạo, CTA
│   │   ├── StatsBar.tsx          # 4 chỉ số ấn tượng (10+ năm, 1.000+ mẫu, 63 tỉnh thành)
│   │   ├── FeaturedCollections.tsx # 4 bộ sưu tập tiêu biểu
│   │   ├── SustainableMaterials.tsx # Nguồn nguyên liệu xanh bản địa Việt Nam
│   │   ├── SeamlessTech.tsx      # Đột phá công nghệ sơ mi Seamless không đường may
│   │   ├── CulturalHeritage.tsx  # Hồn thiêng di sản văn hóa Việt Nam
│   │   ├── CatalogueGallery.tsx  # Trình duyệt tương tác 12 trang Catalogue gốc
│   │   ├── B2BCommitments.tsx    # Quy trình 4 bước may đo B2B & 5 cam kết vàng
│   │   ├── AboutFounder.tsx      # CEO Nguyễn Thị Thương & giá trị cốt lõi
│   │   └── ConsultationForm.tsx  # Form đăng ký tư vấn & nhận báo giá trực tuyến
│   ├── shop/
│   │   ├── ShopView.tsx          # Gian hàng E-Commerce may đo, tìm kiếm & bộ lọc danh mục
│   │   └── ProductCard.tsx       # Thẻ sản phẩm với ảnh thực tế, thông số, nút chọn tư vấn
│   ├── modals/
│   │   ├── ProductDetailModal.tsx # Xem chi tiết thông số, chọn size, thêm giỏ tư vấn
│   │   ├── ConsultationDrawer.tsx # Ngăn kéo xem danh sách mẫu đã chọn, gửi yêu cầu
│   │   └── CatalogueLightboxModal.tsx # Phóng to toàn màn hình duyệt 12 trang catalogue
│   └── ui/
│       └── FloatingQuoteBadge.tsx # Huy hiệu nổi giỏ tư vấn / xem mẫu mới
├── context/
│   └── ConsultationContext.tsx   # State management toàn cục (giỏ tư vấn, modal, local storage)
├── data/
│   ├── assets.ts                 # Đường dẫn ảnh tập trung trỏ vào /assets/...
│   ├── products.ts               # Danh sách sản phẩm chi tiết
│   ├── collections.ts            # Dữ liệu các bộ sưu tập nổi bật
│   ├── catalogue.ts              # Dữ liệu 12 trang catalogue gốc
│   └── company.ts                # Thông tin doanh nghiệp, hotline, địa chỉ
├── types/
│   └── index.ts                  # Type definitions TypeScript
├── App.tsx                       # Component điều phối ứng dụng chính
├── main.tsx                      # Entry point
└── index.css                     # Tailwind directives, fonts, custom scrollbar
```

## 🚀 Lệnh Phát Triển

- `npm run dev`: Chạy môi trường development tại http://localhost:5173/
- `npm run build`: Kiểm tra type và đóng gói sản phẩm vào `dist/`
- `npm run preview`: Xem thử bản build đóng gói
