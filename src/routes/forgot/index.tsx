import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordPage } from "#/modules/auth/forgot/index";

export const Route = createFileRoute("/forgot/")({
	component: ForgotPasswordPage,
});
