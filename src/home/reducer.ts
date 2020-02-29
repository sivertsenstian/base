import dotp from "dot-prop-immutable-chain";
import { HomeActions, HomeActionType } from "./";

export interface HomeState {
  server: string;
  name: string;
  echo: any;
}

export const initialState: HomeState = {
  server: "http://demo2933400.mockable.io",
  name: "INITIAL_NAME",
  echo: { message: "no message.." }
};

export const homeReducer = (state = initialState, action: HomeActions) => {
  switch (action.type) {
    case HomeActionType.SET_NAME: {
      return { ...state, name: action.payload };
    }
    case HomeActionType.REQUEST_ECHO_SUCCESS: {
      return { ...state, echo: action.payload };
    }
    default:
      return state;
  }
};
