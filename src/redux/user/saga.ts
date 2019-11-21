import { UserActions } from "./index"
import { call, put, takeLatest, all } from "redux-saga/effects"
import { User } from "/models/User"
import * as authApi from "/apis/users"
import { EffectResult } from "/redux/types"

export function* login(action: ReturnType<typeof UserActions.login>): Generator {
  try {
    const user: EffectResult<User> = yield call(authApi.login, action.payload)

    // TODO setToken

    yield put(UserActions.success(user as User))
  } catch (error) {
    yield put(UserActions.error(error))
  }
}

function* watchLogin() {
  yield takeLatest(UserActions.login.type, login)
}

export default function* userSaga() {
  yield all([watchLogin()])
}
