import { Blog } from '.contentlayer/types'
import { Badge } from 'components/Common/Badge'
import NextLink from 'next/link'

export const BlogHotTopicCard: React.FC<{ post: Blog }> = ({ post }) => (
  <div className="flex flex-col" key={post.slug}>
    <Badge>Hot Topic</Badge>
    <NextLink href={`/blog/${post.slug}`}>
      <a className="text-gray-400 sm:text-xl lg:text-sm xl:text-base font-sans hover:underline">
        {post.title}
      </a>
    </NextLink>
    <p className="text-gray-500 text-sm mt-3.5 font-sans">{post.publishedAt}</p>
  </div>
)
