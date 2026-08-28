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
    <div className="w-[18px] h-[18px] rounded-full border border-[#9CA3AF] flex items-center justify-center shrink-0 transition-colors">
      {isOpen ? (
        <span className="w-2 h-[1.2px] bg-[#111827] block" />
      ) : (
        <svg
          className="w-3 h-3 text-[#555E6D]"
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
    <section className="w-full  px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-30 items-stretch min-h-[520px]">
        
        {/* Left Column: Heading (Top) + Onboarding Help Card (Bottom) */}
        <div className="flex flex-col justify-between h-full gap-16 lg:gap-0">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#111827] leading-[1.1]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </Reveal>

          {/* Onboarding Help Card (Pinned to bottom of left column) */}
          <Reveal delay={0.25}>
            <div className="flex flex-col gap-2.5 w-full max-w-[220px]">
              {/* Card Container */}
              <div className="bg-[#EBF2FA] rounded-[22px] p-5 flex flex-col justify-between gap-5 shadow-2xs">
                <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-[1.4] tracking-tight">
                  Not sure how to sign up or use the app? Our team<br/> will guide you
                  through registration, document verification, and your<br/> first
                  delivery, step by <br/>step.
                </p>

                {/* Help Me Onboard Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between bg-[#DAE7F6] hover:bg-[#CFDFEF] rounded-[13px] p-1.5 pl-3.5 pr-1.5 text-[#1E293B] transition-all duration-200 cursor-pointer group"
                >
                  <span className="text-base font-medium tracking-tight">
                    Help Me Onboard
                  </span>
                  <div className="w-8 h-8 bg-[#111827] group-hover:bg-black rounded-[9px] flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 text-white stroke-[1]"
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
              <div className="flex items-center gap-1.5 px-0.5">
                <div className="h-[3px] w-1/2 bg-[#111827] rounded-full" />
                <div className="h-[3px] w-1/2 bg-[#111827] rounded-full" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Chat Stream */}
        <div className="flex flex-col gap-3.5 sm:gap-4 justify-center w-full mt-[10%]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={`${item.id}-${index}`} delay={0.08 + index * 0.04}>
                <div className="flex flex-col gap-3 w-full">
                  
                  {/* Fixed-Width Left-Aligned Question Bubble */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`w-[290px] sm:w-[320px] flex items-center justify-between gap-4 px-4.5 py-3.5 rounded-[15px] text-left cursor-pointer transition-all duration-200 ${
                      isOpen
                        ? "bg-white text-[#111827] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100"
                        : "bg-[#EDEDED] hover:bg-[#E5E5E5] text-[#555E6D]"
                    }`}
                  >
                    <span className="text-[12.5px] sm:text-lg font-medium tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <ActionIcon isOpen={isOpen} />
                  </button>

                  {/* Right-Shifted Chat Reply Bubble */}
                  {isOpen && (
                    <div className="ml-24 sm:ml-36 md:ml-48 lg:ml-56 max-w-[440px] bg-white rounded-[18px] p-5 sm:p-6 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-slate-100/80 transition-all duration-300">
                      <p className="text-[#374151] text-[12.5px] sm:text-lg font-normal leading-[1.55] tracking-tight">
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