import { createActionCreators, createReducerFunction } from "immer-reducer"
import { appLanguages } from "/languages"

import LanguageImmerReducers from "./reducers"

const INIT_STATE: { currentLanguage: keyof typeof appLanguages } = {
   currentLanguage: "en",
}

export const LanguageActions = createActionCreators(LanguageImmerReducers)
export const LanguageReducers = createReducerFunction(LanguageImmerReducers, INIT_STATE)
