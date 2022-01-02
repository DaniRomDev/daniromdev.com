import Head from 'next/head'
import { useRouter } from 'next/router'
import config, { MetaConfig } from '../../config'

const Meta: React.FC<{ customMeta?: Partial<MetaConfig> }> = ({
  customMeta
}) => {
  const router = useRouter()

  const meta = { ...config.meta, customMeta }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`}
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.sitename} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
    </Head>
  )
}

export default Meta
