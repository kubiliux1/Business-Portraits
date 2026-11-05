"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import HoverColorImage from "@/components/HoverColorImage";

type Item = { src: string; colorSrc: string; alt: string };

export default function Gallery({ photos }: { photos: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);
  const n = photos.length;

  const show = useCallback((i: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setOpen(i);
  }, []);
  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus?.();
  }, []);
  const step = useCallback(
    (d: number) => {
        setOpen((i) => (i === null ? i : (i + d + n) % n));
    },
    [n]
  );

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  // Preload neighbours so arrows feel instant.
  useEffect(() => {
    if (open === null) return;
    [1, -1].forEach((d) => {
      const p = photos[(open + d + n) % n];
      [p.colorSrc].forEach((u) => {
        const im = new window.Image();
        im.src = `/_next/image?url=${encodeURIComponent(u)}&w=1920&q=75`;
      });
    });
  }, [open, photos, n]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100">
            <HoverColorImage
              bwSrc={p.src}
              colorSrc={p.colorSrc}
              alt={p.alt}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              imageClassName="object-cover transition duration-700 group-hover:scale-[1.03]"
              onOpen={() => show(i)}
            />
          </li>
        ))}
      </ul>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span aria-hidden>&times;</span>
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
          >
            <span aria-hidden>&#8249;</span>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
          >
            <span aria-hidden>&#8250;</span>
          </button>

          <div
            className="relative aspect-[3/4] w-[min(88vw,calc(78vh*3/4))] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image key={current.colorSrc} src={current.colorSrc} alt={current.alt} fill sizes="90vw" quality={85} className="object-cover" priority />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-neutral-400" aria-live="polite">
            {open + 1} / {n}
          </p>
        </div>
      )}
    </>
  );
}
