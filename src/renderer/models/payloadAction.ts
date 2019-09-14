import { AnyAction } from "redux";

export interface PayloadAction<T> extends AnyAction {
  payload: { [key: string]: T };
}
