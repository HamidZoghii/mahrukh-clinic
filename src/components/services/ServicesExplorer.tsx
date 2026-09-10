"use client";

import { useEffect, useMemo, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import type { Service, ServiceCategory } from "@/lib/types";

export function ServicesExplorer({
  services,
  categories,
}: {
  services: Service[];
  categories: ServiceCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && categories.some((c) => c.slug === category)) {
      setActiveCategory(category);
    }
  }, [categories]);

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    const url = new URL(window.location.href);
    if (slug === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", slug);
    }
    window.history.replaceState({}, "", url.toString());
  }

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2.5"
        role="tablist"
        aria-label="دسته‌بندی خدمات"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => selectCategory("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "border-primary bg-primary text-white"
              : "border-ink/15 text-ink/70 hover:border-primary/40"
          }`}
        >
          همهٔ خدمات
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.slug}
            onClick={() => selectCategory(category.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "border-primary bg-primary text-white"
                : "border-ink/15 text-ink/70 hover:border-primary/40"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
        {filteredServices.length === 0 && (
          <p className="rounded-3xl border border-dashed border-ink/15 p-10 text-center text-sm text-muted">
            در حال حاضر خدمتی در این دسته ثبت نشده است.
          </p>
        )}
      </div>
    </div>
  );
}
