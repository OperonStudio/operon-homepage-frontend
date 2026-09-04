import { css } from "@morph-css/kit";

export const pageStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "24px 28px 32px",
  "@media (max-width: 700px)": {
    padding: "18px 16px 24px",
  },
});

export const headerRowStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
});

export const memberChipsStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  minWidth: 0,
});

/** A person, named. White on the content surface, so no outline is needed. */
export const memberChipStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "5px 14px 5px 6px",
  borderRadius: "var(--operon-radius-full)",
  backgroundColor: "var(--operon-color-surface-sunken)",
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "500",
  color: "var(--operon-color-text)",
  whiteSpace: "nowrap",
});

export const titleStyle = css({
  margin: 0,
  fontSize: "clamp(30px, 4vw, 40px)",
  fontWeight: "800",
  letterSpacing: "-0.035em",
  lineHeight: 1.05,
  color: "var(--operon-color-text)",
});

export const leadRowStyle = css({
  display: "grid",
  gridTemplateColumns: "minmax(240px, 340px) 1fr",
  alignItems: "start",
  gap: "32px",
  "@media (max-width: 1000px)": {
    gridTemplateColumns: "1fr",
    gap: "24px",
  },
});

export const tileRowStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "10px",
});

export const tileMetaStyle = css({
  opacity: 0.6,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const tileLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2px",
  color: "inherit",
  opacity: 0.6,
  textDecoration: "none",
  "&:hover": { opacity: 1 },
});

export const panelLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2px",
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "600",
  color: "var(--operon-color-text-muted)",
  textDecoration: "none",
  whiteSpace: "nowrap",
  "&:hover": { color: "var(--operon-color-text)" },
});

export const gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "14px",
});

export const emptyStyle = css({
  padding: "24px 14px",
  borderRadius: "14px",
  backgroundColor: "var(--operon-color-surface)",
  fontSize: "var(--operon-font-size-md)",
  color: "var(--operon-color-text-muted)",
});
