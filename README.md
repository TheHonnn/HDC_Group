# HDC Fashion - Đồng Phục & Thời Trang Doanh Nghiệp
Copy share: hdc-group-hshd-8r4kuw0ff-thehonn.vercel.app
> **Phong Cách Tạo Thành Công** — Thương hiệu thời trang đồng phục cao cấp, tiên phong chất liệu xanh tự nhiên (tơ chuối, xơ dừa, sen, bamboo) và công nghệ Seamless không đường may.
>
> 🌐 Website demo :
> 📞 Hotline: 0984 95 95 86  
> 📍 Địa chỉ: Số 6, Kim Đồng, Hoàng Mai, Hà Nội

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
HDC_Group/
├── frontend/               # 👉 SOURCE CODE CHÍNH (Vite + React 19 + TypeScript + Tailwind CSS)
│   ├── public/
│   │   └── assets/         # 66 tệp ảnh chất lượng cao (12 trang catalogue gốc, sản phẩm, v.v.)
│   ├── src/
│   │   ├── components/     # Các component chuyên nghiệp (Header, Hero, Shop, Modals, v.v.)
│   │   │   ├── home/       # Component trang chủ (Hero, Stats, Materials, Seamless, Di sản, v.v.)
│   │   │   ├── shop/       # Gian hàng sản phẩm, bộ lọc, thẻ sản phẩm
│   │   │   ├── modals/     # Chi tiết sản phẩm, Giỏ tư vấn, Lightbox 12 trang Catalogue
│   │   │   ├── layout/     # Announcement bar, Header, Footer
│   │   │   └── ui/         # Floating badge, nút tương tác
│   │   ├── context/        # Quản lý state toàn cục Giỏ tư vấn may đo (ConsultationContext)
│   │   ├── data/           # Dữ liệu sản phẩm, chất liệu, 12 trang catalogue, thông tin công ty
│   │   ├── types/          # Định nghĩa TypeScript chuẩn xác
│   │   ├── App.tsx         # Luồng điều hướng và layout chính
│   │   └── main.tsx
│   ├── tailwind.config.js  # Hệ màu thương hiệu HDC (#0d3039, #0d9bb4, #e4c36f...)
│   └── package.json
│
├── scripts/                # Các script Python xử lý dữ liệu và trích xuất hình ảnh
├── TaiLieu/                # Tài liệu gốc (PDF Catalogue 2023-12-28, ảnh bìa gốc)
├── archive/                # Các tệp HTML/bundle đơn khối cũ (lưu trữ đối chiếu)
└── assets/                 # Thư mục ảnh gốc lưu trữ
```

---

## 🚀 Hướng Dẫn Chạy Frontend

### 1. Cài đặt và khởi chạy Development Server

```bash
cd frontend
npm install
npm run dev
```

Server sẽ khởi động tại: `http://localhost:5173/`

### 2. Xây dựng Production (Build)

```bash
cd frontend
npm run build
```

Kết quả bundle tối ưu sẽ được tạo trong thư mục `frontend/dist/`.

### 3. Xem trước bản Production (Preview)

```bash
cd frontend
npm run preview
```
