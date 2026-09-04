import { createFileRoute } from "@tanstack/react-router";
import { StudioEnvironments } from "#/modules/studio";

export const Route = createFileRoute("/studio/environments/")({
  component: StudioEnvironments,
});
