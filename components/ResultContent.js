"use client";

import { useState } from "react";
import Link from "next/link";
import Roulette from "@/components/Roulette";
import ShareButtons from "@/components/ShareButtons";

export default function ResultContent({ result, personality, menuItems }) {
  const [showRoulette, setShowRoulette] = useState(false);

  const handleRouletteComplete = (item) => {
    console.log("선택된 메뉴:", item);
  };

  if (!result) return <div className="loading">결과를 분석중...</div>;

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
            <div className="button_group">
              <button className="button" onClick={() => setShowRoulette(true)}>
                랜덤 메뉴 뽑기
              </button>
              <Link href="/" className="button">
                다시 테스트하기
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="share_section fade_in">
        <ShareButtons testResult={result} />
      </div>
   
    </div>
  );
}
