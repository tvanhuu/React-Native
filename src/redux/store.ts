import { combineReducers, compose } from "redux"
import userReducer from "./reduces"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
  key: "root",
  storage
}

const middlewares = [thunk]

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger")

  middlewares.push(logger)
}

const rootReducer = combineReducers({
  user: userReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares))
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}
