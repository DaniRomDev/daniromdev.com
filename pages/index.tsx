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
import BlogHotTopicList from 'components/Blog/BlogHotTopicList'
import { HotTitle } from 'components/Common/HotTitle'
import { BlogMostViewedPostsLists } from 'components/Blog/BlogMostViewedPostsList'
import { BigDivider } from 'components/Common/BigDivider'
import { BlogCardExpandedList } from 'components/Blog/BlogCardExpandedList'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const { translate } = useTranslation()

  return (
    <>
      <Announcement>
        <div className="ml-2 text-sm text-gray-200">
          <span className="underline text-gray-200 font-bold">
            #StandWithUkraine
          </span>{' '}
          🙏
        </div>
      </Announcement>

      <div className="bg-slate-900 border-b-2 border-red-500 sm:px-4 md:px-10 sm:py-0 lg:py-10 xl:py-10">
        <div className="grid grid-cols-12 mx-auto md:gap-10">
          <BlogHotTopicList posts={posts} />

          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover cursor-pointer md:w-full md:inset-x-0 header-featured-img lg:col-span-6 md:col-span-9 sm:absolute lg:relative xl:relative sm:inset-x-0 sm:w-full xl:col-span-6">
            centro
          </div>

          <div className="sm:col-span-12 sm:mt-6 md:mt-0 xl:mt-0 lg:col-span-3 xl:col-span-3 lg:block">
            <div className="space-x-5">
              <HotTitle> More viewed posts</HotTitle>
            </div>

            <div className="flex flex-col lg:space-y-4 sm:space-y-6 xl:space-y-6 sm:mt-7 lg:mt-0 xl:mt-7">
              <BlogMostViewedPostsLists posts={posts} />
            </div>
          </div>
        </div>
      </div>

      <BigDivider />

      <div className="py-3 xs:px-4 sm:px-10">
        <div className="flex xl:justify-between 2xl:justify-evenly">
          <div className="w-full max-w-screen-xl mx-auto">
            <BlogCardExpandedList posts={posts} />
          </div>
        </div>
      </div>
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
