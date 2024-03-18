import { useMutation, useQuery } from "@tanstack/react-query";
import { apiSourceOne, apiSourceTwo } from "../../../lib/axios/api";
import { Article, ParamsSearch } from "../types";
import { getSourceOne, getSourceTwo } from "./endPoints";
import {
  interleaveArrays,
  mappingSourceOne,
  mappingSourceTwo,
} from "../../../utils/mappingData";
import { QueryConfig } from "../../../lib/react-query";

const getArticlesOne = async (params: ParamsSearch) => {
  let { keyword, data, source } = params;
  if (Array.isArray(keyword)) {
    keyword = keyword.join(" And ");
  }
  if (Array.isArray(source)) {
    //@ts-ignore
    source = source
      //@ts-ignore
      .filter((item) => item.number === 1)
      //@ts-ignore
      .map((item) => item.value)
      .join(", ");
  }
  const modifiedParams = {
    q: keyword,
    from: data?.from,
    to: data?.to,
    sources: source,
    pageSize: 50,
  };
  const response = await apiSourceOne.get(getSourceOne, {
    params: modifiedParams,
  });

  return response.data;
};

const getArticlesTwo = async (params: ParamsSearch) => {
  let { keyword, data, source } = params;
  if (Array.isArray(keyword)) {
    keyword = keyword.join(" And ");
  }
  if (Array.isArray(source)) {
    source = source
      //@ts-ignore
      .filter((item) => item.number === 2)
      //@ts-ignore
      .map((item) => item.value)
      .join("/ ");
  }
  const modifiedParams = {
    q: keyword,
    "from-date": data?.from,
    "to-date": data?.to,
    section: source || undefined,
    "show-fields": "all",
    "page-size": 10,
  };
  const response = await apiSourceTwo.get(getSourceTwo, {
    params: modifiedParams,
  });
  return response.data;
};

const getAllArticles = async (params: ParamsSearch): Promise<Article[]> => {
  const [articlesOne, articlesTwo] = await Promise.all([
    getArticlesOne(params),
    getArticlesTwo(params),
  ]);
  const mappedArticlesOne = mappingSourceOne(articlesOne);
  const mappedArticlesTwo = mappingSourceTwo(articlesTwo);
  return interleaveArrays(mappedArticlesOne, mappedArticlesTwo);
};

export const useSearchArticles = () => {
  return useMutation({
    mutationFn: getAllArticles,
  });
};
type QueryFnType = typeof getAllArticles;

type UseOptionsArticles = {
  params: ParamsSearch;
  config?: QueryConfig<QueryFnType>;
};
export const useArticles = ({ params, config }: UseOptionsArticles) => {
  return useQuery({
    ...config,
    queryKey: ["params", params],
    queryFn: () => getAllArticles(params),
  });
};
