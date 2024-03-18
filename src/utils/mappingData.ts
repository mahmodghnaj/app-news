import { Article } from "../features/articles/types";

export const mappingSourceOne = (data: any) => {
  const mappingData = data?.articles.map((item: any) => ({
    date: item?.publishedAt,
    title: item?.title,
    description: item?.description,
    urlArticle: item?.url,
    imageArticle: item?.urlToImage,
    content: item?.content,
    source: item?.source.name,
    sourceId: item?.source.id,
    author: item?.author,

    numberSource: 1,
  }));
  return mappingData;
};
export const mappingSourceTwo = (data: any) => {
  const mappingData = data?.response?.results.map((item: any) => ({
    date: item?.webPublicationDate,
    category: item?.sectionName,
    urlArticle: item?.webUrl,
    title: item?.webTitle,
    author: item?.fields?.byline,
    source: item?.fields?.publication,
    sourceId: item?.sectionId,
    content: item?.fields?.bodyText,
    description: item?.fields?.trailText,
    imageArticle: item?.fields?.thumbnail,
    numberSource: 2,
  }));
  return mappingData;
};
export const interleaveArrays = (
  arr1: Article[],
  arr2: Article[]
): Article[] => {
  const result: any[] = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }
  return result;
};
