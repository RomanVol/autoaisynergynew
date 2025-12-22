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
    metaTitle: 'Privacy Policy | AutoAiSynergy',
    metaDescription: 'How AutoAiSynergy collects, uses, and protects personal information across Israel and the US.',
    title: 'Privacy Policy',
    updated: 'Last updated: March 8, 2025',
    intro:
      'This Privacy Policy explains how AutoAiSynergy ("AutoAiSynergy", "we", "us") collects, uses, and protects personal information when you visit our website, contact us, or use our AI automation services in Israel and the United States.',
    sections: [
      {
        heading: 'Who We Are',
        paragraphs: [
          'AutoAiSynergy is an AI automation agency operating in Israel and the United States. We design and deliver custom AI agents, workflow automation, and integrations for businesses.',
        ],
      },
      {
        heading: 'Information We Collect',
        paragraphs: [
          'We collect information you provide and information generated through your use of our website and services.',
        ],
        items: [
          'Contact details such as name, email, company, and phone number.',
          'Business and project information shared during discovery, scoping, and delivery.',
          'Content, prompts, files, and datasets you provide for AI workflows.',
          'Billing and contract information if you become a client.',
          'Technical data such as IP address, device/browser type, pages viewed, and referring URLs.',
        ],
      },
      {
        heading: 'How We Use Information',
        items: [
          'Provide and improve our services, including configuring AI systems and automations.',
          'Respond to inquiries and deliver customer support.',
          'Send proposals, service updates, and administrative communications.',
          'Maintain security, prevent fraud, and comply with legal obligations.',
          'Market our services (you can opt out at any time).',
        ],
      },
      {
        heading: 'AI & Automated Processing',
        paragraphs: [
          'We use AI tools to analyze inputs and generate outputs. Depending on the engagement, outputs may be reviewed by our team before delivery.',
        ],
        items: [
          'We do not use client data to train public AI models without explicit permission.',
          'We apply access controls and limit data to what is required for the task.',
        ],
      },
      {
        heading: 'Sharing & Disclosure',
        paragraphs: [
          'We share information only as needed to operate our business and deliver services. We do not sell personal information.',
        ],
        items: [
          'Cloud hosting and infrastructure providers (including Vercel) that host this website.',
          'Analytics, communications, and support tools.',
          'AI model providers and integration partners required to deliver services.',
          'Professional advisors and legal compliance obligations.',
          'In connection with a merger, acquisition, or asset sale.',
        ],
      },
      {
        heading: 'Website Platform (Next.js & Vercel)',
        paragraphs: [
          'Our website is built on Next.js and hosted on Vercel. Vercel may process technical logs (such as IP address and request metadata) to deliver, secure, and improve the site.',
        ],
      },
      {
        heading: 'International Data Transfers',
        paragraphs: [
          'We operate in Israel and the United States, so information may be processed or stored in either country. We use contractual and technical safeguards for cross-border transfers.',
        ],
      },
      {
        heading: 'Cookies & Analytics',
        paragraphs: [
          'We use cookies and similar technologies for essential site functionality, performance analytics, and to improve our services. You can control cookies through your browser settings.',
        ],
      },
      {
        heading: 'Data Retention',
        paragraphs: [
          'We retain personal information only as long as needed for the purposes described in this policy or as required by law.',
        ],
      },
      {
        heading: 'Your Rights',
        paragraphs: [
          'Depending on where you live, you may have rights to access, correct, delete, or object to the use of your personal information.',
        ],
        items: [
          'Israel: you may review and request correction of information stored about you under the Privacy Protection Law.',
          'United States (including California): you may request access, deletion, correction, or opt out of the sale/sharing of personal information. We do not sell personal information.',
          'You can opt out of marketing emails at any time.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'We use reasonable administrative, technical, and physical safeguards to protect information. No system is 100% secure, so we cannot guarantee absolute security.',
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          'Our services are not intended for children under 16, and we do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Changes to This Policy',
        paragraphs: [
          'We may update this policy from time to time. Updates will be posted on this page with a revised "Last updated" date.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'For questions or requests related to privacy, contact us at romavolman@gmail.com.',
        ],
      },
    ],
  },
  he: {
    metaTitle: 'מדיניות פרטיות | AutoAiSynergy',
    metaDescription: 'כיצד AutoAiSynergy אוספת, משתמשת ומגינה על מידע אישי בישראל ובארה״ב.',
    title: 'מדיניות פרטיות',
    updated: 'עודכן לאחרונה: 8 במרץ 2025',
    intro:
      'מדיניות פרטיות זו מסבירה כיצד AutoAiSynergy ("AutoAiSynergy", "אנחנו") אוספת, משתמשת ומגינה על מידע אישי כאשר אתם מבקרים באתר, יוצרים קשר או משתמשים בשירותי האוטומציה ב-AI שלנו בישראל ובארצות הברית.',
    sections: [
      {
        heading: 'מי אנחנו',
        paragraphs: [
          'AutoAiSynergy היא סוכנות אוטומציה מבוססת AI הפועלת בישראל ובארצות הברית. אנו מתכננים ומספקים סוכני AI, אוטומציות תהליכים ואינטגרציות לעסקים.',
        ],
      },
      {
        heading: 'איזה מידע אנחנו אוספים',
        paragraphs: [
          'אנחנו אוספים מידע שאתם מספקים ומידע שנוצר במהלך שימוש באתר ובשירותים.',
        ],
        items: [
          'פרטי קשר כגון שם, אימייל, חברה ומספר טלפון.',
          'מידע עסקי ומידע פרויקטלי שנמסר בתהליך אפיון, הצעה וביצוע.',
          'תוכן, פרומפטים, קבצים ודאטה־סטים שאתם מספקים לצורך אוטומציות AI.',
          'פרטי חיוב והסכמים אם אתם הופכים ללקוחות.',
          'נתונים טכניים כגון כתובת IP, סוג דפדפן/מכשיר, עמודים שנצפו וכתובות מפנות.',
        ],
      },
      {
        heading: 'איך אנחנו משתמשים במידע',
        items: [
          'אספקת השירותים ושיפורם, כולל הגדרת מערכות AI ואוטומציות.',
          'מענה לפניות ותמיכה בלקוחות.',
          'שליחת הצעות, עדכוני שירות ומסרים אדמיניסטרטיביים.',
          'שמירה על אבטחה, מניעת הונאה ועמידה בדרישות חוק.',
          'שיווק השירותים שלנו (ניתן להסיר את עצמכם בכל עת).',
        ],
      },
      {
        heading: 'AI ועיבוד אוטומטי',
        paragraphs: [
          'אנחנו משתמשים בכלי AI כדי לנתח קלטים ולהפיק פלטים. בהתאם לפרויקט, הפלט עשוי לעבור בדיקה אנושית לפני מסירה.',
        ],
        items: [
          'אנחנו לא משתמשים בנתוני לקוחות לאימון מודלי AI ציבוריים ללא אישור מפורש.',
          'אנחנו מגבילים גישה לנתונים למה שנדרש למשימה.',
        ],
      },
      {
        heading: 'שיתוף וגילוי מידע',
        paragraphs: [
          'אנחנו משתפים מידע רק ככל שנדרש להפעלת העסק ולמסירת השירותים. איננו מוכרים מידע אישי.',
        ],
        items: [
          'ספקי תשתית ואחסון ענן (כולל Vercel) לצורך אירוח האתר.',
          'כלי אנליטיקה, תקשורת ותמיכה.',
          'ספקי מודלי AI ושותפי אינטגרציה הנדרשים למסירת השירות.',
          'יועצים מקצועיים ועמידה בדרישות חוק.',
          'במסגרת מיזוג, רכישה או מכירת נכסים.',
        ],
      },
      {
        heading: 'פלטפורמת האתר (Next.js & Vercel)',
        paragraphs: [
          'האתר נבנה ב-Next.js ומאוחסן ב-Vercel. Vercel עשויה לעבד לוגים טכניים (כגון כתובת IP ונתוני בקשה) כדי לספק, לאבטח ולשפר את האתר.',
        ],
      },
      {
        heading: 'העברת מידע בין מדינות',
        paragraphs: [
          'מאחר שאנו פועלים בישראל ובארצות הברית, מידע עשוי להיות מעובד או מאוחסן באחת מהמדינות. אנו משתמשים באמצעי הגנה חוזיים וטכניים להעברת מידע.',
        ],
      },
      {
        heading: 'עוגיות ואנליטיקה',
        paragraphs: [
          'אנחנו משתמשים בעוגיות וטכנולוגיות דומות לצורך תפקוד האתר, ניתוח ביצועים ושיפור השירותים. ניתן לשלוט בעוגיות דרך הגדרות הדפדפן.',
        ],
      },
      {
        heading: 'שמירת מידע',
        paragraphs: [
          'אנחנו שומרים מידע אישי רק כל עוד נדרש למטרות המתוארות במדיניות זו או לפי דרישות החוק.',
        ],
      },
      {
        heading: 'הזכויות שלכם',
        paragraphs: [
          'בהתאם למקום מגוריכם, ייתכן שיש לכם זכויות לעיין, לתקן, למחוק או להתנגד לשימוש במידע האישי שלכם.',
        ],
        items: [
          'ישראל: ניתן לעיין ולבקש תיקון מידע בהתאם לחוק הגנת הפרטיות.',
          'ארה"ב (כולל קליפורניה): ניתן לבקש גישה, מחיקה, תיקון או ביטול מכירה/שיתוף מידע אישי. איננו מוכרים מידע אישי.',
          'ניתן להסיר את עצמכם מרשימות דיוור בכל עת.',
        ],
      },
      {
        heading: 'אבטחה',
        paragraphs: [
          'אנחנו משתמשים באמצעי אבטחה מנהליים, טכניים ופיזיים סבירים להגנה על מידע. אין מערכת מאובטחת לחלוטין, ולכן איננו יכולים להבטיח אבטחה מוחלטת.',
        ],
      },
      {
        heading: 'פרטיות ילדים',
        paragraphs: [
          'השירותים אינם מיועדים לילדים מתחת לגיל 16 ואיננו אוספים ביודעין מידע אישי מילדים.',
        ],
      },
      {
        heading: 'שינויים במדיניות',
        paragraphs: [
          'אנו עשויים לעדכן מדיניות זו מעת לעת. עדכונים יפורסמו בעמוד זה עם תאריך "עודכן לאחרונה" מעודכן.',
        ],
      },
      {
        heading: 'יצירת קשר',
        paragraphs: [
          'לשאלות או בקשות הקשורות לפרטיות, ניתן לפנות אלינו בכתובת romavolman@gmail.com.',
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

export default async function PrivacyPage({ params }: PageProps) {
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
