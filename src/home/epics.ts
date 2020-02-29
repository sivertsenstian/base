import { Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, withLatestFrom, mergeMap, map } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import {
  mappers,
  HomeActionType,
  HomeRequestEchoSuccess,
  HomeRequestEchoFailure,
  HomeRequestEcho
} from "./";
import { AppState } from "../core";

const homeEchoEpic$ = (action$: Observable<any>, store$: Observable<any>) => {
  return action$.pipe(
    ofType(HomeActionType.REQUEST_ECHO),
    withLatestFrom(store$),
    mergeMap(([action, store]: [HomeRequestEcho, AppState]) =>
      ajax
        .getJSON(`${store.home.server}/echo`)
        .pipe(
          map(
            response => new HomeRequestEchoSuccess(mappers.echo.from(response))
          )
        )
        .pipe(catchError(err => of(new HomeRequestEchoFailure(err))))
    )
  );
};

export const homeEpics = combineEpics(homeEchoEpic$);
