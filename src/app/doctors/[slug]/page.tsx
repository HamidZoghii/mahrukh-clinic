import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { doctors, getDoctorBySlug } from "@/lib/data/doctors";
import { getServiceBySlug } from "@/lib/data/services";
import { clinicInfo } from "@/lib/data/clinic";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: doctor.seo.title,
    description: doctor.seo.description,
    keywords: doctor.seo.keywords,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: doctor.seo.title,
      description: doctor.seo.description,
      images: [{ url: doctor.image }],
    },
  };
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const relatedServices = doctor.serviceSlugs.map((s) => getServiceBySlug(s)).filter(Boolean);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    alternateName: doctor.englishName,
    jobTitle: doctor.title,
    medicalSpecialty: doctor.specialty,
    worksFor: { "@type": "MedicalBusiness", name: clinicInfo.brandNameFa },
    image: doctor.image,
  };

  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="container-page">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: "پزشکان", href: "/doctors" },
            { label: doctor.name },
          ]}
        />
      </div>

      <section className="container-page mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
          <Image src={doctor.image} alt={`${doctor.name} — ${doctor.title}`} fill sizes="(min-width: 1024px) 480px, 92vw" className="object-cover" priority />
        </div>
        <div>
          <span className="font-en text-xs uppercase tracking-[0.2em] text-accent">{doctor.englishName}</span>
          <h1 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-ink">{doctor.name}</h1>
          <p className="mt-2 text-base text-primary">{doctor.title}</p>
          <p className="mt-6 max-w-lg text-sm leading-8 text-muted">{doctor.shortBio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/appointment">رزرو مشاوره</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              تماس با کلینیک
            </CTAButton>
          </div>

          <div className="mt-10 rounded-3xl border border-ink/8 bg-warm/60 p-6">
            <p className="text-sm leading-8 text-ink/80">{doctor.approach}</p>
          </div>
        </div>
      </section>

      <section className="container-page mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Biography" title="معرفی و سوابق" />
          <div className="mt-6 space-y-4">
            {doctor.bio.map((p, i) => (
              <p key={i} className="text-sm leading-8 text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <SectionHeading eyebrow="Credentials" title="سوابق و مدارک تخصصی" />
            <ul className="mt-6 space-y-3">
              {doctor.credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Focus Areas" title="حوزه‌های تخصصی" />
            <ul className="mt-6 space-y-3">
              {doctor.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="container-page mt-20">
          <SectionHeading eyebrow="Services" title="خدمات قابل ارائه" />
          <div className="mt-8 flex flex-wrap gap-3">
            {relatedServices.map(
              (service) =>
                service && (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-ink/12 bg-white px-5 py-2.5 text-sm text-ink/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                )
            )}
          </div>
        </section>
      )}

      <section className="container-page mt-20">
        <CTASection />
      </section>
    </div>
  );
}
