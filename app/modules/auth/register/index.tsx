import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useRegisterPage } from "./hook";
import * as classes from "./style";

export const RegisterPage = () => {
  const { form, loading, handleRegister, handleFormChange } = useRegisterPage();
  const { email, name, password } = form;
  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Create your account</Box>
        <Box {...classes.authSubtitleStyle}>Start building with Operon</Box>

        <form onSubmit={handleRegister} {...classes.authFormStyle}>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelStyle}>Full name</Box>
            <Input
              type="text"
              name="name"
              placeholder="Jane Doe"
              required
              autoComplete="name"
              value={name}
              onChange={handleFormChange}
            />
          </Box>
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
            <Box {...classes.authLabelStyle}>Password</Box>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              autoComplete="new-password"
              value={password}
              onChange={handleFormChange}
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
          <Link to="/login" {...classes.authLinkStyle}>
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
