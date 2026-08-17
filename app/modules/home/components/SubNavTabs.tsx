import { Box } from "@operon/ui";
import { useEffect, useState } from "react";
import * as classes from "../style";

interface TabItem {
  id: string;
  label: string;
  targetId: string;
}

const TABS: TabItem[] = [
  { id: "whats-new", label: "Featured news", targetId: "whats-new" },
  { id: "products-services", label: "Products & services", targetId: "products-services" },
  { id: "security", label: "Security & compliance", targetId: "security" },
];

export const SubNavTabs = () => {
  const [activeTab, setActiveTab] = useState("whats-new");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const tab of TABS) {
        const el = document.getElementById(tab.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string, tabId: string) => {
    setActiveTab(tabId);
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box {...classes.subNavContainerStyle} role="navigation" aria-label="Page Sections">
      <Box {...classes.subNavInnerStyle}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-current={activeTab === tab.id ? "true" : undefined}
            onClick={() => scrollToSection(tab.targetId, tab.id)}
            {...classes.subNavTabStyle}
          >
            {tab.label}
          </button>
        ))}
      </Box>
    </Box>
  );
};
