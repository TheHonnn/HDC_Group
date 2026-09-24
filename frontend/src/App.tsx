import { useState, useTransition } from 'react';
import { ConsultationProvider } from './context/ConsultationContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { StatsBar } from './components/home/StatsBar';
import { FeaturedCollections } from './components/home/FeaturedCollections';
import { SustainableMaterials } from './components/home/SustainableMaterials';
import { SeamlessTech } from './components/home/SeamlessTech';
import { CulturalHeritage } from './components/home/CulturalHeritage';
import { CatalogueGallery } from './components/home/CatalogueGallery';
import { B2BCommitments } from './components/home/B2BCommitments';
import { AboutFounder } from './components/home/AboutFounder';
import { ConsultationForm } from './components/home/ConsultationForm';
import { ShopView } from './components/shop/ShopView';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { ConsultationDrawer } from './components/modals/ConsultationDrawer';
import { CatalogueLightboxModal } from './components/modals/CatalogueLightboxModal';
import { FloatingQuoteBadge } from './components/ui/FloatingQuoteBadge';
import { ScrollReveal } from './components/ui/ScrollReveal';
import type { FeaturedCollection } from './types';

function MainAppContent() {
  const [currentView, setCurrentView] = useState<'home' | 'shop'>('home');
  const [shopCategory, setShopCategory] = useState<string>('all');
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  const navigateToView = (view: 'home' | 'shop', category = 'all', targetSectionId?: string) => {
    setIsNavigating(true);

    startTransition(() => {
      setShopCategory(category);
      setCurrentView(view);
    });

    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsNavigating(false);
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setIsNavigating(false);
      }, 400);
    }
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      navigateToView('home', 'all', id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (col: FeaturedCollection) => {
    navigateToView('shop', col.category);
  };

  const handleOpenCategoryFromFooter = (cat: 'shirt' | 'polo' | 'heritage' | 'kids') => {
    navigateToView('shop', cat);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f6f7f4] text-[#102a32] flex flex-col font-sans relative">
      {/* LUXURY TOP PAGE PROGRESS BAR ON NAVIGATION */}
      {isNavigating && (
        <div
          key={Date.now()}
          className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-[#0d9bb4] via-[#e4c36f] to-[#73d8e5] animate-top-progress shadow-[0_0_10px_rgba(228,195,111,0.8)] pointer-events-none"
        />
      )}

      {/* TOP NOTIFICATION BANNER */}
      <AnnouncementBar />

      {/* STICKY MAIN HEADER */}
      <Header
        currentView={currentView}
        setCurrentView={(view) => navigateToView(view)}
        onNavigateSection={scrollToSection}
      />

      {/* VIEW SWITCHER WITH SMOOTH PAGE TRANSITION ANIMATION */}
      <div key={currentView} className="flex-1 flex flex-col animate-page-enter">
        {currentView === 'shop' ? (
          <ShopView
            initialCategory={shopCategory}
            onBackToHome={() => navigateToView('home')}
          />
        ) : (
          <main className="flex-1">
            {/* 1. HERO SECTION */}
            <HeroSection
              onOpenQuote={() => scrollToSection('lien-he')}
              onOpenShop={() => navigateToView('shop')}
              onOpenCatalogue={() => scrollToSection('catalogue-goc')}
            />

            {/* 2. STATS BAR */}
            <ScrollReveal direction="up" delay={50}>
              <StatsBar />
            </ScrollReveal>

            {/* 3. 4 FEATURED ENTERPRISE COLLECTIONS */}
            <ScrollReveal direction="up" delay={100}>
              <FeaturedCollections onSelectCollection={handleSelectCollection} />
            </ScrollReveal>

            {/* 4. CHẤT LIỆU XANH TỰ NHIÊN (BANANA, COCONUT, BAMBOO, LOTUS) */}
            <ScrollReveal direction="up" delay={100}>
              <SustainableMaterials />
            </ScrollReveal>

            {/* 5. CÔNG NGHỆ SƠ MI SEAMLESS KHÔNG ĐƯỜNG MAY */}
            <ScrollReveal direction="up" delay={100}>
              <SeamlessTech
                onViewShirts={() => navigateToView('shop', 'shirt')}
                onRequestSample={() => scrollToSection('lien-he')}
              />
            </ScrollReveal>

            {/* 6. DỰ ÁN & DI SẢN VĂN HÓA VIỆT */}
            <ScrollReveal direction="up" delay={100}>
              <CulturalHeritage onTellStory={() => scrollToSection('lien-he')} />
            </ScrollReveal>

            {/* 7. FULL 12-PAGE ORIGINAL HDC CATALOGUE GALLERY */}
            <ScrollReveal direction="up" delay={100}>
              <CatalogueGallery />
            </ScrollReveal>

            {/* 8. QUY TRÌNH MAY ĐO B2B & 5 CAM KẾT */}
            <ScrollReveal direction="up" delay={100}>
              <B2BCommitments />
            </ScrollReveal>

            {/* 9. VỀ HDC GROUP & FOUNDER */}
            <ScrollReveal direction="up" delay={100}>
              <AboutFounder />
            </ScrollReveal>

            {/* 10. B2B CONSULTATION & QUOTE REQUEST FORM */}
            <ScrollReveal direction="up" delay={100}>
              <ConsultationForm />
            </ScrollReveal>
          </main>
        )}
      </div>

      {/* FOOTER */}
      <Footer
        onSelectCategory={handleOpenCategoryFromFooter}
        onOpenConsultation={() => scrollToSection('lien-he')}
      />

      {/* FLOATING ACTION INDICATOR */}
      <FloatingQuoteBadge onOpenShopCategory={handleOpenCategoryFromFooter} />

      {/* GLOBAL MODALS WITH TRANSITIONS */}
      <ProductDetailModal onDirectQuote={() => scrollToSection('lien-he')} />
      <ConsultationDrawer
        onGoToQuoteForm={() => scrollToSection('lien-he')}
        onExploreShop={() => navigateToView('shop')}
      />
      <CatalogueLightboxModal
        onOrderCategory={() => scrollToSection('lien-he')}
      />
    </div>
  );
}

export default function App() {
  return (
    <ConsultationProvider>
      <MainAppContent />
    </ConsultationProvider>
  );
}
