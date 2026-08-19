import { Box } from "@operonstudio/ui";
import { CloudSuiteGrid } from "./components/CloudSuiteGrid";
import { Hero } from "./components/Hero";
import { SecuritySection } from "./components/SecuritySection";
import { SubNavTabs } from "./components/SubNavTabs";
import { WhatsNewSection } from "./components/WhatsNewSection";
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
