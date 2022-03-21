import { Blog } from '.contentlayer/types'
import { HotTitle } from 'components/Common/HotTitle'
import NextLink from 'next/link'
import { format, parseISO } from 'date-fns'

export const BlogHotTopicCard: React.FC<{ post: Blog }> = ({ post }) => (
  <div className="flex flex-col" key={post.slug}>
    <HotTitle>Hot Topic</HotTitle>
    <NextLink href={`/blog/${post.slug}`}>
      <a className="text-gray-400 sm:text-xl lg:text-sm xl:text-base font-sans hover:underline">
        {post.title}
      </a>
    </NextLink>
    <p className="text-gray-500 text-sm mt-3.5 font-sans">
      {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
    </p>
  </div>
)
