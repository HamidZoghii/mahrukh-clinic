import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/types";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const reversed = index % 2 === 1;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group grid grid-cols-1 gap-0 overflow-hidden rounded-[28px] border border-ink/8 bg-white transition-shadow duration-300 hover:shadow-[0_30px_60px_-24px_rgba(13,47,64,0.25)] sm:grid-cols-2 ${
        reversed ? "sm:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
        <Image
          src={service.cardImage}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 420px, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
        <span className="font-en text-[11px] uppercase tracking-[0.2em] text-accent">
          {service.englishTitle}
        </span>
        <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
        <p className="text-sm leading-7 text-muted">{service.shortDescription}</p>
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
          مشاهدهٔ جزئیات درمان
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="-rotate-90 transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path
              d="M12 5v14M12 19l-6-6M12 19l6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
