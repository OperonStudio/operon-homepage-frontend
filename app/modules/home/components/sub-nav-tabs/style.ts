import { css } from "@morph-css/kit";

export const subNavContainerStyle = css({
  position: "sticky",
  top: "93px",
  zIndex: 900,
  width: "100%",
  backgroundColor: "var(--operon-color-surface)",
  borderBottom: "1px solid var(--operon-color-border)",
  display: "flex",
  justifyContent: "center",
  padding: "0 24px",
  boxShadow: "var(--operon-shadow-xs)",
  boxSizing: "border-box",
  "@media (max-width: 600px)": {
    top: "93px",
    padding: "0 12px",
  },
});

export const subNavInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  alignItems: "center",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "& > div": {
    width: "100%",
  },
  "& [role='tablist']": {
    borderBottom: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "16px",
  },
  "& [role='tab']": {
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  "& [role='tabpanel']": {
    display: "none !important",
    padding: 0,
    margin: 0,
    height: 0,
    overflow: "hidden",
  },
});
