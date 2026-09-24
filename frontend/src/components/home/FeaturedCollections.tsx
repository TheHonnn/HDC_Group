import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../../data/collections';
import type { FeaturedCollection } from '../../types';

interface FeaturedCollectionsProps {
  onSelectCollection: (col: FeaturedCollection) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCollection
}) => {
  return (
    <section id="san-pham" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4]">
            BỘ SƯU TẬP DOANH NGHIỆP
          </p>
          <h2 className="font-serif mt-3 text-4xl leading-none sm:text-5xl text-[#10313a]">
            Những điều đội ngũ <br />
            bạn sẽ tự hào khoác lên.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-[#597077]">
          Từ phòng họp cấp cao, sự kiện thể thao Golf đến sân trường học đường, mỗi sản phẩm HDC là một điểm chạm thương hiệu đầy cảm xúc.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden bg-[#d1dde0] md:grid-cols-2 shadow-lg">
        {FEATURED_COLLECTIONS.map((col) => (
          <button
            key={col.id}
            onClick={() => onSelectCollection(col)}
            className="group relative min-h-[380px] overflow-hidden bg-[#eaf0f2] text-left focus:outline-none"
          >
            <img
              src={col.image}
              alt={col.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082d37]/90 via-[#082d37]/35 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7 text-white">
              <div className="max-w-md">
                <span className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#7ee0eb]">
                  {col.tag}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                  {col.title}
                </h3>
                <p className="mt-2 text-xs text-white/80 line-clamp-2">
                  {col.subtitle}
                </p>
              </div>
              <div className="grid h-10 w-10 place-items-center bg-white/10 backdrop-blur rounded-full transition-transform group-hover:translate-x-1.5 group-hover:bg-[#0d9bb4]">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
