import { Search } from "@operonstudio/icons";
import { css } from "@morph-css/kit";

/**
 * The console's search field. It sits on the canvas rather than in a bar of its
 * own, so it needs no border and no shadow — the white pill against the warm
 * canvas is the whole separation.
 */
const wrapper = css({
  position: "relative",
  width: "100%",
  maxWidth: "420px",
  display: "flex",
  alignItems: "center",
});

const icon = css({
  position: "absolute",
  left: "14px",
  display: "flex",
  color: "var(--operon-color-text-subtle)",
  pointerEvents: "none",
});

const field = css({
  width: "100%",
  height: "38px",
  padding: "0 14px 0 40px",
  fontSize: "13.5px",
  color: "var(--operon-color-text)",
  backgroundColor: "var(--operon-color-surface)",
  border: "none",
  borderRadius: "var(--operon-radius-full)",
  outline: "none",
  "&::placeholder": {
    color: "var(--operon-color-text-subtle)",
  },
  "&:focus-visible": {
    boxShadow: "var(--operon-shadow-focus)",
  },
});

export const StudioSearch = () => (
  <div {...wrapper}>
    <span {...icon}>
      <Search size={15} />
    </span>
    <input
      type="search"
      placeholder="Search projects, environments and keys"
      aria-label="Search Studio"
      {...field}
    />
  </div>
);
