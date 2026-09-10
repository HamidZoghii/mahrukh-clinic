const trustPoints = [
  { label: "ارزیابی تخصصی پیش از هر درمان", value: "مشاورهٔ پزشکی" },
  { label: "طراحی درمان بر پایهٔ آناتومی فردی", value: "رویکرد شخصی‌سازی‌شده" },
  { label: "استانداردهای بهداشتی و ایمنی کلینیکی", value: "محیط استریل" },
  { label: "همراهی در دوره پیش و پس از درمان", value: "پیگیری مستمر" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-ink/8 bg-warm/60">
      <div className="container-page grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 sm:gap-6">
        {trustPoints.map((point) => (
          <div key={point.value} className="flex flex-col gap-1.5 border-e border-ink/10 pe-6 last:border-e-0 sm:last:border-e-0">
            <span className="text-sm font-semibold text-primary">{point.value}</span>
            <span className="text-xs leading-6 text-muted">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
