import { useAuth } from "@operonstudio/auth";
import { toast } from "@operonstudio/ui";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import type { ApiError } from "#/common/interface";
import { readNextUrl } from "#/lib/next-url";
import { type LoginPayload, loginApi } from "../api";

export const useLoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isLoggedIn, refresh } = useAuth();

  const loginMutation = useMutation({
    mutationFn: (data: LoginPayload) => loginApi(data),
    onSuccess: async () => {
      await refresh();
      handleAuthenticated();
      toast.success("Login Successful");
    },
    onError: (err: ApiError) => {
      toast.error(err.body?.message || err.message || "Failed to log in");
    },
  });

  const handleAuthenticated = useCallback(() => {
    const next = readNextUrl();
    if (next) {
      window.location.replace(next);
      return;
    }
    navigate({ to: "/studio", replace: true });
  }, [navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      handleAuthenticated();
    }
  }, [isLoggedIn, handleAuthenticated]);

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();

    loginMutation.mutate(form);
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
    loading: loginMutation.isPending,
    handleLogin,
  };
};
