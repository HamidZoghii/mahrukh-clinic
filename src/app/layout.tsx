import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { clinicInfo } from "@/lib/data/clinic";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = `https://${clinicInfo.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinicInfo.brandNameFa} | ${clinicInfo.brandNameEn}`,
    template: `%s | ${clinicInfo.brandNameFa}`,
  },
  description: clinicInfo.descriptionShort,
  keywords: [
    "کلینیک زیبایی",
    "بهترین کلینیک زیبایی",
    "تزریق بوتاکس",
    "تزریق فیلر",
    "جوانسازی پوست",
    "کانتورینگ صورت",
    "زاویه سازی صورت",
    "لیفت صورت بدون جراحی",
    "درمان لک",
    "درمان جای جوش",
    "مزوتراپی",
    "متخصص پوست و زیبایی",
    "کلینیک زیبایی ماه‌رخ",
    "Mahrukh Aesthetic Clinic",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: clinicInfo.brandNameFa,
    title: `${clinicInfo.brandNameFa} | ${clinicInfo.brandNameEn}`,
    description: clinicInfo.descriptionShort,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicInfo.brandNameFa} | ${clinicInfo.brandNameEn}`,
    description: clinicInfo.descriptionShort,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinicInfo.brandNameFa,
    alternateName: clinicInfo.brandNameEn,
    url: siteUrl,
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.addressLine,
      addressLocality: clinicInfo.city,
      addressCountry: "IR",
    },
    medicalSpecialty: "Dermatology",
    openingHoursSpecification: clinicInfo.workingHours.map((wh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: wh.day,
      description: wh.hours,
    })),
    sameAs: clinicInfo.socials.map((s) => s.href),
  };

  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-soft font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
        >
          رفتن به محتوای اصلی
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
