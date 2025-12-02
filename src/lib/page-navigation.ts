export const PAGE_ORDER = [
  "csr",
  "ssr",
  "ssg",
  "isr",
  "ppr",
  "rsc",
  "streaming",
  "comparison",
  "thank-you",
] as const;

export type PageRoute = (typeof PAGE_ORDER)[number];

export function getNextPage(currentPage: string | null): PageRoute | null {
  if (!currentPage) return PAGE_ORDER[0];
  
  const currentIndex = PAGE_ORDER.indexOf(currentPage as PageRoute);
  if (currentIndex === -1 || currentIndex === PAGE_ORDER.length - 1) {
    return null;
  }
  
  return PAGE_ORDER[currentIndex + 1];
}

export function getPreviousPage(currentPage: string | null): PageRoute | null {
  if (!currentPage) return null;
  
  const currentIndex = PAGE_ORDER.indexOf(currentPage as PageRoute);
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  
  return PAGE_ORDER[currentIndex - 1];
}

export function getPagePath(page: PageRoute): string {
  if (page === "comparison") return "/comparison";
  if (page === "thank-you") return "/thank-you";
  return `/${page}`;
}

