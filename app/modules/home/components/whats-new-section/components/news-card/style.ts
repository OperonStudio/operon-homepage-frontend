import { css } from "@morph-css/kit";

export const newsCardStyle = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition:
    "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "var(--operon-color-primary)",
    boxShadow: "var(--operon-shadow-lg)",
  },
});

export const newsCardBannerStyle = css({
  height: "140px",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px",
  position: "relative",
});

export const newsCardBodyStyle = css({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const newsCardTitleStyle = css({
  fontSize: "17px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  lineHeight: "1.3",
  marginBottom: "8px",
});

export const newsCardDescStyle = css({
  fontSize: "13px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.55",
  marginBottom: "16px",
  flex: 1,
});

export const newsCardLinkStyle = css({
  fontSize: "12px",
  fontWeight: "700",
  color: "var(--operon-color-primary)",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
});
