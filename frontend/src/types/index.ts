export interface Product {
  id: number;
  code: string;
  category: 'shirt' | 'polo' | 'heritage' | 'kids';
  name: string;
  material: string;
  features: string[];
  price: string;
  image: string;
  badge: string;
  desc: string;
  highlights?: string[];
  sizes?: string[];
}

export interface FeaturedCollection {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'shirt' | 'polo' | 'heritage' | 'kids';
  desc: string;
}

export interface Category {
  id: string;
  label: string;
  count?: number;
}

export interface ConsultationItem extends Product {
  size: string;
  addedAt: number;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  company: string;
  category: string;
  quantity: string;
  notes: string;
}

export interface CataloguePage {
  id: number;
  pageNumber: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'overview' | 'material' | 'seamless' | 'heritage' | 'corporate' | 'polo' | 'golf' | 'kids';
  description: string;
  highlights: string[];
}

export interface MaterialInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  badge: string;
}
