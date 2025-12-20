import { Locale } from '@/lib/i18n/settings'
import { Hero } from '@/components/Hero'
import { Problems } from '@/components/Problems'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'

interface PageProps {
  params: {
    locale: Locale
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  return (
    <>
      <Hero locale={locale} />
      <Problems locale={locale} />
      <Services locale={locale} />
      <Process locale={locale} />
      <Testimonials locale={locale} />
      <CTA locale={locale} />
      <Contact locale={locale} />
    </>
  )
}
