import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { QRCodeCard } from "@/components/qr-code-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.thankYou" });

  return {
    title: t("title"),
    description: t("message"),
    openGraph: {
      title: t("title"),
      description: t("message"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("message"),
    },
  };
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.thankYou" });

  return (
    <div className="max-w-7xl mx-auto space-y-20 py-20 px-4">
      {/* Thank You Message Section */}
      <div className="relative text-center space-y-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 rounded-3xl" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("message")}
        </p>
      </div>

      {/* QR Codes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <QRCodeCard
          url="https://github.com/emersonbraun/nextjs-render-strategies"
          title={t("repository.title")}
          description={t("repository.description")}
        />
        <QRCodeCard
          url="https://linkedin.com/in/emerson-braun"
          title={t("linkedin.title")}
          description={t("linkedin.description")}
        />
      </div>
    </div>
  );
}

