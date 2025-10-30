"use client";

import { useLocale, useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const currentDate = new Date().toLocaleDateString(
    locale === "uk" ? "uk-UA" : locale,
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  );

  return (
    <footer className="border-t bg-background mt-12 text-center py-4">
      <div className="flex justify-center gap-4">
        <div>{t("copyright", { date: currentDate })}</div>
        <div>|</div>
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
            href="https://x.com/emersonbraun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("twitter")}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/emersonbraun"
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
