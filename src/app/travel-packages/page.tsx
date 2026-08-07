import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AirplaneTilt } from "@phosphor-icons/react/dist/ssr/AirplaneTilt";
import { Bed } from "@phosphor-icons/react/dist/ssr/Bed";
import { Car } from "@phosphor-icons/react/dist/ssr/Car";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Ticket } from "@phosphor-icons/react/dist/ssr/Ticket";

const journeys = [
  {
    number: "01",
    place: "Egypt",
    title: "Egypt, prepared from the first document.",
    text: "A connected journey combining entry guidance with thoughtful flights, stays and arrivals in Cairo and beyond.",
    image: "/images/destinations/egypt-editorial.png",
    alt: "Traveler overlooking the Pyramids of Giza at sunrise",
    details: ["Entry guidance", "Flights & stays", "Private transfers"],
  },
  {
    number: "02",
    place: "Saudi Arabia",
    title: "Pilgrimage arranged with dignity and care.",
    text: "Hajj and Umrah planning supported by clear communication, coordinated travel details and a human point of contact.",
    image: "/images/destinations/saudi-alula-editorial.png",
    alt: "Historic sandstone architecture in Saudi Arabia at sunset",
    details: ["Pilgrimage planning", "Flight support", "Stay coordination"],
  },
  {
    number: "03",
    place: "Qatar & Dubai",
    title: "Modern Gulf journeys, composed around you.",
    text: "City stays, stopovers and multi-destination arrangements shaped around your dates, preferences and pace.",
    image: "/images/destinations/qatar-doha-editorial.png",
    alt: "Doha waterfront and skyline at blue hour",
    details: ["Flexible routing", "Curated hotels", "Arrival support"],
  },
] as const;

const essentials = [
  [AirplaneTilt, "Flights", "Routes chosen around timing and comfort."],
  [Bed, "Curated stays", "Hotels selected for location and fit."],
  [Car, "Transfers", "Clear arrival and departure coordination."],
  [ShieldCheck, "Travel protection", "Guidance toward suitable options."],
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Journeys"
        title="Travel designed around the way you live."
        text="From a single flight to a complete special journey, every arrangement is connected, considered and personally supported."
        image="/images/services/stay-and-move.png"
      />

      <section className="bg-[#fbfaf7] py-24 lg:py-28">
        <div className="container-site">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div data-reveal data-reveal-style="slide-left">
              <p className="kicker mb-5">Featured journey directions</p>
              <h2 className="section-title max-w-3xl">
                Begin with a place.
                <br />
                We connect the rest.
              </h2>
            </div>
            <p
              className="max-w-lg text-sm leading-7 text-[#687480]"
              data-reveal
              data-reveal-style="fade"
            >
              These are starting points, not fixed packages. Every route can be
              refined around your dates, travelers and required support.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {journeys.map((journey, index) => (
              <article
                key={journey.title}
                className={`group relative min-h-[560px] overflow-hidden bg-[#041b36] ${
                  index === 0 ? "lg:col-span-6" : "lg:col-span-3"
                }`}
                data-reveal
                data-reveal-delay={String(index)}
                data-reveal-style={index === 0 ? "wipe-right" : "scale"}
              >
                <Image
                  fill
                  src={journey.image}
                  alt={journey.alt}
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.055]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021326]/95 via-[#021326]/25 to-black/10" />
                <span className="absolute left-6 top-6 text-[10px] font-bold tracking-[.2em] text-white/75">
                  {journey.number} / {journey.place}
                </span>
                <div className="absolute inset-x-6 bottom-7 text-white">
                  <h3 className="max-w-lg text-2xl font-semibold tracking-[-.04em]">
                    {journey.title}
                  </h3>
                  <p className="mt-3 max-w-md text-xs leading-6 text-white/65">
                    {journey.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {journey.details.map((detail) => (
                      <span
                        key={detail}
                        className="border border-white/25 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-white/80"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#e1b84f]"
                  >
                    Request this journey <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f8] py-20">
        <div className="container-site">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="kicker mb-4">Included as needed</p>
              <h2 className="text-3xl font-semibold tracking-[-.045em]">
                The practical essentials, connected.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#687480]">
              Select one service or ask Moon Glow to coordinate the complete
              journey from departure to safe return.
            </p>
          </div>
          <div className="grid border-y border-[#ccd7df] md:grid-cols-4">
            {essentials.map(([Icon, title, text]) => (
              <div
                key={title}
                className="border-b border-[#ccd7df] px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <Icon size={28} weight="light" className="text-[#b88618]" />
                <h3 className="mt-8 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#687480]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#041b36] py-20 text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <Ticket size={34} weight="light" className="text-[#d6a32d]" />
            <p className="kicker mt-7">Promotional ticket desk</p>
          </div>
          <div>
            <h2 className="section-title max-w-3xl text-white">
              Ask about Badr & Tarco ticket options.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">
              Moon Glow can check currently featured promotional routes and
              fares for Badr Airlines and Tarco Airlines. Availability and price
              are confirmed when you request a quote.
            </p>
            <Link
              href="/contact"
              className="btn mt-8 bg-[#d6a32d] text-[#041b36]"
            >
              Check ticket options <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
