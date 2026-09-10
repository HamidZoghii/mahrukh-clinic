// این وب‌سایت (کلینیک زیبایی ماه‌رخ) کاملاً مبتنی بر محتوای استاتیک است و به
// پایگاه‌دادهٔ Backend نیازی ندارد (مطابق با محدودیت فنی پروژه برای انتشار
// نهایی روی GitHub Pages). این Route صرفاً برای healthcheck محیط پیش‌نمایش
// (sandbox) نگه داشته شده است.
export const dynamic = "force-static";

export async function GET() {
  return Response.json({ ok: true, service: "mahrukh-clinic-website" });
}
