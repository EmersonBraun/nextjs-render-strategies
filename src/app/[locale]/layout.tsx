import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "pt", "es", "uk"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });

  return {
    title: {
      default: t("hero.title"),
      template: `%s | ${t("hero.title")}`,
    },
    description: t("hero.subtitle"),
    keywords: [
      "Next.js",
      "React",
      "Rendering Strategies",
      "SSR",
      "SSG",
      "ISR",
      "CSR",
      "RSC",
      "Streaming",
      "PPR",
      "Server Components",
      "Web Development",
      "Performance",
      "SEO",
    ],
    authors: [{ name: "Emerson Braun" }],
    creator: "Emerson Braun",
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locales.filter((l) => l !== locale),
      title: t("hero.title"),
      description: t("hero.subtitle"),
      siteName: "Next.js Rendering Strategies",
    },
    twitter: {
      card: "summary_large_image",
      title: t("hero.title"),
      description: t("hero.subtitle"),
      creator: "@EmersonfBraun",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        es: "/es",
        uk: "/uk",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navigation />
            <div className="container mx-auto px-4">{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
