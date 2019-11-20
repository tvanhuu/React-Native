import { combineReducers } from "redux"
import { AppReducerType } from "./types"
import { LanguageReducers } from "/redux/language"

const reducers = combineReducers({
  [AppReducerType.LANGUAGE]: LanguageReducers,
})

export default reducers

export type AppState = ReturnType<typeof reducers>
