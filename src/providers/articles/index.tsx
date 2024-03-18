import { createContext, useContext, useEffect, useState } from "react";
import { ArticlesContextType, ArticlesProps } from "./types";
import { Article } from "../../features/articles/types";
import { useSearchArticles } from "../../features/articles/api/getArticle";
import useStorage from "../../hooks/useStorage";

const ArticlesContext = createContext<ArticlesContextType | null>(null);

export const ArticlesProvider = ({ children }: ArticlesProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const { setItem, getItem } = useStorage();
  const [feed, setFeed] = useState({ source: [], category: [] });
  const {
    mutate: searchArticles,
    data,
    isPending,
    isSuccess,
  } = useSearchArticles();
  useEffect(() => {
    if (search)
      searchArticles({
        keyword: search,
      });
    else setArticles([]);
  }, [search, searchArticles]);

  useEffect(() => {
    if (isSuccess) setArticles(data);
  }, [data, isSuccess]);

  useEffect(() => {
    let feed: any = { source: [], category: [] };
    const feedStorage = getItem("feed", "local");
    if (feedStorage) {
      feed = JSON.parse(feedStorage);
    }
    setFeed(feed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFilter = (value: { from: string; to: string }) => {
    searchArticles({
      keyword: search,
      data: {
        from: value.from || undefined,
        to: value.to || undefined,
      },
    });
  };

  const setSource = (source: string) => {
    if (data && source) {
      const filteredArticles = data.filter(
        (article) => article.source === source
      );
      setArticles(filteredArticles);
    } else if (data) {
      setArticles(data);
    }
  };

  const sources: string[] = Array.from(
    new Set(data?.map((article) => article.source))
  );
  const sourceInFeed = (source: string) => {
    const feedStorage = getItem("feed", "local");
    if (!feedStorage) return false;
    const feed = JSON.parse(feedStorage);
    return feed.source.map((item: any) => item.value).includes(source);
  };

  const handleSourceToFeed = (source: string, sourceNumber: number) => {
    let feed: any = { source: [], category: [] };
    const feedStorage = getItem("feed", "local");
    if (feedStorage) {
      feed = JSON.parse(feedStorage);
    }
    const sourceIndex = feed.source.map((i: any) => i.value).indexOf(source);
    if (sourceIndex !== -1) {
      feed.source.splice(sourceIndex, 1);
      feed.category.splice(sourceIndex, 1);
    } else {
      feed.source.push({
        value: source,
        number: sourceNumber,
      });
      feed.category.push(search);
    }
    feed.source = Array.from(new Set(feed.source));
    feed.category = Array.from(new Set(feed.category));
    setFeed(feed);
    setItem("feed", JSON.stringify(feed), "local");
  };
  const deleteSource = (source: string) => {
    const updatedFeed = { ...feed };
    const sourceIndex = updatedFeed.source.findIndex(
      (item: any) => item.value === source
    );
    if (sourceIndex !== -1) {
      updatedFeed.source.splice(sourceIndex, 1);
      updatedFeed.category.splice(sourceIndex, 1);
      setFeed(updatedFeed);
      setItem("feed", JSON.stringify(updatedFeed), "local");
    }
  };

  const deleteCategory = (category: string) => {
    const updatedFeed = { ...feed };
    //@ts-ignore
    const categoryIndex = updatedFeed.category.indexOf(category);
    if (categoryIndex !== -1) {
      updatedFeed.category.splice(categoryIndex, 1);
      updatedFeed.source.splice(categoryIndex, 1);
      setFeed(updatedFeed);
      setItem("feed", JSON.stringify(updatedFeed), "local");
    }
  };
  return (
    <ArticlesContext.Provider
      value={{
        sources,
        setFilter,
        setSource,
        loading: isPending,
        search,
        setSearch,
        articles: articles,
        setArticles: setArticles,
        handleSourceToFeed,
        sourceInFeed,
        deleteCategory,
        deleteSource,
        feed,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useStoreArticles = () =>
  useContext(ArticlesContext) as ArticlesContextType;
