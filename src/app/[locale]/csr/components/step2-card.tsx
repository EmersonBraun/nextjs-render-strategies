"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

interface Step2CardProps {
  loading: boolean
  pageLoaded: boolean
  showFetching: boolean
  onFetchData: () => void
}

export function Step2Card({ 
  loading, 
  pageLoaded, 
  showFetching, 
  onFetchData 
}: Step2CardProps) {
  const t = useTranslations('pages.csr.step2')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button onClick={onFetchData} disabled={loading || !pageLoaded}>
            {loading ? t('loading') : t('loadButton')}
          </Button>
          
          {showFetching && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full"></div>
                <p className="text-yellow-800 dark:text-yellow-200">
                  {t('fetching')}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
