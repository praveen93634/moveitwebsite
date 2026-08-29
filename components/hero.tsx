"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Reveal from "@/reuseable/Reveal";

export default function Hero() {
    return (
        <section className="relative w-full p-3 sm:p-5 md:p-8">
            {/* Outer Card Container */}
            <div className="relative w-full bg-[#F1F5F9] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden px-5 sm:px-10 md:px-14 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 flex flex-col items-center">
                <Navbar />

                <Reveal delay={0.05} className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center text-center mt-6 sm:mt-8 md:mt-10 z-10">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 sm:mb-4 rounded-md bg-[#F2F5F9] border border-slate-200/80 shadow-xs backdrop-blur-sm">
                            <span className="text-xs md:text-sm font-semibold text-[#7A7A7A] tracking-tighter">
                                Deliver Anything. Anytime. Anywhere.
                            </span>
                        </div>

                        {/* Main Titles */}
                        <h1 className="flex flex-col items-center">
                            <span className="text-[#0052FF] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                                Move anything.
                            </span>
                            <span className="text-[#111827] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none">
                                Delivered in minutes.
                            </span>
                        </h1>
                    </div>
                </Reveal>

                {/* 3D Diorama & Scene */}
                <Reveal delay={0.2} className="w-full flex justify-center">
                    <div className="relative w-full max-w-[960px] mt-4 sm:mt-6 md:mt-8 flex justify-center items-center">

                    {/* Main 3D Diorama Image Container */}
                    <div className="relative w-full aspect-[16/9] lg:max-h-[540px] rounded-2xl flex items-center justify-center mt-10">
                        <Image
                            src="/Hero-image.png"
                            alt="MOVEIT fast delivery 3D diorama showing rider delivering package to customer house"
                            fill
                            priority
                            className="object-contain transition-transform duration-700 hover:scale-[1.01]"
                            sizes="(max-width: 1200px) 100vw, 960px"
                        />

                        {/* Floating Location Point Pin */}
                        <motion.div
                            animate={{
                                y: [0, -14, 0],
                                scale: [1, 1.04, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-[6%] right-[16%] sm:top-[8%] sm:right-[20%] md:top-[-10%] md:right-[45%] z-20 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-20 drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] pointer-events-none select-none"
                        >
                            <Image
                                src="/location point.png"
                                alt="Location point pin"
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width: 768px) 80px, 96px"
                            />
                        </motion.div>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
    );
}