import { Box, Button } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import * as classes from "../style";

const legacyNodes = ["PR", "Build", "Deploy"];
const operonNodes = ["Rule Change", "Edge Sync"];

export const Hero = () => {
  const [activePreset, setActivePreset] = useState<"standard" | "targeted">(
    "targeted",
  );
  const [isTaggingActive, setIsTaggingActive] = useState(true);

  return (
    <section {...classes.heroSectionStyle}>
      <Box {...classes.heroGridOverlayStyle} aria-hidden="true" />

      <Box {...classes.heroInnerStyle}>
        {/* Left Column */}
        <Box {...classes.heroLeftStyle}>
          <h1 {...classes.heroTitleStyle}>
            The power of a connected zero-release platform
          </h1>

          <Box {...classes.heroSubtitleStyle}>
            Operon is the zero-release layer between your frontend and
            infrastructure. Change content, business rules, and analytics
            tagging visually. Compose high-performance backend flows from
            reusable codeblocks — all from one cloud console.
          </Box>

          <Box {...classes.heroCTAContainerStyle}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button size="lg">Get started free</Button>
            </Link>
            <Link to="/studio" style={{ textDecoration: "none" }}>
              <Button variant="outline" size="lg">
                Explore Studio &rarr;
              </Button>
            </Link>
          </Box>

          <Box {...classes.heroMetricsRowStyle}>
            <Box {...classes.metricItemStyle}>
              <span {...classes.metricValueStyle}>&lt;10ms</span>
              <span {...classes.metricLabelStyle}>
                Median execution latency
              </span>
            </Box>
            <Box {...classes.metricDividerStyle} aria-hidden="true" />
            <Box {...classes.metricItemStyle}>
              <span {...classes.metricValueStyle}>99.99%</span>
              <span {...classes.metricLabelStyle}>Uptime SLA</span>
            </Box>
            <Box {...classes.metricDividerStyle} aria-hidden="true" />
            <Box {...classes.metricItemStyle}>
              <span {...classes.metricValueStyle}>40+</span>
              <span {...classes.metricLabelStyle}>Global edge regions</span>
            </Box>
          </Box>
        </Box>

        {/* Right Column: Signal Route Panel */}
        <Box {...classes.signalPanelStyle}>
          <Box {...classes.panelHeaderStyle}>
            <Box {...classes.panelHeaderLabelStyle}>Rule engine</Box>

            {/* <Box
              {...classes.segmentedControlStyle}
              role="tablist"
              aria-label="Rule preset"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activePreset === "standard"}
                data-active={activePreset === "standard"}
                onClick={() => setActivePreset("standard")}
                {...classes.segmentButtonStyle}
              >
                Standard Rule
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePreset === "targeted"}
                data-active={activePreset === "targeted"}
                onClick={() => setActivePreset("targeted")}
                {...classes.segmentButtonStyle}
              >
                VIP Targeted Rule
              </button>
            </Box> */}
          </Box>

          {/* Routing diagram: zero-release visualization */}
          <Box {...classes.routeDiagramStyle}>
            <Box {...classes.laneRowStyle}>
              <span {...classes.laneLabelStyle} data-variant="legacy">
                Traditional
              </span>
              <Box {...classes.laneTrackStyle}>
                {legacyNodes.map((node, i) => (
                  <Fragment key={node}>
                    {i > 0 && (
                      <span
                        {...classes.laneConnectorStyle}
                        data-variant="legacy"
                        aria-hidden="true"
                      />
                    )}
                    <span {...classes.laneNodeStyle} data-variant="legacy">
                      {node}
                    </span>
                  </Fragment>
                ))}
              </Box>
              <span {...classes.laneDurationStyle} data-variant="legacy">
                ~15 min
              </span>
            </Box>

            <Box {...classes.laneRowStyle}>
              <span {...classes.laneLabelStyle} data-variant="live">
                Operon
              </span>
              <Box {...classes.laneTrackStyle}>
                {operonNodes.map((node, i) => (
                  <Fragment key={node}>
                    {i > 0 && (
                      <span
                        {...classes.laneConnectorStyle}
                        data-variant="live"
                        aria-hidden="true"
                      />
                    )}
                    <span {...classes.laneNodeStyle} data-variant="live">
                      {node}
                    </span>
                  </Fragment>
                ))}
              </Box>
              <span {...classes.laneDurationStyle} data-variant="live">
                &lt;10ms
              </span>
            </Box>
          </Box>

          {/* Live readout */}
          {/* <Box {...classes.readoutPanelStyle} aria-live="polite">
            <Box {...classes.readoutTopRowStyle}>
              <Box
                {...classes.statusTagStyle}
                data-variant={activePreset === "targeted" ? "live" : "info"}
              >
                {activePreset === "targeted"
                  ? "VIP exclusive · 35% off"
                  : "Seasonal · 15% off"}
              </Box>

              <button
                type="button"
                aria-pressed={isTaggingActive}
                onClick={() => setIsTaggingActive((prev) => !prev)}
                {...classes.tagToggleStyle}
                data-active={isTaggingActive}
              >
                <Eye size={12} />
                {isTaggingActive ? "Visual tag on" : "Tag off"}
              </button>
            </Box>

            <Box {...classes.readoutHeadlineStyle}>
              {activePreset === "targeted"
                ? "Exclusive VIP launch — 35% discount + express delivery"
                : "Summer product collection — 15% instant discount"}
            </Box>

            <Box {...classes.readoutDescStyle}>
              {activePreset === "targeted"
                ? "Rule evaluated: high-LTV audience segment. Synchronized via the Operon edge engine — no code deployment."
                : "Rule evaluated: default fallback schema. Synchronized via the Operon edge engine — no code deployment."}
            </Box>

            {isTaggingActive && (
              <Box {...classes.instrumentationTagStyle}>
                <Check size={12} />
                Instrumentation tag active:{" "}
                <code {...classes.inlineCodeStyle}>cta_checkout_click</code>
              </Box>
            )}
          </Box> */}
        </Box>
      </Box>
    </section>
  );
};
