import NextLink from 'next/link'
import { Blog } from '.contentlayer/types'
import { filterMostViewedBlogPosts } from 'services/blog'
import { useTranslation } from 'hooks/useTranslation'
import { Locales } from 'services/i18n'
import { EyeIcon } from 'components/Shared/Icons'

export const BlogMostViewedPostsLists: React.FC<{ posts: Blog[] }> = ({
  posts
}) => {
  const { locale } = useTranslation()

  return (
    <>
      {filterMostViewedBlogPosts(posts, Locales[locale as string]).map(
        (post: Blog) => (
          <div className="flex" key={post.summary}>
            <div className="w-full p-4 border border-gray-700 rounded-md">
              <NextLink href={`/blog/${post.slug}`} passHref>
                <a className="mb-0.5 xl:text-base sm:text-xl lg:text-sm hover:underline block text-gray-400 font-sans">
                  {post.title}
                </a>
              </NextLink>
              <NextLink href={`/blog/${post.slug}`} passHref>
                <a className="font-sans inline-block mt-2.5 float-left px-4 py-0.5 text-sm text-center text-white bg-red-500 rounded ">
                  Read more
                </a>
              </NextLink>
              <p className="text-gray-500 text-sm float-right block mt-3.5 lg:hidden xl:inline font-sans">
                <span className="flex flex-row items-center justify-end">
                  {post.views} <EyeIcon className="h-6 w-6 ml-1" />
                </span>
              </p>
            </div>
          </div>
        )
      )}
    </>
  )
}
