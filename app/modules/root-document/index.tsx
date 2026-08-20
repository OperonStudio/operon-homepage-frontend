import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { AuthProvider, clearToken } from "@operonstudio/auth";
import { Box, ThemeProvider, Toaster, TopProgressBar } from "@operonstudio/ui";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AnnouncementBanner } from "./components/announcement-banner";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import * as classes from "./style";

// Check if a logout action was requested across subdomains
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("logout") || urlParams.has("clear")) {
    clearToken();
    urlParams.delete("logout");
    urlParams.delete("clear");
    const newSearch = urlParams.toString();
    const newUrl =
      window.location.pathname +
      (newSearch ? `?${newSearch}` : "") +
      window.location.hash;
    window.history.replaceState({}, "", newUrl);
  }
}

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
