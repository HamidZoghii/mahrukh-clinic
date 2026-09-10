"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data/services";
import { clinicInfo } from "@/lib/data/clinic";

const preferredTimes = [
  "صبح (۱۰ تا ۱۳)",
  "بعدازظهر (۱۳ تا ۱۷)",
  "عصر (۱۷ تا ۲۰)",
  "هر زمانی مناسب است",
];

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState(preferredTimes[0]);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) nextErrors.name = "لطفاً نام و نام‌خانوادگی خود را وارد کنید.";
    if (!/^0?9\d{9}$/.test(phone.replace(/\s|-/g, ""))) {
      nextErrors.phone = "شمارهٔ موبایل معتبر وارد کنید (مثلاً ۰۹۱۲xxxxxxx).";
    }
    if (!service) nextErrors.service = "لطفاً خدمت موردنظر را انتخاب کنید.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function buildMessage() {
    const serviceTitle = services.find((s) => s.slug === service)?.title ?? service;
    return [
      `درخواست مشاوره / رزرو نوبت — ${clinicInfo.brandNameFa}`,
      `نام: ${name}`,
      `شماره تماس: ${phone}`,
      `خدمت موردنظر: ${serviceTitle}`,
      `زمان ترجیحی: ${time}`,
      notes ? `توضیحات: ${notes}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  const message = buildMessage();
  const whatsappHref = `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(message)}`;

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/15 bg-warm/70 p-8 text-center sm:p-12">
        <h2 className="text-xl font-semibold text-ink">درخواست شما آماده ارسال است</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
          برای تکمیل نهایی، درخواست خود را از طریق واتس‌اپ برای تیم پذیرش ماه‌رخ ارسال کنید یا مستقیم با
          کلینیک تماس بگیرید. همکاران ما در سریع‌ترین زمان ممکن پاسخ‌گو خواهند بود.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-deep"
          >
            ارسال از طریق واتس‌اپ
          </a>
          <a
            href={`tel:${clinicInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            تماس مستقیم با کلینیک
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-muted underline underline-offset-4"
        >
          ویرایش اطلاعات فرم
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-3xl border border-ink/8 bg-white p-6 sm:p-9">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            نام و نام‌خانوادگی
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
            شماره تماس
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            dir="ltr"
            placeholder="09xxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-soft px-4 py-3 text-right text-sm text-ink outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
            خدمت موردنظر
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">انتخاب کنید…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="نامشخص - نیاز به مشاوره">هنوز مطمئن نیستم / نیاز به مشاوره دارم</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-xs text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-medium text-ink">
            زمان ترجیحی تماس / مراجعه
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
          >
            {preferredTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-ink">
          توضیحات تکمیلی (اختیاری)
        </label>
        <textarea
          id="notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="در صورت تمایل، توضیح مختصری دربارهٔ هدف یا سوال خود بنویسید."
          className="w-full resize-none rounded-xl border border-ink/15 bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-deep sm:w-auto"
      >
        درخواست مشاوره
      </button>
      <p className="text-xs leading-6 text-muted">
        با ارسال این فرم، خلاصه‌ای از درخواست شما آماده می‌شود تا از طریق واتس‌اپ یا تماس مستقیم برای تیم
        پذیرش کلینیک ارسال کنید. اطلاعات شما تنها برای هماهنگی نوبت استفاده می‌شود.
      </p>
    </form>
  );
}
