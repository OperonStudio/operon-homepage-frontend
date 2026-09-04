import { Box } from "@operonstudio/ui";
import { RELEASE_COST } from "../../data";
import * as page from "../../style";
import * as classes from "./style";

export const ReleaseCost = () => (
  <Box {...page.merge(page.bandStyle, page.bandSurfaceStyle)}>
    <Box {...page.innerStyle}>
      <Box {...page.sectionHeadStyle}>
        <h2 {...page.sectionTitleStyle}>{RELEASE_COST.title}</h2>
        <p {...page.sectionBodyStyle}>{RELEASE_COST.body}</p>
      </Box>

      <Box {...classes.tableStyle}>
        <Box {...classes.headRowStyle} aria-hidden="true">
          <span>The change</span>
          <span>What it takes today</span>
          <span>Cost</span>
          <span>With Operon</span>
        </Box>
        {RELEASE_COST.rows.map((row) => (
          <Box key={row.change} {...classes.rowStyle}>
            <span {...classes.changeStyle}>{row.change}</span>
            <span {...classes.pipelineStyle}>{row.pipeline}</span>
            <span {...classes.costStyle}>{row.cost}</span>
            <span {...classes.operonStyle}>{row.operon}</span>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
