import { IState } from './types'
import { TActions } from './types'
import { SET_SERVICES,GET_SERVICES } from './constants'

const initialState = {
  services: undefined,
} as IState

const annualPassesReducer = (
  state = initialState,
  action: { type: TActions; payload?: any },
): IState => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        services: action.payload,
      }
    case GET_SERVICES:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default annualPassesReducer
