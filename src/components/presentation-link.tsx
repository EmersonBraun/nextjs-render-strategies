"use client";

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { usePresentationMode } from "@/lib/use-presentation-mode";

type LinkProps = ComponentProps<typeof Link>;

export function PresentationLink({ href, ...props }: LinkProps) {
  const { getUrlWithPresentationMode } = usePresentationMode();
  return <Link href={getUrlWithPresentationMode(href as string)} {...props} />;
}
