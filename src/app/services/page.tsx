import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  IdentificationCard,
  AirplaneTilt,
  Bed,
  MapTrifold,
  Mosque,
  Heart,
  ArrowRight,
  Car,
  ShieldCheck,
  Translate,
} from "@phosphor-icons/react/dist/ssr";

const chapters = [
  {
    number: "01",
    eyebrow: "Before you travel",
    title: "Plan & clear",
    intro:
      "The practical details, handled with precision—so your journey begins with clarity, not paperwork.",
    image: "/images/services/plan-and-clear.png",
    alt: "Travel concierge organizing passport and journey documents",
    services: [
      {
        icon: IdentificationCard,
        title: "Visa & documentation",
        text: "Application guidance, Egypt facilitation, security-clearance assistance and document preparation.",
      },
      {
        icon: AirplaneTilt,
        title: "Flights",
        text: "Domestic and international routes selected around your timing, comfort and priorities.",
      },
      {
        icon: Translate,
        title: "Arabic–English translation",
        text: "Translation coordination for travel, visa and medical-support documents.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "From arrival to return",
    title: "Stay & move",
    intro:
      "A considered rhythm for the entire trip, with each stay, transfer and experience working naturally together.",
    image: "/images/services/stay-and-move.png",
    alt: "Traveler arriving at a refined coastal hotel with a private transfer",
    services: [
      {
        icon: Bed,
        title: "Hotels & stays",
        text: "Thoughtful accommodation recommendations chosen for comfort, location and value.",
      },
      {
        icon: MapTrifold,
        title: "Holidays",
        text: "Domestic and international escapes shaped around your interests, pace and occasion.",
      },
      {
        icon: Car,
        title: "Airport transfers",
        text: "Reliable pickup and drop-off coordination for smooth arrivals and departures.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "For journeys that matter",
    title: "Travel with care",
    intro:
      "Sensitive arrangements deserve calm, responsive support and an experienced person beside you at every step.",
    image: "/images/services/travel-with-care.png",
    alt: "Travel concierge personally assisting a couple in an airport lounge",
    services: [
      {
        icon: ShieldCheck,
        title: "Travel insurance",
        text: "Guidance toward suitable travel-protection options for greater peace of mind.",
      },
      {
        icon: Mosque,
        title: "Hajj & Umrah",
        text: "Meaningful pilgrimage arrangements handled with respect and attentive support.",
      },
      {
        icon: Heart,
        title: "Medical travel",
        text: "Appointments, documents, transport and treatment-travel coordination.",
      },
    ],
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every detail, thoughtfully connected."
        text="One attentive team for documentation, journeys, special arrangements and support that continues while you travel."
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=88"
      />

      <section className="bg-[#f7f3ec] py-20 lg:py-28">
        <div className="container-site grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <p className="kicker" data-reveal data-reveal-style="slide-left">
            A complete travel atelier
          </p>
          <div data-reveal data-reveal-delay="1" data-reveal-style="fade">
            <h2 className="section-title max-w-3xl">
              Everything you need.
              <br />
              One relationship.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#687480]">
              Instead of coordinating separate providers, you have one team
              connecting every moving part—before, during and after your trip.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] pb-24 lg:pb-32">
        <div className="container-site">
          {chapters.map((chapter, chapterIndex) => (
            <article
              key={chapter.title}
              className="grid border-t border-[#d8d2c8] py-10 last:border-b lg:grid-cols-12 lg:gap-14 lg:py-16"
            >
              <div
                className={`relative min-h-[390px] overflow-hidden lg:col-span-6 lg:min-h-[650px] ${
                  chapterIndex % 2 ? "lg:order-2" : ""
                }`}
                data-reveal={chapterIndex === 0 ? undefined : ""}
                data-reveal-style={
                  chapterIndex === 0
                    ? undefined
                    : chapterIndex === 1
                      ? "scale"
                      : "scale"
                }
              >
                <Image
                  fill
                  src={chapter.image}
                  alt={chapter.alt}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={chapterIndex === 0}
                  className={`object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.035] ${
                    chapterIndex === 0 ? "service-lead-image" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041b36]/40 via-transparent to-black/5" />
                <span className="absolute left-6 top-6 border border-white/45 bg-[#041b36]/20 px-3 py-2 text-[10px] font-bold tracking-[.22em] text-white backdrop-blur-sm">
                  {chapter.number}
                </span>
              </div>

              <div
                className={`flex flex-col justify-center py-10 lg:col-span-6 lg:py-6 ${
                  chapterIndex % 2 ? "lg:order-1" : ""
                }`}
                data-reveal
                data-reveal-delay="1"
                data-reveal-style={
                  chapterIndex === 0
                    ? "slide-right"
                    : chapterIndex === 1
                      ? "slide-left"
                      : "slide-right"
                }
              >
                <p className="kicker">{chapter.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] text-[#041b36] lg:text-5xl">
                  {chapter.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#687480]">
                  {chapter.intro}
                </p>

                <div className="mt-10 border-t border-[#d8d2c8]">
                  {chapter.services.map(({ icon: Icon, title, text }) => (
                    <Link
                      href="/contact"
                      key={title}
                      className="group grid grid-cols-[42px_1fr_auto] gap-4 border-b border-[#d8d2c8] py-6"
                    >
                      <Icon
                        size={28}
                        weight="light"
                        className="mt-1 text-[#b88618] transition-transform duration-500 group-hover:-translate-y-1"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-[#041b36]">
                          {title}
                        </h3>
                        <p className="mt-2 max-w-md text-xs leading-6 text-[#687480]">
                          {text}
                        </p>
                      </div>
                      <ArrowRight
                        size={17}
                        className="mt-2 text-[#041b36] transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#041b36] py-20 text-white lg:py-24">
        <div className="container-site flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div data-reveal data-reveal-style="fade">
            <p className="kicker mb-5">Your journey, considered</p>
            <h2 className="section-title max-w-2xl text-white">
              Not sure which services you need? That is where we begin.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn shrink-0 bg-[#d6a32d] text-[#041b36]"
            data-reveal
            data-reveal-delay="1"
            data-reveal-style="slide-right"
          >
            Speak with a concierge <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
