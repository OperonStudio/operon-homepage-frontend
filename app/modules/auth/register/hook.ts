import { useAuth } from "@operonstudio/auth";
import { toast } from "@operonstudio/ui";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { registerApi, type RegisterPayload } from "../api";

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isLoggedIn } = useAuth();

  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) => registerApi(data),
    onSuccess: () => {
      navigate({ to: "/studio", replace: true });
      toast.success("Register Successful");
    },
    onError: (err: any) => {
      const msg = err?.body?.message || "Failed to Register";
      toast.error(msg);
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate({ to: "/studio", replace: true });
    }
  }, [isLoggedIn, navigate]);

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
