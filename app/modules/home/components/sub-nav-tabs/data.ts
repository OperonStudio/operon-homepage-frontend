export interface TabItem {
  id: string;
  label: string;
  targetId: string;
}

export const TABS: TabItem[] = [
  { id: "whats-new", label: "Featured news", targetId: "whats-new" },
  {
    id: "products-services",
    label: "Products & services",
    targetId: "products-services",
  },
  { id: "security", label: "Security & compliance", targetId: "security" },
];
