import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, BookOpen } from 'lucide-react';
import { useConsultation } from '../../context/ConsultationContext';
import { ASSETS } from '../../data/assets';

interface HeaderProps {
  currentView: 'home' | 'shop';
  setCurrentView: (view: 'home' | 'shop') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onNavigateSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, setIsDrawerOpen } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f6f7f4]/98 shadow-md border-b border-[#153e47]/15 py-0 backdrop-blur-md'
          : 'bg-[#f6f7f4]/95 shadow-sm border-b border-[#153e47]/10 backdrop-blur'
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        
        {/* LOGO */}
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-none group"
          aria-label="Về trang chủ HDC Fashion"
        >
          <img
            src={ASSETS.logo}
            alt="HDC Fashion Logo"
            className="h-10 w-auto max-w-[48px] object-contain transition duration-300 group-hover:scale-105 drop-shadow-sm"
          />
          <span>
            <b className="block text-lg leading-none tracking-tight text-[#102a32]">IHDC</b>
            <span className="text-[9px] font-bold tracking-[0.24em] text-[#168ca5]"></span>
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#284850] lg:flex">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition hover:text-[#0d9bb4] ${
              currentView === 'home' ? 'text-[#0d9bb4] font-bold' : ''
            }`}
          >
            Trang chủ
          </button>

          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition hover:text-[#0d9bb4] flex items-center gap-1.5 ${
              currentView === 'shop' ? 'text-[#0d9bb4] font-bold' : ''
            }`}
          >
            Gian hàng
            <span className="bg-[#0d9bb4]/15 text-[#0b8faa] text-[10px] px-1.5 py-0.5 rounded font-bold">
              New
            </span>
          </button>

          <button
            onClick={() => handleNav('catalogue-goc')}
            className="transition hover:text-[#0d9bb4] flex items-center gap-1 text-[#0b8faa]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Catalogue 12 Trang
          </button>

          <button
            onClick={() => handleNav('chat-lieu')}
            className="transition hover:text-[#0d9bb4]"
          >
            Chất liệu xanh
          </button>

          <button
            onClick={() => handleNav('cong-nghe')}
            className="transition hover:text-[#0d9bb4]"
          >
            Seamless 4D
          </button>

          <button
            onClick={() => handleNav('du-an')}
            className="transition hover:text-[#0d9bb4]"
          >
            Dự án &amp; Di sản
          </button>

          <button
            onClick={() => handleNav('ve-hdc')}
            className="transition hover:text-[#0d9bb4]"
          >
            Về HDC
          </button>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* CONSULTATION BAG */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative p-2.5 text-[#0d3039] hover:text-[#0d9bb4] transition border border-[#153e47]/15 rounded hover:border-[#0d9bb4]"
            title="Danh sách mẫu cần báo giá"
            aria-label="Giỏ tư vấn đồng phục"
          >
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#e4c36f] text-[#102a32] text-[10px] font-bold h-5 w-5 rounded-full grid place-items-center shadow animate-scaleIn">
                {items.length}
              </span>
            )}
          </button>

          {/* CTA QUOTE BUTTON */}
          <button
            onClick={() => handleNav('lien-he')}
            className="hidden bg-[#0d3039] px-5 py-3 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-[#0d9bb4] shadow-sm lg:block"
          >
            NHẬN BÁO GIÁ
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-10 w-10 place-items-center border border-[#153e47]/20 rounded lg:hidden focus:outline-none"
            aria-label="Mở thực đơn"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <nav className="border-t border-[#153e47]/10 bg-[#f6f7f4] px-5 py-5 lg:hidden animate-fadeIn">
          <div className="mx-auto grid max-w-7xl gap-3 text-sm font-semibold">
            <button
              onClick={() => {
                setCurrentView('home');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 hover:text-[#0d9bb4] border-b border-gray-200"
            >
              Trang chủ
            </button>
            <button
              onClick={() => {
                setCurrentView('shop');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 text-[#0d9bb4] font-bold border-b border-gray-200 flex justify-between items-center"
            >
              <span>Gian hàng E-Commerce</span>
              <span className="bg-[#0d9bb4] text-white text-[10px] px-2 py-0.5 rounded">XEM NGAY</span>
            </button>
            <button
              onClick={() => handleNav('catalogue-goc')}
              className="text-left py-2 text-[#0b8faa] font-bold border-b border-gray-200 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Xem Catalogue Gốc (12 Trang)</span>
            </button>
            <button
              onClick={() => handleNav('chat-lieu')}
              className="text-left py-2 hover:text-[#0d9bb4] border-b border-gray-200"
            >
              Chất liệu xanh bền vững
            </button>
            <button
              onClick={() => handleNav('cong-nghe')}
              className="text-left py-2 hover:text-[#0d9bb4] border-b border-gray-200"
            >
              Công nghệ Seamless sơ mi
            </button>
            <button
              onClick={() => handleNav('du-an')}
              className="text-left py-2 hover:text-[#0d9bb4] border-b border-gray-200"
            >
              Dự án &amp; Di sản văn hóa
            </button>
            <button
              onClick={() => handleNav('ve-hdc')}
              className="text-left py-2 hover:text-[#0d9bb4] border-b border-gray-200"
            >
              Về HDC &amp; Ban lãnh đạo
            </button>
            <button
              onClick={() => handleNav('lien-he')}
              className="bg-[#0d3039] text-white text-center py-3 text-xs font-bold tracking-[0.12em] mt-2 shadow"
            >
              ĐẶT THIẾT KẾ ĐỒNG PHỤC
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
