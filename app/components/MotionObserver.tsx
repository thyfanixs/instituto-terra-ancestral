"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .image-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
