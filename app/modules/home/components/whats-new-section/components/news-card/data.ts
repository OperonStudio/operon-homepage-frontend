export interface NewsItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
  badgeColor: string;
  category: "Compose" | "Codeblocks" | "Analytics";
}
