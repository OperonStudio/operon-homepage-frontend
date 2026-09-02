import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useLoginPage } from "./hook";
import * as classes from "./style";

export const LoginPage = () => {
  const { form, handleFormChange, loading, handleLogin } = useLoginPage();
  const { email, password } = form;
  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Sign in</Box>
        <Box {...classes.authSubtitleStyle}>Sign in to your Operon account</Box>

        <form onSubmit={handleLogin} {...classes.authFormStyle}>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelStyle}>Email</Box>
            <Input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
              autoComplete="email"
              value={email}
              onChange={handleFormChange}
            />
          </Box>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelRowStyle}>
              <Box {...classes.authLabelStyle}>Password</Box>
              <Link
                to="/forgot"
                search={(prev) => prev}
                {...classes.authLinkStyle}
              >
                Forgot password?
              </Link>
            </Box>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              autoComplete="current-password"
              value={password}
              onChange={handleFormChange}
            />
          </Box>
          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={loading}
            aria-label="Sign in"
            style={{ marginTop: "4px" }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>

        <Box {...classes.authFooterStyle}>
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            search={(prev: any) => prev}
            {...classes.authLinkStyle}
          >
            Create one
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
