import React from "react";
import { BrowserRouter, Route, Routes, useParams, useMatch } from "react-router-dom";
import Login from "./Login";
import NotFound from "./NotFound";
import Profile from "./Profile";

function Routes_test() {
  const params = useParams();
  const match = useMatch('/accounts')
  return (
    <Routes>
      <Route path={ {match} + "/profile"} element={<Profile />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={ params.url + "/login"} element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path={ match + "/profile"} element={Profile} />
      <Route path={ "/accounts/profile"} element={Profile} />
      <Route path={match.url + "/login"} component={Login} />
    </Routes>
  );
}

export default Routes_test;