import type { Service } from "../../data";

export const useStudioCard = (service: Service) => {
  const Icon = service.icon;
  const tagType = service.badge?.toLowerCase();

  return {
    service,
    Icon,
    tagType,
  };
};
