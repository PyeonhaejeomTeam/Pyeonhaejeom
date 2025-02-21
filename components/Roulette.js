"use client";

import { useState } from "react";

const Roulette = ({ items, onComplete }) => {
  const [rotating, setRotating] = useState(false);
  const [degree, setDegree] = useState(0);

  const startRotation = () => {
    if (rotating) return;

    setRotating(true);
    const randomDegree = Math.floor(Math.random() * 360) + 1800; // 최소 5바퀴
    setDegree((prevDegree) => prevDegree + randomDegree);

    // 결과 계산
    setTimeout(() => {
      const selected = items[Math.floor(Math.random() * items.length)];
      setRotating(false);
      if (onComplete) onComplete(selected);
    }, 3000);
  };

  return (
    <div className="roulette-container">
      <div
        className="roulette-wheel"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="roulette-item"
            style={{
              transform: `rotate(${(360 / items.length) * index}deg)`,
              backgroundColor: `hsl(${(360 / items.length) * index}, 70%, 90%)`,
              clipPath: `polygon(0 0, 100% 0, 100% 100%)`,
            }}
          >
            <span className="roulette-text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="roulette-center"></div>
      <button
        className="roulette-button"
        onClick={startRotation}
        disabled={rotating}
      >
        {rotating ? "돌아가는 중..." : "룰렛 돌리기"}
      </button>
    </div>
  );
};

export default Roulette;
