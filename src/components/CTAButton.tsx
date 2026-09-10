import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-deep border border-primary hover:border-primary-deep",
  secondary:
    "bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary/5",
  ghost: "bg-white/10 text-white border border-white/40 hover:bg-white/20 backdrop-blur-sm",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-out ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon ?? (
        <svg
          aria-hidden="true"
          className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5v14M12 19l-6-6M12 19l6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
