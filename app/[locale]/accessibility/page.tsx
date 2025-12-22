import type { Metadata } from 'next'
import { Locale, localeDirections } from '@/lib/i18n/settings'

type Section = {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

type PageCopy = {
  metaTitle: string
  metaDescription: string
  title: string
  updated: string
  intro: string
  sections: Section[]
}

const translations: Record<Locale, PageCopy> = {
  en: {
    metaTitle: 'Accessibility Statement | AutoAiSynergy',
    metaDescription: 'Accessibility commitment and support for the AutoAiSynergy website.',
    title: 'Accessibility Statement',
    updated: 'Last updated: March 8, 2025',
    intro:
      'AutoAiSynergy is committed to providing an accessible experience for all users, including people with disabilities.',
    sections: [
      {
        heading: 'Standards We Aim For',
        paragraphs: [
          'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA wherever feasible.',
        ],
      },
      {
        heading: 'Measures We Take',
        items: [
          'Use semantic HTML and landmarks for screen reader support.',
          'Support keyboard navigation for interactive elements.',
          'Maintain readable color contrast and scalable typography.',
          'Provide descriptive labels for form controls.',
          'Test key flows on modern browsers and assistive technologies.',
        ],
      },
      {
        heading: 'Compatibility',
        paragraphs: [
          'The site is designed to work with current versions of major browsers and common screen readers such as NVDA and VoiceOver.',
        ],
      },
      {
        heading: 'Known Limitations',
        paragraphs: [
          'Some third-party content or embedded tools may not fully meet accessibility standards. We work to provide accessible alternatives when possible.',
        ],
      },
      {
        heading: 'Feedback & Support',
        paragraphs: [
          'If you encounter an accessibility issue or need assistance, contact us at romavolman@gmail.com and we will respond promptly.',
        ],
      },
    ],
  },
  he: {
    metaTitle: 'הצהרת נגישות | AutoAiSynergy',
    metaDescription: 'מחויבות לנגישות ותמיכה באתר AutoAiSynergy.',
    title: 'הצהרת נגישות',
    updated: 'עודכן לאחרונה: 8 במרץ 2025',
    intro:
      'AutoAiSynergy מחויבת לספק חוויית שימוש נגישה לכל המשתמשים, כולל אנשים עם מוגבלויות.',
    sections: [
      {
        heading: 'התקן שאליו אנו שואפים',
        paragraphs: [
          'אנו שואפים לעמוד בהנחיות הנגישות לתוכן באינטרנט (WCAG) 2.1 ברמה AA ככל שניתן.',
        ],
      },
      {
        heading: 'אמצעים שאנו נוקטים',
        items: [
          'שימוש ב-HTML סמנטי ובנקודות ציון לתמיכה בקוראי מסך.',
          'תמיכה בניווט מקלדת ברכיבים אינטראקטיביים.',
          'שמירה על ניגודיות צבעים קריאה וטיפוגרפיה גמישה.',
          'תוויות ברורות לשדות וטפסים.',
          'בדיקות של זרימות מרכזיות בדפדפנים וטכנולוגיות מסייעות.',
        ],
      },
      {
        heading: 'תאימות',
        paragraphs: [
          'האתר תוכנן לעבוד עם גרסאות עדכניות של דפדפנים מרכזיים ועם קוראי מסך נפוצים כמו NVDA ו-VoiceOver.',
        ],
      },
      {
        heading: 'מגבלות ידועות',
        paragraphs: [
          'ייתכן שתוכן צד שלישי או רכיבים מוטמעים לא יעמדו במלואם בתקני הנגישות. אנו פועלים לספק חלופות נגישות ככל האפשר.',
        ],
      },
      {
        heading: 'משוב ותמיכה',
        paragraphs: [
          'אם נתקלתם בבעיה או שאתם צריכים סיוע, תוכלו לפנות אלינו בכתובת romavolman@gmail.com ונשמח לסייע.',
        ],
      },
    ],
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

export default async function AccessibilityPage({ params }: PageProps) {
  const { locale } = await params
  const t = translations[locale]
  const dir = localeDirections[locale]
  const isRTL = dir === 'rtl'

  return (
    <section className="section-container bg-[#F0EDE6] dark:bg-noir-950 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl ${isRTL ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <h1 className="section-title mb-4">{t.title}</h1>
          <p className="text-sm text-noir-500 dark:text-noir-400 mb-8">{t.updated}</p>
          <p className="text-lg text-noir-700 dark:text-noir-300 leading-relaxed mb-10">
            {t.intro}
          </p>

          <div className="space-y-10">
            {t.sections.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-noir-900 dark:text-noir-100">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-noir-700 dark:text-noir-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul
                    className={`space-y-2 list-disc text-noir-700 dark:text-noir-300 leading-relaxed ${
                      isRTL ? 'pr-6' : 'pl-6'
                    }`}
                  >
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
