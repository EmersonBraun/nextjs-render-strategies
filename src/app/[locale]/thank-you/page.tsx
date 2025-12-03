import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { QRCodesSection } from "./components/qr-codes-section";
import { ScrollToTop } from "./components/scroll-to-top";

export const dynamic = "force-dynamic";

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
    <>
      <ScrollToTop />
      <div className="max-w-7xl mx-auto space-y-20 py-20 px-4">
        {/* Thank You Message Section */}
        <div id="intro" className="relative text-center space-y-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 rounded-3xl" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("message")}
          </p>
        </div>

        {/* QR Codes Section - Easter Egg */}
        <QRCodesSection
          repositoryUrl="https://github.com/emersonbraun/nextjs-render-strategies"
          linkedinUrl="https://linkedin.com/in/emerson-braun"
          repositoryTitle={t("repository.title")}
          repositoryDescription={t("repository.description")}
          linkedinTitle={t("linkedin.title")}
          linkedinDescription={t("linkedin.description")}
        />
      </div>
    </>
  );
}
