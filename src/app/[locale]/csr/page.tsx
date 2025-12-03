import { getTranslations } from "next-intl/server";
import { Activity } from "react";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigationClient } from "@/components/slide-navigation-client";
import { SlideSection } from "@/components/slide-section";
import { BenefitsCard } from "./components/benefits-card";
import { ClientSection } from "./components/client-section";
import { ImplementationCard } from "./components/implementation-card";
import { ServerSection } from "./components/server-section";

export const dynamic = "force-dynamic";

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
      <Activity mode={isPresentationMode ? "visible" : "hidden"}>
        <SlideNavigationClient sectionIds={sectionIds} />
      </Activity>
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
