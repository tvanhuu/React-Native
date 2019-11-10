import { User } from "../models/User"

export enum USER_LIST_ACTION_TYPES {
  ADD_USER = "USER_LIST/ADD_USER",
  REMOVE_USER = "USER_LIST/REMOVE_USER",
  UPDATE_USER = "USER_LIST/UPDATE_USER"
}

export enum ReduxStateType {
  INIT = "init",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
  CANCELLED = "cancelled"
}

export interface ReduxData<T> {
  data: T
  status: ReduxStateType
}

interface AddUserAction {
  type: typeof USER_LIST_ACTION_TYPES.ADD_USER
  payload: User
}

interface UpdateUserAction {
  type: typeof USER_LIST_ACTION_TYPES.UPDATE_USER
  payload: User
}

export type UserActionTypes = AddUserAction | UpdateUserAction
