"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// 가격 포맷팅 함수
function formatPrice(price) {
  if (!price) return "가격 정보 없음";
  return `${price}원`;
}

export function RouletteContent() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("데이터를 불러오는데 실패했습니다");
        }
        const products = await response.json();

        // 데이터 유효성 검사
        if (!Array.isArray(products) || products.length === 0) {
          throw new Error("유효한 메뉴 데이터가 없습니다");
        }

        // 24개의 랜덤 제품 선택
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        const selectedProducts = shuffled.slice(0, 24).map((product) => ({
          ...product,
          상품명: product.상품명?.trim() || "상품명 없음",
          가격: formatPrice(product.가격),
          이미지URL: product.이미지URL || null,
        }));

        setMenuItems(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // 로딩 중이거나 에러 발생 시 처리
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold">
          메뉴를 불러오는 중...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500 font-bold">에러: {error}</div>
      </div>
    );
  }

  // menuItems가 유효한지 확인
  if (!Array.isArray(menuItems) || menuItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500 font-bold">
          메뉴 데이터가 없습니다.
        </div>
      </div>
    );
  }

  const handleRouletteComplete = (item) => {
    setSelectedMenu(item);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#6366F1] mb-12">
          오늘의 메뉴 추천
        </h1>
        <p className="text-center text-gray-600 mb-8">
          룰렛을 돌려 오늘의 메뉴를 추천받아보세요!
        </p>

        <div className="flex flex-col items-center">
          <Roulette items={menuItems} onComplete={handleRouletteComplete} />

          {selectedMenu && (
            <div className="mt-16 w-full max-w-md bg-white rounded-3xl shadow-lg p-8 relative z-10">
              <h2 className="text-2xl font-bold text-center text-[#6366F1] mb-6">
                추천 메뉴
              </h2>
              <div className="flex flex-col items-center">
                {selectedMenu.이미지URL && (
                  <div className="relative w-80 h-80 mb-6 bg-white overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={selectedMenu.이미지URL}
                      alt={selectedMenu.상품명}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 320px) 100vw"
                      priority
                      unoptimized
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 text-center px-4 w-full">
                  {selectedMenu.상품명}
                </h3>
                <p className="text-[#6366F1] text-2xl font-bold">
                  {selectedMenu.가격}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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
      ctx.fillStyle = index % 2 === 0 ? "#6366F1" : "#818CF8";
      ctx.fill();

      // 텍스트 추가 - 개선된 텍스트 렌더링
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerItem / 2);

      // 텍스트 스타일 설정
      ctx.fillStyle = "white";
      ctx.font = "bold 13px Pretendard";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      // 긴 텍스트 처리
      let displayText = item.상품명 || "";
      if (displayText.length > 10) {
        displayText = displayText.slice(0, 10) + "..";
      }

      // 텍스트 그리기
      ctx.fillText(displayText, radius - 25, 0);

      ctx.restore();
    });

    // 중앙 원 그리기
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#4F46E5";
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
      const currentDegree = startDegree + randomDegree * easeOut(progress);

      setDegree(currentDegree);
      if (canvasRef.current) {
        canvasRef.current.style.transform = `rotate(${-currentDegree}deg)`;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setRotating(false);
        // 수정된 선택 로직
        const finalRotation = ((-currentDegree % 360) + 360) % 360;
        const itemAngle = 360 / items.length;
        // 화살표가 가리키는 항목을 정확히 선택 (12시 방향 기준)
        const selectedIndex =
          (items.length - Math.floor(finalRotation / itemAngle)) % items.length;
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
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 
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
        {rotating ? "룰렛 돌아가는 중..." : "룰렛 돌리기"}
      </button>
    </div>
  );
}
