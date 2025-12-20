'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    badge: 'AI-Powered Growth',
    title: 'Stop Losing Time.',
    titleHighlight: 'Start Scaling.',
    subtitle: 'We build intelligent AI systems that work 24/7—automating your operations, converting more leads, and freeing your team to focus on what matters.',
    cta: 'Book Free Strategy Call',
    ctaSecondary: 'Explore Solutions',
    trusted: 'Trusted by forward-thinking businesses',
    stats: {
      hours: { value: '500+', label: 'Hours Saved/Month' },
      roi: { value: '10x', label: 'Average ROI' },
      clients: { value: '50+', label: 'Happy Clients' },
    },
  },
  he: {
    badge: 'צמיחה מונעת AI',
    title: 'הפסיקו לבזבז זמן.',
    titleHighlight: 'התחילו לצמוח.',
    subtitle: 'אנחנו בונים מערכות AI חכמות שעובדות 24/7—אוטומציה לתפעול שלכם, המרת יותר לידים, ושחרור הצוות להתמקד במה שחשוב.',
    cta: 'קבעו שיחת אסטרטגיה חינם',
    ctaSecondary: 'גלו את הפתרונות',
    trusted: 'נבחרו על ידי עסקים חדשניים',
    stats: {
      hours: { value: '500+', label: 'שעות נחסכות/חודש' },
      roi: { value: '10x', label: 'ROI ממוצע' },
      clients: { value: '50+', label: 'לקוחות מרוצים' },
    },
  },
}

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noir-900" />

      {/* Animated Liquid Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="liquid-blob w-[600px] h-[600px] bg-gold-400/30 -top-[200px] -left-[200px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="liquid-blob w-[500px] h-[500px] bg-amber-400/20 top-[40%] -right-[100px]"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="liquid-blob w-[400px] h-[400px] bg-gold-400/20 bottom-[5%] left-[20%]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20"
      >
        <div className={`max-w-6xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-8 ${isRTL ? 'flex justify-end' : ''}`}
          >
            <span className="section-label">
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </span>
          </motion.div>

          {/* Main Headline - Asymmetric Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-display font-semibold tracking-tight">
              <span className="block text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-noir-100">
                {t.title}
              </span>
              <span className="block text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-liquid-gold-animated">
                {t.titleHighlight}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-noir-300 max-w-2xl leading-relaxed mb-12 font-body"
          >
            {t.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 mb-20 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <Link href="#contact" className="btn-gold group">
              <span>{t.cta}</span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
            <Link href="#services" className="btn-ghost">
              {t.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <p className="text-sm text-noir-400 uppercase tracking-widest font-display whitespace-nowrap">
                {t.trusted}
              </p>

              <div className="h-px w-16 bg-gradient-to-r from-gold-400/50 to-transparent hidden md:block" />

              <div className={`flex flex-wrap gap-8 md:gap-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Hours Saved */}
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="icon-glow w-12 h-12">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="text-2xl font-display font-semibold text-liquid-gold">
                      {t.stats.hours.value}
                    </div>
                    <div className="text-sm text-noir-400">
                      {t.stats.hours.label}
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="icon-glow w-12 h-12">
                    <Zap className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="text-2xl font-display font-semibold text-liquid-gold">
                      {t.stats.roi.value}
                    </div>
                    <div className="text-sm text-noir-400">
                      {t.stats.roi.label}
                    </div>
                  </div>
                </div>

                {/* Clients */}
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="icon-glow w-12 h-12">
                    <Users className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="text-2xl font-display font-semibold text-liquid-gold">
                      {t.stats.clients.value}
                    </div>
                    <div className="text-sm text-noir-400">
                      {t.stats.clients.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="scroll-indicator" />
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-noir-900 to-transparent pointer-events-none" />
    </section>
  )
}
