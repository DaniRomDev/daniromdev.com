import { Blog } from '.contentlayer/types'
import { BlogPostExpanded } from './BlogCardExpanded'

export const BlogCardExpandedList: React.FC<{ posts: Blog[] }> = ({
  posts
}) => (
  <>
    {posts.map((post) => (
      <BlogPostExpanded key={post.slug + post.title} post={post} />
    ))}
  </>
)
