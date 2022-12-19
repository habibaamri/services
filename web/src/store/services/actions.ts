import { SET_SERVICES,GET_SERVICES } from './constants'
import Store from '../store'
// import logger from 'lib/core/logger'
// const debug = logger('store:orion:actions')


export const setDataServices = (data: any): void => {
  Store.dispatch({
    type: SET_SERVICES,
    payload: data,
  })
}
export const getServices = (data: any): void => {
  Store.dispatch({
    type: GET_SERVICES,
    payload: data,
  })
}