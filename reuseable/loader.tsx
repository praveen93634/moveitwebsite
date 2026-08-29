"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface LoaderProps {
  /** Whether the loader is visible */
  isLoading?: boolean;
  /** Callback triggered when progress hits 100% or loading completes */
  onComplete?: () => void;
  /** Minimum duration in milliseconds for the loading simulation */
  duration?: number;
  /** Whether to render as a full-screen fixed overlay */
  fullScreen?: boolean;
  /** Custom status messages shown during loading phases */
  customPhrases?: string[];
  /** Custom brand text or logo to display */
  showBrand?: boolean;
}

const DEFAULT_PHRASES = [
  "Connecting to nearest Moveit rider...",
  "Optimizing fastest city route...",
  "Securing your parcel safely...",
  "Revving up the engine...",
  "Almost there, ready to move!",
];

export default function Loader({
  isLoading = true,
  onComplete,
  duration = 2600,
  fullScreen = true,
  customPhrases = DEFAULT_PHRASES,
  showBrand = true,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isBoosting, setIsBoosting] = useState(false);
  const [exhaustParticles, setExhaustParticles] = useState<
    { id: number; x: number; y: number; scale: number; opacity: number }[]
  >([]);
  const particleIdRef = useRef(0);

  // Loading Progress Timer with Boost acceleration
  useEffect(() => {
    if (!isLoading) return;

    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = isBoosting ? stepIncrement * 2.8 : stepIncrement;
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          clearInterval(timer);
          if (onComplete) {
            setTimeout(onComplete, 400);
          }
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoading, duration, isBoosting, onComplete]);

  // Cycle through phrases based on progress
  useEffect(() => {
    const totalPhrases = customPhrases.length;
    const currentIdx = Math.min(
      Math.floor((progress / 100) * totalPhrases),
      totalPhrases - 1
    );
    setPhraseIndex(currentIdx);
  }, [progress, customPhrases]);

  // Generate exhaust puff particles
  useEffect(() => {
    if (!isLoading) return;
    const rate = isBoosting ? 80 : 180;
    const interval = setInterval(() => {
      particleIdRef.current += 1;
      const newParticle = {
        id: particleIdRef.current,
        x: 0,
        y: (Math.random() - 0.5) * 12,
        scale: Math.random() * 0.6 + 0.4,
        opacity: 0.8,
      };
      setExhaustParticles((prev) => [...prev.slice(-10), newParticle]);
    }, rate);

    return () => clearInterval(interval);
  }, [isLoading, isBoosting]);

  if (!isLoading && progress >= 100) return null;

  const content = (
    <div className="relative w-full max-w-md mx-auto flex flex-col items-center justify-center p-6 select-none">
      {/* Brand Header */}
      {showBrand && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <div className="relative h-7 sm:h-8 w-28 sm:w-32">
            <Image
              src="/Moveit_logo.png"
              alt="Moveit Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-tight text-[#005AFB] bg-blue-500/10 px-3 py-0.5 rounded-full">
             Deliver Anything. Anytime. Anywhere.
          </span>
        </motion.div>
      )}

      {/* Main Scooter & Road Scene Area */}
      <div
        className="relative w-full h-44 sm:h-52  overflow-hidden flex flex-col items-center justify-between p-4 cursor-pointer group"
        onMouseDown={() => setIsBoosting(true)}
        onMouseUp={() => setIsBoosting(false)}
        onTouchStart={() => setIsBoosting(true)}
        onTouchEnd={() => setIsBoosting(false)}
      >
        {/* Sky / Speed Streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Speed Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-l from-transparent via-white/25 to-transparent rounded-full"
              style={{
                top: `${18 + i * 14}%`,
                width: `${40 + (i % 3) * 35}px`,
              }}
              animate={{
                x: ["350px", "-150px"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: isBoosting ? 0.35 + (i % 3) * 0.1 : 0.8 + (i % 3) * 0.2,
                ease: "linear",
                delay: i * 0.12,
              }}
            />
          ))}

          {/* Nitro speed glow when boosted */}
          <motion.div
            animate={{
              opacity: isBoosting ? 0.4 : 0,
              scale: isBoosting ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-radial from-[#005AFB]/40 via-transparent to-transparent pointer-events-none"
          />
        </div>

        {/* Top Hint / Interactive Badge */}
        <div className="w-full flex items-center justify-between z-10">
          {/* <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
            <span>{isBoosting ? "TURBO BOOST ACTIVE!" : "Hold to Boost"}</span>
          </div> */}

          <span className="text-xs font-mono font-bold text-[#005AFB]">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Scooter Character & Bike Animation */}
        <div className="relative w-full flex-1 flex items-center justify-center -mb-2">
          {/* Exhaust Particles (Spawning behind the scooter) */}
          <div className="absolute right-[28%] sm:right-[32%] bottom-[30%] pointer-events-none z-10">
            {exhaustParticles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: p.y, scale: 0.3, opacity: 0.8 }}
                animate={{
                  x: 45,
                  y: p.y - 12,
                  scale: p.scale * 2,
                  opacity: 0,
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`absolute w-3 h-3 rounded-full blur-[1px] ${
                  isBoosting
                    ? "bg-gradient-to-r from-[#005AFB] to-[#38BDF8]"
                    : "bg-zinc-400"
                }`}
              />
            ))}
          </div>

          {/* Scooter Container */}
          <motion.div
            animate={{
              y: isBoosting ? [-1, -3, 0, -2, -1] : [-2, -6, -1, -5, -2],
              rotate: isBoosting ? [-1.5, -2.5, -1] : [-0.5, 0.5, -0.5],
              x: isBoosting ? [-3, 1, -2] : [0, 0, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: isBoosting ? 0.35 : 0.65,
              ease: "easeInOut",
            }}
            className="relative w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] z-20"
          >
            <Image
              src="/scooter-right-new.png"
              alt="Moveit Delivery Scooter moving"
              fill
              priority
              className="object-contain"
              sizes="150px"
            />

            {/* Headlight Beam effect */}
            <div
              className={`absolute top-[42%] left-[-28px] w-16 h-8 bg-gradient-to-l from-white/30 to-transparent transform -rotate-6 rounded-full blur-[3px] pointer-events-none transition-opacity duration-300 ${
                isBoosting ? "opacity-90" : "opacity-40"
              }`}
            />
          </motion.div>
        </div>

        {/* Road & Ground Track */}
        <div className="relative w-full h-7 bg-[#1E2330] rounded-b-2xl border-t border-white/10 flex items-center overflow-hidden z-10">
          {/* Animated Dashed Road Stripes moving right to left */}
          <motion.div
            className="flex gap-6 w-[200%] absolute left-0"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: isBoosting ? 0.25 : 0.6,
              ease: "linear",
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-8 sm:w-10 h-1 bg-[#FBBF24] rounded-full shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Bar & Status Text */}
      <div className="w-full mt-6 flex flex-col gap-3">
        {/* Progress Bar Track */}
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden p-[1px] border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#005AFB] via-[#38BDF8] to-[#00E5FF] rounded-full shadow-[0_0_12px_rgba(0,90,251,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400 px-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={phraseIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="font-medium text-zinc-300 tracking-tight text-left truncate max-w-[280px]"
            >
              {customPhrases[phraseIndex]}
            </motion.span>
          </AnimatePresence>

          <span className="font-mono text-zinc-400 font-semibold text-[11px] shrink-0">
            {progress < 100 ? "Moving..." : "Ready!"}
          </span>
        </div>
      </div>
    </div>
  );

  if (!fullScreen) {
    return <div className="w-full flex items-center justify-center">{content}</div>;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.aside
          aria-label="Loading Moveit delivery application"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] bg-[#07090E]/90 backdrop-blur-xl flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient Glows */}
          <div className="absolute w-96 h-96 bg-[#005AFB]/15 rounded-full blur-[100px] pointer-events-none -top-20 -left-20" />
          <div className="absolute w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20" />

          {content}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}