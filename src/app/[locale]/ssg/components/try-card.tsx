import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function TryCard() {
  const t = useTranslations("pages.ssg");
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-blue-50/50 dark:from-blue-950/50 dark:via-purple-950/30 dark:to-blue-950/50 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {t("dynamicRoutes.title")}
      </h3>
      <p className="text-muted-foreground mb-5 leading-relaxed">
        {t("dynamicRoutes.description")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/ssg/1"
          className="p-4 bg-card border border-border/60 rounded-xl hover:bg-accent/50 hover:border-border transition-all duration-200"
        >
          <div className="font-medium text-foreground">
            {t("dynamicRoutes.links.gettingStarted")}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {t("dynamicRoutes.links.id")} 1
          </div>
        </Link>
        <Link
          href="/ssg/2"
          className="p-4 bg-card border border-border/60 rounded-xl hover:bg-accent/50 hover:border-border transition-all duration-200"
        >
          <div className="font-medium text-foreground">
            {t("dynamicRoutes.links.advancedPatterns")}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {t("dynamicRoutes.links.id")} 2
          </div>
        </Link>
        <Link
          href="/ssg/3"
          className="p-4 bg-card border border-border/60 rounded-xl hover:bg-accent/50 hover:border-border transition-all duration-200"
        >
          <div className="font-medium text-foreground">
            {t("dynamicRoutes.links.performanceComparison")}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {t("dynamicRoutes.links.id")} 3
          </div>
        </Link>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        {t("dynamicRoutes.tip")}
      </p>
    </div>
  );
}
