import React from "react";
import TextReveal from "@/reuseable/TextReveal";

const BackedByTIC = () => {
  return (
    <TextReveal
      text="We believe local deliveries should be effortless. From forgotten keys to business parcels, Moveit connects you with nearby delivery partners to make every delivery simple, trackable, and stress-free."
      byline="Backed by TIC"
      align="center"
      activeColor="#111827"
      inactiveColor="#9CA3AF"
      pin={true}
    />
  );
};

export default BackedByTIC;