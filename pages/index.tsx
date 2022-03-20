import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BasicLayout from 'layouts/BasicLayout'
import { useRouter } from 'next/router'
import { useTranslation } from 'hooks/useTranslation'
import { GithubIcon, LinkedinIcon } from 'components/Shared/Icons'
import config from 'config'
import Profile from 'components/Profile'
import { H3 } from 'components/Shared/Titles'
import { allBlogPosts, sortBlogPosts } from 'services/blog'
import BlogCardSimple from 'components/Blog/BlogCardSimple'
import { Blog } from '.contentlayer/types'
import Announcement from 'components/Common/Announcement'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const { translate } = useTranslation()

  return (
    <>
      <Announcement>
        <div className="ml-2 text-xs text-gray-200">
          <span className="underline text-gray-200 font-bold">
            #StandWithUkraine
          </span>{' '}
          🙏
        </div>
      </Announcement>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale
}) => {
  return {
    props: {
      posts: sortBlogPosts(allBlogPosts(locale || defaultLocale), 'desc')
    }
  }
}

export default Home
