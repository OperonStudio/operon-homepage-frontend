import { toast } from "@operonstudio/ui";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const useForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
  });

  //here will add notification service later
  const handleReset = (e: React.SubmitEvent) => {
    e.preventDefault();
    toast.success(
      "Password reset link sent! Check your email. (not implemented yet)",
    );
    navigate({ to: "/login" });
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
    handleReset,
  };
};
