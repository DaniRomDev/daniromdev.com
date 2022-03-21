import useSWR from "swr"
import fetcher from "./fetcher"
import { allBlogs } from ".contentlayer/data"
import { Blog } from ".contentlayer/types"
import { pick } from "contentlayer/client"
import { Locales } from "./i18n"
import { Views } from "./types"

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


export const filterMostViewedBlogPosts = (posts: Blog[], lang: Locale) => {
    return posts.map(post => {
        const { data } = useSWR<Views>(`/api/views/${post.slug}?lang=${lang}`, fetcher)

        post.views = data?.total || 0;

        return post;
    }).sort((post, nextPost) => (nextPost.views || 0) - (post.views || 0)).slice(0, 3)
}
