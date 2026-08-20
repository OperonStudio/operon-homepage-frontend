import { resolveNextRedirect, useAuth } from "@operonstudio/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loginMutationOptions } from "../api";

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

export const useLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const allowedOrigins = useAllowedRedirectOrigins();

  const { isLoggedIn, token, login } = useAuth();

  const loginMutation = useMutation(loginMutationOptions);

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

  useEffect(() => {
    if (isLoggedIn && token) {
      handleAuthenticated(token);
    }
  }, [isLoggedIn, token, handleAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginMutation.mutateAsync({ email, password });
      if (data?.token) {
        login(data.token);
        handleAuthenticated(data.token);
      }
    } catch (err: any) {
      setError(err?.message || err?.body?.error || "Failed to sign in");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading: loginMutation.isPending,
    handleLogin,
  };
};
