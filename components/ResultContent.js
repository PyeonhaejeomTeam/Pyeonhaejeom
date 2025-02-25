"use client";

import { useState } from "react";
import Link from "next/link";
import Roulette from "@/components/Roulette";
import ShareButtons from "@/components/ShareButtons";
import Image from "next/image";

export default function ResultContent({ result, personality, menuItems }) {
  const [showRoulette, setShowRoulette] = useState(false);

  const handleRouletteComplete = (item) => {
    console.log("선택된 메뉴:", item);
  };

  if (!result) return <div className="loading">결과를 분석중...</div>;

  return (
    <div className="result_container">
      <h1 className="text-3xl font-bold text-center mb-8">{result.title}</h1>
      <p className="text-lg text-center mb-12">{result.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {result.recommendations.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-purple-600 font-bold">{item.price}</p>
            </div>
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

      <div className="share_section fade_in">
        <ShareButtons testResult={result} />
      </div>
    </div>
  );
}
