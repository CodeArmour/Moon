"use client";

import { useEffect, useId, useState } from "react";
import {
  ArrowRight,
  CaretDown,
  ChatCircleDots,
  X,
} from "@phosphor-icons/react";
import { contact } from "@/data/site";

const questions = [
  {
    question: "What can Moon Glow arrange?",
    answer:
      "We coordinate visas and documents, flights, hotels, holidays, airport transfers, travel insurance, Hajj and Umrah, medical travel and Arabic–English translation.",
  },
  {
    question: "Can you help with Egypt entry security approval?",
    answer:
      "Yes. We guide eligible travelers through the documents and steps required for Egyptian entry security-clearance processing. Final approval remains with the relevant authorities.",
  },
  {
    question: "Which destinations do you specialize in?",
    answer:
      "Our featured destinations are Egypt, Saudi Arabia, Qatar and Dubai, with worldwide travel assistance available for other journeys.",
  },
  {
    question: "Do you offer Badr and Tarco airline tickets?",
    answer:
      "We can check promotional ticket options for Badr Airlines and Tarco Airlines. Routes, fares and availability are confirmed when you request a quote.",
  },
  {
    question: "How do I begin planning my journey?",
    answer:
      "Tell us your destination, dates, traveler count and the support you need. A concierge will review the details and recommend the right next step.",
  },
] as const;

export function QuickAnswers() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const panelId = useId();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-[60] sm:right-6 lg:bottom-6">
      {open && (
        <section
          id={panelId}
          aria-label="Frequently asked questions"
          className="quick-answers-panel absolute bottom-[calc(100%+12px)] right-0 flex max-h-[min(620px,calc(100vh-150px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden border border-[#d8d2c8] bg-[#fbfaf7] shadow-[0_24px_70px_rgba(4,27,54,.24)]"
        >
          <div className="flex items-start justify-between bg-[#041b36] px-6 py-5 text-white">
            <div>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#d6a32d]">
                Moon Glow concierge
              </p>
              <h2 className="m-0 text-xl font-semibold tracking-[-.03em]">
                Quick answers
              </h2>
              <p className="mb-0 mt-2 text-xs text-white/55">
                Choose one of our most asked questions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 shrink-0 place-items-center border border-white/20 text-white transition-colors hover:border-white/50"
              aria-label="Close quick answers"
            >
              <X size={17} />
            </button>
          </div>

          <div className="overflow-y-auto px-4 py-3">
            {questions.map((item, index) => {
              const expanded = active === index;
              const answerId = `${panelId}-answer-${index}`;
              return (
                <div key={item.question} className="border-b border-[#ded8ce] last:border-0">
                  <button
                    type="button"
                    onClick={() => setActive(expanded ? null : index)}
                    aria-expanded={expanded}
                    aria-controls={answerId}
                    className="group flex w-full items-center justify-between gap-4 py-4 text-left text-[13px] font-semibold leading-5 text-[#041b36]"
                  >
                    <span>
                      <span className="mr-3 text-[9px] font-bold tracking-wider text-[#b88618]">
                        0{index + 1}
                      </span>
                      {item.question}
                    </span>
                    <CaretDown
                      size={15}
                      className={`shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id={answerId}
                    className={`quick-answer-body ${expanded ? "is-open" : ""}`}
                  >
                    <div>
                      <p className="mb-4 pl-7 pr-5 text-xs leading-6 text-[#687480]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[#d8d2c8] bg-[#f3eee6] px-5 py-4">
            <p className="m-0 text-[11px] text-[#687480]">Need a personal answer?</p>
            <a
              href={contact.whatsapp}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#041b36]"
            >
              WhatsApp us <ArrowRight size={13} />
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex h-12 w-12 items-center justify-center gap-3 bg-[#d6a32d] px-0 text-[#041b36] shadow-[0_12px_35px_rgba(4,27,54,.24)] transition-transform duration-300 hover:-translate-y-1 sm:h-14 sm:w-auto sm:justify-start sm:px-5"
      >
        {open ? <X size={19} /> : <ChatCircleDots size={21} weight="light" />}
        <span className="hidden text-[10px] font-bold uppercase tracking-[.12em] sm:inline">
          {open ? "Close" : "Quick answers"}
        </span>
      </button>
    </div>
  );
}
