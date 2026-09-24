import React from 'react';
import { ShieldCheck, Sparkles, Truck, ArrowRight, BookOpen } from 'lucide-react';
import { ASSETS } from '../../data/assets';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenShop: () => void;
  onOpenCatalogue: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onOpenShop,
  onOpenCatalogue
}) => {
  return (
    <section id="dau-trang" className="relative isolate overflow-hidden bg-[#dfe9ed]">
      {/* Dark teal right background for desktop split */}
      <div className="absolute inset-y-0 right-0 w-[54%] bg-[#0d3039] hidden md:block" />

      <div className="relative mx-auto grid min-h-[660px] max-w-7xl items-end gap-10 px-5 py-14 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20">
        
        {/* LEFT COLUMN: HEADLINE & ACTIONS */}
        <div className="z-10 max-w-xl self-center lg:pb-10">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#0b8faa]">
            <span className="h-px w-10 bg-current" />
            HDC FASHION · ĐỒNG PHỤC TẠO NÊN BẢN SẮC
          </p>

          <h1 className="font-serif text-5xl leading-[0.94] text-[#10313a] sm:text-6xl lg:text-7xl">
            Phong cách <br />
            <em className="font-normal text-[#0d9bb4]">tạo thành công.</em>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-[#45626a]">
            HDC Fashion thiết kế và may đo đồng phục để mỗi đội ngũ xuất hiện chuyên nghiệp, khác biệt và tự hào với chất liệu xanh tự nhiên bản địa và công nghệ Seamless không đường may.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-[#0d3039] px-6 py-4 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-[#0d9bb4] shadow-md flex items-center gap-2"
            >
              ĐẶT THIẾT KẾ ĐỒNG PHỤC
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenShop}
              className="border border-[#234c55]/30 bg-white/80 backdrop-blur px-6 py-4 text-xs font-bold tracking-[0.12em] text-[#173b44] transition hover:border-[#0d9bb4] hover:text-[#0d9bb4]"
            >
              MUA SẮM NGAY
            </button>

            <button
              onClick={onOpenCatalogue}
              className="border border-[#0b8faa]/40 bg-[#0d9bb4]/10 px-5 py-4 text-xs font-bold tracking-[0.12em] text-[#08242c] transition hover:bg-[#0d9bb4] hover:text-white flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-[#0d9bb4]" />
              CATALOGUE GỐC
            </button>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-[11px] font-semibold text-[#597077]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0d9bb4]" /> 100% Sợi Tự Nhiên
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0d9bb4]" /> Công Nghệ Seamless
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#0d9bb4]" /> Giao Hàng Toàn Quốc
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CATALOGUE COVER (0001.jpg) */}
        <div className="relative h-[430px] overflow-hidden sm:h-[560px] lg:h-[620px] shadow-2xl rounded-sm group">
          <img
            src={ASSETS.heroCover}
            onError={(e) => {
              (e.target as HTMLImageElement).src = ASSETS.heroCoverFallback;
            }}
            alt="Trang bìa Catalogue HDC Fashion 0001.jpg"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3039]/70 via-[#0d3039]/15 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex justify-between border-t border-white/30 px-6 py-4 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-sm bg-black/20">
            <span>HDC / 01 · CATALOGUE 2023-12-28</span>
            <span className="text-[#e4c36f]">PHONG CÁCH TẠO THÀNH CÔNG</span>
          </div>
        </div>

      </div>
    </section>
  );
};
