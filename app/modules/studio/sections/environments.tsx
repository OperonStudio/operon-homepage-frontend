import { Box, Button, Input } from "@operonstudio/ui";
import { useState } from "react";
import { usePlatform } from "../platform/hooks";
import { Chip, PageHead, Row, Table } from "../platform/parts";
import * as classes from "../platform/style";

const COLUMNS = "1.4fr 1.4fr auto";

export const StudioEnvironments = () => {
  const platform = usePlatform();
  const [name, setName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const create = () => {
    if (!name.trim()) return;
    platform.createEnvironment(name.trim());
    setName("");
    setIsAdding(false);
  };

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title="Environments"
        subtitle="Each gets its own API key. Promoting means handing your build the next one's key."
        action={
          <Button size="sm" onClick={() => setIsAdding((open) => !open)}>
            {isAdding ? "Cancel" : "New environment"}
          </Button>
        }
      />

      <Table
        columns={COLUMNS}
        headers={["Name", "ID", ""]}
        empty="No environments yet. Add one before issuing keys."
        isEmpty={platform.environments.length === 0 && !isAdding}
        footer={
          isAdding && (
            <>
              <Input
                placeholder="production"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && create()}
                style={{ minWidth: "200px" }}
              />
              <Button
                size="sm"
                disabled={!name.trim() || platform.isBusy}
                onClick={create}
              >
                Create
              </Button>
            </>
          )
        }
      >
        {platform.environments.map((environment) => (
          <Row key={environment.id} columns={COLUMNS}>
            <Box {...classes.cellPrimaryStyle}>
              {environment.name}
              {environment.id === platform.environmentId && (
                <span style={{ marginLeft: 8 }}>
                  <Chip label="selected" on />
                </span>
              )}
            </Box>
            <Box {...classes.monoStyle}>{environment.id}</Box>
            <Box {...classes.actionsCellStyle}>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete "${environment.name}"? Content published to it and its keys stop working.`,
                    )
                  ) {
                    platform.deleteEnvironment(environment.id);
                  }
                }}
              >
                Delete
              </Button>
            </Box>
          </Row>
        ))}
      </Table>
    </Box>
  );
};
