import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'
import MobileMenu from './MobileMenu'

interface NavItemProps {
  href: string
  text: string
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
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

const NavMenu: React.FC = () => {
  return (
    <div className="ml-[-0.60rem]">
      <MobileMenu />
      <NavItem href="/" text="Home" />
    </div>
  )
}

export default NavMenu
