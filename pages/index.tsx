import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BasicLayout from 'layouts/BasicLayout'
import { useRouter } from 'next/router'
import { useTranslation } from 'hooks/useTranslation'

const Home: NextPage = () => {
  const { translate } = useTranslation()

  console.log('traduccion ', translate('La home'))

  return <h1>{translate('La home')}</h1>
}

export default Home
