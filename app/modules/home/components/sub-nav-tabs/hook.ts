import { useEffect, useState } from "react";
import { TABS } from "./data";

export const useSubNavTabs = () => {
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
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return {
    activeTab,
    tabs: TABS,
    scrollToSection,
  };
};
