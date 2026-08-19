import { Box, Button, Input } from "@operonstudio/ui";
import { Link, useNavigate } from "@tanstack/react-router";
import * as classes from "./style";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Password reset link sent! Check your email.");
    navigate({ to: "/login" });
  };

  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Reset Password</Box>
        <Box {...classes.authSubtitleStyle}>
          Enter your email to receive a reset link
        </Box>

        <form
          onSubmit={handleReset}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--operon-color-text)",
              }}
            >
              Email
            </Box>
            <Input type="email" placeholder="name@company.com" required />
          </Box>
          <Button type="submit" size="lg" style={{ marginTop: "8px" }}>
            Send Reset Link
          </Button>
        </form>

        <Box
          style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "var(--operon-color-text-muted)",
          }}
        >
          Remembered your password?{" "}
          <Link
            to="/login"
            style={{
              color: "var(--operon-color-primary)",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Sign In
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
