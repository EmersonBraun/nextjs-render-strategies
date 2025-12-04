import { getTranslations } from "next-intl/server";
import { ImplementationTabsClient } from "@/components/implementation-tabs-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function ImplementationCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.streaming.implementation",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ImplementationTabsClient namespace="pages.streaming.implementation" />
      </CardContent>
    </Card>
  );
}
