import ExternalLink from 'components/Common/ExternalLink'
import Meta from 'components/Shared/Meta'
import { H1, H3 } from 'components/Shared/Titles'
import config from 'config'
import { useTranslation } from 'hooks/useTranslation'
import { NextPage } from 'next'

const ExternalResources: NextPage = () => {
  const { translate } = useTranslation()

  return (
    <>
      <Meta
        customMeta={{
          title: translate('Resources') + ' - Daniel Romero',
          description: translate(
            'Quality external resources to help you grow up as a programmer'
          )
        }}
      />
      <H1>{translate('Quality external resources')}</H1>

      {Object.keys(config.external_links).map((category: string) => (
        <>
          <H3>{category.charAt(0).toUpperCase() + category.slice(1)}</H3>

          {config.external_links[category].map((link, index) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              title={link.title}
              index={index}
            />
          ))}
        </>
      ))}
    </>
  )
}

export default ExternalResources
