'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from '@/components/Image'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


const Header = ({router}) => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src="./static/images/cat-logo.jpeg" alt="logo" width={100} height={100} className="rounded-full" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-3xl font-semibold sm:block">
                {t(`${siteMetadata.headerTitle}`)}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {t(`${link.title}`)}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
        <LanguageSelector router={router} />
      </div>
    </header>
  )
}

export default Header
