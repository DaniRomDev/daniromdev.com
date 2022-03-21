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
              <h3 className="flex items-center font-sans font-bold text-sm text-gray-200 mb-3.5 uppercase">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mr-2.5"></span>
                More viewed posts
              </h3>
            </div>

            <div className="flex flex-col lg:space-y-4 sm:space-y-6 xl:space-y-6 sm:mt-7 lg:mt-0 xl:mt-7">
              <div className="flex">
                <div className="w-full p-4 border border-gray-700 rounded-md">
                  <a
                    href="/podcast/making-money-as-a-laravel-developer"
                    className="mb-0.5 xl:text-base sm:text-xl lg:text-sm hover:underline block text-gray-400 font-sans"
                  >
                    Making Money as a Laravel Dev - with Christoph Rumpel
                  </a>
                  <a
                    href="/podcast/making-money-as-a-laravel-developer"
                    className="font-sans inline-block mt-2.5 float-left px-4 py-0.5 text-sm text-center text-white bg-red-500 rounded "
                  >
                    Episode 3
                  </a>
                  <p className="text-gray-500 text-sm float-right block mt-3.5 lg:hidden xl:inline font-sans">
                    January 29th, 2022
                  </p>
                </div>
              </div>
            </div>
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
