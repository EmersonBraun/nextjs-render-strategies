"use client";

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type LinkProps = ComponentProps<typeof Link>;

export function PresentationLink({ href, ...props }: LinkProps) {
  return <Link href={href} {...props} />;
}
