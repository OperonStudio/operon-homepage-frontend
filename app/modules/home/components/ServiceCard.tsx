import { Box } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import type { CloudService } from "../content/services";
import * as classes from "../style";

interface ServiceCardProps {
  service: CloudService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Link to={service.href} {...classes.serviceCardStyle}>
      <Box {...classes.serviceIconWrapperStyle}>
        <Icon size={18} />
      </Box>
      <Box style={{ flex: 1, minWidth: 0 }}>
        <span {...classes.serviceNameStyle}>
          {service.name}
          {service.badge && (
            <span {...classes.serviceBadgeStyle}>{service.badge}</span>
          )}
        </span>
        <p {...classes.serviceDescStyle}>{service.description}</p>
      </Box>
    </Link>
  );
};
