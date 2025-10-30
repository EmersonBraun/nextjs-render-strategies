import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getTranslations } from "next-intl/server";

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

  // Get comparison data for all modes
  const modes = ["csr", "ssr", "ssg", "isr", "rsc", "streaming", "ppr"];
  const comparisonData = modes.map((mode) => ({
    mode: mode.toUpperCase(),
    name: t(`modes.${mode}.name`),
    initialSpeed: t(`modes.${mode}.initialSpeed`),
    seo: t(`modes.${mode}.seo`),
    dynamicContent: t(`modes.${mode}.dynamicContent`),
    serverLoad: t(`modes.${mode}.serverLoad`),
    useCases: t.raw(`modes.${mode}.useCases`) as string[],
    description: t(`modes.${mode}.description`),
  }));

  const takeaways = t.raw("takeaways") as Takeaways;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

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
                    {headers.mode}
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
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((mode) => (
                  <tr key={mode.mode} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div>
                        <div className="font-semibold">{mode.mode}</div>
                        <div className="text-sm text-muted-foreground">
                          {mode.name}
                        </div>
                      </div>
                    </td>
                    <td
                      className={`p-3 font-medium ${getSpeedColor(mode.initialSpeed, speedLabels)}`}
                    >
                      {mode.initialSpeed}
                    </td>
                    <td
                      className={`p-3 font-medium ${getSEOColor(mode.seo, seoLabels)}`}
                    >
                      {mode.seo}
                    </td>
                    <td
                      className={`p-3 font-medium ${getDynamicColor(mode.dynamicContent, dynamicLabels)}`}
                    >
                      {mode.dynamicContent}
                    </td>
                    <td
                      className={`p-3 font-medium ${getServerLoadColor(mode.serverLoad, serverLoadLabels)}`}
                    >
                      {mode.serverLoad}
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        {mode.useCases.map((useCase, index) => (
                          <span key={useCase}>
                            {useCase}
                            {index < mode.useCases.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

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
    </div>
  );
}
