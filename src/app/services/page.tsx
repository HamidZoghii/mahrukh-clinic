import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { services } from "@/lib/data/services";
import { serviceCategories } from "@/lib/data/service-categories";
import { clinicInfo } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "خدمات کلینیک زیبایی ماه‌رخ",
  description:
    "معرفی کامل خدمات کلینیک زیبایی ماه‌رخ شامل تزریقات زیبایی، جوانسازی پوست، کانتورینگ، درمان لک و جای جوش و مزوتراپی.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "خدمات" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Services"
            title="خدمات کلینیک زیبایی ماه‌رخ"
            description={`مجموعه‌ای از خدمات تخصصی زیبایی و پوست، طراحی‌شده با نگاه پزشکی و متناسب با نیاز هر فرد. پیش از انتخاب هر درمان، مشاورهٔ اولیه در ${clinicInfo.city} برای شما هماهنگ می‌شود.`}
          />
        </div>

        <div className="mt-12">
          <ServicesExplorer services={services} categories={serviceCategories} />
        </div>
      </div>

      <div className="container-page mt-20">
        <CTASection
          title="در انتخاب خدمت مناسب مطمئن نیستید؟"
          description="کافی است درخواست مشاوره ثبت کنید؛ تیم پزشکی ماه‌رخ متناسب با هدف و وضعیت پوست شما، درمان مناسب را پیشنهاد می‌دهد."
        />
      </div>
    </div>
  );
}
