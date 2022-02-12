import { Blog } from '.contentlayer/types'
import { useEffect } from 'react'
import { Locales } from 'services/i18n'

const useRegisterBlogPostViewCount = (post: Blog, locale: Locales) => {
  useEffect(() => {
    fetch(`/api/views/${post.slug}?lang=${locale}`, {
      method: 'POST'
    })
  }, [post, locale])
}

export default useRegisterBlogPostViewCount
