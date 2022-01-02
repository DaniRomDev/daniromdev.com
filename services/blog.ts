import { allBlogs } from ".contentlayer/data"
import { Blog } from ".contentlayer/types"
import { pick } from "contentlayer/client"

export const sortBlogPosts = (posts: Blog[] = [], orderBy: 'asc' | 'desc' = 'desc') => posts.map((post: Blog) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'categories'])
).sort((a, b) => orderBy === 'desc' ?
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)) :
    Number(new Date(a.publishedAt)) - Number(new Date(b.publishedAt)))

export const allBlogPosts = () => allBlogs

export const findBlogPostByProperty = (key: keyof Blog, value: string = '') => allBlogPosts().find((post) => post[key] === value)

export const filterBlogPosts = (posts: Blog[], title: string, category: string) => posts.filter(
    (post: Blog) =>
        post.title.toLowerCase().includes(title.toLocaleLowerCase()) &&
        post.categories.includes(category.toLocaleLowerCase())
)
