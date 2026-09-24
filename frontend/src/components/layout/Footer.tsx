import React from 'react';
import { MapPin, Phone, Globe, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { ASSETS } from '../../data/assets';

interface FooterProps {
  onSelectCategory?: (category: 'shirt' | 'polo' | 'heritage' | 'kids') => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenConsultation }) => {
  return (
    <footer className="bg-[#08242c] text-[#b3c9cd] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10 text-xs">
          
          {/* BRAND COLUMN */}
          <div>
            <div className="flex items-center gap-3 text-white">
              <img
                src={ASSETS.logo}
                alt="HDC Fashion Logo"
                className="h-10 w-auto max-w-[44px] object-contain brightness-110 drop-shadow-sm"
              />
              <span className="font-bold text-lg tracking-wider">HDC FASHION</span>
            </div>
            <p className="mt-4 text-white/70 leading-6">
              Thương hiệu thời trang &amp; may đo đồng phục doanh nghiệp tiên phong chất liệu xanh tự nhiên và công nghệ sơ mi Seamless tại Việt Nam.
            </p>
            <div className="mt-4 inline-block bg-[#0d3039] px-3 py-1.5 border border-[#e4c36f]/30">
              <p className="text-[#e4c36f] font-semibold text-[11px] italic">
                "{COMPANY_INFO.slogan}"
              </p>
            </div>
          </div>

          {/* PRODUCTS COLUMN */}
          <div>
            <h4 className="text-white font-bold tracking-[0.15em] uppercase mb-4 text-[11px]">
              DANH MỤC SẢN PHẨM
            </h4>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <button
                  onClick={() => onSelectCategory?.('shirt')}
                  className="hover:text-[#0d9bb4] transition text-left"
                >
                  Sơ mi sinh thái sợi tự nhiên (Bamboo, Sen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('shirt')}
                  className="hover:text-[#0d9bb4] transition text-left"
                >
                  Sơ mi Seamless không đường may
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('polo')}
                  className="hover:text-[#0d9bb4] transition text-left"
                >
                  Đồng phục Polo Anti-UV
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('kids')}
                  className="hover:text-[#0d9bb4] transition text-left"
                >
                  Đồng phục học sinh IHDC Kids
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('heritage')}
                  className="hover:text-[#0d9bb4] transition text-left"
                >
                  Bộ sưu tập Di sản Văn hóa Việt
                </button>
              </li>
            </ul>
          </div>

          {/* COMMITMENTS COLUMN */}
          <div>
            <h4 className="text-white font-bold tracking-[0.15em] uppercase mb-4 text-[11px]">
              CAM KẾT DỊCH VỤ B2B
            </h4>
            <ul className="space-y-2.5 text-white/75">
              {COMPANY_INFO.commitments.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0d9bb4] mt-0.5 flex-shrink-0" />
                  <span>{c.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold tracking-[0.15em] uppercase mb-4 text-[11px]">
              LIÊN HỆ TRỰC TIẾP
            </h4>
            <ul className="space-y-3 text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e4c36f] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e4c36f] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.hotline}`}
                  className="text-white font-bold text-sm hover:text-[#e4c36f] transition"
                >
                  {COMPANY_INFO.hotlineFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#e4c36f] flex-shrink-0" />
                <a
                  href={COMPANY_INFO.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-white/90"
                >
                  {COMPANY_INFO.website}
                </a>
              </li>
              {onOpenConsultation && (
                <li className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full bg-[#0d9bb4] hover:bg-[#0b8faa] text-white py-2.5 text-center font-bold tracking-wider rounded text-[11px] transition shadow"
                  >
                    ĐĂNG KÝ NHẬN BÁO GIÁ NHANH
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 flex flex-col justify-between gap-4 text-[11px] font-bold tracking-wider sm:flex-row text-white/60">
          <span>© {new Date().getFullYear()} HDC FASHION · PHONG CÁCH TẠO THÀNH CÔNG</span>
          <span>THIẾT KẾ · MAY ĐO · GIAO HÀNG TOÀN QUỐC · NGUYÊN LIỆU BẢN ĐỊA VIỆT NAM</span>
        </div>
      </div>
    </footer>
  );
};
