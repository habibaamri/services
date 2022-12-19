import { IServices } from "../../types";
import { SET_SERVICES, GET_SERVICES } from "./constants";

export interface IState {
  services?: Array<IServices>;
}

export type TActions = typeof SET_SERVICES | typeof GET_SERVICES;
