import { ERROR } from "./errors"
import { API_LOGIN } from "./urls"
import Request from "../request"
import { ParamsLogin } from "./type"
import { User } from "/models/User"

export const login = async (params: ParamsLogin): Promise<User> => {
  const user = await Request.post<User>(API_LOGIN, params)
  if (!user) {
    throw ERROR
  }
  return user.data
}
