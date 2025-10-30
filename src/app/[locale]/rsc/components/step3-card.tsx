"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step3Card() {
  const t = useTranslations("pages.rsc.step3");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg">
          <p className="text-purple-800 dark:text-purple-200">
            {t("description")}
          </p>
          <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">
            {t("subDescription")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
