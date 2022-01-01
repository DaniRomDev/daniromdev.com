import { Blog } from '.contentlayer/types'
import { EyeIcon } from 'components/Shared/Icons'
import { H4 } from 'components/Shared/Titles'
import Link from 'next/link'
import CategoryBadge from './CategoryBadge'

const BlogCard: React.FC<{
  post: Pick<Blog, 'slug' | 'title' | 'summary' | 'publishedAt' | 'categories'>
}> = ({ post }) => {
  return (
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{post.publishedAt}</span>
        <div>
          {post.categories.split(',').map((category: string) => (
            <CategoryBadge key={`${category}-${post.slug}`} color="blue">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryBadge>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <a
          href={`/blog/${post.slug}`}
          className="text-2xl font-bold text-gray-700 hover:underline"
        >
          {post.title}
        </a>
        <p className="mt-2 text-gray-600">{post.summary}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-blue-500">Read more</a>
        </Link>
        <div className="flex justify-around">
          <EyeIcon /> <span className="ml-1">0</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
