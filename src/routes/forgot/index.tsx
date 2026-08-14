import { ForgotPasswordPage } from "#/modules/auth/forgot";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forgot/")({
  component: ForgotPasswordPage,
});
