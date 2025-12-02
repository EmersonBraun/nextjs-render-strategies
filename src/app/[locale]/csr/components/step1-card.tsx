import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Step1Card() {
  const t = useTranslations("pages.csr.step1");
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            1
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-xl">
          <p className="text-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
