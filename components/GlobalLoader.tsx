"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/reuseable/loader";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  // Ensure scroll is locked during initial full screen loading for a polished experience
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <Loader
      isLoading={loading}
      onComplete={() => setLoading(false)}
      duration={2200}
      fullScreen={true}
    />
  );
}
