import { Actions } from "contexts/actions";
import { Dispatch } from "react";

export interface IState {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
  password: string;
  dispatch: Dispatch<IActions>;
}

export type IActions =
  | ILength
  | ILowerCase
  | IUpperCase
  | INumbers
  | ISymbols
  | IPassword;
interface ILength {
  type: Actions.setLength;
  payload: number;
}
interface ILowerCase {
  type: Actions.setLowerCase;
  payload: boolean;
}
interface IUpperCase {
  type: Actions.setUpperCase;
  payload: boolean;
}
interface INumbers {
  type: Actions.setNumbers;
  payload: boolean;
}
interface ISymbols {
  type: Actions.setSymbols;
  payload: boolean;
}
interface IPassword {
  type: Actions.setPassword;
  payload: string;
}
