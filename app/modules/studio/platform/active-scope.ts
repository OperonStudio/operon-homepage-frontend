/**
 * The workspace and environment Studio is currently pointed at.
 *
 * It lives outside React because the sidebar switcher and the section being
 * viewed are different components calling the same hook. With the selection in
 * component state each of them held its own copy, so switching workspace in the
 * sidebar moved the sidebar and left the table underneath showing the previous
 * one's rows.
 *
 * The keys are the ones the product consoles use, so a choice made here is the
 * one Analytics and Compose open with.
 */
const KEYS = {
  workspace: "operon_active_workspace_id",
  environment: "operon_active_environment_id",
} as const;

type Level = keyof typeof KEYS;

const listeners = new Set<() => void>();

function read(level: Level): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(KEYS[level]) ?? "";
  } catch {
    // Private mode denies storage. The session still works; only the choice
    // fails to survive a reload.
    return "";
  }
}

function write(level: Level, value: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEYS[level], value);
  } catch {
    // As above: losing persistence must not break the switch itself.
  }
  for (const listener of listeners) listener();
}

export interface ActiveScope {
  workspaceId: string;
  environmentId: string;
}

const EMPTY: ActiveScope = { workspaceId: "", environmentId: "" };

// useSyncExternalStore compares by reference, so an unchanged scope has to
// return the same object or every render looks like a change.
let snapshot: ActiveScope = EMPTY;

export function getActiveScope(): ActiveScope {
  const next = {
    workspaceId: read("workspace"),
    environmentId: read("environment"),
  };
  if (
    next.workspaceId !== snapshot.workspaceId ||
    next.environmentId !== snapshot.environmentId
  ) {
    snapshot = next;
  }
  return snapshot;
}

/** The server has no localStorage, so it renders with nothing selected. */
export const getServerScope = () => EMPTY;

export function subscribeToScope(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const setActiveWorkspaceId = (id: string) => write("workspace", id);
export const setActiveEnvironmentId = (id: string) => write("environment", id);
