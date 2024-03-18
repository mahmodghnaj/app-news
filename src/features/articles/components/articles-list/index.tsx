import { FC } from "react";
import { PropsComponent } from "./types";
import Article from "./components/article";

const ArticlesList: FC<PropsComponent> = ({ data, showBtnLove }) => {
  return (
    <>
      <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-6 sm:gap-4 gap-2">
        {data.map((item) => (
          <div key={item.urlArticle}>
            <Article showBtnLove={showBtnLove} article={item} />
          </div>
        ))}
      </div>
    </>
  );
};
export default ArticlesList;
