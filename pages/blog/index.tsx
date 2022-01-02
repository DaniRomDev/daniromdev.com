import { InferGetStaticPropsType, NextPage } from 'next'
import { useState } from 'react'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'contentlayer/client'
import Meta from 'components/Shared/Meta'
import { H1, H3 } from 'components/Shared/Titles'
import SearchBar from 'components/Blog/SearchBar'
import BlogCardSimple from 'components/Blog/BlogCardSimple'
import Image from 'next/image'
import BlogCard from 'components/Blog/BlogCard'
import { GetStaticProps } from 'next'
import { Blog } from '.contentlayer/types'
import BlogList from 'components/Blog/BlogList'
import config from 'config'
import { CrossIcon, SearchIcon } from 'components/Shared/Icons'

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredBlogPosts = posts.filter(
    (post: Blog) =>
      post.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) &&
      post.categories.includes(selectedCategory)
  )

  return (
    <>
      <Meta
        customMeta={{
          title: 'Blog - Daniel Romero',
          description: 'Thoughts as computer programmer travelling the world'
        }}
      />
      <H1>Blog</H1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        I've written <strong>{posts.length}</strong> articles related to
        software engineering on this blog.
      </p>
      <SearchBar onChange={(e) => setSearchValue(e.target.value)} />
      <div className="flex flex-row justify-end relative">
        <select
          defaultValue=""
          className="w-full md:max-w-sm mt-1 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled selected={selectedCategory === ''}>
            Search by category
          </option>
          {config.blog.categories.map((category) => (
            <option key={category} value={category.toLocaleLowerCase()}>
              {category}
            </option>
          ))}
        </select>
        {selectedCategory && (
          <button
            onClick={(e) => setSelectedCategory('')}
            className="absolute top-[15px] right-[60px]"
          >
            <CrossIcon />
          </button>
        )}
      </div>
      <H3>Latest posts</H3>

      <BlogList type="card" posts={filteredBlogPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'categories'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return { props: { posts } }
}

export default BlogPage
