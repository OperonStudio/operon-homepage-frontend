import { RegisterPage } from "#/modules/auth/register";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register/")({
  component: RegisterPage,
});
