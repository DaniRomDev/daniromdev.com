import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BasicLayout from 'layouts/BasicLayout'
import { useRouter } from 'next/router'
import { useTranslation } from 'hooks/useTranslation'
import { GithubIcon, LinkedinIcon } from 'components/Shared/Icons'
import config from 'config'
import Profile from 'components/Profile'
import { H3 } from 'components/Shared/Titles'

const Home: NextPage = () => {
  const { translate } = useTranslation()

  return (
    <>
      <Profile />
      <H3>Most viewed posts</H3>
    </>
  )
}

export default Home
