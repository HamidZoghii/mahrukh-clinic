import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-en text-xs uppercase tracking-[0.3em] text-accent">404</span>
      <h1 className="mt-4 text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-ink">
        صفحه‌ای که دنبال آن بودید پیدا نشد
      </h1>
      <p className="mt-4 max-w-md text-sm leading-8 text-muted">
        ممکن است آدرس صفحه تغییر کرده یا اشتباه تایپ شده باشد. می‌توانید از صفحهٔ اصلی یا خدمات کلینیک بازدید کنید.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <CTAButton href="/">بازگشت به صفحهٔ اصلی</CTAButton>
        <CTAButton href="/services" variant="secondary">
          مشاهدهٔ خدمات
        </CTAButton>
      </div>
    </div>
  );
}
