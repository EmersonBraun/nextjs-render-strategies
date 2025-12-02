import { getTranslations } from "next-intl/server";

import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simulate slow data fetching
async function SlowDataComponent({
  delay = 2000,
  titleKey,
  locale,
}: {
  delay?: number;
  titleKey: string;
  locale: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const t = await getTranslations({
    locale,
    namespace: "pages.streaming.step2",
  });
  const title = t(titleKey as string);

  const dataReturn = {
    message: t("loadedAt"),
    timestamp: new Date().toLocaleTimeString(),
    delay: delay / 1000,
  };

  return (
    <div className="p-5 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
      <p className="text-foreground leading-relaxed font-medium">
        {title} loaded!
      </p>
      <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
        {dataReturn.message} {dataReturn.timestamp} (
        {t("afterDelay", { delay: dataReturn.delay })})
      </p>
    </div>
  );
}

// Loading component for Suspense
function LoadingSpinner({ message }: { message: string }) {
  return (
    <div className="p-5 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 dark:from-yellow-950/50 dark:to-yellow-900/30 border border-yellow-200/60 dark:border-yellow-800/40 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="animate-spin w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full"></div>
        <p className="text-foreground leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

export async function Step3Card({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.streaming.step3",
  });

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
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-2">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">{t("componentA")}</h4>
              <Suspense fallback={<LoadingSpinner message={t("loadingA")} />}>
                <SlowDataComponent
                  delay={1500}
                  titleKey="componentATitle"
                  locale={locale}
                />
              </Suspense>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t("componentB")}</h4>
              <Suspense fallback={<LoadingSpinner message={t("loadingB")} />}>
                <SlowDataComponent
                  delay={3000}
                  titleKey="componentBTitle"
                  locale={locale}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
