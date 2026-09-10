import type { NextConfig } from "next";

// این پروژه به‌صورت پیش‌فرض به شکل یک اپلیکیشن Next.js عادی build می‌شود تا در
// محیط پیش‌نمایش (sandbox) با سرور و healthcheck اجرا شود.
// برای انتشار روی GitHub Pages (Static Export) کافی است هنگام build متغیر
// GITHUB_PAGES_EXPORT=true را ست کنید؛ گردش‌کار GitHub Actions همراه پروژه
// (.github/workflows/deploy.yml) این کار را به‌صورت خودکار انجام می‌دهد.
const isStaticExport = process.env.GITHUB_PAGES_EXPORT === "true";
const repoBasePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: repoBasePath || undefined,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
