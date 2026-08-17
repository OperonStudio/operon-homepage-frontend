import { Box } from "@operon/ui";
import { CLOUD_SERVICES } from "../content/services";
import * as classes from "../style";
import { ServiceCard } from "./ServiceCard";

export const CloudSuiteGrid = () => {
  return (
    <section id="products-services" {...classes.suiteSectionStyle}>
      <Box {...classes.sectionEyebrowStyle}>Operon Cloud Suite</Box>
      <h2 {...classes.sectionTitleStyle}>Comprehensive Cloud Orchestration Suite</h2>
      <Box {...classes.sectionDescStyle}>
        Everything you need to ship dynamic schema content, visual logic rules,
        serverless micro-services, and zero-code analytics tagging in one console.
      </Box>

      <Box {...classes.suiteGridStyle}>
        {CLOUD_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Box>
    </section>
  );
};
