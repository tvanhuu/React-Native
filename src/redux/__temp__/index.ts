import { createActionCreators, createReducerFunction } from "immer-reducer"

import DataImmerReducer, { TemplateDataType } from "./reducers"

const INITIAL_STATE: TemplateDataType = {
   field: "",
}

export const TemplateActions = createActionCreators(DataImmerReducer)
export const TemplateReducer = createReducerFunction(DataImmerReducer, INITIAL_STATE)
