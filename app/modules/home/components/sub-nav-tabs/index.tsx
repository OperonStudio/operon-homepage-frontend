import { Box, Tabs } from "@operonstudio/ui";
import { useSubNavTabs } from "./hook";
import * as classes from "./style";

export const SubNavTabs = () => {
  const { activeTab, tabs, scrollToSection } = useSubNavTabs();

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const tabItems = tabs.map((tab) => ({
    // A real button so the section can be reached by keyboard, not only by
    // pointer. It fills the tab so the whole tab stays clickable.
    label: (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          scrollToSection(tab.targetId, tab.id);
        }}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "inline-block",
          width: "100%",
        }}
      >
        {tab.label}
      </button>
    ),
    content: null,
  }));

  return (
    <Box
      {...classes.subNavContainerStyle}
      role="navigation"
      aria-label="Page Sections"
    >
      <Box {...classes.subNavInnerStyle}>
        <Tabs
          key={activeTab}
          tabs={tabItems}
          defaultTab={activeIndex >= 0 ? activeIndex : 0}
        />
      </Box>
    </Box>
  );
};
