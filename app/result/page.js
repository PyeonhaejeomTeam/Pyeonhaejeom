"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { personalities } from "@/data/personalities";
import Roulette from "@/components/Roulette";

export default function Result() {
  const [result, setResult] = useState(null);
  const [showRoulette, setShowRoulette] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // 실제로는 answers를 분석하여 성향을 결정하는 로직이 필요합니다
    const personalityType = "창의적인 미식가";
    setResult(personalities[personalityType]);
  }, []);

  const rouletteItems = [
    { text: "불닭볶음면 + 치즈", value: "spicy" },
    { text: "삼각김밥 + 컵라면", value: "classic" },
    { text: "샌드위치 + 아이스커피", value: "fresh" },
    { text: "도시락 + 사이다", value: "healthy" },
    { text: "핫도그 + 초코우유", value: "sweet" },
    { text: "김밥 + 바나나우유", value: "light" },
  ];

  const handleRouletteComplete = (item) => {
    // 룰렛 결과 처리
    console.log("선택된 메뉴:", item);
  };

  if (!result) return <div className="loading">분석중...</div>;

  return (
    <div className="result-container">
      <h1 className="result-title bounce">
        당신은 "{result.description.split(".")[0]}"
      </h1>

      <div className="result-card fade-in">
        <p className="result-description">{result.description}</p>

        <h2 className="recommendations-title">당신을 위한 추천 꿀조합</h2>

        <div className="recommendations-grid">
          {result.recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <h3 className="recommendation-title">{rec.name}</h3>
              <p className="recommendation-description">{rec.description}</p>
            </div>
          ))}
        </div>

        <div className="roulette-section">
          <h3 className="roulette-title">오늘의 랜덤 메뉴 추천</h3>
          {showRoulette ? (
            <Roulette
              items={rouletteItems}
              onComplete={handleRouletteComplete}
            />
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
