import React from 'react';
import { X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useConsultation } from '../../context/ConsultationContext';

interface ConsultationDrawerProps {
  onGoToQuoteForm: () => void;
  onExploreShop: () => void;
}

export const ConsultationDrawer: React.FC<ConsultationDrawerProps> = ({
  onGoToQuoteForm,
  onExploreShop
}) => {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, clearItems } = useConsultation();

  if (!isDrawerOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#06232b]/70 backdrop-blur-sm flex justify-end animate-fade-in"
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 text-[#102a32] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div>
            <h3 className="font-serif text-2xl text-[#10313a]">Danh Sách Tư Vấn</h3>
            <p className="text-xs text-[#597077]">
              Đã chọn {items.length} mẫu đồng phục may đo
            </p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-gray-500 hover:text-black focus:outline-none transition rounded-full"
            aria-label="Đóng ngăn tư vấn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[#597077]">
              <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-3" />
              <p className="text-sm font-medium">Chưa có mẫu nào trong danh sách tư vấn.</p>
              <p className="text-xs text-gray-400 mt-1">
                Hãy duyệt các mẫu sơ mi, polo hoặc di sản và bấm "Chọn tư vấn"
              </p>
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  onExploreShop();
                }}
                className="mt-5 bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-5 py-2.5 text-xs font-bold tracking-[0.1em] rounded-sm transition"
              >
                KHÁM PHÁ GIAN HÀNG
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 border p-3 border-gray-100 bg-[#f9fafb] rounded-sm relative group hover:border-[#0d9bb4]/40 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover bg-gray-200 flex-shrink-0 rounded-sm"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#0d9bb4] bg-[#0d9bb4]/10 px-1.5 py-0.5 rounded">
                    {item.code}
                  </span>
                  <h4 className="font-bold text-sm leading-tight text-[#102a32] mt-1 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Size: <b>{item.size}</b> · {item.material}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="text-gray-400 hover:text-red-500 p-1 self-start transition"
                  title="Xóa mẫu này"
                  aria-label="Xóa"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER ACTIONS */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>HDC hỗ trợ may mẫu thử miễn phí</span>
              <button
                onClick={clearItems}
                className="text-xs text-red-500 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" /> Xóa tất cả
              </button>
            </div>

            <button
              onClick={() => {
                setIsDrawerOpen(false);
                onGoToQuoteForm();
              }}
              className="w-full bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white py-4 text-xs font-bold tracking-[0.14em] transition text-center shadow-lg rounded-sm flex items-center justify-center gap-2"
            >
              GỬI YÊU CẦU BÁO GIÁ CHO {items.length} MẪU NÀY
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
