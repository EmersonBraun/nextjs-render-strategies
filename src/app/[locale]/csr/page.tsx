"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BenefitsCard } from "./components/benefits-card";
import { ComparisonCard } from "./components/comparison-card";
import { Step1Card } from "./components/step1-card";
import { Step2Card } from "./components/step2-card";
import { Step3Card } from "./components/step3-card";

export default function CSRPage() {
  const t = useTranslations("pages.csr");
  const [data, setData] = useState<{
    message: string;
    timestamp: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showFetching, setShowFetching] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate page loading sequence
    const timer1 = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowFetching(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setShowFetching(false);
      setData({
        message: t("step3.title"),
        timestamp: new Date().toLocaleTimeString(),
      });
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [t]);

  const fetchData = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setData({
      message: t("step3.title"),
      timestamp: new Date().toLocaleTimeString(),
    });
    setLoading(false);
  };

  // Show white page initially
  if (!pageLoaded) {
    return <div className="min-h-screen">{t("loading")}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div className="text-center space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
      </div>

      <div className="space-y-6">
        <Step1Card />
        <Step2Card
          loading={loading}
          pageLoaded={pageLoaded}
          showFetching={showFetching}
          onFetchData={fetchData}
        />
        <Step3Card showContent={showContent} data={data} />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  );
}
