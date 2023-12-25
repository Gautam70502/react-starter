import { Route } from "react-router";
export const getRoutes = (
  routes: {
    path: string;
    name: string;
    component: () => JSX.Element;
  }[],
) => {
  return routes.map(({ path, component: Component }, key) => {
    return <Route path={path} element={<Component />} key={key} />;
  });
};
