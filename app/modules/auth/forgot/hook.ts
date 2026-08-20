import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const useForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  //here will add notification service later 
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Password reset link sent! Check your email.");
    navigate({ to: "/login" });
  };

  return {
    email,
    setEmail,
    handleReset,
  };
};
