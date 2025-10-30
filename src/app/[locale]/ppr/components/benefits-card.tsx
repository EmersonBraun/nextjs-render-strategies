"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useTranslations } from 'next-intl'

export function BenefitsCard() {
  const t = useTranslations('pages.ppr.benefits')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg">
          <ul className="text-purple-800 dark:text-purple-200 space-y-2">
            {t.raw('items').map((item: string, index: number) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
