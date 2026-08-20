import type { CloudService } from "./data";

export const useServiceCard = (service: CloudService) => {
  const Icon = service.icon;
  const tagType = service.badge?.toLowerCase();

  return {
    service,
    Icon,
    tagType,
  };
};
