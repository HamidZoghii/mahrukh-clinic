import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="reveal-up max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-medium text-primary">
            کلینیک تخصصی زیبایی و پوست
          </span>
          <h1 className="mt-6 text-balance text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.25] text-ink">
            زیبایی، وقتی ارزشمند است که{" "}
            <span className="text-primary">طبیعی</span> به نظر برسد.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-8 text-muted">
            در کلینیک زیبایی ماه‌رخ، زیبایی با نگاه پزشکی، دقت در جزئیات و توجه به
            ویژگی‌های منحصربه‌فرد چهره و پوست شما تعریف می‌شود.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CTAButton href="/appointment">رزرو نوبت</CTAButton>
            <CTAButton href="/services" variant="secondary">
              مشاهدهٔ خدمات
            </CTAButton>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <div>
              <dt className="text-xs text-muted">رویکرد</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">پزشکی و علمی</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">تمرکز</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">نتیجهٔ طبیعی</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">تجربه</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">Premium و آرام</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] sm:mr-6">
            <Image
              src="/images/hero-clinic.jpg"
              alt="فضای درمانی کلینیک زیبایی ماه‌رخ"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 w-40 overflow-hidden rounded-[24px] border-4 border-soft shadow-[0_20px_50px_-20px_rgba(13,47,64,0.4)] sm:-right-2 sm:w-52">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/hero-portrait.jpg"
                alt="مراجعه‌کننده کلینیک زیبایی ماه‌رخ"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-accent/30 sm:-left-10 sm:-top-10 sm:h-32 sm:w-32"
          />
        </div>
      </div>
    </section>
  );
}
