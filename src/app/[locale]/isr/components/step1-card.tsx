"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step1Card() {
  const t = useTranslations("pages.isr.step1");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-sm flex items-center justify-center text-sm">
            1
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/50 dark:to-green-900/30 border border-green-200/60 dark:border-green-800/40 rounded-xl">
          <p className="text-foreground leading-relaxed">{t("description")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
