import type { Metadata } from 'next'
import Image from 'next/image'
import { Locale, localeDirections } from '@/lib/i18n/settings'

type Company = {
  name: string
  href: string
  logoUrl?: string
  showName?: boolean
  nameClassName?: string
  note?: string
}

type PageCopy = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string[]
  companiesTitle: string
  companiesIntro: string
  beliefTitle: string
  beliefIntro: string
  beliefPoints: string[]
  photoAlt: string
}

const companies: Company[] = [
  {
    name: 'Contentsquare',
    href: 'https://contentsquare.com',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Contentsquare-logo.png',
    note: 'Formerly ClickTale',
  },
  {
    name: 'Mantis Vision',
    href: 'https://www.linkedin.com/company/mantis-vision/about/',
    logoUrl: '/Screenshot 2025-07-09 at 16.31.40.png',
    showName: true,
    nameClassName: 'text-white bg-noir-900/70 px-2 py-1 rounded-full text-xs',
  },
  {
    name: 'Lytx',
    href: 'https://www.lytx.com',
    logoUrl: '/Screenshot 2025-07-09 at 16.34.55.png',
    showName: true,
    nameClassName: 'text-white bg-noir-900/70 px-2 py-1 rounded-full text-xs',
  },
  {
    name: 'Hello Heart',
    href: 'https://www.helloheart.com',
    logoUrl: '/Screenshot 2025-05-12 at 16.49.13.png',
    showName: true,
    nameClassName: 'text-white bg-noir-900/70 px-2 py-1 rounded-full text-xs',
  },
  {
    name: 'General Motors',
    href: 'https://www.gm.com',
    logoUrl: '/Screenshot 2025-05-12 at 16.51.01.png',
    showName: true,
    nameClassName: 'text-white bg-noir-900/70 px-2 py-1 rounded-full text-xs',
  },
  {
    name: 'Cellebrite',
    href: 'https://www.cellebrite.com',
    logoUrl: '/Screenshot 2025-05-12 at 16.51.48.png',
    showName: true,
    nameClassName: 'text-white bg-noir-900/70 px-2 py-1 rounded-full text-xs',
  },
]

const translations: Record<Locale, PageCopy> = {
  en: {
    metaTitle: 'About | AutoAiSynergy',
    metaDescription: 'Founder-led AI automation experience, background, and beliefs.',
    title: 'About Me',
    intro: [
      'I am married and a proud father of two.',
      'Since 2013, I have been deeply involved in the world of automation and systems engineering. I began my career building test automation frameworks and automation infrastructure for large-scale IT organizations, and over the years expanded my expertise into business workflows, DevOps pipelines, system integrations, and AI-driven solutions.',
      'My work focuses on designing reliable, scalable, and practical automation systems, not just proofs of concept. I help organizations translate real business needs into working systems that save time, reduce friction, and create measurable impact.',
      'Today, I work with both small and large companies, helping them adopt AI and automation in a way that is responsible, maintainable, and aligned with real operational goals.',
    ],
    companiesTitle: 'Companies I Worked At',
    companiesIntro:
      'I have worked with leading global and technology-driven organizations, contributing to automation, infrastructure, quality engineering, and large-scale systems.',
    beliefTitle: 'What I Believe',
    beliefIntro:
      'Technology should serve people and businesses, not complicate them. AI and automation are powerful tools only when they are designed with clarity, patience, and responsibility.',
    beliefPoints: [
      'Deep technical experience',
      'Patience to understand real needs',
      'A problem-solving mindset',
      'A commitment to building solutions that last',
    ],
    photoAlt: 'Portrait of Roman Volman',
  },
  he: {
    metaTitle: 'אודות | AutoAiSynergy',
    metaDescription: 'ניסיון, רקע ואמונות של המייסד בתחום האוטומציה וה-AI.',
    title: 'אודותיי',
    intro: [
      'אני נשוי ואב גאה לשני ילדים.',
      'מאז שנת 2013 אני פועל בתחום האוטומציה והנדסת המערכות. את דרכי התחלתי בבניית אוטומציות בדיקות ותשתיות אוטומציה עבור חברות טכנולוגיה גדולות, ובהמשך הרחבתי את תחום העיסוק שלי לתהליכים עסקיים, DevOps, אינטגרציות בין מערכות ופתרונות מבוססי בינה מלאכותית.',
      'ההתמחות שלי היא בבניית מערכות אוטומציה יציבות, אמינות ושימושיות, לא הדגמות תאורטיות, אלא פתרונות שעובדים בפועל ומייצרים ערך אמיתי לארגון.',
      'כיום אני מסייע לחברות קטנות וגדולות ליישם אוטומציה ו-AI בצורה אחראית, תחזוקתית ומותאמת לצרכים העסקיים האמיתיים שלהן.',
    ],
    companiesTitle: 'חברות שעבדתי בהן',
    companiesIntro:
      'עבדתי עם ארגונים מובילים בעולם הטכנולוגיה, ותרמתי לפרויקטי אוטומציה, תשתיות, איכות ומערכות בקנה מידה גדול.',
    beliefTitle: 'במה אני מאמין',
    beliefIntro:
      'טכנולוגיה צריכה לשרת אנשים ועסקים, לא להכביד עליהם. בינה מלאכותית ואוטומציה הן כלים עוצמתיים רק כאשר משתמשים בהן בצורה מדויקת, סבלנית ואחראית.',
    beliefPoints: [
      'ניסיון טכנולוגי עמוק',
      'סבלנות להבין את הצורך האמיתי',
      'חשיבה מערכתית ופתרון בעיות',
      'מחויבות לבניית פתרונות יציבים לאורך זמן',
    ],
    photoAlt: 'דיוקן של רומן וולמן',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  }
}

interface PageProps {
  params: { locale: Locale }
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  return (
    <section className="section-container bg-[#F0EDE6] dark:bg-noir-950 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${isRTL ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''}`}>
          <div className={isRTL ? 'text-right order-2 lg:order-1' : 'text-left order-2 lg:order-1'}>
            <h1 className="section-title mb-6">{t.title}</h1>
            <div className="space-y-5 text-noir-700 dark:text-noir-300 leading-relaxed text-lg">
              {t.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}>
            <div className="glass-card p-4">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/roman.JPG"
                  alt={t.photoAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-noir-900 dark:text-noir-100 mb-4">
            {t.companiesTitle}
          </h2>
          <p className="text-noir-700 dark:text-noir-300 mb-8 max-w-3xl">
            {t.companiesIntro}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex flex-col items-center justify-center gap-2 min-h-[96px] hover:-translate-y-0.5 transition-transform duration-300"
              >
                {company.logoUrl ? (
                  <img
                    src={company.logoUrl}
                    alt={company.name}
                    className="max-h-10 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-sm font-display text-noir-700 dark:text-noir-300 text-center">
                    {company.name}
                  </span>
                )}
                {company.showName && (
                  <span className={company.nameClassName ?? 'text-xs text-noir-600 dark:text-noir-300'}>
                    {company.name}
                  </span>
                )}
              </a>
            ))}
          </div>
          <p className="text-sm text-noir-500 dark:text-noir-400 mt-4">
            Contentsquare (formerly ClickTale)
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-noir-900 dark:text-noir-100 mb-4">
            {t.beliefTitle}
          </h2>
          <p className="text-noir-700 dark:text-noir-300 mb-6 max-w-3xl">
            {t.beliefIntro}
          </p>
          <ul className={`list-disc space-y-2 text-noir-700 dark:text-noir-300 ${isRTL ? 'pr-6' : 'pl-6'}`}>
            {t.beliefPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
