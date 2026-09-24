import React from 'react';
import { COMPANY_INFO } from '../../data/company';

export const StatsBar: React.FC = () => {
  return (
    <section className="border-y border-[#153e47]/10 bg-[#f6f7f4]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#153e47]/10 px-5 sm:grid-cols-4 lg:px-8 py-8 text-center">
        {COMPANY_INFO.stats.map((stat, idx) => (
          <div key={idx} className="p-4 sm:p-2">
            <strong className="font-serif block text-3xl sm:text-4xl text-[#0d9bb4] tracking-tight">
              {stat.value}
            </strong>
            <span className="mt-1 block text-[10px] sm:text-xs font-bold text-[#5c7176] tracking-wider uppercase">
              {stat.label}
            </span>
            <span className="mt-0.5 block text-[11px] text-[#78939a] hidden lg:block">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
