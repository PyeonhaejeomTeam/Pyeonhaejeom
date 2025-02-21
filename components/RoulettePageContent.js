"use client";

import { useState } from "react";
import Roulette from "./Roulette";

export default function RoulettePageContent({ menuItems = [] }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  // menuItems가 유효한지 확인
  if (!Array.isArray(menuItems) || menuItems.length === 0) {
    return <div className="loading">메뉴를 불러오는 중...</div>;
  }

  const handleRouletteComplete = (item) => {
    setSelectedMenu(item);
  };

  return (
    <div className="roulette_page">
      <div className="roulette_header">
        <h1 className="roulette_title">오늘의 메뉴 추천</h1>
        <p className="roulette_description">
          룰렛을 돌려 오늘의 메뉴를 추천받아보세요!
        </p>
      </div>

      <div className="roulette_main">
        <Roulette items={menuItems} onComplete={handleRouletteComplete} />
        
        {selectedMenu && (
          <div className="selected_menu">
            <h2 className="selected_menu_title">추천 메뉴</h2>
            <div className="selected_menu_card">
              <h3 className="selected_menu_name">{selectedMenu.name}</h3>
              <p className="selected_menu_description">{selectedMenu.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 