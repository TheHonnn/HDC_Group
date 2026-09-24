import React, { useState } from 'react';
import { X, Check, ShoppingBag, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { Product } from '../../types';

export interface HeritageSymbol {
  id: string;
  name: string;
  region: string;
  patternName: string;
  patternDesc: string;
  cardImg: string;
  patternImg: string;
  productCode: string;
}

interface HeritageDetailModalProps {
  symbol: HeritageSymbol | null;
  symbols: HeritageSymbol[];
  product?: Product;
  onClose: () => void;
  onSelectSymbol: (symbol: HeritageSymbol) => void;
  onAddToCart: (product: Product) => void;
  onOpenQuote: () => void;
  onOpenCatalogue: () => void;
}

export const HeritageDetailModal: React.FC<HeritageDetailModalProps> = ({
  symbol,
  symbols,
  product,
  onClose,
  onSelectSymbol,
  onAddToCart,
  onOpenQuote,
  onOpenCatalogue
}) => {
  const [activeTab, setActiveTab] = useState<'site' | 'pattern' | 'product'>('site');

  if (!symbol) return null;

  const currentIndex = symbols.findIndex(s => s.id === symbol.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + symbols.length) % symbols.length;
    onSelectSymbol(symbols[prevIdx]);
    setActiveTab('site');
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % symbols.length;
    onSelectSymbol(symbols[nextIdx]);
    setActiveTab('site');
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#06232b]/80 p-3 sm:p-5 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20 my-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP HEADER */}
        <div className="bg-[#08242c] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#e4c36f] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e4c36f]" />
              DI SẢN VĂN HÓA VIỆT NAM · CATALOGUE TRANG 04
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-white font-bold mt-0.5">
              {symbol.name}
            </h2>
            <p className="text-xs text-[#a0bcc3] mt-0.5">
              {symbol.region}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition"
              title="Di sản trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition"
              title="Di sản kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-red-400 bg-white/10 hover:bg-white/20 rounded-full transition ml-2"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BODY 2 COLUMNS */}
        <div className="grid md:grid-cols-2">
          
          {/* LEFT: INTERACTIVE IMAGE GALLERY */}
          <div className="bg-[#f0f4f5] p-5 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200">
            {/* VIEW SELECTOR TABS */}
            <div className="flex rounded-lg bg-gray-200/80 p-1 mb-4 text-xs font-bold text-[#102a32]">
              <button
                onClick={() => setActiveTab('site')}
                className={`flex-1 py-1.5 rounded-md transition text-center ${
                  activeTab === 'site'
                    ? 'bg-white text-[#0d3039] shadow-sm'
                    : 'text-gray-600 hover:text-[#0d3039]'
                }`}
              >
                1. Ảnh Di Tích
              </button>
              <button
                onClick={() => setActiveTab('pattern')}
                className={`flex-1 py-1.5 rounded-md transition text-center ${
                  activeTab === 'pattern'
                    ? 'bg-white text-[#0d3039] shadow-sm'
                    : 'text-gray-600 hover:text-[#0d3039]'
                }`}
              >
                2. Cận Cảnh Họa Tiết
              </button>
              {product && (
                <button
                  onClick={() => setActiveTab('product')}
                  className={`flex-1 py-1.5 rounded-md transition text-center ${
                    activeTab === 'product'
                      ? 'bg-white text-[#0d3039] shadow-sm'
                      : 'text-gray-600 hover:text-[#0d3039]'
                  }`}
                >
                  3. Áo May Đo
                </button>
              )}
            </div>

            {/* IMAGE DISPLAY */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200 flex items-center justify-center p-2">
              {activeTab === 'site' && (
                <img
                  src={symbol.cardImg}
                  alt={symbol.name}
                  className="w-full h-full object-cover rounded-lg animate-fade-in"
                />
              )}

              {activeTab === 'pattern' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#e8eef0] to-[#dfe7ea] rounded-lg animate-fade-in">
                  <img
                    src={symbol.patternImg}
                    alt={symbol.patternName}
                    className="max-h-[160px] max-w-full object-contain drop-shadow-md"
                  />
                  <span className="mt-3 text-xs font-bold text-[#0d3039] bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    {symbol.patternName}
                  </span>
                </div>
              )}

              {activeTab === 'product' && product && (
                <div className="w-full h-full flex items-center justify-center p-3 animate-fade-in">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow"
                  />
                </div>
              )}
            </div>

            {/* THUMBNAIL SWITCHER */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab('site')}
                className={`border-2 rounded-lg overflow-hidden h-14 transition ${
                  activeTab === 'site' ? 'border-[#0d3039] ring-2 ring-[#0d3039]/20' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={symbol.cardImg} alt="Thumbnail di tích" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveTab('pattern')}
                className={`border-2 rounded-lg overflow-hidden h-14 bg-[#e8eef0] p-1 flex items-center justify-center transition ${
                  activeTab === 'pattern' ? 'border-[#0d3039] ring-2 ring-[#0d3039]/20' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={symbol.patternImg} alt="Thumbnail họa tiết" className="max-h-full max-w-full object-contain" />
              </button>
              {product && (
                <button
                  onClick={() => setActiveTab('product')}
                  className={`border-2 rounded-lg overflow-hidden h-14 bg-white p-1 flex items-center justify-center transition ${
                    activeTab === 'product' ? 'border-[#0d3039] ring-2 ring-[#0d3039]/20' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={product.image} alt="Thumbnail áo" className="max-h-full max-w-full object-contain" />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: CULTURAL INFORMATION & SPECIFICATIONS */}
          <div className="p-5 sm:p-7 flex flex-col justify-between text-[#102a32]">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-[10px] font-bold text-[#0d9bb4] tracking-widest uppercase">
                  Ý NGHĨA BIỂU TƯỢNG VĂN HÓA
                </span>
                {product && (
                  <span className="text-[10px] font-bold text-[#0d3039] bg-[#eaf0f2] px-2 py-0.5 rounded">
                    Mã: {product.code}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#10313a] mt-2.5">
                {symbol.patternName}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#597077]">
                {symbol.patternDesc}
              </p>

              {/* PRODUCT DETAILS IF ATTACHED */}
              {product && (
                <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#168ca5] uppercase tracking-wider block">
                      CHẤT LIỆU MAY ĐO ĐỘC QUYỀN
                    </span>
                    <p className="text-xs font-semibold text-[#102a32] mt-0.5">
                      {product.material}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#45626a] pt-1">
                    {product.highlights?.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-2.5">
              <div className="flex flex-col sm:flex-row gap-2">
                {product && (
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="flex-1 bg-[#0d3039] hover:bg-[#153e47] text-[#e4c36f] py-2.5 px-4 text-xs font-bold rounded-lg transition shadow flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> THÊM VÀO GIỎ TƯ VẤN
                  </button>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="flex-1 border border-[#0d3039] text-[#0d3039] hover:bg-[#0d3039] hover:text-white py-2.5 px-4 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  BÁO GIÁ MAY MẪU <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCatalogue();
                }}
                className="w-full text-[11px] text-[#0d9bb4] hover:underline flex items-center justify-center gap-1 py-1"
              >
                <BookOpen className="w-3.5 h-3.5" /> Xem trọn vẹn Catalogue Trang 04 gốc
              </button>
            </div>

          </div>

        </div>

        {/* FOOTER DI SẢN QUICK SWITCHER */}
        <div className="bg-[#f6f7f4] px-4 py-2.5 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 overflow-x-auto gap-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase hidden sm:inline">
            4 Biểu tượng di sản:
          </span>
          <div className="flex items-center gap-2">
            {symbols.map(s => (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSymbol(s);
                  setActiveTab('site');
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                  s.id === symbol.id
                    ? 'bg-[#0d3039] text-[#e4c36f] shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
