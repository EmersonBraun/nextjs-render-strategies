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
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-200">
              ⚡ {staticData.message}
            </p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">
              {t("builtAt")} {new Date(staticData.buildTime).toLocaleString()}
            </p>
          </div>

          {staticData.pageData && (
            <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                {t("previewTitle")}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">
                    {t("titleLabel")}
                  </span>
                  <span className="text-blue-800 dark:text-blue-200 font-medium">
                    {staticData.pageData.title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">
                    {t("authorLabel")}
                  </span>
                  <span className="text-blue-800 dark:text-blue-200">
                    {staticData.pageData.author}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">
                    {t("categoryLabel")}
                  </span>
                  <span className="text-blue-800 dark:text-blue-200">
                    {staticData.pageData.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">
                    {t("viewsLabel")}
                  </span>
                  <span className="text-blue-800 dark:text-blue-200">
                    {staticData.pageData.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">
                    {t("publishedLabel")}
                  </span>
                  <span className="text-blue-800 dark:text-blue-200">
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
