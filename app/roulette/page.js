"use client";

import { useState, useEffect } from "react";
import RoulettePageContent from "@/components/RoulettePageContent";

export default function RoulettePage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        setMenuItems(data.menuItems || []);
      } catch (error) {
        console.error("메뉴를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
  }, []);

  if (loading) return <div className="loading">메뉴를 불러오는 중...</div>;

  return <RoulettePageContent menuItems={menuItems} />;
}
