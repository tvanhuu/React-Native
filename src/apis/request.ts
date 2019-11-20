import axios, { AxiosRequestConfig } from "axios"
import _ from "lodash"
import Config from "react-native-config"
import get from "ts-get"

import { checkLocale } from "/helpers/Common"
import { log } from "/utils/log"

import { commonErrorMessage, commonErrors } from "./errors"

const requestLog = (method: string = "", url: string = "", data: unknown, type: "req" | "res" | "err") => {
   const tag = type === "req" || type === "res" ? method : "error"
   const colors = {
      req: "blue",
      res: "green",
      err: "red",
   }
   const icons = {
      req: ">>>",
      res: "<<<",
      err: "xxx",
   }

   log(
      `%c${icons[type]} [${tag.toUpperCase()}] | %c${url.replace(Config.BASE_URL, "")} \n`,
      `color: ${colors[type]}; font-weight: bold`,
      "color: violet; font-weight: bold",
      data,
   )
}

const headers = {
   "Content-Type": "application/json",
   "Accept-Language": checkLocale("en"), // default English
}

const Request = axios.create({
   baseURL: Config.BASE_URL,
   timeout: 10000,
   headers,
   // ... other configs
})

Request.interceptors.request.use(
   (req) => {
      requestLog(req.method, req.url, req, "req")

      return req
   },
   (error) => {
      const errorData = get(error, (error) => error.response.data, error)
      log("request.error", { errorData })

      return errorData
   },
)

Request.interceptors.response.use(
   (res) => {
      requestLog(res.config.method, res.config.url, res, "res")

      // Do something with response data
      return res
   },
   (error) => {
      const errorData = get(error, (error) => error.response.data, error)
      log("response.error", { error })

      // Do something with response error
      const errorCode: number = get(error, (error) => error.response.status, 0)

      if (errorCode && commonErrors.hasOwnProperty(errorCode)) {
         return Promise.reject(commonErrors[errorCode])
      }

      if (errorData && errorData.message && commonErrorMessage.hasOwnProperty(errorData.message)) {
         return Promise.reject(commonErrorMessage[errorData.message])
      }

      return Promise.reject(errorData)
   },
)

export const setAccessToken = (token?: string) => {
   log("token", token)

   if (!_.isEmpty(token)) {
      return (Request.defaults.headers.Authentication = `Bearer ${token}`)
   }
}

export const clearAccessToken = () => {
   Request.defaults.headers.Authentication = undefined
}

export default Request
