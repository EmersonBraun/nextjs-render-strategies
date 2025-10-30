"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step3CardProps {
  data: {
    message: string;
    lastGenerated: string;
    nextRegeneration: string;
  };
}

export function Step3Card({ data }: Step3CardProps) {
  const t = useTranslations("pages.isr.step3");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">✅ {data.message}</p>
          <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
            {t("generated")} {data.lastGenerated}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-300">
            {t("nextUpdate")} {data.nextRegeneration}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
