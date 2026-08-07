"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { WhatsappLogo } from "@phosphor-icons/react/dist/csr/WhatsappLogo";
import { contact } from "@/data/site";
const slides = [
  {
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2200&q=92",
    alt: "Santorini coast at sunset",
    label: "Santorini · Greece",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=92",
    alt: "Mountain destination",
    label: "Dolomites · Italy",
  },
  {
    src: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=2200&q=92",
    alt: "Pyramids of Giza",
    label: "Giza · Egypt",
  },
];
export function HeroRibbon() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      4800,
    );
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#f7f2ea]">
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            fill
            priority={i === 0}
            sizes="100vw"
            src={s.src}
            alt={s.alt}
            className={`object-cover object-center transition-opacity duration-1000 ${i === active ? "hero-full-zoom opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="atelier-hero-wash absolute inset-0" />
      <div className="container-site relative z-10 flex min-h-[700px] items-center py-20">
        <div className="hero-copy max-w-[610px]">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[.25em] text-[#b88618]">
            Concierge atelier
          </p>
          <h1 className="text-[clamp(3.7rem,6.5vw,7rem)] font-medium leading-[.91] tracking-[-.065em] text-[#041b36]">
            Journeys,
            <br />
            personally
            <br />
            composed<span className="text-[#d6a32d]">.</span>
          </h1>
          <div className="my-8 h-px w-12 bg-[#d6a32d]" />
          <p className="max-w-md text-[15px] leading-8 text-[#34485b]">
            Bespoke travel design with attentive support for leisure, family,
            business, pilgrimage and medical journeys.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={contact.whatsapp} className="btn bg-[#041b36] text-white">
              <WhatsappLogo size={18} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn border border-[#9a8d7b] text-[#041b36]"
            >
              Send a short inquiry <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-6 bottom-7 flex items-center justify-between text-[10px] font-bold tracking-[.16em] text-[#041b36] lg:inset-x-0 lg:mx-auto lg:w-[min(1240px,calc(100%-48px))]">
          <div className="flex items-center gap-4">
            <span>0{active + 1}</span>
            <div className="h-px w-32 bg-[#041b36]/25">
              <span
                key={active}
                className="hero-full-progress block h-px bg-[#d6a32d]"
              />
            </div>
            <span>0{slides.length}</span>
          </div>
          <span className="hidden md:block">{slides[active].label}</span>
        </div>
      </div>
    </section>
  );
}
