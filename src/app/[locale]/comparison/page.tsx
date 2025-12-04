import { getTranslations } from "next-intl/server";
import { Activity } from "react";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigationClient } from "@/components/slide-navigation-client";
import { SlideSection } from "@/components/slide-section";
import { ComparisonTableCard } from "./components/comparison-table-card";
import { TakeawaysCard } from "./components/takeaways-card";

export const dynamic = "force-dynamic";

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.comparison" });

  const sectionIds = ["intro", "table", "takeaways"];

  return (
    <>
      <Activity mode="visible">
        <SlideNavigationClient sectionIds={sectionIds} />
      </Activity>
      <div className="max-w-6xl mx-auto">
        <SlideSection id="intro">
          <IntroSlide title={t("title")} description={t("subtitle")} />
        </SlideSection>
        <SlideSection id="table">
          <ComparisonTableCard locale={locale} />
        </SlideSection>
        <SlideSection id="takeaways">
          <TakeawaysCard locale={locale} />
        </SlideSection>
      </div>
    </>
  );
}
