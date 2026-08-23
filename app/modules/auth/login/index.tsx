import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useLoginPage } from "./hook";
import * as classes from "./style";

export const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    // error,
    loading,
    handleLogin,
  } = useLoginPage();

  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Sign in</Box>
        <Box {...classes.authSubtitleStyle}>Sign in to your Operon account</Box>

        {/* {error && <Box {...classes.authErrorStyle}>{error}</Box>} */}

        <form onSubmit={handleLogin} {...classes.authFormStyle}>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelStyle}>Email</Box>
            <Input
              type="email"
              placeholder="name@company.com"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelRowStyle}>
              <Box {...classes.authLabelStyle}>Password</Box>
              <Link to="/forgot" {...classes.authLinkStyle}>
                Forgot password?
              </Link>
            </Box>
            <Input
              type="password"
              placeholder="••••••••"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Link to="/register" {...classes.authLinkStyle}>
            Create one
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
