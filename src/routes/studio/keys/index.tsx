import { createFileRoute } from "@tanstack/react-router";
import { StudioKeys } from "#/modules/studio";

export const Route = createFileRoute("/studio/keys/")({
  component: StudioKeys,
});
