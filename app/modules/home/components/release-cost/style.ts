import { css } from "@morph-css/kit";

/**
 * A table of changes and what each one costs. Rows are separated by a single
 * hairline, which is the one place a rule beats a tone change: the columns
 * have to line up across rows for the comparison to read.
 */
export const tableStyle = css({
  display: "flex",
  flexDirection: "column",
});

export const rowStyle = css({
  display: "grid",
  gridTemplateColumns: "1.4fr 1.6fr 0.8fr 1.2fr",
  alignItems: "baseline",
  gap: "20px",
  padding: "20px 0",
  borderTop: "1px solid var(--operon-color-border)",
  "@media (max-width: 860px)": {
    gridTemplateColumns: "1fr 1fr",
    rowGap: "10px",
  },
});

export const headRowStyle = css({
  display: "grid",
  gridTemplateColumns: "1.4fr 1.6fr 0.8fr 1.2fr",
  gap: "20px",
  paddingBottom: "12px",
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "600",
  color: "var(--operon-color-text-subtle)",
  "@media (max-width: 860px)": {
    display: "none",
  },
});

export const changeStyle = css({
  fontSize: "var(--operon-font-size-lg)",
  fontWeight: "600",
  letterSpacing: "-0.01em",
});

export const pipelineStyle = css({
  fontSize: "var(--operon-font-size-md)",
  color: "var(--operon-color-text-muted)",
});

export const costStyle = css({
  fontSize: "var(--operon-font-size-md)",
  color: "var(--operon-color-text-muted)",
});

export const operonStyle = css({
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  color: "var(--operon-color-primary)",
});
