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

// Pages to skip in presentation mode
const SKIP_IN_PRESENTATION: PageRoute[] = ["rsc", "streaming"];

function getPageOrder(isPresentationMode: boolean): readonly PageRoute[] {
  if (!isPresentationMode) {
    return PAGE_ORDER;
  }
  return PAGE_ORDER.filter((page) => !SKIP_IN_PRESENTATION.includes(page));
}

export function getNextPage(
  currentPage: string | null,
  isPresentationMode = false,
): PageRoute | null {
  const pageOrder = getPageOrder(isPresentationMode);

  if (!currentPage) return pageOrder[0];

  // If current page is skipped in presentation mode, find the next valid page
  if (isPresentationMode && SKIP_IN_PRESENTATION.includes(currentPage as PageRoute)) {
    const currentIndexInFull = PAGE_ORDER.indexOf(currentPage as PageRoute);
    if (currentIndexInFull === -1) return null;
    
    // Find the next page in the full order that is not skipped
    for (let i = currentIndexInFull + 1; i < PAGE_ORDER.length; i++) {
      if (!SKIP_IN_PRESENTATION.includes(PAGE_ORDER[i])) {
        return PAGE_ORDER[i];
      }
    }
    return null;
  }

  const currentIndex = pageOrder.indexOf(currentPage as PageRoute);
  if (currentIndex === -1 || currentIndex === pageOrder.length - 1) {
    return null;
  }

  return pageOrder[currentIndex + 1];
}

export function getPreviousPage(
  currentPage: string | null,
  isPresentationMode = false,
): PageRoute | null {
  const pageOrder = getPageOrder(isPresentationMode);

  if (!currentPage) return null;

  // If current page is skipped in presentation mode, find the previous valid page
  if (isPresentationMode && SKIP_IN_PRESENTATION.includes(currentPage as PageRoute)) {
    const currentIndexInFull = PAGE_ORDER.indexOf(currentPage as PageRoute);
    if (currentIndexInFull === -1) return null;
    
    // Find the previous page in the full order that is not skipped
    for (let i = currentIndexInFull - 1; i >= 0; i--) {
      if (!SKIP_IN_PRESENTATION.includes(PAGE_ORDER[i])) {
        return PAGE_ORDER[i];
      }
    }
    return null;
  }

  const currentIndex = pageOrder.indexOf(currentPage as PageRoute);
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }

  return pageOrder[currentIndex - 1];
}

export function getPagePath(page: PageRoute): string {
  if (page === "comparison") return "/comparison";
  if (page === "thank-you") return "/thank-you";
  return `/${page}`;
}
