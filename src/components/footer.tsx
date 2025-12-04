"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePresentationStore } from "@/store/use-presentation-store";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isPresentationMode = usePresentationStore(
    (state) => state.isPresentationMode,
  );

  if (isPresentationMode) {
    return null;
  }

  const currentDate = new Date().toLocaleDateString(
    locale === "uk" ? "uk-UA" : locale,
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  );

  const copyrightText = t("copyright", { date: currentDate });
  const nameToLink = "Emerson Braun";
  const parts = copyrightText.split(nameToLink);

  return (
    <footer className="border-t border-border/60 bg-background mt-16 text-center py-8">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="text-muted-foreground">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <a
                href="https://emersonbraun.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors underline"
              >
                {nameToLink}
              </a>
              {parts[1]}
            </>
          ) : (
            copyrightText
          )}
        </div>
        <div className="text-border">|</div>
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/emersonbraun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("linkedin")}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/EmersonfBraun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("twitter")}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/EmersonBraun/nextjs-render-strategies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("github")}
          </a>
        </div>
      </div>
    </footer>
  );
}
