import { Command, Menu, Search, X } from "@operonstudio/icons";
import { Box, Button } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { SearchCommandPalette } from "../search-command-palette";
import { DesktopAuth } from "./components/desktop-auth";
import { ProductsMegaMenu } from "./components/mega-menu";
import { MobileDrawer } from "./components/mobile-drawer";
import { mainNavLinks } from "./data";
import { useSiteHeader } from "./hook";
import * as classes from "./style";

export const SiteHeader = () => {
  const {
    isLoggedIn,
    isSearchOpen,
    isMobileMenuOpen,
    openSearch,
    closeSearch,
    toggleMobileMenu,
    closeMobileMenu,
    handleLogout,
  } = useSiteHeader();

  return (
    <>
      <Box {...classes.headerStyle}>
        <Box {...classes.headerLeftStyle}>
          <Link to="/" {...classes.logoStyle} aria-label="Operon Homepage">
            <img
              src="/operon-lockup.svg"
              alt="Operon"
              height="26"
              style={{ display: "block" }}
            />
          </Link>

          <nav aria-label="Main Navigation">
            <ul {...classes.navListStyle}>
              {/* Products Mega Menu with click toggle & click outside close */}
              <ProductsMegaMenu />

              {/* Navigation Links */}
              {mainNavLinks.map((link) => (
                <li key={link.label} {...classes.navItemStyle}>
                  <Link to={link.to} {...classes.navButtonLinkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Box>

        {/* Right Section: Search & Auth */}
        <Box {...classes.headerRightStyle}>
          <Button
            variant="outline"
            size="sm"
            onClick={openSearch}
            {...classes.searchTriggerStyle}
            aria-label="Search documentation and services"
          >
            <Search size={14} />
            <span {...classes.searchSpanStyle}>Search</span>
            <span {...classes.keyhintBadgeStyle}>
              <Command size={10} />K
            </span>
          </Button>

          <DesktopAuth isLoggedIn={isLoggedIn} onLogout={handleLogout} />

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            {...classes.mobileMenuToggleStyle}
            style={{ padding: "6px", minWidth: "auto" }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </Box>

        {/* Mobile Navigation Drawer */}
        <MobileDrawer
          isOpen={isMobileMenuOpen}
          isLoggedIn={isLoggedIn}
          onClose={closeMobileMenu}
          onLogout={handleLogout}
        />
      </Box>

      <SearchCommandPalette isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};
