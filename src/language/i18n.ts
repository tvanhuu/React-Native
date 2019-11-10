import I18n from "i18n-js"
import * as languages from "./translations"
import AppLanguage from "./types"

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true
I18n.translations = languages

const fallback = { languageTag: "en", isRTL: false }

const { languageTag } = fallback

I18n.locale = languageTag

export const setLang = (lang: keyof typeof languages) => {
  I18n.locale = lang
}

export const getLanguage = (languageKey: keyof typeof languages) => {
  I18n.locale = languageKey

  return I18n.translations[languageKey] as AppLanguage
}
