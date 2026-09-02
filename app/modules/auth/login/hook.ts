import { useAuth } from "@operonstudio/auth";
import { toast } from "@operonstudio/ui";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { loginApi, type LoginPayload } from "../api";

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
    onError: (err: any) => {
      const msg = err?.body?.message || "Failed to Login";
      toast.error(msg);
    },
  });

  const handleAuthenticated = useCallback(() => {
    const nextParam = new URLSearchParams(window.location.search).get("next");
    if (nextParam) {
      const url = new URL(nextParam, window.location.origin);
      if (url.origin !== window.location.origin) {
        window.location.replace(url.toString());
        return;
      }
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
