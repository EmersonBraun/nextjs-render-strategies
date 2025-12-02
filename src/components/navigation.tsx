"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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

  const isActive = (href: string) => {
    const cleanPathname = pathname.replace(`/${locale}`, "");
    if (href === "/" && cleanPathname === "") return true;
    return cleanPathname === href;
  };

  return (
    <nav className="border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70 mb-6 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold tracking-tight">
              Next.js Rendering Strategies Demo
            </h1>
          </div>
          <div className="flex items-center space-x-0.5">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "rounded-md",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
                size="sm"
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
