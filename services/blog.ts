import { allBlogs } from ".contentlayer/data"
import { Blog } from ".contentlayer/types"
import { pick } from "contentlayer/client"
import { Locales } from "./i18n"

export const sortBlogPosts = (posts: Blog[] = [], orderBy: 'asc' | 'desc' = 'desc') => posts.map((post: Blog) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'categories'])
).sort((a, b) => orderBy === 'desc' ?
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)) :
    Number(new Date(a.publishedAt)) - Number(new Date(b.publishedAt)))

export const allBlogPosts = (locale: string = Locales.es) => allBlogs.filter(post => post.language === locale)

export const findBlogPostByProperty = (locale: string, key: keyof Blog, value: string = '') =>
    allBlogPosts(locale).find((post) => post[key] === value)

export const filterBlogPosts = (posts: Blog[], title: string, category: string) => posts.filter(
    (post: Blog) =>
        post.title.toLowerCase().includes(title.toLocaleLowerCase()) &&
        post.categories.includes(category.toLocaleLowerCase()))
