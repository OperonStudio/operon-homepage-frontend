import { createFileRoute } from "@tanstack/react-router";
import { StudioTeam } from "#/modules/studio";

export const Route = createFileRoute("/studio/team/")({
  component: StudioTeam,
});
