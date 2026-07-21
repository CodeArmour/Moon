import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#eef4f8] py-20 lg:py-28">
        <div className="container-site max-w-4xl">
          <p className="kicker mb-5">Privacy</p>
          <h1 className="section-title">Your information deserves care.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#596a79]">
            This page explains the information Moon Glow may receive when you
            contact us and the sensible limits for sharing travel documents.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-site max-w-4xl space-y-12">
          {[
            ["Information you provide", "When you send an inquiry, you may provide your name, contact details, destination, travel dates and a description of the support you need."],
            ["How it is used", "Inquiry information is used to understand your request, respond to you and coordinate relevant travel assistance. Information may need to be shared with a provider only when required for an arrangement you request."],
            ["Sensitive documents", "Do not submit passport scans, medical records, payment-card details or government identifiers through the website form. A concierge will explain an appropriate next step when documents are required."],
            ["Your choices", `For a question about information you have shared, contact ${contact.email}.`],
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
