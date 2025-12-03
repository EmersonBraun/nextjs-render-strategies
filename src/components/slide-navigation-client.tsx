"use client";

import dynamic from "next/dynamic";
import type { SlideNavigationProps } from "./slide-navigation";

const SlideNavigation = dynamic(
  () => import("./slide-navigation").then((mod) => mod.SlideNavigation),
  { ssr: false },
);

export function SlideNavigationClient(props: SlideNavigationProps) {
  return <SlideNavigation {...props} />;
}
