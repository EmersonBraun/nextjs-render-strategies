import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { IntroSlide } from "@/components/intro-slide";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { BenefitsCard } from "./components/benefits-card";
import { BuildTimeSection } from "./components/build-time-section";
import { ClientSection } from "./components/client-section";
import { ImplementationCard } from "./components/implementation-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ppr" });

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

export default async function PPRPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ presentationMode?: string }>;
}) {
  const { locale } = await params;
  const { presentationMode } = await searchParams;
  const isPresentationMode = presentationMode === "true";
  const t = await getTranslations({ locale, namespace: "pages.ppr" });

  const sectionIds = [
    "intro",
    "animation-build",
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
          id="animation-build"
          presentationMode={isPresentationMode}
        >
          <BuildTimeSection />
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
          <ImplementationCard locale={locale} />
        </SlideSection>
      </div>
    </>
  );
}
