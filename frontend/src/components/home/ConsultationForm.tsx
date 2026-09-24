import React, { useState } from 'react';
import { Phone, MapPin, Check, Send, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { useConsultation } from '../../context/ConsultationContext';

export const ConsultationForm: React.FC = () => {
  const { items } = useConsultation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        notes: ''
      });
    }, 5000);
  };

  return (
    <section id="lien-he" className="w-full bg-[#0d3039] text-white py-8 sm:py-10 border-t border-[#153e47]/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* KHUNG TỔNG THỂ ĐỒNG BỘ MÀU SẮC, TINH TẾ & CÂN ĐỐI */}
        <div className="bg-[#08242c]/95 rounded-2xl border border-[#e4c36f]/30 shadow-2xl p-5 sm:p-6 lg:p-7 backdrop-blur-md">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-stretch">
            
            {/* CỘT TRÁI: BẢN ĐỒ ĐẾN XƯỞNG MAY HDC */}
            <div className="flex flex-col justify-between h-full space-y-3">
              {/* HEADER BẢN ĐỒ */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#73d8e5] uppercase flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e4c36f]" />
                    XƯỞNG MAY HDC GROUP
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Số 6, Kim Đồng, Hoàng Mai, Hà Nội
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Số+6+Kim+Đồng,+Hoàng+Mai,+Hà+Nội"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0d3039] hover:bg-[#e4c36f] hover:text-[#08242c] text-[#e4c36f] px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 border border-[#e4c36f]/30 flex-shrink-0"
                >
                  Chỉ đường <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* IFRAME GOOGLE MAPS - TỰ ĐỘNG CÂN BẰNG CHIỀU CAO VỚI FORM */}
              <div className="flex-1 min-h-[220px] sm:min-h-[250px] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0d3039]">
                <iframe
                  title="Bản đồ chỉ đường đến xưởng may HDC Group Số 6 Kim Đồng Hoàng Mai Hà Nội"
                  src="https://maps.google.com/maps?q=6+Kim+%C4%90%E1%BB%93ng,+Gi%C3%A1p+B%C3%A1t,+Ho%C3%A0ng+Mai,+H%C3%A0+N%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* CHÂN BẢN ĐỒ: HOTLINE & GIỜ HOẠT ĐỘNG */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#a0bcc3]">
                <a
                  href={`tel:${COMPANY_INFO.hotline}`}
                  className="flex items-center gap-1.5 text-white/90 hover:text-[#e4c36f] transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e4c36f]" />
                  Hotline: <span className="font-bold text-[#e4c36f]">{COMPANY_INFO.hotlineFormatted}</span>
                </a>
                <span className="text-[11px] text-[#73d8e5]">
                  T2 - T7 (8h00 - 18h00)
                </span>
              </div>
            </div>

            {/* CỘT PHẢI: FORM YÊU CẦU BÁO GIÁ TINH GỌN (3 DÒNG KẺ) */}
            <div className="flex flex-col justify-between h-full lg:border-l lg:border-white/10 lg:pl-6">
              <div>
                {/* HEADER FORM */}
                <div className="pb-2.5 border-b border-white/10 mb-4">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                    Yêu Cầu Báo Giá
                  </h3>
                </div>

                {/* THÔNG BÁO MẪU ĐÍNH KÈM TỪ GIỎ TƯ VẤN (NẾU CÓ) */}
                {items.length > 0 && (
                  <p className="text-[11px] text-[#73d8e5] mb-3 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#e4c36f]" />
                    Đính kèm {items.length} mẫu từ giỏ tư vấn
                  </p>
                )}

                {/* FORM THIẾT KẾ 3 DÒNG KẺ BASIC */}
                <form onSubmit={handleSubmit} className="pt-1">
                  
                  {/* DÒNG KẺ 1 (border-t), DÒNG KẺ 2 (divide-y), DÒNG KẺ 3 (border-b) */}
                  <div className="border-t border-b border-white/20 divide-y divide-white/20">
                    
                    {/* Ô GIỮA 2 DÒNG KẺ TRÊN: HỌ VÀ TÊN & SỐ ĐIỆN THOẠI */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent px-4 py-3.5 sm:py-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent px-4 py-3.5 sm:py-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition"
                      />
                    </div>

                    {/* Ô BÊN DƯỚI: NHU CẦU CỦA BẠN */}
                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder="Nhu cầu của bạn..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-transparent px-4 py-3.5 sm:py-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/5 transition resize-none block"
                      />
                    </div>

                  </div>

                  {/* 1 NÚT GỬI YÊU CẦU BÊN DƯỚI: 1 MÀU DUY NHẤT, KHÔNG GRADIENT, KHÔNG MỜ, HÌNH VUÔNG SẮC CẠNH (rounded-none), LỚN LỚN XÍU (py-4 sm:py-4.5) */}
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-[#e4c36f] hover:bg-[#d8b558] text-[#08242c] font-bold text-sm sm:text-base py-4 sm:py-4.5 rounded-none tracking-[0.2em] transition-colors uppercase flex items-center justify-center gap-2.5 disabled:opacity-50 mt-5 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5 text-emerald-950" /> ĐÃ GỬI YÊU CẦU THÀNH CÔNG
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> GỬI YÊU CẦU
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <p className="text-xs text-emerald-300 text-center font-medium mt-2">
                      Cảm ơn bạn! HDC sẽ phản hồi nhanh qua SĐT/Zalo.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
