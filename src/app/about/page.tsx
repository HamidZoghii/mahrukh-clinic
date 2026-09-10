import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { WhyMahrukh } from "@/components/WhyMahrukh";
import { clinicInfo } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "دربارهٔ کلینیک زیبایی ماه‌رخ",
  description: "آشنایی با فلسفه، استاندارد درمان، محیط و رویکرد پزشکی کلینیک زیبایی ماه‌رخ.",
  alternates: { canonical: "/about" },
};

const standards = [
  {
    title: "ارزیابی پیش از درمان",
    text: "هیچ تزریق یا درمانی بدون بررسی دقیق وضعیت پوست، آناتومی و سابقهٔ پزشکی انجام نمی‌شود.",
  },
  {
    title: "استفاده از مواد استاندارد",
    text: "محصولات و مواد تزریقی مورد استفاده در ماه‌رخ دارای مجوزهای معتبر و منشأ مشخص هستند.",
  },
  {
    title: "محیط استریل و کنترل‌شده",
    text: "فضای درمانی مطابق پروتکل‌های بهداشتی کلینیکی آماده و پایش می‌شود.",
  },
  {
    title: "شفافیت در مشاوره",
    text: "پیش از هر درمان، جزئیات روند، هزینه و انتظار واقع‌بینانه از نتیجه با شما در میان گذاشته می‌شود.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "دربارهٔ ما" }]} />
      </div>

      {/* Hero */}
      <section className="container-page mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="font-en text-xs uppercase tracking-[0.2em] text-accent">About Mahrukh</span>
          <h1 className="mt-4 text-balance text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.3] text-ink">
            کلینیکی که با شنیدن دقیق شروع می‌شود
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-8 text-muted">
            {clinicInfo.brandNameFa} ({clinicInfo.brandNameEn}) با این باور شکل گرفته که زیبایی واقعی از
            شناخت درست چهره، پوست و خواستهٔ هر فرد به‌دست می‌آید؛ نه از اجرای یک الگوی ثابت و تکرارشونده.
            رویکرد ما، ترکیب دانش پزشکی با نگاهی ظریف و انسانی به زیبایی است.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
          <Image src="/images/about-interior.jpg" alt="فضای درمانی کلینیک زیبایی ماه‌رخ" fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" priority />
        </div>
      </section>

      {/* فلسفه */}
      <section className="container-page mt-24 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Philosophy" title="فلسفهٔ درمانی ماه‌رخ" />
          <p className="mt-6 text-sm leading-8 text-muted">
            ما معتقدیم بهترین نتیجهٔ زیبایی، نتیجه‌ای است که دیده نمی‌شود؛ نتیجه‌ای که حس تازگی، آرامش و
            اعتمادبه‌نفس می‌دهد، بدون آنکه اطرافیان شما دقیقاً بگویند «چه کاری انجام داده‌اید». به همین دلیل هر
            برنامهٔ درمانی در ماه‌رخ با گفت‌وگو، ارزیابی دقیق و طراحی اختصاصی آغاز می‌شود.
          </p>
        </div>
        <div>
          <SectionHeading eyebrow="Environment" title="محیط و استاندارد کلینیک" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {standards.map((s) => (
              <div key={s.title} className="rounded-2xl border border-ink/8 bg-white p-5">
                <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mahrukh */}
      <section className="container-page mt-24">
        <WhyMahrukh />
      </section>

      {/* محیط کلینیک */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Our Space" title="نگاهی به فضای ماه‌رخ" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:col-span-2 sm:row-span-2 sm:aspect-auto">
            <Image src="/images/reception.jpg" alt="پذیرش کلینیک زیبایی ماه‌رخ" fill sizes="(min-width: 1024px) 720px, 92vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/treatment-facial.jpg" alt="اتاق درمان کلینیک" fill sizes="(min-width: 1024px) 360px, 92vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/clinic-exterior.jpg" alt="نمای بیرونی ساختمان کلینیک" fill sizes="(min-width: 1024px) 360px, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <CTASection />
      </section>
    </div>
  );
}
