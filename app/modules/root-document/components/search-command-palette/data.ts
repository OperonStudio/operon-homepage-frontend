interface SearchResult {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
}
export const SEARCH_DATABASE: SearchResult[] = [
  {
    id: "compose-collections",
    category: "Compose",
    title: "Collections & Dynamic Schemas",
    description: "Manage structured data models without frontend releases.",
    href: "/studio",
  },
  {
    id: "compose-rules",
    category: "Compose",
    title: "Rules Engine",
    description: "Visual conditional logic and dynamic business rules.",
    href: "/studio",
  },
  {
    id: "codeblocks-flow",
    category: "Codeblocks",
    title: "Visual Flow Builder",
    description: "Orchestrate Source, Pipe, and Sink backend nodes.",
    href: "/studio",
  },
  {
    id: "codeblocks-fn",
    category: "Codeblocks",
    title: "Serverless Codeblocks",
    description: "Write and execute isolated API script modules.",
    href: "/studio",
  },
  {
    id: "analytics-tagging",
    category: "Analytics",
    title: "Visual Event Tagging",
    description: "Click live DOM elements to bind tracking events.",
    href: "/studio",
  },
  {
    id: "docs-api",
    category: "Documentation",
    title: "REST & GraphQL API Reference",
    description: "Authentication, endpoints, and SDK usage guide.",
    href: "/studio",
  },
];
