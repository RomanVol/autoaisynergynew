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
    metaTitle: 'Terms & Conditions | AutoAiSynergy',
    metaDescription: 'AI-safe terms for using AutoAiSynergy services in Israel and the United States.',
    title: 'Terms & Conditions',
    updated: 'Last updated: March 8, 2025',
    intro:
      'These Terms & Conditions govern your access to and use of the AutoAiSynergy website and services. By using our site or services, you agree to these terms.',
    sections: [
      {
        heading: 'Services',
        paragraphs: [
          'AutoAiSynergy provides AI strategy, automation, implementation, and integration services. The scope, pricing, and delivery details are defined in a proposal, statement of work, or separate agreement.',
        ],
      },
      {
        heading: 'Eligibility & Account Information',
        paragraphs: [
          'You must be at least 18 years old to use our services. You agree to provide accurate and complete information when contacting us or engaging our services.',
        ],
      },
      {
        heading: 'Acceptable Use',
        paragraphs: [
          'You agree not to use our services to engage in unlawful, harmful, or abusive activities. Prohibited uses include:',
        ],
        items: [
          'Violating any law, regulation, or third-party rights.',
          'Processing or sharing data you do not have the right to use.',
          'Attempting to reverse engineer, bypass, or interfere with our systems.',
          'Generating or distributing malware, phishing, or harmful content.',
          'Using AI outputs as the sole basis for medical, legal, financial, or employment decisions.',
        ],
      },
      {
        heading: 'AI Output & Reliance',
        paragraphs: [
          'AI outputs may be inaccurate, incomplete, or biased. You are responsible for reviewing and validating all outputs before relying on them. Our services do not provide legal, medical, or financial advice.',
        ],
      },
      {
        heading: 'Client Content & Data',
        paragraphs: [
          'You retain ownership of your content and data. You grant AutoAiSynergy a limited license to process and use your content solely to deliver the agreed services. You represent that you have all rights necessary to provide the content.',
          'We do not use client data to train public AI models without explicit written permission.',
        ],
      },
      {
        heading: 'Confidentiality',
        paragraphs: [
          'We treat non-public client information as confidential and use it only for delivering services. Specific confidentiality obligations may be detailed in a separate agreement.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'We retain all rights to our pre-existing tools, templates, and know-how. Deliverables are licensed or assigned as specified in the applicable agreement.',
        ],
      },
      {
        heading: 'Third-Party Services',
        paragraphs: [
          'We may rely on third-party services (such as cloud hosting, analytics, or AI model providers). Your use of those services may be subject to their terms.',
        ],
      },
      {
        heading: 'Fees & Payment',
        paragraphs: [
          'Fees, payment schedules, and taxes are defined in the applicable proposal or agreement. Late payments may result in paused work.',
        ],
      },
      {
        heading: 'Warranties & Disclaimers',
        paragraphs: [
          'Our services are provided on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, AutoAiSynergy will not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability is limited to the fees paid for the services giving rise to the claim.',
        ],
      },
      {
        heading: 'Termination',
        paragraphs: [
          'Either party may terminate services as described in the applicable agreement. Upon termination, you must stop using any deliverables not licensed to you.',
        ],
      },
      {
        heading: 'Governing Law',
        paragraphs: [
          'Unless otherwise agreed in writing, these terms are governed by the laws of Israel. Mandatory consumer protections under applicable U.S. law will still apply where relevant.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'If you have questions about these terms, contact us at contact@autoaisynergy.com.',
        ],
      },
    ],
  },
  he: {
    metaTitle: 'תנאים והגבלות | AutoAiSynergy',
    metaDescription: 'תנאים "AI-safe" לשימוש בשירותי AutoAiSynergy בישראל ובארה״ב.',
    title: 'תנאים והגבלות',
    updated: 'עודכן לאחרונה: 8 במרץ 2025',
    intro:
      'תנאים והגבלות אלה מסדירים את הגישה והשימוש באתר ובשירותי AutoAiSynergy. שימוש באתר או בשירותים מהווה הסכמה לתנאים אלה.',
    sections: [
      {
        heading: 'השירותים',
        paragraphs: [
          'AutoAiSynergy מספקת שירותי אסטרטגיה, אוטומציה, פיתוח ואינטגרציות מבוססות AI. היקף העבודה, המחירים ולוחות הזמנים מוגדרים בהצעה, בהצהרת עבודה או בהסכם נפרד.',
        ],
      },
      {
        heading: 'כשירות ומידע חשבון',
        paragraphs: [
          'עליכם להיות בני 18 לפחות כדי להשתמש בשירותים. אתם מתחייבים למסור מידע מדויק ומלא בעת יצירת קשר או התקשרות איתנו.',
        ],
      },
      {
        heading: 'שימוש מותר ואסור',
        paragraphs: [
          'אסור להשתמש בשירותים לפעילות בלתי חוקית, מזיקה או פוגענית. השימושים האסורים כוללים:',
        ],
        items: [
          'הפרת חוק, תקנה או זכויות צד שלישי.',
          'עיבוד או שיתוף מידע שאין לכם זכות להשתמש בו.',
          'ניסיון לעקוף, לפגוע או להפריע למערכות שלנו.',
          'יצירה או הפצה של נוזקות, פישינג או תוכן מזיק.',
          'שימוש בפלטי AI כבסיס יחיד להחלטות רפואיות, משפטיות, פיננסיות או תעסוקתיות.',
        ],
      },
      {
        heading: 'פלטי AI ואחריות',
        paragraphs: [
          'פלטי AI עשויים להיות שגויים, חלקיים או מוטים. האחריות לבדוק ולאמת את הפלטים חלה עליכם. השירותים אינם מהווים ייעוץ משפטי, רפואי או פיננסי.',
        ],
      },
      {
        heading: 'תוכן ונתוני לקוח',
        paragraphs: [
          'הבעלות על התוכן והנתונים שלכם נשארת שלכם. אתם מעניקים ל-AutoAiSynergy רישיון מוגבל להשתמש בתוכן אך ורק לצורך אספקת השירותים המוסכמים. אתם מצהירים שיש לכם את כל הזכויות הדרושות למסירת התוכן.',
          'איננו משתמשים בנתוני לקוח לאימון מודלי AI ציבוריים ללא אישור כתוב ומפורש.',
        ],
      },
      {
        heading: 'סודיות',
        paragraphs: [
          'אנו מתייחסים למידע לא פומבי של לקוחות כאל מידע חסוי ומשתמשים בו רק לצורך מתן השירותים. התחייבויות סודיות ספציפיות עשויות להיות מוגדרות בהסכם נפרד.',
        ],
      },
      {
        heading: 'קניין רוחני',
        paragraphs: [
          'אנו שומרים על זכויות בכלים, בתבניות ובידע הקיים מראש. מסירת זכויות או רישוי למסמכים ותוצרים תיעשה לפי ההסכם הרלוונטי.',
        ],
      },
      {
        heading: 'שירותי צד שלישי',
        paragraphs: [
          'ייתכן שנשתמש בשירותי צד שלישי (כגון אירוח ענן, אנליטיקה או ספקי מודלי AI). השימוש בשירותים אלה כפוף גם לתנאים שלהם.',
        ],
      },
      {
        heading: 'תשלומים',
        paragraphs: [
          'המחירים, מועדי התשלום והמיסים מפורטים בהצעה או בהסכם הרלוונטי. אי תשלום עשוי לגרום לעצירת עבודה.',
        ],
      },
      {
        heading: 'כתב ויתור על אחריות',
        paragraphs: [
          'השירותים מסופקים כפי שהם ("as is") וכפוף לזמינות. אנו מוותרים על כל אחריות מפורשת או משתמעת, לרבות אחריות לסחירות, התאמה למטרה מסוימת ואי-הפרה.',
        ],
      },
      {
        heading: 'הגבלת אחריות',
        paragraphs: [
          'במידה המרבית המותרת לפי חוק, AutoAiSynergy לא תהיה אחראית לנזקים עקיפים, מיוחדים, תוצאתיים או עונשיים. סך האחריות שלנו מוגבל לסכומים ששולמו עבור השירותים שגרמו לתביעה.',
        ],
      },
      {
        heading: 'סיום התקשרות',
        paragraphs: [
          'כל צד רשאי לסיים את השירותים בהתאם להסכם הרלוונטי. עם סיום, עליכם להפסיק שימוש בכל תוצר שאינו מורשה לכם.',
        ],
      },
      {
        heading: 'דין חל',
        paragraphs: [
          'אלא אם הוסכם אחרת בכתב, תנאים אלה כפופים לדין הישראלי. הגנות צרכניות מחייבות לפי הדין בארה״ב ימשיכו לחול ככל שרלוונטי.',
        ],
      },
      {
        heading: 'יצירת קשר',
        paragraphs: [
          'לשאלות בנוגע לתנאים, ניתן לפנות אלינו בכתובת contact@autoaisynergy.com.',
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

export default async function TermsPage({ params }: PageProps) {
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
