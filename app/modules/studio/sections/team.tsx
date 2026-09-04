import { Box, Button, Input, Select, toast } from "@operonstudio/ui";
import { useState } from "react";
import { usePlatform } from "../platform/hooks";
import { Chip, PageHead, Row, Table } from "../platform/parts";
import * as classes from "../platform/style";

const COLUMNS = "1.4fr 1.4fr 0.6fr auto";

const ROLES = [
  { label: "Viewer", value: "viewer" },
  { label: "Editor", value: "editor" },
  { label: "Owner", value: "owner" },
];

export const StudioTeam = () => {
  const platform = usePlatform();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("editor");
  const [isInviting, setIsInviting] = useState(false);

  const invite = () => {
    if (!email.includes("@")) {
      toast.error("That does not look like an email address");
      return;
    }
    platform.inviteMember(email.trim(), role);
    setEmail("");
    setIsInviting(false);
  };

  const rows = [
    ...platform.members.map((member) => ({
      key: member.id ?? member.userId,
      name: member.name || member.email,
      email: member.email,
      role: member.role,
      pending: false,
      onRevoke: undefined as (() => void) | undefined,
    })),
    ...platform.invitations.map((invitation) => ({
      key: invitation.id,
      name: invitation.email,
      email: invitation.email,
      role: invitation.role,
      pending: true,
      onRevoke: () => platform.revokeInvitation(invitation.id),
    })),
  ];

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title="Team"
        subtitle="Workspace membership. It applies to every product."
        action={
          <Button size="sm" onClick={() => setIsInviting((open) => !open)}>
            {isInviting ? "Cancel" : "Invite"}
          </Button>
        }
      />

      <Table
        columns={COLUMNS}
        headers={["Name", "Email", "Role", ""]}
        empty="No members yet."
        isEmpty={rows.length === 0 && !isInviting}
        footer={
          isInviting && (
            <>
              <Input
                type="email"
                placeholder="teammate@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && invite()}
                style={{ minWidth: "220px" }}
              />
              <Box style={{ minWidth: "130px" }}>
                <Select
                  aria-label="Role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  options={ROLES}
                />
              </Box>
              <Button size="sm" disabled={!email.trim()} onClick={invite}>
                Send
              </Button>
            </>
          )
        }
      >
        {rows.map((row) => (
          <Row key={row.key} columns={COLUMNS}>
            <Box {...classes.cellPrimaryStyle}>
              {row.name}
              {row.pending && (
                <span style={{ marginLeft: 8 }}>
                  <Chip label="invited" />
                </span>
              )}
            </Box>
            <Box {...classes.cellMutedStyle}>{row.email}</Box>
            <Box {...classes.cellMutedStyle}>{row.role}</Box>
            <Box {...classes.actionsCellStyle}>
              {row.onRevoke && (
                <Button size="sm" variant="ghost" onClick={row.onRevoke}>
                  Revoke
                </Button>
              )}
            </Box>
          </Row>
        ))}
      </Table>
    </Box>
  );
};
