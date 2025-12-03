import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Takeaways {
  title: string;
  static: {
    title: string;
    description: string;
    items: string[];
  };
  dynamic: {
    title: string;
    description: string;
    items: string[];
  };
  hybrid: {
    title: string;
    description: string;
    items: string[];
  };
}

export async function TakeawaysCard({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "pages.comparison",
  });

  const takeaways = t.raw("takeaways") as Takeaways;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{takeaways.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">{takeaways.static.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {takeaways.static.description}
            </p>
            <ul className="text-sm space-y-1">
              {takeaways.static.items.map((item: string) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">{takeaways.dynamic.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {takeaways.dynamic.description}
            </p>
            <ul className="text-sm space-y-1">
              {takeaways.dynamic.items.map((item: string) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">{takeaways.hybrid.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {takeaways.hybrid.description}
            </p>
            <ul className="text-sm space-y-1">
              {takeaways.hybrid.items.map((item: string) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
