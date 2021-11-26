import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import { characterReducer, initialState } from "./characterReducer"

const middleware = [thunk]

// type reducersType = typeof mainReducer
// export type stateType = ReturnType<reducersType>

const store = createStore(
  characterReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// export type ActionTypeApp<T> =
//   T extends { [key: string]: (...args: any[]) => infer U } ? U : never

// export type ThunkType<A extends Action, P = void> =
//   ThunkAction<P, stateType, unknown, A>

export default store