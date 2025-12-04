"use client";

import { useTranslations } from "next-intl";
import { ImplementationTabsClient } from "@/components/implementation-tabs-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ImplementationCard() {
  const t = useTranslations("pages.csr.implementation");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ImplementationTabsClient namespace="pages.csr.implementation" />
      </CardContent>
    </Card>
  );
}
