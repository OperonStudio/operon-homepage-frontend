import { Database, Eye, Workflow } from "@operonstudio/icons";

export const megaMenuSections = [
  {
    header: "Compose Engine",
    title: "Collections",
    description: "Structured content & schemas",
    to: "/studio",
    Icon: Database,
  },
  {
    header: "Codeblocks Flow",
    title: "Flow Builder",
    description: "Visual micro-service piping",
    to: "/studio",
    Icon: Workflow,
  },
  {
    header: "Analytics Suite",
    title: "Visual Tagging",
    description: "Click live elements to bind tags",
    to: "/studio",
    Icon: Eye,
  },
];

export const mobileProductLinks = [
  { label: "Compose Engine & Schemas", to: "/studio", Icon: Database },
  { label: "Codeblocks Flow Builder", to: "/studio", Icon: Workflow },
  { label: "Analytics & Visual Tagging", to: "/studio", Icon: Eye },
];

export const mainNavLinks = [
  { label: "Solutions", to: "/studio" },
  { label: "Pricing", to: "/studio" },
  { label: "Resources", to: "/studio" },
  { label: "Docs", to: "/studio" },
];
