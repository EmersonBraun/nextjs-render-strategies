import { BenefitsCard } from "./components/benefits-card"
import { ComparisonCard } from "./components/comparison-card"
import { Link } from "@/i18n/navigation"
import { Step1Card } from "./components/step1-card"
import { Step2Card } from "./components/step2-card"
import { Step3Card } from "./components/step3-card"
import { TryCard } from "./components/try-card"
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ]
}

export default async function SSGPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.ssg' })
  const staticData = {
    message: t('title'),
    buildTime: new Date().toISOString()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground">
          {t('overview')}
        </p>
      </div>

      <div className="space-y-6">
        <Step1Card />
        <Step2Card />
        <Step3Card staticData={staticData} />
        <BenefitsCard />
        <ComparisonCard />
        <TryCard />
      </div>
    </div>
  )
}
