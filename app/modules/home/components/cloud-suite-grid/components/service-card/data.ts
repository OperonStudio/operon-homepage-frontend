import type { IconProps } from "@operonstudio/icons";

export interface CloudService {
  id: string;
  name: string;
  category: "Compose" | "Codeblocks" | "Analytics";
  description: string;
  icon: React.ComponentType<IconProps>;
  badge?: string;
  href: string;
}
