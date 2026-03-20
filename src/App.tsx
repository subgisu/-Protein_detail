import React from 'react';
import { motion } from 'motion/react';
import { BatteryCharging, TrendingDown, Zap, ShieldCheck, ChevronDown, Star, Candy, Package, ShoppingCart } from 'lucide-react';

const flavors = [
  {
    id: 'choco',
    name: '더블 초코',
    tag: '고단백',
    desc: '진한 카카오의 풍미를 살린 부담 없는 맛',
    color: 'bg-[#4A3728]', // 진한 초코색
    img: '/darkback.png',
    packageImg: '/dark.png',
    packageClass: 'h-64 md:h-80',
    nutrition: { kcal: '185', protein: '20', proteinPct: '36', fat: '5.0', fatPct: '9', sugar: '1.5', sugarPct: '1' },
  },
  {
    id: 'peanut',
    name: '피넛 카라멜',
    tag: '고단백',
    desc: '고소한 땅콩과 달콤한 카라멜의 단짠 조합',
    color: 'bg-[#D9772B]', // 피넛버터/카라멜 색상
    img: '/caramelback.png',
    packageImg: '/caramel.png',
    packageClass: 'h-72 md:h-96', // 피넛 이미지가 작아 보여서 크기를 조금 더 키움
    nutrition: { kcal: '190', protein: '21', proteinPct: '38', fat: '6.0', fatPct: '11', sugar: '1.8', sugarPct: '2' },
  },
  {
    id: 'matcha',
    name: '말차맛',
    tag: '고단백',
    desc: '제주 유기농 말차로 산뜻하게 즐기는 깔끔한 풍미',
    color: 'bg-[#5B8C5A]', // 말차 녹색
    img: '/matchaback.png',
    packageImg: '/matcha.png',
    packageClass: 'h-64 md:h-80',
    nutrition: { kcal: '180', protein: '20', proteinPct: '36', fat: '4.5', fatPct: '8', sugar: '1.2', sugarPct: '1' },
  },
  {
    id: 'berry',
    name: '베리 요거트',
    tag: '고단백',
    desc: '상큼한 베리를 입혀 새콤달콤한 감칠맛이 살아있는 맛',
    color: 'bg-[#C84B31]', // 베리 붉은색
    img: '/yogurtback.png',
    packageImg: '/yogurt.png',
    packageClass: 'h-64 md:h-80',
    nutrition: { kcal: '175', protein: '19', proteinPct: '35', fat: '4.0', fatPct: '7', sugar: '2.0', sugarPct: '2' },
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => (
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
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-500 selection:text-white pb-24 md:pb-0">
      {/* Mobile-first centered container (Standard Korean Detail Page Layout) */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden relative pb-24">
        

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
        <section id="reviews" className="relative py-24 px-6 text-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=1200" 
              alt="리뷰 배경" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12 text-white drop-shadow-lg">
                다시 찾게 되는<br />
                <span className="text-orange-400">진짜 맛있는 단백질 바</span>
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
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl text-left relative"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                    </div>
                    <p className="text-white font-medium leading-relaxed">"{review}"</p>
                    <p className="text-xs text-stone-300/80 mt-2 text-right">*실구매 고객 후기 기반</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Check Points (USP) */}
        <section id="points" className="py-20 px-6 bg-black">
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

        {/* Video Feature Section */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 bg-[#F5F5F0]">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-medium text-stone-800 mb-4">
                <span className="relative inline-block pb-2">
                  꺼내기만 하면 완성되는
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-800"></span>
                </span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#4A3728] tracking-tight">
                달콤하고 쫀득한 식감
              </h3>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
                운동 후에도, 바쁜 하루 중에도<br />
                간편하게 즐기는 단백질 충전.<br />
                당류 걱정 없이 달콤하게 즐길 수 있어요.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative px-4 md:px-0">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <video 
                  src="/video.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-video"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -top-6 -right-2 md:-right-6 w-28 h-28 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex flex-col items-center overflow-hidden border-[6px] border-white z-10">
                <div className="bg-[#4A3728] w-full h-[45%] flex items-center justify-center">
                  <span className="text-white text-sm md:text-base font-bold">단백질</span>
                </div>
                <div className="w-full h-[55%] flex flex-col items-center justify-center bg-white pt-1">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#4A3728]" />
                  <span className="text-stone-800 font-bold text-xs md:text-sm mt-0.5">20g 함유</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 4. Flavor Lineup (Matched to Reference) */}
        <section id="lineup" className="relative pt-24 pb-16 bg-white">
          {/* Top Torn Wrapper Edge (Foil + White) - Slanted */}
          <div className="absolute top-0 -left-[5%] w-[110%] h-32 -mt-12 z-20 -rotate-2 flex flex-col pointer-events-none">
            <div 
              className="w-full h-10 drop-shadow-[0_-4px_6px_rgba(0,0,0,0.15)]"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40' preserveAspectRatio='none'%3E%3Cpath fill='%239CA3AF' d='M0,40 V12 L20,2 L40,22 L55,7 L75,25 L90,2 L110,17 L130,-1 L150,22 L170,7 L190,25 L210,5 L230,19 L250,2 L270,22 L290,9 L310,25 L330,2 L350,17 L370,-1 L390,22 L410,7 L430,25 L450,5 L470,19 L490,2 L510,22 L530,9 L550,25 L570,2 L590,17 L610,-1 L630,22 L650,7 L670,25 L690,5 L710,19 L730,2 L750,22 L770,9 L790,25 L810,2 L830,17 L850,-1 L870,22 L890,7 L910,25 L930,5 L950,19 L970,2 L990,22 L1010,9 L1030,25 L1050,2 L1070,17 L1090,-1 L1110,22 L1130,7 L1150,25 L1170,5 L1190,19 L1200,12 V40 Z' /%3E%3Cpath fill='%23ffffff' d='M0,40 V16 L20,6 L40,26 L55,11 L75,29 L90,6 L110,21 L130,3 L150,26 L170,11 L190,29 L210,9 L230,23 L250,6 L270,26 L290,13 L310,29 L330,6 L350,21 L370,3 L390,26 L410,11 L430,29 L450,9 L470,23 L490,6 L510,26 L530,13 L550,29 L570,6 L590,21 L610,3 L630,26 L650,11 L670,29 L690,9 L710,23 L730,6 L750,26 L770,13 L790,29 L810,6 L830,21 L850,3 L870,26 L890,11 L910,29 L930,9 L950,23 L970,6 L990,26 L1010,13 L1030,29 L1050,6 L1070,21 L1090,3 L1110,26 L1130,11 L1150,29 L1170,9 L1190,23 L1200,16 V40 Z' /%3E%3C/svg%3E")`,
                backgroundSize: '100% 100%'
              }}
            ></div>
            <div className="w-full flex-1 bg-white"></div>
          </div>

          {/* Bottom Torn Wrapper Edge (Foil + White) - Slanted */}
          <div className="absolute bottom-0 -left-[5%] w-[110%] h-32 -mb-12 z-20 rotate-2 flex flex-col pointer-events-none">
            <div className="w-full flex-1 bg-white"></div>
            <div 
              className="w-full h-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40' preserveAspectRatio='none'%3E%3Cpath fill='%239CA3AF' d='M0,0 V28 L20,38 L40,18 L55,33 L75,15 L90,38 L110,23 L130,41 L150,18 L170,33 L190,15 L210,35 L230,21 L250,38 L270,18 L290,31 L310,15 L330,38 L350,23 L370,41 L390,18 L410,33 L430,15 L450,35 L470,21 L490,38 L510,18 L530,31 L550,15 L570,38 L590,23 L610,41 L630,18 L650,33 L670,15 L690,35 L710,21 L730,38 L750,18 L770,31 L790,15 L810,38 L830,23 L850,41 L870,18 L890,33 L910,15 L930,35 L950,21 L970,38 L990,18 L1010,31 L1030,15 L1050,38 L1070,23 L1090,41 L1110,18 L1130,33 L1150,15 L1170,35 L1190,21 L1200,28 V0 Z' /%3E%3Cpath fill='%23ffffff' d='M0,0 V24 L20,34 L40,14 L55,29 L75,11 L90,34 L110,19 L130,37 L150,14 L170,29 L190,11 L210,31 L230,17 L250,34 L270,14 L290,27 L310,11 L330,34 L350,19 L370,37 L390,14 L410,29 L430,11 L450,31 L470,17 L490,34 L510,14 L530,27 L550,11 L570,34 L590,19 L610,37 L630,14 L650,29 L670,11 L690,31 L710,17 L730,34 L750,14 L770,27 L790,11 L810,34 L830,19 L850,37 L870,14 L890,29 L910,11 L930,31 L950,17 L970,34 L990,14 L1010,27 L1030,11 L1050,34 L1070,19 L1090,37 L1110,14 L1130,29 L1150,11 L1170,31 L1190,17 L1200,24 V0 Z' /%3E%3C/svg%3E")`,
                backgroundSize: '100% 100%'
              }}
            ></div>
          </div>

          <div className="text-center mb-16 px-6 flex flex-col items-center relative z-10">
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
                  <div className="w-full h-64 md:h-96 relative bg-stone-100 flex items-center justify-center">
                    <img 
                      src={flavor.img} 
                      alt={flavor.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Package Image Overlap (Reference Style) */}
                    <img 
                      src={flavor.packageImg} 
                      alt={`${flavor.name} 패키지`} 
                      className={`absolute -bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2 z-10 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 ${flavor.packageClass}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content Area */}
                  <div className="pt-32 md:pt-40 px-6 max-w-4xl mx-auto">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-4 py-1.5 text-white font-bold text-base md:text-lg rounded-sm ${flavor.color}`}>
                        {flavor.name}
                      </span>
                      <span className="px-4 py-1.5 bg-[#999999] text-white font-bold text-base md:text-lg rounded-sm">
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
            <p className="text-xs text-stone-500 mb-8">*번들 이미지는 연출 예시이며, 동일 맛 10개입 구성으로 발송됩니다.</p>
            
            {/* Price Info */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-200 inline-block text-left w-full max-w-md mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST</div>
              <p className="text-stone-400 line-through text-sm mb-1">정가 25,000원</p>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-orange-500 font-black text-4xl leading-none">32%</span>
                <span className="text-stone-900 font-black text-4xl leading-none">16,900<span className="text-xl font-bold">원</span></span>
              </div>
              <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl inline-flex items-center gap-2 font-bold text-sm">
                <Zap className="w-4 h-4" />
                1팩당 단 1,690원 꼴! (무료배송)
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 6. Trust & Info */}
        <section className="relative py-24 px-6 border-t border-stone-200 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2836?auto=format&fit=crop&q=80&w=1200" 
              alt="제조 시설 배경" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <ShieldCheck className="w-16 h-16 text-orange-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">HACCP 인증 시설 제조</h3>
                  <p className="text-stone-200 text-sm md:text-base leading-relaxed">
                    근육단단 단백질 바는 엄격한 위생 관리 기준에 따라<br />
                    안전하고 깨끗한 시설에서 생산됩니다.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
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
            <details className="group cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-stone-600 list-none">
                상세 영양성분표 보기
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-500">
                <p className="font-bold text-stone-700 mb-2">[더블 초코 기준 1일 영양성분 기준치에 대한 비율]</p>
                <ul className="space-y-1">
                  <li className="flex justify-between border-b border-stone-100 pb-1"><span>나트륨 120mg</span><span>6%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1"><span>탄수화물 18g</span><span>6%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1 pl-2 text-stone-400"><span>당류 1.5g</span><span>1%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1 pl-2 text-stone-400"><span>에리스리톨 4g</span><span>-</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1 pl-2 text-stone-400"><span>식이섬유 5g</span><span>20%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1"><span>지방 5g</span><span>9%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1 pl-2 text-stone-400"><span>트랜스지방 0g</span><span>-</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1 pl-2 text-stone-400"><span>포화지방 2.5g</span><span>17%</span></li>
                  <li className="flex justify-between border-b border-stone-100 pb-1 pt-1"><span>콜레스테롤 10mg</span><span>3%</span></li>
                  <li className="flex justify-between pt-1 font-bold text-stone-700"><span>단백질 20g</span><span>36%</span></li>
                </ul>
              </div>
            </details>
          </div>
          
          <div className="pt-8 border-t border-stone-300">
            <p className="mb-2">제품명: 근육단단 단백질 바 | 식품의 유형: 과자류(단백질바) | 유통기한: 제조일로부터 12개월</p>
            <p>본 제품은 알레르기 발생 가능성이 있는 우유, 대두, 밀, 땅콩, 호두를 사용한 제품과 같은 제조 시설에서 제조하고 있습니다.</p>
          </div>
        </footer>

        {/* Sticky Bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="w-full max-w-2xl bg-white border-t border-stone-200 p-4 md:px-6 md:py-4 flex items-center justify-between pointer-events-auto shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col">
              <span className="text-xs text-stone-500 font-bold mb-0.5">10개입 번들 특가</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-stone-900 leading-none">16,900</span>
                <span className="text-base font-bold text-stone-900 leading-none">원</span>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-xl shadow-lg shadow-orange-500/30 transition-colors flex items-center gap-2 active:scale-95">
              <ShoppingCart className="w-5 h-5" />
              구매하기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
