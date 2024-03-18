const ArticleSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md  animate-pulse">
      <div className="w-full  h-60  md:h-64 rounded-t-xl bg-gray-300 rounded mb-2"></div>
      <div className="p-4">
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

const ArticleSkeletons = () => {
  const articles = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-4 sm:gap-2 gap-1">
      {articles.map((articleNumber) => (
        <ArticleSkeleton key={articleNumber} />
      ))}
    </div>
  );
};

export default ArticleSkeletons;
