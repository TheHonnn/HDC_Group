import React from 'react';
import { Phone, Truck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0d3039] text-[#e4c36f] text-[11px] sm:text-xs py-2 px-4 font-semibold tracking-wider border-b border-[#164855]/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#0d9bb4]" />
          <span>HDC FASHION · TIÊN PHONG CHẤT LIỆU XANH &amp; CÔNG NGHỆ SEAMLESS KHÔNG ĐƯỜNG MAY</span>
        </div>
        <div className="flex items-center gap-4 text-white/90">
          <span className="hidden md:inline-flex items-center gap-1 text-[11px]">
            <Truck className="w-3.5 h-3.5 text-[#0d9bb4]" /> Miễn phí giao hàng 63 tỉnh thành
          </span>
          <a
            href={`tel:${COMPANY_INFO.hotline}`}
            className="inline-flex items-center gap-1.5 text-[#e4c36f] hover:underline font-bold"
          >
            <Phone className="w-3.5 h-3.5" /> HOTLINE: {COMPANY_INFO.hotlineFormatted}
          </a>
        </div>
      </div>
    </div>
  );
};
