import { useAuth } from "@operonstudio/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loginMutationOptions } from "../api";
import { toast } from "@operonstudio/ui";

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

  const allowedOrigins = useAllowedRedirectOrigins();

  const { isLoggedIn, refresh } = useAuth();

  const loginMutation = useMutation(loginMutationOptions);

  const handleAuthenticated = useCallback(() => {
    if (typeof window !== "undefined") {
      const next = new URLSearchParams(window.location.search).get("next");
      if (next) {
        try {
          const url = new URL(next, window.location.origin);
          if (
            url.origin === window.location.origin ||
            allowedOrigins.includes(url.origin)
          ) {
            window.location.replace(url.toString());
            return;
          }
        } catch {
          // ignore invalid URLs
        }
      }
    }
    navigate({ to: "/studio", replace: true });
  }, [allowedOrigins, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      handleAuthenticated();
    }
  }, [isLoggedIn, handleAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError("");

    try {
      const data = await loginMutation.mutateAsync({ email, password });
      if (data) {
        await refresh();
        handleAuthenticated();
      }
    } catch (err: any) {
      toast.error(err?.message || err?.body?.error || "Failed to sign in");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    // error,
    loading: loginMutation.isPending,
    handleLogin,
  };
};
