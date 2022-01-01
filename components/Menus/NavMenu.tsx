import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import cn from 'classnames'
import MobileMenu from './MobileMenu'
import { NavigationRoute } from '../../config'
import ToggleTheme from '../Shared/ToggleTheme'

const NavItem: React.FC<NavigationRoute> = ({ href, text }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

const NavMenu: React.FC<{ items: NavigationRoute[] }> = ({ items = [] }) => {
  return (
    <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <div className="ml-[-0.60rem]">
        <MobileMenu items={items} />
        {items.map(({ href, text }) => (
          <NavItem key={href} href={href} text={text} />
        ))}
      </div>
      <ToggleTheme />
    </nav>
  )
}

export default NavMenu
