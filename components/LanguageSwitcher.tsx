'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { Locale, languages, localeNames } from '@/lib/i18n/settings'

interface LanguageSwitcherProps {
  locale: Locale
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
  const otherLocale = locale === 'en' ? 'he' : 'en'

  return (
    <Link
      href={`/${otherLocale}${pathWithoutLocale}`}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full
                 bg-noir-800/60 border border-gold-400/10
                 hover:border-gold-400/30 hover:bg-noir-700/60
                 transition-all duration-300 group"
      title={`Switch to ${localeNames[otherLocale]}`}
    >
      <Globe className="w-4 h-4 text-gold-400/70 group-hover:text-gold-400 transition-colors" />
      <span className="text-sm text-noir-300 group-hover:text-noir-100 transition-colors font-display">
        {localeNames[otherLocale]}
      </span>
    </Link>
  )
}
