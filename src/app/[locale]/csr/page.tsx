import { getTranslations } from "next-intl/server";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { BenefitsCard } from "./components/benefits-card";
import { ClientSection } from "./components/client-section";
import { ImplementationCard } from "./components/implementation-card";
import { ServerSection } from "./components/server-section";

export default async function CSRPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ presentationMode?: string }>;
}) {
  const { locale } = await params;
  const { presentationMode } = await searchParams;
  const isPresentationMode = presentationMode === "true";
  const t = await getTranslations({ locale, namespace: "pages.csr" });

  const sectionIds = [
    "intro",
    "animation-server",
    "animation-client",
    "benefits",
    "implementation",
  ];

  return (
    <>
      {isPresentationMode && <SlideNavigation sectionIds={sectionIds} />}
      <div className="max-w-7xl mx-auto">
        <SlideSection id="intro" presentationMode={isPresentationMode}>
          <IntroSlide title={t("title")} description={t("description")} />
        </SlideSection>
        <SlideSection
          id="animation-server"
          presentationMode={isPresentationMode}
        >
          <ServerSection />
        </SlideSection>
        <SlideSection
          id="animation-client"
          presentationMode={isPresentationMode}
        >
          <ClientSection />
        </SlideSection>
        <SlideSection id="benefits" presentationMode={isPresentationMode}>
          <BenefitsCard />
        </SlideSection>
        <SlideSection id="implementation" presentationMode={isPresentationMode}>
          <ImplementationCard />
        </SlideSection>
      </div>
    </>
  );
}
