import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BasicLayout from 'layouts/BasicLayout'
import { Locales, t } from 'services/i18n'

const Home: NextPage = () => {
  const { locale } = useRouter()

  console.log(
    'selected locale ',
    locale,
    t('La home', Locales[locale as string])
  )
  return <h1>{t('La home', Locales[locale as string])}</h1>
}

export default Home
