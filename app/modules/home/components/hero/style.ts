import { css } from "@morph-css/kit";

export const heroSectionStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
  color: "var(--operon-color-text)",
  padding: "36px 16px 48px",
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid var(--operon-color-border)",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media (min-width: 768px)": {
    padding: "72px 24px 88px",
  },
});

export const heroGridOverlayStyle = css({
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(var(--operon-color-border-subtle) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  opacity: 0.6,
  pointerEvents: "none",
});

export const heroInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "32px",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  boxSizing: "border-box",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: "40px",
  },
  "@media (min-width: 992px)": {
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "48px",
  },
});
