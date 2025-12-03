import { getTranslations } from "next-intl/server";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { ComparisonTableCard } from "./components/comparison-table-card";
import { TakeawaysCard } from "./components/takeaways-card";

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
      {isPresentationMode && <SlideNavigation sectionIds={sectionIds} />}
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
