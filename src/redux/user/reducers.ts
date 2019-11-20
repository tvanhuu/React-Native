import { ImmerReducer } from "immer-reducer"
import { ReduxData, ReduxStateType } from "../types"
import { User } from "/models/User"
import { ParamsLogin } from "/apis/users/type"

export default class UserImmerReducer extends ImmerReducer<ReduxData<User>> {
   login(params: ParamsLogin) {
      this.draftState.status = ReduxStateType.LOADING
   }

   success(user: User) {
      this.draftState.status = ReduxStateType.SUCCESS
      if (user) this.draftState.data = { ...this.state.data, ...user }
   }

   error(error: Error) {
      this.draftState.status = ReduxStateType.ERROR
      this.draftState.error = error
   }
}
