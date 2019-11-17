import { ImmerReducer } from "immer-reducer"
import { appLanguages } from "/languages"

export default class LanguageImmerReducers extends ImmerReducer<{ currentLanguage: keyof typeof appLanguages }> {
  setLanguage(languageKey: keyof typeof appLanguages) {
    this.draftState.currentLanguage = languageKey
  }
}
