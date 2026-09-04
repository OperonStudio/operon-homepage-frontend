import { Menu, X } from "@operonstudio/icons";
import {
  Box,
  Button,
  OperonLockup,
} from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { DesktopAuthButtons } from "./components/desktop-auth";
import { ProductsMegaMenu } from "./components/mega-menu";
import { MobileDrawer } from "./components/mobile-drawer";
import { mainNavLinks } from "./data";
import { useSiteHeader } from "./hook";
import * as classes from "./style";

export const SiteHeader = () => {
  const {
    isLoggedIn,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleLogout,
  } = useSiteHeader();

  return (
    <Box {...classes.headerStyle}>
      <Box {...classes.headerLeftStyle}>
        <Link to="/" {...classes.logoStyle} aria-label="Operon Homepage">
          <OperonLockup height={26} />
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
        <DesktopAuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />

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
  );
};
