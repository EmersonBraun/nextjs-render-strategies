import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

interface ComparisonData {
  technique: string;
  name: string;
  introduced: string;
  initialSpeed: string;
  seo: string;
  dynamicContent: string;
  serverLoad: string;
  useCases: string[];
  description: string;
  tradeoffs: string;
}

export async function ComparisonTableCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.comparison",
  });

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

  const comparisonData: ComparisonData[] = techniques.map((technique) => ({
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center mb-[-48px]">
          {t("tableTitle")}
        </CardTitle>
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
                <tr key={item.technique} className="border-b hover:bg-muted/50">
                  <td className="p-2">
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
  );
}
