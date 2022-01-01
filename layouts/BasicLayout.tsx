import Head from 'next/head'
import { useRouter } from 'next/router'
import MobileMenu from '../components/Menus/MobileMenu'
import NavMenu from '../components/Menus/NavMenu'
import Meta from '../components/Shared/Meta'
import config from '../config'

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col justify-center px-8">
        <NavMenu items={config.navigation.routes} />
        {children}
      </div>
    </>
  )
}

export default BasicLayout
