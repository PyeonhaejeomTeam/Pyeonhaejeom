"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Roulette({ items, onComplete }) {
  const [rotating, setRotating] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [degree, setDegree] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawRoulette();
  }, [items]);

  function drawRoulette() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const radius = width / 2 - 20;
    const centerX = width / 2;
    const centerY = height / 2;
    const anglePerItem = (Math.PI * 2) / items.length;

    // 배경 초기화
    ctx.clearRect(0, 0, width, height);

    // 룰렛 그리기
    items.forEach((item, index) => {
      const startAngle = index * anglePerItem;
      const endAngle = startAngle + anglePerItem;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      // 번갈아가며 다른 색상 적용
      ctx.fillStyle = index % 2 === 0 ? '#6366F1' : '#818CF8';
      ctx.fill();

      // 텍스트 추가 - 개선된 텍스트 렌더링
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerItem / 2);
      
      // 텍스트 스타일 설정
      ctx.fillStyle = 'white';
      ctx.font = 'bold 13px Pretendard';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      // 긴 텍스트 처리
      let displayText = item.상품명;
      if (displayText.length > 10) {
        displayText = displayText.slice(0, 10) + '..';
      }

      // 텍스트 그리기
      ctx.fillText(displayText, radius - 25, 0);
      
      ctx.restore();
    });

    // 중앙 원 그리기 (선택사항)
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#4F46E5';
    ctx.fill();
  }

  function spinRoulette() {
    if (rotating) return;

    setRotating(true);
    const randomDegree = Math.floor(Math.random() * 360) + 3600;
    const duration = 5000;
    const startTime = Date.now();
    const startDegree = degree;

    function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const currentDegree = startDegree + (randomDegree * easeOut(progress));
      
      setDegree(currentDegree);
      canvasRef.current.style.transform = `rotate(${-currentDegree}deg)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setRotating(false);
        // 수정된 선택 로직
        const finalRotation = (-currentDegree % 360 + 360) % 360;
        const itemAngle = 360 / items.length;
        // 화살표가 가리키는 항목을 정확히 선택 (12시 방향 기준)
        const selectedIndex = (items.length - Math.floor(finalRotation / itemAngle)) % items.length;
        const selected = items[selectedIndex];
        setSelectedItem(selected);
        onComplete(selected);
      }
    }

    requestAnimationFrame(animate);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 
          border-l-[15px] border-l-transparent
          border-r-[15px] border-r-transparent
          border-t-[30px] border-[#4F46E5]
          z-20" 
        />
        <canvas
          ref={canvasRef}
          width="400"
          height="400"
          className="transition-transform"
        />
      </div>
      <button
        onClick={spinRoulette}
        disabled={rotating}
        className="mt-8 px-8 py-4 bg-[#6366F1] text-white rounded-full text-xl font-bold hover:bg-[#4F46E5] disabled:opacity-50"
      >
        {rotating ? '룰렛 돌아가는 중...' : '룰렛 돌리기'}
      </button>
    </div>
  );
}
