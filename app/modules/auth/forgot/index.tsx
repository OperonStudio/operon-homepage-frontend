import { Box, Button, Input } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { useForgotPasswordPage } from "./hook";
import * as classes from "./style";

export const ForgotPasswordPage = () => {
  const { form, handleFormChange, handleReset } = useForgotPasswordPage();
  const { email } = form;
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
              name="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={handleFormChange}
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
