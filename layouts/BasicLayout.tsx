import Head from 'next/head'
import { useRouter } from 'next/router'
import MobileMenu from 'components/Menus/MobileMenu'
import NavMenu from 'components/Menus/NavMenu'
import Meta from 'components/Shared/Meta'
import config from 'config'

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto px-8 md:px-0 pt-8 pb-8 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <NavMenu items={config.navigation.routes} />
        {children}
      </main>
    </>
  )
}

export default BasicLayout
