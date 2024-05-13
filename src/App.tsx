import React from "react";
import { Navigate, Route, Routes,BrowserRouter } from "react-router";

import classes from "./App.module.scss";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
  return (
    <div className={classes.app}>
      <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/private/*" element={<PrivateLayout />} />
        <Route path="/*" element={<PublicLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
