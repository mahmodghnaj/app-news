import { useRoutes } from "react-router-dom";
import { Routes } from "./pages";
export const AppRoutes = () => {
  const element = useRoutes([...Routes]);
  return <>{element}</>;
};
