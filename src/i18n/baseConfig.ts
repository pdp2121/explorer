import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n, { InitOptions } from 'i18next'
import { configureFormatters } from './formatters'

const options: InitOptions = {
  returnNull: false,
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'en-US',
  ns: ['translations'], // have a common namespace used around the full app
  defaultNS: 'translations',
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  load: 'currentOnly',
}

i18n.use(Backend).use(LanguageDetector).init(options)
configureFormatters(i18n)

export default i18n
