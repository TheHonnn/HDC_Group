import React from 'react';
import { Check, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const B2BCommitments: React.FC = () => {
  return (
    <>
      {/* 1. TOP PART: B2B WORKFLOW PROCESS ON CLEAN WHITE BACKGROUND */}
      <section className="bg-white pt-20 pb-16 border-b border-[#153e47]/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-[#0d9bb4] uppercase">
              TIÊU CHUẨN ĐỒNG PHỤC DOANH NGHIỆP
            </p>
            <h2 className="font-serif mt-3 text-4xl sm:text-5xl text-[#10313a] leading-tight">
              Quy trình may đo B2B <br />
              <em className="font-normal text-[#0d9bb4]">chuyên nghiệp &amp; tận tâm.</em>
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#597077]">
              Hơn 10 năm kinh nghiệm đồng hành cùng hàng trăm doanh nghiệp, ngân hàng và trường học trên toàn quốc.
            </p>
          </div>

          {/* 4 WORKFLOW STEPS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Khảo sát & Tư vấn',
                desc: 'Lắng nghe nhu cầu, môi trường làm việc thực tế và định hình tone màu theo cẩm nang thương hiệu.',
                icon: Users
              },
              {
                step: '02',
                title: 'Thiết kế 2D/3D & Mẫu thử',
                desc: 'Phác thảo mẫu độc quyền, may mẫu thử thực tế tận nơi để lãnh đạo phê duyệt chất liệu và form dáng.',
                icon: Award
              },
              {
                step: '03',
                title: 'Sản xuất công nghiệp',
                desc: 'Dây chuyền ép nhiệt Seamless và máy may công nghiệp tiêu chuẩn cao, kiểm soát chất lượng KCS 100%.',
                icon: ShieldCheck
              },
              {
                step: '04',
                title: 'Đóng gói & Bảo hành',
                desc: 'Đóng gói từng cá nhân theo size, miễn phí giao tận văn phòng 63 tỉnh thành, bảo hành trọn đời.',
                icon: Clock
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f6f7f4] p-6 border border-[#bfd5d9]/50 rounded-sm relative hover:shadow-md transition"
                >
                  <span className="text-3xl font-black text-[#0d9bb4]/20 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 bg-[#0d3039] text-[#e4c36f] rounded flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#10313a] mb-2 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#597077] leading-5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. FULL-WIDTH DARK SECTION: 5 CAM KẾT VỮNG CHẮC (EXTENDS FULL WIDTH OUT TO BOTH EDGES) */}
      <section className="w-full bg-[#0d3039] text-white py-16 sm:py-20 border-b border-[#153e47]/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#e4c36f] uppercase">
              CAM KẾT CHẤT LƯỢNG &amp; DỊCH VỤ
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mt-2 leading-tight">
              5 Cam kết vững chắc từ HDC Fashion dành cho đối tác
            </h3>
            <p className="text-xs text-[#c1d6da] mt-2">
              Khẳng định uy tín và trách nhiệm cao nhất trên từng sản phẩm xuất xưởng
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_INFO.commitments.map((c, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 bg-[#08242c]/50 p-5 rounded-sm border border-white/10 hover:border-[#e4c36f]/40 transition group"
              >
                <span className="grid h-6 w-6 place-items-center bg-[#0d9bb4] text-white rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#e4c36f]">
                    {c.title}
                  </h4>
                  <p className="text-xs text-[#c1d6da] mt-1 leading-5">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center p-5 border border-[#e4c36f]/40 bg-[#08242c]/70 rounded-sm text-center">
              <span className="text-xs font-bold tracking-widest text-[#e4c36f] uppercase flex items-center gap-1.5">
                ★ UY TÍN TẠO NÊN THƯƠNG HIỆU ★
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
