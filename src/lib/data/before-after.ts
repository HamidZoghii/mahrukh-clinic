import type { BeforeAfterCase } from "@/lib/types";

// نکتهٔ مهم دربارهٔ تصاویر نمایشی:
// از آنجا که در این نسخهٔ اولیه به تصاویر واقعی بیمار قبل و بعد از درمان
// دسترسی وجود ندارد، برای نمایش «نحوهٔ عملکرد» اسلایدر تعاملی، از یک تصویر
// پایهٔ واحد برای هر مورد استفاده شده و نسخهٔ «قبل» با یک فیلتر ملایم CSS
// (کاهش کنتراست/اشباع رنگ) شبیه‌سازی شده است. این کار تضمین می‌کند زاویه،
// نور و فاصلهٔ دوربین «قبل» و «بعد» دقیقاً یکسان باشد. این تصاویر باید پیش
// از انتشار نهایی با تصاویر واقعی بیماران (با رضایت‌نامه) جایگزین شوند.
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "ba-1",
    treatment: "جوانسازی و بهبود بافت پوست",
    serviceSlug: "javansazi-pust",
    title: "بهبود یکنواختی و درخشندگی پوست",
    beforeImage: "/images/ba-face-woman-1.jpg",
    afterImage: "/images/ba-face-woman-1.jpg",
    isSingleImageDemo: true,
    description:
      "نمایی نزدیک از بهبود بافت و درخشندگی پوست پس از دورهٔ درمانی جوانسازی. زاویه، نور و فاصلهٔ تصویر در هر دو حالت یکسان است.",
    disclaimer: "نتایج درمان می‌تواند بسته به شرایط هر فرد متفاوت باشد.",
  },
  {
    id: "ba-2",
    treatment: "کانتورینگ و تزریق فیلر",
    serviceSlug: "konturing-surat",
    title: "تعادل نسبت‌های صورت با تزریق هدفمند",
    beforeImage: "/images/ba-face-man-1.jpg",
    afterImage: "/images/ba-face-man-1.jpg",
    isSingleImageDemo: true,
    description:
      "نمونه‌ای از هماهنگ‌سازی نسبت‌های صورت با تزریق کنترل‌شده و متناسب با ساختار استخوانی فرد.",
    disclaimer: "نتایج درمان می‌تواند بسته به شرایط هر فرد متفاوت باشد.",
  },
  {
    id: "ba-3",
    treatment: "درمان لک و روشن‌سازی پوست",
    serviceSlug: "darman-lak",
    title: "یکنواخت‌سازی رنگ و بافت پوست",
    beforeImage: "/images/ba-face-woman-2.jpg",
    afterImage: "/images/ba-face-woman-2.jpg",
    isSingleImageDemo: true,
    description: "نمونه‌ای از بهبود یکنواختی رنگ پوست پس از دورهٔ درمانی تخصصی لک.",
    disclaimer: "نتایج درمان می‌تواند بسته به شرایط هر فرد متفاوت باشد.",
  },
  {
    id: "ba-4",
    treatment: "لیفت غیرجراحی صورت",
    serviceSlug: "lift-bedoone-jarahi",
    title: "بهبود سفتی و خط فک صورت",
    beforeImage: "/images/ba-face-woman-1.jpg",
    afterImage: "/images/ba-face-woman-1.jpg",
    isSingleImageDemo: true,
    description: "نمونه‌ای از بهبود تدریجی سفتی پوست و خط فک با روش لیفت غیرجراحی.",
    disclaimer: "نتایج درمان می‌تواند بسته به شرایط هر فرد متفاوت باشد.",
  },
];

export function getBeforeAfterById(id: string): BeforeAfterCase | undefined {
  return beforeAfterCases.find((item) => item.id === id);
}
