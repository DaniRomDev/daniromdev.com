import cn from 'classnames'
import Link from 'next/link'
import useDelayedRender from 'use-delayed-render'
import { useState, useEffect } from 'react'
import { NavigationRoute } from '../../config'
import { CrossIcon, MenuIcon } from '../Shared/Icons'
import styles from '../../styles/mobile-menu.module.css'

const MobileMenu: React.FC<{ items: NavigationRoute[] }> = ({ items = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
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
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

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
            'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          {items.map(({ href, text }) => (
            <li
              key={`mobile-${href}`}
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: '150ms' }}
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
