'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    description: 'Transforming businesses with custom AI solutions, intelligent automation, and cutting-edge technology.',
    services: 'Services',
    company: 'Company',
    legal: 'Legal',
    about: 'About Us',
    blog: 'Blog',
    careers: 'Careers',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    accessibility: 'Accessibility Statement',
    copyright: '© 2024 AutoAI Synergy. All rights reserved.',
    tagline: 'Built with AI, Delivered with Excellence',
    servicesLinks: [
      { label: 'AI Agents', href: '#services' },
      { label: 'Workflow Automation', href: '#services' },
      { label: 'AI Websites', href: '#services' },
      { label: 'Chatbots', href: '#services' },
      { label: 'Custom Apps', href: '#services' },
    ],
  },
  he: {
    description: 'משנים עסקים עם פתרונות AI מותאמים, אוטומציה חכמה וטכנולוגיה מתקדמת.',
    services: 'שירותים',
    company: 'החברה',
    legal: 'משפטי',
    about: 'אודותינו',
    blog: 'בלוג',
    careers: 'קריירה',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאי שימוש',
    accessibility: 'הצהרת נגישות',
    copyright: '© 2024 AutoAI Synergy. כל הזכויות שמורות.',
    tagline: 'נבנה עם AI, מסופק עם מצוינות',
    servicesLinks: [
      { label: 'סוכני AI', href: '#services' },
      { label: 'אוטומציית תהליכים', href: '#services' },
      { label: 'אתרים עם AI', href: '#services' },
      { label: 'צ\'אטבוטים', href: '#services' },
      { label: 'אפליקציות', href: '#services' },
    ],
  },
}

const WHATSAPP_NUMBER = '972501234567'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#F0EDE6] dark:bg-noir-950 border-t border-noir-200 dark:border-gold-400/10 transition-colors duration-500">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${isRTL ? '' : ''}`}>
          {/* Brand Column */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <Link href={`/${locale}`} className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <Image
                src="/logo_full.svg"
                alt="AutoAI Synergy"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-semibold">
                <span className="text-liquid-gold">AutoAI</span>
                <span className="text-noir-600 dark:text-noir-300 transition-colors duration-500"> Synergy</span>
              </span>
            </Link>
            <p className="text-noir-500 dark:text-noir-400 text-sm leading-relaxed mb-6 font-body transition-colors duration-500">
              {t.description}
            </p>

            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-noir-200/50 dark:bg-noir-800/50 border border-noir-300/50 dark:border-noir-700/50
                          flex items-center justify-center text-noir-500 dark:text-noir-400
                          hover:text-green-500 dark:hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10
                          transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/autoaisynergy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-noir-200/50 dark:bg-noir-800/50 border border-noir-300/50 dark:border-noir-700/50
                          flex items-center justify-center text-noir-500 dark:text-noir-400
                          hover:text-gold-500 dark:hover:text-gold-400 hover:border-gold-400/30 hover:bg-gold-400/10
                          transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/autoaisynergy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-noir-200/50 dark:bg-noir-800/50 border border-noir-300/50 dark:border-noir-700/50
                          flex items-center justify-center text-noir-500 dark:text-noir-400
                          hover:text-gold-500 dark:hover:text-gold-400 hover:border-gold-400/30 hover:bg-gold-400/10
                          transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-noir-800 dark:text-noir-100 font-display font-semibold mb-5 transition-colors duration-500">
              {t.services}
            </h4>
            <ul className="space-y-3">
              {t.servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-noir-800 dark:text-noir-100 font-display font-semibold mb-5 transition-colors duration-500">
              {t.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body">
                  {t.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-noir-800 dark:text-noir-100 font-display font-semibold mb-5 transition-colors duration-500">
              {t.legal}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body"
                >
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/accessibility`}
                  className="text-noir-500 dark:text-noir-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-sm font-body"
                >
                  {t.accessibility}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-noir-300/50 dark:border-noir-800/50 transition-colors duration-500">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-noir-500 dark:text-noir-500 text-sm font-body transition-colors duration-500">
              {t.copyright.replace('2024', currentYear.toString())}
            </p>
            <p className="text-noir-500 dark:text-noir-500 text-sm flex items-center gap-2 font-body transition-colors duration-500">
              <Sparkles className="w-4 h-4 text-gold-400" />
              {t.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
