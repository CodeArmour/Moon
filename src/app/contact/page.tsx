import { PageHero } from "@/components/PageHero";
import {
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Your journey begins with a conversation."
        text="Share what you have in mind. A Moon Glow concierge will help make the next step clear."
        image="/images/contact/concierge-conversation.png"
      />
      <section className="py-24">
        <div className="container-site grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="kicker mb-5">Talk to our team</p>
            <h2 className="section-title">Here when you need us.</h2>
            <div className="mt-10 grid gap-5 text-sm">
              <a className="flex items-center gap-3" href={contact.whatsapp}>
                <WhatsappLogo size={21} className="text-[#b88618]" />
                WhatsApp: {contact.whatsappNumber}
              </a>
              <a className="flex items-center gap-3" href={contact.phoneHref}>
                <Phone size={21} className="text-[#b88618]" />
                {contact.phone}
              </a>
              <a
                className="flex items-center gap-3"
                href={`mailto:${contact.email}`}
              >
                <EnvelopeSimple size={21} className="text-[#b88618]" />
                {contact.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={21} className="text-[#b88618]" />
                {contact.location}
              </p>
            </div>
            <a
              className="mt-5 flex items-center gap-3 text-sm"
              href={`mailto:${contact.advisorEmail}`}
            >
              <EnvelopeSimple size={21} className="text-[#b88618]" />
              {contact.advisorEmail}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
