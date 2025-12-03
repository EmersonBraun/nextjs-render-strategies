"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Always scroll to #intro when entering thank-you page, ignoring any hash in URL
    if (pathname?.includes("/thank-you") || pathname === "/thank-you") {
      // Remove any hash from URL
      if (window.location.hash) {
        const cleanPath = pathname.split("#")[0];
        window.history.replaceState(null, "", `${cleanPath}#intro`);
      } else {
        // Add #intro to URL if not present
        window.history.replaceState(null, "", `${pathname}#intro`);
      }

      // Wait a bit for DOM to be ready, then scroll to #intro
      const scrollToIntro = () => {
        const introElement = document.getElementById("intro");
        if (introElement) {
          introElement.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
          // Fallback to top if intro element not found
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      };

      // Try immediately
      scrollToIntro();

      // Also try after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(scrollToIntro, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}
