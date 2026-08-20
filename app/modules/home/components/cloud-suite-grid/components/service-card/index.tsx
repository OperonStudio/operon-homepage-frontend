import { Badge, Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import type { CloudService } from "./data";
import { useServiceCard } from "./hook";
import * as classes from "./style";

interface ServiceCardProps {
  service: CloudService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { service: item, Icon, tagType } = useServiceCard(service);

  return (
    <Link to={item.href} {...classes.serviceCardStyle}>
      {item.badge && (
        <Badge
          variant="outline"
          color={
            tagType === "popular"
              ? "primary"
              : tagType === "new"
                ? "success"
                : "warning"
          }
          {...classes.serviceTagStyle}
        >
          {item.badge}
        </Badge>
      )}
      <Box {...classes.serviceIconWrapperStyle} data-icon-well="true">
        <Icon size={16} />
      </Box>
      <Box {...classes.serviceCardBodyStyle}>
        <span {...classes.serviceNameStyle}>{item.name}</span>
        <p {...classes.serviceDescStyle}>{item.description}</p>
      </Box>
    </Link>
  );
};
