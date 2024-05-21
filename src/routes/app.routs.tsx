import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import RoutesPath from "../config/routes";

const AppRoute = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={`${RoutesPath.landing}`} element={<Home />} />
        <Route path={`${RoutesPath.top}`} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
