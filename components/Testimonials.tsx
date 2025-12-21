'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    label: 'Client Results',
    title: 'Real Impact,',
    titleHighlight: 'Real Stories',
    subtitle: 'See how businesses like yours transformed their operations with our AI solutions.',
    items: [
      {
        quote: 'AutoAI Synergy built us an AI agent that handles 80% of our customer inquiries automatically. Response time dropped from hours to seconds.',
        author: 'Sarah M.',
        role: 'Operations Director',
        company: 'E-commerce Brand',
        metric: '80%',
        metricLabel: 'Automated',
      },
      {
        quote: 'The workflow automation saves our team 40 hours every week. We finally focus on strategy instead of data entry.',
        author: 'David K.',
        role: 'CEO',
        company: 'Marketing Agency',
        metric: '40h',
        metricLabel: 'Saved Weekly',
      },
      {
        quote: 'Our new AI-powered website converts 3x better. The chatbot qualifies leads before they reach sales.',
        author: 'Michelle R.',
        role: 'Founder',
        company: 'SaaS Startup',
        metric: '3x',
        metricLabel: 'Conversions',
      },
    ],
  },
  he: {
    label: 'תוצאות לקוחות',
    title: 'השפעה אמיתית,',
    titleHighlight: 'סיפורים אמיתיים',
    subtitle: 'ראו איך עסקים כמו שלכם שינו את הפעילות שלהם עם פתרונות ה-AI שלנו.',
    items: [
      {
        quote: 'AutoAI Synergy בנו לנו סוכן AI שמטפל ב-80% מפניות הלקוחות באופן אוטומטי. זמן התגובה ירד משעות לשניות.',
        author: 'שרה מ.',
        role: 'מנהלת תפעול',
        company: 'מותג אי-קומרס',
        metric: '80%',
        metricLabel: 'אוטומטי',
      },
      {
        quote: 'האוטומציה חוסכת לצוות שלנו 40 שעות כל שבוע. סוף סוף אנחנו מתמקדים באסטרטגיה במקום הזנת נתונים.',
        author: 'דוד כ.',
        role: 'מנכ"ל',
        company: 'סוכנות שיווק',
        metric: '40',
        metricLabel: 'שעות בשבוע',
      },
      {
        quote: 'האתר החדש שלנו עם AI ממיר פי 3 יותר. הצ\'אטבוט מסנן לידים לפני שהם מגיעים למכירות.',
        author: 'מישל ר.',
        role: 'מייסדת',
        company: 'סטארטאפ SaaS',
        metric: 'x3',
        metricLabel: 'המרות',
      },
    ],
  },
}

interface TestimonialsProps {
  locale: Locale
}

export function Testimonials({ locale }: TestimonialsProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  return (
    <section id="testimonials" className="section-container bg-noir-950 overflow-hidden">
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
            <span className="text-white">{t.title}</span>
            <span className="text-liquid-gold"> {t.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col group
                         ${index === 1 ? 'lg:-translate-y-6' : ''}`}
            >
              {/* Metric Badge - Top Right */}
              <div className={`flex items-start justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Quote className="w-10 h-10 text-gold-400/20" />
                <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="text-3xl font-display font-bold text-liquid-gold">
                    {testimonial.metric}
                  </div>
                  <div className="text-xs text-noir-400 font-display uppercase tracking-wider">
                    {testimonial.metricLabel}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className={`flex gap-1 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`text-noir-200 leading-relaxed mb-8 flex-1 font-body text-lg
                                     ${isRTL ? 'text-right' : 'text-left'}`}>
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className={`flex items-center gap-4 pt-6 border-t border-noir-700/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center
                              text-noir-900 font-display font-semibold text-lg
                              shadow-gold group-hover:shadow-gold-lg transition-shadow duration-300">
                  {testimonial.author.charAt(0)}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-display font-semibold text-noir-100">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-noir-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
