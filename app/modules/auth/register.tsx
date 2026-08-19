import { useAuth } from "@operonstudio/auth";
import { Box, Button, Input } from "@operonstudio/ui";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as classes from "./style";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useAuth();

  // Preserve the `?next=` query param when we hop over to /login so the SSO
  // redirect target survives the registration → login round-trip.
  const nextParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("next")
      : null;
  const loginHref = nextParam
    ? `/login?next=${encodeURIComponent(nextParam)}`
    : "/login";

  useEffect(() => {
    if (isLoggedIn) {
      navigate({ to: "/studio", replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${AUTH_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to register");
      }

      // Route to /login preserving ?next= — user signs in fresh with the new creds.
      if (typeof window !== "undefined") {
        window.location.assign(loginHref);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <Link to={loginHref} {...classes.authLinkStyle}>
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
