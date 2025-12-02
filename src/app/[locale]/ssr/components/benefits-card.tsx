"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BenefitsCard() {
  const t = useTranslations("pages.ssr.benefits");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                Benefits
              </h3>
              <ul className="text-foreground space-y-2.5">
                {t.raw("items").map((item: string) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trade-offs Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">
                Trade-offs
              </h3>
              <ul className="text-foreground space-y-2.5">
                {t.raw("tradeoffs").map((item: string) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
