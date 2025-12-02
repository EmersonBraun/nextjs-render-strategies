import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function ImplementationCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.rsc.implementation",
  });

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
              <code>{`// Server Component (default)
export default async function ServerComponent() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <ClientComponent data={data} />
    </div>
  );
}

// Client Component (when needed)
"use client";
import { useState } from "react";

export function ClientComponent({ data }: { data: any }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
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
