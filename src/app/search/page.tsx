import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { SearchClient } from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "جستجو",
  description: "جستجو در خدمات، پزشکان و مقالات کلینیک زیبایی ماه‌رخ.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page max-w-2xl">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "جستجو" }]} />
        <div className="mt-6">
          <SectionHeading eyebrow="Search" title="جستجو در سایت" />
        </div>
        <div className="mt-10">
          <SearchClient />
        </div>
      </div>
    </div>
  );
}
