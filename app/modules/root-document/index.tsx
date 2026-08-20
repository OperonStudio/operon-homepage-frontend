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
            refreshUrl="/api/auth/refresh"
            enableUrlTokenBridge={true}
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
