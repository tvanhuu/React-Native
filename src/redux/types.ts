import { CallEffect } from "redux-saga/effects"

export enum AppReducerType {
   LANGUAGE = "languages",
   USER = "users"
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
   error?: Error
}

export const isReduxData = <T>(data: unknown): data is ReduxData<T> => true

export type EffectResult<T> = T extends CallEffect<infer R> ? R : unknown
