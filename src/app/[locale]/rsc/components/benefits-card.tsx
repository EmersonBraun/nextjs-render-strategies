"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BenefitsCard() {
  const t = useTranslations("pages.rsc.benefits");

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5">
          <ul className="text-foreground space-y-2.5">
            {t.raw("items").map((item: string) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
