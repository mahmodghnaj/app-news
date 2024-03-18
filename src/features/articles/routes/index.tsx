import { Navigate, Route, Routes } from "react-router-dom";
import Articles from "../pages/articles";
import { ArticlesProvider } from "../../../providers/articles";
import CustomizeArticles from "../pages/customize-articles";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ArticlesProvider>
            <Articles />
          </ArticlesProvider>
        }
      />
      <Route
        path="/customize-articles"
        element={
          <ArticlesProvider>
            <CustomizeArticles />
          </ArticlesProvider>
        }
      />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
