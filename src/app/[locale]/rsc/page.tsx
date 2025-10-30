import { BenefitsCard } from "./components/benefits-card"
import { ComparisonCard } from "./components/comparison-card"
import { Step1Card } from "./components/step1-card"
import { Step2Card } from "./components/step2-card"
import { Step3Card } from "./components/step3-card"
import { getTranslations } from 'next-intl/server'

// Simulate server-side data fetching
async function getServerData(locale: string) {
  // Simulate database/API call
  await new Promise(resolve => setTimeout(resolve, 200))
  
  const serverData = {
    message: "Server component with real data!",
    timestamp: new Date().toLocaleTimeString(),
    serverTime: new Date().toISOString(),
    lastUpdated: new Date().toLocaleDateString(),
    environment: process.env.NODE_ENV || "production"
  }
  
  return serverData
}

export default async function RSCPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.rsc' })
  const serverData = await getServerData(locale)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('description')}</p>
      </div>

      <div className="space-y-6">
        <Step1Card serverData={serverData} locale={locale} />
        <Step2Card />
        <Step3Card />
        <BenefitsCard />
        <ComparisonCard />
      </div>
    </div>
  )
}