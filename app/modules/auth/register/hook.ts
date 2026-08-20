import { useAuth } from "@operonstudio/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { registerMutationOptions } from "../api";

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLoggedIn } = useAuth();

  const registerMutation = useMutation(registerMutationOptions);

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
    setError("");

    try {
      await registerMutation.mutateAsync({ name, email, password });

      if (typeof window !== "undefined") {
        window.location.assign(loginHref);
      }
    } catch (err: any) {
      setError(err?.message || err?.body?.error || "Failed to register");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading: registerMutation.isPending,
    nextParam,
    handleRegister,
  };
};
