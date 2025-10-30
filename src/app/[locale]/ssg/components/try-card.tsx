import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function TryCard() {
    const t = useTranslations('pages.ssg')
    return (
        <div className="p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800 rounded-lg" >
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                {t('dynamicRoutes.title')}
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
                {t('dynamicRoutes.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Link
                    href="/ssg/1"
                    className="p-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                    <div className="font-medium text-blue-800 dark:text-blue-200">{t('dynamicRoutes.links.gettingStarted')}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-300">{t('dynamicRoutes.links.id')} 1</div>
                </Link>
                <Link
                    href="/ssg/2"
                    className="p-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                    <div className="font-medium text-blue-800 dark:text-blue-200">{t('dynamicRoutes.links.advancedPatterns')}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-300">{t('dynamicRoutes.links.id')} 2</div>
                </Link>
                <Link
                    href="/ssg/3"
                    className="p-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                    <div className="font-medium text-blue-800 dark:text-blue-200">{t('dynamicRoutes.links.performanceComparison')}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-300">{t('dynamicRoutes.links.id')} 3</div>
                </Link>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                {t('dynamicRoutes.tip')}
            </p>
        </div >
    )
}