import { useAuth } from "@operonstudio/auth";
import { useEffect, useState } from "react";

export const useSiteHeader = () => {
  const { isLoggedIn, logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    closeMobileMenu();
    logout();
  };

  return {
    isLoggedIn,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleLogout,
  };
};
