import { Box, Button, Checkbox, Input } from "@operonstudio/ui";
import { useState } from "react";
import { PRODUCTS, type Product } from "../platform/api";
import { usePlatform } from "../platform/hooks";
import { Chip, PageHead, Row, Table } from "../platform/parts";
import * as classes from "../platform/style";

const COLUMNS = "1.4fr 1.4fr auto";
const ALL_PRODUCTS = PRODUCTS.map((p) => p.value);

export const StudioProjects = () => {
  const platform = usePlatform();
  const [name, setName] = useState("");
  const [products, setProducts] = useState<Product[]>(["compose", "analytics"]);
  const [isAdding, setIsAdding] = useState(false);

  const toggleDraft = (product: Product) =>
    setProducts((current) =>
      current.includes(product)
        ? current.filter((p) => p !== product)
        : [...current, product],
    );

  const create = () => {
    if (!name.trim() || products.length === 0) return;
    platform.createProject(name.trim(), products);
    setName("");
    setIsAdding(false);
  };

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title="Projects"
        subtitle="One per app. A project spans every environment."
        action={
          <Button size="sm" onClick={() => setIsAdding((open) => !open)}>
            {isAdding ? "Cancel" : "New project"}
          </Button>
        }
      />

      <Table
        columns={COLUMNS}
        headers={["Name", "Products", ""]}
        empty="No projects yet."
        isEmpty={platform.projects.length === 0 && !isAdding}
        footer={
          isAdding && (
            <>
              <Input
                placeholder="Project name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && create()}
                style={{ minWidth: "200px" }}
              />
              {PRODUCTS.map((product) => (
                <Checkbox
                  key={product.value}
                  label={product.label}
                  checked={products.includes(product.value)}
                  onChange={() => toggleDraft(product.value)}
                />
              ))}
              <Button
                size="sm"
                disabled={
                  !name.trim() || products.length === 0 || platform.isBusy
                }
                onClick={create}
              >
                Create
              </Button>
            </>
          )
        }
      >
        {platform.projects.map((project) => {
          // An empty list means every product rather than none: projects
          // predate the field, and hiding those from the console that made
          // them would read as data loss.
          const enabled = project.products ?? ALL_PRODUCTS;
          return (
            <Row key={project.id} columns={COLUMNS}>
              <Box>
                <Box {...classes.cellPrimaryStyle}>{project.name}</Box>
                <Box {...classes.monoStyle}>{project.id}</Box>
              </Box>
              <Box {...classes.chipRowStyle}>
                {PRODUCTS.map((product) => {
                  const on = enabled.includes(product.value);
                  return (
                    <Chip
                      key={product.value}
                      label={product.label}
                      on={on}
                      title={`${on ? "Disable" : "Enable"} ${product.label}`}
                      onClick={() =>
                        platform.setProjectProducts(
                          project.id,
                          on
                            ? enabled.filter((p) => p !== product.value)
                            : [...enabled, product.value],
                        )
                      }
                    />
                  );
                })}
              </Box>
              <Box {...classes.actionsCellStyle}>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Delete "${project.name}"? Its content, rules and trackers go with it.`,
                      )
                    ) {
                      platform.deleteProject(project.id);
                    }
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Row>
          );
        })}
      </Table>
    </Box>
  );
};
