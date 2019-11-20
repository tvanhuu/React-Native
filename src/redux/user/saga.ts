import { UserActions } from "./index"
import { call, put, SagaReturnType, takeLatest, all, Effect, CallEffect, ForkEffect } from "redux-saga/effects"
import { User } from "/models/User"
import * as authApi from "/apis/users"
import { Task } from "react-native"
import { EffectResult } from "../types"
import { type } from "os"

export function* login(action: ReturnType<typeof UserActions.login>): Generator {
   try {
      const user: EffectResult<User> = yield call(authApi.login, action.payload)

      // TODO setToken

      yield put(UserActions.success(user))
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

type Check<T> = T extends unknown ? {} : T
