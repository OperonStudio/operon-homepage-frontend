import { Box, Button } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import * as classes from "../../style";

interface DesktopAuthProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const DesktopAuthButtons = ({ isLoggedIn, onLogout }: DesktopAuthProps) => {
  return (
    <Box {...classes.desktopAuthStyle}>
      {isLoggedIn ? (
        <>
          <Link to="/studio" {...classes.linkStyle}>
            Studio
          </Link>
          <Button variant="outline" size="sm" onClick={onLogout}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <Link to="/login" {...classes.linkStyle}>
            Sign in
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button size="sm">Get started</Button>
          </Link>
        </>
      )}
    </Box>
  );
};
