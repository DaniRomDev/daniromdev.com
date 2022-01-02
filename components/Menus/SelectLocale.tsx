import { useRouter } from 'next/router'

const SelectLocale: React.FC = () => {
  const router = useRouter()

  const changeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const locale = event.target.value || router.defaultLocale

    router.push(router.pathname, router.asPath, { locale })
  }

  const locales = router.locales || []

  return (
    <select
      className="max-w-sm mt-1 ml-1 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
      onChange={changeLanguage}
      defaultValue={router.locale}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default SelectLocale
