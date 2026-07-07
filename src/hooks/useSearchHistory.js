import { useState, useEffect } from "react";

export const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setHistory(saved);
  }, []);

  const addSearch = (username) => {
    setHistory((prev) => {
      const updated = [username, ...prev.filter((u) => u !== username)].slice(0,5);
      localStorage.setItem("searchHistory", JSON.stringify(updated));

      return updated;
    });
  };
  return {
    history,
    addSearch,
  };
};