import { Box } from "@operonstudio/ui";
import { CLOUD_SERVICES } from "../content/services";
import * as classes from "../style";
import { ServiceCard } from "./ServiceCard";

const CATEGORIES = ["Compose", "Codeblocks", "Analytics"] as const;

export const CloudSuiteGrid = () => {
  return (
    <section id="products-services" {...classes.suiteSectionStyle}>
      <Box {...classes.sectionEyebrowStyle}>Operon Cloud Suite</Box>
      <h2 {...classes.sectionTitleStyle}>Comprehensive Cloud Orchestration Suite</h2>
      <Box {...classes.sectionDescStyle}>
        Everything you need to ship dynamic schema content, visual logic rules,
        serverless micro-services, and zero-code analytics tagging in one console.
      </Box>

      {CATEGORIES.map((category) => {
        const categoryServices = CLOUD_SERVICES.filter(
          (s) => s.category === category,
        );
        return (
          <Box key={category} {...classes.suiteCategoryBlockStyle}>
            <Box {...classes.suiteCategoryRailStyle}>
              <span {...classes.suiteCategoryLabelStyle}>{category}</span>
              <span {...classes.suiteCategoryLineStyle} aria-hidden="true" />
            </Box>
            <Box {...classes.suiteGridStyle}>
              {categoryServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Box>
          </Box>
        );
      })}
    </section>
  );
};
