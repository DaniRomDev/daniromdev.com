import { useRouter } from 'next/router'
import { Locales, t } from 'services/i18n'

export const useTranslation = () => {
  const { locale, defaultLocale } = useRouter()

  const translate = (text: string): string =>
    t(text, Locales[(locale || defaultLocale) as string])

  return { Locales, translate, locale }
}
