import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  Eye,
  ChatsCircle,
  LockKey,
  GlobeHemisphereWest,
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/site";
import { VerifiedProof } from "@/components/VerifiedProof";

const values = [
  [Eye, "Clarity", "Honest guidance and realistic next steps."],
  [ChatsCircle, "Human contact", "A real person remains close to the journey."],
  [LockKey, "Discretion", "Careful handling of plans and information."],
  [GlobeHemisphereWest, "Global outlook", "Support across destinations and travel needs."],
] as const;

const expectations = [
  "A clear next step before any arrangement begins",
  "Options explained around your timing and priorities",
  "Responsive support before, during and after travel",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Moon Glow"
        title="Personal attention, wherever the journey leads."
        text="We make complex travel feel calm, clear and human through one connected concierge relationship."
        image="/images/services/travel-with-care.png"
      />

      <section className="py-24 lg:py-28">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div
            className="relative min-h-[520px] overflow-hidden bg-[#e9e2d7] lg:min-h-[640px]"
          >
            <Image
              fill
              priority
              className="object-cover object-center"
              src="/images/services/plan-and-clear.png"
              alt="Travel documents being prepared with care"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div data-reveal data-reveal-delay="1" data-reveal-style="slide-right">
            <p className="kicker mb-5">How we work</p>
            <h2 className="section-title">
              One relationship behind every moving part.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#596a79]">
              Moon Glow supports leisure travelers, families, professionals,
              pilgrims and medical-travel clients through the details between
              an idea and a well-prepared journey.
            </p>
            <p className="mt-5 text-base leading-8 text-[#596a79]">
              Documentation, routes, stays, transfers and special arrangements
              are coordinated together, while communication remains personal
              and practical.
            </p>
            <div className="mt-9 border-y border-[#d8d2c8] py-6">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#b88618]">
                Direct contact
              </p>
              <a
                href={`mailto:${contact.advisorEmail}`}
                className="mt-3 inline-flex items-center gap-3 text-sm font-semibold"
              >
                <EnvelopeSimple size={18} className="text-[#b88618]" />
                {contact.advisorEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#041b36] py-20 text-white">
        <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="kicker mb-5">What you can expect</p>
            <h2 className="section-title max-w-xl text-white">
              Thoughtful service, without vague promises.
            </h2>
          </div>
          <div className="border-t border-white/20">
            {expectations.map((expectation) => (
              <p
                key={expectation}
                className="m-0 flex items-center gap-4 border-b border-white/20 py-6 text-sm text-white/80"
              >
                <CheckCircle size={20} className="shrink-0 text-[#d6a32d]" />
                {expectation}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f8] py-20">
        <div className="container-site grid md:grid-cols-4">
          {values.map(([Icon, title, text]) => (
            <div
              key={title}
              className="border-b border-[#ccd7df] p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <Icon size={31} className="text-[#b88618]" />
              <h3 className="mt-10 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#596a79]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-site flex flex-col justify-between gap-8 border-y border-[#d8d2c8] py-10 md:flex-row md:items-center">
          <div>
            <p className="kicker mb-3">Ready when you are</p>
            <h2 className="text-3xl font-semibold tracking-[-.045em]">
              Start with a conversation, not a commitment.
            </h2>
          </div>
          <Link href="/contact" className="btn bg-[#041b36] text-white">
            Meet your concierge <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <VerifiedProof />
    </>
  );
}
