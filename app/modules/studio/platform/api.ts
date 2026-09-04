import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { apiClient } from "#/lib";

/**
 * The platform API: the records every Operon product shares.
 *
 * Workspaces, environments, projects, members, invitations and API keys used to
 * be created and managed inside Compose, which made a customer who wanted only
 * Analytics set up a product they were not using. They are served by this
 * service now, and Studio is where they are managed, so there is one place to
 * add a teammate rather than one per console.
 */
const P = "/api";

export const PlatformEndpoints = {
  WORKSPACES: `${P}/workspaces`,
  WORKSPACE: (workspaceId: string) => `${P}/workspaces/${workspaceId}`,
  MEMBERS: (workspaceId: string) => `${P}/workspaces/${workspaceId}/members`,
  ENVIRONMENTS: (workspaceId: string) =>
    `${P}/workspaces/${workspaceId}/environments`,
  ENVIRONMENT: (workspaceId: string, environmentId: string) =>
    `${P}/workspaces/${workspaceId}/environments/${environmentId}`,
  PROJECTS: (workspaceId: string) => `${P}/workspaces/${workspaceId}/projects`,
  PROJECT: (workspaceId: string, projectId: string) =>
    `${P}/workspaces/${workspaceId}/projects/${projectId}`,
  API_KEYS: (workspaceId: string, environmentId: string) =>
    `${P}/workspaces/${workspaceId}/api-keys?environment=${environmentId}`,
  MINT_KEY: (workspaceId: string, projectId: string, environmentId: string) =>
    `${P}/workspaces/${workspaceId}/api-keys/${projectId}?environment=${environmentId}`,
  REVOKE_KEY: (workspaceId: string, projectId: string, keyId: string) =>
    `${P}/workspaces/${workspaceId}/api-keys/${projectId}/${keyId}`,
  INVITATIONS: (workspaceId: string) =>
    `${P}/workspaces/${workspaceId}/invitations`,
  INVITATION: (workspaceId: string, invitationId: string) =>
    `${P}/workspaces/${workspaceId}/invitations/${invitationId}`,
} as const;

export const platformKeys = {
  workspaces: () => ["platform", "workspaces"] as const,
  members: (workspaceId: string) =>
    ["platform", workspaceId, "members"] as const,
  environments: (workspaceId: string) =>
    ["platform", workspaceId, "environments"] as const,
  projects: (workspaceId: string) =>
    ["platform", workspaceId, "projects"] as const,
  apiKeys: (workspaceId: string, environmentId: string) =>
    ["platform", workspaceId, "api-keys", environmentId] as const,
  invitations: (workspaceId: string) =>
    ["platform", workspaceId, "invitations"] as const,
} as const;

// ── Shapes ──────────────────────────────────────────────────────────────────

export interface Workspace {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
}

export interface Environment {
  id: string;
  name: string;
}

/** The product consoles a project has been set up for. */
export type Product = "compose" | "analytics" | "codeblocks";

export const PRODUCTS: { value: Product; label: string }[] = [
  { value: "compose", label: "Compose" },
  { value: "analytics", label: "Analytics" },
  { value: "codeblocks", label: "Codeblocks" },
];

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  description?: string | null;
  /** Absent means every product, not none: projects predate this field. */
  products?: Product[];
  createdAt: string;
}

