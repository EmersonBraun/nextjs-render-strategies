"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step3CardProps {
  showContent: boolean;
  data: { message: string; timestamp: string } | null;
}

export function Step3Card({ showContent, data }: Step3CardProps) {
  const t = useTranslations("pages.csr.step3");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showContent && data ? (
          <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
            <p className="text-foreground leading-relaxed font-medium">
              {data.message}
            </p>
            <p className="text-sm text-muted-foreground mt-2.5">
              {t("loadedAt")} {data.timestamp}
            </p>
          </div>
        ) : (
          <div className="p-5 bg-muted/50 border border-border/60 rounded-xl">
            <p className="text-muted-foreground">{t("clickToLoad")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
