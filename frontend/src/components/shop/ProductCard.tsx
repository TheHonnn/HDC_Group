import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import type { Product } from '../../types';
import { useConsultation } from '../../context/ConsultationContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProduct, addItem } = useConsultation();

  return (
    <div className="group overflow-hidden bg-white text-left shadow-sm border border-[#153e47]/10 transition hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between rounded-xl">
      
      {/* IMAGE & BADGES */}
      <div
        className="relative aspect-[1/1] overflow-hidden bg-[#e8eef0] cursor-pointer flex items-center justify-center"
        onClick={() => setSelectedProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`transition duration-700 group-hover:scale-105 group-hover:opacity-85 ${
            product.category === 'heritage'
              ? 'max-h-[85%] max-w-[85%] object-contain'
              : 'h-full w-full object-cover object-center'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <span className="absolute left-2.5 top-2.5 bg-[#0d3039] text-[#e4c36f] px-2 py-0.5 text-[9px] font-bold tracking-[0.14em] shadow-sm rounded-sm">
          {product.code}
        </span>
        <span className="absolute right-2.5 top-2.5 bg-white/95 backdrop-blur text-[#0b8faa] px-2 py-0.5 text-[9px] font-bold tracking-[0.08em] shadow-sm rounded-sm border border-[#bfd5d9]/60">
          {product.badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-[0.14em] text-[#168ca5] uppercase">
            {product.material}
          </p>
          <h3
            onClick={() => setSelectedProduct(product)}
            className="font-serif mt-1.5 text-base sm:text-lg text-[#10313a] font-bold leading-snug group-hover:text-[#0d9bb4] transition cursor-pointer line-clamp-2"
          >
            {product.name}
          </h3>
          <p className="mt-2 text-xs leading-5 text-[#597077] line-clamp-2">
            {product.desc}
          </p>

          <div className="mt-3 flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((f, i) => (
              <span
                key={i}
                className="text-[9px] bg-[#f6f7f4] border border-[#bfd5d9]/60 px-2 py-0.5 text-[#45626a] rounded-sm truncate max-w-full"
              >
                ✓ {f}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-1">
          <button
            onClick={() => setSelectedProduct(product)}
            className="text-[11px] font-bold tracking-[0.1em] text-[#0d3039] hover:text-[#0d9bb4] flex items-center gap-1 transition"
          >
            CHI TIẾT <ArrowRight className="w-3 h-3" />
          </button>
          
          <button
            onClick={() => addItem(product)}
            className="bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-2.5 py-1.5 text-[10px] font-bold tracking-[0.08em] transition rounded-md flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3 h-3" /> CHỌN TƯ VẤN
          </button>
        </div>
      </div>

    </div>
  );
};
