import { createActionCreators, createReducerFunction } from "immer-reducer"
import { ReduxData, ReduxStateType } from "../types"
import { User } from "/models/User"
import UserImmerReducer from "./reducers"

const INIT_STATE: ReduxData<User> = {
   data: {},
   status: ReduxStateType.INIT,
}

export const UserActions = createActionCreators(UserImmerReducer)
export const UserReducer = createReducerFunction(UserImmerReducer, INIT_STATE)
