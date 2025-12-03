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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ presentationMode?: string }>;
}) {
  const { locale } = await params;
  const { presentationMode } = await searchParams;
  const isPresentationMode = presentationMode === "true";

  const t = await getTranslations({ locale, namespace: "pages.comparison" });

  const sectionIds = ["intro", "table", "takeaways"];

  return (
    <>
      <Activity mode={isPresentationMode ? "visible" : "hidden"}>
        <SlideNavigationClient sectionIds={sectionIds} />
      </Activity>
      <div className="max-w-6xl mx-auto">
        <SlideSection id="intro" presentationMode={isPresentationMode}>
          <IntroSlide title={t("title")} description={t("subtitle")} />
        </SlideSection>
        <SlideSection id="table" presentationMode={isPresentationMode}>
          <ComparisonTableCard locale={locale} />
        </SlideSection>
        <SlideSection id="takeaways" presentationMode={isPresentationMode}>
          <TakeawaysCard locale={locale} />
        </SlideSection>
      </div>
    </>
  );
}
