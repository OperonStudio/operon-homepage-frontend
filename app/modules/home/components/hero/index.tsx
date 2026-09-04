import { ArrowRight } from "@operonstudio/icons";
import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { HERO } from "../../data";
import * as page from "../../style";
import * as classes from "./style";

export const Hero = () => (
  <Box {...page.merge(page.bandStyle, classes.heroBandStyle)}>
    <Box {...page.innerStyle}>
      <h1 {...classes.titleStyle}>{HERO.title}</h1>
      <p {...classes.bodyStyle}>{HERO.body}</p>

      <Box {...page.merge(page.ctaRowStyle, classes.ctaStyle)}>
        <Link to={HERO.primaryCta.to} {...page.ctaPrimaryStyle}>
          {HERO.primaryCta.label}
        </Link>
        <Link to={HERO.secondaryCta.to} {...page.ctaSecondaryStyle}>
          {HERO.secondaryCta.label}
          <ArrowRight size={16} />
        </Link>
      </Box>

      <Box {...classes.metricsStyle}>
        {HERO.metrics.map((metric) => (
          <Box key={metric.label} {...classes.metricStyle}>
            <span {...classes.metricValueStyle}>{metric.value}</span>
            <span {...classes.metricLabelStyle}>{metric.label}</span>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
