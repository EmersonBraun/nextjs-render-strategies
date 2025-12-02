import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";
import { SlideNavigation } from "@/components/slide-navigation";
import { SlideSection } from "@/components/slide-section";
import { IntroSlide } from "@/components/intro-slide";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function getSpeedColor(speed: string, speedLabels: Record<string, string>) {
  if (speed === speedLabels.high || speed === speedLabels.optimal) {
    return "text-green-600 dark:text-green-400";
  }
  if (speed === speedLabels.fast) {
    return "text-blue-600 dark:text-blue-400";
  }
  if (speed === speedLabels.slow) {
    return "text-red-600 dark:text-red-400";
  }
  return "text-gray-600 dark:text-gray-400";
}

function getSEOColor(seo: string, seoLabels: Record<string, string>) {
  if (seo === seoLabels.great) {
    return "text-green-600 dark:text-green-400";
  }
  if (seo === seoLabels.good) {
    return "text-blue-600 dark:text-blue-400";
  }
  if (seo === seoLabels.poor) {
    return "text-red-600 dark:text-red-400";
  }
  return "text-gray-600 dark:text-gray-400";
}

function getDynamicColor(
  dynamic: string,
  dynamicLabels: Record<string, string>,
) {
  if (dynamic === dynamicLabels.high) {
    return "text-green-600 dark:text-green-400";
  }
  if (dynamic === dynamicLabels.medium) {
    return "text-yellow-600 dark:text-yellow-400";
  }
  if (dynamic === dynamicLabels.low) {
    return "text-red-600 dark:text-red-400";
  }
  return "text-gray-600 dark:text-gray-400";
}

function getServerLoadColor(
  load: string,
  serverLoadLabels: Record<string, string>,
) {
  if (load === serverLoadLabels.none || load === serverLoadLabels.low) {
    return "text-green-600 dark:text-green-400";
  }
  if (load === serverLoadLabels.balanced || load === serverLoadLabels.medium) {
    return "text-yellow-600 dark:text-yellow-400";
  }
  if (load === serverLoadLabels.high) {
    return "text-red-600 dark:text-red-400";
  }
  return "text-gray-600 dark:text-gray-400";
}

interface Takeaways {
  title: string;
  static: {
    title: string;
    description: string;
    items: string[];
  };
  dynamic: {
    title: string;
    description: string;
    items: string[];
  };
  hybrid: {
    title: string;
    description: string;
    items: string[];
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.comparison" });

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("subtitle"),
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.comparison" });
  const headers = t.raw("headers") as unknown as Record<string, string>;
  const speedLabels = t.raw("speedLabels") as Record<string, string>;
  const seoLabels = t.raw("seoLabels") as Record<string, string>;
  const dynamicLabels = t.raw("dynamicLabels") as Record<string, string>;
  const serverLoadLabels = t.raw("serverLoadLabels") as Record<string, string>;

  // Get comparison data for all techniques
  const techniques = ["csr", "ssr", "ssg", "isr", "rsc", "streaming", "ppr"];
  const tradeoffsData = t.raw("tradeoffs.items") as Array<{
    strategy: string;
    tradeoffs: string;
  }>;

  // Helper function to normalize strategy name for tradeoffs lookup
  const normalizeStrategyName = (technique: string): string => {
    if (technique === "streaming") return "Streaming";
    return technique.toUpperCase();
  };

  const tradeoffsMap = new Map(
    tradeoffsData.map((item) => [item.strategy, item.tradeoffs]),
  );

  const comparisonData = techniques.map((technique) => ({
    technique: technique.toUpperCase(),
    name: t(`modes.${technique}.name`),
    introduced: t(`modes.${technique}.introduced`),
    initialSpeed: t(`modes.${technique}.initialSpeed`),
    seo: t(`modes.${technique}.seo`),
    dynamicContent: t(`modes.${technique}.dynamicContent`),
    serverLoad: t(`modes.${technique}.serverLoad`),
    useCases: t.raw(`modes.${technique}.useCases`) as string[],
    description: t(`modes.${technique}.description`),
    tradeoffs: tradeoffsMap.get(normalizeStrategyName(technique)) || "",
  }));

  const takeaways = t.raw("takeaways") as Takeaways;

  const sectionIds = ["intro", "table", "takeaways"];

  return (
    <>
      <SlideNavigation sectionIds={sectionIds} />
      <div className="max-w-6xl mx-auto">
        <SlideSection id="intro">
          <IntroSlide title={t("title")} description={t("subtitle")} />
        </SlideSection>
        <SlideSection id="table">
          <Card>
            <CardHeader>
              <CardTitle>{t("tableTitle")}</CardTitle>
              <CardDescription>{t("tableDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">
                        {headers.technique}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.introduced}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.initialSpeed}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.seoPerformance}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.dynamicContent}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.serverLoad}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.useCases}
                      </th>
                      <th className="text-left p-3 font-semibold">
                        {headers.keyTradeoffs}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item) => (
                      <tr
                        key={item.technique}
                        className="border-b hover:bg-muted/50"
                      >
                        <td className="p-3">
                          <div>
                            <div className="font-semibold">{item.technique}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm">{item.introduced}</td>
                        <td
                          className={`p-3 font-medium ${getSpeedColor(item.initialSpeed, speedLabels)}`}
                        >
                          {item.initialSpeed}
                        </td>
                        <td
                          className={`p-3 font-medium ${getSEOColor(item.seo, seoLabels)}`}
                        >
                          {item.seo}
                        </td>
                        <td
                          className={`p-3 font-medium ${getDynamicColor(item.dynamicContent, dynamicLabels)}`}
                        >
                          {item.dynamicContent}
                        </td>
                        <td
                          className={`p-3 font-medium ${getServerLoadColor(item.serverLoad, serverLoadLabels)}`}
                        >
                          {item.serverLoad}
                        </td>
                        <td className="p-3">
                          <div className="text-sm">
                            {item.useCases.map((useCase, index) => (
                              <span key={useCase}>
                                {useCase}
                                {index < item.useCases.length - 1 && ", "}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 text-sm">{item.tradeoffs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </SlideSection>
        <SlideSection id="takeaways">
          <Card>
            <CardHeader>
              <CardTitle>{takeaways.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{takeaways.static.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {takeaways.static.description}
                  </p>
                  <ul className="text-sm space-y-1">
                    {takeaways.static.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{takeaways.dynamic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {takeaways.dynamic.description}
                  </p>
                  <ul className="text-sm space-y-1">
                    {takeaways.dynamic.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{takeaways.hybrid.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {takeaways.hybrid.description}
                  </p>
                  <ul className="text-sm space-y-1">
                    {takeaways.hybrid.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideSection>
      </div>
    </>
  );
}
