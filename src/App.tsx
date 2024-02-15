import React from "react";
import { Navigate, Route, Routes } from "react-router";

import classes from "./App.module.scss";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
  // return (
  //   <div
  //     style={{
  //       width: 320,
  //       height: 560,
  //       position: "relative",
  //       background: "white",
  //       boxShadow: "-8px 8px 20px rgba(0, 0, 0, 0.25)",
  //     }}
  //   >
  //     <img
  //       style={{
  //         width: 320,
  //         height: 560,
  //         left: 0,
  //         top: 0,
  //         position: "absolute",
  //       }}
  //       src="https://via.placeholder.com/320x560"
  //     />
  //     <div
  //       style={{
  //         width: 320,
  //         height: 560,
  //         left: 0,
  //         top: 0,
  //         position: "absolute",
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: 320,
  //           height: 560,
  //           left: 0,
  //           top: 0,
  //           position: "absolute",
  //           background: "rgba(0, 0, 0, 0.30)",
  //         }}
  //       ></div>
  //       <div
  //         style={{
  //           width: 1,
  //           height: 1,
  //           left: 0,
  //           top: 559,
  //           position: "absolute",
  //           background: "#1883C2",
  //         }}
  //       ></div>
  //     </div>
  //     <div
  //       style={{
  //         width: 286,
  //         left: 17,
  //         top: 288,
  //         position: "absolute",
  //         color: "white",
  //         fontSize: 32,
  //         fontFamily: "Satoshi Variable",
  //         fontWeight: "700",
  //         wordWrap: "break-word",
  //       }}
  //     >
  //       Introduction to CipherNutz SaaS Web Applications
  //     </div>
  //   </div>
  // );
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/private/*" element={<PrivateLayout />} />
        <Route path="/*" element={<PublicLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
