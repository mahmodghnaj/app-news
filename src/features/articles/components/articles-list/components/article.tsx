import { FC, useState } from "react";
import { PropsComponentArticle } from "../types";
import { formatDate } from "../../../../../utils/date";
import Dialog from "../../../../../components/dialog";
import { Article as ArticleType } from "../../../types";
import ArticleContent from "./article-content";
import { useStoreArticles } from "../../../../../providers/articles";
import Love from "../../../../../components/icons/Love";
import UnLove from "../../../../../components/icons/UnLove";

const Article: FC<PropsComponentArticle> = ({ article, showBtnLove }) => {
  const [selectArticle, setSelectArticle] = useState<ArticleType | null>();
  const { sourceInFeed, handleSourceToFeed } = useStoreArticles();
  const handelClick = (event: any) => {
    event.stopPropagation();
    handleSourceToFeed(article.sourceId, article.numberSource);
  };
  return (
    <>
      <div
        onClick={() => setSelectArticle(article)}
        className="bg-white border-b-4 cursor-pointer border-blue-500 rounded-xl"
      >
        <img
          src={article.imageArticle}
          alt="Loading...."
          className="w-full object-cover h-60  md:h-64 rounded-t-xl"
        />
        <div className="p-4 md:p-6">
          <div className="text-blue-500 flex space-x-1 items-center font-semibold text-xs mb-1 leading-none">
            <div> {article.source}</div>
            {showBtnLove && article.sourceId && (
              <>
                {sourceInFeed(article.sourceId) ? (
                  <div onClick={handelClick}>
                    <Love />
                  </div>
                ) : (
                  <div onClick={handelClick}>
                    <UnLove />
                  </div>
                )}
              </>
            )}
          </div>
          <div className="font-semibold mb-1 text-xl leading-tight sm:leading-normal line-clamp-2 min-h-[54px] md:min-h-[60px]">
            {article.title}
          </div>
          <div className="text-gray-500/90 line-clamp-3 min-h-[76px]">
            {article.description}
          </div>
          <div className="text-sm flex mt-2 items-center">
            <svg
              className="opacity-75 mr-2"
              x="0px"
              y="0px"
              width="12"
              height="12"
              viewBox="0 0 97.16 97.16"
            >
              <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
              <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
            </svg>
            <div className="flex w-full items-center justify-between">
              <p className="leading-none text-gray-500">
                {formatDate(article.date)}
              </p>
              {article.author && (
                <p className="text-xs text-blue-500">by: {article.author}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Dialog handler={() => setSelectArticle(null)} open={!!selectArticle}>
        <ArticleContent showBtnLove={showBtnLove} article={article} />
      </Dialog>
    </>
  );
};

export default Article;
