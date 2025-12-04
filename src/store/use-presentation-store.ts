"use client";

import { create } from "zustand";

export interface PresentationStore {
  isPresentationMode: boolean;
  togglePresentationMode: () => void;
  setPresentationMode: (value: boolean) => void;
}

export const usePresentationStore = create<PresentationStore>((set) => ({
  isPresentationMode: false,
  togglePresentationMode: () =>
    set((state) => ({ isPresentationMode: !state.isPresentationMode })),
  setPresentationMode: (value: boolean) =>
    set({ isPresentationMode: value }),
}));

