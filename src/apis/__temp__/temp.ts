import { DATA_NOT_FOUND } from "./errors"
import { GetDataInfoParams } from "./type"
import { API_GET_USER } from "./urls"
import Request from "../request"

export const getData = async (params: GetDataInfoParams): Promise<string> => {
  const schedule = await Request.get<string>(API_GET_USER)

  if (!schedule) {
    throw DATA_NOT_FOUND
  }

  return schedule.data
}
