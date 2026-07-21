import Link from "next/link";
import { MoonStars } from "@phosphor-icons/react/dist/ssr";
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Moon Glow home"
    >
      <MoonStars size={38} weight="duotone" className="text-[#d6a32d]" />
      <span>
        <b
          className={`block text-[15px] tracking-[.13em] ${dark ? "text-[#041b36]" : "text-white"}`}
        >
          MOON GLOW
        </b>
        <span className="block text-[8px] font-bold tracking-[.28em] text-[#b88618]">
          TRAVEL AGENCY
        </span>
      </span>
    </Link>
  );
}
