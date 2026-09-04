import { Box } from "@operonstudio/ui";
import { usePlatform } from "../platform/hooks";
import { Chip, PageHead, Stat, Table } from "../platform/parts";
import * as classes from "../platform/style";

const COLUMNS = "1.6fr 1fr 1fr";

export const StudioOverview = () => {
  const platform = usePlatform();
  const workspace = platform.workspaces.find(
    (w) => w.id === platform.workspaceId,
  );

  const pending = platform.invitations.length;

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title={workspace?.name ?? "Studio"}
        subtitle="Workspace overview"
      />

      <Box {...classes.statsRowStyle}>
        <Stat label="Projects" value={platform.projects.length} />
        <Stat label="Environments" value={platform.environments.length} />
        <Stat label="Members" value={platform.members.length} />
        <Stat label="Pending invites" value={pending} />
      </Box>

      <Table
        columns={COLUMNS}
        headers={["Project", "Products", "Created"]}
        empty="No projects yet."
        isEmpty={platform.projects.length === 0}
      >
        {platform.projects.map((project) => (
          <Box
            key={project.id}
            {...classes.tableRowStyle}
            style={{
              ...classes.tableRowStyle.style,
              gridTemplateColumns: COLUMNS,
            }}
          >
            <Box {...classes.cellPrimaryStyle}>{project.name}</Box>
            <Box {...classes.chipRowStyle}>
              {(project.products ?? ["compose", "analytics", "codeblocks"]).map(
                (product) => (
                  <Chip key={product} label={product} on />
                ),
              )}
            </Box>
            <Box {...classes.cellMutedStyle}>
              {new Date(project.createdAt).toLocaleDateString()}
            </Box>
          </Box>
        ))}
      </Table>
    </Box>
  );
};
