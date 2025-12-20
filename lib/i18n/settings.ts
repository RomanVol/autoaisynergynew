export const fallbackLng = 'en'
export const languages = ['en', 'he'] as const
export type Locale = (typeof languages)[number]

export const defaultNS = 'common'

export function getOptions(lng: Locale = fallbackLng, ns: string = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
}

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  he: 'rtl',
}
