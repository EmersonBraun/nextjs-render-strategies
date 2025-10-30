import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'pt', 'es', 'uk'],
    defaultLocale: 'en',
    localePrefix: 'always'
});