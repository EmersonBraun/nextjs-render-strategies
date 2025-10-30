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
    <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200 font-medium">
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
    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="animate-spin w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full"></div>
        <p className="text-yellow-800 dark:text-yellow-200">{message}</p>
      </div>
    </div>
  );
}

export async function Step2Card({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.streaming.step2",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm">
            2
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground mb-2">
            {t("description")}
          </p>
          <Suspense fallback={<LoadingSpinner message={t("loadingMessage")} />}>
            <SlowDataComponent
              delay={2000}
              titleKey="slowDataTitle"
              locale={locale}
            />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}
