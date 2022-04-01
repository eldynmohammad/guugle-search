import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Results } from "./Results";

const renderMultiRoutes = ({ element: Element, paths, ...rest }: MultiRoutes) =>
  paths.map((path) => (
    <Route key={path} path={path} {...rest} element={Element} />
  ));

export const RouteList = () => {
  return (
    <div className="relative h-full p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        {renderMultiRoutes({
          paths: ["/search", "/image", "/news", "/videos"],
          element: <Results />,
        })}
      </Routes>
    </div>
  );
};
