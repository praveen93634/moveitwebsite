import React from "react";
import Image from "next/image";

const WatchOurStory = () => {
    return (
        <section className="w-full p-3 sm:p-5 md:p-[5%] pt-0 sm:pt-0 md:pt-0">
            <div className="flex flex-col gap-4 sm:gap-6">

               
                    <div className="group relative w-full aspect-[16/9] rounded-[28px] md:rounded-[20px] overflow-hidden shadow-xs cursor-pointer select-none">
                        {/* Background Image */}
                        <Image
                            src="/our_story.png"
                            alt="MOVEIT Founder & Team - Watch Our Story"
                            fill
                            priority
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Subtle dark tint overlay */}
                        <div className="absolute inset-0 bg-black/15 transition-opacity group-hover:bg-black/25" />

                        {/* Floating 'Watch Our Story' Glass Pill Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="pointer-events-auto flex items-center gap-2.5 px-5 py-2.5 rounded-[12px] bg-black/40 hover:bg-black/55 backdrop-blur-sm border border-white/25 text-white transition-all duration-300 shadow-2xl group-hover:scale-110">
                                {/* Play Triangle Icon */}
                                <div className="w-4 h-4 flex items-center justify-center">
                                    <svg className="w-6 h-3.5 fill-white" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-xs sm:text-base font-medium tracking-tight">
                                    Watch Our Story
                                </span>
                            </div>
                        </div>
                    </div>
               

                {/* Bottom Bento Grid: 2 Columns */}
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                        {/* Bottom-Left Card: Built for everyday moments */}
                        <div className="group relative w-full aspect-[3/3] rounded-[28px] md:rounded-[32px] overflow-hidden shadow-xs flex flex-col justify-end p-6 sm:p-8 md:p-10">
                            {/* Background Image */}
                            <Image
                                src="/everyday_moments.png"
                                alt="Delivery parcel handover - Built for everyday moments"
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 680px"
                            />

                            {/* Gradient Vignette for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

                            {/* Card Text Content */}
                            <div className="relative z-10">
                                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-[26px] tracking-tight leading-snug">
                                    Built for everyday moments.
                                </h2>
                                <p className="text-[#F8FAFC] text-xs sm:text-base font-normal mt-2 sm:mt-2.5 leading-[1.2] max-w-md">
                                    Forgot your keys? Sending documents? Delivering groceries or a
                                    surprise gift? Moveit is there when everyday life needs an
                                    extra hand.
                                </p>
                            </div>
                        </div>

                        {/* Bottom-Right Card: Always know where it is */}
                        <div className="group relative w-full aspect-[3/3] rounded-[28px] sm:rounded-[32px] md:rounded-[32px] overflow-hidden shadow-xs bg-gradient-to-br from-[#1A3D68] via-[#0E203B] to-[#080E18] flex flex-col justify-between p-6 sm:p-8 md:p-10">

                            <Image
                                src="/gradient.png"
                                alt="Delivery parcel handover - Built for everyday moments"
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 680px"
                            />

                            {/* Center Floating Live Tracking Widget */}
                            <div className="relative z-10 my-auto flex justify-center items-center py-2 sm:py-4 w-full">
                                {/* Illustrated Map Preview */}
                                <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[16/10] rounded-xl overflow-hidden">
                                    <Image
                                        src="/pickup.svg"
                                        alt="Live driver pickup tracking map"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 340px, 420px"
                                    />
                                </div>
                            </div>

                            {/* Card Text Content */}
                            <div className="relative z-10">
                                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-[26px] tracking-tight leading-snug">
                                    Always know where it is.
                                </h2>
                                <p className="text-[#F8FAFC] text-xs sm:text-base font-normal mt-2 sm:mt-2.5 leading-[1.2] max-w-md">
                                    Every delivery comes with live tracking, delivery updates,
                                    and accurate ETAs, so you always know where your package
                                    is—from pickup to doorstep.
                                </p>
                            </div>

                        </div>

                    </div>
            </div>
        </section>
    );
};

export default WatchOurStory;