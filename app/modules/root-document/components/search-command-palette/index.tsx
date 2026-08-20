import { Search, X } from "@operonstudio/icons";
import { Box, Button, Input } from "@operonstudio/ui";
import { useSearchCommandPalette } from "./hook";
import * as classes from "./style";

interface SearchCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchCommandPalette = ({
  isOpen,
  onClose,
}: SearchCommandPaletteProps) => {
  const {
    query,
    selectedIndex,
    filteredResults,
    inputRef,
    handleQueryChange,
    handleSelectResult,
    handleClose,
  } = useSearchCommandPalette({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <Box
      {...classes.modalOverlayStyle}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <Box
        {...classes.modalContainerStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <Box {...classes.searchInputHeaderStyle}>
          <Input
            ref={inputRef}
            fullWidth
            placeholder="Type a command or search services..."
            value={query}
            onChange={handleQueryChange}
            startIcon={<Search size={18} />}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            aria-label="Close modal"
            style={{ padding: "6px", minWidth: "auto", flexShrink: 0 }}
          >
            <X size={16} />
          </Button>
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
                onClick={() => handleSelectResult(item.href)}
              >
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
