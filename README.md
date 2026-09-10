# کلینیک زیبایی ماه‌رخ — Mahrukh Aesthetic Clinic

وب‌سایت رسمی کلینیک زیبایی ماه‌رخ؛ ساخته‌شده با Next.js (App Router)، TypeScript و Tailwind CSS.
سایت به‌صورت کامل فارسی و RTL طراحی شده و برای انتشار به‌عنوان یک سایت استاتیک
(GitHub Pages) آماده است.

## ویژگی‌های کلیدی

- معماری کامل صفحات: خانه، خدمات، جزئیات خدمت، پزشکان، پروفایل پزشک، قبل و بعد،
  مقالات، جزئیات مقاله، دربارهٔ ما، تماس، رزرو نوبت، جستجو و ۴۰۴.
- اسلایدر تعاملی «قبل / بعد» (Signature Feature) با پشتیبانی از Touch، Mouse و کیبورد.
- تمام محتوا (خدمات، پزشکان، مقالات، قبل/بعد، تستیمونیال‌ها، اطلاعات کلینیک) در
  `src/lib/data/*.ts` نگهداری می‌شود و به‌سادگی قابل ویرایش است — بدون نیاز به تغییر UI.
- SEO کامل: Metadata، Open Graph، Twitter Card، Sitemap، Robots و Structured Data
  (MedicalBusiness، MedicalProcedure، Physician، Article، FAQPage، BreadcrumbList).
- تصاویر لوکال (بدون هیچ URL خارجی) در `public/images`.
- دسترسی‌پذیری: Semantic HTML، Focus State، ARIA برای اسلایدر و آکاردئون FAQ.

## ویرایش اطلاعات کلینیک (NAP)

اطلاعات نام، آدرس، تلفن، ساعات کاری و شبکه‌های اجتماعی در یک فایل مرکزی است:

```
src/lib/data/clinic.ts
```

شهر و آدرس دقیق کلینیک به‌صورت Placeholder وارد شده و باید پیش از انتشار نهایی
با اطلاعات واقعی جایگزین شود.

## ویرایش محتوا

| محتوا | فایل |
| --- | --- |
| خدمات | `src/lib/data/services.ts` |
| دسته‌بندی خدمات | `src/lib/data/service-categories.ts` |
| پزشکان | `src/lib/data/doctors.ts` |
| نمونه‌های قبل/بعد | `src/lib/data/before-after.ts` |
| مقالات | `src/lib/data/articles.ts` |
| سوالات متداول عمومی | `src/lib/data/faqs.ts` |
| نظرات مراجعه‌کنندگان | `src/lib/data/testimonials.ts` |
| ناوبری (Header/Footer) | `src/lib/data/clinic.ts` |

## دربارهٔ تصاویر «قبل و بعد»

در این نسخهٔ اولیه، به تصاویر واقعی بیماران (با رضایت‌نامه) دسترسی وجود ندارد.
برای نمایش صحیح عملکرد اسلایدر تعاملی، از یک تصویر پایهٔ واحد برای «قبل» و «بعد»
استفاده شده و نسخهٔ «قبل» با یک فیلتر ملایم CSS شبیه‌سازی شده است تا زاویه، نور و
فاصلهٔ دوربین دقیقاً یکسان بماند (به‌جای استفاده از دو تصویر متفاوت که می‌تواند
گمراه‌کننده باشد). پیش از انتشار نهایی سایت، این تصاویر باید با تصاویر واقعی
بیماران کلینیک (با رضایت کامل ایشان) در `public/images` جایگزین شوند.

## اجرای پروژه

```bash
npm install
npm run dev
```

## Build عادی (برای این محیط Sandbox / هر سرور Node.js)

```bash
npm run build
npm run start
```

## Build استاتیک برای GitHub Pages

پروژه به‌گونه‌ای تنظیم شده که با یک متغیر محیطی به حالت Static Export سوییچ می‌کند:

```bash
GITHUB_PAGES_EXPORT=true npm run build
```

خروجی در پوشهٔ `out/` تولید می‌شود که مستقیماً برای GitHub Pages قابل انتشار است.
گردش‌کار `.github/workflows/deploy.yml` این کار را به‌صورت خودکار در هر Push به
شاخهٔ `main` انجام می‌دهد.

- اگر از دامنهٔ اختصاصی (Custom Domain) مانند `mahrukhclinic.com` استفاده می‌کنید،
  فایل `public/CNAME` را با دامنهٔ نهایی خود به‌روز نگه دارید و نیازی به تنظیم
  `NEXT_BASE_PATH` نیست.
- اگر سایت زیر مسیر `username.github.io/repo-name` منتشر می‌شود (بدون دامنهٔ
  اختصاصی)، مقدار `NEXT_BASE_PATH` را در `.github/workflows/deploy.yml` برابر
  `/repo-name` قرار دهید و فایل `public/CNAME` را حذف کنید.

## نکتهٔ فنی دربارهٔ Route مربوط به Health Check

مسیر `src/app/api/health/route.ts` صرفاً برای healthcheck محیط پیش‌نمایش (این
Sandbox توسعه) نگه‌داری شده و در معماری واقعی سایت (GitHub Pages) نقشی ندارد؛
چون سایت به‌طور کامل استاتیک است و هیچ Backend یا Database واقعی ندارد.

## پشته فنی

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (پیکربندی CSS-first در `src/app/globals.css`)
- فونت فارسی: Vazirmatn / فونت لاتین: Manrope (از طریق `next/font/google`)
- بدون کتابخانهٔ انیمیشن یا اسلایدر سنگین — اسلایدر «قبل/بعد» به‌صورت اختصاصی
  و سبک با React + Pointer Events پیاده‌سازی شده است.
