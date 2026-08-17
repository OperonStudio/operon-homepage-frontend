import type { IconProps } from "@operon/icons";
import {
  BarChart3,
  Boxes,
  Code,
  Database,
  Eye,
  Globe,
  KeyRound,
  Layers,
  Network,
  Terminal,
  Workflow,
  Zap,
} from "@operon/icons";

export interface CloudService {
  id: string;
  name: string;
  category: "Compose" | "Codeblocks" | "Analytics";
  description: string;
  icon: React.ComponentType<IconProps>;
  badge?: string;
  href: string;
}

export const CLOUD_SERVICES: CloudService[] = [
  // Compose Category
  {
    id: "collections",
    name: "Collections",
    category: "Compose",
    description: "Structured data models & API-driven content schemas.",
    icon: Database,
    badge: "Core",
    href: "/studio",
  },
  {
    id: "rules-engine",
    name: "Rules Engine",
    category: "Compose",
    description: "Visual conditional logic & dynamic business rules.",
    icon: Layers,
    href: "/studio",
  },
  {
    id: "environments",
    name: "Environments",
    category: "Compose",
    description: "Multi-stage preview, staging, and production configs.",
    icon: Globe,
    href: "/studio",
  },
  {
    id: "workspaces",
    name: "Workspaces",
    category: "Compose",
    description: "Team collaboration, role policies, and workspace isolation.",
    icon: Boxes,
    href: "/studio",
  },

  // Codeblocks Category
  {
    id: "flow-builder",
    name: "Flow Builder",
    category: "Codeblocks",
    description: "Visual API orchestration with Source, Pipe, and Sink nodes.",
    icon: Workflow,
    badge: "Popular",
    href: "/studio",
  },
  {
    id: "codeblocks-fn",
    name: "Codeblocks",
    category: "Codeblocks",
    description: "Isolated serverless script modules with instant execution.",
    icon: Code,
    href: "/studio",
  },
  {
    id: "api-explorer",
    name: "API Explorer",
    category: "Codeblocks",
    description: "Test endpoints, mock payloads, and debug execution logs.",
    icon: Terminal,
    href: "/studio",
  },
  {
    id: "edge-deploy",
    name: "Edge Deploy",
    category: "Codeblocks",
    description: "Global low-latency deployment across 40+ regions.",
    icon: Network,
    href: "/studio",
  },

  // Analytics Category
  {
    id: "visual-editor",
    name: "Visual Tagging",
    category: "Analytics",
    description: "Click live DOM elements on production sites to bind tags.",
    icon: Eye,
    badge: "New",
    href: "/studio",
  },
  {
    id: "event-tracking",
    name: "Event Pipelines",
    category: "Analytics",
    description: "Stream metrics to GA, Mixpanel, and custom webhooks.",
    icon: Zap,
    href: "/studio",
  },
  {
    id: "dashboards",
    name: "Dashboards",
    category: "Analytics",
    description: "Real-time telemetry, error tracking, and throughput stats.",
    icon: BarChart3,
    href: "/studio",
  },
  {
    id: "access-keys",
    name: "Access & Keys",
    category: "Analytics",
    description: "Granular RBAC, secret rotation, and short-lived tokens.",
    icon: KeyRound,
    href: "/studio",
  },
];
