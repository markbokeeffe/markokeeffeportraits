"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type FrameSlot = {
  id: string;
  left: number;   // %
  top: number;    // %
  width: number;  // %
  height: number; // %
  src: string;
  alt: string;
  rotateDeg?: number;
};

const WALL = {
  src: "/wall.webp",
  width: 2400,  // set to your wall image intrinsic size
  height: 1600, // set to your wall image intrinsic size
};

/**
 * IMPORTANT:
 * Replace left/top/width/height with the real frame openings for YOUR wall image.
 * These are placeholder positions until you paste in your measured values.
 */
const SLOTS: FrameSlot[] = [
  {
    id: "gandhi",
    left: 36.2, top: 19.5, width: 27.0, height: 33.0,
    src: "/portraits/mahatmaGandhi_2014.jpg", // if you also want to use this one
    alt: "Pencil portrait",
  },

  // Your uploaded filenames
  {
    id: "yulia",
    left: 9.5, top: 22.0, width: 18.5, height: 26.0,
    src: "/portraits/yulia.JPG",
    alt: "Pencil portrait",
    rotateDeg: -0.4,
  },
  {
    id: "bbking",
    left: 70.5, top: 18.2, width: 18.2, height: 26.8,
    src: "/portraits/bb.jpg",
    alt: "Pencil portrait",
    rotateDeg: 0.3,
  },
  {
    id: "billie",
    left: 12.0, top: 56.0, width: 16.2, height: 22.0,
    src: "/portraits/bHoliday.JPG",
    alt: "Pencil portrait",
  },
  {
    id: "grace",
    left: 31.0, top: 58.0, width: 15.5, height: 20.5,
    src: "/portraits/grace.jpg",
    alt: "Pencil portrait",
    rotateDeg: 0.2,
  },
  {
    id: "hitchcock",
    left: 49.2, top: 57.2, width: 15.5, height: 20.5,
    src: "/portraits/hitchcock.jpg",
    alt: "Pencil portrait",
    rotateDeg: -0.2,
  },
  {
    id: "marlene",
    left: 68.0, top: 55.5, width: 16.0, height: 22.0,
    src: "/portraits/marlene.jpg",
    alt: "Pencil portrait",
  },
  {
    id: "mary",
    left: 78.2, top: 16.0, width: 16.0, height: 30.5,
    src: "/portraits/mary_robinson_sml.jpg",
    alt: "Pencil portrait",
  },
  {
    id: "hillery",
    left: 24.0, top: 18.0, width: 18.0, height: 24.0,
    src: "/portraits/hillery.JPG",
    alt: "Pencil portrait",
  },
  {
    id: "wby2009",
    left: 58.0, top: 20.0, width: 16.0, height: 22.0,
    src: "/portraits/wby2009.jpg",
    alt: "Pencil portrait",
  },
  {
    id: "nana",
    left: 82.0, top: 58.0, width: 14.0, height: 18.0,
    src: "/portraits/nana.jpg",
    alt: "Pencil portrait",
  },
  {
    id: "c7700",
    left: 44.0, top: 34.0, width: 20.0, height: 26.0,
    src: "/portraits/c7700c5c-ce1f-4f75-8398-c9679ca9787e.JPG",
    alt: "Pencil portrait",
  },
];

export default function GalleryWallHero() {
  const [active, setActive] = useState<FrameSlot | null>(null);

  // Only 1–2 portraits should be priority (above the fold)
  const priorityIds = useMemo(() => new Set<string>(["gandhi"]), []);

  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Hand-drawn pencil portraits
          </h1>
          <p className="mt-2 max-w-[60ch] text-sm text-neutral-600 md:text-base">
            Commission a museum-grade graphite portrait from your photos.
          </p>
        </div>

        <a
          href="#commission"
          className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
        >
          Commission a portrait
        </a>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm">
        <Image
          src={WALL.src}
          alt="Gallery wall"
          width={WALL.width}
          height={WALL.height}
          priority
          className="h-auto w-full select-none"
        />

        {SLOTS.map((slot) => (
          <button
            key={slot.id}
            type="button"
            onClick={() => setActive(slot)}
            className="group absolute"
            style={{
              left: `${slot.left}%`,
              top: `${slot.top}%`,
              width: `${slot.width}%`,
              height: `${slot.height}%`,
            }}
            aria-label={`Open ${slot.alt}`}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[2px]"
              style={{
                transform: `rotate(${slot.rotateDeg ?? 0}deg)`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                sizes="(max-width: 768px) 35vw, (max-width: 1200px) 20vw, 320px"
                priority={priorityIds.has(slot.id)}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* subtle mat edge + depth */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),inset_0_10px_25px_rgba(0,0,0,0.08)]" />

              {/* glass highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0)_45%)] mix-blend-screen" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-full bg-neutral-100 px-3 py-1 text-sm hover:bg-neutral-200"
            >
              Close
            </button>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-50">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 95vw, 900px"
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="text-sm text-neutral-700">{active.alt}</div>
              <a
                href="#commission"
                className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Commission similar
              </a>
            </div>
          </div>
        </div>
      )}

      <div id="commission" className="mt-14 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-xl font-semibold">Commission</h2>
        <p className="mt-2 text-sm text-neutral-600">Drop your commission form here.</p>
      </div>
    </section>
  );
}