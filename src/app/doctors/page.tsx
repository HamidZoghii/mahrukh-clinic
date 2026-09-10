import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";
import { CTASection } from "@/components/CTASection";
import { doctors } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "پزشکان کلینیک زیبایی ماه‌رخ",
  description: "آشنایی با تیم پزشکی متخصص کلینیک زیبایی ماه‌رخ در حوزهٔ تزریقات زیبایی، جوانسازی پوست و درمان‌های تخصصی.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "پزشکان" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Medical Team"
            title="تیم پزشکی ماه‌رخ"
            description="هر درمان در ماه‌رخ با قضاوت پزشکی متخصص آغاز می‌شود. با پزشکانی آشنا شوید که مسیر درمان را همراه شما طراحی و اجرا می‌کنند."
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </div>

      <div className="container-page mt-20">
        <CTASection
          title="مایل به دریافت مشاوره از پزشک مناسب هستید؟"
          description="با توضیح مختصر نیاز خود، تیم پذیرش ماه‌رخ پزشک متناسب با درمان موردنظر شما را معرفی می‌کند."
        />
      </div>
    </div>
  );
}
