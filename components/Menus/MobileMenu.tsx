import cn from 'classnames'
import Link from 'next/link'
import useDelayedRender from 'use-delayed-render'
import { useState, useEffect } from 'react'
import { NavigationRoute } from 'config'
import { CrossIcon, MenuIcon } from 'components/Shared/Icons'
import styles from 'styles/mobile-menu.module.css'
import { useRouter } from 'next/router'

const MobileMenu: React.FC<{
  items: NavigationRoute[]
}> = ({ items = [] }) => {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 0
    }
  )
  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    setIsMenuOpen(false)

    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [router])

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col bg-gray-100 dark:bg-gray-900 absolute px-8',
            isMenuRendered && styles.menuRendered
          )}
        >
          {items.map(({ href, text }, index) => (
            <li
              key={`mobile-${href}`}
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: `${150 + 25 * (index + 1)}ms` }}
            >
              <Link href={href}>
                <a className="flex w-auto pb-4">{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MobileMenu
