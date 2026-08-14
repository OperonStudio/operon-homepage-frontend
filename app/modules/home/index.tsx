import {
  BarChart3,
  Boxes,
  Check,
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
import { Box, Button } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import * as classes from "./style";

import type { IconProps } from "@operon/icons";

interface ShowcaseService {
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  product: "compose" | "codeblocks" | "analytics";
}

const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    name: "Collections",
    description: "Structured data & content",
    icon: Database,
    product: "compose",
  },
  {
    name: "Rules Engine",
    description: "Conditional business logic",
    icon: Layers,
    product: "compose",
  },
  {
    name: "Environments",
    description: "Staging & production configs",
    icon: Globe,
    product: "compose",
  },
  {
    name: "Codeblocks",
    description: "Reusable backend modules",
    icon: Code,
    product: "codeblocks",
  },
  {
    name: "Flow Builder",
    description: "Visual API orchestration",
    icon: Workflow,
    product: "codeblocks",
  },
  {
    name: "API Explorer",
    description: "Test & inspect endpoints",
    icon: Terminal,
    product: "codeblocks",
  },
  {
    name: "Visual Editor",
    description: "Bind events to UI",
    icon: Eye,
    product: "analytics",
  },
  {
    name: "Event Tracking",
    description: "Monitor analytics events",
    icon: Zap,
    product: "analytics",
  },
  {
    name: "Dashboards",
    description: "Performance metrics",
    icon: BarChart3,
    product: "analytics",
  },
  {
    name: "Workspaces",
    description: "Team collaboration",
    icon: Boxes,
    product: "compose",
  },
  {
    name: "SDK Manager",
    description: "Install & configure SDK",
    icon: Network,
    product: "compose",
  },
  {
    name: "Access & Keys",
    description: "API keys & permissions",
    icon: KeyRound,
    product: "compose",
  },
];

interface ProductSection {
  label: string;
  title: string;
  description: string;
  features: string[];
}

const PRODUCTS: ProductSection[] = [
  {
    label: "Compose",
    title: "Dynamic Data & Rules Engine",
    description:
      "Replace hardcoded frontend data with API-driven content. Let product managers change copy, images, and business logic without code releases.",
    features: [
      "Visual rule builder for conditional logic",
      "Environment-based content delivery",
      "Real-time updates without deploys",
    ],
  },
  {
    label: "Analytics",
    title: "Visual Event Binding",
    description:
      "Remove developers from analytics tagging. Marketers click elements on the live site and bind tracking events directly — no code, no PRs.",
    features: [
      "Point-and-click event configuration",
      "Works with Google Analytics & Mixpanel",
      "Zero-code tracking deployment",
    ],
  },
  {
    label: "Codeblocks",
    title: "Backend Orchestration",
    description:
      "Write tiny isolated scripts, register them as Codeblocks, and visually wire them into complex flows. One API endpoint, zero spaghetti code.",
    features: [
      "Drag-and-drop flow builder",
      "Source, Pipe, and Sink node types",
      "Single API endpoint per macro flow",
    ],
  },
];

export const HomePage = () => {
  return (
    <Box {...classes.containerStyle}>
      {/* Hero */}
      <Box {...classes.heroStyle}>
        <Box {...classes.heroEyebrowStyle}>
          The API-first Headless Orchestrator
        </Box>
        <Box {...classes.heroTitleStyle}>
          Ship without releases. Orchestrate without spaghetti.
        </Box>
        <Box {...classes.heroSubtitleStyle}>
          Operon is the zero-release layer between your frontend and your
          infrastructure. Change content, business rules, and analytics tagging
          visually. Compose backend flows from small isolated APIs. All from one
          console.
        </Box>
        <Box {...classes.heroCTAContainerStyle}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button size="lg">Get started</Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Services Showcase */}
      <Box {...classes.servicesShowcaseStyle}>
        <Box {...classes.showcaseTitleStyle}>Everything in one console</Box>
        <Box {...classes.showcaseGridStyle}>
          {SHOWCASE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to="/studio"
                aria-label={`${service.name} — ${service.description}`}
                {...classes.showcaseCardStyle}
              >
                <Box {...classes.showcaseIconStyle}>
                  <Icon size={16} />
                </Box>
                <Box {...classes.showcaseInfoStyle}>
                  <Box {...classes.showcaseCardNameStyle}>{service.name}</Box>
                  <Box {...classes.showcaseCardDescStyle}>
                    {service.description}
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>

      {/* Product Sections */}
      <Box {...classes.productsContainerStyle}>
        {PRODUCTS.map((product) => (
          <Box key={product.label} {...classes.productSectionStyle}>
            <Box {...classes.productInfoStyle}>
              <Box {...classes.productLabelStyle}>{product.label}</Box>
              <Box {...classes.productTitleStyle}>{product.title}</Box>
              <Box {...classes.productDescStyle}>{product.description}</Box>
              <Box {...classes.productFeaturesStyle}>
                {product.features.map((feature) => (
                  <Box key={feature} {...classes.productFeatureStyle}>
                    <Box {...classes.featureCheckStyle} aria-hidden>
                      <Check size={11} />
                    </Box>
                    {feature}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
