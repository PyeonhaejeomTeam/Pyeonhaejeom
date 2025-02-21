"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ResultContent from "@/components/ResultContent";

export default function Result() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    async function fetchData() {
      try {
        const [resultRes, personalityRes, menuRes] = await Promise.all([
          fetch(`/api/results?type=${type}`),
          fetch(`/api/personalities`),
          fetch(`/api/menu`),
        ]);

        const resultData = await resultRes.json();
        const personalityData = await personalityRes.json();
        const menuData = await menuRes.json();

        setData({
          result: resultData.result,
          personality: personalityData.personalities[type],
          menuItems: menuData.menuItems,
        });
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    }

    if (type) {
      fetchData();
    }
  }, [type]);

  if (loading) return <div className="loading">결과를 분석중...</div>;
  if (!data)
    return <div className="loading">데이터를 불러오는데 실패했습니다</div>;

  return <ResultContent {...data} />;
}
