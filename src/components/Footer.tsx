import Link from "next/link";
import { Logo } from "./Logo";
import { contact } from "@/data/site";
export function Footer() {
  return (
    <footer className="bg-[#021326] text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
            Visa assistance, flights, stays, pilgrimage, medical travel and
            personal support for journeys worldwide.
          </p>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#d6a32d]">
            Explore
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            <Link href="/services">Services</Link>
            <Link href="/visa-assistance">Egypt visa & clearance</Link>
            <Link href="/travel-packages">Travel & packages</Link>
            <Link href="/contact">Medical travel inquiry</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#d6a32d]">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.whatsapp}>WhatsApp: {contact.whatsappNumber}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`mailto:${contact.advisorEmail}`}>
              {contact.advisorEmail}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[10px] tracking-wide text-white/35">
        © 2026 Moon Glow Travel Agency
      </div>
    </footer>
  );
}
