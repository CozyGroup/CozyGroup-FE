// routes/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}
export default AppRouter;
