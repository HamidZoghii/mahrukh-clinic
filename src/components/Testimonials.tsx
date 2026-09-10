import type { Testimonial } from "@/lib/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-accent" aria-label={`امتیاز ${rating} از ۵`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.5l2.9 6.06 6.6.77-4.9 4.5 1.28 6.57L12 17.9l-5.88 2.5 1.28-6.57-4.9-4.5 6.6-.77L12 2.5z"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((t) => (
        <figure key={t.id} className="flex flex-col gap-4 rounded-3xl border border-ink/8 bg-white p-6">
          <Stars rating={t.rating} />
          <blockquote className="flex-1 text-sm leading-8 text-ink/85">“{t.quote}”</blockquote>
          <figcaption className="flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-muted">
            <span className="font-medium text-ink">{t.name}</span>
            <span>{t.service}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
