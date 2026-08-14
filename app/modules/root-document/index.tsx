import { TopProgressBar } from "#/components/top-progress-bar";
import { AppThemeProvider } from "#/contexts/theme";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { css } from "@morph-css/kit";
import { AuthProvider, extractTokenFromURL, useAuth } from "@operon/auth";
import { Box, Button, Toaster } from "@operon/ui";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Link, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "var(--operon-topbar-height)",
  backgroundColor: "var(--operon-color-surface)",
  borderBottom: "1px solid var(--operon-color-border)",
  position: "sticky",
  top: 0,
  zIndex: "var(--operon-z-topbar)",
});

const footerStyle = css({
  display: "flex",
  justifyContent: "center",
  padding: "24px",
  backgroundColor: "var(--operon-color-surface)",
  borderTop: "1px solid var(--operon-color-border)",
  color: "var(--operon-color-text-muted)",
  fontSize: "12px",
});

const logoStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  textDecoration: "none",
  letterSpacing: "-0.005em",
});

const logoMarkStyle = css({
  width: "24px",
  height: "24px",
  borderRadius: "var(--operon-radius-sm)",
  backgroundColor: "var(--operon-color-primary)",
  color: "var(--operon-color-text-inverse)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: "700",
});

const linkStyle = css({
  color: "var(--operon-color-text)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
});

// Extract token synchronously before TanStack Router mounts and strips it
if (typeof window !== "undefined") {
  extractTokenFromURL();
}

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <Box {...headerStyle}>
        <Link to="/" {...logoStyle}>
          <span {...logoMarkStyle} aria-hidden>
            O
          </span>
          Operon
        </Link>
        <Box style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {isLoggedIn ? (
            <>
              <Link to="/studio" {...linkStyle}>
                Studio
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => logout(`${AUTH_API_URL}/api/auth/logout`)}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" {...linkStyle}>
                Sign in
              </Link>
              <Link to="/register">
                <Button size="sm">Get started</Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
      <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
      <Box {...footerStyle}>
        &copy; {new Date().getFullYear()} Operon &middot; The API-first Headless
        Orchestrator
      </Box>
    </>
  );
}

export const RootDocument = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--operon-color-background)",
        }}
      >
        <AuthProvider refreshUrl={`${AUTH_API_URL}/api/auth/refresh`}>
          <AppThemeProvider>
            <TopProgressBar />
            <Toaster />
            <RootLayout>{children}</RootLayout>
          </AppThemeProvider>
        </AuthProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
};
