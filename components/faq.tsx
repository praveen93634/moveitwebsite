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
    <div className="w-5 h-5 rounded-full border border-[#9CA3AF] flex items-center justify-center shrink-0 transition-all duration-200">
      {isOpen ? (
        <span className="w-2.5 h-[1.5px] bg-[#111827] block rounded-full" />
      ) : (
        <svg
          className="w-2.5 h-2.5 text-[#64748B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
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
    <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-20 sm:py-28 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-20 items-stretch">
        
        {/* Left Column: Heading (Top) + Onboarding Help Card (Bottom) */}
        <div className="flex flex-col justify-between h-full gap-16 lg:gap-0">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111827] leading-[1.12]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </Reveal>

          {/* Onboarding Help Card (Pinned to bottom of left column) */}
          <Reveal delay={0.25}>
            <div className="flex flex-col gap-2.5 w-full max-w-[270px] sm:max-w-[290px]">
              {/* Card Container */}
              <div className="bg-[#EBF3FC] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between gap-5 shadow-2xs">
                <p className="text-[#1E293B] text-[13.5px] sm:text-[14px] font-normal leading-[1.45] tracking-tight">
                  Not sure how to sign up or use the app? Our team will guide you
                  through registration, document verification, and your first
                  delivery, step by step.
                </p>

                {/* Help Me Onboard Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between bg-[#DAE8F8] hover:bg-[#CFE1F4] rounded-[16px] p-1.5 pl-4 pr-1.5 text-[#141414] transition-all duration-200 cursor-pointer group"
                >
                  <span className="text-xs sm:text-[13px] font-medium tracking-tight">
                    Help Me Onboard
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#141414] group-hover:bg-black rounded-[11px] sm:rounded-[12px] flex items-center justify-center transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-white stroke-[2]"
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

              {/* Bottom Twin Indicator Bars */}
              <div className="flex items-center gap-2 px-1">
                <div className="h-[3.5px] w-1/2 bg-[#141414] rounded-full" />
                <div className="h-[3.5px] w-1/2 bg-[#141414] rounded-full" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Chat Flow Q&A */}
        <div className="flex flex-col gap-3.5 sm:gap-4 justify-center w-full">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={`${item.id}-${index}`} delay={0.1 + index * 0.05}>
                <div className="flex flex-col gap-3 w-full">
                  
                  {/* Question Bubble */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`self-start w-full max-w-[320px] sm:max-w-[350px] flex items-center justify-between gap-4 px-5 py-3.5 rounded-[18px] text-left cursor-pointer transition-all duration-200 ${
                      isOpen
                        ? "bg-white text-[#111827] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100"
                        : "bg-[#EDF0F3] hover:bg-[#E5E9EE] text-[#475569]"
                    }`}
                  >
                    <span className="text-xs sm:text-[13.5px] font-medium tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <ActionIcon isOpen={isOpen} />
                  </button>

                  {/* Answer Bubble (Indented to the right like a chat response) */}
                  {isOpen && (
                    <div className="self-end ml-12 sm:ml-24 md:ml-36 lg:ml-40 max-w-[90%] sm:max-w-[460px] bg-white rounded-[22px] p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100/90 transition-all duration-300">
                      <p className="text-[#334155] text-xs sm:text-[13.5px] font-normal leading-[1.6] tracking-tight">
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