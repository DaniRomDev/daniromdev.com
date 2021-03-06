import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import cn from 'classnames'
import MobileMenu from 'components/Menus/MobileMenu'
import { NavigationRoute } from 'config'
import ToggleTheme from 'components/Shared/ToggleTheme'
import SelectLocale from 'components/Menus/SelectLocale'
import { useTranslation } from 'hooks/useTranslation'

const NavItem: React.FC<NavigationRoute> = ({ href, text }) => {
  const router = useRouter()
  const { translate } = useTranslation()

  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'text-lg hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{translate(text)}</span>
      </a>
    </NextLink>
  )
}

const NavMenu: React.FC<{ items: NavigationRoute[] }> = ({ items = [] }) => {
  return (
    <nav className="flex justify-between px-8 md:px-0 pb-16 font-serif">
      <div className="ml-[-0.60rem]">
        <MobileMenu items={items} />
        {items.map(({ href, text }) => (
          <NavItem key={href} href={href} text={text} />
        ))}
      </div>
      <div className="flex items-center">
        <ToggleTheme />
        <SelectLocale />
      </div>
    </nav>
  )
}

export default NavMenu
