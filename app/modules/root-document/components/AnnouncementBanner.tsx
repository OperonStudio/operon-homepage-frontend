import { X } from "@operonstudio/icons";
import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as classes from "../style";

const ANNOUNCEMENT_ID = "ignite-2026-v1";
const STORAGE_KEY = `operon.announcementDismissed.${ANNOUNCEMENT_ID}`;

export const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDismissed = localStorage.getItem(STORAGE_KEY) === "true";
      setDismissed(isDismissed);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  if (dismissed) return null;

  return (
    <Box {...classes.bannerContainerStyle} role="region" aria-label="Announcement">
      <Box {...classes.bannerContentStyle}>
        <span {...classes.bannerBadgeStyle}>Event</span>
        <span>Operon Ignite 2026 — Global Cloud Orchestration Conference · Nov 12–13</span>
        <Link to="/register" {...classes.bannerLinkStyle}>
          Register free &rarr;
        </Link>
      </Box>
      <button
        type="button"
        onClick={handleDismiss}
        {...classes.bannerDismissStyle}
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </Box>
  );
};
