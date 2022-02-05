import { InferGetStaticPropsType, NextPage, GetStaticProps } from 'next'
import { useState } from 'react'
import SearchBar from 'components/Blog/SearchBar'
import BlogCardSimple from 'components/Blog/BlogCardSimple'
import Image from 'next/image'
import BlogCard from 'components/Blog/BlogCard'
import Meta from 'components/Shared/Meta'
import BlogList from 'components/Blog/BlogList'
import config from 'config'
import { allBlogs } from '.contentlayer/data'
import { Blog } from '.contentlayer/types'
import { pick } from 'contentlayer/client'
import { CrossIcon, SearchIcon } from 'components/Shared/Icons'
import { H1, H3 } from 'components/Shared/Titles'
import { allBlogPosts, filterBlogPosts, sortBlogPosts } from 'services/blog'
import SelectCategory from 'components/Blog/SelectCategory'
import { Router, useRouter } from 'next/router'
import { useTranslation } from 'hooks/useTranslation'

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const { translate } = useTranslation()

  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredBlogPosts = filterBlogPosts(
    posts,
    searchValue,
    selectedCategory
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
        {translate("I've written")} <strong>{posts.length}</strong>{' '}
        {translate('articles related to software engineering on this blog')}.
      </p>
      <SearchBar onChange={(e) => setSearchValue(e.target.value)} />
      <div className="flex flex-row justify-end relative">
        <SelectCategory
          onChange={(e) => setSelectedCategory(e.target.value)}
          onClear={(e) => setSelectedCategory('')}
          selectedCategory={selectedCategory}
        />
      </div>
      <H3>{translate('Latest posts')}</H3>
      <BlogList type="card" posts={filteredBlogPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale
}) => {
  return {
    props: {
      posts: sortBlogPosts(allBlogPosts(locale || defaultLocale), 'desc')
    }
  }
}

export default BlogPage
