import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import servicesReducer from './services/reducer'

const middlewares = [thunk]

let composeEnhancers = compose


const rawReducers = {
  servicesReducer: servicesReducer,

}
const reducers = combineReducers(rawReducers)

export type RootState = ReturnType<typeof reducers>

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)
export type IStore = {
  [K in keyof typeof rawReducers]: ReturnType<typeof rawReducers[K]>
}

export type DLPThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
