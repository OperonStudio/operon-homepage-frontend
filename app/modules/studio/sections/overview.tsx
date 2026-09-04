import {
  Avatar,
  Box,
  DeltaPill,
  MetricHeadline,
  Panel,
  PanelRow,
  SegmentedControl,
  StatTile,
} from "@operonstudio/ui";
import { BarChart3, ChevronRight, Code, Database } from "@operonstudio/icons";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Product } from "../platform/api";
import { usePlatform } from "../platform/hooks";
import * as classes from "./overview.style";

const PRODUCT_META: Record<Product, { label: string; icon: React.ReactNode }> =
  {
    compose: { label: "Compose", icon: <Database size={16} /> },
    codeblocks: { label: "Codeblocks", icon: <Code size={16} /> },
    analytics: { label: "Analytics", icon: <BarChart3 size={16} /> },
  };

const ALL_PRODUCTS: Product[] = ["compose", "codeblocks", "analytics"];

/** A project with no `products` predates the field and counts for all three. */
const productsOf = (products?: Product[]) =>
  products && products.length > 0 ? products : ALL_PRODUCTS;

/** Avatar takes a fallback node, so the initial is derived here. */
const initialOf = (member: { name?: string; email: string }) =>
  (member.name || member.email).charAt(0).toUpperCase();

const share = (part: number, total: number) =>
  total === 0 ? "0%" : `${Math.round((part / total) * 100)}%`;

export const StudioOverview = () => {
  const platform = usePlatform();
  const [scope, setScope] = useState<"projects" | "keys">("projects");

  const workspace = platform.workspaces.find(
    (w) => w.id === platform.workspaceId,
  );

  const projects = platform.projects;
  const totalKeys = platform.keyGroups.reduce(
    (sum, group) => sum + group.keys.length,
    0,
  );

  // How many projects have each product switched on. This is the one number a
  // workspace owner cannot get anywhere else in the console.
  const adoption = ALL_PRODUCTS.map((product) => {
    const count = projects.filter((p) =>
      productsOf(p.products).includes(product),
    ).length;
    return { product, count };
  }).sort((a, b) => b.count - a.count);

  const configured = projects.filter(
    (p) => productsOf(p.products).length === ALL_PRODUCTS.length,
  ).length;

  const owners = platform.members.filter((m) => m.role === "owner").length;

  return (
    <Box {...classes.pageStyle}>
      <Box {...classes.headerRowStyle}>
        <Box {...classes.memberChipsStyle}>
          {platform.members.slice(0, 3).map((member) => (
            <span key={member.id} {...classes.memberChipStyle}>
              <Avatar size="sm" fallback={initialOf(member)} />
              {member.name || member.email}
            </span>
          ))}
          {platform.members.length > 3 && (
            <span {...classes.memberChipStyle}>
              +{platform.members.length - 3} more
            </span>
          )}
        </Box>
        <SegmentedControl
          label="Overview scope"
          value={scope}
          onChange={setScope}
          options={[
            { value: "projects", label: "Projects" },
            { value: "keys", label: "API keys" },
          ]}
        />
      </Box>

      <h1 {...classes.titleStyle}>{workspace?.name ?? "Studio"}</h1>

      <Box {...classes.leadRowStyle}>
        <MetricHeadline
          label={scope === "projects" ? "Projects" : "API keys"}
          value={scope === "projects" ? projects.length : totalKeys}
          deltas={
            <>
              <DeltaPill>
                {share(configured, projects.length)} full stack
              </DeltaPill>
              <DeltaPill tone="neutral">
                {platform.environments.length} environments
              </DeltaPill>
            </>
          }
          meta={
            workspace
              ? `Created ${new Date(workspace.createdAt).toLocaleDateString(
                  undefined,
                  { day: "numeric", month: "short", year: "numeric" },
                )}`
              : undefined
          }
        />

        <Box {...classes.tileRowStyle}>
          <StatTile
            label="Members"
            value={platform.members.length}
            footer={
              <span {...classes.tileMetaStyle}>
                {owners} {owners === 1 ? "owner" : "owners"}
              </span>
            }
          />
          <StatTile
            tone="inverse"
            label="Pending invites"
            value={platform.invitations.length}
            footer={
              <Link to="/studio/team" {...classes.tileLinkStyle}>
                Manage <ChevronRight size={13} />
              </Link>
            }
          />
          <StatTile
            label="Environments"
            value={platform.environments.length}
            footer={
              <span {...classes.tileMetaStyle}>
                {platform.environments[0]?.name ?? "None yet"}
              </span>
            }
          />
          <StatTile
            tone={totalKeys === 0 ? "outlined" : "plain"}
            label="API keys"
            value={totalKeys}
            footer={
              <Link to="/studio/keys" {...classes.tileLinkStyle}>
                Manage <ChevronRight size={13} />
              </Link>
            }
          />
        </Box>
      </Box>

      <Box {...classes.gridStyle}>
        <Panel
          title="Product adoption"
          caption="Projects with each product switched on."
        >
          {adoption.map(({ product, count }) => (
            <PanelRow
              key={product}
              icon={PRODUCT_META[product].icon}
              label={PRODUCT_META[product].label}
              value={count}
              meta={share(count, projects.length)}
            />
          ))}
        </Panel>

        <Panel
          title="Projects"
          action={
            <Link to="/studio/projects" {...classes.panelLinkStyle}>
              All projects <ChevronRight size={13} />
            </Link>
          }
        >
          {projects.length === 0 ? (
            <Box {...classes.emptyStyle}>
              No projects yet. Create one to get started.
            </Box>
          ) : (
            projects
              .slice(0, 4)
              .map((project) => (
                <PanelRow
                  key={project.id}
                  label={project.name}
                  value={productsOf(project.products).length}
                  meta="products"
                />
              ))
          )}
        </Panel>

        <Panel
          title="Team"
          action={
            <Link to="/studio/team" {...classes.panelLinkStyle}>
              Manage <ChevronRight size={13} />
            </Link>
          }
        >
          {platform.members.length === 0 ? (
            <Box {...classes.emptyStyle}>No members yet.</Box>
          ) : (
            platform.members
              .slice(0, 4)
              .map((member) => (
                <PanelRow
                  key={member.id}
                  icon={<Avatar size="sm" fallback={initialOf(member)} />}
                  label={member.name || member.email}
                  meta={member.role}
                />
              ))
          )}
        </Panel>
      </Box>
    </Box>
  );
};
