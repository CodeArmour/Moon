"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { CheckCircle } from "@phosphor-icons/react/dist/csr/CheckCircle";

const fieldClass =
  "mt-2 min-h-12 w-full border border-white/20 bg-white px-4 text-sm text-[#041b36] outline-none transition focus:border-[#d6a32d] focus:ring-2 focus:ring-[#d6a32d]/25";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[520px] flex-col items-start justify-center bg-[#041b36] p-8 text-white lg:p-12"
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={42} weight="light" className="text-[#d6a32d]" />
        <p className="kicker mt-8">Inquiry prepared</p>
        <h3 className="mt-3 max-w-md text-3xl font-semibold tracking-[-.045em]">
          Thank you. Your journey details are ready for our concierge.
        </h3>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
          This website demonstration does not send information to a live inbox
          yet. For immediate assistance, please use WhatsApp or call Moon Glow.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 border-b border-[#d6a32d] pb-1 text-xs font-bold uppercase tracking-wider text-[#d6a32d]"
        >
          Prepare another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-x-4 gap-y-5 bg-[#041b36] p-8 text-white sm:grid-cols-2 lg:p-12"
      onSubmit={handleSubmit}
    >
      <p className="m-0 text-xs leading-6 text-white/60 sm:col-span-2">
        Fields marked <span className="text-[#d6a32d]">*</span> are required.
      </p>

      <label className="text-xs font-semibold" htmlFor="contact-name">
        Full name <span className="text-[#d6a32d]">*</span>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          className={fieldClass}
          required
        />
      </label>
      <label className="text-xs font-semibold" htmlFor="contact-email">
        Email address <span className="text-[#d6a32d]">*</span>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          required
        />
      </label>
      <label className="text-xs font-semibold" htmlFor="contact-whatsapp">
        WhatsApp number
        <input
          id="contact-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder="Include country code"
        />
      </label>
      <label className="text-xs font-semibold" htmlFor="contact-focus">
        Travel focus <span className="text-[#d6a32d]">*</span>
        <select
          id="contact-focus"
          name="focus"
          defaultValue=""
          className={fieldClass}
          required
        >
          <option value="" disabled>
            Select one
          </option>
          <option>Visa support</option>
          <option>Flights & stays</option>
          <option>Holiday</option>
          <option>Pilgrimage</option>
          <option>Medical travel</option>
        </select>
      </label>
      <label className="text-xs font-semibold" htmlFor="contact-destination">
        Destination
        <input
          id="contact-destination"
          name="destination"
          className={fieldClass}
          placeholder="Country or city"
        />
      </label>
      <label className="text-xs font-semibold" htmlFor="contact-date">
        Preferred travel date
        <input
          id="contact-date"
          name="date"
          type="date"
          className={fieldClass}
        />
      </label>
      <label
        className="text-xs font-semibold sm:col-span-2"
        htmlFor="contact-message"
      >
        Tell us about your journey <span className="text-[#d6a32d]">*</span>
        <textarea
          id="contact-message"
          name="message"
          className={fieldClass}
          rows={5}
          required
          placeholder="Travelers, dates and the support you need"
        />
      </label>
      <p className="m-0 text-xs leading-6 text-white/55 sm:col-span-2">
        Please do not send passport scans, medical records or other sensitive
        documents through this form.
      </p>
      <button
        className="btn bg-[#d6a32d] text-[#041b36] sm:col-span-2"
        type="submit"
      >
        Review inquiry <ArrowRight size={17} />
      </button>
    </form>
  );
}
