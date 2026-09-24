import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, ConsultationItem } from '../types';

interface ConsultationContextType {
  items: ConsultationItem[];
  addItem: (product: Product, size?: string) => void;
  removeItem: (index: number) => void;
  clearItems: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedCataloguePage: number | null;
  setSelectedCataloguePage: (pageId: number | null) => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ConsultationItem[]>(() => {
    try {
      const saved = localStorage.getItem('hdc_consultation_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCataloguePage, setSelectedCataloguePage] = useState<number | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('hdc_consultation_items', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save consultation items to localStorage', e);
    }
  }, [items]);

  const addItem = (product: Product, size: string = 'L') => {
    const newItem: ConsultationItem = {
      ...product,
      size,
      addedAt: Date.now()
    };
    setItems(prev => [...prev, newItem]);
    setSelectedProduct(null);
    setIsDrawerOpen(true);
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <ConsultationContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedProduct,
        setSelectedProduct,
        selectedCataloguePage,
        setSelectedCataloguePage
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