export interface Member {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Invitation {
  id: string;
  workspaceId: string;
  email: string;
  role: string;
  status?: string;
  createdAt: string;
  expiresAt?: string;
}

export interface ApiKey {
  id: string;
  projectId: string;
  environment: string;
  name: string;
  prefix: string;
  createdAt: string;
}

export interface ProjectKeys {
  id: string;
  name: string;
  keys: ApiKey[];
}

/**
 * A freshly minted key.
 *
 * `plaintextValue` exists in this response and nowhere else. The stored form is
 * a hash, so a key that is not copied now cannot be recovered — only replaced.
 */
export interface MintedKey {
  id: string;
  projectId: string;
  environment: string;
  prefix: string;
  plaintextValue: string;
}

// ── Reads ───────────────────────────────────────────────────────────────────

export const workspacesQuery = queryOptions({
  queryKey: platformKeys.workspaces(),
  queryFn: async () =>
    await apiClient.get<Workspace[]>(PlatformEndpoints.WORKSPACES),
});

export const membersQuery = (workspaceId: string) =>
  queryOptions({
    queryKey: platformKeys.members(workspaceId),
    queryFn: async () =>
      await apiClient.get<Member[]>(PlatformEndpoints.MEMBERS(workspaceId)),
    enabled: Boolean(workspaceId),
  });

export const environmentsQuery = (workspaceId: string) =>
  queryOptions({
    queryKey: platformKeys.environments(workspaceId),
    queryFn: async () =>
      await apiClient.get<Environment[]>(
        PlatformEndpoints.ENVIRONMENTS(workspaceId),
      ),
    enabled: Boolean(workspaceId),
  });

export const projectsQuery = (workspaceId: string) =>
  queryOptions({
    queryKey: platformKeys.projects(workspaceId),
    queryFn: async () =>
      await apiClient.get<Project[]>(PlatformEndpoints.PROJECTS(workspaceId)),
    enabled: Boolean(workspaceId),
  });

export const apiKeysQuery = (workspaceId: string, environmentId: string) =>
  queryOptions({
    queryKey: platformKeys.apiKeys(workspaceId, environmentId),
    queryFn: async () =>
      await apiClient.get<ProjectKeys[]>(
        PlatformEndpoints.API_KEYS(workspaceId, environmentId),
      ),
    enabled: Boolean(workspaceId && environmentId),
  });

export const invitationsQuery = (workspaceId: string) =>
  queryOptions({
    queryKey: platformKeys.invitations(workspaceId),
    queryFn: async () =>
      await apiClient.get<Invitation[]>(
        PlatformEndpoints.INVITATIONS(workspaceId),
      ),
    enabled: Boolean(workspaceId),
  });

// ── Writes ──────────────────────────────────────────────────────────────────

export const createWorkspaceMutation = mutationOptions({
  mutationFn: async (name: string) =>
    await apiClient.post<Workspace>(PlatformEndpoints.WORKSPACES, { name }),
});

export const createEnvironmentMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (name: string) =>
      await apiClient.post<Environment>(
        PlatformEndpoints.ENVIRONMENTS(workspaceId),
        { name },
      ),
  });

export const deleteEnvironmentMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (environmentId: string) =>
      await apiClient.delete(
        PlatformEndpoints.ENVIRONMENT(workspaceId, environmentId),
      ),
  });

export const createProjectMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (input: {
      name: string;
      description?: string;
      products: Product[];
    }) =>
      await apiClient.post<Project>(
        PlatformEndpoints.PROJECTS(workspaceId),
        input,
      ),
  });

export const updateProjectProductsMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async ({
      projectId,
      products,
    }: {
      projectId: string;
      products: Product[];
    }) =>
      await apiClient.patch<Project>(
        PlatformEndpoints.PROJECT(workspaceId, projectId),
        { products },
      ),
  });

export const deleteProjectMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (projectId: string) =>
      await apiClient.delete(PlatformEndpoints.PROJECT(workspaceId, projectId)),
  });

export const mintKeyMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async ({
      projectId,
      environmentId,
    }: {
      projectId: string;
      environmentId: string;
    }) =>
      await apiClient.post<MintedKey>(
        PlatformEndpoints.MINT_KEY(workspaceId, projectId, environmentId),
        {},
      ),
  });

export const revokeKeyMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async ({
      projectId,
      keyId,
    }: {
      projectId: string;
      keyId: string;
    }) =>
      await apiClient.delete(
        PlatformEndpoints.REVOKE_KEY(workspaceId, projectId, keyId),
      ),
  });

export const inviteMemberMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (input: { email: string; role: string }) =>
      await apiClient.post<Invitation>(
        PlatformEndpoints.INVITATIONS(workspaceId),
        input,
      ),
  });

export const revokeInvitationMutation = (workspaceId: string) =>
  mutationOptions({
    mutationFn: async (invitationId: string) =>
      await apiClient.delete(
        PlatformEndpoints.INVITATION(workspaceId, invitationId),
      ),
  });
