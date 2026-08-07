import Image from "next/image";
import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`relative flex h-[68px] w-[118px] shrink-0 items-center justify-center overflow-hidden sm:w-[132px] ${
        dark
          ? ""
          : "border border-white/10 bg-[#fbfaf7] shadow-[0_12px_32px_rgba(0,0,0,.16)]"
      }`}
      aria-label="Moon Glow home"
    >
      <Image
        src="/flightlogo.png"
        alt="Moon Glow Travel Agent"
        width={1536}
        height={1024}
        priority
        sizes="(min-width: 640px) 132px, 118px"
        className="h-auto w-[176px] max-w-none sm:w-[196px]"
      />
    </Link>
  );
}
