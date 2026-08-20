import { Box } from "@operonstudio/ui";
import {
  CloudSuiteGrid,
  Hero,
  SecuritySection,
  SubNavTabs,
  WhatsNewSection,
} from "./components";
import * as classes from "./style";

export const HomePage = () => {
  return (
    <Box {...classes.containerStyle}>
      <Hero />
      <SubNavTabs />
      <WhatsNewSection />
      <CloudSuiteGrid />
      <SecuritySection />
    </Box>
  );
};
