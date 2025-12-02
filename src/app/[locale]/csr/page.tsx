"use client";

import { useTranslations } from "next-intl";
import { BenefitsCard } from "./components/benefits-card";
import { ComparisonCard } from "./components/comparison-card";
import { DiagramCard } from "./components/diagram-card";

export default function CSRPage() {
  const t = useTranslations("pages.csr");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div className="text-center space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
      </div>

      <div className="space-y-6">
        <DiagramCard />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  );
}
