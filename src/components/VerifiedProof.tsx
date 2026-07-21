import Image from "next/image";
import { authorizedPartners, testimonials } from "@/data/proof";

export function VerifiedProof() {
  if (!testimonials.length && !authorizedPartners.length) return null;

  return (
    <section className="bg-[#f4efe7] py-20" aria-labelledby="verified-proof-title">
      <div className="container-site">
        <p className="kicker mb-5">Verified experience</p>
        <h2 id="verified-proof-title" className="section-title max-w-3xl">
          Trust, shown with permission.
        </h2>

        {!!testimonials.length && (
          <div className="mt-12 grid gap-px bg-[#d8d2c8] md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={`${item.name}-${item.journey}`} className="m-0 bg-[#fbfaf7] p-8">
                <blockquote className="m-0 text-base leading-8 text-[#041b36]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 text-xs text-[#596a79]">
                  <strong className="text-[#041b36]">{item.name}</strong>
                  <span className="mx-2">—</span>
                  {item.journey}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {!!authorizedPartners.length && (
          <div className="mt-12 grid gap-8 border-y border-[#d8d2c8] py-8 sm:grid-cols-2 lg:grid-cols-4">
            {authorizedPartners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-4">
                <Image src={partner.logo} alt="" width={56} height={40} className="object-contain" />
                <div>
                  <p className="m-0 text-sm font-semibold">{partner.name}</p>
                  <p className="m-0 mt-1 text-xs text-[#596a79]">{partner.relationship}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
