import { createInstance, i18n } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, Locale } from './settings'

// Import translation files directly for server-side rendering
import enCommon from '@/locales/en/common.json'
import heCommon from '@/locales/he/common.json'

const resources = {
  en: { common: enCommon },
  he: { common: heCommon },
}

const initI18next = async (lng: Locale, ns: string): Promise<i18n> => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      ...getOptions(lng, ns),
      resources,
    })
  return i18nInstance
}

export async function getTranslation(lng: Locale, ns: string = 'common') {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, ns),
    i18n: i18nextInstance,
  }
}
