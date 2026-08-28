"use client";

import React, { useState } from "react";
import Reveal from "@/reuseable/Reveal";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "track",
    question: "Can I track my delivery?",
    answer:
      "Yes, you can track your package in real-time on our interactive live map from pickup to dropoff.",
  },
  {
    id: "price",
    question: "How is the delivery price calculated?",
    answer:
      "Delivery pricing is calculated based on distance, package dimensions, and vehicle type selected with zero hidden charges.",
  },
  {
    id: "how-it-works",
    question: "How does Moveit work?",
    answer:
      "Enter your pickup and destination, choose your delivery, and we'll connect you with a nearby delivery partner.",
  },
  {
    id: "partners",
    question: "Are Moveit delivery partners verified?",
    answer:
      "All delivery partners undergo rigorous background verification, ID checks, and onboarding training.",
  },
  {
    id: "partners-repeat",
    question: "Are Moveit delivery partners verified?",
    answer:
      "Yes, every partner is thoroughly vetted and tracked on every single delivery for your safety.",
  },
];

function ActionIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 rounded-full border border-[#9CA3AF]/60 flex items-center justify-center shrink-0 transition-all duration-200">
      {isOpen ? (
        <span className="w-2.5 h-[1.5px] bg-[#4B5563] block" />
      ) : (
        <svg
          className="w-3 h-3 text-[#6B7280]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
        </svg>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-20 sm:py-28 md:py-36 ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-stretch ">
        
        {/* Left Column: Heading (Top) + Onboarding Help Card (Bottom) */}
        <div className="flex flex-col justify-between h-full gap-16 lg:gap-0 ">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111827] leading-[1.12]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </Reveal>

          {/* Onboarding Help Card */}
          <Reveal delay={0.25}>
            <div className="flex flex-col gap-3 w-full max-w-[280px] sm:max-w-[300px]">
              {/* Card Container */}
              <div className="bg-[#EBF2FA] rounded-[28px] p-6 flex flex-col justify-between gap-6 shadow-xs">
                <p className="text-[#141414] text-[15px] font-medium leading-[1.38] tracking-tight">
                  Not sure how to sign up or use the app? Our team will guide you
                  through registration, document verification, and your first
                  delivery, step by step.
                </p>

                {/* Help Me Onboard Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between bg-[#DBE6F4] hover:bg-[#D2E0F0] rounded-[18px] p-1.5 pl-4 pr-1.5 text-[#141414] transition-all duration-200 cursor-pointer group shadow-2xs"
                >
                  <span className="text-xs sm:text-[13px] font-medium tracking-tight">
                    Help Me Onboard
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#141414] group-hover:bg-black rounded-[12px] sm:rounded-[14px] flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-white stroke-[1.8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H9M17 7V15"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Bottom Twin Bars */}
              <div className="flex items-center gap-2 px-0.5">
                <div className="h-[3.5px] w-1/2 bg-[#141414] rounded-full" />
                <div className="h-[3.5px] w-1/2 bg-[#141414] rounded-full" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Chat Flow Q&A */}
        <div className="flex flex-col gap-4 sm:gap-5 justify-center">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={`${item.id}-${index}`} delay={0.1 + index * 0.06}>
                <div className="flex flex-col gap-3">
                  
                  {/* Question Bubble */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`self-start min-w-[240px] max-w-[90%] sm:max-w-[340px] flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl text-left cursor-pointer transition-all duration-200 ${
                      isOpen
                        ? "bg-white text-[#111827] shadow-xs border border-gray-200/80"
                        : "bg-[#EAEAEA] hover:bg-[#E2E2E2] text-[#4B5563]"
                    }`}
                  >
                    <span className="text-xs sm:text-[14px] font-medium tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <ActionIcon isOpen={isOpen} />
                  </button>

                  {/* Answer Bubble (Offset to the right, chat-bubble appearance) */}
                  {isOpen && (
                    <div className="ml-10 sm:ml-24 md:ml-32 max-w-[90%] sm:max-w-[420px] bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-100 transition-all duration-300">
                      <p className="text-[#374151] text-xs sm:text-[14px] font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}