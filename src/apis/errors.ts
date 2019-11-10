// import { lang } from "/languages"

export const UNAUTHORIZED = new Error("UNAUTHORIZED")
export const SYSTEM_ERROR = new Error("SYSTEM_ERROR")
export const NETWORK_ERROR = new Error("NETWORK_ERROR")
export const TIMEOUT_ERROR = new Error("TIMEOUT_ERROR")
export const NOT_FOUND = new Error("NOT_FOUND")

export const commonErrors: { [key: number]: Error } = {
  401: UNAUTHORIZED,
  404: NOT_FOUND,
  500: SYSTEM_ERROR
}

export const commonErrorMessage: { [key: string]: Error } = {
  GENERAL: SYSTEM_ERROR,
  "Network Error": NETWORK_ERROR,
  "timeout of 10000ms exceeded": TIMEOUT_ERROR
}
