import InputSearch from "../../../../components/input-search";
import ArticlesList from "../../components/articles-list";
import ArticleSkeleton from "../../components/skeleton-loader";
import Filter from "../../components/filter";
import { useStoreArticles } from "../../../../providers/articles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Articles = () => {
  const { articles, setSearch, loading, setArticles } = useStoreArticles();
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      setArticles([]); // destroy state
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex flex-col  w-full h-full">
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <div className="w-full flex items-center justify-center max-w-3xl">
            <InputSearch onSearch={setSearch} />
            <div
              onClick={() => navigate("customize-articles")}
              className="text-2xl text-blue-500 whitespace-nowrap underline cursor-pointer"
            >
              Customize Articles
            </div>
          </div>
          {!!articles.length && (
            <div className="w-full mt-2">
              <Filter />
            </div>
          )}
          <div className="w-full p-4">
            {articles && !loading && (
              <ArticlesList showBtnLove data={articles} />
            )}
            {loading && <ArticleSkeleton />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
