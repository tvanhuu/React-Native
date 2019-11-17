import { getLanguage } from "/languages"
import { AppState } from "/redux/reducers"
import { AppReducerType } from "/redux/types"

export const languageSelector = (state: AppState) => getLanguage(state[AppReducerType.LANGUAGE].currentLanguage)
export const currentLanguageSelector = (state: AppState) => state[AppReducerType.LANGUAGE].currentLanguage
