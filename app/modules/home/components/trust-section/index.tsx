import { Box } from "@operonstudio/ui";
import { TRUST } from "../../data";
import * as page from "../../style";
import * as classes from "./style";

export const TrustSection = () => (
  <Box {...page.bandStyle}>
    <Box {...page.innerStyle}>
      <Box {...page.sectionHeadStyle}>
        <h2 {...page.sectionTitleStyle}>{TRUST.title}</h2>
        <p {...page.sectionBodyStyle}>{TRUST.body}</p>
      </Box>
      <Box {...page.featureGridStyle}>
        {TRUST.items.map((item) => {
          const Icon = item.icon;
          return (
            <Box
              key={item.title}
              {...page.merge(page.featureStyle, classes.onCanvasStyle)}
            >
              <span {...page.featureIconStyle}>
                <Icon size={18} />
              </span>
              <span {...page.featureTitleStyle}>{item.title}</span>
              <p {...page.featureBodyStyle}>{item.body}</p>
            </Box>
          );
        })}
      </Box>
    </Box>
  </Box>
);
