import React, { useState } from 'react';
import { X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useConsultation } from '../../context/ConsultationContext';

interface ProductDetailModalProps {
  onDirectQuote?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ onDirectQuote }) => {
  const { selectedProduct, setSelectedProduct, addItem } = useConsultation();
  const [selectedSize, setSelectedSize] = useState<string>('L');

  if (!selectedProduct) return null;

  const handleAddAndClose = () => {
    addItem(selectedProduct, selectedSize);
  };

  const handleQuoteClick = () => {
    setSelectedProduct(null);
    onDirectQuote?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#06232b]/75 p-4 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={() => setSelectedProduct(null)}
    >
      <div
        className="grid w-full max-w-3xl overflow-hidden bg-[#f6f7f4] sm:grid-cols-2 shadow-2xl border border-white/20 my-auto rounded-sm animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE SIDE - OBJECT-CONTAIN ĐẢM BẢO KHÔNG BỊ KÉO GIÃN, HIỂN THỊ TRỌN VẸN VÀ SẮC NÉT */}
        <div className="relative min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-[#f8fafb] via-[#eef4f6] to-[#e1eaed] flex items-center justify-center p-6 sm:p-8 overflow-hidden">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-h-[360px] max-w-full w-auto h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-[#0d3039] text-[#e4c36f] px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] shadow rounded-sm">
            {selectedProduct.code}
          </span>
          <span className="absolute top-4 right-4 bg-white/95 text-[#0d9bb4] px-2.5 py-0.5 text-[10px] font-bold rounded-sm border border-[#bfd5d9] shadow-sm">
            {selectedProduct.badge}
          </span>
        </div>

        {/* INFO SIDE */}
        <div className="relative flex flex-col justify-between p-6 sm:p-8 text-[#102a32]">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 p-1 text-[#597077] hover:text-red-500 focus:outline-none transition"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <span className="text-[10px] font-bold tracking-[0.16em] text-[#0d9bb4] uppercase">
              {selectedProduct.badge}
            </span>
            <h2 className="font-serif mt-2 text-2xl sm:text-3xl leading-tight text-[#10313a]">
              {selectedProduct.name}
            </h2>
            
            <p className="mt-3 text-xs font-semibold text-[#168ca5]">
              Chất liệu: {selectedProduct.material}
            </p>

            <p className="mt-3 text-xs leading-6 text-[#597077]">
              {selectedProduct.desc}
            </p>

            {/* FEATURES */}
            <div className="mt-4 space-y-1.5 text-xs text-[#284850]">
              {selectedProduct.features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0d9bb4] flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* SIZES */}
            <div className="mt-5">
              <p className="text-[10px] font-bold tracking-[0.12em] text-[#597077] uppercase">
                KÍCH CỠ / MAY ĐO:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(selectedProduct.sizes || ['S', 'M', 'L', 'XL', 'XXL', 'May đo 3D']).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-bold transition rounded-sm ${
                      selectedSize === size
                        ? 'bg-[#0d3039] text-white shadow'
                        : 'border border-gray-300 text-[#45626a] hover:border-[#0d9bb4]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={handleAddAndClose}
              className="bg-[#0d3039] px-5 py-3 text-xs font-bold tracking-[0.12em] text-white hover:bg-[#0d9bb4] transition flex-1 flex items-center justify-center gap-2 rounded-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              THÊM VÀO GIỎ TƯ VẤN
            </button>
            <button
              onClick={handleQuoteClick}
              className="border border-[#0d3039] px-4 py-3 text-xs font-bold tracking-[0.12em] text-[#0d3039] hover:bg-[#0d3039] hover:text-white transition rounded-sm flex items-center justify-center gap-1"
            >
              BÁO GIÁ NGAY <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
