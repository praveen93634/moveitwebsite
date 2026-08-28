"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/reuseable/Reveal";
import WarpText from "@/components/WarpText";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#", hasIcon: true },
  { label: "About", href: "#" },
  { label: "Drive with Moveit", href: "#" },
  { label: "Download Moveit App", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] text-white rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-0 px-6 sm:px-10 md:px-16 flex flex-col justify-between relative mt-16 sm:mt-24">
      
      {/* Top Grid Section - Full Width */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 pb-12 sm:pb-16 z-10">
        
        {/* Left Column: Brand Statement & Socials */}
        <div className="flex flex-col justify-between h-full gap-12 sm:gap-16">
          <Reveal delay={0.1}>
            <p className="text-[#BFBFBF] text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-sm">
              Local delivery, reimagined. Book a verified delivery partner,
              track every step in real time, and send almost anything across
              the city in minutes.
            </p>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-6 sm:gap-8 text-white text-xs sm:text-sm font-medium">
              {/* YouTube */}
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#005AFB] transition-colors group cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center text-white group-hover:text-[#005AFB] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-sm">Youtube</span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#005AFB] transition-colors group cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center text-white group-hover:text-[#005AFB] transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Explore Menu & Contact Information */}
        <div className="flex flex-col gap-10 sm:gap-14">
          
          {/* Explore Nav Links */}
          <div>
            <span className="text-[#707070] text-xs font-semibold tracking-wider block mb-3">
              Explore
            </span>
            <div className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <Reveal key={link.label} delay={0.1 + index * 0.05}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between py-3.5 sm:py-4.5 border-b border-[#262626] transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-[#8E8E93] group-hover:text-white text-2xl sm:text-3xl md:text-[34px] font-normal tracking-tight transition-colors duration-200">
                      {link.label}
                    </span>
                    {link.hasIcon && (
                      <span className="text-[#8E8E93] group-hover:text-white transition-colors duration-200">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Location & Contact Sub-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
            
            {/* Location */}
            <div>
              <span className="text-[#808080] text-sm font-medium block">
                Location
              </span>
              <p className="text-[#F8FAFC] text-xs sm:text-base leading-relaxed mt-1.5 max-w-[200px]">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>

            {/* Email */}
            <div>
              <span className="text-[#808080] text-sm font-medium block">
                Email
              </span>
              <a
                href="mailto:hello@logoipsum.com"
                className="text-[#F8FAFC] hover:text-[#005AFB] text-xs sm:text-base leading-relaxed mt-1.5 block transition-colors"
              >
                hello@logoipsum.com
              </a>
            </div>

            {/* Contact Us */}
            <div>
              <span className="text-[#808080] text-sm font-medium block">
                Contact Us
              </span>
              <a
                href="tel:+919087654321"
                className="text-[#F8FAFC] hover:text-[#005AFB] text-xs sm:text-base leading-relaxed mt-1.5 block transition-colors"
              >
                +91 9087 654 321
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive WarpText Watermark - Full Width, Cut off halfway at bottom */}
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-end h-[160px] sm:h-[220px] md:h-[280px] lg:h-[340px] w-full mt-6 select-none">
        
        {/* WarpText Dynamic Interactive WebGL Text */}
        <div className="w-full h-full absolute translate-y-1/4 sm:translate-y-1/3 inset-0 flex items-center justify-center pointer-events-auto">
          <WarpText
            text="MOVEIT"
            color="0002342"
            fontSize="clamp(4rem, 20dvw, 16rem)"
            fontWeight={700}
            letterSpacing="-0.06em"
            lineHeight={0.9}
            warpStrength={0.1}
            warpScale={1.8}
            speed={0.6}
            pointerInfluence={0.45}
            pointerStrength={0.4}
            className="w-full h-full"
          />
        </div>

      </div>

      {/* Scooter Rider moving edge-to-edge across the entire screen width */}
      <div className="absolute bottom-20 w-full -mx-6 sm:-mx-10 md:-mx-16 overflow-hidden pointer-events-none h-20 sm:h-28 md:h-32 -mb-6 sm:-mb-8 z-30">
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
            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 drop-shadow-[0_10px_16px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/scooter.png"
              alt="Moveit Delivery Rider moving across screens"
              fill
              className="object-contain"
              sizes="100px"
            />

            {/* Headlight Beam effect */}
            <div className="absolute top-[42%] left-[-24px] sm:left-[-28px] w-12 sm:w-16 h-6 sm:h-8 bg-gradient-to-l from-white/35 to-transparent transform -rotate-6 rounded-full blur-[3px] pointer-events-none opacity-50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer Full-Width Legal Bar matching reference */}
      <div className="w-full py-6 border-t border-[#222224] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8FAFC] z-20">
        <p className="hover:text-white transition-colors cursor-default">
          © 2026 Moveit All Rights Reserved.
        </p>

        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Terms & Conditions
        </a>

        {/* Center Help Desk label */}
        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Help Desk
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Driver Policy
        </a>

        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Frequently Asked Questions
        </a>
      </div>

    </footer>
  );
}