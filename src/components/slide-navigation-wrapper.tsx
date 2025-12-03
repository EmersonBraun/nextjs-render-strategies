"use client";

import type { SlideNavigationProps } from "./slide-navigation";
import { SlideNavigationContent } from "./slide-navigation";

/**
 * Wrapper component for SlideNavigationContent that uses useSearchParams()
 * Must be wrapped in Suspense at the page level
 */
export function SlideNavigationWrapper({ sectionIds }: SlideNavigationProps) {
  return <SlideNavigationContent sectionIds={sectionIds} />;
}
