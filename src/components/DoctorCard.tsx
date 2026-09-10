import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[28px] border border-ink/8 bg-white">
      <Link href={`/doctors/${doctor.slug}`} className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={doctor.image}
          alt={`${doctor.name} — ${doctor.title}`}
          fill
          sizes="(min-width: 768px) 320px, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-lg font-semibold text-ink">{doctor.name}</h3>
          <p className="mt-1 text-sm text-accent">{doctor.title}</p>
        </div>
        <p className="text-sm leading-7 text-muted">{doctor.shortBio}</p>
        <div className="mt-auto flex items-center gap-4 pt-3">
          <Link
            href={`/doctors/${doctor.slug}`}
            className="text-sm font-medium text-primary transition-colors hover:text-primary-deep"
          >
            مشاهدهٔ پروفایل کامل
          </Link>
          <Link
            href="/appointment"
            className="text-sm font-medium text-ink/60 transition-colors hover:text-primary"
          >
            رزرو مشاوره
          </Link>
        </div>
      </div>
    </div>
  );
}
