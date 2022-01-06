import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BasicLayout from 'layouts/BasicLayout'
import { useRouter } from 'next/router'
import { useTranslation } from 'hooks/useTranslation'
import { GithubIcon, LinkedinIcon } from 'components/Shared/Icons'
import config from 'config'
import Profile from 'components/Profile'

const Home: NextPage = () => {
  const { translate } = useTranslation()

  console.log('traduccion ', translate('La home'))

  return (
    <>
      <Profile />
    </>
  )
}

export default Home
