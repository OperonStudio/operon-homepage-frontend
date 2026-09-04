import { createFileRoute } from "@tanstack/react-router";
import { StudioProjects } from "#/modules/studio";

export const Route = createFileRoute("/studio/projects/")({
  component: StudioProjects,
});
