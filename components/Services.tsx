'use client'

import { motion } from 'framer-motion'
import { Bot, Globe, Workflow, Smartphone, MessageSquare, Zap, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const iconMap = {
  Bot,
  Globe,
  Workflow,
  Smartphone,
  MessageSquare,
  Zap,
}

const translations = {
  en: {
    label: 'What We Build',
    title: 'AI Solutions That',
    titleHighlight: 'Transform Your Business',
    subtitle: 'Custom-built automation systems designed to solve real business challenges and deliver measurable ROI.',
    cta: 'Start Your Project',
    items: [
      {
        icon: 'Bot',
        title: 'AI Agents',
        description: 'Autonomous agents that handle customer service, sales outreach, and complex multi-step tasks around the clock.',
        highlight: '24/7 Operation',
      },
      {
        icon: 'Globe',
        title: 'AI-Powered Websites',
        description: 'High-converting websites with intelligent chatbots, personalized experiences, and smart lead capture.',
        highlight: '3x More Conversions',
      },
      {
        icon: 'Workflow',
        title: 'Workflow Automation',
        description: 'Connect your tools and eliminate manual work. From CRM updates to invoice processing, fully automated.',
        highlight: '500+ Integrations',
      },
      {
        icon: 'Smartphone',
        title: 'Custom Applications',
        description: 'Bespoke AI-powered applications tailored to your unique processes and business requirements.',
        highlight: 'Built For You',
      },
      {
        icon: 'MessageSquare',
        title: 'Intelligent Chatbots',
        description: 'Advanced conversational AI for website, WhatsApp, Telegram—qualify leads while you sleep.',
        highlight: 'Multi-Platform',
      },
      {
        icon: 'Zap',
        title: 'Process Optimization',
        description: 'Analyze, redesign, and supercharge your workflows with AI-driven efficiency improvements.',
        highlight: 'Ongoing Support',
      },
    ],
  },
  he: {
    label: 'מה אנחנו בונים',
    title: 'פתרונות AI ',
    titleHighlight: 'שמשנים את העסק',
    subtitle: 'מערכות אוטומציה מותאמות אישית שנבנו לפתור אתגרים עסקיים אמיתיים ולספק ROI מדיד.',
    cta: 'התחילו פרויקט',
    items: [
      {
        icon: 'Bot',
        title: 'סוכני AI',
        description: 'סוכנים אוטונומיים שמטפלים בשירות לקוחות, פניות מכירות ומשימות מורכבות סביב השעון.',
        highlight: 'פעילות 24/7',
      },
      {
        icon: 'Globe',
        title: 'אתרים מונעי AI',
        description: 'אתרים עם המרה גבוהה, צ\'אטבוטים חכמים, חוויות מותאמות אישית ולכידת לידים חכמה.',
        highlight: 'פי 3 יותר המרות',
      },
      {
        icon: 'Workflow',
        title: 'אוטומציית תהליכים',
        description: 'חברו את הכלים שלכם וחסכו עבודה ידנית. מעדכוני CRM ועד עיבוד חשבוניות, הכל אוטומטי.',
        highlight: '500+ אינטגרציות',
      },
      {
        icon: 'Smartphone',
        title: 'אפליקציות מותאמות',
        description: 'אפליקציות מונעות AI מותאמות לתהליכים הייחודיים ולדרישות העסקיות שלכם.',
        highlight: 'נבנה בשבילכם',
      },
      {
        icon: 'MessageSquare',
        title: 'צ\'אטבוטים חכמים',
        description: 'AI שיחתי מתקדם לאתר, וואטסאפ, טלגרם—מסננים לידים בזמן שאתם ישנים.',
        highlight: 'מולטי-פלטפורמה',
      },
      {
        icon: 'Zap',
        title: 'אופטימיזציית תהליכים',
        description: 'ניתוח, עיצוב מחדש ושדרוג תהליכי העבודה שלכם עם שיפורי יעילות מונעי AI.',
        highlight: 'תמיכה שוטפת',
      },
    ],
  },
}

interface ServicesProps {
  locale: Locale
}

export function Services({ locale }: ServicesProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  return (
    <section id="services" className="section-container bg-noir-950">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className={`section-header max-w-3xl ${isRTL ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label inline-flex"
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
            <span className="text-liquid-gold whitespace-nowrap"> {t.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const isLarge = index === 0 || index === 3

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group glass-card p-8 transition-all duration-500
                           hover:-translate-y-1 ${isLarge ? 'lg:col-span-2' : ''}`}
              >
                <div className={`flex flex-col h-full ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
                  {/* Icon & Highlight */}
                  <div className={`flex items-start justify-between w-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="icon-glow group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="text-xs font-display font-medium text-gold-400/80 bg-gold-400/10
                                   px-3 py-1.5 rounded-full border border-gold-400/10">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-noir-800 dark:text-noir-100 mb-3
                               group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-noir-400 leading-relaxed flex-1 font-body">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className={`mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300
                                  translate-y-2 group-hover:translate-y-0 ${isRTL ? 'self-start' : 'self-end'}`}>
                    <ArrowUpRight className={`w-5 h-5 text-gold-400 ${isRTL ? 'rotate-[270deg]' : ''}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="#contact" className="btn-gold group">
            <span>{t.cta}</span>
            <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                     ${isRTL ? 'rotate-[270deg]' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
