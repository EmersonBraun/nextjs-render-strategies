import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function ImplementationCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.ppr.implementation",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{t("description")}</p>
          <div className="bg-muted rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`// next.config.js
export default {
  experimental: {
    ppr: true, // or cacheComponents: true
  },
};

import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <StaticHeader />
      <Suspense fallback={<Skeleton />}>
        <DynamicContent />
      </Suspense>
    </div>
  );
}
`}</code>
            </pre>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2">
            {((t.raw("points") as string[]) || []).map((point: string) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
