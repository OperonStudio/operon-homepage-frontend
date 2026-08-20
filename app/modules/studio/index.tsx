import { Search } from "@operonstudio/icons";
import { Box } from "@operonstudio/ui";
import { StudioCard } from "./components";
import { useStudioPage } from "./hook";
import * as classes from "./style";

export const StudioPage = () => {
  const {
    isLoading,
    isLoggedIn,
    searchQuery,
    setSearchQuery,
    filteredCategories,
    buildHref,
  } = useStudioPage();

  if (isLoading || !isLoggedIn) {
    return <Box style={{ padding: "40px", textAlign: "center" }}>Loading…</Box>;
  }

  return (
    <Box {...classes.studioContainerStyle}>
      <Box {...classes.studioInnerStyle}>
        <Box {...classes.studioHeaderStyle}>
          <span {...classes.studioEyebrowStyle}>Console Directory</span>
          <Box {...classes.studioTitleStyle}>Operon Studio</Box>
          <Box {...classes.studioSubtitleStyle}>
            Select a service to manage your application infrastructure and
            workflows
          </Box>
          <Box {...classes.searchContainerStyle}>
            <Box {...classes.searchIconStyle}>
              <Search size={14} />
            </Box>
            <input
              {...classes.searchInputStyle}
              type="text"
              placeholder="Search services…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search services"
            />
          </Box>
        </Box>

        {filteredCategories.length === 0 && (
          <Box {...classes.noResultsStyle}>
            No services match &ldquo;{searchQuery}&rdquo;
          </Box>
        )}

        {filteredCategories.map((category) => (
          <Box key={category.title} {...classes.studioCategoryBlockStyle}>
            <Box {...classes.studioCategoryRailStyle}>
              <span {...classes.studioCategoryLabelStyle}>
                {category.title}
              </span>
              <span {...classes.studioCategoryLineStyle} aria-hidden="true" />
            </Box>
            <Box {...classes.studioGridStyle}>
              {category.services.map((service) => (
                <StudioCard
                  key={service.name}
                  service={service}
                  href={buildHref(service.href)}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
