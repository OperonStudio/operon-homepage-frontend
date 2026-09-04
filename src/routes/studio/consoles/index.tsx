import { createFileRoute } from "@tanstack/react-router";
import { StudioConsoles } from "#/modules/studio";

export const Route = createFileRoute("/studio/consoles/")({
  component: StudioConsoles,
});
