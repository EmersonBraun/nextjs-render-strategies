"use client";

import { useTranslations } from "next-intl";

import { ClientDataComponent } from "@/components/client-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step2Card() {
  const t = useTranslations("pages.rsc.step2");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-sm flex items-center justify-center text-sm">
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
          <ClientDataComponent />
        </div>
      </CardContent>
    </Card>
  );
}
