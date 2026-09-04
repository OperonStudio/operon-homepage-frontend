import { RequireAuth, useAuth } from "@operonstudio/auth";
import {
  BarChart3,
  Boxes,
  Code,
  Database,
  Globe,
  KeyRound,
  LayoutDashboard,
  Network,
  User,
} from "@operonstudio/icons";
import {
  AppShell,
  type AppShellNavGroup,
  type AppShellProduct,
  Box,
  ScopeSwitcher,
} from "@operonstudio/ui";
import { Link, useLocation } from "@tanstack/react-router";
import { ANALYTICS_URL, CODEBLOCKS_URL, COMPOSE_URL } from "#/common/products";
import { usePlatform } from "../platform/hooks";

const PRODUCTS: AppShellProduct[] = [
  {
    key: "compose",
    label: "Compose",
    description: "Content and rules",
    url: COMPOSE_URL,
    icon: <Database size={16} />,
  },
  {
    key: "codeblocks",
    label: "Codeblocks",
    description: "Backend orchestration",
    url: CODEBLOCKS_URL,
    icon: <Code size={16} />,
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Event tracking",
    url: ANALYTICS_URL,
    icon: <BarChart3 size={16} />,
  },
];

const NAV = [
  { href: "/studio", label: "Overview", icon: LayoutDashboard },
  { href: "/studio/projects", label: "Projects", icon: Network },
  { href: "/studio/environments", label: "Environments", icon: Globe },
  { href: "/studio/keys", label: "API keys", icon: KeyRound },
  { href: "/studio/team", label: "Team", icon: User },
  { href: "/studio/consoles", label: "Consoles", icon: Boxes },
];

/**
 * The shell every Studio section renders inside.
 *
 * Studio was one page that stacked every panel down a single column, which read
 * as a settings form rather than a console and gave a workspace with a few
 * projects several screens of scrolling. The sections are routes now, so the
 * sidebar says where you are and each screen is about one thing.
 *
 * The scope switcher lives in the sidebar header, the same place and the same
 * component the product consoles use, because it answers the same question
 * here as it does there.
 */
export const StudioShell = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const platform = usePlatform();

  const navGroups: AppShellNavGroup[] = [
    {
      key: "platform",
      title: "Platform",
      items: NAV.map((item) => {
        const Icon = item.icon;
        // Exact match for the index, prefix for the rest, or Overview stays
        // highlighted on every child route.
        const isActive =
          item.href === "/studio"
            ? location.pathname === "/studio" ||
              location.pathname === "/studio/"
            : location.pathname.startsWith(item.href);
        return {
          key: item.href,
          label: item.label,
          icon: <Icon size={16} />,
          href: item.href,
          isActive,
          render: ({
            href,
            className,
            children: content,
            "aria-current": ac,
          }) => (
            <Link to={href} className={className} aria-current={ac}>
              {content}
            </Link>
          ),
        };
      }),
    },
  ];

  return (
    <RequireAuth
      homepageUrl=""
      fallback={
        <Box style={{ padding: 40, textAlign: "center" }}>Loading…</Box>
      }
    >
      <AppShell
        productKey="homepage"
        products={PRODUCTS}
        navGroups={navGroups}
        homepageUrl="/"
        sidebarHeader={
          <Box style={{ padding: "8px 8px 10px" }}>
            <ScopeSwitcher
              isLoading={platform.isLoading}
              levels={[
                {
                  label: "Workspace",
                  value: platform.workspaceId,
                  options: platform.workspaces,
                  onChange: platform.setWorkspaceId,
                  onCreate: platform.createWorkspace,
                  isCreating: platform.isBusy,
                },
                {
                  label: "Environment",
                  value: platform.environmentId,
                  options: platform.environments,
                  onChange: platform.setEnvironmentId,
                  onCreate: platform.createEnvironment,
                  isCreating: platform.isBusy,
                  placeholder: "No environment",
                },
              ]}
            />
          </Box>
        }
        user={
          user
            ? {
                name: user.name || user.email || "Signed in",
                email: user.email,
              }
            : undefined
        }
        onSignOut={async () => {
          await logout();
          window.location.href = "/";
        }}
        onSwitchProduct={(product) => {
          window.location.href = product.url;
          return true;
        }}
      >
        {children}
      </AppShell>
    </RequireAuth>
  );
};
