import React from "react";
import { Routes } from "react-router";
import { privateRoutes } from "src/routes";
import { getRoutes } from "src/utils/getRoutes";
import classes from "./PrivateLayout.module.scss";

const PrivateLayout: React.FC = () => {
  return (
    <div className={classes.container}>
      <Routes>{getRoutes(privateRoutes)}</Routes>
    </div>
  );
};

export default PrivateLayout;
