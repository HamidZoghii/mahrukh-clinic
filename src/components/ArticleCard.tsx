import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white transition-shadow hover:shadow-[0_24px_50px_-24px_rgba(13,47,64,0.22)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 380px, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">{article.category}</span>
        <h3 className="text-lg font-semibold leading-8 text-ink">{article.title}</h3>
        <p className="line-clamp-2 text-sm leading-7 text-muted">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted">
          <span>{article.publishedAt}</span>
          <span>{article.readingTime} مطالعه</span>
        </div>
      </div>
    </Link>
  );
}
