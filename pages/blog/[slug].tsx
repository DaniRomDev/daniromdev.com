import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'
import BlogPost from 'components/Blog/BlogPost'
import { NextPage } from 'next'

const Post: NextPage<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code)

  return (
    <BlogPost post={post}>
      <Component />
      {/*Remember for DaniRomero --> you can pass custom components to render on markdown as <Component components={...} */}
    </BlogPost>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug)

  return { props: { post } }
}

export default Post
