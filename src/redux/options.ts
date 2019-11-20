import AsyncStorage from "@react-native-community/async-storage"
import { ReduxLoggerOptions } from "redux-logger"
import { SagaMiddlewareOptions } from "redux-saga"
import { PersistConfig, createTransform } from "redux-persist"
import { AppReducerType, ReduxStateType, isReduxData } from "./types"
import { setAccessToken } from "/apis/request"

export const loggerOptions: ReduxLoggerOptions = {
   collapsed: true,
   duration: true,
   timestamp: true,
}

export const sagaOptions: SagaMiddlewareOptions = {}

export const persistOptions: PersistConfig = {
   timeout: process.env.NODE_ENV === "development" ? 0 : 30000,
   key: "root",
   storage: AsyncStorage,
   whitelist: [AppReducerType.LANGUAGE],
   transforms: [
      createTransform((state) => {
         if (isReduxData(state)) {
            return { ...state, status: ReduxStateType.INIT, error: undefined }
         }

         return state
      }),

      // transform state being rehydrated
      // (state) => {
      //   if (state && isReduxData<User>(state) && state.data) {
      //     setAccessToken(state.data.accessToken)
      //   }

      //   return state
      // }
   ],
}
