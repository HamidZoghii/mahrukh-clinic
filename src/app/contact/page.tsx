import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { clinicInfo } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "تماس با کلینیک زیبایی ماه‌رخ",
  description: "اطلاعات تماس، آدرس، ساعات کاری و مسیرهای ارتباطی با کلینیک زیبایی ماه‌رخ.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${clinicInfo.brandNameEn}, ${clinicInfo.addressLine}`);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "تماس با ما" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Contact"
            title="در ارتباط باشید"
            description="برای هماهنگی مشاوره، رزرو نوبت یا هر سوالی دربارهٔ خدمات کلینیک، از راه‌های زیر با ما در تماس باشید."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-ink/8 bg-white p-7">
              <h3 className="text-sm font-medium text-muted">آدرس کلینیک</h3>
              <p className="mt-2 text-[15px] leading-8 text-ink">{clinicInfo.addressLine}</p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-deep"
              >
                مسیریابی روی نقشه ←
              </a>
            </div>

            <div className="rounded-3xl border border-ink/8 bg-white p-7">
              <h3 className="text-sm font-medium text-muted">تماس مستقیم</h3>
              <a href={`tel:${clinicInfo.phone}`} dir="ltr" className="mt-2 block text-right text-[15px] font-medium text-ink hover:text-primary">
                {clinicInfo.phoneDisplay}
              </a>
              <a href={`mailto:${clinicInfo.email}`} className="mt-1 block text-[15px] text-ink hover:text-primary">
                {clinicInfo.email}
              </a>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-deep"
              >
                گفتگو در واتس‌اپ ←
              </a>
            </div>

            <div className="rounded-3xl border border-ink/8 bg-white p-7">
              <h3 className="text-sm font-medium text-muted">ساعات کاری</h3>
              <ul className="mt-3 space-y-2">
                {clinicInfo.workingHours.map((wh) => (
                  <li key={wh.day} className="flex items-center justify-between text-sm text-ink/80">
                    <span>{wh.day}</span>
                    <span>{wh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton href="/appointment">رزرو نوبت</CTAButton>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-ink/8 bg-warm">
            <iframe
              title="موقعیت کلینیک زیبایی ماه‌رخ روی نقشه"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
