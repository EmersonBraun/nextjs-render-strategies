import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
        <div className="pt-6">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8"
          >
            <Link href="/csr">{t("hero.cta")}</Link>
          </Button>
        </div>
      </div>

      {/* What is this project Section */}
      <section className="space-y-8 py-12">
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight">{t("whatIs.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("whatIs.description")}
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <Button asChild variant="outline" size="lg">
            <Link href="/csr">{t("whatIs.cta")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
