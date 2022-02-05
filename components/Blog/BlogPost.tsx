import Meta from 'components/Shared/Meta'
import type { Blog } from '.contentlayer/types'
import config from 'config'
import BlogPostHeader from './BlogPostHeader'

const BlogPost: React.FC<{ post: Blog }> = ({ children, post }) => {
  return (
    <>
      <Meta
        customMeta={{
          title: `${post.title} – Daniel Romero`,
          description: post.summary,
          image: `${process.env.NEXT_PUBLIC_APP_URL}/${post.image}`,
          date: new Date(post.publishedAt).toISOString(),
          type: 'article'
        }}
      />

      <div className="w-full mt-4 prose dark:prose-dark max-w-none">
        <BlogPostHeader post={post} />
        {children}
      </div>
    </>
  )
}

export default BlogPost
