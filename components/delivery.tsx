"use client";

import React from "react";
import Reveal from "@/reuseable/Reveal";

export default function Delivery() {
  return (
    <section className="w-full  p-3 sm:p-5 md:p-8 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Card 1: Customer Card (Need it delivered today?) */}
        <Reveal delay={0.1} className="h-full">
          <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden bg-[#1A1A1E] shadow-sm flex flex-col justify-end p-6 sm:p-8 md:p-10">
            
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
                  className="flex items-center justify-between bg-white hover:bg-slate-100 text-black px-4 py-2 sm:py-2.5 rounded-full shadow-sm transition-all duration-200 cursor-pointer group/btn"
                >
                  <span className="text-xs sm:text-[13px] font-medium tracking-tight">
                    Download on Android
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.417-.61-.98-.61-1.615V3.429c0-.636.24-1.198.61-1.615zM15.207 13.414l2.766-2.766c.55-.55.55-1.444 0-1.994l-2.766-2.766-3.178 3.178 3.178 4.348zM4.78 1.025l9.013 9.013-2.379 2.379L4.78 1.025zm0 21.95l6.634-11.417 2.379 2.379-9.013 9.038z" />
                    </svg>
                  </div>
                </button>

                {/* iOS Button */}
                <button
                  type="button"
                  className="flex items-center justify-between bg-white hover:bg-slate-100 text-black px-4 py-2 sm:py-2.5 rounded-full shadow-sm transition-all duration-200 cursor-pointer group/btn"
                >
                  <span className="text-xs sm:text-[13px] font-medium tracking-tight">
                    Download on IOS
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77 1.01.08 2.06-.52 2.68-1.27z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Card 2: Driver Card (Flexible hours. Drive. Deliver. Earn.) */}
        <Reveal delay={0.2} className="h-full">
          <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]  rounded-[32px] overflow-hidden bg-[#1A1A1E] shadow-sm flex flex-col justify-end p-6 sm:p-8 md:p-10">
            
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
                className="w-full flex items-center justify-between bg-white hover:bg-slate-100 text-black px-5 py-2 sm:py-2.5 rounded-full shadow-sm transition-all duration-200 cursor-pointer group/btn"
              >
                <span className="w-full text-center text-xs sm:text-sm font-medium tracking-tight">
                  Drive with Moveit
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#141414] rounded-lg flex items-center justify-center text-white shrink-0">
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