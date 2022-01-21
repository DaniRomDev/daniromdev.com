import config, { SocialAccount } from 'config'
import { GithubIcon, LinkedinIcon } from 'components/Shared/Icons'
import { useTranslation } from 'hooks/useTranslation'

export const SocialAccountComponent: React.FC<{ account: SocialAccount }> = ({
  account
}) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'github':
        return <GithubIcon />
        break
      case 'linkedin':
        return <LinkedinIcon />
        break
      default:
        return null
    }
  }

  return (
    <a
      key={account.key}
      rel="noopener noreferrer"
      target="_blank"
      href={config.accounts[account.key].href}
      className="mb-2"
    >
      {renderIcon(account.key)}
    </a>
  )
}

const ProfileWrapper: React.FC = ({ children }) => (
  <div className="flex sm:flex-row items-start">
    <div className="flex flex-col pr-8">{children}</div>
    <div className="w-[80px] text-3xl relative mb-8 sm:mb-0 mr-auto flex flex-col">
      {Object.keys(config.accounts).map((account) => (
        <SocialAccountComponent
          key={account}
          account={config.accounts[account]}
        />
      ))}
    </div>
  </div>
)

const Profile: React.FC = () => {
  const { translate } = useTranslation()

  return (
    <ProfileWrapper>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
        Daniel Romero
      </h1>
      <h2 className="text-gray-700 dark:text-gray-200 mb-4">
        {translate('Hobby software engineer')}{' '}
        <span className="italic">({translate('not a real one')})</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-16">
        {translate(
          'Help the community and make the way easy for the newcomers into the field is the hard part, the easy one is buid applications'
        )}
        .
      </p>
    </ProfileWrapper>
  )
}

export default Profile
