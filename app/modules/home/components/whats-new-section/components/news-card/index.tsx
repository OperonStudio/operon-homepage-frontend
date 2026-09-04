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
