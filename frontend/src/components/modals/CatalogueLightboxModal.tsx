import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Check } from 'lucide-react';
import { CATALOGUE_PAGES } from '../../data/catalogue';
import { useConsultation } from '../../context/ConsultationContext';

interface CatalogueLightboxModalProps {
  onOrderCategory?: (category: string) => void;
}

export const CatalogueLightboxModal: React.FC<CatalogueLightboxModalProps> = ({ onOrderCategory }) => {
  const { selectedCataloguePage, setSelectedCataloguePage } = useConsultation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCataloguePage) return;
      if (e.key === 'Escape') setSelectedCataloguePage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCataloguePage]);

  if (!selectedCataloguePage) return null;

  const currentIndex = CATALOGUE_PAGES.findIndex(p => p.id === selectedCataloguePage);
  const page = CATALOGUE_PAGES[currentIndex] || CATALOGUE_PAGES[0];

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + CATALOGUE_PAGES.length) % CATALOGUE_PAGES.length;
    setSelectedCataloguePage(CATALOGUE_PAGES[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CATALOGUE_PAGES.length;
    setSelectedCataloguePage(CATALOGUE_PAGES[nextIdx].id);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#06232b]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={() => setSelectedCataloguePage(null)}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/20 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setSelectedCataloguePage(null)}
          className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black text-white p-2 rounded-full transition"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE PREVIEW WITH PREV / NEXT BUTTONS */}
        <div className="relative md:w-3/5 bg-gray-900 flex items-center justify-center overflow-hidden min-h-[380px] max-h-[55vh] md:max-h-[85vh]">
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-full object-contain max-h-[85vh]"
          />

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#102a32] p-2 rounded-full shadow-lg transition"
            aria-label="Trang trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#102a32] p-2 rounded-full shadow-lg transition"
            aria-label="Trang sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-3 bg-[#0d3039]/80 backdrop-blur text-white px-3 py-1 text-xs font-bold rounded">
            Trang {page.pageNumber} / {CATALOGUE_PAGES.length.toString().padStart(2, '0')}
          </div>
        </div>

        {/* DETAILS SIDE */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[85vh] bg-[#f6f7f4]">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0d9bb4] flex items-center gap-1.5 uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              Catalogue HDC · Trang {page.pageNumber}
            </span>

            <h2 className="font-serif mt-2 text-2xl sm:text-3xl text-[#10313a] leading-tight font-bold">
              {page.title}
            </h2>

            <p className="text-xs font-semibold text-[#168ca5] mt-1.5">
              {page.subtitle}
            </p>

            <p className="mt-4 text-xs leading-6 text-[#597077]">
              {page.description}
            </p>

            <div className="mt-5 space-y-2">
              <p className="text-[11px] font-bold text-[#102a32] tracking-wider uppercase">
                Điểm nổi bật của mẫu:
              </p>
              {page.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#45626a]">
                  <Check className="w-3.5 h-3.5 text-[#0d9bb4] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setSelectedCataloguePage(null);
                onOrderCategory?.(page.category);
              }}
              className="w-full bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white py-3 text-xs font-bold tracking-[0.12em] transition text-center rounded-sm shadow"
            >
              YÊU CẦU MAY THEO MẪU NÀY
            </button>
            <p className="text-[10px] text-center text-gray-500">
              Nhấn phím ← / → để chuyển giữa các trang catalogue
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
