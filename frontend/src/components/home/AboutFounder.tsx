import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Award } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { COMPANY_INFO } from '../../data/company';

export const AboutFounder: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* FULL-WIDTH DARK SECTION - EXTENDING ALL THE WAY TO BOTH SIDES */}
      <section id="ve-hdc" className="w-full bg-[#08242c] relative overflow-hidden border-b border-[#153e47]/30 text-white">
        
        {/* CENTERED CONTENT WRAPPER WITHIN MAX-W-7XL - COMPACT VERTICAL FOOTPRINT */}
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:py-20 lg:px-8 relative min-h-[500px] lg:min-h-[540px] flex flex-col justify-between">
          
          {/* BACKGROUND IMAGE OF FOUNDER & CEO FADING ACROSS THE ENTIRE SECTION UNDERNEATH TEXT & CARDS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* WIDE DESKTOP & TABLET BACKDROP */}
            <img
              src={ASSETS.founderCeoWideBg}
              alt="Founder & CEO Nguyễn Thị Thương HDC Group VN"
              className="hidden sm:block w-full h-full object-cover object-right opacity-90 transition duration-700"
            />

            {/* MOBILE BACKDROP */}
            <img
              src={ASSETS.founderCeoMelted}
              alt="Founder & CEO Nguyễn Thị Thương HDC Group VN"
              className="sm:hidden absolute right-0 top-0 h-full w-[85%] object-cover object-[70%_20%] opacity-40"
            />

            {/* SMOOTH MULTI-LAYER GRADIENTS TO ENSURE TEXT IS 100% LEGIBLE AND IMAGE BLENDS HARMONIOUSLY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08242c] via-[#08242c]/90 via-35% sm:via-[#08242c]/40 via-60% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08242c] via-[#08242c]/70 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#08242c] to-transparent" />
          </div>

          {/* TOP SECTION: HEADING ON LEFT & FOUNDER CEO CARD ON RIGHT (COMPACT TYPOGRAPHY MATCHING TOP SECTIONS) */}
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr] items-start">
            
            {/* LEFT: CON NGƯỜI HDC GROUP & HEADING */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#73d8e5] flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#e4c36f]" />
                CON NGƯỜI HDC GROUP
              </p>

              <h2 className="font-serif mt-2.5 max-w-xl text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-tight">
                Sự tự tin của đội ngũ bắt đầu từ <br />
                <span className="font-serif font-normal text-[#e4c36f] not-italic block sm:inline mt-0.5 sm:mt-0">
                  sự thấu hiểu sâu sắc.
                </span>
              </h2>

              <p className="mt-3 max-w-lg text-xs sm:text-sm leading-6 text-[#c1d6da]">
                Chúng tôi không chỉ may đo những chiếc áo; chúng tôi lắng nghe câu chuyện văn hoá, môi trường làm việc và khát vọng thành công của thương hiệu bạn.
              </p>
            </div>

            {/* RIGHT: THE ONLY FOUNDER & CEO CARD WITH ZOOM BUTTON AT THE CORNER */}
            <div className="flex justify-start lg:justify-end pt-0.5">
              <div className="relative bg-[#0c2e37]/85 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-[#e4c36f]/30 shadow-xl max-w-sm w-full">
                {/* NÚT PHÓNG TO / THU NHỎ Ở GÓC THẺ */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-3.5 right-3.5 text-white/70 hover:text-[#e4c36f] bg-black/40 hover:bg-black/60 p-1.5 rounded-full transition shadow backdrop-blur-sm"
                  aria-label="Ấn phẩm HDC"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <span className="text-[10px] font-bold tracking-[0.16em] text-[#e4c36f] uppercase block">
                  FOUNDER &amp; CEO
                </span>

                <h3 className="font-serif text-lg sm:text-xl text-white font-bold mt-1">
                  {COMPANY_INFO.founder.name}
                </h3>

                <p className="text-[10px] font-bold tracking-[0.12em] text-[#73d8e5] uppercase mt-0.5">
                  ĐỒNG PHỤC HUNI · HDC GROUP VN
                </p>

                <p className="mt-2.5 text-xs text-white/80 italic leading-5 border-t border-white/10 pt-2.5">
                  "{COMPANY_INFO.founder.quote}"
                </p>
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION: 3 CORE VALUES (01 LẮNG NGHE, 02 SÁNG TẠO, 03 ĐỒNG HÀNH) - COMPACT & NEAT */}
          <div className="relative z-10 mt-10 sm:mt-12 grid gap-4 sm:grid-cols-3">
            
            {/* CARD 01: LẮNG NGHE */}
            <div className="bg-[#0c2e37]/75 backdrop-blur-md p-5 rounded-xl border border-white/15 hover:border-[#e4c36f]/50 hover:bg-[#0c2e37]/90 transition duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#e4c36f] group-hover:scale-110 transition origin-left">
                  01
                </span>
                <span className="w-5 h-0.5 bg-[#e4c36f]/40 group-hover:bg-[#e4c36f] transition" />
              </div>
              <h3 className="mt-3 font-serif text-lg sm:text-xl text-white font-bold">
                Lắng nghe
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#c1d6da]">
                Thấu hiểu sâu sắc bản sắc thương hiệu và nhu cầu vận động thực tế của bạn.
              </p>
            </div>

            {/* CARD 02: SÁNG TẠO */}
            <div className="bg-[#0c2e37]/75 backdrop-blur-md p-5 rounded-xl border border-white/15 hover:border-[#e4c36f]/50 hover:bg-[#0c2e37]/90 transition duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#e4c36f] group-hover:scale-110 transition origin-left">
                  02
                </span>
                <span className="w-5 h-0.5 bg-[#e4c36f]/40 group-hover:bg-[#e4c36f] transition" />
              </div>
              <h3 className="mt-3 font-serif text-lg sm:text-xl text-white font-bold">
                Sáng tạo
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#c1d6da]">
                Biến nhận diện thương hiệu thành bản thiết kế độc bản với chất liệu xanh tự nhiên.
              </p>
            </div>

            {/* CARD 03: ĐỒNG HÀNH */}
            <div className="bg-[#0c2e37]/75 backdrop-blur-md p-5 rounded-xl border border-white/15 hover:border-[#e4c36f]/50 hover:bg-[#0c2e37]/90 transition duration-300 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#e4c36f] group-hover:scale-110 transition origin-left">
                  03
                </span>
                <span className="w-5 h-0.5 bg-[#e4c36f]/40 group-hover:bg-[#e4c36f] transition" />
              </div>
              <h3 className="mt-3 font-serif text-lg sm:text-xl text-white font-bold">
                Đồng hành
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#c1d6da]">
                May đo tỉ mỉ, giao nhận tận nơi và chính sách bảo hành, sửa mẫu dài lâu.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FULL RESOLUTION LIGHTBOX MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#08242c] rounded-xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <div>
                <p className="text-xs font-bold text-[#e4c36f] tracking-wider uppercase flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#e4c36f]" />
                  Tài Liệu Doanh Nghiệp HDC Group VN
                </p>
                <h3 className="font-serif text-base sm:text-lg text-white mt-0.5">
                  Founder &amp; CEO Nguyễn Thị Thương · Đồng phục HUNI
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 bg-black/40 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={ASSETS.huniBanner}
                alt="Banner gốc HDC Group VN HUNI Uniform"
                className="w-full h-auto max-h-[76vh] object-contain"
              />
            </div>

            <div className="p-3 bg-[#0d3039] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/80">
              <span>Độ phân giải gốc: 1619 × 971 px · Bản quyền HDC Group VN</span>
              <a
                href={`tel:${COMPANY_INFO.hotline}`}
                className="text-[#e4c36f] font-bold hover:underline"
              >
                Hotline tư vấn: {COMPANY_INFO.hotlineFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
