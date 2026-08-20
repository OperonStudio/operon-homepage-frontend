import type { NewsItem } from "./data";

export const useNewsCard = (item: NewsItem) => {
  return {
    item,
  };
};
