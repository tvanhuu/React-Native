import { combineReducers } from "redux"
import { AppReducerType } from "./types"
import { LanguageReducers } from "/redux/language"
import { UserReducer } from "/redux/user"

const reducers = combineReducers({
  [AppReducerType.LANGUAGE]: LanguageReducers,
  [AppReducerType.USER]: UserReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
