import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useForgotPasswordPage } from "./hook";
import * as classes from "./style";

export const ForgotPasswordPage = () => {
  const { email, setEmail, handleReset } = useForgotPasswordPage();

  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Reset Password</Box>
        <Box {...classes.authSubtitleStyle}>
          Enter your email to receive a reset link
        </Box>

        <form onSubmit={handleReset} {...classes.authFormStyle}>
          <Box {...classes.authFieldStyle}>
            <Box {...classes.authLabelStyle}>Email</Box>
            <Input
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            size="lg"
            fullWidth
            style={{ marginTop: "4px" }}
          >
            Send Reset Link
          </Button>
        </form>

        <Box {...classes.authFooterStyle}>
          Remembered your password?{" "}
          <Link to="/login" {...classes.authLinkStyle}>
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
