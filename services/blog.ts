import { allBlogs } from ".contentlayer/data"
import { Blog } from ".contentlayer/types"
import { pick } from "contentlayer/client"

export const sortBlogPostsByLastPublished = (posts = allBlogs) => posts.map((post: Blog) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'categories'])
).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

export const allBlogPosts = () => allBlogs

export const findBlogPostByProperty = (key: keyof Blog, value: string = '') => allBlogPosts().find((post) => post[key] === value)

export const filterBlogPosts = (posts: Blog[], title: string, category: string) => posts.filter(
    (post: Blog) =>
        post.title.toLowerCase().includes(title.toLocaleLowerCase()) &&
        post.categories.includes(category.toLocaleLowerCase())
)
