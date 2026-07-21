import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#eef4f8] py-20 lg:py-28">
        <div className="container-site max-w-4xl">
          <p className="kicker mb-5">Service terms</p>
          <h1 className="section-title">Clear expectations for every inquiry.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#596a79]">
            Travel availability, entry decisions and third-party services remain
            subject to confirmation when an arrangement is requested.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-site max-w-4xl space-y-12">
          {[
            ["Quotes and availability", "Fares, promotional tickets, accommodation and travel services are subject to availability and may change until confirmed. A website description is not a guaranteed booking or final price."],
            ["Visas and entry decisions", "Moon Glow provides preparation and application assistance. Government authorities make all final visa, security-clearance and entry decisions, and approval cannot be guaranteed."],
            ["Third-party services", "Airlines, hotels, insurers, transfer operators and other providers apply their own terms, cancellation rules and service conditions. Relevant conditions should be reviewed before confirmation."],
            ["Traveler responsibility", "Travelers remain responsible for accurate information, valid documents and meeting applicable entry, health and travel requirements."],
            ["Questions", `Ask for the applicable conditions before confirming an arrangement, or contact ${contact.email}.`],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-[#d8d2c8] pt-7">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#596a79]">{text}</p>
            </div>
          ))}
          <p className="text-xs text-[#687480]">Last updated: July 20, 2026.</p>
        </div>
      </section>
    </>
  );
}
