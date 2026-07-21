"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
type GalleryImage = { src: string; alt: string; label: string };
export function AutoGallery({
  images,
  className = "",
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || images.length < 2) return;
    const interval = window.setInterval(
      () => setActive((value) => (value + 1) % images.length),
      4000,
    );
    return () => window.clearInterval(interval);
  }, [images.length, paused]);
  return (
    <div
      className={`gallery-frame relative overflow-hidden border border-[#d6a32d] bg-[#061b36] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label="Featured travel destinations"
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${active === index ? "z-10 opacity-100" : "z-0 opacity-0"}`}
        >
          <Image
            fill
            priority={index === 0}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={image.src}
            alt={image.alt}
            className={`object-cover ${active === index ? "gallery-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="absolute left-5 top-5 z-30 border border-white/40 bg-[#061b36]/75 px-3 py-2 text-[9px] font-bold tracking-[.18em] text-white backdrop-blur-sm">
        <span className="text-[#d6a32d]">0{active + 1}</span>
        <span className="mx-2 text-white/35">/</span>0{images.length}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between bg-gradient-to-t from-[#061b36]/90 via-[#061b36]/35 to-transparent p-6 pt-28 text-white">
        <div aria-live="polite">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#d6a32d]">
            Curated destination
          </p>
          <p className="m-0 flex items-center gap-3 text-base font-semibold tracking-[-.02em]">
            {images[active].label}
            <ArrowUpRight size={17} />
          </p>
        </div>
        <div className="flex gap-2" aria-label="Choose gallery image">
          {images.map((image, index) => (
            <button
              key={image.label}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1 transition-all duration-500 ${active === index ? "w-8 bg-[#d6a32d]" : "w-3 bg-white/55"}`}
              aria-label={`Show ${image.label}`}
            />
          ))}
        </div>
      </div>
      {!paused && (
        <div className="absolute inset-x-0 bottom-0 z-40 h-[2px] bg-white/20">
          <span
            key={active}
            className="gallery-progress block h-full bg-[#d6a32d]"
          />
        </div>
      )}
    </div>
  );
}
