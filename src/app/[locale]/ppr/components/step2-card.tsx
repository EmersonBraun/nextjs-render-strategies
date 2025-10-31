import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { unstable_noStore as noStore } from "next/cache";

// Dynamic content - rendered at request time
async function DynamicContent({ locale }: { locale: string }) {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 500));

  const t = await getTranslations({ locale, namespace: "pages.ppr.step2" });
  const dynamicData = {
    currentTime: new Date().toLocaleTimeString(),
    randomNumber: Math.floor(Math.random() * 1000),
  };

  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        {t("dynamicContentLoaded")}
      </p>
      <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
        {t("time")} {dynamicData.currentTime} | {t("random")}{" "}
        {dynamicData.randomNumber}
      </p>
    </div>
  );
}

// Another dynamic section
async function UserSpecificContent({ locale }: { locale: string }) {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 300));

  const t = await getTranslations({ locale, namespace: "pages.ppr.step2" });

  return (
    <div className="p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg">
      <p className="text-purple-800 dark:text-purple-200">
        {t("userSpecificContentLoaded")}
      </p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="p-4 bg-muted border rounded-lg animate-pulse">
      <div className="h-4 bg-muted-foreground/20 rounded w-1/3 mb-2"></div>
      <div className="h-3 bg-muted-foreground/20 rounded w-2/3"></div>
    </div>
  );
}

export async function Step2Card({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "pages.ppr.step2" });

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
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t("descriptionText")}
          </p>

          <div>
            <h4 className="font-medium mb-2">{t("dynamicContent")}</h4>
            <Suspense fallback={<LoadingSkeleton />}>
              <DynamicContent locale={locale} />
            </Suspense>
          </div>

          <div>
            <h4 className="font-medium mb-2">{t("userContent")}</h4>
            <Suspense fallback={<LoadingSkeleton />}>
              <UserSpecificContent locale={locale} />
            </Suspense>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
