import { getTranslations } from "next-intl/server";
import { BenefitsCard } from "../components/benefits-card";
import { ComparisonCard } from "../components/comparison-card";
import { Step1Card } from "../components/step1-card";
import { Step2Card } from "../components/step2-card";
import { Step3Card } from "../components/step3-card";

// Simulate fetching data for a specific ID at build time
async function getStaticData(id: string) {
  // Simulate database/API call
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Simulate different data based on ID
  const mockData = {
    "1": {
      title: "Getting Started with SSG",
      content: "Learn the basics of Static Site Generation",
      author: "John Doe",
      publishDate: "2024-01-15",
      views: 1250,
      category: "Tutorial",
    },
    "2": {
      title: "Advanced SSG Patterns",
      content: "Explore advanced patterns and optimizations",
      author: "Jane Smith",
      publishDate: "2024-01-20",
      views: 890,
      category: "Advanced",
    },
    "3": {
      title: "SSG vs SSR Performance",
      content: "Compare performance between SSG and SSR",
      author: "Mike Johnson",
      publishDate: "2024-01-25",
      views: 2100,
      category: "Comparison",
    },
  };

  return (
    mockData[id as keyof typeof mockData] || {
      title: `Dynamic Content for ID: ${id}`,
      content: "This content was generated at build time",
      author: "System",
      publishDate: new Date().toISOString().split("T")[0],
      views: Math.floor(Math.random() * 1000) + 100,
      category: "Dynamic",
    }
  );
}

// Generate static params for all possible IDs
export async function generateStaticParams() {
  // In a real scenario, this would fetch from your database/API
  const ids = ["1", "2", "3"];

  return ids.map((id) => ({
    id: id,
  }));
}

// This function runs at build time for each static page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getStaticData(id);

  return {
    title: `${data.title} - SSG Demo`,
    description: data.content,
  };
}

export default async function SSGPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.ssg" });
  const data = await getStaticData(id);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground">
          {t("step1.currentPageId")}{" "}
          <span className="font-mono bg-muted px-2 py-1 rounded">{id}</span>
        </p>
      </div>

      <div className="space-y-6">
        <Step1Card pageId={id} />
        <Step2Card />
        <Step3Card
          staticData={{
            message: t("step3.title"),
            buildTime: new Date().toISOString(),
            pageData: data,
          }}
        />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  );
}
