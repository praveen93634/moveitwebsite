"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TextRevealProps {
  /** Optional badge text shown above the title (e.g. "PHILOSOPHY") */
  badgeText?: string;
  /** Controls if the badge is displayed */
  showBadge?: boolean;
  /** Small pre-title text above the main title */
  preTitle?: string;
  /** Large main title (e.g. "Working Together." or "Deliberately.") */
  mainTitle?: string;
  /** Custom color for the main title */
  titleColor?: string;
  /** Paragraph text to reveal, can be a single string or an array of paragraphs */
  text: string | string[];
  /** Optional byline or footer text (e.g. "Backed by TIC") */
  byline?: React.ReactNode;
  /** Text alignment: "left" | "center" | "right" */
  align?: "left" | "center" | "right";
  /** Active (revealed) text color. Defaults to "#111827" */
  activeColor?: string;
  /** Inactive (unrevealed) text color. Defaults to "#9CA3AF" */
  inactiveColor?: string;
  /** Whether to pin section during scroll. Defaults to true */
  pin?: boolean;
  /** Optional additional classes for the outer section container */
  className?: string;
}

// Helper to split text into word spans
const SplitWords = ({
  text,
  inactiveColor,
}: {
  text: string;
  inactiveColor: string;
}) => {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.28em] word-span select-none"
          style={{ color: inactiveColor }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

export default function TextReveal({
  badgeText = "PHILOSOPHY",
  showBadge = false,
  preTitle,
  mainTitle,
  titleColor = "#63B846",
  text,
  byline,
  align = "left",
  activeColor = "#111827",
  inactiveColor = "#9CA3AF",
  pin = true,
  className = "",
}: TextRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const allWords = gsap.utils.toArray<HTMLElement>(
        sectionEl.querySelectorAll(".word-span") || []
      );

      if (allWords.length === 0) return;

      const createPinnedAnimation = (
        pinMultiplier: number,
        stagger: number,
        shouldPin = true,
        pinSpacing = true
      ) => {
        const getEnd = () =>
          `+=${Math.round(window.innerHeight * pinMultiplier)}`;

        const textReveal = gsap.to(allWords, {
          color: activeColor,
          stagger,
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top",
            end: getEnd,
            scrub: 0.7,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        const pinTrigger =
          shouldPin && pin
            ? ScrollTrigger.create({
                trigger: sectionEl,
                start: "top top",
                end: getEnd,
                pin: true,
                pinSpacing,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
              })
            : null;

        return () => {
          textReveal.kill();
          pinTrigger?.kill();
        };
      };

      // Responsive pinning heights & stagger speeds
      mm.add("(min-width: 1280px)", () =>
        createPinnedAnimation(1.35, 0.1, true, true)
      );
      mm.add("(min-width: 768px) and (max-width: 1279px)", () =>
        createPinnedAnimation(1.1, 0.09, true, true)
      );
      mm.add("(max-width: 767px)", () =>
        createPinnedAnimation(0.85, 0.06, true, true)
      );
    }, sectionEl);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [text, byline, activeColor, inactiveColor, pin]);

  const paragraphsArray = Array.isArray(text) ? text : [text];
  const hasHeader = Boolean(preTitle || mainTitle || (showBadge && badgeText));

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white relative overflow-hidden flex flex-col ${
        hasHeader ? "justify-between" : "justify-center"
      } items-center py-16 md:py-24 min-h-screen ${className}`}
    >
      <div
        ref={containerRef}
        className={`w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 flex flex-col ${
          hasHeader ? "justify-between flex-1" : "justify-center items-center"
        }`}
      >
        {/* Header Section (if badge or titles exist) */}
        {hasHeader && (
          <div className="w-full flex flex-col items-start text-left mb-10 md:mb-5">
            {showBadge && badgeText && (
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#F3F2EC] text-[#55524B] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mb-5 md:mb-6 shadow-sm border border-[#E9E8E1] select-none">
                {badgeText}
              </div>
            )}
            <h2 className="flex flex-col gap-1.5 sm:gap-2 leading-[1.1] md:leading-[1.05]">
              {preTitle && (
                <span className="text-[20px] sm:text-[26px] md:text-2xl font-normal text-[#171717] tracking-tight">
                  {preTitle}
                </span>
              )}
              {mainTitle && (
                <span
                  className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[5rem] font-medium tracking-tighter"
                  style={{ color: titleColor }}
                >
                  {mainTitle}
                </span>
              )}
            </h2>
          </div>
        )}

        {/* Scroll Reveal Text Block */}
        <div
          className={`w-full flex flex-col ${alignmentClasses} justify-center`}
        >
          <div className={`flex flex-col gap-6 md:gap-8 w-full ${alignmentClasses}`}>
            {paragraphsArray.map((para, idx) => (
              <p
                key={idx}
                className={`font-medium ${
                  align === "center"
                    ? "text-center"
                    : align === "right"
                    ? "text-right"
                    : "text-left"
                } text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.4] sm:leading-[1.45] tracking-[-0.015em] max-w-4xl`}
              >
                <SplitWords text={para} inactiveColor={inactiveColor} />
              </p>
            ))}
          </div>

          {/* Byline / Footer Subtitle */}
          {byline && (
            <div
              className={`mt-10 sm:mt-14 md:mt-16 text-sm sm:text-base font-medium tracking-wide select-none ${
                align === "center"
                  ? "text-center"
                  : align === "right"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              {typeof byline === "string" ? (
                <SplitWords text={byline} inactiveColor={inactiveColor} />
              ) : (
                byline
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}