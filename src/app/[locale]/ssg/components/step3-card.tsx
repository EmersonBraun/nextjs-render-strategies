"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step3CardProps {
  staticData: {
    message: string;
    buildTime: string;
    pageData?: {
      title: string;
      content: string;
      author: string;
      publishDate: string;
      views: number;
      category: string;
    };
  };
}

export function Step3Card({ staticData }: Step3CardProps) {
  const t = useTranslations("pages.ssg.step3");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-xl">
            <p className="text-foreground leading-relaxed font-medium">
              {staticData.message}
            </p>
            <p className="text-sm text-muted-foreground mt-2.5">
              {t("builtAt")} {new Date(staticData.buildTime).toLocaleString()}
            </p>
          </div>

          {staticData.pageData && (
            <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">
                {t("previewTitle")}
              </h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {t("titleLabel")}
                  </span>
                  <span className="text-foreground font-medium">
                    {staticData.pageData.title}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {t("authorLabel")}
                  </span>
                  <span className="text-foreground">
                    {staticData.pageData.author}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {t("categoryLabel")}
                  </span>
                  <span className="text-foreground">
                    {staticData.pageData.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {t("viewsLabel")}
                  </span>
                  <span className="text-foreground font-medium">
                    {staticData.pageData.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {t("publishedLabel")}
                  </span>
                  <span className="text-foreground">
                    {staticData.pageData.publishDate}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
