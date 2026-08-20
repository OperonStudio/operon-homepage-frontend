import { css } from "@morph-css/kit";

/* Right Column: Completely Hidden on Mobile (< 768px), Visible Stacked Deck on Desktop (>= 768px) */
export const stackWrapperStyle = css({
  display: "none",
  "@media (min-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    maxWidth: "540px",
    boxSizing: "border-box",
  },
});

export const stackTabsRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  overflowX: "auto",
  paddingBottom: "2px",
  maxWidth: "100%",
  boxSizing: "border-box",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const stackContainerStyle = css({
  position: "relative",
  width: "100%",
  minHeight: "340px",
  paddingRight: "54px",
  paddingBottom: "64px",
  boxSizing: "border-box",
});

export const stackedCardStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-surface, #ffffff)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  boxSizing: "border-box",
  transition:
    "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease, box-shadow 400ms ease, border-color 400ms ease",
});

export const panelHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  boxSizing: "border-box",
});

export const panelHeaderTitleStyle = css({
  fontSize: "15px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const routeDiagramStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  paddingBottom: "4px",
  boxSizing: "border-box",
});

export const laneRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  width: "100%",
  boxSizing: "border-box",
});

export const laneLabelStyle = css({
  width: "84px",
  flexShrink: 0,
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "10px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "var(--operon-color-text-subtle)",
  "&[data-variant='live']": {
    color: "var(--operon-color-success)",
  },
});

export const laneTrackStyle = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  minWidth: 0,
});

export const laneNodeStyle = css({
  padding: "5px 9px",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  borderRadius: "var(--operon-radius-xs)",
  border: "1px solid var(--operon-color-border)",
  color: "var(--operon-color-text-subtle)",
  backgroundColor: "var(--operon-color-surface, #ffffff)",
  "&[data-variant='live']": {
    borderColor: "var(--operon-color-primary)",
    color: "var(--operon-color-primary)",
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const laneConnectorStyle = css({
  flex: 1,
  height: 0,
  borderTop: "1px dashed var(--operon-color-border)",
  margin: "0 -1px",
  minWidth: "4px",
  "&[data-variant='live']": {
    borderTop: "1px solid var(--operon-color-primary)",
  },
});

export const laneDurationStyle = css({
  width: "60px",
  flexShrink: 0,
  textAlign: "right",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  color: "var(--operon-color-text-subtle)",
  "&[data-variant='live']": {
    color: "var(--operon-color-success)",
  },
});
