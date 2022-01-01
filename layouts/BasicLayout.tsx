import Head from 'next/head'
import { useRouter } from 'next/router'
import MobileMenu from '../components/Menus/MobileMenu'
import NavMenu from '../components/Menus/NavMenu'
import Meta from '../components/Shared/Meta'

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <NavMenu />
      {children}
    </>
  )
}

export default BasicLayout
