import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { CATALOGUE_PAGES } from '../../data/catalogue';
import { useConsultation } from '../../context/ConsultationContext';

export const CatalogueGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { setSelectedCataloguePage } = useConsultation();

  const filteredPages = activeFilter === 'all'
    ? CATALOGUE_PAGES
    : CATALOGUE_PAGES.filter(p => {
        if (activeFilter === 'eco') return p.category === 'material' || p.category === 'seamless';
        if (activeFilter === 'corporate') return p.category === 'corporate' || p.category === 'overview' || p.category === 'heritage';
        if (activeFilter === 'polo') return p.category === 'polo' || p.category === 'golf';
        if (activeFilter === 'kids') return p.category === 'kids';
        return true;
      });

  return (
    <section id="catalogue-goc" className="bg-[#eaf0f2] py-24 border-y border-[#153e47]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0d9bb4]" /> CATALOGUE ĐỒNG PHỤC HDC FASHION
            </p>
            <h2 className="font-serif mt-3 text-4xl sm:text-5xl text-[#10313a] leading-tight">
              Khám phá trọn bộ 12 trang <br />
              <em className="font-normal text-[#0d9bb4]">IHDC GROUP.</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#597077]">            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả 12 trang' },
              { id: 'eco', label: 'Chất liệu xanh & Seamless' },
              { id: 'corporate', label: 'Sơ mi & Di sản' },
              { id: 'polo', label: 'Polo Anti-UV' },
              { id: 'kids', label: 'Đồng phục IHDC Kids' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-2 text-xs font-bold transition rounded-sm ${
                  activeFilter === tab.id
                    ? 'bg-[#0d3039] text-white shadow-sm'
                    : 'bg-white border border-[#bfd5d9] text-[#45626a] hover:text-[#0d9bb4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12-PAGE GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              onClick={() => setSelectedCataloguePage(page.id)}
              className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm border border-[#153e47]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={page.image}
                  alt={page.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="absolute top-3 left-3 bg-[#0d3039] text-[#e4c36f] px-2.5 py-1 text-[10px] font-bold tracking-wider shadow">
                  TRANG {page.pageNumber}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#10313a] leading-tight group-hover:text-[#0d9bb4] transition">
                    {page.title}
                  </h3>
                  <p className="text-[11px] text-[#597077] mt-1.5 line-clamp-2">
                    {page.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#0b8faa] font-bold">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
