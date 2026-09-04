import { toast } from "@operonstudio/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  getActiveScope,
  getServerScope,
  setActiveEnvironmentId,
  setActiveWorkspaceId,
  subscribeToScope,
} from "./active-scope";
import {
  apiKeysQuery,
  createEnvironmentMutation,
  createProjectMutation,
  createWorkspaceMutation,
  deleteEnvironmentMutation,
  deleteProjectMutation,
  environmentsQuery,
  invitationsQuery,
  inviteMemberMutation,
  type MintedKey,
  membersQuery,
  mintKeyMutation,
  type Product,
  platformKeys,
  projectsQuery,
  revokeInvitationMutation,
  revokeKeyMutation,
  updateProjectProductsMutation,
  workspacesQuery,
} from "./api";

/**
 * Everything Studio's platform console needs.
 *
 * One hook rather than one per panel because they all key off the same selected
 * workspace and environment, and a second copy of that selection is a second
 * thing to keep in step. It is called from the shell and from the section being
 * viewed at the same time, so the selection comes from a store outside React
 * rather than component state, which would give each caller its own.
 */
export function usePlatform() {
  const qc = useQueryClient();

  const { workspaceId, environmentId } = useSyncExternalStore(
    subscribeToScope,
    getActiveScope,
    getServerScope,
  );

  // Plaintext keys minted in this session, by key id. They exist here and
  // nowhere else; the server stores only a hash.
  const [minted, setMinted] = useState<Record<string, string>>({});

  const { data: workspaces = [], isLoading: workspacesLoading } =
    useQuery(workspacesQuery);

  // A remembered id can name a workspace the user has since been removed from.
  // Every request built from it would then fail with nothing on screen saying
  // why, so it is resolved against what actually exists.
  const activeWorkspaceId =
    workspaces.find((w) => w.id === workspaceId)?.id ?? workspaces[0]?.id ?? "";

  useEffect(() => {
    if (activeWorkspaceId && activeWorkspaceId !== workspaceId) {
      setActiveWorkspaceId(activeWorkspaceId);
    }
  }, [activeWorkspaceId, workspaceId]);

  const { data: environments = [] } = useQuery(
    environmentsQuery(activeWorkspaceId),
  );
  const { data: projects = [] } = useQuery(projectsQuery(activeWorkspaceId));
  const { data: members = [] } = useQuery(membersQuery(activeWorkspaceId));
  const { data: invitations = [] } = useQuery(
    invitationsQuery(activeWorkspaceId),
  );

  const activeEnvironmentId =
    environments.find((e) => e.id === environmentId)?.id ??
    environments[0]?.id ??
    "";

  useEffect(() => {
    if (activeEnvironmentId && activeEnvironmentId !== environmentId) {
      setActiveEnvironmentId(activeEnvironmentId);
    }
  }, [activeEnvironmentId, environmentId]);

  const { data: keyGroups = [] } = useQuery(
    apiKeysQuery(activeWorkspaceId, activeEnvironmentId),
  );

  const invalidate = (key: readonly unknown[]) =>
    qc.invalidateQueries({ queryKey: key });

  // ── Writes ───────────────────────────────────────────────────────────────

  const createWorkspace = useMutation({
    ...createWorkspaceMutation,
    onSuccess: (ws) => {
      setActiveWorkspaceId(ws.id);
      invalidate(platformKeys.workspaces());
      toast.success(`Workspace "${ws.name}" created`);
    },
    onError: () => toast.error("Could not create the workspace"),
  });

  const createEnvironment = useMutation({
    ...createEnvironmentMutation(activeWorkspaceId),
    onSuccess: (env) => {
      invalidate(platformKeys.environments(activeWorkspaceId));
      toast.success(`Environment "${env.name}" created`);
    },
    onError: () => toast.error("Could not create the environment"),
  });

  const deleteEnvironment = useMutation({
    ...deleteEnvironmentMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.environments(activeWorkspaceId));
      toast.success("Environment deleted");
    },
    onError: () => toast.error("Could not delete the environment"),
  });

  const createProject = useMutation({
    ...createProjectMutation(activeWorkspaceId),
    onSuccess: (project) => {
      invalidate(platformKeys.projects(activeWorkspaceId));
      toast.success(`Project "${project.name}" created`);
    },
    onError: () => toast.error("Could not create the project"),
  });

  const updateProducts = useMutation({
    ...updateProjectProductsMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.projects(activeWorkspaceId));
      toast.success("Products updated");
    },
    onError: () => toast.error("Could not update the products"),
  });

  const deleteProject = useMutation({
    ...deleteProjectMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.projects(activeWorkspaceId));
      toast.success("Project deleted");
    },
    onError: () => toast.error("Could not delete the project"),
  });

  const mintKey = useMutation({
    ...mintKeyMutation(activeWorkspaceId),
    onSuccess: (key: MintedKey) => {
      setMinted((prev) => ({ ...prev, [key.id]: key.plaintextValue }));
      invalidate(platformKeys.apiKeys(activeWorkspaceId, key.environment));
      toast.success("Key created. Copy it now — it is not shown again.");
    },
    onError: () => toast.error("Could not create the key"),
  });

  const revokeKey = useMutation({
    ...revokeKeyMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.apiKeys(activeWorkspaceId, activeEnvironmentId));
      toast.success("Key revoked");
    },
    onError: () => toast.error("Could not revoke the key"),
  });

  const inviteMember = useMutation({
    ...inviteMemberMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.invitations(activeWorkspaceId));
      toast.success("Invitation sent");
    },
    onError: () => toast.error("Could not send the invitation"),
  });

  const revokeInvitation = useMutation({
    ...revokeInvitationMutation(activeWorkspaceId),
    onSuccess: () => {
      invalidate(platformKeys.invitations(activeWorkspaceId));
      toast.success("Invitation revoked");
    },
    onError: () => toast.error("Could not revoke the invitation"),
  });

  return {
    isLoading: workspacesLoading,

    workspaces,
    workspaceId: activeWorkspaceId,
    setWorkspaceId: setActiveWorkspaceId,

    environments,
    environmentId: activeEnvironmentId,
    setEnvironmentId: setActiveEnvironmentId,

    projects,
    members,
    invitations,
    keyGroups,
    minted,

    createWorkspace: (name: string) => createWorkspace.mutate(name),
    createEnvironment: (name: string) => createEnvironment.mutate(name),
    deleteEnvironment: (id: string) => deleteEnvironment.mutate(id),
    createProject: (name: string, products: Product[]) =>
      createProject.mutate({ name, products }),
    setProjectProducts: (projectId: string, products: Product[]) =>
      updateProducts.mutate({ projectId, products }),
    deleteProject: (id: string) => deleteProject.mutate(id),
    mintKey: (projectId: string) =>
      mintKey.mutate({ projectId, environmentId: activeEnvironmentId }),
    revokeKey: (projectId: string, keyId: string) =>
      revokeKey.mutate({ projectId, keyId }),
    inviteMember: (email: string, role: string) =>
      inviteMember.mutate({ email, role }),
    revokeInvitation: (id: string) => revokeInvitation.mutate(id),

    isBusy:
      createWorkspace.isPending ||
      createEnvironment.isPending ||
      createProject.isPending ||
      mintKey.isPending,
  };
}
