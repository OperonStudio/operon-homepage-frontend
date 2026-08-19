import { TopProgressBar } from "#/components/top-progress-bar";
import { AppThemeProvider } from "#/contexts/theme";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { AuthProvider, extractTokenFromURL } from "@operonstudio/auth";
import { Box, Toaster } from "@operonstudio/ui";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

// Extract token synchronously before TanStack Router mounts and strips it
if (typeof window !== "undefined") {
  extractTokenFromURL();
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
      <SiteFooter />
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
