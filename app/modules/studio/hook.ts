import { useMemo, useState } from "react";
import { SERVICE_CATEGORIES } from "./data";

export const useStudioPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SERVICE_CATEGORIES;
    const q = searchQuery.toLowerCase();
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      services: cat.services.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.services.length > 0);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCategories,
  };
};
