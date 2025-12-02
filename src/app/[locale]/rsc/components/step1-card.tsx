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
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-sm flex items-center justify-center text-sm">
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

          <div className="p-5 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-xl">
            <h4 className="font-semibold text-foreground leading-relaxed mb-3">
              {t("serverDataDetails")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t("serverTimestamp")}
                </span>
                <span className="text-foreground font-medium">
                  {serverData.timestamp}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t("environment")}
                </span>
                <span className="text-foreground font-medium">
                  {serverData.environment}
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-lg text-xs text-muted-foreground">
              <strong className="text-foreground">{t("keyPoint")}</strong>{" "}
              {t("keyPointText")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
