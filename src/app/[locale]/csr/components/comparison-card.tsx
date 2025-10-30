"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparisonCard() {
  const t = useTranslations("pages.csr.comparison");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
            5
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">{t("initialSpeed")}:</span>
              <span className="text-red-600 dark:text-red-400 font-semibold">
                Slow
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">{t("seoPerformance")}:</span>
              <span className="text-red-600 dark:text-red-400 font-semibold">
                Poor
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">{t("dynamicContent")}:</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">
                High
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">{t("serverLoad")}:</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">
                Low
              </span>
            </div>
            <div className="mt-3">
              <span className="font-medium">{t("bestFor")}:</span>
              <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                {t("bestForValue")}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
