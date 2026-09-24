import React, { useState } from 'react';
import { Sparkles, ArrowRight, Plus, Eye } from 'lucide-react';
import { ASSETS } from '../../data/assets';
import { ALL_PRODUCTS } from '../../data/products';
import { useConsultation } from '../../context/ConsultationContext';
import { HeritageDetailModal, type HeritageSymbol } from '../modals/HeritageDetailModal';

interface CulturalHeritageProps {
  onTellStory: () => void;
}

export const CulturalHeritage: React.FC<CulturalHeritageProps> = ({ onTellStory }) => {
  const { setSelectedProduct, addItem, setSelectedCataloguePage } = useConsultation();
  const [activeHeritageTab, setActiveHeritageTab] = useState<'all' | 'hangxom' | 'nuidau' | 'trongdong' | 'kimboi'>('all');
  const [selectedHeritageSymbol, setSelectedHeritageSymbol] = useState<HeritageSymbol | null>(null);

  // Cultural heritage symbols data from Catalogue Page 4
  const HERITAGE_SYMBOLS: HeritageSymbol[] = [
    {
      id: 'hangxom',
      name: 'Hang Xóm Trại',
      region: 'Di chỉ khảo cổ học Mường Bi, Hòa Bình',
      patternName: 'Họa tiết tam giác xếp tầng',
      patternDesc: 'Biểu trưng cho hang đá nguyên sinh, sự kết nối cội nguồn và sức sống bền bỉ của người Việt cổ ngàn năm.',
      cardImg: ASSETS.cultureHangXomCard,
      patternImg: ASSETS.patternHangXomTrai,
      productCode: 'HDC-CL 03'
    },
    {
      id: 'nuidau',
      name: 'Núi Đầu Rồng',
      region: 'Thắng cảnh Cao Phong, Hòa Bình',
      patternName: 'Họa tiết vảy rồng cách điệu',
      patternDesc: 'Hình tượng rồng thiêng bảo trợ non sông, khơi nguồn khí chất kiêu hãnh và uy quyền cho người dẫn đầu.',
      cardImg: ASSETS.cultureNuiDauRongCard,
      patternImg: ASSETS.patternNuiDauRong,
      productCode: 'HDC-CL 01'
    },
    {
      id: 'trongdong',
      name: 'Trống Đồng Cổ',
      region: 'Bảo vật linh thiêng Văn hóa Đông Sơn',
      patternName: 'Họa tiết mặt trời sao 8 cánh',
      patternDesc: 'Vầng thái dương tỏa rạng nguồn sinh khí, biểu trưng cho sự trường tồn, thịnh vượng và đoàn kết.',
      cardImg: ASSETS.cultureTrongDongCard,
      patternImg: ASSETS.patternTrongDong,
      productCode: 'HDC-CL 02'
    },
    {
      id: 'kimboi',
      name: 'Suối Nước Nóng Kim Bôi',
      region: 'Dòng khoáng nóng danh tiếng',
      patternName: 'Họa tiết sóng khói suối khoáng',
      patternDesc: 'Làn sương khói bồng bềnh mang hơi ấm của lòng đất, tượng trưng cho sự hanh thông, thanh lọc và tươi mới.',
      cardImg: ASSETS.cultureSuoiKimBoiCard,
      patternImg: ASSETS.patternSuoiKimBoi,
      productCode: 'HDC-CL 04'
    }
  ];

  // Accessories from Page 4 (wallet, belt, shirt collar, tie)
  const ACCESSORIES = ALL_PRODUCTS.filter(p =>
    p.code === 'HDC-PK 01' || p.code === 'HDC-PK 02' || p.code === 'HDC-PK 03' || p.code === 'HDC-PK 04'
  );

  return (
    <section id="du-an" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      
      {/* 1. TOP HERO: DI SẢN VĂN HÓA VIỆT NAM */}
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-center mb-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0d9bb4]" /> DỰ ÁN / DI SẢN VĂN HÓA
          </p>
          <h2 className="font-serif mt-3 text-4xl sm:text-5xl lg:text-6xl leading-[0.94] text-[#10313a]">
            Trang phục <br />
            kể câu chuyện <br />
            <em className="font-normal text-[#0d9bb4]">văn hóa Việt.</em>
          </h2>
          <p className="mt-6 text-base leading-7 text-[#597077]">
            HDC Fashion vinh dự là thương hiệu thời trang tiên phong đưa 4 biểu tượng di sản ngàn năm: <strong className="text-[#102a32]">Hang Xóm Trại, Núi Đầu Rồng, Trống Đồng Cổ và Suối Nước Nóng Kim Bôi</strong> vào từng chi tiết đồng phục và phụ kiện cao cấp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 border-l-2 border-[#0d9bb4] pl-3">
              <div>
                <p className="font-serif text-xl text-[#10313a] font-bold">30 Năm</p>
                <p className="text-[11px] text-[#597077]">Doanh nhân trẻ Việt Nam</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-l-2 border-[#e4c36f] pl-3">
              <div>
                <p className="font-serif text-xl text-[#10313a] font-bold">4 Di Sản</p>
                <p className="text-[11px] text-[#597077]">Độc quyền số hóa hoa văn</p>
              </div>
            </div>
          </div>

          <button
            onClick={onTellStory}
            className="mt-8 bg-[#0d3039] text-white px-7 py-3 text-xs font-bold tracking-[0.14em] hover:bg-[#0d9bb4] transition shadow-md"
          >
            ĐẶT MAY ĐỒNG PHỤC DI SẢN
          </button>
        </div>

        {/* 2 LARGE IMAGES FROM CATALOGUE 4 & 7 - CLICKABLE TO VIEW HIGH-RES */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:pt-12">
            <div
              onClick={() => setSelectedCataloguePage(7)}
              className="overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 rounded-sm group relative cursor-pointer"
            >
              <img
                src={ASSETS.cat07}
                alt="Đồng phục doanh nghiệp Catalogue HDC Trang 7"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold tracking-wider transition">
                CATALOGUE TRANG 07
              </span>
            </div>
            <p className="mt-3 text-[10px] font-bold tracking-[0.14em] text-[#0d9bb4]">
              DOANH NGHIỆP &amp; GOLF
            </p>
            <h3
              onClick={() => setSelectedCataloguePage(7)}
              className="mt-1 font-serif text-2xl text-[#10313a] hover:text-[#0d9bb4] transition cursor-pointer"
            >
              Đồng phục, dấu ấn tập thể
            </h3>
            <p className="text-xs text-[#597077] mt-1 leading-5">
              Đồng hành cùng các tập đoàn lớn và giải Golf DNT kỷ niệm 30 năm phong trào Doanh nhân trẻ Việt Nam.
            </p>
          </div>

          <div>
            <div
              onClick={() => setSelectedCataloguePage(4)}
              className="overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 rounded-sm group relative cursor-pointer"
            >
              <img
                src={ASSETS.cat04}
                alt="Họa tiết văn hóa Việt Nam Catalogue HDC Trang 4"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold tracking-wider transition">
                CATALOGUE TRANG 04
              </span>
            </div>
            <p className="mt-3 text-[10px] font-bold tracking-[0.14em] text-[#0d9bb4]">
              SÁNG TẠO / DI SẢN BẢN ĐỊA
            </p>
            <h3
              onClick={() => setSelectedCataloguePage(4)}
              className="mt-1 font-serif text-2xl text-[#10313a] hover:text-[#0d9bb4] transition cursor-pointer"
            >
              Bản sắc Việt trong từng chi tiết
            </h3>
            <p className="text-xs text-[#597077] mt-1 leading-5">
              Hang Xóm Trại, Trống đồng cổ, Núi Đầu Rồng, Suối khoáng Kim Bôi được cách điệu tinh tế.
            </p>
          </div>
        </div>
      </div>

      {/* 2. 4 BIỂU TƯỢNG DI SẢN & HỌA TIẾT (TỪ CATALOGUE TRANG 4) - FULL CLICK INTERACTIVITY */}
      <div className="mt-16 bg-[#f6f7f4] border border-[#153e47]/10 p-6 sm:p-10 rounded-sm shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0d9bb4] uppercase">
              NGUỒN CẢM HỨNG THIẾT KẾ
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#10313a] mt-1 font-bold">
              4 Biểu tượng Di sản &amp; Họa tiết Văn hóa độc bản
            </h3>
            <p className="text-xs text-[#597077] mt-1">
              Bấm vào từng di sản để xem trọn bộ hình ảnh thực tế, cận cảnh họa tiết hoa văn dệt và mẫu áo đồng phục
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả 4 di sản' },
              { id: 'hangxom', label: 'Hang Xóm Trại' },
              { id: 'nuidau', label: 'Núi Đầu Rồng' },
              { id: 'trongdong', label: 'Trống Đồng' },
              { id: 'kimboi', label: 'Suối Kim Bôi' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveHeritageTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-bold transition rounded-sm ${
                  activeHeritageTab === tab.id
                    ? 'bg-[#0d3039] text-white shadow'
                    : 'bg-white border border-[#bfd5d9] text-[#45626a] hover:text-[#0d9bb4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HERITAGE_SYMBOLS.filter(s => activeHeritageTab === 'all' || s.id === activeHeritageTab).map(sym => {
            const product = ALL_PRODUCTS.find(p => p.code === sym.productCode);
            return (
              <div
                key={sym.id}
                onClick={() => setSelectedHeritageSymbol(sym)}
                className="bg-white border border-[#153e47]/15 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group cursor-pointer"
              >
                <div>
                  {/* Photo of heritage site */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={sym.cardImg}
                      alt={sym.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="absolute top-2 left-2 bg-[#0d3039]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {sym.name}
                    </div>
                  </div>

                  {/* Pattern & description */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                      <div className="w-12 h-10 bg-[#e8eef0] p-1 rounded flex items-center justify-center flex-shrink-0 group-hover:border group-hover:border-[#0d9bb4]/40 transition">
                        <img
                          src={sym.patternImg}
                          alt={sym.patternName}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#0d9bb4] uppercase tracking-wider">HỌA TIẾT</p>
                        <h4 className="font-bold text-xs text-[#10313a] leading-tight group-hover:text-[#0d9bb4] transition">
                          {sym.patternName}
                        </h4>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#597077] mt-3 leading-5 line-clamp-3">
                      {sym.patternDesc}
                    </p>
                  </div>
                </div>

                {/* Footer action to view product */}
                <div className="p-3 bg-[#f6f7f4] border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0d3039] group-hover:text-[#0d9bb4] flex items-center gap-1 transition">
                    <Eye className="w-3.5 h-3.5" /> Khám phá chi tiết
                  </span>
                  {product && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-2.5 py-1 text-[10px] font-bold rounded transition flex items-center gap-0.5 shadow-sm"
                      title="Thêm áo đồng phục này vào giỏ tư vấn"
                    >
                      <Plus className="w-3 h-3" /> Báo giá
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. TỈ MỈ TRONG TỪNG PHỤ KIỆN (VÍ DA, THẮT LƯNG, SƠ MI CỔ HỌA TIẾT, CAVAT TỪ TRANG 4) */}
      <div className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] uppercase">
            CATALOGUE TRANG 04 · TỈ MỈ TRONG TỪNG PHỤ KIỆN
          </span>
          <h3 className="font-serif mt-2 text-3xl sm:text-4xl text-[#10313a] font-bold">
            Ví Da, Thắt Lưng, Sơ Mi Cổ Họa Tiết &amp; Cavat
          </h3>
          <p className="mt-3 text-sm text-[#597077]">
            Những phụ kiện tinh tế hoàn thiện diện mạo đẳng cấp của ban lãnh đạo và đối tác doanh nghiệp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESSORIES.map(item => (
            <div
              key={item.id}
              className="group bg-white border border-[#153e47]/15 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Accessory Photo */}
                <div
                  className="relative aspect-[4/3] bg-[#f9fafb] p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <span className="absolute top-2.5 left-2.5 bg-[#0d3039] text-[#e4c36f] text-[9px] font-bold px-2 py-0.5 rounded shadow">
                    {item.code}
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-white/90 text-[#0d9bb4] text-[9px] font-bold px-2 py-0.5 rounded border border-[#bfd5d9]">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#168ca5] uppercase tracking-wider">
                    {item.material}
                  </p>
                  <h4
                    onClick={() => setSelectedProduct(item)}
                    className="font-serif text-lg text-[#10313a] font-bold mt-1.5 leading-tight group-hover:text-[#0d9bb4] transition cursor-pointer"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#597077] mt-2 line-clamp-2 leading-5">
                    {item.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-[9px] bg-[#f6f7f4] text-[#45626a] px-2 py-0.5 border border-[#bfd5d9]/60 rounded-sm">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(item)}
                  className="text-xs font-bold text-[#0d3039] hover:text-[#0d9bb4] flex items-center gap-1 transition"
                >
                  CHI TIẾT <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => addItem(item)}
                  className="bg-[#0d3039] text-[#e4c36f] hover:bg-[#0d9bb4] hover:text-white px-3 py-1.5 text-[10px] font-bold tracking-wider rounded transition flex items-center gap-1 shadow-sm"
                >
                  <Plus className="w-3 h-3" /> CHỌN TƯ VẤN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HERITAGE DETAIL MODAL - XEM ĐẦY ĐỦ THÔNG TIN & HÌNH ẢNH DI SẢN */}
      <HeritageDetailModal
        symbol={selectedHeritageSymbol}
        symbols={HERITAGE_SYMBOLS}
        product={selectedHeritageSymbol ? ALL_PRODUCTS.find(p => p.code === selectedHeritageSymbol.productCode) : undefined}
        onClose={() => setSelectedHeritageSymbol(null)}
        onSelectSymbol={(sym) => setSelectedHeritageSymbol(sym)}
        onAddToCart={(p) => addItem(p)}
        onOpenQuote={() => onTellStory()}
        onOpenCatalogue={() => setSelectedCataloguePage(4)}
      />

    </section>
  );
};
