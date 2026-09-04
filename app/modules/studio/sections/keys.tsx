import { Box, Button, Select } from "@operonstudio/ui";
import { useState } from "react";
import type { ApiKey, Project } from "../platform/api";
import { usePlatform } from "../platform/hooks";
import { PageHead, Row, Table } from "../platform/parts";
import * as classes from "../platform/style";

const COLUMNS = "1.2fr 1.3fr 0.8fr auto";

export const StudioKeys = () => {
  const platform = usePlatform();
  const [mintFor, setMintFor] = useState("");
  const environment = platform.environments.find(
    (e) => e.id === platform.environmentId,
  );

  // One row per key, not per project. A project can hold more than one key for
  // an environment while a replacement is rolled out, and grouping them put two
  // Revoke buttons on one line with nothing saying which key each belonged to.
  type KeyRow = { project: Project; key: ApiKey | null };

  const rows: KeyRow[] = platform.projects.flatMap((project): KeyRow[] => {
    const keys =
      platform.keyGroups.find((group) => group.id === project.id)?.keys ?? [];
    if (keys.length === 0) {
      return [{ project, key: null }];
    }
    return keys.map((key) => ({ project, key }));
  });

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title="API keys"
        subtitle={
          environment
            ? `Keys for ${environment.name}. Switch environment in the sidebar.`
            : "Add an environment before issuing keys."
        }
      />

      <Table
        columns={COLUMNS}
        headers={["Project", "Key", "Created", ""]}
        empty="No projects to issue keys for."
        isEmpty={rows.length === 0}
        footer={
          platform.projects.length > 0 && (
            <>
              {/* A project that already has a key still needs a way to be
                  issued another: a rotation runs both until the old one is
                  confirmed dead. */}
              <Box style={{ minWidth: "220px" }}>
                <Select
                  aria-label="Project"
                  value={mintFor || platform.projects[0].id}
                  onChange={(event) => setMintFor(event.target.value)}
                  options={platform.projects.map((project) => ({
                    label: project.name,
                    value: project.id,
                  }))}
                />
              </Box>
              <Button
                size="sm"
                disabled={platform.isBusy || !platform.environmentId}
                onClick={() =>
                  platform.mintKey(mintFor || platform.projects[0].id)
                }
              >
                Issue key
              </Button>
            </>
          )
        }
      >
        {rows.map(({ project, key }) => (
          <Row key={key?.id ?? project.id} columns={COLUMNS}>
            <Box {...classes.cellPrimaryStyle}>{project.name}</Box>

            <Box>
              {key ? (
                <Box {...classes.monoStyle}>{key.prefix}</Box>
              ) : (
                <Box {...classes.cellMutedStyle}>No key</Box>
              )}
            </Box>

            <Box {...classes.cellMutedStyle}>
              {key ? new Date(key.createdAt).toLocaleDateString() : "—"}
            </Box>

            <Box {...classes.actionsCellStyle}>
              {key ? (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Revoke ${key.prefix}? Anything using it stops working immediately.`,
                      )
                    ) {
                      platform.revokeKey(project.id, key.id);
                    }
                  }}
                >
                  Revoke
                </Button>
              ) : (
                <Button
                  size="sm"
                  disabled={platform.isBusy || !platform.environmentId}
                  onClick={() => platform.mintKey(project.id)}
                >
                  Create key
                </Button>
              )}
            </Box>

            {/* The plaintext exists in the mint response and nowhere else, so
                it is shown the moment it arrives and never fetched back. */}
            {key && platform.minted[key.id] && (
              <Box {...classes.secretStyle}>
                {platform.minted[key.id]}
                <Box {...classes.cellMutedStyle} style={{ marginTop: 6 }}>
                  Copy this now. It is stored hashed and never shown again.
                </Box>
              </Box>
            )}
          </Row>
        ))}
      </Table>
    </Box>
  );
};
