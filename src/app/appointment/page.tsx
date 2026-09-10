import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { clinicInfo } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "رزرو نوبت و دریافت مشاوره",
  description: "درخواست مشاوره یا رزرو نوبت در کلینیک زیبایی ماه‌رخ؛ ساده، سریع و بدون پیچیدگی.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "رزرو نوبت" }]} />

        <div className="mt-6 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Appointment"
              title="رزرو نوبت و دریافت مشاوره"
              description="فرم زیر را تکمیل کنید تا خلاصه‌ای از درخواست شما آماده شود. سپس می‌توانید آن را مستقیماً از طریق واتس‌اپ برای تیم پذیرش ارسال کنید یا با کلینیک تماس بگیرید."
            />
            <div className="mt-10 space-y-4 text-sm text-muted">
              <p>
                <span className="font-medium text-ink">تماس مستقیم: </span>
                <a href={`tel:${clinicInfo.phone}`} className="text-primary hover:text-primary-deep">
                  {clinicInfo.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-medium text-ink">ساعات پاسخ‌گویی: </span>
                {clinicInfo.workingHours[0].day} — {clinicInfo.workingHours[0].hours}
              </p>
              <p className="text-xs leading-6">
                در صورت نیاز فوری پزشکی، لطفاً مستقیماً با مراکز درمانی اورژانسی تماس بگیرید. این صفحه صرفاً
                برای هماهنگی مشاوره و نوبت‌های زیبایی است.
              </p>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
