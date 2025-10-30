import { getTranslations } from "next-intl/server";
import { BenefitsCard } from "./components/benefits-card";
import { ComparisonCard } from "./components/comparison-card";
import { Step1Card } from "./components/step1-card";
import { Step2Card } from "./components/step2-card";
import { Step3Card } from "./components/step3-card";

// Static content - prerendered at build time
async function getStaticContent(locale: string) {
  const t = await getTranslations({ locale, namespace: "pages.ppr.step1" });
  return {
    message: t("staticShellReady"),
    buildTime: "2024-01-15T10:30:00Z",
  };
}

export default async function PPRPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ppr" });
  const staticContent = await getStaticContent(locale);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="space-y-6">
        <Step1Card staticContent={staticContent} locale={locale} />
        <Step2Card locale={locale} />
        <Step3Card />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  );
}
