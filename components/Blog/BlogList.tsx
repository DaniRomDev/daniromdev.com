import { Blog } from '.contentlayer/types'
import BlogCard from './BlogCard'
import BlogCardSimple from './BlogCardSimple'

interface BlogListProps {
  posts: Blog[]
  type: 'simple' | 'card'
}

const BlogList: React.FC<BlogListProps> = ({ posts, type = 'card' }) => {
  return (
    <>
      {posts.map((post) =>
        type === 'card' ? (
          <BlogCard key={post.title} post={post} />
        ) : (
          <BlogCardSimple key={post.title} post={post} />
        )
      )}
      {!posts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
    </>
  )
}

export default BlogList
