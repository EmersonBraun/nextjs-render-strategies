import { GetRequestConfigParams } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "pt", "es", "uk"];

export default async function getRequestConfig({ locale }: GetRequestConfigParams) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as unknown as string)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
}

