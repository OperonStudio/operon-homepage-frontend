import { ChevronDown, Command, Database, Eye, Search, Workflow } from "@operon/icons";
import { useAuth } from "@operon/auth";
import { Box, Button } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as classes from "../style";
import { SearchCommandPalette } from "./SearchCommandPalette";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

export const SiteHeader = () => {
  const { isLoggedIn, logout } = useAuth();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Box {...classes.headerStyle}>
        <Box {...classes.headerLeftStyle}>
          <Link to="/" {...classes.logoStyle} aria-label="Operon Homepage">
            <img src="/operon-lockup.svg" alt="Operon" height="26" style={{ display: "block" }} />
          </Link>

          <nav aria-label="Main Navigation">
            <ul {...classes.navListStyle}>
              {/* Products Mega-Menu */}
              <li
                {...classes.navItemStyle}
                onMouseEnter={() => setActiveMenu("products")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button type="button" {...classes.navButtonLinkStyle}>
                  Products <ChevronDown size={14} />
                </button>
                {activeMenu === "products" && (
                  <Box {...classes.megaMenuContainerStyle}>
                    {/* Compose Column */}
                    <Box {...classes.megaMenuColStyle}>
                      <Box {...classes.megaMenuHeaderStyle}>Compose Engine</Box>
                      <Link to="/studio" {...classes.megaMenuItemStyle}>
                        <Box {...classes.megaMenuIconStyle}>
                          <Database size={16} />
                        </Box>
                        <Box {...classes.megaMenuTextGroupStyle}>
                          <span {...classes.megaMenuTitleStyle}>Collections</span>
                          <span {...classes.megaMenuDescStyle}>
                            Structured content & schemas
                          </span>
                        </Box>
                      </Link>
                    </Box>

                    {/* Codeblocks Column */}
                    <Box {...classes.megaMenuColStyle}>
                      <Box {...classes.megaMenuHeaderStyle}>Codeblocks Flow</Box>
                      <Link to="/studio" {...classes.megaMenuItemStyle}>
                        <Box {...classes.megaMenuIconStyle}>
                          <Workflow size={16} />
                        </Box>
                        <Box {...classes.megaMenuTextGroupStyle}>
                          <span {...classes.megaMenuTitleStyle}>Flow Builder</span>
                          <span {...classes.megaMenuDescStyle}>
                            Visual micro-service piping
                          </span>
                        </Box>
                      </Link>
                    </Box>

                    {/* Analytics Column */}
                    <Box {...classes.megaMenuColStyle}>
                      <Box {...classes.megaMenuHeaderStyle}>Analytics Suite</Box>
                      <Link to="/studio" {...classes.megaMenuItemStyle}>
                        <Box {...classes.megaMenuIconStyle}>
                          <Eye size={16} />
                        </Box>
                        <Box {...classes.megaMenuTextGroupStyle}>
                          <span {...classes.megaMenuTitleStyle}>Visual Tagging</span>
                          <span {...classes.megaMenuDescStyle}>
                            Click live elements to bind tags
                          </span>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                )}
              </li>

              {/* Solutions Link */}
              <li {...classes.navItemStyle}>
                <Link to="/studio" {...classes.navButtonLinkStyle}>
                  Solutions
                </Link>
              </li>

              {/* Pricing Link */}
              <li {...classes.navItemStyle}>
                <Link to="/studio" {...classes.navButtonLinkStyle}>
                  Pricing
                </Link>
              </li>

              {/* Resources Link */}
              <li {...classes.navItemStyle}>
                <Link to="/studio" {...classes.navButtonLinkStyle}>
                  Resources
                </Link>
              </li>

              {/* Docs Link */}
              <li {...classes.navItemStyle}>
                <Link to="/studio" {...classes.navButtonLinkStyle}>
                  Docs
                </Link>
              </li>
            </ul>
          </nav>
        </Box>

        {/* Right Section: Search & Auth */}
        <Box {...classes.headerRightStyle}>
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            {...classes.searchTriggerStyle}
            aria-label="Search documentation and services"
          >
            <Search size={14} />
            <span>Search</span>
            <span {...classes.keyhintBadgeStyle}>
              <Command size={10} />K
            </span>
          </button>

          {isLoggedIn ? (
            <>
              <Link to="/studio" {...classes.linkStyle}>
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
              <Link to="/login" {...classes.linkStyle}>
                Sign in
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button size="sm">Get started free</Button>
              </Link>
            </>
          )}
        </Box>
      </Box>

      <SearchCommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
