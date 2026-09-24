import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, SlidersHorizontal, Sparkles, X, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { ALL_PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ShopViewProps {
  onBackToHome: () => void;
  initialCategory?: string;
}

interface SubCategoryItem {
  id: string;
  label: string;
  productCodes: string[];
}

interface CategoryGroupItem {
  id: string;
  label: string;
  subCategories?: SubCategoryItem[];
}

const CATEGORY_GROUPS: CategoryGroupItem[] = [
  {
    id: 'all',
    label: 'Tất cả mẫu thiết kế'
  },
  {
    id: 'shirt',
    label: 'Sơ mi Sinh Thái & Seamless',
    subCategories: [
      {
        id: 'shirt-all',
        label: 'Tất cả sơ mi',
        productCodes: ['HDC-SM 01', 'HDC-SM 02', 'HDC-SM 03', 'HDC-SM 04']
      },
      {
        id: 'shirt-seamless',
        label: 'Sơ mi Seamless không đường may',
        productCodes: ['HDC-SM 02', 'HDC-SM 04']
      },
      {
        id: 'shirt-green',
        label: 'Sơ mi sợi tự nhiên (Sen & Bamboo)',
        productCodes: ['HDC-SM 01']
      },
      {
        id: 'shirt-corporate',
        label: 'Sơ mi công sở dài tay & ngắn tay',
        productCodes: ['HDC-SM 03']
      },
      {
        id: 'shirt-white-exec',
        label: 'Sơ mi Executive Slimfit',
        productCodes: ['HDC-SM 04']
      }
    ]
  },
  {
    id: 'polo',
    label: 'Áo Polo Anti-UV',
    subCategories: [
      {
        id: 'polo-all',
        label: 'Tất cả áo Polo',
        productCodes: ['HDC-PL 01', 'HDC-PL 02', 'HDC-GF 01']
      },
      {
        id: 'polo-signature',
        label: 'Áo Polo Signature',
        productCodes: ['HDC-PL 02']
      },
      {
        id: 'polo-orange',
        label: 'Áo Polo thể thao năng động',
        productCodes: ['HDC-PL 01']
      },
      {
        id: 'polo-golf',
        label: 'Đồng Phục Polo Anti-UV Kháng Khuẩn',
        productCodes: ['HDC-GF 01']
      }
    ]
  },
  {
    id: 'heritage',
    label: 'BST Di sản & Phụ kiện',
    subCategories: [
      {
        id: 'heritage-all',
        label: 'Tất cả BST Di sản & Phụ kiện',
        productCodes: ['HDC-CL 01', 'HDC-CL 02', 'HDC-CL 03', 'HDC-CL 04', 'HDC-PK 01', 'HDC-PK 02', 'HDC-PK 03', 'HDC-PK 04', 'HDC-SUIT 01']
      },
      {
        id: 'heritage-shirts',
        label: 'Sơ mi & Đồng phục dệt hoa văn Di sản',
        productCodes: ['HDC-CL 01', 'HDC-CL 02', 'HDC-CL 03', 'HDC-CL 04', 'HDC-PK 03']
      },
      {
        id: 'heritage-wallet',
        label: 'Ví da nam cao cấp (Da bò nguyên tấm)',
        productCodes: ['HDC-PK 01']
      },
      {
        id: 'heritage-belt',
        label: 'Thắt lưng da cao cấp HDC LIMITED',
        productCodes: ['HDC-PK 02']
      },
      {
        id: 'heritage-tie',
        label: 'Bộ Cavat & Khăn cài túi ngực',
        productCodes: ['HDC-PK 04']
      },
      {
        id: 'heritage-suit',
        label: 'Bộ Suit Doanh nhân Di sản',
        productCodes: ['HDC-SUIT 01']
      }
    ]
  },
  {
    id: 'kids',
    label: 'Đồng phục IHDC Kids',
    subCategories: [
      {
        id: 'kids-all',
        label: 'Tất cả đồng phục Kids',
        productCodes: ['HDC-KD 01', 'HDC-KD 02', 'HDC-KD 03', 'HDC-KD 04']
      },
      {
        id: 'kids-polo',
        label: 'Áo thun Polo học sinh',
        productCodes: ['HDC-KD 01']
      },
      {
        id: 'kids-skirt',
        label: 'Đồng phục Polo & Chân váy xếp ly',
        productCodes: ['HDC-KD 02']
      },
      {
        id: 'kids-boy-shorts',
        label: 'Đồng phục Polo & Quần sooc nam sinh',
        productCodes: ['HDC-KD 03']
      },
      {
        id: 'kids-active-shorts',
        label: 'Đồng phục Polo & Quần sooc năng động',
        productCodes: ['HDC-KD 04']
      }
    ]
  }
];

export const ShopView: React.FC<ShopViewProps> = ({
  onBackToHome,
  initialCategory = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // MẶC ĐỊNH TẤT CẢ CÁC DANH MỤC ĐỀU THU VÀO (COLLAPSED)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategoryExpand = (catId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleSelectParentCategory = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubCategory(null);
    if (catId === 'all') {
      // Khi bấm Tất cả, thu gọn mọi danh mục
      setExpandedCategories({});
    } else {
      // Khi click vào danh mục: nếu đang thu thì mở ra, nếu đang mở thì thu lại
      setExpandedCategories(prev => ({
        ...prev,
        [catId]: !prev[catId]
      }));
    }
  };

  const handleSelectSubCategory = (catId: string, subId: string) => {
    setActiveCategory(catId);
    setActiveSubCategory(subId);
  };

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      // 1. Category and Subcategory matching
      let matchCategory = true;

      if (activeSubCategory) {
        let targetCodes: string[] = [];
        for (const grp of CATEGORY_GROUPS) {
          const sub = grp.subCategories?.find(s => s.id === activeSubCategory);
          if (sub) {
            targetCodes = sub.productCodes;
            break;
          }
        }
        matchCategory = targetCodes.includes(p.code);
      } else if (activeCategory !== 'all') {
        matchCategory = p.category === activeCategory;
      }

      // 2. Search query matching
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = q === '' || 
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.features && p.features.some(f => f.toLowerCase().includes(q)));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  // Current active label for breadcrumb
  const currentCategoryLabel = useMemo(() => {
    const parent = CATEGORY_GROUPS.find(g => g.id === activeCategory);
    if (!parent) return 'Tất cả sản phẩm';
    if (activeSubCategory && parent.subCategories) {
      const sub = parent.subCategories.find(s => s.id === activeSubCategory);
      if (sub) return `${parent.label} › ${sub.label}`;
    }
    return parent.label;
  }, [activeCategory, activeSubCategory]);

  return (
    <main className="flex-1">
      {/* 1. SHOP HEADER - GIỮ NGUYÊN BẢN SẮC & THẺ ĐẦU TRANG */}
      <section className="border-b border-[#153e47]/10 bg-[#e2eff1]">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 py-12 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#0d9bb4]" /> HDC FASHION / GIAN HÀNG MAY ĐO DOANH NGHIỆP
              </p>
              <h1 className="font-serif mt-2.5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl text-[#10313a]">
                Bộ sưu tập <br />
                <em className="font-normal text-[#0d9bb4]">đồng phục đặc sắc.</em>
              </h1>
              <p className="mt-3.5 max-w-2xl text-xs sm:text-sm leading-6 text-[#597077]">
                100% hình ảnh thực tế từ Catalogue HDC Fashion. Mọi sản phẩm đều may từ sợi tự nhiên bản địa, công nghệ Seamless co giãn 4 chiều hoặc may đo độc quyền.
              </p>
            </div>

            <button
              onClick={onBackToHome}
              className="w-fit text-xs font-bold tracking-[0.14em] text-[#0d3039] hover:text-[#0d9bb4] flex items-center gap-2 border-b border-[#0d3039] pb-1 transition flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" /> VỀ TRANG GIỚI THIỆU CHÍNH
            </button>
          </div>
        </div>
      </section>

      {/* 2. CHỖ HIỂN THỊ MẪU THỰC TẾ: TÁCH KHUNG LỌC BÊN TRÁI & SẢN PHẨM BÊN PHẢI (TỐI ĐA 4 SẢN PHẨM / HÀNG) */}
      <section className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-7 items-start">
          
          {/* KHUNG LỌC BÊN TRÁI (LEFT SIDEBAR) - CỐ ĐỊNH KHI CUỘN */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24 self-start space-y-4 z-20 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
            
            <div className="bg-white p-5 rounded-2xl border border-[#153e47]/15 shadow-sm space-y-5">
              
              {/* THANH TÌM KIẾM Ở TRÊN ĐẦU KHUNG LỌC */}
              <div>
                <label className="text-[10px] font-bold tracking-[0.16em] text-[#0d9bb4] uppercase block mb-2 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" /> TÌM KIẾM MẪU ÁO
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Tìm mã áo, tên áo, vải..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#f6f8f9] border border-gray-200 rounded-lg pl-9 pr-8 py-2.5 text-xs text-[#102a32] placeholder-gray-400 outline-none focus:bg-white focus:border-[#0d9bb4] focus:ring-1 focus:ring-[#0d9bb4] transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-0.5"
                      title="Xóa tìm kiếm"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* PHÂN LOẠI CÁC LOẠI ÁO CÓ MENU CON SỔ XUỐNG KHI BẤM */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-[#0d9bb4] uppercase flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5" /> PHÂN LOẠI ĐỒNG PHỤC
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">
                    {ALL_PRODUCTS.length} mẫu
                  </span>
                </div>

                <div className="space-y-1.5">
                  {CATEGORY_GROUPS.map(grp => {
                    const isAllGroup = grp.id === 'all';
                    const isGroupActive = activeCategory === grp.id && !activeSubCategory;
                    const isGroupExpanded = expandedCategories[grp.id];
                    const hasSubCategories = grp.subCategories && grp.subCategories.length > 0;
                    
                    const parentCount = isAllGroup
                      ? ALL_PRODUCTS.length
                      : ALL_PRODUCTS.filter(p => p.category === grp.id).length;

                    return (
                      <div key={grp.id} className="rounded-lg overflow-hidden">
                        
                        {/* PARENT CATEGORY ROW */}
                        <div
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                            isGroupActive
                              ? 'bg-[#0d3039] text-[#e4c36f] shadow-sm font-bold'
                              : activeCategory === grp.id
                              ? 'bg-[#f0f6f8] text-[#0d3039] font-bold'
                              : 'text-[#45626a] hover:bg-[#f2f6f7] hover:text-[#0d3039]'
                          }`}
                          onClick={() => handleSelectParentCategory(grp.id)}
                        >
                          <span className="truncate pr-1 flex items-center gap-1.5">
                            {grp.label}
                          </span>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                isGroupActive
                                  ? 'bg-white/15 text-[#e4c36f]'
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {parentCount}
                            </span>

                            {hasSubCategories && (
                              <button
                                type="button"
                                onClick={(e) => toggleCategoryExpand(grp.id, e)}
                                className="p-1 text-gray-400 hover:text-[#0d3039] transition rounded"
                                title={isGroupExpanded ? 'Thu gọn' : 'Mở rộng'}
                              >
                                {isGroupExpanded ? (
                                  <ChevronDown className="w-3.5 h-3.5" />
                                ) : (
                                  <ChevronRight className="w-3.5 h-3.5" />
                                )}
                              </button>
                            )}
                          </div>
                        </div>

                        {/* SUBCATEGORIES ACCORDION (HIỂN THỊ CÁC LOẠI BÊN DƯỚI KHI BẤM) */}
                        {hasSubCategories && isGroupExpanded && (
                          <div className="pl-3.5 ml-3 my-1 border-l-2 border-[#0d9bb4]/30 space-y-1 animate-fade-in">
                            {grp.subCategories!.map(sub => {
                              const isSubActive = activeCategory === grp.id && activeSubCategory === sub.id;
                              const subCount = sub.productCodes.length;

                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => handleSelectSubCategory(grp.id, sub.id)}
                                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] transition text-left ${
                                    isSubActive
                                      ? 'bg-[#0d9bb4] text-white font-bold shadow-sm'
                                      : 'text-[#597077] hover:bg-gray-100 hover:text-[#0d3039]'
                                  }`}
                                >
                                  <span className="truncate pr-1 flex items-center gap-1">
                                    <span className="text-[9px] opacity-60">↳</span>
                                    {sub.label}
                                  </span>
                                  <span
                                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold flex-shrink-0 ${
                                      isSubActive
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}
                                  >
                                    {subCount}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              </div>

              {/* LỌC NHANH THEO ĐẶC TÍNH NỔI BẬT */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#0d9bb4] uppercase block mb-2">
                  TÍNH NĂNG VẢI NỔI BẬT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Chất liệu xanh',
                    'Seamless',
                    'Không nhăn',
                    'Kháng khuẩn',
                    'Anti-UV',
                    'HDC LIMITED'
                  ].map(tag => {
                    const isTagActive = searchQuery === tag;
                    return (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(isTagActive ? '' : tag)}
                        className={`text-[11px] px-2.5 py-1 rounded-md border transition flex items-center gap-1 ${
                          isTagActive
                            ? 'bg-[#0d9bb4] text-white border-[#0d9bb4] shadow-sm font-bold'
                            : 'bg-[#f6f8f9] text-[#597077] border-gray-200 hover:border-[#0d9bb4] hover:text-[#0d9bb4]'
                        }`}
                      >
                        {isTagActive && <Check className="w-3 h-3" />}
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* NÚT XÓA BỘ LỌC */}
              {(activeCategory !== 'all' || activeSubCategory !== null || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubCategory(null);
                    setSearchQuery('');
                  }}
                  className="w-full text-center text-xs font-bold text-red-500 hover:text-red-700 hover:underline pt-2 block transition"
                >
                  Xóa tất cả bộ lọc (Xem lại {ALL_PRODUCTS.length} mẫu)
                </button>
              )}

            </div>
          </aside>

          {/* SẢN PHẨM HIỂN THỊ BÊN PHẢI (RIGHT PRODUCTS GRID) - TỐI ĐA 4 SẢN PHẨM 1 HÀNG */}
          <div className="flex-1 min-w-0">
            
            {/* THANH THỐNG KÊ TRÊN ĐẦU LƯỚI SẢN PHẨM */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3.5 mb-6 border-b border-gray-200 gap-3">
              <div>
                <h2 className="font-serif text-lg sm:text-xl text-[#10313a] font-bold">
                  {currentCategoryLabel}
                </h2>
                <p className="text-xs text-[#597077] mt-0.5">
                  Hiển thị <b>{filteredProducts.length}</b> / {ALL_PRODUCTS.length} mẫu thiết kế thực tế
                  {searchQuery && <span className="text-[#0d9bb4] font-medium"> · Lọc theo: "{searchQuery}"</span>}
                </p>
              </div>

              <div className="text-xs text-gray-500 flex items-center gap-1.5">
                <span>Chế độ:</span>
                <span className="font-bold text-[#0d3039] bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200 text-[11px]">
                  Tối đa 4 sản phẩm / hàng
                </span>
              </div>
            </div>

            {/* LƯỚI SẢN PHẨM: TỐI ĐA 4 CỘT TRÊN 1 HÀNG */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-[#153e47]/10 rounded-2xl animate-fade-in shadow-sm">
                <p className="text-lg font-serif text-[#10313a] font-bold">Không tìm thấy mẫu phù hợp</p>
                <p className="text-xs text-gray-500 mt-2">Thử chọn danh mục khác ở khung lọc bên trái hoặc điều chỉnh từ khóa tìm kiếm</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubCategory(null);
                    setSearchQuery('');
                  }}
                  className="mt-4 bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-5 py-2.5 text-xs font-bold rounded-lg transition"
                >
                  Xem tất cả {ALL_PRODUCTS.length} mẫu
                </button>
              </div>
            ) : (
              <div
                key={activeCategory + (activeSubCategory || '') + (searchQuery ? '-search' : '')}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 animate-fade-in-up"
              >
                {filteredProducts.map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            )}

          </div>

        </div>
      </section>
    </main>
  );
};
