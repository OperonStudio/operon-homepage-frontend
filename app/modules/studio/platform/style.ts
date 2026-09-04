import { css } from "@morph-css/kit";

export const pageStyle = css({
  padding: "22px 26px 56px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  maxWidth: "1080px",
});

export const pageHeadStyle = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
});

export const titleStyle = css({
  fontSize: "19px",
  fontWeight: 650,
  letterSpacing: "-0.01em",
  color: "var(--operon-color-text)",
});

export const subtitleStyle = css({
  fontSize: "13px",
  marginTop: "3px",
  color: "var(--operon-color-text-muted)",
});

export const panelStyle = css({
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg, 12px)",
  background: "var(--operon-color-surface)",
  overflow: "hidden",
});

export const tableHeadStyle = css({
  display: "grid",
  gap: "12px",
  padding: "9px 16px",
  borderBottom: "1px solid var(--operon-color-border)",
  background: "var(--operon-color-surface-raised, rgba(0,0,0,0.02))",
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "var(--operon-color-text-subtle)",
});

export const tableRowStyle = css({
  display: "grid",
  gap: "12px",
  alignItems: "center",
  padding: "12px 16px",
  borderBottom: "1px solid var(--operon-color-border)",
  fontSize: "13px",
  color: "var(--operon-color-text)",
  "&:last-child": { borderBottom: "none" },
});

export const cellPrimaryStyle = css({
  fontWeight: 550,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const cellMutedStyle = css({
  fontSize: "12px",
  color: "var(--operon-color-text-muted)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const monoStyle = css({
  fontFamily: "var(--operon-font-mono, ui-monospace, monospace)",
  fontSize: "12px",
  color: "var(--operon-color-text-muted)",
});

export const actionsCellStyle = css({
  display: "flex",
  justifyContent: "flex-end",
  gap: "6px",
});

export const emptyStyle = css({
  padding: "34px 16px",
  textAlign: "center",
  fontSize: "13px",
  color: "var(--operon-color-text-subtle)",
});

export const barStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  padding: "12px 16px",
  borderTop: "1px solid var(--operon-color-border)",
  background: "var(--operon-color-surface-raised, rgba(0,0,0,0.015))",
});

export const statsRowStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "12px",
});

export const statCardStyle = css({
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg, 12px)",
  background: "var(--operon-color-surface)",
  padding: "14px 16px",
});

export const statLabelStyle = css({
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "var(--operon-color-text-subtle)",
});

export const statValueStyle = css({
  fontSize: "24px",
  fontWeight: 650,
  lineHeight: 1.2,
  marginTop: "4px",
  color: "var(--operon-color-text)",
});

export const chipRowStyle = css({
  display: "flex",
  gap: "5px",
  flexWrap: "wrap",
});

export const chipStyle = css({
  fontSize: "11px",
  fontWeight: 550,
  padding: "2px 8px",
  borderRadius: "999px",
  border: "1px solid var(--operon-color-border)",
  color: "var(--operon-color-text-muted)",
});

export const chipOnStyle = css({
  borderColor: "transparent",
  background: "var(--operon-color-primary-ghost, rgba(99,102,241,0.12))",
  color: "var(--operon-color-primary)",
});

export const secretStyle = css({
  gridColumn: "1 / -1",
  fontFamily: "var(--operon-font-mono, ui-monospace, monospace)",
  fontSize: "12px",
  wordBreak: "break-all",
  padding: "9px 11px",
  marginTop: "8px",
  borderRadius: "8px",
  background: "var(--operon-color-surface-raised, rgba(0,0,0,0.04))",
  border: "1px solid var(--operon-color-warning, #e6a700)",
  color: "var(--operon-color-text)",
});
