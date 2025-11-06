import PostPreview from "@/components/PostPreview";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_55%)]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 md:flex-row md:items-center">
        <section className="w-full space-y-8 md:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
            وكالة تسويق رقمي • تصميم محتوى بصري
          </span>
          <div className="space-y-6 text-start">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              تصميم بوست احترافي يعكس شخصية علامتك ويزيد من تفاعل جمهورك
            </h1>
            <p className="text-base text-white/70 md:text-lg">
              صممنا هوية مرئية متكاملة تنبض بالحيوية وتدمج بين الألوان المتدرجة
              والأنماط الديناميكية لعرض خدمات التسويق الإلكتروني بأسلوب يجذب
              الانتباه ويعزز الثقة.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <div className="rounded-2xl bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">+67%</p>
              <p>زيادة في معدّل التفاعل</p>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">48 ساعة</p>
              <p>لتسليم التصميم الجاهز للنشر</p>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">360°</p>
              <p>تجربة تسويق متكاملة</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-brand.purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand.purple/40 transition hover:bg-brand.blue"
              href="#"
            >
              اطلب تصميمك الآن
            </a>
            <a
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              href="#"
            >
              استكشف أعمالنا
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-white/50">
            <div>
              <p className="font-medium text-white/70">مناسب لجميع المنصات</p>
              <p>إنستغرام، لينكدإن، سناب شات، تيك توك</p>
            </div>
            <div>
              <p className="font-medium text-white/70">صيغة قابلة للتعديل</p>
              <p>ملفات مصدرية ونسخ جاهزة للنشر الفوري</p>
            </div>
          </div>
        </section>
        <section className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand.blue via-brand.purple to-brand.pink opacity-50 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/60 p-6 shadow-[0_50px_140px_-80px_rgba(236,72,153,0.9)]">
              <div className="flex items-center justify-between text-xs text-white/40">
                <span>منشور حملة مارس 2024</span>
                <span>1080 × 1080</span>
              </div>
              <div className="mt-4 rounded-[2rem] border border-white/5 bg-slate-950/80 p-3">
                <PostPreview />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    PSD
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    AI
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    MP4
                  </span>
                </div>
                <span>شامل التحريك الخفيف</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
