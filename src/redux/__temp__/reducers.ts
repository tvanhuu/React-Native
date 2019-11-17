import { ImmerReducer } from "immer-reducer"

export interface TemplateDataType {
  field: string
}

export default class TempReducer extends ImmerReducer<TemplateDataType> {
  setFields(value: string) {
    this.draftState.field = value
  }

  getFields() {}
}
