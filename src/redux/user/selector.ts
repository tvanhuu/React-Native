import { AppState } from "/redux/reducers"
import { AppReducerType } from "/redux/types"

export const UserSelector = (state: AppState) => state[AppReducerType.USER].data

export const UserStateSelector = (state: AppState) => state[AppReducerType.USER]
