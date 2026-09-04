import { Box, Button } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";
import * as classes from "./style";

interface HeroLeftProps {
  metrics: readonly { value: string; label: string }[];
}

export const HeroLeft = ({ metrics }: HeroLeftProps) => {
  return (
    <Box {...classes.heroLeftStyle}>
      <h1 {...classes.heroTitleStyle}>
        The power of a connected zero-release platform
      </h1>

      <Box {...classes.heroSubtitleStyle}>
        Operon is the zero-release layer between your frontend and
        infrastructure. Change content, business rules, and analytics tagging
        visually. Compose high-performance backend flows from reusable
        codeblocks — all from one cloud console.
      </Box>

      <Box {...classes.heroCTAContainerStyle}>
        <Link to="/register" {...classes.heroCtaLinkStyle}>
          <Button size="lg" fullWidth {...classes.heroButtonStyle}>
            Get started free
          </Button>
        </Link>
        <Link to="/studio" {...classes.heroCtaLinkStyle}>
          <Button
            variant="outline"
            size="lg"
            fullWidth
            {...classes.heroButtonStyle}
          >
            Explore Studio &rarr;
          </Button>
        </Link>
      </Box>

      <Box {...classes.heroMetricsRowStyle}>
        {metrics.map((metric, i) => (
          <Fragment key={metric.label}>
            {i > 0 && (
              <Box {...classes.metricDividerStyle} aria-hidden="true" />
            )}
            <Box {...classes.metricItemStyle}>
              <span {...classes.metricValueStyle}>{metric.value}</span>
              <span {...classes.metricLabelStyle}>{metric.label}</span>
            </Box>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};
