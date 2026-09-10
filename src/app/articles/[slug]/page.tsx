import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getArticleBySlug } from "@/lib/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.seo.title,
      description: article.seo.description,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    author: { "@type": "Organization", name: article.author },
    datePublished: article.publishedAt,
  };

  const faqSchema = article.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="container-page">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: "مقالات", href: "/articles" },
            { label: article.title },
          ]}
        />
      </div>

      <article className="container-page mt-8 max-w-3xl">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">{article.category}</span>
        <h1 className="mt-3 text-balance text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.3] text-ink">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
          <span>{article.readingTime} مطالعه</span>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[28px]">
          <Image src={article.coverImage} alt={article.title} fill sizes="(min-width: 1024px) 800px, 92vw" className="object-cover" priority />
        </div>

        <div className="prose-content mt-10 space-y-6">
          {article.content.map((block, i) => (
            <div key={i}>
              {block.heading && <h2 className="mb-3 text-xl font-semibold text-ink">{block.heading}</h2>}
              <p className="text-[15px] leading-8 text-muted">{block.body}</p>
            </div>
          ))}
        </div>

        {article.faq && article.faq.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-6 text-xl font-semibold text-ink">سوالات متداول</h2>
            <FAQAccordion items={article.faq} />
          </div>
        )}
      </article>

      {fallbackRelated.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="mb-8 text-xl font-semibold text-ink">مقالات مرتبط</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <section className="container-page mt-20">
        <CTASection />
      </section>
    </div>
  );
}
