"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Reveal from "@/reuseable/Reveal";

interface StepTab {
    id: string;
    label: string;
    leftTitle: string;
    description: string;
    image: string;
}

const STEPS: StepTab[] = [
    {
        id: "request",
        label: "Request",
        leftTitle: "Book your\ndelivery.",
        description:
            "Choose your pickup and destination, select the delivery type, and confirm your request in just a few taps.",
        image: "/moveit-ui.png",
    },
    {
        id: "pickup",
        label: "Pickup",
        leftTitle: "Partner at\nyour pickup.",
        description:
            "A verified nearby delivery partner is assigned immediately and arrives at your pickup location with live status alerts.",
        image: "/moveit-ui.png",
    },
    {
        id: "track",
        label: "Track",
        leftTitle: "Follow every\nturn live.",
        description:
            "Track your parcel in real time on the interactive map with accurate ETAs and continuous route updates.",
        image: "/moveit-ui.png",
    },
    {
        id: "delivered",
        label: "Delivered",
        leftTitle: "Safe delivery\nto doorstep.",
        description:
            "Secure and seamless handover with photo confirmation and digital proof of delivery at your doorstep.",
        image: "/moveit-ui.png",
    },
];

export default function YourDoorStep() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<number>(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Phone enters smoothly from below as section enters view
    const phoneY = useTransform(scrollYProgress, [0, 0.35, 0.55], [240, 25, 0]);
    const phoneOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Title color reveal: "From" text reveals dynamically to vibrant blue on scroll
    const fromColor = useTransform(
        scrollYProgress,
        [0.08, 0.28],
        ["#FFFFFF", "#005AFB"]
    );

    const currentStep = STEPS[activeTab];

    return (
        <div className="relative w-full">
            {/* Scooter Rider moving edge-to-edge on top of the white background */}
            <div className="relative w-full overflow-hidden pointer-events-none h-16 sm:h-20 md:h-24 z-20">
                <motion.div
                    className="absolute bottom-0 pointer-events-none"
                    initial={{ x: "100vw" }}
                    animate={{ x: "-200px" }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "linear",
                    }}
                >
                    {/* Subtle natural riding bounce, vibration & headlight beam */}
                    <motion.div
                        animate={{
                            y: [-2, -6, -1, -5, -2],
                            rotate: [-0.5, 0.5, -0.5],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.65,
                            ease: "easeInOut",
                        }}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 "
                    >
                        <Image
                            src="/scooter.png"
                            alt="Moveit Delivery Rider moving across screens"
                            fill
                            className="object-contain"
                            sizes="100px"
                        />

                        {/* Headlight Beam effect */}
                        <div className="absolute top-[42%] left-[-24px] sm:left-[-28px] w-12 sm:w-16 h-6 sm:h-8 bg-gradient-to-l from-[#005AFB]/25 to-transparent transform -rotate-6 rounded-full blur-[3px] pointer-events-none opacity-60" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Road below Scooter */}
            <div className="relative w-full h-7 bg-[#1E2330]  border-t border-white/10 flex items-center overflow-hidden z-10">
              {/* Animated Dashed Road Stripes moving right to left */}
              <motion.div
                className="flex gap-6 w-[200%] absolute left-0"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
              >
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 sm:w-10 h-1 bg-[#FBBF24] shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                  />
                ))}
              </motion.div>
            </div>

            {/* Main Black Doorstep Section */}
            <section
                ref={sectionRef}
                className="relative w-full bg-[#141414] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-0"
            >

            <div className="w-full px-5 sm:px-8 md:px-8 lg:px-12 xl:px-[6%] flex flex-col flex-1 justify-between">

                {/* Section Header with Scroll Color Reveal */}
                <Reveal delay={0.1}>
                    <div className="text-center z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold tracking-tight leading-[1.12]">
                            <motion.span
                                style={{ color: fromColor }}
                                className="transition-colors duration-200"
                            >
                                From
                            </motion.span>{" "}
                            <span className="text-[#FFFFFF]">Tap to</span>
                            <br />
                            <span className="text-[#FFFFFF]">Your Doorstep.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* 3-Column Interactive Layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-4 lg:gap-10 xl:gap-14 z-10 w-full">

                    {/* Left Column: Dynamic Title aligned with top of the phone */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left pt-2 sm:pt-4 md:pt-10 lg:pt-16">
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={currentStep.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-[32px] tracking-tight leading-snug whitespace-pre-line"
                            >
                                {currentStep.leftTitle}
                            </motion.h3>
                        </AnimatePresence>
                    </div>

                    {/* Center Column: Phone Mockup cut off cleanly at bottom border */}
                    <div className="flex justify-center items-end order-first md:order-none">
                        <motion.div
                            className="relative w-[280px] sm:w-[320px] md:w-[260px] lg:w-[360px] xl:w-[440px] h-[340px] sm:h-[400px] md:h-[380px] lg:h-[480px] xl:h-[540px] overflow-hidden flex items-start justify-center"
                            style={{ y: phoneY, opacity: phoneOpacity }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep.id}
                                    initial={{ opacity: 0.85, scale: 0.99 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0.85, scale: 0.99 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="relative w-full h-[680px] sm:h-[760px] md:h-[750px] lg:h-[900px] xl:h-[1000px] flex items-start justify-center shrink-0"
                                >
                                    <Image
                                        src={currentStep.image}
                                        alt={`${currentStep.label} - Moveit mobile experience`}
                                        fill
                                        priority
                                        className="object-contain object-top drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 280px, 440px"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Right Column: Clickable Tabs & Dynamic Description aligned with top of the phone */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-5 md:gap-4 lg:gap-6 pt-2 sm:pt-4 md:pt-6 lg:pt-10">
                        {/* Interactive Step Tabs */}
                        <div className="flex items-center gap-3 sm:gap-5 md:gap-3 lg:gap-5 xl:gap-6 flex-wrap justify-center md:justify-start">
                            {STEPS.map((step, index) => {
                                const isActive = activeTab === index;
                                return (
                                    <button
                                        key={step.id}
                                        type="button"
                                        onClick={() => setActiveTab(index)}
                                        className="relative cursor-pointer py-1 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium transition-all duration-200 focus:outline-none"
                                    >
                                        <span
                                            className={`transition-colors duration-200 ${isActive
                                                    ? "text-[#FFFFFF] font-semibold"
                                                    : "text-[#BFBFBF]/50 hover:text-[#BFBFBF]"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Step Description */}
                        <div className="min-h-[70px] md:min-h-[80px]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentStep.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="text-[#BFBFBF] text-sm sm:text-base md:text-xs lg:text-base xl:text-2xl font-normal leading-[1.35] max-w-sm"
                                >
                                    {currentStep.description}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        </div>
    );
}