import { createFileRoute } from "@tanstack/react-router";
import { StudioPage } from "#/modules/studio";

export const Route = createFileRoute("/studio/")({
	component: StudioPage,
});
