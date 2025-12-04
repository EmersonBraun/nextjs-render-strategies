import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Activity } from "react";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigationClient } from "@/components/slide-navigation-client";
import { SlideSection } from "@/components/slide-section";
import { BenefitsCard } from "./components/benefits-card";
import { BuildTimeSection } from "./components/build-time-section";
import { ClientSection } from "./components/client-section";
import { ImplementationCard } from "./components/implementation-card";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ssg" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function SSGPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ssg" });

  const sectionIds = [
    "intro",
    "animation-build",
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
        <SlideSection id="animation-build">
          <BuildTimeSection />
        </SlideSection>
        <SlideSection id="animation-client">
          <ClientSection />
        </SlideSection>
        <SlideSection id="benefits">
          <BenefitsCard />
        </SlideSection>
        <SlideSection id="implementation">
          <ImplementationCard locale={locale} />
        </SlideSection>
      </div>
    </>
  );
}
