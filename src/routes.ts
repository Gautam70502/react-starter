import Home from "src/pages/Home";

export const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

export const privateRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home, //we can add permission for different roles
  },
];
