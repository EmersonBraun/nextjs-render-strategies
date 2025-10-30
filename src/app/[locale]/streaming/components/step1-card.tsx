"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useTranslations } from 'next-intl'

export function Step1Card() {
  const t = useTranslations('pages.streaming.step1')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground mb-2">
            {t('description')}
          </p>
          <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-medium">
              {t('fastContentLoaded')}
            </p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">
              {t('fastContentSubtext')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
