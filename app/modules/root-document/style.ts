import { css } from "@morph-css/kit";

export const stickyTopContainerStyle = css({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%",
});

export const mainBodyWrapperStyle = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
