import Image from 'next/image'
import Link from 'next/link'
import config from 'config'
import { Blog } from '.contentlayer/types'
import { Badge } from 'components/Common/Badge'
import { parseISO, format } from 'date-fns'

export const BlogPostExpanded: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md sm:px-0 sm:py-4 md:px-6 md:py-6 2xl:max-w-full">
        <div className="relative flex overflow-hidden">
          <div className="flex-shrink-0">
            <img
              src="/images/alpinejs-ray.png"
              className="float-left object-cover h-full rounded-lg sm:hidden lg:inline lg:w-72 sm:w-full"
              alt={post.title}
            />
          </div>
          <div className="relative inline-block w-full mt-1 sm:pl-6 xs:pr-4 xs:pl-4 xl:pr-0 sm:pr-6 sm:py-4 xl:py-0">
            <div className="items-center sm:mb-0 md:mb-4">
              <span className="text-sm font-light text-gray-600 font-sans">
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </span>
              <div className="float-right space-x-2 sm:hidden md:inline">
                {post.categories.split(',').map((category, index) => (
                  <Badge key={category + index}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Badge>
                ))}
              </div>

              <Link href={`/blog/${post.slug}`} passHref>
                <a className="block mb-4 text-2xl font-bold text-gray-700 font-serif hover:underline">
                  {post.title}
                </a>
              </Link>
              <span className="block mt-2 text-gray-600 xs:hidden sm:inline">
                <p>{post.summary}</p>
                <div className="items-center justify-between flex-none mt-4">
                  <Link href={`/blog/${post.slug}`} passHref>
                    <a className="text-red-500 hover:underline font-roboto">
                      Read more →
                    </a>
                  </Link>
                  <div className="inline-block float-right align-middle">
                    <a
                      href="https://twitter.com/mvpopuk"
                      target="_blank"
                      className="flex items-center"
                      rel="noreferrer"
                    >
                      <h1 className="text-sm font-medium text-gray-700 hover:underline">
                        {config.meta.sitename}
                      </h1>
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
