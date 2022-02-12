import useSWR from 'swr'
import fetcher from 'services/fetcher'
import { Locales } from 'services/i18n'
import { Views } from 'services/types'

const ViewCounter: React.FC<{
  slug: string
  lang: Locales
}> = ({ slug, lang = Locales.es }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}?lang=${lang}`, fetcher)

  return <>{data?.total ? `${data.total}` : 0}</>
}

export default ViewCounter
