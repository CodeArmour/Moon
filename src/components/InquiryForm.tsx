"use client";
import { useState } from "react";
export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="grid min-h-80 place-items-center border border-[#d6a32d]/30 bg-white/5 p-8 text-center">
        <div>
          <h3 className="text-3xl text-white">Thank you.</h3>
          <p className="mt-2 text-white/65">
            A Moon Glow advisor will be in touch soon.
          </p>
        </div>
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`grid gap-4 ${compact ? "sm:grid-cols-2" : ""}`}
    >
      <input aria-label="Full name" required placeholder="Full name" />
      <input
        aria-label="Phone or email"
        required
        placeholder="Phone or email"
      />
      <select aria-label="Service" required defaultValue="">
        <option value="" disabled>
          Service needed
        </option>
        <option>Visa assistance</option>
        <option>Flights & hotels</option>
        <option>Holiday planning</option>
        <option>Hajj & Umrah</option>
        <option>Medical travel</option>
      </select>
      <input aria-label="Destination" placeholder="Destination" />
      <input aria-label="Planned date" type="date" />
      <input
        aria-label="Travelers"
        min="1"
        type="number"
        placeholder="Number of travelers"
      />
      <textarea
        aria-label="Message"
        className={compact ? "sm:col-span-2" : ""}
        rows={4}
        placeholder="How can we help?"
      />
      <p className={`text-xs text-white/55 ${compact ? "sm:col-span-2" : ""}`}>
        Please do not send passport scans or sensitive documents through this
        form.
      </p>
      <button
        className={`btn btn-gold ${compact ? "sm:col-span-2" : ""}`}
        type="submit"
      >
        Send inquiry
      </button>
    </form>
  );
}
