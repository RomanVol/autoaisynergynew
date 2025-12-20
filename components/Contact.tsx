'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Locale, localeDirections } from '@/lib/i18n/settings'

const translations = {
  en: {
    label: 'Get In Touch',
    title: 'Let\'s Build Your',
    titleHighlight: 'AI Solution',
    subtitle: 'Fill out the form or reach out directly. We respond within 2 hours during business hours.',
    form: {
      name: 'Your Name',
      namePlaceholder: 'John Smith',
      email: 'Email Address',
      emailPlaceholder: 'john@company.com',
      company: 'Company Name',
      companyPlaceholder: 'Your Company',
      service: 'What do you need?',
      servicePlaceholder: 'Select a service',
      serviceOptions: {
        agents: 'AI Agents',
        website: 'AI-Powered Website',
        automation: 'Workflow Automation',
        chatbot: 'Chatbot',
        application: 'Custom Application',
        other: 'Other / Not Sure',
      },
      message: 'Tell us about your project',
      messagePlaceholder: 'Describe your challenges and what you\'d like to automate...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
    },
    direct: {
      title: 'Or Reach Us Directly',
      whatsapp: 'WhatsApp Us',
      email: 'Email Us',
      location: 'Tel Aviv, Israel',
    },
    whatsappMessage: 'Hi! I\'m interested in your AI automation services.',
  },
  he: {
    label: 'צרו קשר',
    title: 'בואו נבנה את',
    titleHighlight: 'פתרון ה-AI שלכם',
    subtitle: 'מלאו את הטופס או פנו אלינו ישירות. אנחנו עונים תוך שעתיים בשעות העבודה.',
    form: {
      name: 'השם שלכם',
      namePlaceholder: 'ישראל ישראלי',
      email: 'כתובת אימייל',
      emailPlaceholder: 'israel@company.com',
      company: 'שם החברה',
      companyPlaceholder: 'החברה שלכם',
      service: 'מה אתם צריכים?',
      servicePlaceholder: 'בחרו שירות',
      serviceOptions: {
        agents: 'סוכני AI',
        website: 'אתר מונע AI',
        automation: 'אוטומציית תהליכים',
        chatbot: 'צ\'אטבוט',
        application: 'אפליקציה מותאמת',
        other: 'אחר / לא בטוח',
      },
      message: 'ספרו לנו על הפרויקט',
      messagePlaceholder: 'תארו את האתגרים ומה הייתם רוצים לאוטומט...',
      submit: 'שלח הודעה',
      submitting: 'שולח...',
      success: 'ההודעה נשלחה! נחזור אליכם בקרוב.',
      error: 'משהו השתבש. נסו שוב.',
    },
    direct: {
      title: 'או פנו אלינו ישירות',
      whatsapp: 'וואטסאפ',
      email: 'אימייל',
      location: 'תל אביב, ישראל',
    },
    whatsappMessage: 'היי! אני מעוניין/ת בשירותי האוטומציה וה-AI שלכם.',
  },
}

const WHATSAPP_NUMBER = '972501234567'
const EMAIL = 'contact@autoaisynergy.com'

interface ContactProps {
  locale: Locale
}

export function Contact({ locale }: ContactProps) {
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormState('success')
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setTimeout(() => setFormState('idle'), 5000)
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-container bg-noir-950">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto">
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
            {t.title}
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

        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-display font-medium text-noir-300 mb-2.5
                                        ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.form.namePlaceholder}
                        className={`input-premium ${isRTL ? 'text-right' : 'text-left'}`}
                        dir={dir}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-display font-medium text-noir-300 mb-2.5
                                        ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.form.emailPlaceholder}
                        className="input-premium"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-display font-medium text-noir-300 mb-2.5
                                        ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.form.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.form.companyPlaceholder}
                        className={`input-premium ${isRTL ? 'text-right' : 'text-left'}`}
                        dir={dir}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-display font-medium text-noir-300 mb-2.5
                                        ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.form.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`input-premium ${isRTL ? 'text-right' : 'text-left'}`}
                        dir={dir}
                      >
                        <option value="">{t.form.servicePlaceholder}</option>
                        <option value="agents">{t.form.serviceOptions.agents}</option>
                        <option value="website">{t.form.serviceOptions.website}</option>
                        <option value="automation">{t.form.serviceOptions.automation}</option>
                        <option value="chatbot">{t.form.serviceOptions.chatbot}</option>
                        <option value="application">{t.form.serviceOptions.application}</option>
                        <option value="other">{t.form.serviceOptions.other}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-sm font-display font-medium text-noir-300 mb-2.5
                                      ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.form.message}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.form.messagePlaceholder}
                      className={`input-premium textarea-premium ${isRTL ? 'text-right' : 'text-left'}`}
                      rows={5}
                      dir={dir}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`btn-gold w-full ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        <span>{t.form.submit}</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {formState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 text-green-400 font-display ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>{t.form.success}</span>
                    </motion.div>
                  )}

                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 text-red-400 font-display ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>{t.form.error}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className={`glass-card p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg font-display font-semibold text-noir-100 mb-6">
                  {t.direct.title}
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl
                               bg-green-500/10 border border-green-500/20
                               hover:bg-green-500/15 hover:border-green-500/30
                               transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center
                                  group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-noir-100">
                        {t.direct.whatsapp}
                      </div>
                      <div className="text-sm text-noir-400" dir="ltr">
                        +{WHATSAPP_NUMBER.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className={`flex items-center gap-4 p-4 rounded-2xl
                               bg-gold-400/10 border border-gold-400/20
                               hover:bg-gold-400/15 hover:border-gold-400/30
                               transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center
                                  group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-noir-100">
                        {t.direct.email}
                      </div>
                      <div className="text-sm text-noir-400" dir="ltr">
                        {EMAIL}
                      </div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className={`flex items-center gap-4 p-4 rounded-2xl
                                 bg-noir-700/30 border border-noir-600/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-noir-600/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-noir-300" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-noir-100">
                        {t.direct.location}
                      </div>
                      <div className="text-sm text-noir-400">
                        Israel
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-noir-300 text-sm font-display">
                  {locale === 'en' ? 'Average response: 2 hours' : 'זמן תגובה ממוצע: שעתיים'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
