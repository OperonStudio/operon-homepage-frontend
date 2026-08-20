import type { NewsItem } from "./components/news-card/data";

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "data-engine-3",
    badge: "Data Engine",
    title: "Real-Time Visual Ingestion Pipeline 3.0",
    description:
      "Streamline dynamic schema collections, visual validation rules, and environment sync with zero backend code releases.",
    href: "/studio",
    gradient: "linear-gradient(135deg, #0972d3 0%, #00a8e8 100%)",
    badgeColor: "rgba(9, 114, 211, 0.15)",
    category: "Compose",
  },
  {
    id: "backend-flow-builder",
    badge: "Backend Flow",
    title: "Visual Flow Orchestrator & Codeblock Piping",
    description:
      "Wire isolated serverless functions into single high-throughput API endpoints using visual Source, Pipe, and Sink nodes.",
    href: "/studio",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    badgeColor: "rgba(99, 102, 241, 0.15)",
    category: "Codeblocks",
  },
  {
    id: "analytics-tagging-v2",
    badge: "Analytics Tagging",
    title: "No-Code Production Event Binding",
    description:
      "Point and click on live DOM elements to instrument client analytics tags instantly—no PRs, deploys, or developer cycles.",
    href: "/studio",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    badgeColor: "rgba(5, 150, 105, 0.15)",
    category: "Analytics",
  },
];
