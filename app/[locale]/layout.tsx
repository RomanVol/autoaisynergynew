import type { Metadata } from 'next'
import Script from 'next/script'
import { languages, Locale, localeDirections } from '@/lib/i18n/settings'
import { getTranslation } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CallButton } from '@/components/CallButton'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/components/ThemeProvider'
import { MotionProvider } from '@/components/MotionProvider'
import { N8nTrigger } from '@/components/N8nTrigger'

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = await getTranslation(locale)

  const baseUrl = 'https://www.autoaisynergy.com'

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'he': `${baseUrl}/he`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'AutoAI Synergy',
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AutoAI Synergy - AI Automation Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = await params
  const dir = localeDirections[locale]

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AutoAI Synergy',
    url: 'https://www.autoaisynergy.com',
    logo: 'https://www.autoaisynergy.com/logo.png',
    description: 'AI Automation Agency - Custom AI solutions, chatbots, and workflow automation for businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Harish',
      addressCountry: 'IL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Hebrew'],
    },
    offers: {
      '@type': 'AggregateOffer',
      offers: [
        { '@type': 'Offer', name: 'AI Agents', description: 'Custom AI agents for customer service, sales, and automation' },
        { '@type': 'Offer', name: 'Workflow Automation', description: 'Automated business processes and integrations' },
        { '@type': 'Offer', name: 'AI-Powered Websites', description: 'Modern websites with intelligent chatbots' },
        { '@type': 'Offer', name: 'Custom Applications', description: 'Bespoke AI-powered applications' },
      ],
    },
  }

  return (
    <html lang={locale} dir={dir} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_full.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M38DBSJP');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dir === 'rtl' ? 'font-hebrew' : 'font-body'}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M38DBSJP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <N8nTrigger />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4L6HW8C8X5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4L6HW8C8X5');
          `}
        </Script>
        <ThemeProvider>
          <MotionProvider>
            <a href="#main-content" className="skip-link">
              Skip to content
            </a>

            {/* Noise texture overlay */}
            <div className="noise-overlay hidden md:block" aria-hidden="true" />

            {/* Grid pattern background */}
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 hidden md:block" aria-hidden="true" />

            <Header locale={locale} />
            <main id="main-content" className="relative z-10">
              {children}
            </main>
            <Footer locale={locale} />
            <CallButton locale={locale} />
            <WhatsAppButton locale={locale} />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
