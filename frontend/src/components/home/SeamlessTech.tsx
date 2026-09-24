import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { useConsultation } from '../../context/ConsultationContext';

interface SeamlessTechProps {
  onViewShirts: () => void;
  onRequestSample: () => void;
}

export const SeamlessTech: React.FC<SeamlessTechProps> = ({
  onViewShirts,
  onRequestSample
}) => {
  const { setSelectedCataloguePage } = useConsultation();

  return (
    <section id="cong-nghe" className="border-b border-[#153e47]/10 bg-[#f6f7f4] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
          
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0d9bb4]" /> ĐỘT PHÁ CÔNG NGHỆ
            </p>
            <h2 className="font-serif mt-3 text-4xl sm:text-5xl text-[#10313a] leading-tight">
              Công nghệ Seamless. <br />
              <em className="font-normal text-[#0d9bb4]">Sơ mi không đường may.</em>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#597077]">
              Áp dụng công nghệ ép nhiệt liền mạch tiên tiến tại <b className="text-[#102a32]">tay áo, nẹp áo và vạt áo</b>. Loại bỏ hoàn toàn sự thô ráp của chỉ may truyền thống, kết hợp chất vải co giãn 4 chiều siêu nhẹ, đem lại cảm giác siêu mềm mịn và tự do tuyệt đối trong mọi cử động.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 place-items-center bg-[#0d9bb4]/15 text-[#0d9bb4] rounded-full flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-sm font-bold text-[#102a32]">Áp dụng tại tay áo, nẹp áo, vạt áo:</strong>
                  <p className="text-xs text-[#597077] mt-0.5">Mối ép phẳng mịn tuyệt đối, bảo vệ làn da ngay cả khi mặc suốt 12 tiếng liên tục.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 place-items-center bg-[#0d9bb4]/15 text-[#0d9bb4] rounded-full flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-sm font-bold text-[#102a32]">Vải co giãn 4 chiều siêu nhẹ:</strong>
                  <p className="text-xs text-[#597077] mt-0.5">Trọng lượng áo siêu nhẹ, cảm giác êm ái tựa làn da thứ hai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 place-items-center bg-[#0d9bb4]/15 text-[#0d9bb4] rounded-full flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-sm font-bold text-[#102a32]">Giữ form đứng không quăn mép:</strong>
                  <p className="text-xs text-[#597077] mt-0.5">Cổ áo và nẹp áo luôn giữ phom dáng chuẩn mực ngay cả khi giặt máy.</p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewShirts}
                className="bg-[#0d3039] text-white px-6 py-3.5 text-xs font-bold tracking-[0.12em] hover:bg-[#0d9bb4] transition shadow-md"
              >
                XEM MẪU SƠ MI SEAMLESS
              </button>
              <button
                onClick={onRequestSample}
                className="text-xs font-bold tracking-[0.12em] text-[#0d9bb4] hover:underline"
              >
                Đăng ký may mẫu thử →
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setSelectedCataloguePage(3)}
              className="aspect-[4/3] overflow-hidden shadow-xl bg-gray-200 rounded-sm cursor-pointer group"
            >
              <img
                src={ASSETS.cat03}
                alt="Công nghệ Seamless Catalogue HDC Trang 3"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-2xl border border-[#153e47]/10 max-w-xs hidden sm:block">
              <p className="text-[10px] font-bold text-[#0d9bb4] tracking-[0.16em]">
                CHI TIẾT ÉP NHIỆT KHÔNG ĐƯỜNG MAY
              </p>
              <p className="text-sm font-serif text-[#102a32] mt-1 font-bold">
                Mềm mịn tựa làn da thứ hai
              </p>
              <p className="text-[11px] text-[#597077] mt-1">
                Co giãn 4 chiều siêu nhẹ
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
