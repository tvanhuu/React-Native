import I18n from "i18n-js"
import * as languages from "./translations"
import AppLanguage from "./types"

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true
I18n.translations = languages

const fallback = { languageTag: "en", isRTL: false }

const { languageTag } = fallback

I18n.locale = languageTag

// export const lang = I18n.translations[languageTag] as AppLanguage
export const appLanguages = I18n.translations as { [key in keyof typeof languages]: AppLanguage }

export const getLanguage = (languageKey: keyof typeof languages) => {
  I18n.locale = languageKey

  return I18n.translations[languageKey] as AppLanguage
}
