import { CTAButton } from "@/components/CTAButton";

export function CTASection({
  title = "آماده‌اید مسیر درمان خود را آغاز کنید؟",
  description = "با یک مشاورهٔ تخصصی شروع کنید. تیم پزشکی ماه‌رخ پس از بررسی وضعیت شما، مناسب‌ترین برنامهٔ درمانی را پیشنهاد می‌دهد.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-primary-deep px-8 py-14 text-center sm:px-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-xl">
        <h2 className="text-balance text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.3] text-white">
          {title}
        </h2>
        <p className="mt-4 text-[15px] leading-8 text-white/75">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/appointment" variant="ghost" className="!bg-white !text-primary-deep !border-white">
            رزرو نوبت
          </CTAButton>
          <CTAButton href="/contact" variant="ghost">
            دریافت مشاوره
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
