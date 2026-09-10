"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "قبل",
  afterLabel = "بعد",
  alt,
  className = "",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className={`select-none ${className}`}>
      <div
        ref={containerRef}
        className="relative aspect-[4/5] w-full touch-none overflow-hidden rounded-[28px] bg-ink/5 sm:aspect-[3/4]"
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        {/* After image — لایهٔ زیرین (نتیجه) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${alt} — تصویر بعد از درمان`}
            fill
            sizes="(min-width: 768px) 480px, 92vw"
            className="object-cover"
            priority={false}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-primary/90 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>

        {/* Before image — لایهٔ رویی که با کلیپ‌پث برش می‌خورد */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={beforeImage}
              alt={`${alt} — تصویر قبل از درمان`}
              fill
              sizes="(min-width: 768px) 480px, 92vw"
              className="object-cover [filter:contrast(0.86)_brightness(0.94)_saturate(0.72)]"
              priority={false}
            />
          </div>
          <span className="absolute bottom-4 right-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>

        {/* خط جداکننده و دستگیره */}
        <div
          className="absolute inset-y-0 z-10 w-[2px] bg-white/90"
          style={{ right: `${position}%`, transform: "translateX(50%)" }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="جابه‌جایی خط مقایسهٔ قبل و بعد"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-orientation="horizontal"
            onPointerDown={onPointerDown}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 cursor-ew-resize items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_8px_24px_rgba(13,47,64,0.25)] transition-transform hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8 7l-5 5 5 5M16 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
