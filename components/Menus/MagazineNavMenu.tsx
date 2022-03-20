import Link from 'next/link'
import classNames from 'classnames'
import { NavigationRoute } from 'config'
import { useTranslation } from 'hooks/useTranslation'
import { useRouter } from 'next/router'

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
        {text}
      </a>
    </Link>
  )
}

const MagazineNavMenu: React.FC<{ items: NavigationRoute[] }> = ({
  items = []
}) => {
  return (
    <nav className="pt-5 font-sans bg-gray-900">
      <div className="mx-auto xs:px-4 sm:px-10">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center flex-1 xs:justify-start sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">Logo</Link>
            </div>

            <div className="hidden sm:hidden lg:block lg:ml-12">
              <div className="flex space-x-4 tracking-wide">
                {items.map((item) => (
                  <MagazineNavItem {...item} key={item.href} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-4">
        <div className="w-full flex h-0.5 bg-gray-500"></div>
      </div>
    </nav>
  )
}

export default MagazineNavMenu
