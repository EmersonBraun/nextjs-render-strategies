"use client";

import { useSearchParams } from "next/navigation";

export function usePresentationMode() {
  const searchParams = useSearchParams();
  const presentationMode = searchParams.get("presentationMode");
  const isPresentationMode = presentationMode === "true";

  const getUrlWithPresentationMode = (path: string): string => {
    if (isPresentationMode) {
      const separator = path.includes("?") ? "&" : "?";
      return `${path}${separator}presentationMode=true`;
    }
    return path;
  };

  return {
    isPresentationMode,
    presentationMode,
    getUrlWithPresentationMode,
  };
}
