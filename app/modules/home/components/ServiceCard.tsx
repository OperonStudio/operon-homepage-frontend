import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import type { CloudService } from "../content/services";
import * as classes from "../style";

interface ServiceCardProps {
  service: CloudService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  const tagType = service.badge?.toLowerCase();

  return (
    <Link to={service.href} {...classes.serviceCardStyle}>
      {service.badge && (
        <span {...classes.serviceTagStyle} data-tag={tagType}>
          {service.badge}
        </span>
      )}
      <Box {...classes.serviceIconWrapperStyle} data-icon-well="true">
        <Icon size={16} />
      </Box>
      <Box {...classes.serviceCardBodyStyle}>
        <span {...classes.serviceNameStyle}>{service.name}</span>
        <p {...classes.serviceDescStyle}>{service.description}</p>
      </Box>
    </Link>
  );
};
