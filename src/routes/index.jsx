/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Navigate } from "react-router-dom";
import Constants from "./constants";

const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
const Setpoint = React.lazy(() => import("@/pages/Setpoint"));

const routes = [
  {
    path: Constants.INDEX,
    element: <Navigate to={Constants.DASHBOARD} replace={true} />,
  },
  { path: Constants.DASHBOARD, element: <Dashboard /> },
  { path: Constants.SETPOINT, element: <Setpoint /> },
];

export default routes;
