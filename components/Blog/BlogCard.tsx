import { Blog } from '.contentlayer/types'
import { EyeIcon } from 'components/Shared/Icons'
import { H4 } from 'components/Shared/Titles'
import Link from 'next/link'
import CategoryBadge from './CategoryBadge'

const BlogCard: React.FC<{
  post: Pick<Blog, 'slug' | 'title' | 'summary' | 'publishedAt' | 'categories'>
}> = ({ post }) => {
  return (
    <div className="max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md text-gray-900 bg-white border border-gray-200 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600 dark:text-gray-100">
          {post.publishedAt}
        </span>
        <div>
          {post.categories.split(',').map((category: string) => (
            <CategoryBadge key={`${category}-${post.slug}`} color="green">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryBadge>
          ))}
        </div>
      </div>
      <div className="mt-2 ">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl font-bold text-gray-700 hover:underline dark:text-gray-100">
            {post.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-100">
          {post.summary}...
        </p>
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
