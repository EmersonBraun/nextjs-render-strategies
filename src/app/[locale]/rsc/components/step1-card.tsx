import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step1CardProps {
  serverData: {
    message: string;
    timestamp: string;
    serverTime: string;
    lastUpdated: string;
    environment: string;
  };
  locale: string;
}

export async function Step1Card({ serverData, locale }: Step1CardProps) {
  const t = await getTranslations({ locale, namespace: "pages.rsc.step1" });

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
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-2">
            {t("description")}
          </p>

          <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
              {t("serverDataDetails")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">
                  {t("serverTimestamp")}
                </span>
                <span className="text-green-800 dark:text-green-200">
                  {serverData.timestamp}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">
                  {t("environment")}
                </span>
                <span className="text-green-800 dark:text-green-200">
                  {serverData.environment}
                </span>
              </div>
            </div>
            <div className="mt-3 p-2 bg-green-100 dark:bg-green-900 rounded text-xs text-green-700 dark:text-green-300">
              <strong>{t("keyPoint")}</strong> {t("keyPointText")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
