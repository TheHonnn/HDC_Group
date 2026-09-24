import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useConsultation } from '../../context/ConsultationContext';

interface FloatingQuoteBadgeProps {
  onOpenShopCategory: (category: 'shirt' | 'polo' | 'heritage' | 'kids') => void;
}

export const FloatingQuoteBadge: React.FC<FloatingQuoteBadgeProps> = ({ onOpenShopCategory }) => {
  const { items, setIsDrawerOpen } = useConsultation();

  if (items.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => onOpenShopCategory('shirt')}
          className="bg-white/95 text-[#102a32] px-4 py-3 shadow-2xl rounded-full border border-[#153e47]/15 backdrop-blur flex items-center gap-3 hover:border-[#0d9bb4] transition group"
        >
          <span className="grid h-8 w-8 place-items-center bg-[#0d9bb4] text-white rounded-full text-xs font-bold">
            01
          </span>
          <div className="text-left text-xs">
            <b className="block text-[#10313a] leading-tight group-hover:text-[#0d9bb4] transition">
              Sơ mi Seamless 4D
            </b>
            <span className="text-[10px] text-[#597077]">Bấm xem mẫu mới nhất</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#0d9bb4] transition group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-5 py-3.5 shadow-2xl rounded-full border border-[#e4c36f]/40 transition flex items-center gap-3 group animate-bounce hover:animate-none"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-white" />
          <span className="absolute -top-1.5 -right-2 bg-[#e4c36f] text-[#102a32] font-black text-[10px] h-4 w-4 rounded-full grid place-items-center">
            {items.length}
          </span>
        </div>
        <div className="text-left text-xs text-white">
          <b className="block leading-tight text-[#e4c36f]">Giỏ tư vấn ({items.length} mẫu)</b>
          <span className="text-[10px] text-white/80">Bấm để gửi yêu cầu báo giá</span>
        </div>
      </button>
    </div>
  );
};
