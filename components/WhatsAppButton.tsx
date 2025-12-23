'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const WHATSAPP_NUMBER = '972546813569'

const translations = {
  en: {
    tooltip: 'Chat with us',
    message: 'Hi! I\'m interested in your AI automation services.',
  },
  he: {
    tooltip: 'דברו איתנו',
    message: 'היי! אני מעוניין/ת בשירותי האוטומציה וה-AI שלכם.',
  },
}

interface WhatsAppButtonProps {
  locale: Locale
}

export function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'
  const tooltipId = `whatsapp-tooltip-${locale}`

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
      }, 4000)
      return () => clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  useEffect(() => {
    if (!showTooltip || isInteracting) {
      return
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = setTimeout(() => setShowTooltip(false), 4000)
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
      }
    }
  }, [showTooltip, isInteracting])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.message)}`
  const handleInteractStart = () => {
    setIsInteracting(true)
    setShowTooltip(true)
  }

  const handleInteractEnd = () => {
    setIsInteracting(false)
    setShowTooltip(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className={`fixed bottom-6 z-50 ${isRTL ? 'left-6' : 'right-6'}`}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? -10 : 10 }}
                className={`absolute bottom-full mb-3 ${isRTL ? 'left-0' : 'right-0'}`}
                onMouseEnter={handleInteractStart}
                onMouseLeave={handleInteractEnd}
              >
                <div className="relative" ref={tooltipRef}>
                  <div
                    id={tooltipId}
                    role="tooltip"
                    className={`bg-noir-800 text-noir-100 px-4 py-2.5 rounded-xl shadow-lg
                                  text-sm font-display font-medium whitespace-nowrap
                                  border border-green-500/20 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.tooltip}
                  </div>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'}
                               w-5 h-5 bg-noir-700 rounded-full border border-noir-600
                               flex items-center justify-center text-noir-400
                               hover:text-noir-100 transition-colors`}
                    aria-label={locale === 'he' ? 'סגירת הטיפ' : 'Dismiss tooltip'}
                    onFocus={handleInteractStart}
                    onBlur={handleInteractEnd}
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className={`absolute top-full ${isRTL ? 'left-6' : 'right-6'}
                                  border-8 border-transparent border-t-noir-800`} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleInteractStart}
            onMouseLeave={handleInteractEnd}
            onFocus={handleInteractStart}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget as Node | null
              if (nextTarget && tooltipRef.current?.contains(nextTarget)) {
                return
              }
              handleInteractEnd()
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setShowTooltip(false)
              }
            }}
            className="relative flex items-center justify-center w-16 h-16 transform-gpu
                      bg-gradient-to-br from-green-500 to-green-600
                      rounded-2xl shadow-lg shadow-green-500/25
                      hover:shadow-xl hover:shadow-green-500/35
                      hover:scale-105 transition-all duration-300
                      group"
            aria-label="Contact on WhatsApp"
            aria-describedby={showTooltip ? tooltipId : undefined}
          >
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
