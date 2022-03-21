import { Blog } from '.contentlayer/types'

const BlogHotTopicList: React.FC<{ posts: Blog[] }> = ({ posts }) => (
  <div className="sm:mt-80 sm:relative sm:space-y-8 sm:z-10 sm:pt-10 lg:mt-0 lg:pt-0 xl:pt-0 absolute col-span-12 flex flex-col md:col-span-12 lg:col-span-3 py-1.5 xl:mt-0 lg:space-y-10 xl:space-y-12">
    {posts.slice(0, 3).map((post) => (
      <div className="flex flex-col" key={post.slug}>
        <h3 className="flex items-center font-sans font-bold text-sm text-gray-200 mb-3.5 uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mr-2.5"></span>
          Hot Topic
        </h3>
        <a
          href="#"
          className="text-gray-400 sm:text-xl lg:text-sm xl:text-base font-jetbrains hover:underline"
        >
          {post.title}
        </a>
        <p className="text-gray-500 text-sm mt-3.5 font-sans">
          {post.publishedAt}
        </p>
      </div>
    ))}
  </div>
)

export default BlogHotTopicList
