"use client";

import { useCallback } from "react";

export function useScrollTo() {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    const headerOffset = 80; // Header height
    const offsetPosition = offsetTop - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return scrollTo;
}
