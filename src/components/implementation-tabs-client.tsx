"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImplementationTabsClientProps {
  namespace: string;
}

export function ImplementationTabsClient({
  namespace,
}: ImplementationTabsClientProps) {
  const t = useTranslations(namespace);

  const frameworks = ["nextjs", "remix", "tanstack"] as const;

  return (
    <Tabs defaultValue="nextjs" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="nextjs">Next.js</TabsTrigger>
        <TabsTrigger value="remix">Remix</TabsTrigger>
        <TabsTrigger value="tanstack">TanStack Start</TabsTrigger>
      </TabsList>
      {frameworks.map((framework) => (
        <TabsContent
          key={framework}
          value={framework}
          className="space-y-4 mt-4"
        >
          <p className="text-muted-foreground">
            {t(`frameworks.${framework}.description`)}
          </p>
          <div className="bg-muted rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{t.raw(`frameworks.${framework}.code`) as string}</code>
            </pre>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2">
            {(Array.isArray(t.raw(`frameworks.${framework}.points`))
              ? (t.raw(`frameworks.${framework}.points`) as string[])
              : []
            ).map((point: string) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
