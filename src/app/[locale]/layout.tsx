import '../globals.css'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { Footer } from '@/components/footer'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'pt', 'es', 'uk']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params
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
            <div className="container mx-auto px-4">
              {children}
            </div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
