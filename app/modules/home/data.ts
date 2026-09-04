import {
  BarChart3,
  Code,
  Database,
  Eye,
  FolderKanban,
  Globe,
  KeyRound,
  Layers,
  Network,
  ScrollText,
  ShieldCheck,
  Terminal,
  Variable,
  Workflow,
} from "@operonstudio/icons";
import type { ComponentType } from "react";

/**
 * Every word on the marketing page lives here.
 *
 * The sections read it rather than carrying their own copy, so a claim appears
 * once and the page cannot end up describing the same product two ways.
 */

interface IconProps {
  size?: number;
}
type Icon = ComponentType<IconProps>;

export const HERO = {
  title: "Change the product without shipping a release",
  body: "Operon is the layer between your frontend and your infrastructure. Content, targeting rules, backend flows and analytics stop being things you deploy and become things you edit. One console, one set of projects and environments, three products that share them.",
  primaryCta: { label: "Get started free", to: "/register" },
  secondaryCta: { label: "Explore Studio", to: "/studio" },
  metrics: [
    { value: "<10ms", label: "Median execution latency" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "40+", label: "Global edge regions" },
  ],
} as const;

/**
 * The argument the page rests on. Each row is a change somebody actually asks
 * for, and what it costs when the only way to make it is a release.
 */
export const RELEASE_COST = {
  title: "Small changes should not cost a release",
  body: "A price of copy, a country-specific offer, one more tracked button. None of them change your architecture, and all of them queue behind the same pipeline.",
  rows: [
    {
      change: "Reword a pricing page",
      pipeline: "Pull request, review, build, deploy",
      cost: "Hours to days",
      operon: "Edit in Compose",
    },
    {
      change: "Show a different offer in Spain",
      pipeline: "Feature flag, release, clean-up ticket",
      cost: "Days",
      operon: "One rule in Compose",
    },
    {
      change: "Add an endpoint that joins two services",
      pipeline: "New service, CI, infrastructure review",
      cost: "Days to weeks",
      operon: "A flow in Codeblocks",
    },
    {
      change: "Track a new button",
      pipeline: "SDK call, QA, app release",
      cost: "A release cycle",
      operon: "Bind it in Analytics",
    },
  ],
} as const;

export interface ProductSpec {
  key: "compose" | "codeblocks" | "analytics";
  name: string;
  tagline: string;
  audience: string;
  body: string;
  icon: Icon;
  capabilities: { icon: Icon; title: string; body: string }[];
  /** A before-and-after of the same change, drawn as two paths. */
  flow: {
    caption: string;
    before: { label: string; steps: string[]; duration: string };
    after: { label: string; steps: string[]; duration: string };
  };
}

export const PRODUCTS: ProductSpec[] = [
  {
    key: "compose",
    name: "Compose",
    tagline: "A content store with a rule engine attached",
    audience: "For product and marketing",
    body: "Model your content as collections, then decide who sees which version with rules written against real request context. The copy and the condition live together, so shipping a variant is not a code change.",
    icon: Database,
    capabilities: [
      {
        icon: Layers,
        title: "Collections",
        body: "Structured models with typed fields, versioned per environment.",
      },
      {
        icon: Variable,
        title: "Rule engine",
        body: "Target on locale, device, cohort or anything you put in context.",
      },
      {
        icon: Globe,
        title: "Delivery API",
        body: "One read call per page, answered from the edge.",
      },
    ],
    flow: {
      caption: "Changing the copy a Spanish visitor sees",
      before: {
        label: "Without Operon",
        steps: ["Edit code", "Review", "Build", "Deploy"],
        duration: "Hours",
      },
      after: {
        label: "With Compose",
        steps: ["Edit entry", "Publish"],
        duration: "<10ms",
      },
    },
  },
  {
    key: "codeblocks",
    name: "Codeblocks",
    tagline: "Backend flows composed from small, reusable blocks",
    audience: "For backend engineers",
    body: "Wire single-purpose blocks into a graph and expose the whole thing as one endpoint. A block does one job and is reused across flows, so the glue service you would have written stops being a service you have to run.",
    icon: Code,
    capabilities: [
      {
        icon: Workflow,
        title: "Visual flows",
        body: "Sources, pipes and sinks connected into one endpoint.",
      },
      {
        icon: Terminal,
        title: "Run history",
        body: "Every execution recorded, with its input and its output.",
      },
      {
        icon: Network,
        title: "Reusable blocks",
        body: "Write a block once, call it from any flow in the workspace.",
      },
    ],
    flow: {
      caption: "Adding an endpoint that joins two upstream services",
      before: {
        label: "Without Operon",
        steps: ["New service", "CI", "Infra review", "Deploy"],
        duration: "Days",
      },
      after: {
        label: "With Codeblocks",
        steps: ["Wire blocks", "Publish"],
        duration: "<12ms",
      },
    },
  },
  {
    key: "analytics",
    name: "Analytics",
    tagline: "Bind events to live interface elements",
    audience: "For product and data",
    body: "Open your running application inside the visual inspector, click the element you care about and name the event. No SDK call to write, no release to wait for, and the binding survives because it is stored against the element, not the build.",
    icon: BarChart3,
    capabilities: [
      {
        icon: Eye,
        title: "Visual inspector",
        body: "Point at a live element and attach an event to it.",
      },
      {
        icon: ScrollText,
        title: "Trackers",
        body: "Every bound event in one list, editable without a deploy.",
      },
      {
        icon: BarChart3,
        title: "Dashboards",
        body: "Usage and performance read back in the same console.",
      },
    ],
    flow: {
      caption: "Tracking a button you forgot to instrument",
      before: {
        label: "Without Operon",
        steps: ["Add SDK call", "QA", "App release"],
        duration: "A cycle",
      },
      after: {
        label: "With Analytics",
        steps: ["Click element", "Name event"],
        duration: "<5ms",
      },
    },
  },
];

/** What the three products share, which is the reason they are one platform. */
export const PLATFORM = {
  title: "One platform underneath all three",
  body: "The products are separate consoles, not separate accounts. They read the same workspaces, the same projects and the same environments, so a change is scoped the same way wherever you make it.",
  items: [
    {
      icon: FolderKanban,
      title: "Workspaces and projects",
      body: "One registry of projects, and which products each one uses.",
    },
    {
      icon: Globe,
      title: "Environments",
      body: "Development, staging, production and anything else you need.",
    },
    {
      icon: KeyRound,
      title: "Scoped API keys",
      body: "Issued per project per environment, revocable on their own.",
    },
    {
      icon: Terminal,
      title: "One SDK",
      body: "Install once and every product reaches your app through it.",
    },
  ],
} as const;

export const TRUST = {
  title: "Access you can account for",
  body: "Everything is scoped through the workspace, so permission is a property of the account rather than a setting on each product.",
  items: [
    {
      icon: ShieldCheck,
      title: "Roles that mean something",
      body: "Owner, editor and viewer, enforced on the server for every route.",
    },
    {
      icon: KeyRound,
      title: "Keys stored as hashes",
      body: "A key is shown once when minted. We keep only its hash.",
    },
    {
      icon: Network,
      title: "Membership by invitation",
      body: "Invitations are explicit, expire, and can be revoked before use.",
    },
  ],
} as const;

export const CLOSING = {
  title: "Start with one project",
  body: "Create a workspace, add a project and turn on the products you need. The rest can wait until you want them.",
  primaryCta: { label: "Get started free", to: "/register" },
  secondaryCta: { label: "Sign in", to: "/login" },
} as const;
