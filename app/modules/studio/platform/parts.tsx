import { Box } from "@operonstudio/ui";
import * as classes from "./style";

/** A screen's title row, with room for a primary action on the right. */
export const PageHead = ({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <Box {...classes.pageHeadStyle}>
    <Box>
      <Box {...classes.titleStyle}>{title}</Box>
      {subtitle && <Box {...classes.subtitleStyle}>{subtitle}</Box>}
    </Box>
    {action}
  </Box>
);

/**
 * A bordered table.
 *
 * `columns` is a grid template rather than a column count so each screen can
 * give its name column the room it needs without every screen agreeing on one
 * layout.
 */
export const Table = ({
  columns,
  headers,
  children,
  footer,
  empty,
  isEmpty,
}: {
  columns: string;
  headers: string[];
  children: React.ReactNode;
  footer?: React.ReactNode;
  empty: string;
  isEmpty: boolean;
}) => (
  <Box {...classes.panelStyle}>
    {!isEmpty && (
      <Box
        {...classes.tableHeadStyle}
        style={{
          ...classes.tableHeadStyle.style,
          gridTemplateColumns: columns,
        }}
      >
        {headers.map((header) => (
          <span key={header}>{header}</span>
        ))}
      </Box>
    )}
    {isEmpty ? <Box {...classes.emptyStyle}>{empty}</Box> : children}
    {footer && <Box {...classes.barStyle}>{footer}</Box>}
  </Box>
);

export const Row = ({
  columns,
  children,
}: {
  columns: string;
  children: React.ReactNode;
}) => (
  <Box
    {...classes.tableRowStyle}
    style={{ ...classes.tableRowStyle.style, gridTemplateColumns: columns }}
  >
    {children}
  </Box>
);

/**
 * A product tag.
 *
 * One component rather than the two near-copies this had, which is how the
 * overview's chips ended up rendering as bare text: they carried one recipe's
 * class and another's inline style, so the padding and radius never applied.
 * When `onClick` is given the chip is a toggle.
 */
export const Chip = ({
  label,
  on,
  onClick,
  title,
}: {
  label: string;
  on?: boolean;
  onClick?: () => void;
  title?: string;
}) => {
  const style: React.CSSProperties = {
    ...classes.chipStyle.style,
    ...(on ? classes.chipOnStyle.style : null),
    ...(onClick ? { cursor: "pointer" } : null),
  };

  if (!onClick) {
    return (
      <span className={classes.chipStyle.className} style={style}>
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={classes.chipStyle.className}
      style={style}
    >
      {label}
    </button>
  );
};

export const Stat = ({
  label,
  value,
  secondary,
}: {
  label: string;
  value: React.ReactNode;
  /** A quieter tail on the figure, e.g. the cents on a currency value. */
  secondary?: React.ReactNode;
}) => (
  <Box {...classes.statCardStyle}>
    <Box {...classes.statLabelStyle}>{label}</Box>
    <Box {...classes.statValueStyle}>
      {value}
      {secondary != null && (
        <span className={classes.statSecondaryStyle.className}>
          {secondary}
        </span>
      )}
    </Box>
  </Box>
);
