import type { ClinicInfo, NavItem } from "@/lib/types";

// اطلاعات مرکزی کلینیک — نقطهٔ واحد ویرایش برای NAP (Name, Address, Phone)
// و سایر اطلاعات تماس که در Header، Footer، صفحهٔ تماس و Structured Data
// استفاده می‌شود. در صورت مشخص نبودن شهر یا آدرس دقیق، مقادیر Placeholder
// به‌صورت واضح علامت‌گذاری شده‌اند تا بعداً جایگزین شوند.
export const clinicInfo: ClinicInfo = {
  brandNameFa: "کلینیک زیبایی ماه‌رخ",
  brandNameEn: "Mahrukh Aesthetic Clinic",
  domain: "mahrukhclinic.com",
  descriptionShort:
    "کلینیک تخصصی زیبایی و پوست با رویکرد پزشکی، تمرکز بر نتیجهٔ طبیعی و توجه به ویژگی‌های فردی هر مراجعه‌کننده.",
  city: "تهران", // Placeholder — قابل ویرایش با شهر دقیق کلینیک
  addressLine: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، ساختمان پزشکان ماه‌رخ، طبقه ۴", // Placeholder
  phone: "+982100000000", // Placeholder — شمارهٔ تماس واقعی جایگزین شود
  phoneDisplay: "۰۲۱-۰۰۰۰۰۰۰۰",
  whatsapp: "989000000000", // Placeholder — بدون + و صفر ابتدایی برای لینک واتس‌اپ
  email: "info@mahrukhclinic.com",
  workingHours: [
    { day: "شنبه تا چهارشنبه", hours: "۱۰:۰۰ تا ۲۰:۰۰" },
    { day: "پنجشنبه", hours: "۱۰:۰۰ تا ۱۷:۰۰" },
    { day: "جمعه", hours: "تعطیل" },
  ],
  socials: [
    { label: "اینستاگرام", href: "https://instagram.com/mahrukhclinic" },
    { label: "واتس‌اپ", href: "https://wa.me/989000000000" },
    { label: "تلگرام", href: "https://t.me/mahrukhclinic" },
  ],
};

export const mainNav: NavItem[] = [
  { label: "خدمات", href: "/services" },
  { label: "پزشکان", href: "/doctors" },
  { label: "قبل و بعد", href: "/before-after" },
  { label: "مقالات", href: "/articles" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "تزریقات زیبایی", href: "/services?category=tazrighat" },
  { label: "جوانسازی پوست", href: "/services?category=javansazi" },
  { label: "فرم‌دهی و کانتورینگ", href: "/services?category=konturing" },
  { label: "درمان لک و جای جوش", href: "/services?category=lak-jaye-joosh" },
  { label: "مراقبت و درمان پوست", href: "/services?category=marghebat-pust" },
];
