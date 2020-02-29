import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../core";
import { HomeSetName } from "./";

export const HomePage = () => {
  return (
    <>
      <h2> HOME PAGE </h2>;
      <Name />
    </>
  );
};

export const Name = () => {
  const dispatch = useDispatch(),
    name = useSelector((state: AppState) => state.home.name),
    echo = useSelector((state: AppState) => state.home.echo);

  return (
    <>
      <h4>{name}</h4>
      <h2>{`From server: ${echo.message}`}</h2>
      <div
        className="p-button--brand"
        onClick={() => dispatch(new HomeSetName("NAME_FROM_BUTTON"))}
      >
        Change Name
      </div>
    </>
  );
};
