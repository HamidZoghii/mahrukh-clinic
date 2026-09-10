"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { articles } from "@/lib/data/articles";

type Result = {
  type: "خدمت" | "پزشک" | "مقاله";
  title: string;
  description: string;
  href: string;
};

export function SearchClient() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- همگام‌سازی یک‌بارهٔ state با querystring پس از mount
    if (q) setQuery(q);
  }, []);

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const serviceResults: Result[] = services
      .filter((s) => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q))
      .map((s) => ({ type: "خدمت", title: s.title, description: s.shortDescription, href: `/services/${s.slug}` }));

    const doctorResults: Result[] = doctors
      .filter((d) => d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q))
      .map((d) => ({ type: "پزشک", title: d.name, description: d.specialty, href: `/doctors/${d.slug}` }));

    const articleResults: Result[] = articles
      .filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
      .map((a) => ({ type: "مقاله", title: a.title, description: a.excerpt, href: `/articles/${a.slug}` }));

    return [...serviceResults, ...doctorResults, ...articleResults];
  }, [query]);

  return (
    <div>
      <label htmlFor="search-input" className="sr-only">
        جستجو در سایت
      </label>
      <div className="relative">
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو در خدمات، پزشکان و مقالات…"
          className="w-full rounded-full border border-ink/15 bg-white px-6 py-4 text-sm text-ink outline-none transition-colors focus:border-primary"
          autoFocus
        />
      </div>

      <div className="mt-10">
        {query.trim() === "" && (
          <p className="text-sm text-muted">برای شروع، عبارت موردنظر خود را تایپ کنید.</p>
        )}
        {query.trim() !== "" && results.length === 0 && (
          <p className="text-sm text-muted">نتیجه‌ای برای «{query}» یافت نشد.</p>
        )}
        <ul className="space-y-4">
          {results.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="flex flex-col gap-1.5 rounded-2xl border border-ink/8 bg-white p-5 transition-colors hover:border-primary/30"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-accent">{r.type}</span>
                <span className="text-base font-semibold text-ink">{r.title}</span>
                <span className="text-sm leading-6 text-muted">{r.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
