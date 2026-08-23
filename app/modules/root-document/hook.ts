import { getHomepageData } from "#/common/api";
import { QUERY_KEYS } from "#/common/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useHomePage = () => {
  const { data: homepageData, error } = useQuery({
    queryKey: [QUERY_KEYS.HOME_PAGE],
    queryFn: getHomepageData,
  });
  const announcementData = homepageData?.announcement;
  const footerData = homepageData?.footer;
  return {
    announcementData,
    footerData,
    error,
  };
};
