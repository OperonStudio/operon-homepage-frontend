import { CATEGORIES, CLOUD_SERVICES } from "./data";

export const useCloudSuiteGrid = () => {
  const getServicesByCategory = (category: (typeof CATEGORIES)[number]) => {
    return CLOUD_SERVICES.filter((s) => s.category === category);
  };

  return {
    categories: CATEGORIES,
    getServicesByCategory,
  };
};
