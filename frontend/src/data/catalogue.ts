import type { CataloguePage } from '../types';
import { ASSETS } from './assets';

export const CATALOGUE_PAGES: CataloguePage[] = [
  {
    id: 1,
    pageNumber: '01',
    title: 'Bìa Chính - Phong Cách Tạo Thành Công',
    subtitle: 'Catalogue Đồng Phục & Thời Trang Doanh Nghiệp HDC Fashion',
    image: ASSETS.cat01,
    category: 'overview',
    description: 'Trang bìa chính thức thể hiện tinh thần chủ đạo: Thiết kế may đo tinh tế, tôn vinh đẳng cấp người lãnh đạo và đội ngũ.',
    highlights: ['Hình ảnh mẫu sơ mi xanh signature', 'Thông điệp Phong cách tạo thành công', 'Nhận diện thương hiệu HDC Fashion']
  },
  {
    id: 2,
    pageNumber: '02',
    title: 'Chất Liệu Xanh Bền Vững',
    subtitle: 'Nguồn Nguyên Liệu Bản Địa & Sinh Thái Tự Nhiên',
    image: ASSETS.cat02,
    category: 'material',
    description: 'Tiên phong khai thác các nguồn sợi tự nhiên: Tơ chuối, xơ dừa, bạc hà, sợi sen, Modal và Bamboo sinh học.',
    highlights: ['Bảo vệ môi trường tự nhiên', 'Thoáng mát, kháng khuẩn vượt trội', 'Tận dụng phụ phẩm nông nghiệp Việt Nam']
  },
  {
    id: 3,
    pageNumber: '03',
    title: 'Công Nghệ Sơ Mi Seamless',
    subtitle: 'Đột Phá Kỹ Thuật Không Đường May',
    image: ASSETS.cat03,
    category: 'seamless',
    description: 'Ép nhiệt liền mạch tại tay áo, nẹp áo và vạt áo kết hợp vải co giãn 4 chiều siêu nhẹ, êm ái như làn da thứ hai.',
    highlights: ['Không cọ xát chỉ thừa', 'Co giãn 4 chiều siêu mềm', 'Không nhăn, không cần là ủi']
  },
  {
    id: 4,
    pageNumber: '04',
    title: 'Bản Sắc Di Sản Văn Hóa Việt',
    subtitle: 'Hang Xóm Trại · Trống Đồng Cổ · Núi Đầu Rồng · Suối Kim Bôi',
    image: ASSETS.cat04,
    category: 'heritage',
    description: 'Khắc họa các biểu tượng khảo cổ và danh thắng linh thiêng vào chi tiết trang phục, khơi dậy niềm kiêu hãnh dân tộc.',
    highlights: ['Họa tiết độc bản nghiên cứu chuyên sâu', 'Kỹ thuật dệt chìm sang trọng', 'Dành riêng cho các sự kiện mang tầm quốc gia']
  },
  {
    id: 5,
    pageNumber: '05',
    title: 'Sơ Mi Doanh Nhân & Lãnh Đạo',
    subtitle: 'Chuẩn Mực Sang Trọng Dành Cho Khối Công Sở',
    image: ASSETS.cat05,
    category: 'corporate',
    description: 'Thiết kế sơ mi dài tay và cộc tay form dáng đứng, chất liệu Bamboo dệt mật độ cao chống nhăn hoàn hảo.',
    highlights: ['Đa dạng màu sắc công sở', 'Cổ áo cứng cáp giữ phom', 'Đường may 5 mũi/cm xuất khẩu']
  },
  {
    id: 6,
    pageNumber: '06',
    title: 'Polo Năng Động & Hiện Đại',
    subtitle: 'Thời Trang Đồng Phục Năng Động Cho Tập Thể',
    image: ASSETS.cat06,
    category: 'polo',
    description: 'Dòng áo polo phối màu tươi sáng, tạo năng lượng tích cực và sự gắn kết cho nhân viên trong các hoạt động doanh nghiệp.',
    highlights: ['Cổ dệt jacquard cao cấp', 'Vải cá sấu thoáng khí', 'In/thêu logo công nghệ Nhật Bản']
  },
  {
    id: 7,
    pageNumber: '07',
    title: 'Đồng Phục Doanh Nghiệp Toàn Diện',
    subtitle: 'Giải Pháp May Đo Quy Mô Lớn Cho Tập Đoàn',
    image: ASSETS.cat07,
    category: 'corporate',
    description: 'Cung cấp đồng phục cho hàng trăm ngân hàng, công ty bất động sản, chuỗi bán lẻ với cam kết chất lượng đồng đều 100%.',
    highlights: ['Năng lực sản xuất 50.000 áo/tháng', 'May đo tận nơi', 'Bảo hành đường chỉ trọn đời']
  },
  {
    id: 8,
    pageNumber: '08',
    title: 'Golf & Sự Kiện Thể Thao Cao Cấp',
    subtitle: 'Đồng Phục Thi Đấu Giải Golf 30 Năm DNT Việt Nam',
    image: ASSETS.cat08,
    category: 'golf',
    description: 'Chất liệu vải công nghệ cao với tính năng chống nắng Anti-UV (UPF 50+) và thoát nhiệt cực nhanh cho golfer chuyên nghiệp.',
    highlights: ['Bảo vệ da dưới nắng gắt', 'Cử động xoay người không gò bó', 'Khô ráo chỉ sau 15 phút']
  },
  {
    id: 9,
    pageNumber: '09',
    title: 'Đồng Phục Học Sinh IHDC Kids',
    subtitle: 'Khởi Đầu Tươi Sáng Cho Thế Hệ Tương Lai',
    image: ASSETS.cat09,
    category: 'kids',
    description: 'Thời trang học đường mang chuẩn mực quốc tế, thiết kế năng động giúp học sinh tự do khám phá và học tập.',
    highlights: ['Vải kháng khuẩn an toàn cho da trẻ', 'Kiểu dáng lịch lãm, đáng yêu', 'Đạt chuẩn kiểm định độ bền màu']
  },
  {
    id: 10,
    pageNumber: '10',
    title: 'Tại Sao Chọn IHDC Kids?',
    subtitle: 'Tiêu Chuẩn Khắt Khe Cho Trang Phục Học Đường',
    image: ASSETS.cat10,
    category: 'kids',
    description: 'Phân tích các ưu thế vượt trội: Không kích ứng da, form suông thoáng khí, đường may êm dịu không gây hằn cấn.',
    highlights: ['100% sợi sinh thái tự nhiên', 'Thấm hút mồ hôi tối đa', 'Chống bai dão sau nhiều lần giặt']
  },
  {
    id: 11,
    pageNumber: '11',
    title: 'Best Sellers IHDC Kids',
    subtitle: 'Các Mẫu Đồng Phục Học Sinh Được Yêu Thích Nhất',
    image: ASSETS.cat11,
    category: 'kids',
    description: 'Set áo sơ mi kèm gile, chân váy xếp ly cho nữ và quần âu/short kaki chỉn chu cho nam sinh.',
    highlights: ['Phối màu hiện đại thanh lịch', 'Cạp chun co giãn thông minh', 'Dễ dàng giặt ủi và bảo quản']
  },
  {
    id: 12,
    pageNumber: '12',
    title: 'Sơ Mi & Polo IHDC Kids Đa Sắc Màu',
    subtitle: 'Bộ Sưu Tập Hoàn Hảo Cho Năm Học Mới',
    image: ASSETS.cat12,
    category: 'kids',
    description: 'Tổng hợp các mẫu polo và sơ mi năng động cho các cấp từ mầm non, tiểu học đến trung học cơ sở và phổ thông.',
    highlights: ['Bảng màu đa dạng theo từng khối lớp', 'Logo trường dệt thêu tinh xảo', 'Chính sách giá hỗ trợ nhà trường']
  }
];
