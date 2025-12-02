"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ImplementationCard() {
  const t = useTranslations("pages.csr.implementation");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{t("description")}</p>
          <div className="bg-muted rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`"use client";

import { useState, useEffect } from "react";

export default function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data?.message}</div>;
}`}</code>
            </pre>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2">
            {((t.raw("points") as string[]) || []).map((point: string) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
