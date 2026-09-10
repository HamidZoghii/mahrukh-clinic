import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { clinicInfo, footerServiceLinks, mainNav } from "@/lib/data/clinic";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary-deep text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            {clinicInfo.descriptionShort}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {clinicInfo.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-en text-xs uppercase tracking-[0.2em] text-white/50">صفحات</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/appointment" className="transition-colors hover:text-accent">
                رزرو نوبت
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-en text-xs uppercase tracking-[0.2em] text-white/50">خدمات</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-en text-xs uppercase tracking-[0.2em] text-white/50">ارتباط با ما</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{clinicInfo.addressLine}</li>
            <li dir="ltr" className="text-right">
              <a href={`tel:${clinicInfo.phone}`} className="transition-colors hover:text-accent">
                {clinicInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinicInfo.email}`} className="transition-colors hover:text-accent">
                {clinicInfo.email}
              </a>
            </li>
            <li className="pt-2 text-white/50">ساعات کاری</li>
            {clinicInfo.workingHours.map((wh) => (
              <li key={wh.day} className="flex justify-between gap-4 text-white/70">
                <span>{wh.day}</span>
                <span>{wh.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>
            © {year} {clinicInfo.brandNameFa} ({clinicInfo.brandNameEn}). تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="transition-colors hover:text-accent">
              دربارهٔ ما
            </Link>
            <Link href="/contact" className="transition-colors hover:text-accent">
              حریم خصوصی و قوانین
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
