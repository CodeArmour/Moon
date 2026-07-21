import { PageHero } from "@/components/PageHero";
import { Check, WarningCircle } from "@phosphor-icons/react/dist/ssr";
export default function Page() {
  const support = [
    "Worldwide visa guidance",
    "Egypt visa facilitation",
    "Egypt entry security-clearance assistance",
    "Document preparation review",
    "Arabic–English translation coordination",
  ];
  return (
    <>
      <PageHero
        eyebrow="Visa support"
        title="Clarity at every stage of the application."
        text="Practical documentation guidance, careful preparation and a real person to explain what comes next."
        image="/images/visa/egypt-consultation-editorial.png"
      />
      <section className="py-24">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <div data-reveal>
            <p className="kicker mb-5">What we support</p>
            <h2 className="section-title">
              Prepared with care.
              <br />
              Submitted with confidence.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#687480]">
              Requirements can feel complex. We help you understand the starting
              information, organize documents and reduce avoidable uncertainty.
            </p>
          </div>
          <div className="border-t border-[#ddd7cc]">
            {support.map((x) => (
              <p
                className="m-0 flex items-center gap-4 border-b border-[#ddd7cc] py-5 text-sm"
                key={x}
              >
                <Check size={18} className="text-[#b88618]" />
                {x}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#eef4f8] py-24">
        <div className="container-site">
          <div className="grid md:grid-cols-4">
            {[
              "Share your journey",
              "Review requirements",
              "Prepare documents",
              "Continue with guidance",
            ].map((x, i) => (
              <div
                className="border-l border-[#ccd7df] px-7 py-5"
                key={x}
                data-reveal
                data-reveal-delay={String(i)}
              >
                <span className="text-xs font-bold text-[#b88618]">
                  0{i + 1}
                </span>
                <h3 className="mt-14 text-lg font-semibold">{x}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16 flex gap-4 border border-[#d6a32d] bg-[#fbfaf7] p-7">
            <WarningCircle size={25} className="shrink-0 text-[#b88618]" />
            <p className="m-0 text-sm leading-7 text-[#687480]">
              Moon Glow provides application assistance. Final decisions are
              made solely by the relevant government authorities and approval
              cannot be guaranteed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
