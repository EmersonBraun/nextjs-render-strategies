"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { getNextPage, getPreviousPage, getPagePath } from "@/lib/page-navigation";

interface SlideNavigationProps {
  sectionIds: string[];
}

export function SlideNavigation({ sectionIds }: SlideNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const isManualNavigationRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from pathname
  const getCurrentPage = useCallback(() => {
    // usePathname from next-intl already returns pathname without locale
    const path = pathname.replace(/^\//, ""); // Remove leading slash
    if (path === "" || path === "/") return null;
    
    // Handle comparison page
    if (path === "comparison" || path.startsWith("comparison/")) {
      return "comparison";
    }
    
    // Handle thank-you page
    if (path === "thank-you" || path.startsWith("thank-you/")) {
      return "thank-you";
    }
    
    // Extract the first segment (page name)
    const pageName = path.split("/")[0];
    
    // Validate it's a known page
    const validPages = ["csr", "ssr", "ssg", "isr", "rsc", "streaming", "ppr", "comparison", "thank-you"];
    if (validPages.includes(pageName)) {
      return pageName;
    }
    
    return null;
  }, [pathname]);

  const scrollToSection = useCallback(
    (index: number, updateHash = true) => {
      if (index < 0 || index >= sectionIds.length || isScrollingRef.current) return;

      isScrollingRef.current = true;
      isManualNavigationRef.current = true;
      setCurrentIndex(index);
      
      const element = document.getElementById(sectionIds[index]);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL hash
        if (updateHash) {
          const newHash = `#${sectionIds[index]}`;
          window.history.replaceState(null, "", newHash);
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
        // Reset manual navigation flag after scroll completes
        setTimeout(() => {
          isManualNavigationRef.current = false;
        }, 200);
      }, 1000);
    },
    [sectionIds]
  );

  // Handle hash on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (isManualNavigationRef.current) return;
      
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        const index = sectionIds.indexOf(hash);
        if (index !== -1 && index !== currentIndex) {
          setCurrentIndex(index);
          scrollToSection(index, false);
        }
      }
    };

    // Check initial hash
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && sectionIds.includes(initialHash)) {
      const index = sectionIds.indexOf(initialHash);
      if (index !== -1) {
        setCurrentIndex(index);
        setTimeout(() => scrollToSection(index, false), 100);
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sectionIds, currentIndex, scrollToSection]);

  // IntersectionObserver to detect current section (only for passive scroll detection)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Set<string>();

    const initObservers = () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const observer = new IntersectionObserver(
          (entries) => {
            // Skip updates during manual navigation or scrolling
            if (isManualNavigationRef.current || isScrollingRef.current) return;

            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                visibleSections.add(id);
              } else {
                visibleSections.delete(id);
              }
            });

            // Update current index based on visible sections (only if not manually navigating)
            if (visibleSections.size > 0 && !isManualNavigationRef.current && !isScrollingRef.current) {
              const sortedVisible = Array.from(visibleSections).sort(
                (a, b) => sectionIds.indexOf(a) - sectionIds.indexOf(b)
              );
              const visibleId = sortedVisible[0];
              const index = sectionIds.indexOf(visibleId);
              if (index !== -1 && index !== currentIndex) {
                setCurrentIndex(index);
                // Update hash without triggering scroll
                const newHash = `#${visibleId}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, "", newHash);
                }
              }
            }
          },
          {
            threshold: [0.5],
            rootMargin: "-20% 0px -20% 0px",
          }
        );

        observer.observe(element);
        observers.push(observer);
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initObservers, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, currentIndex]);

  const goToPrevious = useCallback(() => {
    if (isScrollingRef.current) return;

    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    } else {
      // Navigate to previous page
      const currentPage = getCurrentPage();
      const previousPage = getPreviousPage(currentPage);
      if (previousPage) {
        const path = getPagePath(previousPage);
        router.push(`${path}#intro`);
      }
    }
  }, [currentIndex, scrollToSection, getCurrentPage, router]);

  const goToNext = useCallback(() => {
    if (isScrollingRef.current) return;

    if (currentIndex < sectionIds.length - 1) {
      scrollToSection(currentIndex + 1);
    } else {
      // Navigate to next page
      const currentPage = getCurrentPage();
      const nextPage = getNextPage(currentPage);
      if (nextPage) {
        const path = getPagePath(nextPage);
        router.push(`${path}#intro`);
      }
    }
  }, [currentIndex, sectionIds.length, scrollToSection, getCurrentPage, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("handleKeyDown", e.key);
      if (isScrollingRef.current) return;

      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  const currentPage = getCurrentPage();
  const canGoPrevious = currentIndex > 0 || getPreviousPage(currentPage) !== null;
  const canGoNext = currentIndex < sectionIds.length - 1 || getNextPage(currentPage) !== null;

  if (sectionIds.length === 0) return null;

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-50 flex items-center justify-between px-4">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={!canGoPrevious}
        className={`pointer-events-auto p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-200 ${
          canGoPrevious
            ? "hover:bg-accent hover:scale-110 cursor-pointer opacity-100"
            : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={!canGoNext}
        className={`pointer-events-auto p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-200 ${
          canGoNext
            ? "hover:bg-accent hover:scale-110 cursor-pointer opacity-100"
            : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

