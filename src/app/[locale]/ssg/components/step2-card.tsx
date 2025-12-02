"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step2Card() {
  const t = useTranslations("pages.ssg.step2");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            2
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-950/50 dark:to-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-xl">
          <p className="text-foreground leading-relaxed">{t("description")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
