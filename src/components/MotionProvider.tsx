"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionProvider() {
  const pathname = usePathname();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const autoTargets = document.querySelectorAll<HTMLElement>(
        "main section .container-site > *:not([data-reveal]), main form:not([data-reveal])",
      );
      autoTargets.forEach((node, index) => {
        if (!node.hasAttribute("data-reveal"))
          node.setAttribute("data-reveal", "");
        if (!node.hasAttribute("data-reveal-delay"))
          node.setAttribute("data-reveal-delay", String(index % 4));
      });
      const nodes = [
        ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
      ];
      if (!("IntersectionObserver" in window)) {
        nodes.forEach((node) => node.classList.add("is-visible"));
        return;
      }
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -36px" },
      );
      nodes.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname]);
  return null;
}
