'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const PHONE_NUMBER = '972546813569'

const translations = {
  en: {
    label: 'Call us',
  },
  he: {
    label: 'התקשרו אלינו',
  },
}

interface CallButtonProps {
  locale: Locale
}

export function CallButton({ locale }: CallButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'
  const t = translations[locale]
  const phoneHref = `+${PHONE_NUMBER}`

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          className={`fixed bottom-24 z-50 ${isRTL ? 'left-6' : 'right-6'}`}
        >
          <a
            href={`tel:${phoneHref}`}
            className="relative flex items-center justify-center w-16 h-16 transform-gpu
                      rounded-2xl border border-blue-400/30
                      bg-blue-500/15 backdrop-blur
                      shadow-lg shadow-blue-500/20
                      hover:shadow-xl hover:shadow-blue-500/30
                      hover:scale-105 transition-all duration-300"
            aria-label={t.label}
          >
            <Phone className="w-7 h-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
