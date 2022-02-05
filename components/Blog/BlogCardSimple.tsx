import { Blog } from '.contentlayer/types'
import cn from 'classnames'
import { H4 } from 'components/Shared/Titles'
import { useTranslation } from 'hooks/useTranslation'
import Link from 'next/link'

const BlogCardSimple: React.FC<{
  post: Pick<Blog, 'slug' | 'title' | 'summary' | 'publishedAt'>
}> = ({ post }) => {
  const { translate } = useTranslation()

  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <H4>{post.title}</H4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              0 {translate('views')}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCardSimple
