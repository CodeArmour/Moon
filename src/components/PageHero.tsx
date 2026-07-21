import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="bg-[#f4efe7]">
      <div className="grid min-h-[570px] lg:grid-cols-[.82fr_1.18fr]">
        <div className="flex items-center">
          <div
            className="w-full px-6 py-20 lg:ml-auto lg:max-w-[560px] lg:px-12"
            data-reveal
          >
            <p className="kicker mb-6">{eyebrow}</p>
            <h1 className="section-title max-w-xl">{title}</h1>
            <div className="my-8 h-px w-12 bg-[#d6a32d]" />
            <p className="max-w-lg text-base leading-8 text-[#536474]">
              {text}
            </p>
            <Link href="/contact" className="btn btn-primary mt-9">
              Start a conversation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 59vw"
            className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
}
