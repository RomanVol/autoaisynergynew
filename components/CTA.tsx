'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    title: 'Ready to Transform Your Business?',
    subtitle: 'Book a free 30-minute strategy call. We\'ll map your automation opportunities and show you the potential ROI.',
    button: 'Book Free Strategy Call',
    buttonWhatsapp: 'Chat on WhatsApp',
    noObligation: 'No commitment • No hard sell • Just valuable insights',
  },
  he: {
    title: 'מוכנים לשנות את העסק?',
    subtitle: 'קבעו שיחת אסטרטגיה חינם של 30 דקות. נמפה את הזדמנויות האוטומציה שלכם ונראה לכם את פוטנציאל ה-ROI.',
    button: 'קבעו שיחה חינם',
    buttonWhatsapp: 'דברו בוואטסאפ',
    noObligation: 'ללא התחייבות • ללא לחץ • רק תובנות בעלות ערך',
  },
}

const whatsappMessages = {
  en: 'Hi! I\'m interested in learning more about your AI automation services.',
  he: 'היי! אני מעוניין/ת ללמוד עוד על שירותי האוטומציה וה-AI שלכם.',
}

const WHATSAPP_NUMBER = '972546813569'

interface CTAProps {
  locale: Locale
}

export function CTA({ locale }: CTAProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessages[locale])}`

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noir-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[800px] h-[800px] rounded-full bg-gold-400/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glowing Border Card */}
          <div className="relative p-[1px] rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/50 via-amber-400/50 to-gold-400/50
                           animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

            <div className="relative bg-noir-800 rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-noir-50 mb-6">
                {t.title}
              </h2>

              <p className="text-lg md:text-xl text-noir-300 mb-10 max-w-2xl mx-auto font-body">
                {t.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8
                             ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link href="#contact" className="btn-gold group">
                  <span>{t.button}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1
                                        ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-[1.125rem]
                            font-display font-medium text-white
                            bg-gradient-to-r from-green-600 to-green-500
                            rounded-full transition-all duration-300
                            hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.buttonWhatsapp}</span>
                </a>
              </div>

              {/* Trust Text */}
              <p className="text-sm text-noir-500 font-display">
                {t.noObligation}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
