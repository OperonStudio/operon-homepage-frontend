import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { CLOSING } from "../../data";
import * as page from "../../style";
import * as classes from "./style";

export const Closing = () => (
  <Box {...page.merge(page.bandStyle, page.bandSurfaceStyle)}>
    <Box {...page.merge(page.innerStyle, classes.innerStyle)}>
      <h2 {...page.sectionTitleStyle}>{CLOSING.title}</h2>
      <p {...page.merge(page.sectionBodyStyle, classes.bodyStyle)}>
        {CLOSING.body}
      </p>
      <Box {...page.merge(page.ctaRowStyle, classes.ctaStyle)}>
        <Link to={CLOSING.primaryCta.to} {...page.ctaPrimaryStyle}>
          {CLOSING.primaryCta.label}
        </Link>
        <Link to={CLOSING.secondaryCta.to} {...page.ctaSecondaryStyle}>
          {CLOSING.secondaryCta.label}
        </Link>
      </Box>
    </Box>
  </Box>
);
