'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'
import Image from 'next/image'

const translations = {
  en: {
    services: 'Services',
    process: 'Process',
    testimonials: 'Results',
    contact: 'Contact',
    bookCall: 'Book a Call',
  },
  he: {
    services: 'שירותים',
    process: 'תהליך',
    testimonials: 'תוצאות',
    contact: 'צור קשר',
    bookCall: 'קבע שיחה',
  },
}

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#process', label: t.process },
    { href: '#testimonials', label: t.testimonials },
    { href: '#contact', label: t.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-noir-900/80 backdrop-blur-xl border-b border-noir-200/50 dark:border-gold-400/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {/* <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center
                            shadow-gold transition-shadow duration-300 group-hover:shadow-gold-lg">
                <Sparkles className="w-5 h-5 text-noir-900" />
              </div>
            </div> */}
            <Image 
              src="/logo_full.svg" 
              alt="AutoAI Synergy" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
            <span className="text-xl font-display font-semibold">
              <span className="text-liquid-gold">AutoAI</span>
              <span className="text-noir-700 dark:text-noir-300 transition-colors duration-500"> Synergy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-noir-600 dark:text-noir-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300
                          font-body text-[15px] group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400
                               transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side: Theme Switcher + Language Switcher + CTA */}
          <div className={`hidden lg:flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ThemeSwitcher />
            <LanguageSwitcher locale={locale} />
            <Link
              href="#contact"
              className="btn-gold text-sm px-6 py-3"
            >
              <span>{t.bookCall}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-noir-600 dark:text-noir-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 dark:bg-noir-800/95 backdrop-blur-xl border-t border-noir-200/50 dark:border-gold-400/10 transition-colors duration-500"
          >
            <div className="container mx-auto px-6 py-8">
              <div className={`flex flex-col gap-6 ${isRTL ? 'items-end' : 'items-start'}`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-noir-700 dark:text-noir-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-lg font-display"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className={`flex items-center gap-4 pt-4 border-t border-noir-200 dark:border-noir-700 w-full ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                  <ThemeSwitcher />
                  <LanguageSwitcher locale={locale} />
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-gold text-sm px-6 py-3"
                  >
                    <span>{t.bookCall}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
