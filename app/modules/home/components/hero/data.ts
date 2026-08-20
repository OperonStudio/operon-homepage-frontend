export interface HeroCardData {
  id: string;
  title: string;
  badge: string;
  legacyLabel: string;
  operonLabel: string;
  legacyNodes: string[];
  operonNodes: string[];
  legacyDuration: string;
  operonDuration: string;
}

export const HERO_CARDS: HeroCardData[] = [
  {
    id: "rule-engine",
    title: "Rule Engine",
    badge: "Dynamic Routing",
    legacyLabel: "Traditional",
    operonLabel: "Operon",
    legacyNodes: ["PR", "Build", "Deploy"],
    operonNodes: ["Rule Change", "Edge Sync"],
    legacyDuration: "~15 min",
    operonDuration: "<10ms",
  },
  {
    id: "codeblocks",
    title: "Codeblocks",
    badge: "Serverless Flows",
    legacyLabel: "Traditional",
    operonLabel: "Operon",
    legacyNodes: ["API Dev", "SDK Release", "App Update"],
    operonNodes: ["Visual Block", "Instant Push"],
    legacyDuration: "~2 days",
    operonDuration: "<12ms",
  },
  {
    id: "analytics",
    title: "Zero-Code Analytics",
    badge: "Edge Dispatch",
    legacyLabel: "Traditional",
    operonLabel: "Operon",
    legacyNodes: ["GTM Tag", "Client Release", "SDK Bloat"],
    operonNodes: ["Event Rule", "Zero-Code Tag"],
    legacyDuration: "~1 day",
    operonDuration: "<5ms",
  },
];

export const HERO_METRICS = [
  { value: "<10ms", label: "Median execution latency" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "40+", label: "Global edge regions" },
] as const;
