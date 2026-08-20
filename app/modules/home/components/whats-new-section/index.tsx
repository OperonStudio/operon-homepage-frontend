import { Box } from "@operonstudio/ui";
import { NewsCard } from "./components/news-card";
import { useWhatsNewSection } from "./hook";
import * as classes from "./style";

export const WhatsNewSection = () => {
  const { newsItems } = useWhatsNewSection();

  return (
    <section id="whats-new" {...classes.whatsNewSectionStyle}>
      <Box {...classes.sectionEyebrowStyle}>Featured News & Launches</Box>
      <h2 {...classes.sectionTitleStyle}>
        Discover what&apos;s happening on Operon
      </h2>
      <Box {...classes.sectionDescStyle}>
        Catch up on the latest cloud orchestrator releases, visual rules
        updates, and no-code telemetry features.
      </Box>

      <Box {...classes.newsGridStyle}>
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </Box>
    </section>
  );
};
