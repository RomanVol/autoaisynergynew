'use client'

import { motion } from 'framer-motion'
import { Clock, UserX, Shuffle, Scale } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const iconMap = { Clock, UserX, Shuffle, Scale }

const translations = {
  en: {
    label: 'Sound Familiar?',
    title: 'These Challenges Are',
    titleHighlight: 'Costing You',
    items: [
      {
        icon: 'Clock',
        title: 'Drowning in Manual Tasks',
        description: 'Hours lost to data entry, emails, and repetitive work that could be automated.',
      },
      {
        icon: 'UserX',
        title: 'Missing Customer Inquiries',
        description: 'Leads slip away because you can\'t respond 24/7 or scale support fast enough.',
      },
      {
        icon: 'Shuffle',
        title: 'Disconnected Workflows',
        description: 'Tools don\'t talk to each other, creating bottlenecks and duplicate work.',
      },
      {
        icon: 'Scale',
        title: 'Scaling Challenges',
        description: 'Growth means hiring more people instead of building systems that scale.',
      },
    ],
  },
  he: {
    label: 'נשמע מוכר?',
    title: 'האתגרים האלה',
    titleHighlight: 'עולים לכם ביוקר',
    items: [
      {
        icon: 'Clock',
        title: 'טובעים במשימות ידניות',
        description: 'שעות אבודות על הזנת נתונים, מיילים ועבודה חוזרת שניתן לאוטומט.',
      },
      {
        icon: 'UserX',
        title: 'מפספסים לידים',
        description: 'לידים נעלמים כי אי אפשר להגיב 24/7 או להרחיב תמיכה מספיק מהר.',
      },
      {
        icon: 'Shuffle',
        title: 'תהליכים מנותקים',
        description: 'הכלים לא מדברים אחד עם השני, יוצרים צווארי בקבוק ועבודה כפולה.',
      },
      {
        icon: 'Scale',
        title: 'אתגרי צמיחה',
        description: 'צמיחה אומרת לגייס עוד אנשים במקום לבנות מערכות שיכולות לגדול.',
      },
    ],
  },
}

interface ProblemsProps {
  locale: Locale
}

export function Problems({ locale }: ProblemsProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  return (
    <section className="section-container relative overflow-hidden bg-noir-900/50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900/50 to-noir-950" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                      bg-red-500/10 border border-red-500/20 text-red-400
                      text-xs font-display font-medium tracking-wider uppercase mb-6"
          >
            {t.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            <span className="text-white">{t.title}</span>
            <span className="text-red-400"> {t.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.items.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-noir-800/30 border border-red-500/10
                           hover:border-red-500/25 hover:bg-noir-800/50
                           transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0
                                border border-red-500/10 group-hover:bg-red-500/15 transition-colors">
                    <IconComponent className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-noir-100 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-noir-400 text-sm leading-relaxed font-body">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
