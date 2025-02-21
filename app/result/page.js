"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Roulette from "@/components/Roulette";

export default function Result() {
  const [result, setResult] = useState(null);
  const [personality, setPersonality] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [showRoulette, setShowRoulette] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const resultType = searchParams.get("type");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 결과 데이터 가져오기
        const resultResponse = await fetch(`/api/results?type=${resultType}`);
        const resultData = await resultResponse.json();

        // 성향 데이터 가져오기
        const personalityResponse = await fetch("/api/personalities");
        const personalityData = await personalityResponse.json();

        // 메뉴 데이터 가져오기
        const menuResponse = await fetch("/api/menu");
        const menuData = await menuResponse.json();

        setResult(resultData.result);
        setPersonality(personalityData.personalities[resultType]);
        setMenuItems(menuData.menuItems);
        setLoading(false);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      }
    };

    if (resultType) {
      fetchData();
    }
  }, [resultType]);

  const handleRouletteComplete = (item) => {
    console.log("선택된 메뉴:", item);
  };

  if (loading) return <div className="loading">결과를 분석중...</div>;

  return (
    <div className="result_container">
      <h1 className="result_title bounce">{result.title}</h1>

      <div className="result_card fade_in">
        <p className="result_description">{result.description}</p>

        <h2 className="recommendations_title">당신을 위한 추천 꿀조합</h2>

        <div className="recommendations_grid">
          {result.recommendations.map((rec, index) => (
            <div key={index} className="recommendation_card">
              <h3 className="recommendation_title">{rec.name}</h3>
              <p className="recommendation_description">{rec.description}</p>
            </div>
          ))}
        </div>

        <div className="roulette_section">
          <h3 className="roulette_title">오늘의 랜덤 메뉴 추천</h3>
          {showRoulette ? (
            <Roulette items={menuItems} onComplete={handleRouletteComplete} />
          ) : (
            <button className="button" onClick={() => setShowRoulette(true)}>
              랜덤 메뉴 뽑기
            </button>
          )}
        </div>
      </div>

      <Link href="/" className="button">
        다시 테스트하기
      </Link>
    </div>
  );
}
