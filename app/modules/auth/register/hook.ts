import { useAuth } from "@operonstudio/auth";
import { toast } from "@operonstudio/ui";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import type { ApiError } from "#/common/interface";
import { readNextUrl } from "#/lib/next-url";
import { type RegisterPayload, registerApi } from "../api";

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isLoggedIn, refresh } = useAuth();

  const handleAuthenticated = useCallback(() => {
    const next = readNextUrl();
    if (next) {
      window.location.replace(next);
      return;
    }
    navigate({ to: "/studio", replace: true });
  }, [navigate]);

  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) => registerApi(data),
    onSuccess: async () => {
      // Register signs the user in, so re-read the session before leaving for
      // a product surface — otherwise its auth guard bounces them to login.
      await refresh();
      handleAuthenticated();
      toast.success("Register Successful");
    },
    onError: (err: ApiError) => {
      toast.error(err.body?.message || err.message || "Failed to register");
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
