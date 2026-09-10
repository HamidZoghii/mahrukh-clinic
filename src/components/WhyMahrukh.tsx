import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    n: "۰۱",
    title: "نگاه پزشکی، نه فقط زیبایی",
    text: "هر تصمیم درمانی با ارزیابی پزشکی و شناخت دقیق پوست و آناتومی فرد گرفته می‌شود.",
  },
  {
    n: "۰۲",
    title: "زیبایی طبیعی به‌جای تغییر چشمگیر",
    text: "هدف ما هماهنگی با ویژگی‌های چهرهٔ شماست، نه ایجاد ظاهری یکسان برای همه.",
  },
  {
    n: "۰۳",
    title: "درمان شخصی‌سازی‌شده",
    text: "دوز، روش و برنامهٔ درمانی بر اساس نیاز و هدف واقعی هر مراجعه‌کننده طراحی می‌شود.",
  },
  {
    n: "۰۴",
    title: "توجه به جزئیات",
    text: "از نور و زاویهٔ تصویربرداری تا نحوهٔ تزریق، جزئیات کوچک، تفاوت‌های بزرگ می‌سازند.",
  },
  {
    n: "۰۵",
    title: "تجربه‌ای آرام و Premium",
    text: "محیطی بدون عجله، با فضایی که حس اعتماد و آرامش را منتقل می‌کند.",
  },
  {
    n: "۰۶",
    title: "همراهی قبل و بعد از درمان",
    text: "مشاورهٔ شفاف پیش از درمان و پیگیری مراقبتی پس از آن، بخشی از مسیر درمان شماست.",
  },
];

export function WhyMahrukh() {
  return (
    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div className="order-2 lg:order-1">
        <SectionHeading
          eyebrow="Why Mahrukh"
          title="چرا ماه‌رخ را انتخاب کنید؟"
          description="ماه‌رخ صرفاً محلی برای انجام تزریق یا درمان زیبایی نیست؛ مسیری است که با شناخت دقیق چهره و پوست شما آغاز می‌شود."
        />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.n} className="flex flex-col gap-2 border-t border-ink/10 pt-4">
              <span className="font-en text-xs text-accent">{p.n}</span>
              <h3 className="text-[15px] font-semibold text-ink">{p.title}</h3>
              <p className="text-sm leading-7 text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative order-1 lg:order-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px]">
          <Image
            src="/images/reception.jpg"
            alt="فضای پذیرش کلینیک زیبایی ماه‌رخ"
            fill
            sizes="(min-width: 1024px) 520px, 92vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-[24px] border border-ink/8 bg-white p-5 shadow-[0_24px_48px_-20px_rgba(13,47,64,0.3)] sm:block">
          <p className="text-sm leading-7 text-ink/80">
            «تمرکز ما بر شنیدن دقیق خواستهٔ شماست، پیش از هر پیشنهاد درمانی.»
          </p>
          <p className="mt-3 text-xs text-accent">تیم پزشکی ماه‌رخ</p>
        </div>
      </div>
    </div>
  );
}
