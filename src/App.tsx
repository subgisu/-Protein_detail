import { motion } from 'motion/react';
import { BatteryCharging, TrendingDown, Zap, ShieldCheck, ChevronDown, Star, Candy, Package } from 'lucide-react';

const flavors = [
  {
    id: 'choco',
    name: '더블 초코',
    tag: '고단백',
    desc: '진한 카카오의 풍미를 살린 부담 없는 맛',
    color: 'bg-[#4A3728]', // 진한 초코색
    img: 'https://picsum.photos/seed/choco_plate/800/600',
    packageImg: 'https://picsum.photos/seed/choco_pack/300/400',
    nutrition: { kcal: '185', protein: '20', proteinPct: '36', fat: '5.0', fatPct: '9', sugar: '1.5', sugarPct: '1' },
  },
  {
    id: 'peanut',
    name: '피넛 카라멜',
    tag: '고단백',
    desc: '고소한 땅콩과 달콤한 카라멜의 단짠 조합',
    color: 'bg-[#D9772B]', // 피넛버터/카라멜 색상
    img: '/peanut-caramel.jpg',
    packageImg: 'https://picsum.photos/seed/peanut_pack/300/400',
    nutrition: { kcal: '190', protein: '21', proteinPct: '38', fat: '6.0', fatPct: '11', sugar: '1.8', sugarPct: '2' },
  },
  {
    id: 'matcha',
    name: '말차맛',
    tag: '고단백',
    desc: '제주 유기농 말차로 산뜻하게 즐기는 깔끔한 풍미',
    color: 'bg-[#5B8C5A]', // 말차 녹색
    img: 'https://picsum.photos/seed/matcha_plate/800/600',
    packageImg: 'https://picsum.photos/seed/matcha_pack/300/400',
    nutrition: { kcal: '180', protein: '20', proteinPct: '36', fat: '4.5', fatPct: '8', sugar: '1.2', sugarPct: '1' },
  },
  {
    id: 'berry',
    name: '베리 요거트',
    tag: '고단백',
    desc: '상큼한 베리를 입혀 새콤달콤한 감칠맛이 살아있는 맛',
    color: 'bg-[#C84B31]', // 베리 붉은색
    img: 'https://picsum.photos/seed/berry_plate/800/600',
    packageImg: 'https://picsum.photos/seed/berry_pack/300/400',
    nutrition: { kcal: '175', protein: '19', proteinPct: '35', fat: '4.0', fatPct: '7', sugar: '2.0', sugarPct: '2' },
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ProteinBarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <g transform="rotate(-15 12 12)">
      <rect x="1" y="7" width="22" height="10" rx="1" />
      <path d="M5 7v10" />
      <path d="M19 7v10" />
      <text x="12" y="13.5" fontSize="3.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none" style={{ fontFamily: 'sans-serif', letterSpacing: '0.5px' }}>PROTEIN</text>
    </g>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* Mobile-first centered container (Standard Korean Detail Page Layout) */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[800px] flex flex-col justify-between pt-24 pb-4 px-6 text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-stone-900">
            <img 
              src="/protin.png" 
              alt="단백질 바 메인 연출컷" 
              className="w-full h-full object-cover opacity-90"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=1200";
              }}
            />
          </div>
          
          {/* Top Blur Overlay for Text Readability */}
          <div className="absolute inset-0 z-0 h-3/5 bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>

          {/* Copy (Top) */}
          <div className="relative z-10 mt-4">
            <FadeIn>
              <p className="text-orange-400 font-bold tracking-widest text-sm mb-4 drop-shadow-md">근육단단 단백질 바</p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 break-keep text-white drop-shadow-lg">
                단백질 바는 맛없다는 편견,<br />
                <span className="text-orange-400">근육단단이 깹니다.</span>
              </h1>
              <p className="text-stone-200 text-lg mb-10 break-keep drop-shadow-md font-medium">
                꾸덕한 브라우니 식감 그대로,<br />당류는 낮추고 단백질은 꽉 채웠습니다.
              </p>
            </FadeIn>
          </div>

          {/* Nutrition Grid (Bottom) */}
          <div className="relative z-10 mt-auto pt-48">
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-4 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="text-center border-r border-white/20">
                  <p className="text-stone-300 text-sm mb-1">내용량</p>
                  <p className="text-2xl font-bold text-white">50g</p>
                </div>
                <div className="text-center border-r border-white/20">
                  <p className="text-stone-300 text-sm mb-1">열량</p>
                  <p className="text-2xl font-bold text-orange-400">185<span className="text-base font-normal">kcal</span></p>
                  <p className="text-[10px] text-stone-400 mt-1">(더블 초코 기준)</p>
                </div>
                <div className="text-center">
                  <p className="text-stone-300 text-sm mb-1">단백질</p>
                  <p className="text-2xl font-bold text-white">20g</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Social Proof (Reviews) */}
        <section className="py-20 px-6 bg-stone-100 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12">
              다시 찾게 되는<br />
              <span className="text-orange-600">진짜 맛있는 단백질 바</span>
            </h2>
            
            <div className="space-y-4 max-w-md mx-auto">
              {[
                "단백질 특유의 비린 맛이 전혀 없어요!",
                "전자레인지에 10초 돌려 먹으면 진짜 브라우니 같아요.",
                "당류가 2g밖에 안 되는데 이렇게 달콤하다니 놀라워요.",
                "운동 전후로 하나씩 까먹기 딱 좋은 사이즈예요."
              ].map((review, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 text-left relative"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  </div>
                  <p className="text-stone-700 font-medium">"{review}"</p>
                  <p className="text-xs text-stone-400 mt-2 text-right">*실구매 고객 후기 기반</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 3. Check Points (USP) */}
        <section className="py-20 px-6 bg-black">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#e1bebe] font-medium tracking-widest text-sm mb-2 drop-shadow-md">Check Point</p>
              <h2 className="text-[34px] text-white font-bold drop-shadow-lg">주요 포인트</h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: <ProteinBarIcon className="w-10 h-10 text-orange-500" />, title: "질리지 않는 4가지 맛", desc: "더블 초코 · 피넛버터 · 말차 · 베리\n매일 먹어도 질리지 않는 라인업" },
                { icon: <TrendingDown className="w-10 h-10 text-green-600" />, title: "당류 2g 미만, 대체당 사용", desc: "설탕 대신 에리스리톨과 알룰로스를 사용해\n혈당 걱정 없이 달콤하게" },
                { icon: <BatteryCharging className="w-10 h-10 text-blue-600" />, title: "단백질 20g 함유", desc: "닭가슴살 100g과 맞먹는 단백질량\n한 팩으로 채우는 든든한 한 끼" }
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-6 py-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white/10 p-5 rounded-3xl shrink-0 ml-4 md:ml-8">
                    {point.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
                    <p className="text-white/70 whitespace-pre-line leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 4. Flavor Lineup (Matched to Reference) */}
        <section className="pt-20 pb-10 bg-white">
          <div className="text-center mb-16 px-6 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-2 w-full max-w-[240px] mx-auto">
              <div className="h-[1px] bg-stone-300 flex-1"></div>
              <p className="text-stone-500 font-serif text-lg tracking-wider">Flavor</p>
              <div className="h-[1px] bg-stone-300 flex-1"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">4가지 맛 단백질 바</h2>
          </div>

          <div className="space-y-0">
            {flavors.map((flavor, idx) => (
              <FadeIn key={flavor.id} delay={0.1}>
                <div className="bg-white pb-20 border-b border-stone-100 last:border-0">
                  {/* Image Area with Overlapping Package */}
                  <div className="w-full aspect-[4/3] relative bg-stone-100">
                    <img 
                      src={flavor.img} 
                      alt={flavor.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 right-4 text-white text-sm drop-shadow-md font-medium">
                      *연출예
                    </div>
                    {/* Package Image Overlap (Reference Style) */}
                    <img 
                      src={flavor.packageImg} 
                      alt={`${flavor.name} 패키지`} 
                      className="absolute -bottom-12 right-4 w-36 md:w-48 object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content Area */}
                  <div className="pt-12 px-6 max-w-xl mx-auto">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 text-white font-bold text-lg rounded-sm ${flavor.color}`}>
                        {flavor.name}
                      </span>
                      <span className="px-3 py-1 bg-[#999999] text-white font-bold text-lg rounded-sm">
                        {flavor.tag}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <h3 className="text-xl font-medium mb-8 text-stone-800 tracking-tight">{flavor.desc}</h3>
                    
                    {/* Nutrition Grid */}
                    <div className="border-t border-stone-200 pt-6">
                      <div className="grid grid-cols-4 gap-2">
                        <div>
                          <p className="text-stone-500 text-sm mb-1">칼로리</p>
                          <p className="text-2xl font-bold text-stone-900">{flavor.nutrition.kcal}<span className="text-base font-normal text-stone-600">kcal</span></p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">단백질</p>
                          <p className="text-2xl font-bold text-stone-900">{flavor.nutrition.protein}<span className="text-base font-normal text-stone-600">g</span><span className="text-xs text-stone-400 ml-0.5">({flavor.nutrition.proteinPct}%)</span></p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">지방</p>
                          <p className="text-2xl font-bold text-stone-900">{flavor.nutrition.fat}<span className="text-base font-normal text-stone-600">g</span><span className="text-xs text-stone-400 ml-0.5">({flavor.nutrition.fatPct}%)</span></p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">당류</p>
                          <p className="text-2xl font-bold text-stone-900">{flavor.nutrition.sugar}<span className="text-base font-normal text-stone-600">g</span><span className="text-xs text-stone-400 ml-0.5">({flavor.nutrition.sugarPct}%)</span></p>
                        </div>
                      </div>
                    </div>
                    <p className="text-left text-xs text-stone-400 mt-6">총 내용량 50g</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 5. Bundle Section (Matched to Reference) */}
        <section className="py-20 px-6 bg-[#F9F8F4] text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800 tracking-tight">
              넉넉하게 즐기는<br />
              10개입 번들 구성
            </h2>
            <p className="text-stone-600 mb-12 break-keep leading-relaxed font-medium">
              넉넉하게 준비하는 <span className="font-bold text-stone-900">10개입 번들 구성</span>입니다.<br />
              실온 보관 후 필요할 때마다 간편하게 꺼내 드실 수 있습니다.<br />
              여유 있게 보관하기 좋은 구성입니다.
            </p>

            <div className="mb-12 relative max-w-2xl mx-auto mt-8">
              <svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl transition-transform hover:scale-[1.02] duration-300">
                <defs>
                  <linearGradient id="boxg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#E8D5BC" stopOpacity="0.95"/>
                  </linearGradient>
                </defs>

                {/* Box body */}
                <rect x="90" y="100" width="500" height="260" rx="12" fill="url(#boxg)" stroke="#C4A882" strokeWidth="1.2"/>

                {/* Box lid */}
                <path d="M85 100 L95 60 L595 60 L585 100 Z" fill="#EDE0CE" stroke="#C4A882" strokeWidth="1"/>
                <line x1="95" y1="60" x2="595" y2="60" stroke="#D4C4A8" strokeWidth="0.5"/>

                {/* Box inner shadow */}
                <rect x="100" y="108" width="480" height="240" rx="6" fill="none" stroke="#C4A882" strokeWidth="0.3" opacity="0.4"/>

                {/* Row 1: 5 bars */}
                <g>
                  <rect x="120" y="130" width="80" height="100" rx="6" fill="#4A3728" stroke="#3A2A1E" strokeWidth="0.8"/>
                  <rect x="128" y="145" width="64" height="18" rx="3" fill="#E8593C" opacity="0.9"/>
                  <text x="160" y="158" textAnchor="middle" fontSize="8" fontWeight="600" fill="#fff" fontFamily="sans-serif">PROTEIN</text>
                  <rect x="132" y="170" width="56" height="4" rx="2" fill="#6B5344" opacity="0.5"/>
                  <rect x="136" y="178" width="48" height="3" rx="1.5" fill="#6B5344" opacity="0.3"/>
                  <text x="160" y="218" textAnchor="middle" fontSize="7" fill="#A08872" fontFamily="sans-serif">20g</text>

                  <rect x="212" y="130" width="80" height="100" rx="6" fill="#D9772B" stroke="#B8621F" strokeWidth="0.8"/>
                  <rect x="220" y="145" width="64" height="18" rx="3" fill="#F5E6D3" opacity="0.9"/>
                  <text x="252" y="158" textAnchor="middle" fontSize="8" fontWeight="600" fill="#4A3728" fontFamily="sans-serif">PROTEIN</text>
                  <rect x="224" y="170" width="56" height="4" rx="2" fill="#E8A050" opacity="0.5"/>
                  <rect x="228" y="178" width="48" height="3" rx="1.5" fill="#E8A050" opacity="0.3"/>
                  <text x="252" y="218" textAnchor="middle" fontSize="7" fill="#A08872" fontFamily="sans-serif">21g</text>

                  <rect x="304" y="130" width="80" height="100" rx="6" fill="#5B8C5A" stroke="#4A7248" strokeWidth="0.8"/>
                  <rect x="312" y="145" width="64" height="18" rx="3" fill="#D4E8D0" opacity="0.9"/>
                  <text x="344" y="158" textAnchor="middle" fontSize="8" fontWeight="600" fill="#2D4A2C" fontFamily="sans-serif">PROTEIN</text>
                  <rect x="316" y="170" width="56" height="4" rx="2" fill="#7DA87C" opacity="0.5"/>
                  <rect x="320" y="178" width="48" height="3" rx="1.5" fill="#7DA87C" opacity="0.3"/>
                  <text x="344" y="218" textAnchor="middle" fontSize="7" fill="#A08872" fontFamily="sans-serif">20g</text>

                  <rect x="396" y="130" width="80" height="100" rx="6" fill="#C84B31" stroke="#A83D28" strokeWidth="0.8"/>
                  <rect x="404" y="145" width="64" height="18" rx="3" fill="#F5D4CC" opacity="0.9"/>
                  <text x="436" y="158" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6B2418" fontFamily="sans-serif">PROTEIN</text>
                  <rect x="408" y="170" width="56" height="4" rx="2" fill="#E07060" opacity="0.5"/>
                  <rect x="412" y="178" width="48" height="3" rx="1.5" fill="#E07060" opacity="0.3"/>
                  <text x="436" y="218" textAnchor="middle" fontSize="7" fill="#A08872" fontFamily="sans-serif">19g</text>

                  <rect x="488" y="130" width="80" height="100" rx="6" fill="#4A3728" stroke="#3A2A1E" strokeWidth="0.8"/>
                  <rect x="496" y="145" width="64" height="18" rx="3" fill="#E8593C" opacity="0.9"/>
                  <text x="520" y="158" textAnchor="middle" fontSize="8" fontWeight="600" fill="#fff" fontFamily="sans-serif">PROTEIN</text>
                  <rect x="500" y="170" width="56" height="4" rx="2" fill="#6B5344" opacity="0.5"/>
                  <rect x="504" y="178" width="48" height="3" rx="1.5" fill="#6B5344" opacity="0.3"/>
                  <text x="520" y="218" textAnchor="middle" fontSize="7" fill="#A08872" fontFamily="sans-serif">20g</text>
                </g>

                {/* Row 2: 5 bars (peeking from behind) */}
                <g opacity="0.55">
                  <rect x="120" y="240" width="80" height="100" rx="6" fill="#D9772B" stroke="#B8621F" strokeWidth="0.6"/>
                  <rect x="128" y="255" width="64" height="16" rx="3" fill="#F5E6D3" opacity="0.8"/>
                  <text x="160" y="266" textAnchor="middle" fontSize="7" fontWeight="600" fill="#4A3728" fontFamily="sans-serif">PROTEIN</text>

                  <rect x="212" y="240" width="80" height="100" rx="6" fill="#5B8C5A" stroke="#4A7248" strokeWidth="0.6"/>
                  <rect x="220" y="255" width="64" height="16" rx="3" fill="#D4E8D0" opacity="0.8"/>
                  <text x="252" y="266" textAnchor="middle" fontSize="7" fontWeight="600" fill="#2D4A2C" fontFamily="sans-serif">PROTEIN</text>

                  <rect x="304" y="240" width="80" height="100" rx="6" fill="#C84B31" stroke="#A83D28" strokeWidth="0.6"/>
                  <rect x="312" y="255" width="64" height="16" rx="3" fill="#F5D4CC" opacity="0.8"/>
                  <text x="344" y="266" textAnchor="middle" fontSize="7" fontWeight="600" fill="#6B2418" fontFamily="sans-serif">PROTEIN</text>

                  <rect x="396" y="240" width="80" height="100" rx="6" fill="#4A3728" stroke="#3A2A1E" strokeWidth="0.6"/>
                  <rect x="404" y="255" width="64" height="16" rx="3" fill="#E8593C" opacity="0.8"/>
                  <text x="436" y="266" textAnchor="middle" fontSize="7" fontWeight="600" fill="#fff" fontFamily="sans-serif">PROTEIN</text>

                  <rect x="488" y="240" width="80" height="100" rx="6" fill="#D9772B" stroke="#B8621F" strokeWidth="0.6"/>
                  <rect x="496" y="255" width="64" height="16" rx="3" fill="#F5E6D3" opacity="0.8"/>
                  <text x="520" y="266" textAnchor="middle" fontSize="7" fontWeight="600" fill="#4A3728" fontFamily="sans-serif">PROTEIN</text>
                </g>

                {/* Count badge */}
                <circle cx="580" cy="90" r="24" fill="#E8593C"/>
                <text x="580" y="86" textAnchor="middle" dominantBaseline="central" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">10</text>
                <text x="580" y="102" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="sans-serif" opacity="0.9">개입</text>

                {/* Flavor dots legend */}
                <circle cx="200" cy="400" r="6" fill="#4A3728"/>
                <text x="214" y="404" fontSize="11" fill="#78716C" fontFamily="sans-serif">더블 초코</text>
                <circle cx="310" cy="400" r="6" fill="#D9772B"/>
                <text x="324" y="404" fontSize="11" fill="#78716C" fontFamily="sans-serif">피넛 카라멜</text>
                <circle cx="430" cy="400" r="6" fill="#5B8C5A"/>
                <text x="444" y="404" fontSize="11" fill="#78716C" fontFamily="sans-serif">말차</text>
                <circle cx="510" cy="400" r="6" fill="#C84B31"/>
                <text x="524" y="404" fontSize="11" fill="#78716C" fontFamily="sans-serif">베리 요거트</text>
              </svg>
            </div>
            <p className="text-xs text-stone-500">*번들 이미지는 연출 예시이며, 동일 맛 10개입 구성으로 발송됩니다.</p>
          </FadeIn>
        </section>

        {/* 6. Trust & Info */}
        <section className="py-16 px-6 bg-white border-t border-stone-200">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <ShieldCheck className="w-16 h-16 text-stone-300" />
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">HACCP 인증 시설 제조</h3>
                <p className="text-stone-500 text-sm">
                  근육단단 단백질 바는 엄격한 위생 관리 기준에 따라<br />
                  안전하고 깨끗한 시설에서 생산됩니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Footer / Legal Info Placeholder */}
        <footer className="bg-stone-100 py-12 px-6 text-xs text-stone-400 leading-relaxed border-t border-stone-200">
          <p className="font-bold text-stone-500 mb-4">자주 묻는 질문 (FAQ)</p>
          <div className="space-y-4 mb-8">
            <details className="group cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-stone-600 list-none">
                Q. 보관은 어떻게 하나요?
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-stone-500 pl-4 border-l-2 border-stone-300">
                직사광선을 피해 서늘한 실온에 보관해 주세요. 냉장 보관 시 식감이 단단해질 수 있으니 섭취 전 실온에 10분 정도 두시면 더욱 부드럽게 즐기실 수 있습니다.
              </p>
            </details>
            <details className="group cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-stone-600 list-none">
                Q. 임산부나 어린이가 먹어도 되나요?
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-stone-500 pl-4 border-l-2 border-stone-300">
                일반 식품으로 남녀노소 누구나 섭취 가능합니다. 다만 특정 알레르기가 있으신 경우 원재료명을 반드시 확인해 주세요.
              </p>
            </details>
          </div>
          
          <div className="pt-8 border-t border-stone-300">
            <p className="mb-2">제품명: 근육단단 단백질 바 | 식품의 유형: 과자류(단백질바) | 유통기한: 제조일로부터 12개월</p>
            <p>본 제품은 알레르기 발생 가능성이 있는 우유, 대두, 밀, 땅콩, 호두를 사용한 제품과 같은 제조 시설에서 제조하고 있습니다.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
