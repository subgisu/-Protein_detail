import { motion } from 'motion/react';
import { CheckCircle2, Leaf, Zap, ShieldCheck, ChevronDown, Star } from 'lucide-react';

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
    img: 'https://picsum.photos/seed/peanut_plate/800/600',
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

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* Mobile-first centered container (Standard Korean Detail Page Layout) */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[750px] flex flex-col justify-between pt-24 pb-12 px-6 text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-stone-900">
            <img 
              src="/hero-bg.jpg" 
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
          <div className="relative z-10 mt-auto pt-32">
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
        <section className="py-20 px-6 bg-white">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-stone-500 font-medium tracking-widest text-sm mb-2">Check Point</p>
              <h2 className="text-3xl font-bold">주요 포인트</h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "질리지 않는 4가지 맛", desc: "더블 초코 · 피넛버터 · 말차 · 베리\n매일 먹어도 질리지 않는 라인업" },
                { icon: <Leaf className="w-8 h-8 text-green-600" />, title: "당류 2g 미만, 대체당 사용", desc: "설탕 대신 에리스리톨과 알룰로스를 사용해\n혈당 걱정 없이 달콤하게" },
                { icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />, title: "단백질 20g 함유", desc: "닭가슴살 100g과 맞먹는 단백질량\n한 팩으로 채우는 든든한 한 끼" }
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-stone-900">{point.title}</h3>
                    <p className="text-stone-600 whitespace-pre-line leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 4. Bundle Section (Matched to Reference) */}
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

            <div className="mb-8">
              {/* 5 items lined up overlapping */}
              <div className="flex justify-center -space-x-4 overflow-hidden py-4 px-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://picsum.photos/seed/bundle_pack/200/300"
                    alt="번들 패키지"
                    className="w-20 md:w-28 aspect-[3/4] object-cover shadow-lg border-2 border-white relative transition-transform hover:-translate-y-2"
                    style={{ zIndex: 5 - i }}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-stone-500">*번들 이미지는 연출 예시이며, 동일 맛 10개입 구성으로 발송됩니다.</p>
          </FadeIn>
        </section>

        {/* 5. Flavor Lineup (Matched to Reference) */}
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
                      className="absolute -bottom-16 right-6 w-28 md:w-36 aspect-[3/4] object-cover shadow-xl border-4 border-white"
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
