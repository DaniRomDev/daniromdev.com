import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { NextPage } from 'next'
import { Blog } from '.contentlayer/types'
import { allBlogPosts, findBlogPostByProperty } from 'services/blog'
import BlogPost from 'components/Blog/BlogPost'
import CustomMDXComponents from 'components/CustomMDX'

const Post: NextPage<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code)

  return (
    <BlogPost post={post}>
      <Component components={{ ...CustomMDXComponents }} />
    </BlogPost>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  return {
    paths: locales
      .map((locale: string) =>
        allBlogPosts(locale)
          .map(({ slug }) => ({
            params: { slug },
            locale
          }))
          .flat()
      )
      .flat(),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  defaultLocale
}) => ({
  props: {
    post: findBlogPostByProperty(
      (locale || defaultLocale) as string,
      'slug',
      params?.slug as string
    )
  }
})

export default Post
