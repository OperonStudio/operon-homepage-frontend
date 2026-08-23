import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useHomePage } from "../../hook";
import * as classes from "./style";

export const AnnouncementBanner = () => {
  const { announcementData, error } = useHomePage();
  const {
    show: showAnnouncementComponent,
    badge,
    message,
    link,
  } = announcementData || {};
  const { content: badgeContent, show: showBadge } = badge || {};
  const { content: messageContent, show: showMessage } = message || {};
  const { label: linkLabel, to: linkTo } = link || {};

  if (!showAnnouncementComponent || error) {
    return null;
  }

  return (
    <Box
      {...classes.bannerContainerStyle}
      role="region"
      aria-label="Announcement"
    >
      <Box {...classes.bannerContentStyle}>
        {showBadge && <span {...classes.bannerBadgeStyle}>{badgeContent}</span>}

        {showMessage && <span>{messageContent}</span>}

        {linkTo && (
          <Link to={linkTo} {...classes.bannerLinkStyle}>
            {linkLabel}
          </Link>
        )}
      </Box>
    </Box>
  );
};
