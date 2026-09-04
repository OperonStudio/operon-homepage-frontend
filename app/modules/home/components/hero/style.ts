import { css } from "@morph-css/kit";

export const heroBandStyle = css({
  textAlign: "center",
  paddingTop: "112px",
  paddingBottom: "104px",
  "@media (max-width: 800px)": {
    paddingTop: "72px",
    paddingBottom: "64px",
  },
});

export const titleStyle = css({
  margin: "0 auto",
  maxWidth: "18ch",
  fontSize: "clamp(40px, 7vw, 76px)",
  fontWeight: "800",
  letterSpacing: "-0.045em",
  lineHeight: 1.02,
  color: "var(--operon-color-text)",
});

export const bodyStyle = css({
  margin: "28px auto 0",
  maxWidth: "58ch",
  fontSize: "clamp(16px, 1.6vw, 19px)",
  lineHeight: 1.6,
  color: "var(--operon-color-text-muted)",
});

export const ctaStyle = css({
  justifyContent: "center",
  marginTop: "36px",
});

/** Three figures on the canvas, separated by space rather than by rules. */
export const metricsStyle = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "48px",
  marginTop: "72px",
  "@media (max-width: 800px)": {
    gap: "28px",
    marginTop: "48px",
  },
});

export const metricStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
});

export const metricValueStyle = css({
  fontSize: "var(--operon-font-size-2xl)",
  fontWeight: "700",
  letterSpacing: "-0.03em",
  color: "var(--operon-color-text)",
});

export const metricLabelStyle = css({
  fontSize: "var(--operon-font-size-md)",
  color: "var(--operon-color-text-muted)",
});
