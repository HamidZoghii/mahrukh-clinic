import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { getServiceBySlug, services } from "@/lib/data/services";
import { getBeforeAfterById } from "@/lib/data/before-after";
import { getDoctorBySlug } from "@/lib/data/doctors";
import { serviceCategories } from "@/lib/data/service-categories";
import { clinicInfo } from "@/lib/data/clinic";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = serviceCategories.find((c) => c.slug === service.category);
  const relatedDoctors = (service.relatedDoctorSlugs ?? [])
    .map((s) => getDoctorBySlug(s))
    .filter(Boolean);
  const cases = (service.beforeAfterIds ?? []).map((id) => getBeforeAfterById(id)).filter(Boolean);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.seo.description,
    procedureType: category?.title,
    provider: {
      "@type": "MedicalBusiness",
      name: clinicInfo.brandNameFa,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-page">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: "خدمات", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="container-page mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {category && (
            <Link
              href={`/services?category=${category.slug}`}
              className="text-xs font-medium uppercase tracking-[0.2em] text-accent"
            >
              {category.title}
            </Link>
          )}
          <h1 className="mt-4 text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.25] text-ink">
            {service.title}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-muted">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/appointment">رزرو نوبت</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              دریافت مشاوره
            </CTAButton>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-muted">مدت جلسه</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{service.duration}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">دورهٔ نقاهت</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{service.recovery}</dd>
            </div>
          </dl>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 560px, 92vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* توضیحات و مناسب چه کسانی */}
      <section className="container-page mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About the Treatment" title="دربارهٔ این درمان" />
          <div className="mt-6 space-y-4">
            {service.description.map((p, i) => (
              <p key={i} className="text-sm leading-8 text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Suitable For" title="مناسب چه کسانی است؟" />
          <ul className="mt-6 space-y-3">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* مزایا و روند درمان */}
      <section className="container-page mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Benefits" title="مزایای این روش" />
          <ul className="mt-6 space-y-3">
            {service.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="Process" title="روند انجام درمان" />
          <ol className="mt-6 space-y-4">
            {service.process.map((step, i) => (
              <li key={step} className="flex items-start gap-4 text-sm leading-7 text-ink/80">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warm font-en text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* مراقبت و موارد منع */}
      <section className="container-page mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Care" title="مراقبت‌های قبل و بعد از درمان" />
          <ul className="mt-6 space-y-3">
            {service.precautions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="Contraindications" title="موارد منع انجام" />
          <ul className="mt-6 space-y-3">
            {service.contraindications.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-6 text-muted">
            بررسی دقیق سابقهٔ پزشکی در جلسهٔ مشاوره انجام می‌شود تا مناسب بودن این درمان برای شرایط فردی شما تأیید شود.
          </p>
        </div>
      </section>

      {/* Before / After */}
      {cases.length > 0 && (
        <section className="mt-20 bg-warm/60 py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Before / After" title="نمونه‌های واقعی این درمان" align="center" />
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map(
                (c) =>
                  c && (
                    <div key={c.id}>
                      <BeforeAfterSlider beforeImage={c.beforeImage} afterImage={c.afterImage} alt={c.title} />
                      <p className="mt-4 text-sm font-medium text-ink">{c.title}</p>
                      <p className="mt-1 text-xs leading-6 text-muted">{c.disclaimer}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* پزشکان مرتبط */}
      {relatedDoctors.length > 0 && (
        <section className="container-page mt-20">
          <SectionHeading eyebrow="Specialists" title="پزشکان مرتبط با این درمان" />
          <div className="mt-8 flex flex-wrap gap-4">
            {relatedDoctors.map(
              (doctor) =>
                doctor && (
                  <Link
                    key={doctor.slug}
                    href={`/doctors/${doctor.slug}`}
                    className="flex items-center gap-4 rounded-full border border-ink/10 bg-white py-2 pe-6 ps-2 transition-colors hover:border-primary/30"
                  >
                    <span className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{doctor.name}</span>
                      <span className="block text-xs text-muted">{doctor.title}</span>
                    </span>
                  </Link>
                )
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-page mt-20">
        <SectionHeading eyebrow="FAQ" title="سوالات متداول دربارهٔ این درمان" />
        <div className="mt-8">
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      <section className="container-page mt-20">
        <CTASection />
      </section>
    </div>
  );
}
