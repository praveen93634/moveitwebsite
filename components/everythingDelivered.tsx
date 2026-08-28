"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Reveal from "@/reuseable/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

interface DeliveryFeature {
  id: string;
  image?: string;
  video?: string;
  alt: string;
  description?: string;
  topTitle?: string;
  isDark?: boolean;
}

const features: DeliveryFeature[] = [
  {
    id: "tracking",
    video: "/tracking-video.mp4",
    alt: "Follow your package in real time",
    description:
      "Follow your package in real time and always know when it's expected to arrive.",
  },
  {
    id: "booking",
    video: "/booking-video.mp4",
    alt: "Book a delivery in just a few taps",
    description:
      "Book a delivery in just a few taps and get moving without the wait.",
  },
  {
    id: "doorstep",
    image: "/mobile-mockup.png",
    alt: "From Tap to Your Doorstep mobile experience",
    topTitle: "From Tap to\nYour Doorstep.",
    isDark: true,
  },
];

const EverythingDelivered = () => {
  const darkCardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: darkCardScroll } = useScroll({
    target: darkCardRef,
    offset: ["center 50%", "end start"],
  });

  // Phone mockup slides down and fades out as card scrolls away
  const mockupExitY = useTransform(darkCardScroll, [0, 0.6, 1], [0, 40, 160]);
  const mockupExitOpacity = useTransform(darkCardScroll, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section className="w-full  p-3 sm:p-5 md:px-[5%] py-16 sm:py-20 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-16">
        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
            <span className="text-[#0052FF] block">
              Everything, Delivered Better
            </span>
            <span className="block mt-1 sm:mt-2">
              <span className="text-[#0052FF]">with </span>
              <span className="text-[#111827]">Moveit.</span>
            </span>
          </h2>
        </Reveal>
      </div>

      {/* 3 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4">
        {features.map((feature, index) => (
          <Reveal key={feature.id} delay={0.15 * (index + 1)} className="h-full">
            <div
              ref={feature.isDark ? darkCardRef : undefined}
              className={`group relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#0000003d]/10 flex flex-col transition-all duration-300  ${
                feature.isDark ? "bg-[#141414] justify-between" : "bg-[#F8FAFC] justify-end"
              }`}
            >
              {/* Background Image / Mockup */}
              {feature.isDark ? (
                <>
                  {/* Top Text for Dark Card */}
                  <div className="relative z-10 pt-8 sm:pt-10 md:pt-[30%] px-6 text-center">
                    <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-[32px] tracking-tight leading-snug whitespace-pre-line">
                      {feature.topTitle}
                    </h3>
                  </div>

                  {/* Mobile mockup - scroll-driven exit animation */}
                  <motion.div
                    className="relative w-[80%] mx-auto h-[65%] mt-auto overflow-hidden"
                    style={{ y: mockupExitY, opacity: mockupExitOpacity }}
                  >
                    <Image
                      src={feature.image ??"/mobile-mockup.png"}
                      alt={feature.alt}
                      fill
                      className="object-contain object-bottom"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Full card background video or image for cards 1 & 2 */}
                  {feature.video ? (
                    <video
                      src={feature.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={feature.image ?? ""}
                      alt={feature.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  )}

                  {/* Soft white gradient overlay at bottom behind text */}
                  <div className="absolute inset-x-0 bottom-0 h-48 sm:h-70 backdrop-blur-[2px] bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />

                  {/* Bottom Text for Light Cards */}
                  <div className="relative z-10 p-6 sm:p-7 md:px-8">
                    <p className="text-[#111827] text-sm sm:text-2xl font-medium flex items-start leading-[1.2]">
                      {feature.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default EverythingDelivered;