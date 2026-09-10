import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "مقالات و راهنمای زیبایی و پوست",
  description: "مقالات تخصصی دربارهٔ بوتاکس، فیلر، جوانسازی پوست و مراقبت پوست از تیم پزشکی کلینیک زیبایی ماه‌رخ.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-page">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "مقالات" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Articles"
            title="راهنمای علمی زیبایی و پوست"
            description="مقالاتی برای شناخت بهتر روش‌های درمانی، پاسخ به سوالات رایج و تصمیم‌گیری آگاهانه پیش از هر درمان."
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      <div className="container-page mt-20">
        <CTASection
          title="سوالی دربارهٔ درمان موردنظرتان دارید؟"
          description="در مشاورهٔ اولیه، پاسخ دقیق‌تر و متناسب با شرایط شما ارائه می‌شود."
        />
      </div>
    </div>
  );
}
