import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { IntroSlide } from "@/components/intro-slide";
import { PresentationLink } from "@/components/presentation-link";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
    openGraph: {
      title: t("hero.title"),
      description: t("hero.subtitle"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("hero.title"),
      description: t("hero.subtitle"),
    },
  };
}

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ presentationMode?: string }>;
}) {
  const { locale } = await params;
  const { presentationMode } = await searchParams;
  const isPresentationMode = presentationMode === "true";
  const t = await getTranslations({ locale, namespace: "pages.home" });

  // If in presentation mode, show only intro slide
  if (isPresentationMode) {
    const sectionIds = ["intro"];

    return (
      <>
        <Suspense fallback={null}>
          <SlideNavigation sectionIds={sectionIds} />
        </Suspense>
        <div className="max-w-7xl mx-auto">
          <SlideSection id="intro" presentationMode={isPresentationMode}>
            <IntroSlide
              title={t("hero.title")}
              description={t("hero.subtitle")}
              showGradient
            />
          </SlideSection>
        </div>
      </>
    );
  }

  // Normal mode: show full content
  return (
    <div className="max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <div className="relative text-center space-y-8 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 rounded-3xl" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button asChild size="lg" className="text-base px-8 h-12">
            <PresentationLink href="/csr">{t("hero.cta")}</PresentationLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8 h-12"
          >
            <PresentationLink href="/comparison">
              {t("hero.secondaryCta")}
            </PresentationLink>
          </Button>
        </div>
      </div>

      {/* Strategies Section */}
      <section className="space-y-8 px-4">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("strategies.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("strategies.description")}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8 px-4">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("features.interactive.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {t("features.interactive.description")}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("features.comparisons.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {t("features.comparisons.description")}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("features.practical.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {t("features.practical.description")}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("features.comprehensive.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {t("features.comprehensive.description")}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison CTA Section */}
      <section className="px-4">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-2xl md:text-3xl">
              {t("comparison.title")}
            </CardTitle>
            <CardDescription className="text-base max-w-2xl mx-auto">
              {t("comparison.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-4">
            <Button
              asChild
              size="lg"
              variant="default"
              className="text-base px-8 h-12"
            >
              <PresentationLink href="/comparison">
                {t("comparison.cta")}
              </PresentationLink>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
