import React from "react";
import { Routes } from "react-router";
import { publicRoutes } from "src/routes";
import { getRoutes } from "src/utils/getRoutes";
import classes from "./PublicLayout.module.scss";

const PublicLayout: React.FC = () => {
  return (
    <div className={classes.container}>
      <Routes>{getRoutes(publicRoutes)}</Routes>
    </div>
  );
};

export default PublicLayout;
