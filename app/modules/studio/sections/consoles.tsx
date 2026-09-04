import { Search } from "@operonstudio/icons";
import { Box, Input } from "@operonstudio/ui";
import { StudioCard } from "../components";
import { useStudioPage } from "../hook";
import { PageHead } from "../platform/parts";
import * as classes from "../platform/style";
import * as cardClasses from "../style";

/**
 * The product surfaces, as a directory.
 *
 * This was the whole of Studio. It is one section now, because a list of links
 * is not the thing somebody opens Studio to do — administering the workspace
 * is, and that used to be a trip into Compose.
 */
export const StudioConsoles = () => {
  const { searchQuery, setSearchQuery, filteredCategories } = useStudioPage();

  return (
    <Box {...classes.pageStyle}>
      <PageHead
        title="Consoles"
        subtitle="Where each product's own screens live."
        action={
          <Box {...cardClasses.searchContainerStyle}>
            <Box {...cardClasses.searchIconStyle}>
              <Search size={14} />
            </Box>
            <Input
              {...cardClasses.searchInputStyle}
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Search consoles"
            />
          </Box>
        }
      />

      {filteredCategories.length === 0 && (
        <Box {...classes.emptyStyle}>
          Nothing matches &ldquo;{searchQuery}&rdquo;
        </Box>
      )}

      {filteredCategories.map((category) => (
        <Box key={category.title} {...cardClasses.studioCategoryBlockStyle}>
          <Box {...cardClasses.studioCategoryRailStyle}>
            <span {...cardClasses.studioCategoryLabelStyle}>
              {category.title}
            </span>
          </Box>
          <Box {...cardClasses.studioGridStyle}>
            {category.services.map((service) => (
              <StudioCard
                key={service.name}
                service={service}
                href={service.href}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
