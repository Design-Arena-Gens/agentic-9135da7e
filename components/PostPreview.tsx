export default function PostPreview() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand.blue/10 via-brand.purple/10 to-brand.pink/10 p-6 shadow-[0_40px_120px_-50px_rgba(59,130,246,0.6)] backdrop-blur-xl">
      <div className="absolute inset-x-10 -top-20 h-40 rounded-full bg-gradient-to-r from-brand.blue via-brand.purple to-brand.pink opacity-60 blur-3xl" />
      <header className="flex items-center justify-between text-sm text-white/80">
        <div className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm" />
          <div>
            <p className="text-white">Digital Pulse Studio</p>
            <p className="text-xs text-white/60">منشور دعائي</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
          #BoostYourBrand
        </span>
      </header>
      <div className="mt-6 space-y-4 text-start">
        <p className="text-xs uppercase tracking-[0.3em] text-brand.pink/80">
          استراتيجية نمو متكاملة
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-white">
          أطلق تأثير علامتك الرقمية مع فريق التسويق المبدع لدينا
        </h2>
        <p className="text-sm leading-relaxed text-white/70">
          نصمم حملات تفاعلية، نطلق إعلانات ممولة، ونبني محتوى يلهم الجمهور
          ليتحول إلى عملاء حقيقيين. شغل علامتك بنبض رقمي لا يُنسى.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
          إدارة الحملات
        </span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
          تصميم مبتكر
        </span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
          تقارير دقيقة
        </span>
      </div>
      <footer className="mt-8 flex items-center justify-between">
        <div className="text-xs text-white/60">
          <p>تابعنا على المنصات الرقمية</p>
          <p className="text-white/40">@digitalpulsestudio</p>
        </div>
        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
          احجز استشارتك
        </button>
      </footer>
    </div>
  );
}
