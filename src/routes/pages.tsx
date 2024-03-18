import { Navigate } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";

const { ArticlesRoutes } = lazyImport(
  () => import("../features/articles/routes"),
  "ArticlesRoutes"
);

export const Routes = [
  {
    path: "*",
    element: <ArticlesRoutes />,
    children: [{ path: "*", element: <Navigate to="." /> }],
  },
];
