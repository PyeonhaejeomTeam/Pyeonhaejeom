"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// 클라이언트 사이드에서만 렌더링되도록 dynamic import 사용
const Roulette = dynamic(() => import("@/components/Roulette"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function RoulettePage() {
  const [items, setItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRouletteItems = async () => {
      try {
        const response = await fetch('/api/roulette');
        const data = await response.json();
        setItems(data.items);
        setLoading(false);
      } catch (error) {
        console.error('룰렛 아이템을 불러오는데 실패했습니다:', error);
      }
    };

    fetchRouletteItems();
  }, []);

  const handleRouletteComplete = (item) => {
    setSelectedMenu(item);
  };

  if (loading) return <div className="loading">메뉴를 불러오는 중...</div>;

  return (
    <div className="roulette_page">
      <div className="roulette_header">
        <h1 className="roulette_title">오늘 뭐 먹지?</h1>
        <p className="roulette_description">결정장애 타파! 랜덤 메뉴 추천</p>
      </div>

      <div className="roulette_main">
        <Roulette items={items} onComplete={handleRouletteComplete} />

        {selectedMenu && (
          <div className="selected_menu fade_in">
            <h2 className="selected_menu_title">추천 메뉴</h2>
            <div className="selected_menu_card">
              <h3 className="selected_menu_name">{selectedMenu.text}</h3>
              <div className="selected_menu_info">
                <span className="menu_category">{selectedMenu.category}</span>
                <span className="menu_price">{selectedMenu.price}</span>
                {selectedMenu.spicyLevel && (
                  <span className="menu_spicy">{selectedMenu.spicyLevel}</span>
                )}
              </div>
              <p className="selected_menu_description">
                {selectedMenu.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="roulette_actions">
        <Link href="/" className="button button_secondary">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}
