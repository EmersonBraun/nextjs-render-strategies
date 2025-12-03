import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function ImplementationCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.ssg.implementation",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{t("description")}</p>

          {/* Example with generateStaticParams for dynamic routes */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              {t("exampleWithDynamicRoute", {
                defaultValue: "Example with dynamic route [id]:",
              })}
            </p>
            <div className="bg-muted rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>{`// app/posts/[id]/page.tsx
export async function generateStaticParams() {
  return fetch('https://api.example.com/posts').then(res => res.json());
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetch(\`https://api.example.com/posts/\${id}\`).then(res => res.json());
  return <article>{post.content}</article>;
}`}</code>
              </pre>
            </div>
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
