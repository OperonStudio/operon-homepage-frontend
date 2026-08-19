import { resolveNextRedirect, useAuth } from "@operonstudio/auth";
import { Box, Button, Input } from "@operonstudio/ui";
import { Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as classes from "./style";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

/**
 * Origins that the homepage is willing to hand a JWT off to via `?next=`.
 * Populated from the cross-app env vars — do NOT accept an arbitrary URL here
 * or you introduce an open-redirect + token-leak vulnerability.
 */
function useAllowedRedirectOrigins(): string[] {
  return useMemo(() => {
    const origins = [
      import.meta.env.VITE_HOMEPAGE_URL,
      import.meta.env.VITE_COMPOSE_URL,
      import.meta.env.VITE_CODEBLOCKS_URL,
      import.meta.env.VITE_ANALYTICS_URL,
    ]
      .filter((v): v is string => typeof v === "string" && v.length > 0)
      .map((v) => {
        try {
          return new URL(v).origin;
        } catch {
          return null;
        }
      })
      .filter((v): v is string => v !== null);
    return Array.from(new Set(origins));
  }, []);
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const allowedOrigins = useAllowedRedirectOrigins();

  const { isLoggedIn, token, login } = useAuth();

  const handleAuthenticated = useCallback(
    (jwt: string) => {
      const redirect = resolveNextRedirect(jwt, allowedOrigins);
      if (redirect) {
        window.location.replace(redirect);
        return;
      }
      navigate({ to: "/studio", replace: true });
    },
    [allowedOrigins, navigate],
  );

  // Already-authenticated users hitting /login (e.g. via SSO redirect loop):
  // honor any `?next=` and hand them straight off.
  useEffect(() => {
    if (isLoggedIn && token) {
      handleAuthenticated(token);
    }
  }, [isLoggedIn, token, handleAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${AUTH_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to sign in");
      }

      login(data.token);
      handleAuthenticated(data.token);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box {...classes.authContainerStyle}>
      <Box {...classes.authCardStyle}>
        <Box {...classes.authTitleStyle}>Sign in</Box>
        <Box {...classes.authSubtitleStyle}>Sign in to your Operon account</Box>

        {error && <Box {...classes.authErrorStyle}>{error}</Box>}

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
