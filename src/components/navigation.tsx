"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { usePresentationMode } from "@/lib/use-presentation-mode";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "./language-selector";
import { ThemeToggle } from "./theme-toggle";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "CSR", href: "/csr" },
  { name: "SSR", href: "/ssr" },
  { name: "SSG", href: "/ssg" },
  { name: "ISR", href: "/isr" },
  { name: "PPR", href: "/ppr" },
  { name: "RSC", href: "/rsc" },
  { name: "Streaming", href: "/streaming" },
  { name: "Comparison", href: "/comparison" },
];

export function Navigation() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { getUrlWithPresentationMode } = usePresentationMode();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for CTRL/CMD + Shift + M
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "M"
      ) {
        event.preventDefault();
        setIsHidden((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    const cleanPathname = pathname.replace(`/${locale}`, "");
    if (href === "/" && cleanPathname === "") return true;
    return cleanPathname === href;
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  if (isHidden) {
    return null;
  }

  return (
    <nav className="border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70 mb-6 sticky top-0 z-10">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex items-center min-w-0 flex-shrink max-w-[40%] sm:max-w-none">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-tight truncate">
              <span className="hidden lg:inline">
                Next.js Rendering Strategies Demo
              </span>
              <span className="hidden md:inline lg:hidden">
                Rendering Strategies
              </span>
              <span className="md:hidden">Strategies</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 flex-shrink-0">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "rounded-md whitespace-nowrap",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
                size="sm"
                asChild
              >
                <Link href={getUrlWithPresentationMode(item.href)}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={getUrlWithPresentationMode(item.href)}
                  onClick={handleLinkClick}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
