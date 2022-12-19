import { IStore } from '../store'


export const getServicesSelector = (state: IStore) =>
  state.servicesReducer.services
