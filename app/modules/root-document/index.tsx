import { AuthProvider } from "@operonstudio/auth";
import {
  Box,
  ThemeProvider,
  Toaster,
  TopProgressBar,
  themeBootScript,
} from "@operonstudio/ui";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { isDev } from "#/lib";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { AnnouncementBanner } from "./components/announcement-banner";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import * as classes from "./style";

function RootLayout({ children }: { children: React.ReactNode }) {
  // Studio brings its own shell: a sidebar, a topbar and a user menu. Wrapping
  // it in the marketing site's chrome as well stacked two headers on top of
  // each other and put a pricing nav above a console.
  const { pathname } = useLocation();
  const isConsole = pathname === "/studio" || pathname.startsWith("/studio/");

  if (isConsole) return <>{children}</>;

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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: themeBootScript }}
        />
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <TopProgressBar />
            <Toaster />
            <RootLayout>{children}</RootLayout>
            {isDev && (
              <TanStackDevtools
                config={{
                  position: "bottom-left",
                }}
                plugins={[
                  {
                    name: "TanStack Router",
                    render: <TanStackRouterDevtoolsPanel />,
                  },
                  TanStackQueryDevtools,
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
