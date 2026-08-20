import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import * as classes from "./style";
import { announcement } from "./data";


export const AnnouncementBanner = () => {
  return (
    <Box
      {...classes.bannerContainerStyle}
      role="region"
      aria-label="Announcement"
    >
      <Box {...classes.bannerContentStyle}>
        <span {...classes.bannerBadgeStyle}>{announcement.badge}</span>

        <span>{announcement.message}</span>

        <Link to={announcement.link.to} {...classes.bannerLinkStyle}>
          {announcement.link.label}
        </Link>
      </Box>
    </Box>
  );
};
