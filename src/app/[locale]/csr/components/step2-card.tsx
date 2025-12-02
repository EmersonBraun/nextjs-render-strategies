"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step2CardProps {
  loading: boolean;
  pageLoaded: boolean;
  showFetching: boolean;
  onFetchData: () => void;
}

export function Step2Card({
  loading,
  pageLoaded,
  showFetching,
  onFetchData,
}: Step2CardProps) {
  const t = useTranslations("pages.csr.step2");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="w-7 h-7 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
            2
          </span>
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button onClick={onFetchData} disabled={loading || !pageLoaded}>
            {loading ? t("loading") : t("loadButton")}
          </Button>

          {showFetching && (
            <div className="p-5 bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-950/50 dark:to-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-xl">
              <div className="flex items-center gap-2.5">
                <div className="animate-spin w-4 h-4 border-2 border-amber-600 dark:border-amber-400 border-t-transparent rounded-full"></div>
                <p className="text-foreground">{t("fetching")}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
