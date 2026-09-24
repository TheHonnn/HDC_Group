import type { FeaturedCollection } from '../types';
import { ASSETS } from './assets';

export const FEATURED_COLLECTIONS: FeaturedCollection[] = [
  {
    id: 'so-mi',
    tag: '01 / HDC',
    title: 'Sơ mi Doanh nhân & Seamless',
    subtitle: '100% sợi tự nhiên · Công nghệ không đường may · Siêu êm nhẹ',
    image: ASSETS.cat01,
    category: 'shirt',
    desc: 'Được chế tác từ Modal, Bamboo và công nghệ sơ mi Seamless liền mạch (áp dụng tại tay áo, nẹp áo, vạt áo), co giãn 4 chiều mềm mịn không cần là ủi.'
  },
  {
    id: 'polo-golf',
    tag: '02 / HDC',
    title: 'Đồng Phục Polo Anti-UV Kháng Khuẩn',
    subtitle: 'Bảo vệ tia cực tím UPF 50+ · Khô thoáng vượt trội · Đa dạng sắc màu',
    image: ASSETS.cat06,
    category: 'polo',
    desc: 'Đồng phục Polo sự kiện và thể thao cao cấp, tích hợp công nghệ chống nắng Anti-UV bảo vệ làn da tối ưu khi vận động ngoài trời.'
  },
  {
    id: 'di-san',
    tag: '03 / HDC',
    title: 'Golf & Sự Kiện Thương Hiệu',
    subtitle: 'Giải Golf 30 năm DNT Việt Nam · Khẳng định bản lĩnh thủ lĩnh',
    image: ASSETS.cat08,
    category: 'polo',
    desc: 'Trang phục thi đấu chính thức tại các giải Golf danh giá, truyền cảm hứng chiến thắng và định hình phong thái người dẫn đầu.'
  },
  {
    id: 'ihdc-kids',
    tag: '04 / HDC',
    title: 'Đồng Phục Học Sinh IHDC Kids',
    subtitle: 'Form suông vừa vặn · Set gile & chân váy · Êm nhẹ không gò bó',
    image: ASSETS.cat11,
    category: 'kids',
    desc: 'Thời trang học đường mang chuẩn mực thanh lịch, vải kháng khuẩn an toàn tuyệt đối cho làn da nhạy cảm của các em học sinh.'
  }
];
