export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-block font-en text-xs font-medium uppercase tracking-[0.24em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.25] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-8 ${light ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
