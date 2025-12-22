'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    label: 'How We Work',
    title: 'From Idea to',
    titleHighlight: 'Launch',
    subtitle: 'A streamlined process that gets you from concept to working solution—fast.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'We analyze your workflows, identify automation opportunities, and map out ROI potential. No commitment required.',
        duration: '30-min Call',
      },
      {
        number: '02',
        title: 'Design',
        description: 'Our team architects a custom solution tailored to your needs, tech stack, and goals. You approve before we build.',
        duration: '3-5 Days',
      },
      {
        number: '03',
        title: 'Build',
        description: 'We develop your AI solution, integrate with existing tools, and rigorously test everything.',
        duration: '1-4 Weeks',
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Go live with full support. We monitor, optimize, and ensure your solution delivers results.',
        duration: 'Ongoing',
      },
    ],
  },
  he: {
    label: 'איך אנחנו עובדים',
    title: 'מרעיון ל',
    titleHighlight: 'השקה',
    subtitle: 'תהליך יעיל שמוביל אתכם מקונספט לפתרון עובד—במהירות.',
    steps: [
      {
        number: '01',
        title: 'גילוי',
        description: 'אנחנו מנתחים את תהליכי העבודה שלכם, מזהים הזדמנויות לאוטומציה וממפים פוטנציאל ROI. ללא התחייבות.',
        duration: 'שיחה של 30 דק\'',
      },
      {
        number: '02',
        title: 'עיצוב',
        description: 'הצוות שלנו מתכנן פתרון מותאם לצרכים שלכם, הסביבה הטכנולוגית והיעדים. אתם מאשרים לפני שנבנה.',
        duration: '3-5 ימים',
      },
      {
        number: '03',
        title: 'בנייה',
        description: 'אנחנו מפתחים את פתרון ה-AI שלכם, משלבים עם הכלים הקיימים ובודקים הכל לעומק.',
        duration: '1-4 שבועות',
      },
      {
        number: '04',
        title: 'השקה',
        description: 'עולים לאוויר עם תמיכה מלאה. אנחנו עוקבים, מייעלים ומוודאים שהפתרון מספק תוצאות.',
        duration: 'שוטף',
      },
    ],
  },
}

interface ProcessProps {
  locale: Locale
}

export function Process({ locale }: ProcessProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section
      id="process"
      ref={containerRef}
      className="section-container relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF] via-[#F5F2ED]/70 to-[#F7F4EF]
                     dark:from-noir-950 dark:via-noir-900/50 dark:to-noir-950" />

      {/* Decorative blob */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[300px] w-[600px] h-[600px]
                     rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`section-header text-center max-w-3xl mx-auto`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label inline-flex mx-auto"
          >
            {t.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-6"
          >
            <span className="text-white force-contrast">{t.title}</span>
            <span className="text-liquid-gold"> {t.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            <span className="text-white dark:text-noir-400 force-contrast">{t.subtitle}</span>
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated connecting line */}
          <div
            className={`absolute top-0 bottom-0 w-px bg-noir-700 hidden md:block ${isRTL ? 'right-[39px]' : 'left-[39px]'}`}
          >
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-400 to-amber-400"
            />
          </div>

          <div className="space-y-6">
            {t.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex gap-6 md:gap-10 items-start ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-noir-800 border border-gold-400/20
                                flex items-center justify-center relative overflow-hidden group">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-500" />
                    <span className="text-2xl font-display font-semibold text-liquid-gold relative z-10">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className={`glass-card p-6 md:p-8 flex-1 group ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center gap-3 mb-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <h3 className="text-xl font-display font-semibold text-noir-800 dark:text-noir-100
                                 group-hover:text-gold-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="text-xs font-display font-medium text-gold-400/70
                                   bg-gold-400/10 px-3 py-1 rounded-full w-fit
                                   border border-gold-400/10">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-noir-400 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
