import { Box } from "@operon/ui";
import { NEWS_ITEMS } from "../content/news";
import * as classes from "../style";
import { NewsCard } from "./NewsCard";

export const WhatsNewSection = () => {
  return (
    <section id="whats-new" {...classes.whatsNewSectionStyle}>
      <Box {...classes.sectionEyebrowStyle}>Featured News & Launches</Box>
      <h2 {...classes.sectionTitleStyle}>Discover what&apos;s happening on Operon</h2>
      <Box {...classes.sectionDescStyle}>
        Catch up on the latest cloud orchestrator releases, visual rules updates, and
        no-code telemetry features.
      </Box>

      <Box {...classes.newsGridStyle}>
        {NEWS_ITEMS.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </Box>
    </section>
  );
};
