import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="کلینیک زیبایی ماه‌رخ">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-en font-medium transition-colors ${
          light ? "border-white/50 text-white" : "border-primary/30 text-primary"
        }`}
      >
        م
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-base font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          ماه‌رخ
        </span>
        <span
          className={`font-en text-[10px] uppercase tracking-[0.18em] ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          Mahrukh Clinic
        </span>
      </span>
    </Link>
  );
}
