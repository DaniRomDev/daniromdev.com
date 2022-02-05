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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const { translate } = useTranslation()

  return (
    <>
      <Profile />
      <H3>{translate('Most viewed posts')}</H3>
      {posts.map((post: Blog) => (
        <>
          <BlogCardSimple key={post.slug} post={post} />
        </>
      ))}
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
