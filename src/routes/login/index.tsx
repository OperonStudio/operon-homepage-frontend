import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "#/modules/auth/login/index";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});
