"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/reuseable/Reveal";

export default function Delivery() {
  return (
    <section className="w-full  p-3 sm:p-5 md:p-8 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Card 1: Customer Card (Need it delivered today?) */}
        <Reveal delay={0.1} className="h-full">
          <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden  flex flex-col justify-end p-6 sm:p-8 md:p-10">
            
            {/* Split Video Background - Left side (Customer) */}
            <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <video
                src="/delivery-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-[200%] max-w-none h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Mobile Fallback gradient background */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#2B303C] to-[#12141A]" />

            {/* Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
              <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] tracking-tight leading-tight whitespace-pre-line">
                Need it delivered
                <br />
                today?
              </h3>

              {/* Download CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Android Button */}
                <button
                  type="button"
                  className="flex items-center justify-between bg-white hover:bg-slate-100 text-black pl-12 pr-1 py-2 sm:py-1 rounded-[12px] shadow-sm transition-all duration-200 cursor-pointer group/btn"
                >
                  <span className="text-xs sm:text-base font-medium tracking-tight">
                    Download on Android
                  </span>
                  <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0 p-1.5 sm:p-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                      <Image
                        src="/Playstore-og.png"
                        alt="Download on Android Play Store"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </button>

                {/* iOS Button */}
                <button
                  type="button"
                  className="flex items-center justify-between bg-white hover:bg-slate-100 text-black pl-12 pr-1 py-2 sm:py-1 rounded-[12px] shadow-sm transition-all duration-200 cursor-pointer group/btn"
                >
                  <span className="text-xs sm:text-base font-medium tracking-tight">
                    Download on IOS
                  </span>
                  <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0 p-1.5 sm:p-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                      <Image
                        src="/apple-logo.png"
                        alt="Download on Apple App Store"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Card 2: Driver Card (Flexible hours. Drive. Deliver. Earn.) */}
        <Reveal delay={0.2} className="h-full">
          <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]  rounded-[32px] overflow-hidden  flex flex-col justify-end p-6 sm:p-8 md:p-10">
            
            {/* Split Video Background - Right side (Driver) */}
            <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <video
                src="/delivery-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 right-0 w-[200%] max-w-none h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Mobile Fallback gradient background */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#2B303C] to-[#12141A]" />

            {/* Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
              <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] tracking-tight leading-tight whitespace-pre-line">
                Flexible hours.
                <br />
                Drive. Deliver. Earn.
              </h3>

              {/* Drive with Moveit Button */}
              <button
                type="button"
                className="w-full flex items-center justify-between bg-white hover:bg-slate-100 text-black pl-6 pr-1 py-1 sm:py-1 rounded-[12px] shadow-sm transition-all duration-200 cursor-pointer group/btn"
              >
                <span className="w-full text-center text-xs sm:text-base font-medium tracking-tight">
                  Drive with Moveit
                </span>
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
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

          </div>
        </Reveal>

      </div>
    </section>
  );
}