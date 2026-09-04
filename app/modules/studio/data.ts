import type { IconProps } from "@operonstudio/icons";
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
} from "@operonstudio/icons";

import { ANALYTICS_URL, CODEBLOCKS_URL, COMPOSE_URL } from "#/common/products";

export { ANALYTICS_URL, CODEBLOCKS_URL, COMPOSE_URL };

export interface Service {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<IconProps>;
  badge?: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Data & Content",
    services: [
      {
        name: "Collections",
        description: "Manage structured data collections and content",
        href: `${COMPOSE_URL}/projects`,
        icon: Database,
        badge: "Core",
      },
      {
        name: "Rules Engine",
        description: "Configure conditional logic and business rules",
        href: `${COMPOSE_URL}/rule-engine`,
        icon: Layers,
      },
    ],
  },
  {
    title: "Backend Orchestration",
    services: [
      {
        name: "Blocks",
        description: "Each block is an endpoint. Compose them into modules.",
        href: `${CODEBLOCKS_URL}/blocks`,
        icon: Code,
        badge: "Core",
      },
      {
        name: "Runs",
        description: "What the block endpoints did, step by step",
        href: `${CODEBLOCKS_URL}/runs`,
        icon: Workflow,
      },
      {
        name: "Calling blocks",
        description: "How to call a block from your own code",
        href: `${CODEBLOCKS_URL}/setup`,
        icon: Terminal,
      },
    ],
  },
  {
    title: "Observability",
    services: [
      {
        name: "Visual Editor",
        description: "Bind analytics events to UI elements visually",
        href: `${ANALYTICS_URL}/visual-editor`,
        icon: Eye,
        badge: "New",
      },
      {
        name: "Event Tracking",
        description: "Monitor and manage all tracked analytics events",
        href: `${ANALYTICS_URL}/visual-editor`,
        icon: Zap,
      },
      {
        name: "Dashboards",
        description: "View performance metrics and usage analytics",
        href: `${ANALYTICS_URL}/dashboard`,
        icon: BarChart3,
      },
      {
        name: "Install the SDK",
        description: "Add Operon to your app and confirm events arrive",
        href: `${ANALYTICS_URL}/setup`,
        icon: Terminal,
      },
    ],
  },
  {
    // These are the platform's, not a product's, and they are managed on this
    // page rather than inside Compose. Sending someone to Compose to add a
    // teammate meant a customer using only Analytics had to open a product they
    // were not using in order to administer the one they were.
    title: "Platform",
    services: [
      {
        name: "Workspaces & Team",
        description: "Workspaces, members and invitations",
        href: "#platform",
        icon: Boxes,
        badge: "Core",
      },
      {
        name: "Environments",
        description: "Development, staging, production and anything else",
        href: "#platform",
        icon: Globe,
      },
      {
        name: "Projects",
        description: "Your apps, and which products each one uses",
        href: "#platform",
        icon: Network,
      },
      {
        name: "Access & Keys",
        description: "Issue and revoke project API keys per environment",
        href: "#platform",
        icon: KeyRound,
      },
    ],
  },
];
