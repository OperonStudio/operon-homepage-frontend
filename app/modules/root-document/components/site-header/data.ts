import { BarChart3, Code, Database } from "@operonstudio/icons";

/**
 * The products menu points at the sections of the marketing page rather than
 * at placeholder routes. Every entry here resolves to something that exists.
 */
export const megaMenuSections = [
  {
    header: "Compose",
    title: "Content and rules",
    description: "A content store with a rule engine attached",
    to: "/",
    hash: "compose",
    Icon: Database,
  },
  {
    header: "Codeblocks",
    title: "Backend flows",
    description: "Flows composed from small, reusable blocks",
    to: "/",
    hash: "codeblocks",
    Icon: Code,
  },
  {
    header: "Analytics",
    title: "Event binding",
    description: "Bind events to live interface elements",
    to: "/",
    hash: "analytics",
    Icon: BarChart3,
  },
];

export const mobileProductLinks = [
  { label: "Compose", to: "/", hash: "compose", Icon: Database },
  { label: "Codeblocks", to: "/", hash: "codeblocks", Icon: Code },
  { label: "Analytics", to: "/", hash: "analytics", Icon: BarChart3 },
];

/**
 * Deliberately short. Every other link this carried pointed at /studio, which
 * made four different promises and kept none of them.
 */
export const mainNavLinks = [{ label: "Studio", to: "/studio" }];
