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
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            1
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              {t("description")}
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
              {t("generateStaticParams")}
            </p>
          </div>

          {pageId && (
            <div className="p-3 bg-muted border rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>{t("currentPageId")}</strong>{" "}
                <span className="font-mono">{pageId}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t("pageGeneratedId", { id: pageId })}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
