import { createContext, useReducer } from "react";
import { reducer } from "contexts/reducer";
import { IState } from "./interfaces";
import React from "react";

const INITIAL_STATE: IState = {
  length: 8,
  lowerCase: false,
  upperCase: false,
  numbers: false,
  symbols: false,
  password: "",
  dispatch: () => {},
};

export const PasswordContext = createContext(INITIAL_STATE);

export const PasswordProvider = ({
  children,
}: {
  children: React.ReactNode[];
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <PasswordContext.Provider
      value={{
        length: state.length,
        lowerCase: state.lowerCase,
        upperCase: state.upperCase,
        numbers: state.numbers,
        symbols: state.symbols,
        password: state.password,
        dispatch,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
