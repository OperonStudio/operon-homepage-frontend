import { createFileRoute, Outlet } from "@tanstack/react-router";
import { StudioShell } from "#/modules/studio";

export const Route = createFileRoute("/studio")({
  component: () => (
    <StudioShell>
      <Outlet />
    </StudioShell>
  ),
});
