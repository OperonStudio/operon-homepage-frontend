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
import type { IconProps } from "@operonstudio/icons";

export const COMPOSE_URL =
  import.meta.env.VITE_COMPOSE_URL ?? "http://localhost:4000";
export const CODEBLOCKS_URL =
  import.meta.env.VITE_CODEBLOCKS_URL ?? "http://localhost:4002";
export const ANALYTICS_URL =
  import.meta.env.VITE_ANALYTICS_URL ?? "http://localhost:4003";

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
      {
        name: "Environments",
        description: "Manage staging, production, and custom environments",
        href: `${COMPOSE_URL}/environments`,
        icon: Globe,
      },
    ],
  },
  {
    title: "Backend Orchestration",
    services: [
      {
        name: "Codeblocks",
        description: "Build reusable backend logic modules",
        href: `${CODEBLOCKS_URL}/codeblocks`,
        icon: Code,
      },
      {
        name: "Flow Builder",
        description: "Visually wire and orchestrate API flows",
        href: `${CODEBLOCKS_URL}/codeblocks`,
        icon: Workflow,
        badge: "Popular",
      },
      {
        name: "API Explorer",
        description: "Test and inspect your Operon API endpoints",
        href: `${CODEBLOCKS_URL}/marketplace`,
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
    ],
  },
  {
    title: "Infrastructure",
    services: [
      {
        name: "Workspaces",
        description: "Organize projects and team collaboration",
        href: `${COMPOSE_URL}/projects`,
        icon: Boxes,
        badge: "Core",
      },
      {
        name: "SDK Manager",
        description: "Install and configure the Operon SDK",
        href: `${COMPOSE_URL}/api-keys`,
        icon: Network,
      },
      {
        name: "Access & Keys",
        description: "Manage API keys and access permissions",
        href: `${COMPOSE_URL}/api-keys`,
        icon: KeyRound,
      },
    ],
  },
];
