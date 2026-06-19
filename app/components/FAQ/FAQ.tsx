"use client";

import { useState } from "react";
import Reveal from "../Reveal";

const faqs = [
  {
    q: "What are the best locations for a pre-wedding shoot in Rishikesh?",
    a: "Rishikesh offers stunning variety — Laxman Jhula, Ram Jhula, Triveni Ghat (sunrise), the Ganges riverbank, Rajaji National Forest, and the Beatles Ashram ruins. For snow and meadows, we extend to Dhanaulti (90 min away). We scout the best spot based on your style and the season.",
  },
  {
    q: "What is the best season for a pre-wedding shoot in Rishikesh?",
    a: "October–February is ideal — clear skies, cool weather, and lush greenery after monsoon. March–April (spring) is also beautiful with flowers. We avoid July–September (heavy monsoon). Dhanaulti gets snow in December–January if you want a snow shoot.",
  },
  {
    q: "Does the package include hotel stay?",
    a: "Yes! Our Standard and Premium packages include hotel stay in Rishikesh. We arrange 3-star+ accommodations close to the shoot locations. You just arrive — we handle the rest.",
  },
  {
    q: "How far is Rishikesh from Delhi?",
    a: "Rishikesh is approximately 240 km from Delhi — about 5–6 hours by road or 4.5 hours by train to Haridwar (30 min from Rishikesh). We can help you plan your travel itinerary.",
  },
  {
    q: "What should we wear for the shoot?",
    a: "We recommend 2–3 outfit changes — one traditional (lehenga/sherwani), one western/casual, and one ethnic fusion. Avoid very bright neon colours. Our Standard and Premium packages include outfit and prop assistance.",
  },
  {
    q: "Is drone photography available?",
    a: "Yes, drone shots are included in our Premium package and can be added to Standard for an additional charge. Drone permits in Rishikesh are handled by us.",
  },
  {
    q: "How long does it take to receive the edited photos and video?",
    a: "Edited photos are delivered within 7–10 working days. The cinematic video takes 15–20 working days. All files are delivered digitally via Google Drive/WeTransfer.",
  },
  {
    q: "What is the payment and cancellation policy?",
    a: "We require 50% advance to confirm your booking, with the balance due on the shoot day. Cancellations 15+ days before the shoot receive a 50% refund of the advance. Rescheduling is free once.",
  },
  {
    q: "Can we bring family members to the shoot?",
    a: "Absolutely! Family members are welcome to accompany you. For couple-only shots, we politely request family to step back briefly. We can also do a small family portrait session on request.",
  },
  {
    q: "Do you shoot outside Rishikesh — like Mussoorie or Haridwar?",
    a: "Yes! We cover Dhanaulti, Mussoorie, Haridwar, Lansdowne, and other Uttarakhand locations. Travel charges apply for locations beyond 50 km from Rishikesh.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3 sm:mb-4">
              ❓ FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-lg text-gray-600">
              Everything you need to know about pre-wedding shoots in Rishikesh
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
