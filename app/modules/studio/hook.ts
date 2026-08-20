import { useAuth } from "@operonstudio/auth";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SERVICE_CATEGORIES } from "./data";

export const useStudioPage = () => {
  const { token, isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate({ to: "/login" });
    }
  }, [isLoading, isLoggedIn, navigate]);

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

  const buildHref = (baseHref: string): string => {
    if (!token) return baseHref;
    try {
      const url = new URL(baseHref);
      url.searchParams.set("token", token);
      return url.toString();
    } catch {
      // Relative URL fallback
      const sep = baseHref.includes("?") ? "&" : "?";
      return `${baseHref}${sep}token=${encodeURIComponent(token)}`;
    }
  };

  return {
    isLoading,
    isLoggedIn,
    searchQuery,
    setSearchQuery,
    filteredCategories,
    buildHref,
  };
};
