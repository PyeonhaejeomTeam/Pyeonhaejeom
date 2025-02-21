"use client";

import { useState } from "react";

export default function Roulette({ items = [], onComplete }) {
  const [degree, setDegree] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // items가 배열이 아니거나 비어있으면 early return
  if (!Array.isArray(items) || items.length === 0) {
    return <div>메뉴를 불러오는 중...</div>;
  }

  const startRotation = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomDegree = Math.floor(Math.random() * 360) + 1800; // 최소 5바퀴
    setDegree((prevDegree) => prevDegree + randomDegree);

    // 결과 계산
    setTimeout(() => {
      const selected = items[Math.floor(Math.random() * items.length)];
      setIsSpinning(false);
      if (onComplete) onComplete(selected);
    }, 3000);
  };

  return (
    <div className="roulette_container">
      <div
        className="roulette_wheel"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="roulette_item"
            style={{
              transform: `rotate(${(360 / items.length) * index}deg)`,
              backgroundColor: `hsl(${(360 / items.length) * index}, 70%, 90%)`,
              clipPath: `polygon(0 0, 100% 0, 100% 100%)`,
            }}
          >
            <span className="roulette_text">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="roulette_center"></div>
      <button
        className="roulette_button"
        onClick={startRotation}
        disabled={isSpinning}
      >
        {isSpinning ? "돌아가는 중..." : "룰렛 돌리기"}
      </button>
    </div>
  );
}
