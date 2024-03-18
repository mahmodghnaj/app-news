export type ParamsSearch = {
  keyword: string | string[];
  data?: {
    from?: string;
    to?: string;
  };
  source?:
    | string
    | {
        value: string;
        number: number;
      }[]
    | string[];
};
export type Article = {
  date: string;
  source: string;
  title: string;
  description: string;
  urlArticle: string;
  imageArticle: string;
  content: string;
  author: string;
  numberSource: number;
  sourceId: string;
};
