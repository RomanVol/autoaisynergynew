import { MetadataRoute } from 'next'
import { languages } from '@/lib/i18n/settings'

const baseUrl = 'https://www.autoaisynergy.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate sitemap entries for each locale
  const localePages = languages.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...localePages,
  ]
}
