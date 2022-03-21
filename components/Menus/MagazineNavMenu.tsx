import Link from 'next/link'
import classNames from 'classnames'
import config, { NavigationRoute } from 'config'
import { useTranslation } from 'hooks/useTranslation'
import { useRouter } from 'next/router'
import logo from 'public/images/logo/logomark.min.svg'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from 'components/Shared/Icons'
import MobileMenu from './MobileMenu'
import SelectLocale from './SelectLocale'

const MagazineNavItem: React.FC<NavigationRoute> = ({ href, text }) => {
  const router = useRouter()
  const { translate } = useTranslation()

  const isActive = router.asPath === href

  return (
    <Link href={href} key={href}>
      <a
        className={classNames(
          isActive ? 'bg-gray-800' : '',
          'px-3 py-2 font-medium text-sm text-white rounded-md hover:bg-gray-700 hover:text-white'
        )}
      >
        {translate(text)}
      </a>
    </Link>
  )
}

const MagazineNavMenu: React.FC<{ items: NavigationRoute[] }> = ({
  items = []
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
    <nav className="pt-5 font-serif bg-slate-900">
      <div className="mx-auto sm:px-4 md:px-10">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center flex-1 sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" passHref>
                <a>
                  <Image src={logo} alt="logo" />
                </a>
              </Link>
            </div>

            <div className="hidden sm:block sm:ml-8 md:ml-6 lg:ml-12">
              <div className="flex space-x-4 tracking-wide">
                {items.map((item) => (
                  <MagazineNavItem {...item} key={item.href} />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="lg:inline">
                {Object.keys(config.accounts).map((account) => (
                  <a
                    className="items-center inline-block mr-3 text-2xl text-gray-200 no-underline align-middle hover:text-white"
                    href={config.accounts[account].href}
                    key={account}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {renderIcon(account)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <SelectLocale />
          </div>
          <button
            type="button"
            className="items-center justify-center p-2 text-gray-400 bg-gray-700 rounded-md inline-flex sm:hidden hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full mt-4">
        <div className="w-full flex h-0.5 bg-gray-800"></div>
      </div>
    </nav>
  )
}

export default MagazineNavMenu
