"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useTranslations } from 'next-intl'

interface Step3CardProps {
  showContent: boolean
  data: { message: string; timestamp: string } | null
}

export function Step3Card({ showContent, data }: Step3CardProps) {
  const t = useTranslations('pages.csr.step3')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showContent && data ? (
          <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              ✅ {data.message}
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
              {t('loadedAt')} {data.timestamp}
            </p>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              {t('clickToLoad')}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
