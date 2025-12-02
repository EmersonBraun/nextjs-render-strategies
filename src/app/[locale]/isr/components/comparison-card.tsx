"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparisonCard() {
  const t = useTranslations("pages.isr.comparison");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">
                {t("initialSpeed")}:
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {t("valueFast")}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">
                {t("seoPerformance")}:
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {t("valueGreat")}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">
                {t("dynamicContent")}:
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">
                {t("valueMedium")}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">
                {t("serverLoad")}:
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {t("valueLow")}
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40">
              <span className="text-foreground font-medium">
                {t("bestFor")}:
              </span>
              <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {t("bestForValue")}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
