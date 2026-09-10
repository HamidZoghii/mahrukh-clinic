import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNav } from "@/lib/data/clinic";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-soft/85 backdrop-blur-md">
      <Container className="flex h-[76px] items-center justify-between">
        <Logo />

        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="جستجو"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/80 transition-colors hover:border-primary/40 hover:text-primary md:flex"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            href="/appointment"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-deep md:inline-flex"
          >
            رزرو نوبت
          </Link>
          <MobileNav items={mainNav} />
        </div>
      </Container>
    </header>
  );
}
