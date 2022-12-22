import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/profile"} element={<Profile />} />
      <Route exact path={match.url + "/login"} element={<Login />} />
    </>
  );
}

export default Routes;