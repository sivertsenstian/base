import { Action } from "redux";
import { ISuccessAction, IFailureAction } from "../core";

export enum HomeActionType {
  SET_NAME = "[Home] Set name",
  REQUEST_ECHO = "[Home] Request Echo",
  REQUEST_ECHO_SUCCESS = "[Home][Success] Request Echo",
  REQUEST_ECHO_FAILURE = "[Home][Failure] Request Echo"
}

export class HomeSetName implements Action {
  readonly type = HomeActionType.SET_NAME;
  constructor(public payload: string) {}
}

export class HomeRequestEcho implements Action {
  readonly type = HomeActionType.REQUEST_ECHO;
  constructor(public payload: string) {}
}

export class HomeRequestEchoSuccess implements Action, ISuccessAction {
  readonly type = HomeActionType.REQUEST_ECHO_SUCCESS;
  readonly success = true;
  constructor(public payload: any) {}
}

export class HomeRequestEchoFailure implements Action, IFailureAction {
  readonly type = HomeActionType.REQUEST_ECHO_FAILURE;
  readonly failure = true;
  constructor(public payload: any) {}
}

export type HomeActions =
  | HomeSetName
  | HomeRequestEcho
  | HomeRequestEchoSuccess
  | HomeRequestEchoFailure;
