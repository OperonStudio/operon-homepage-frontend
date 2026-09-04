import { createFileRoute } from "@tanstack/react-router";
import { StudioOverview } from "#/modules/studio";

export const Route = createFileRoute("/studio/")({
  component: StudioOverview,
});
