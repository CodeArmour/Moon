import Image from "next/image";
import Link from "next/link";
import { HeroRibbon } from "@/components/HeroRibbon";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Users } from "@phosphor-icons/react/dist/ssr/Users";
import { Briefcase } from "@phosphor-icons/react/dist/ssr/Briefcase";
import { Compass } from "@phosphor-icons/react/dist/ssr/Compass";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import { Mosque } from "@phosphor-icons/react/dist/ssr/Mosque";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { Headset } from "@phosphor-icons/react/dist/ssr/Headset";
import { GlobeHemisphereWest } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereWest";
import { LockKey } from "@phosphor-icons/react/dist/ssr/LockKey";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { IdentificationCard } from "@phosphor-icons/react/dist/ssr/IdentificationCard";
import { Ticket } from "@phosphor-icons/react/dist/ssr/Ticket";
import { MapPinLine } from "@phosphor-icons/react/dist/ssr/MapPinLine";
import { contact } from "@/data/site";
const focuses = [
  [Compass, "Leisure", "Escapes, celebrations and private holidays."],
  [Users, "Family", "Meaningful journeys for every generation."],
  [Briefcase, "Business", "Efficient travel with responsive support."],
  [Mosque, "Pilgrimage", "Hajj and Umrah arranged with care."],
  [Heart, "Medical travel", "Coordinated treatment journeys abroad."],
] as const;
const places = [
  {
    name: "Egypt",
    note: "Ancient wonder, privately discovered",
    src: "/images/destinations/egypt-editorial.png",
    position: "object-[52%_center]",
  },
  {
    name: "Saudi Arabia",
    note: "AlUla in the last light",
    src: "/images/destinations/saudi-alula-editorial.png",
    position: "object-[62%_center]",
  },
  {
    name: "Qatar",
    note: "Heritage meets the horizon",
    src: "/images/destinations/qatar-doha-editorial.png",
    position: "object-[48%_center]",
  },
  {
    name: "Dubai",
    note: "The city, before it wakes",
    src: "/images/destinations/dubai-editorial.png",
    position: "object-[56%_center]",
  },
];
export default function Home() {
  return (
    <>
      <HeroRibbon />
      <section className="py-24 lg:py-28">
        <div className="container-site">
          <div className="text-center" data-reveal>
            <p className="kicker mb-4">How can we curate your journey?</p>
            <h2 className="section-title">Choose your travel focus</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#64717d]">
              Every arrangement begins with your purpose, pace and priorities.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-5">
            {focuses.map(([Icon, t, d], i) => (
              <Link
                href="/contact"
                key={t}
                className="group border-b border-[#ddd7cc] px-6 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
                data-reveal
                data-reveal-delay={String(i)}
              >
                <Icon
                  size={38}
                  weight="light"
                  className="mx-auto text-[#041b36] transition-transform group-hover:-translate-y-1"
                />
                <h3 className="mt-7 text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-xs leading-6 text-[#687480]">{d}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#b88618]">
                  Explore <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#041b36] py-20 text-white">
        <div className="container-site">
          <div className="mb-12 grid gap-6 lg:grid-cols-2" data-reveal>
            <div>
              <p className="kicker mb-5">Specialized assistance</p>
              <h2 className="section-title text-white">
                Services highlighted
                <br />
                by Moon Glow.
              </h2>
            </div>
            <p className="max-w-lg self-end text-sm leading-7 text-white/60">
              Direct support for Egypt entry requirements, commercial tickets
              and the destinations most frequently featured in Moon Glow
              promotions.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            <Link
              href="/visa-assistance"
              className="bg-[#041b36] p-8"
              data-reveal
            >
              <IdentificationCard
                size={32}
                weight="light"
                className="text-[#d6a32d]"
              />
              <h3 className="mt-12 text-xl font-semibold">
                Egypt entry security clearance
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Guidance and document support for customers who require Egyptian
                entry security-clearance processing.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d6a32d]">
                Learn more <ArrowRight size={13} />
              </span>
            </Link>
            <Link
              href="/travel-packages"
              className="bg-[#041b36] p-8"
              data-reveal
              data-reveal-delay="1"
            >
              <Ticket size={32} weight="light" className="text-[#d6a32d]" />
              <h3 className="mt-12 text-xl font-semibold">
                Badr & Tarco ticket offers
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Ask about promotional ticket options featured for Badr Airlines
                and Tarco Airlines, subject to current availability.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d6a32d]">
                Ask about tickets <ArrowRight size={13} />
              </span>
            </Link>
            <Link
              href="#destinations"
              className="bg-[#041b36] p-8"
              data-reveal
              data-reveal-delay="2"
            >
              <MapPinLine size={32} weight="light" className="text-[#d6a32d]" />
              <h3 className="mt-12 text-xl font-semibold">
                Four featured destinations
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Explore travel assistance for Egypt, Saudi Arabia, Qatar and
                Dubai.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d6a32d]">
                View destinations <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f4efe7] py-24 lg:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[620px]" data-reveal>
            <Image
              fill
              className="object-cover"
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=90"
              alt="Traveler enjoying a thoughtfully planned journey"
            />
          </div>
          <div className="lg:pl-10" data-reveal data-reveal-delay="1">
            <p className="kicker mb-5">The Moon Glow promise</p>
            <h2 className="section-title">
              Personal guidance.
              <br />
              Flawless every time.
            </h2>
            <div className="my-8 h-px w-12 bg-[#d6a32d]" />
            <p className="max-w-xl text-base leading-8 text-[#536474]">
              We are more than planners—we are your personal travel atelier. One
              point of contact, meticulous attention and support that stays with
              you before, during and after the journey.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Curated options, never cookie-cutter itineraries",
                "Dedicated concierge and on-trip support",
                "Privacy, discretion and peace of mind",
                "Plans that adapt gracefully to real life",
              ].map((x) => (
                <p className="m-0 flex items-center gap-3 text-sm" key={x}>
                  <Check size={17} className="text-[#b88618]" />
                  {x}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-28">
        <div className="container-site">
          <div className="text-center" data-reveal>
            <p className="kicker mb-4">Our process</p>
            <h2 className="section-title">Simple, thoughtful, seamless</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-6">
            {[
              "Connect",
              "Design",
              "Refine",
              "Confirm",
              "Experience",
              "Care",
            ].map((x, i) => (
              <div
                key={x}
                className="relative border-l border-[#ddd7cc] px-5 py-5"
                data-reveal
                data-reveal-delay={String(i % 4)}
              >
                <span className="text-xs font-bold text-[#b88618]">
                  0{i + 1}
                </span>
                <span className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-[#d6a32d]" />
                <h3 className="mt-10 text-sm font-semibold">{x}</h3>
                <p className="mt-3 text-xs leading-6 text-[#687480]">
                  {
                    [
                      "Share your vision and priorities.",
                      "We craft your journey.",
                      "Every detail is perfected.",
                      "Bookings and logistics are handled.",
                      "Travel with confidence.",
                      "Support continues after return.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="destinations" className="bg-[#eef4f8] py-24">
        <div className="container-site">
          <div className="mb-10 flex items-end justify-between" data-reveal>
            <div>
              <p className="kicker mb-4">Inspired destinations</p>
              <h2 className="section-title">Where will your story take you?</h2>
            </div>
            <Link href="/contact" className="hidden text-xs font-bold md:flex">
              Plan your journey <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {places.map(({ name, note, src, position }, i) => (
              <Link
                href="/contact"
                key={name}
                className="group relative min-h-[460px] overflow-hidden bg-[#041b36] sm:min-h-[520px] lg:min-h-[540px]"
                data-reveal
                data-reveal-delay={String(i % 4)}
              >
                <Image
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${position} transition-transform duration-[1400ms] ease-out group-hover:scale-[1.075]`}
                  src={src}
                  alt={`${name} — ${note}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03162e]/90 via-[#03162e]/5 to-black/10 transition-colors duration-700 group-hover:from-[#03162e]/75" />
                <span className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                  0{i + 1}
                </span>
                <div className="absolute inset-x-5 bottom-6 border-t border-white/35 pt-4 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{name}</h3>
                      <p className="mt-1 text-[11px] tracking-wide text-white/65">
                        {note}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="mb-1 shrink-0 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#041b36] py-12 text-white">
        <div className="container-site grid gap-8 md:grid-cols-4">
          {[
            [
              ShieldCheck,
              "Trusted & secure",
              "Careful handling of every arrangement.",
            ],
            [
              GlobeHemisphereWest,
              "Global network",
              "Partners across key destinations.",
            ],
            [
              LockKey,
              "Privacy & discretion",
              "Your information stays protected.",
            ],
            [Headset, "Here, always", "Responsive support throughout."],
          ].map(([Icon, t, d]) => (
            <div
              key={String(t)}
              className="flex gap-4 border-r border-white/15 pr-6 last:border-r-0"
            >
              <Icon size={28} className="shrink-0 text-[#d6a32d]" />
              <div>
                <h3 className="text-sm font-semibold">{String(t)}</h3>
                <p className="mt-2 text-xs leading-5 text-white/50">
                  {String(d)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div data-reveal>
            <p className="kicker mb-5">Ready when you are</p>
            <h2 className="section-title">
              Let’s start designing your journey.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#687480]">
              Tell us a little about your plans and a concierge will respond
              with the right next step.
            </p>
            <a
              href={contact.whatsapp}
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold"
            >
              <WhatsappLogo size={20} className="text-[#b88618]" />
              Chat on WhatsApp
            </a>
          </div>
          <div
            className="bg-[#041b36] p-8 text-white lg:p-12"
            data-reveal
            data-reveal-delay="1"
          >
            <form className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" />
              <input required placeholder="Email address" />
              <input placeholder="WhatsApp number" />
              <select defaultValue="">
                <option value="" disabled>
                  Travel focus
                </option>
                <option>Leisure</option>
                <option>Family</option>
                <option>Business</option>
                <option>Pilgrimage</option>
                <option>Medical travel</option>
              </select>
              <input placeholder="Destination" />
              <input type="date" aria-label="Preferred travel date" />
              <textarea
                className="sm:col-span-2"
                rows={4}
                placeholder="Tell us about your journey"
              />
              <button
                className="btn bg-[#d6a32d] text-[#041b36] sm:col-span-2"
                type="submit"
              >
                Send inquiry <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
