import { ChevronRight } from "@operon/icons";
import { Box } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import type { NewsItem } from "../content/news";
import * as classes from "../style";

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Link to={item.href} {...classes.newsCardStyle}>
      <Box {...classes.newsCardBannerStyle} style={{ background: item.gradient }}>
        <span
          style={{
            backgroundColor: "rgba(0, 7, 22, 0.75)",
            backdropFilter: "blur(4px)",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: "var(--operon-radius-full)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {item.badge}
        </span>
      </Box>
      <Box {...classes.newsCardBodyStyle}>
        <h3 {...classes.newsCardTitleStyle}>{item.title}</h3>
        <p {...classes.newsCardDescStyle}>{item.description}</p>
        <span {...classes.newsCardLinkStyle}>
          Learn more <ChevronRight size={14} />
        </span>
      </Box>
    </Link>
  );
};
