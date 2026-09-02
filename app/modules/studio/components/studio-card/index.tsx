import { Badge, Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import type { StudioCardProps } from "./data";
import { useStudioCard } from "./hook";
import * as classes from "./style";

export const StudioCard = ({ service, href }: StudioCardProps) => {
  const { service: item, Icon, tagType } = useStudioCard(service);

  return (
    <Link
      to={href}
      aria-label={`${item.name} — ${item.description}`}
      {...classes.serviceLinkStyle}
    >
      <Box {...classes.serviceCardStyle}>
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
      </Box>
    </Link>
  );
};
