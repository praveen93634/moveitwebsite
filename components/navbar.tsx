"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  className?: string;
  onGetAppClick?: () => void;
}

export default function Navbar({ className = "", onGetAppClick }: NavbarProps) {
  return (
    <header className={`w-full flex items-center justify-between py-2 sm:py-3 z-20 ${className}`}>
      {/* Brand Logo */}
      <Link href="/" className="inline-flex items-center group transition-transform active:scale-95">
        <Image
          src="/Moveit_logo.png"
          alt="MOVEIT"
          width={130}
          height={32}
          priority
          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
        />
      </Link>

      {/* Get the App CTA */}
      <button
        type="button"
        onClick={onGetAppClick}
        className="inline-flex items-center gap-2.5 sm:gap-3 pl-4 sm:pl-5 pr-2 py-1.5 sm:py-2 rounded-[12px] bg-[#111827] text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 cursor-pointer group"
      >
        <span className="text-xs sm:text-base font-medium tracking-tight text-white select-none">
          Get the App
        </span>

        {/* Store Icons Pill */}
        <div className="flex items-center gap-1">
          {/* Play Store Icon */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-[10px] bg-white flex items-center justify-center text-[#111827] group-hover:scale-105 transition-transform">
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M5.5 3.87v16.26c0 .77.84 1.26 1.51.87l13.5-8.13c.66-.39.66-1.35 0-1.74l-13.5-8.13c-.67-.39-1.51.1-1.51.87z" />
            </svg>
          </div>

          {/* Apple Store Icon */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-[10px] bg-white flex items-center justify-center text-[#111827] group-hover:scale-105 transition-transform">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.87-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.74.99.08 2.02-.51 2.64-1.22z" />
            </svg>
          </div>
        </div>
      </button>
    </header>
  );
}
