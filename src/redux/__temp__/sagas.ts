import { all, put, takeEvery } from "redux-saga/effects"

import { TemplateActions } from "./index"

export function* getField(action: ReturnType<typeof TemplateActions.getFields>): Generator {
   try {
      // Do some task here
      // Call API.....
      const data = "some data"

      yield put(TemplateActions.setFields(data))
   } catch (error) {
      yield put(TemplateActions.setFields("error"))
   }
}

function* watchGetUser() {
   yield takeEvery(TemplateActions.getFields.type, getField)
}

export default function* userSaga() {
   yield all([watchGetUser()])
}
