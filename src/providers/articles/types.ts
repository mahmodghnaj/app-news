import { ReactNode } from "react";
import { Article } from "../../features/articles/types";

export type ArticlesContextType = {
  articles: Article[];
  setArticles: (payload: Article[]) => void;
  search: string;
  setSearch: (value: string) => void;
  loading: boolean;
  setFilter: (value: { from: string; to: string }) => void;
  setSource: (source: string) => void;
  sources: string[];
  handleSourceToFeed: (value: string, number: number) => void;
  sourceInFeed: (value: string) => boolean;
  deleteSource: (value: string) => void;
  deleteCategory: (value: string) => void;
  feed: {
    source: string[];
    category: string[];
  };
};

export type ArticlesProps = {
  children: ReactNode;
};
