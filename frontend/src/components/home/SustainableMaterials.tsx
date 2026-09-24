import React from 'react';
import { Leaf, Sun, Sparkles, Layers } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { useConsultation } from '../../context/ConsultationContext';

export const SustainableMaterials: React.FC = () => {
  const { setSelectedCataloguePage } = useConsultation();

  return (
    <section id="chat-lieu" className="bg-[#0d3039] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 items-center">
        
        {/* IMAGE WITH BADGES - CLICK TO VIEW FULL CATALOGUE PAGE 2 */}
        <div
          onClick={() => setSelectedCataloguePage(2)}
          className="relative min-h-[460px] overflow-hidden shadow-2xl rounded-sm cursor-pointer group"
        >
          <img
            src={ASSETS.cat02}
            alt="Chất liệu xanh bền vững Catalogue HDC Trang 2"
            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <span className="absolute left-5 top-5 border border-white/50 bg-[#0d3039]/80 backdrop-blur px-3 py-2 text-[10px] font-bold tracking-[0.17em] flex items-center gap-1.5">
            MATERIAL / 01 · NGUỒN NGUYÊN LIỆU VIỆT NAM (TRANG 02)
          </span>

          <div className="absolute bottom-5 left-5 right-5 bg-[#08242c]/90 p-5 border border-white/10 backdrop-blur">
            <p className="text-[10px] font-bold text-[#e4c36f] tracking-[0.14em]">
              SỢI TƠ CHUỐI &amp; XƠ DỪA BẢN ĐỊA
            </p>
            <p className="text-xs text-white/90 mt-1 leading-5">
              Tận dụng nguyên liệu sẵn có tại Việt Nam kết hợp cùng Modal, Bamboo, Sợi Bạc Hà và Sợi Sen sinh thái.
            </p>
          </div>
        </div>

        {/* CONTENT & BENEFITS */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#73d8e5] flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#73d8e5]" /> LỢI THẾ CẠNH TRANH CỐT LÕI
          </p>

          <h2 className="font-serif mt-4 text-4xl leading-[0.98] sm:text-5xl text-white">
            Tốt cho người mặc. <br />
            <em className="font-normal text-[#e4c36f]">Nhẹ hơn cho hành tinh.</em>
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-[#c1d6da]">
            Tại HDC Fashion, chúng tôi kiên định nâng tầm giá trị cho sản phẩm Việt thông qua việc khai thác các nguyên liệu tự nhiên bản địa: sợi tơ chuối, xơ dừa cùng chất liệu cao cấp Modal, Bamboo, Sợi Bạc Hà, Sợi Sen.
          </p>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 border-t border-white/20 pt-7 text-sm">
            <div>
              <div className="flex items-center gap-2 text-[#73d8e5]">
                <Leaf className="w-4 h-4" />
                <b className="block">Modal &amp; Bamboo</b>
              </div>
              <span className="mt-1.5 block text-white/70 text-xs leading-5">
                Siêu mềm mượt, bền đẹp giữ màu cực tốt và kháng khuẩn tự nhiên.
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#73d8e5]">
                <Sun className="w-4 h-4" />
                <b className="block">Sợi Bạc Hà &amp; Sợi Sen</b>
              </div>
              <span className="mt-1.5 block text-white/70 text-xs leading-5">
                Thoáng mát tự nhiên, giải nhiệt ngày hè và khử mùi kháng khuẩn.
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#73d8e5]">
                <Sparkles className="w-4 h-4" />
                <b className="block">Tơ Chuối &amp; Xơ Dừa</b>
              </div>
              <span className="mt-1.5 block text-white/70 text-xs leading-5">
                Tận dụng nguồn phụ phẩm nông nghiệp bản địa Việt Nam bền bỉ và an toàn.
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#73d8e5]">
                <Layers className="w-4 h-4" />
                <b className="block">Không Cần Là Ủi</b>
              </div>
              <span className="mt-1.5 block text-white/70 text-xs leading-5">
                Chống nhăn tự nhiên, giặt phơi nhanh khô, tiết kiệm thời gian cho nhân sự.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
