"use client";
import Link from "next/link";
import { List } from "@phosphor-icons/react/dist/csr/List";
import { X } from "@phosphor-icons/react/dist/csr/X";
import { WhatsappLogo } from "@phosphor-icons/react/dist/csr/WhatsappLogo";
import { Phone } from "@phosphor-icons/react/dist/csr/Phone";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { contact } from "@/data/site";
const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Visa support", "/visa-assistance"],
  ["Journeys", "/travel-packages"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-[#041b36] text-white md:block">
        <div className="container-site flex h-9 items-center justify-between text-[9px] font-semibold uppercase tracking-[.14em]">
          <p className="m-0 text-white/50">
            Worldwide visa, ticketing & travel assistance
          </p>
          <div className="flex items-center gap-6">
            <a
              className="flex items-center gap-2 text-white/65 hover:text-white"
              href={contact.phoneHref}
            >
              <Phone size={12} />
              {contact.phone}
            </a>
            <a
              className="flex items-center gap-2 text-white/65 hover:text-white"
              href={`mailto:${contact.email}`}
            >
              <EnvelopeSimple size={12} />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="nav-luxury border-b border-[#e1dbd0] bg-[#fbfaf7]/95 backdrop-blur-xl">
        <div className="container-site grid h-[86px] grid-cols-[1fr_auto] items-center lg:grid-cols-[auto_1fr_auto]">
          <Logo dark />
          <nav className="mx-auto hidden h-full items-center lg:flex">
            {links.map(([name, href]) => {
              const active =
                href === "/" ? path === href : path.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-premium relative flex h-full items-center px-4 text-[11px] font-semibold ${active ? "text-[#041b36]" : "text-[#65717c]"}`}
                >
                  <span>{name}</span>
                  {active && (
                    <span className="absolute inset-x-4 bottom-0 h-[2px] bg-[#d6a32d]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={contact.whatsapp}
              className="grid h-11 w-11 place-items-center border border-[#d8d1c5] text-[#041b36] transition-colors hover:border-[#d6a32d] hover:text-[#b88618]"
              aria-label="WhatsApp Moon Glow"
            >
              <WhatsappLogo size={19} />
            </a>
            <Link
              href="/contact"
              className="group flex h-11 items-center gap-3 bg-[#d6a32d] px-5 text-[10px] font-bold uppercase tracking-[.11em] text-[#041b36]"
            >
              Plan my journey{" "}
              <ArrowUpRight
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={16}
              />
            </Link>
          </div>
          <button
            className="justify-self-end text-[#041b36] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={25} /> : <List size={27} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-b border-[#ddd7cc] bg-[#fbfaf7] px-5 pb-6 shadow-xl lg:hidden">
          <nav>
            {links.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-[#e7e1d7] py-4 text-sm font-semibold ${path === href ? "text-[#b88618]" : "text-[#041b36]"}`}
              >
                {name}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={contact.whatsapp}
              className="btn border border-[#d6a32d] text-[#041b36]"
            >
              <WhatsappLogo size={18} />
              WhatsApp
            </a>
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="btn bg-[#041b36] text-white"
            >
              Plan journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
