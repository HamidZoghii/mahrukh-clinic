import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CTASection } from "@/components/CTASection";
import { beforeAfterCases } from "@/lib/data/before-after";
import { getServiceBySlug } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "قبل و بعد | نمونه نتایج درمان‌های کلینیک ماه‌رخ",
  description:
    "مشاهدهٔ تعاملی نمونه‌های واقعی قبل و بعد از درمان‌های زیبایی در کلینیک زیبایی ماه‌رخ با اسلایدر مقایسه.",
  alternates: { canonical: "/before-after" },
};

export default function BeforeAfterPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "قبل و بعد" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Before / After"
            title="نتایج واقعی درمان‌ها"
            description="خط جداکنندهٔ هر تصویر را با موس یا انگشت جابه‌جا کنید تا تفاوت پیش و پس از درمان را ببینید. تمام نمونه‌ها با تلاش برای حفظ زاویه، نور و فاصلهٔ یکسان ثبت شده‌اند."
          />
          <p className="mt-4 max-w-2xl text-xs leading-6 text-muted">
            نتایج درمان می‌تواند بسته به شرایط هر فرد متفاوت باشد. تصاویر این صفحه صرفاً برای نمایش روند
            و نحوهٔ تغییرات هستند و تضمینی برای نتیجهٔ مشابه در هر فرد محسوب نمی‌شوند.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterCases.map((c) => {
            const service = c.serviceSlug ? getServiceBySlug(c.serviceSlug) : undefined;
            return (
              <div key={c.id}>
                <BeforeAfterSlider beforeImage={c.beforeImage} afterImage={c.afterImage} alt={c.title} />
                <div className="mt-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">{c.treatment}</span>
                  <h3 className="mt-1 text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{c.description}</p>
                  <p className="mt-2 text-xs leading-6 text-muted/80">{c.disclaimer}</p>
                  {service && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-deep"
                    >
                      اطلاعات بیشتر دربارهٔ این درمان ←
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-page mt-20">
        <CTASection />
      </div>
    </div>
  );
}
