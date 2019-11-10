import { ActionTypes } from "./action"
import { ReduxData, USER_LIST_ACTION_TYPES, ReduxStateType, UserActionTypes } from "./type"
import { User } from "../models/User"

const initState: ReduxData<User> = {
  data: {},
  status: ReduxStateType.INIT
}

const userReducer = (
  state: ReduxData<User> = initState,
  action: UserActionTypes
): ReduxData<User> => {
  switch (action.type) {
    case USER_LIST_ACTION_TYPES.ADD_USER:
      return {
        ...state,
        data: action.payload,
        status: ReduxStateType.SUCCESS
      }
    case USER_LIST_ACTION_TYPES.UPDATE_USER:
      return {
        ...state,
        data: action.payload,
        status: ReduxStateType.SUCCESS
      }
    default:
      return state
  }
}

export default userReducer
