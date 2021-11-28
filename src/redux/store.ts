import { createStore, applyMiddleware, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { characterReducer, initialState } from './charactersReducer'

const middleware = [thunk]

const store = createStore(
  characterReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

type reducerType = typeof characterReducer
export type stateType = ReturnType<reducerType>

export type ThunkType<A extends Action, P = void> =
  ThunkAction<P, stateType, unknown, A>

export default store