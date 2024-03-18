import { FC } from "react";
import { PropsComponentArticleContent } from "../types";
import { formatDate } from "../../../../../utils/date";
import Love from "../../../../../components/icons/Love";
import UnLove from "../../../../../components/icons/UnLove";
import { useStoreArticles } from "../../../../../providers/articles";

const ArticleContent: FC<PropsComponentArticleContent> = ({
  article,
  showBtnLove,
}) => {
  const goToLink = () => {
    window.open(article.urlArticle, "_blank");
  };
  const { sourceInFeed, handleSourceToFeed } = useStoreArticles();
  const handelClick = () => {
    handleSourceToFeed(article.sourceId, article.numberSource);
  };
  return (
    <div className="flex justify-center md:w-[600px] w-[100px] ">
      <div className="w-[600px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[600px]">
          <img
            className="w-full h-48 object-cover object-center"
            src={article.imageArticle}
            alt="Loading...."
          />
          <div className="flex justify-between p-2 text-xs text-gray-600 px-5">
            <p> {formatDate(article.date)}</p>
            {article.author && (
              <p className="text-black font-bold"> By: {article.author}</p>
            )}
          </div>
          <div className="p-6 pt-1">
            <div className="text-blue-500 flex space-x-1 items-center font-semibold text-xs mb-1 leading-none">
              <div> {article.source}</div>
              {showBtnLove && article.sourceId && (
                <>
                  {sourceInFeed(article.sourceId) ? (
                    <div onClick={handelClick} className="cursor-pointer">
                      <Love />
                    </div>
                  ) : (
                    <div onClick={handelClick} className="cursor-pointer">
                      <UnLove />
                    </div>
                  )}
                </>
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600/50 mb-4">{article.description}</p>
            <p className="text-gray-700">{article.content}</p>
            <div className="mt-4">
              <div
                onClick={goToLink}
                className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                Link Article
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
