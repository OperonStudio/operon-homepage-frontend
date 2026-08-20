import { css } from "@morph-css/kit";

export const bannerContainerStyle = css({
  position: "relative",
  width: "100%",
  backgroundColor: "#000716",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 16px",
  minHeight: "36px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  lineHeight: "1.4",
  "@media (max-width: 600px)": {
    fontSize: "11px",
    padding: "6px 10px",
  },
});

export const bannerContentStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "1200px",
  textAlign: "center",
});

export const bannerBadgeStyle = css({
  backgroundColor: "var(--operon-color-primary)",
  color: "#ffffff",
  fontSize: "10px",
  fontWeight: "700",
  padding: "2px 8px",
  borderRadius: "var(--operon-radius-full)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const bannerLinkStyle = css({
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const bannerDismissStyle = css({
  position: "absolute",
  right: "12px",
  background: "none",
  border: "none",
  color: "rgba(255, 255, 255, 0.6)",
  cursor: "pointer",
  padding: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--operon-radius-xs)",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
