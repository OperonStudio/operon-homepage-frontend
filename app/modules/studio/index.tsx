import { useAuth } from "@operon/auth";
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
  Search,
  Terminal,
  Workflow,
  Zap,
} from "@operon/icons";
import { Box } from "@operon/ui";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import * as classes from "./style";

import type { IconProps } from "@operon/icons";

const COMPOSE_URL = import.meta.env.VITE_COMPOSE_URL ?? "http://localhost:4000";
const CODEBLOCKS_URL =
  import.meta.env.VITE_CODEBLOCKS_URL ?? "http://localhost:4002";
const ANALYTICS_URL =
  import.meta.env.VITE_ANALYTICS_URL ?? "http://localhost:4003";

interface Service {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Data & Content",
    services: [
      {
        name: "Collections",
        description: "Manage structured data collections and content",
        href: `${COMPOSE_URL}/projects`,
        icon: Database,
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

export const StudioPage = () => {
  const { token, isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate({ to: "/login" });
    }
  }, [isLoading, isLoggedIn, navigate]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SERVICE_CATEGORIES;
    const q = searchQuery.toLowerCase();
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      services: cat.services.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.services.length > 0);
  }, [searchQuery]);

  if (isLoading || !isLoggedIn) {
    return <Box style={{ padding: "40px", textAlign: "center" }}>Loading…</Box>;
  }

  const buildHref = (baseHref: string): string => {
    if (!token) return baseHref;
    try {
      const url = new URL(baseHref);
      url.searchParams.set("token", token);
      return url.toString();
    } catch {
      // Relative URL fallback
      const sep = baseHref.includes("?") ? "&" : "?";
      return `${baseHref}${sep}token=${encodeURIComponent(token)}`;
    }
  };

  return (
    <Box {...classes.studioContainerStyle}>
      <Box {...classes.studioInnerStyle}>
        <Box {...classes.studioHeaderStyle}>
          <Box {...classes.studioTitleStyle}>Operon Studio</Box>
          <Box {...classes.studioSubtitleStyle}>
            Choose a service to jump into
          </Box>
          <Box {...classes.searchContainerStyle}>
            <Box {...classes.searchIconStyle}>
              <Search size={14} />
            </Box>
            <input
              {...classes.searchInputStyle}
              type="text"
              placeholder="Search services…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search services"
            />
          </Box>
        </Box>

        {filteredCategories.length === 0 && (
          <Box {...classes.noResultsStyle}>
            No services match &ldquo;{searchQuery}&rdquo;
          </Box>
        )}

        {filteredCategories.map((category) => (
          <Box key={category.title} {...classes.categorySectionStyle}>
            <Box {...classes.categoryHeaderStyle}>
              <Box {...classes.categoryTitleStyle}>{category.title}</Box>
            </Box>
            <Box {...classes.servicesGridStyle}>
              {category.services.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.name}
                    href={buildHref(service.href)}
                    aria-label={`${service.name} — ${service.description}`}
                    {...classes.serviceLinkStyle}
                  >
                    <Box {...classes.serviceCardStyle}>
                      <Box {...classes.serviceIconStyle}>
                        <Icon size={16} />
                      </Box>
                      <Box {...classes.serviceInfoStyle}>
                        <Box {...classes.serviceTitleStyle}>{service.name}</Box>
                        <Box {...classes.serviceDescStyle}>
                          {service.description}
                        </Box>
                      </Box>
                    </Box>
                  </a>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
