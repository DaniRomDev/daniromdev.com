import { Blog } from '.contentlayer/types'
import { Badge } from 'components/Common/Badge'
import { BlogHotTopicCard } from './BlogHotTopicCard'

const BlogHotTopicList: React.FC<{ posts: Blog[] }> = ({ posts }) => (
  <div className="sm:mt-80 sm:relative sm:space-y-8 sm:z-10 sm:pt-10 lg:mt-0 lg:pt-0 xl:pt-0 absolute col-span-12 flex flex-col md:col-span-12 lg:col-span-3 py-1.5 xl:mt-0 lg:space-y-10 xl:space-y-12">
    {posts.slice(0, 3).map((post) => (
      <BlogHotTopicCard key={post.title} post={post} />
    ))}
  </div>
)

export default BlogHotTopicList
