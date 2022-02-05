import { Blog } from '.contentlayer/types'
import { parseISO, format } from 'date-fns'
import config from 'config'

const BlogPostHeader: React.FC<{ post: Blog }> = ({ post }) => (
  <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
    <div className="flex items-center">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {config.meta.sitename} /{' '}
        {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
      </p>
    </div>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
      {post.readingTime.text}
      {` • `}0 views
    </p>
  </div>
)

export default BlogPostHeader
