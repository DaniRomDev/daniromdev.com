import ExternalLink from 'components/Common/ExternalLink'
import { H1, H3 } from 'components/Shared/Titles'
import { useTranslation } from 'hooks/useTranslation'
import { NextPage } from 'next'

const ExternalResources: NextPage = () => {
  const { translate } = useTranslation()

  return (
    <>
      <H1>{translate('Quality external resources')}</H1>

      <H3>Laravel</H3>
      <ExternalLink href="esto" title="linkazo" index="01" />
    </>
  )
}

export default ExternalResources
