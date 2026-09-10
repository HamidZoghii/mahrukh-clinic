// ساختار داده‌های اصلی وب‌سایت کلینیک زیبایی ماه‌رخ
// این فایل‌ها به‌صورت عمدی از UI جدا نگه داشته شده‌اند تا در آینده به‌سادگی
// قابل ویرایش یا اتصال به یک CMS واقعی باشند.

export type SEOInfo = {
  title: string;
  description: string;
  keywords?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  shortDescription: string;
};

export type Service = {
  slug: string;
  title: string;
  englishTitle?: string;
  category: string; // ServiceCategory slug
  shortDescription: string;
  description: string[];
  heroImage: string;
  cardImage: string;
  suitableFor: string[];
  benefits: string[];
  process: string[];
  duration: string;
  recovery: string;
  precautions: string[];
  contraindications: string[];
  faq: FAQItem[];
  beforeAfterIds?: string[];
  relatedDoctorSlugs?: string[];
  seo: SEOInfo;
};

export type Doctor = {
  slug: string;
  name: string;
  englishName?: string;
  title: string;
  specialty: string;
  image: string;
  shortBio: string;
  bio: string[];
  credentials: string[];
  focusAreas: string[];
  approach: string;
  serviceSlugs: string[];
  seo: SEOInfo;
};

export type BeforeAfterCase = {
  id: string;
  treatment: string;
  serviceSlug?: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  isSingleImageDemo?: boolean;
  description: string;
  disclaimer: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
  coverImage: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  faq?: FAQItem[];
  seo: SEOInfo;
};

export type Testimonial = {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ClinicInfo = {
  brandNameFa: string;
  brandNameEn: string;
  domain: string;
  descriptionShort: string;
  city: string;
  addressLine: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  workingHours: { day: string; hours: string }[];
  socials: { label: string; href: string }[];
  mapEmbedUrl?: string;
};
