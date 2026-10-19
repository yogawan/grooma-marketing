"use client";

import { Scissors } from "lucide-react";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeTimer = setTimeout(() => setFading(true), 800);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary-hover transition-opacity duration-300 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="flex h-20 w-20 animate-pulse items-center justify-center rounded-2xl bg-white/10">
        <Scissors className="h-10 w-10 text-white" />
      </span>
    </div>
  );
}
