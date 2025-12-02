"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step1CardProps {
  pageId?: string;
}

export function Step1Card({ pageId }: Step1CardProps) {
  const t = useTranslations("pages.ssg.step1");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            1
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
            <p className="text-foreground leading-relaxed">
              {t("description")}
            </p>
            <p className="text-sm text-muted-foreground mt-2.5 font-medium">
              {t("generateStaticParams")}
            </p>
          </div>

          {pageId && (
            <div className="p-4 bg-muted/50 border border-border/60 rounded-xl">
              <p className="text-sm text-foreground">
                <span className="font-medium text-muted-foreground">{t("currentPageId")}</span>{" "}
                <span className="font-mono text-foreground font-semibold">{pageId}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                {t("pageGeneratedId", { id: pageId })}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
