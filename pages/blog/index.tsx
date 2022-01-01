import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'contentlayer/client'
import Meta from 'components/Shared/Meta'
import { H1, H3 } from 'components/Shared/Titles'
import SearchBar from 'components/Blog/SearchBar'
import BlogCard from 'components/Blog/BlogCard'

const BlogPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
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
      <H3>Latest posts</H3>
      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
      {filteredBlogPosts.map((post) => (
        <BlogCard key={post.title} post={post} />
      ))}
    </>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return { props: { posts } }
}

export default BlogPage
