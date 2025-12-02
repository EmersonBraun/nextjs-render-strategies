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
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-sm flex items-center justify-center text-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
          <p className="text-foreground leading-relaxed font-medium">{data.message}</p>
          <p className="text-sm text-muted-foreground mt-2.5">
            {t("generated")} {data.lastGenerated}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("nextUpdate")} {data.nextRegeneration}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
