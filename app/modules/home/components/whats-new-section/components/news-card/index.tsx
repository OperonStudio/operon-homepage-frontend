import { ChevronRight } from "@operonstudio/icons";
import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import type { NewsItem } from "./data";
import { useNewsCard } from "./hook";
import * as classes from "./style";

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard = ({ item }: NewsCardProps) => {
  const { item: newsItem } = useNewsCard(item);

  return (
    <Link to={newsItem.href} {...classes.newsCardStyle}>
      {/* <Box {...classes.newsCardBannerStyle} style={{ background: newsItem.gradient }}>
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
          {newsItem.badge}
        </span>
      </Box> */}
      <Box {...classes.newsCardBodyStyle}>
        <h3 {...classes.newsCardTitleStyle}>{newsItem.title}</h3>
        <p {...classes.newsCardDescStyle}>{newsItem.description}</p>
        <span {...classes.newsCardLinkStyle}>
          Learn more <ChevronRight size={14} />
        </span>
      </Box>
    </Link>
  );
};
