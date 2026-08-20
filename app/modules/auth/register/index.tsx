import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useRegisterPage } from "./hook";
import * as classes from "./style";

export const RegisterPage = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    nextParam,
    handleRegister,
  } = useRegisterPage();

  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Create your account</Box>
        <Box {...classes.authSubtitleStyle}>Start building with Operon</Box>

        {error && <Box {...classes.authErrorStyle}>{error}</Box>}

        <form onSubmit={handleRegister} {...classes.authFormStyle}>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelStyle}>Full name</Box>
            <Input
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
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
            <Box {...classes.authLabelStyle}>Password</Box>
            <Input
              type="password"
              placeholder="At least 8 characters"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={loading}
            aria-label="Create account"
            style={{ marginTop: "4px" }}
          >
            {loading ? "Creating account…" : "Create account"}
          </Button>
        </form>

        <Box {...classes.authFooterStyle}>
          Already have an account?{" "}
          <Link
            to="/login"
            search={nextParam ? { next: nextParam } : undefined}
            {...classes.authLinkStyle}
          >
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
