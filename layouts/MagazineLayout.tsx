import MagazineNavMenu from 'components/Menus/MagazineNavMenu'
import Meta from 'components/Shared/Meta'
import config from 'config'

const MagazineLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="w-full relative leading-normal text-gray-800 ">
        <MagazineNavMenu items={config.navigation.routes} />
        {children}
      </main>
    </>
  )
}

export default MagazineLayout
