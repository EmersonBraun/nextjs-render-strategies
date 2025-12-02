"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step3Card() {
  const t = useTranslations("pages.ppr.step3");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-sm flex items-center justify-center text-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
          <p className="text-foreground leading-relaxed">{t("description")}</p>
          <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
            {t("subDescription")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
