"use client";

import { usePresentationStore } from "@/store/use-presentation-store";

export function usePresentationMode() {
  const isPresentationMode = usePresentationStore(
    (state) => state.isPresentationMode,
  );

  return {
    isPresentationMode,
  };
}
