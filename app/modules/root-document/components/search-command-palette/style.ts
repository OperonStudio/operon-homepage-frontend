import { css } from "@morph-css/kit";

export const modalOverlayStyle = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 7, 22, 0.55)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: "80px",
  zIndex: "var(--operon-z-modal)",
  animation: "operon-fade-scale-in 150ms ease-out",
  "@media (max-width: 600px)": {
    paddingTop: "16px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
});
export const megaMenuTitleStyle = css({
  fontSize: "13px",
  fontWeight: "600",
  color: "var(--operon-color-text)",
});

export const megaMenuDescStyle = css({
  fontSize: "11px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.3",
  marginTop: "2px",
});

export const modalContainerStyle = css({
  width: "100%",
  maxWidth: "560px",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-xl)",
  boxShadow: "var(--operon-shadow-xl)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 600px)": {
    maxWidth: "100%",
    maxHeight: "85vh",
  },
});

export const searchInputHeaderStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 18px",
  borderBottom: "1px solid var(--operon-color-border)",
});

export const searchInputStyle = css({
  flex: 1,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: "14px",
  color: "var(--operon-color-text)",
  "&::placeholder": {
    color: "var(--operon-color-text-subtle)",
  },
});

export const searchResultsListStyle = css({
  maxHeight: "320px",
  overflowY: "auto",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  "@media (max-width: 600px)": {
    maxHeight: "calc(85vh - 70px)",
  },
});

export const searchResultItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px 14px",
  borderRadius: "var(--operon-radius-md)",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  "&:hover, &[data-active='true']": {
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});
