import { getTranslations } from "next-intl/server";
import { Activity } from "react";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigationClient } from "@/components/slide-navigation-client";
import { SlideSection } from "@/components/slide-section";
import { BenefitsCard } from "./components/benefits-card";
import { ClientSection } from "./components/client-section";
import { ImplementationCard } from "./components/implementation-card";
import { ServerSection } from "./components/server-section";

export default async function CSRPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
      <Activity mode="visible">
        <SlideNavigationClient sectionIds={sectionIds} />
      </Activity>
      <div className="max-w-7xl mx-auto">
        <SlideSection id="intro">
          <IntroSlide title={t("title")} description={t("description")} />
        </SlideSection>
        <SlideSection id="animation-server">
          <ServerSection />
        </SlideSection>
        <SlideSection id="animation-client">
          <ClientSection />
        </SlideSection>
        <SlideSection id="benefits">
          <BenefitsCard />
        </SlideSection>
        <SlideSection id="implementation">
          <ImplementationCard />
        </SlideSection>
      </div>
    </>
  );
}
