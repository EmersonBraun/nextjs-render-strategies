import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function ImplementationCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.isr.implementation",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{t("description")}</p>
          <div className="bg-muted rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function ISRComponent({ params }: { params: { id: string } }) {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return <div>{data.message}</div>;
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
