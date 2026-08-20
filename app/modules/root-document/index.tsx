import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { AuthProvider } from "@operonstudio/auth";
import { Box, ThemeProvider, Toaster, TopProgressBar } from "@operonstudio/ui";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AnnouncementBanner } from "./components/announcement-banner";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import * as classes from "./style";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

const ENABLE_URL_TOKEN_BRIDGE =
  import.meta.env.VITE_ENABLE_URL_TOKEN_BRIDGE === "true" ||
  import.meta.env.DEV;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box {...classes.stickyTopContainerStyle}>
        <AnnouncementBanner />
        <SiteHeader />
      </Box>
      <Box {...classes.mainBodyWrapperStyle}>{children}</Box>
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
      <body>
        <ThemeProvider defaultDark={false}>
          <AuthProvider
            refreshUrl={`${AUTH_API_URL}/api/auth/refresh`}
            enableUrlTokenBridge={ENABLE_URL_TOKEN_BRIDGE}
          >
            <TopProgressBar />
            <Toaster />
            <RootLayout>{children}</RootLayout>

            {import.meta.env.DEV && (
              <TanStackDevtools
                config={{
                  position: "bottom-left",
                }}
                plugins={[
                  {
                    name: "TanStack Router",
                    render: <TanStackRouterDevtoolsPanel />,
                  },
                  TanStackQueryDevtools as any,
                ]}
              />
            )}
          </AuthProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
};
