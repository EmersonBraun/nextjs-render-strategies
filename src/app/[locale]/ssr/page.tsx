import { getTranslations } from "next-intl/server";
import { BenefitsCard } from "./components/benefits-card";
import { ComparisonCard } from "./components/comparison-card";
import { Step1Card } from "./components/step1-card";
import { Step2Card } from "./components/step2-card";
import { Step3Card } from "./components/step3-card";

// Simulate server-side data fetching
async function getServerData(locale: string) {
  // Simulate database/API call
  await new Promise((resolve) => setTimeout(resolve, 100));
  const t = await getTranslations({ locale, namespace: "pages.ssr" });
  return {
    message: t("step3.title"),
    timestamp: new Date().toLocaleTimeString(),
    serverTime: new Date().toISOString(),
  };
}

export default async function SSRPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ssr" });
  const data = await getServerData(locale);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="space-y-6">
        <Step1Card />
        <Step2Card />
        <Step3Card data={data} />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  );
}
