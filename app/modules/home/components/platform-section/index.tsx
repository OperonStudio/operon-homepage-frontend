import { Box } from "@operonstudio/ui";
import { PLATFORM } from "../../data";
import * as page from "../../style";

export const PlatformSection = () => (
  <Box {...page.merge(page.bandStyle, page.bandSurfaceStyle)}>
    <Box {...page.innerStyle}>
      <Box {...page.sectionHeadStyle}>
        <h2 {...page.sectionTitleStyle}>{PLATFORM.title}</h2>
        <p {...page.sectionBodyStyle}>{PLATFORM.body}</p>
      </Box>
      <Box {...page.featureGridStyle}>
        {PLATFORM.items.map((item) => {
          const Icon = item.icon;
          return (
            <Box key={item.title} {...page.featureStyle}>
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
