import { Command, Search, X } from "@operonstudio/icons";
import { Box } from "@operonstudio/ui";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import * as classes from "../style";

interface SearchResult {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

const SEARCH_DATABASE: SearchResult[] = [
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

interface SearchCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchCommandPalette = ({
  isOpen,
  onClose,
}: SearchCommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredResults = SEARCH_DATABASE.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredResults.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? (filteredResults.length || 1) - 1 : prev - 1
        );
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        navigate({ to: filteredResults[selectedIndex].href });
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, navigate]);

  if (!isOpen) return null;

  return (
    <Box
      {...classes.modalOverlayStyle}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <Box
        {...classes.modalContainerStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <Box {...classes.searchInputHeaderStyle}>
          <Search size={18} color="var(--operon-color-text-muted)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search services..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            {...classes.searchInputStyle}
          />
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--operon-color-text-muted)",
            }}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </Box>

        <Box {...classes.searchResultsListStyle}>
          {filteredResults.length === 0 ? (
            <Box
              style={{
                padding: "24px",
                textAlign: "center",
                color: "var(--operon-color-text-muted)",
                fontSize: "13px",
              }}
            >
              No results found for &ldquo;{query}&rdquo;
            </Box>
          ) : (
            filteredResults.map((item, idx) => (
              <Box
                key={item.id}
                data-active={idx === selectedIndex}
                {...classes.searchResultItemStyle}
                onClick={() => {
                  navigate({ to: item.href });
                  onClose();
                }}
              >
                <Command size={16} color="var(--operon-color-primary)" />
                <Box style={{ flex: 1 }}>
                  <Box {...classes.megaMenuTitleStyle}>
                    {item.title} &middot;{" "}
                    <span style={{ fontWeight: 400, opacity: 0.7 }}>
                      {item.category}
                    </span>
                  </Box>
                  <Box {...classes.megaMenuDescStyle}>{item.description}</Box>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};
