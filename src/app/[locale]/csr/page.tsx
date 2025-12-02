"use client";

import { useTranslations } from "next-intl";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { IntroSlide } from "@/components/intro-slide";
import { BenefitsCard } from "./components/benefits-card";
import { ClientSection } from "./components/client-section";
import { ComparisonCard } from "./components/comparison-card";
import { ImplementationCard } from "./components/implementation-card";
import { ServerSection } from "./components/server-section";

export default function CSRPage() {
  const t = useTranslations("pages.csr");

  const sectionIds = ["intro", "animation-server", "animation-client", "benefits", "implementation", "comparison"];

  return (
    <>
      <SlideNavigation sectionIds={sectionIds} />
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
        <SlideSection id="comparison">
          <ComparisonCard />
        </SlideSection>
      </div>
    </>
  );
}
