import { useAuth } from "@operonstudio/auth";
import { toast } from "@operonstudio/ui";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { registerApi, type RegisterPayload } from "../api";

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isLoggedIn } = useAuth();

  const handleAuthenticated = useCallback(() => {
    const nextParam = new URLSearchParams(window.location.search).get("next");
    if (nextParam) {
      try {
        const url = new URL(nextParam, window.location.origin);
        window.location.replace(url.toString());
        return;
      } catch {
        // Fall through to default navigation on malformed next param.
      }
    }
    navigate({ to: "/studio", replace: true });
  }, [navigate]);

  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) => registerApi(data),
    onSuccess: () => {
      handleAuthenticated();
      toast.success("Register Successful");
    },
    onError: (err: any) => {
      const msg = err?.body?.message || "Failed to Register";
      toast.error(msg);
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      handleAuthenticated();
    }
  }, [isLoggedIn, handleAuthenticated]);

  const handleRegister = (e: React.SubmitEvent) => {
    e.preventDefault();
    registerMutation.mutate(form);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    form,
    handleFormChange,
    loading: registerMutation.isPending,
    handleRegister,
  };
};
