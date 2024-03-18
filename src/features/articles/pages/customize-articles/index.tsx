import { useStoreArticles } from "../../../../providers/articles";
import { useArticles } from "../../api/getArticle";
import ArticlesList from "../../components/articles-list";
import ArticleSkeletons from "../../components/skeleton-loader";
import { useNavigate } from "react-router-dom";
import Customize from "./components/customize";

const CustomizeArticles = () => {
  const { feed } = useStoreArticles();
  const navigate = useNavigate();
  const { data: articles, isPending: loading } = useArticles({
    params: {
      keyword: feed.category,
      source: feed.source,
    },
    config: {
      enabled: !!feed.category.length,
    },
  });
  return (
    <>
      <div className="w-full  p-4">
        {articles && !loading && (
          <>
            <Customize />
            <ArticlesList showBtnLove={false} data={articles} />
          </>
        )}
        {loading && !!feed.category.length && <ArticleSkeletons />}
        <div className="w-full flex justify-center items-baseline">
          <div className="mt-24">
            <span className="text-5xl text-gray-400">
              No Select Customize Articles yet!
            </span>
            <div
              onClick={() => navigate("/")}
              className="text-center mt-4 underline text-3xl text-blue-500 cursor-pointer"
            >
              Home
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomizeArticles;
